// Shared UI primitives — bright, playful, encouraging theme for a child learner
window.App = window.App || {};

(function () {
  const COLORS = {
    sky: { bg: "bg-sky-400", border: "border-sky-600", shadow: "shadow-[0_6px_0_#075985]", text: "text-sky-950" },
    rose: { bg: "bg-rose-400", border: "border-rose-600", shadow: "shadow-[0_6px_0_#881337]", text: "text-rose-950" },
    violet: { bg: "bg-violet-400", border: "border-violet-600", shadow: "shadow-[0_6px_0_#4c1d95]", text: "text-violet-950" },
    emerald: { bg: "bg-emerald-400", border: "border-emerald-600", shadow: "shadow-[0_6px_0_#065f46]", text: "text-emerald-950" },
    orange: { bg: "bg-orange-400", border: "border-orange-600", shadow: "shadow-[0_6px_0_#7c2d12]", text: "text-orange-950" },
    amber: { bg: "bg-amber-400", border: "border-amber-600", shadow: "shadow-[0_6px_0_#92400e]", text: "text-amber-950" },
    teal: { bg: "bg-teal-400", border: "border-teal-600", shadow: "shadow-[0_6px_0_#115e59]", text: "text-teal-950" },
  };

  function Button({ children, onClick, color = "sky", className = "", disabled = false, type = "button" }) {
    const c = COLORS[color] || COLORS.sky;
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${c.bg} ${c.text} border-4 ${c.border} ${c.shadow} rounded-2xl font-extrabold px-5 py-3 text-lg
          active:translate-y-[6px] active:shadow-none transition-all duration-100 disabled:opacity-50 disabled:pointer-events-none ${className}`}
      >
        {children}
      </button>
    );
  }

  function Card({ children, className = "" }) {
    return (
      <div className={`bg-white border-4 border-indigo-100 rounded-3xl shadow-[0_6px_0_rgba(99,102,241,0.12)] p-4 ${className}`}>
        {children}
      </div>
    );
  }

  function BackButton({ onClick, children = "← Back" }) {
    return (
      <button
        onClick={onClick}
        className="flex items-center gap-1 rounded-2xl border-4 border-indigo-300 bg-white text-indigo-600 font-extrabold px-4 py-2 text-sm
          shadow-[0_3px_0_#a5b4fc] active:translate-y-[3px] active:shadow-none transition-all"
      >
        {children}
      </button>
    );
  }

  function RefreshButton({ onClick, label = "New questions" }) {
    return (
      <button
        onClick={onClick}
        className="flex items-center gap-1 rounded-2xl border-4 border-emerald-300 bg-white text-emerald-600 font-extrabold px-3 py-2 text-xs sm:text-sm
          shadow-[0_3px_0_#6ee7b7] active:translate-y-[3px] active:shadow-none transition-all"
      >
        🔄 {label}
      </button>
    );
  }

  function TierBadge({ tier }) {
    const label = ((window.App.Storage && window.App.Storage.TIERS.find((t) => t.key === tier)) || {}).label || tier;
    return (
      <span className="inline-block text-xs font-extrabold px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-500 uppercase tracking-wide">
        {label} level
      </span>
    );
  }

  window.App.UI = { COLORS, Button, Card, BackButton, RefreshButton, TierBadge };
})();
