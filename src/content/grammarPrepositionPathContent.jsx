// Grammar path: "Prepositions Explained" — the beginner-friendly companion to
// the older Prepositions category (which drills advanced collocations such as
// "contingent on"). Starts by explaining what a preposition IS, using a mouse
// and a box (in / on / under / over / through / beside ...), and the rule
// that a preposition is followed by a noun or pronoun (its "object").
// Registered into GRAMMAR_PATHS; same level / Learn-card shape as the tense
// paths. Items use correctIndex 0 (options are shuffled at runtime).
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  const fb = (id, sentence, options, explanation) => ({ id, type: "fillblank", sentence, options, correctIndex: 0, explanation });
  const mc = (id, prompt, options, explanation) => ({ id, type: "mc", prompt, options, correctIndex: 0, explanation });

  const LEVELS = [
    {
      id: "pe-1",
      emoji: "🐭",
      title: "What is a preposition?",
      blurb: "A mouse and a box: in, on, under, over, beside",
      learn: {
        intro:
          "A preposition is a small word that shows how one thing is related to another: where it is, when it happens, or how it moves. Imagine a mouse and a box. The mouse can be in the box, on the box, under the box, over the box, or beside the box, or it can run through a tunnel.",
        headers: ["The mouse is ... the box", "Meaning"],
        rows: [
          ["in", "inside it"],
          ["on", "on top, touching it"],
          ["under", "below it"],
          ["over", "above it, not touching"],
          ["beside", "next to it"],
          ["behind", "at the back of it"],
          ["in front of", "facing it, before it"],
          ["between", "in the middle of two boxes"],
        ],
        tips: [
          "A preposition is almost always followed by a noun or a pronoun. That word is called the OBJECT of the preposition: on the table, with him.",
          "After a preposition, use object pronouns: me, you, him, her, it, us, them.",
        ],
        mistake: "\"Sit next to I\" is wrong. After a preposition use me: \"Sit next to me.\"",
      },
      items: [
        fb("pe1-1", "The cat is sleeping ___ the bed, so I can't see it.", ["under", "on", "beside", "over"], "\"Can't see it\" tells us the cat is below the bed: under. For example: \"The ball rolled under the sofa.\""),
        fb("pe1-2", "The bird is flying ___ the house. It's above the roof.", ["over", "under", "in", "beside"], "\"Above\" and not touching means over. For example: \"The plane flew over the city.\""),
        fb("pe1-3", "The keys are ___ the bag. Open it and you'll see them.", ["in", "on", "under", "over"], "Inside a container means in. For example: \"The milk is in the fridge.\""),
        fb("pe1-4", "The book is lying ___ the table, so you can see it.", ["on", "in", "under", "through"], "On top of a surface, touching it, means on. For example: \"The cup is on the shelf.\""),
        fb("pe1-5", "My house is ___ the school and the park.", ["between", "over", "through", "under"], "In the middle of two things means between. For example: \"The shop is between the bank and the café.\""),
        fb("pe1-6", "The train goes ___ a long tunnel.", ["through", "on", "beside", "between"], "Going in one side and out the other means through. For example: \"We walked through the forest.\""),
        fb("pe1-7", "Sit ___ me, please. I want to talk to you.", ["beside", "between", "through", "under"], "Next to a person means beside. For example: \"He sat beside his grandma.\""),
        mc("pe1-8", "In the sentence \"The mouse is under the box\", which word is the OBJECT of the preposition?", ["box", "mouse", "under", "is"], "\"Under\" is the preposition. The noun that comes after it, \"the box\", is its object. For example: in \"on the table\", the table is the object."),
        fb("pe1-9", "Come and sit with ___ .", ["me", "I", "my", "mine"], "After a preposition (with), use an object pronoun: me. For example: \"This is for him.\""),
      ],
    },
    {
      id: "pe-2",
      emoji: "📍",
      title: "Place: at, in, on",
      blurb: "in Hong Kong, on the table, at the bus stop",
      learn: {
        intro: "Three small words, at, in and on, are used for place. Each one is for a different kind of place.",
        headers: ["Preposition", "Use"],
        rows: [
          ["in", "inside a space or container, or a town / country: in the room, in Hong Kong"],
          ["on", "on a surface, or a street / floor: on the table, on the second floor"],
          ["at", "a point or a place: at the bus stop, at school, at the door"],
        ],
        tips: [
          "In = inside something with borders (a room, a box, a city). On = touching a surface. At = a specific point.",
          "Common phrases: at home, at school, in bed, on the bus, on the phone.",
        ],
        mistake: "",
      },
      items: [
        fb("pe2-1", "She lives ___ Hong Kong.", ["in", "on", "at", "to"], "Use in for a city or country. For example: \"He lives in Japan.\""),
        fb("pe2-2", "The children are ___ school today.", ["at", "on", "to", "into"], "\"At school\" is the common phrase for being at that place. For example: \"Dad is at work.\""),
        fb("pe2-3", "There's a poster ___ the wall.", ["on", "in", "at", "to"], "A poster is attached to a surface: on. For example: \"There's a clock on the wall.\""),
        fb("pe2-4", "I left my phone ___ the kitchen table.", ["on", "in", "at", "to"], "On a surface: on. For example: \"The plates are on the counter.\""),
        fb("pe2-5", "We're waiting ___ the bus stop.", ["at", "on", "in", "to"], "A specific point uses at. For example: \"I'll meet you at the gate.\""),
        fb("pe2-6", "My grandma lives ___ the third floor.", ["on", "in", "at", "to"], "Floors use on. For example: \"Our classroom is on the second floor.\""),
        fb("pe2-7", "The milk is ___ the fridge.", ["in", "on", "at", "to"], "Inside a container: in. For example: \"The pens are in the box.\""),
        fb("pe2-8", "She isn't ___ home right now.", ["at", "in", "on", "to"], "\"At home\" is a fixed phrase. For example: \"Are you at home tonight?\""),
      ],
    },
    {
      id: "pe-3",
      emoji: "⏰",
      title: "Time: at, on, in",
      blurb: "at 6 o'clock, on Monday, in July",
      learn: {
        intro: "The same three words are used for time, but they follow different rules.",
        headers: ["Preposition", "Use"],
        rows: [
          ["at", "clock times and points: at 6 o'clock, at noon, at night"],
          ["on", "days and dates: on Monday, on 1 May, on my birthday"],
          ["in", "months, seasons, years, parts of the day: in July, in winter, in 2024, in the morning"],
        ],
        tips: [
          "We say in the morning / afternoon / evening, but at night.",
          "No preposition before this, next, last or every: \"See you next Friday.\"",
        ],
        mistake: "",
      },
      items: [
        fb("pe3-1", "The film starts ___ 7:30.", ["at", "on", "in", "for"], "Clock times use at. For example: \"The lesson ends at 3 o'clock.\""),
        fb("pe3-2", "My birthday is ___ 15 March.", ["on", "in", "at", "to"], "Dates use on. For example: \"Sports Day is on 10 October.\""),
        fb("pe3-3", "We go skiing ___ winter.", ["in", "on", "at", "for"], "Seasons use in. For example: \"It is warm in spring.\""),
        fb("pe3-4", "I always brush my teeth ___ night.", ["at", "in", "on", "to"], "\"At night\" is a fixed phrase. For example: \"Owls hunt at night.\""),
        fb("pe3-5", "She was born ___ 2014.", ["in", "on", "at", "to"], "Years use in. For example: \"We moved here in 2019.\""),
        fb("pe3-6", "See you ___ Saturday!", ["on", "in", "at", "by"], "Days of the week use on. For example: \"We have a test on Monday.\""),
        fb("pe3-7", "I have football practice ___ the afternoon.", ["in", "on", "at", "to"], "Parts of the day (morning, afternoon, evening) use in. For example: \"I read in the evening.\""),
        fb("pe3-8", "We don't have school ___ Sundays.", ["on", "in", "at", "to"], "Days use on. For example: \"Shops open on Saturdays.\""),
        fb("pe3-9", "It's very hot ___ July.", ["in", "on", "at", "for"], "Months use in. For example: \"Her birthday is in May.\""),
      ],
    },
    {
      id: "pe-4",
      emoji: "🚶",
      title: "Movement: to, from, into, across, through",
      blurb: "The rabbit ran into the hole.",
      learn: {
        intro: "Some prepositions show movement from one place to another.",
        headers: ["Preposition", "Use"],
        rows: [
          ["to", "towards a place: go to school"],
          ["from", "the starting point: from home"],
          ["into / out of", "entering / leaving: into the room, out of the box"],
          ["across", "from one side to the other: across the road"],
          ["through", "in one side and out the other: through the tunnel"],
          ["along / up / down / around", "along the river, up the stairs, down the hill, around the corner"],
        ],
        tips: [
          "Into shows movement inside; in shows position: The cat jumped into the box. The cat is in the box.",
          "With go home, do not use to: \"I go home,\" not \"I go to home.\"",
        ],
        mistake: "",
      },
      items: [
        fb("pe4-1", "We walked ___ the road carefully.", ["across", "through", "between", "at"], "From one side to the other of a road: across. For example: \"They swam across the river.\""),
        fb("pe4-2", "The rabbit ran ___ the hole.", ["into", "in", "on", "at"], "Movement to the inside uses into. For example: \"She jumped into the pool.\""),
        fb("pe4-3", "She took a book ___ of her bag.", ["out", "off", "away", "from"], "\"Out of\" shows moving from inside to outside. For example: \"He came out of the room.\""),
        fb("pe4-4", "The train goes ___ the tunnel.", ["through", "across", "among", "at"], "In one end and out the other: through. For example: \"We drove through the forest.\""),
        fb("pe4-5", "Go ___ the stairs to the second floor.", ["up", "on", "in", "at"], "Moving to a higher level: up. For example: \"They climbed up the hill.\""),
        fb("pe4-6", "We walked ___ the river for an hour.", ["along", "between", "into", "at"], "Following the length of something: along. For example: \"We cycled along the beach.\""),
        fb("pe4-7", "I go ___ school by bus.", ["to", "at", "in", "into"], "Movement towards a place uses to. For example: \"She goes to the library on Friday.\""),
        fb("pe4-8", "He walked ___ the corner and disappeared.", ["around", "across", "at", "in"], "Going round a corner: around. For example: \"The car drove around the bend.\""),
      ],
    },
    {
      id: "pe-5",
      emoji: "🔗",
      title: "What comes after a preposition?",
      blurb: "with her, good at swimming",
      learn: {
        intro:
          "A preposition is followed by a noun, an object pronoun, or a verb ending in -ing. It is never followed by a subject pronoun (I, he, she, we, they) or the base verb.",
        headers: ["Rule", "Example"],
        rows: [
          ["Use object pronouns", "with me, for you, to him, from her, with us, to them"],
          ["NOT subject pronouns", "not with I, for he, to they"],
          ["Verb after a preposition", "verb + -ing: good at swimming, afraid of flying"],
        ],
        tips: [
          "After a preposition, use me, you, him, her, it, us, them.",
          "If a verb follows a preposition, add -ing: I'm good at drawing. She is afraid of walking alone.",
        ],
        mistake: "\"I'm good at swim\" and \"for I\" are wrong. Say \"good at swimming\" and \"for me\".",
      },
      items: [
        fb("pe5-1", "Anna is sitting next to ___ .", ["me", "I", "my", "mine"], "After a preposition (next to), use the object pronoun: me. For example: \"Come with us.\""),
        fb("pe5-2", "This letter is for ___ , Tom.", ["you", "your", "yours", "yourself"], "After a preposition (for), use an object pronoun: you. For example: \"This present is from them.\""),
        fb("pe5-3", "Are you coming with ___ ?", ["us", "we", "our", "ours"], "After with, use the object pronoun: us. For example: \"Sit beside her.\""),
        fb("pe5-4", "The teacher spoke to ___ (the boys).", ["them", "they", "their", "theirs"], "After to, use the object pronoun: them. For example: \"I gave the book to him.\""),
        fb("pe5-5", "I'm good at ___ .", ["swimming", "swim", "to swim", "swam"], "A verb after a preposition ends in -ing: swimming. For example: \"She is good at drawing.\""),
        fb("pe5-6", "She is afraid of ___ in the dark.", ["walking", "walk", "to walk", "walked"], "A verb after a preposition ends in -ing: walking. For example: \"He is afraid of flying.\""),
        fb("pe5-7", "Thank you for ___ me with my homework.", ["helping", "help", "to help", "helped"], "A verb after a preposition ends in -ing: helping. For example: \"Thanks for coming.\""),
        fb("pe5-8", "He left without ___ goodbye.", ["saying", "say", "to say", "said"], "A verb after a preposition ends in -ing: saying. For example: \"She left without waiting.\""),
      ],
    },
    {
      id: "pe-6",
      emoji: "🧲",
      title: "Adjective + preposition pairs",
      blurb: "good at, afraid of, interested in",
      learn: {
        intro: "Some adjectives always go with a particular preposition. These pairs have to be learned together.",
        headers: ["Pair", "Example"],
        rows: [
          ["good / bad at", "She is good at maths."],
          ["afraid / scared of", "He is afraid of dogs."],
          ["interested in", "I'm interested in space."],
          ["excited about", "We're excited about the trip."],
          ["kind / nice to", "Be kind to animals."],
          ["different from", "Cats are different from dogs."],
          ["proud of", "She is proud of her son."],
          ["worried about", "Mum is worried about the exam."],
        ],
        tips: [
          "Learn the adjective and its preposition as one unit.",
          "After the preposition, use a noun, pronoun, or verb + -ing.",
        ],
        mistake: "",
      },
      items: [
        fb("pe6-1", "She's very good ___ drawing.", ["at", "in", "on", "for"], "\"Good at\" is the fixed pair for skills. For example: \"He's bad at cooking.\""),
        fb("pe6-2", "Are you afraid ___ spiders?", ["of", "from", "for", "at"], "\"Afraid of\" is the fixed pair. For example: \"She is scared of the dark.\""),
        fb("pe6-3", "He's interested ___ ancient history.", ["in", "on", "at", "of"], "\"Interested in\" is the fixed pair. For example: \"I'm interested in music.\""),
        fb("pe6-4", "We're really excited ___ the school trip.", ["about", "of", "for", "at"], "\"Excited about\" is the fixed pair. For example: \"They are excited about the holiday.\""),
        fb("pe6-5", "Please be kind ___ the new student.", ["to", "for", "with", "at"], "\"Kind to\" is the fixed pair. For example: \"Be nice to your sister.\""),
        fb("pe6-6", "My bike is different ___ yours.", ["from", "for", "at", "about"], "\"Different from\" is the fixed pair. For example: \"This is different from that.\""),
        fb("pe6-7", "Dad is proud ___ my results.", ["of", "for", "about", "at"], "\"Proud of\" is the fixed pair. For example: \"She is proud of her team.\""),
        fb("pe6-8", "Don't be worried ___ the test.", ["about", "of", "from", "at"], "\"Worried about\" is the fixed pair. For example: \"He is worried about his grandma.\""),
      ],
    },
  ];

  window.App.Content.GRAMMAR_PATHS = window.App.Content.GRAMMAR_PATHS || [];
  window.App.Content.GRAMMAR_PATHS.push({
    key: "prepexplained",
    emoji: "📍",
    label: "Prepositions Explained",
    blurb: "What a preposition is, then place, time, movement and what follows.",
    sections: { 0: "The basics", 1: "Place, time and movement", 4: "What follows a preposition", 5: "Fixed pairs" },
    levels: LEVELS,
  });
})();
