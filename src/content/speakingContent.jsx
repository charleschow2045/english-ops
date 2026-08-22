// Module 2: Speaking — words/sentences to say aloud, checked via Web Speech recognition
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  window.App.Content.SPEAKING_ITEMS = {
    easy: [
      { id: "sp-easy-1", text: "cat" },
      { id: "sp-easy-2", text: "apple" },
      { id: "sp-easy-3", text: "happy" },
    ],
    medium: [
      { id: "sp-medium-1", text: "I like to read books." },
      { id: "sp-medium-2", text: "The sun is shining today." },
      { id: "sp-medium-3", text: "My dog can run very fast." },
    ],
    hard: [
      { id: "sp-hard-1", text: "She quickly finished her homework before dinner." },
      { id: "sp-hard-2", text: "The weather changed unexpectedly during the trip." },
      { id: "sp-hard-3", text: "He practices piano particularly hard every day." },
    ],
    expert: [
      { id: "sp-expert-1", text: "Despite the challenges, the team persevered and succeeded." },
      { id: "sp-expert-2", text: "The museum's exhibit fascinated every visitor." },
      { id: "sp-expert-3", text: "Effective communication requires patience and clarity." },
    ],
  };
})();
