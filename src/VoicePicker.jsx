// Voice + speed picker for text-to-speech, shared by Listening and Speaking.
// Voices are enumerated from the device at runtime (they differ by OS/browser),
// so nothing here is hardcoded — whatever English voices exist show up as chips.
window.App = window.App || {};

(function () {
  const { useState, useEffect } = React;

  function cleanVoiceName(name) {
    return name.replace(/^Microsoft\s*/, "").replace(/^Google\s*/, "").split(/[\s(]/)[0];
  }

  function VoicePicker({ voicePref, onChange }) {
    const [voices, setVoices] = useState(() => window.App.getEnglishVoices());

    useEffect(() => {
      if (!("speechSynthesis" in window)) return;
      function update() {
        setVoices(window.App.getEnglishVoices());
      }
      update();
      window.speechSynthesis.addEventListener("voiceschanged", update);
      return () => window.speechSynthesis.removeEventListener("voiceschanged", update);
    }, []);

    const shortlist = voices.slice(0, 6);
    const rates = [
      { label: "Slow", rate: 0.7 },
      { label: "Normal", rate: 0.85 },
      { label: "Clear & Fast", rate: 1.0 },
    ];

    return (
      <div className="mb-4">
        <p className="text-xs font-extrabold text-stone-400 mb-1.5">🔊 Voice</p>
        {shortlist.length === 0 ? (
          <p className="text-xs text-stone-400 font-bold">Using your device's default voice</p>
        ) : (
          <div className="flex gap-2 overflow-x-auto pb-1">
            {shortlist.map((v) => {
              const active = voicePref.voiceURI === v.voiceURI;
              return (
                <button
                  key={v.voiceURI}
                  onClick={() => {
                    onChange({ voiceURI: v.voiceURI });
                    window.App.speak("Hi! This is my voice.", { voiceURI: v.voiceURI, rate: voicePref.rate });
                  }}
                  className={`shrink-0 rounded-xl border-4 font-bold px-3 py-1.5 text-xs whitespace-nowrap transition-all
                    ${active ? "bg-sky-400 border-sky-600 text-sky-950" : "bg-white border-stone-200 text-stone-500"}`}
                >
                  {cleanVoiceName(v.name)}
                </button>
              );
            })}
          </div>
        )}

        <p className="text-xs font-extrabold text-stone-400 mb-1.5 mt-3">⏱️ Speed</p>
        <div className="flex gap-2">
          {rates.map((r) => {
            const active = voicePref.rate === r.rate;
            return (
              <button
                key={r.label}
                onClick={() => onChange({ rate: r.rate })}
                className={`flex-1 rounded-xl border-4 font-bold py-1.5 text-xs transition-all
                  ${active ? "bg-sky-400 border-sky-600 text-sky-950" : "bg-white border-stone-200 text-stone-500"}`}
              >
                {r.label}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  window.App.VoicePicker = VoicePicker;
})();
