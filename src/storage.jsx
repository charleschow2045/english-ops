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
    { key: "wordhunt", label: "Word Hunt", emoji: "🐛", color: "rose", implemented: true },
    { key: "vocabulary", label: "Vocabulary Builder", emoji: "📔", color: "teal", implemented: true },
    { key: "knowledge", label: "History & Science", emoji: "🏛️", color: "violet", implemented: true },
    { key: "hangman", label: "Hangman", emoji: "🎯", color: "amber", implemented: true },
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

  function defaultStats() {
    return {
      totalMissionsCompleted: 0,
      moduleCompletions: Object.fromEntries(MODULES.map((m) => [m.key, 0])),
      bestStreak: 0,
      freezesUsedTotal: 0,
    };
  }

  function defaultState() {
    return {
      tier: "easy",
      voicePref: { voiceURI: null, rate: 0.85 },
      streak: { count: 0, lastCompletedDate: null },
      streakFreezes: 1,
      lastFreezeUsedOn: null,
      stats: defaultStats(),
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

  // Badge catalog — pure functions of `stats`/`streak` so a badge's "earned"
  // status can always be recomputed, never stored as a separate flag that
  // could drift out of sync.
  const MAX_STREAK_FREEZES = 2;
  const BADGES = [
    { key: "first_steps", emoji: "🌱", label: "First Steps", description: "Complete your very first mission.", check: (s) => s.stats.totalMissionsCompleted >= 1 },
    { key: "week_warrior", emoji: "🔥", label: "Week Warrior", description: "Reach a 7-day streak.", check: (s) => s.stats.bestStreak >= 7 },
    { key: "fortnight_hero", emoji: "🏆", label: "Two Weeks Strong", description: "Reach a 14-day streak.", check: (s) => s.stats.bestStreak >= 14 },
    { key: "never_give_up", emoji: "🧊", label: "Never Give Up", description: "Use a streak freeze to save a streak.", check: (s) => s.stats.freezesUsedTotal >= 1 },
    { key: "bookworm", emoji: "📔", label: "Bookworm", description: "Complete Vocabulary Builder 5 times.", check: (s) => s.stats.moduleCompletions.vocabulary >= 5 },
    { key: "word_hunter", emoji: "🐛", label: "Word Hunter", description: "Complete Word Hunt 5 times.", check: (s) => s.stats.moduleCompletions.wordhunt >= 5 },
    { key: "hangman_hero", emoji: "🎯", label: "Hangman Hero", description: "Complete Hangman 5 times.", check: (s) => s.stats.moduleCompletions.hangman >= 5 },
    { key: "great_listener", emoji: "🎧", label: "Great Listener", description: "Complete Listening 10 times.", check: (s) => s.stats.moduleCompletions.listening >= 10 },
    { key: "confident_speaker", emoji: "🎤", label: "Confident Speaker", description: "Complete Speaking 10 times.", check: (s) => s.stats.moduleCompletions.speaking >= 10 },
    { key: "storyteller", emoji: "✏️", label: "Storyteller", description: "Complete Writing 10 times.", check: (s) => s.stats.moduleCompletions.writing >= 10 },
    { key: "deep_thinker", emoji: "🧠", label: "Deep Thinker", description: "Complete Comprehension 10 times.", check: (s) => s.stats.moduleCompletions.comprehension >= 10 },
    { key: "all_rounder", emoji: "🌟", label: "All-Rounder", description: "Complete every module at least once.", check: (s) => MODULES.every((m) => s.stats.moduleCompletions[m.key] >= 1) },
    { key: "century_club", emoji: "💯", label: "Century Club", description: "Complete 100 missions in total.", check: (s) => s.stats.totalMissionsCompleted >= 100 },
  ];

  // Rolls dailyProgress over to today if a new day has started. Doesn't touch
  // the streak — that's only ever evaluated at completion time, in markModuleComplete.
  function ensureToday(state) {
    if (state.dailyProgress.date === todayStr()) return state;
    return { ...state, dailyProgress: { date: todayStr(), completedModules: [] } };
  }

  function implementedModuleKeys() {
    return MODULES.filter((m) => m.implemented).map((m) => m.key);
  }

  // Returns { state, freezeUsed } — freezeUsed lets the UI show a one-time
  // "your streak was saved" moment right after this call, without storing a
  // transient flag in persisted state.
  function markModuleComplete(state, moduleKey) {
    const today = todayStr();
    if (state.dailyProgress.completedModules.includes(moduleKey)) return { state, freezeUsed: false };

    const completedModules = [...state.dailyProgress.completedModules, moduleKey];
    let streak = state.streak;
    let streakFreezes = state.streakFreezes;
    let freezeUsed = false;

    const stats = {
      ...state.stats,
      totalMissionsCompleted: state.stats.totalMissionsCompleted + 1,
      moduleCompletions: {
        ...state.stats.moduleCompletions,
        [moduleKey]: (state.stats.moduleCompletions[moduleKey] || 0) + 1,
      },
    };

    const allDone = implementedModuleKeys().every((k) => completedModules.includes(k));
    if (allDone && streak.lastCompletedDate !== today) {
      const isConsecutive = streak.lastCompletedDate === yesterdayStr(today);
      if (isConsecutive) {
        streak = { count: streak.count + 1, lastCompletedDate: today };
      } else if (streak.lastCompletedDate && streakFreezes > 0) {
        // Had a streak going, missed a day, but a freeze covers the gap.
        streak = { count: streak.count + 1, lastCompletedDate: today };
        streakFreezes -= 1;
        freezeUsed = true;
        stats.freezesUsedTotal = stats.freezesUsedTotal + 1;
      } else {
        streak = { count: 1, lastCompletedDate: today };
      }
      // Earn a freeze back at every 7-day milestone, capped.
      if (streak.count % 7 === 0 && streakFreezes < MAX_STREAK_FREEZES) {
        streakFreezes += 1;
      }
      stats.bestStreak = Math.max(stats.bestStreak, streak.count);
    }

    const nextState = {
      ...state,
      dailyProgress: { ...state.dailyProgress, completedModules },
      streak,
      streakFreezes,
      lastFreezeUsedOn: freezeUsed ? today : state.lastFreezeUsedOn,
      stats,
    };
    return { state: nextState, freezeUsed };
  }

  function earnedBadgeKeys(state) {
    return BADGES.filter((b) => b.check(state)).map((b) => b.key);
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      if (!parsed || !parsed.dailyProgress || !parsed.streak) return defaultState();
      if (!TIER_KEYS.includes(parsed.tier)) parsed.tier = "easy";
      if (!parsed.voicePref) parsed.voicePref = { voiceURI: null, rate: 0.85 };
      if (typeof parsed.streakFreezes !== "number") parsed.streakFreezes = 1;
      if (parsed.lastFreezeUsedOn === undefined) parsed.lastFreezeUsedOn = null;
      if (!parsed.stats) parsed.stats = defaultStats();
      MODULES.forEach((m) => {
        if (typeof parsed.stats.moduleCompletions[m.key] !== "number") parsed.stats.moduleCompletions[m.key] = 0;
      });
      if (typeof parsed.stats.totalMissionsCompleted !== "number") parsed.stats.totalMissionsCompleted = 0;
      if (typeof parsed.stats.bestStreak !== "number") parsed.stats.bestStreak = parsed.streak.count || 0;
      if (typeof parsed.stats.freezesUsedTotal !== "number") parsed.stats.freezesUsedTotal = 0;
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
    BADGES,
    MAX_STREAK_FREEZES,
    todayStr,
    implementedModuleKeys,
    markModuleComplete,
    earnedBadgeKeys,
    loadState,
    saveState,
  };
})();
