// Word Hunt (Bookworm / Word Wipe style) — target words per tier, embedded
// into a random letter grid at runtime (see WordHuntModule.jsx's buildGrid).
// A bonus list of common short words is also recognised so exploring beyond
// the target words is rewarded too (there's no full dictionary bundled).
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  window.App.Content.WORD_HUNT_WORDS = {
    easy: ["CAT", "DOG", "SUN", "STAR", "TREE", "FISH", "BIRD", "APPLE", "HOUSE", "SMILE"],
    medium: ["CLOUD", "RIVER", "STONE", "BRAVE", "QUIET", "DANCE", "FOREST", "CASTLE", "SILVER", "GARDEN"],
    hard: ["PUZZLE", "JOURNEY", "MYSTERY", "COMPASS", "HARVEST", "GLACIER", "WHISPER", "TRIUMPH", "SHADOW", "VOYAGE"],
    expert: ["PARADOX", "CATALYST", "ECLIPSE", "GRANITE", "TAPESTRY", "VELOCITY", "CIPHER", "SANCTUARY", "MOMENTUM", "LABYRINTH"],
  };

  // Common 3-5 letter words recognised as bonus finds (smaller reward than a
  // target word) — a curated list, not a full dictionary.
  window.App.Content.WORD_HUNT_BONUS_WORDS = [
    "CAT", "DOG", "SUN", "RUN", "FUN", "BIG", "RED", "TOP", "MAP", "CUP", "PEN", "BOX", "BAT", "HAT", "SIT",
    "EAT", "ARM", "LEG", "EAR", "EYE", "ICE", "OIL", "AIR", "SEA", "SKY", "TEA", "BEE", "ANT", "OWL", "FOX",
    "PIG", "COW", "HEN", "EGG", "JAM", "JAR", "KEY", "LID", "MUD", "NET", "OAK", "PAD", "RAT", "ROD", "SAD",
    "TAN", "VAN", "WEB", "ZOO", "ABLE", "BAKE", "CAKE", "CAME", "CARE", "CASE", "COOL", "CORN", "DARK", "DATA",
    "DEEP", "DOOR", "DUST", "EASY", "FACE", "FAST", "FIRE", "FISH", "FIVE", "FOOD", "FOUR", "GAME", "GATE",
    "GIFT", "GOLD", "GOOD", "HAND", "HARD", "HEAT", "HELP", "HERE", "HOME", "HOPE", "HOUR", "IDEA", "IRON",
    "JUMP", "KEEP", "KIND", "KING", "LAKE", "LAND", "LATE", "LEAF", "LIFE", "LIKE", "LINE", "LIST", "LOOK",
    "LOVE", "MAKE", "MEAT", "MIND", "MOON", "MOVE", "NAME", "NEAR", "NICE", "NOTE", "OPEN", "PACK", "PAGE",
    "PARK", "PART", "PLAN", "PLAY", "RAIN", "READ", "REST", "RICE", "RIDE", "ROAD", "ROCK", "ROOM", "ROPE",
    "RUSH", "SAFE", "SAND", "SEAT", "SEED", "SHIP", "SHOP", "SHOW", "SIDE", "SIGN", "SING", "SNOW", "SOFT",
    "SOIL", "SOUP", "STAR", "STOP", "TALK", "TALL", "TEAM", "TIME", "TOWN", "TREE", "TRIP", "TRUE", "WALK",
    "WALL", "WARM", "WASH", "WAVE", "WEAR", "WEST", "WIND", "WISH", "WOOD", "WORD", "WORK", "YARD", "YEAR",
  ];
})();
