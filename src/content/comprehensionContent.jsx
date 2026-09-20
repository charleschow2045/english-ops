// Module 5: Comprehension — two ~300-word passages per tier, mixing
// multiple-choice (with explanations) with "shortanswer" self-check questions
// (type an answer, then compare against a model answer — no external grading,
// focused on inference and "why").
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  window.App.Content.COMPREHENSION_ITEMS = {
    easy: [
      {
        id: "comp-easy-1",
        passage:
          "Ever since the school started its garden club, Mia had begged her parents to let her join. Finally, in September, she got her chance. On the first afternoon, Mr. Alvarez, the club leader, walked the students past rows of empty wooden boxes filled with dark soil. He explained that each pair of students would choose one box to plant and take care of for the rest of the year. Mia was paired with a quiet boy named Theo, who she barely knew from her class. At first, she wasn't sure they would work well together — Theo barely spoke, and Mia liked to talk through every decision out loud. But when it came time to choose what to plant, Theo surprised her. He pulled out a small notebook filled with neat drawings of vegetables and told her he had been planning this for weeks. He wanted to grow carrots, tomatoes, and sunflowers, because his grandmother used to grow the exact same things in her backyard before she moved away. Mia realised Theo wasn't shy about the garden at all — he was just shy about talking to new people. Once they started working with their hands in the soil, he talked more and more, telling her stories about his grandmother's garden. By October, their box was full of small green sprouts, and by November, the first tiny tomatoes had begun to appear. Mia and Theo had become the kind of friends who didn't need to fill every silence with talking — they were comfortable just kneeling in the dirt together, checking on their plants.",
        questions: [
          {
            type: "mc",
            prompt: "What does the passage suggest about why Theo was so quiet at the start?",
            options: ["He was shy about talking to new people, not uninterested in the garden", "He did not want to be paired with Mia and felt annoyed at the teacher", "He did not know anything about gardening and was afraid of looking silly"],
            correctIndex: 0,
            explanation: "Mia \"realised Theo wasn't shy about the garden at all — he was just shy about talking to new people\". He had even planned what to plant for weeks, so he knew gardening well.",
          },
          {
            type: "shortanswer",
            prompt: "Why do you think Mia and Theo became better friends by working in the garden together?",
            modelAnswer:
              "Working with their hands gave them something to focus on together, so Theo felt comfortable opening up and talking about his grandmother, even though he was shy about talking to new people at first.",
          },
          {
            type: "mc",
            prompt: "Which sentence best describes how Mia's view of Theo changed?",
            options: [
              "She first worried they would not work well together, then realised his quietness was shyness, not lack of interest",
              "She first thought he knew nothing about plants, then discovered that he had once worked on a farm with his family",
              "She first preferred to work alone in the garden, then decided that working in pairs was always the better way",
            ],
            correctIndex: 0,
            explanation: "Mia \"wasn't sure they would work well together\", but working in the soil showed her Theo's quietness was shyness. The other options describe changes that never happen.",
          },
        ],
      },
      {
        id: "comp-easy-2",
        passage:
          "When Sofia moved to a new school in the middle of the year, she expected the hardest part to be making new friends. What she hadn't expected was how different the lunchroom seating worked — at her old school, kids just sat wherever they wanted, but here, it seemed like every table already belonged to a specific group, and nobody had explained the unwritten rules to her. On her first day, she stood holding her tray for what felt like an eternity, scanning the room for an empty seat that wouldn't mean sitting with strangers who might not want her there. Just as she was about to give up and eat alone near the door, a girl from her maths class, Priya, waved her over to a table with three other kids. Sofia later learned that Priya had noticed new students struggling with exactly this problem before, ever since her own first day two years earlier had gone badly. From then on, Sofia made a habit of watching for the same lost, hesitant look on new students' faces — and always made sure to wave them over, the same way Priya once had for her.",
        questions: [
          {
            type: "mc",
            prompt: "The passage says nobody had explained the \"unwritten rules\" to Sofia. What does \"unwritten rules\" mean here?",
            options: ["Things everyone is expected to know even though nobody wrote them down", "Rules the school forgot to print in the student handbook", "Rules that only the teachers are allowed to know"],
            correctIndex: 0,
            explanation: "Kids just seemed to know which table belonged to which group, but no rule said so. \"Unwritten\" means understood without ever being written down.",
          },
          {
            type: "shortanswer",
            prompt: "Why do you think Priya made a point of waving new students over to her table?",
            modelAnswer:
              "She remembered how hard her own first day had been as a new student, so she wanted to make sure other new kids didn't have to feel that same way alone.",
          },
          {
            type: "mc",
            prompt: "Which statement best sums up the message of the passage?",
            options: ["Kindness you receive can inspire you to pass it on to others", "Starting at a new school is always very difficult for everyone", "Making friends is easy for anyone who is confident enough"],
            correctIndex: 0,
            explanation: "Priya helped Sofia because of her own bad first day, and Sofia then did the same for others. \"New schools are hard\" is true, but it is not the message the story builds toward.",
          },
        ],
      },
      {
        id: "comp-easy-3",
        passage:
          "Leo was kicking a ball in the living room when it knocked his mum's blue vase off the shelf. The vase hit the floor and broke into four pieces. Leo's heart began to pound. Mum had told him many times not to play ball indoors, and this vase had belonged to his grandmother. He quickly swept the pieces into a plastic bag and hid it under his bed. At dinner, Leo could hardly eat. Every time Mum looked at him, his face felt hot. When she asked why he was so quiet, Leo put down his fork. He went to his room, fetched the bag, and laid it on the table. \"I broke your vase,\" he said in a small voice. \"I'm really sorry.\" Mum looked at the pieces for a long moment. Then she said, \"I'm sad about the vase. But I'm proud that you told me the truth. A vase can be mended, but trust is harder to fix.\" The next weekend, Leo and Mum glued the vase back together, leaving a few thin cracks that showed where it had broken.",
        questions: [
          { type: "mc", prompt: "Why could Leo hardly eat at dinner?", options: ["He felt guilty about breaking the vase and hiding it", "He was angry that his mum had told him off earlier", "He was too full after eating a big snack before dinner"], correctIndex: 0, explanation: "His face felt hot whenever Mum looked at him, and he soon confessed. That shows guilt. Mum had not scolded him, and nothing is said about a snack." },
          { type: "shortanswer", prompt: "Why did Mum say, \"A vase can be mended, but trust is harder to fix\"?", modelAnswer: "She meant that honesty matters more to her than the vase. A broken object can be repaired with glue, but if someone lies or hides things, it takes much longer to rebuild trust. Leo told the truth, so she was proud of him." },
          { type: "mc", prompt: "What do the thin cracks in the mended vase suggest?", options: ["They are a reminder of the mistake and of how honestly it was handled", "They show that the glue they chose was not strong enough", "They show that Leo did not take care when he glued it"], correctIndex: 0, explanation: "The cracks \"showed where it had broken\", so they quietly record the accident and how Leo dealt with it. The passage never says the glue was weak or that Leo was careless." },
        ],
      },
      {
        id: "comp-easy-4",
        passage:
          "When Sam visited Grandpa on Sundays, there was always an old brown radio on the kitchen table. It had not worked for years, and Grandpa kept it because his own father had given it to him. One Sunday, Sam noticed that the back cover was loose. \"Can we open it?\" he asked. Grandpa hesitated, then handed him a small screwdriver. Inside, the radio was full of coloured wires, and one of them had come away from its metal clip. Sam wanted to push it back at once, but Grandpa put a hand on his arm. \"Slowly,\" he said. \"Look first, then touch.\" They studied the wires together, and Grandpa explained what each part did, as if he were remembering something from long ago. At last, Sam pressed the wire back onto its clip. Grandpa switched the radio on. There was a crackle, and then, faintly, music. Grandpa closed his eyes and smiled. \"That is the song my father used to sing,\" he said quietly. Sam had fixed the radio, but he sensed that something more important had been mended too.",
        questions: [
          { type: "mc", prompt: "What did Grandpa mean by \"Look first, then touch\"?", options: ["Sam should understand the problem before trying to fix it", "Sam should ask permission before touching anything in the kitchen", "Sam should only look at the radio and never repair it"], correctIndex: 0, explanation: "Grandpa put a hand on Sam's arm as he rushed, then studied the wires with him. He was teaching Sam to understand a problem before acting." },
          { type: "shortanswer", prompt: "What do you think Sam meant when he sensed that \"something more important had been mended too\"?", modelAnswer: "Fixing the radio brought back a happy memory for Grandpa and brought the two of them closer. The more important thing that was mended was their connection, and Grandpa's link with his own father." },
          { type: "mc", prompt: "Why did Grandpa hesitate before handing Sam the screwdriver?", options: ["The radio was precious to him because of its family history", "He was worried that Sam was too young to hold a tool", "He did not believe the radio could ever be repaired"], correctIndex: 0, explanation: "The radio had been given to him by his own father, so he kept it for years. Opening it was a big step for him. The passage does not mention Sam's age." },
        ],
      },
      {
        id: "comp-easy-5",
        passage:
          "Ms Ahmed's class had learnt that plastic bottles take hundreds of years to break down, so she set them a challenge: could the class reduce the number of plastic bottles they threw away in a month? At first, the students thought one class could not make a difference. But they made a plan. Everyone brought a metal or glass bottle from home to refill at the water fountain, and a group of students set up a collecting box for the plastic bottles that still appeared. At the end of the first week, the box held sixty bottles. By the end of the second week, there were only thirty-one, and by the fourth week, only nine. Best of all, students in other classes started to copy them. The school caretaker said the bins were lighter than he had seen them in years. \"One class did not solve the problem,\" Ms Ahmed told her students. \"But you showed that small choices, made by many people, can add up.\"",
        questions: [
          { type: "mc", prompt: "What can be inferred from the drop from sixty bottles to nine?", options: ["The class's habits changed steadily over the month", "The class stopped drinking water at school altogether", "The collecting box was too small to hold any more"], correctIndex: 0, explanation: "The numbers fell week by week (60, 31, then 9) as more students brought refillable bottles. Nothing suggests they stopped drinking, and a full box would not explain a falling count." },
          { type: "shortanswer", prompt: "Why might the students at first have thought that one class could not make a difference? Do you agree with Ms Ahmed's final message?", modelAnswer: "One class is a small part of a big school and a big world, so it can seem that its bottles do not matter. But Ms Ahmed is right that small choices add up: the other classes copied them, so the effect spread." },
          { type: "mc", prompt: "What does \"add up\" mean in the last sentence?", options: ["Build into a large effect when combined", "Be counted carefully during a maths lesson", "Become more expensive as the months go by"], correctIndex: 0, explanation: "Here it means many small things together become something big. It is not about counting in a maths lesson or about cost." },
        ],
      },
      {
        id: "comp-easy-6",
        passage:
          "Ivy was six years old, and she loved looking at the colourful cereal boxes in the supermarket. While her dad talked to the man at the fish counter, she wandered off down the aisle. When she turned around, Dad was gone. Ivy's stomach twisted and her eyes filled with tears. She wanted to run and shout, but she remembered what Dad had told her: \"If you ever get lost, stay where you are and find someone who works here.\" Ivy took a deep breath and stood still beside the biscuits. Soon she saw a woman in a green uniform with a name badge. \"Please,\" said Ivy in a wobbly voice, \"I can't find my dad.\" The woman knelt down, smiled, and asked for Ivy's name. Within two minutes, a friendly voice on the loudspeaker was calling Dad to the front desk. When he arrived, he hugged Ivy tightly. \"You did exactly the right thing,\" he said.",
        questions: [
          { type: "mc", prompt: "Why did Ivy stay beside the biscuits?", options: ["She remembered her dad's advice about what to do if she got lost", "She was too scared to walk any further down the aisle", "She wanted to choose a packet of biscuits to buy"], correctIndex: 0, explanation: "She wanted to run and shout, but she remembered Dad's rule: stay where you are and find someone who works there. Staying put was a choice, not just fear." },
          { type: "shortanswer", prompt: "How did Ivy manage her fear? Give words or actions from the passage that show this.", modelAnswer: "She took a deep breath, stood still instead of running, and looked for someone who worked there. She spoke politely, saying \"Please\", even though her voice was wobbly. This shows she stayed calm enough to follow her dad's advice." },
          { type: "mc", prompt: "Which detail helped Ivy know that the woman could help her?", options: ["She wore a green uniform and a name badge", "She knelt down and smiled at Ivy", "She was standing near the fish counter"], correctIndex: 0, explanation: "Dad had said to find someone who works there, and the uniform and badge show that. The kneeling and smiling came after Ivy had already asked for help." },
        ],
      },
      {
        id: "comp-easy-7",
        passage:
          "After a rainy morning, the playground is full of puddles. But if the sun comes out, the puddles slowly get smaller, and by the afternoon they have often disappeared. Where does the water go? On a hard playground, it cannot sink into the ground, and nobody mops it up. Instead, the heat from the sun turns the water into a gas called water vapour. This change is called evaporation. The water vapour is invisible, so we cannot see it rise into the air. Puddles disappear faster on hot, windy days because heat and moving air help the water to evaporate quickly. On a cold, still day, a puddle can stay for hours. The water is not lost forever. High in the sky, the vapour cools down and turns back into tiny drops, which form clouds. One day, those drops may fall again as rain, and the water begins its journey once more.",
        questions: [
          { type: "mc", prompt: "Why do puddles disappear faster on a hot, windy day?", options: ["Heat and moving air help the water turn into vapour more quickly", "The wind blows the puddle water into the nearest drains", "Hot weather makes the ground soak up more water"], correctIndex: 0, explanation: "The passage says heat and moving air help the water to evaporate quickly. The playground is hard, so the ground cannot soak the water up." },
          { type: "shortanswer", prompt: "In your own words, explain what happens to the water after it evaporates.", modelAnswer: "It rises into the air as invisible water vapour. High in the sky it cools and turns back into tiny drops, which make clouds. Later the drops can fall as rain, so the water starts its journey again." },
          { type: "mc", prompt: "Which sentence about water vapour is TRUE?", options: ["It is invisible, and it later turns into drops that form clouds", "It is visible as it rises from the puddle into the sky", "It forms when water is cooled until it becomes solid"], correctIndex: 0, explanation: "The passage says vapour is invisible and later cools into tiny drops that form clouds. Vapour is made by heating water, not by cooling it into a solid." },
        ],
      },
      {
        id: "comp-easy-8",
        passage:
          "Zoe had been chosen to play the queen in the class play, and she had practised her lines every night for two weeks. But on the day of the show, when she stepped onto the stage and saw all the parents looking at her, her mind went completely blank. The audience waited. Zoe's hands began to shake. Max, who was playing the guard, was standing beside her. He stepped a little closer and whispered the first few words of her line so quietly that only she could hear. Zoe blinked, and the words came flooding back. She spoke clearly and even added a small bow at the end. When the curtain closed, the audience clapped for a long time. Backstage, Zoe hugged Max. \"You saved me,\" she said. Max shrugged and grinned. \"That's what friends on a team do.\"",
        questions: [
          { type: "mc", prompt: "What can we infer about how Zoe felt when she forgot her lines?", options: ["Frightened and embarrassed in front of everyone", "Angry with Max for not helping sooner", "Bored because she had practised so often"], correctIndex: 0, explanation: "Her mind went blank, her hands shook, and the audience waited. That points to fear and embarrassment. Nothing suggests she was angry or bored." },
          { type: "shortanswer", prompt: "Why do you think Max whispered the line instead of saying it loudly?", modelAnswer: "A whisper helped Zoe without the audience noticing, so she was not embarrassed and the play was not spoiled. It also showed he was being thoughtful, because he wanted to support her quietly." },
          { type: "mc", prompt: "What does the writer show by saying Zoe \"even added a small bow\"?", options: ["That she had got her confidence back", "That the play needed a longer ending", "That the audience had asked her to bow"], correctIndex: 0, explanation: "Adding something extra shows she had recovered and felt confident again. The passage does not say the audience asked for it." },
        ],
      },
    ],
    medium: [
      {
        id: "comp-medium-1",
        passage:
          "The regional robotics competition was only three days away, and Team Circuit Breakers still hadn't solved their biggest problem: their robot's arm kept dropping the small plastic blocks it was supposed to stack. Diego, the team's captain, had rebuilt the arm's gripper four times already, but nothing seemed to work. On Wednesday night, while the rest of the team had already gone home, Diego stayed late in the workshop with his teammate, Aaliyah, running test after test. Aaliyah suggested something Diego hadn't considered — instead of redesigning the gripper again, maybe the problem wasn't the arm at all. Maybe it was the code controlling how fast the arm moved. If the arm closed around each block too quickly, it might be knocking the blocks slightly off balance before it even lifted them. Diego was skeptical at first; he had spent so much time focused on the mechanical parts that he hadn't thought to question the programming. But with nothing left to lose, they slowed down the gripping speed in the code by half a second. The next test run, the robot lifted the block cleanly and set it down without a single wobble. They tested it seven more times. Seven more perfect stacks. By competition day, their robot could stack blocks faster and more reliably than any other team's, not because they had the strongest gripper, but because they had finally looked at the whole system instead of just one part of it. When they won third place overall, Diego made sure to tell the judges that the real breakthrough had come from Aaliyah's idea, not his own redesigns.",
        questions: [
          {
            type: "mc",
            prompt: "Why did slowing down the gripping speed fix the problem?",
            options: ["The arm had been closing so quickly that it knocked the blocks off balance before lifting them", "The blocks were too heavy to be gripped at a fast speed, so the arm needed more time", "The gripper had been rebuilt so many times that its parts had finally worn out"],
            correctIndex: 0,
            explanation: "Aaliyah's idea was that closing too quickly might knock the blocks slightly off balance. The gripper was rebuilt four times, but the hardware was never the real problem.",
          },
          {
            type: "shortanswer",
            prompt: "Why did Diego initially not consider that the code might be the problem?",
            modelAnswer:
              "He had spent so much time focused on the mechanical parts (the gripper) that he assumed the problem had to be mechanical too, rather than thinking about the software.",
          },
          {
            type: "mc",
            prompt: "Which detail best supports the idea that Diego is a good team captain?",
            options: [
              "He told the judges that the real breakthrough came from Aaliyah's idea",
              "He rebuilt the gripper four times before the competition",
              "He stayed late in the workshop on Wednesday night",
            ],
            correctIndex: 0,
            explanation: "Rebuilding the gripper and working late show effort. A good captain also shares credit, and Diego gave Aaliyah the credit in front of the judges.",
          },
          {
            type: "shortanswer",
            prompt: "What does Diego's decision to credit Aaliyah in front of the judges tell you about him?",
            modelAnswer:
              "It shows he is honest and generous — he cared more about giving credit where it was due than taking all the credit for the team's success himself.",
          },
        ],
      },
      {
        id: "comp-medium-2",
        passage:
          "Marcus had always assumed that the kids who made the all-star basketball team were simply more naturally talented than he was, until his coach posted everyone's self-reported practice logs on the locker room wall as part of a team motivation exercise. Marcus was stunned to see that Devon, a guard who'd made the all-star team two years running, had logged barely more practice time per week than Marcus himself — the real difference was in how that time was spent. While Marcus's log was full of casual pickup games with friends, Devon's log showed short, focused sessions: fifteen minutes of nothing but free throws, twenty minutes of dribbling drills using only his weaker hand, ten minutes of defensive footwork against an imaginary opponent. Marcus realised that he'd been mistaking activity for improvement; playing basketball with friends was fun and kept him moving, but it rarely forced him to work on the specific weaknesses that were actually holding his game back. He started restructuring his own practice time that same week, and while he didn't make the all-star team that season, his coach pulled him aside in March to say his shooting percentage had improved more than anyone else's on the roster.",
        questions: [
          {
            type: "mc",
            prompt: "Which statement is supported by the practice logs described in the passage?",
            options: [
              "Devon and Marcus practised a similar amount, but Devon spent his time on specific weaknesses",
              "Devon practised about twice as long as Marcus each week, which explained his success",
              "Marcus's log showed more focused drills than Devon's, but he had less natural talent",
            ],
            correctIndex: 0,
            explanation: "Devon had logged \"barely more practice time\" than Marcus. The difference was that Devon's sessions were short and focused, while Marcus's were casual pickup games.",
          },
          {
            type: "shortanswer",
            prompt: "What is the difference between 'activity' and 'improvement,' based on how the passage uses those ideas?",
            modelAnswer:
              "Activity is just being busy or playing (like casual pickup games), while improvement comes from focused, deliberate practice that specifically targets your weaknesses — being active doesn't automatically mean you're getting better.",
          },
          {
            type: "mc",
            prompt: "What does the passage suggest about Marcus's first belief that all-stars were \"simply more naturally talented\"?",
            options: [
              "It was an assumption, and the logs showed that how you practise matters more than it seemed",
              "It was correct, because Devon had clearly practised far longer than Marcus had",
              "It was correct, although hard work can sometimes help to make up for a lack of talent",
            ],
            correctIndex: 0,
            explanation: "Marcus was \"stunned\" to find similar practice time, so his belief was an assumption. The passage never says talent is the main factor.",
          },
        ],
      },
      {
        id: "comp-medium-3",
        passage:
          "An octopus has no bones and no shell, yet it is one of the cleverest animals in the sea. Scientists have watched octopuses unscrew the lids of jars to reach the food inside, and some have escaped from tanks by squeezing through gaps no bigger than a coin. Their nervous system is unusual: about two thirds of an octopus's neurons are in its arms, so each arm can feel, taste and make simple decisions almost by itself. When an octopus is threatened, it has a range of tricks. It can change colour in less than a second to match the seabed, squirt a cloud of dark ink to confuse an attacker, or slip into a narrow crack. One species, the veined octopus, has been seen carrying coconut shells across the sea floor and hiding under them when danger appears. Researchers find this behaviour exciting because the octopus is collecting a tool for later use rather than using it straight away. Yet many octopuses live only one or two years, so they never meet their parents and cannot be taught by them. Each one has to discover the world for itself.",
        questions: [
          { type: "mc", prompt: "Why are researchers excited about the veined octopus and the coconut shells?", options: ["It carries the shells to use later, which shows planning ahead", "It is the only sea animal that can lift objects with its arms", "It eats the coconut and then grows to a much larger size"], correctIndex: 0, explanation: "The passage says the octopus is collecting a tool for later use instead of using it straight away, which suggests planning. Lifting objects and eating coconuts are not mentioned." },
          { type: "mc", prompt: "What can be inferred about how most octopuses learn?", options: ["Mainly from their own experience, without help from parents", "By copying the older octopuses that live nearby", "By being taught in groups when they are very young"], correctIndex: 0, explanation: "Because many octopuses live one or two years and never meet their parents, each one must \"discover the world for itself\"." },
          { type: "shortanswer", prompt: "How might having most neurons in the arms help an octopus?", modelAnswer: "Each arm can feel, taste and make simple decisions almost by itself, so the octopus can explore cracks or open a jar with many arms at once without the brain controlling every small movement." },
        ],
      },
      {
        id: "comp-medium-4",
        passage:
          "Every four years, thousands of runners take on 42.195 kilometres in the Olympic marathon, but the story behind the race may be partly a legend. According to the tale, in 490 BCE a Greek messenger ran from the battlefield of Marathon to Athens to announce that the Athenian army had beaten a Persian invasion. He is said to have gasped out the news and then collapsed. Historians are not sure the story is true; the earliest accounts disagree about the messenger's name and even about how far he ran. Even so, the tale inspired a French scholar, Michel Bréal, to suggest a long-distance race for the first modern Olympic Games, held in Athens in 1896. That first marathon was about 40 kilometres long. The distance was not fixed for many years. In 1908 the London organisers wanted the race to begin at Windsor Castle and finish in front of the royal box inside the stadium, and the route measured 42.195 kilometres. That distance was finally made the official standard in 1921.",
        questions: [
          { type: "mc", prompt: "Why does the writer say that historians \"are not sure\" the story is true?", options: ["The oldest accounts disagree about basic details of the run", "No one has ever been able to find the battlefield at Marathon", "Historians believe the Persians won the battle in 490 BCE"], correctIndex: 0, explanation: "The earliest accounts disagree about the messenger's name and about how far he ran. That is why the story is doubtful. The passage says the Athenians won." },
          { type: "mc", prompt: "Which statement about the marathon distance is TRUE?", options: ["It changed over the years before becoming official in 1921", "It has always been exactly 42.195 kilometres since 1896", "It was chosen to match the messenger's route exactly"], correctIndex: 0, explanation: "The first marathon was about 40 km, the 1908 route was 42.195 km, and the distance became the standard only in 1921." },
          { type: "shortanswer", prompt: "The story may be a legend, yet it still matters. Why?", modelAnswer: "Even if it is partly untrue, the tale inspired Michel Bréal to suggest a long-distance race, and that led to the modern marathon. A story can shape history even when the details are uncertain." },
        ],
      },
      {
        id: "comp-medium-5",
        passage:
          "Hana's class was raising money for an animal shelter with a stall at the school fair. Hana's idea was to sell homemade lemonade, and the team spent a week making posters and buying lemons. On the day, however, their table was next to the cake stall, and the long queue for cakes stretched across the front of the lemonade table. By lunchtime, they had sold only eleven cups. Hana felt discouraged, but she noticed something: people bought a slice of cake and then looked around for something to drink. She asked the cake team if she could put a sign on their table saying, \"Cake + Lemonade for $15 – save $3!\" Her friend Omar carried trays of cups along the queue instead of waiting behind the table. In two hours they sold ninety-four cups, and the cake stall sold out for the first time. At the end of the day, the teacher counted the money and announced that the two stalls together had raised more than any other group. Hana smiled. She had learned that sometimes the best way to solve a problem is to work with it rather than fight it.",
        questions: [
          { type: "mc", prompt: "Why was the sign on the cake table a clever idea?", options: ["It turned the cake queue into a chance to sell drinks too", "It told people that the lemonade stall had moved away", "It made the cakes cheaper than at every other stall"], correctIndex: 0, explanation: "People were already queueing for cake and then looking for a drink, so the sign linked the two. The lemonade stall had not moved, and only the pair was discounted." },
          { type: "mc", prompt: "What does \"work with it rather than fight it\" mean here?", options: ["Use the cake stall's popularity to help both stalls", "Ask the cake stall to close so the lemonade could sell", "Move the lemonade stall into the shade away from the cakes"], correctIndex: 0, explanation: "Hana did not treat the cake queue as an enemy. She used it, and both stalls benefited." },
          { type: "shortanswer", prompt: "What qualities did Hana show, and how does the passage show them?", modelAnswer: "She was observant, because she noticed people looking for a drink after buying cake. She was flexible and cooperative, because she changed her plan and worked with the cake team instead of feeling sorry for herself." },
        ],
      },
      {
        id: "comp-medium-6",
        passage:
          "Behind many school gardens sits a wooden box of rotting leaves and vegetable peelings. It may not look impressive, but a compost heap is a busy place. Inside it, millions of tiny living things, called decomposers, are breaking down dead plant material. Bacteria and fungi do most of the work, while worms, beetles and woodlice chew the material into smaller pieces so that the microbes can reach it more easily. As the microbes feed, they release heat, and the centre of a healthy heap can reach 60°C, which is warm enough to kill many weed seeds. After several months, the peelings have turned into a dark, crumbly material that smells like fresh soil. Gardeners spread it on the ground because it contains nutrients that plants need and helps the soil hold water. Not everything belongs in the heap, though. Meat, fish and dairy foods attract pests and smell bad, so gardeners keep them out. Composting is a small example of a natural cycle: nutrients in dead plants go back into the soil, where new plants can use them.",
        questions: [
          { type: "mc", prompt: "Why are worms and beetles useful in a compost heap?", options: ["They break material into small pieces that microbes can use easily", "They produce the heat that kills weed seeds in the centre", "They turn the peelings into a dark, crumbly material by themselves"], correctIndex: 0, explanation: "They chew the material into smaller pieces so microbes can reach it. The heat comes from the microbes, and bacteria and fungi do most of the work." },
          { type: "mc", prompt: "What can be inferred from the fact that the heap can reach 60°C?", options: ["The microbes inside it are very active as they feed", "The wooden box is being warmed by the strong sunshine", "The peelings have already become finished compost"], correctIndex: 0, explanation: "The passage says the microbes release heat as they feed, so a hot centre shows they are busy. Finished compost comes only after several months." },
          { type: "shortanswer", prompt: "Explain why the writer calls composting \"a small example of a natural cycle\".", modelAnswer: "Plants take nutrients from the soil, and when they die, decomposers break them down and return the nutrients to the soil. New plants then use them again, so the nutrients go round in a circle." },
        ],
      },
      {
        id: "comp-medium-7",
        passage:
          "On a quiet beach in Hong Kong, a green turtle hauls herself out of the sea after dark. She digs a deep hole in the sand with her back flippers, lays about a hundred eggs and covers them carefully before returning to the water. This is remarkable because green turtles spend nearly all their lives at sea, and females come ashore only to nest. Scientists believe that they return to the region where they hatched, possibly using the Earth's magnetic field to find it. The journey for the young is dangerous, and only about one hatchling in a thousand will survive to adulthood. After around two months, the hatchlings dig up through the sand and crawl towards the brightest horizon, which in nature is the sea shining with moonlight. Bright street lamps or hotel lights can confuse them, so they crawl inland instead, where they may be hit by traffic or eaten. Conservation groups now ask beach visitors to switch off torches at night and take their rubbish home, because plastic bags are often mistaken for jellyfish and eaten by turtles.",
        questions: [
          { type: "mc", prompt: "Why are bright street lamps dangerous for hatchlings?", options: ["Hatchlings head for the brightest light, which may lead them away from the sea", "The lamps heat the sand so much that the eggs cannot hatch at all", "The light makes the hatchlings so sleepy that they stop moving"], correctIndex: 0, explanation: "Hatchlings crawl towards the brightest horizon, which should be the moonlit sea. A street lamp can draw them inland instead." },
          { type: "mc", prompt: "Why might a female turtle lay about a hundred eggs?", options: ["So that a few young can survive when most do not", "Because a hundred eggs fit exactly into one hole", "So that the eggs can keep one another warm"], correctIndex: 0, explanation: "Only about one in a thousand hatchlings reaches adulthood, so laying many eggs gives the species a better chance." },
          { type: "shortanswer", prompt: "Suggest two things visitors to a turtle beach can do to help, using the passage.", modelAnswer: "They can switch off torches at night, so that hatchlings are not confused by artificial light, and they can take their rubbish home, so that turtles do not eat plastic bags that look like jellyfish." },
        ],
      },
      {
        id: "comp-medium-8",
        passage:
          "Amara's little brother learnt to ride a bicycle when he was five. Amara was eleven and still could not. Every time she got on, she gripped the handlebars so tightly that her knuckles turned white, and she stared at the front wheel. After each wobble she put her foot down and refused to continue. \"I'm just not a bike person,\" she told her father. He did not argue. Instead, on Sunday morning he took her to the empty car park and removed the pedals. \"Just glide,\" he said. Amara pushed along with her feet, lifted them for a second and wobbled. Then she lifted them for two seconds. By the end of the morning she was gliding all the way across the car park with her head up, watching where she was going instead of where she feared she might fall. The next week, the pedals went back on. Her father let go of the seat without telling her. \"You're doing it!\" he shouted. Amara laughed so hard she nearly fell off, but she didn't.",
        questions: [
          { type: "mc", prompt: "What can be inferred from Amara saying, \"I'm just not a bike person\"?", options: ["She was using an excuse to avoid the fear of falling", "She had decided that cycling was too boring to learn", "She had already been offered lessons and turned them down"], correctIndex: 0, explanation: "Her white knuckles and refusal to continue show fear. Saying she is \"not a bike person\" turns the fear into a fixed label." },
          { type: "shortanswer", prompt: "Why was removing the pedals a clever way to teach Amara?", modelAnswer: "Gliding let her practise balance on its own, without having to pedal at the same time, and it was less frightening because she could put her feet down at any moment. Once she could balance, adding the pedals was easy." },
          { type: "mc", prompt: "What changed when Amara began to look up as she glided?", options: ["She balanced better because she watched where she was going", "She went faster because she was no longer afraid of the wheel", "She stopped wobbling because her father was holding the seat"], correctIndex: 0, explanation: "The passage says she watched where she was going rather than where she feared she might fall, and she then glided across the car park. Her father only let go of the seat the following week." },
        ],
      },
    ],
    hard: [
      {
        id: "comp-hard-1",
        passage:
          "When the student council proposed banning phones entirely from the school campus, the reaction was immediate and divided. Some students argued the policy was long overdue; they pointed to research showing that constant notifications made it nearly impossible to concentrate during class, and that the pressure to check social media throughout the day was contributing to rising anxiety among their classmates. Others saw the proposal as an overreaction. Kai, a junior on the council, argued that banning phones outright ignored the ways students legitimately relied on them — coordinating rides home, contacting parents in emergencies, and using translation apps that some English-language learners depended on to follow along in class. Removing phones completely, he argued, would punish responsible students to solve a problem caused by a smaller group who couldn't manage their own screen time. The council eventually reached a compromise that satisfied almost no one completely: phones would be allowed before and after school and during lunch, but would need to be kept in lockers, powered off, during all class periods. In the weeks after the policy took effect, the results were mixed. Some teachers reported that class discussions felt more focused, with fewer students distracted mid-conversation. Other teachers noticed almost no difference at all, since the students who struggled most with focus found new ways to get distracted regardless of whether a phone was nearby. What became clear to almost everyone, including Kai, was that the phone itself had never really been the whole problem — it had only ever been the most visible symptom of a much harder question: how do you teach teenagers to manage their own attention in a world designed to constantly interrupt it?",
        questions: [
          {
            type: "mc",
            prompt: "How does Kai's view differ from that of the students who supported the ban?",
            options: [
              "Kai focused on students who genuinely need phones, while supporters focused on distraction and anxiety",
              "Kai believed phones help students concentrate, while supporters disagreed",
              "Kai wanted phones allowed in every class, while supporters wanted them banned only at lunch",
            ],
            correctIndex: 0,
            explanation: "Supporters pointed to lost concentration and anxiety. Kai pointed to legitimate uses such as rides, emergencies, and translation apps. He never said phones improve concentration.",
          },
          {
            type: "shortanswer",
            prompt: "Why might some teachers have noticed 'almost no difference at all' after the new policy took effect?",
            modelAnswer:
              "Students who struggled with focus may have found other ways to get distracted even without their phones, suggesting the phone wasn't the only cause of their distraction.",
          },
          {
            type: "mc",
            prompt: "What is the deeper question the passage suggests the phone policy could not fully answer?",
            options: [
              "How to teach teenagers to manage their own attention in a world full of distractions",
              "Whether schools should let students use their phones at lunchtime or after school",
              "Whether teachers should be allowed to collect phones from students during lessons",
            ],
            correctIndex: 0,
            explanation: "The passage ends by framing the real question as teaching attention management in a world built to interrupt it.",
          },
          {
            type: "shortanswer",
            prompt: "Do you agree with the council's compromise? Explain one reason why it might work well, or one reason why it might not.",
            modelAnswer:
              "There's no single right answer — a strong response gives one clear reason, such as: it balances access needs with focus (a reason it might work), or that phones being merely 'off in a locker' doesn't address why students feel the urge to check them constantly (a reason it might not fully solve the problem).",
          },
        ],
      },
      {
        id: "comp-hard-2",
        passage:
          "When a screenshot of a private group chat was leaked and shared around school, showing several students making unkind jokes about a classmate, the fallout extended in directions no one quite anticipated. The classmate who was mocked, understandably hurt, expected an apology from everyone who had participated in the conversation. But the group chat members themselves were split: some had actively written the jokes, others had simply reacted with laughing emojis without adding anything, and at least two had been silently present in the chat the entire time without responding to the messages at all. When the school counsellor met with the group to discuss what had happened, a disagreement emerged about how much responsibility each type of participation actually deserved. The students who had only reacted with emojis argued they hadn't \"really\" said anything unkind. The students who had stayed silent argued they hadn't participated at all. The counsellor pointed out that every person in that chat had, in some way, allowed the conversation to continue rather than objecting to it or leaving, and asked the group to consider what it would have taken for even one person to have changed the conversation's direction.",
        questions: [
          {
            type: "mc",
            prompt: "What disagreement emerged among the group chat members?",
            options: ["How much responsibility different types of participation deserved", "Whether the screenshot should have been shared around school", "Whether the jokes had really been unkind"],
            correctIndex: 0,
            explanation: "The screenshot and the jokes are part of the background, but the group's disagreement was about how much responsibility writing, reacting, and staying silent each deserved.",
          },
          {
            type: "shortanswer",
            prompt: "Do you agree with the counsellor's point that everyone in the chat shares some responsibility, even those who stayed silent? Explain your reasoning.",
            modelAnswer:
              "There's no single right answer — a strong response takes a clear position and explains it, such as: silence can still enable harmful behaviour to continue unchallenged (agreeing), or that not actively participating is meaningfully different from writing the jokes (disagreeing), with reasoning either way.",
          },
          {
            type: "mc",
            prompt: "What did the counsellor ask the group to consider?",
            options: ["What it would have taken for one person to change the conversation's direction", "Who had written the very first unkind message in the private group chat", "Whether the classmate who was mocked should forgive the whole group"],
            correctIndex: 0,
            explanation: "The counsellor did not look for who started it or ask for forgiveness. She asked what it would have taken for even one person to change the direction of the conversation.",
          },
        ],
      },
      {
        id: "comp-hard-3",
        passage:
          "When Alexander Fleming noticed a mould killing bacteria on a dish in 1928, he opened the way to drugs that would save millions of lives. Yet within a few decades, some bacteria began to survive the very drugs that were meant to kill them. Resistance is not a case of bacteria \"learning\" to cope; it is the result of natural selection. In any large population of bacteria, a few individuals happen to carry genetic changes that let them survive a particular antibiotic. When a patient takes the drug, the vulnerable bacteria die, but the resistant ones remain and multiply, passing on the same trait. Some bacteria can even hand resistance genes to unrelated bacteria. The more often antibiotics are used, the more strongly they favour the resistant strains. That is why doctors warn against taking antibiotics for illnesses such as colds and flu, which are caused by viruses and are unaffected by these drugs. Patients who stop a course early, as soon as they feel better, may also leave the toughest bacteria alive. Researchers are searching for new antibiotics and for ways to slow resistance, but few new classes of antibiotic have been discovered in recent decades, so protecting the drugs we already have has become as important as finding new ones.",
        questions: [
          { type: "mc", prompt: "Which statement best explains how resistance develops?", options: ["Resistant bacteria survive the drug and multiply, so they become more common", "Bacteria learn from each dose and change themselves to survive the next one", "The drug slowly damages the patient's body until it stops fighting infections"], correctIndex: 0, explanation: "The passage says resistance is natural selection: the vulnerable bacteria die, and the survivors multiply and pass on the trait. It explicitly rejects the idea that bacteria \"learn\"." },
          { type: "mc", prompt: "Why do doctors warn against using antibiotics for colds?", options: ["Colds are caused by viruses, so the drugs cannot help and only encourage resistance", "Colds are so mild that the drugs would make patients feel more unwell", "Colds pass between people, and antibiotics make them spread more quickly"], correctIndex: 0, explanation: "Antibiotics work on bacteria, not viruses. Using them when they cannot help still gives resistant bacteria a chance to spread." },
          { type: "shortanswer", prompt: "Why might stopping a course of antibiotics early make the problem of resistance worse?", modelAnswer: "The weakest bacteria die first, so the patient feels better while the toughest bacteria are still alive. If the patient stops, those survivors multiply and pass on their resistance, so the next infection is harder to treat." },
          { type: "mc", prompt: "What does the final sentence suggest about the future of antibiotics?", options: ["Because few new drugs are appearing, careful use of existing ones is vital", "Researchers have stopped looking for new drugs because they cost too much", "Resistance is impossible to slow down, so existing drugs no longer matter"], correctIndex: 0, explanation: "New classes of antibiotic are rare, so protecting the current drugs matters as much as finding new ones. Researchers are still searching." },
        ],
      },
      {
        id: "comp-hard-4",
        passage:
          "Until the nineteenth century, time was local. A town set its clocks by the sun, so noon in Bristol came about ten minutes after noon in London, and nobody minded, because travel was so slow that the difference never mattered. Railways changed this. A timetable that listed dozens of towns, each running on its own time, was confusing and even dangerous when two trains shared one track. In 1840, the Great Western Railway began to run all its services on London time, and other companies soon followed. This \"railway time\" spread across Britain, and by 1880 the law recognised a single national standard. Other countries faced the same problem. In 1883, the North American railways divided the continent into time zones, and the following year, delegates from twenty-five countries met in Washington and agreed to make Greenwich, in London, the starting point for measuring longitude and the world's time. Not everyone accepted the change at once; France, for example, kept its own system for years afterwards. Many people resisted because they felt it was unnatural for a clock to disagree with the sun. Yet the new system made sense once travel and communication became fast.",
        questions: [
          { type: "mc", prompt: "Why did nobody mind that towns kept different local times?", options: ["Travel was so slow that the differences rarely caused problems", "People did not own clocks that could measure minutes accurately", "The law forbade towns from comparing their clocks with one another"], correctIndex: 0, explanation: "The passage says travel was so slow that the difference never mattered. Nothing is said about clocks being inaccurate or about a law forbidding comparison." },
          { type: "mc", prompt: "What does the passage suggest was the main reason for standard time?", options: ["Faster transport made a patchwork of local times confusing and risky", "Governments wanted to control how people spent their working days", "Scientists proved that local time was less accurate than the sun"], correctIndex: 0, explanation: "Railway timetables and shared tracks made different local times a real problem. The change came from the needs of travel, not from government control or science." },
          { type: "shortanswer", prompt: "Some people said it was \"unnatural for a clock to disagree with the sun\". Why might the new system still make sense to us today?", modelAnswer: "When people and messages move quickly, everyone needs to agree on the time to make journeys, meetings and calls work. A shared standard is more useful than a time that exactly matches the sun in each town." },
          { type: "mc", prompt: "Which statement is supported by the passage?", options: ["Greenwich was chosen as the world's reference point in 1884, but not every country adopted it at once", "Britain accepted a national time standard in 1840, and all other countries copied it at once", "France helped to choose Greenwich in 1884 and started to use it straight away"], correctIndex: 0, explanation: "Greenwich was agreed in 1884, but the passage says France kept its own system for years. Britain's law recognised a single standard only by 1880." },
        ],
      },
      {
        id: "comp-hard-5",
        passage:
          "Yawning seems simple, yet scientists still cannot fully explain it. We yawn when we are tired, but also when we are bored, and the reason may be different in each case. One popular idea is that yawning brings in extra oxygen. However, an experiment in the 1980s showed that people who breathed air containing extra oxygen yawned just as often as everyone else, which weakened the theory. Another suggestion is that yawning cools the brain: a deep breath brings in cooler air and increases blood flow, and some studies found that people yawn less when it is very hot. Then there is the puzzle of contagious yawning. Most adults yawn when they see or hear someone else yawn, even in a video. Researchers have found that we are more likely to \"catch\" a yawn from family and close friends than from strangers, which has led some to link it to empathy. Yet children under about four rarely catch yawns, and some studies have failed to find a clear link with empathy at all. Each explanation covers part of the picture, but none covers everything, and scientists continue to test them.",
        questions: [
          { type: "mc", prompt: "Why does the writer mention the experiment with extra oxygen?", options: ["To show that a popular explanation was tested and did not hold up", "To prove that yawning has no purpose in the human body", "To explain why people yawn more in rooms with fresh air"], correctIndex: 0, explanation: "People breathing extra oxygen yawned just as often, so the oxygen theory was weakened. It does not prove that yawning has no purpose." },
          { type: "mc", prompt: "Which conclusion is best supported by the passage?", options: ["No single explanation yet accounts for every kind of yawning", "Yawning is caused only by tiredness and boredom in adults", "Contagious yawning has been proved to be a sign of empathy"], correctIndex: 0, explanation: "The last sentence says each explanation covers only part of the picture. The empathy link is questioned, so it is not proved." },
          { type: "shortanswer", prompt: "What evidence links contagious yawning to empathy, and why is that link questioned?", modelAnswer: "People are more likely to catch a yawn from family and close friends than from strangers, which suggests emotional closeness matters. But young children rarely catch yawns, and some studies found no clear connection with empathy, so the link is uncertain." },
          { type: "mc", prompt: "Why does the writer put the word \"catch\" in quotation marks?", options: ["Yawns are not really caught like an illness, but they seem to pass between people", "The word is a direct quotation from one of the scientists mentioned", "Yawns can only be caught from people whom we know very well"], correctIndex: 0, explanation: "The word is used figuratively. A yawn is not a disease, but it seems to spread from one person to another." },
        ],
      },
      {
        id: "comp-hard-6",
        passage:
          "By the 1920s, wolves had been hunted out of Yellowstone National Park in the United States. Over the following decades, the number of elk grew, and they grazed heavily on young willow and aspen trees along the rivers. In 1995 and 1996, wolves were brought back from Canada. Within several years, ecologists began to report changes. Elk numbers fell, partly because wolves killed them, but some scientists argued that the elk also changed where they fed, avoiding open river valleys where they could easily be ambushed. Willows and aspen began to recover in some places, providing food and nesting sites for beavers and birds. This chain of effects is called a trophic cascade, and Yellowstone became a famous example. Yet later research urged caution. Elk numbers were also reduced by hunting outside the park and by bears and cougars, and changes in rainfall could affect the plants. Some studies found that trees recovered only in patches. Researchers agree that wolves matter, but how much of the change is due to them remains debated. The story is a reminder that ecosystems are complex, and that a striking story, however popular, needs evidence to support it.",
        questions: [
          { type: "mc", prompt: "Why did some scientists argue that fear, as well as hunting, changed the elk's behaviour?", options: ["Elk seemed to avoid open river valleys where wolves could ambush them", "Elk began to move into Canada after the wolves were released", "Elk stopped eating willow and aspen because the wolves ate them"], correctIndex: 0, explanation: "The passage says the elk avoided open valleys where they were easy to ambush. That is a change in behaviour beyond simply being killed." },
          { type: "mc", prompt: "What does \"later research urged caution\" suggest?", options: ["The wolves' effect might be smaller or less certain than first claimed", "Wolves should not have been brought back to Yellowstone at all", "The willows and aspen had recovered completely in every area"], correctIndex: 0, explanation: "Later studies pointed to other causes, such as hunting, bears, cougars and rainfall, and to patchy recovery. This does not mean the wolves were a mistake." },
          { type: "shortanswer", prompt: "Why is it difficult to prove that wolves alone caused the trees to recover?", modelAnswer: "Other things were changing at the same time, such as hunting outside the park, other predators and rainfall, and any of these could affect elk and plants. Since the effects are mixed together, it is hard to separate the wolves' part." },
          { type: "mc", prompt: "Which statement best expresses the writer's overall message?", options: ["A dramatic story about nature should be checked against the evidence", "Wolves are the most important animals in any ecosystem they join", "Scientists cannot be trusted when they report changes in nature"], correctIndex: 0, explanation: "The final sentence says that a striking story needs evidence. It does not claim that wolves are always most important or that scientists cannot be trusted." },
        ],
      },
      {
        id: "comp-hard-7",
        passage:
          "For most of the twentieth century, high jumpers cleared the bar by running at it and swinging their legs over one after the other, in a movement called the straddle. Then in the 1960s a tall student from Oregon, Dick Fosbury, began to experiment. He found that he jumped higher by running in a curve and going over the bar backwards, with his back arched and his head first. Sports writers laughed at the style and named it the \"Fosbury Flop\". Some coaches feared it would end in broken necks. But in 1968, at the Mexico City Olympics, Fosbury cleared 2.24 metres and won the gold medal, setting a new Olympic record. Within a decade, almost all top jumpers had copied him. Two things made the change possible. The curved run-up let the jumper turn speed into height, and the arched back kept the body's centre of gravity low, so that it could pass under the bar even as the body went over it. Just as important was the landing. Older pits were filled with sawdust or sand, which would have been dangerous for someone landing on their back. By the late 1960s, thick foam mats had replaced them. Fosbury's technique needed his talent, but it also needed the right technology.",
        questions: [
          { type: "mc", prompt: "Why were thick foam mats so important to the Fosbury Flop?", options: ["They allowed jumpers to land safely on their backs", "They made the bar sit lower than in the earlier pits", "They helped jumpers to run faster before the take-off"], correctIndex: 0, explanation: "Sawdust and sand pits would have been dangerous for a back landing. Foam mats made the new technique safe enough to spread." },
          { type: "mc", prompt: "What does the last sentence mean?", options: ["The technique succeeded because skill and equipment developed together", "The technique was so difficult that only talented jumpers could try it", "The technique was invented by the people who made the foam mats"], correctIndex: 0, explanation: "The writer says the Flop needed talent and the right technology. Both were required, and the mat makers did not invent the style." },
          { type: "shortanswer", prompt: "The sports writers laughed at Fosbury's style. What does this suggest about how new ideas are often received, and what changed?", modelAnswer: "New ideas can look strange or even dangerous at first, so people mock them. But results are hard to ignore: once Fosbury won an Olympic gold medal, most top jumpers copied him." },
          { type: "mc", prompt: "Which detail best supports the claim that the Flop was an efficient technique?", options: ["The body's centre of gravity could pass under the bar while the body went over it", "The Flop was invented by a student who had never studied high jumping", "The Flop was first used in a competition in front of a large crowd"], correctIndex: 0, explanation: "This detail explains how the technique works: the jumper clears the bar with less energy wasted in lifting the body's centre of gravity." },
        ],
      },
      {
        id: "comp-hard-8",
        passage:
          "To earn a licence, a London taxi driver must pass an exam known as \"The Knowledge\", which usually takes three to four years to prepare for. Candidates memorise about 25,000 streets and thousands of landmarks within six miles of Charing Cross, and they must be able to plan the shortest route between any two of them without a map. In 2000, a team led by the neuroscientist Eleanor Maguire scanned the brains of licensed taxi drivers and compared them with those of people who did not drive taxis. The taxi drivers had a larger posterior hippocampus, a part of the brain involved in spatial memory, and the longer someone had been driving, the larger this region tended to be. Later, the team scanned trainees before and after their training: those who qualified showed growth in this region, while those who failed did not. This suggests that the adult brain can change in response to demanding practice, rather than being fixed. Some researchers worry about satellite navigation: if we always follow spoken directions, our brains may get less of this practice. But the evidence is limited, and no one has shown that using GPS shrinks anyone's hippocampus.",
        questions: [
          { type: "mc", prompt: "Why did the team scan trainees before and after their training?", options: ["To check whether the training itself caused the brain to change", "To find out which candidates would pass the exam", "To measure how many streets each trainee could remember"], correctIndex: 0, explanation: "The first study could not show cause and effect: drivers might simply have larger hippocampi already. Scanning before and after shows whether the change came with the training." },
          { type: "mc", prompt: "What is the writer's attitude to the idea that GPS harms our memory?", options: ["It is a reasonable worry, but it has not been proved", "It is a proven fact that everyone should accept", "It is an idea with no evidence and no logic at all"], correctIndex: 0, explanation: "Researchers \"worry\", but the writer points out that the evidence is limited and that no one has shown a shrinking hippocampus." },
          { type: "shortanswer", prompt: "Why could the first study on its own not prove that the training caused the difference in the drivers' brains?", modelAnswer: "It only compared drivers with other people at one moment. People with larger hippocampi might have been more likely to succeed in becoming taxi drivers, so the difference could have been there before the training." },
          { type: "mc", prompt: "Which statement about The Knowledge is NOT true, according to the passage?", options: ["Candidates may use a map to plan routes during the exam", "It normally takes several years to prepare for", "It requires candidates to learn thousands of streets"], correctIndex: 0, explanation: "Candidates must plan the shortest route between any two places without a map. The other two statements match the passage." },
        ],
      },
    ],
    expert: [
      {
        id: "comp-expert-1",
        passage:
          "Economists have long been puzzled by a pattern that seems to defy simple logic: financial bubbles, in which the price of an asset rises far beyond any reasonable estimate of its actual value, followed by a sudden and often catastrophic crash. What makes bubbles particularly strange is that many of the investors caught up in them are not naive or uninformed — some of the most experienced professionals in the field have been swept up in bubbles they later admitted, in hindsight, they knew were irrational at the time. One explanation, drawn from behavioural economics, suggests that the issue isn't a failure of individual reasoning so much as a failure of collective incentive. An investor who suspects that prices are inflated beyond reason still faces immense pressure to keep buying, because prices might continue rising for months or years before any correction occurs. An investor who sells early, believing correctly that a crash is coming, risks looking foolish and losing significant profit if the bubble takes longer to burst than expected. In other words, it can be individually rational to participate in behaviour that is collectively irrational, simply because the cost of being early is treated the same as being wrong. This dynamic helps explain why warnings from economists rarely prevent bubbles from forming, even when those warnings turn out to be accurate. Being right too early carries almost the same reputational and financial cost as being wrong entirely. Some researchers argue that this asymmetry reveals something important not just about financial markets, but about how difficult it is for any group of people to act on a warning before a crisis becomes undeniable to everyone at once.",
        questions: [
          {
            type: "mc",
            prompt: "Which statement best supports the passage's claim that bubbles are not simply caused by naive investors?",
            options: [
              "Experienced professionals have joined bubbles they later admitted they knew were irrational",
              "Beginners are never involved in financial bubbles, only experienced professionals",
              "Experienced investors always sell before a crash begins and so lose no money",
            ],
            correctIndex: 0,
            explanation: "The passage says some of the most experienced professionals were swept up in bubbles they later admitted were irrational at the time. The other two options are never claimed.",
          },
          {
            type: "shortanswer",
            prompt: "What does the passage mean by saying it can be 'individually rational to participate in behaviour that is collectively irrational'?",
            modelAnswer:
              "Each individual investor might be making a reasonable choice for their own situation (keep buying because it's still profitable for now), even though the group's overall behaviour is driving prices to an unsustainable, irrational level.",
          },
          {
            type: "mc",
            prompt: "Why do warnings from economists often fail to prevent bubbles, according to the passage?",
            options: [
              "Being right too early carries nearly the same cost as being wrong, so there's little incentive to act on warnings early",
              "Economists' warnings are usually accurate but too complicated for most ordinary investors to understand properly",
              "Investors are legally prevented from acting on any public warnings about a market before a crash",
            ],
            correctIndex: 0,
            explanation: "The passage says being right too early carries almost the same cost as being wrong entirely.",
          },
          {
            type: "shortanswer",
            prompt: "Can you think of another real-life situation (outside of finance) where being 'right too early' might be treated almost the same as being wrong? Briefly explain.",
            modelAnswer:
              "Answers will vary — a strong response identifies a situation where acting on an early, correct warning carries real social or practical cost before consequences seem obvious to everyone else (e.g., warning a friend about a bad decision, an early safety warning that goes unheeded until an accident happens), and briefly explains the parallel to the passage's idea.",
          },
        ],
      },
      {
        id: "comp-expert-2",
        passage:
          "Beginning in the early 2010s, researchers across several fields of psychology grew increasingly alarmed by a pattern that came to be known as the \"replication crisis\": a substantial number of well-known, frequently cited psychological studies, when independently repeated by other research teams under the same conditions, failed to produce the same results as the original experiments. This was troubling not merely because individual findings turned out to be wrong, but because it raised uncomfortable questions about the incentive structures underlying scientific publishing itself. Journals had long shown a strong preference for publishing novel, surprising, statistically significant findings over studies that confirmed existing knowledge or reported null results, which meant researchers faced substantial career pressure to produce exactly the kind of striking results that, evidence later suggested, were disproportionately likely to be false positives or the product of subtle methodological flaws. In response, some journals began requiring researchers to publicly register their hypotheses and methods before collecting data, a practice designed to prevent researchers from unconsciously reshaping their analysis after seeing results that didn't match their expectations. Proponents of these reforms argue they represent a necessary, if painful, correction; skeptics counter that overcorrecting toward caution risks discouraging the kind of bold, exploratory research that leads to genuine scientific breakthroughs in the first place.",
        questions: [
          {
            type: "mc",
            prompt: "What is the \"replication crisis,\" according to the passage?",
            options: ["Many well-known studies failed to produce the same results when independently repeated", "Many well-known studies were found to contain data that researchers had invented", "Psychologists could not agree on which studies were important enough to repeat"],
            correctIndex: 0,
            explanation: "The passage says the original results could not be reproduced. It does not say the data was invented; the problem was publishing incentives and subtle flaws.",
          },
          {
            type: "shortanswer",
            prompt: "How did publishing incentives contribute to the replication crisis, according to the passage?",
            modelAnswer:
              "Journals preferred publishing surprising, statistically significant findings over confirmatory or null results, which pressured researchers to produce striking results — results that were later found more likely to be false positives or flawed.",
          },
          {
            type: "mc",
            prompt: "What is one criticism of pre-registering hypotheses and methods before research?",
            options: ["It might discourage bold, exploratory research that leads to breakthroughs", "It lets researchers change their analysis after seeing the results", "It makes journals publish more null results, which readers find dull"],
            correctIndex: 0,
            explanation: "Registering plans in advance is meant to PREVENT changing the analysis afterwards. The criticism is that too much caution may discourage bold, exploratory research.",
          },
        ],
      },
      {
        id: "comp-expert-3",
        passage:
          "In 1968, the ecologist Garrett Hardin popularised an idea he called \"the tragedy of the commons\". Imagine a shared pasture on which every herder may graze cattle. Each herder gains the full benefit of adding one more animal, while the cost, a slightly more overgrazed field, is shared among everyone. Rationally, every herder adds animals, and the pasture is ruined. Hardin concluded that shared resources were doomed unless they were privatised or controlled by a government. The idea has been used to explain overfishing, polluted air and even climate change. Yet the political economist Elinor Ostrom spent decades studying real communities that manage shared resources, from Swiss alpine meadows to Maine lobster fisheries, and found that many had done so for centuries without either privatisation or state control. Their success, she argued, depended on clear boundaries about who may use the resource, rules made with the users' participation, monitoring by the community and graduated penalties for those who cheat. In 2009, Ostrom became the first woman to win the Nobel Prize in Economics. Her work does not show that overuse never happens; it shows that the outcome depends on whether people can communicate, trust each other and enforce agreements. The tragedy is not inevitable. It is a possibility that depends on the rules.",
        questions: [
          { type: "mc", prompt: "Which weakness in Hardin's argument did Ostrom's research expose?", options: ["It assumed that the users could never agree on rules for sharing", "It assumed that shared pastures always produce more food than private ones", "It assumed that governments are always better at managing resources"], correctIndex: 0, explanation: "Ostrom found real communities that made and enforced their own rules. Hardin's logic left no room for that." },
          { type: "mc", prompt: "Which statement best describes the logic of the \"tragedy\"?", options: ["The benefit of adding an animal is private, but the cost is shared", "The herders do not realise that too many animals will harm the field", "The cost of adding an animal is paid entirely by the herder who adds it"], correctIndex: 0, explanation: "Each herder gets the whole benefit but pays only a small share of the cost, so each has a reason to add animals." },
          { type: "shortanswer", prompt: "The writer says overuse can happen, but the tragedy is \"not inevitable\". How do these two ideas fit together?", modelAnswer: "Overuse happens when people cannot communicate, trust each other or enforce agreements. But when communities have clear boundaries, shared rules, monitoring and penalties, they can protect the resource, so the result depends on the rules rather than being certain." },
          { type: "mc", prompt: "What is the writer's attitude to Hardin's idea?", options: ["It describes a real danger but is incomplete as a rule for every case", "It is completely wrong and should never have been published", "It is entirely accurate and needs no further testing by economists"], correctIndex: 0, explanation: "The writer credits the idea with explaining real problems, then shows through Ostrom that outcomes are not fixed. That is a balanced position." },
        ],
      },
      {
        id: "comp-expert-4",
        passage:
          "During the Second World War, the US military wanted to reduce the number of bombers lost to enemy fire. According to the standard account, analysts studied the planes that came back and mapped where the bullet holes were: mostly on the wings, tail and body, and rarely around the engines. The obvious conclusion was to add armour where the damage was densest. The statistician Abraham Wald, who was working with a research group at Columbia University, disagreed. The data, he pointed out, came only from planes that had survived. A plane hit in the engine was less likely to make it home, so it never appeared in the sample. The areas that were free of holes on the returning planes were therefore the most vulnerable places, and those were the ones that needed armour. Wald's reasoning is now a textbook example of survivorship bias: drawing conclusions from those who \"made it\" while ignoring those who did not. The same error appears in everyday life. We hear about entrepreneurs who dropped out of university and became billionaires, but not about the far larger number who dropped out and failed, so we may overestimate the value of taking that risk. The lesson is not to distrust all data, but to ask what is missing from it and why.",
        questions: [
          { type: "mc", prompt: "Why did Wald say that armour should go where the returning planes had no holes?", options: ["Planes hit in those places probably never came home, so they were missing from the data", "Those areas were the heaviest parts of the plane and needed protection", "Enemy gunners mostly aimed at those areas, but their shots were missing"], correctIndex: 0, explanation: "The sample contained only survivors. Planes hit in the engines were less likely to return, so the unmarked areas showed where a hit was fatal." },
          { type: "mc", prompt: "What does the example of billionaire dropouts show?", options: ["Stories of success can hide the many people who tried the same thing and failed", "Leaving university early is always a wise decision for young people", "Most billionaires became rich because they left university early"], correctIndex: 0, explanation: "We hear about the few who succeeded and not about the larger number who failed, which can make the risk look safer than it is." },
          { type: "shortanswer", prompt: "What question does the writer suggest we should ask about any set of data, and why?", modelAnswer: "We should ask what is missing from the data and why. If the sample includes only the survivors or the successes, the conclusions we draw from it may be wrong." },
          { type: "mc", prompt: "What does \"a textbook example\" mean in this passage?", options: ["A clear and typical illustration of an idea", "An example that appears only in school textbooks", "An example that has been proved to be false"], correctIndex: 0, explanation: "The phrase means a perfect, typical case that is often used to teach the idea. It says nothing about being restricted to textbooks or being false." },
        ],
      },
      {
        id: "comp-expert-5",
        passage:
          "Popular imagination pictures the Library of Alexandria going up in a single great fire, taking the wisdom of the ancient world with it. The truth is less dramatic and more instructive. The library was founded in the third century BCE by the Ptolemies, the Greek rulers of Egypt, who wanted Alexandria to be the intellectual capital of the Mediterranean. Ships entering the harbour were reportedly searched, and any books found were copied, with the copies returned to the owners and the originals kept. Scholars there measured the size of the Earth and edited the texts of Homer. Fire did damage part of the collection in 48 BCE, when Julius Caesar's forces set fire to ships in the harbour and flames spread to warehouses containing books. But the library carried on, and there are references to scholars working there for centuries afterwards. Historians now think that the decline was gradual: funding fell as the rulers lost interest, scholars were driven out during periods of political turmoil, and later wars destroyed the district in which the main library stood. There was no single villain and no single date. This matters, because a dramatic story makes it easy to blame one event and to forget the quieter danger: that knowledge disappears when societies stop paying for people to look after it.",
        questions: [
          { type: "mc", prompt: "Why does the writer call the truth \"less dramatic and more instructive\"?", options: ["A slow decline teaches us something about neglect that a single fire does not", "The real story contains fewer facts than the popular story does", "The true story is too dull for anyone to want to read about it"], correctIndex: 0, explanation: "The writer says the gradual decline carries a warning: knowledge disappears when societies stop supporting it. That is the instructive part." },
          { type: "mc", prompt: "What can be inferred about the library after the fire of 48 BCE?", options: ["It continued to operate, since scholars were still working there later", "It was never rebuilt, and its collection was lost forever", "It was moved to another city by the Ptolemies straight away"], correctIndex: 0, explanation: "The passage says the library carried on and scholars worked there for centuries. The fire damaged only part of the collection." },
          { type: "shortanswer", prompt: "What is the \"quieter danger\" that the writer mentions, and why is it easy to forget?", modelAnswer: "It is that knowledge can vanish slowly when societies stop paying for people to look after it. It is easy to forget because a dramatic single event, like a fire, gives us someone or something to blame." },
          { type: "mc", prompt: "Why does the writer mention that ships in the harbour were searched for books?", options: ["To show how determined the Ptolemies were to build a great collection", "To suggest that the library was mostly filled with stolen goods", "To explain why Julius Caesar's forces attacked the harbour in 48 BCE"], correctIndex: 0, explanation: "Searching ships and copying every book shows how much effort the rulers put into the collection. It is not an explanation for Caesar's fire." },
        ],
      },
      {
        id: "comp-expert-6",
        passage:
          "In 2003, two researchers compared organ donor registration across European countries and found a startling pattern. In Denmark and Germany, where citizens must actively sign up to be donors, consent rates were low: about 4% in Denmark and 12% in Germany. In Austria and France, where people are counted as donors unless they choose to opt out, nearly everyone, over 98%, was registered. The difference could hardly be explained by culture, since neighbouring countries with similar attitudes had very different figures. Instead, it showed the power of the default option: because making a decision takes effort, most people stay with whatever has been set for them. This finding helped popularise the idea of \"nudging\", in which choices are arranged so that the easiest option is also the one that benefits people. But there are limits. High registration rates do not automatically produce more transplants: the number of actual donors depends on hospitals, trained staff and families' agreement, and Spain, which has a high donation rate, has invested heavily in a national coordination system. Critics also warn that nudges can be used to steer people towards choices that benefit someone else. The default is powerful, which is exactly why those who set it carry a responsibility.",
        questions: [
          { type: "mc", prompt: "Why does the writer say the difference \"could hardly be explained by culture\"?", options: ["Neighbouring countries with similar attitudes had very different rates", "The countries with the highest rates had the oldest traditions", "People in all of the countries said they disliked organ donation"], correctIndex: 0, explanation: "If culture were the cause, similar neighbours would behave alike. The passage shows that they did not, so the default option is a better explanation." },
          { type: "mc", prompt: "What does \"the default option\" mean in this passage?", options: ["The choice that applies automatically unless a person changes it", "The choice that most people say they prefer when they are asked", "The choice that the government considers to be best for everyone"], correctIndex: 0, explanation: "In opt-out countries, people are registered unless they act. That automatic choice is the default." },
          { type: "shortanswer", prompt: "Why do high registration rates not guarantee more organ transplants?", modelAnswer: "Transplants also depend on hospitals, trained staff and families agreeing, so registering as a donor is only one step. Spain's high rate is linked to its investment in a national coordination system." },
          { type: "mc", prompt: "What does the last sentence suggest?", options: ["Those who set defaults must use their influence carefully and fairly", "People should never trust any choice that is set as a default", "Defaults are too weak to affect what people actually decide"], correctIndex: 0, explanation: "Because defaults are powerful, the people setting them have a responsibility. The passage shows that they strongly affect decisions." },
        ],
      },
      {
        id: "comp-expert-7",
        passage:
          "Visitors to Hong Kong are often struck by the glow of the skyline at night, but for astronomers and ecologists, the brightness is a problem. Light pollution is the excess or misdirected artificial light that spills upwards and outwards from streets, buildings and advertising. It makes the stars fade: in a big city, a person may see only a few dozen, compared with thousands from a dark countryside. Yet the effects go well beyond stargazing. Many migrating birds travel at night and steer partly by the stars and moon; bright buildings can attract and confuse them, and they may collide with windows or circle until they are exhausted. Fireflies use flashing lights to find mates, and street lighting can drown out their signals. Research also suggests that light at night can disturb human sleep by lowering the hormone melatonin. The good news is that light pollution is one of the easiest kinds of pollution to reduce, because it can simply be switched off. Shielding lamps so that they point downwards, using warmer-coloured bulbs and turning off unnecessary lights late at night can restore the darkness with little loss of safety. Some cities now organise \"lights out\" nights during bird migration.",
        questions: [
          { type: "mc", prompt: "Why does the writer say light pollution is one of the easiest kinds of pollution to reduce?", options: ["Changing or switching off lights removes it straight away", "It affects only a few animals and a small number of people", "It is caused by natural sources that soon fade by themselves"], correctIndex: 0, explanation: "Unlike many pollutants, light stops the moment the source is shielded or switched off. It is a human-made problem with a simple remedy." },
          { type: "mc", prompt: "Which harm from artificial light is NOT mentioned in the passage?", options: ["Damage to the eyesight of people who work at night", "Confusion of birds that migrate after dark", "Disturbed sleep because of lowered melatonin"], correctIndex: 0, explanation: "Migrating birds and melatonin are both mentioned. Nothing is said about people's eyesight." },
          { type: "shortanswer", prompt: "Explain how bright buildings can be harmful to migrating birds.", modelAnswer: "Migrating birds steer partly by the stars and moon, so bright lights can attract and confuse them. They may then collide with windows or circle the lights until they are exhausted." },
          { type: "mc", prompt: "Why does the writer begin with visitors' reaction to the skyline?", options: ["To contrast a view many people enjoy with the hidden costs of the glow", "To prove that Hong Kong has the most beautiful skyline in the world", "To suggest that tourists are mainly responsible for light pollution"], correctIndex: 0, explanation: "The opening sets up a contrast: what looks impressive to visitors is a problem for astronomers and ecologists." },
        ],
      },
      {
        id: "comp-expert-8",
        passage:
          "Every sports fan has seen it: a golfer with an easy putt to win a tournament who misses it, or a footballer who has scored a hundred penalties and then hits the post in a final. Psychologists call this \"choking under pressure\", and it seems to defy logic. If anything, extra motivation should improve performance. Research by the psychologist Sian Beilock offers one explanation. Skilled performers rely on automatic processes: a golfer's swing has been practised so often that it happens without conscious commands. Under pressure, a player may begin to monitor each movement closely, and this deliberate attention breaks up the smooth sequence. In one experiment, expert golfers who were asked to focus on their swing while putting performed worse than when they were distracted by a second task, whereas beginners did better when they concentrated on the mechanics. Some researchers propose a second explanation: pressure fills the mind with worry, leaving less mental capacity for the task. The two ideas need not conflict. Athletes use short, repeated routines before each shot, which keep attention on a rhythm, and they practise under simulated pressure so that the situation feels familiar. Choking is not a sign of weak character; it is what happens when a skill that depends on automatic control is interrupted by conscious thinking.",
        questions: [
          { type: "mc", prompt: "Why does choking \"seem to defy logic\"?", options: ["More motivation would be expected to help performance, not harm it", "Skilled players are expected to practise less than beginners do", "Golfers are usually more nervous than footballers in a final"], correctIndex: 0, explanation: "The writer says extra motivation should improve performance. The surprise is that high-stakes situations can make experts play worse." },
          { type: "mc", prompt: "Why did beginners do better when they concentrated on the mechanics?", options: ["Their skill was not yet automatic, so conscious attention helped", "They were more relaxed than the experts during the experiment", "They had no worries about the result of the putting task"], correctIndex: 0, explanation: "Experts perform automatically, so thinking about each movement disrupts them. Beginners have no automatic routine yet, so attention helps." },
          { type: "shortanswer", prompt: "How might a short, repeated routine before each shot help an athlete under pressure?", modelAnswer: "A routine keeps attention on a familiar rhythm rather than on each movement or on worries about the result, so the skill can run automatically and is not interrupted by conscious thinking." },
          { type: "mc", prompt: "How does the writer treat the two explanations for choking?", options: ["As ideas that may both be true and work together", "As opposing theories, of which only one can be correct", "As unproven ideas that athletes should ignore completely"], correctIndex: 0, explanation: "The writer says the two ideas \"need not conflict\", which means both could play a part in choking." },
        ],
      },
    ],
  };
})();
