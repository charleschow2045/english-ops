// Badge collection screen — pure display of Storage.BADGES against current
// stats, no separate "earned" state stored (see storage.jsx earnedBadgeKeys).
window.App = window.App || {};

(function () {
  const { Card, BackButton } = window.App.UI;
  const { Storage } = window.App;

  function BadgeTile({ badge, earned }) {
    return (
      <div
        className={`flex items-center gap-3 rounded-2xl border-4 p-3 transition-all ${
          earned ? "bg-white border-amber-300" : "bg-stone-100 border-stone-200 opacity-60"
        }`}
      >
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 ${
            earned ? "bg-amber-100" : "bg-stone-200 grayscale"
          }`}
        >
          {earned ? badge.emoji : "🔒"}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-extrabold text-stone-800">{badge.label}</p>
          <p className="text-xs font-bold text-stone-400">{badge.description}</p>
        </div>
      </div>
    );
  }

  function BadgesScreen({ state, onBack }) {
    const earnedKeys = Storage.earnedBadgeKeys(state);
    const earnedCount = earnedKeys.length;
    const totalCount = Storage.BADGES.length;

    return (
      <div className="flex flex-col gap-4">
        <BackButton onClick={onBack} />

        <Card>
          <p className="text-sm font-bold text-stone-400">Badges earned</p>
          <p className="text-2xl font-extrabold text-amber-500">
            🏅 {earnedCount}/{totalCount}
          </p>
        </Card>

        <div className="flex flex-col gap-3">
          {Storage.BADGES.map((badge) => (
            <BadgeTile key={badge.key} badge={badge} earned={earnedKeys.includes(badge.key)} />
          ))}
        </div>
      </div>
    );
  }

  window.App.BadgesScreen = BadgesScreen;
})();
