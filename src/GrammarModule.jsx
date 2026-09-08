// Grammar drills — pick a category (Mixed / Tenses / Prepositions), then step
// through that category's tier-appropriate fill-in-the-blank exercises.
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
    { key: "preposition", label: "Prepositions", emoji: "🧭", blurb: "Practice tricky words like at, in, on, and to." },
  ];

  const SESSION_SIZE = 8;

  function GrammarModule({ tier, onBack, onComplete }) {
    const [category, setCategory] = useState(null);
    const [runSeed, setRunSeed] = useState(0);
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [doneAll, setDoneAll] = useState(false);

    function pickCategory(key) {
      setCategory(key);
      setRunSeed(0);
      setIndex(0);
      setSelected(null);
      setDoneAll(false);
    }

    // Hooks must run unconditionally on every render (Rules of Hooks), so
    // these are computed before the early-return below, with a safe fallback
    // bank while no category has been picked yet.
    const catMeta = CATEGORIES.find((c) => c.key === category) || CATEGORIES[0];
    const bank = window.App.Content.GRAMMAR_ITEMS[category || "mixed"];
    const baseItems = bank[tier] || bank.easy;
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
        setDoneAll(true);
      } else {
        setIndex((x) => x + 1);
        setSelected(null);
      }
    }

    if (doneAll) {
      return (
        <PaperCard className="text-center">
          <p className="text-5xl mb-2">{catMeta.emoji}</p>
          <h2 className={`text-xl mb-1 ${TYPE.heading}`} style={{ color: INK.ink }}>
            {catMeta.label} complete!
          </h2>
          <p className="font-bold mb-4" style={{ color: INK.mutedInk }}>
            Nice work spotting the right words.
          </p>
          <InkButton accent={ACCENT} className="w-full" onClick={onComplete}>
            Back to Missions
          </InkButton>
          <button onClick={handleRefresh} className="mt-3 text-xs font-bold underline decoration-dotted" style={{ color: INK.mutedInk }}>
            🔄 Try again with new questions
          </button>
        </PaperCard>
      );
    }

    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <PaperBackButton onClick={() => setCategory(null)}>← Categories</PaperBackButton>
          <PaperRefreshButton onClick={handleRefresh} />
        </div>
        <div className="text-center">
          <PaperTierBadge tier={tier} />
          <br />
          <span className={`text-sm mt-1 inline-block ${TYPE.caption}`} style={{ color: INK.mutedInk }}>
            {catMeta.emoji} {catMeta.label} · {index + 1}/{items.length}
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
