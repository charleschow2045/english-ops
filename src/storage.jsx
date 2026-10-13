// Data model + localStorage persistence, shared under window.App
window.App = window.App || {};

(function () {
  // ---- Test mode ----
  // Opening the site with `?today=YYYY-MM-DD` switches to test mode: the app
  // pretends today is that date AND uses a completely separate localStorage
  // key, so the real progress (REAL_KEY) is never read, written, exported over
  // or restored over. This makes it safe to test streaks on the iPad the child
  // actually uses. Test mode is decided once, at load time, from the URL; any
  // `today` parameter (even a malformed one) selects the test key.
  const REAL_KEY = "englishOps:v1";
  const TEST_KEY = "englishOps:test";
  let TEST_DATE_PARAM = null; // the raw ?today= value, or null when not in test mode
  try {
    const q = new URLSearchParams(window.location.search);
    if (q.has("today")) TEST_DATE_PARAM = q.get("today") || "";
  } catch (e) {
    TEST_DATE_PARAM = null;
  }
  const TEST_MODE = TEST_DATE_PARAM !== null;
  const STORAGE_KEY = TEST_MODE ? TEST_KEY : REAL_KEY;

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

  const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  // Whole days since the epoch for a "YYYY-MM-DD" string, or null if it is not
  // a real calendar date (so "2026-13-45" and "2026-02-30" are rejected).
  function dayNumber(str) {
    if (typeof str !== "string" || !DATE_RE.test(str)) return null;
    const y = Number(str.slice(0, 4));
    const m = Number(str.slice(5, 7));
    const d = Number(str.slice(8, 10));
    const t = Date.UTC(y, m - 1, d);
    const back = new Date(t);
    if (back.getUTCFullYear() !== y || back.getUTCMonth() !== m - 1 || back.getUTCDate() !== d) return null;
    return Math.round(t / 86400000);
  }

  function isValidDateStr(str) {
    return dayNumber(str) !== null;
  }

  // Days from date `a` to date `b` (positive when b is later). Both must be valid.
  function daysBetween(a, b) {
    return dayNumber(b) - dayNumber(a);
  }

  // The date `n` days after (or before, if negative) a valid "YYYY-MM-DD".
  function addDays(dateStr, n) {
    const t = new Date(dayNumber(dateStr) * 86400000 + n * 86400000);
    return `${t.getUTCFullYear()}-${pad2(t.getUTCMonth() + 1)}-${pad2(t.getUTCDate())}`;
  }

  // Test mode only: the pretend date moved in memory (see setTestDate).
  let testDateOverride = null;

  function todayStr() {
    if (TEST_MODE) {
      if (testDateOverride) return testDateOverride;
      if (isValidDateStr(TEST_DATE_PARAM)) return TEST_DATE_PARAM;
    }
    const d = new Date();
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
  }

  // Test mode only: moves the pretend date WITHOUT reloading the page, which
  // is how "the app was left open past midnight" is simulated. Also rewrites
  // ?today= so a reload stays on the new day, and tells listeners (Root, the
  // banner) to re-read the date. Returns false (and does nothing) outside test
  // mode or for an invalid date.
  const DATE_CHANGE_EVENT = "englishops:datechange";
  function setTestDate(dateStr) {
    if (!TEST_MODE || !isValidDateStr(dateStr)) return false;
    testDateOverride = dateStr;
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("today", dateStr);
      window.history.replaceState(null, "", url.toString());
    } catch (e) {
      // not fatal: only the reload-keeps-the-day nicety is lost
    }
    try {
      window.dispatchEvent(new Event(DATE_CHANGE_EVENT));
    } catch (e) {
      // no DOM events available (e.g. unit tests)
    }
    return true;
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
  const MAX_STREAK_DAYS = 36500;
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
  function ensureToday(state, today = todayStr()) {
    if (state.dailyProgress.date === today) return state;
    return { ...state, dailyProgress: { date: today, completedModules: [] } };
  }

  function implementedModuleKeys() {
    return MODULES.filter((m) => m.implemented).map((m) => m.key);
  }

  // Returns { state, freezeUsed, freezesUsedNow, streakReset, dayCompleted } —
  // the extra fields let the UI show a one-time "your streak was saved" moment
  // right after this call, without storing a transient flag in persisted state.
  //
  // `today` defaults to the clock; it is a parameter so tests can pass a date.
  // The day is rolled over FIRST: the app may have been left open past
  // midnight, in which case the stored checklist still belongs to yesterday.
  //
  // Streak rule when the day's missions are all done and the streak wasn't
  // already counted today: gap = days since the last counted day.
  //   gap 1  -> streak + 1
  //   gap >1 -> each missed day (gap - 1) costs one freeze; if there are
  //             enough, spend them and streak + 1; if not, the streak restarts
  //             at 1 and NO freeze is spent
  //   gap <= 0 (already counted today, or the device clock went backwards)
  //          -> unchanged, never counted twice
  function markModuleComplete(state, moduleKey, today = todayStr()) {
    state = ensureToday(state, today);
    const events = { freezeUsed: false, freezesUsedNow: 0, streakReset: false, dayCompleted: false };
    if (state.dailyProgress.completedModules.includes(moduleKey)) return { state, ...events };

    const completedModules = [...state.dailyProgress.completedModules, moduleKey];
    let streak = state.streak;
    let streakFreezes = state.streakFreezes;

    const stats = {
      ...state.stats,
      totalMissionsCompleted: state.stats.totalMissionsCompleted + 1,
      moduleCompletions: {
        ...state.stats.moduleCompletions,
        [moduleKey]: (state.stats.moduleCompletions[moduleKey] || 0) + 1,
      },
    };

    const allDone = implementedModuleKeys().every((k) => completedModules.includes(k));
    if (allDone) {
      const last = isValidDateStr(streak.lastCompletedDate) ? streak.lastCompletedDate : null;
      const gap = last ? daysBetween(last, today) : null;
      if (gap === null || gap > 0) {
        const prevCount = streak.count;
        if (gap === null) {
          streak = { count: 1, lastCompletedDate: today };
        } else if (gap === 1) {
          streak = { count: prevCount + 1, lastCompletedDate: today };
        } else {
          const missed = gap - 1;
          if (streakFreezes >= missed) {
            streak = { count: prevCount + 1, lastCompletedDate: today };
            streakFreezes -= missed;
            stats.freezesUsedTotal = stats.freezesUsedTotal + missed;
            events.freezesUsedNow = missed;
            events.freezeUsed = true;
          } else {
            streak = { count: 1, lastCompletedDate: today };
            events.streakReset = prevCount > 0;
          }
        }
        events.dayCompleted = true;
        // Earn a freeze back at every 7-day milestone, capped.
        if (streak.count > prevCount && streak.count % 7 === 0 && streakFreezes < MAX_STREAK_FREEZES) {
          streakFreezes += 1;
        }
        stats.bestStreak = Math.max(stats.bestStreak, streak.count);
      }
    }

    const nextState = {
      ...state,
      dailyProgress: { ...state.dailyProgress, completedModules },
      streak,
      streakFreezes,
      lastFreezeUsedOn: events.freezeUsed ? today : state.lastFreezeUsedOn,
      stats,
    };
    return { state: nextState, ...events };
  }

  // What the streak looks like *today*, for display only. The stored count
  // changes only when a day is completed, so after missed days it is stale;
  // this derives the truth without touching saved data (so backups and older
  // versions of the app are unaffected).
  // status: "none"      no streak yet
  //         "doneToday" counted today
  //         "pending"   counted through yesterday; today's missions would extend it
  //         "saved"     days were missed but freezes would cover them
  //         "broken"    days were missed and freezes can't cover them (count shows 0)
  function getStreakView(state, today = todayStr()) {
    const { count, lastCompletedDate } = state.streak;
    if (!isValidDateStr(lastCompletedDate) || count <= 0) return { count: 0, status: "none", freezesNeeded: 0 };
    const gap = daysBetween(lastCompletedDate, today);
    if (gap <= 0) return { count, status: "doneToday", freezesNeeded: 0 };
    if (gap === 1) return { count, status: "pending", freezesNeeded: 0 };
    const missed = gap - 1;
    if (state.streakFreezes >= missed) return { count, status: "saved", freezesNeeded: missed };
    return { count: 0, status: "broken", freezesNeeded: missed };
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
    // Freezes: a whole number from 0 to the cap (an imported file could say 99).
    parsed.streakFreezes = isFiniteNumber(parsed.streakFreezes)
      ? Math.min(Math.max(Math.floor(parsed.streakFreezes), 0), MAX_STREAK_FREEZES)
      : 1;
    if (parsed.lastFreezeUsedOn === undefined) parsed.lastFreezeUsedOn = null;
    // Streak: a plain object with a non-negative whole count and a real date (or null).
    if (!isPlainObject(parsed.streak)) parsed.streak = { count: 0, lastCompletedDate: null };
    parsed.streak = {
      count: isFiniteNumber(parsed.streak.count) ? Math.min(Math.max(Math.floor(parsed.streak.count), 0), MAX_STREAK_DAYS) : 0,
      lastCompletedDate: isValidDateStr(parsed.streak.lastCompletedDate) ? parsed.streak.lastCompletedDate : null,
    };
    if (!isPlainObject(parsed.stats)) parsed.stats = defaultStats();
    if (!isPlainObject(parsed.stats.moduleCompletions)) parsed.stats.moduleCompletions = {};
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

  // If saved data exists but can't be used (damaged JSON, wrong shape, or a
  // block normalizeState can't repair), the app starts from a fresh state and
  // the next save would overwrite the original for good. Keep the raw text
  // under "<key>:corrupt-<date>" first so it can still be recovered by hand.
  // Never overwrites an earlier copy from the same day (that one is the
  // original; anything later could already be a replacement).
  function stashUnreadable(raw) {
    try {
      const key = `${STORAGE_KEY}:corrupt-${todayStr()}`;
      if (localStorage.getItem(key) === null) localStorage.setItem(key, raw);
    } catch (e) {
      console.error("Failed to keep a copy of unreadable English Ops data:", e);
    }
  }

  function loadState() {
    let raw = null;
    try {
      raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      if (!parsed || !parsed.dailyProgress || !parsed.streak) {
        stashUnreadable(raw);
        return defaultState();
      }
      return normalizeState(parsed);
    } catch (e) {
      console.error("Failed to load English Ops data:", e);
      if (raw) stashUnreadable(raw);
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

  const isPlainObject = (x) => x !== null && typeof x === "object" && !Array.isArray(x);
  const isFiniteNumber = (x) => typeof x === "number" && Number.isFinite(x);
  const isDateString = (x) => isValidDateStr(x); // a real calendar date, not just the right shape

  function buildBackup(state) {
    return {
      app: BACKUP_APP,
      version: BACKUP_VERSION,
      exportedAt: new Date().toISOString(),
      ...(TEST_MODE ? { testMode: true } : {}),
      data: { [STORAGE_KEY]: state },
    };
  }

  function backupFileName() {
    return `english-ops-${TEST_MODE ? "test-" : ""}backup-${todayStr()}.json`;
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
  // where reason is one of: too_big, not_json, wrong_app, too_new, test_file, invalid.
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
    if (!isPlainObject(file.data)) return { ok: false, reason: "invalid" };
    // A file exported from test mode is refused outside test mode so it can
    // never overwrite real progress. Test mode itself may import a real backup
    // (it only ever writes the test key).
    if (!TEST_MODE && (file.testMode === true || (!(REAL_KEY in file.data) && TEST_KEY in file.data))) {
      return { ok: false, reason: "test_file" };
    }
    const payload = isPlainObject(file.data[STORAGE_KEY]) ? file.data[STORAGE_KEY] : TEST_MODE ? file.data[REAL_KEY] : undefined;
    if (!isPlainObject(payload)) return { ok: false, reason: "invalid" };
    try {
      const state = normalizeState(sanitizeImportedState(payload));
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
      streak: getStreakView(state).count, // what the home screen would show today, not the stale stored count
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
    TEST_MODE,
    TEST_DATE_PARAM,
    TEST_KEY,
    TIERS,
    MODULES,
    BADGES,
    MAX_STREAK_FREEZES,
    todayStr,
    isValidDateStr,
    daysBetween,
    addDays,
    implementedModuleKeys,
    markModuleComplete,
    getStreakView,
    ensureToday,
    setTestDate,
    DATE_CHANGE_EVENT,
    markGrammarLevelDone,
    earnedBadgeKeys,
    loadState,
    saveState,
  };
})();
