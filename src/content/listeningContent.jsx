// Pre-written passages for the Listening module, by tier. Read aloud via
// speechSynthesis — no external API calls. Pitched at an age 10-11 reader.
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  window.App.Content.LISTENING_PASSAGES = {
    easy: [
      {
        id: "easy-1",
        text: "Maya packed her backpack the night before the school trip. She was excited to visit the science museum with her class.",
        question: "Where was Maya's class going?",
        options: ["The science museum", "The zoo", "The beach"],
        correctIndex: 0,
        explanation: "The passage says Maya was excited to visit the science museum with her class.",
      },
      {
        id: "easy-2",
        text: "During break time, Liam noticed a strange beetle crawling near the fence. He carefully picked it up and showed it to his friends.",
        question: "What did Liam find near the fence?",
        options: ["A beetle", "A frog", "A bird"],
        correctIndex: 0,
        explanation: "Liam noticed a beetle crawling near the fence, then picked it up.",
      },
      {
        id: "easy-3",
        text: "The coach blew her whistle to start practice. The team quickly lined up and began stretching before the game.",
        question: "What did the team do first?",
        options: ["Stretching", "Playing the game", "Going home"],
        correctIndex: 0,
        explanation: "After lining up, the team began stretching — that happened before the game.",
      },
    ],
    medium: [
      {
        id: "medium-1",
        text: "The class had been studying volcanoes for two weeks, so when the teacher announced a field trip to the science centre, everyone cheered. They couldn't wait to see the volcano model erupt.",
        question: "Why were the students excited?",
        options: [
          "They were going to see a volcano model erupt",
          "They were getting extra homework",
          "They were going home early",
        ],
        correctIndex: 0,
        explanation: "The passage says they couldn't wait to see the volcano model erupt.",
      },
      {
        id: "medium-2",
        text: "Noah spent his Saturday morning building a treehouse with his dad. Halfway through, they realised they didn't have enough nails, so they had to walk to the hardware store.",
        question: "Why did Noah and his dad go to the hardware store?",
        options: ["They ran out of nails", "They wanted snacks", "They needed a ladder"],
        correctIndex: 0,
        explanation: "They realised they didn't have enough nails, which is why they went to the store.",
      },
      {
        id: "medium-3",
        text: "Even though it was her first time performing in front of an audience, Sophie remembered to take a deep breath before she started playing her violin solo.",
        question: "What did Sophie do before her solo?",
        options: ["She took a deep breath", "She left the stage", "She asked for help"],
        correctIndex: 0,
        explanation: "The passage says she took a deep breath before starting her solo.",
      },
    ],
    hard: [
      {
        id: "hard-1",
        text: "The expedition team had trekked for six hours through dense rainforest before they finally spotted the waterfall they had been searching for. Exhausted but thrilled, they set up camp nearby to rest before the climb ahead.",
        question: "How did the team likely feel when they found the waterfall?",
        options: ["Exhausted but thrilled", "Bored and disappointed", "Angry and confused"],
        correctIndex: 0,
        explanation: "The passage directly describes them as \"exhausted but thrilled\" after finding it.",
      },
      {
        id: "hard-2",
        text: "Although the science fair project didn't win first place, Priya's research on renewable energy impressed the judges enough that she was invited to present at the regional competition.",
        question: "What can you infer about Priya's project?",
        options: [
          "It was strong even though it didn't win first place",
          "It was the worst project there",
          "It was about volcanoes",
        ],
        correctIndex: 0,
        explanation: "Being invited to the regional competition shows the judges were impressed, even without first place.",
      },
      {
        id: "hard-3",
        text: "The old lighthouse keeper had warned the sailors about the coming storm, but by the time they turned the ship around, the waves were already crashing over the deck.",
        question: "What happened after the lighthouse keeper's warning?",
        options: [
          "The sailors turned back too late and the storm hit",
          "The sailors ignored the storm completely",
          "The storm never came",
        ],
        correctIndex: 0,
        explanation: "By the time they turned around, waves were already crashing — so they reacted too late.",
      },
    ],
    expert: [
      {
        id: "expert-1",
        text: "Despite years of research, scientists still debate why some species migrate thousands of miles each year while closely related species remain in the same region permanently. One theory suggests it comes down to subtle genetic differences passed down over many generations.",
        question: "According to the passage, what might explain why some species migrate and others don't?",
        options: [
          "Subtle genetic differences passed down over generations",
          "All species migrate the same way",
          "Migration has been fully explained by scientists",
        ],
        correctIndex: 0,
        explanation: "The passage states one theory points to subtle genetic differences passed down over generations.",
      },
      {
        id: "expert-2",
        text: "The city council's decision to convert the abandoned railway into a public park was met with mixed reactions; while many residents welcomed the green space, local historians argued that the tracks should have been preserved as a monument to the town's industrial past.",
        question: "Why did some historians disagree with the council's decision?",
        options: [
          "They wanted the railway preserved as a historical monument",
          "They didn't want any parks built",
          "They thought the park was too expensive",
        ],
        correctIndex: 0,
        explanation: "The historians argued the tracks should have been preserved as a monument, not turned into a park.",
      },
      {
        id: "expert-3",
        text: "By the time the negotiations concluded, both sides had made concessions neither had originally intended to make, a reminder that compromise often requires giving up more than either party expects going in.",
        question: "What does the passage suggest about compromise?",
        options: [
          "It often requires giving up more than expected",
          "It never requires any sacrifice",
          "Only one side needs to compromise",
        ],
        correctIndex: 0,
        explanation: "The passage says compromise \"often requires giving up more than either party expects.\"",
      },
    ],
  };
})();
