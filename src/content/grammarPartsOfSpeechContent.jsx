// Grammar path: "Parts of Speech" — the building blocks of a sentence, one
// step at a time: nouns, verbs, adjectives (with comparing), adverbs,
// pronouns and conjunctions, then a mixed "which part of speech?" level and
// an editing level. Prepositions are covered by their own path
// (grammarPrepositionPathContent.jsx), so they only appear here as one option
// in the mixed identification level.
// Registered into GRAMMAR_PATHS; same level / Learn-card shape as the tense
// paths (Learn card first, then 10 items; the editing level matches Past
// Simple level 11). Items use correctIndex 0 (options are shuffled at
// runtime). Each explanation gives the rule plus a second example that is not
// in the item itself.
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  const fb = (id, sentence, options, explanation) => ({ id, type: "fillblank", sentence, options, correctIndex: 0, explanation });
  const mc = (id, prompt, options, explanation) => ({ id, type: "mc", prompt, options, correctIndex: 0, explanation });

  const LEVELS = [
    {
      id: "pos-1",
      emoji: "🏷️",
      title: "Nouns: names and plurals",
      blurb: "teacher, Hong Kong, children, boxes",
      learn: {
        intro:
          "A noun is a word for a person, place, thing, animal or idea. Common nouns are general (girl, city, idea). Proper nouns are the special name of one person, place or day, and they always start with a capital letter (Mei, Hong Kong, Monday). Most nouns add -s to make the plural, but some change in other ways.",
        headers: ["Kind of noun", "Examples"],
        rows: [
          ["Common noun", "teacher, park, dog, idea"],
          ["Proper noun (capital letter)", "Ms Chan, Victoria Peak, Monday"],
          ["Regular plural: add -s", "cat → cats, book → books"],
          ["s, x, z, ch, sh: add -es", "box → boxes, watch → watches"],
          ["Consonant + y → ies", "baby → babies, city → cities"],
          ["f / fe → ves", "leaf → leaves, knife → knives"],
          ["Irregular plural", "child → children, man → men, foot → feet"],
          ["Same in the plural", "sheep, deer"],
        ],
        tips: [
          "Proper nouns always start with a capital letter: Hong Kong, Tuesday, Mr Lee.",
          "Add -es after s, x, z, ch and sh, and after some words ending in o (tomato → tomatoes). A few plurals never change: sheep, deer.",
        ],
        mistake: "\"Two childs\" and \"three sheeps\" are wrong. Say \"two children\" and \"three sheep\".",
      },
      items: [
        fb("pos1-1", "I saw three ___ playing in the park.", ["children", "childs", "childrens", "childes"], "Child is an irregular noun, so the plural is children, not \"childs\". For example: \"The men are waiting outside.\""),
        fb("pos1-2", "There are two ___ on the shelf.", ["boxes", "boxs", "boxies", "boxen"], "Nouns that end in x add -es: boxes. For example: \"I bought two watches.\""),
        fb("pos1-3", "The ___ are hunting in the forest.", ["wolves", "wolfs", "wolvies", "wolfes"], "Wolf ends in f, so change f to ves: wolves. For example: \"The leaves fell from the tree.\""),
        mc("pos1-4", "Which sentence uses capital letters correctly?", ["We went to Tai Mo Shan on Saturday.", "We went to tai mo shan on saturday.", "We went to Tai mo shan on saturday."], "Names of places and days are proper nouns, so every important word needs a capital letter. For example: \"Ms Lee lives in Kowloon.\""),
        fb("pos1-5", "Two ___ were waiting at the bus stop.", ["women", "woman", "womens", "womans"], "Woman is irregular: the plural is women. For example: \"Three men carried the piano.\""),
        fb("pos1-6", "The farmer has fifty ___ on the hill.", ["sheep", "sheeps", "sheepes", "sheepies"], "Sheep stays the same in the plural. For example: \"We saw six deer in the field.\""),
        fb("pos1-7", "There are many colourful ___ in the garden.", ["butterflies", "butterflys", "butterflyes", "butterfly"], "Consonant + y: change y to ies. Butterfly becomes butterflies. For example: \"The babies are sleeping.\""),
        mc("pos1-8", "Which word is the proper noun in this sentence? \"On Monday, the girl visited the park.\"", ["Monday", "girl", "park"], "Monday is the name of one particular day, so it is a proper noun and starts with a capital letter. Girl and park are common nouns. For example: \"Hong Kong\" is a proper noun too."),
        fb("pos1-9", "Grandma bought some ___ at the market.", ["tomatoes", "tomatos", "tomatoies", "tomatoe"], "Some nouns that end in o add -es: tomatoes. For example: \"We grew two potatoes.\""),
        fb("pos1-10", "The baby already has four ___.", ["teeth", "tooths", "teeths", "toothes"], "Tooth is irregular: the plural is teeth. For example: \"Look at my two feet.\""),
      ],
    },
    {
      id: "pos-2",
      emoji: "🏃",
      title: "Verbs: doing, being and helping",
      blurb: "run, know, is, can, will",
      learn: {
        intro:
          "A verb tells us what someone does (run, write), what state they are in (know, like), or what they are (am, is, are). Some small verbs help the main verb: do, does, did, have, has and the modal verbs can, could, will, should and must. Every complete sentence needs a verb.",
        headers: ["Kind of verb", "Examples"],
        rows: [
          ["Action verb", "run, eat, write, jump"],
          ["State verb", "know, like, want, love"],
          ["Be verb", "am, is, are, was, were"],
          ["Helping verb", "do, does, did, have, has"],
          ["Modal verb", "can, could, will, should, must"],
        ],
        tips: [
          "To find the verb, ask: what is the person or thing doing, or being? Every complete sentence needs one.",
          "After a modal verb (can, will, must, should), use the base verb: She can swim, not She can swims.",
        ],
        mistake: "\"She can swims\" and \"My brother in the garden\" are wrong. Use the base verb after can, and always include a verb: \"She can swim.\" \"My brother is in the garden.\"",
      },
      items: [
        mc("pos2-1", "Which word is the verb in this sentence? \"The dog chases the ball.\"", ["chases", "dog", "ball"], "The verb tells what the dog does: chases. Dog and ball are nouns. For example: in \"Birds sing\", sing is the verb."),
        mc("pos2-2", "Which sentence has a state verb?", ["I know the answer.", "I kick the ball.", "I run to school."], "Know describes something in the mind, not an action you can see, so it is a state verb. Kick and run are action verbs. For example: \"She loves music\" uses a state verb."),
        fb("pos2-3", "She ___ a very good student.", ["is", "are", "am", "be"], "\"She\" takes is, the be verb. For example: \"He is my cousin.\""),
        fb("pos2-4", "The children ___ at the park yesterday.", ["were", "was", "are", "is"], "\"Yesterday\" is in the past and \"the children\" is plural, so use were. For example: \"We were late for class.\""),
        fb("pos2-5", "You must ___ your homework first.", ["finish", "finished", "finishes", "finishing"], "After a modal verb (must), use the base verb: finish. For example: \"He should rest.\""),
        fb("pos2-6", "My cousin can ___ very fast.", ["run", "runs", "running", "ran"], "After can, use the base verb, even with \"my cousin\": run. For example: \"She can sing well.\""),
        mc("pos2-7", "Which word is the helping verb in this sentence? \"We will visit Grandma on Sunday.\"", ["will", "visit", "Sunday"], "Will is a helping (modal) verb that goes with the main verb visit. Sunday is a noun. For example: in \"They can swim\", can is the helping verb."),
        fb("pos2-8", "I ___ very tired after the long walk.", ["am", "is", "are", "be"], "\"I\" takes am. For example: \"I am hungry.\""),
        mc("pos2-9", "Which group of words is NOT a complete sentence?", ["My brother in the garden.", "My brother sings in the garden.", "My brother is in the garden."], "\"My brother in the garden\" has no verb, so it is not a complete sentence. Adding sings or is makes it complete. For example: \"The girl in the red hat\" also needs a verb."),
        fb("pos2-10", "We ___ like spicy food, so we chose the soup.", ["don't", "doesn't", "isn't", "aren't"], "\"We\" takes don't (do not) before a base verb. For example: \"They don't play chess.\""),
      ],
    },
    {
      id: "pos-3",
      emoji: "🎨",
      title: "Adjectives: describing and comparing",
      blurb: "tall, taller, the tallest",
      learn: {
        intro:
          "An adjective describes a noun: a tall tree, a hot day, The soup is hot. To compare two things, add -er or use more. To say something is the most, add -est or use most. Short adjectives use -er / -est. Long adjectives (two or more syllables, mostly) use more / most. A few are irregular.",
        headers: ["Adjective", "Comparative → superlative"],
        rows: [
          ["tall", "taller → the tallest"],
          ["big (double the last letter)", "bigger → the biggest"],
          ["happy (y → i)", "happier → the happiest"],
          ["beautiful (long word)", "more beautiful → the most beautiful"],
          ["good (irregular)", "better → the best"],
          ["bad (irregular)", "worse → the worst"],
        ],
        tips: [
          "Use than after a comparative (taller than) and the before a superlative (the tallest).",
          "Never use both together: not \"more taller\" or \"the most fastest\".",
        ],
        mistake: "\"More taller\" and \"the most fastest\" are wrong. Say \"taller\" and \"the fastest\".",
      },
      items: [
        fb("pos3-1", "The soup is very ___, so be careful.", ["hot", "hotly", "heat", "heats"], "After is, we need an adjective to describe the soup: hot. Hotly is an adverb. For example: \"The tea is cold.\""),
        fb("pos3-2", "She wore a ___ dress to the party.", ["beautiful", "beautifully", "beauty", "beautify"], "Before a noun (dress), use an adjective: beautiful. For example: \"He has a tiny dog.\""),
        fb("pos3-3", "My brother is ___ than me.", ["taller", "more tall", "tallest", "tall"], "Compare two people with -er and than: taller. For example: \"This box is bigger than that one.\""),
        fb("pos3-4", "Mount Everest is the ___ mountain in the world.", ["highest", "higher", "most high", "more high"], "When we compare one thing with everything else, use -est with the: the highest. For example: \"She is the fastest runner in the school.\""),
        fb("pos3-5", "Today is ___ than yesterday.", ["hotter", "more hot", "hottest", "hoter"], "Hot ends in one vowel and one consonant, so double the t and add -er: hotter. For example: \"My bag is bigger than yours.\""),
        fb("pos3-6", "That was the ___ film I have ever seen.", ["funniest", "funnier", "most funny", "funnyest"], "Consonant + y: change y to i and add -est: funniest. For example: \"This is the happiest day of my life.\""),
        fb("pos3-7", "This book is ___ than that one.", ["more interesting", "interestinger", "most interesting", "more interestinger"], "Interesting is a long adjective, so use more: more interesting. For example: \"The film was more exciting than the book.\""),
        fb("pos3-8", "Her test result was ___ than mine.", ["better", "gooder", "more good", "best"], "Good is irregular: good, better, best. Use better before than. For example: \"Your handwriting is better than his.\""),
        fb("pos3-9", "It was the ___ day of my whole life.", ["worst", "worse", "baddest", "most bad"], "Bad is irregular: bad, worse, worst. With the, use the superlative worst. For example: \"That was the worst storm this year.\""),
        mc("pos3-10", "Which sentence is correct?", ["Mei is the youngest girl in our class.", "Mei is the most young girl in our class.", "Mei is youngest girl in our class."], "Young is a short adjective, so the superlative is the youngest, and it needs the. For example: \"Ken is the oldest boy in the team.\""),
      ],
    },
    {
      id: "pos-4",
      emoji: "🐢",
      title: "Adverbs: how, when, where, how often",
      blurb: "slowly, well, always, yesterday",
      learn: {
        intro:
          "An adverb tells us more about a verb, an adjective or another adverb. Many adverbs of manner are made by adding -ly to an adjective (quick → quickly). Other adverbs tell us when (yesterday, soon), where (here, outside) and how often (always, never). Good is an adjective, but its adverb is well.",
        headers: ["Kind of adverb", "Examples"],
        rows: [
          ["Adjective → adverb (+ly)", "quick → quickly, careful → carefully"],
          ["y → ily", "happy → happily, easy → easily"],
          ["Irregular: good → well", "She sings well."],
          ["Same form as the adjective", "fast, hard, early, late"],
          ["How often", "always, usually, often, sometimes, never"],
          ["When and where", "yesterday, soon, here, outside"],
        ],
        tips: [
          "Adjectives describe nouns (a quiet girl). Adverbs describe verbs (She spoke quietly).",
          "Adverbs of frequency go before the main verb but after am / is / are: She always walks. She is always late.",
        ],
        mistake: "\"She sings good\" and \"He runs quick\" are wrong. Say \"She sings well\" and \"He runs quickly\".",
      },
      items: [
        fb("pos4-1", "The tortoise walked ___ across the road.", ["slowly", "slow", "slower", "slowness"], "An adverb describes how the tortoise walked: slowly. For example: \"She spoke softly.\""),
        fb("pos4-2", "She sings very ___, and everyone loves listening.", ["well", "good", "goodly", "best"], "Good is an adjective. The adverb for a verb like sings is well. For example: \"He plays the piano well.\""),
        fb("pos4-3", "The baby slept ___ all night.", ["peacefully", "peaceful", "peace", "peacefulness"], "Slept is a verb, so it needs an adverb: peacefully. For example: \"They waited patiently.\""),
        fb("pos4-4", "My mum ___ cooks dinner at six o'clock.", ["usually", "usual", "usualness", "use"], "Usually is an adverb of frequency, and it goes before the main verb cooks. For example: \"We often eat noodles.\""),
        mc("pos4-5", "Which sentence puts the adverb in the correct place?", ["She is always late for school.", "She always is late for school.", "Always she is late for school."], "An adverb of frequency goes after am / is / are: She is always late. For example: \"They are never rude.\""),
        fb("pos4-6", "He drove ___ on the wet road.", ["carefully", "careful", "care", "carefulness"], "Drove is a verb, so we need an adverb: carefully. For example: \"She carried the tray carefully.\""),
        fb("pos4-7", "She studies very ___ for every test.", ["hard", "hardly", "harder", "hardness"], "Hard is both an adjective and an adverb. Hardly means \"almost not\". For example: \"He works hard every day.\""),
        fb("pos4-8", "The children shouted ___ when they won.", ["happily", "happy", "happier", "happiness"], "The adverb of happy is happily (y changes to ily). For example: \"The puppy ran around happily.\""),
        mc("pos4-9", "Which sentence is correct?", ["He speaks English fluently.", "He speaks English fluent.", "He speaks English fluency."], "Speaks is a verb, so we need the adverb fluently. For example: \"She reads very quickly.\""),
        mc("pos4-10", "Which word is the adverb in this sentence? \"The boy quietly opened the door.\"", ["quietly", "boy", "door"], "Quietly tells us how the boy opened the door, so it is an adverb. Boy and door are nouns. For example: in \"She ran quickly\", quickly is the adverb."),
      ],
    },
    {
      id: "pos-5",
      emoji: "👤",
      title: "Pronouns: I, me, my, mine",
      blurb: "She likes him. That's mine.",
      learn: {
        intro:
          "A pronoun takes the place of a noun, so we do not have to repeat it. Use a subject pronoun (I, he, she, we, they) before the verb, and an object pronoun (me, him, her, us, them) after a verb or a preposition. My, your, his, her, our and their go before a noun. Mine, yours, hers, ours and theirs stand alone. Reflexive pronouns (myself, himself, themselves) are used when the subject and object are the same person.",
        headers: ["Subject", "Object · my · mine · myself"],
        rows: [
          ["I", "me · my · mine · myself"],
          ["you", "you · your · yours · yourself"],
          ["he", "him · his · his · himself"],
          ["she", "her · her · hers · herself"],
          ["it", "it · its · itself"],
          ["we", "us · our · ours · ourselves"],
          ["they", "them · their · theirs · themselves"],
        ],
        tips: [
          "Use a subject pronoun before the verb (She likes tea) and an object pronoun after a verb or preposition (Tom helped her, sit next to me).",
          "Possessive pronouns never have an apostrophe: yours, hers, ours, theirs.",
        ],
        mistake: "\"Her likes pizza\" and \"Give it to she\" are wrong. Say \"She likes pizza\" and \"Give it to her\".",
      },
      items: [
        fb("pos5-1", "My sister and ___ went to the cinema.", ["I", "me", "myself", "mine"], "\"I\" is the subject of went. Test it by taking away \"my sister and\": \"I went\". For example: \"Ben and I played chess.\""),
        fb("pos5-2", "On my birthday, Mum gave ___ a present.", ["me", "I", "my", "mine"], "After the verb gave, use the object pronoun: me. For example: \"Dad helped me with my homework.\""),
        fb("pos5-3", "Ben lost his umbrella, so I lent ___ mine.", ["him", "he", "his", "himself"], "After the verb lent, use the object pronoun for Ben: him. For example: \"I showed her the photos.\""),
        fb("pos5-4", "That bag is ___. I bought it yesterday.", ["mine", "my", "me", "myself"], "Mine stands alone, without a noun after it. My needs a noun (my bag). For example: \"The blue pen is hers.\""),
        fb("pos5-5", "The children finished ___ homework quickly.", ["their", "them", "they", "theirs"], "Before a noun (homework), use the possessive adjective: their. For example: \"We cleaned our room.\""),
        fb("pos5-6", "Tom looked at ___ in the mirror.", ["himself", "him", "he", "his"], "Tom is both the person looking and the person looked at, so use the reflexive pronoun: himself. For example: \"I hurt myself.\""),
        fb("pos5-7", "The dog wagged ___ tail happily.", ["its", "it", "itself", "their"], "Its means \"belonging to it\", and it goes before a noun, with no apostrophe. For example: \"The bird cleaned its feathers.\""),
        fb("pos5-8", "Please sit next to ___.", ["us", "we", "our", "ours"], "After a preposition (next to), use the object pronoun: us. For example: \"Come with them.\""),
        mc("pos5-9", "Which sentence is correct?", ["She and I are best friends.", "Her and me are best friends.", "Her and I are best friends."], "Both people are the subject of are, so use subject pronouns: She and I. For example: \"He and I live next door.\""),
        fb("pos5-10", "Mei and Ken are twins. ___ were born in May.", ["They", "Them", "Their", "Theirs"], "\"They\" replaces Mei and Ken as the subject of were born. For example: \"My parents work hard. They are teachers.\""),
      ],
    },
    {
      id: "pos-6",
      emoji: "🔗",
      title: "Conjunctions: joining ideas",
      blurb: "and, but, or, so, because, although",
      learn: {
        intro:
          "A conjunction is a joining word. And, but, or and so join two equal parts of a sentence. Because, although, when, while and if start a part that depends on the main part.",
        headers: ["Conjunction", "What it does"],
        rows: [
          ["and", "adds information"],
          ["but", "shows a contrast"],
          ["or", "gives a choice"],
          ["so", "shows a result"],
          ["because", "gives a reason"],
          ["although", "shows a surprising contrast"],
          ["when / while", "shows time"],
          ["if", "shows a condition"],
        ],
        tips: [
          "So gives the result, because gives the reason: I was tired, so I slept. I slept because I was tired.",
          "Although and but do not go in the same sentence: Although it rained, we played. (Not: Although it rained, but we played.)",
        ],
        mistake: "\"Although it was raining, but we went out\" is wrong. Use only one: \"Although it was raining, we went out.\"",
      },
      items: [
        fb("pos6-1", "I was hungry, ___ I ate two sandwiches.", ["so", "because", "but", "or"], "The second part is the result of being hungry, so use so. For example: \"It was cold, so she wore a coat.\""),
        fb("pos6-2", "I ate two sandwiches ___ I was hungry.", ["because", "so", "but", "or"], "The second part gives the reason, so use because. For example: \"He smiled because he won.\""),
        fb("pos6-3", "She wanted to go out, ___ it was raining.", ["but", "so", "and", "because"], "The second part shows a problem or contrast, so use but. For example: \"I like tea, but I don't like coffee.\""),
        fb("pos6-4", "Do you want tea ___ coffee?", ["or", "and", "but", "so"], "Or gives a choice between two things. For example: \"Shall we walk or take the bus?\""),
        fb("pos6-5", "___ it was cold, we went swimming.", ["Although", "Because", "So", "But"], "Although shows a surprising contrast: it was cold, yet we swam. For example: \"Although he was tired, he kept running.\""),
        fb("pos6-6", "Please wait here ___ I find my bag.", ["while", "but", "so", "or"], "While shows two things happening at the same time. For example: \"She listened to music while she cooked.\""),
        fb("pos6-7", "___ you finish early, you can play outside.", ["If", "But", "So", "Although"], "If shows a condition: you can play only after you finish early. For example: \"If it rains, we will stay in.\""),
        mc("pos6-8", "Which sentence is correct?", ["Although it was late, we kept playing.", "Although it was late, but we kept playing.", "Although it was late, so we kept playing."], "Although already shows the contrast, so do not add but or so. For example: \"Although she was shy, she gave a speech.\""),
        fb("pos6-9", "Mei likes swimming, ___ she doesn't like running.", ["but", "because", "so", "or"], "The two parts contrast with each other, so use but. For example: \"He likes maths, but he finds history boring.\""),
        fb("pos6-10", "I'll call you ___ I arrive at the airport.", ["when", "but", "so", "or"], "When shows the time of the call: at the moment I arrive. For example: \"Call me when you get home.\""),
      ],
    },
    {
      id: "pos-7",
      emoji: "🔍",
      title: "Which part of speech is it?",
      blurb: "Look at the job the word does",
      learn: {
        intro:
          "A word's part of speech depends on its job in the sentence. Some words can do more than one job: walk can be a noun (a walk) or a verb (I walk). To decide, look at how the word is used.",
        headers: ["Part of speech", "Its job"],
        rows: [
          ["noun", "names a person, place or thing: teacher, park"],
          ["verb", "an action or state: run, is, know"],
          ["adjective", "describes a noun: tall, kind"],
          ["adverb", "describes a verb: quickly, always"],
          ["pronoun", "replaces a noun: she, them, mine"],
          ["conjunction", "joins parts of a sentence: and, because"],
          ["preposition", "shows position or time: in, on, after"],
        ],
        tips: [
          "The same word can change its job: a walk (noun) but I walk (verb).",
          "Quick tests: can you put a or the before it? It is probably a noun. Can you change it to the past tense? It is probably a verb.",
        ],
        mistake: "Do not decide from the word alone. \"Light\" can be a noun (a light), an adjective (a light bag) or a verb (light a candle).",
      },
      items: [
        mc("pos7-1", "What part of speech is \"quickly\" in this sentence? \"The rabbit ran quickly.\"", ["adverb", "adjective", "verb"], "Quickly tells us how the rabbit ran, so it is an adverb. For example: in \"She spoke softly\", softly is an adverb."),
        mc("pos7-2", "What part of speech is \"kind\" in this sentence? \"Amy is a kind girl.\"", ["adjective", "adverb", "noun"], "Kind describes the noun girl, so it is an adjective. For example: in \"a tall tree\", tall is an adjective."),
        mc("pos7-3", "What part of speech is \"laughed\" in this sentence? \"The baby laughed loudly.\"", ["verb", "noun", "adjective"], "Laughed is what the baby did, so it is a verb. For example: in \"We jumped\", jumped is a verb."),
        mc("pos7-4", "What part of speech is \"on\" in this sentence? \"She put the book on the table.\"", ["preposition", "conjunction", "adverb"], "On shows where the book is, and it is followed by the table, so it is a preposition. For example: \"under the bed\"."),
        mc("pos7-5", "What part of speech is \"because\" in this sentence? \"We stayed inside because it was raining.\"", ["conjunction", "preposition", "pronoun"], "Because joins two parts of the sentence and gives a reason, so it is a conjunction. For example: \"I smiled because I was happy.\""),
        mc("pos7-6", "What part of speech is \"me\" in this sentence? \"They gave me a present.\"", ["pronoun", "noun", "adjective"], "Me replaces the name of the speaker, so it is a pronoun. For example: \"He called her.\""),
        mc("pos7-7", "What part of speech is \"walk\" in this sentence? \"I took a walk after lunch.\"", ["noun", "verb", "adjective"], "Here, walk follows a, and it names a thing that you take, so it is a noun. For example: \"We had a swim.\""),
        mc("pos7-8", "What part of speech is \"walk\" in this sentence? \"I walk to school every day.\"", ["verb", "noun", "adverb"], "Here, walk is what I do, so it is a verb. Compare it with \"a walk\", which is a noun. For example: \"They swim on Sundays.\""),
        mc("pos7-9", "What part of speech is \"beautiful\" in this sentence? \"Hong Kong has a beautiful harbour.\"", ["adjective", "adverb", "noun"], "Beautiful describes the noun harbour, so it is an adjective. For example: \"a busy street\"."),
        mc("pos7-10", "What part of speech is \"light\" in this sentence? \"She carried a light bag.\"", ["adjective", "noun", "verb"], "Light describes the noun bag (it is not heavy), so it is an adjective. For example: \"a light breeze\"."),
      ],
    },
    {
      id: "pos-8",
      emoji: "✏️",
      title: "Editing: fix the mistake",
      blurb: "Find the error and pick the correct sentence",
      learn: {
        intro:
          "Editing means finding a mistake in a sentence and correcting it. For parts of speech, check the plural nouns, the verb form, adjectives and adverbs, pronouns and joining words, one by one.",
        headers: ["Mistake", "Fix"],
        rows: [
          ["two childs", "two children"],
          ["She sings good.", "She sings well."],
          ["more taller", "taller"],
          ["Give it to she.", "Give it to her."],
          ["Although it rained, but we played.", "Although it rained, we played."],
        ],
        tips: [
          "Step 1: Find the job of each word: is it naming (noun), doing (verb), describing a noun (adjective), describing a verb (adverb)?",
          "Step 2: Check the form: plural spelling, comparatives, subject or object pronouns, and only one joining word for each link.",
        ],
        mistake: "Do not fix only one word and leave another mistake in the sentence. Check the whole sentence.",
      },
      items: [
        mc("pos8-1", "Find the mistake and choose the correct sentence: \"My teacher has three childs.\"", ["My teacher has three children.", "My teacher has three childrens.", "My teacher have three children."], "Child is irregular: the plural is children. For example: \"The men are here.\""),
        mc("pos8-2", "Find the mistake and choose the correct sentence: \"She dances beautiful.\"", ["She dances beautifully.", "She dances beauty.", "She dance beautifully."], "Dances is a verb, so it needs the adverb beautifully. For example: \"He writes neatly.\""),
        mc("pos8-3", "Find the mistake and choose the correct sentence: \"This is the most tallest tower in the city.\"", ["This is the tallest tower in the city.", "This is the most tall tower in the city.", "This is the taller tower in the city."], "Tall is short, so use the tallest. Never use most and -est together. For example: \"She is the fastest runner.\""),
        mc("pos8-4", "Find the mistake and choose the correct sentence: \"Give the ticket to she.\"", ["Give the ticket to her.", "Give the ticket to hers.", "Give the ticket to herself."], "After the preposition to, use the object pronoun: her. For example: \"Give the ball to him.\""),
        mc("pos8-5", "Find the mistake and choose the correct sentence: \"Although it was cold, but we went to the beach.\"", ["Although it was cold, we went to the beach.", "Although it was cold, so we went to the beach.", "Although was cold, we went to the beach."], "Although already shows the contrast, so do not add but. For example: \"Although he was tired, he finished.\""),
        mc("pos8-6", "Find the mistake and choose the correct sentence: \"He is more taller than his brother.\"", ["He is taller than his brother.", "He is more tall than his brother.", "He is tallest than his brother."], "Tall is a short adjective, so use taller. Do not use more and -er together. For example: \"My bag is bigger than yours.\""),
        mc("pos8-7", "Find the mistake and choose the correct sentence: \"The farmer has ten sheeps.\"", ["The farmer has ten sheep.", "The farmer has ten sheepes.", "The farmer have ten sheep."], "Sheep stays the same in the plural. For example: \"We saw two deer.\""),
        mc("pos8-8", "Find the mistake and choose the correct sentence: \"Me and my friend played football.\"", ["My friend and I played football.", "Me and my friend plays football.", "My friend and me played football."], "Both people are the subject, so use I, not me. For example: \"Ken and I walked home.\""),
        mc("pos8-9", "Find the mistake and choose the correct sentence: \"She speaks English very good.\"", ["She speaks English very well.", "She speaks English very goodly.", "She speak English very well."], "Speaks is a verb, so it needs the adverb well, not the adjective good. For example: \"He sings very well.\""),
        mc("pos8-10", "Find the mistake and choose the correct sentence: \"They lost theirs bags at the airport.\"", ["They lost their bags at the airport.", "They lost them bags at the airport.", "They lost they bags at the airport."], "Before a noun (bags), use their. Theirs stands alone. For example: \"We packed our bags.\""),
      ],
    },
  ];

  window.App.Content.GRAMMAR_PATHS = window.App.Content.GRAMMAR_PATHS || [];
  window.App.Content.GRAMMAR_PATHS.push({
    key: "partsofspeech",
    emoji: "🔠",
    label: "Parts of Speech",
    blurb: "Nouns, verbs, adjectives, adverbs, pronouns and conjunctions, step by step.",
    sections: { 0: "Naming and doing words", 2: "Describing words", 4: "Replacing and joining words", 6: "Review and editing" },
    levels: LEVELS,
  });
})();
