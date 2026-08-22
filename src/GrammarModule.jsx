// Grammar drills — pick a category (Mixed / Tenses / Prepositions), then step
// through that category's tier-appropriate fill-in-the-blank exercises.
window.App = window.App || {};

(function () {
  const { useState } = React;
  const { Card, Button } = window.App.UI;
  const { QuestionBlock, isCorrectAnswer } = window.App.QuizQuestion;

  const CATEGORIES = [
    { key: "mixed", label: "Mixed Grammar", emoji: "🔀", color: "teal", blurb: "A mix of grammar rules for your level." },
    { key: "tense", label: "Tenses", emoji: "⏰", color: "sky", blurb: "Practice past, present, and future tense forms." },
    { key: "preposition", label: "Prepositions", emoji: "🧭", color: "violet", blurb: "Practice tricky words like at, in, on, and to." },
  ];

  function GrammarModule({ tier, onBack, onComplete }) {
    const [category, setCategory] = useState(null);
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [doneAll, setDoneAll] = useState(false);

    function pickCategory(key) {
      setCategory(key);
      setIndex(0);
      setSelected(null);
      setDoneAll(false);
    }

    if (!category) {
      return (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <button onClick={onBack} className="text-sm font-extrabold text-indigo-500">
              ← Back
            </button>
            <span className="text-sm font-extrabold text-stone-400">Grammar Drills</span>
          </div>
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

    const catMeta = CATEGORIES.find((c) => c.key === category);
    const bank = window.App.Content.GRAMMAR_ITEMS[category];
    const items = bank[tier] || bank.easy;
    const q = items[index];
    const correct = isCorrectAnswer(q, selected);
    const isLast = index === items.length - 1;

    function selectOption(i) {
      if (correct) return;
      setSelected(i);
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
        </Card>
      );
    }

    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <button onClick={() => setCategory(null)} className="text-sm font-extrabold text-indigo-500">
            ← Categories
          </button>
          <span className="text-sm font-extrabold text-stone-400">
            {catMeta.emoji} {catMeta.label} · {index + 1}/{items.length}
          </span>
        </div>

        <Card>
          <QuestionBlock q={q} selected={selected} onSelect={selectOption} />
          {correct && (
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
