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

  window.App.GrammarLevels = GrammarLevels;
  window.App.speak = speak;
  window.App.getEnglishVoices = getEnglishVoices;
  window.App.shuffleArray = shuffleArray;
  window.App.sampleArray = sampleArray;
})();
