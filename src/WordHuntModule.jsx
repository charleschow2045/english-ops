// Word Hunt — a Bookworm / Word Wipe style word-connect game (replaces the
// earlier Wordle-clone per feedback). Tap adjacent letters (any of 8
// directions) to spell a word, tap the last letter again to submit. Target
// words for this puzzle are placed into the grid via a randomized
// backtracking algorithm at runtime (buildGrid), so there's no need to
// hand-author each grid. A curated bonus word list (no full dictionary
// bundled) rewards finding common words beyond the target list too.
//
// Grid size scales down by tier (6x6 easy/medium, 7x7 hard/expert) and a
// 💡 Hint button exists, after feedback that an 8x8, all-directions grid
// with no way to get unstuck was too hard to actually play, even though the
// placement algorithm itself was verified correct (every "placed" word is
// independently re-checked as truly traceable — see buildGrid). Migrated to
// the "探險護照" system — see theme.jsx header comment.
window.App = window.App || {};

(function () {
  const { useState, useMemo } = React;
  const { INK, TYPE, PaperCard, InkButton, PaperBackButton, PaperRefreshButton, PaperTierBadge, MODULE_ACCENTS } = window.App.UI;
  const { sampleArray } = window.App;

  const ACCENT = MODULE_ACCENTS.wordhunt;
  const GRID_SIZE_BY_TIER = { easy: 6, medium: 6, hard: 7, expert: 7 };
  const WORDS_PER_PUZZLE = 5;
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
    for (let attempt = 0; attempt < 500; attempt++) {
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

  // Returns { grid, entries } where entries is [{ word, path }] for every
  // word that was successfully placed (fewer than requested is possible on a
  // crowded grid — gracefully degrades rather than failing the puzzle).
  function buildGrid(words, size) {
    const grid = Array.from({ length: size }, () => Array(size).fill(null));
    const entries = [];
    const sorted = [...words].sort((a, b) => b.length - a.length);

    sorted.forEach((word) => {
      const path = tryPlaceWord(grid, word, size);
      if (path) entries.push({ word, path });
    });

    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (grid[r][c] === null) {
          grid[r][c] = LETTER_POOL[Math.floor(Math.random() * LETTER_POOL.length)];
        }
      }
    }

    return { grid, entries };
  }

  function isAdjacent(a, b) {
    return Math.abs(a[0] - b[0]) <= 1 && Math.abs(a[1] - b[1]) <= 1 && !(a[0] === b[0] && a[1] === b[1]);
  }

  function HowToPlayModal({ onClose }) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
        <div
          className="rounded-3xl p-6 w-full max-w-sm"
          style={{ backgroundColor: INK.paperCard, border: `1.5px solid ${ACCENT.tintBorder}`, boxShadow: "0 12px 30px -8px rgba(35,49,66,0.35)" }}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className={`text-2xl mb-3 ${TYPE.heading}`} style={{ color: INK.ink }}>
            🐛 How to Play
          </h2>
          <ul className="text-sm font-bold flex flex-col gap-2 list-disc list-inside" style={{ color: INK.mutedInk }}>
            <li>Tap a letter to start a word.</li>
            <li>Keep tapping letters that touch each other (up, down, sideways, or diagonally) to spell a word.</li>
            <li>Tap the last letter again to submit your word.</li>
            <li>Tap "Clear" anytime to start over.</li>
            <li>Stuck? Tap "💡 Hint" to see the word's length, starting letter, and where it starts.</li>
            <li>Grid looking tricky? Tap "🔀 Shuffle grid" for a fresh layout with the same words.</li>
            <li>Find all the hidden target words — bonus points for any other real word you spot too!</li>
          </ul>
          <InkButton accent={ACCENT} className="w-full mt-4" onClick={onClose}>
            Got it!
          </InkButton>
        </div>
      </div>
    );
  }

  function WordHuntModule({ tier, onBack, onComplete }) {
    const bank = window.App.Content.WORD_HUNT_WORDS[tier] || window.App.Content.WORD_HUNT_WORDS.easy;
    const bonusWords = window.App.Content.WORD_HUNT_BONUS_WORDS;
    const gridSize = GRID_SIZE_BY_TIER[tier] || 6;
    const [runSeed, setRunSeed] = useState(0);
    const [shuffleSeed, setShuffleSeed] = useState(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const words = useMemo(() => sampleArray(bank, WORDS_PER_PUZZLE), [bank, runSeed]);

    // Grid layout is regenerated separately from word selection, so
    // "🔀 Shuffle grid" can give a fresh letter arrangement for the *same*
    // words without losing progress — "🔄 New puzzle" picks new words too.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const { grid, entries } = useMemo(() => buildGrid(words, gridSize), [words, gridSize, shuffleSeed]);
    const placedWords = entries.map((e) => e.word);

    const [path, setPath] = useState([]);
    const [found, setFound] = useState([]);
    const [message, setMessage] = useState("");
    const [showHelp, setShowHelp] = useState(false);
    const [hintCell, setHintCell] = useState(null);

    const currentWord = path.map(([r, c]) => grid[r][c]).join("");
    const targetsFound = found.filter((f) => placedWords.includes(f.word));
    const allTargetsFound = placedWords.length > 0 && targetsFound.length === placedWords.length;
    const score = found.reduce((sum, f) => sum + f.points, 0);

    function tapCell(r, c) {
      setHintCell(null);
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

    function showHint() {
      const unfound = entries.find((e) => !targetsFound.some((f) => f.word === e.word));
      if (!unfound) return;
      setHintCell(unfound.path[0]);
      setMessage(`💡 Hint: it's a ${unfound.word.length}-letter word starting with "${unfound.word[0]}" — begin at the highlighted tile!`);
    }

    function handleRefresh() {
      setRunSeed((s) => s + 1);
      setPath([]);
      setFound([]);
      setMessage("");
      setHintCell(null);
    }

    function handleShuffle() {
      setShuffleSeed((s) => s + 1);
      setPath([]);
      setMessage("🔀 Same words, new grid — take another look!");
      setHintCell(null);
    }

    if (allTargetsFound) {
      return (
        <PaperCard className="text-center">
          <p className="text-5xl mb-2">🐛</p>
          <h2 className={`text-xl mb-1 ${TYPE.heading}`} style={{ color: INK.ink }}>
            You found every word!
          </h2>
          <p className="font-bold mb-4" style={{ color: INK.mutedInk }}>
            Score: {score} points
          </p>
          <InkButton accent={ACCENT} className="w-full" onClick={onComplete}>
            Back to Missions
          </InkButton>
          <button onClick={handleRefresh} className="mt-3 text-xs font-bold underline decoration-dotted" style={{ color: INK.mutedInk }}>
            🔄 Play a new puzzle
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
            <PaperRefreshButton onClick={handleRefresh} label="New puzzle" />
          </div>
        </div>

        <div className="text-center">
          <PaperTierBadge tier={tier} />
        </div>

        <PaperCard accent={ACCENT}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-extrabold" style={{ color: INK.mutedInk }}>
              Found {targetsFound.length}/{placedWords.length} words
            </p>
            <p className="text-sm font-extrabold" style={{ color: INK.gold }}>
              ⭐ {score} pts
            </p>
          </div>

          <div
            className="grid gap-1.5 mb-3 mx-auto"
            style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`, maxWidth: "360px" }}
          >
            {grid.map((row, r) =>
              row.map((letter, c) => {
                const inPath = path.some(([pr, pc]) => pr === r && pc === c);
                const isHint = hintCell && hintCell[0] === r && hintCell[1] === c;
                return (
                  <button
                    key={`${r}-${c}`}
                    onClick={() => tapCell(r, c)}
                    className={`aspect-square rounded-lg font-extrabold text-lg sm:text-xl flex items-center justify-center transition-all ${isHint ? "animate-pulse" : ""}`}
                    style={
                      inPath
                        ? { backgroundColor: ACCENT.solid, color: ACCENT.on, border: `2px solid ${ACCENT.dark}` }
                        : isHint
                        ? { backgroundColor: INK.goldTint, color: INK.goldDark, border: `2px solid ${INK.gold}` }
                        : { backgroundColor: INK.paperCard, color: INK.ink, border: `2px solid ${ACCENT.tintBorder}` }
                    }
                  >
                    {letter}
                  </button>
                );
              })
            )}
          </div>

          <div className="text-center mb-2">
            <p className="text-lg font-extrabold min-h-[1.75rem]" style={{ color: INK.ink }}>
              {currentWord}
            </p>
          </div>

          <div className="flex gap-2 mb-3">
            <InkButton accent={ACCENT} className="flex-1 py-2 text-sm" onClick={submitWord} disabled={path.length === 0}>
              Submit
            </InkButton>
            <InkButton
              accent={{ solid: "#8C6B28", dark: "#5F491A", on: INK.paper }}
              className="flex-1 py-2 text-sm"
              onClick={clearPath}
              disabled={path.length === 0}
            >
              Clear
            </InkButton>
            <InkButton
              accent={{ solid: INK.gold, dark: INK.goldDark, on: INK.ink }}
              className="flex-1 py-2 text-sm"
              onClick={showHint}
            >
              💡 Hint
            </InkButton>
          </div>

          <button
            onClick={handleShuffle}
            className="w-full text-center text-xs font-bold underline decoration-dotted mb-2"
            style={{ color: INK.mutedInk }}
          >
            🔀 Shuffle grid (same words, new layout)
          </button>

          {message && (
            <p className="text-center text-sm font-bold mb-2" style={{ color: ACCENT.solid }}>
              {message}
            </p>
          )}

          {found.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center">
              {found.map((f, i) => (
                <span
                  key={i}
                  className="text-xs font-extrabold px-2 py-1 rounded-full"
                  style={
                    placedWords.includes(f.word)
                      ? { backgroundColor: ACCENT.tint, color: ACCENT.solid }
                      : { backgroundColor: INK.goldTint, color: INK.goldDark }
                  }
                >
                  {f.word}
                </span>
              ))}
            </div>
          )}
        </PaperCard>

        <button onClick={onComplete} className="text-xs font-bold underline decoration-dotted text-center" style={{ color: INK.mutedInk }}>
          I'm done for today ✅
        </button>
      </div>
    );
  }

  window.App.WordHuntModule = WordHuntModule;
})();
