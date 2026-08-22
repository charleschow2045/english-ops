// Shared engine for passage + question modules: Storytelling, Reading, Comprehension.
// Steps through each item's questions one at a time, then a completion screen.
// Questions can be "mc" / "fillblank" (via QuestionBlock) or "shortanswer"
// (free-text self-check: type an answer, reveal a model answer, move on —
// no external grading, so there's no pass/fail, just reflection).
window.App = window.App || {};

(function () {
  const { useState } = React;
  const { Card, Button } = window.App.UI;
  const { GlossaryText } = window.App;
  const { QuestionBlock, isCorrectAnswer } = window.App.QuizQuestion;

  function PassageModule({ items, tier, onBack, onComplete, itemLabel, color, completionEmoji, completionTitle }) {
    const list = items[tier] || items.easy;
    const [index, setIndex] = useState(0);
    const [qIndex, setQIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [answerText, setAnswerText] = useState("");
    const [revealed, setRevealed] = useState(false);
    const [doneAll, setDoneAll] = useState(false);

    const item = list[index];
    const q = item.questions[qIndex];
    const isShortAnswer = q.type === "shortanswer";
    const answered = isShortAnswer ? revealed : isCorrectAnswer(q, selected);
    const isLastQ = qIndex === item.questions.length - 1;
    const isLastItem = index === list.length - 1;

    function selectOption(i) {
      if (answered) return;
      setSelected(i);
    }

    function resetQuestionState() {
      setSelected(null);
      setAnswerText("");
      setRevealed(false);
    }

    function handleNext() {
      if (isLastQ) {
        if (isLastItem) {
          setDoneAll(true);
        } else {
          setIndex((x) => x + 1);
          setQIndex(0);
          resetQuestionState();
        }
      } else {
        setQIndex((x) => x + 1);
        resetQuestionState();
      }
    }

    if (doneAll) {
      return (
        <Card className="text-center">
          <p className="text-5xl mb-2">{completionEmoji}</p>
          <h2 className="text-xl font-extrabold text-stone-800 mb-4">{completionTitle}</h2>
          <Button color={color} className="w-full" onClick={onComplete}>
            Back to Missions
          </Button>
        </Card>
      );
    }

    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="text-sm font-extrabold text-indigo-500">
            ← Back
          </button>
          <span className="text-sm font-extrabold text-stone-400">
            {itemLabel} {index + 1}/{list.length} · Q{qIndex + 1}/{item.questions.length}
          </span>
        </div>

        <Card>
          {item.title && <h2 className="text-lg font-extrabold text-stone-800 mb-2">{item.title}</h2>}
          {item.passage && <GlossaryText text={item.passage} className="text-stone-600 font-medium leading-relaxed mb-4" />}

          {item.tipTitle && (
            <div className="mb-4 rounded-2xl border-4 border-violet-200 bg-violet-50 p-3">
              <p className="text-sm font-extrabold text-violet-600">{item.tipTitle}</p>
              <p className="text-sm font-bold text-violet-500 mt-1">{item.tip}</p>
            </div>
          )}

          {isShortAnswer ? (
            <div>
              <p className="font-extrabold text-stone-800">{q.prompt}</p>
              <textarea
                value={answerText}
                onChange={(e) => setAnswerText(e.target.value)}
                disabled={revealed}
                rows={3}
                placeholder="Type your answer..."
                className="w-full mt-2 rounded-xl border-4 border-stone-300 bg-white text-stone-800 font-bold px-4 py-3 outline-none focus:border-indigo-400 resize-none disabled:bg-stone-50"
              />
              {!revealed ? (
                <Button
                  color={color}
                  className="w-full mt-3"
                  onClick={() => setRevealed(true)}
                  disabled={answerText.trim().length < 3}
                >
                  Check My Answer 🔎
                </Button>
              ) : (
                <div className="mt-3 rounded-xl border-4 border-emerald-200 bg-emerald-50 p-3">
                  <p className="text-xs font-extrabold text-emerald-600 mb-1">💡 Here's an idea of a strong answer:</p>
                  <p className="text-sm font-bold text-emerald-700">{q.modelAnswer}</p>
                </div>
              )}
            </div>
          ) : (
            <QuestionBlock q={q} selected={selected} onSelect={selectOption} />
          )}

          {answered && (
            <Button color={color} className="w-full mt-4" onClick={handleNext}>
              {isLastQ && isLastItem ? "Finish 🎉" : "Next →"}
            </Button>
          )}
        </Card>
      </div>
    );
  }

  window.App.PassageModule = PassageModule;
})();
