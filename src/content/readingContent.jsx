// Module 4: Reading — a passage followed by a mix of multiple-choice and fill-in-the-blank questions
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  window.App.Content.READING_ITEMS = {
    easy: [
      {
        id: "read-easy-1",
        passage:
          "Lily loves to visit her grandmother's farm every summer. The old farmhouse sits at the top of a hill, surrounded by fields that turn gold in July. Every morning, before the sun gets too hot, Lily and her grandmother put on their boots and head out to the henhouse together. She helps feed the chickens, gathers warm eggs still nestled in the straw, and picks ripe tomatoes and crunchy cucumbers from the garden out back. Her favorite job, though, is brushing the old grey pony that lives in the barn. In the evenings, when the chores are finally done, Lily and her grandmother sit together on the porch swing, sipping lemonade and watching the sky turn orange and pink as the sun sets over the fields.",
        questions: [
          { type: "mc", prompt: "What does Lily help do on the farm?", options: ["Feed chickens and collect eggs", "Ride horses", "Milk cows"], correctIndex: 0 },
          {
            type: "fillblank",
            sentence: "Lily and her grandmother watch the ___ together in the evenings.",
            options: ["sunset", "television", "chickens"],
            correctIndex: 0,
          },
          { type: "mc", prompt: "What is Lily's favorite job on the farm?", options: ["Brushing the grey pony", "Picking tomatoes", "Feeding chickens"], correctIndex: 0 },
        ],
      },
    ],
    medium: [
      {
        id: "read-medium-1",
        passage:
          "The class hamster, Nibbles, went missing over the weekend, and by Monday morning the classroom was in a state of quiet panic. Ms. Reyes had left food and water in his cage on Friday, certain the little door was latched shut, but somehow Nibbles had squeezed through a gap no one had noticed before. The students spent the entire morning searching every corner of the room — behind the bookshelves, under the reading rug, even inside backpacks left open overnight. Just when it seemed like Nibbles might be gone for good, Marcus knelt down by the reading corner and heard a faint rustling sound coming from an old rubber boot someone had left by the window. Sure enough, curled up inside, fast asleep, was Nibbles, looking as comfortable as if the boot had been built just for him. Everyone cheered, and Ms. Reyes reminded the class, gently but firmly, to always double-check the cage door from now on.",
        questions: [
          { type: "mc", prompt: "Who found Nibbles?", options: ["Marcus", "The teacher", "Nobody"], correctIndex: 0 },
          {
            type: "fillblank",
            sentence: "Nibbles was found curled up inside an old ___.",
            options: ["boot", "backpack", "box"],
            correctIndex: 0,
          },
          {
            type: "mc",
            prompt: "What lesson did the teacher remind the class of?",
            options: ["To double-check the cage door", "To feed Nibbles more", "To buy a new hamster"],
            correctIndex: 0,
          },
        ],
      },
    ],
    hard: [
      {
        id: "read-hard-1",
        passage:
          "Deforestation in tropical regions has accelerated sharply over the past decade, driven largely by the expansion of agricultural land for crops and cattle grazing. Conservationists warn that the consequences reach far beyond the forests themselves. Rainforests play a critical role in regulating rainfall patterns across entire continents, meaning their loss can disrupt farming and water supplies for millions of people who may live thousands of miles away from the original site of clearing. The forests also serve as one of the planet's largest natural stores of carbon, so cutting and burning them releases greenhouse gases that were locked away for centuries. In response, a growing number of governments have begun experimenting with financial incentive programs, paying farmers directly to preserve standing forest rather than clear it for new fields. Early results from several of these programs have been promising, though researchers caution that incentives alone are unlikely to solve a problem driven by such enormous economic pressure to keep expanding farmland.",
        questions: [
          {
            type: "mc",
            prompt: "What is a major cause of deforestation, according to the passage?",
            options: ["Agricultural expansion", "Forest fires", "Tourism"],
            correctIndex: 0,
          },
          {
            type: "fillblank",
            sentence: "Some governments now offer ___ to farmers who preserve forest land.",
            options: ["financial incentives", "free seeds", "new farmland"],
            correctIndex: 0,
          },
          {
            type: "mc",
            prompt: "Why do conservationists say rainforests matter to people far away?",
            options: ["They help regulate rainfall patterns across continents", "They provide tourism income", "They are good for hiking"],
            correctIndex: 0,
          },
        ],
      },
    ],
    expert: [
      {
        id: "read-expert-1",
        passage:
          "The concept of \"planned obsolescence\" refers to the practice of designing products with an artificially limited lifespan, encouraging consumers to repurchase items more frequently than strictly necessary. The term dates back to the early twentieth century, when some manufacturers began deliberately engineering products to fail or become outdated after a set period, rather than building them to last indefinitely. Critics argue this practice generates unnecessary waste, drives up consumer costs over time, and contributes significantly to environmental harm, particularly as electronic devices are discarded at growing rates. Manufacturers, for their part, counter that shorter product cycles allow for continuous innovation, arguing that consumers benefit from regular improvements in performance, safety, and design that would be slower to arrive if products were built to last for decades. The debate has intensified in recent years as electronic waste has become one of the fastest-growing categories of waste worldwide, prompting several governments to consider \"right to repair\" legislation that would require manufacturers to make products easier and cheaper to fix rather than replace.",
        questions: [
          {
            type: "mc",
            prompt: 'What is "planned obsolescence"?',
            options: ["Designing products to have a limited lifespan on purpose", "Designing products to last forever", "A method of recycling electronics"],
            correctIndex: 0,
          },
          {
            type: "fillblank",
            sentence: "Critics argue planned obsolescence causes unnecessary ___ and environmental harm.",
            options: ["waste", "profit", "innovation"],
            correctIndex: 0,
          },
          {
            type: "mc",
            prompt: "What argument do manufacturers give in favor of the practice?",
            options: ["It allows for continuous innovation and improvement", "It reduces the cost of products", "It is required by law"],
            correctIndex: 0,
          },
        ],
      },
    ],
  };
})();
