// Word Hunt — a Bookworm / Word Wipe style word-connect game (replaces the
// earlier Wordle-clone per feedback). Tap adjacent letters (any of 8
// directions) to spell a word, tap the last letter again to submit. Target
// words for this puzzle are placed into the grid via a randomized
// backtracking algorithm at runtime (buildGrid), so there's no need to
// hand-author each grid. A curated bonus word list (no full dictionary
// bundled) rewards finding common words beyond the target list too.
window.App = window.App || {};

(function () {
  const { useState, useMemo } = React;
  const { Card, Button, BackButton, RefreshButton, TierBadge } = window.App.UI;
  const { sampleArray } = window.App;

  const GRID_SIZE = 8;
  const WORDS_PER_PUZZLE = 6;
  const LETTER_POOL = "AAAAAAAAABBCCDDDDEEEEEEEEEEEEFFGGGHHIIIIIIIIIJKLLLLMMNNNNNNNOOOOOOOPPQRRRRRRSSSSTTTTTTTUUUVVWWXYYZ";

  function neighbors(r, c, size) {
    const result = [];
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) continue;
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < size && nc >= 0 && nc < size) result.push([nr, nc]);
      }
    }
    return result;
  }

  function shuffle(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function tryPlaceWord(grid, word, size) {
    const letters = word.split("");
    for (let attempt = 0; attempt < 400; attempt++) {
      const startR = Math.floor(Math.random() * size);
      const startC = Math.floor(Math.random() * size);
      if (!(grid[startR][startC] === null || grid[startR][startC] === letters[0])) continue;

      const path = [[startR, startC]];
      const visited = new Set([`${startR},${startC}`]);
      let failed = false;

      for (let i = 1; i < letters.length; i++) {
        const [r, c] = path[path.length - 1];
        const candidates = shuffle(neighbors(r, c, size)).filter(([nr, nc]) => {
          if (visited.has(`${nr},${nc}`)) return false;
          const cell = grid[nr][nc];
          return cell === null || cell === letters[i];
        });
        if (candidates.length === 0) {
          failed = true;
          break;
        }
        const next = candidates[0];
        path.push(next);
        visited.add(`${next[0]},${next[1]}`);
      }

      if (!failed) {
        path.forEach(([r, c], i) => {
          grid[r][c] = letters[i];
        });
        return path;
      }
    }
    return null;
  }

  function buildGrid(words, size) {
    const grid = Array.from({ length: size }, () => Array(size).fill(null));
    const placed = [];
    const sorted = [...words].sort((a, b) => b.length - a.length);

    sorted.forEach((word) => {
      const path = tryPlaceWord(grid, word, size);
      if (path) placed.push(word);
    });

    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (grid[r][c] === null) {
          grid[r][c] = LETTER_POOL[Math.floor(Math.random() * LETTER_POOL.length)];
        }
      }
    }

    return { grid, placedWords: placed };
  }

  function isAdjacent(a, b) {
    return Math.abs(a[0] - b[0]) <= 1 && Math.abs(a[1] - b[1]) <= 1 && !(a[0] === b[0] && a[1] === b[1]);
  }

  function HowToPlayModal({ onClose }) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
        <div className="bg-white border-4 border-rose-200 rounded-3xl shadow-[0_8px_0_rgba(244,63,94,0.2)] p-6 w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
          <h2 className="text-2xl font-extrabold text-stone-800 mb-3">🐛 How to Play</h2>
          <ul className="text-sm font-bold text-stone-600 flex flex-col gap-2 list-disc list-inside">
            <li>Tap a letter to start a word.</li>
            <li>Keep tapping letters that touch each other (up, down, sideways, or diagonally) to spell a word.</li>
            <li>Tap the last letter again to submit your word.</li>
            <li>Tap "Clear" anytime to start over.</li>
            <li>Find all the hidden target words — bonus points for any other real word you spot too!</li>
          </ul>
          <Button color="rose" className="w-full mt-4" onClick={onClose}>
            Got it!
          </Button>
        </div>
      </div>
    );
  }

  function WordHuntModule({ tier, onBack, onComplete }) {
    const bank = window.App.Content.WORD_HUNT_WORDS[tier] || window.App.Content.WORD_HUNT_WORDS.easy;
    const bonusWords = window.App.Content.WORD_HUNT_BONUS_WORDS;
    const [runSeed, setRunSeed] = useState(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const { grid, placedWords } = useMemo(() => {
      const words = sampleArray(bank, WORDS_PER_PUZZLE);
      return buildGrid(words, GRID_SIZE);
    }, [bank, runSeed]);

    const [path, setPath] = useState([]);
    const [found, setFound] = useState([]);
    const [message, setMessage] = useState("");
    const [showHelp, setShowHelp] = useState(false);

    const currentWord = path.map(([r, c]) => grid[r][c]).join("");
    const targetsFound = found.filter((f) => placedWords.includes(f.word));
    const allTargetsFound = placedWords.length > 0 && targetsFound.length === placedWords.length;
    const score = found.reduce((sum, f) => sum + f.points, 0);

    function tapCell(r, c) {
      const cell = [r, c];
      if (path.length === 0) {
        setPath([cell]);
        setMessage("");
        return;
      }
      const last = path[path.length - 1];
      if (last[0] === r && last[1] === c) {
        submitWord();
        return;
      }
      const alreadyInPath = path.some(([pr, pc]) => pr === r && pc === c);
      if (alreadyInPath) return;
      if (!isAdjacent(last, cell)) return;
      setPath((p) => [...p, cell]);
    }

    function submitWord() {
      const word = currentWord;
      if (word.length < 3) {
        setMessage("Words need at least 3 letters!");
        setPath([]);
        return;
      }
      if (found.some((f) => f.word === word)) {
        setMessage(`You already found "${word}"!`);
        setPath([]);
        return;
      }
      if (placedWords.includes(word)) {
        setFound((f) => [...f, { word, points: word.length * 10 }]);
        setMessage(`🎉 Found it! "${word}"`);
      } else if (bonusWords.includes(word)) {
        setFound((f) => [...f, { word, points: word.length * 5 }]);
        setMessage(`✨ Nice bonus word: "${word}"`);
      } else {
        setMessage(`"${word}" isn't in our word list yet — keep trying!`);
      }
      setPath([]);
    }

    function clearPath() {
      setPath([]);
      setMessage("");
    }

    function handleRefresh() {
      setRunSeed((s) => s + 1);
      setPath([]);
      setFound([]);
      setMessage("");
    }

    if (allTargetsFound) {
      return (
        <Card className="text-center">
          <p className="text-5xl mb-2">🐛</p>
          <h2 className="text-xl font-extrabold text-stone-800 mb-1">You found every word!</h2>
          <p className="text-stone-500 font-bold mb-4">Score: {score} points</p>
          <Button color="rose" className="w-full" onClick={onComplete}>
            Back to Missions
          </Button>
          <button onClick={handleRefresh} className="mt-3 text-xs font-bold text-stone-400 underline decoration-dotted">
            🔄 Play a new puzzle
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
              className="rounded-2xl border-4 border-rose-300 bg-white text-rose-600 font-extrabold px-3 py-2 text-xs sm:text-sm shadow-[0_3px_0_#fda4af] active:translate-y-[3px] active:shadow-none transition-all"
            >
              ❓ How to Play
            </button>
            <RefreshButton onClick={handleRefresh} label="New puzzle" />
          </div>
        </div>

        <div className="text-center">
          <TierBadge tier={tier} />
        </div>

        <Card>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-extrabold text-stone-500">
              Found {targetsFound.length}/{placedWords.length} words
            </p>
            <p className="text-sm font-extrabold text-amber-500">⭐ {score} pts</p>
          </div>

          <div
            className="grid gap-1 mb-3 mx-auto"
            style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`, maxWidth: "420px" }}
          >
            {grid.map((row, r) =>
              row.map((letter, c) => {
                const inPath = path.some(([pr, pc]) => pr === r && pc === c);
                return (
                  <button
                    key={`${r}-${c}`}
                    onClick={() => tapCell(r, c)}
                    className={`aspect-square rounded-md border-2 font-extrabold text-sm sm:text-base flex items-center justify-center transition-all
                      ${inPath ? "bg-rose-400 border-rose-600 text-rose-950" : "bg-white border-stone-200 text-stone-700"}`}
                  >
                    {letter}
                  </button>
                );
              })
            )}
          </div>

          <div className="text-center mb-2">
            <p className="text-lg font-extrabold text-stone-800 min-h-[1.75rem]">{currentWord}</p>
          </div>

          <div className="flex gap-2 mb-3">
            <Button color="rose" className="flex-1 py-2 text-sm" onClick={submitWord} disabled={path.length === 0}>
              Submit
            </Button>
            <Button color="teal" className="flex-1 py-2 text-sm" onClick={clearPath} disabled={path.length === 0}>
              Clear
            </Button>
          </div>

          {message && <p className="text-center text-sm font-bold text-indigo-600 mb-2">{message}</p>}

          {found.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center">
              {found.map((f, i) => (
                <span
                  key={i}
                  className={`text-xs font-extrabold px-2 py-1 rounded-full ${
                    placedWords.includes(f.word) ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"
                  }`}
                >
                  {f.word}
                </span>
              ))}
            </div>
          )}
        </Card>

        <button onClick={onComplete} className="text-xs font-bold text-stone-400 underline decoration-dotted text-center">
          I'm done for today ✅
        </button>
      </div>
    );
  }

  window.App.WordHuntModule = WordHuntModule;
})();
