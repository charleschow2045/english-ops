// Shared multiple-choice / fill-in-the-blank question renderer, used by
// PassageModule (Storytelling/Reading/Comprehension) and GrammarModule.
//
// Behavior: the first tap locks the question — the correct option is always
// revealed (green), the child's pick is marked (green if right, amber if
// wrong), and an explanation is shown. No more infinite re-guessing; this
// makes right/wrong meaningful and teaches the "why," especially for grammar.
window.App = window.App || {};

(function () {
  function isCorrectAnswer(q, selected) {
    return selected !== null && selected === q.correctIndex;
  }

  // Shuffles a question's options once per question instance so the correct
  // answer isn't predictably in the same position every time.
  function useShuffledQuestion(q) {
    return React.useMemo(() => {
      if (!q || !q.options) return q;
      const withFlag = q.options.map((opt, i) => ({ opt, isCorrect: i === q.correctIndex }));
      for (let i = withFlag.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [withFlag[i], withFlag[j]] = [withFlag[j], withFlag[i]];
      }
      return { ...q, options: withFlag.map((x) => x.opt), correctIndex: withFlag.findIndex((x) => x.isCorrect) };
    }, [q]);
  }

  function renderBlankSentence(sentence) {
    const parts = sentence.split("___");
    return (
      <>
        {parts[0]}
        <span className="inline-block mx-1 px-3 py-0.5 rounded-lg bg-indigo-100 text-indigo-400 font-black align-middle">
          ▁▁▁▁
        </span>
        {parts[1]}
      </>
    );
  }

  function QuestionBlock({ q, selected, onSelect }) {
    const locked = selected !== null;
    const correct = isCorrectAnswer(q, selected);
    return (
      <div>
        <p className="font-extrabold text-stone-800">
          {q.type === "fillblank" ? renderBlankSentence(q.sentence) : q.prompt}
        </p>
        <div className="mt-3 flex flex-col gap-2">
          {q.options.map((opt, i) => {
            const isSelected = selected === i;
            const isTheCorrectOne = i === q.correctIndex;
            const showCorrect = locked && isTheCorrectOne;
            const showWrong = locked && isSelected && !isTheCorrectOne;
            return (
              <button
                key={i}
                onClick={() => onSelect(i)}
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
            <p className={`font-extrabold ${correct ? "text-emerald-600" : "text-amber-600"}`}>
              {correct ? "✅ Correct! Nice work!" : "💛 Not quite — here's the right answer:"}
            </p>
            <p className="mt-1 text-sm font-bold text-stone-500">
              {q.explanation || "Re-read the passage above — the answer is right there!"}
            </p>
          </div>
        )}
      </div>
    );
  }

  window.App.QuizQuestion = { QuestionBlock, isCorrectAnswer, useShuffledQuestion };
})();
