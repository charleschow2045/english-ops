// Module 1: Listening — TTS plays a passage, child answers a multiple-choice question
window.App = window.App || {};

(function () {
  const { useState, useEffect } = React;
  const { Card, Button } = window.App.UI;
  const { speak, VoicePicker } = window.App;

  function ListeningModule({ tier, onBack, onComplete, voicePref, onVoiceChange }) {
    const passages = window.App.Content.LISTENING_PASSAGES[tier] || window.App.Content.LISTENING_PASSAGES.easy;
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [played, setPlayed] = useState(false);
    const [doneAll, setDoneAll] = useState(false);

    useEffect(() => {
      return () => {
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      };
    }, []);

    const passage = passages[index];
    const isLast = index === passages.length - 1;
    const isCorrect = selected !== null && selected === passage.correctIndex;

    function handlePlay() {
      speak(passage.text, voicePref);
      setPlayed(true);
    }

    function selectOption(i) {
      if (isCorrect) return;
      setSelected(i);
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
          </Card>
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="text-sm font-extrabold text-indigo-500">
            ← Back
          </button>
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
              const showCorrect = isSelected && isCorrect;
              const showWrong = isSelected && !isCorrect;
              return (
                <button
                  key={i}
                  onClick={() => selectOption(i)}
                  className={`text-left rounded-xl border-4 font-bold px-4 py-3 transition-all
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

          {selected !== null && (
            <p className={`mt-3 font-extrabold ${isCorrect ? "text-emerald-600" : "text-amber-600"}`}>
              {isCorrect ? "✅ Correct! Great listening!" : "💛 Not quite — want to listen again and try?"}
            </p>
          )}

          {isCorrect && (
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
