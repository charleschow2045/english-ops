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
