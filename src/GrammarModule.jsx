// Grammar drills — pick a category, then step through that category's
// exercises. Mixed / Tenses / Prepositions are tier-scaled fill-in-the-blank
// sets. "Past Simple Steps" is a different shape: 11 sub-levels (regular
// -ed / -d / doubling / -ied rules, five irregular-verb groups, did/didn't,
// and editing), each opening with a Learn card before the practice starts.
// Those levels are the same for every difficulty tier, so no tier filtering.
// Migrated to the "探險護照" system — see theme.jsx header comment.
window.App = window.App || {};

(function () {
  const { useState, useMemo } = React;
  const { INK, TYPE, PaperCard, InkButton, PaperBackButton, PaperRefreshButton, PaperTierBadge, MODULE_ACCENTS } = window.App.UI;
  const { sampleArray } = window.App;
  const { QuestionBlock, useShuffledQuestion } = window.App.QuizQuestion;

  const ACCENT = MODULE_ACCENTS.grammar;

  const CATEGORIES = [
    { key: "mixed", label: "Mixed Grammar", emoji: "🔀", blurb: "A mix of grammar rules for your level." },
    { key: "tense", label: "Tenses", emoji: "⏰", blurb: "Practice past, present, and future tense forms." },
    { key: "pastsimple", label: "Past Simple Steps", emoji: "⏪", blurb: "Step by step: -ed, -d, doubling, -ied and irregular verbs." },
    { key: "preposition", label: "Prepositions", emoji: "🧭", blurb: "Practice tricky words like at, in, on, and to." },
  ];

  // Section labels shown in the Past Simple level list, keyed by the index of
  // the first level in each section.
  const PS_SECTIONS = { 0: "Regular verbs", 4: "Irregular verbs", 9: "Questions and editing" };

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

  function GrammarModule({ tier, onBack, onComplete }) {
    const [category, setCategory] = useState(null);
    const [runSeed, setRunSeed] = useState(0);
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [doneAll, setDoneAll] = useState(false);
    const [levelIdx, setLevelIdx] = useState(null);
    const [started, setStarted] = useState(false);
    const [doneLevels, setDoneLevels] = useState([]);

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
    const psLevels = window.App.Content.GRAMMAR_PAST_SIMPLE || [];
    const isPS = category === "pastsimple";
    const level = isPS && levelIdx !== null ? psLevels[levelIdx] : null;
    const catMeta = CATEGORIES.find((c) => c.key === category) || CATEGORIES[0];
    const bank = window.App.Content.GRAMMAR_ITEMS[isPS ? "mixed" : category || "mixed"];
    const baseItems = isPS ? (level ? level.items : psLevels[0].items) : bank[tier] || bank.easy;
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
              ⏪ Past Simple Steps
            </h2>
            <p className="font-bold text-sm" style={{ color: INK.mutedInk }}>
              Work through the levels in order. Each one starts with a short lesson, then a practice round.
            </p>
          </PaperCard>
          <div className="flex flex-col gap-3">
            {psLevels.map((lv, i) => (
              <div key={lv.id}>
                {PS_SECTIONS[i] && (
                  <p className={`text-xs mb-2 mt-1 ${TYPE.caption}`} style={{ color: INK.mutedInk }}>
                    {PS_SECTIONS[i]}
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
                      backgroundColor: doneLevels.includes(i) ? ACCENT.solid : ACCENT.tint,
                      color: doneLevels.includes(i) ? ACCENT.on : ACCENT.solid,
                    }}
                  >
                    {doneLevels.includes(i) ? "✓" : i + 1}
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
        if (isPS) setDoneLevels((d) => (d.includes(levelIdx) ? d : [...d, levelIdx]));
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
