// Grammar drills — pick a category (Mixed / Tenses / Prepositions), then step
// through that category's tier-appropriate fill-in-the-blank exercises.
window.App = window.App || {};

(function () {
  const { useState, useMemo } = React;
  const { Card, Button, BackButton, RefreshButton } = window.App.UI;
  const { QuestionBlock, useShuffledQuestion } = window.App.QuizQuestion;

  const CATEGORIES = [
    { key: "mixed", label: "Mixed Grammar", emoji: "🔀", color: "teal", blurb: "A mix of grammar rules for your level." },
    { key: "tense", label: "Tenses", emoji: "⏰", color: "sky", blurb: "Practice past, present, and future tense forms." },
    { key: "preposition", label: "Prepositions", emoji: "🧭", color: "violet", blurb: "Practice tricky words like at, in, on, and to." },
  ];

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

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
    const items = useMemo(() => shuffleArray(baseItems), [baseItems, runSeed]);
    const rawQ = items[index];
    const q = useShuffledQuestion(rawQ);
    const locked = selected !== null;
    const isLast = index === items.length - 1;

    if (!category) {
      return (
        <div className="flex flex-col gap-4">
          <BackButton onClick={onBack} />
          <div className="flex flex-col gap-3">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                onClick={() => pickCategory(c.key)}
                className="w-full flex items-center gap-3 bg-white border-4 border-teal-200 rounded-2xl p-4 text-left active:translate-y-[2px] transition-all"
              >
                <span className="text-3xl">{c.emoji}</span>
                <div>
                  <p className="font-extrabold text-stone-800">{c.label}</p>
                  <p className="text-xs font-bold text-stone-400">{c.blurb}</p>
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
        <Card className="text-center">
          <p className="text-5xl mb-2">{catMeta.emoji}</p>
          <h2 className="text-xl font-extrabold text-stone-800 mb-1">{catMeta.label} complete!</h2>
          <p className="text-stone-500 font-bold mb-4">Nice work spotting the right words.</p>
          <Button color={catMeta.color} className="w-full" onClick={onComplete}>
            Back to Missions
          </Button>
          <button onClick={handleRefresh} className="mt-3 text-xs font-bold text-stone-400 underline decoration-dotted">
            🔄 Try again with new order
          </button>
        </Card>
      );
    }

    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <BackButton onClick={() => setCategory(null)}>← Categories</BackButton>
          <RefreshButton onClick={handleRefresh} />
        </div>
        <div className="text-center">
          <span className="text-sm font-extrabold text-stone-400">
            {catMeta.emoji} {catMeta.label} · {index + 1}/{items.length}
          </span>
        </div>

        <Card>
          <QuestionBlock q={q} selected={selected} onSelect={selectOption} />
          {locked && (
            <Button color={catMeta.color} className="w-full mt-4" onClick={handleNext}>
              {isLast ? "Finish 🎉" : "Next →"}
            </Button>
          )}
        </Card>
      </div>
    );
  }

  window.App.GrammarModule = GrammarModule;
})();
