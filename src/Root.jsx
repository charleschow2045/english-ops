// Top-level app: hub-and-spoke navigation between Daily Missions home and modules
window.App = window.App || {};

(function () {
  const { useState, useEffect } = React;
  const {
    Storage,
    DailyMissions,
    BadgesScreen,
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

    function completeModule(key) {
      setState((s) => {
        const { state: nextState, freezeUsed } = Storage.markModuleComplete(s, key);
        if (freezeUsed) setFreezeBanner(true);
        return nextState;
      });
      setView("home");
    }

    return (
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-sky-100 via-indigo-50 to-violet-100 text-stone-800">
        <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
          <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-amber-200 opacity-40 blur-3xl" />
          <div className="absolute top-24 -right-20 w-80 h-80 rounded-full bg-emerald-200 opacity-40 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-rose-200 opacity-30 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-sky-200 opacity-30 blur-3xl" />
          <span className="absolute top-16 right-8 text-4xl opacity-20">⭐</span>
          <span className="absolute top-48 left-6 text-3xl opacity-20">📚</span>
          <span className="absolute bottom-24 right-12 text-4xl opacity-20">✏️</span>
          <span className="absolute bottom-64 left-10 text-3xl opacity-20">🎈</span>
        </div>

        <div className="relative px-4 pb-10">
        <header className="pt-6 pb-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-indigo-600">🚀 English Quest</h1>
        </header>

        <main>
          {view === "home" && (
            <DailyMissions
              state={state}
              onChangeTier={changeTier}
              onOpenModule={openModule}
              onOpenBadges={() => setView("badges")}
              freezeBanner={freezeBanner}
              onDismissFreezeBanner={() => setFreezeBanner(false)}
            />
          )}
          {view === "badges" && <BadgesScreen state={state} onBack={() => setView("home")} />}
          {view === "listening" && (
            <ListeningModule
              tier={state.tier}
              voicePref={state.voicePref}
              onVoiceChange={changeVoice}
              onBack={() => setView("home")}
              onComplete={() => completeModule("listening")}
            />
          )}
          {view === "speaking" && (
            <SpeakingModule
              tier={state.tier}
              voicePref={state.voicePref}
              onVoiceChange={changeVoice}
              onBack={() => setView("home")}
              onComplete={() => completeModule("speaking")}
            />
          )}
          {view === "storytelling" && (
            <PassageModule
              items={window.App.Content.STORYTELLING_ITEMS}
              tier={state.tier}
              itemLabel="Story"
              color="violet"
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
              color="emerald"
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
              color="orange"
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
            <GrammarModule tier={state.tier} onBack={() => setView("home")} onComplete={() => completeModule("grammar")} />
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
              color="violet"
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
