// Grammar path B: "Articles & Quantifiers" — a / an / the / no article, then
// countable vs uncountable nouns and the words that go with them (much/many/
// a lot of, some/any, few/a few, little/a little, each/every/all/both), a
// mixed review level, and an editing level. This is a common gap for
// Cantonese-speaking learners, since Cantonese has no articles and no plural
// marking on nouns.
// Registered into GRAMMAR_PATHS; same level / Learn-card shape as the other
// paths (Learn card first, then 10 items; the editing level matches Past
// Simple level 11). Items use correctIndex 0 (options are shuffled at
// runtime). Each explanation gives the rule plus a second example that is
// not in the item itself.
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  const fb = (id, sentence, options, explanation) => ({ id, type: "fillblank", sentence, options, correctIndex: 0, explanation });
  const mc = (id, prompt, options, explanation) => ({ id, type: "mc", prompt, options, correctIndex: 0, explanation });

  const LEVELS = [
    {
      id: "art-1",
      emoji: "🍎",
      title: "a or an?",
      blurb: "a dog, an elephant, an hour, a university",
      learn: {
        intro:
          "Use a before a word that starts with a consonant SOUND, and an before a word that starts with a vowel SOUND (a, e, i, o, u). It is the sound that matters, not the letter, so a few words break the pattern.",
        headers: ["Sound", "Example"],
        rows: [
          ["Consonant sound", "a dog, a cat, a big house"],
          ["Vowel sound", "an apple, an elephant, an orange"],
          ["Silent h (vowel sound)", "an hour, an honest answer"],
          ["\"yoo\" sound (consonant sound, even with a vowel letter)", "a university, a European city, a one-way ticket"],
        ],
        tips: [
          "Say the word aloud. If it starts with a vowel sound, use an. If it starts with a consonant sound, use a — even if the first letter looks like a vowel.",
          "Watch for silent h (an hour) and words that start with a \"yoo\" or \"w\" sound (a university, a one-way ticket).",
        ],
        mistake: "\"A apple\" and \"an university\" are wrong. Say \"an apple\" and \"a university\".",
      },
      items: [
        fb("art1-1", "___ apple fell from the tree.", ["An", "A", "The", "Some"], "Apple starts with a vowel sound, so use an. For example: \"an orange\"."),
        fb("art1-2", "He is ___ honest boy who always tells the truth.", ["an", "a", "the", "some"], "Honest starts with a silent h, so it starts with a vowel sound: an honest boy. For example: \"an hour later\"."),
        fb("art1-3", "We waited for ___ hour before the bus came.", ["an", "a", "the", "some"], "Hour starts with a silent h, so use an. For example: \"an honest answer\"."),
        fb("art1-4", "She is ___ university student studying law.", ["a", "an", "the", "some"], "University starts with a \"yoo\" sound, a consonant sound, so use a. For example: \"a European trip\"."),
        fb("art1-5", "I need ___ umbrella; it's raining outside.", ["an", "a", "the", "some"], "Umbrella starts with a vowel sound, so use an. For example: \"an idea\"."),
        fb("art1-6", "That is ___ useful tool for fixing bikes.", ["a", "an", "the", "some"], "Useful starts with a \"yoo\" sound, so use a, not an. For example: \"a uniform\"."),
        fb("art1-7", "He bought ___ orange for lunch.", ["an", "a", "the", "some"], "Orange starts with a vowel sound, so use an. For example: \"an egg\"."),
        fb("art1-8", "It took ___ one-hour flight to get there.", ["a", "an", "the", "some"], "One starts with a \"won\" sound, a consonant sound, so use a. For example: \"a one-day trip\"."),
        fb("art1-9", "She wore ___ elegant dress to the wedding.", ["an", "a", "the", "some"], "Elegant starts with a vowel sound, so use an. For example: \"an enormous cake\"."),
        fb("art1-10", "This is ___ European city famous for its bridges.", ["a", "an", "the", "some"], "European starts with a \"yoo\" sound, so use a. For example: \"a used car\"."),
      ],
    },
    {
      id: "art-2",
      emoji: "☀️",
      title: "the: something specific",
      blurb: "the dog we saw, the sun, the door",
      learn: {
        intro:
          "Use the when the listener already knows which one you mean: because it was already mentioned, because there is only one of it, or because it is obvious from the situation.",
        headers: ["Why the?", "Example"],
        rows: [
          ["Already mentioned", "I saw a cat. The cat was black."],
          ["Only one exists", "the sun, the sky, the Internet"],
          ["Obvious from the situation", "Please close the door. (this room's door)"],
          ["A well-known landmark or building", "the Great Wall, the Star Ferry"],
        ],
        tips: [
          "The second time you mention a noun, it usually needs the, because now the listener knows which one.",
          "Many famous landmarks, rivers and named buildings use the: the Great Wall, the Peak Tram, the Mississippi River.",
        ],
        mistake: "\"I saw a cat. A cat was black\" is wrong the second time. Say \"I saw a cat. The cat was black.\"",
      },
      items: [
        fb("art2-1", "I bought a book yesterday. ___ book is very interesting.", ["The", "A", "An", "Some"], "The book has already been mentioned, so the second time we use the. For example: \"I met a boy. The boy was friendly.\""),
        fb("art2-2", "___ Moon travels around the Earth once a month.", ["The", "A", "An", "Some"], "There is only one Moon, so it takes the. For example: \"The sun rises in the east.\""),
        fb("art2-3", "Can you close ___ window? It's cold in here.", ["the", "a", "an", "some"], "It is clear which window is meant, the one in this room, so use the. For example: \"Please turn off the light.\""),
        fb("art2-4", "___ Great Wall of China is very long.", ["The", "A", "An", "Some"], "Famous landmarks like this usually take the. For example: \"the Star Ferry\"."),
        fb("art2-5", "I live near ___ river that flows through our town.", ["the", "a", "an", "some"], "There is one particular river being talked about, so use the. For example: \"the park near my flat\"."),
        fb("art2-6", "Please pass me ___ salt.", ["the", "a", "an", "some"], "There is only one salt pot on the table, so it is clear which one: the salt. For example: \"Pass me the pepper.\""),
        fb("art2-7", "Look at ___ sky! It's turning orange.", ["the", "a", "an", "some"], "Sky is something everyone shares and there is only one, so use the. For example: \"Look at the stars.\""),
        fb("art2-8", "I met a girl at the park. ___ girl was very friendly.", ["The", "A", "An", "Some"], "The girl has already been mentioned, so the second time we use the. For example: \"I saw a film. The film was long.\""),
        fb("art2-9", "___ Hong Kong International Airport is very busy.", ["The", "A", "An", "Some"], "Names of airports usually take the. For example: \"the Peak Tram\"."),
        fb("art2-10", "We could hear ___ wind howling outside all night.", ["the", "a", "an", "some"], "It is obvious from the situation which wind is meant, the one outside right now. For example: \"Listen to the rain.\""),
      ],
    },
    {
      id: "art-3",
      emoji: "🚫",
      title: "No article at all",
      blurb: "Cats are clever. I love music. We go to bed at nine.",
      learn: {
        intro:
          "Sometimes English uses no article at all: when talking about things in general (plural or uncountable nouns), and in some fixed phrases about daily life, such as meals, sports and places like school, bed and work.",
        headers: ["No article", "Example"],
        rows: [
          ["General plural nouns", "Cats are clever animals."],
          ["General uncountable nouns", "I love music. Honesty is important."],
          ["Meals", "We have breakfast at seven."],
          ["Sports and games", "She plays football every weekend."],
          ["Fixed phrases: school, bed, work, home", "He goes to school by bus. They go to bed early."],
          ["Transport: by bus / by car / by plane", "We travel by plane every summer."],
        ],
        tips: [
          "When you mean ALL cats, or music in general, do not use a, an or the.",
          "\"Go to school\", \"go to bed\" and \"go to work\" describe the normal purpose of the place, with no article at all.",
        ],
        mistake: "\"The cats are wonderful pets\" (meaning cats in general) and \"He goes to the school by bus\" (meaning he is a pupil there) are usually wrong. Say \"Cats are wonderful pets\" and \"He goes to school by bus.\"",
      },
      items: [
        mc("art3-1", "Which sentence is correct?", ["Cats are wonderful pets.", "The cats are wonderful pets.", "A cats are wonderful pets."], "Talking about cats in general needs no article. For example: \"Dogs are loyal animals.\""),
        mc("art3-2", "Which sentence is correct?", ["I love music.", "I love the music.", "I love a music."], "Music in general, not one particular song, needs no article. For example: \"I enjoy reading.\""),
        mc("art3-3", "Which sentence is correct?", ["We usually have breakfast at seven.", "We usually have a breakfast at seven.", "We usually have the breakfast at seven."], "Meals such as breakfast, lunch and dinner usually take no article. For example: \"They have lunch at noon.\""),
        mc("art3-4", "Which sentence is correct?", ["She plays football every weekend.", "She plays a football every weekend.", "She plays the football every weekend."], "Sports and games usually take no article. For example: \"He plays chess after school.\""),
        mc("art3-5", "Which sentence is correct?", ["He goes to school by bus.", "He goes to the school by bus.", "He goes to a school by bus."], "\"Go to school\" (as a pupil) is a fixed phrase with no article. For example: \"She goes to work early.\""),
        mc("art3-6", "Which sentence is correct?", ["They go to bed at nine o'clock.", "They go to the bed at nine o'clock.", "They go to a bed at nine o'clock."], "\"Go to bed\" is a fixed phrase with no article. For example: \"I go to bed late on Fridays.\""),
        mc("art3-7", "Which sentence is correct?", ["My father goes to work by MTR.", "My father goes to the work by MTR.", "My father goes to a work by MTR."], "\"Go to work\" is a fixed phrase with no article. For example: \"She walks to work every day.\""),
        mc("art3-8", "Which sentence is correct?", ["We travel by plane every summer.", "We travel by the plane every summer.", "We travel by a plane every summer."], "Modes of transport after by usually take no article. For example: \"He came by taxi.\""),
        mc("art3-9", "Which sentence is correct?", ["Honesty is very important.", "The honesty is very important.", "An honesty is very important."], "Honesty is an uncountable idea used in general, so it needs no article. For example: \"Patience is a virtue.\""),
        mc("art3-10", "Which sentence is correct?", ["Children need plenty of sleep.", "The children need plenty of sleep.", "A children need plenty of sleep."], "Talking about children in general needs no article. For example: \"Teenagers need more sleep than adults.\""),
      ],
    },
    {
      id: "art-4",
      emoji: "🔢",
      title: "Countable or uncountable?",
      blurb: "many books, much water, a lot of friends",
      learn: {
        intro:
          "Countable nouns can be counted and have a plural form (one book, two books). Uncountable nouns have no plural and are treated as one whole (water, rice, homework, information, advice). Use many with countable plural nouns, and much with uncountable nouns. A lot of works with both.",
        headers: ["Kind of noun", "Words to use"],
        rows: [
          ["Countable (book, friend, student)", "many books, a few friends, how many students?"],
          ["Uncountable (water, rice, homework, money, information)", "much water, a little rice, how much money?"],
          ["Both", "a lot of books / a lot of water"],
        ],
        tips: [
          "Ask: can I say \"one ___, two ___s\"? If yes, it is countable and needs many. If not, it is uncountable and needs much.",
          "Common uncountable nouns that trip people up: homework, advice, information, news, money, furniture.",
        ],
        mistake: "\"She has much friends\" and \"much homeworks\" are wrong. Say \"She has many friends\" and \"much homework\" (homework has no plural).",
      },
      items: [
        fb("art4-1", "How ___ books do you have?", ["many", "much", "few", "little"], "Books can be counted (one book, two books), so use many. For example: \"How many pencils do you need?\""),
        fb("art4-2", "How ___ water do we need for the trip?", ["much", "many", "few", "little"], "Water cannot be counted as \"one water, two waters\", so use much. For example: \"How much rice is left?\""),
        fb("art4-3", "She doesn't have ___ money left.", ["much", "many", "a lot", "few"], "Money is uncountable, so use much. For example: \"There isn't much time left.\""),
        fb("art4-4", "I have ___ friends in this city.", ["many", "much", "a lot", "little"], "Friends can be counted, so use many. For example: \"I have many cousins.\""),
        fb("art4-5", "There isn't ___ rice in the bowl.", ["much", "many", "a lot", "few"], "Rice is uncountable, so use much. For example: \"There isn't much sugar left.\""),
        fb("art4-6", "We received ___ information about the trip.", ["much", "many", "a lot", "few"], "Information is uncountable, even though it feels like it should have a plural, so use much. For example: \"He gave us much advice.\""),
        fb("art4-7", "He has ___ homework to finish tonight.", ["much", "many", "a lot", "little"], "Homework is uncountable and never takes -s, so use much. For example: \"I have too much homework.\""),
        fb("art4-8", "There are so ___ students in the hall that we can't find seats.", ["many", "much", "little", "few"], "Students can be counted, so use many. For example: \"There are many chairs in the hall.\""),
        fb("art4-9", "I don't have ___ time to finish this today.", ["much", "many", "a lot", "little"], "Time is uncountable, so use much. For example: \"We don't have much space in the car.\""),
        mc("art4-10", "Which sentence is correct?", ["He drank a lot of water after the run.", "He drank a lot of waters after the run.", "He drank many water after the run."], "Water is uncountable, so it never has an -s, and many cannot go with it. \"A lot of\" works for uncountable nouns too. For example: \"She ate a lot of rice.\""),
      ],
    },
    {
      id: "art-5",
      emoji: "🎁",
      title: "some or any?",
      blurb: "I have some. I don't have any. Do you have any?",
      learn: {
        intro:
          "Use some in positive sentences, and when you offer or ask for something politely. Use any in negative sentences and in ordinary questions. Something and someone follow the same pattern as some; anything and anyone follow the same pattern as any.",
        headers: ["Sentence type", "Word"],
        rows: [
          ["Positive statement", "I have some apples."],
          ["Negative statement", "I don't have any apples."],
          ["Ordinary question", "Do you have any apples?"],
          ["Offer or polite request (expects \"yes\")", "Would you like some tea?"],
        ],
        tips: [
          "In an offer or a polite request, some sounds more natural than any, even though it is a question: \"Would you like some cake?\"",
          "Something/someone go with some; anything/anyone go with any and negatives: \"I couldn't find anything.\"",
        ],
        mistake: "\"I don't have some money\" and \"Would you like any tea?\" sound wrong. Say \"I don't have any money\" and \"Would you like some tea?\"",
      },
      items: [
        fb("art5-1", "I have ___ apples in my bag.", ["some", "any", "no", "every"], "A positive statement uses some. For example: \"She has some questions.\""),
        fb("art5-2", "I don't have ___ apples in my bag.", ["any", "some", "no", "every"], "A negative statement uses any. For example: \"He doesn't have any pets.\""),
        fb("art5-3", "Do you have ___ questions?", ["any", "some", "no", "every"], "An ordinary question uses any. For example: \"Did you buy any milk?\""),
        fb("art5-4", "Would you like ___ tea?", ["some", "any", "no", "every"], "An offer expecting \"yes\" uses some, even though it's a question. For example: \"Would you like some biscuits?\""),
        fb("art5-5", "There isn't ___ milk left in the fridge.", ["any", "some", "no", "every"], "A negative statement uses any. For example: \"There aren't any seats left.\""),
        fb("art5-6", "She found ___ interesting books at the library.", ["some", "any", "no", "every"], "A positive statement uses some. For example: \"We saw some dolphins.\""),
        fb("art5-7", "Is there ___ problem with the printer?", ["any", "some", "no", "every"], "An ordinary question uses any. For example: \"Are there any tickets left?\""),
        fb("art5-8", "Can I have ___ water, please?", ["some", "any", "no", "every"], "A polite request expecting \"yes\" uses some. For example: \"Can I borrow some paper?\""),
        fb("art5-9", "I looked everywhere but couldn't find ___.", ["anything", "something", "any", "some"], "This is a negative meaning (\"couldn't find\"), so use anything. For example: \"He didn't say anything.\""),
        fb("art5-10", "She whispered ___ to her friend during class.", ["something", "anything", "some", "any"], "This is a positive statement, so use something. For example: \"I bought something for you.\""),
      ],
    },
    {
      id: "art-6",
      emoji: "🤏",
      title: "few, little, each, every, all, both",
      blurb: "a few, a little · each student · every day · all of us · both hands",
      learn: {
        intro:
          "A few (countable) and a little (uncountable) mean a small amount, but enough — a positive feeling. Few and little, without a, mean almost none — a negative feeling. Each and every talk about the members of a group one at a time; all is the whole amount; both is used for exactly two.",
        headers: ["Word", "Meaning"],
        rows: [
          ["a few / a little", "a small amount, enough (positive)"],
          ["few / little", "almost none (negative)"],
          ["each", "every single one, thought of separately"],
          ["every", "all of a group, as a general rule (3 or more)"],
          ["all", "the whole amount or group"],
          ["both", "the two of them, exactly two"],
        ],
        tips: [
          "A few and a little sound positive (\"I have a few friends\" = enough friends); few and little sound negative (\"Few people came\" = almost nobody).",
          "Each and every take a singular noun and verb (Each student has..., Every child wears...); both and all usually go with a plural noun (Both hands are..., All students are...).",
        ],
        mistake: "\"There is a little books\" and \"Both student are here\" are wrong. Say \"There are a few books\" and \"Both students are here.\"",
      },
      items: [
        fb("art6-1", "I have ___ friends, so I don't feel lonely.", ["a few", "few", "a little", "little"], "A small but positive amount of countable friends: a few. For example: \"We have a few minutes before the bus leaves.\""),
        fb("art6-2", "Unfortunately, ___ people came to the meeting, so we cancelled it.", ["few", "a few", "little", "a little"], "Almost nobody came, a negative meaning, so use few (countable people). For example: \"Few students finished the race.\""),
        fb("art6-3", "There is ___ sugar left, so we can still make the cake.", ["a little", "little", "a few", "few"], "A small but positive amount of uncountable sugar: a little. For example: \"There's a little milk left for your tea.\""),
        fb("art6-4", "There is ___ time left, so we must hurry.", ["little", "a little", "few", "a few"], "Almost no time left, a negative meaning, so use little (uncountable time). For example: \"There was little hope left.\""),
        fb("art6-5", "She has ___ money saved, so she can't buy the ticket yet.", ["little", "a little", "few", "a few"], "Almost no money, a negative meaning, so use little (uncountable money). For example: \"He has little experience with computers.\""),
        fb("art6-6", "___ student in the class received a certificate.", ["Each", "Every", "All", "Both"], "Thinking of the students one by one receiving their own certificate: each. For example: \"Each player wore a number.\""),
        fb("art6-7", "___ child in the school wears a uniform.", ["Every", "Each", "All", "Both"], "A general rule about the whole group of children: every. For example: \"Every classroom has a clock.\""),
        fb("art6-8", "___ the seats in the hall were full.", ["All", "Every", "Each", "Both"], "The whole amount of seats: all. For example: \"All the lights were switched off.\""),
        fb("art6-9", "___ of my parents work in Central.", ["Both", "All", "Every", "Each"], "There are exactly two parents, so use both. For example: \"Both of my shoes are muddy.\""),
        fb("art6-10", "He checked ___ door before locking the house for the night.", ["each", "every", "all", "both"], "Checking the doors one by one is best shown by each. For example: \"She tasted each dish before serving it.\""),
      ],
    },
    {
      id: "art-7",
      emoji: "🔍",
      title: "Mixed review",
      blurb: "Put a/an/the, no article, and quantifiers together",
      learn: {
        intro:
          "This level mixes everything from this path: a/an, the, no article, much/many, some/any, and few/little/each/every/all/both. Read each sentence carefully and think about which rule applies.",
        headers: ["Ask yourself", "Then choose"],
        rows: [
          ["Is it the first or second mention? Is it unique?", "a/an (first time) or the (already known)"],
          ["Is it a general plural, uncountable idea, meal, sport or fixed phrase?", "no article"],
          ["Can I count it (one, two, three)?", "many/a few (countable) or much/a little (uncountable)"],
          ["Positive, negative, question, or offer?", "some (positive/offer) or any (negative/question)"],
          ["How many things am I talking about?", "each/every (one at a time), all (the whole group), both (exactly two)"],
        ],
        tips: [
          "There is often more than one clue in a sentence — the noun itself (countable or not) and the situation (first mention, negative, offer) both matter.",
          "If you're not sure, try saying the sentence with each option out loud. The wrong one usually sounds strange.",
        ],
        mistake: "Do not guess from one word alone — read the whole sentence for clues about number, mention, and positive/negative meaning.",
      },
      items: [
        mc("art7-1", "Which sentence is correct?", ["She is an honest girl.", "She is a honest girl.", "She is the honest girl."], "Honest starts with a silent h, a vowel sound, so it needs an. For example: \"an hour ago\"."),
        mc("art7-2", "Which sentence is correct?", ["The moon is very bright tonight.", "A moon is very bright tonight.", "Moon is very bright tonight."], "There is only one moon, so it needs the. For example: \"The sky is clear tonight.\""),
        mc("art7-3", "Which sentence is correct?", ["Football is my favourite sport.", "The football is my favourite sport.", "A football is my favourite sport."], "Talking about the sport in general needs no article. For example: \"Swimming is good exercise.\""),
        mc("art7-4", "Which sentence is correct?", ["How much sugar do we need?", "How many sugar do we need?", "How few sugar do we need?"], "Sugar is uncountable, so use much. For example: \"How much flour is left?\""),
        mc("art7-5", "Which sentence is correct?", ["I don't have any homework tonight.", "I don't have some homework tonight.", "I don't have a homework tonight."], "A negative statement uses any, and homework has no plural or singular article. For example: \"I don't have any spare time.\""),
        mc("art7-6", "Which sentence is correct?", ["Would you like some juice?", "Would you like any juice?", "Would you like a juice?"], "An offer expecting \"yes\" uses some. For example: \"Would you like some crackers?\""),
        mc("art7-7", "Which sentence is correct?", ["There are a few clouds in the sky today.", "There are few clouds in the sky today.", "There are a little clouds in the sky today."], "A small but positive number of countable clouds: a few. For example: \"There are a few empty seats.\""),
        mc("art7-8", "Which sentence is correct?", ["Every student has their own locker.", "All student has their own locker.", "Both student has their own locker."], "Every takes a singular noun (student); all and both need a plural noun (students). For example: \"Every player has a shirt.\""),
        mc("art7-9", "Which sentence is correct?", ["I have two sisters. Both of them live abroad.", "I have two sisters. Both of them lives abroad.", "I have two sisters. All of them lives abroad."], "There are exactly two sisters, so both is the precise word, and them takes the plural verb live. For example: \"I have two dogs. Both of them are friendly.\""),
        mc("art7-10", "Which sentence is correct?", ["He drank a lot of water after the run.", "He drank a lot of waters after the run.", "He drank many water after the run."], "Water is uncountable: it never takes -s, and many cannot go with it. For example: \"She poured a lot of milk.\""),
      ],
    },
    {
      id: "art-8",
      emoji: "✏️",
      title: "Editing: fix the mistake",
      blurb: "Find the error and pick the correct sentence",
      learn: {
        intro:
          "Editing means finding a mistake in a sentence and correcting it. For articles and quantifiers, check: is it a or an? Does it need the, or no article at all? Is the noun countable or uncountable? Does the quantifier match the noun?",
        headers: ["Mistake", "Fix"],
        rows: [
          ["a apple", "an apple"],
          ["She has much friends.", "She has many friends."],
          ["I don't have some time.", "I don't have any time."],
          ["He plays the football.", "He plays football."],
          ["Each of them live here.", "Both of them live here."],
        ],
        tips: [
          "Step 1: Check the sound after a/an, and whether the/no article fits the situation.",
          "Step 2: Check whether the noun is countable or uncountable, and whether some/any and the quantifier match the sentence type and the noun.",
        ],
        mistake: "Do not fix only one word and leave another mistake in the sentence. Check the whole sentence.",
      },
      items: [
        mc("art8-1", "Find the mistake and choose the correct sentence: \"I saw a elephant at the zoo.\"", ["I saw an elephant at the zoo.", "I saw an elephants at the zoo.", "I saw the elephant at the zoo."], "Elephant starts with a vowel sound, so it needs an, not a. For example: \"an orange\"."),
        mc("art8-2", "Find the mistake and choose the correct sentence: \"She has much friends.\"", ["She has many friends.", "She has many friend.", "She has a lot friends."], "Friends is countable, so use many, not much. For example: \"He has many cousins.\""),
        mc("art8-3", "Find the mistake and choose the correct sentence: \"I don't have some time to talk now.\"", ["I don't have any time to talk now.", "I don't have some times to talk now.", "I don't have any times to talk now."], "A negative statement uses any, not some, and time has no plural. For example: \"I don't have any money left.\""),
        mc("art8-4", "Find the mistake and choose the correct sentence: \"He plays the football every Saturday.\"", ["He plays football every Saturday.", "He plays a football every Saturday.", "He play football every Saturday."], "Sports take no article. For example: \"She plays basketball on Fridays.\""),
        mc("art8-5", "Find the mistake and choose the correct sentence: \"The Honesty is very important.\"", ["Honesty is very important.", "An honesty is very important.", "Honesties are very important."], "Honesty is an uncountable idea used in general, so it needs no article. For example: \"Patience is important.\""),
        mc("art8-6", "Find the mistake and choose the correct sentence: \"There is a little books on the shelf.\"", ["There are a few books on the shelf.", "There is a few books on the shelf.", "There are a little books on the shelf."], "Books are countable, so use a few, not a little, and the verb must be are, not is. For example: \"There are a few chairs left.\""),
        mc("art8-7", "Find the mistake and choose the correct sentence: \"Every students must wear a uniform.\"", ["Every student must wear a uniform.", "Every students have to wear a uniform.", "All student must wear a uniform."], "Every takes a singular noun: every student, not every students. For example: \"Every child needs rest.\""),
        mc("art8-8", "Find the mistake and choose the correct sentence: \"Would you like any tea?\"", ["Would you like some tea?", "Would you like a tea?", "Would you like teas?"], "An offer expecting \"yes\" uses some, not any, and tea has no plural here. For example: \"Would you like some biscuits?\""),
        mc("art8-9", "Find the mistake and choose the correct sentence: \"I have two sisters. All of them live abroad.\"", ["I have two sisters. Both of them live abroad.", "I have two sisters. Both of them lives abroad.", "I have two sisters. All of them lives abroad."], "With exactly two people, both is the precise word, and them takes the plural verb live. For example: \"I have two brothers. Both of them study here.\""),
        mc("art8-10", "Find the mistake and choose the correct sentence: \"I looked everywhere but couldn't find something.\"", ["I looked everywhere but couldn't find anything.", "I looked everywhere but couldn't find some things.", "I looked everywhere but couldn't find any things."], "A negative meaning (\"couldn't find\") needs anything, not something. For example: \"He didn't say anything.\""),
      ],
    },
  ];

  window.App.Content.GRAMMAR_PATHS = window.App.Content.GRAMMAR_PATHS || [];
  window.App.Content.GRAMMAR_PATHS.push({
    key: "articles",
    emoji: "🔤",
    label: "Articles & Quantifiers",
    blurb: "a/an, the, no article, and words like some, any, many, much, each and every.",
    sections: { 0: "Articles: a, an and the", 3: "Quantifiers: how much, how many", 5: "Small amounts and whole groups", 6: "Review and editing" },
    levels: LEVELS,
  });
})();
