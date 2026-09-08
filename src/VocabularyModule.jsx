// Vocabulary Builder — flashcard flow through 10 randomly-sampled words (from
// a pool of 40) for the tier, each showing English word + part of speech,
// then flipping to reveal the Traditional Chinese translation, definition,
// example sentence, and tap-to-explore similar/opposite words. Migrated to
// the "探險護照" system — see theme.jsx header comment. The per-part-of-
// speech rainbow badge colour was dropped in favour of the module's own
// single accent colour, matching every other migrated module.
window.App = window.App || {};

(function () {
  const { useState, useMemo } = React;
  const { INK, TYPE, PaperCard, InkButton, PaperBackButton, PaperRefreshButton, PaperTierBadge, MODULE_ACCENTS } = window.App.UI;
  const { speak, sampleArray } = window.App;

  const ACCENT = MODULE_ACCENTS.vocabulary;
  const SESSION_SIZE = 10;

  function RelatedWordChip({ item, voicePref }) {
    return (
      <button
        onClick={() => speak(item.word, voicePref)}
        className="rounded-lg px-2 py-1 text-left"
        style={{ backgroundColor: INK.paperCard, border: `2px solid ${ACCENT.tintBorder}` }}
      >
        <span className="text-sm font-extrabold" style={{ color: ACCENT.solid }}>
          {item.word}
        </span>
        <span className="text-xs font-bold" style={{ color: INK.mutedInk }}>
          {" "}
          · {item.zh}
        </span>
      </button>
    );
  }

  function VocabularyModule({ tier, onBack, onComplete, voicePref }) {
    const bank = window.App.Content.VOCABULARY_ITEMS[tier] || window.App.Content.VOCABULARY_ITEMS.easy;
    const [runSeed, setRunSeed] = useState(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const items = useMemo(() => sampleArray(bank, SESSION_SIZE), [bank, runSeed]);
    const [index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [doneAll, setDoneAll] = useState(false);

    const item = items[index];
    const isLast = index === items.length - 1;

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
        <PaperCard className="text-center">
          <p className="text-5xl mb-2">📔</p>
          <h2 className={`text-xl mb-1 ${TYPE.heading}`} style={{ color: INK.ink }}>
            You learned {items.length} new words today!
          </h2>
          <p className="font-bold mb-4" style={{ color: INK.mutedInk }}>
            Great vocabulary building.
          </p>
          <InkButton accent={ACCENT} className="w-full" onClick={onComplete}>
            Back to Missions
          </InkButton>
          <button onClick={handleRefresh} className="mt-3 text-xs font-bold underline decoration-dotted" style={{ color: INK.mutedInk }}>
            🔄 Study a new set of 10
          </button>
        </PaperCard>
      );
    }

    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <PaperBackButton onClick={onBack} />
          <PaperRefreshButton onClick={handleRefresh} label="New set" />
        </div>
        <div className="text-center">
          <PaperTierBadge tier={tier} />
          <br />
          <span className={`text-sm mt-1 inline-block ${TYPE.caption}`} style={{ color: INK.mutedInk }}>
            Word {index + 1} of {items.length}
          </span>
        </div>

        <PaperCard accent={ACCENT}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span
              className="text-xs font-extrabold px-2 py-1 rounded-full uppercase"
              style={{ backgroundColor: ACCENT.tint, color: ACCENT.solid }}
            >
              {item.pos}
            </span>
          </div>

          <p className="text-3xl font-extrabold text-center mb-3" style={{ color: INK.ink }}>
            {item.word}
          </p>

          <div className="flex justify-center mb-4">
            <InkButton accent={ACCENT} className="px-4 py-2 text-sm" onClick={() => speak(item.word, voicePref)}>
              🔊 Hear It
            </InkButton>
          </div>

          {!flipped ? (
            <InkButton accent={ACCENT} className="w-full" onClick={() => setFlipped(true)}>
              Show Meaning 🔎
            </InkButton>
          ) : (
            <div className="flex flex-col gap-3">
              <div className="rounded-2xl p-3 text-center" style={{ backgroundColor: ACCENT.tint, border: `1.5px solid ${ACCENT.tintBorder}` }}>
                <p className="text-2xl font-extrabold" style={{ color: ACCENT.solid }}>
                  {item.zh}
                </p>
              </div>
              <div className="rounded-xl p-3" style={{ backgroundColor: INK.paperCard, border: "1.5px solid #E4D9BE" }}>
                <p className="text-xs font-extrabold mb-1" style={{ color: INK.mutedInk }}>
                  Meaning:
                </p>
                <p className="text-sm font-bold mb-2" style={{ color: INK.ink }}>
                  {item.definition}
                </p>
                <p className="text-xs font-extrabold mb-1" style={{ color: INK.mutedInk }}>
                  Example:
                </p>
                <p className="text-sm font-bold italic" style={{ color: INK.ink }}>
                  "{item.example}"
                </p>
              </div>

              {(item.synonyms || item.antonyms) && (
                <div className="flex flex-col gap-2">
                  {item.synonyms && (
                    <div>
                      <p className="text-xs font-extrabold mb-1" style={{ color: INK.mutedInk }}>
                        🔁 Similar words (tap to hear):
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.synonyms.map((s, i) => (
                          <RelatedWordChip key={i} item={s} voicePref={voicePref} />
                        ))}
                      </div>
                    </div>
                  )}
                  {item.antonyms && (
                    <div>
                      <p className="text-xs font-extrabold mb-1" style={{ color: INK.mutedInk }}>
                        ↔️ Opposite words (tap to hear):
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.antonyms.map((a, i) => (
                          <RelatedWordChip key={i} item={a} voicePref={voicePref} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <InkButton accent={ACCENT} className="w-full" onClick={handleNext}>
                {isLast ? "Finish 🎉" : "Next Word →"}
              </InkButton>
            </div>
          )}
        </PaperCard>
      </div>
    );
  }

  window.App.VocabularyModule = VocabularyModule;
})();
