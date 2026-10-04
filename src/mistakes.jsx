// Mistakes notebook ("錯題本") core: spaced re-review scheduling, validation,
// and a lookup from a stored key back to the actual question.
//
// What is recorded: a wrong answer to a multiple-choice or fill-in-the-blank
// question in Grammar, Listening, Reading, Storytelling, Comprehension or
// History & Science ("knowledge"). Not recorded: short-answer (self-checked),
// Speaking, Writing, Hangman, Word Hunt, and Vocabulary Builder (flashcards —
// there is no right/wrong answer to record).
//
// Key format: "<module>:<question id>", e.g. grammar:ps1-3, listening:easy-4,
// reading:read-easy-3-q2, knowledge:know-hard-science-5-q1. Question ids are
// data in the content files, never array positions, so adding or reordering
// questions can't re-point an existing entry.
//
// Schedule (all dates are local YYYY-MM-DD, whole days):
//   wrong (in practice OR in a review)  -> stage 0, due tomorrow (+1 day)
//   review answered right at stage 0    -> stage 1, due in 3 days
//   review answered right at stage 1    -> stage 2, due in 7 days
//   review answered right at stage 2    -> "mastered": leaves the notebook
// A right answer during ordinary practice never changes an entry; a wrong one
// always resets it to stage 0 / +1 day (and re-opens a mastered entry).
//
// Stored under state.mistakes = { entries: { [key]: entry } } with
//   entry = { status: "active"|"mastered", stage: 0|1|2|3, due: date|null,
//             firstWrongAt, lastWrongAt: date, wrongCount: n, masteredAt?: date }
// Mastered entries are kept only as a small record (so a later slip can be
// recognised); they never show up as due. At most MAX_ENTRIES are kept:
// when over, mastered entries go first (oldest first), then the oldest active
// ones (by lastWrongAt).
//
// Everything here is pure (state in, new state out) and takes `today` as an
// argument so the schedule can be tested by moving the date.
window.App = window.App || {};

