// Module 1: Listening — TTS plays a passage, child answers a multiple-choice question
window.App = window.App || {};

(function () {
  const { useState, useEffect, useMemo } = React;
  const { Card, Button, BackButton, RefreshButton } = window.App.UI;
  const { speak, VoicePicker } = window.App;
  const { useShuffledQuestion } = window.App.QuizQuestion;

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function ListeningModule({ tier, onBack, onComplete, voicePref, onVoiceChange }) {
    const basePassages = window.App.Content.LISTENING_PASSAGES[tier] || window.App.Content.LISTENING_PASSAGES.easy;
    const [runSeed, setRunSeed] = useState(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const passages = useMemo(() => shuffleArray(basePassages), [basePassages, runSeed]);
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [played, setPlayed] = useState(false);
    const [doneAll, setDoneAll] = useState(false);

    useEffect(() => {
      return () => {
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      };
    }, []);

    const rawPassage = passages[index];
    const passage = useShuffledQuestion(rawPassage);
    const isLast = index === passages.length - 1;
    const locked = selected !== null;
    const isCorrect = selected !== null && selected === passage.correctIndex;

    function handlePlay() {
      speak(rawPassage.text, voicePref);
      setPlayed(true);
    }

    function selectOption(i) {
      if (selected !== null) return;
      setSelected(i);
    }

    function handleRefresh() {
      setRunSeed((s) => s + 1);
      setIndex(0);
      setSelected(null);
      setPlayed(false);
      setDoneAll(false);
    }

    function handleNext() {
      if (isLast) {
        setDoneAll(true);
      } else {
        setIndex((i) => i + 1);
        setSelected(null);
        setPlayed(false);
      }
    }

    if (doneAll) {
      return (
        <div className="flex flex-col gap-4">
          <Card className="text-center">
            <p className="text-5xl mb-2">🎉</p>
            <h2 className="text-xl font-extrabold text-stone-800 mb-1">Great listening today!</h2>
            <p className="text-stone-500 font-bold mb-4">You finished all {passages.length} passages.</p>
            <Button color="sky" className="w-full" onClick={onComplete}>
              Back to Missions
            </Button>
            <button onClick={handleRefresh} className="mt-3 text-xs font-bold text-stone-400 underline decoration-dotted">
              🔄 Do it again with new passages
            </button>
          </Card>
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <BackButton onClick={onBack} />
          <RefreshButton onClick={handleRefresh} />
        </div>
        <div className="text-center">
          <span className="text-sm font-extrabold text-stone-400">
            Passage {index + 1} of {passages.length}
          </span>
        </div>

        <Card>
          <VoicePicker voicePref={voicePref} onChange={onVoiceChange} />

          <Button color="sky" className="w-full" onClick={handlePlay}>
            {played ? "🔁 Listen Again" : "🔊 Listen"}
          </Button>

          <p className="mt-4 font-extrabold text-stone-800">{passage.question}</p>

          <div className="mt-3 flex flex-col gap-2">
            {passage.options.map((opt, i) => {
              const isSelected = selected === i;
              const isTheCorrectOne = i === passage.correctIndex;
              const showCorrect = locked && isTheCorrectOne;
              const showWrong = locked && isSelected && !isTheCorrectOne;
              return (
                <button
                  key={i}
                  onClick={() => selectOption(i)}
                  disabled={locked}
                  className={`text-left rounded-xl border-4 font-bold px-4 py-3 transition-all disabled:opacity-100
                    ${
                      showCorrect
                        ? "bg-emerald-400 border-emerald-600 text-emerald-950"
                        : showWrong
                        ? "bg-amber-300 border-amber-500 text-amber-950"
                        : "bg-white border-stone-200 text-stone-700"
                    }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {locked && (
            <div className="mt-3">
              <p className={`font-extrabold ${isCorrect ? "text-emerald-600" : "text-amber-600"}`}>
                {isCorrect ? "✅ Correct! Great listening!" : "💛 Not quite — here's the right answer:"}
              </p>
              <p className="mt-1 text-sm font-bold text-stone-500">
                {rawPassage.explanation || "Listen again to catch the detail that answers this question!"}
              </p>
            </div>
          )}

          {locked && (
            <Button color="emerald" className="w-full mt-4" onClick={handleNext}>
              {isLast ? "Finish 🎉" : "Next →"}
            </Button>
          )}
        </Card>
      </div>
    );
  }

  window.App.ListeningModule = ListeningModule;
})();
