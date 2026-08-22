// Renders passage/sentence text with tap-to-reveal Traditional Chinese
// translations on hard words (Duolingo-style hint bubble)
window.App = window.App || {};

(function () {
  const { useState } = React;

  function GlossaryWord({ word, zh }) {
    const [open, setOpen] = useState(false);
    return (
      <span className="relative inline-block">
        <span
          onClick={() => setOpen((o) => !o)}
          className="underline decoration-dotted decoration-2 decoration-indigo-400 text-indigo-700 cursor-pointer"
        >
          {word}
        </span>
        {open && (
          <span className="absolute left-1/2 -translate-x-1/2 -top-9 z-20 whitespace-nowrap rounded-lg bg-indigo-900 text-white text-sm font-bold px-2 py-1 shadow-lg">
            {zh}
          </span>
        )}
      </span>
    );
  }

  const TOKEN_RE = /([A-Za-z']+)/g;

  function GlossaryText({ text, className = "" }) {
    const glossary = (window.App.Content && window.App.Content.GLOSSARY) || {};
    const parts = text.split(TOKEN_RE);
    return (
      <p className={className}>
        {parts.map((part, i) => {
          if (!part) return null;
          const entry = glossary[part.toLowerCase()];
          if (entry) return <GlossaryWord key={i} word={part} zh={entry.zh} />;
          return <React.Fragment key={i}>{part}</React.Fragment>;
        })}
      </p>
    );
  }

  window.App.GlossaryText = GlossaryText;
})();
