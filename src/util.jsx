// Small shared utilities
window.App = window.App || {};

(function () {
  function speak(text, opts = {}) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = opts.rate || 0.85;
    if (opts.voiceURI) {
      const voice = window.speechSynthesis.getVoices().find((v) => v.voiceURI === opts.voiceURI);
      if (voice) utter.voice = voice;
    }
    window.speechSynthesis.speak(utter);
  }

  // English-language voices available on this device. Populated async by the
  // browser, so components should also listen for the voiceschanged event.
  function getEnglishVoices() {
    if (!("speechSynthesis" in window)) return [];
    return window.speechSynthesis.getVoices().filter((v) => v.lang && v.lang.toLowerCase().startsWith("en"));
  }

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // Picks `count` random items from `arr` without replacement.
  function sampleArray(arr, count) {
    return shuffleArray(arr).slice(0, Math.min(count, arr.length));
  }

  // Grammar path levels as a tier sees them. A level may carry a
  // `tiers: [...]` allow-list (e.g. an expert-only stretch level); other tiers
  // never see it. GrammarModule (level list, numbering, "Level N of M") and the
  // home screen's Grammar progress both use these, so the two always agree.
  // Content is read lazily because the content files load after this one.
  const GrammarLevels = {
    isVisible(level, tier) {
      return !level.tiers || level.tiers.includes(tier);
    },
    visibleLevels(path, tier) {
      return path.levels.filter((lv) => GrammarLevels.isVisible(lv, tier));
    },
    // Displayed number of levels[index]: how many visible levels up to and including it.
    levelNumber(levels, index, tier) {
      return levels.slice(0, index + 1).filter((lv) => GrammarLevels.isVisible(lv, tier)).length;
    },
    // Key stored in moduleProgress.grammar.doneLevels when a level is finished.
    doneKey(pathKey, level) {
      return `${pathKey}:${level.id}`;
    },
    // { done, total } over every path level this tier can see.
    progress(tier, doneLevels) {
      const paths = (window.App.Content && window.App.Content.GRAMMAR_PATHS) || [];
      const done = new Set(Array.isArray(doneLevels) ? doneLevels : []);
      let total = 0;
      let finished = 0;
      paths.forEach((p) => {
        GrammarLevels.visibleLevels(p, tier).forEach((lv) => {
          total += 1;
          if (done.has(GrammarLevels.doneKey(p.key, lv))) finished += 1;
        });
      });
      return { done: finished, total };
    },
  };

  // Explorer level, worked out from the lifetime mission count that is already
  // saved (stats.totalMissionsCompleted: +1 each time a module is finished for
  // the day). Nothing about the level is stored, so existing saves and backups
  // get their level straight away and the level can never drift out of sync.
  // Pure: total in, level info out.
  const LEVELS = [
    { name: "Explorer", stamp: "🧭", min: 0 },
    { name: "Scout", stamp: "🔭", min: 15 },
    { name: "Ranger", stamp: "🥾", min: 45 },
    { name: "Navigator", stamp: "🗺️", min: 90 },
    { name: "Captain", stamp: "⚓", min: 150 },
    { name: "Legend", stamp: "👑", min: 240 },
  ];

  // Returns { index, number, name, stamp, min, nextMin, nextName, progress,
  // remaining, isMax }. `progress` is 0..1 within the current level (1 at the
  // top level); `remaining` is missions still needed for the next level (0 at
  // the top, where nextMin and nextName are null). Anything that is not a
  // non-negative number counts as 0; fractions are rounded down.
  function getLevel(total) {
    const n = typeof total === "number" && Number.isFinite(total) && total > 0 ? Math.floor(total) : 0;
    let index = 0;
    for (let i = 0; i < LEVELS.length; i++) if (n >= LEVELS[i].min) index = i;
    const cur = LEVELS[index];
    const next = LEVELS[index + 1] || null;
    return {
      index,
      number: index + 1,
      name: cur.name,
      stamp: cur.stamp,
      min: cur.min,
      nextMin: next ? next.min : null,
      nextName: next ? next.name : null,
      progress: next ? (n - cur.min) / (next.min - cur.min) : 1,
      remaining: next ? next.min - n : 0,
      isMax: !next,
    };
  }

  // Did going from one mission total to another cross into a higher level?
  // Returns null (same level, or a lower total) or { from, to }, the getLevel()
  // results for the old and new total. Skipping several levels at once (a big
  // jump) is one level-up whose `to` is the final level. Bad totals count as 0.
  function levelUpBetween(prevTotal, nextTotal) {
    const from = getLevel(prevTotal);
    const to = getLevel(nextTotal);
    return to.index > from.index ? { from, to } : null;
  }

  // The level-up that the home screen should celebrate next. Held in memory
  // only (never saved), set when a module is finished and read exactly once by
  // the home screen, so a reload, a backup restore or a first load can never
  // replay it.
  let pendingLevelUp = null;
  function setPendingLevelUp(levelUp) {
    pendingLevelUp = levelUp || null;
  }
  function takePendingLevelUp() {
    const p = pendingLevelUp;
    pendingLevelUp = null;
    return p;
  }

  // Numbers behind the Parent Report screen, all pure and read-only: they only
  // look at state.activityLog (see storage.jsx "Activity log") and the existing
  // mistakes data; nothing is written. `today` is a "YYYY-MM-DD" local date.
  const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const ParentReport = {
    // Earliest date in the log, or null when nothing has been tracked yet.
    trackingStart(log) {
      const days = Object.keys(log || {}).filter((d) => window.App.Storage.isValidDateStr(d)).sort();
      return days.length ? days[0] : null;
    },

    // The last 7 days ending today, oldest first. status:
    //   "done"       the day's missions were all done (streak counted)
    //   "played"     something was finished but not the whole day (`played` = how many modules)
    //   "none"       inside the tracked period but nothing finished
    //   "untracked"  before tracking began (not the same as "did nothing")
    weekCells(log, today) {
      const { addDays } = window.App.Storage;
      const start = ParentReport.trackingStart(log);
      const cells = [];
      for (let i = 6; i >= 0; i--) {
        const date = addDays(today, -i);
        const [y, m, d] = date.split("-").map(Number);
        const entry = (log || {})[date];
        let status;
        if (start === null || date < start) status = "untracked";
        else if (entry && entry.dayCompleted) status = "done";
        else if (entry && entry.modules.length > 0) status = "played";
        else status = "none";
        cells.push({
          date,
          weekday: WEEKDAYS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()],
          day: d,
          status,
          played: entry ? entry.modules.length : 0,
          isToday: i === 0,
        });
      }
      return cells;
    },

    // The module(s) finished on the most days in the last 7 (all of them when tied,
    // in module-list order; [] when nothing was finished).
    mostPlayed(log, today) {
      const { addDays, MODULES } = window.App.Storage;
      const counts = {};
      for (let i = 0; i < 7; i++) {
        const entry = (log || {})[addDays(today, -i)];
        if (entry) entry.modules.forEach((k) => { counts[k] = (counts[k] || 0) + 1; });
      }
      const max = Math.max(0, ...Object.values(counts));
      return max === 0 ? [] : MODULES.map((m) => m.key).filter((k) => counts[k] === max);
    },

    // Totals for the last 7 days: modules finished, days with any play, days completed, top module(s).
    weekSummary(log, today) {
      const cells = ParentReport.weekCells(log, today);
      let completions = 0;
      cells.forEach((c) => { completions += c.played; });
      return {
        completions,
        daysPlayed: cells.filter((c) => c.status === "played" || c.status === "done").length,
        daysCompleted: cells.filter((c) => c.status === "done").length,
        topModules: ParentReport.mostPlayed(log, today),
      };
    },

    // Mistakes due for review today, by module (from the "<module>:" start of each
    // notebook key): { total, byModule: [{ module, count }] } in module-list order.
    dueByModule(state, today) {
      const keys = window.App.Mistakes.dueEntries(state, today);
      const counts = {};
      keys.forEach((k) => { const m = k.split(":")[0]; counts[m] = (counts[m] || 0) + 1; });
      return {
        total: keys.length,
        byModule: window.App.Storage.MODULES.map((m) => m.key).filter((k) => counts[k]).map((k) => ({ module: k, count: counts[k] })),
      };
    },
  };

  // Hangman: choose the next word from `bank` ([{ category, word }]) without
  // repeating one of `recentWords` (strings). If excluding them leaves nothing
  // (a bank that is too small), every word is allowed again. `rng` returns a
  // number in [0, 1) (Math.random by default) so tests can fix the result.
  function pickHangmanWord(bank, recentWords, rng) {
    const rand = typeof rng === "function" ? rng : Math.random;
    const recent = new Set(Array.isArray(recentWords) ? recentWords : []);
    const fresh = bank.filter((e) => !recent.has(e.word));
    const pool = fresh.length > 0 ? fresh : bank;
    return pool[Math.min(pool.length - 1, Math.floor(rand() * pool.length))];
  }

  // The recent-words list after `word` was shown: newest last, at most
  // min(8, bankSize - 1) kept (so at least one word is always left to pick).
  function updateRecentWords(recentWords, word, bankSize) {
    const keep = Math.max(0, Math.min(8, bankSize - 1));
    const next = (Array.isArray(recentWords) ? recentWords : []).filter((w) => w !== word).concat(word);
    return keep === 0 ? [] : next.slice(-keep);
  }

  window.App.pickHangmanWord = pickHangmanWord;
  window.App.updateRecentWords = updateRecentWords;
  window.App.ParentReport = ParentReport;
  window.App.LEVELS = LEVELS;
  window.App.getLevel = getLevel;
  window.App.levelUpBetween = levelUpBetween;
  window.App.setPendingLevelUp = setPendingLevelUp;
  window.App.takePendingLevelUp = takePendingLevelUp;
  window.App.GrammarLevels = GrammarLevels;
  window.App.speak = speak;
  window.App.getEnglishVoices = getEnglishVoices;
  window.App.shuffleArray = shuffleArray;
  window.App.sampleArray = sampleArray;
})();
