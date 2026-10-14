// Home screen: today's checklist across modules, tier selector, streak.
// First of the 3 "探險護照" (Explorer's Passport) redesign sample screens
// — see theme.jsx header comment for the system this draws from.
window.App = window.App || {};

(function () {
  const { Storage } = window.App;
  const { INK, MODULE_ACCENTS, TYPE, PaperCard } = window.App.UI;

  function TierSelector({ tier, onChangeTier }) {
    return (
      <div className="flex gap-2">
        {Storage.TIERS.map((t) => {
          const active = tier === t.key;
          return (
            <button
              key={t.key}
              onClick={() => onChangeTier(t.key)}
              className={`flex-1 rounded-xl py-2 text-sm transition-all ${TYPE.heading}`}
              style={
                active
                  ? { backgroundColor: INK.stamp, color: INK.paper, boxShadow: "0 3px 0 #7A2929" }
                  : { backgroundColor: INK.paperCard, color: INK.mutedInk, border: "1.5px solid #E4D9BE" }
              }
            >
              {t.label}
            </button>
          );
        })}
      </div>
    );
  }

  // The line under the streak: what happened, and what finishing today would do.
  function streakMessage(view, allDone) {
    const days = (n) => `${n} day${n === 1 ? "" : "s"}`;
    switch (view.status) {
      case "doneToday":
        return allDone ? "Today's missions are done — see you tomorrow! 🎉" : null;
      case "pending":
        return "Finish today's missions to keep your streak going.";
      case "saved": {
        const n = view.freezesNeeded;
        return `You missed ${days(n)}. Finishing today's missions will use ${n} freeze${n === 1 ? "" : "s"} to save your streak.`;
      }
      case "broken":
        return "Finish today's missions to start a new streak.";
      default:
        return "Finish today's missions to start your streak.";
    }
  }

  // The progress line on a module card, worked out from what is already saved
  // (nothing new is stored). Only Grammar keeps per-item progress — finished
  // path levels in moduleProgress.grammar.doneLevels — counted against the
  // levels the current tier can see. No other module records which items were
  // finished (only how many sessions were completed, which has no total to
  // compare with), so they return null and the card has no progress line,
  // rather than an invented number.
  function progressText(key, state) {
    if (key === "grammar") {
      const { done, total } = window.App.GrammarLevels.progress(state.tier, state.moduleProgress.grammar.doneLevels);
      return total > 0 ? `${done} / ${total} levels done` : null;
    }
    return null;
  }

  // `star` marks a module that is one of today's missions (used in All
  // Activities, where it is not already obvious); `progress` is the third line.
  function ModuleRow({ mod, done, isMission, onOpen, progress, star }) {
    const a = MODULE_ACCENTS[mod.key] || MODULE_ACCENTS.listening;
    return (
      <button
        onClick={mod.implemented ? onOpen : undefined}
        disabled={!mod.implemented}
        className={`w-full h-full flex items-center gap-3 rounded-2xl p-3 text-left transition-all ${
          mod.implemented ? "active:translate-y-[2px]" : "opacity-50"
        }`}
        style={{
          backgroundColor: INK.paperCard,
          border: `1.5px solid ${mod.implemented ? a.tintBorder : "#E4D9BE"}`,
          boxShadow: mod.implemented ? "0 1px 2px rgba(35,49,66,0.05), 0 6px 14px -8px rgba(35,49,66,0.18)" : "none",
        }}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
          style={{ backgroundColor: done ? a.solid : a.tint }}
        >
          {done ? "✅" : mod.emoji}
        </div>
        <div className="min-w-0 flex-1">
          <p className={`text-base ${TYPE.heading}`} style={{ color: INK.ink }}>
            {mod.label}
            {star && <span aria-label="Today's mission"> ⭐</span>}
          </p>
          <p className={`text-[13px] ${TYPE.caption}`} style={{ color: INK.mutedInk }}>
            {!mod.implemented ? "Coming soon" : done ? "Done for today!" : isMission ? (star ? "Today's mission" : "⭐ Today's mission") : "Tap to start"}
          </p>
          {progress && (
            <p className="text-[13px] font-bold leading-tight" style={{ color: INK.mutedInk }}>
              {progress}
            </p>
          )}
        </div>
      </button>
    );
  }

  function DailyMissions({ state, today, onChangeTier, onOpenModule, onOpenBadges, onOpenBackup, dueCount, onOpenReview, freezeBanner, onDismissFreezeBanner }) {
    const daily = Storage.getDaily(state, today);
    const moduleByKey = Object.fromEntries(Storage.MODULES.map((m) => [m.key, m]));
    const completedCount = daily.done.length;
    const totalCount = daily.missions.length;
    const earnedBadgeCount = Storage.earnedBadgeKeys(state).length;
    const streakView = Storage.getStreakView(state, today);
    const allDone = completedCount === totalCount;
    const streakNote = streakMessage(streakView, allDone);

    return (
      <div className="flex flex-col gap-4">
        {freezeBanner > 0 && (
          <div
            className="rounded-2xl p-3 flex items-center justify-between gap-2"
            style={{ backgroundColor: "#E3EDEF", border: "1.5px solid #C3D9DD" }}
          >
            <p className={`text-sm ${TYPE.heading}`} style={{ color: "#1D4750" }}>
              {freezeBanner > 1
                ? `🧊 ${freezeBanner} streak freezes used! You missed ${freezeBanner} days, but your streak was saved.`
                : "🧊 Streak freeze used! You missed a day, but your streak was saved."}
            </p>
            <button onClick={onDismissFreezeBanner} className="font-extrabold text-lg shrink-0" style={{ color: "#1D4750" }}>
              ×
            </button>
          </div>
        )}

        <PaperCard>
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="min-w-0">
              <p className={`text-sm ${TYPE.caption}`} style={{ color: INK.mutedInk }}>
                Streak
              </p>
              {streakView.status === "broken" ? (
                <>
                  <p className={`text-2xl ${TYPE.display}`} style={{ color: INK.mutedInk }}>
                    <span style={{ filter: "grayscale(1)", opacity: 0.6 }}>🔥</span> Streak ended
                  </p>
                  {state.stats.bestStreak > 0 && (
                    <p className="text-sm font-bold" style={{ color: INK.mutedInk }}>
                      🏆 Best streak: {state.stats.bestStreak} day{state.stats.bestStreak === 1 ? "" : "s"}
                    </p>
                  )}
                </>
              ) : (
                <p className={`text-2xl ${TYPE.display}`} style={{ color: INK.gold }}>
                  🔥 {streakView.count} day{streakView.count === 1 ? "" : "s"}
                </p>
              )}
              <p className={`text-sm font-bold mt-0.5`} style={{ color: "#2F6B7A" }}>
                🧊 {state.streakFreezes} freeze{state.streakFreezes === 1 ? "" : "s"} available
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className={`text-sm ${TYPE.caption}`} style={{ color: INK.mutedInk }}>
                Today
              </p>
              <p className={`text-lg ${TYPE.heading}`} style={{ color: INK.ink }}>
                {completedCount}/{totalCount} missions
              </p>
            </div>
          </div>
          {streakNote && (
            <p
              className="text-sm font-bold leading-snug mb-3 rounded-xl px-3 py-2"
              style={streakView.status === "saved" ? { backgroundColor: "#E3EDEF", color: "#1D4750" } : { backgroundColor: INK.goldTint, color: INK.ink }}
            >
              {streakNote}
            </p>
          )}
          <TierSelector tier={state.tier} onChangeTier={onChangeTier} />
        </PaperCard>

        <PaperCard>
          <p className={`text-xl ${TYPE.display}`} style={{ color: INK.ink }}>
            Today's Missions
          </p>
          <p className="text-sm font-bold mb-3" style={{ color: completedCount === totalCount ? INK.gold : INK.mutedInk }}>
            {completedCount === totalCount
              ? "All done — great work! Every other activity is bonus practice."
              : `Finish all ${totalCount} to complete your day. Every other activity is bonus practice.`}
          </p>
          <div className="flex flex-col gap-3">
            {daily.missions.map((key) => (
              <ModuleRow
                key={key}
                mod={moduleByKey[key]}
                done={daily.done.includes(key)}
                isMission
                progress={progressText(key, state)}
                onOpen={() => onOpenModule(key)}
              />
            ))}
          </div>
        </PaperCard>

        <button
          onClick={onOpenBadges}
          className="w-full flex items-center gap-3 rounded-2xl p-3 text-left active:translate-y-[2px] transition-all"
          style={{
            backgroundColor: INK.paperCard,
            border: `1.5px solid ${INK.goldTintBorder}`,
            boxShadow: "0 1px 2px rgba(35,49,66,0.05), 0 6px 14px -8px rgba(35,49,66,0.18)",
          }}
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ backgroundColor: INK.goldTint }}>
            🏅
          </div>
          <div className="min-w-0 flex-1">
            <p className={`text-base ${TYPE.heading}`} style={{ color: INK.ink }}>
              Badges
            </p>
            <p className={`text-[13px] ${TYPE.caption}`} style={{ color: INK.mutedInk }}>
              {earnedBadgeCount}/{Storage.BADGES.length} earned — tap to see them all
            </p>
          </div>
        </button>

        <button
          onClick={onOpenReview}
          className="w-full flex items-center gap-3 rounded-2xl p-3 text-left active:translate-y-[2px] transition-all"
          style={{
            backgroundColor: INK.paperCard,
            border: `1.5px solid ${dueCount > 0 ? "#E7C9C4" : "#E4D9BE"}`,
            boxShadow: "0 1px 2px rgba(35,49,66,0.05), 0 6px 14px -8px rgba(35,49,66,0.18)",
          }}
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ backgroundColor: dueCount > 0 ? "#F3E1DF" : INK.goldTint }}>
            📒
          </div>
          <div className="min-w-0 flex-1">
            <p className={`text-base ${TYPE.heading}`} style={{ color: INK.ink }}>
              Mistake Notebook
            </p>
            <p className={`text-sm font-bold`} style={{ color: dueCount > 0 ? INK.stamp : INK.mutedInk }}>
              {dueCount > 0 ? `${dueCount} to review today` : "Nothing to review today 👍"}
            </p>
          </div>
        </button>

        <p className={`text-xl -mb-1 ${TYPE.display}`} style={{ color: INK.ink }}>
          All Activities
        </p>
        {/* One column on phones, two from tablet width (sm: 640px) up. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Storage.MODULES.map((mod) => (
            <ModuleRow
              key={mod.key}
              mod={mod}
              done={state.dailyProgress.date === today && state.dailyProgress.completedModules.includes(mod.key)}
              isMission={daily.missions.includes(mod.key)}
              star={daily.missions.includes(mod.key)}
              progress={progressText(mod.key, state)}
              onOpen={() => onOpenModule(mod.key)}
            />
          ))}
        </div>

        {/* Parent-facing, kept low-key at the very bottom: easy to find, not competing with the missions. */}
        <div className="text-center pt-2">
          <button
            onClick={onOpenBackup}
            className={`text-[13px] underline decoration-dotted ${TYPE.caption}`}
            style={{ color: INK.mutedInk }}
          >
            💾 Backup / Restore progress (back up once a week)
          </button>
        </div>
      </div>
    );
  }

  window.App.DailyMissions = DailyMissions;
})();
