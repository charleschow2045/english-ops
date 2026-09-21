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
      { id: "sp-easy-5", text: "My grandmother makes delicious dumplings every weekend." },
      { id: "sp-easy-6", text: "We walked along the beach and collected shiny shells." },
      { id: "sp-easy-7", text: "The football match starts after lunch tomorrow." },
      { id: "sp-easy-8", text: "He forgot his umbrella, so he got completely wet." },
      { id: "sp-easy-9", text: "A gentle breeze moved the leaves on the tall tree." },
      { id: "sp-easy-10", text: "Please remember to switch off the lights before you leave." },
    ],
    medium: [
      { id: "sp-medium-1", text: "She sells seashells by the seashore." },
      { id: "sp-medium-2", text: "The weather forecast predicted heavy rain today." },
      { id: "sp-medium-3", text: "My favourite subject is science because it's fascinating." },
      { id: "sp-medium-4", text: "The unusually large crowd surprised everyone at the concert." },
      { id: "sp-medium-5", text: "Thirty thoughtful students thanked their tired teacher on Thursday." },
      { id: "sp-medium-6", text: "The ferry crosses the harbour every fifteen minutes." },
      { id: "sp-medium-7", text: "Scientists discovered a mysterious creature in the deepest part of the ocean." },
      { id: "sp-medium-8", text: "Whenever it rains heavily, the streets near our school flood quickly." },
      { id: "sp-medium-9", text: "The photographer patiently waited for the perfect moment to press the button." },
      { id: "sp-medium-10", text: "Regular exercise strengthens your muscles and improves your concentration." },
    ],
    hard: [
      { id: "sp-hard-1", text: "She quickly finished her homework before dinner." },
      { id: "sp-hard-2", text: "The weather changed unexpectedly during the trip." },
      { id: "sp-hard-3", text: "He practises piano particularly hard every day." },
      { id: "sp-hard-4", text: "The archaeologists carefully excavated the ancient artifacts." },
      { id: "sp-hard-5", text: "The volunteers enthusiastically cleaned the polluted stream throughout the entire weekend." },
      { id: "sp-hard-6", text: "Unfortunately, the expedition was postponed because of the dangerous conditions." },
      { id: "sp-hard-7", text: "The conductor gradually increased the volume as the orchestra approached the finale." },
      { id: "sp-hard-8", text: "Meteorologists carefully monitor atmospheric pressure to predict approaching storms." },
      { id: "sp-hard-9", text: "Traditional craftsmen still produce intricate patterns using ancient techniques." },
      { id: "sp-hard-10", text: "The librarian recommended an extraordinary biography about a determined female astronomer." },
    ],
    expert: [
      { id: "sp-expert-1", text: "Despite the challenges, the team persevered and succeeded." },
      { id: "sp-expert-2", text: "The museum's exhibit fascinated every visitor." },
      { id: "sp-expert-3", text: "Effective communication requires patience and clarity." },
      { id: "sp-expert-4", text: "The entrepreneur's unprecedented success inspired a whole generation." },
      { id: "sp-expert-5", text: "Environmental sustainability requires cooperation between governments, businesses and ordinary citizens." },
      { id: "sp-expert-6", text: "The negotiators reluctantly acknowledged that a permanent agreement seemed increasingly improbable." },
      { id: "sp-expert-7", text: "Archaeological evidence suggests that ancient civilisations exchanged goods across enormous distances." },
      { id: "sp-expert-8", text: "Philosophers have long debated whether human curiosity is inherently beneficial or potentially dangerous." },
      { id: "sp-expert-9", text: "Her remarkable perseverance transformed a modest experiment into a groundbreaking discovery." },
      { id: "sp-expert-10", text: "Consumers are frequently influenced by advertisements without consciously recognising their persuasive techniques." },
    ],
  };
})();
