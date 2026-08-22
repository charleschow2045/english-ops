// Shared multiple-choice / fill-in-the-blank question renderer, used by
// PassageModule (Storytelling/Reading/Comprehension) and GrammarModule.
window.App = window.App || {};

(function () {
  function isCorrectAnswer(q, selected) {
    return selected !== null && selected === q.correctIndex;
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
    const correct = isCorrectAnswer(q, selected);
    return (
      <div>
        <p className="font-extrabold text-stone-800">
          {q.type === "fillblank" ? renderBlankSentence(q.sentence) : q.prompt}
        </p>
        <div className="mt-3 flex flex-col gap-2">
          {q.options.map((opt, i) => {
            const isSelected = selected === i;
            const showCorrect = isSelected && correct;
            const showWrong = isSelected && !correct;
            return (
              <button
                key={i}
                onClick={() => onSelect(i)}
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
          <p className={`mt-3 font-extrabold ${correct ? "text-emerald-600" : "text-amber-600"}`}>
            {correct ? "✅ Correct! Nice work!" : "💛 Not quite — give it another try!"}
          </p>
        )}
      </div>
    );
  }

  window.App.QuizQuestion = { QuestionBlock, isCorrectAnswer };
})();
