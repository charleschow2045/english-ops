// Shared fake data for the three visual-style previews. Preview only: nothing
// here is read from, or written to, the real app or its localStorage.
// Module keys, labels and emoji match Storage.MODULES in src/storage.jsx.
(function () {
  const MODULES = [
    { key: "listening", label: "Listening", emoji: "🎧", hue: 205 },
    { key: "speaking", label: "Speaking", emoji: "🎤", hue: 345 },
    { key: "storytelling", label: "Storytelling", emoji: "📖", hue: 265 },
    { key: "reading", label: "Reading", emoji: "📚", hue: 150 },
    { key: "comprehension", label: "Comprehension", emoji: "🧠", hue: 25 },
    { key: "writing", label: "Writing", emoji: "✏️", hue: 45 },
    { key: "grammar", label: "Grammar Drills", emoji: "🔤", hue: 175 },
    { key: "wordhunt", label: "Word Hunt", emoji: "🐛", hue: 320 },
    { key: "vocabulary", label: "Vocabulary Builder", emoji: "📔", hue: 230 },
    { key: "knowledge", label: "History & Science", emoji: "🏛️", hue: 285 },
    { key: "hangman", label: "Hangman", emoji: "🎯", hue: 10 },
  ];

  const MISSION_TEXT = {
    reading: "Read a short passage and answer questions",
    speaking: "Say sentences aloud and get feedback",
    vocabulary: "Flip through 10 new words",
  };

  // Level titles in order; the next level needs `LEVEL_STEP` more missions in this mock.
  const LEVELS = ["Explorer", "Scout", "Ranger", "Navigator", "Captain", "Legend"];
  const GOAL = 20; // "N / 20 missions" for Explorer -> Scout

  const STATES = {
    fresh: { id: "fresh", label: "Fresh start", streak: 0, freezes: 1, total: 0, done: [] },
    active: { id: "active", label: "2 of 3 done · streak 5", streak: 5, freezes: 1, total: 12, done: ["speaking", "reading"] },
  };

  const q = new URLSearchParams(location.search);
  const state = STATES[q.get("state")] || STATES.fresh;
  const missionKeys = ["reading", "speaking", "vocabulary"]; // the missions for 14 Oct 2026 (Storage.pickMissions)
  const byKey = Object.fromEntries(MODULES.map((m) => [m.key, m]));

  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const tint = (h, l) => `hsl(${h} 85% ${l || 93}%)`;
  const solid = (h, l) => `hsl(${h} 55% ${l || 42}%)`;

  // "Fresh start" / "2 of 3 done" switch shown above every preview.
  function previewBar(styleName) {
    const link = (s) => `<a href="?state=${s.id}" class="pv-chip${s.id === state.id ? " on" : ""}">${esc(s.label)}</a>`;
    return `<div class="pv-bar"><a href="./" class="pv-back">← All styles</a><span class="pv-name">${esc(styleName)}</span><span class="pv-links">${link(STATES.fresh)}${link(STATES.active)}</span></div>`;
  }

  window.PV = {
    MODULES, MISSION_TEXT, LEVELS, GOAL, STATES, state, missionKeys, byKey,
    dateText: "Wednesday 14 October",
    grammarProgress: "0 / 76 levels done", // Grammar is the only card with a third line
    levelIndex: 0, // Explorer
    progressPct: Math.min(100, Math.round((state.total / GOAL) * 100)),
    doneCount: state.done.length,
    isDone: (k) => state.done.includes(k),
    isMission: (k) => missionKeys.includes(k),
    esc, tint, solid, previewBar,
  };
})();
