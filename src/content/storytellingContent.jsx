// Module 3: Story-telling — two tier-appropriate short stories per tier, each
// with a writing-technique tip and 4 questions, one per core storytelling
// skill (`tag` shows as a small label above the question):
//   🧱 Structure        — beginning / middle / end, and the turning point
//   🧩 Problem-Solving  — the character's challenge and how it gets solved
//   🎭 Expression       — voice, face, and body when performing a line
//   👀 Engagement       — eye contact, pauses, sound effects, audience
// Easy/medium use multiple-choice for all four (with distractors that sound
// plausible or echo the passage); hard/expert use short-answer "how would
// you perform this?" prompts for Expression and Engagement, since there's
// no single right answer to those.
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  window.App.Content.STORYTELLING_ITEMS = {
    easy: [
      {
        id: "story-easy-1",
        title: "The Lost Kitten",
        passage:
          "Ben was walking home from school on a cold October afternoon when he heard a soft, shaky meow coming from somewhere nearby. He stopped and looked around carefully, following the sound until he spotted a small grey kitten curled up under a prickly bush, shivering in the wind. Its fur was matted with mud, and it looked like it hadn't eaten in days. Ben knew he couldn't just walk away, so he gently scooped the kitten into his jacket to keep it warm and carried it the rest of the way home. That night, he gave it a soft blanket, a bowl of warm milk, and a quiet corner of his room to rest in. The next morning, Ben and his mum made colourful posters with a photo of the kitten and put them up around the neighbourhood. Two days later, an elderly woman knocked on their door, tears in her eyes — it was her kitten, Whiskers, who had wandered off during a thunderstorm nearly a week earlier. She hugged Ben tightly and thanked him again and again for taking such good care of her beloved pet.",
        tipTitle: "🎬 Writing Trick: The Ordinary Moment",
        tip: "Great stories often start with a character doing something ordinary — like walking home from school — then something unexpected happens! Try starting your own story the same way.",
        questions: [
          {
            type: "mc",
            tag: "🧱 Structure",
            prompt: "Every story has a beginning, a middle, and an end. Which sentence belongs to the END of this story?",
            options: [
              "The elderly woman hugs Ben and thanks him for taking care of Whiskers",
              "Ben gives the kitten a soft blanket and a bowl of warm milk",
              "Ben hears a soft, shaky meow on his way home from school",
            ],
            correctIndex: 0,
            explanation: "The end is where the problem is finished: the owner is found. The blanket and milk are part of the middle, and the meow is the beginning.",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "Ben had a problem: he had found a kitten but didn't know who it belonged to. What clever thing did he do?",
            options: [
              "He made posters with a photo of the kitten and put them up around the neighbourhood",
              "He asked his teacher to make an announcement at school",
              "He waited outside the bush in case the owner came back",
            ],
            correctIndex: 0,
            explanation: "Ben and his mum made colourful posters with the kitten's photo and put them up around the neighbourhood. That is how the owner found them.",
          },
          {
            type: "mc",
            tag: "🎭 Expression",
            prompt: "The elderly woman knocks on the door \"tears in her eyes\". If you were telling this part out loud, how should you sound?",
            options: [
              "Soft and a little shaky, with a happy-but-teary face",
              "Loud and cheerful, like you are at a party",
              "Flat and bored, with no expression at all",
            ],
            correctIndex: 0,
            explanation: "She is relieved and emotional, so a soft, slightly shaky voice with a teary smile shows her feelings. A party voice would not match tears.",
          },
          {
            type: "mc",
            tag: "👀 Engagement",
            prompt: "You are telling this story to your class. Which sound effect would make the opening scene more exciting for your listeners?",
            options: [
              "A tiny, shaky \"meeeow\" from far away that slowly gets closer",
              "A loud crash of thunder",
              "A car horn honking again and again",
            ],
            correctIndex: 0,
            explanation: "The story begins with a soft, shaky meow. Thunder only appears later, when Whiskers wandered off, so it would not fit the opening.",
          },
        ],
      },
      {
        id: "story-easy-2",
        title: "The Class Pet Election",
        passage:
          "Every September, Room 4B held a class vote to decide which pet drawing would become that year's official class mascot, painted on a banner outside their door. This year, the two designs left in the final round were Maddie's fluffy orange fox and Carlos's spotted gecko wearing tiny sunglasses. Maddie was sure she would win — her fox had big cute eyes and everyone always said foxes were their favourite animal. But when the votes were counted, Carlos's gecko won by three votes. Maddie felt her stomach drop with disappointment, and for a moment she wanted to leave the room. Instead, she took a deep breath, walked over to Carlos, and told him his gecko really did look cool with its sunglasses. Carlos, surprised and grateful, asked if she'd help him paint the banner together, since she was the best artist in class. By the end of the week, the two of them had painted a huge, colourful gecko banner side by side, and Maddie realised that being a good sport had turned a disappointing afternoon into a new friendship.",
        tipTitle: "🤝 Writing Trick: Character Growth",
        tip: "The most memorable characters change a little by the end of a story. Maddie starts out disappointed, but she chooses kindness — and that choice is what makes the story satisfying.",
        questions: [
          {
            type: "mc",
            tag: "🧱 Structure",
            prompt: "The turning point is the moment a story changes direction. Which moment is the turning point here?",
            options: [
              "Maddie takes a deep breath and tells Carlos his gecko looks cool",
              "The votes are counted and Carlos's gecko wins",
              "The two of them finish painting the banner",
            ],
            correctIndex: 0,
            explanation: "Losing the vote is the problem, but the story turns when Maddie chooses kindness instead of leaving. Painting the banner is the ending that follows.",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "Maddie felt disappointed and wanted to leave the room. What smart choice did she make instead?",
            options: [
              "She walked over and told Carlos his gecko looked cool",
              "She asked the teacher to count the votes again",
              "She promised herself she would win next September",
            ],
            correctIndex: 0,
            explanation: "She dealt with her feelings by being a good sport. That choice is what led to the new friendship.",
          },
          {
            type: "mc",
            tag: "🎭 Expression",
            prompt: "Maddie tells Carlos his gecko \"really did look cool with its sunglasses\". How should you say her line to show she means it, even though she is still a little sad?",
            options: [
              "In a warm, steady voice with a small smile",
              "In a teasing voice, rolling your eyes",
              "In a loud shout so the whole class can hear",
            ],
            correctIndex: 0,
            explanation: "She is being sincere. A warm, steady voice and a small smile show real kindness, while teasing or shouting would change her meaning.",
          },
          {
            type: "mc",
            tag: "👀 Engagement",
            prompt: "You want listeners to feel Maddie's \"stomach drop\". Which storytelling move works best?",
            options: [
              "Slow down, drop your voice, and pause for a moment before the next sentence",
              "Read faster so you can get to the happy ending",
              "Look down at your notes and mumble the sentence",
            ],
            correctIndex: 0,
            explanation: "A slow, quiet pause gives listeners time to feel the disappointment. Speeding up or mumbling would lose that feeling.",
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
            tag: "🧱 Structure",
            prompt: "Which moment is the turning point, where the story stops going badly and starts going well?",
            options: [
              "Aiden decides to redesign the poster instead of giving up",
              "The baking soda mixture foams over and spills onto the poster",
              "The judges hand out the second-place ribbon",
            ],
            correctIndex: 0,
            explanation: "The spill is the crisis, but the story turns when Aiden chooses to keep going. The ribbon is the ending.",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "Aiden fixed his poster so the same accident couldn't ruin it again. What change did he make?",
            options: [
              "He used laminated labels that foam couldn't smear",
              "He moved the poster far away from the volcano",
              "He made the volcano's eruption smaller",
            ],
            correctIndex: 0,
            explanation: "The passage says he used laminated labels that \"wouldn't be ruined by a little foam\". The other choices sound sensible, but they are not what he did.",
          },
          {
            type: "mc",
            tag: "🎭 Expression",
            prompt: "The story says Aiden \"just stared at the mess\". Which way of acting this out shows his feeling best?",
            options: [
              "Freeze, let your shoulders drop, and speak in a quiet, flat voice",
              "Jump up, grin, and cheer with a big voice",
              "Stamp your feet and shout in anger",
            ],
            correctIndex: 0,
            explanation: "Aiden feels like his work has been wasted, so he is stunned and quiet, not cheerful or furious. Staring means he goes still.",
          },
          {
            type: "mc",
            tag: "👀 Engagement",
            prompt: "Before you reveal that the volcano \"erupted perfectly\" in front of the judges, how could you build suspense for your listeners?",
            options: [
              "Pause, lean in, look at the audience, then say the line with a rising \"whoosh\" sound",
              "Say the result at the very start so no one is surprised",
              "Read the line quickly without looking up",
            ],
            correctIndex: 0,
            explanation: "A pause, eye contact, and a sound effect make listeners wait for the reveal. Giving it away early or rushing it removes the suspense.",
          },
        ],
      },
      {
        id: "story-medium-2",
        title: "The Substitute Coach",
        passage:
          "When Coach Diaz broke his ankle two weeks before the championship game, the football team's parents were told a substitute coach would be stepping in — someone named Coach Reyes, who none of the players had ever met. On the first day of practice, the team was surprised to see that Coach Reyes was young, quiet, and didn't yell instructions the way Coach Diaz always had. Several players, including the team captain Jonah, worried the substitute wouldn't know what she was doing. But as practice went on, they noticed something: Coach Reyes asked each player individually what they thought they needed to improve, and then built drills specifically around those answers instead of running the same routine for everyone. Jonah, who struggled with passing under pressure, found himself running drills that felt tailor-made for his exact weakness. By the time the championship game arrived, the team felt more prepared than they ever had under Coach Diaz's louder, more general instructions. They won 3-1, and afterward, Jonah admitted to his teammates that he'd completely misjudged Coach Reyes on that very first, quiet day of practice.",
        tipTitle: "🔄 Writing Trick: Prove It, Don't Just Say It",
        tip: "Instead of just saying \"Coach Reyes was a good coach,\" the story shows specific things she did (asking each player what they needed) — letting readers reach that conclusion themselves.",
        questions: [
          {
            type: "mc",
            tag: "🧱 Structure",
            prompt: "The beginning shows a worry, the middle shows a change, and the end shows the result. Which sentence belongs to the MIDDLE?",
            options: [
              "Coach Reyes asks each player what they need to improve and builds drills around the answers",
              "Coach Diaz breaks his ankle two weeks before the championship",
              "The team wins 3-1 and Jonah admits he misjudged her",
            ],
            correctIndex: 0,
            explanation: "The middle is where things change: Coach Reyes proves herself through her drills. The ankle is the beginning, and the win is the end.",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "Coach Reyes had to win the team's trust in only two weeks. How did she do it?",
            options: [
              "She listened to each player and built drills around what they needed",
              "She copied Coach Diaz's loud instructions exactly",
              "She ran the same tough routine harder for everyone",
            ],
            correctIndex: 0,
            explanation: "She did the opposite of a one-size-fits-all routine. Asking each player what to improve showed she cared, and the drills proved she was skilled.",
          },
          {
            type: "mc",
            tag: "🎭 Expression",
            prompt: "Jonah admits he \"completely misjudged\" Coach Reyes. How would you say his line to show he is a little embarrassed but honest?",
            options: [
              "In a lower, slower voice, looking down briefly, with a half-smile and a shrug",
              "In a loud, proud voice with your arms crossed",
              "In a joking sing-song voice, as if it doesn't matter",
            ],
            correctIndex: 0,
            explanation: "Jonah is owning up to a mistake. A quiet voice, a glance down, and a half-smile show embarrassment and honesty together.",
          },
          {
            type: "mc",
            tag: "👀 Engagement",
            prompt: "You want your listeners to think about first impressions while you tell this story. What could you do?",
            options: [
              "Pause and ask them what they would have thought of a quiet new coach, looking around the room",
              "Tell them not to say anything until you have finished",
              "Skip the first practice so they don't have to think about it",
            ],
            correctIndex: 0,
            explanation: "A question plus eye contact pulls listeners into the story. That makes Jonah's change of mind feel personal to them.",
          },
        ],
      },
    ],
    hard: [
      {
        id: "story-hard-1",
        title: "The Storm on Bell Island",
        passage:
          "When the last ferry to Bell Island was cancelled without warning due to a sudden, fast-moving storm, twelve-year-old Priya and her grandfather found themselves stranded at the island's old, disused lighthouse for the night, along with a handful of other stranded travelers. At first, Priya was genuinely frightened — the wind howled against the thick stone walls, and the single working lightbulb flickered ominously every few minutes. Sensing her fear, her grandfather settled onto an old wooden bench and began telling her stories she'd never heard before: how, decades earlier, this same lighthouse had guided fishing boats safely home through storms far worse than this one, and how he himself had once worked as a young lighthouse keeper's assistant one summer, long before she was born. As the night wore on, Priya found herself more absorbed in her grandfather's stories than afraid of the storm outside. By morning, the wind had died down completely, and sunlight streamed through the salt-streaked windows. As they finally boarded the first ferry back, Priya realised, almost with surprise, that she had learned more about her grandfather's childhood during that one unplanned night than she had in years of ordinary Sunday visits.",
        tipTitle: "🌙 Writing Trick: Show, Don't Just Tell",
        tip: "Setting the scene helps readers feel like they're there. Words like \"howled\" and \"flickered ominously\" make you feel the danger right along with Priya, instead of just being told \"it was scary.\"",
        questions: [
          {
            type: "mc",
            tag: "🧱 Structure",
            prompt: "Which moment is the turning point that changes the night from frightening to meaningful?",
            options: [
              "Her grandfather sits on the bench and begins telling her stories",
              "The single lightbulb flickers ominously every few minutes",
              "Sunlight streams through the windows the next morning",
            ],
            correctIndex: 0,
            explanation: "The flickering light raises the tension, and the sunlight is the calm ending. The story turns when Priya's grandfather starts talking.",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "Priya's real problem was her fear, not the storm itself. How did her grandfather help solve it?",
            options: [
              "He gave her something more interesting than the storm to think about",
              "He showed her how thick and strong the lighthouse walls were",
              "He promised her the ferry would be back within the hour",
            ],
            correctIndex: 0,
            explanation: "He never argued with her fear. He shifted her attention with stories until she was \"more absorbed\" than afraid. The walls and the ferry are never used to comfort her.",
          },
          {
            type: "shortanswer",
            tag: "🎭 Expression",
            prompt: "Imagine you are telling this story aloud and reach the line \"the wind howled against the thick stone walls\". Describe how you would use your voice, face, and body to bring that line to life.",
            modelAnswer:
              "I would start in a low, rumbling voice and let the word \"howled\" stretch out and rise, as if the wind is growing. My shoulders would hunch and my eyes go wide, and I might cup a hand to my ear as if I can hear it outside. Then I would drop to a hushed voice for \"thick stone walls\" to show how solid the walls are, and how small Priya feels inside them.",
          },
          {
            type: "shortanswer",
            tag: "👀 Engagement",
            prompt: "Design ONE sound effect and ONE moment of eye contact that would make your listeners feel like they are inside the lighthouse with Priya. Say where you would use each and why.",
            modelAnswer:
              "I could make a soft, low whistling wind sound at the start, and let it fade when the grandfather begins his stories, so listeners feel the fear ease. For eye contact, I would look straight at one listener when the grandfather says his first story, as if I am the grandfather talking directly to Priya. Both choices pull the audience into the room and match the story's change from fear to comfort.",
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
            tag: "🧱 Structure",
            prompt: "Which moment is the turning point of the story?",
            options: [
              "Ms. Okafor asks what each idea actually teaches the class about trade routes",
              "Devon accuses the others of not valuing creativity",
              "The four students start sketching their plans together",
            ],
            correctIndex: 0,
            explanation: "Devon's accusation is the peak of the argument, and the sketching is the ending. The story only changes direction once Ms. Okafor's question makes the group think.",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "What made the group's final plan clever, rather than just a compromise where everyone gave something up?",
            options: [
              "The skit used the model ship as a prop, so both ideas worked together and still met the research goals",
              "Each student did their favourite idea separately and they presented them one after another",
              "They dropped both ideas and wrote a plain report instead",
            ],
            correctIndex: 0,
            explanation: "A compromise splits the difference. This solution combined the ideas so the ship and the skit both helped explain the trade routes. The other options avoid the real problem.",
          },
          {
            type: "shortanswer",
            tag: "🎭 Expression",
            prompt: "Devon accuses the others of not valuing creativity, and Aisha accuses Devon of not caring about grades. How would you perform this argument out loud so listeners can always tell which character is speaking?",
            modelAnswer:
              "I would give each character a different voice and posture. Devon could be loud and quick, with a wide gesture, as if defending his ship. Aisha could be sharper and firmer, with folded arms and a lifted chin. I would turn my body slightly toward each one as they speak, and let my voice get tighter as the argument rises, so it is clear who is talking and how heated it is getting.",
          },
          {
            type: "shortanswer",
            tag: "👀 Engagement",
            prompt: "Ms. Okafor's question is the turning point. How could you use a pause, eye contact, or a change in volume to make your listeners feel that moment?",
            modelAnswer:
              "I would let the argument get louder and faster, then suddenly go quiet before her question. After a full one-second pause I would look straight at the audience and ask it slowly and calmly, as if I am asking them. Then I would hold the silence for a moment, because the group sat in \"uncomfortable silence\" too. The contrast between noisy and quiet shows that everything has changed.",
          },
        ],
      },
    ],
    expert: [
      {
        id: "story-expert-1",
        title: "The Unfinished Manuscript",
        passage:
          "For nearly a century, the attic of the old Whitfield house had sat completely untouched, its door painted shut and forgotten by generations of owners who had no reason to venture up the narrow, creaking stairs. That changed when a renovation crew, hired to modernise the property before its sale, pried open a warped floorboard and discovered a dusty, leather-bound manuscript hidden in the space beneath it. The pages, written in careful, looping handwriting that had faded to a pale brown, told the unfinished story of a young inventor named Elias Whitfield, who had reportedly vanished without a trace sometime in 1920, at the age of twenty-six. Local historians who later examined the manuscript were fascinated to find detailed sketches interspersed among the handwritten pages — diagrams of gears, coiled wires, and a strange cylindrical device that no one could quite identify. Based on the notes surrounding these sketches, several historians came to believe Elias had been working on some kind of invention far ahead of its time, though no prototype, patent, or physical evidence of the device itself was ever found in the years since. Adding to the mystery, the manuscript's final page ended mid-sentence, as though Elias had been interrupted while writing and had simply never returned to finish it. To this day, no one has been able to determine with certainty whether the pages describe a real, abandoned invention, an elaborate work of fiction, or something in between.",
        tipTitle: "🔍 Writing Trick: Leave a Little Mystery",
        tip: "Not every story needs to answer every question. Leaving something unsolved at the end — like whether the manuscript was fact or fiction — makes readers keep thinking about your story even after they finish it.",
        questions: [
          {
            type: "mc",
            tag: "🧱 Structure",
            prompt: "Unlike most stories, this one does not fully resolve. Which description of its structure is the most accurate?",
            options: [
              "It has a clear beginning (the discovery) and middle (the sketches), but deliberately leaves the ending open",
              "It has no beginning, because the manuscript is already old when the story starts",
              "It ends by confirming that Elias's invention was real and that it worked",
            ],
            correctIndex: 0,
            explanation: "The discovery and the sketches build the story, but the passage ends on \"no one has been able to determine with certainty\". Nothing confirms the invention worked.",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "Historians wanted to know whether the manuscript was fact or fiction. According to the passage, how did they try to work it out?",
            options: [
              "They studied the sketches and surrounding notes to infer what he was building, while admitting there was no physical proof",
              "They built the device from the sketches and tested that it worked",
              "They matched Elias's handwriting to a patent he had filed",
            ],
            correctIndex: 0,
            explanation: "The historians inferred from the notes and drawings. No prototype and no patent were ever found, so building it or matching a patent is not what happened.",
          },
          {
            type: "shortanswer",
            tag: "🎭 Expression",
            prompt: "The manuscript's final page \"ended mid-sentence\". How would you perform that moment out loud so listeners feel the sudden interruption?",
            modelAnswer:
              "I would slow down as I approach the last sentence, then stop in the middle of a word with no ending sound, as if the voice itself has been cut off. I would freeze my face and hands and hold the silence for two or three seconds. Then I would speak the next line very softly, so the pause itself becomes the effect.",
          },
          {
            type: "shortanswer",
            tag: "👀 Engagement",
            prompt: "You are reading this story to a small group in a dim room. Describe ONE sound effect and ONE way of involving the audience that would build the mystery, and explain why each would work.",
            modelAnswer:
              "For sound, I could make a slow creak of the attic stairs at the start, to pull listeners up into the attic. To involve the audience, I could ask, \"What would you have done if you found this?\" and look around the room while I wait. The creak builds atmosphere, and the question gets listeners to form their own theory about the manuscript, which is exactly the mystery the story leaves open.",
          },
        ],
      },
      {
        id: "story-expert-2",
        title: "The Whistleblower's Dilemma",
        passage:
          "Maya had worked in the quality-control department of a mid-sized pharmaceutical packaging company for just under a year when she noticed something troubling in the routine inspection data: a batch of medication bottles from a rushed production run appeared to have slightly inconsistent seals, a defect that, under normal circumstances, would trigger an automatic recall before shipment. When she flagged the anomaly to her direct supervisor, she was told, somewhat dismissively, that the defect rate was \"within acceptable tolerance\" and that flagging it further would only delay a shipment the company had already promised a major client. Maya spent that entire weekend wrestling with the decision in front of her: escalate the issue above her supervisor's head, risking her still-new position and her relationship with a manager she otherwise respected, or trust that her supervisor's assessment, coming from someone with far more experience than her, was probably correct. What ultimately tipped her decision wasn't confidence in her own judgement, but a simple realisation: if she was wrong to raise the concern, the cost was an uncomfortable conversation and possibly some professional embarrassment; if she stayed silent and turned out to be right, the cost could be measured in actual harm to people who trusted the medication inside those bottles. She emailed the plant's safety officer first thing Monday morning. The batch was pulled for additional testing, and while it ultimately passed, the safety officer later told Maya that her early flag had shaved nearly three full days off what would have otherwise been a much later, far more costly recall.",
        tipTitle: "⚖️ Writing Trick: The Weighed Decision",
        tip: "Instead of Maya just deciding instantly, the story shows her actually weighing both outcomes side by side. Letting readers see a character's reasoning makes their final choice feel earned, not random.",
        questions: [
          {
            type: "mc",
            tag: "🧱 Structure",
            prompt: "Which part of the story is its climax, the moment the main character makes the key decision?",
            options: [
              "Maya weighs the two costs over the weekend and decides to email the safety officer",
              "Her supervisor dismisses the defect as within acceptable tolerance",
              "The batch is pulled for testing and turns out to pass",
            ],
            correctIndex: 0,
            explanation: "The supervisor's reply raises the tension and the testing is the aftermath. The climax is Maya's decision to act, made after she weighs the costs.",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "Maya's problem was a real dilemma with no perfect answer. What made her way of handling it sound rather than reckless?",
            options: [
              "She compared the cost of being wrong with the cost of staying silent, then raised it through the plant's safety officer",
              "She went straight to the client and warned them about the defect",
              "She refused to work on the batch until it was recalled",
            ],
            correctIndex: 0,
            explanation: "She reasoned about the costs and used the proper channel. Going to the client or refusing to work are dramatic moves that the story never describes.",
          },
          {
            type: "shortanswer",
            tag: "🎭 Expression",
            prompt: "Her supervisor says the defect is \"within acceptable tolerance\". How would you use your voice and body to make him sound dismissive, and how would you make Maya's worry sound different?",
            modelAnswer:
              "For the supervisor I would use a flat, relaxed voice with a little wave of the hand and barely any eye contact, as if the matter is already closed. For Maya I would speak a little quicker and higher with a small pause before each word, my brow slightly furrowed and my hands tense. The contrast between his ease and her tension shows who takes the problem seriously.",
          },
          {
            type: "shortanswer",
            tag: "👀 Engagement",
            prompt: "The most important part of the story is Maya weighing the two costs. How could you use pacing, a pause, and eye contact so that listeners weigh the decision with her?",
            modelAnswer:
              "I would slow right down and say the two costs separately, holding up one hand for each, like scales. Between them I would pause and look at the audience, letting them feel how heavy each side is. Then I would say the final sentence quietly and steadily, so listeners arrive at Maya's decision at the same time she does.",
          },
        ],
      },
    ],
  };
})();
