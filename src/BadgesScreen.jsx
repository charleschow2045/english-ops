// Badge collection screen — pure display of Storage.BADGES against current
// stats, no separate "earned" state stored (see storage.jsx earnedBadgeKeys).
// Second of the 3 "探險護照" (Explorer's Passport) redesign sample screens —
// badges are rendered as passport-stamp Stamp tiles (see theme.jsx).
window.App = window.App || {};

(function () {
  const { INK, TYPE, PaperCard, PaperBackButton, Stamp } = window.App.UI;
  const { Storage } = window.App;

  function BadgeTile({ badge, earned }) {
    return (
      <div
        className="flex items-center gap-3 rounded-2xl p-3 transition-all"
        style={{
          backgroundColor: earned ? INK.paperCard : INK.disabled,
          border: `1.5px solid ${earned ? INK.goldTintBorder : INK.line}`,
          boxShadow: earned ? "0 8px 18px -14px rgba(15,91,102,0.5)" : "none",
        }}
      >
        <Stamp emoji={badge.emoji} earned={earned} rotate={earned ? (badge.key.length % 2 === 0 ? -6 : 5) : 0} />
        <div className="min-w-0 flex-1">
          <p className={`text-base ${TYPE.heading}`} style={{ color: earned ? INK.ink : INK.mutedInk }}>
            {badge.label}
          </p>
          <p className={`text-[13px] ${TYPE.caption}`} style={{ color: INK.mutedInk }}>
            {badge.description}
          </p>
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
        <PaperBackButton onClick={onBack} />

        <PaperCard>
          <p className={`text-sm ${TYPE.caption}`} style={{ color: INK.mutedInk }}>
            Badges earned
          </p>
          <p className={`text-2xl ${TYPE.display}`} style={{ color: INK.gold }}>
            🏅 {earnedCount}/{totalCount}
          </p>
        </PaperCard>

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
