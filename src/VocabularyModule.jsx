// New module: Vocabulary Builder — flashcard flow through 10 words for the
// tier, each showing English word + part of speech, then flipping to reveal
// the Traditional Chinese translation, definition, and an example sentence.
window.App = window.App || {};

(function () {
  const { useState, useMemo } = React;
  const { Card, Button, BackButton, RefreshButton } = window.App.UI;
  const { speak } = window.App;

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function posColor(pos) {
    if (pos.includes("verb") && pos.includes("noun")) return "violet";
    if (pos.includes("verb") && pos.includes("adj")) return "violet";
    if (pos.startsWith("noun")) return "sky";
    if (pos.startsWith("verb")) return "emerald";
    if (pos.startsWith("adj")) return "amber";
    return "teal";
  }

  function VocabularyModule({ tier, onBack, onComplete, voicePref }) {
    const baseItems = window.App.Content.VOCABULARY_ITEMS[tier] || window.App.Content.VOCABULARY_ITEMS.easy;
    const [runSeed, setRunSeed] = useState(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const items = useMemo(() => shuffleArray(baseItems), [baseItems, runSeed]);
    const [index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [doneAll, setDoneAll] = useState(false);

    const item = items[index];
    const isLast = index === items.length - 1;
    const color = posColor(item.pos);

    function handleRefresh() {
      setRunSeed((s) => s + 1);
      setIndex(0);
      setFlipped(false);
      setDoneAll(false);
    }

    function handleNext() {
      if (isLast) {
        setDoneAll(true);
      } else {
        setIndex((i) => i + 1);
        setFlipped(false);
      }
    }

    if (doneAll) {
      return (
        <Card className="text-center">
          <p className="text-5xl mb-2">📔</p>
          <h2 className="text-xl font-extrabold text-stone-800 mb-1">You learned {items.length} new words today!</h2>
          <p className="text-stone-500 font-bold mb-4">Great vocabulary building.</p>
          <Button color="teal" className="w-full" onClick={onComplete}>
            Back to Missions
          </Button>
          <button onClick={handleRefresh} className="mt-3 text-xs font-bold text-stone-400 underline decoration-dotted">
            🔄 Study this set again, shuffled
          </button>
        </Card>
      );
    }

    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <BackButton onClick={onBack} />
          <RefreshButton onClick={handleRefresh} label="Shuffle" />
        </div>
        <div className="text-center">
          <span className="text-sm font-extrabold text-stone-400">
            Word {index + 1} of {items.length}
          </span>
        </div>

        <Card>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className={`text-xs font-extrabold px-2 py-1 rounded-full bg-${color}-100 text-${color}-600 uppercase`}>
              {item.pos}
            </span>
          </div>

          <p className="text-3xl font-extrabold text-stone-800 text-center mb-3">{item.word}</p>

          <div className="flex justify-center mb-4">
            <Button color="sky" className="px-4 py-2 text-sm" onClick={() => speak(item.word, voicePref)}>
              🔊 Hear It
            </Button>
          </div>

          {!flipped ? (
            <Button color="teal" className="w-full" onClick={() => setFlipped(true)}>
              Show Meaning 🔎
            </Button>
          ) : (
            <div className="flex flex-col gap-3">
              <div className="rounded-2xl border-4 border-teal-200 bg-teal-50 p-3 text-center">
                <p className="text-2xl font-extrabold text-teal-700">{item.zh}</p>
              </div>
              <div className="rounded-xl border-4 border-stone-200 bg-stone-50 p-3">
                <p className="text-xs font-extrabold text-stone-400 mb-1">Meaning:</p>
                <p className="text-sm font-bold text-stone-700 mb-2">{item.definition}</p>
                <p className="text-xs font-extrabold text-stone-400 mb-1">Example:</p>
                <p className="text-sm font-bold text-stone-700 italic">"{item.example}"</p>
              </div>
              <Button color="emerald" className="w-full" onClick={handleNext}>
                {isLast ? "Finish 🎉" : "Next Word →"}
              </Button>
            </div>
          )}
        </Card>
      </div>
    );
  }

  window.App.VocabularyModule = VocabularyModule;
})();
