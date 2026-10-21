// Home screen: today's checklist across modules, tier selector, streak.
// Laid out in the "style C" look (design-preview/style-c.html): status card
// with date and streak/freeze pills, Today's Missions as rounded cards with a
// Start › / Done ✓ pill, All Activities as a 2-column grid. Colours, fonts and
// shapes come from the theme.jsx tokens (see its header comment).
window.App = window.App || {};

(function () {
  const { useState, useEffect, useRef } = React;

  // Was the last input a tap/click (true) or a key press (false)? Lets the level-up
  // dialog show a focus ring only for keyboard users, whatever the browser decides
  // about :focus-visible for focus moved by script. Plain listeners, nothing stored.
  let lastInputWasPointer = false;
  document.addEventListener("pointerdown", () => { lastInputWasPointer = true; }, true);
  document.addEventListener("keydown", () => { lastInputWasPointer = false; }, true);
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
              className={`flex-1 rounded-[14px] py-2 text-sm transition-all ${TYPE.heading}`}
              style={
                active
                  ? { backgroundColor: INK.teal, color: "#ffffff", boxShadow: `0 3px 0 ${INK.ink}` }
                  : { backgroundColor: INK.paperCard, color: INK.mutedInk, border: `1.5px solid ${INK.line}` }
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

  // "Wednesday 14 October" from a "YYYY-MM-DD" string (read as a calendar date,
  // so the device's time zone cannot shift it).
  function dateText(today) {
    const [y, m, d] = today.split("-").map(Number);
    try {
      return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", timeZone: "UTC" });
    } catch (e) {
      return today;
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

  // One line saying what each module is, shown on the Today's Missions cards.
  const MODULE_BLURB = {
    listening: "Listen to a passage and answer questions",
    speaking: "Say sentences aloud and get feedback",
    storytelling: "Read a story and spot how it works",
    reading: "Read a short passage and answer questions",
    comprehension: "Think about what a passage really means",
    writing: "Write a short piece and compare with a model",
    grammar: "Learn a rule, then practise it",
    wordhunt: "Find hidden words in the letter grid",
    vocabulary: "Flip through 10 new words",
    knowledge: "Read about real history and science",
    hangman: "Guess the word letter by letter",
  };

  const CARD_SHADOW = "0 8px 18px -14px rgba(15,91,102,0.5)";

  function Pill({ children, tone = "plain" }) {
    const tones = {
      plain: { backgroundColor: INK.paperCard, border: `1.5px solid ${INK.line}`, color: INK.ink },
      hot: { backgroundColor: INK.stampTint, border: `1.5px solid ${INK.stampTintBorder}`, color: INK.stampText },
      cool: { backgroundColor: INK.tealTint, border: `1.5px solid ${INK.tealTintBorder}`, color: INK.tealText },
      muted: { backgroundColor: INK.disabled, border: `1.5px solid ${INK.line}`, color: INK.mutedInk },
    };
    return (
      <span className="inline-flex items-center gap-1.5 rounded-[14px] px-3 py-1.5 text-sm font-extrabold whitespace-nowrap" style={tones[tone]}>
        {children}
      </span>
    );
  }

  // Today's Missions: a wide card with a round icon, what the module is, and
  // a Start › / Done ✓ pill. The whole card is the button.
  function MissionRow({ mod, done, progress, onOpen }) {
    const a = MODULE_ACCENTS[mod.key] || MODULE_ACCENTS.listening;
    return (
      <button
        onClick={mod.implemented ? onOpen : undefined}
        disabled={!mod.implemented}
        className={`w-full flex items-center gap-3 rounded-[20px] p-3 text-left transition-all ${mod.implemented ? "active:translate-y-[2px]" : "opacity-50"}`}
        style={{ backgroundColor: done ? INK.paper : INK.paperCard, border: `1.5px solid ${mod.implemented ? a.tintBorder : INK.line}`, boxShadow: CARD_SHADOW }}
      >
        <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-[26px] shrink-0" style={{ backgroundColor: a.tint }}>
          {done ? "✅" : mod.emoji}
        </div>
        <div className="min-w-0 flex-1">
          <p className={`text-[17px] leading-tight ${TYPE.heading}`} style={{ color: INK.ink }}>
            {mod.label}
          </p>
          <p className="text-[13px] font-bold leading-snug mt-0.5" style={{ color: INK.mutedInk }}>
            {mod.implemented ? MODULE_BLURB[mod.key] : "Coming soon"}
          </p>
          {progress && (
            <p className="text-[13px] font-bold leading-snug" style={{ color: INK.tealText }}>
              {progress}
            </p>
          )}
        </div>
        {mod.implemented && (
          <span
            className="shrink-0 rounded-[14px] px-3.5 py-2 text-sm font-extrabold whitespace-nowrap"
            style={done ? { backgroundColor: INK.successTint, color: INK.success } : { backgroundColor: INK.stamp, color: "#ffffff", boxShadow: `0 4px 0 ${INK.stampDark}` }}
          >
            {done ? "Done ✓" : "Start ›"}
          </span>
        )}
      </button>
    );
  }

  // All Activities: a compact card (icon on top, name, status). `star` marks a
  // module that is one of today's missions; `progress` is the optional third line.
  function ModuleCard({ mod, done, isMission, onOpen, progress }) {
    const a = MODULE_ACCENTS[mod.key] || MODULE_ACCENTS.listening;
    return (
      <button
        onClick={mod.implemented ? onOpen : undefined}
        disabled={!mod.implemented}
        className={`w-full h-full flex flex-col items-start gap-2.5 rounded-[20px] p-3.5 text-left transition-all ${mod.implemented ? "active:translate-y-[2px]" : "opacity-50"}`}
        style={{ backgroundColor: INK.paperCard, border: `1.5px solid ${mod.implemented && isMission ? a.solid : INK.line}`, boxShadow: CARD_SHADOW }}
      >
        <div className="w-[46px] h-[46px] rounded-[14px] flex items-center justify-center text-2xl shrink-0" style={{ backgroundColor: a.tint }}>
          {done ? "✅" : mod.emoji}
        </div>
        <div className="min-w-0">
          <p className={`text-base leading-tight ${TYPE.heading}`} style={{ color: INK.ink }}>
            {mod.label}
            {isMission && <span aria-label="Today's mission"> ⭐</span>}
          </p>
          <p className="text-[13px] font-bold leading-snug mt-1" style={{ color: done ? INK.success : INK.mutedInk }}>
            {!mod.implemented ? "Coming soon" : done ? "Done today ✓" : isMission ? "Today's mission" : "Tap to start"}
          </p>
          {progress && (
            <p className="text-[13px] font-bold leading-snug" style={{ color: INK.tealText }}>
              {progress}
            </p>
          )}
        </div>
      </button>
    );
  }

  // A full-width link card (Badges, Mistake Notebook).
  function LinkRow({ emoji, title, children, onClick, tint, border }) {
    return (
      <button
        onClick={onClick}
        className="w-full flex items-center gap-3 rounded-[20px] p-3 text-left active:translate-y-[2px] transition-all"
        style={{ backgroundColor: INK.paperCard, border: `1.5px solid ${border}`, boxShadow: CARD_SHADOW }}
      >
        <div className="w-12 h-12 rounded-[14px] flex items-center justify-center text-2xl shrink-0" style={{ backgroundColor: tint }}>
          {emoji}
        </div>
        <div className="min-w-0 flex-1">
          <p className={`text-base ${TYPE.heading}`} style={{ color: INK.ink }}>
            {title}
          </p>
          {children}
        </div>
      </button>
    );
  }

  // Explorer level card: a deep-teal "passport" with the level's stamp, its
  // name, a progress bar toward the next level and one line saying how far
  // away it is. Display only (not tappable). The level comes from the saved
  // mission count via getLevel (util.jsx); nothing about it is stored.
  function LevelCard({ total }) {
    const lv = window.App.getLevel(total);
    const pct = Math.round(lv.progress * 100);
    const line = lv.isMax ? "Max level" : `${lv.remaining} more mission${lv.remaining === 1 ? "" : "s"} to ${lv.nextName}`;
    return (
      <section
        className="relative overflow-hidden rounded-[28px] p-[18px]"
        style={{
          color: "#ffffff",
          background: `radial-gradient(90% 120% at 100% 0%, ${INK.sun}47, transparent 55%), linear-gradient(145deg, ${INK.tealDark}, ${INK.teal})`,
          boxShadow: "0 18px 34px -18px rgba(15,91,102,0.8)",
        }}
        aria-label={`Level ${lv.number}, ${lv.name}`}
      >
        <div className="absolute inset-2 rounded-[22px] pointer-events-none" style={{ border: "1.5px dashed rgba(255,255,255,0.28)" }} />
        <div className="relative flex items-center gap-4">
          <div
            className="w-[68px] h-[68px] rounded-full flex items-center justify-center text-[34px] shrink-0"
            style={{ backgroundColor: "#ffffff", border: `3px solid ${INK.sun}`, boxShadow: `0 0 0 4px ${INK.sun}47`, transform: "rotate(-6deg)" }}
          >
            {lv.stamp}
          </div>
          <div className="min-w-0">
            <p className="text-[13px] font-extrabold" style={{ color: INK.sun }}>
              Level {lv.number}
            </p>
            <p className={`text-[28px] leading-tight ${TYPE.display}`}>{lv.name}</p>
          </div>
        </div>
        <div
          className="relative h-3.5 rounded-full overflow-hidden mt-4"
          style={{ backgroundColor: "rgba(255,255,255,0.22)" }}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={pct}
        >
          <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: INK.sun }} />
        </div>
        <p className="relative text-[15px] font-extrabold mt-2.5">{line}</p>
      </section>
    );
  }

  // Level-up celebration: a full-screen dim-teal overlay with a card — the new
  // stamp pops in, a few sparkles twinkle, "Level up!", the new name and a
  // Continue button. Closes on Continue, a tap on the dim area, or Esc; focus
  // starts on Continue and stays in the dialog. The motion is plain CSS and is
  // switched off entirely under prefers-reduced-motion (static card only).
  function LevelUpDialog({ levelUp, onClose }) {
    const btnRef = useRef(null);
    // Keyboard focus ring: on only if the last input was the keyboard (and from then on after any key press).
    const [kb, setKb] = useState(!lastInputWasPointer);
    const to = levelUp.to;
    const article = /^[AEIOU]/i.test(to.name) ? "an" : "a";
    const sparkles = [
      { left: "8%", top: "14%", delay: "0s", size: 22 },
      { left: "88%", top: "10%", delay: "0.35s", size: 18 },
      { left: "14%", top: "62%", delay: "0.7s", size: 16 },
      { left: "90%", top: "58%", delay: "0.15s", size: 24 },
      { left: "50%", top: "4%", delay: "0.5s", size: 16 },
      { left: "72%", top: "86%", delay: "0.9s", size: 18 },
    ];

    useEffect(() => {
      if (btnRef.current) btnRef.current.focus();
      const onPointer = () => setKb(false);
      const onKey = (e) => {
        if (e.key !== "Escape") setKb(true);
        if (e.key === "Escape") {
          e.preventDefault();
          onClose();
        } else if (e.key === "Tab") {
          // Continue is the only control: keep focus on it.
          e.preventDefault();
          if (btnRef.current) btnRef.current.focus();
        }
      };
      document.addEventListener("keydown", onKey);
      document.addEventListener("pointerdown", onPointer);
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", onKey);
        document.removeEventListener("pointerdown", onPointer);
        document.body.style.overflow = prevOverflow;
      };
    }, []);

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 lvlup-overlay"
        style={{ backgroundColor: `${INK.tealDark}e0` }}
        onClick={onClose}
      >
        <style>{`
          @media (prefers-reduced-motion: no-preference) {
            .lvlup-overlay { animation: lvlup-fade 0.25s ease-out both; }
            .lvlup-card { animation: lvlup-rise 0.35s ease-out both; }
            .lvlup-stamp { animation: lvlup-pop 0.7s cubic-bezier(0.2, 1.4, 0.4, 1) 0.15s both; }
            .lvlup-spark { animation: lvlup-twinkle 1.6s ease-in-out infinite; }
          }
          @keyframes lvlup-fade { from { opacity: 0; } to { opacity: 1; } }
          @keyframes lvlup-rise { from { opacity: 0; transform: translateY(16px) scale(0.97); } to { opacity: 1; transform: none; } }
          @keyframes lvlup-pop { 0% { transform: scale(0.2) rotate(-24deg); opacity: 0; } 70% { transform: scale(1.18) rotate(-4deg); opacity: 1; } 100% { transform: scale(1) rotate(-6deg); opacity: 1; } }
          @keyframes lvlup-twinkle { 0%, 100% { opacity: 0.25; transform: scale(0.7); } 50% { opacity: 1; transform: scale(1.15); } }
          /* Focus ring only for keyboard focus (Tab): :focus-visible, and only once the keyboard was the last input; a tap or click shows none. */
          .lvlup-btn:focus { outline: none; }
          .lvlup-btn[data-kb="true"]:focus-visible { outline: 3px solid ${INK.teal}; outline-offset: 3px; }
        `}</style>
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lvlup-title"
          aria-describedby="lvlup-text"
          className="lvlup-card relative w-full max-w-sm rounded-[28px] p-6 text-center overflow-hidden"
          style={{ backgroundColor: INK.paperCard, boxShadow: "0 24px 48px -16px rgba(0,0,0,0.5)" }}
          onClick={(e) => e.stopPropagation()}
        >
          {sparkles.map((s, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="lvlup-spark absolute pointer-events-none"
              style={{ left: s.left, top: s.top, fontSize: s.size, animationDelay: s.delay, opacity: 0.8 }}
            >
              ✨
            </span>
          ))}
          <div
            className="lvlup-stamp relative mx-auto w-[112px] h-[112px] rounded-full flex items-center justify-center text-[60px]"
            style={{ backgroundColor: INK.goldTint, border: `4px solid ${INK.sun}`, boxShadow: `0 0 0 6px ${INK.sun}47`, transform: "rotate(-6deg)" }}
          >
            {to.stamp}
          </div>
          <p id="lvlup-title" className={`relative text-[26px] mt-5 ${TYPE.display}`} style={{ color: INK.stampText }}>
            Level up!
          </p>
          <p className={`relative text-[34px] leading-tight ${TYPE.display}`} style={{ color: INK.ink }}>
            {to.name}
          </p>
          <p id="lvlup-text" className="relative text-base font-bold mt-1" style={{ color: INK.mutedInk }}>
            You are now {article} {to.name}!
          </p>
          <button
            ref={btnRef}
            data-kb={kb ? "true" : "false"}
            onClick={onClose}
            className="lvlup-btn relative w-full mt-5 rounded-[14px] font-extrabold px-5 py-3 text-lg font-ui transition-all duration-100 active:translate-y-[3px]"
            style={{ backgroundColor: INK.stamp, color: "#ffffff", boxShadow: `0 4px 0 ${INK.stampDark}` }}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  function DailyMissions({ state, today, onChangeTier, onOpenModule, onOpenBadges, onOpenBackup, onOpenReport, dueCount, onOpenReview, freezeBanner, onDismissFreezeBanner }) {
    const daily = Storage.getDaily(state, today);
    const moduleByKey = Object.fromEntries(Storage.MODULES.map((m) => [m.key, m]));
    const completedCount = daily.done.length;
    const totalCount = daily.missions.length;
    const earnedBadgeCount = Storage.earnedBadgeKeys(state).length;
    const streakView = Storage.getStreakView(state, today);
    const allDone = completedCount === totalCount;
    const streakNote = streakMessage(streakView, allDone);

    // A level-up left by the module that was just finished (Root.jsx). It is
    // taken here exactly once on mount and cleared at once, so it is shown a
    // single time and never again after a reload, a restore or a first load.
    const [levelUp, setLevelUp] = useState(null);
    useEffect(() => {
      const pending = window.App.takePendingLevelUp();
      if (pending) setLevelUp(pending);
    }, []);

    return (
      <div className="flex flex-col gap-4">
        {levelUp && <LevelUpDialog levelUp={levelUp} onClose={() => setLevelUp(null)} />}
        {freezeBanner > 0 && (
          <div
            className="rounded-[20px] p-3 flex items-center justify-between gap-2"
            style={{ backgroundColor: INK.tealTint, border: `1.5px solid ${INK.tealTintBorder}` }}
          >
            <p className={`text-sm ${TYPE.heading}`} style={{ color: INK.tealText }}>
              {freezeBanner > 1
                ? `🧊 ${freezeBanner} streak freezes used! You missed ${freezeBanner} days, but your streak was saved.`
                : "🧊 Streak freeze used! You missed a day, but your streak was saved."}
            </p>
            <button onClick={onDismissFreezeBanner} className="font-extrabold text-lg shrink-0" style={{ color: INK.tealText }}>
              ×
            </button>
          </div>
        )}

        <PaperCard>
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[14px] font-bold" style={{ color: INK.mutedInk }}>
                {dateText(today)}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {streakView.status === "broken" ? (
                  <>
                    <Pill tone="muted">
                      <span style={{ filter: "grayscale(1)", opacity: 0.6 }}>🔥</span> Streak ended
                    </Pill>
                    {state.stats.bestStreak > 0 && (
                      <Pill tone="plain">
                        🏆 Best streak: {state.stats.bestStreak} day{state.stats.bestStreak === 1 ? "" : "s"}
                      </Pill>
                    )}
                  </>
                ) : (
                  <Pill tone="hot">
                    🔥 {streakView.count} day{streakView.count === 1 ? "" : "s"}
                  </Pill>
                )}
                <Pill tone="cool">
                  🧊 {state.streakFreezes} freeze{state.streakFreezes === 1 ? "" : "s"} available
                </Pill>
              </div>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[13px] font-bold" style={{ color: INK.mutedInk }}>
                Today
              </p>
              <p className={`text-lg leading-tight ${TYPE.heading}`} style={{ color: INK.ink }}>
                {completedCount}/{totalCount} missions
              </p>
            </div>
          </div>
          {streakNote && (
            <p
              className="text-sm font-bold leading-snug mt-3 rounded-[14px] px-3 py-2"
              style={streakView.status === "saved" ? { backgroundColor: INK.tealTint, color: INK.tealText } : { backgroundColor: INK.goldTint, color: INK.ink }}
            >
              {streakNote}
            </p>
          )}
          <div className="mt-3">
            <TierSelector tier={state.tier} onChangeTier={onChangeTier} />
          </div>
        </PaperCard>

        <LevelCard total={state.stats.totalMissionsCompleted} />

        <div>
          <p className={`text-xl ${TYPE.display}`} style={{ color: INK.ink }}>
            Today's Missions
          </p>
          <p className="text-sm font-bold mb-3" style={{ color: completedCount === totalCount ? INK.success : INK.mutedInk }}>
            {completedCount === totalCount
              ? "All done — great work! Every other activity is bonus practice."
              : `Finish all ${totalCount} to complete your day. Every other activity is bonus practice.`}
          </p>
          <div className="flex flex-col gap-3">
            {daily.missions.map((key) => (
              <MissionRow
                key={key}
                mod={moduleByKey[key]}
                done={daily.done.includes(key)}
                progress={progressText(key, state)}
                onOpen={() => onOpenModule(key)}
              />
            ))}
          </div>
        </div>

        <LinkRow emoji="🏅" title="Badges" onClick={onOpenBadges} tint={INK.goldTint} border={INK.goldTintBorder}>
          <p className="text-[13px] font-bold" style={{ color: INK.mutedInk }}>
            {earnedBadgeCount}/{Storage.BADGES.length} earned — tap to see them all
          </p>
        </LinkRow>

        <LinkRow
          emoji="📒"
          title="Mistake Notebook"
          onClick={onOpenReview}
          tint={dueCount > 0 ? INK.stampTint : INK.goldTint}
          border={dueCount > 0 ? INK.stampTintBorder : INK.line}
        >
          <p className="text-sm font-bold" style={{ color: dueCount > 0 ? INK.stampText : INK.mutedInk }}>
            {dueCount > 0 ? `${dueCount} to review today` : "Nothing to review today 👍"}
          </p>
        </LinkRow>

        <p className={`text-xl -mb-1 ${TYPE.display}`} style={{ color: INK.ink }}>
          All Activities
        </p>
        {/* One column on phones, two from tablet width (sm: 640px) up. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Storage.MODULES.map((mod) => (
            <ModuleCard
              key={mod.key}
              mod={mod}
              done={state.dailyProgress.date === today && state.dailyProgress.completedModules.includes(mod.key)}
              isMission={daily.missions.includes(mod.key)}
              progress={progressText(mod.key, state)}
              onOpen={() => onOpenModule(mod.key)}
            />
          ))}
        </div>

        {/* Parent-facing, kept low-key at the very bottom: easy to find, not competing with the missions. */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 pt-2">
          <button
            onClick={onOpenBackup}
            className={`text-[13px] underline decoration-dotted ${TYPE.caption}`}
            style={{ color: INK.mutedInk }}
          >
            💾 Backup / Restore progress (back up once a week)
          </button>
          <button
            onClick={onOpenReport}
            className={`text-[13px] underline decoration-dotted ${TYPE.caption}`}
            style={{ color: INK.mutedInk }}
          >
            📊 Parent report
          </button>
        </div>
      </div>
    );
  }

  window.App.DailyMissions = DailyMissions;
})();
