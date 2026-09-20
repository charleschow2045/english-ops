// Shared engine for passage + question modules: Storytelling, Reading, Comprehension.
// Steps through each item's questions one at a time (locking on first answer,
// revealing the correct one + an explanation), then a completion screen.
// Questions can be "mc" / "fillblank" (via QuestionBlock) or "shortanswer"
// (free-text self-check: type an answer, reveal a model answer, move on —
// no external grading, so there's no pass/fail, just reflection).
window.App = window.App || {};

(function () {
  const { useState, useMemo } = React;
  const { Card, Button, BackButton, RefreshButton, TierBadge, INK, TYPE, PaperCard, InkButton, PaperBackButton, PaperRefreshButton, PaperTierBadge } = window.App.UI;
  const { GlossaryText, sampleArray } = window.App;
  const { QuestionBlock, useShuffledQuestion } = window.App.QuizQuestion;

  // `accent` (optional): a MODULE_ACCENTS entry from theme.jsx. When given,
  // renders with the new "探險護照" kraft-paper/ink look instead of the
  // legacy `color`-based Tailwind one — used for Reading only so far (see
  // Root.jsx and theme.jsx comments for the staged-rollout rationale).
  function PassageModule({ items, tier, onBack, onComplete, itemLabel, color, accent, completionEmoji, completionTitle, sessionSize = 1 }) {
    const bank = items[tier] || items.easy;
    const [runSeed, setRunSeed] = useState(0);
    // Picks a fresh random subset every session (including the very first
    // render — useMemo still runs its factory on mount), so the same item
    // doesn't always show first. Re-picks whenever runSeed changes (Refresh).
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const list = useMemo(() => sampleArray(bank, sessionSize), [bank, sessionSize, runSeed]);
    const [index, setIndex] = useState(0);
    const [qIndex, setQIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [answerText, setAnswerText] = useState("");
    const [revealed, setRevealed] = useState(false);
    const [doneAll, setDoneAll] = useState(false);

    const item = list[index];
    const rawQ = item.questions[qIndex];
    const q = useShuffledQuestion(rawQ);
    const isShortAnswer = q.type === "shortanswer";
    const locked = isShortAnswer ? revealed : selected !== null;
    const isLastQ = qIndex === item.questions.length - 1;
    const isLastItem = index === list.length - 1;

    function selectOption(i) {
      if (selected !== null) return;
      setSelected(i);
    }

    function resetQuestionState() {
      setSelected(null);
      setAnswerText("");
      setRevealed(false);
    }

    function handleRefresh() {
      setRunSeed((s) => s + 1);
      setIndex(0);
      setQIndex(0);
      resetQuestionState();
      setDoneAll(false);
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
      if (accent) {
        return (
          <PaperCard className="text-center">
            <p className="text-5xl mb-2">{completionEmoji}</p>
            <h2 className={`text-xl mb-4 ${TYPE.heading}`} style={{ color: INK.ink }}>
              {completionTitle}
            </h2>
            <div className="flex gap-3">
              <InkButton accent={accent} className="flex-1" onClick={onComplete}>
                Back to Missions
              </InkButton>
            </div>
            <button onClick={handleRefresh} className="mt-3 text-xs font-bold underline decoration-dotted" style={{ color: INK.mutedInk }}>
              🔄 Do it again with new questions
            </button>
          </PaperCard>
        );
      }
      return (
        <Card className="text-center">
          <p className="text-5xl mb-2">{completionEmoji}</p>
          <h2 className="text-xl font-extrabold text-stone-800 mb-4">{completionTitle}</h2>
          <div className="flex gap-3">
            <Button color={color} className="flex-1" onClick={onComplete}>
              Back to Missions
            </Button>
          </div>
          <button onClick={handleRefresh} className="mt-3 text-xs font-bold text-stone-400 underline decoration-dotted">
            🔄 Do it again with new questions
          </button>
        </Card>
      );
    }

    if (accent) {
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
              {itemLabel} {index + 1}/{list.length} · Q{qIndex + 1}/{item.questions.length}
            </span>
          </div>

          <PaperCard accent={accent}>
            {item.title && (
              <h2 className={`text-lg mb-2 ${TYPE.heading}`} style={{ color: INK.ink }}>
                {item.title}
              </h2>
            )}
            {item.passage && <GlossaryText text={item.passage} className="leading-relaxed mb-4 font-medium" />}

            {item.tipTitle && (
              <div className="mb-4 rounded-2xl p-3" style={{ backgroundColor: accent.tint, border: `1.5px solid ${accent.tintBorder}` }}>
                <p className="text-sm font-extrabold" style={{ color: accent.solid }}>
                  {item.tipTitle}
                </p>
                <p className="text-sm font-bold mt-1" style={{ color: INK.ink }}>
                  {item.tip}
                </p>
              </div>
            )}

            {q.tag && (
              <span
                className={`inline-block text-xs px-2.5 py-1 rounded-full mb-2 ${TYPE.caption}`}
                style={{ backgroundColor: accent.tint, color: accent.solid, border: `1px solid ${accent.tintBorder}` }}
              >
                {q.tag}
              </span>
            )}

            {isShortAnswer ? (
              <div>
                <p className={`text-lg sm:text-xl leading-snug ${TYPE.heading}`} style={{ color: INK.ink }}>
                  {q.prompt}
                </p>
                <textarea
                  value={answerText}
                  onChange={(e) => setAnswerText(e.target.value)}
                  disabled={revealed}
                  rows={3}
                  placeholder="Type your answer..."
                  className="w-full mt-2 rounded-xl font-bold text-base sm:text-lg px-4 py-3 outline-none resize-none"
                  style={{ backgroundColor: INK.paperCard, color: INK.ink, border: `2px solid ${accent.tintBorder}` }}
                />
                {!revealed ? (
                  <InkButton
                    accent={accent}
                    className="w-full mt-3"
                    onClick={() => setRevealed(true)}
                    disabled={answerText.trim().length < 3}
                  >
                    Check My Answer 🔎
                  </InkButton>
                ) : (
                  <div className="mt-3 rounded-xl p-3" style={{ backgroundColor: accent.tint, border: `1.5px solid ${accent.tintBorder}` }}>
                    <p className="text-sm font-extrabold mb-1" style={{ color: accent.solid }}>
                      💡 Here's an idea of a strong answer:
                    </p>
                    <p className="text-base font-bold" style={{ color: INK.ink }}>
                      {q.modelAnswer}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <QuestionBlock q={q} selected={selected} onSelect={selectOption} accent={accent} />
            )}

            {locked && (
              <InkButton accent={accent} className="w-full mt-4" onClick={handleNext}>
                {isLastQ && isLastItem ? "Finish 🎉" : "Next →"}
              </InkButton>
            )}
          </PaperCard>
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
          <TierBadge tier={tier} />
          <br />
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
              <p className="text-lg sm:text-xl font-extrabold text-stone-800 leading-snug">{q.prompt}</p>
              <textarea
                value={answerText}
                onChange={(e) => setAnswerText(e.target.value)}
                disabled={revealed}
                rows={3}
                placeholder="Type your answer..."
                className="w-full mt-2 rounded-xl border-4 border-stone-300 bg-white text-stone-800 font-bold text-base sm:text-lg px-4 py-3 outline-none focus:border-indigo-400 resize-none disabled:bg-stone-50"
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
                  <p className="text-sm font-extrabold text-emerald-600 mb-1">💡 Here's an idea of a strong answer:</p>
                  <p className="text-base font-bold text-emerald-700">{q.modelAnswer}</p>
                </div>
              )}
            </div>
          ) : (
            <QuestionBlock q={q} selected={selected} onSelect={selectOption} />
          )}

          {locked && (
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
