// Module 2: Speaking — words/sentences to say aloud, checked via Web Speech recognition.
// Even "Easy" is real sentences appropriate for a 10-11 year old — single
// baby-level words were removed after feedback that they were too easy.
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  window.App.Content.SPEAKING_ITEMS = {
    easy: [
      { id: "sp-easy-1", text: "The library was extremely quiet this morning." },
      { id: "sp-easy-2", text: "I really enjoy reading mystery novels." },
      { id: "sp-easy-3", text: "Our classroom just got a new computer." },
      { id: "sp-easy-4", text: "She carefully organised her books by colour." },
    ],
    medium: [
      { id: "sp-medium-1", text: "She sells seashells by the seashore." },
      { id: "sp-medium-2", text: "The weather forecast predicted heavy rain today." },
      { id: "sp-medium-3", text: "My favourite subject is science because it's fascinating." },
      { id: "sp-medium-4", text: "The unusually large crowd surprised everyone at the concert." },
    ],
    hard: [
      { id: "sp-hard-1", text: "She quickly finished her homework before dinner." },
      { id: "sp-hard-2", text: "The weather changed unexpectedly during the trip." },
      { id: "sp-hard-3", text: "He practises piano particularly hard every day." },
      { id: "sp-hard-4", text: "The archaeologists carefully excavated the ancient artifacts." },
    ],
    expert: [
      { id: "sp-expert-1", text: "Despite the challenges, the team persevered and succeeded." },
      { id: "sp-expert-2", text: "The museum's exhibit fascinated every visitor." },
      { id: "sp-expert-3", text: "Effective communication requires patience and clarity." },
      { id: "sp-expert-4", text: "The entrepreneur's unprecedented success inspired a whole generation." },
    ],
  };
})();
