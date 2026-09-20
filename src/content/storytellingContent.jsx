// Module 3: Story-telling — six tier-appropriate short stories per tier, each
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
              "He asked his teacher to make an announcement about the kitten at school",
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
              "A loud crash of thunder that makes all the listeners jump",
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
              "The two of them finish painting the huge gecko banner together",
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
              "Look down at your notes and mumble the sentence without any feeling",
            ],
            correctIndex: 0,
            explanation: "A slow, quiet pause gives listeners time to feel the disappointment. Speeding up or mumbling would lose that feeling.",
          },
        ],
      },
      {
        id: "story-easy-3",
        title: "The Rainy Day Picnic",
        passage:
          "Lily had been looking forward to the picnic in the park for a whole week. She had packed sandwiches, sliced strawberries and a bottle of orange juice, and her little brother Toby had brought his football. But on Saturday morning, grey clouds covered the sky, and by ten o'clock the rain was drumming against the window. Lily's face fell. \"Our picnic is ruined,\" she sighed. Dad looked at her, then at the living room, and smiled. \"Who says a picnic needs a park?\" Lily thought for a moment. Then she pulled the big red blanket off the sofa and spread it on the floor. Toby fetched the pillows, and together they built a fort out of chairs and bedsheets. Inside the fort, they switched on a small torch, opened the sandwiches and listened as the rain tapped on the window. \"It sounds like tiny drums,\" Toby whispered. By the time the strawberries were finished, Lily had decided that this was the best picnic they had ever had, because nobody had to worry about ants.",
        tipTitle: "🌦️ Writing Trick: A Problem Can Become a Gift",
        tip: "The rain looks like the problem at first, but it ends up making the day special. A twist where the problem turns into something good makes a story feel warm and surprising.",
        questions: [
          {
            type: "mc",
            tag: "🧱 Structure",
            prompt: "The turning point is the moment a story changes direction. Which moment is the turning point here?",
            options: [
              "Lily has an idea and spreads the red blanket out on the floor",
              "Grey clouds cover the sky on Saturday morning",
              "Lily decides it was the best picnic they had ever had",
            ],
            correctIndex: 0,
            explanation: "The rain is the problem, but the story turns when Lily has an idea and acts on it. Saying it was the best picnic is the ending.",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "The rain cancelled the picnic in the park. What did Lily do about it?",
            options: [
              "She moved the picnic indoors and built a fort to eat in",
              "She waited by the window until the rain stopped again",
              "She asked Dad to drive them to a café for lunch instead",
            ],
            correctIndex: 0,
            explanation: "Lily changed the place, not the plan. She and Toby built a fort in the living room and had the picnic there.",
          },
          {
            type: "mc",
            tag: "🎭 Expression",
            prompt: "Lily's face fell and she sighed, \"Our picnic is ruined.\" How should you say her line?",
            options: [
              "In a low, sad voice with a long sigh and drooping shoulders",
              "In a loud, excited voice with a big jump into the air",
              "In a whisper, as if it were a secret nobody should hear",
            ],
            correctIndex: 0,
            explanation: "Lily is disappointed, so a low, sad voice and a sigh show her feelings. Excitement or whispering would not match \"her face fell\".",
          },
          {
            type: "mc",
            tag: "👀 Engagement",
            prompt: "You want your listeners to hear the rain. Which sound effect works best?",
            options: [
              "Tap your fingers softly on the table, then a little faster as the rain grows heavier",
              "Clap your hands loudly three times, then wait quietly until the scene is over",
              "Stay perfectly still and silent for the whole of the scene",
            ],
            correctIndex: 0,
            explanation: "Soft tapping copies the sound of rain on a window, and a change in speed makes it feel real. Loud claps or silence would not sound like rain.",
          },
        ],
      },
      {
        id: "story-easy-4",
        title: "The Kite That Would Not Fly",
        passage:
          "Hana had made a beautiful red kite with her grandpa, decorated with a golden dragon. At the beach on Sunday, she held the string, ran across the sand and let go. The kite rose for a moment, then dived into the ground. She tried again. And again. Each time it crashed. Hana sat down and hugged her knees. \"It's broken,\" she said. \"Maybe kites don't like me.\" Grandpa did not take the kite to mend it. Instead, he held up a wet finger. \"Which way is the wind coming from?\" Hana held up her own finger and felt one side go cold. \"From the sea!\" she said. \"Then turn your back to it,\" said Grandpa. Hana turned around, held the kite up high and let the wind catch it. This time the string pulled tight, and the golden dragon soared over the waves. \"It isn't broken,\" Hana laughed. \"I was facing the wrong way!\" She flew it until the sun went down.",
        tipTitle: "🔁 Writing Trick: Try, Fail, Try Again",
        tip: "Hana fails three times before she succeeds. Repeating the failure builds tension, so that the success feels big when it finally arrives.",
        questions: [
          {
            type: "mc",
            tag: "🧱 Structure",
            prompt: "Which moment is the turning point, where the story stops going badly and starts going well?",
            options: [
              "Grandpa asks Hana which way the wind is coming from",
              "Hana's kite dives into the sand for the third time",
              "Hana laughs and flies the kite until the sun goes down",
            ],
            correctIndex: 0,
            explanation: "The crashes are the problem and the flying at sunset is the ending. The story turns when Grandpa's question makes Hana think about the wind.",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "What was the real cause of the problem, and how was it solved?",
            options: [
              "Hana was facing the wrong way, so she turned her back to the wind",
              "The kite was too heavy, so Grandpa added a lighter tail to it",
              "The string was too short, so Hana looked for a longer one",
            ],
            correctIndex: 0,
            explanation: "The kite was never broken. Hana was facing the wrong way, and once she turned her back to the wind, it flew.",
          },
          {
            type: "mc",
            tag: "🎭 Expression",
            prompt: "Hana says, \"It's broken. Maybe kites don't like me.\" How should you say it?",
            options: [
              "In a flat, sad voice with a small shrug, looking down at the sand",
              "In an angry, shouting voice while throwing the kite on the ground",
              "In a cheerful, laughing voice, as if it were a good joke",
            ],
            correctIndex: 0,
            explanation: "Hana is discouraged, not angry or amused. A flat, sad voice and a shrug show that she is giving up.",
          },
          {
            type: "mc",
            tag: "👀 Engagement",
            prompt: "The kite crashes again and again. How can you help listeners feel each try?",
            options: [
              "Make a rising \"whoosh\" and a sad \"thud\" each time, so listeners can join in by the third crash",
              "Mention the crashes only once, quickly, so you can reach the happy ending sooner",
              "Describe all the crashes in a quiet, flat voice without any sound effects at all",
            ],
            correctIndex: 0,
            explanation: "A repeated sound pattern makes listeners feel the tries and lets them join in. Rushing or flattening the crashes loses the tension.",
          },
        ],
      },
      {
        id: "story-easy-5",
        title: "The Missing Library Book",
        passage:
          "Nora's library book about dolphins was due back on Friday. On Thursday night, she looked in her bag, under her bed and behind the sofa, but the book was nowhere. Her stomach felt heavy. She had never lost a library book before, and she was afraid of what Miss Chan, the librarian, would say. For a moment, Nora thought about saying she had left it on the bus. But that did not feel right. Instead, she sat down and thought carefully: where had she seen it last? She remembered reading it at the kitchen table, and then her little brother Ollie had run in, wanting to play. Nora hurried to Ollie's toy box. There, under a plastic dinosaur, lay the dolphin book, with a crayon scribble across the back cover. On Friday, Nora handed it to Miss Chan and explained about the scribble. Miss Chan smiled. \"Thank you for telling me. A little rubbing with an eraser will fix that.\" Nora walked home feeling as light as a feather.",
        tipTitle: "🕵️ Writing Trick: Plant a Clue",
        tip: "When Nora remembers Ollie running in to play, the story plants a clue. Later the clue pays off in the toy box. Good stories drop small hints early so the solution feels fair.",
        questions: [
          {
            type: "mc",
            tag: "🧱 Structure",
            prompt: "Every story has a beginning, a middle, and an end. Which sentence belongs to the MIDDLE?",
            options: [
              "Nora thinks back and remembers Ollie running in at the kitchen table",
              "The dolphin book is due on Friday and Nora cannot find it",
              "Miss Chan says the scribble can be rubbed away with an eraser",
            ],
            correctIndex: 0,
            explanation: "The middle is where Nora works on her problem. The missing book is the beginning, and Miss Chan's kind answer is the end.",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "How did Nora solve the problem of the missing book?",
            options: [
              "She thought carefully about where she last saw it, and looked there",
              "She searched every room in the house again as quickly as she could",
              "She asked her mum to buy a new copy of the dolphin book",
            ],
            correctIndex: 0,
            explanation: "Nora did not just search harder. She thought about where she had last seen the book, and that led her to the toy box.",
          },
          {
            type: "mc",
            tag: "🎭 Expression",
            prompt: "Nora hands over the book and explains about the scribble. How should you say her line to show she is honest but a little nervous?",
            options: [
              "In a quiet, steady voice, looking at Miss Chan, with a small nervous gulp",
              "In a very loud, cheerful voice while looking up at the ceiling",
              "In a fast mumble while hiding the book behind her back",
            ],
            correctIndex: 0,
            explanation: "Nora is choosing to be honest. A quiet, steady voice with eye contact shows that, and the gulp shows she is nervous.",
          },
          {
            type: "mc",
            tag: "👀 Engagement",
            prompt: "You want to build suspense as Nora looks in the toy box. What could you do?",
            options: [
              "Slowly move your hand through an imaginary toy box, pause, then gasp as you \"find\" it",
              "Announce that she finds the book under the dinosaur before you begin the scene",
              "Read the toy box line quickly while you look down at the floor",
            ],
            correctIndex: 0,
            explanation: "A slow search, a pause and a gasp make listeners wait for the discovery. Giving it away early or rushing would remove the suspense.",
          },
        ],
      },
      {
        id: "story-easy-6",
        title: "Turbo the Snail",
        passage:
          "At the school science fair, Omar's class held a snail race. Each child chose a snail and placed it on a wet board, and the first snail to reach the edge would win a shiny gold sticker. Omar's snail, Turbo, sat still. While the other snails glided away, Turbo pulled his head inside his shell. \"He's too slow!\" laughed Omar's friends. Omar's cheeks felt hot. He wanted to pick Turbo up and walk away. Then he noticed that the board around Turbo was dry, while the other snails were on damp patches. Omar carefully sprinkled a little water on the board in front of Turbo. After a moment, Turbo poked out his head and began to slide. He was not fast enough to win; Priya's snail crossed the edge first. But when Turbo finally reached the edge, the whole class cheered even louder than they had for the winner. \"He didn't win,\" Omar told his teacher, smiling, \"but he did it!\"",
        tipTitle: "🏅 Writing Trick: Not Every Win Is First Place",
        tip: "Omar and Turbo do not win the race, but the story still feels like a victory. Sometimes the best ending is not \"I won\" but \"I did something I did not think I could do\".",
        questions: [
          {
            type: "mc",
            tag: "🧱 Structure",
            prompt: "Every story has a beginning, a middle, and an end. Which sentence belongs to the END?",
            options: [
              "The whole class cheers as Turbo reaches the edge of the board",
              "Omar's friends laugh because Turbo hides inside his shell",
              "Omar notices that the board around Turbo is dry",
            ],
            correctIndex: 0,
            explanation: "The end is where the problem is finished: Turbo makes it. The laughing is the beginning, and noticing the dry board is the middle.",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "Omar wanted to give up. What did he work out instead?",
            options: [
              "The board was too dry for Turbo, so he added a little water",
              "Turbo was too tired, so Omar let him rest in a dark box",
              "Turbo was facing the wrong way, so Omar turned him around",
            ],
            correctIndex: 0,
            explanation: "Omar noticed the dry board while the other snails were on damp patches. Adding water solved the real problem.",
          },
          {
            type: "mc",
            tag: "🎭 Expression",
            prompt: "Omar's cheeks felt hot as his friends laughed. How could you act out his feelings?",
            options: [
              "Look down, speak quietly, and keep your hands close to your body",
              "Laugh along loudly and point at the snail yourself",
              "Stand very tall and speak in a proud, booming voice to the whole class",
            ],
            correctIndex: 0,
            explanation: "Omar feels embarrassed. Looking down, a quiet voice and a small posture show that. Laughing or booming would show different feelings.",
          },
          {
            type: "mc",
            tag: "👀 Engagement",
            prompt: "You want your listeners to feel how slow Turbo is. What could you do?",
            options: [
              "Stretch out your words and slide your hand through the air in tiny, slow steps",
              "Speak as fast as you can so that the story does not drag",
              "Clap a quick, lively beat to show that Turbo is racing along the board",
            ],
            correctIndex: 0,
            explanation: "Slow words and a slowly sliding hand let listeners feel Turbo's pace. A fast beat would be the opposite of the story.",
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
              "Jump up, grin widely, and cheer with a big, excited voice",
              "Stamp your feet hard and shout at the top of your voice in anger",
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
              "Say the result at the very start of the story so that no one is surprised",
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
              "Coach Diaz breaks his ankle two weeks before the championship game begins",
              "The team wins 3-1 and Jonah admits he had misjudged her on the first day",
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
              "She copied Coach Diaz's loud instructions exactly as he had given them",
              "She ran the same tough routine, only harder, for every single player",
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
              "In a loud, proud voice with your arms crossed and your chin held high",
              "In a joking sing-song voice, as if it doesn't matter to you at all",
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
              "Tell them that they must not say a word or ask any question until you have finished",
              "Skip the part about the first practice so they don't have to think about it",
            ],
            correctIndex: 0,
            explanation: "A question plus eye contact pulls listeners into the story. That makes Jonah's change of mind feel personal to them.",
          },
        ],
      },
      {
        id: "story-medium-3",
        title: "The Night Market Blackout",
        passage:
          "On Friday evenings, Mei helped her grandmother sell fish balls at their small stall in the night market. Tonight the market was busier than ever, with a long queue of customers waiting under strings of bright lights. Then, without warning, the whole street went dark. A power cut. Some customers groaned and began to leave. Grandmother's face tightened; without light she could not see the pot or the money. Mei felt a rush of panic, but then she noticed the glowing phone screens in the queue. She asked the first customer if he could switch on his torch, then asked the woman behind him to hold hers above the pot. Soon there was a circle of little lights, and the customers, instead of leaving, laughed and cheered. Grandmother ladled the fish balls faster than ever. When the power came back forty minutes later, nobody noticed at first. Grandmother squeezed Mei's shoulder. \"Tonight,\" she said with a proud smile, \"the customers were the lamps.\"",
        tipTitle: "🔦 Writing Trick: Use What Is Already There",
        tip: "Mei's solution comes from something already in the scene: the phones in the queue. When the answer was hiding in plain sight, readers feel it was fair and clever.",
        questions: [
          {
            type: "mc",
            tag: "🧱 Structure",
            prompt: "Which moment is the turning point, where the story stops going badly and starts going well?",
            options: [
              "Mei notices the glowing phone screens in the queue",
              "The street goes dark and some customers begin to leave",
              "Grandmother says that the customers were the lamps",
            ],
            correctIndex: 0,
            explanation: "The blackout is the crisis and Grandmother's line is the ending. The story turns when Mei spots the phone lights and sees what she can use.",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "Mei needed light and needed the customers to stay. How did she solve both problems at once?",
            options: [
              "She asked customers to hold up their phone torches above the pot",
              "She ran to a nearby shop to buy candles for the whole stall",
              "She told the customers to wait until the power came back on",
            ],
            correctIndex: 0,
            explanation: "The phone torches gave the stall light, and being part of the solution made the customers want to stay. Candles and waiting are never mentioned.",
          },
          {
            type: "mc",
            tag: "🎭 Expression",
            prompt: "Grandmother says, \"Tonight, the customers were the lamps.\" How would you say her line?",
            options: [
              "Warmly and slowly, with a proud smile and a squeeze of the shoulder",
              "Sharply and quickly, as if you were giving Mei an order",
              "Quietly and sadly, while looking out at the empty street",
            ],
            correctIndex: 0,
            explanation: "Grandmother is proud and grateful. A warm, slow voice and a smile show that, while a sharp or sad voice would change her meaning.",
          },
          {
            type: "mc",
            tag: "👀 Engagement",
            prompt: "You want listeners to feel the sudden blackout. Which storytelling move works best?",
            options: [
              "Stop in the middle of a sentence, drop to a whisper, and pause before you go on",
              "Speak louder and faster so that the scene stays exciting",
              "Turn away from your listeners and carry on as if nothing has changed",
            ],
            correctIndex: 0,
            explanation: "A sudden stop and a hush copy the feeling of the lights going out. Getting louder or ignoring the change would lose the effect.",
          },
        ],
      },
      {
        id: "story-medium-4",
        title: "The Wrong Bus",
        passage:
          "Tomás was already late for the football match when he jumped onto the number 12 bus. He sat down, checked his boots and looked out of the window, expecting to see the sports centre. Instead, after fifteen minutes, he saw a park he had never seen before. His stomach dropped. He had taken the bus in the wrong direction. His phone battery was at two per cent, and the match would kick off in twenty-five minutes. Tomás could have panicked, but he took a slow breath and studied the route map above the driver's head. Then he walked to the front. \"If I get off at the next stop,\" he asked, \"which bus will take me back?\" The driver told him to cross the road and catch the number 12 in the other direction, which would come in four minutes. Tomás did exactly that, and sprinted into the sports centre just as the referee raised the whistle. His teammates cheered when they saw him. He did not score that day, but he was proud of a different kind of goal: he had got himself there.",
        tipTitle: "⏱️ Writing Trick: Add a Ticking Clock",
        tip: "The kick-off time counts down through the whole story. A deadline makes every choice matter more, so readers keep turning the page to find out whether Tomás will make it.",
        questions: [
          {
            type: "mc",
            tag: "🧱 Structure",
            prompt: "Which moment is the turning point of the story?",
            options: [
              "Tomás takes a breath and studies the route map instead of panicking",
              "He realises that the bus is going in the wrong direction",
              "He sprints into the sports centre as the referee raises the whistle",
            ],
            correctIndex: 0,
            explanation: "Realising the mistake is the crisis and the sprint is the ending. The story turns when Tomás chooses to think instead of panic.",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "Tomás's phone was almost dead. What smart step solved his problem?",
            options: [
              "He asked the driver which bus would take him back and where to catch it",
              "He stayed on the bus until it reached the last stop of the route",
              "He called his coach to say that he could not play in the match",
            ],
            correctIndex: 0,
            explanation: "He used the person who knew the most, the driver, and asked a specific question. Waiting or giving up would not have got him there.",
          },
          {
            type: "mc",
            tag: "🎭 Expression",
            prompt: "The story says Tomás's \"stomach dropped\". How would you show that moment?",
            options: [
              "Freeze, open your eyes wide, and let your voice go quiet and tight",
              "Grin, wave both arms, and speak in a loud, cheerful voice",
              "Yawn and slouch, speaking in a calm and sleepy voice",
            ],
            correctIndex: 0,
            explanation: "A dropping stomach means sudden fear. Stillness, wide eyes and a tight voice show this, while cheerful or sleepy would not.",
          },
          {
            type: "mc",
            tag: "👀 Engagement",
            prompt: "You want your listeners to feel that time is running out. What could you do?",
            options: [
              "Say the countdown aloud, \"twenty-five minutes... twenty...\", and speed up a little each time",
              "Keep the same slow pace all the way through the story",
              "Tell your listeners that he arrives on time before you even begin the scene",
            ],
            correctIndex: 0,
            explanation: "A spoken countdown that speeds up copies the pressure of a ticking clock. A steady pace or a spoiler would take that feeling away.",
          },
        ],
      },
      {
        id: "story-medium-5",
        title: "The Spelling Bee",
        passage:
          "Zara had practised for weeks, and now she stood on the stage of the school hall in the final round of the spelling bee, with only one other competitor left. The judge read her word: \"necessary.\" Zara spelled it slowly, letter by letter, and the judge nodded and said, \"Correct.\" The audience clapped. But as she walked back to her seat, Zara replayed the letters in her head and felt a cold trickle of worry. She had spelled it with two c's. The word has one c and two s's. The judge had not noticed. If she said nothing, she would probably win. Her hands began to shake. Then she stood up, walked back to the microphone and said, \"Excuse me, I made a mistake. I spelled it wrong.\" The hall went silent. The judge checked her list, then nodded. \"Thank you for your honesty.\" Zara lost the spelling bee that afternoon, but when Ms Park handed her a certificate for sportsmanship, she felt lighter than she would have felt holding the trophy.",
        tipTitle: "🪞 Writing Trick: Show the Inner Struggle",
        tip: "The story lets us see what Zara is thinking, \"If she said nothing, she would probably win\", before she decides. When readers know how tempting the easy choice is, the brave choice means more.",
        questions: [
          {
            type: "mc",
            tag: "🧱 Structure",
            prompt: "Which moment is the turning point of the story?",
            options: [
              "Zara stands up and walks back to the microphone to tell the truth",
              "The judge says \"Correct\" and the audience claps for her",
              "Ms Park hands Zara a certificate for sportsmanship",
            ],
            correctIndex: 0,
            explanation: "The worry is the problem and the certificate is the ending. The story changes direction when Zara chooses honesty over winning.",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "Which sentence best explains why Zara chose to speak up?",
            options: [
              "She valued being honest more than winning a trophy she had not earned",
              "She was sure that the judge would find the mistake later on",
              "She wanted the other competitor to feel sorry for her",
            ],
            correctIndex: 0,
            explanation: "Zara had the choice to stay silent and win. She chose honesty because it mattered more to her than the trophy.",
          },
          {
            type: "mc",
            tag: "🎭 Expression",
            prompt: "Zara says, \"Excuse me, I made a mistake. I spelled it wrong.\" How should you say it?",
            options: [
              "Clearly and steadily, even though your voice trembles a little, looking at the judge",
              "Loudly and proudly, as if you were announcing a great victory to everyone",
              "Softly and quickly, as if you hoped that nobody in the hall would hear it",
            ],
            correctIndex: 0,
            explanation: "Zara is nervous but brave. A clear voice with a slight tremble and eye contact show both feelings.",
          },
          {
            type: "mc",
            tag: "👀 Engagement",
            prompt: "The story says \"The hall went silent.\" How could you use that moment with your listeners?",
            options: [
              "Stop speaking, look slowly around at your audience, and hold the silence for a few seconds",
              "Fill the silence with quick jokes and funny voices to keep your listeners smiling",
              "Carry on at exactly the same speed so that the story keeps moving along",
            ],
            correctIndex: 0,
            explanation: "Real silence makes listeners feel the hall holding its breath. Jokes or speed would break the moment.",
          },
        ],
      },
      {
        id: "story-medium-6",
        title: "The Classroom Museum",
        passage:
          "Class 5B had been looking forward to the museum trip for weeks. They had made worksheets, packed lunches and even chosen partners for the bus. But on the morning of the trip, their teacher, Mr Lau, walked in looking worried: the bus had broken down, and the trip was cancelled. A groan filled the room, and some students put their heads down on their desks. Then Anna, who had brought a box of old coins to show the museum guide, asked quietly, \"What if we made our own museum here?\" Mr Lau raised his eyebrows. By ten o'clock, the classroom was buzzing. Anna's coins sat in a display labelled \"Money Through Time.\" Ravi's grandfather's radio became \"Sounds of the Past.\" Others made posters, and every student took turns as a guide. When the head teacher walked through in the afternoon, she stopped in the doorway, amazed. Class 5B had not lost their trip; they had turned the problem into something they would remember far longer than any bus ride.",
        tipTitle: "🧰 Writing Trick: Turn \"No\" into \"What If?\"",
        tip: "The whole story changes because of one small question, \"What if we made our own museum?\" A character who asks \"What if?\" when things go wrong makes readers curious about what will happen next.",
        questions: [
          {
            type: "mc",
            tag: "🧱 Structure",
            prompt: "Which moment is the turning point, where the story stops going badly and starts going well?",
            options: [
              "Anna asks what if they made their own museum in the classroom",
              "Mr Lau tells them that the bus has broken down",
              "The head teacher stops in the doorway of the classroom, amazed",
            ],
            correctIndex: 0,
            explanation: "The broken bus is the problem and the amazed head teacher is the ending. The story turns on Anna's \"What if?\".",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "The trip was cancelled. How did the class deal with the problem?",
            options: [
              "They used their own belongings to build a museum in the classroom",
              "They asked Mr Lau to find another bus for the following week",
              "They spent the day on the worksheets they had already made",
            ],
            correctIndex: 0,
            explanation: "They did not wait or give up. They used what they already had, such as coins and a radio, to create the experience themselves.",
          },
          {
            type: "mc",
            tag: "🎭 Expression",
            prompt: "\"A groan filled the room.\" How could you act out that moment?",
            options: [
              "Let out a long, low groan and slump your shoulders as you say it",
              "Cheer in a high, bright voice and clap your hands together",
              "Speak in a bored monotone without moving at all",
            ],
            correctIndex: 0,
            explanation: "The class is disappointed. A groan and slumped shoulders show that clearly, while cheering or a flat voice would not.",
          },
          {
            type: "mc",
            tag: "👀 Engagement",
            prompt: "You reach the part where the students act as museum guides. How could you involve your listeners?",
            options: [
              "Use a guide's voice, point to imaginary exhibits, and invite listeners to \"step closer\"",
              "Read the list of exhibits quickly without looking up at anyone",
              "Ask your listeners to stay completely silent until the whole story is over",
            ],
            correctIndex: 0,
            explanation: "Acting as a guide turns your listeners into visitors. Rushing or asking for silence keeps them outside the story.",
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
              "Devon accuses the others of not valuing creativity or imagination",
              "The four students start sketching their plans for the project together",
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
      {
        id: "story-hard-3",
        title: "The Interpreter at the Tea Shop",
        passage:
          "Ken's grandmother ran a small tea shop, and on Saturdays he helped out. One afternoon, a tourist named Mr Hall came in and tried to explain that he wanted tea for his wife, who had been feeling unwell. Grandmother spoke only Cantonese and Mr Hall only English, so Ken translated between them. Halfway through, Grandmother said something Ken did not know how to say. The tea she recommended, she explained, was \"cooling\" and would help \"clear the heat\" from the body. Ken knew that in English, \"cooling\" sounded like a cold drink and \"heat\" sounded like a fever. If he translated word for word, Mr Hall would be confused and perhaps alarmed. But if he changed the meaning to make it easier, he would no longer be translating truthfully. Ken paused. Then he said, \"My grandmother says that in her tradition, this tea is thought to help the body feel calm and balanced, and people often drink it when they feel run down.\" He repeated his explanation to Grandmother in Cantonese, and she nodded. Mr Hall smiled and bought two tins. As he left, he said, \"You explained that better than any dictionary could.\" Ken realised that being a good interpreter is not only about words; it is about meaning.",
        tipTitle: "🌉 Writing Trick: The Gap Between Two Worlds",
        tip: "Ken's problem is not that he lacks words; it is that two cultures use the same words differently. A dilemma between two \"wrong\" easy answers, word for word or changing the meaning, gives a story depth.",
        questions: [
          {
            type: "mc",
            tag: "🧱 Structure",
            prompt: "Which moment is the turning point, where Ken moves from being stuck to finding his way?",
            options: [
              "Ken pauses and decides to explain the meaning instead of translating word for word",
              "Mr Hall explains that he wants some tea for his wife, who is unwell",
              "Mr Hall buys two tins of tea and says that Ken explained it well",
            ],
            correctIndex: 0,
            explanation: "Mr Hall's request starts the story and the purchase is the ending. It turns when Ken pauses and chooses a third way between the two easy options.",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "Ken considered translating word for word, or changing the meaning to make it easier. Why was his final solution better than both?",
            options: [
              "It stayed true to his grandmother's meaning while still making sense to a visitor",
              "It gave Mr Hall a much shorter answer that was quicker and easier to follow",
              "It let Ken avoid explaining an idea that he did not understand very well himself",
            ],
            correctIndex: 0,
            explanation: "Word for word would confuse Mr Hall, and changing the meaning would be untrue. Ken's explanation kept the meaning and made it clear. It was not shorter, and Ken understood the idea well.",
          },
          {
            type: "shortanswer",
            tag: "🎭 Expression",
            prompt: "Imagine you perform this scene aloud with three voices: Grandmother, Mr Hall and Ken. How would you use your voice and body to show each person, and to show Ken's pause when he is stuck?",
            modelAnswer:
              "I would give Grandmother a warm, steady, slightly slower voice with small nods, and Mr Hall a higher, polite voice with his hands open as if he is asking for help. For Ken, I would turn my body between the two of them, then freeze, lower my eyes and go silent for a second while he thinks. When he speaks again, I would slow down and choose each word carefully so listeners can hear him translating meaning, not just words.",
          },
          {
            type: "shortanswer",
            tag: "👀 Engagement",
            prompt: "Many of your listeners do not speak Cantonese. Describe how you could let them feel the language gap in this scene, and how you would use ONE pause to make them care about Ken's choice.",
            modelAnswer:
              "I would say a short Cantonese-sounding phrase, or hum an unfamiliar sentence, so listeners feel what Mr Hall feels: he cannot understand. Then I would look at the audience and ask quietly, \"What would you say?\" and pause for a couple of seconds before I let Ken answer. The pause makes listeners feel the difficulty, so Ken's solution feels like a relief to them too.",
          },
        ],
      },
      {
        id: "story-hard-4",
        title: "The Debate Switch",
        passage:
          "Yuki was captain of her school's debating team, and she believed strongly that homework should be banned. So when the coin toss in the semi-final gave her team the opposite side, she felt sick. \"How can I argue for something I don't believe?\" she whispered to her coach. Mr Sato only shrugged. \"Then find out what the other side believes, and why.\" That evening, Yuki interviewed her older cousin, a teacher, and her friend Leo, who liked homework because it helped him remember lessons. She expected to hear weak arguments. Instead, she heard reasons she had never considered: practice builds memory, homework teaches students to work on their own, and some pupils have no quiet time for study except in the evening. She filled three pages of notes. In the debate, she gave the strongest speech of her life, and her team won by a single point. Afterwards, she told Mr Sato that she still wanted less homework. \"But now,\" she said, \"I know exactly what I'm arguing against, and that makes my own argument stronger.\"",
        tipTitle: "🔄 Writing Trick: Change a Character a Little",
        tip: "Yuki does not completely change her mind. She keeps her opinion but understands it better. Small, realistic changes often make characters feel more true than big, sudden ones.",
        questions: [
          {
            type: "mc",
            tag: "🧱 Structure",
            prompt: "Which moment is the turning point of the story?",
            options: [
              "Yuki interviews her cousin and Leo and hears reasons she had never considered",
              "The coin toss gives her team the side of the argument she does not believe in",
              "Yuki's team wins the semi-final by a single point",
            ],
            correctIndex: 0,
            explanation: "The coin toss creates the problem and the win is the result. It turns when Yuki listens to the other side and finds real reasons instead of weak ones.",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "How did Yuki solve the problem of arguing for a view she did not hold?",
            options: [
              "She listened to people who held that view and learned their real reasons",
              "She pretended to agree and repeated the arguments her coach gave her",
              "She wrote down the weakest points of the view so she could defeat them",
            ],
            correctIndex: 0,
            explanation: "Yuki expected weak arguments, but by interviewing people she found strong ones. She built her speech on what she learned, not on pretending or attacking weak points.",
          },
          {
            type: "shortanswer",
            tag: "🎭 Expression",
            prompt: "Yuki first whispers, \"How can I argue for something I don't believe?\" and later gives the strongest speech of her life. How would you use your voice and body to show that change?",
            modelAnswer:
              "For the whisper I would hunch my shoulders, lean towards the coach and speak in a small, tight, unsure voice. For the speech, I would stand tall, open my hands and let my voice grow steadier and stronger, with clear pauses after each point. The contrast between the hunched whisper and the confident speech shows how much she has learned.",
          },
          {
            type: "shortanswer",
            tag: "👀 Engagement",
            prompt: "Yuki's last line is, \"I know exactly what I'm arguing against, and that makes my own argument stronger.\" How could you use a pause and eye contact to make listeners think about it?",
            modelAnswer:
              "I would say the first half, \"I know exactly what I'm arguing against\", then pause and look around at several listeners, so they have a moment to wonder what she means. Then I would deliver the second half slowly and clearly, looking at one listener, as if I am giving them an idea to take home. The pause makes the idea feel important instead of just another line.",
          },
        ],
      },
      {
        id: "story-hard-5",
        title: "The Water Station",
        passage:
          "Rosa had volunteered to work at the water station at the halfway point of the city marathon. She had been given a table, four hundred paper cups and a simple job: fill the cups and hand them to the runners. For the first hour, everything went smoothly. Then the sun came out fully, the temperature rose, and the runners arrived in greater numbers than expected, gulping down two or three cups each. By ten o'clock, only fifty cups were left, and the truck with extra supplies was stuck in traffic. The team leader stared at the queue of thirsty runners and then at the nearly empty box, her face pale. Rosa noticed that many runners were carrying their own small bottles, half empty and hanging from their belts. \"What if we fill the cups only halfway,\" she suggested, \"and offer to pour straight into their bottles?\" The team leader hesitated for a second, then nodded. Fifty cups became a hundred half-cups, and the runners with bottles were served from the big water jugs. Twenty minutes later, the truck arrived. \"You didn't just save the water,\" the team leader said. \"You saved the race for the people still coming.\"",
        tipTitle: "🚦 Writing Trick: Run Out of Something",
        tip: "When a character runs out of something important, such as cups, time or food, the story feels urgent. Rosa's solution is clever because she makes the small amount go further instead of finding more.",
        questions: [
          {
            type: "mc",
            tag: "🧱 Structure",
            prompt: "Which moment is the turning point, where the story changes from going wrong to going right?",
            options: [
              "Rosa suggests filling the cups halfway and pouring into runners' own bottles",
              "The sun comes out and far more runners arrive than expected",
              "The supply truck finally arrives after being stuck in traffic",
            ],
            correctIndex: 0,
            explanation: "The heat and crowds cause the crisis, and the truck arrives after the problem is solved. The story turns on Rosa's idea.",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "What made Rosa's solution clever?",
            options: [
              "She made the small supply go further by using less for each runner and using the runners' own bottles",
              "She told the runners to walk on to the next station, which was sure to have more water",
              "She asked the team leader to stop the race until the truck arrived with more cups",
            ],
            correctIndex: 0,
            explanation: "Rosa did not wait or pass the problem on. She used what was already there, half-cups and the runners' own bottles, to serve more people.",
          },
          {
            type: "shortanswer",
            tag: "🎭 Expression",
            prompt: "Describe how you would perform the moment when the team leader stares at the empty box and Rosa makes her suggestion. How would their voices and faces be different?",
            modelAnswer:
              "For the team leader I would go still, speak in a low, tight voice and let my face go pale and fixed, as if I am afraid to look away from the empty box. For Rosa, I would speak a little faster and lighter, raise my eyebrows and lean forward, as if the idea has just arrived. I would also make the sentence \"What if we fill the cups only halfway\" sound like a question so that it feels like a new spark.",
          },
          {
            type: "shortanswer",
            tag: "👀 Engagement",
            prompt: "Describe ONE sound effect and ONE way of involving your audience that would make listeners feel the pressure of the water running out.",
            modelAnswer:
              "For sound, I could pour a little imaginary water with a \"glug, glug\" that gets thinner and quieter as the cups run out. To involve the audience, I could ask them to count the cups left, \"fifty... forty...\", tapping the table each time, so they feel the supply shrinking. Both choices make the danger feel real, so Rosa's idea feels like a relief.",
          },
        ],
      },
      {
        id: "story-hard-6",
        title: "The Stained Recipe",
        passage:
          "Lena found her great-grandmother's recipe for steamed rice cakes in a shoebox at the back of a wardrobe. The paper was yellow and the handwriting was neat, but a brown stain covered the final line, where the steaming time should have been. Lena asked her relatives. Her aunt said thirty minutes. Her uncle said twenty. Her mother laughed and said, \"Your great-grandmother never used a timer. She steamed it until it smelled right.\" Lena felt stuck; a recipe without a time seemed useless. Then she remembered how they solved problems in science lessons: test it. She mixed one bowl of batter, divided it into three small dishes and steamed them for twenty, twenty-five and thirty minutes. She poked each with a chopstick and asked her family to taste them without knowing which was which. The twenty-minute cake was gooey; the thirty-minute cake was dry and tough. Everyone chose the middle one. Lena wrote \"twenty-five minutes, or until a chopstick comes out clean\" beside the stain, in her own handwriting, under the faded words of her great-grandmother. Now the two lines of handwriting sat side by side on the same page.",
        tipTitle: "🧪 Writing Trick: A Missing Piece Starts the Quest",
        tip: "The stain hides one line, and that gap gives the story a goal. Whenever a character is missing something, such as a key, a name or an answer, readers keep reading to find out how it will be filled.",
        questions: [
          {
            type: "mc",
            tag: "🧱 Structure",
            prompt: "Which moment is the turning point of the story?",
            options: [
              "Lena decides to test the steaming times instead of asking for more opinions",
              "She finds the recipe in a shoebox at the back of the wardrobe",
              "She writes her own line beside her great-grandmother's handwriting",
            ],
            correctIndex: 0,
            explanation: "Finding the recipe starts the story and the handwriting is the ending. The story turns when Lena stops collecting opinions and starts an experiment.",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "Her relatives disagreed about the steaming time. Why was Lena's method a good way to settle it?",
            options: [
              "She tried three times under the same conditions and had the family taste them blind",
              "She chose the time that her aunt and uncle both agreed on when she asked",
              "She asked her mother to remember the exact number from long ago",
            ],
            correctIndex: 0,
            explanation: "A fair test with the same batter and blind tasting removes guesses and opinions. Her aunt and uncle did not agree, and her mother remembered no number.",
          },
          {
            type: "shortanswer",
            tag: "🎭 Expression",
            prompt: "Lena's mother laughs and says, \"Your great-grandmother never used a timer. She steamed it until it smelled right.\" How would you perform this line so listeners can hear both the humour and the memory in it?",
            modelAnswer:
              "I would begin with a light laugh and a warm, amused voice for \"never used a timer\", shaking my head slightly. Then I would slow down and soften my voice for \"until it smelled right\", looking off into the distance as if I can see the old kitchen. The shift from a laugh to a soft, dreamy voice shows that the joke is also a loving memory.",
          },
          {
            type: "shortanswer",
            tag: "👀 Engagement",
            prompt: "In the blind taste test, the family does not know which cake is which. How could you involve your audience so that they feel as if they are tasting with Lena's family?",
            modelAnswer:
              "I could hold up three imaginary plates and ask three listeners to \"taste\" one each, then describe the texture, \"gooey\", \"just right\" and \"dry and tough\", while I watch their faces. Then I would ask the audience to vote before I reveal the family's choice. Getting listeners to guess makes them part of the experiment, so the answer feels like a shared discovery.",
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
              "It has no proper beginning, because the manuscript is already very old when the story starts",
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
              "They built a working copy of the mysterious device from Elias's sketches and tested it in a laboratory",
              "They matched Elias's handwriting to a patent application that he had filed at the time",
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
              "She went straight to the client and warned them about the defect before the shipment was sent out",
              "She refused to work on the batch any further until the whole shipment was recalled",
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
      {
        id: "story-expert-3",
        title: "The Letter That Arrived Late",
        passage:
          "The letter had been posted in 1983, but it slid into Mrs Chan's letterbox on a Tuesday morning this spring. The envelope was soft with age, and its stamp showed a queen who had long since disappeared from the coins. Inside was a single page in her brother Henry's cramped handwriting. He wrote that he was sorry for the quarrel they had had before he emigrated, that he had been too proud to telephone, and that he hoped she would forgive him. Mrs Chan had never received it. For forty years, she had believed that Henry had chosen silence, and so, out of pride of her own, she had chosen it too. The post office later suggested that the letter had probably slipped behind a sorting machine and been found during a repair. Mrs Chan sat at the kitchen table for a long time with the page in her hands, and the tea beside her went cold. Then she stood up, took an old address book from the drawer and turned to the letter H. She did not know whether the number still worked. She dialled it anyway.",
        tipTitle: "⏳ Writing Trick: Let Time Do the Work",
        tip: "Forty years of delay is what gives this story its feeling. When time passes between an action and its result, readers feel what was lost, and what might still be saved.",
        questions: [
          {
            type: "mc",
            tag: "🧱 Structure",
            prompt: "Which description of this story's structure is the most accurate?",
            options: [
              "The turning point is when she reads the letter, and the ending is left open on purpose",
              "There is no turning point, because nothing changes after the letter arrives",
              "The ending confirms that the two have been reunited and the quarrel forgotten",
            ],
            correctIndex: 0,
            explanation: "Reading the letter changes what Mrs Chan believes, so it is the turning point. The story stops as she dials, so we never learn whether Henry answers.",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "For forty years, Mrs Chan believed that Henry had chosen silence. How did the letter change her understanding?",
            options: [
              "It showed that the silence had been an accident of the post, and that he had reached out",
              "It proved that Henry had never really been sorry about the quarrel they had had",
              "It explained that Mrs Chan had been the one who started the argument",
            ],
            correctIndex: 0,
            explanation: "The letter shows Henry did try to reach her, and it was lost. Nothing in it suggests he was not sorry, and it does not say who started the quarrel.",
          },
          {
            type: "shortanswer",
            tag: "🎭 Expression",
            prompt: "Describe how you would read Henry's letter aloud, and then how you would show Mrs Chan's reaction as she sits with the page while her tea goes cold.",
            modelAnswer:
              "I would read the letter slowly and quietly in a slightly rough, hesitant voice, as if Henry is choosing every word with difficulty, with small pauses before \"sorry\" and \"forgive\". Then I would drop my voice and stop moving altogether for Mrs Chan: my eyes lowered, my hands still, and long silence in place of description. The stillness after the shaky voice shows how much the words mean to her.",
          },
          {
            type: "shortanswer",
            tag: "👀 Engagement",
            prompt: "The story ends as Mrs Chan dials, with no answer. How could you use sound, timing and eye contact in the last line so that listeners keep wondering about it afterwards?",
            modelAnswer:
              "I would slow down for \"She dialled it anyway\" and then make a soft ringing sound, once, twice, letting the second one trail off. After that, I would stop, look around at my listeners and hold the silence for several seconds without giving an answer. Leaving the ringing unanswered makes each listener imagine what happens next, so the story goes on in their minds.",
          },
        ],
      },
      {
        id: "story-expert-4",
        title: "The Archivist's Choice",
        passage:
          "Daniel Ho volunteered as an archivist at a small town museum. While sorting old boxes, he found the diary of the town's founder, Mr Whitaker, whose statue stood in the square and whose birthday was celebrated with an annual festival. The diary revealed an uncomfortable truth: Whitaker had taken credit for a well that his neighbours had dug, and he had sold land that was not entirely his to sell. When Daniel showed it to the museum committee, the chairman suggested keeping the diary in the basement \"for preservation\". Daniel understood the temptation; the festival was the town's proudest tradition. But he also believed that a museum exists to keep the truth, not only the flattering parts. He did not publish the diary on his own, and he did not agree to hide it either. Instead, he wrote a careful report and proposed an exhibition placing the diary beside the statue, called \"The Man and the Story\". After weeks of argument, the committee agreed. The festival went ahead as usual, and that year the children who came to see the statue also read a few lines from the diary. Some townspeople were angry. Others said that they trusted the statue more now that it stood beside the truth.",
        tipTitle: "🗿 Writing Trick: Two Truths in One Story",
        tip: "Daniel does not have to choose between \"the town's pride\" and \"the truth\". The best solution keeps both. Stories with two things that matter are more interesting than stories with one right answer and one wrong.",
        questions: [
          {
            type: "mc",
            tag: "🧱 Structure",
            prompt: "Which part of the story is its climax, the moment the main character makes the key decision?",
            options: [
              "Daniel decides neither to publish nor to hide the diary, and proposes an exhibition",
              "He finds the diary while he is sorting boxes at the museum",
              "The committee agrees and the exhibition opens beside the statue in the square",
            ],
            correctIndex: 0,
            explanation: "Finding the diary begins the story and the exhibition is the aftermath. The climax is Daniel's decision to take a third path.",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "What made Daniel's solution more than a simple compromise?",
            options: [
              "It kept the town's tradition and the truth together, rather than sacrificing one for the other",
              "It let the committee decide in private without needing to explain their reasons",
              "It kept the diary hidden in a way that protected the feelings of the townspeople",
            ],
            correctIndex: 0,
            explanation: "A compromise gives up part of each side. Daniel's exhibition kept the festival and the diary, so both mattered. It was open, not private or hidden.",
          },
          {
            type: "shortanswer",
            tag: "🎭 Expression",
            prompt: "The chairman says to keep the diary in the basement \"for preservation\", and Daniel answers calmly. How would you use your voice and face to show that the chairman is hiding his real reason, and that Daniel sees it?",
            modelAnswer:
              "For the chairman I would use a smooth, friendly voice with a small smile and quick eyes, and put a slight stress on \"preservation\", as if it is a polite excuse. For Daniel, I would slow down, keep my voice level and look straight at him without smiling. The contrast between the smooth voice and the calm, direct stare tells listeners that Daniel understands the real reason.",
          },
          {
            type: "shortanswer",
            tag: "👀 Engagement",
            prompt: "The exhibition is called \"The Man and the Story\". How could you use two gestures or objects and a question to your audience so that listeners weigh both sides for themselves?",
            modelAnswer:
              "I could hold up one hand as the statue, the proud story, and the other as the diary, the truth, and let my hands sink slightly as I speak about each. Then I would ask, \"Which one would you want to leave out?\" and look around the room before answering. Listeners then feel the weight of both sides, just as the townspeople did.",
          },
        ],
      },
      {
        id: "story-expert-5",
        title: "The Clockmaker's Lesson",
        passage:
          "Old Mr Lam repaired clocks in a narrow shop at the end of the lane, and his apprentice, Sun, was quick, clever and impatient. One morning, a customer brought in a tall wooden clock that lost ten minutes every day. Sun opened the case at once. He adjusted the pendulum, tightened the screws, oiled the gears and cleaned the dust from the spring, everything he had been taught. By evening, the clock still lost time. Sun threw down his screwdriver and announced that it was beyond repair. Mr Lam did not look up from his work. \"Sit with it,\" he said. Sun frowned, but he pulled up a stool and watched the pendulum without touching anything. For an hour there was only the tick, tick, tick. Slowly he began to hear it: the sound was uneven, a little longer on one side than on the other. He glanced down at the floor and saw that the clock leaned very slightly forward. Sun slid a folded card under one foot. The tick evened out. Mr Lam smiled. \"Most of this trade,\" he said, \"is looking at where the clock stands, not only at what is inside it.\"",
        tipTitle: "🔍 Writing Trick: The Answer Is Outside the Frame",
        tip: "Sun searches inside the clock, while the answer is on the floor. Stories that make the reader look in the wrong place, and then reveal the right one, feel like satisfying puzzles.",
        questions: [
          {
            type: "mc",
            tag: "🧱 Structure",
            prompt: "Which moment is the turning point of the story?",
            options: [
              "Sun stops adjusting the clock and simply watches the pendulum for an hour",
              "A customer brings in a clock that loses ten minutes each day",
              "Sun slides a folded card under one foot and the ticking evens out",
            ],
            correctIndex: 0,
            explanation: "The customer starts the story, and the folded card is the solution. The story turns when Sun stops fixing and starts watching.",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "How did Sun find the real cause of the problem?",
            options: [
              "By observing patiently instead of repeating the repairs he already knew",
              "By replacing the gears with new ones from the shelves in the shop",
              "By asking the customer to describe how the clock had been used",
            ],
            correctIndex: 0,
            explanation: "All his known repairs had failed. Listening to the uneven tick led him to the leaning floor. The passage does not mention new gears or the customer's history.",
          },
          {
            type: "shortanswer",
            tag: "🎭 Expression",
            prompt: "Mr Lam says, \"Sit with it,\" without looking up, and Sun frowns. How would you use your voice and body to show the difference between the calm old master and the impatient apprentice?",
            modelAnswer:
              "For Mr Lam I would use a low, slow, quiet voice, keep my eyes down as if I am working, and barely move. For Sun I would speak faster and sharper, with a scowl, tapping fingers and a restless shifting of my weight. The contrast between stillness and restlessness makes the difference between the two characters clear.",
          },
          {
            type: "shortanswer",
            tag: "👀 Engagement",
            prompt: "For an hour there is \"only the tick, tick, tick\". How could you use rhythm and silence so that listeners \"sit with it\" too, and notice the uneven tick before Sun does?",
            modelAnswer:
              "I would tap a steady \"tick, tick, tick\" on the table, then make it slightly uneven, with a longer gap on one side, and see if listeners notice. I would pause and ask quietly, \"Can you hear it?\" before Sun does. By letting listeners work out the clue with him, the discovery feels like theirs as well.",
          },
        ],
      },
      {
        id: "story-expert-6",
        title: "The Village Well",
        passage:
          "In the dry season, the village of Karo depended on a single well. That summer, the water level dropped lower than anyone could remember. Arguments broke out at the well each morning: some families arrived early and drew more than their share, and others went home with half-empty buckets. The elders called a meeting but could not agree, because every proposal seemed to favour someone. Then Amina, a schoolgirl of twelve, asked to speak. For three days she had been counting how many buckets each household took, and she held up a sheet of paper covered in tidy columns. \"Fifty-two buckets come out of the well each day,\" she said, her voice unsteady at first, \"but only about forty are refilled overnight. That is why the level keeps falling.\" She proposed a system of numbered tokens, with each household given tokens according to how many people lived there, and a small reserve kept for the sick. The elders studied the sheet and then each other. It was not perfect, and some grumbled that it treated a large family and a small one differently. But after one week, the water stopped falling. Amina's chart still hangs in the meeting hall, and beside it hang the tokens, each stamped with a family's name.",
        tipTitle: "📊 Writing Trick: Let Evidence Be the Hero",
        tip: "Amina does not win by shouting or by being older. She wins with numbers that everyone can see. A character who solves a problem by looking carefully and sharing what she found feels believable and inspiring.",
        questions: [
          {
            type: "mc",
            tag: "🧱 Structure",
            prompt: "Which moment is the turning point, where the story changes from conflict to a solution?",
            options: [
              "Amina shows the elders her chart of how many buckets each household takes",
              "Arguments break out at the well each morning between the families",
              "The water level stops falling after the first week of the new system",
            ],
            correctIndex: 0,
            explanation: "The arguments are the problem and the falling level stopping is the result. The story turns when Amina brings evidence that everyone can see.",
          },
          {
            type: "mc",
            tag: "🧩 Problem-Solving",
            prompt: "What made Amina's plan different from the earlier proposals?",
            options: [
              "It began with evidence of the shortage and gave each household a share by its size",
              "It closed the well completely until the next rains, so that it could refill",
              "It asked each family to bring water from a river that was much further away",
            ],
            correctIndex: 0,
            explanation: "The earlier proposals seemed to favour someone. Amina used the numbers to show the real problem, then gave tokens by household size, with a reserve for the sick.",
          },
          {
            type: "shortanswer",
            tag: "🎭 Expression",
            prompt: "Amina is twelve and speaks to a room of elders with an unsteady voice at first. How would you perform her speech so that listeners feel her nerves, and then her growing confidence?",
            modelAnswer:
              "I would start with a small, careful voice, holding an imaginary paper in both hands and looking at it more than at the elders. As she reaches the numbers, I would lift my head, slow down and let my voice grow steadier, using a firm finger to point to the columns. By the end I would look directly at the elders, showing that her nerves have been replaced by conviction.",
          },
          {
            type: "shortanswer",
            tag: "👀 Engagement",
            prompt: "Amina says, \"Fifty-two buckets come out each day, but only about forty are refilled.\" How could you help listeners see and feel those two numbers, using your hands, your voice or your audience?",
            modelAnswer:
              "I could hold my hands wide apart for fifty-two and closer together for forty, and let the gap between them hang in the air while I pause. I might ask the audience to count with me, \"fifty-two out, forty in\", tapping the table. Seeing and saying the gap makes listeners feel the problem, so Amina's plan feels necessary.",
          },
        ],
      },
    ],
  };
})();
