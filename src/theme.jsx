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
  // NEW system — now the "style C" look (modern explorer): clean off-white
  // page, white rounded cards, deep teal + coral, Poppins headings, Nunito
  // text. It started life as the "探險護照" (explorer's passport) kraft-paper
  // system and the names (INK, PaperCard, InkButton, Stamp ...) were kept so
  // no screen had to change its imports; only the values changed. The visual
  // spec is design-preview/style-c.html.
  // LEGACY (COLORS/Button/Card/BackButton/RefreshButton/TierBadge above) is
  // untouched. At the time of the style C switch, nothing renders it: every
  // module is on this system (PassageModule only uses legacy in a fallback
  // branch for callers that pass no `accent`, and Root always passes one).
  const INK = {
    paper: "#f1f6f5", // page background
    paperCard: "#ffffff", // card surface
    ink: "#12353d", // primary text
    mutedInk: "#4f6b72", // secondary text (5.2:1 on the page, 5.7:1 on white)
    // Primary action. Darker than the preview's #ff6b4a because white text on
    // that coral is only 2.8:1; this keeps the coral look at 4.7:1 with white.
    stamp: "#d23f1c",
    stampDark: "#a42f12", // the 4px "thickness" under a pressed-style button
    stampTint: "#fff1ec",
    stampTintBorder: "#ffd2c4",
    stampText: "#b63a1a", // coral-family text on a light surface
    coral: "#ff6b4a", // decorative coral only (never behind or as text)
    teal: "#0f5b66", // deep teal
    tealDark: "#0c4a55", // darker end of teal gradients (white text on it >= 7:1)
    teal2: "#1b8a94",
    tealTint: "#e6f4f6",
    tealTintBorder: "#bfe0e4",
    tealText: "#0d5560",
    // gold = text-safe amber (streak numbers, badge labels); sun = the bright
    // gold #ffc857 for fills such as progress bars and highlights.
    gold: "#8a5f00",
    goldDark: "#6b4a00",
    goldTint: "#fff4d6",
    goldTintBorder: "#f3dc9a",
    sun: "#ffc857",
    line: "#dbe8e6", // hairline borders on cards
    lineDark: "#c3d7d4", // the 3px edge under secondary buttons
    disabled: "#e6efee", // locked / greyed surfaces
    success: "#17703a",
    successTint: "#e1f4e8",
  };

  // hsl -> "#rrggbb" and a WCAG contrast helper, so each module colour can be
  // derived from one hue and still keep white text readable on its `solid`.
  function hslHex(h, s, l) {
    s /= 100;
    l /= 100;
    const k = (n) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    const x = (v) => Math.round(v * 255).toString(16).padStart(2, "0");
    return `#${x(f(0))}${x(f(8))}${x(f(4))}`;
  }
  function lum(hex) {
    const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  }
  const contrastWithWhite = (hex) => 1.05 / (lum(hex) + 0.05);

  // One hue per module (the same hues as the style C preview). tint/tintBorder
  // are soft pastels for tiles and borders; solid/dark are for buttons and
  // text, with `solid` lowered in lightness until white on it is >= 4.5:1.
  function accentFromHue(hue) {
    let l = 42;
    while (l > 20 && contrastWithWhite(hslHex(hue, 55, l)) < 4.5) l -= 1;
    return {
      solid: hslHex(hue, 55, l),
      dark: hslHex(hue, 58, Math.max(l - 12, 14)),
      tint: hslHex(hue, 85, 93),
      tintBorder: hslHex(hue, 60, 84),
      on: "#ffffff",
      hue,
    };
  }
  const MODULE_ACCENTS = {
    listening: accentFromHue(205),
    speaking: accentFromHue(345),
    storytelling: accentFromHue(265),
    reading: accentFromHue(150),
    comprehension: accentFromHue(25),
    writing: accentFromHue(45),
    grammar: accentFromHue(175),
    wordhunt: accentFromHue(320),
    vocabulary: accentFromHue(230),
    knowledge: accentFromHue(285),
    hangman: accentFromHue(10),
  };

  // Type scale: font family + weight only; each call site picks its own size.
  //   display  — big titles
  //   heading  — card titles, item titles, module names
  //   body     — main text
  //   caption  — small labels (sentence case, no letter-spacing tricks)
  // Poppins/Nunito are Tailwind families `heading` and `ui` (index.html).
  const TYPE = {
    display: "font-heading font-extrabold tracking-tight",
    heading: "font-heading font-bold",
    body: "font-ui",
    caption: "font-ui font-bold",
  };

  // White rounded content card with a hairline border and a soft shadow.
  // `accent` (a MODULE_ACCENTS entry) tints the border toward that module.
  function PaperCard({ children, className = "", accent, style = {} }) {
    const borderColor = accent ? accent.tintBorder : INK.line;
    return (
      <div
        className={`relative rounded-[20px] p-4 ${className}`}
        style={{
          backgroundColor: INK.paperCard,
          border: `1.5px solid ${borderColor}`,
          boxShadow: "0 8px 18px -14px rgba(15,91,102,0.5)",
          ...style,
        }}
      >
        {children}
      </div>
    );
  }

  // Primary-action button: rounded, with a solid 4px "thickness" under it that
  // presses down. `accent` is a MODULE_ACCENTS entry, or { solid, dark, on };
  // by default it is the coral action colour.
  function InkButton({ children, onClick, accent, className = "", disabled = false, type = "button" }) {
    const a = accent || { solid: INK.stamp, dark: INK.stampDark, on: "#ffffff" };
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`rounded-[14px] font-extrabold px-5 py-3 text-lg font-ui transition-all duration-100
          active:translate-y-[3px] disabled:opacity-50 disabled:pointer-events-none ${className}`}
        style={{
          backgroundColor: a.solid,
          color: a.on,
          boxShadow: `0 4px 0 ${a.dark}`,
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
        className={`flex items-center gap-1 rounded-[14px] px-4 py-2 text-sm transition-all active:translate-y-[2px] ${TYPE.caption}`}
        style={{
          backgroundColor: INK.paperCard,
          color: INK.ink,
          border: `1.5px solid ${INK.line}`,
          boxShadow: `0 3px 0 ${INK.lineDark}`,
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
        className={`flex items-center gap-1 rounded-[14px] px-3 py-2 text-[13px] sm:text-sm transition-all active:translate-y-[2px] ${TYPE.caption}`}
        style={{
          backgroundColor: INK.paperCard,
          color: INK.stampText,
          border: `1.5px solid ${INK.stampTintBorder}`,
          boxShadow: `0 3px 0 ${INK.stampTintBorder}`,
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
        className={`inline-block text-[13px] px-2.5 py-1 rounded-full ${TYPE.caption}`}
        style={{ backgroundColor: INK.tealTint, color: INK.tealText, border: `1px solid ${INK.tealTintBorder}` }}
      >
        {label} level
      </span>
    );
  }

  // Achievement stamp: a round gold-ringed badge, slightly rotated when
  // earned; `earned` false shows a greyed-out, unrotated "not stamped yet"
  // state with a lock.
  function Stamp({ emoji, earned = true, rotate = -6, size = 56 }) {
    return (
      <div
        className="shrink-0 flex items-center justify-center rounded-full"
        style={{
          width: size,
          height: size,
          transform: earned ? `rotate(${rotate}deg)` : "none",
          backgroundColor: earned ? INK.goldTint : INK.disabled,
          border: `3px solid ${earned ? INK.sun : INK.lineDark}`,
          boxShadow: earned ? `0 0 0 4px ${INK.sun}47, 0 3px 8px rgba(15,91,102,0.18)` : "none",
          opacity: earned ? 1 : 0.7,
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
    // new system (style C)
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
