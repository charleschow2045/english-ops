// Module 5: Comprehension — standalone ~300-word passages, mixing multiple-choice
// with "shortanswer" self-check questions (type an answer, then compare against
// a model answer — no external grading, focused on inference and "why").
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  window.App.Content.COMPREHENSION_ITEMS = {
    easy: [
      {
        id: "comp-easy-1",
        passage:
          "Ever since the school started its garden club, Mia had begged her parents to let her join. Finally, in September, she got her chance. On the first afternoon, Mr. Alvarez, the club leader, walked the students past rows of empty wooden boxes filled with dark soil. He explained that each pair of students would choose one box to plant and take care of for the rest of the year. Mia was paired with a quiet boy named Theo, who she barely knew from her class. At first, she wasn't sure they would work well together — Theo barely spoke, and Mia liked to talk through every decision out loud. But when it came time to choose what to plant, Theo surprised her. He pulled out a small notebook filled with neat drawings of vegetables and told her he had been planning this for weeks. He wanted to grow carrots, tomatoes, and sunflowers, because his grandmother used to grow the exact same things in her backyard before she moved away. Mia realized Theo wasn't shy about the garden at all — he was just shy about talking to new people. Once they started working with their hands in the soil, he talked more and more, telling her stories about his grandmother's garden. By October, their box was full of small green sprouts, and by November, the first tiny tomatoes had begun to appear. Mia and Theo had become the kind of friends who didn't need to fill every silence with talking — they were comfortable just kneeling in the dirt together, checking on their plants.",
        questions: [
          {
            type: "mc",
            prompt: "Why did Theo know exactly what to plant?",
            options: ["His grandmother used to grow the same things in her garden", "He read about it online", "His teacher told him what to plant"],
            correctIndex: 0,
          },
          {
            type: "shortanswer",
            prompt: "Why do you think Mia and Theo became better friends by working in the garden together?",
            modelAnswer:
              "Working with their hands gave them something to focus on together, so Theo felt comfortable opening up and talking about his grandmother, even though he was shy about talking to new people at first.",
          },
          {
            type: "mc",
            prompt: "What best describes how Mia and Theo's friendship changed by the end of the passage?",
            options: [
              "They became comfortable being quiet together, without needing to talk all the time",
              "They stopped being friends",
              "They started arguing about the garden",
            ],
            correctIndex: 0,
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
            prompt: "What was actually causing the robot's arm to drop the blocks?",
            options: ["The gripping speed in the code, not the mechanical design", "A broken motor", "The wrong type of blocks"],
            correctIndex: 0,
          },
          {
            type: "shortanswer",
            prompt: "Why did Diego initially not consider that the code might be the problem?",
            modelAnswer:
              "He had spent so much time focused on the mechanical parts (the gripper) that he assumed the problem had to be mechanical too, rather than thinking about the software.",
          },
          {
            type: "mc",
            prompt: "What lesson did Diego learn from this experience?",
            options: [
              "Sometimes solving a problem means stepping back and asking a different question",
              "The strongest gripper always wins competitions",
              "Aaliyah is smarter than him",
            ],
            correctIndex: 0,
          },
          {
            type: "shortanswer",
            prompt: "What does Diego's decision to credit Aaliyah in front of the judges tell you about him?",
            modelAnswer:
              "It shows he is honest and generous — he cared more about giving credit where it was due than taking all the credit for the team's success himself.",
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
            prompt: "According to the passage, what was Kai's main concern about a full phone ban?",
            options: [
              "It would punish responsible students who relied on phones for legitimate reasons",
              "He personally didn't want to give up his phone",
              "He thought teachers didn't need help managing the classroom",
            ],
            correctIndex: 0,
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
              "Whether teachers like using phones in class",
              "How much phones cost",
            ],
            correctIndex: 0,
          },
          {
            type: "shortanswer",
            prompt: "Do you agree with the council's compromise? Explain one reason why it might work well, or one reason why it might not.",
            modelAnswer:
              "There's no single right answer — a strong response gives one clear reason, such as: it balances access needs with focus (a reason it might work), or that phones being merely 'off in a locker' doesn't address why students feel the urge to check them constantly (a reason it might not fully solve the problem).",
          },
        ],
      },
    ],
    expert: [
      {
        id: "comp-expert-1",
        passage:
          "Economists have long been puzzled by a pattern that seems to defy simple logic: financial bubbles, in which the price of an asset rises far beyond any reasonable estimate of its actual value, followed by a sudden and often catastrophic crash. What makes bubbles particularly strange is that many of the investors caught up in them are not naive or uninformed — some of the most experienced professionals in the field have been swept up in bubbles they later admitted, in hindsight, they knew were irrational at the time. One explanation, drawn from behavioral economics, suggests that the issue isn't a failure of individual reasoning so much as a failure of collective incentive. An investor who suspects that prices are inflated beyond reason still faces immense pressure to keep buying, because prices might continue rising for months or years before any correction occurs. An investor who sells early, believing correctly that a crash is coming, risks looking foolish and losing significant profit if the bubble takes longer to burst than expected. In other words, it can be individually rational to participate in behavior that is collectively irrational, simply because the cost of being early is treated the same as being wrong. This dynamic helps explain why warnings from economists rarely prevent bubbles from forming, even when those warnings turn out to be accurate. Being right too early carries almost the same reputational and financial cost as being wrong entirely. Some researchers argue that this asymmetry reveals something important not just about financial markets, but about how difficult it is for any group of people to act on a warning before a crisis becomes undeniable to everyone at once.",
        questions: [
          {
            type: "mc",
            prompt: "According to the passage, why might an investor keep buying even if they suspect prices are too high?",
            options: [
              "Prices might keep rising for a while, and selling early carries its own risks and costs",
              "They genuinely believe the asset is fairly priced",
              "They are required to by law",
            ],
            correctIndex: 0,
          },
          {
            type: "shortanswer",
            prompt: "What does the passage mean by saying it can be 'individually rational to participate in behavior that is collectively irrational'?",
            modelAnswer:
              "Each individual investor might be making a reasonable choice for their own situation (keep buying because it's still profitable for now), even though the group's overall behavior is driving prices to an unsustainable, irrational level.",
          },
          {
            type: "mc",
            prompt: "Why do warnings from economists often fail to prevent bubbles, according to the passage?",
            options: [
              "Being right too early carries nearly the same cost as being wrong, so there's little incentive to act on warnings early",
              "Economists are usually wrong about bubbles",
              "Nobody reads economic warnings",
            ],
            correctIndex: 0,
          },
          {
            type: "shortanswer",
            prompt: "Can you think of another real-life situation (outside of finance) where being 'right too early' might be treated almost the same as being wrong? Briefly explain.",
            modelAnswer:
              "Answers will vary — a strong response identifies a situation where acting on an early, correct warning carries real social or practical cost before consequences seem obvious to everyone else (e.g., warning a friend about a bad decision, an early safety warning that goes unheeded until an accident happens), and briefly explains the parallel to the passage's idea.",
          },
        ],
      },
    ],
  };
})();
