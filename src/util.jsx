// Small shared utilities
window.App = window.App || {};

(function () {
  function speak(text, opts = {}) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = opts.rate || 0.85;
    if (opts.voiceURI) {
      const voice = window.speechSynthesis.getVoices().find((v) => v.voiceURI === opts.voiceURI);
      if (voice) utter.voice = voice;
    }
    window.speechSynthesis.speak(utter);
  }

  // English-language voices available on this device. Populated async by the
  // browser, so components should also listen for the voiceschanged event.
  function getEnglishVoices() {
    if (!("speechSynthesis" in window)) return [];
    return window.speechSynthesis.getVoices().filter((v) => v.lang && v.lang.toLowerCase().startsWith("en"));
  }

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // Picks `count` random items from `arr` without replacement.
  function sampleArray(arr, count) {
    return shuffleArray(arr).slice(0, Math.min(count, arr.length));
  }

  window.App.speak = speak;
  window.App.getEnglishVoices = getEnglishVoices;
  window.App.shuffleArray = shuffleArray;
  window.App.sampleArray = sampleArray;
})();
