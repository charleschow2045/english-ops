// Module 6: Writing — 10 prompts per tier (expanded from 1, then 6), structure hints,
// sentence starters, and a model essay per prompt. WRITING_PROMPTS,
// WRITING_HINTS, and WRITING_MODEL_ESSAYS keep their original field names
// and per-item shapes ({structure, starters} / plain string) — each tier's
// value is now an array of those same shapes instead of a single one, and
// the three arrays stay aligned by index (index 0 is the original prompt/
// hints/essay for that tier). WritingModule.jsx picks one index at random
// per session (via sampleArray, like other modules) and uses it across all
// three arrays.
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  window.App.Content.WRITING_PROMPTS = {
    easy: [
      "Describe your favourite animal. What does it look like, and why do you like it?",
      "Describe your favourite food. What does it taste like, and why do you love it?",
      "Describe your bedroom or a room in your house. What is inside it?",
      "Write about your best friend. What are they like?",
      "Describe a fun place you like to visit. What can you see and do there?",
      "Write about a pet you have, or a pet you would like to have.",
      "Describe your favourite season. What is the weather like, and what do you enjoy doing?",
      "Describe your favourite toy or game. How do you play with it?",
      "Write about your family. Who is in it, and what do you enjoy doing together?",
      "Describe your journey to school. What do you see along the way?",
    ],
    medium: [
      "Write about a fun day you had with a friend or family member. What did you do together?",
      "Write about a time you helped someone. What happened?",
      "Describe your favourite festival or celebration. What does your family do to celebrate it?",
      "Write about a memorable school day. What made it special?",
      "Describe a place you would love to visit one day. Why does it interest you?",
      "Write about a time you felt proud of yourself. What did you achieve?",
      "Write about a time you were very surprised. What happened, and how did you react?",
      "Describe a hobby you enjoy. How did you get started, and what do you like about it?",
      "Write about a time you worked in a team. What was your role, and how did it go?",
      "Describe your favourite place in Hong Kong. Why should visitors go there?",
    ],
    hard: [
      "Describe a time you tried something new. How did it make you feel?",
      "Describe a challenge you faced and how you overcame it.",
      "Write about someone who inspires you and why.",
      "Describe a time you made a mistake and what you learned from it.",
      "Write about a skill you would like to learn and why.",
      "Describe how technology has changed the way you learn or play.",
      "Write about a time you disagreed with someone. How did you handle it, and what happened?",
      "Describe a tradition in your family. Why does it matter to you?",
      "Write a story that begins with this sentence: 'The door had never been open before.'",
      "Describe a book, film, or TV show that changed the way you think about something.",
    ],
    expert: [
      "Do you think it's more important to be honest or to be kind? Explain your opinion with reasons.",
      "Do you think students should have homework every day? Explain your opinion with reasons.",
      "Is it better to have a few close friends or many friends? Explain your opinion with reasons.",
      "Do you think animals should be kept in zoos? Explain your opinion with reasons.",
      "Should mobile phones be allowed in the classroom? Explain your opinion with reasons.",
      "Do you think it's more important to be talented or hardworking? Explain your opinion with reasons.",
      "Should children be allowed to use social media? Explain your opinion with reasons.",
      "Is it better to live in a big city or a small town? Explain your opinion with reasons.",
      "Should all schools require students to wear a uniform? Explain your opinion with reasons.",
      "Which is more important: protecting the environment or growing the economy? Explain your opinion with reasons.",
    ],
  };

  window.App.Content.WRITING_HINTS = {
    easy: [
      {
        structure: [
          "Beginning: Name your animal and say what it looks like.",
          "Middle: Tell us what it likes to do, or a fun fact about it.",
          "End: Explain why it's your favourite!",
        ],
        starters: ["My favourite animal is...", "It has...", "I love it because..."],
      },
      {
        structure: [
          "Beginning: Name your favourite food.",
          "Middle: Describe what it looks like, tastes like, or when you eat it.",
          "End: Explain why it's your favourite!",
        ],
        starters: ["My favourite food is...", "It tastes...", "I love it because..."],
      },
      {
        structure: [
          "Beginning: Name the room and say where it is in your house.",
          "Middle: Describe what's inside it and what you like to do there.",
          "End: Explain why this room is special to you.",
        ],
        starters: ["My favourite room is...", "Inside, there is...", "I like this room because..."],
      },
      {
        structure: [
          "Beginning: Say who your best friend is and how you know them.",
          "Middle: Describe what they are like and something fun you do together.",
          "End: Explain why they are a great friend.",
        ],
        starters: ["My best friend is...", "We like to...", "They are a great friend because..."],
      },
      {
        structure: [
          "Beginning: Name the place you like to visit.",
          "Middle: Describe what you can see and do there.",
          "End: Explain why you enjoy going there.",
        ],
        starters: ["A fun place I like to visit is...", "When I'm there, I...", "I enjoy it because..."],
      },
      {
        structure: [
          "Beginning: Say what pet you have, or what pet you would like to have.",
          "Middle: Describe what it looks like and what it likes to do.",
          "End: Explain why you love it, or why you would love to have it.",
        ],
        starters: ["I have a pet...", "It likes to...", "I love my pet because..."],
      },
      {
        structure: [
          "Beginning: Name your favourite season.",
          "Middle: Describe the weather and what you see, hear, or feel.",
          "End: Explain what you love doing in this season.",
        ],
        starters: ["My favourite season is...", "The weather is...", "I love this season because..."],
      },
      {
        structure: [
          "Beginning: Name your favourite toy or game.",
          "Middle: Explain how you play with it, step by step.",
          "End: Say why it is so much fun.",
        ],
        starters: ["My favourite game is...", "To play, you...", "It is fun because..."],
      },
      {
        structure: [
          "Beginning: Say who is in your family.",
          "Middle: Describe one thing you enjoy doing together.",
          "End: Explain why your family is special to you.",
        ],
        starters: ["There are ... people in my family.", "On weekends, we...", "My family is special because..."],
      },
      {
        structure: [
          "Beginning: Say how you get to school.",
          "Middle: Describe what you see, hear, and pass along the way.",
          "End: Say how you feel when you arrive.",
        ],
        starters: ["Every morning, I...", "On the way, I see...", "When I arrive, I feel..."],
      },
    ],
    medium: [
      {
        structure: [
          "Beginning: Who were you with, and where did this happen?",
          "Middle: What did you do? Add details — what did you see, hear, or feel?",
          "End: How did the day end, and how did it make you feel?",
        ],
        starters: ["One day, I...", "First, we...", "By the end of the day, I felt..."],
      },
      {
        structure: [
          "Beginning: Who did you help, and what did they need?",
          "Middle: Describe what you did to help them, step by step.",
          "End: Explain how it felt to help, and how they reacted.",
        ],
        starters: ["One day, I helped...", "I decided to...", "Afterwards, I felt..."],
      },
      {
        structure: [
          "Beginning: Name the festival and when it happens.",
          "Middle: Describe what your family does to celebrate it.",
          "End: Explain what you enjoy most about it.",
        ],
        starters: ["My favourite festival is...", "During this festival, we...", "What I enjoy most is..."],
      },
      {
        structure: [
          "Beginning: Say what day it was and what made it different from usual.",
          "Middle: Describe what happened during the day, with details.",
          "End: Explain why this day stuck in your memory.",
        ],
        starters: ["One school day I'll never forget was...", "During the day, we...", "This day was memorable because..."],
      },
      {
        structure: [
          "Beginning: Name the place and where it is in the world.",
          "Middle: Describe what you imagine seeing or doing there.",
          "End: Explain why you would love to go there.",
        ],
        starters: ["A place I would love to visit is...", "I imagine that I would...", "I would love to go there because..."],
      },
      {
        structure: [
          "Beginning: Say what you did that made you feel proud.",
          "Middle: Describe how you worked toward it and any difficulties along the way.",
          "End: Explain how it felt when you finally succeeded.",
        ],
        starters: ["I felt really proud when...", "It wasn't easy because...", "In the end, I felt..."],
      },
      {
        structure: [
          "Beginning: Set the scene — where were you, and what was normal that day?",
          "Middle: Describe the surprise and what you saw, heard, or felt at that moment.",
          "End: Explain how you reacted and how you felt afterwards.",
        ],
        starters: ["I was not expecting...", "Suddenly,...", "Afterwards, I felt..."],
      },
      {
        structure: [
          "Beginning: Name your hobby and say how you started.",
          "Middle: Describe what you do and one thing you have learned.",
          "End: Explain why you enjoy it so much.",
        ],
        starters: ["My favourite hobby is...", "I started when...", "I enjoy it because..."],
      },
      {
        structure: [
          "Beginning: Say what the team was trying to do and what your role was.",
          "Middle: Describe a moment when the team worked well, or had a problem.",
          "End: Explain what you learned about teamwork.",
        ],
        starters: ["Our team had to...", "My job was to...", "I learned that teamwork..."],
      },
      {
        structure: [
          "Beginning: Name the place and say where it is.",
          "Middle: Describe what visitors can see, do, and taste there.",
          "End: Explain why it is worth a visit.",
        ],
        starters: ["My favourite place in Hong Kong is...", "Visitors can...", "You should go there because..."],
      },
    ],
    hard: [
      {
        structure: [
          "Beginning: What was the new thing you tried, and why did you try it?",
          "Middle: Describe what happened step by step. Were you nervous? Excited?",
          "End: How did you feel afterward? What did you learn about yourself?",
        ],
        starters: ["The first time I ever...", "At first I felt..., but then...", "Looking back, I learned that..."],
      },
      {
        structure: [
          "Beginning: Describe the challenge you faced.",
          "Middle: Explain the steps you took to work through it, including any setbacks.",
          "End: Explain what the experience taught you about yourself.",
        ],
        starters: ["One of the biggest challenges I've faced was...", "To get through it, I...", "This experience taught me..."],
      },
      {
        structure: [
          "Beginning: Say who inspires you and how you know about them.",
          "Middle: Describe what they have done or what qualities they have that inspire you.",
          "End: Explain how they have influenced the way you think or act.",
        ],
        starters: ["A person who inspires me is...", "What amazes me about them is...", "Because of them, I try to..."],
      },
      {
        structure: [
          "Beginning: Describe the mistake you made.",
          "Middle: Explain what happened as a result, and how you felt at the time.",
          "End: Explain what you learned and how you might act differently next time.",
        ],
        starters: ["A mistake I once made was...", "Because of this,...", "Looking back, I now know that..."],
      },
      {
        structure: [
          "Beginning: Name the skill and say why it interests you.",
          "Middle: Explain how you imagine learning it, and what challenges you might face.",
          "End: Explain what you hope achieving this skill would mean to you.",
        ],
        starters: ["A skill I would love to learn is...", "I imagine that learning it would involve...", "If I mastered this skill, I would feel..."],
      },
      {
        structure: [
          "Beginning: Introduce how technology plays a role in your learning or play.",
          "Middle: Give specific examples comparing how things used to be done versus now.",
          "End: Share your overall view on whether this change has been mostly positive or has downsides too.",
        ],
        starters: ["Technology has changed the way I...", "For example,...", "Overall, I think this change has..."],
      },
      {
        structure: [
          "Beginning: Explain who you disagreed with and what the disagreement was about.",
          "Middle: Describe what each of you said and how the situation developed. Did it get tense?",
          "End: Explain how you resolved it and what you learned about listening to others.",
        ],
        starters: ["I disagreed with...", "At first, we...", "In the end, I realised..."],
      },
      {
        structure: [
          "Beginning: Describe the tradition and when it happens.",
          "Middle: Explain step by step what your family does, adding sensory details.",
          "End: Explain why this tradition matters and what it says about your family.",
        ],
        starters: ["In my family, we always...", "Every year,...", "This tradition matters to me because..."],
      },
      {
        structure: [
          "Beginning: Use the sentence to set the scene — who is there, and why is the door important?",
          "Middle: Build tension. What does the character see or hear when they go through?",
          "End: Bring the story to a satisfying ending that shows how the character changed or what they discovered.",
        ],
        starters: ["The door had never been open before...", "Slowly, I stepped...", "Behind the door, I found..."],
      },
      {
        structure: [
          "Beginning: Name the book, film, or show and briefly say what it is about.",
          "Middle: Explain the idea or moment that made you think differently, using a specific example.",
          "End: Describe how your thinking has changed since then.",
        ],
        starters: ["A story that changed my thinking is...", "One moment that stood out was...", "Since then, I have started to..."],
      },
    ],
    expert: [
      {
        structure: [
          "Introduction: State your opinion clearly in one sentence.",
          "Body: Give at least two reasons for your opinion — for each reason, add a specific example or supporting detail, not just the reason alone.",
          "Conclusion: Restate your opinion and explain why it matters.",
        ],
        starters: ["I believe that...", "Firstly,...", "Secondly,...", "In conclusion,..."],
      },
      {
        structure: [
          "Introduction: State your opinion clearly in one sentence.",
          "Body: Give at least two reasons for your opinion — for each reason, add a specific example or supporting detail, not just the reason alone.",
          "Conclusion: Restate your opinion and explain why it matters.",
        ],
        starters: ["I believe that...", "Firstly,...", "Secondly,...", "In conclusion,..."],
      },
      {
        structure: [
          "Introduction: State your opinion clearly in one sentence.",
          "Body: Give at least two reasons for your opinion — for each reason, add a specific example or supporting detail, not just the reason alone.",
          "Conclusion: Restate your opinion and explain why it matters.",
        ],
        starters: ["I believe that...", "Firstly,...", "Secondly,...", "In conclusion,..."],
      },
      {
        structure: [
          "Introduction: State your opinion clearly in one sentence.",
          "Body: Give at least two reasons for your opinion — for each reason, add a specific example or supporting detail, not just the reason alone.",
          "Conclusion: Restate your opinion and explain why it matters.",
        ],
        starters: ["I believe that...", "Firstly,...", "Secondly,...", "In conclusion,..."],
      },
      {
        structure: [
          "Introduction: State your opinion clearly in one sentence.",
          "Body: Give at least two reasons for your opinion — for each reason, add a specific example or supporting detail, not just the reason alone.",
          "Conclusion: Restate your opinion and explain why it matters.",
        ],
        starters: ["I believe that...", "Firstly,...", "Secondly,...", "In conclusion,..."],
      },
      {
        structure: [
          "Introduction: State your opinion clearly in one sentence.",
          "Body: Give at least two reasons for your opinion — for each reason, add a specific example or supporting detail, not just the reason alone.",
          "Conclusion: Restate your opinion and explain why it matters.",
        ],
        starters: ["I believe that...", "Firstly,...", "Secondly,...", "In conclusion,..."],
      },
      {
        structure: [
          "Introduction: State your opinion clearly in one sentence.",
          "Body: Give at least two reasons for your opinion — for each reason, add a specific example or supporting detail, not just the reason alone.",
          "Conclusion: Restate your opinion and explain why it matters.",
        ],
        starters: ["I believe that...", "Firstly,...", "Secondly,...", "In conclusion,..."],
      },
      {
        structure: [
          "Introduction: State your opinion clearly in one sentence.",
          "Body: Give at least two reasons for your opinion — for each reason, add a specific example or supporting detail, not just the reason alone.",
          "Conclusion: Restate your opinion and explain why it matters.",
        ],
        starters: ["I believe that...", "Firstly,...", "Secondly,...", "In conclusion,..."],
      },
      {
        structure: [
          "Introduction: State your opinion clearly in one sentence.",
          "Body: Give at least two reasons for your opinion — for each reason, add a specific example or supporting detail, not just the reason alone.",
          "Conclusion: Restate your opinion and explain why it matters.",
        ],
        starters: ["I believe that...", "Firstly,...", "Secondly,...", "In conclusion,..."],
      },
      {
        structure: [
          "Introduction: State your opinion clearly in one sentence.",
          "Body: Give at least two reasons for your opinion — for each reason, add a specific example or supporting detail, not just the reason alone.",
          "Conclusion: Restate your opinion and explain why it matters.",
        ],
        starters: ["I believe that...", "Firstly,...", "Secondly,...", "In conclusion,..."],
      },
    ],
  };

  // General craft techniques, shown alongside the tier-specific structure
  // hints (based on common elementary narrative/opinion-writing guidance:
  // small-moment focus, sensory/descriptive detail, dialogue, figurative language).
  window.App.Content.WRITING_CRAFT_TIPS = [
    "Zoom in on one small moment instead of describing a whole day — small, specific details are more interesting than a big general summary.",
    "Use dialogue — let someone talk! \"I can't believe it!\" she shouted.",
    "Add sensory details — what did you see, hear, smell, or feel?",
    "Try a simile — compare two things using \"like\" or \"as\" (e.g. \"as fast as a cheetah\").",
  ];

  window.App.Content.WRITING_MODEL_ESSAYS = {
    easy: [
      "My favourite animal is the red panda. It has soft, reddish-brown fur, a long fluffy tail, and a face that almost looks like a mask. Red pandas live in trees in the mountains and are very good climbers. They mostly eat bamboo, but they also like fruit! I love red pandas because they look so gentle and curious, and I think it would be amazing to watch one climb through the trees in real life.",
      "My favourite food is dim sum, especially har gow (shrimp dumplings). The wrapper is soft and a little chewy, and inside there's juicy, sweet shrimp that bursts with flavour when you bite into it. My family usually eats dim sum together on Sunday mornings, and I always look forward to picking my favourite dishes from the trolley. I love dim sum because it's not just tasty — it's also a fun way to spend time with my family, trying lots of different small dishes together.",
      "My favourite room in my house is my bedroom, which is upstairs next to the bathroom. Inside, there is a soft blue bed, a wooden desk where I do my homework, and a shelf full of my favourite books and toys. On the wall, I have a poster of outer space that I got for my birthday. I like this room because it feels cosy and it's the one place that is completely mine, where I can read, draw, or just relax after a long day at school.",
      "My best friend is called Mia, and we have known each other since we were in Primary 2. Mia is funny, kind, and always ready to help me if I don't understand my homework. On weekends, we love riding our bikes around the neighbourhood and building blanket forts in her living room. Mia is a great friend because she always listens when I'm upset, and she never forgets to save me a seat at lunch.",
      "A fun place I like to visit is the playground near my grandma's flat. It has a tall slide, a climbing frame shaped like a pirate ship, and swings that go really high. When I'm there, I usually race my cousins to see who can climb to the top the fastest, and afterwards we buy ice pops from the little shop nearby. I enjoy going there because it's always full of other children to play with, and I always come home feeling happy and tired out.",
      "I have a pet hamster named Biscuit. He is small and golden-brown, with tiny paws and round black eyes. Biscuit loves running on his wheel at night and stuffing sunflower seeds into his cheeks until they look huge and puffy. I love my pet because he is always fun to watch, and even though he can't talk, he seems happy whenever I open his cage to say hello.",
      "My favourite season is autumn. The weather is cool and breezy, and the leaves on the trees turn red, orange, and gold. When I walk to the park, I can hear the leaves crunching under my shoes. I love this season because I can wear my warm jumper, fly kites with my brother, and drink hot chocolate when we get home.",
      "My favourite game is a board game called Snakes and Ladders. To play, you roll a dice and move your counter along the squares. If you land on a ladder, you climb up, but if you land on a snake, you slide down! It is fun because nobody knows who will win until the very last turn, and my whole family laughs together while we play.",
      "There are five people in my family: my mum, my dad, my older sister, my grandma, and me. On Sunday afternoons, we usually cook dinner together in the kitchen, and my grandma teaches us her secret recipe for fried rice. My family is special to me because we always help each other, and there is always someone to talk to.",
      "Every morning, I take the bus to school with my dad. On the way, I see a busy market where people are buying fresh fruit, and a small park where old men play chess. I can hear the bus engine and the birds singing in the trees. When I arrive at school, I feel happy and ready to see my friends.",
    ],
    medium: [
      "One sunny Saturday, I spent the whole afternoon with my cousin at the park near our house. First, we rode our bikes around the big pond, racing each other to the old oak tree. Then we stopped to feed the ducks the bread crumbs we'd brought, laughing every time one duck chased the others away from the food. Later, we lay on the grass and made up funny shapes out of the clouds until it started getting dark. By the end of the day, I felt happy and a little sleepy, and I couldn't wait to tell my mum about the duck that stole all the bread.",
      "One day, I noticed my younger neighbour struggling to carry her heavy school bag up the stairs. I decided to walk over and offer to carry it for her the rest of the way. As we climbed the stairs together, she told me she'd hurt her wrist during PE class that morning, which was why the bag felt so heavy. Afterwards, I felt really good knowing I had made her day a little easier, and she thanked me with a big smile before going into her flat.",
      "My favourite festival is the Mid-Autumn Festival, which happens every autumn under a full moon. During this festival, my family gathers on our balcony in the evening, lights paper lanterns, and shares different flavours of mooncake while looking up at the bright moon together. My grandmother always tells us the story of Chang'e, the moon goddess, while we eat. What I enjoy most is how relaxed and close everyone feels that night, with no rushing around — just good food, family, and stories under the moonlight.",
      "One school day I'll never forget was our class trip to the science museum. Instead of sitting at our desks, we spent the whole day exploring exhibits about space, electricity, and the human body. During the day, my favourite part was a machine that let me feel what it's like to lift a car using a lever, and my best friend and I tried it over and over until the teacher called us away. This day was memorable because learning felt like an adventure instead of just reading from a textbook.",
      "A place I would love to visit is Japan, especially during cherry blossom season in spring. I imagine walking under trees covered in soft pink flowers, trying different kinds of Japanese sweets, and maybe riding one of the famous bullet trains between cities. I would love to go there because I've seen so many photos and videos of the cherry blossoms, and I think it would be amazing to see something that beautiful with my own eyes instead of just on a screen.",
      "I felt really proud when I finally learned to swim a full length of the pool without stopping. It wasn't easy because I used to panic and grab the side of the pool whenever I got tired halfway through. My swimming teacher kept encouraging me to just keep kicking a little longer each week, even when I wanted to give up. In the end, I felt amazing when I touched the wall at the far end and realised I had actually done it — my whole family cheered from the side of the pool.",
      "I was not expecting anything special on my tenth birthday, because my parents had said we would just have a quiet dinner at home. When I opened the front door, the lights suddenly turned on and my friends and cousins jumped out shouting, \"Surprise!\" My mouth fell open and I stood frozen for a few seconds before I started laughing. Afterwards, I felt so happy and a little embarrassed that I had not noticed any of the clues.",
      "My favourite hobby is baking. I started when my aunt let me help her make cupcakes during the summer holidays, and I was surprised at how much I enjoyed measuring and mixing everything carefully. Since then, I have learned that baking needs patience, because the oven cannot be rushed. I enjoy it because I can create something delicious, and I love watching my family's faces when they taste it.",
      "Last term, my class worked in teams to build a bridge from spaghetti and marshmallows. My job was to test each piece to make sure it was strong enough. At first our bridge collapsed, and we argued about whose fault it was, but then we listened to each other and added extra triangles for support. I learned that a team works best when everyone shares ideas and nobody blames anyone.",
      "My favourite place in Hong Kong is Victoria Peak. You can reach the top on a historic tram that climbs up the steep hill. Visitors can look out at the sparkling skyline and harbour, walk around the circular trail, and try egg waffles at the top. You should go there at sunset, because the whole city glows gold and then lights up as it gets dark.",
    ],
    hard: [
      "The first time I ever tried rock climbing, I almost didn't go through with it. Standing at the bottom of the wall, looking up at how high it went, my stomach felt tight with nerves. At first I felt like everyone around me was probably a better climber, but then my instructor reminded me that everyone starts somewhere. I took a deep breath and grabbed the first hold. Slowly, one hand and one foot at a time, I made it about halfway up before my arms started shaking too much to continue. Looking back, I learned that trying something new doesn't mean you have to be good at it right away — it just means being brave enough to start.",
      "One of the biggest challenges I've faced was struggling with maths after moving up to a harder class. At first, I felt completely lost during every lesson, and I was too embarrassed to ask questions in front of everyone. To get through it, I started staying a few minutes after class each week to ask my teacher one small question at a time, and I practised extra problems at home even when I didn't feel like it. This experience taught me that asking for help isn't a sign of weakness — it's often the fastest way to actually get better at something.",
      "A person who inspires me is my aunt, who became a nurse even though she had to study and work extremely hard to get through nursing school while also helping care for her younger siblings. What amazes me about her is that she never complains about the long hours at the hospital, and she still finds time to check on our family every week. Because of her, I try to remember that being tired or busy is never really a good excuse to stop caring about the people around you.",
      "A mistake I once made was telling a friend's secret to another classmate without thinking about how it might spread. Because of this, my friend found out and felt really hurt and betrayed, and it took a long time before she trusted me with anything personal again. At the time, I felt terrible and wished I could take back what I'd said, but I couldn't undo it. Looking back, I now know that a secret is only worth keeping if you truly keep it to yourself, no matter how small or exciting it might feel to share.",
      "A skill I would love to learn is playing the guitar, because I love how one instrument can create so many different moods, from calm and slow to fast and exciting. I imagine that learning it would involve a lot of frustrating hours where my fingers hurt from pressing the strings and I can barely form a single chord properly. Even so, if I mastered this skill, I would feel incredibly proud, and I imagine it would be amazing to finally play a full song for my family instead of just messing around with random notes.",
      "Technology has changed the way I learn and play in ways that would have seemed impossible to my parents when they were my age. For example, instead of looking up facts in a heavy encyclopedia at the library, I can now find an answer to almost any question in seconds using a tablet, and instead of only playing board games with people in the same room, I can play video games with cousins who live in another country. Overall, I think this change has mostly been positive because it makes learning faster and playing more connected, although I do sometimes think it would be nice to spend more time outside instead of looking at a screen.",
      "I once disagreed with my best friend about which idea to use for our science project. She wanted to build a volcano, but I thought it had been done too many times, so I suggested testing which paper towel absorbs the most water. At first, we both refused to change our minds, and we did not speak for the whole lunch break. In the end, I realised that I had only listed reasons why her idea was bad, and I had never asked why she liked it. When I finally listened, we decided to combine both ideas by testing volcano lava made from different liquids. I learned that listening properly can change the argument itself.",
      "In my family, we always make dumplings together on the night before Lunar New Year. Every year, my grandmother mixes the dough while my mum chops the filling, and the kitchen fills with the smell of ginger and garlic. My cousins and I fold the dumplings, and we always argue about whose look the best. This tradition matters to me because nothing else brings three generations around one table, and I know that one day I will be the one teaching my own children how to fold them.",
      "The door had never been open before. For as long as I could remember, it stood at the end of the corridor in my grandmother's house, painted dark green and locked with a rusty key that no one could find. That afternoon, however, it was slightly open, and a thin line of golden light spilled onto the floor. My heart pounded as I pushed it wider, and a cold, dusty smell drifted out. Behind the door was a tiny room lined with shelves of notebooks, each one filled with my grandmother's drawings of places she had travelled to as a girl. I sat on the floor and turned the pages until it grew dark, and I realised that the woman I thought I knew had a whole adventurous life she had never told me about.",
      "A film that changed the way I think is Wall-E, which tells the story of a small robot left alone to clean up a planet buried in rubbish. One scene that stood out was the moment when Wall-E discovers a single green plant growing in the mess and carefully protects it. Before I saw the film, I thought recycling was a boring chore. Since then, I have started to notice how much waste my own family produces, and I try to bring my own bottle to school every day.",
    ],
    expert: [
      "I believe that kindness is more important than pure honesty, though the two don't have to be opposites. Being honest matters, but honesty delivered without any care for someone's feelings can do real harm. For example, telling a friend their artwork is \"bad\" might be technically true, but it rarely helps them improve and often just makes them want to give up. Another reason is that most situations allow room for both — you can be truthful about a problem while still choosing kind, encouraging words to explain it. In conclusion, I think the best approach isn't choosing between honesty and kindness, but finding honest words that are also kind.",
      "I believe that students should not have homework every single day, though occasional homework can still be useful. Firstly, children need enough free time after school to rest, play, and spend time with family, since constant academic pressure without a break can lead to burnout and even make students dislike learning altogether. Secondly, students often have different amounts of after-school activities, such as sports or music lessons, so daily homework for everyone doesn't account for how differently busy each student's schedule already is. In conclusion, I think homework should be given a few times a week rather than daily, because balance matters just as much as practice when it comes to learning well.",
      "I believe it is better to have a few close friends rather than many friends who you don't know very well. Firstly, close friendships are built on trust and understanding that only grows over years of shared experiences, which means a close friend is far more likely to genuinely support you during a difficult time than someone you rarely spend time with. Secondly, maintaining many friendships takes a lot of time and energy, and spreading yourself too thin can mean no single friendship gets the attention it needs to grow deeper. In conclusion, while it's nice to be friendly with many people, I think true happiness comes from having a small group of people who really know and care about you.",
      "I believe that modern zoos can be acceptable, but only if their main focus is conservation and animal welfare rather than pure entertainment. Firstly, many endangered species, such as giant pandas, have been helped by careful breeding programmes in zoos, which have contributed to bringing some species back from the edge of extinction. Secondly, well-designed zoos give people, especially children, a rare chance to see and learn about animals they would otherwise only see in photos, which can build genuine care for protecting wildlife in the future. In conclusion, I think zoos are only justified when they treat animals with real care and put real effort into conservation, not when they simply keep animals on display for profit.",
      "I believe that mobile phones should not be allowed in the classroom during lessons, although they can be useful at other times. Firstly, phones are extremely distracting, and even a single notification can pull a student's attention away from an important explanation, making it harder for them to keep up with the lesson. Secondly, allowing phones during class time can create unfairness, since students with more expensive or newer phones might show off or get more attention than others, which shouldn't matter in a fair learning environment. In conclusion, I think phones should be kept away during lessons but allowed during breaks, so students can still use them for genuine emergencies or quick messages to family.",
      "I believe that being hardworking is more important than being naturally talented. Firstly, talent alone can only take a person so far — without consistent effort and practice, even a naturally gifted person will eventually be overtaken by someone who works harder and keeps improving over time. Secondly, hard work is something everyone can control and choose every day, while talent is something you either have or don't have from birth, so it seems fairer and more meaningful to admire effort rather than luck. In conclusion, while talent can offer a head start, I believe it's hard work and determination that truly determine how far someone goes in the long run.",
      "I believe that children under the age of thirteen should not be allowed to use social media, although older children can use it with guidance. Firstly, young children often cannot judge whether someone online is trustworthy, so they may share personal details or see content that upsets them. Secondly, social media is designed to keep people scrolling, and time spent on it can replace sleep, exercise, and the face-to-face friendships that matter at that age. In conclusion, I think children should wait until they are old enough to understand the risks, because a few extra years of childhood away from a screen is worth more than being online early.",
      "I believe that a big city is a better place to live than a small town, especially for young people. Firstly, a city offers many more opportunities, such as museums, libraries, sports clubs, and specialist schools, so people can discover talents they did not know they had. Secondly, cities bring together people from many backgrounds, which teaches us to understand different cultures and ideas; in Hong Kong, for example, I hear several languages every day. In conclusion, although small towns are quieter, I think the variety and energy of a city helps people grow more.",
      "I believe that schools should require students to wear a uniform. Firstly, a uniform reduces the pressure to compete over expensive clothes, so students are judged by who they are rather than by what they own. Secondly, it saves time and money for families, since parents do not have to buy many different outfits or argue with their children about what to wear each morning. In conclusion, although uniforms limit personal style a little, I think the fairness and simplicity they bring are more important, and students can still express themselves in other ways.",
      "I believe that protecting the environment is more important than growing the economy, because the two are not equally reversible. Firstly, a damaged environment can take centuries to recover; for example, a species that becomes extinct can never be brought back, whereas an economy can recover after a downturn. Secondly, a healthy economy depends on a healthy environment, since farming, fishing, and tourism all need clean water, stable weather, and rich soil. In conclusion, growth that destroys the environment is only borrowing from the future, so protecting nature should come first.",
    ],
  };
})();
