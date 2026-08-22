// Module 6: Writing — a prompt, optional structure hints, a text box, and
// gentle local heuristic feedback (no external API calls — just simple,
// encouraging checks).
window.App = window.App || {};

(function () {
  const { useState } = React;
  const { Card, Button } = window.App.UI;

  function checkWriting(text) {
    const trimmed = text.trim();
    const tips = [];
    const wordCount = trimmed.split(/\s+/).filter(Boolean).length;

    if (wordCount < 12) tips.push("Try writing a bit more — add a few more details!");
    if (trimmed && !/^[A-Z]/.test(trimmed)) tips.push("Remember to start with a capital letter.");
    if (trimmed && !/[.!?]$/.test(trimmed)) tips.push("Don't forget to end your sentence with a period, question mark, or exclamation point!");
    if (/\b(\w+)\s+\1\b/i.test(trimmed)) tips.push("Check for a repeated word — I spotted one twice in a row.");

    return tips;
  }

  function WritingModule({ tier, onBack, onComplete }) {
    const prompt = window.App.Content.WRITING_PROMPTS[tier] || window.App.Content.WRITING_PROMPTS.easy;
    const hints = window.App.Content.WRITING_HINTS[tier] || window.App.Content.WRITING_HINTS.easy;
    const [text, setText] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [tips, setTips] = useState([]);
    const [showHints, setShowHints] = useState(false);

    function handleSubmit() {
      setTips(checkWriting(text));
      setSubmitted(true);
    }

    function useStarter(starter) {
      setText((t) => (t.trim() ? `${t} ${starter}` : starter));
    }

    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="text-sm font-extrabold text-indigo-500">
            ← Back
          </button>
          <span className="text-sm font-extrabold text-stone-400">Writing</span>
        </div>

        <Card>
          <p className="font-extrabold text-stone-800 mb-3">{prompt}</p>

          <button
            onClick={() => setShowHints((v) => !v)}
            className="text-xs font-extrabold text-amber-600 underline decoration-dotted mb-3"
          >
            {showHints ? "Hide writing tips" : "💡 Need help? Tap for writing tips"}
          </button>

          {showHints && (
            <div className="mb-4 rounded-2xl border-4 border-amber-200 bg-amber-50 p-3 flex flex-col gap-3">
              <div>
                <p className="text-xs font-extrabold text-amber-600 mb-1">📝 How to structure your writing:</p>
                <ul className="list-disc list-inside text-sm font-bold text-amber-700 flex flex-col gap-1">
                  {hints.structure.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-extrabold text-amber-600 mb-1.5">✨ Try starting with (tap to use):</p>
                <div className="flex flex-wrap gap-2">
                  {hints.starters.map((starter, i) => (
                    <button
                      key={i}
                      onClick={() => useStarter(starter)}
                      className="rounded-lg border-2 border-amber-300 bg-white text-amber-700 font-bold text-xs px-2 py-1"
                    >
                      {starter}
                    </button>
                  ))}
                </div>
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
            className="w-full rounded-xl border-4 border-stone-300 bg-white text-stone-800 font-bold px-4 py-3 outline-none focus:border-amber-400 resize-none"
          />

          {!submitted ? (
            <Button color="amber" className="w-full mt-4" onClick={handleSubmit} disabled={text.trim().length < 3}>
              Check My Writing ✏️
            </Button>
          ) : (
            <div className="mt-4 flex flex-col gap-2">
              <p className="font-extrabold text-emerald-600">🌟 Nice job writing! Here's what I noticed:</p>
              {tips.length === 0 ? (
                <p className="text-stone-600 font-bold">Everything looks great — well done!</p>
              ) : (
                <ul className="list-disc list-inside text-stone-600 font-bold flex flex-col gap-1">
                  {tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              )}
              <Button color="emerald" className="w-full mt-2" onClick={onComplete}>
                Back to Missions
              </Button>
            </div>
          )}
        </Card>
      </div>
    );
  }

  window.App.WritingModule = WritingModule;
})();
