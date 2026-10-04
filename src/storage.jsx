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
        // Grammar path levels the child has finished, as "<pathKey>:<levelId>"
        // (level ids, not positions, so adding or reordering levels later
        // never shifts existing progress).
        grammar: { doneLevels: [] },
      },
      // Mistakes notebook (spaced re-review) — shape and rules in mistakes.jsx.
      mistakes: window.App.Mistakes.emptyMistakes(),
    };
  }

  // Older saved states have `moduleProgress.grammar` as an empty object (or no
  // moduleProgress at all); make sure the shape above exists and is clean.
  function ensureGrammarProgress(state) {
    if (!state.moduleProgress || typeof state.moduleProgress !== "object") state.moduleProgress = {};
    const g = state.moduleProgress.grammar;
    if (!g || typeof g !== "object") state.moduleProgress.grammar = { doneLevels: [] };
    const list = state.moduleProgress.grammar.doneLevels;
    state.moduleProgress.grammar.doneLevels = Array.isArray(list) ? list.filter((k) => typeof k === "string") : [];
    return state;
  }

  // Pure: returns a new state with the Grammar level key recorded (no-op if
  // already recorded).
  function markGrammarLevelDone(state, levelKey) {
    const done = (state.moduleProgress && state.moduleProgress.grammar && state.moduleProgress.grammar.doneLevels) || [];
    if (done.includes(levelKey)) return state;
    return {
      ...state,
      moduleProgress: {
        ...state.moduleProgress,
        grammar: { ...state.moduleProgress.grammar, doneLevels: [...done, levelKey] },
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

  // Fills in anything an older saved state is missing and rolls the day over.
  // Shared by loadState (localStorage) and parseBackup (an imported file) so
  // both paths end up with exactly the same shape. Mutates `parsed`; throws
  // (TypeError) if the stats block is malformed, which callers catch.
  function normalizeState(parsed) {
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
    ensureGrammarProgress(parsed);
    // Older saves have no notebook; also drops malformed entries and applies
    // the size cap (well-formed entries pass through unchanged).
    parsed.mistakes = window.App.Mistakes.sanitize(parsed.mistakes);
    return ensureToday(parsed);
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      if (!parsed || !parsed.dailyProgress || !parsed.streak) return defaultState();
      return normalizeState(parsed);
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

  // ---- Backup / restore ---------------------------------------------------
  // The app has no server, so progress lives only in this browser's
  // localStorage; clearing site data or switching device loses it. English Ops
  // uses exactly ONE localStorage key (STORAGE_KEY) — the voice choice is
  // inside it as state.voicePref — so that one key is the whole app. The
  // backup file keys its payload by localStorage key, so another key could be
  // added later without changing the file shape.
  //
  // File: { app: "english-ops", version: 1, exportedAt: ISO string,
  //         data: { "englishOps:v1": <state> } }
  const BACKUP_APP = "english-ops";
  const BACKUP_VERSION = 1;
  const MAX_BACKUP_BYTES = 2 * 1024 * 1024; // real saves are a few KB
  const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

  const isPlainObject = (x) => x !== null && typeof x === "object" && !Array.isArray(x);
  const isFiniteNumber = (x) => typeof x === "number" && Number.isFinite(x);
  const isDateString = (x) => typeof x === "string" && DATE_RE.test(x);

  function buildBackup(state) {
    return {
      app: BACKUP_APP,
      version: BACKUP_VERSION,
      exportedAt: new Date().toISOString(),
      data: { [STORAGE_KEY]: state },
    };
  }

  function backupFileName() {
    return `english-ops-backup-${todayStr()}.json`;
  }

  // Checks the parts of an imported state the app reads without guarding, then
  // keeps only the known top-level fields. Throws Error("invalid") on a bad
  // shape; the caller turns that into a "can't use this file" message.
  function sanitizeImportedState(raw) {
    const bad = () => {
      throw new Error("invalid");
    };
    if (!isPlainObject(raw)) bad();
    const dp = raw.dailyProgress;
    const st = raw.streak;
    if (!isPlainObject(dp) || !isDateString(dp.date) || !Array.isArray(dp.completedModules)) bad();
    if (!isPlainObject(st) || !isFiniteNumber(st.count) || st.count < 0) bad();
    if (st.lastCompletedDate != null && !isDateString(st.lastCompletedDate)) bad();
    if (raw.lastFreezeUsedOn != null && !isDateString(raw.lastFreezeUsedOn)) bad();
    if (raw.stats !== undefined && (!isPlainObject(raw.stats) || !isPlainObject(raw.stats.moduleCompletions))) bad();
    if (raw.voicePref !== undefined && !isPlainObject(raw.voicePref)) bad();
    if (raw.moduleProgress !== undefined && !isPlainObject(raw.moduleProgress)) bad();

    const clean = {};
    Object.keys(defaultState()).forEach((k) => {
      if (raw[k] !== undefined) clean[k] = raw[k];
    });
    // The mistakes notebook is a known field: keep every well-formed entry,
    // drop only malformed ones (a non-object value just becomes empty).
    clean.mistakes = window.App.Mistakes.sanitize(raw.mistakes);
    clean.dailyProgress = { date: dp.date, completedModules: dp.completedModules.filter((k) => typeof k === "string") };
    clean.streak = { count: st.count, lastCompletedDate: st.lastCompletedDate == null ? null : st.lastCompletedDate };
    if (clean.voicePref) {
      const vp = clean.voicePref;
      clean.voicePref = {
        voiceURI: typeof vp.voiceURI === "string" ? vp.voiceURI : null,
        rate: isFiniteNumber(vp.rate) && vp.rate >= 0.1 && vp.rate <= 3 ? vp.rate : 0.85,
      };
    }
    return clean;
  }

  // Never throws. Returns { ok: true, state, exportedAt } with a fully
  // normalised state ready to replace the live one, or { ok: false, reason }
  // where reason is one of: too_big, not_json, wrong_app, too_new, invalid.
  function parseBackup(text) {
    if (typeof text !== "string" || text.length > MAX_BACKUP_BYTES) return { ok: false, reason: "too_big" };
    let file;
    try {
      file = JSON.parse(text);
    } catch (e) {
      return { ok: false, reason: "not_json" };
    }
    if (!isPlainObject(file) || file.app !== BACKUP_APP) return { ok: false, reason: "wrong_app" };
    if (!Number.isInteger(file.version) || file.version < 1) return { ok: false, reason: "invalid" };
    if (file.version > BACKUP_VERSION) return { ok: false, reason: "too_new" };
    if (!isPlainObject(file.data) || !isPlainObject(file.data[STORAGE_KEY])) return { ok: false, reason: "invalid" };
    try {
      const state = normalizeState(sanitizeImportedState(file.data[STORAGE_KEY]));
      return { ok: true, state, exportedAt: typeof file.exportedAt === "string" ? file.exportedAt : null };
    } catch (e) {
      return { ok: false, reason: "invalid" };
    }
  }

  // A few headline numbers for the restore confirmation screen.
  function summarizeState(state) {
    const done = state.moduleProgress && state.moduleProgress.grammar && state.moduleProgress.grammar.doneLevels;
    return {
      badgesEarned: earnedBadgeKeys(state).length,
      badgesTotal: BADGES.length,
      streak: state.streak.count,
      bestStreak: state.stats.bestStreak,
      missions: state.stats.totalMissionsCompleted,
      grammarLevels: Array.isArray(done) ? done.length : 0,
      mistakesActive: window.App.Mistakes.summary(state).active,
      tier: state.tier,
    };
  }

  window.App.Storage = {
    BACKUP_APP,
    BACKUP_VERSION,
    MAX_BACKUP_BYTES,
    buildBackup,
    backupFileName,
    parseBackup,
    summarizeState,
    STORAGE_KEY,
    TIERS,
    MODULES,
    BADGES,
    MAX_STREAK_FREEZES,
    todayStr,
    implementedModuleKeys,
    markModuleComplete,
    markGrammarLevelDone,
    earnedBadgeKeys,
    loadState,
    saveState,
  };
})();