(function () {
  const MAX_ENTRIES = 300;
  const REVIEW_BATCH = 10;
  const MODULE_KEYS = ["grammar", "listening", "reading", "storytelling", "comprehension", "knowledge"];
  const KEY_RE = /^(grammar|listening|reading|storytelling|comprehension|knowledge):[A-Za-z0-9._-]{1,80}$/;
  const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
  const TIERS = ["easy", "medium", "hard", "expert"];

  const pad = (n) => String(n).padStart(2, "0");
  const isPlainObject = (x) => x !== null && typeof x === "object" && !Array.isArray(x);
  function isDateString(s) {
    if (typeof s !== "string" || !DATE_RE.test(s)) return false;
    const [y, m, d] = s.split("-").map(Number);
    const dt = new Date(y, m - 1, d);
    return dt.getFullYear() === y && dt.getMonth() === m - 1 && dt.getDate() === d;
  }

  // Local calendar-date arithmetic (safe across month ends and DST changes).
  function addDays(dateStr, n) {
    const [y, m, d] = dateStr.split("-").map(Number);
    const dt = new Date(y, m - 1, d + n);
    return `${dt.getFullYear()}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}`;
  }

  const makeKey = (moduleKey, questionId) => `${moduleKey}:${questionId}`;

  function emptyMistakes() {
    return { entries: {} };
  }

  // Drops anything that isn't a well-formed entry (a damaged or hand-edited
  // backup must not be able to break the app) and enforces the size cap.
  // Well-formed entries come back unchanged, so a round trip is lossless.
  function sanitize(raw) {
    const entries = {};
    const src = isPlainObject(raw) && isPlainObject(raw.entries) ? raw.entries : {};
    Object.keys(src).forEach((key) => {
      const e = src[key];
      if (!KEY_RE.test(key) || !isPlainObject(e)) return;
      if (!isDateString(e.lastWrongAt) || !isDateString(e.firstWrongAt)) return;
      const wrongCount = Number.isInteger(e.wrongCount) && e.wrongCount >= 1 && e.wrongCount <= 100000 ? e.wrongCount : 1;
      if (e.status === "active") {
        if (![0, 1, 2].includes(e.stage) || !isDateString(e.due)) return;
        entries[key] = { status: "active", stage: e.stage, due: e.due, firstWrongAt: e.firstWrongAt, lastWrongAt: e.lastWrongAt, wrongCount };
      } else if (e.status === "mastered") {
        if (!isDateString(e.masteredAt)) return;
        entries[key] = { status: "mastered", stage: 3, due: null, firstWrongAt: e.firstWrongAt, lastWrongAt: e.lastWrongAt, wrongCount, masteredAt: e.masteredAt };
      }
    });
    return { entries: enforceCap(entries) };
  }

  // Keeps at most MAX_ENTRIES: mastered first (oldest first), then oldest active.
  function enforceCap(entries) {
    const keys = Object.keys(entries);
    if (keys.length <= MAX_ENTRIES) return entries;
    const age = (k) => (entries[k].status === "mastered" ? entries[k].masteredAt : entries[k].lastWrongAt);
    const byOldest = (a, b) => (age(a) < age(b) ? -1 : age(a) > age(b) ? 1 : a < b ? -1 : 1);
    const mastered = keys.filter((k) => entries[k].status === "mastered").sort(byOldest);
    const active = keys.filter((k) => entries[k].status !== "mastered").sort(byOldest);
    const victims = mastered.concat(active).slice(0, keys.length - MAX_ENTRIES);
    const next = { ...entries };
    victims.forEach((k) => delete next[k]);
    return next;
  }

  function withEntries(state, entries) {
    return { ...state, mistakes: { entries } };
  }

  function currentEntries(state) {
    return state.mistakes && state.mistakes.entries ? state.mistakes.entries : {};
  }

  // A wrong answer (practice or review): back to stage 0, due tomorrow.
  function recordWrong(state, key, today) {
    if (!KEY_RE.test(key)) return state;
    const entries = currentEntries(state);
    const prev = entries[key];
    const entry = {
      status: "active",
      stage: 0,
      due: addDays(today, 1),
      firstWrongAt: prev ? prev.firstWrongAt : today,
      lastWrongAt: today,
      wrongCount: prev ? prev.wrongCount + 1 : 1,
    };
    return withEntries(state, enforceCap({ ...entries, [key]: entry }));
  }

  // Ordinary practice: only a wrong answer matters. A right answer leaves any
  // existing entry exactly as it is.
  function recordPracticeAnswer(state, moduleKey, questionId, correct, today) {
    if (correct) return state;
    return recordWrong(state, makeKey(moduleKey, questionId), today);
  }

  // A review answer. Wrong -> reset. Right -> advance one step (3d, 7d, then mastered).
  function recordReviewAnswer(state, key, correct, today) {
    if (!correct) return recordWrong(state, key, today);
    const entries = currentEntries(state);
    const e = entries[key];
    if (!e || e.status !== "active") return state;
    let next;
    if (e.stage === 0) next = { ...e, stage: 1, due: addDays(today, 3) };
    else if (e.stage === 1) next = { ...e, stage: 2, due: addDays(today, 7) };
    else next = { status: "mastered", stage: 3, due: null, firstWrongAt: e.firstWrongAt, lastWrongAt: e.lastWrongAt, wrongCount: e.wrongCount, masteredAt: today };
    return withEntries(state, { ...entries, [key]: next });
  }

  const isDue = (e, today) => !!e && e.status === "active" && e.due <= today;

  // ---- Key -> question lookup --------------------------------------------
  let indexCache = null;
  function getIndex() {
    if (indexCache) return indexCache;
    const C = window.App.Content || {};
    const idx = {};
    const add = (moduleKey, q, extra) => {
      if (!q || !q.id || (q.type !== "mc" && q.type !== "fillblank")) return;
      idx[makeKey(moduleKey, q.id)] = { module: moduleKey, question: q, ...extra };
    };
    const gi = C.GRAMMAR_ITEMS || {};
    Object.keys(gi).forEach((cat) => TIERS.forEach((t) => (gi[cat][t] || []).forEach((q) => add("grammar", q))));
    (C.GRAMMAR_PATHS || []).forEach((p) => p.levels.forEach((l) => l.items.forEach((q) => add("grammar", q))));
    TIERS.forEach((t) =>
      ((C.LISTENING_PASSAGES || {})[t] || []).forEach((p) => {
        // Listening items are one question each; present them in the shared shape.
        const q = { id: p.id, type: "mc", prompt: p.question, options: p.options, correctIndex: p.correctIndex, explanation: p.explanation };
        add("listening", q, { listenText: p.text });
      })
    );
    [["storytelling", "STORYTELLING_ITEMS"], ["reading", "READING_ITEMS"], ["comprehension", "COMPREHENSION_ITEMS"], ["knowledge", "KNOWLEDGE_ITEMS"]].forEach(([mod, name]) => {
      const bank = C[name] || {};
      TIERS.forEach((t) => (bank[t] || []).forEach((p) => p.questions.forEach((q) => add(mod, q, { passage: p }))));
    });
    indexCache = idx;
    return idx;
  }

  // The question behind a key, or null if it no longer exists in the content.
  function resolve(key) {
    return getIndex()[key] || null;
  }

  // Due entries that still resolve to a real question, oldest due first.
  function dueEntries(state, today) {
    const entries = currentEntries(state);
    return Object.keys(entries)
      .filter((k) => isDue(entries[k], today) && resolve(k))
      .sort((a, b) => (entries[a].due < entries[b].due ? -1 : entries[a].due > entries[b].due ? 1 : a < b ? -1 : 1));
  }

  const countDue = (state, today) => dueEntries(state, today).length;

  // The next review batch (at most `limit`, oldest due first).
  function dueList(state, today, limit = REVIEW_BATCH) {
    return dueEntries(state, today)
      .slice(0, limit)
      .map((key) => ({ key, ...resolve(key) }));
  }

  function summary(state) {
    const entries = currentEntries(state);
    const keys = Object.keys(entries);
    return {
      active: keys.filter((k) => entries[k].status === "active").length,
      mastered: keys.filter((k) => entries[k].status === "mastered").length,
    };
  }

  window.App.Mistakes = {
    MAX_ENTRIES,
    REVIEW_BATCH,
    MODULE_KEYS,
    addDays,
    makeKey,
    emptyMistakes,
    sanitize,
    enforceCap,
    recordWrong,
    recordPracticeAnswer,
    recordReviewAnswer,
    isDue,
    resolve,
    dueEntries,
    countDue,
    dueList,
    summary,
  };
})();
