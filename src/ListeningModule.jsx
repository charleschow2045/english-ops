// Module 1: Listening — TTS plays a passage, child answers a multiple-choice
// question. Migrated to the "探險護照" system — see theme.jsx header comment.
window.App = window.App || {};

(function () {
  const { useState, useEffect, useMemo } = React;
  const { INK, TYPE, PaperCard, InkButton, PaperBackButton, PaperRefreshButton, PaperTierBadge, MODULE_ACCENTS } = window.App.UI;
  const { speak, VoicePicker } = window.App;
  const { useShuffledQuestion } = window.App.QuizQuestion;

  const ACCENT = MODULE_ACCENTS.listening;

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // sessionSize: how many passages one session plays (drawn at random from the
  // tier's pool; "Do it again" draws a fresh set). Omit to play the whole pool.
  function ListeningModule({ tier, onBack, onComplete, voicePref, onVoiceChange, sessionSize }) {
    const basePassages = window.App.Content.LISTENING_PASSAGES[tier] || window.App.Content.LISTENING_PASSAGES.easy;
    const [runSeed, setRunSeed] = useState(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const passages = useMemo(() => shuffleArray(basePassages).slice(0, sessionSize || basePassages.length), [basePassages, runSeed, sessionSize]);
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
          <PaperCard className="text-center">
            <p className="text-5xl mb-2">🎉</p>
            <h2 className={`text-xl mb-1 ${TYPE.heading}`} style={{ color: INK.ink }}>
              Great listening today!
            </h2>
            <p className="font-bold mb-4" style={{ color: INK.mutedInk }}>
              You finished all {passages.length} passages.
            </p>
            <InkButton accent={ACCENT} className="w-full" onClick={onComplete}>
              Back to Missions
            </InkButton>
            <button onClick={handleRefresh} className="mt-3 text-xs font-bold underline decoration-dotted" style={{ color: INK.mutedInk }}>
              🔄 Do it again with new passages
            </button>
          </PaperCard>
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <PaperBackButton onClick={onBack} />
          <PaperRefreshButton onClick={handleRefresh} />
        </div>
        <div className="text-center">
          <PaperTierBadge tier={tier} />
          <br />
          <span className={`text-sm mt-1 inline-block ${TYPE.caption}`} style={{ color: INK.mutedInk }}>
            Passage {index + 1} of {passages.length}
          </span>
        </div>

        <PaperCard accent={ACCENT}>
          <VoicePicker voicePref={voicePref} onChange={onVoiceChange} accent={ACCENT} />

          <InkButton accent={ACCENT} className="w-full" onClick={handlePlay}>
            {played ? "🔁 Listen Again" : "🔊 Listen"}
          </InkButton>

          <p className={`mt-4 ${TYPE.heading}`} style={{ color: INK.ink }}>
            {passage.question}
          </p>

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
                  className="text-left rounded-xl font-bold px-4 py-3 transition-all disabled:opacity-100"
                  style={
                    showCorrect
                      ? { backgroundColor: ACCENT.solid, color: ACCENT.on, border: `2px solid ${ACCENT.dark}` }
                      : showWrong
                      ? { backgroundColor: INK.goldTint, color: "#7A2929", border: "2px solid #E7C9C4" }
                      : { backgroundColor: INK.paperCard, color: INK.ink, border: `2px solid ${ACCENT.tintBorder}` }
                  }
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {locked && (
            <div className="mt-3">
              <p className="font-extrabold" style={{ color: isCorrect ? ACCENT.solid : "#A83A3A" }}>
                {isCorrect ? "✅ Correct! Great listening!" : "💛 Not quite — here's the right answer:"}
              </p>
              <p className="mt-1 text-sm font-bold" style={{ color: INK.mutedInk }}>
                {rawPassage.explanation || "Listen again to catch the detail that answers this question!"}
              </p>
            </div>
          )}

          {locked && (
            <InkButton accent={ACCENT} className="w-full mt-4" onClick={handleNext}>
              {isLast ? "Finish 🎉" : "Next →"}
            </InkButton>
          )}
        </PaperCard>
      </div>
    );
  }

  window.App.ListeningModule = ListeningModule;
})();
