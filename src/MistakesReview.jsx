// Mistakes notebook review screen ("Mistake Review"): walks through the questions that
// are due today (oldest due first, at most Mistakes.REVIEW_BATCH per round).
// Each question is shown the way it was originally asked: reading-type
// questions get a "Show passage" toggle with the original text, Listening
// questions get a play button (the passage is never shown, as in Listening
// itself). After answering, the correct answer and the original explanation
// appear straight away (QuestionBlock), plus when the question will come back.
// Scheduling lives in mistakes.jsx; this screen only reports right/wrong via
// onAnswer(key, correct).
window.App = window.App || {};

(function () {
  const { useState, useEffect } = React;
  const { Storage, Mistakes, GlossaryText, speak } = window.App;
  const { INK, TYPE, PaperCard, InkButton, PaperBackButton } = window.App.UI;
  const { QuestionBlock, useShuffledQuestion } = window.App.QuizQuestion;

  const ACCENT = { solid: INK.stamp, dark: INK.stampDark, tint: "#F3E1DF", tintBorder: "#E7C9C4", on: INK.paper };

  function moduleLabel(key) {
    const m = Storage.MODULES.find((x) => x.key === key);
    return m ? `${m.emoji} ${m.label}` : key;
  }

  function nextReviewText(entry) {
    if (!entry) return "";
    if (entry.status === "mastered") return "🎉 Mastered! Removed from the notebook";
    if (entry.stage === 0) return "📅 Review again tomorrow";
    if (entry.stage === 1) return "📅 Review again in 3 days";
    return "📅 Review again in 7 days";
  }

  function MistakesReview({ state, voicePref, onBack, onAnswer }) {
    const [session, setSession] = useState(() => Mistakes.dueList(state, Storage.todayStr()));
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [showPassage, setShowPassage] = useState(false);
    const [right, setRight] = useState(0);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
      return () => {
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      };
    }, []);

    const cur = session[index];
    const q = useShuffledQuestion(cur ? cur.question : undefined);
    const sum = Mistakes.summary(state);

    function selectOption(i) {
      if (selected !== null) return;
      const correct = i === q.correctIndex;
      setSelected(i);
      if (correct) setRight((n) => n + 1);
      onAnswer(cur.key, correct);
    }

    function handleNext() {
      if (index + 1 < session.length) {
        setIndex(index + 1);
        setSelected(null);
        setShowPassage(false);
      } else {
        setFinished(true);
      }
    }

    function startNextBatch() {
      setSession(Mistakes.dueList(state, Storage.todayStr()));
      setIndex(0);
      setSelected(null);
      setShowPassage(false);
      setRight(0);
      setFinished(false);
    }

    if (session.length === 0 || finished) {
      const remaining = Mistakes.countDue(state, Storage.todayStr());
      return (
        <div className="flex flex-col gap-4">
          <PaperBackButton onClick={onBack} />
          <PaperCard className="text-center">
            <p className="text-5xl mb-2">{finished ? "🎉" : "👍"}</p>
            <h2 className={`text-xl mb-2 ${TYPE.heading}`} style={{ color: INK.ink }}>
              {finished ? `You reviewed ${session.length} question${session.length === 1 ? "" : "s"} and got ${right} right` : "Nothing to review today 👍"}
            </h2>
            <p className="font-bold text-sm" style={{ color: INK.mutedInk }}>
              {sum.active} still to master · {sum.mastered} mastered.
            </p>
            {remaining > 0 && (
              <InkButton accent={ACCENT} className="w-full mt-4" onClick={startNextBatch}>
                {remaining} more due — review the next batch
              </InkButton>
            )}
          </PaperCard>
        </div>
      );
    }

    const entry = state.mistakes && state.mistakes.entries[cur.key];
    const answered = selected !== null;

    return (
      <div className="flex flex-col gap-4">
        <PaperBackButton onClick={onBack} />
        <div className="text-center">
          <span className={`text-sm ${TYPE.caption}`} style={{ color: INK.mutedInk }}>
            📒 Mistake Review · Question {index + 1}/{session.length} · {moduleLabel(cur.module)}
          </span>
        </div>

        <PaperCard accent={ACCENT}>
          {cur.listenText && (
            <InkButton accent={ACCENT} className="w-full mb-3" onClick={() => speak(cur.listenText, voicePref)}>
              🔊 Listen
            </InkButton>
          )}

          {cur.passage && (
            <div className="mb-3">
              <button
                onClick={() => setShowPassage((v) => !v)}
                className={`text-sm underline decoration-dotted ${TYPE.caption}`}
                style={{ color: ACCENT.solid }}
              >
                📖 {showPassage ? "Hide passage" : "Show passage"}
              </button>
              {showPassage && (
                <div className="mt-2 rounded-2xl p-3" style={{ backgroundColor: INK.goldTint, border: `1.5px solid ${INK.goldTintBorder}` }}>
                  {cur.passage.title && (
                    <h3 className={`text-base mb-1 ${TYPE.heading}`} style={{ color: INK.ink }}>
                      {cur.passage.title}
                    </h3>
                  )}
                  <GlossaryText text={cur.passage.passage} className="leading-relaxed font-medium" />
                </div>
              )}
            </div>
          )}

          <QuestionBlock q={q} selected={selected} onSelect={selectOption} accent={ACCENT} />

          {answered && (
            <p className="mt-3 text-sm font-extrabold" style={{ color: INK.ink }}>
              {nextReviewText(entry)}
            </p>
          )}

          {answered && (
            <InkButton accent={ACCENT} className="w-full mt-4" onClick={handleNext}>
              {index + 1 < session.length ? "Next →" : "Finish 🎉"}
            </InkButton>
          )}
        </PaperCard>
      </div>
    );
  }

  window.App.MistakesReview = MistakesReview;
})();
