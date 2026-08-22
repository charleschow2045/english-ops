// Module 4: Reading — two passages per tier, each followed by a mix of
// multiple-choice and fill-in-the-blank questions with explanations.
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
          { type: "mc", prompt: "What does Lily help do on the farm?", options: ["Feed chickens and collect eggs", "Ride horses", "Milk cows"], correctIndex: 0, explanation: "The passage says she helps feed the chickens and gathers warm eggs." },
          { type: "fillblank", sentence: "Lily and her grandmother watch the ___ together in the evenings.", options: ["sunset", "television", "chickens"], correctIndex: 0, explanation: "The passage says they watch the sky turn orange and pink as the sun sets." },
          { type: "mc", prompt: "What is Lily's favorite job on the farm?", options: ["Brushing the grey pony", "Picking tomatoes", "Feeding chickens"], correctIndex: 0, explanation: "The passage directly says her favorite job is brushing the old grey pony." },
        ],
      },
      {
        id: "read-easy-2",
        passage:
          "When the school picnic was cancelled because of sudden rain, Mr. Kim's class groaned with disappointment. But instead of just handing out worksheets, Mr. Kim rolled a cart of board games into the classroom and announced an indoor tournament instead. Teams rotated between chess, checkers, and a giant floor puzzle, earning points for their table each time they won a round. By the end of the afternoon, the classroom was filled with laughter instead of complaints, and several students said the rainy day had turned into one of their favorite days of the whole year.",
        questions: [
          { type: "mc", prompt: "Why was the picnic cancelled?", options: ["Because of sudden rain", "Because the teacher was sick", "Because it was a holiday"], correctIndex: 0, explanation: "The passage says the picnic was cancelled because of sudden rain." },
          { type: "fillblank", sentence: "Mr. Kim rolled a cart of ___ into the classroom instead.", options: ["board games", "science kits", "art supplies"], correctIndex: 0, explanation: "The passage says he rolled in a cart of board games for an indoor tournament." },
          { type: "mc", prompt: "How did the students feel by the end of the afternoon?", options: ["They had a lot of fun", "They were bored", "They were angry"], correctIndex: 0, explanation: "The passage says the classroom was filled with laughter and several called it a favorite day." },
        ],
      },
    ],
    medium: [
      {
        id: "read-medium-1",
        passage:
          "The class hamster, Nibbles, went missing over the weekend, and by Monday morning the classroom was in a state of quiet panic. Ms. Reyes had left food and water in his cage on Friday, certain the little door was latched shut, but somehow Nibbles had squeezed through a gap no one had noticed before. The students spent the entire morning searching every corner of the room — behind the bookshelves, under the reading rug, even inside backpacks left open overnight. Just when it seemed like Nibbles might be gone for good, Marcus knelt down by the reading corner and heard a faint rustling sound coming from an old rubber boot someone had left by the window. Sure enough, curled up inside, fast asleep, was Nibbles, looking as comfortable as if the boot had been built just for him. Everyone cheered, and Ms. Reyes reminded the class, gently but firmly, to always double-check the cage door from now on.",
        questions: [
          { type: "mc", prompt: "Who found Nibbles?", options: ["Marcus", "The teacher", "Nobody"], correctIndex: 0, explanation: "The passage says Marcus knelt down and heard rustling coming from the boot." },
          { type: "fillblank", sentence: "Nibbles was found curled up inside an old ___.", options: ["boot", "backpack", "box"], correctIndex: 0, explanation: "The passage says Nibbles was curled up asleep inside an old rubber boot." },
          { type: "mc", prompt: "What lesson did the teacher remind the class of?", options: ["To double-check the cage door", "To feed Nibbles more", "To buy a new hamster"], correctIndex: 0, explanation: "Ms. Reyes reminded the class to always double-check the cage door." },
        ],
      },
      {
        id: "read-medium-2",
        passage:
          "When the empty lot next to Rosa's apartment building sat unused for years, filled with weeds and broken glass, a group of neighbors decided to turn it into a community garden instead. Rosa, then eleven years old, helped her mother clear trash on the very first weekend of the project, not expecting much to come of it. Over the next few months, though, raised planting beds appeared, then rows of tomatoes and peppers, and eventually a small bench where neighbors who barely knew each other before started stopping to chat. By the following summer, the garden was producing enough vegetables that families took turns bringing bags of fresh produce to a local food pantry, and Rosa, now in charge of watering the tomato beds, felt proud every time she walked past the lot that used to be empty.",
        questions: [
          { type: "mc", prompt: "What was the empty lot like before the garden project began?", options: ["Filled with weeds and broken glass", "A parking lot", "A children's playground"], correctIndex: 0, explanation: "The passage says the lot sat unused, filled with weeds and broken glass." },
          { type: "fillblank", sentence: "Eventually, families took turns bringing bags of fresh produce to a local ___.", options: ["food pantry", "grocery store", "restaurant"], correctIndex: 0, explanation: "The passage says families brought bags of fresh produce to a local food pantry." },
          { type: "mc", prompt: "How did the garden affect the neighbors' relationships?", options: ["It brought neighbors together who barely knew each other before", "It caused arguments between neighbors", "It had no effect on the neighborhood"], correctIndex: 0, explanation: "The bench became a place where neighbors who barely knew each other started to chat." },
        ],
      },
    ],
    hard: [
      {
        id: "read-hard-1",
        passage:
          "Deforestation in tropical regions has accelerated sharply over the past decade, driven largely by the expansion of agricultural land for crops and cattle grazing. Conservationists warn that the consequences reach far beyond the forests themselves. Rainforests play a critical role in regulating rainfall patterns across entire continents, meaning their loss can disrupt farming and water supplies for millions of people who may live thousands of miles away from the original site of clearing. The forests also serve as one of the planet's largest natural stores of carbon, so cutting and burning them releases greenhouse gases that were locked away for centuries. In response, a growing number of governments have begun experimenting with financial incentive programs, paying farmers directly to preserve standing forest rather than clear it for new fields. Early results from several of these programs have been promising, though researchers caution that incentives alone are unlikely to solve a problem driven by such enormous economic pressure to keep expanding farmland.",
        questions: [
          { type: "mc", prompt: "What is a major cause of deforestation, according to the passage?", options: ["Agricultural expansion", "Forest fires", "Tourism"], correctIndex: 0, explanation: "The passage says deforestation is driven largely by the expansion of agricultural land." },
          { type: "fillblank", sentence: "Some governments now offer ___ to farmers who preserve forest land.", options: ["financial incentives", "free seeds", "new farmland"], correctIndex: 0, explanation: "The passage says governments pay farmers directly through financial incentive programs." },
          { type: "mc", prompt: "Why do conservationists say rainforests matter to people far away?", options: ["They help regulate rainfall patterns across continents", "They provide tourism income", "They are good for hiking"], correctIndex: 0, explanation: "Rainforests regulate rainfall patterns for people who may live thousands of miles from the clearing." },
        ],
      },
      {
        id: "read-hard-2",
        passage:
          "Streaming services and online stores increasingly rely on recommendation algorithms to suggest what a user might want to watch or buy next, based largely on patterns drawn from that user's own past behavior and the behavior of similar users. While these systems can feel remarkably accurate at times, researchers have raised concerns about a phenomenon known as the \"filter bubble,\" in which users are repeatedly shown content similar to what they've already engaged with, gradually narrowing the range of ideas, products, or perspectives they encounter. Some technology companies have begun experimenting with deliberately injecting more variety into recommendations, arguing that a slightly less \"accurate\" but more diverse set of suggestions may actually serve users better in the long run. Critics of this approach counter that most users simply want convenience, and that occasionally showing irrelevant content risks frustrating them without meaningfully broadening their perspectives in practice.",
        questions: [
          { type: "mc", prompt: "What is a \"filter bubble,\" according to the passage?", options: ["Being repeatedly shown similar content that narrows your perspective", "A technical error in the algorithm", "A type of online advertisement"], correctIndex: 0, explanation: "The passage defines a filter bubble as being shown similar content that gradually narrows what you encounter." },
          { type: "fillblank", sentence: "Some companies have begun deliberately injecting more ___ into recommendations.", options: ["variety", "advertisements", "user data"], correctIndex: 0, explanation: "The passage says some companies are deliberately injecting more variety into recommendations." },
          { type: "mc", prompt: "What argument do critics make against adding more variety to recommendations?", options: ["Most users just want convenience and may be frustrated by irrelevant content", "Variety is illegal in most countries", "Algorithms cannot be changed once built"], correctIndex: 0, explanation: "Critics say users want convenience, and irrelevant content risks frustrating them." },
        ],
      },
    ],
    expert: [
      {
        id: "read-expert-1",
        passage:
          "The concept of \"planned obsolescence\" refers to the practice of designing products with an artificially limited lifespan, encouraging consumers to repurchase items more frequently than strictly necessary. The term dates back to the early twentieth century, when some manufacturers began deliberately engineering products to fail or become outdated after a set period, rather than building them to last indefinitely. Critics argue this practice generates unnecessary waste, drives up consumer costs over time, and contributes significantly to environmental harm, particularly as electronic devices are discarded at growing rates. Manufacturers, for their part, counter that shorter product cycles allow for continuous innovation, arguing that consumers benefit from regular improvements in performance, safety, and design that would be slower to arrive if products were built to last for decades. The debate has intensified in recent years as electronic waste has become one of the fastest-growing categories of waste worldwide, prompting several governments to consider \"right to repair\" legislation that would require manufacturers to make products easier and cheaper to fix rather than replace.",
        questions: [
          { type: "mc", prompt: "What is \"planned obsolescence\"?", options: ["Designing products to have a limited lifespan on purpose", "Designing products to last forever", "A method of recycling electronics"], correctIndex: 0, explanation: "The passage defines it as designing products with an artificially limited lifespan on purpose." },
          { type: "fillblank", sentence: "Critics argue planned obsolescence causes unnecessary ___ and environmental harm.", options: ["waste", "profit", "innovation"], correctIndex: 0, explanation: "The passage says critics argue it generates unnecessary waste and environmental harm." },
          { type: "mc", prompt: "What argument do manufacturers give in favor of the practice?", options: ["It allows for continuous innovation and improvement", "It reduces the cost of products", "It is required by law"], correctIndex: 0, explanation: "Manufacturers argue shorter product cycles allow for continuous innovation." },
        ],
      },
      {
        id: "read-expert-2",
        passage:
          "In an economy where digital content is often free to access, some economists argue that the actual product being sold isn't the content itself but rather the user's attention, which is then packaged and sold to advertisers. This framing, often called the \"attention economy,\" helps explain design choices that might otherwise seem puzzling: autoplay features, infinite scrolling feeds, and notification systems engineered to maximize the frequency with which users return to a platform. Critics of the attention economy argue that these design choices exploit well-documented psychological vulnerabilities, particularly among younger users whose capacity for self-regulation is still developing, and that the incentives driving platform design are fundamentally misaligned with users' long-term wellbeing. Defenders of the model counter that users retain the ability to disengage at any time, and that blaming design features shifts responsibility away from personal choice. The debate remains largely unresolved, complicated further by the fact that the companies best positioned to study these effects rigorously are often the same companies whose business models depend on the behaviors being studied.",
        questions: [
          { type: "mc", prompt: "According to the \"attention economy\" framing, what is actually being sold?", options: ["The user's attention, packaged for advertisers", "The digital content itself", "Data storage space"], correctIndex: 0, explanation: "The passage says the actual product is the user's attention, packaged and sold to advertisers." },
          { type: "fillblank", sentence: "Critics argue platform design choices exploit psychological ___, especially among younger users.", options: ["vulnerabilities", "advertisements", "algorithms"], correctIndex: 0, explanation: "The passage says critics argue design choices exploit psychological vulnerabilities." },
          { type: "mc", prompt: "What complicates research into the attention economy's effects, according to the passage?", options: ["The companies best positioned to study it have a business interest in the behaviors being studied", "There is no way to measure user attention at all", "Governments have banned this kind of research"], correctIndex: 0, explanation: "The passage says the companies best positioned to study it depend on the very behaviors being studied." },
        ],
      },
    ],
  };
})();
