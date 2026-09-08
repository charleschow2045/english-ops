// Module 6: Writing — a prompt, structure hints, a text box, gentle local
// heuristic feedback (no external API calls), and a model essay revealed
// after submission so the child can compare their writing to a strong
// example. Migrated to the "探險護照" system — see theme.jsx header comment.
window.App = window.App || {};

(function () {
  const { useState, useMemo } = React;
  const { INK, TYPE, PaperCard, InkButton, PaperBackButton, PaperRefreshButton, PaperTierBadge, MODULE_ACCENTS } = window.App.UI;
  const { sampleArray } = window.App;

  const ACCENT = MODULE_ACCENTS.writing;

  const COMMON_MISSPELLINGS = {
    teh: "the",
    recieve: "receive",
    definately: "definitely",
    seperate: "separate",
    becuase: "because",
    alot: "a lot",
    wich: "which",
    freind: "friend",
    thier: "their",
    untill: "until",
  };

  function checkWriting(text) {
    const trimmed = text.trim();
    const tips = [];
    const words = trimmed.split(/\s+/).filter(Boolean);
    const wordCount = words.length;

    if (wordCount < 12) tips.push("Try writing a bit more — add a few more details!");
    if (trimmed && !/^[A-Z]/.test(trimmed)) tips.push("Remember to start with a capital letter.");
    if (trimmed && !/[.!?]$/.test(trimmed)) tips.push("Don't forget to end your sentence with a period, question mark, or exclamation point!");
    if (/\b(\w+)\s+\1\b/i.test(trimmed)) tips.push("Check for a repeated word — I spotted one twice in a row.");

    const misspelled = words
      .map((w) => w.toLowerCase().replace(/[^a-z]/g, ""))
      .filter((w) => COMMON_MISSPELLINGS[w]);
    if (misspelled.length > 0) {
      const unique = [...new Set(misspelled)];
      tips.push(`Double-check the spelling of "${unique[0]}" — did you mean "${COMMON_MISSPELLINGS[unique[0]]}"?`);
    }

    const sentences = trimmed.split(/[.!?]+/).map((s) => s.trim()).filter(Boolean);
    if (sentences.length >= 3) {
      const startsWithI = sentences.filter((s) => /^i\s/i.test(s) || /^i$/i.test(s)).length;
      if (startsWithI >= Math.ceil(sentences.length * 0.6)) {
        tips.push('Try starting a sentence differently instead of always beginning with "I" — it makes your writing more interesting!');
      }
    }

    return tips;
  }

  function WritingModule({ tier, onBack, onComplete }) {
    const prompts = window.App.Content.WRITING_PROMPTS[tier] || window.App.Content.WRITING_PROMPTS.easy;
    const hintsBank = window.App.Content.WRITING_HINTS[tier] || window.App.Content.WRITING_HINTS.easy;
    const essaysBank = window.App.Content.WRITING_MODEL_ESSAYS[tier] || window.App.Content.WRITING_MODEL_ESSAYS.easy;
    const craftTips = window.App.Content.WRITING_CRAFT_TIPS;
    const [runSeed, setRunSeed] = useState(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const promptIndex = useMemo(() => sampleArray(prompts.map((_, i) => i), 1)[0], [prompts, runSeed]);
    const prompt = prompts[promptIndex];
    const hints = hintsBank[promptIndex];
    const modelEssay = essaysBank[promptIndex];

    const [text, setText] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [tips, setTips] = useState([]);
    const [showHints, setShowHints] = useState(false);
    const [showModel, setShowModel] = useState(false);

    function handleSubmit() {
      setTips(checkWriting(text));
      setSubmitted(true);
      setShowModel(false);
    }

    function handleRefresh() {
      setRunSeed((s) => s + 1);
      setText("");
      setSubmitted(false);
      setTips([]);
      setShowHints(false);
      setShowModel(false);
    }

    function useStarter(starter) {
      setText((t) => (t.trim() ? `${t} ${starter}` : starter));
    }

    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <PaperBackButton onClick={onBack} />
          <PaperRefreshButton onClick={handleRefresh} label="New topic" />
        </div>

        <div className="text-center">
          <PaperTierBadge tier={tier} />
        </div>

        <PaperCard accent={ACCENT}>
          <p className={`text-lg sm:text-xl mb-3 leading-snug ${TYPE.heading}`} style={{ color: INK.ink }}>
            {prompt}
          </p>

          <button
            onClick={() => setShowHints((v) => !v)}
            className="text-xs font-extrabold underline decoration-dotted mb-3"
            style={{ color: INK.goldDark }}
          >
            {showHints ? "Hide writing tips" : "💡 Need help? Tap for writing tips"}
          </button>

          {showHints && (
            <div className="mb-4 rounded-2xl p-3 flex flex-col gap-3" style={{ backgroundColor: INK.goldTint, border: `1.5px solid ${INK.goldTintBorder}` }}>
              <div>
                <p className="text-xs font-extrabold mb-1" style={{ color: INK.goldDark }}>
                  📝 How to structure your writing:
                </p>
                <ul className="list-disc list-inside text-sm font-bold flex flex-col gap-1" style={{ color: "#6B5420" }}>
                  {hints.structure.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-extrabold mb-1.5" style={{ color: INK.goldDark }}>
                  ✨ Try starting with (tap to use):
                </p>
                <div className="flex flex-wrap gap-2">
                  {hints.starters.map((starter, i) => (
                    <button
                      key={i}
                      onClick={() => useStarter(starter)}
                      className="rounded-lg px-2 py-1 font-bold text-xs"
                      style={{ backgroundColor: INK.paperCard, color: INK.goldDark, border: `2px solid ${INK.goldTintBorder}` }}
                    >
                      {starter}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-extrabold mb-1" style={{ color: INK.goldDark }}>
                  🎨 Make it more vivid:
                </p>
                <ul className="list-disc list-inside text-sm font-bold flex flex-col gap-1" style={{ color: "#6B5420" }}>
                  {craftTips.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <textarea
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setSubmitted(false);
            }}
            placeholder="Start writing here..."
            rows={6}
            className="w-full rounded-xl font-bold px-4 py-3 outline-none resize-none"
            style={{ backgroundColor: INK.paperCard, color: INK.ink, border: `2px solid ${ACCENT.tintBorder}` }}
          />

          {!submitted ? (
            <InkButton accent={ACCENT} className="w-full mt-4" onClick={handleSubmit} disabled={text.trim().length < 3}>
              Check My Writing ✏️
            </InkButton>
          ) : (
            <div className="mt-4 flex flex-col gap-2">
              <p className="font-extrabold" style={{ color: ACCENT.solid }}>
                🌟 Nice job writing! Here's what I noticed:
              </p>
              {tips.length === 0 ? (
                <p className="font-bold" style={{ color: INK.mutedInk }}>
                  Everything looks great — well done!
                </p>
              ) : (
                <ul className="list-disc list-inside font-bold flex flex-col gap-1" style={{ color: INK.mutedInk }}>
                  {tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              )}

              <button
                onClick={() => setShowModel((v) => !v)}
                className="text-xs font-extrabold underline decoration-dotted mt-1 text-left"
                style={{ color: INK.goldDark }}
              >
                {showModel ? "Hide example writing" : "📖 See an example of strong writing for this topic"}
              </button>
              {showModel && (
                <div className="rounded-2xl p-3" style={{ backgroundColor: INK.goldTint, border: `1.5px solid ${INK.goldTintBorder}` }}>
                  <p className="text-sm font-bold leading-relaxed" style={{ color: "#6B5420" }}>
                    {modelEssay}
                  </p>
                </div>
              )}

              <InkButton accent={ACCENT} className="w-full mt-2" onClick={onComplete}>
                Back to Missions
              </InkButton>
            </div>
          )}
        </PaperCard>
      </div>
    );
  }

  window.App.WritingModule = WritingModule;
})();
