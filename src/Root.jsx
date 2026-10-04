// Top-level app: hub-and-spoke navigation between Daily Missions home and modules
window.App = window.App || {};

(function () {
  const { useState, useEffect } = React;
  const {
    Storage,
    DailyMissions,
    BadgesScreen,
    BackupScreen,
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
    const [freezeBanner, setFreezeBanner] = useState(false);

    useEffect(() => {
      Storage.saveState(state);
    }, [state]);

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
      setFreezeBanner(false);
    }

    function completeModule(key) {
      setState((s) => {
        const { state: nextState, freezeUsed } = Storage.markModuleComplete(s, key);
        if (freezeUsed) setFreezeBanner(true);
        return nextState;
      });
      setView("home");
    }

    return (
      <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: "#EFE6D3", color: "#233142" }}>
        <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
          <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full opacity-[0.14] blur-3xl" style={{ backgroundColor: "#B8923A" }} />
          <div className="absolute top-24 -right-20 w-80 h-80 rounded-full opacity-[0.14] blur-3xl" style={{ backgroundColor: "#3F6B4A" }} />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full opacity-[0.12] blur-3xl" style={{ backgroundColor: "#A83A3A" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-[0.14] blur-3xl" style={{ backgroundColor: "#2F6B7A" }} />
          <span className="absolute top-16 right-8 text-4xl opacity-[0.16]">🧭</span>
          <span className="absolute top-48 left-6 text-3xl opacity-[0.16]">🗺️</span>
          <span className="absolute bottom-24 right-12 text-4xl opacity-[0.16]">✒️</span>
          <span className="absolute bottom-64 left-10 text-3xl opacity-[0.16]">🎒</span>
        </div>

        <div className="relative px-4 pb-10">
        <header className="pt-6 pb-4">
          <h1 className="text-3xl font-stamp font-bold tracking-tight" style={{ color: "#A83A3A" }}>🧭 English Quest</h1>
        </header>

        <main>
          {view === "home" && (
            <DailyMissions
              state={state}
              onChangeTier={changeTier}
              onOpenModule={openModule}
              onOpenBadges={() => setView("badges")}
              onOpenBackup={() => setView("backup")}
              dueCount={Mistakes.countDue(state, Storage.todayStr())}
              onOpenReview={() => setView("review")}
              freezeBanner={freezeBanner}
              onDismissFreezeBanner={() => setFreezeBanner(false)}
            />
          )}
          {view === "badges" && <BadgesScreen state={state} onBack={() => setView("home")} />}
          {view === "review" && (
            <MistakesReview state={state} voicePref={state.voicePref} onBack={() => setView("home")} onAnswer={recordReview} />
          )}
          {view === "backup" &&<BackupScreen state={state} onBack={() => setView("home")} onRestore={restoreBackup} />}
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
    );
  }

  window.App.Root = Root;
})();
