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

  function ModuleRow({ mod, done, onOpen }) {
    const a = MODULE_ACCENTS[mod.key] || MODULE_ACCENTS.listening;
    return (
      <button
        onClick={mod.implemented ? onOpen : undefined}
        disabled={!mod.implemented}
        className={`w-full flex items-center gap-3 rounded-2xl p-3 text-left transition-all ${
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
          </p>
          <p className={`text-xs ${TYPE.caption}`} style={{ color: INK.mutedInk }}>
            {!mod.implemented ? "Coming soon" : done ? "Done for today!" : "Tap to start"}
          </p>
        </div>
      </button>
    );
  }

  function DailyMissions({ state, onChangeTier, onOpenModule, onOpenBadges, freezeBanner, onDismissFreezeBanner }) {
    const completedCount = Storage.implementedModuleKeys().filter((k) =>
      state.dailyProgress.completedModules.includes(k)
    ).length;
    const totalCount = Storage.implementedModuleKeys().length;
    const earnedBadgeCount = Storage.earnedBadgeKeys(state).length;

    return (
      <div className="flex flex-col gap-4">
        {freezeBanner && (
          <div
            className="rounded-2xl p-3 flex items-center justify-between gap-2"
            style={{ backgroundColor: "#E3EDEF", border: "1.5px solid #C3D9DD" }}
          >
            <p className={`text-sm ${TYPE.heading}`} style={{ color: "#1D4750" }}>
              🧊 Streak Freeze used! You missed a day, but your streak was saved.
            </p>
            <button onClick={onDismissFreezeBanner} className="font-extrabold text-lg shrink-0" style={{ color: "#1D4750" }}>
              ×
            </button>
          </div>
        )}

        <PaperCard>
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className={`text-sm ${TYPE.caption}`} style={{ color: INK.mutedInk }}>
                Streak
              </p>
              <p className={`text-2xl ${TYPE.display}`} style={{ color: INK.gold }}>
                🔥 {state.streak.count} days
              </p>
              <p className={`text-xs mt-0.5 ${TYPE.caption}`} style={{ color: "#2F6B7A" }}>
                🧊 {state.streakFreezes} freeze{state.streakFreezes === 1 ? "" : "s"} available
              </p>
            </div>
            <div className="text-right">
              <p className={`text-sm ${TYPE.caption}`} style={{ color: INK.mutedInk }}>
                Today
              </p>
              <p className={`text-lg ${TYPE.heading}`} style={{ color: INK.ink }}>
                {completedCount}/{totalCount} missions
              </p>
            </div>
          </div>
          <TierSelector tier={state.tier} onChangeTier={onChangeTier} />
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
            <p className={`text-xs ${TYPE.caption}`} style={{ color: INK.mutedInk }}>
              {earnedBadgeCount}/{Storage.BADGES.length} earned — tap to see them all
            </p>
          </div>
        </button>

        <div className="flex flex-col gap-3">
          {Storage.MODULES.map((mod) => (
            <ModuleRow
              key={mod.key}
              mod={mod}
              done={state.dailyProgress.completedModules.includes(mod.key)}
              onOpen={() => onOpenModule(mod.key)}
            />
          ))}
        </div>
      </div>
    );
  }

  window.App.DailyMissions = DailyMissions;
})();
