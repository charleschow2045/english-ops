// Module 3: Story-telling — two tier-appropriate short stories, each with a
// writing-technique tip and 3 comprehension questions with explanations.
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  window.App.Content.STORYTELLING_ITEMS = {
    easy: [
      {
        id: "story-easy-1",
        title: "The Lost Kitten",
        passage:
          "Ben was walking home from school on a cold October afternoon when he heard a soft, shaky meow coming from somewhere nearby. He stopped and looked around carefully, following the sound until he spotted a small grey kitten curled up under a prickly bush, shivering in the wind. Its fur was matted with mud, and it looked like it hadn't eaten in days. Ben knew he couldn't just walk away, so he gently scooped the kitten into his jacket to keep it warm and carried it the rest of the way home. That night, he gave it a soft blanket, a bowl of warm milk, and a quiet corner of his room to rest in. The next morning, Ben and his mom made colorful posters with a photo of the kitten and put them up around the neighborhood. Two days later, an elderly woman knocked on their door, tears in her eyes — it was her kitten, Whiskers, who had wandered off during a thunderstorm nearly a week earlier. She hugged Ben tightly and thanked him again and again for taking such good care of her beloved pet.",
        tipTitle: "🎬 Writing Trick: The Ordinary Moment",
        tip: "Great stories often start with a character doing something ordinary — like walking home from school — then something unexpected happens! Try starting your own story the same way.",
        questions: [
          {
            type: "mc",
            prompt: "What was the weather like when Ben found the kitten?",
            options: ["Cold and windy", "Sunny and warm", "Snowing heavily"],
            correctIndex: 0,
            explanation: "The story says it was a cold October afternoon and the kitten was shivering in the wind.",
          },
          {
            type: "mc",
            prompt: "What did Ben and his mom do to find the kitten's owner?",
            options: ["Made posters and put them up around the neighborhood", "Took the kitten to a shelter", "Kept the kitten a secret"],
            correctIndex: 0,
            explanation: "The passage says they made colorful posters and put them up around the neighborhood.",
          },
          {
            type: "mc",
            prompt: "How long had Whiskers been missing before Ben found her?",
            options: ["Almost a week", "One day", "A whole month"],
            correctIndex: 0,
            explanation: "The owner says Whiskers wandered off during a thunderstorm nearly a week earlier.",
          },
        ],
      },
      {
        id: "story-easy-2",
        title: "The Class Pet Election",
        passage:
          "Every September, Room 4B held a class vote to decide which pet drawing would become that year's official class mascot, painted on a banner outside their door. This year, the two designs left in the final round were Maddie's fluffy orange fox and Carlos's spotted gecko wearing tiny sunglasses. Maddie was sure she would win — her fox had big cute eyes and everyone always said foxes were their favorite animal. But when the votes were counted, Carlos's gecko won by three votes. Maddie felt her stomach drop with disappointment, and for a moment she wanted to leave the room. Instead, she took a deep breath, walked over to Carlos, and told him his gecko really did look cool with its sunglasses. Carlos, surprised and grateful, asked if she'd help him paint the banner together, since she was the best artist in class. By the end of the week, the two of them had painted a huge, colorful gecko banner side by side, and Maddie realized that being a good sport had turned a disappointing afternoon into a new friendship.",
        tipTitle: "🤝 Writing Trick: Character Growth",
        tip: "The most memorable characters change a little by the end of a story. Maddie starts out disappointed, but she chooses kindness — and that choice is what makes the story satisfying.",
        questions: [
          {
            type: "mc",
            prompt: "What were the two final pet designs?",
            options: ["A fox and a gecko", "A dog and a cat", "A bird and a fish"],
            correctIndex: 0,
            explanation: "The story names Maddie's fox and Carlos's gecko as the two final designs.",
          },
          {
            type: "mc",
            prompt: "How did Maddie feel when she lost the vote?",
            options: ["Disappointed at first, but she handled it well", "Extremely angry", "She didn't care at all"],
            correctIndex: 0,
            explanation: "The story says she felt her stomach drop with disappointment, then chose to be kind anyway.",
          },
          {
            type: "mc",
            prompt: "What did Maddie and Carlos do together at the end?",
            options: ["Painted the banner together", "Had another vote", "Stopped being friends"],
            correctIndex: 0,
            explanation: "Carlos asked Maddie to help paint the banner, and they finished it together by the end of the week.",
          },
        ],
      },
    ],
    medium: [
      {
        id: "story-medium-1",
        title: "The Science Fair Surprise",
        passage:
          "Aiden had spent three long weeks building a model volcano for the school science fair, carefully layering papier-mâché over a plastic bottle and painting it to look like real rock. But on the night before the fair, disaster struck: while testing the eruption one last time, his baking soda-and-vinegar mixture foamed up far more violently than expected and spilled across his entire poster, smearing the labels he'd spent hours writing. For a moment, Aiden just stared at the mess, feeling like all his work had been wasted. Instead of giving up, though, he called his older sister into his room, and the two of them stayed up past midnight redesigning the poster from scratch, this time using laminated labels that wouldn't be ruined by a little foam. The next morning, tired but strangely proud of himself, Aiden carried his newly rebuilt project to school and set it up at his table. When the judges came by, his volcano erupted perfectly, and he explained calmly how he'd solved the poster problem the night before. He ended up winning second place overall, and the judges specifically praised him for staying calm and creative under pressure — a comment that meant more to Aiden than the ribbon itself.",
        tipTitle: "⚡ Writing Trick: Give Your Character a Problem",
        tip: "A good story needs a problem to solve. Aiden's problem (his ruined poster, the night before the deadline) is exactly what made us want to keep reading to find out what happened next.",
        questions: [
          {
            type: "mc",
            prompt: "What went wrong the night before the fair?",
            options: ["His eruption mixture spilled and ruined his poster", "He forgot to bring his project", "His volcano broke completely"],
            correctIndex: 0,
            explanation: "The passage says his mixture foamed up violently and spilled across his poster.",
          },
          {
            type: "mc",
            prompt: "Who helped Aiden fix the problem?",
            options: ["His older sister", "His teacher", "A classmate"],
            correctIndex: 0,
            explanation: "Aiden called his older sister in, and they redesigned the poster together.",
          },
          {
            type: "mc",
            prompt: "What did the judges specifically praise Aiden for?",
            options: ["Staying calm and creative under pressure", "Having the biggest volcano", "Working alone"],
            correctIndex: 0,
            explanation: "The passage says the judges praised him for staying calm and creative under pressure.",
          },
        ],
      },
      {
        id: "story-medium-2",
        title: "The Substitute Coach",
        passage:
          "When Coach Diaz broke his ankle two weeks before the championship game, the soccer team's parents were told a substitute coach would be stepping in — someone named Coach Reyes, who none of the players had ever met. On the first day of practice, the team was surprised to see that Coach Reyes was young, quiet, and didn't yell instructions the way Coach Diaz always had. Several players, including the team captain Jonah, worried the substitute wouldn't know what she was doing. But as practice went on, they noticed something: Coach Reyes asked each player individually what they thought they needed to improve, and then built drills specifically around those answers instead of running the same routine for everyone. Jonah, who struggled with passing under pressure, found himself running drills that felt tailor-made for his exact weakness. By the time the championship game arrived, the team felt more prepared than they ever had under Coach Diaz's louder, more general instructions. They won 3-1, and afterward, Jonah admitted to his teammates that he'd completely misjudged Coach Reyes on that very first, quiet day of practice.",
        tipTitle: "🔄 Writing Trick: Prove It, Don't Just Say It",
        tip: "Instead of just saying \"Coach Reyes was a good coach,\" the story shows specific things she did (asking each player what they needed) — letting readers reach that conclusion themselves.",
        questions: [
          {
            type: "mc",
            prompt: "Why were the players worried about Coach Reyes at first?",
            options: ["She was young, quiet, and unfamiliar to them", "She had never played soccer", "She refused to coach the team"],
            correctIndex: 0,
            explanation: "The passage says several players worried because she was young, quiet, and new to them.",
          },
          {
            type: "mc",
            prompt: "What made Coach Reyes's coaching style different?",
            options: ["She built drills around each player's individual needs", "She only cared about winning", "She let the team choose their own drills"],
            correctIndex: 0,
            explanation: "She asked each player what they needed to improve and built drills around those answers.",
          },
          {
            type: "mc",
            prompt: "What did Jonah realize by the end of the story?",
            options: ["He had misjudged Coach Reyes based on first impressions", "Coach Diaz was a better coach", "The team should have found a different coach"],
            correctIndex: 0,
            explanation: "Jonah admitted he'd completely misjudged Coach Reyes on that first, quiet day of practice.",
          },
        ],
      },
    ],
    hard: [
      {
        id: "story-hard-1",
        title: "The Storm on Bell Island",
        passage:
          "When the last ferry to Bell Island was cancelled without warning due to a sudden, fast-moving storm, twelve-year-old Priya and her grandfather found themselves stranded at the island's old, disused lighthouse for the night, along with a handful of other stranded travelers. At first, Priya was genuinely frightened — the wind howled against the thick stone walls, and the single working lightbulb flickered ominously every few minutes. Sensing her fear, her grandfather settled onto an old wooden bench and began telling her stories she'd never heard before: how, decades earlier, this same lighthouse had guided fishing boats safely home through storms far worse than this one, and how he himself had once worked as a young lighthouse keeper's assistant one summer, long before she was born. As the night wore on, Priya found herself more absorbed in her grandfather's stories than afraid of the storm outside. By morning, the wind had died down completely, and sunlight streamed through the salt-streaked windows. As they finally boarded the first ferry back, Priya realized, almost with surprise, that she had learned more about her grandfather's childhood during that one unplanned night than she had in years of ordinary Sunday visits.",
        tipTitle: "🌙 Writing Trick: Show, Don't Just Tell",
        tip: "Setting the scene helps readers feel like they're there. Words like \"howled\" and \"flickered ominously\" make you feel the danger right along with Priya, instead of just being told \"it was scary.\"",
        questions: [
          {
            type: "mc",
            prompt: "Why were Priya and her grandfather stranded?",
            options: ["A sudden storm cancelled the last ferry", "They chose to stay there on purpose", "The lighthouse was their planned destination"],
            correctIndex: 0,
            explanation: "The passage says a sudden storm caused the last ferry to be cancelled without warning.",
          },
          {
            type: "mc",
            prompt: "What did Priya's grandfather do to help her feel less afraid?",
            options: ["He told her stories about his own past at the lighthouse", "He called for a rescue boat", "He turned off the flickering light"],
            correctIndex: 0,
            explanation: "He told her stories about the lighthouse's history and his own time as a keeper's assistant.",
          },
          {
            type: "mc",
            prompt: "What surprised Priya by the end of the night?",
            options: ["How much she learned about her grandfather in just one night", "That the lighthouse was actually abandoned", "That her grandfather was afraid of storms too"],
            correctIndex: 0,
            explanation: "She realized she'd learned more about him that night than in years of ordinary visits.",
          },
        ],
      },
      {
        id: "story-hard-2",
        title: "The Group Project Disagreement",
        passage:
          "Halfway through their group history project on ancient trade routes, the four members of Ms. Okafor's third-period group hit a wall: Devon wanted to build a physical model of a trading ship, Ren wanted to write and perform a short skit, and the other two members, Aisha and Marcus, argued that neither idea addressed the actual research questions the assignment required. What started as a simple disagreement over format slowly turned into raised voices, with Devon accusing the others of not valuing creativity and Aisha accusing Devon of not caring about getting a good grade. Ms. Okafor, noticing the tension from across the room, didn't step in to solve the argument for them. Instead, she asked one simple question: \"What does each of your ideas actually teach the class about trade routes?\" The group sat in uncomfortable silence for a moment before Ren admitted that her skit idea, on its own, wouldn't really explain the geography or economics involved. Slowly, an idea began to form: what if the skit was performed using the model ship as a prop, with characters explaining the actual trade goods and routes as part of the story? By the end of class, the four of them were sketching plans together, the earlier argument almost forgotten, having discovered that their competing ideas weren't actually opposites at all.",
        tipTitle: "❓ Writing Trick: Let a Question Drive the Plot",
        tip: "Sometimes the turning point in a story isn't an action — it's a single well-timed question. Ms. Okafor's question is what unlocks the group's solution, instead of her just telling them what to do.",
        questions: [
          {
            type: "mc",
            prompt: "What caused the disagreement in the group?",
            options: ["Different opinions about the project's format", "A disagreement about who would present", "Ms. Okafor grading them unfairly"],
            correctIndex: 0,
            explanation: "Devon wanted a model ship, Ren wanted a skit, and the others disagreed with both — a format disagreement.",
          },
          {
            type: "mc",
            prompt: "What question did Ms. Okafor ask to help the group?",
            options: ["What does each idea actually teach about trade routes?", "Who is in charge of the group?", "Why can't you just agree?"],
            correctIndex: 0,
            explanation: "The passage quotes her question directly: \"What does each of your ideas actually teach the class about trade routes?\"",
          },
          {
            type: "mc",
            prompt: "How did the group ultimately resolve their disagreement?",
            options: ["They combined both ideas into one project", "One student took over the whole project", "They asked to be split into separate groups"],
            correctIndex: 0,
            explanation: "They decided to perform the skit using the model ship as a prop, combining both ideas.",
          },
        ],
      },
    ],
    expert: [
      {
        id: "story-expert-1",
        title: "The Unfinished Manuscript",
        passage:
          "For nearly a century, the attic of the old Whitfield house had sat completely untouched, its door painted shut and forgotten by generations of owners who had no reason to venture up the narrow, creaking stairs. That changed when a renovation crew, hired to modernize the property before its sale, pried open a warped floorboard and discovered a dusty, leather-bound manuscript hidden in the space beneath it. The pages, written in careful, looping handwriting that had faded to a pale brown, told the unfinished story of a young inventor named Elias Whitfield, who had reportedly vanished without a trace sometime in 1920, at the age of twenty-six. Local historians who later examined the manuscript were fascinated to find detailed sketches interspersed among the handwritten pages — diagrams of gears, coiled wires, and a strange cylindrical device that no one could quite identify. Based on the notes surrounding these sketches, several historians came to believe Elias had been working on some kind of invention far ahead of its time, though no prototype, patent, or physical evidence of the device itself was ever found in the years since. Adding to the mystery, the manuscript's final page ended mid-sentence, as though Elias had been interrupted while writing and had simply never returned to finish it. To this day, no one has been able to determine with certainty whether the pages describe a real, abandoned invention, an elaborate work of fiction, or something in between.",
        tipTitle: "🔍 Writing Trick: Leave a Little Mystery",
        tip: "Not every story needs to answer every question. Leaving something unsolved at the end — like whether the manuscript was fact or fiction — makes readers keep thinking about your story even after they finish it.",
        questions: [
          {
            type: "mc",
            prompt: "What did the renovation crew find hidden beneath a floorboard?",
            options: ["A dusty, leather-bound manuscript", "A working invention", "A collection of old photographs"],
            correctIndex: 0,
            explanation: "The crew pried open a floorboard and found a dusty, leather-bound manuscript underneath.",
          },
          {
            type: "mc",
            prompt: "What convinced historians that Elias was working on an unusual invention?",
            options: ["Detailed sketches of gears, wires, and an unidentified device", "A newspaper article about him", "A patent filed in his name"],
            correctIndex: 0,
            explanation: "The manuscript contained sketches of gears, wires, and a mysterious cylindrical device.",
          },
          {
            type: "mc",
            prompt: "What can you infer from the fact that the manuscript ends mid-sentence?",
            options: ["Elias was likely interrupted and never returned to finish writing", "Elias finished the manuscript on purpose", "The last pages were deliberately removed"],
            correctIndex: 0,
            explanation: "Ending mid-sentence suggests something interrupted him before he could return to finish it.",
          },
        ],
      },
      {
        id: "story-expert-2",
        title: "The Whistleblower's Dilemma",
        passage:
          "Maya had worked in the quality-control department of a mid-sized pharmaceutical packaging company for just under a year when she noticed something troubling in the routine inspection data: a batch of medication bottles from a rushed production run appeared to have slightly inconsistent seals, a defect that, under normal circumstances, would trigger an automatic recall before shipment. When she flagged the anomaly to her direct supervisor, she was told, somewhat dismissively, that the defect rate was \"within acceptable tolerance\" and that flagging it further would only delay a shipment the company had already promised a major client. Maya spent that entire weekend wrestling with the decision in front of her: escalate the issue above her supervisor's head, risking her still-new position and her relationship with a manager she otherwise respected, or trust that her supervisor's assessment, coming from someone with far more experience than her, was probably correct. What ultimately tipped her decision wasn't confidence in her own judgment, but a simple realization: if she was wrong to raise the concern, the cost was an uncomfortable conversation and possibly some professional embarrassment; if she stayed silent and turned out to be right, the cost could be measured in actual harm to people who trusted the medication inside those bottles. She emailed the plant's safety officer first thing Monday morning. The batch was pulled for additional testing, and while it ultimately passed, the safety officer later told Maya that her early flag had shaved nearly three full days off what would have otherwise been a much later, far more costly recall.",
        tipTitle: "⚖️ Writing Trick: The Weighed Decision",
        tip: "Instead of Maya just deciding instantly, the story shows her actually weighing both outcomes side by side. Letting readers see a character's reasoning makes their final choice feel earned, not random.",
        questions: [
          {
            type: "mc",
            prompt: "What problem did Maya notice in the inspection data?",
            options: ["Inconsistent seals in a batch of medication bottles", "A pricing error in the shipment", "A staffing shortage in her department"],
            correctIndex: 0,
            explanation: "She noticed a batch of bottles had slightly inconsistent seals, a defect that would normally trigger a recall.",
          },
          {
            type: "mc",
            prompt: "How did Maya's supervisor initially respond to her concern?",
            options: ["He dismissed it as within acceptable tolerance", "He immediately escalated it himself", "He fired her for raising it"],
            correctIndex: 0,
            explanation: "The supervisor dismissively said the defect rate was \"within acceptable tolerance.\"",
          },
          {
            type: "mc",
            prompt: "What reasoning ultimately convinced Maya to escalate the issue?",
            options: ["The potential cost of being wrong was much smaller than the potential cost of staying silent", "Her supervisor asked her to escalate it", "She wanted a promotion"],
            correctIndex: 0,
            explanation: "She weighed the small cost of being wrong against the much larger cost of staying silent if she was right.",
          },
        ],
      },
    ],
  };
})();
