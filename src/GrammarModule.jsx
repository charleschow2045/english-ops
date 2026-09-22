// Grammar drills — pick a category, then step through that category's
// exercises. Mixed / Tenses / Prepositions: Advanced are tier-scaled
// fill-in-the-blank sets. Every "path" in GRAMMAR_PATHS (Past Simple Steps,
// Present Tenses, Past Continuous, Present Perfect, Future Forms,
// Prepositions Explained) is a different shape: a list of short levels, each
// opening with a Learn card before the practice starts. Path levels are the
// same for every difficulty tier, so there is no tier filtering.
// Migrated to the "探險護照" system — see theme.jsx header comment.
window.App = window.App || {};

(function () {
  const { useState, useMemo } = React;
  const { INK, TYPE, PaperCard, InkButton, PaperBackButton, PaperRefreshButton, PaperTierBadge, MODULE_ACCENTS } = window.App.UI;
  const { sampleArray } = window.App;
  const { QuestionBlock, useShuffledQuestion } = window.App.QuizQuestion;

  const ACCENT = MODULE_ACCENTS.grammar;

  // Every entry in GRAMMAR_PATHS (Past Simple, Present Tenses, Past
  // Continuous, Present Perfect, Future Forms, Prepositions Explained, ...)
  // becomes its own category with a level list; the older tier-scaled sets
  // (Mixed, Tenses, and the advanced Prepositions collocations) stay as they
  // were.
  const PATHS = window.App.Content.GRAMMAR_PATHS || [];
  const CATEGORIES = [
    { key: "mixed", label: "Mixed Grammar", emoji: "🔀", blurb: "A mix of grammar rules for your level." },
    { key: "tense", label: "Tenses", emoji: "⏰", blurb: "Practice past, present, and future tense forms." },
    ...PATHS.map((p) => ({ key: p.key, label: p.label, emoji: p.emoji, blurb: p.blurb })),
    { key: "preposition", label: "Prepositions: Advanced", emoji: "🧭", blurb: "Tricky fixed pairs like contingent on and account for." },
  ];

  const SESSION_SIZE = 8;

  function LearnCard({ level, levelIdx, onStart }) {
    const learn = level.learn;
    return (
      <PaperCard accent={ACCENT}>
        <p className={`text-xs mb-1 ${TYPE.caption}`} style={{ color: ACCENT.solid }}>
          📖 Learn first · Level {levelIdx + 1}
        </p>
        <h2 className={`text-xl mb-2 leading-snug ${TYPE.heading}`} style={{ color: INK.ink }}>
          {level.emoji} {level.title}
        </h2>
        <p className="font-bold mb-3" style={{ color: INK.ink }}>
          {learn.intro}
        </p>

        <div className="rounded-2xl overflow-hidden mb-3" style={{ border: `1.5px solid ${ACCENT.tintBorder}` }}>
          <div className="grid grid-cols-2 text-xs font-extrabold px-3 py-2" style={{ backgroundColor: ACCENT.tint, color: ACCENT.solid }}>
            <span>{learn.headers[0]}</span>
            <span>{learn.headers[1]}</span>
          </div>
          {learn.rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-2 px-3 py-2 font-bold"
              style={{ backgroundColor: INK.paperCard, color: INK.ink, borderTop: `1px solid ${ACCENT.tintBorder}` }}
            >
              <span>{row[0]}</span>
              <span style={{ color: ACCENT.solid }}>{row[1]}</span>
            </div>
          ))}
        </div>

        <ul className="flex flex-col gap-2 mb-3">
          {learn.tips.map((tip, i) => (
            <li key={i} className="font-bold text-sm" style={{ color: INK.mutedInk }}>
              💡 {tip}
            </li>
          ))}
        </ul>

        {learn.mistake && (
          <div className="rounded-2xl p-3 mb-4" style={{ backgroundColor: INK.goldTint, border: `1.5px solid ${INK.goldTintBorder}` }}>
            <p className="text-sm font-bold" style={{ color: "#6B5420" }}>
              ⚠️ Watch out: {learn.mistake}
            </p>
          </div>
        )}

        <InkButton accent={ACCENT} className="w-full" onClick={onStart}>
          Start practice →
        </InkButton>
      </PaperCard>
    );
  }

  // doneLevels / onLevelDone: finished path levels ("<pathKey>:<levelId>"),
  // kept in the saved app state by Root so they survive a page reload. If a
  // caller does not pass them, progress falls back to plain component state.
  function GrammarModule({ tier, onBack, onComplete, doneLevels: savedDoneLevels, onLevelDone }) {
    const [category, setCategory] = useState(null);
    const [runSeed, setRunSeed] = useState(0);
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [doneAll, setDoneAll] = useState(false);
    const [levelIdx, setLevelIdx] = useState(null);
    const [started, setStarted] = useState(false);
    const [localDoneLevels, setLocalDoneLevels] = useState([]);
    const doneLevels = savedDoneLevels || localDoneLevels;

    function markLevelDone(key) {
      if (onLevelDone) onLevelDone(key);
      else setLocalDoneLevels((d) => (d.includes(key) ? d : [...d, key]));
    }

    function resetQuiz() {
      setRunSeed(0);
      setIndex(0);
      setSelected(null);
      setDoneAll(false);
    }

    function pickCategory(key) {
      setCategory(key);
      setLevelIdx(null);
      setStarted(false);
      resetQuiz();
    }

    function pickLevel(i) {
      setLevelIdx(i);
      setStarted(false);
      resetQuiz();
    }

    // Hooks must run unconditionally on every render (Rules of Hooks), so
    // these are computed before the early-returns below, with safe fallbacks
    // while no category or level has been picked yet.
    const path = PATHS.find((p) => p.key === category) || null;
    const isPS = !!path;
    const psLevels = path ? path.levels : [];
    const level = isPS && levelIdx !== null ? psLevels[levelIdx] : null;
    const catMeta = CATEGORIES.find((c) => c.key === category) || CATEGORIES[0];
    const bank = window.App.Content.GRAMMAR_ITEMS[isPS ? "mixed" : category || "mixed"];
    // Path items are the same for every tier by default. An item can opt in to
    // a `tiers: [...]` allow-list (e.g. ["expert"]) to appear only for those
    // tiers — used for sub-topics like the third conditional or dangling
    // modifiers that are an expert-only stretch, not a general requirement.
    // Items without `tiers` are unaffected and always included.
    const rawItems = isPS ? (level ? level.items : psLevels[0].items) : bank[tier] || bank.easy;
    const baseItems = isPS ? rawItems.filter((it) => !it.tiers || it.tiers.includes(tier)) : rawItems;
    const doneKey = (i) => `${category}:${psLevels[i] ? psLevels[i].id : i}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const items = useMemo(() => sampleArray(baseItems, SESSION_SIZE), [baseItems, runSeed]);
    const rawQ = items[index];
    const q = useShuffledQuestion(rawQ);
    const locked = selected !== null;
    const isLast = index === items.length - 1;

    if (!category) {
      return (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-2">
            <PaperBackButton onClick={onBack} />
            <PaperTierBadge tier={tier} />
          </div>
          <div className="flex flex-col gap-3">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                onClick={() => pickCategory(c.key)}
                className="w-full flex items-center gap-3 rounded-2xl p-4 text-left active:translate-y-[2px] transition-all"
                style={{
                  backgroundColor: INK.paperCard,
                  border: `1.5px solid ${ACCENT.tintBorder}`,
                  boxShadow: "0 1px 2px rgba(35,49,66,0.05), 0 6px 14px -8px rgba(35,49,66,0.18)",
                }}
              >
                <span className="text-3xl">{c.emoji}</span>
                <div>
                  <p className={`text-base ${TYPE.heading}`} style={{ color: INK.ink }}>
                    {c.label}
                  </p>
                  <p className={`text-xs ${TYPE.caption}`} style={{ color: INK.mutedInk }}>
                    {c.blurb}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (isPS && !level) {
      return (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-2">
            <PaperBackButton onClick={() => setCategory(null)}>← Categories</PaperBackButton>
          </div>
          <PaperCard accent={ACCENT}>
            <h2 className={`text-xl mb-1 ${TYPE.heading}`} style={{ color: INK.ink }}>
              {path.emoji} {path.label}
            </h2>
            <p className="font-bold text-sm" style={{ color: INK.mutedInk }}>
              Work through the levels in order. Each one starts with a short lesson, then a practice round.
            </p>
          </PaperCard>
          <div className="flex flex-col gap-3">
            {psLevels.map((lv, i) => (
              <div key={lv.id}>
                {path.sections && path.sections[i] && (
                  <p className={`text-xs mb-2 mt-1 ${TYPE.caption}`} style={{ color: INK.mutedInk }}>
                    {path.sections[i]}
                  </p>
                )}
                <button
                  onClick={() => pickLevel(i)}
                  className="w-full flex items-center gap-3 rounded-2xl p-3 text-left active:translate-y-[2px] transition-all"
                  style={{
                    backgroundColor: INK.paperCard,
                    border: `1.5px solid ${ACCENT.tintBorder}`,
                    boxShadow: "0 1px 2px rgba(35,49,66,0.05), 0 6px 14px -8px rgba(35,49,66,0.18)",
                  }}
                >
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-extrabold"
                    style={{
                      backgroundColor: doneLevels.includes(doneKey(i)) ? ACCENT.solid : ACCENT.tint,
                      color: doneLevels.includes(doneKey(i)) ? ACCENT.on : ACCENT.solid,
                    }}
                  >
                    {doneLevels.includes(doneKey(i)) ? "✓" : i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className={`text-base leading-tight ${TYPE.heading}`} style={{ color: INK.ink }}>
                      {lv.emoji} {lv.title}
                    </p>
                    <p className="text-xs font-bold" style={{ color: INK.mutedInk }}>
                      {lv.blurb}
                    </p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (isPS && level && !started) {
      return (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-2">
            <PaperBackButton onClick={() => setLevelIdx(null)}>← Levels</PaperBackButton>
          </div>
          <LearnCard level={level} levelIdx={levelIdx} onStart={() => setStarted(true)} />
        </div>
      );
    }

    function selectOption(i) {
      if (selected !== null) return;
      setSelected(i);
    }

    function handleRefresh() {
      setRunSeed((s) => s + 1);
      setIndex(0);
      setSelected(null);
      setDoneAll(false);
    }

    function handleNext() {
      if (isLast) {
        if (isPS) markLevelDone(doneKey(levelIdx));
        setDoneAll(true);
      } else {
        setIndex((x) => x + 1);
        setSelected(null);
      }
    }

    if (doneAll) {
      const hasNext = isPS && levelIdx < psLevels.length - 1;
      return (
        <PaperCard className="text-center">
          <p className="text-5xl mb-2">{isPS ? level.emoji : catMeta.emoji}</p>
          <h2 className={`text-xl mb-1 ${TYPE.heading}`} style={{ color: INK.ink }}>
            {isPS ? `Level ${levelIdx + 1} complete!` : `${catMeta.label} complete!`}
          </h2>
          <p className="font-bold mb-4" style={{ color: INK.mutedInk }}>
            {isPS ? level.title : "Nice work spotting the right words."}
          </p>
          {hasNext && (
            <InkButton accent={ACCENT} className="w-full mb-3" onClick={() => pickLevel(levelIdx + 1)}>
              Next level →
            </InkButton>
          )}
          <InkButton
            accent={hasNext ? { solid: INK.gold, dark: INK.goldDark, on: INK.ink } : ACCENT}
            className="w-full"
            onClick={onComplete}
          >
            Back to Missions
          </InkButton>
          {isPS && (
            <button onClick={() => setLevelIdx(null)} className="mt-3 block w-full text-xs font-bold underline decoration-dotted" style={{ color: INK.mutedInk }}>
              📋 All levels
            </button>
          )}
          <button onClick={handleRefresh} className="mt-3 text-xs font-bold underline decoration-dotted" style={{ color: INK.mutedInk }}>
            🔄 Try again with new questions
          </button>
        </PaperCard>
      );
    }

    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <PaperBackButton onClick={() => (isPS ? setLevelIdx(null) : setCategory(null))}>
            {isPS ? "← Levels" : "← Categories"}
          </PaperBackButton>
          <div className="flex gap-2">
            {isPS && (
              <button
                onClick={() => setStarted(false)}
                className={`rounded-2xl px-3 py-2 text-xs sm:text-sm transition-all active:translate-y-[2px] ${TYPE.caption}`}
                style={{ backgroundColor: INK.paperCard, color: ACCENT.solid, border: `1.5px solid ${ACCENT.tintBorder}`, boxShadow: `0 3px 0 ${ACCENT.tintBorder}` }}
              >
                📖 Rule
              </button>
            )}
            <PaperRefreshButton onClick={handleRefresh} />
          </div>
        </div>
        <div className="text-center">
          {isPS ? (
            <span
              className={`inline-block text-xs px-2.5 py-1 rounded-full ${TYPE.caption}`}
              style={{ backgroundColor: ACCENT.tint, color: ACCENT.solid, border: `1px solid ${ACCENT.tintBorder}` }}
            >
              Level {levelIdx + 1} of {psLevels.length}
            </span>
          ) : (
            <PaperTierBadge tier={tier} />
          )}
          <br />
          <span className={`text-sm mt-1 inline-block ${TYPE.caption}`} style={{ color: INK.mutedInk }}>
            {isPS ? `${level.emoji} ${level.title}` : `${catMeta.emoji} ${catMeta.label}`} · {index + 1}/{items.length}
          </span>
        </div>

        <PaperCard accent={ACCENT}>
          <QuestionBlock q={q} selected={selected} onSelect={selectOption} accent={ACCENT} />
          {locked && (
            <InkButton accent={ACCENT} className="w-full mt-4" onClick={handleNext}>
              {isLast ? "Finish 🎉" : "Next →"}
            </InkButton>
          )}
        </PaperCard>
      </div>
    );
  }

  window.App.GrammarModule = GrammarModule;
})();
