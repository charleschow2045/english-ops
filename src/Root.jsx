// Top-level app: hub-and-spoke navigation between Daily Missions home and modules
window.App = window.App || {};

(function () {
  const { useState, useEffect, useRef } = React;
  const { INK, TYPE } = window.App.UI;
  const {
    Storage,
    DailyMissions,
    BadgesScreen,
    BackupScreen,
    ParentReportScreen,
    TestModeBanner,
    Mistakes,
    MistakesReview,
    ListeningModule,
    SpeakingModule,
    PassageModule,
    GrammarModule,
    WritingModule,
    WordHuntModule,
    HangmanModule,
    VocabularyModule,
  } = window.App;

  function Root() {
    const [state, setState] = useState(() => Storage.loadState());
    const [view, setView] = useState("home");
    // How many freezes the last completion just spent (0 = no banner).
    const [freezeBanner, setFreezeBanner] = useState(0);
    const pendingFreezeRef = useRef(0);
    // The app may stay open across midnight: track the date and roll the day over.
    const [today, setToday] = useState(() => Storage.todayStr());

    useEffect(() => {
      Storage.saveState(state);
      // completeModule's updater leaves the freeze count here; show it once state has settled.
      if (pendingFreezeRef.current > 0) {
        setFreezeBanner(pendingFreezeRef.current);
        pendingFreezeRef.current = 0;
      }
    }, [state]);

    useEffect(() => {
      const sync = () => setToday(Storage.todayStr());
      document.addEventListener("visibilitychange", sync);
      window.addEventListener("focus", sync);
      window.addEventListener("pageshow", sync);
      window.addEventListener(Storage.DATE_CHANGE_EVENT, sync);
      const timer = setInterval(sync, 60000);
      return () => {
        document.removeEventListener("visibilitychange", sync);
        window.removeEventListener("focus", sync);
        window.removeEventListener("pageshow", sync);
        window.removeEventListener(Storage.DATE_CHANGE_EVENT, sync);
        clearInterval(timer);
      };
    }, []);

    // New day -> fresh daily checklist (same object back when nothing changed, so no re-render).
    useEffect(() => {
      setState((s) => Storage.ensureToday(s, today));
    }, [today]);

    function changeTier(tier) {
      setState((s) => ({ ...s, tier }));
    }

    function changeVoice(patch) {
      setState((s) => ({ ...s, voicePref: { ...s.voicePref, ...patch } }));
    }

    function openModule(key) {
      setView(key);
    }

    // Mistakes notebook. Practice answers: only a wrong one changes anything.
    // Review answers advance or reset the schedule. Dates are local, whole days.
    function recordAnswer(moduleKey, questionId, correct) {
      setState((s) => Mistakes.recordPracticeAnswer(s, moduleKey, questionId, correct, Storage.todayStr()));
    }

    function recordReview(key, correct) {
      setState((s) => Mistakes.recordReviewAnswer(s, key, correct, Storage.todayStr()));
    }

    // `next` is a state already validated and normalised by Storage.parseBackup.
    // Replacing state is enough to persist it (the effect above saves it).
    function restoreBackup(next) {
      setState(next);
      setFreezeBanner(0);
    }

    function completeModule(key) {
      setState((s) => {
        const { state: nextState, freezesUsedNow } = Storage.markModuleComplete(s, key);
        pendingFreezeRef.current = freezesUsedNow; // idempotent, so safe if React runs the updater twice
        // Level-up for the home screen to celebrate: only when this completion
        // raised the mission count across a level boundary (a repeat of the same
        // module the same day adds nothing, so it never counts). Memory only.
        window.App.setPendingLevelUp(window.App.levelUpBetween(s.stats.totalMissionsCompleted, nextState.stats.totalMissionsCompleted));
        return nextState;
      });
      setView("home");
    }

    return (
      <>
      <TestModeBanner />
      <div className="min-h-screen relative overflow-hidden font-ui" style={{ backgroundColor: INK.paper, color: INK.ink }}>
        <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
          <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full opacity-[0.14] blur-3xl" style={{ backgroundColor: INK.sun }} />
          <div className="absolute top-24 -right-20 w-80 h-80 rounded-full opacity-[0.14] blur-3xl" style={{ backgroundColor: INK.teal2 }} />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full opacity-[0.12] blur-3xl" style={{ backgroundColor: INK.coral }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-[0.14] blur-3xl" style={{ backgroundColor: INK.teal }} />
          <span className="absolute top-16 right-8 text-4xl opacity-[0.16]">🧭</span>
          <span className="absolute top-48 left-6 text-3xl opacity-[0.16]">🗺️</span>
          <span className="absolute bottom-24 right-12 text-4xl opacity-[0.16]">✒️</span>
          <span className="absolute bottom-64 left-10 text-3xl opacity-[0.16]">🎒</span>
        </div>

        <div className="relative px-4 pb-10">
        <header className="pt-6 pb-4">
          <h1 className={`text-3xl ${TYPE.display}`} style={{ color: INK.ink }}>🧭 English Quest</h1>
        </header>

        <main>
          {view === "home" && (
            <DailyMissions
              state={state}
              today={today}
              onChangeTier={changeTier}
              onOpenModule={openModule}
              onOpenBadges={() => setView("badges")}
              onOpenBackup={() => setView("backup")}
              onOpenReport={() => setView("report")}
              dueCount={Mistakes.countDue(state, today)}
              onOpenReview={() => setView("review")}
              freezeBanner={freezeBanner}
              onDismissFreezeBanner={() => setFreezeBanner(0)}
            />
          )}
          {view === "badges" && <BadgesScreen state={state} onBack={() => setView("home")} />}
          {view === "review" && (
            <MistakesReview state={state} voicePref={state.voicePref} onBack={() => setView("home")} onAnswer={recordReview} />
          )}
          {view === "backup" &&<BackupScreen state={state} onBack={() => setView("home")} onRestore={restoreBackup} />}
          {view === "report" && <ParentReportScreen state={state} today={today} onBack={() => setView("home")} />}
          {view === "listening" && (
            <ListeningModule
              onAnswer={recordAnswer}
              tier={state.tier}
              voicePref={state.voicePref}
              onVoiceChange={changeVoice}
              onBack={() => setView("home")}
              sessionSize={5}
              onComplete={() => completeModule("listening")}
            />
          )}
          {view === "speaking" && (
            <SpeakingModule
              tier={state.tier}
              voicePref={state.voicePref}
              onVoiceChange={changeVoice}
              onBack={() => setView("home")}
              sessionSize={5}
              onComplete={() => completeModule("speaking")}
            />
          )}
          {view === "storytelling" && (
            <PassageModule
              items={window.App.Content.STORYTELLING_ITEMS}
              tier={state.tier}
              itemLabel="Story"
              sessionSize={3}
              accent={window.App.UI.MODULE_ACCENTS.storytelling}
              moduleKey="storytelling"
              onAnswer={recordAnswer}
              completionEmoji="📖"
              completionTitle="Great storytelling today!"
              onBack={() => setView("home")}
              onComplete={() => completeModule("storytelling")}
            />
          )}
          {view === "reading" && (
            <PassageModule
              items={window.App.Content.READING_ITEMS}
              tier={state.tier}
              itemLabel="Passage"
              sessionSize={3}
              accent={window.App.UI.MODULE_ACCENTS.reading}
              moduleKey="reading"
              onAnswer={recordAnswer}
              completionEmoji="📚"
              completionTitle="Awesome reading today!"
              onBack={() => setView("home")}
              onComplete={() => completeModule("reading")}
            />
          )}
          {view === "comprehension" && (
            <PassageModule
              items={window.App.Content.COMPREHENSION_ITEMS}
              tier={state.tier}
              itemLabel="Passage"
              sessionSize={3}
              accent={window.App.UI.MODULE_ACCENTS.comprehension}
              moduleKey="comprehension"
              onAnswer={recordAnswer}
              completionEmoji="🧠"
              completionTitle="Great thinking today!"
              onBack={() => setView("home")}
              onComplete={() => completeModule("comprehension")}
            />
          )}
          {view === "writing" && (
            <WritingModule tier={state.tier} onBack={() => setView("home")} onComplete={() => completeModule("writing")} />
          )}
          {view === "grammar" && (
            <GrammarModule
              tier={state.tier}
              doneLevels={state.moduleProgress.grammar.doneLevels}
              onAnswer={recordAnswer}
              onLevelDone={(levelKey) => setState((s) => Storage.markGrammarLevelDone(s, levelKey))}
              onBack={() => setView("home")}
              onComplete={() => completeModule("grammar")}
            />
          )}
          {view === "wordhunt" && (
            <WordHuntModule tier={state.tier} onBack={() => setView("home")} onComplete={() => completeModule("wordhunt")} />
          )}
          {view === "hangman" && (
            <HangmanModule tier={state.tier} onBack={() => setView("home")} onComplete={() => completeModule("hangman")} />
          )}
          {view === "vocabulary" && (
            <VocabularyModule
              tier={state.tier}
              voicePref={state.voicePref}
              onBack={() => setView("home")}
              onComplete={() => completeModule("vocabulary")}
            />
          )}
          {view === "knowledge" && (
            <PassageModule
              items={window.App.Content.KNOWLEDGE_ITEMS}
              tier={state.tier}
              itemLabel="Story"
              sessionSize={5}
              accent={window.App.UI.MODULE_ACCENTS.knowledge}
              moduleKey="knowledge"
              onAnswer={recordAnswer}
              completionEmoji="🏛️"
              completionTitle="Great learning today!"
              onBack={() => setView("home")}
              onComplete={() => completeModule("knowledge")}
            />
          )}
        </main>
        </div>
      </div>
      </>
    );
  }

  window.App.Root = Root;
})();
