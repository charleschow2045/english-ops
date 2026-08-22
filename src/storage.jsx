// Data model + localStorage persistence, shared under window.App
window.App = window.App || {};

(function () {
  const STORAGE_KEY = "englishOps:v1";

  const TIERS = [
    { key: "easy", label: "Easy" },
    { key: "medium", label: "Medium" },
    { key: "hard", label: "Hard" },
    { key: "expert", label: "Expert" },
  ];
  const TIER_KEYS = TIERS.map((t) => t.key);

  // `implemented` modules count toward the day's checklist / streak;
  // the rest are listed for navigation but show as "Coming soon".
  const MODULES = [
    { key: "listening", label: "Listening", emoji: "🎧", color: "sky", implemented: true },
    { key: "speaking", label: "Speaking", emoji: "🎤", color: "rose", implemented: true },
    { key: "storytelling", label: "Storytelling", emoji: "📖", color: "violet", implemented: true },
    { key: "reading", label: "Reading", emoji: "📚", color: "emerald", implemented: true },
    { key: "comprehension", label: "Comprehension", emoji: "🧠", color: "orange", implemented: true },
    { key: "writing", label: "Writing", emoji: "✏️", color: "amber", implemented: true },
    { key: "grammar", label: "Grammar Drills", emoji: "🔤", color: "teal", implemented: true },
  ];

  function todayStr() {
    const d = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }

  function yesterdayStr(dateStr) {
    const d = new Date(`${dateStr}T00:00:00`);
    d.setDate(d.getDate() - 1);
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }

  function defaultState() {
    return {
      tier: "easy",
      voicePref: { voiceURI: null, rate: 0.85 },
      streak: { count: 0, lastCompletedDate: null },
      dailyProgress: { date: todayStr(), completedModules: [] },
      moduleProgress: {
        listening: { completedPassageIds: [] },
        speaking: {},
        storytelling: {},
        reading: {},
        comprehension: {},
        writing: {},
        grammar: {},
      },
    };
  }

  // Rolls dailyProgress over to today if a new day has started. Doesn't touch
  // the streak — that's only ever evaluated at completion time, in markModuleComplete.
  function ensureToday(state) {
    if (state.dailyProgress.date === todayStr()) return state;
    return { ...state, dailyProgress: { date: todayStr(), completedModules: [] } };
  }

  function implementedModuleKeys() {
    return MODULES.filter((m) => m.implemented).map((m) => m.key);
  }

  function markModuleComplete(state, moduleKey) {
    const today = todayStr();
    if (state.dailyProgress.completedModules.includes(moduleKey)) return state;

    const completedModules = [...state.dailyProgress.completedModules, moduleKey];
    let streak = state.streak;

    const allDone = implementedModuleKeys().every((k) => completedModules.includes(k));
    if (allDone && streak.lastCompletedDate !== today) {
      const isConsecutive = streak.lastCompletedDate === yesterdayStr(today);
      streak = { count: isConsecutive ? streak.count + 1 : 1, lastCompletedDate: today };
    }

    return {
      ...state,
      dailyProgress: { ...state.dailyProgress, completedModules },
      streak,
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      if (!parsed || !parsed.dailyProgress || !parsed.streak) return defaultState();
      if (!TIER_KEYS.includes(parsed.tier)) parsed.tier = "easy";
      if (!parsed.voicePref) parsed.voicePref = { voiceURI: null, rate: 0.85 };
      return ensureToday(parsed);
    } catch (e) {
      console.error("Failed to load English Ops data:", e);
      return defaultState();
    }
  }

  function saveState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Failed to save English Ops data:", e);
    }
  }

  window.App.Storage = {
    STORAGE_KEY,
    TIERS,
    MODULES,
    todayStr,
    implementedModuleKeys,
    markModuleComplete,
    loadState,
    saveState,
  };
})();
