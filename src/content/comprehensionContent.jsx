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
            options: ["He was shy about talking to new people, not uninterested in the garden", "He did not want to be paired with Mia", "He did not know anything about gardening"],
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
              "She first thought he knew nothing about plants, then discovered he had been on a farm",
              "She first liked working alone, then decided working in pairs was always better",
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
            options: ["Kindness you receive can inspire you to pass it on to others", "Starting at a new school is always difficult", "Making friends is easy if you are confident"],
            correctIndex: 0,
            explanation: "Priya helped Sofia because of her own bad first day, and Sofia then did the same for others. \"New schools are hard\" is true, but it is not the message the story builds toward.",
          },
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
            options: ["The arm had been closing so quickly that it knocked the blocks off balance before lifting them", "The blocks were too heavy to be gripped at a fast speed", "The gripper had been rebuilt so many times that it had worn out"],
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
              "Devon practised about twice as long as Marcus each week",
              "Marcus's log showed more focused drills than Devon's",
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
              "It was correct, because Devon practised far longer than Marcus",
              "It was correct, but hard work can sometimes make up for it",
            ],
            correctIndex: 0,
            explanation: "Marcus was \"stunned\" to find similar practice time, so his belief was an assumption. The passage never says talent is the main factor.",
          },
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
              "Whether schools should let students use phones at lunchtime",
              "Whether teachers should be allowed to collect phones during lessons",
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
            options: ["What it would have taken for one person to change the conversation's direction", "Who had written the very first unkind message", "Whether the classmate should forgive the group"],
            correctIndex: 0,
            explanation: "The counsellor did not look for who started it or ask for forgiveness. She asked what it would have taken for even one person to change the direction of the conversation.",
          },
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
              "Beginners are never involved in financial bubbles",
              "Experienced investors always sell before a crash begins",
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
              "Economists' warnings are usually accurate but too complicated for investors to understand",
              "Investors are legally prevented from acting on public warnings",
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
    ],
  };
})();
