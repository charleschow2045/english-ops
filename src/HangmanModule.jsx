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
// than showing a "you lost" screen.
window.App = window.App || {};

(function () {
  const { useState, useMemo } = React;
  const { Card, Button, BackButton, RefreshButton, TierBadge } = window.App.UI;
  const { sampleArray } = window.App;

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
        <div className="bg-white border-4 border-orange-200 rounded-3xl shadow-[0_8px_0_rgba(234,88,12,0.2)] p-6 w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
          <h2 className="text-2xl font-extrabold text-stone-800 mb-3">🎯 How to Play</h2>
          <ul className="text-sm font-bold text-stone-600 flex flex-col gap-2 list-disc list-inside">
            <li>A secret word is hidden as blanks, like <span className="tracking-widest">_ _ _ _</span>.</li>
            <li>Tap a letter you think is in the word.</li>
            <li>Guess right, and it fills in every matching blank.</li>
            <li>Guess wrong, and you lose a ❤️ life — you have {MAX_LIVES}.</li>
            <li>Fill in the whole word before your lives run out to win!</li>
            <li>Stuck? Tap "💡 Hint" to reveal a letter (costs a life).</li>
          </ul>
          <Button color="orange" className="w-full mt-4" onClick={onClose}>
            Got it!
          </Button>
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
        <Card className="text-center">
          <p className="text-5xl mb-2">{status === "won" ? "🎉" : "🙂"}</p>
          <h2 className="text-xl font-extrabold text-stone-800 mb-1">
            {status === "won" ? "You guessed it!" : "So close — nice try!"}
          </h2>
          <p className="text-stone-500 font-bold mb-1">
            The word was <span className="text-stone-800 tracking-widest">{word}</span> ({category})
          </p>
          {status === "won" && <p className="text-amber-500 font-extrabold mb-4">⭐ {score} points</p>}
          {status === "lost" && <p className="text-stone-400 font-bold mb-4">Every guess helps you learn 💪</p>}
          <Button color="orange" className="w-full" onClick={onComplete}>
            Back to Missions
          </Button>
          <button onClick={handleNewWord} className="mt-3 text-xs font-bold text-stone-400 underline decoration-dotted">
            🔄 Try another word
          </button>
        </Card>
      );
    }

    return (
      <div className="flex flex-col gap-4">
        {showHelp && <HowToPlayModal onClose={() => setShowHelp(false)} />}

        <div className="flex items-center justify-between gap-2">
          <BackButton onClick={onBack} />
          <div className="flex gap-2">
            <button
              onClick={() => setShowHelp(true)}
              className="rounded-2xl border-4 border-orange-300 bg-white text-orange-600 font-extrabold px-3 py-2 text-xs sm:text-sm shadow-[0_3px_0_#fdba74] active:translate-y-[3px] active:shadow-none transition-all"
            >
              ❓ How to Play
            </button>
            <RefreshButton onClick={handleNewWord} label="New word" />
          </div>
        </div>

        <div className="text-center">
          <TierBadge tier={tier} />
        </div>

        <Card>
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1">
              {Array.from({ length: MAX_LIVES }).map((_, i) => (
                <span key={i} className="text-xl">
                  {i < livesLeft ? "❤️" : "🤍"}
                </span>
              ))}
            </div>
            <p className="text-sm font-extrabold text-amber-500">⭐ {score} pts</p>
          </div>

          <p className="text-center text-xs font-extrabold text-orange-500 uppercase tracking-wide mb-2">
            🏷️ Category: {category}
          </p>

          <p className="text-center text-3xl sm:text-4xl font-extrabold tracking-[0.3em] text-stone-800 mb-6 break-all">
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
                      className={`flex-1 max-w-[2.75rem] aspect-square rounded-lg border-2 font-extrabold text-lg sm:text-xl flex items-center justify-center transition-all
                        ${
                          !isGuessed
                            ? "bg-white border-stone-200 text-stone-700 active:translate-y-[1px]"
                            : isCorrect
                            ? "bg-emerald-400 border-emerald-600 text-emerald-950"
                            : "bg-stone-200 border-stone-300 text-stone-400"
                        }`}
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
            className="w-full rounded-2xl border-4 border-amber-300 bg-white text-amber-600 font-extrabold px-3 py-2 text-sm shadow-[0_3px_0_#fcd34d] active:translate-y-[3px] active:shadow-none transition-all disabled:opacity-40 disabled:pointer-events-none"
          >
            💡 Hint (costs a ❤️)
          </button>
        </Card>

        <button onClick={onComplete} className="text-xs font-bold text-stone-400 underline decoration-dotted text-center">
          I'm done for today ✅
        </button>
      </div>
    );
  }

  window.App.HangmanModule = HangmanModule;
})();
