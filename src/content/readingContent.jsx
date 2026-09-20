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
          "Lily loves to visit her grandmother's farm every summer. The old farmhouse sits at the top of a hill, surrounded by fields that turn gold in July. Every morning, before the sun gets too hot, Lily and her grandmother put on their boots and head out to the henhouse together. She helps feed the chickens, gathers warm eggs still nestled in the straw, and picks ripe tomatoes and crunchy cucumbers from the garden out back. Her favourite job, though, is brushing the old grey pony that lives in the barn. In the evenings, when the chores are finally done, Lily and her grandmother sit together on the porch swing, sipping lemonade and watching the sky turn orange and pink as the sun sets over the fields.",
        questions: [
          { type: "mc", prompt: "Which of these does Lily NOT do on the farm, according to the passage?", options: ["Milk the cows in the barn", "Gather warm eggs from the henhouse", "Pick tomatoes and cucumbers from the garden"], correctIndex: 0, explanation: "Lily gathers eggs and picks vegetables, but the passage never says she milks cows. Only a pony is mentioned in the barn." },
          { type: "mc", prompt: "Why do Lily and her grandmother head out to the henhouse \"before the sun gets too hot\"?", options: ["Because the cooler morning is a comfortable time to work outside", "Because the chickens only lay eggs at sunrise", "Because Lily has to leave for school early"], correctIndex: 0, explanation: "The passage does not say the chickens lay only at sunrise, and it is summer holiday time. Working before the heat makes the chores pleasant, which is the sensible reason." },
          { type: "fillblank", sentence: "In the evenings, Lily and her grandmother sit on the ___ swing, sipping lemonade.", options: ["porch", "garden", "barn"], correctIndex: 0, explanation: "The garden and the barn are both places in the story, but the passage says they sit together on the porch swing." },
        ],
      },
      {
        id: "read-easy-2",
        passage:
          "When the school picnic was cancelled because of sudden rain, Mr. Kim's class groaned with disappointment. But instead of just handing out worksheets, Mr. Kim rolled a cart of board games into the classroom and announced an indoor tournament instead. Teams rotated between chess, checkers, and a giant floor puzzle, earning points for their table each time they won a round. By the end of the afternoon, the classroom was filled with laughter instead of complaints, and several students said the rainy day had turned into one of their favourite days of the whole year.",
        questions: [
          { type: "mc", prompt: "What does Mr. Kim's reaction tell us about him?", options: ["He tried to turn a disappointing day into a fun one", "He was annoyed that the picnic was cancelled", "He wanted the class to work quietly on worksheets"], correctIndex: 0, explanation: "The passage says he did NOT just hand out worksheets. He brought board games and started a tournament instead, so he made the best of the rain." },
          { type: "fillblank", sentence: "Teams earned ___ for their table each time they won a round.", options: ["points", "stickers", "prizes"], correctIndex: 0, explanation: "The passage says teams were \"earning points for their table\". Stickers and prizes are not mentioned." },
          { type: "mc", prompt: "Which of these was NOT one of the games in the tournament?", options: ["A spelling quiz", "Checkers", "A giant floor puzzle"], correctIndex: 0, explanation: "The teams rotated between chess, checkers, and a giant floor puzzle. A spelling quiz is not mentioned." },
        ],
      },
    ],
    medium: [
      {
        id: "read-medium-1",
        passage:
          "The class hamster, Nibbles, went missing over the weekend, and by Monday morning the classroom was in a state of quiet panic. Ms. Reyes had left food and water in his cage on Friday, certain the little door was latched shut, but somehow Nibbles had squeezed through a gap no one had noticed before. The students spent the entire morning searching every corner of the room — behind the bookshelves, under the reading rug, even inside backpacks left open overnight. Just when it seemed like Nibbles might be gone for good, Marcus knelt down by the reading corner and heard a faint rustling sound coming from an old rubber boot someone had left by the window. Sure enough, curled up inside, fast asleep, was Nibbles, looking as comfortable as if the boot had been built just for him. Everyone cheered, and Ms. Reyes reminded the class, gently but firmly, to always double-check the cage door from now on.",
        questions: [
          { type: "mc", prompt: "What does the passage suggest about how Nibbles escaped?", options: ["He squeezed through a gap no one had noticed, even though the door seemed latched", "A student left the cage door open on Monday morning", "Ms. Reyes forgot to give him food and water, so he went looking"], correctIndex: 0, explanation: "Nibbles was already missing over the weekend, and Ms. Reyes had left food and water and was certain the door was latched. The escape came through an unnoticed gap." },
          { type: "fillblank", sentence: "Marcus found Nibbles because he heard a faint ___ sound coming from an old boot.", options: ["rustling", "squeaking", "scratching"], correctIndex: 0, explanation: "All three words sound possible, but the passage says he heard a faint rustling sound." },
          { type: "mc", prompt: "Which place did the students NOT search for Nibbles?", options: ["The school garden", "Under the reading rug", "Inside backpacks left open overnight"], correctIndex: 0, explanation: "The students searched behind the bookshelves, under the rug, and inside backpacks. The school garden is never mentioned." },
        ],
      },
      {
        id: "read-medium-2",
        passage:
          "When the empty lot next to Rosa's block of flats sat unused for years, filled with weeds and broken glass, a group of neighbours decided to turn it into a community garden instead. Rosa, then eleven years old, helped her mother clear trash on the very first weekend of the project, not expecting much to come of it. Over the next few months, though, raised planting beds appeared, then rows of tomatoes and peppers, and eventually a small bench where neighbours who barely knew each other before started stopping to chat. By the following summer, the garden was producing enough vegetables that families took turns bringing bags of fresh produce to a local food pantry, and Rosa, now in charge of watering the tomato beds, felt proud every time she walked past the lot that used to be empty.",
        questions: [
          { type: "mc", prompt: "Which sequence matches how the garden developed?", options: ["Cleared the trash, built raised beds, grew vegetables, shared produce with a food pantry", "Built raised beds, cleared the trash, added a bench, grew vegetables", "Shared produce with a food pantry, planted tomatoes, cleared the trash"], correctIndex: 0, explanation: "Rosa helped clear trash on the first weekend. Raised beds and vegetables came over the next months, and the food pantry donations came by the following summer." },
          { type: "fillblank", sentence: "The small ___ became a place where neighbours who barely knew each other stopped to chat.", options: ["bench", "planting bed", "fence"], correctIndex: 0, explanation: "Planting beds appear in the story too, but the passage says neighbours stopped to chat at a small bench." },
          { type: "mc", prompt: "What does Rosa's feeling at the end of the passage suggest?", options: ["She felt proud because she had watched the project grow from nothing", "She felt relieved that the project was finished", "She felt disappointed that the garden stayed small"], correctIndex: 0, explanation: "She felt proud every time she walked past the lot that \"used to be empty\". Nothing in the passage suggests relief or disappointment." },
        ],
      },
    ],
    hard: [
      {
        id: "read-hard-1",
        passage:
          "Deforestation in tropical regions has accelerated sharply over the past decade, driven largely by the expansion of agricultural land for crops and cattle grazing. Conservationists warn that the consequences reach far beyond the forests themselves. Rainforests play a critical role in regulating rainfall patterns across entire continents, meaning their loss can disrupt farming and water supplies for millions of people who may live thousands of miles away from the original site of clearing. The forests also serve as one of the planet's largest natural stores of carbon, so cutting and burning them releases greenhouse gases that were locked away for centuries. In response, a growing number of governments have begun experimenting with financial incentive programs, paying farmers directly to preserve standing forest rather than clear it for new fields. Early results from several of these programs have been promising, though researchers caution that incentives alone are unlikely to solve a problem driven by such enormous economic pressure to keep expanding farmland.",
        questions: [
          { type: "mc", prompt: "Why do the researchers caution that payments to farmers are unlikely to solve deforestation on their own?", options: ["The economic pressure to expand farmland is enormous, so payments may not be enough", "Farmers refuse to accept money from governments", "Early results showed that the programs failed"], correctIndex: 0, explanation: "The passage calls early results \"promising\", so the programs did not fail. The caution is that incentives face \"enormous economic pressure\" to keep expanding farmland." },
          { type: "mc", prompt: "Which statement about deforestation is best supported by the passage?", options: ["Clearing a forest in one place can affect farming and water supplies far away", "Deforestation only harms the animals that live in the cleared forest", "Burning forests releases gases that were created that same year"], correctIndex: 0, explanation: "Rainforests regulate rainfall across continents, so the effects reach people thousands of miles away. The greenhouse gases were \"locked away for centuries\", not created that year." },
          { type: "fillblank", sentence: "The forests serve as one of the planet's largest natural ___ of carbon.", options: ["stores", "sources", "producers"], correctIndex: 0, explanation: "Forests hold carbon, and burning them releases it. That makes them a store of carbon, not a source of it." },
        ],
      },
      {
        id: "read-hard-2",
        passage:
          "Streaming services and online stores increasingly rely on recommendation algorithms to suggest what a user might want to watch or buy next, based largely on patterns drawn from that user's own past behaviour and the behaviour of similar users. While these systems can feel remarkably accurate at times, researchers have raised concerns about a phenomenon known as the \"filter bubble,\" in which users are repeatedly shown content similar to what they've already engaged with, gradually narrowing the range of ideas, products, or perspectives they encounter. Some technology companies have begun experimenting with deliberately injecting more variety into recommendations, arguing that a slightly less \"accurate\" but more diverse set of suggestions may actually serve users better in the long run. Critics of this approach counter that most users simply want convenience, and that occasionally showing irrelevant content risks frustrating them without meaningfully broadening their perspectives in practice.",
        questions: [
          { type: "mc", prompt: "Why might a company accept recommendations that are \"slightly less accurate\"?", options: ["It believes a wider variety may serve users better in the long run", "Its algorithm no longer has enough data about the user", "It wants users to spend less time on the service"], correctIndex: 0, explanation: "The passage says these companies argue that a more diverse set of suggestions may serve users better in the long run." },
          { type: "mc", prompt: "What do the two sides in the passage mainly disagree about?", options: ["Whether users are better served by variety or by convenience", "Whether recommendation algorithms are accurate", "Whether companies should collect data about users"], correctIndex: 0, explanation: "Both sides accept that algorithms can be accurate. The company side argues for variety, while critics argue that users mostly want convenience." },
          { type: "fillblank", sentence: "A \"filter bubble\" gradually ___ the range of ideas and perspectives a user encounters.", options: ["narrows", "widens", "hides"], correctIndex: 0, explanation: "Seeing similar content again and again gradually narrows what you encounter. A bubble makes the range smaller, not larger." },
        ],
      },
    ],
    expert: [
      {
        id: "read-expert-1",
        passage:
          "The concept of \"planned obsolescence\" refers to the practice of designing products with an artificially limited lifespan, encouraging consumers to repurchase items more frequently than strictly necessary. The term dates back to the early twentieth century, when some manufacturers began deliberately engineering products to fail or become outdated after a set period, rather than building them to last indefinitely. Critics argue this practice generates unnecessary waste, drives up consumer costs over time, and contributes significantly to environmental harm, particularly as electronic devices are discarded at growing rates. Manufacturers, for their part, counter that shorter product cycles allow for continuous innovation, arguing that consumers benefit from regular improvements in performance, safety, and design that would be slower to arrive if products were built to last for decades. The debate has intensified in recent years as electronic waste has become one of the fastest-growing categories of waste worldwide, prompting several governments to consider \"right to repair\" legislation that would require manufacturers to make products easier and cheaper to fix rather than replace.",
        questions: [
          { type: "mc", prompt: "Based on the passage, what is the main aim of \"right to repair\" laws?", options: ["To make products easier and cheaper to fix instead of replace", "To stop manufacturers from releasing new models", "To force companies to build products that last for decades"], correctIndex: 0, explanation: "The laws would require products to be easier and cheaper to fix. The passage never says new models would be banned or that products must last decades." },
          { type: "mc", prompt: "Which statement would a manufacturer, as described in the passage, most likely agree with?", options: ["Regular product upgrades bring improvements in performance and safety", "Products should be designed to last as long as possible", "Electronic waste is not a serious problem"], correctIndex: 0, explanation: "Manufacturers say shorter product cycles bring regular improvements. Building products to last as long as possible is the critics' position." },
          { type: "mc", prompt: "Which of these is NOT a criticism of planned obsolescence mentioned in the passage?", options: ["It slows down innovation", "It creates unnecessary waste", "It raises costs for consumers over time"], correctIndex: 0, explanation: "Innovation is the manufacturers' argument in favour of shorter product cycles, not a criticism. Critics mention waste, rising costs, and environmental harm." },
        ],
      },
      {
        id: "read-expert-2",
        passage:
          "In an economy where digital content is often free to access, some economists argue that the actual product being sold isn't the content itself but rather the user's attention, which is then packaged and sold to advertisers. This framing, often called the \"attention economy,\" helps explain design choices that might otherwise seem puzzling: autoplay features, infinite scrolling feeds, and notification systems engineered to maximise the frequency with which users return to a platform. Critics of the attention economy argue that these design choices exploit well-documented psychological vulnerabilities, particularly among younger users whose capacity for self-regulation is still developing, and that the incentives driving platform design are fundamentally misaligned with users' long-term wellbeing. Defenders of the model counter that users retain the ability to disengage at any time, and that blaming design features shifts responsibility away from personal choice. The debate remains largely unresolved, complicated further by the fact that the companies best positioned to study these effects rigorously are often the same companies whose business models depend on the behaviours being studied.",
        questions: [
          { type: "mc", prompt: "Why does the passage say features like autoplay and infinite scrolling \"might otherwise seem puzzling\"?", options: ["Without the attention-economy idea, it is not obvious why free content is designed to keep people watching", "They are very expensive for platforms to build", "Most users say they dislike them"], correctIndex: 0, explanation: "If content is free, it is puzzling why platforms work so hard to keep you there. The attention-economy idea explains it: your attention is what is being sold." },
          { type: "mc", prompt: "Which statement would a defender of the attention-economy model, as described in the passage, most likely make?", options: ["People can choose to stop using a platform, so responsibility lies with them", "Young users cannot stop, so these platforms should be banned", "Platforms should be redesigned to reduce the time people spend on them"], correctIndex: 0, explanation: "Defenders say users can disengage at any time and that blaming design shifts responsibility away from personal choice. The other two are closer to the critics' concerns." },
          { type: "mc", prompt: "Why is research on these effects made harder by who is best placed to do it?", options: ["Those best placed to study it profit from the behaviours being studied, so their research may not be neutral", "Independent researchers are not allowed to study social media", "The companies refuse to share any data"], correctIndex: 0, explanation: "The passage only says that the companies best placed to study the effects depend on the very behaviours being studied. It does not claim researchers are banned or data is never shared." },
        ],
      },
    ],
  };
})();
