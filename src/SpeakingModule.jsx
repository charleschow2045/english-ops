// Module 2: Speaking — Web Speech API recognition checks the child's spoken
// word/sentence against the target; gentle "try again" on a mismatch.
//
// Robustness notes: recognition support/behavior varies wildly across
// browsers and devices (notably, it's unreliable or entirely unsupported on
// iOS Safari — the primary target device per CLAUDE.md). So this module:
//   - explicitly requests mic permission first, so failures are caught early
//   - wraps rec.start() in try/catch (some browsers throw synchronously)
//   - runs a hard timeout in case recognition never fires an event at all
//   - always shows a manual "I said it!" fallback so the child is never stuck
window.App = window.App || {};

(function () {
  const { useState, useEffect, useRef } = React;
  const { Card, Button } = window.App.UI;
  const { GlossaryText, speak, VoicePicker } = window.App;

  const LISTEN_TIMEOUT_MS = 7000;

  function normalize(s) {
    return s
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function scoreMatch(target, said) {
    const targetWords = normalize(target).split(" ").filter(Boolean);
    const saidWords = new Set(normalize(said).split(" ").filter(Boolean));
    if (targetWords.length === 0) return 0;
    const hits = targetWords.filter((w) => saidWords.has(w)).length;
    return hits / targetWords.length;
  }

  function SpeakingModule({ tier, onBack, onComplete, voicePref, onVoiceChange }) {
    const items = window.App.Content.SPEAKING_ITEMS[tier] || window.App.Content.SPEAKING_ITEMS.easy;
    const [index, setIndex] = useState(0);
    const [status, setStatus] = useState("idle"); // idle | listening | correct | tryAgain | unsupported | micBlocked
    const [heard, setHeard] = useState("");
    const [attempts, setAttempts] = useState(0);
    const [doneAll, setDoneAll] = useState(false);
    const recognitionRef = useRef(null);
    const timeoutRef = useRef(null);

    const supported = typeof window !== "undefined" && (window.SpeechRecognition || window.webkitSpeechRecognition);
    const item = items[index];
    const isLast = index === items.length - 1;

    useEffect(() => {
      return () => {
        clearListenTimeout();
        if (recognitionRef.current) {
          try {
            recognitionRef.current.abort();
          } catch (e) {}
        }
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      };
    }, []);

    function clearListenTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }

    async function startListening() {
      if (!supported) {
        setStatus("unsupported");
        return;
      }

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          stream.getTracks().forEach((t) => t.stop());
        } catch (err) {
          setStatus("micBlocked");
          return;
        }
      }

      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      let rec;
      try {
        rec = new SR();
      } catch (err) {
        setStatus("unsupported");
        return;
      }
      rec.lang = "en-US";
      rec.interimResults = false;
      rec.maxAlternatives = 1;
      rec.onresult = (e) => {
        clearListenTimeout();
        const said = e.results[0][0].transcript;
        setHeard(said);
        const score = scoreMatch(item.text, said);
        if (score >= 0.6) {
          setStatus("correct");
        } else {
          setAttempts((a) => a + 1);
          setStatus("tryAgain");
        }
      };
      rec.onerror = () => {
        clearListenTimeout();
        setAttempts((a) => a + 1);
        setStatus("tryAgain");
      };
      rec.onend = () => {
        clearListenTimeout();
        setStatus((s) => (s === "listening" ? "tryAgain" : s));
      };

      recognitionRef.current = rec;
      setStatus("listening");
      try {
        rec.start();
      } catch (err) {
        setStatus("tryAgain");
        return;
      }
      timeoutRef.current = setTimeout(() => {
        try {
          rec.stop();
        } catch (e) {}
        setStatus((s) => (s === "listening" ? "tryAgain" : s));
      }, LISTEN_TIMEOUT_MS);
    }

    function handleNext() {
      setStatus("idle");
      setHeard("");
      setAttempts(0);
      if (isLast) setDoneAll(true);
      else setIndex((i) => i + 1);
    }

    if (doneAll) {
      return (
        <Card className="text-center">
          <p className="text-5xl mb-2">🎤</p>
          <h2 className="text-xl font-extrabold text-stone-800 mb-1">Great speaking today!</h2>
          <p className="text-stone-500 font-bold mb-4">You practiced {items.length} words and sentences.</p>
          <Button color="rose" className="w-full" onClick={onComplete}>
            Back to Missions
          </Button>
        </Card>
      );
    }

    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="text-sm font-extrabold text-indigo-500">
            ← Back
          </button>
          <span className="text-sm font-extrabold text-stone-400">
            {index + 1} of {items.length}
          </span>
        </div>

        <Card>
          <VoicePicker voicePref={voicePref} onChange={onVoiceChange} />

          <GlossaryText text={item.text} className="text-2xl font-extrabold text-stone-800 text-center mb-4" />

          <div className="flex gap-2">
            <Button color="sky" className="flex-1" onClick={() => speak(item.text, voicePref)}>
              🔊 Hear It
            </Button>
            <Button color="rose" className="flex-1" onClick={startListening} disabled={status === "listening"}>
              {status === "listening" ? "🎤 Listening…" : "🎤 Say It"}
            </Button>
          </div>

          {status === "unsupported" && (
            <div className="mt-4 text-center">
              <p className="text-amber-600 font-bold text-sm mb-3">
                Speech recognition isn't available in this browser — that's okay! Say it out loud, then tap below.
              </p>
              <Button color="emerald" className="w-full" onClick={() => setStatus("correct")}>
                ✅ I said it!
              </Button>
            </div>
          )}

          {status === "micBlocked" && (
            <div className="mt-4 text-center">
              <p className="text-amber-600 font-bold text-sm mb-3">
                Microphone access is blocked — check your browser or device settings. You can still say it out loud and tap below.
              </p>
              <Button color="emerald" className="w-full" onClick={() => setStatus("correct")}>
                ✅ I said it!
              </Button>
            </div>
          )}

          {status === "tryAgain" && (
            <div className="mt-4 text-center">
              <p className="text-amber-600 font-bold text-sm mb-1">💛 Not quite — want to try again?</p>
              {heard && <p className="text-stone-400 text-xs font-bold mb-3">I heard: "{heard}"</p>}
              {attempts >= 2 ? (
                <Button color="emerald" className="w-full" onClick={handleNext}>
                  That's okay, keep practicing → Next
                </Button>
              ) : (
                <Button color="rose" className="w-full" onClick={startListening}>
                  🎤 Try Again
                </Button>
              )}
            </div>
          )}

          {status === "correct" && (
            <div className="mt-4 text-center">
              <p className="text-emerald-600 font-extrabold mb-3">✅ Great pronunciation!</p>
              <Button color="emerald" className="w-full" onClick={handleNext}>
                {isLast ? "Finish 🎉" : "Next →"}
              </Button>
            </div>
          )}

          {status === "idle" && (
            <button onClick={() => setStatus("correct")} className="mt-3 text-xs font-bold text-stone-400 underline decoration-dotted w-full text-center">
              Mic trouble? Tap here if you said it out loud
            </button>
          )}
        </Card>
      </div>
    );
  }

  window.App.SpeakingModule = SpeakingModule;
})();
