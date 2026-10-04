// Mistakes notebook review screen ("錯題重溫"): walks through the questions that
// are due today (oldest due first, at most Mistakes.REVIEW_BATCH per round).
// Each question is shown the way it was originally asked: reading-type
// questions get a "睇返文章" toggle with the original text, Listening
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
    if (entry.status === "mastered") return "🎉 已掌握,移出錯題本";
    if (entry.stage === 0) return "📅 明日再溫";
    if (entry.stage === 1) return "📅 3 日後再溫";
    return "📅 7 日後再溫";
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
              {finished ? `今次溫咗 ${session.length} 題,答啱 ${right} 題` : "今日冇錯題要溫 👍"}
            </h2>
            <p className="font-bold text-sm" style={{ color: INK.mutedInk }}>
              錯題本入面仲有 {sum.active} 題未掌握,已掌握 {sum.mastered} 題。
            </p>
            {remaining > 0 && (
              <InkButton accent={ACCENT} className="w-full mt-4" onClick={startNextBatch}>
                仲有 {remaining} 題到期,再溫下一批
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
            📒 錯題重溫 · 第 {index + 1}/{session.length} 題 · {moduleLabel(cur.module)}
          </span>
        </div>

        <PaperCard accent={ACCENT}>
          {cur.listenText && (
            <InkButton accent={ACCENT} className="w-full mb-3" onClick={() => speak(cur.listenText, voicePref)}>
              🔊 播放
            </InkButton>
          )}

          {cur.passage && (
            <div className="mb-3">
              <button
                onClick={() => setShowPassage((v) => !v)}
                className={`text-sm underline decoration-dotted ${TYPE.caption}`}
                style={{ color: ACCENT.solid }}
              >
                📖 {showPassage ? "收起文章" : "睇返文章"}
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
              {index + 1 < session.length ? "下一題 →" : "完成 🎉"}
            </InkButton>
          )}
        </PaperCard>
      </div>
    );
  }

  window.App.MistakesReview = MistakesReview;
})();
