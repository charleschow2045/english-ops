// Hangman — classic letter-guessing game. Uses HANGMAN_WORDS (categorised,
// variable-length word bank — a category like "Insects" is shown as a hint
// above the blanks, and word length varies freely within a tier rather than
// climbing steadily, matching classic mobile Hangman apps) instead of
// WORD_HUNT_WORDS. Keyboard is laid out in QWERTY rows (not A-Z order) to
// match those same classic apps, but with large, legible buttons — unlike
// the tiny-font reference apps this was modelled on. Deliberately no
// hanging-figure artwork — following this app's "no losing state"
// philosophy (see WordHuntModule, SpeakingModule), wrong guesses cost a ❤️
// life instead, and running out of lives gently reveals the word rather
// than showing a "you lost" screen. Migrated to the "探險護照" system — see
// theme.jsx header comment.
window.App = window.App || {};

(function () {
  const { useState, useMemo } = React;
  const { INK, TYPE, PaperCard, InkButton, PaperBackButton, PaperRefreshButton, PaperTierBadge, MODULE_ACCENTS } = window.App.UI;
  const { sampleArray } = window.App;

  const ACCENT = MODULE_ACCENTS.hangman;
  const MAX_LIVES = 6;
  const KEYBOARD_ROWS = [
    "QWERTYUIOP".split(""),
    "ASDFGHJKL".split(""),
    "ZXCVBNM".split(""),
  ];
  const LETTERS = KEYBOARD_ROWS.flat();

  function HowToPlayModal({ onClose }) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
        <div
          className="rounded-3xl p-6 w-full max-w-sm"
          style={{ backgroundColor: INK.paperCard, border: `1.5px solid ${ACCENT.tintBorder}`, boxShadow: "0 12px 30px -8px rgba(35,49,66,0.35)" }}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className={`text-2xl mb-3 ${TYPE.heading}`} style={{ color: INK.ink }}>
            🎯 How to Play
          </h2>
          <ul className="text-sm font-bold flex flex-col gap-2 list-disc list-inside" style={{ color: INK.mutedInk }}>
            <li>A secret word is hidden as blanks, like <span className="tracking-widest">_ _ _ _</span>.</li>
            <li>Tap a letter you think is in the word.</li>
            <li>Guess right, and it fills in every matching blank.</li>
            <li>Guess wrong, and you lose a ❤️ life — you have {MAX_LIVES}.</li>
            <li>Fill in the whole word before your lives run out to win!</li>
            <li>Stuck? Tap "💡 Hint" to reveal a letter (costs a life).</li>
          </ul>
          <InkButton accent={ACCENT} className="w-full mt-4" onClick={onClose}>
            Got it!
          </InkButton>
        </div>
      </div>
    );
  }

  function HangmanModule({ tier, onBack, onComplete }) {
    const bank = window.App.Content.HANGMAN_WORDS[tier] || window.App.Content.HANGMAN_WORDS.easy;
    const [runSeed, setRunSeed] = useState(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const { category, word } = useMemo(() => sampleArray(bank, 1)[0], [bank, runSeed]);
    const wordLetters = useMemo(() => Array.from(new Set(word.split(""))), [word]);

    const [guessed, setGuessed] = useState([]);
    const [showHelp, setShowHelp] = useState(false);

    const wrongGuesses = guessed.filter((l) => !word.includes(l));
    const livesLeft = MAX_LIVES - wrongGuesses.length;
    const solved = wordLetters.every((l) => guessed.includes(l));
    const status = solved ? "won" : livesLeft <= 0 ? "lost" : "playing";
    const score = word.length * 10 + Math.max(livesLeft, 0) * 5;

    function guessLetter(letter) {
      if (status !== "playing" || guessed.includes(letter)) return;
      setGuessed((g) => [...g, letter]);
    }

    function showHint() {
      if (status !== "playing" || livesLeft <= 1) return;
      const unguessed = wordLetters.filter((l) => !guessed.includes(l));
      if (unguessed.length === 0) return;
      const reveal = unguessed[Math.floor(Math.random() * unguessed.length)];
      // Hint costs a life: reveal the letter, but also burn a "wrong" guess
      // using a letter definitely not in the word (or already-wrong) so the
      // life count drops without ever guessing a letter twice.
      const filler = LETTERS.find((l) => !word.includes(l) && !guessed.includes(l));
      setGuessed((g) => [...g, reveal, ...(filler ? [filler] : [])]);
    }

    function handleNewWord() {
      setRunSeed((s) => s + 1);
      setGuessed([]);
    }

    if (status !== "playing") {
      return (
        <PaperCard className="text-center">
          <p className="text-5xl mb-2">{status === "won" ? "🎉" : "🙂"}</p>
          <h2 className={`text-xl mb-1 ${TYPE.heading}`} style={{ color: INK.ink }}>
            {status === "won" ? "You guessed it!" : "So close — nice try!"}
          </h2>
          <p className="font-bold mb-1" style={{ color: INK.mutedInk }}>
            The word was <span style={{ color: INK.ink }} className="tracking-widest">{word}</span> ({category})
          </p>
          {status === "won" && (
            <p className="font-extrabold mb-4" style={{ color: INK.gold }}>
              ⭐ {score} points
            </p>
          )}
          {status === "lost" && (
            <p className="font-bold mb-4" style={{ color: INK.mutedInk }}>
              Every guess helps you learn 💪
            </p>
          )}
          <InkButton accent={ACCENT} className="w-full" onClick={onComplete}>
            Back to Missions
          </InkButton>
          <button onClick={handleNewWord} className="mt-3 text-xs font-bold underline decoration-dotted" style={{ color: INK.mutedInk }}>
            🔄 Try another word
          </button>
        </PaperCard>
      );
    }

    return (
      <div className="flex flex-col gap-4">
        {showHelp && <HowToPlayModal onClose={() => setShowHelp(false)} />}

        <div className="flex items-center justify-between gap-2">
          <PaperBackButton onClick={onBack} />
          <div className="flex gap-2">
            <button
              onClick={() => setShowHelp(true)}
              className={`rounded-2xl px-3 py-2 text-xs sm:text-sm transition-all active:translate-y-[2px] ${TYPE.caption}`}
              style={{ backgroundColor: INK.paperCard, color: ACCENT.solid, border: `1.5px solid ${ACCENT.tintBorder}`, boxShadow: `0 3px 0 ${ACCENT.tintBorder}` }}
            >
              ❓ How to Play
            </button>
            <PaperRefreshButton onClick={handleNewWord} label="New word" />
          </div>
        </div>

        <div className="text-center">
          <PaperTierBadge tier={tier} />
        </div>

        <PaperCard accent={ACCENT}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1">
              {Array.from({ length: MAX_LIVES }).map((_, i) => (
                <span key={i} className="text-xl">
                  {i < livesLeft ? "❤️" : "🤍"}
                </span>
              ))}
            </div>
            <p className="text-sm font-extrabold" style={{ color: INK.gold }}>
              ⭐ {score} pts
            </p>
          </div>

          <p className={`text-center text-xs mb-2 ${TYPE.caption}`} style={{ color: ACCENT.solid }}>
            🏷️ Category: {category}
          </p>

          <p className="text-center text-3xl sm:text-4xl font-extrabold tracking-[0.3em] mb-6 break-all" style={{ color: INK.ink }}>
            {word
              .split("")
              .map((l) => (guessed.includes(l) ? l : "_"))
              .join(" ")}
          </p>

          <div className="flex flex-col gap-1.5 mb-3">
            {KEYBOARD_ROWS.map((row, i) => (
              <div key={i} className="flex gap-1.5 justify-center">
                {row.map((letter) => {
                  const isGuessed = guessed.includes(letter);
                  const isCorrect = isGuessed && word.includes(letter);
                  return (
                    <button
                      key={letter}
                      onClick={() => guessLetter(letter)}
                      disabled={isGuessed}
                      className="flex-1 max-w-[2.75rem] aspect-square rounded-lg font-extrabold text-lg sm:text-xl flex items-center justify-center transition-all"
                      style={
                        !isGuessed
                          ? { backgroundColor: INK.paperCard, color: INK.ink, border: `2px solid ${ACCENT.tintBorder}` }
                          : isCorrect
                          ? { backgroundColor: ACCENT.solid, color: ACCENT.on, border: `2px solid ${ACCENT.dark}` }
                          : { backgroundColor: "#E9E2D0", color: "#A79C82", border: "2px solid #DED2AF" }
                      }
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          <button
            onClick={showHint}
            disabled={livesLeft <= 1}
            className={`w-full rounded-2xl px-3 py-2 text-sm transition-all active:translate-y-[2px] disabled:opacity-40 disabled:pointer-events-none ${TYPE.caption}`}
            style={{ backgroundColor: INK.goldTint, color: INK.goldDark, border: `1.5px solid ${INK.goldTintBorder}` }}
          >
            💡 Hint (costs a ❤️)
          </button>
        </PaperCard>

        <button onClick={onComplete} className="text-xs font-bold underline decoration-dotted text-center" style={{ color: INK.mutedInk }}>
          I'm done for today ✅
        </button>
      </div>
    );
  }

  window.App.HangmanModule = HangmanModule;
})();
