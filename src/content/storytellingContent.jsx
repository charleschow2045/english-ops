// Module 3: Story-telling — one tier-appropriate short story with 3 questions each
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  window.App.Content.STORYTELLING_ITEMS = {
    easy: [
      {
        id: "story-easy-1",
        title: "The Lost Kitten",
        passage:
          "Ben was walking home from school when he heard a soft meow. He looked under a bush and found a small grey kitten, shivering in the cold. Ben carried the kitten home and gave it a warm blanket and some milk. The next day, he made posters and found the kitten's owner living just two streets away. The owner was overjoyed and thanked Ben for taking such good care of her cat.",
        tipTitle: "🎬 Writing Trick: The Ordinary Moment",
        tip: "Great stories often start with a character doing something ordinary — then something unexpected happens! Ben was just walking home... until he heard that meow. Try starting your own story the same way.",
        questions: [
          { type: "mc", prompt: "What did Ben find under the bush?", options: ["A grey kitten", "A puppy", "A bird"], correctIndex: 0 },
          { type: "mc", prompt: "What did Ben give the kitten?", options: ["A warm blanket and milk", "A toy", "Nothing"], correctIndex: 0 },
          {
            type: "mc",
            prompt: "How did the owner feel when she got her cat back?",
            options: ["Overjoyed", "Angry", "Confused"],
            correctIndex: 0,
          },
        ],
      },
    ],
    medium: [
      {
        id: "story-medium-1",
        title: "The Science Fair Surprise",
        passage:
          "Aiden had spent three weeks building a model volcano for the school science fair, but the night before, his baking soda mixture spilled all over his poster. Instead of giving up, he stayed up late redesigning the display with his sister's help. The next morning, tired but proud, Aiden presented his volcano to the judges. His hard work paid off — he won second place, and the judges praised his creativity under pressure.",
        tipTitle: "⚡ Writing Trick: Give Your Character a Problem",
        tip: "A good story needs a problem to solve. Aiden's problem (his ruined poster, the night before the deadline) is exactly what made us want to keep reading to find out what happened next.",
        questions: [
          {
            type: "mc",
            prompt: "What problem did Aiden face the night before the fair?",
            options: ["His mixture spilled on his poster", "He lost his volcano", "He forgot his project"],
            correctIndex: 0,
          },
          { type: "mc", prompt: "Who helped Aiden fix his display?", options: ["His sister", "His teacher", "His best friend"], correctIndex: 0 },
          {
            type: "mc",
            prompt: "What did the judges praise Aiden for?",
            options: ["His creativity under pressure", "His neat handwriting", "His costume"],
            correctIndex: 0,
          },
        ],
      },
    ],
    hard: [
      {
        id: "story-hard-1",
        title: "The Storm on Bell Island",
        passage:
          "When the ferry to Bell Island was cancelled due to a sudden storm, twelve-year-old Priya and her grandfather were stranded at the old lighthouse for the night. At first, Priya was frightened by the howling wind, but her grandfather told stories of sailors who had once used the lighthouse to find their way home safely. By morning, the storm had passed, and Priya realized she had learned more about her grandfather's childhood in one night than in years of ordinary visits.",
        tipTitle: "🌙 Writing Trick: Show, Don't Just Tell",
        tip: "Setting the scene helps readers feel like they're there. Words like 'sudden storm' and 'howling wind' make you feel the danger right along with Priya, instead of just being told 'it was scary.'",
        questions: [
          {
            type: "mc",
            prompt: "Why were Priya and her grandfather stranded?",
            options: ["The ferry was cancelled due to a storm", "They missed the ferry on purpose", "The lighthouse was closed"],
            correctIndex: 0,
          },
          {
            type: "mc",
            prompt: "How did Priya's grandfather help her feel less frightened?",
            options: ["By telling stories about sailors and the lighthouse", "By calling for help", "By turning on the lights"],
            correctIndex: 0,
          },
          {
            type: "mc",
            prompt: "What did Priya realize by the end of the story?",
            options: ["She learned more about her grandfather that night than usual", "She wanted to become a sailor", "The lighthouse was haunted"],
            correctIndex: 0,
          },
        ],
      },
    ],
    expert: [
      {
        id: "story-expert-1",
        title: "The Unfinished Manuscript",
        passage:
          "For decades, the attic of the old Whitfield house had sat untouched, until a renovation crew discovered a dusty manuscript hidden beneath the floorboards. The pages, written in careful handwriting, told the unfinished story of a young inventor who had vanished mysteriously in 1920. Historians who examined the manuscript believed the inventor had been working on a device far ahead of its time, but no evidence of the invention itself was ever found. To this day, no one knows whether the manuscript was fiction or a genuine account of real events.",
        tipTitle: "🔍 Writing Trick: Leave a Little Mystery",
        tip: "Not every story needs to answer every question. Leaving something unsolved at the end — like whether the manuscript was fact or fiction — makes readers keep thinking about your story even after they finish it.",
        questions: [
          {
            type: "mc",
            prompt: "What did the renovation crew find in the attic?",
            options: ["A dusty manuscript hidden under the floorboards", "A working invention", "An old photograph"],
            correctIndex: 0,
          },
          {
            type: "mc",
            prompt: "What do historians believe about the inventor?",
            options: ["He was working on a device ahead of its time", "He was a famous author", "He never existed"],
            correctIndex: 0,
          },
          {
            type: "mc",
            prompt: "What can you infer about the ending of the story?",
            options: [
              "It remains a mystery whether the manuscript was fact or fiction",
              "The inventor was found alive",
              "The manuscript was proven false",
            ],
            correctIndex: 0,
          },
        ],
      },
    ],
  };
})();
