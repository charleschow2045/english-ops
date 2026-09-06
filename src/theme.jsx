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

  // -------------------------------------------------------------------
  // NEW "探險護照" (Explorer's Passport) system — a staged visual redesign.
  // LEGACY (COLORS/Button/Card/BackButton/RefreshButton/TierBadge above)
  // is left completely unchanged so the 8 modules not yet migrated keep
  // rendering exactly as before with zero risk. Only DailyMissions.jsx,
  // BadgesScreen.jsx, and Reading (via PassageModule's optional `accent`
  // prop) use these so far — the 3 sample screens the user asked to
  // review before wider rollout. Root.jsx's page background/header were
  // switched to this palette globally already, since that's page chrome
  // behind every screen, not a per-module component (mirrors the same
  // choice made in the sibling chinese-ops redesign).
  const INK = {
    paper: "#EFE6D3", // 牛皮紙米色 — page background
    paperCard: "#F8F2E4", // slightly lighter kraft tone for cards sitting on the page
    ink: "#233142", // 墨藍 — primary text
    mutedInk: "#726A57", // derived — warm muted caption/meta text, not a flat gray
    stamp: "#A83A3A", // 護照印章紅 — primary accent (main buttons, highlights)
    stampDark: "#7A2929",
    gold: "#B8923A", // 黃銅金 — badges/achievements/streak
    goldDark: "#8A6C28",
    goldTint: "#F3EAD1",
    goldTintBorder: "#E4D19C",
  };

  // Every module keeps its own distinct color (per explicit instruction
  // not to collapse them into one look), but each is now a tonal variant
  // within one of two accent families instead of an arbitrary Tailwind hue
  // picked ad hoc per module — grouped per the user's spec:
  //   - mapBlue family (核心語文技能 — the "core skills" reading the map):
  //     listening, speaking, storytelling, reading, comprehension, writing
  //   - forestGreen family (探索/操練/遊戲 — side-quest exploration & drills):
  //     grammar, wordhunt, vocabulary, knowledge, hangman
  // `on` is the text/icon color to place on top of `solid` — paper (light)
  // works for every tone here since both families stay fairly dark.
  const MODULE_ACCENTS = {
    listening: { solid: "#2F6B7A", dark: "#1D4750", tint: "#E3EDEF", tintBorder: "#C3D9DD", on: INK.paper, family: "mapBlue" },
    speaking: { solid: "#3A7D8C", dark: "#24525C", tint: "#E5EEF0", tintBorder: "#C6DBDE", on: INK.paper, family: "mapBlue" },
    storytelling: { solid: "#35677A", dark: "#223F4C", tint: "#E3ECEE", tintBorder: "#C4D7DA", on: INK.paper, family: "mapBlue" },
    reading: { solid: "#2A5F6E", dark: "#1A3E48", tint: "#E1EAEC", tintBorder: "#C1D4D7", on: INK.paper, family: "mapBlue" },
    comprehension: { solid: "#245566", dark: "#163944", tint: "#DFE8EA", tintBorder: "#BED2D5", on: INK.paper, family: "mapBlue" },
    writing: { solid: "#1F4A58", dark: "#142F38", tint: "#DDE6E8", tintBorder: "#BBCFD2", on: INK.paper, family: "mapBlue" },
    grammar: { solid: "#4F8259", dark: "#36573B", tint: "#E9EEE5", tintBorder: "#CFDCC7", on: INK.paper, family: "forestGreen" },
    wordhunt: { solid: "#4A7A56", dark: "#315240", tint: "#E8EDE4", tintBorder: "#CCDAC3", on: INK.paper, family: "forestGreen" },
    vocabulary: { solid: "#2E5238", dark: "#1D3524", tint: "#E2E8DE", tintBorder: "#C0D0B7", on: INK.paper, family: "forestGreen" },
    knowledge: { solid: "#3F6B4A", dark: "#294736", tint: "#E6ECE3", tintBorder: "#C9D8C0", on: INK.paper, family: "forestGreen" },
    hangman: { solid: "#375D40", dark: "#23402A", tint: "#E4EAE1", tintBorder: "#C5D4BC", on: INK.paper, family: "forestGreen" },
  };

  // A minimal 4-level type scale: pair the font family + weight here, let
  // each call site pick its own text-size utility for context.
  //   display  — big titles: app title, page/module headers
  //   heading  — card section titles, item titles, module names
  //   body     — main content text (kept on the existing clear sans font)
  //   caption  — meta labels, level tags, small print
  const TYPE = {
    display: "font-stamp font-bold tracking-tight",
    heading: "font-stamp font-bold",
    body: "font-sans",
    caption: "font-sans font-bold uppercase tracking-wide",
  };

  // Content card: warm kraft-paper tint (not stark white), thin tinted
  // border, soft multi-layer shadow (a tight contact shadow + a diffuse
  // ambient one + a faint inner top highlight) instead of the legacy
  // single flat hard-offset shadow. `accent` (a MODULE_ACCENTS entry)
  // tints the border toward that module's color when given.
  function PaperCard({ children, className = "", accent, style = {} }) {
    const borderColor = accent ? accent.tintBorder : "#E4D9BE";
    return (
      <div
        className={`relative rounded-3xl p-4 ${className}`}
        style={{
          backgroundColor: INK.paperCard,
          border: `1.5px solid ${borderColor}`,
          boxShadow:
            "0 1px 2px rgba(35,49,66,0.06), 0 10px 24px -10px rgba(35,49,66,0.20), inset 0 1px 0 rgba(255,255,255,0.5)",
          ...style,
        }}
      >
        {children}
      </div>
    );
  }

  // Primary-action button: keeps the chunky "press-down" affordance the
  // app already uses for CTAs, but the resting shadow is now layered
  // (inner top highlight + a solid offset "thickness" layer in the
  // accent's own dark shade + a soft diffuse drop shadow) rather than one
  // flat color block, so it reads as a raised stamped object instead of a
  // flat hard-edged rectangle. `accent` is a MODULE_ACCENTS entry, or an
  // { solid, dark, on } shape — defaults to the passport-stamp red.
  function InkButton({ children, onClick, accent, className = "", disabled = false, type = "button" }) {
    const a = accent || { solid: INK.stamp, dark: INK.stampDark, on: INK.paper };
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`rounded-2xl font-extrabold px-5 py-3 text-lg font-sans transition-all duration-100
          active:translate-y-[3px] disabled:opacity-50 disabled:pointer-events-none ${className}`}
        style={{
          backgroundColor: a.solid,
          color: a.on,
          boxShadow: `inset 0 1px 0 rgba(255,255,255,0.22), 0 4px 0 ${a.dark}, 0 12px 20px -8px rgba(35,49,66,0.4)`,
        }}
      >
        {children}
      </button>
    );
  }

  function PaperBackButton({ onClick, children = "← Back" }) {
    return (
      <button
        onClick={onClick}
        className={`flex items-center gap-1 rounded-2xl px-4 py-2 text-sm transition-all active:translate-y-[2px] ${TYPE.caption}`}
        style={{
          backgroundColor: INK.paperCard,
          color: INK.ink,
          border: `1.5px solid #E4D9BE`,
          boxShadow: "0 3px 0 #D9CBA6",
        }}
      >
        {children}
      </button>
    );
  }

  function PaperRefreshButton({ onClick, label = "New questions" }) {
    return (
      <button
        onClick={onClick}
        className={`flex items-center gap-1 rounded-2xl px-3 py-2 text-xs sm:text-sm transition-all active:translate-y-[2px] ${TYPE.caption}`}
        style={{
          backgroundColor: INK.paperCard,
          color: INK.stamp,
          border: `1.5px solid #E7C9C4`,
          boxShadow: "0 3px 0 #DCB6B0",
        }}
      >
        🔄 {label}
      </button>
    );
  }

  function PaperTierBadge({ tier }) {
    const label = ((window.App.Storage && window.App.Storage.TIERS.find((t) => t.key === tier)) || {}).label || tier;
    return (
      <span
        className={`inline-block text-xs px-2.5 py-1 rounded-full ${TYPE.caption}`}
        style={{ backgroundColor: INK.goldTint, color: INK.goldDark, border: `1px solid ${INK.goldTintBorder}` }}
      >
        {label} level
      </span>
    );
  }

  // Passport-stamp badge: an oval "ink stamp" look for achievements/streak
  // — thick colored ring, a slight rotation, and a dashed inner border to
  // read as something physically stamped rather than a plain rounded icon.
  // `earned` false shows a greyed-out, unrotated "not stamped yet" state.
  function Stamp({ emoji, earned = true, rotate = -6, size = 56 }) {
    return (
      <div
        className="shrink-0 flex items-center justify-center rounded-full"
        style={{
          width: size,
          height: size,
          transform: earned ? `rotate(${rotate}deg)` : "none",
          backgroundColor: earned ? INK.goldTint : "#E9E2D0",
          border: `3px solid ${earned ? INK.gold : "#C9BFA4"}`,
          boxShadow: earned
            ? `inset 0 0 0 2px ${INK.paperCard}, inset 0 0 0 4px ${INK.gold}66, 0 3px 8px rgba(35,49,66,0.25)`
            : "none",
          opacity: earned ? 1 : 0.6,
        }}
      >
        <span className="text-2xl" style={{ filter: earned ? "none" : "grayscale(1)" }}>
          {earned ? emoji : "🔒"}
        </span>
      </div>
    );
  }

  window.App.UI = {
    // legacy
    COLORS,
    Button,
    Card,
    BackButton,
    RefreshButton,
    TierBadge,
    // new "探險護照" system
    INK,
    MODULE_ACCENTS,
    TYPE,
    PaperCard,
    InkButton,
    PaperBackButton,
    PaperRefreshButton,
    PaperTierBadge,
    Stamp,
  };
})();
