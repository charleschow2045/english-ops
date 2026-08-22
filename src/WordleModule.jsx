// New module: Wordle-style word game. Guess a 5-letter word in 6 tries.
// "Today's word" is date-seeded (same word all day, like real Wordle); the
// Refresh button picks a new random word from the tier's list for extra practice.
window.App = window.App || {};

(function () {
  const { useState, useMemo } = React;
  const { Card, Button, BackButton, RefreshButton } = window.App.UI;

  const MAX_GUESSES = 6;
  const WORD_LEN = 5;
  const ROWS = "QWERTYUIOP,ASDFGHJKL,ZXCVBNM".split(",");

  function dayIndex(len) {
    const start = new Date(new Date().getFullYear(), 0, 0);
    const diff = Date.now() - start.getTime();
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    return dayOfYear % len;
  }

  function evaluateGuess(guess, target) {
    const result = new Array(guess.length).fill("absent");
    const targetArr = target.split("");
    const guessArr = guess.split("");
    for (let i = 0; i < guessArr.length; i++) {
      if (guessArr[i] === targetArr[i]) {
        result[i] = "correct";
        targetArr[i] = null;
        guessArr[i] = null;
      }
    }
    for (let i = 0; i < guessArr.length; i++) {
      if (guessArr[i] == null) continue;
      const idx = targetArr.indexOf(guessArr[i]);
      if (idx !== -1) {
        result[i] = "present";
        targetArr[idx] = null;
      }
    }
    return result;
  }

  function tileClass(status) {
    if (status === "correct") return "bg-emerald-400 border-emerald-600 text-emerald-950";
    if (status === "present") return "bg-amber-300 border-amber-500 text-amber-950";
    if (status === "absent") return "bg-stone-300 border-stone-400 text-stone-600";
    return "bg-white border-stone-300 text-stone-800";
  }

  function keyClass(status) {
    if (status === "correct") return "bg-emerald-400 text-emerald-950";
    if (status === "present") return "bg-amber-300 text-amber-950";
    if (status === "absent") return "bg-stone-300 text-stone-500";
    return "bg-white text-stone-700 border-2 border-stone-200";
  }

  function WordleModule({ tier, onBack, onComplete }) {
    const words = window.App.Content.WORDLE_WORDS[tier] || window.App.Content.WORDLE_WORDS.easy;
    const [runSeed, setRunSeed] = useState(0);
    const target = useMemo(() => {
      if (runSeed === 0) return words[dayIndex(words.length)];
      return words[Math.floor(Math.random() * words.length)];
    }, [words, runSeed]);

    const [guesses, setGuesses] = useState([]);
    const [current, setCurrent] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("playing"); // playing | won | lost

    const results = guesses.map((g) => evaluateGuess(g, target));

    const keyStatus = {};
    guesses.forEach((g, gi) => {
      g.split("").forEach((letter, li) => {
        const s = results[gi][li];
        const rank = { correct: 3, present: 2, absent: 1 };
        if (!keyStatus[letter] || rank[s] > rank[keyStatus[letter]]) keyStatus[letter] = s;
      });
    });

    function pressLetter(letter) {
      if (status !== "playing") return;
      if (current.length >= WORD_LEN) return;
      setCurrent((c) => c + letter);
      setMessage("");
    }

    function pressBackspace() {
      if (status !== "playing") return;
      setCurrent((c) => c.slice(0, -1));
      setMessage("");
    }

    function pressEnter() {
      if (status !== "playing") return;
      if (current.length !== WORD_LEN) {
        setMessage("Type a 5-letter word first!");
        return;
      }
      const nextGuesses = [...guesses, current];
      setGuesses(nextGuesses);
      setCurrent("");
      if (current === target) {
        setStatus("won");
      } else if (nextGuesses.length >= MAX_GUESSES) {
        setStatus("lost");
      }
    }

    function handleRefresh() {
      setRunSeed((s) => s + 1);
      setGuesses([]);
      setCurrent("");
      setMessage("");
      setStatus("playing");
    }

    if (status === "won" || status === "lost") {
      return (
        <Card className="text-center">
          <p className="text-5xl mb-2">{status === "won" ? "🎉" : "😊"}</p>
          <h2 className="text-xl font-extrabold text-stone-800 mb-1">
            {status === "won" ? `You got it in ${guesses.length}!` : "So close!"}
          </h2>
          <p className="text-stone-500 font-bold mb-4">
            {status === "won" ? `The word was ${target}.` : `The word was ${target} — nice try!`}
          </p>
          <Button color="rose" className="w-full" onClick={onComplete}>
            Back to Missions
          </Button>
          <button onClick={handleRefresh} className="mt-3 text-xs font-bold text-stone-400 underline decoration-dotted">
            🔄 Play again with a new word
          </button>
        </Card>
      );
    }

    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <BackButton onClick={onBack} />
          <RefreshButton onClick={handleRefresh} label="New word" />
        </div>

        <Card>
          <div className="flex flex-col gap-1.5 mb-4">
            {Array.from({ length: MAX_GUESSES }).map((_, rowIndex) => {
              const guess = guesses[rowIndex];
              const isCurrentRow = rowIndex === guesses.length;
              const letters = guess ? guess.split("") : isCurrentRow ? current.split("") : [];
              return (
                <div key={rowIndex} className="flex gap-1.5 justify-center">
                  {Array.from({ length: WORD_LEN }).map((_, colIndex) => {
                    const letter = letters[colIndex] || "";
                    const st = guess ? results[rowIndex][colIndex] : null;
                    return (
                      <div
                        key={colIndex}
                        className={`w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg border-4 font-extrabold text-lg uppercase ${tileClass(st)}`}
                      >
                        {letter}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {message && <p className="text-center text-amber-600 font-bold text-sm mb-3">{message}</p>}

          <div className="flex flex-col gap-1.5 items-center">
            {ROWS.map((row, i) => (
              <div key={i} className="flex gap-1">
                {row.split("").map((letter) => (
                  <button
                    key={letter}
                    onClick={() => pressLetter(letter)}
                    className={`rounded-md font-extrabold text-sm px-2 py-3 min-w-[28px] transition-all active:translate-y-[1px] ${keyClass(keyStatus[letter])}`}
                  >
                    {letter}
                  </button>
                ))}
                {i === ROWS.length - 1 && (
                  <>
                    <button
                      onClick={pressEnter}
                      className="rounded-md font-extrabold text-xs px-2 py-3 bg-indigo-400 text-indigo-950 active:translate-y-[1px]"
                    >
                      ENTER
                    </button>
                    <button
                      onClick={pressBackspace}
                      className="rounded-md font-extrabold text-xs px-2 py-3 bg-rose-300 text-rose-950 active:translate-y-[1px]"
                    >
                      ⌫
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    );
  }

  window.App.WordleModule = WordleModule;
})();
