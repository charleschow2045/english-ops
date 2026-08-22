// New module: a Wordle-style word-guessing game. Word length stays a
// consistent 5 letters across tiers (same familiar mechanic); only the
// word's difficulty/frequency scales with tier.
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  window.App.Content.WORDLE_WORDS = {
    easy: ["HAPPY", "WATER", "LIGHT", "SMILE", "QUIET"],
    medium: ["CRISP", "GLOBE", "STORM", "PROUD", "FRESH"],
    hard: ["FROST", "GLEAM", "CHARM", "PRISM", "BLUNT"],
    expert: ["QUAKE", "VIVID", "FRAIL", "ZESTY", "GNOME"],
  };
})();
