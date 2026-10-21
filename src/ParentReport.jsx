// Parent report: a read-only look at the last 7 days plus where things stand now
// (streak, level, badges, mistakes to review). It only reads state.activityLog
// (see storage.jsx "Activity log") and existing data; it writes nothing and
// changes no progress. Numbers come from window.App.ParentReport (util.jsx).
// Colours and fonts are theme.jsx tokens.
window.App = window.App || {};

(function () {
  const { Storage, ParentReport, getLevel } = window.App;
  const { INK, TYPE, PaperCard, PaperBackButton } = window.App.UI;

  const moduleLabel = (key) => (Storage.MODULES.find((m) => m.key === key) || { label: key }).label;

  // What each kind of day looks like. The symbol and the words carry the meaning,
  // not just the colour.
  const CELL = {
    done: { symbol: "✅", label: () => "Day done", style: { backgroundColor: INK.successTint, border: `1.5px solid ${INK.success}` } },
    played: { symbol: "🟡", label: (c) => `${c.played} played`, style: { backgroundColor: INK.goldTint, border: `1.5px solid ${INK.goldTintBorder}` } },
    none: { symbol: "⬜", label: () => "Nothing", style: { backgroundColor: INK.paperCard, border: `1.5px solid ${INK.line}` } },
    untracked: { symbol: "–", label: () => "Not tracked yet", style: { backgroundColor: INK.disabled, border: `1.5px dashed ${INK.lineDark}` } },
  };

  function DayCell({ cell }) {
    const k = CELL[cell.status];
    return (
      <div
        className="rounded-[14px] p-2.5 flex flex-row items-center gap-3 sm:flex-col sm:gap-1 sm:text-center"
        style={{ ...k.style, boxShadow: cell.isToday ? `0 0 0 2.5px ${INK.teal}` : "none" }}
      >
        <div className="w-[76px] sm:w-auto shrink-0">
          <p className="text-[13px] font-bold leading-tight" style={{ color: INK.mutedInk }}>
            {cell.weekday}
            {cell.isToday ? " · today" : ""}
          </p>
          <p className={`text-lg leading-tight ${TYPE.heading}`} style={{ color: INK.ink }}>
            {cell.day}
          </p>
        </div>
        <p className="text-2xl leading-none shrink-0 w-8 text-center" style={{ color: INK.mutedInk }} aria-hidden="true">
          {k.symbol}
        </p>
        <p className="text-[13px] font-bold leading-tight min-w-0" style={{ color: cell.status === "untracked" ? INK.mutedInk : INK.ink }}>
          {k.label(cell)}
        </p>
      </div>
    );
  }

  function Stat({ value, caption }) {
    return (
      <div className="rounded-[14px] p-3" style={{ backgroundColor: INK.paper, border: `1.5px solid ${INK.line}` }}>
        <p className={`text-xl leading-tight ${TYPE.heading}`} style={{ color: INK.ink }}>
          {value}
        </p>
        <p className="text-[13px] font-bold leading-snug mt-0.5" style={{ color: INK.mutedInk }}>
          {caption}
        </p>
      </div>
    );
  }

  function Row({ label, children }) {
    return (
      <div className="flex items-baseline justify-between gap-3 py-2" style={{ borderTop: `1px solid ${INK.line}` }}>
        <p className="text-sm font-bold" style={{ color: INK.mutedInk }}>
          {label}
        </p>
        <p className="text-sm font-extrabold text-right" style={{ color: INK.ink }}>
          {children}
        </p>
      </div>
    );
  }

  function streakText(view) {
    const days = (n) => `${n} day${n === 1 ? "" : "s"}`;
    switch (view.status) {
      case "doneToday":
        return `🔥 ${days(view.count)} (counted today)`;
      case "pending":
        return `🔥 ${days(view.count)} (today still to do)`;
      case "saved":
        return `🔥 ${days(view.count)} (a freeze would save it)`;
      case "broken":
        return "Streak ended";
      default:
        return "No streak yet";
    }
  }

  function ParentReportScreen({ state, today, onBack }) {
    const log = state.activityLog || {};
    const start = ParentReport.trackingStart(log);
    const cells = ParentReport.weekCells(log, today);
    const sum = ParentReport.weekSummary(log, today);
    const view = Storage.getStreakView(state, today);
    const level = getLevel(state.stats.totalMissionsCompleted);
    const due = ParentReport.dueByModule(state, today);
    const top = sum.topModules.length ? sum.topModules.map(moduleLabel).join(", ") : "–";

    return (
      <div className="flex flex-col gap-4">
        <PaperBackButton onClick={onBack} />

        <PaperCard>
          <h2 className={`text-xl ${TYPE.display}`} style={{ color: INK.ink }}>
            📊 Parent report
          </h2>
          <p className="text-sm font-bold mt-1" style={{ color: INK.mutedInk }}>
            A read-only look at the last 7 days. Nothing on this screen changes any progress.
          </p>
          <p className="text-sm font-extrabold mt-2" style={{ color: INK.tealText }}>
            {start ? `Tracking since ${start}` : "No activity tracked yet"}
          </p>
        </PaperCard>

        <PaperCard>
          <h3 className={`text-lg mb-3 ${TYPE.heading}`} style={{ color: INK.ink }}>
            Last 7 days
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-7 gap-2">
            {cells.map((c) => (
              <DayCell key={c.date} cell={c} />
            ))}
          </div>
          <p className="text-[13px] font-bold leading-snug mt-3" style={{ color: INK.mutedInk }}>
            ✅ day done · 🟡 some played · ⬜ nothing played · – not tracked yet (before the first record, so it does not mean nothing was done)
          </p>
        </PaperCard>

        <PaperCard>
          <h3 className={`text-lg mb-3 ${TYPE.heading}`} style={{ color: INK.ink }}>
            This week
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <Stat value={sum.completions} caption="modules finished" />
            <Stat value={`${sum.daysPlayed} / 7`} caption="days played" />
            <Stat value={`${sum.daysCompleted} / 7`} caption="days done" />
            <Stat value={top} caption={sum.topModules.length > 1 ? "most played (tied)" : "most played"} />
          </div>
        </PaperCard>

        <PaperCard>
          <h3 className={`text-lg mb-1 ${TYPE.heading}`} style={{ color: INK.ink }}>
            Right now
          </h3>
          <Row label="Streak">{streakText(view)}</Row>
          <Row label="Best streak">
            {state.stats.bestStreak} day{state.stats.bestStreak === 1 ? "" : "s"}
          </Row>
          <Row label="Streak freezes">
            {state.streakFreezes} of {Storage.MAX_STREAK_FREEZES}
          </Row>
          <Row label="Level">
            {level.stamp} Level {level.number} · {level.name}
          </Row>
          <Row label="Badges">
            {Storage.earnedBadgeKeys(state).length} / {Storage.BADGES.length}
          </Row>
        </PaperCard>

        <PaperCard>
          <h3 className={`text-lg mb-1 ${TYPE.heading}`} style={{ color: INK.ink }}>
            Mistakes to review
          </h3>
          {due.total === 0 ? (
            <p className="text-sm font-bold pt-1" style={{ color: INK.mutedInk }}>
              Nothing to review today 👍
            </p>
          ) : (
            <>
              <p className="text-sm font-extrabold pb-1" style={{ color: INK.stampText }}>
                {due.total} to review today
              </p>
              {due.byModule.map((r) => (
                <Row key={r.module} label={moduleLabel(r.module)}>
                  {r.count}
                </Row>
              ))}
            </>
          )}
        </PaperCard>
      </div>
    );
  }

  window.App.ParentReportScreen = ParentReportScreen;
})();
