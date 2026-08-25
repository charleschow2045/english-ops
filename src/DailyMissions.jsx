// Home screen: today's checklist across modules, tier selector, streak
window.App = window.App || {};

(function () {
  const { Storage } = window.App;
  const { Card, Button, COLORS } = window.App.UI;

  function TierSelector({ tier, onChangeTier }) {
    return (
      <div className="flex gap-2">
        {Storage.TIERS.map((t) => (
          <button
            key={t.key}
            onClick={() => onChangeTier(t.key)}
            className={`flex-1 rounded-xl border-4 font-extrabold py-2 text-sm transition-all
              ${
                tier === t.key
                  ? "bg-indigo-400 border-indigo-600 text-indigo-950"
                  : "bg-white border-indigo-100 text-indigo-300"
              }`}
          >
            {t.label}
          </button>
        ))}
      </div>
    );
  }

  function ModuleRow({ mod, done, onOpen }) {
    const c = COLORS[mod.color] || COLORS.sky;
    return (
      <button
        onClick={mod.implemented ? onOpen : undefined}
        disabled={!mod.implemented}
        className={`w-full flex items-center gap-3 bg-white border-4 rounded-2xl p-3 text-left transition-all
          ${mod.implemented ? `${c.border} active:translate-y-[2px]` : "border-stone-200 opacity-60"}`}
      >
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 ${done ? c.bg : "bg-stone-100"}`}>
          {done ? "✅" : mod.emoji}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-extrabold text-stone-800">{mod.label}</p>
          <p className="text-xs font-bold text-stone-400">
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
          <div className="rounded-2xl border-4 border-sky-300 bg-sky-50 p-3 flex items-center justify-between gap-2">
            <p className="text-sm font-extrabold text-sky-700">
              🧊 Streak Freeze used! You missed a day, but your streak was saved.
            </p>
            <button onClick={onDismissFreezeBanner} className="text-sky-500 font-extrabold text-lg shrink-0">
              ×
            </button>
          </div>
        )}

        <Card>
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm font-bold text-stone-400">Streak</p>
              <p className="text-2xl font-extrabold text-orange-500">🔥 {state.streak.count} days</p>
              <p className="text-xs font-bold text-sky-500 mt-0.5">
                🧊 {state.streakFreezes} freeze{state.streakFreezes === 1 ? "" : "s"} available
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-stone-400">Today</p>
              <p className="text-lg font-extrabold text-indigo-500">
                {completedCount}/{totalCount} missions
              </p>
            </div>
          </div>
          <TierSelector tier={state.tier} onChangeTier={onChangeTier} />
        </Card>

        <button
          onClick={onOpenBadges}
          className="w-full flex items-center gap-3 bg-white border-4 border-amber-200 rounded-2xl p-3 text-left active:translate-y-[2px] transition-all"
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 bg-amber-100">🏅</div>
          <div className="min-w-0 flex-1">
            <p className="font-extrabold text-stone-800">Badges</p>
            <p className="text-xs font-bold text-stone-400">
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
