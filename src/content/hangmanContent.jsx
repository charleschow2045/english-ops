// Hangman word bank — unlike Word Hunt's target lists, each entry carries a
// `category` (e.g. "Insects") shown above the blanks as a hint, and word
// length varies freely within a tier (short 3-letter words included) rather
// than climbing steadily — matching classic mobile Hangman apps, per
// feedback that always drawing from WORD_HUNT_WORDS made every round feel
// like a fixed-length word with no contextual clue to help guessing.
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  window.App.Content.HANGMAN_WORDS = {
    easy: [
      { category: "Insects", word: "ANT" },
      { category: "Insects", word: "BEE" },
      { category: "Animals", word: "CAT" },
      { category: "Animals", word: "DOG" },
      { category: "Animals", word: "PIG" },
      { category: "Animals", word: "FOX" },
      { category: "Colours", word: "RED" },
      { category: "Colours", word: "BLUE" },
      { category: "Fruits", word: "PEAR" },
      { category: "Fruits", word: "PLUM" },
      { category: "Weather", word: "RAIN" },
      { category: "Weather", word: "SNOW" },
      { category: "Body Parts", word: "ARM" },
      { category: "Body Parts", word: "EAR" },
      { category: "School", word: "DESK" },
      { category: "School", word: "BOOK" },
    ],
    medium: [
      { category: "Insects", word: "MOTH" },
      { category: "Insects", word: "WASP" },
      { category: "Animals", word: "TIGER" },
      { category: "Animals", word: "RABBIT" },
      { category: "Sports", word: "TENNIS" },
      { category: "Sports", word: "SOCCER" },
      { category: "Fruits", word: "ORANGE" },
      { category: "Fruits", word: "BANANA" },
      { category: "Ocean", word: "WHALE" },
      { category: "Ocean", word: "CORAL" },
      { category: "Space", word: "COMET" },
      { category: "Space", word: "PLANET" },
      { category: "Jobs", word: "DOCTOR" },
      { category: "Jobs", word: "TEACHER" },
      { category: "Transport", word: "BICYCLE" },
    ],
    hard: [
      { category: "Insects", word: "BEETLE" },
      { category: "Insects", word: "CRICKET" },
      { category: "Animals", word: "DOLPHIN" },
      { category: "Animals", word: "LEOPARD" },
      { category: "Science", word: "MAGNET" },
      { category: "Science", word: "OXYGEN" },
      { category: "Geography", word: "MOUNTAIN" },
      { category: "Geography", word: "VOLCANO" },
      { category: "History", word: "ANCIENT" },
      { category: "History", word: "EMPEROR" },
      { category: "Space", word: "ASTEROID" },
      { category: "Space", word: "GALAXY" },
      { category: "Ocean", word: "PLANKTON" },
      { category: "Jobs", word: "ENGINEER" },
      { category: "Sports", word: "MARATHON" },
    ],
    expert: [
      { category: "Insects", word: "DRAGONFLY" },
      { category: "Science", word: "CHEMISTRY" },
      { category: "Science", word: "GRAVITY" },
      { category: "Geography", word: "CONTINENT" },
      { category: "History", word: "CIVILIZATION" },
      { category: "History", word: "REVOLUTION" },
      { category: "Space", word: "TELESCOPE" },
      { category: "Space", word: "ASTRONOMY" },
      { category: "Animals", word: "CROCODILE" },
      { category: "Nature", word: "ECOSYSTEM" },
      { category: "Ocean", word: "SUBMARINE" },
      { category: "Jobs", word: "ARCHITECT" },
      { category: "Language", word: "VOCABULARY" },
      { category: "Language", word: "GRAMMAR" },
      { category: "Technology", word: "COMPUTER" },
    ],
  };
})();
