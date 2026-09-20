// Grammar "paths" for the other core tenses, in the same shape as the Past
// Simple path (see grammarPastSimpleContent.jsx): each path is a list of
// short levels, and every level opens with a Learn card (rule, table, tips,
// common mistake) before a practice round. Registered into GRAMMAR_PATHS.
//   Present Tenses    — Present Simple (habits, he/she/it, do/does), Present
//                       Continuous, and choosing between them
//   Past Continuous   — was/were + -ing, while/when, simple vs continuous,
//                       and an editing level
//   Present Perfect   — form, irregular participles, for/since, already/yet/
//                       just/ever/never, and Present Perfect vs Past Simple
//   Future Forms      — will, going to, Present Continuous for arrangements,
//                       and will vs going to
// Items use correctIndex 0 (options are shuffled at runtime). Clues in every
// sentence are chosen so only one option is natural, and each explanation
// gives the rule plus a second example that is not in the item.
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  const fb = (id, sentence, options, explanation) => ({ id, type: "fillblank", sentence, options, correctIndex: 0, explanation });
  const mc = (id, prompt, options, explanation) => ({ id, type: "mc", prompt, options, correctIndex: 0, explanation });

  const PRESENT = [
    {
      id: "pr-1",
      emoji: "🔁",
      title: "Present Simple: habits and facts",
      blurb: "I walk to school every day.",
      learn: {
        intro:
          "We use the Present Simple for habits, routines and facts: things that happen again and again, or are always true. With I, you, we and they, use the base verb.",
        headers: ["Use", "Example"],
        rows: [
          ["Habit / routine", "I walk to school every day."],
          ["Fact", "Water boils at 100°C."],
          ["Timetable", "The bus leaves at 8 a.m."],
          ["Time clues", "always, usually, often, sometimes, never, every day"],
        ],
        tips: [
          "Adverbs of frequency (always, usually, often, sometimes, never) go BEFORE the main verb: I usually eat rice.",
          "With I, you, we and they, use the base verb: we play, they play.",
        ],
        mistake: "Don't say \"I am walk to school.\" Just say \"I walk to school.\"",
      },
      items: [
        fb("pr1-1", "We ___ football every Saturday.", ["play", "plays", "are playing", "played"], "\"Every Saturday\" shows a habit, so use the Present Simple. With \"we\" the verb stays in the base form. For example: \"They swim every morning.\""),
        fb("pr1-2", "Water ___ at 100 degrees Celsius.", ["boils", "boil", "is boiling", "boiled"], "A fact that is always true uses the Present Simple. \"Water\" is like \"it\", so add -s: boils. For example: \"The sun rises in the east.\""),
        fb("pr1-3", "I usually ___ rice for lunch.", ["eat", "eats", "am eating", "ate"], "\"Usually\" tells us it is a routine, so use the Present Simple with the base verb. For example: \"We often have noodles for dinner.\""),
        fb("pr1-4", "My friends and I ___ to school by bus.", ["go", "goes", "are going", "went"], "The subject is plural (\"my friends and I\"), and this is a regular habit, so we use the base verb: go. For example: \"You go to the library on Fridays.\""),
        fb("pr1-5", "They never ___ late for class.", ["are", "is", "am", "be"], "\"Be\" is irregular. With \"they\" the Present Simple form is \"are\", and \"never\" goes before the main verb or after \"are\". For example: \"We are never late for school.\""),
        fb("pr1-6", "You always ___ your homework on time.", ["do", "does", "doing", "did"], "With \"you\" the Present Simple uses the base verb: do. For example: \"You always do your best.\""),
        fb("pr1-7", "Birds ___ eggs.", ["lay", "lays", "are laying", "laid"], "This is a fact about all birds, so use the Present Simple with a plural subject: lay. For example: \"Cats drink milk.\""),
        fb("pr1-8", "We sometimes ___ ice cream after dinner.", ["have", "has", "having", "had"], "\"Sometimes\" shows a habit, and \"we\" needs the base verb: have. For example: \"They sometimes have tea in the afternoon.\""),
      ],
    },
    {
      id: "pr-2",
      emoji: "➕",
      title: "he / she / it: add -s",
      blurb: "She goes, he studies, it watches.",
      learn: {
        intro: "With he, she and it (and singular nouns), the Present Simple verb changes: we add -s, -es, or change y to ies.",
        headers: ["I / you / we / they", "he / she / it"],
        rows: [
          ["walk", "walks"],
          ["play", "plays"],
          ["watch", "watches (add -es)"],
          ["go", "goes"],
          ["do", "does"],
          ["study", "studies (y → ies)"],
          ["have", "has"],
        ],
        tips: [
          "Add -es after s, sh, ch, x, z or o: watches, washes, goes.",
          "Consonant + y → ies (study → studies). Vowel + y → just -s (play → plays).",
          "Have → has, and be → is.",
        ],
        mistake: "\"She go\" and \"he studys\" are wrong. Say \"she goes\" and \"he studies\".",
      },
      items: [
        fb("pr2-1", "She ___ to school by bus.", ["goes", "go", "going", "gone"], "\"She\" is singular, and go ends in o, so add -es: goes. For example: \"He does his homework first.\""),
        fb("pr2-2", "My brother ___ football every weekend.", ["plays", "play", "playing", "plaies"], "\"My brother\" is singular, so the verb ends in -s. Play has a vowel before the y, so just add -s: plays. For example: \"She stays with her grandma.\""),
        fb("pr2-3", "He ___ his teeth twice a day.", ["brushes", "brush", "brushs", "brushing"], "Brush ends in sh, so we add -es: brushes. For example: \"She washes her hands before lunch.\""),
        fb("pr2-4", "The baby ___ a lot at night.", ["cries", "cryes", "cry", "crying"], "Cry ends in consonant + y, so change y to ies: cries. For example: \"My cousin studies every evening.\""),
        fb("pr2-5", "Mum ___ the news every morning.", ["watches", "watchs", "watch", "watching"], "Watch ends in ch, so add -es: watches. For example: \"He catches the bus at seven.\""),
        fb("pr2-6", "Ms Lee ___ English at our school.", ["teaches", "teachs", "teach", "teaching"], "Teach ends in ch, so add -es: teaches. For example: \"Mr Wong fixes computers.\""),
        fb("pr2-7", "It ___ a lot in summer in Hong Kong.", ["rains", "rain", "rainning", "raining"], "\"It\" is singular, and this is a general fact, so add -s: rains. For example: \"It snows in Japan in winter.\""),
        fb("pr2-8", "She ___ two younger sisters.", ["has", "have", "haves", "having"], "Have becomes has with he, she and it. For example: \"He has a big family.\""),
        fb("pr2-9", "Dad ___ the washing-up after dinner.", ["does", "do", "dos", "doing"], "Do becomes does with he, she and it. For example: \"She does her homework at the library.\""),
      ],
    },
    {
      id: "pr-3",
      emoji: "🚫",
      title: "Don't / doesn't and questions",
      blurb: "She doesn't like fish. Do you play chess?",
      learn: {
        intro:
          "In the Present Simple, we use do / don't or does / doesn't to make negatives and questions. The main verb then goes back to its base form.",
        headers: ["Statement", "Negative / Question"],
        rows: [
          ["I like fish.", "I don't like fish."],
          ["She likes fish.", "She doesn't like fish."],
          ["They play chess.", "Do they play chess?"],
          ["He plays chess.", "Does he play chess?"],
        ],
        tips: [
          "Use do / don't with I, you, we, they. Use does / doesn't with he, she, it.",
          "After do / does / don't / doesn't, use the base verb: She doesn't play, not She doesn't plays.",
        ],
        mistake: "\"She doesn't likes\" and \"Does he plays?\" are wrong. Say \"She doesn't like\" and \"Does he play?\"",
      },
      items: [
        fb("pr3-1", "She doesn't ___ spicy food.", ["like", "likes", "liking", "liked"], "After doesn't, use the base verb: like. For example: \"He doesn't eat meat.\""),
        fb("pr3-2", "___ you walk to school?", ["Do", "Does", "Are", "Is"], "A Present Simple question with \"you\" starts with Do. For example: \"Do they live near here?\""),
        fb("pr3-3", "My dad ___ drink coffee.", ["doesn't", "don't", "isn't", "not"], "\"My dad\" is singular (he), so the negative is doesn't. For example: \"My sister doesn't like carrots.\""),
        fb("pr3-4", "___ your sister play the piano?", ["Does", "Do", "Is", "Are"], "\"Your sister\" is singular (she), so the question starts with Does. For example: \"Does he live in Kowloon?\""),
        fb("pr3-5", "They don't ___ in Hong Kong.", ["live", "lives", "living", "lived"], "After don't, use the base verb: live. For example: \"We don't play cards.\""),
        fb("pr3-6", "What time ___ the shop open?", ["does", "do", "is", "are"], "\"The shop\" is singular (it), so use does + base verb: does open. For example: \"When does the film start?\""),
        fb("pr3-7", "We ___ have school on Sundays.", ["don't", "doesn't", "aren't", "not"], "\"We\" takes don't in the negative. For example: \"You don't need a coat today.\""),
        fb("pr3-8", "Does he ___ any brothers or sisters?", ["have", "has", "having", "had"], "After does, the verb goes back to its base form: have, not has. For example: \"Does she have a pet?\""),
      ],
    },
    {
      id: "pr-4",
      emoji: "▶️",
      title: "Present Continuous: am / is / are + -ing",
      blurb: "Look! It is raining.",
      learn: {
        intro: "We use the Present Continuous for things that are happening right now, or around now. Use am / is / are + verb-ing.",
        headers: ["Subject / spelling", "Form"],
        rows: [
          ["I", "am playing"],
          ["he / she / it", "is playing"],
          ["you / we / they", "are playing"],
          ["make → making", "drop the e"],
          ["run → running", "double the last letter"],
          ["write → writing", "drop the e"],
        ],
        tips: [
          "Time clues: now, right now, at the moment, today, Look!, Listen!",
          "Spelling: drop a final e (make → making). Double a short final consonant (run → running, swim → swimming).",
        ],
        mistake: "\"He is play\" and \"They are runing\" are wrong. Say \"He is playing\" and \"They are running\".",
      },
      items: [
        fb("pr4-1", "Look! The baby ___ on the floor.", ["is sleeping", "sleeps", "sleep", "are sleeping"], "\"Look!\" points to something happening now, so use the Present Continuous. \"The baby\" is singular: is sleeping. For example: \"Listen! The dog is barking.\""),
        fb("pr4-2", "I ___ my homework right now.", ["am doing", "do", "does", "is doing"], "\"Right now\" needs the Present Continuous, and \"I\" takes am. For example: \"I am reading a book at the moment.\""),
        fb("pr4-3", "The children ___ in the garden at the moment.", ["are playing", "is playing", "plays", "play"], "\"At the moment\" needs the Present Continuous, and \"the children\" is plural: are playing. For example: \"They are swimming now.\""),
        fb("pr4-4", "Listen! Somebody ___ at the door.", ["is knocking", "knocks", "are knocking", "knock"], "\"Listen!\" points to something happening now, and \"somebody\" is singular: is knocking. For example: \"Look! Someone is waving.\""),
        fb("pr4-5", "She ___ a letter to her friend at the moment.", ["is writing", "is writeing", "writing", "are writing"], "Write ends in e, so drop the e before -ing: writing. For example: \"He is taking a photo.\""),
        fb("pr4-6", "We ___ for the bus now.", ["are waiting", "is waiting", "waits", "waiting"], "\"We\" takes are, and \"now\" needs the Present Continuous: are waiting. For example: \"You are standing on my foot!\""),
        fb("pr4-7", "Look! The dog ___ across the road!", ["is running", "is runing", "runs", "are running"], "Run is a short verb ending in one vowel and one consonant, so double the n: running. For example: \"The boy is swimming fast.\""),
        fb("pr4-8", "Dad ___ dinner in the kitchen now.", ["is making", "is makeing", "make", "makes"], "Make ends in e, so drop the e: making. For example: \"Mum is baking a cake.\""),
      ],
    },
    {
      id: "pr-5",
      emoji: "⚖️",
      title: "Simple or continuous?",
      blurb: "She plays tennis. / She is playing tennis now.",
      learn: {
        intro:
          "Present Simple is for routines and facts. Present Continuous is for what is happening now. Some verbs, like know or love, are usually used in the simple form even when we mean \"now\".",
        headers: ["Clue", "Tense"],
        rows: [
          ["every day, usually, always", "Present Simple: She plays tennis every day."],
          ["now, at the moment, Look!", "Present Continuous: She is playing tennis now."],
          ["a fact", "Present Simple: The sun rises in the east."],
          ["know, like, love, want, need", "Present Simple: I know the answer."],
        ],
        tips: [
          "Routine or fact → Present Simple. Happening now → Present Continuous.",
          "State verbs (know, like, love, want, need, understand) are usually NOT used with -ing.",
        ],
        mistake: "\"I am knowing the answer\" is wrong. Say \"I know the answer.\"",
      },
      items: [
        fb("pr5-1", "My mum usually ___ up at seven o'clock.", ["wakes", "is waking", "wake", "waking"], "\"Usually\" shows a routine, so use the Present Simple. \"My mum\" is singular: wakes. For example: \"Dad usually reads the paper.\""),
        fb("pr5-2", "Be quiet! The baby ___ .", ["is sleeping", "sleeps", "sleep", "sleeping"], "\"Be quiet!\" tells us it is happening now, so use the Present Continuous: is sleeping. For example: \"Shh! Grandpa is resting.\""),
        fb("pr5-3", "I ___ the answer to this question.", ["know", "am knowing", "knows", "is knowing"], "Know is a state verb, so we use the Present Simple even for now. For example: \"I understand this rule.\""),
        fb("pr5-4", "They ___ football every Friday afternoon.", ["play", "are playing", "plays", "playing"], "\"Every Friday\" is a routine, so use the Present Simple with a plural subject. For example: \"We visit our grandma every Sunday.\""),
        fb("pr5-5", "Look at the sky! It ___ .", ["is raining", "rains", "rain", "are raining"], "\"Look at the sky!\" shows what is happening now: is raining. For example: \"Look! The bus is coming.\""),
        fb("pr5-6", "She always ___ her homework before dinner.", ["does", "is doing", "do", "doing"], "\"Always\" shows a routine, so use the Present Simple. With \"she\", do becomes does. For example: \"He always brushes his teeth at night.\""),
        fb("pr5-7", "I ___ pizza. It's my favourite food.", ["love", "am loving", "loves", "is loving"], "Love is a state verb, so we use the simple form: love. For example: \"We like apples.\""),
        fb("pr5-8", "Where is Dad? He ___ in the garden at the moment.", ["is working", "works", "work", "working"], "\"At the moment\" needs the Present Continuous: is working. For example: \"She is cooking at the moment.\""),
      ],
    },
  ];

  const PAST_CONTINUOUS = [
    {
      id: "pc-1",
      emoji: "🕰️",
      title: "Past Continuous: was / were + -ing",
      blurb: "At eight o'clock, I was doing my homework.",
      learn: {
        intro:
          "We use the Past Continuous for an action that was in progress at a moment in the past. Use was / were + verb-ing.",
        headers: ["Subject", "Form"],
        rows: [
          ["I / he / she / it", "was playing"],
          ["you / we / they", "were playing"],
          ["Negative", "wasn't / weren't playing"],
          ["Question", "Was she playing? Were they playing?"],
        ],
        tips: [
          "At 8 o'clock last night, I was doing my homework. The action was in progress at that time.",
          "Was goes with I, he, she and it. Were goes with you, we and they.",
        ],
        mistake: "\"They was playing\" is wrong. Say \"They were playing.\"",
      },
      items: [
        fb("pc1-1", "At eight o'clock last night, I ___ my homework.", ["was doing", "were doing", "did", "am doing"], "\"At eight o'clock last night\" is a moment in the past when the action was in progress. \"I\" takes was. For example: \"At noon, she was eating lunch.\""),
        fb("pc1-2", "The children ___ in the garden at four o'clock.", ["were playing", "was playing", "played", "are playing"], "The action was in progress at four o'clock, and \"the children\" is plural: were playing. For example: \"The girls were dancing at six.\""),
        fb("pc1-3", "What ___ you doing at noon yesterday?", ["were", "was", "did", "are"], "\"You\" takes were in the Past Continuous. For example: \"Where were they going?\""),
        fb("pc1-4", "He ___ sleeping at midnight.", ["was", "were", "is", "did"], "\"He\" takes was: was sleeping. For example: \"It was raining at midnight.\""),
        fb("pc1-5", "We ___ waiting for the bus at half past seven.", ["were", "was", "are", "did"], "\"We\" takes were: were waiting. For example: \"You were sitting by the window.\""),
        fb("pc1-6", "It ___ raining all morning.", ["was", "were", "is", "did"], "\"It\" takes was: was raining. For example: \"The baby was crying all night.\""),
        fb("pc1-7", "They ___ swimming at ten o'clock; they were at school.", ["weren't", "wasn't", "didn't", "aren't"], "The negative of were is weren't, and \"they\" takes were. For example: \"We weren't watching TV.\""),
        fb("pc1-8", "___ your brother reading at nine o'clock?", ["Was", "Were", "Did", "Is"], "\"Your brother\" is singular (he), so the Past Continuous question starts with Was. For example: \"Was she cooking at six?\""),
      ],
    },
    {
      id: "pc-2",
      emoji: "⚡",
      title: "While and when: an interrupted action",
      blurb: "I was cooking when the phone rang.",
      learn: {
        intro:
          "A longer action was in progress (Past Continuous) when a shorter action happened (Past Simple) and interrupted it.",
        headers: ["Longer action (Past Continuous)", "Shorter action (Past Simple)"],
        rows: [
          ["I was cooking", "when the phone rang."],
          ["While she was reading,", "the lights went out."],
          ["We were walking home", "when it started to rain."],
        ],
        tips: [
          "While is usually followed by the Past Continuous: While I was cooking, ...",
          "The short, sudden action that interrupts uses the Past Simple: ... the phone rang.",
        ],
        mistake: "\"While I cooked, the phone rang\" sounds wrong. Say \"While I was cooking, the phone rang.\"",
      },
      items: [
        fb("pc2-1", "I ___ dinner when the phone rang.", ["was cooking", "cooked", "am cooking", "were cooking"], "The cooking was in progress when the phone interrupted it, so use the Past Continuous. \"I\" takes was. For example: \"She was walking when it began to rain.\""),
        fb("pc2-2", "While we ___ home, it started to rain.", ["were walking", "walked", "was walking", "are walking"], "\"While\" introduces the longer action in progress, and \"we\" takes were. For example: \"While they were eating, the lights went out.\""),
        fb("pc2-3", "She was reading when the lights ___ off.", ["went", "were going", "go", "goes"], "The sudden interruption uses the Past Simple: went. For example: \"He was sleeping when the alarm rang.\""),
        fb("pc2-4", "The boys ___ football when it began to pour.", ["were playing", "played", "was playing", "play"], "The playing was in progress when the rain began. \"The boys\" is plural: were playing. For example: \"We were swimming when the storm came.\""),
        fb("pc2-5", "While Dad was driving, he ___ a strange noise.", ["heard", "was hearing", "hears", "were hearing"], "Hearing the noise was a short event, so use the Past Simple: heard. For example: \"While she was cooking, she burned her finger.\""),
        fb("pc2-6", "I ___ a shower when the doorbell rang.", ["was taking", "took", "am taking", "were taking"], "The shower was in progress when the doorbell interrupted it. For example: \"They were having lunch when I arrived.\""),
        fb("pc2-7", "When the teacher came in, the students ___ .", ["were talking", "talked", "was talking", "talk"], "The talking was already in progress when the teacher arrived: were talking. For example: \"When I called, she was studying.\""),
        fb("pc2-8", "While Mia was sleeping, her phone ___ loudly and woke her up.", ["rang", "was ringing", "rings", "ringing"], "The phone ringing and waking her was a short event that interrupted her sleep: rang. For example: \"While he was reading, the bell rang.\""),
      ],
    },
    {
      id: "pc-3",
      emoji: "⚖️",
      title: "Past Simple or Past Continuous?",
      blurb: "Finished action, or action in progress?",
      learn: {
        intro:
          "Use the Past Simple for an action that happened and finished. Use the Past Continuous for an action that was in progress at a certain time, or for background actions in a story.",
        headers: ["Example", "Tense"],
        rows: [
          ["I ate lunch.", "Past Simple (it happened and finished)"],
          ["I was eating lunch at one o'clock.", "Past Continuous (in progress at that time)"],
          ["She opened the door and walked in.", "Past Simple (one action after another)"],
          ["I was cooking while he was cleaning.", "Past Continuous (two actions at the same time)"],
        ],
        tips: [
          "Ask: was the action in progress at that time, or did it happen and finish?",
          "Stories often use the Past Continuous for the background (The sun was shining) and the Past Simple for events.",
        ],
        mistake: "",
      },
      items: [
        fb("pc3-1", "Yesterday I ___ a great film.", ["saw", "was seeing", "see", "am seeing"], "\"Yesterday I ...\" describes a finished event, so use the Past Simple: saw. For example: \"Last week we visited a museum.\""),
        fb("pc3-2", "At nine o'clock last night, I ___ a great film.", ["was watching", "watched", "watch", "am watching"], "\"At nine o'clock\" gives a moment when the action was in progress: was watching. For example: \"At six, she was cooking.\""),
        fb("pc3-3", "She opened the window and ___ out.", ["looked", "was looking", "looks", "look"], "Two actions happening one after the other both use the Past Simple: opened, looked. For example: \"He stood up and left.\""),
        fb("pc3-4", "The sun ___ and the birds were singing.", ["was shining", "shone", "shines", "shine"], "Two background actions happening at the same time use the Past Continuous. For example: \"The waves were crashing and the wind was blowing.\""),
        fb("pc3-5", "We ___ dinner at seven o'clock and then watched TV.", ["had", "were having", "have", "are having"], "Two finished actions in order use the Past Simple: had, watched. For example: \"They finished the game and went home.\""),
        fb("pc3-6", "What ___ you doing when I called?", ["were", "did", "was", "do"], "\"When I called\" gives the moment; the question asks what was in progress: were you doing. For example: \"What was she reading?\""),
        fb("pc3-7", "He ___ his leg while he was playing football.", ["broke", "was breaking", "breaks", "breaking"], "Breaking a leg is a short event that happened during the longer action: broke. For example: \"She fell while she was skating.\""),
        fb("pc3-8", "While she ___ the piano, her brother was drawing.", ["was playing", "played", "plays", "is playing"], "Two actions happening at the same time both use the Past Continuous. For example: \"While I was cooking, Mum was cleaning.\""),
      ],
    },
    {
      id: "pc-4",
      emoji: "✏️",
      title: "Editing: fix the mistake",
      blurb: "Find the error in past tense sentences",
      learn: {
        intro: "Read each sentence and ask: what tense does it need? Then check the form of the verb and the helper word (was / were).",
        headers: ["Mistake", "Fix"],
        rows: [
          ["They was playing", "They were playing"],
          ["While I cooked, the phone rang", "While I was cooking, the phone rang"],
          ["She was watch TV", "She was watching TV"],
          ["Was they waiting?", "Were they waiting?"],
        ],
        tips: [
          "Check was / were matches the subject: I / he / she / it → was, you / we / they → were.",
          "After was / were, the verb must end in -ing.",
        ],
        mistake: "",
      },
      items: [
        mc("pc4-1", "Find the mistake and choose the correct sentence: \"They was playing football when it rained.\"", ["They were playing football when it rained.", "They was play football when it rained.", "They were played football when it rained."], "\"They\" takes were, not was. For example: \"We were swimming when it rained.\""),
        mc("pc4-2", "Find the mistake and choose the correct sentence: \"While I cooked, the phone rang.\"", ["While I was cooking, the phone rang.", "While I cooking, the phone rang.", "While I was cooked, the phone rang."], "The longer action after \"while\" needs the Past Continuous: was cooking. For example: \"While she was reading, the lights went out.\""),
        mc("pc4-3", "Find the mistake and choose the correct sentence: \"She was watch TV at eight o'clock.\"", ["She was watching TV at eight o'clock.", "She were watching TV at eight o'clock.", "She was watched TV at eight o'clock."], "After was, the verb needs -ing: watching. For example: \"He was eating at six.\""),
        mc("pc4-4", "Find the mistake and choose the correct sentence: \"I was having breakfast when the bell was ringing.\"", ["I was having breakfast when the bell rang.", "I had breakfast when the bell was ringing.", "I was have breakfast when the bell rang."], "The sudden event that interrupts uses the Past Simple: rang. For example: \"We were talking when the teacher walked in.\""),
        mc("pc4-5", "Find the mistake and choose the correct sentence: \"We was walking home when it began to rain.\"", ["We were walking home when it began to rain.", "We was walk home when it began to rain.", "We walked home when it was beginning to rain."], "\"We\" takes were, not was. For example: \"You were running fast.\""),
        mc("pc4-6", "Find the mistake and choose the correct sentence: \"Was they waiting for the bus?\"", ["Were they waiting for the bus?", "Did they waiting for the bus?", "Was they wait for the bus?"], "\"They\" takes were: Were they waiting? For example: \"Were you sleeping?\""),
        mc("pc4-7", "Find the mistake and choose the correct sentence: \"He didn't was sleeping at ten o'clock.\"", ["He wasn't sleeping at ten o'clock.", "He didn't sleeping at ten o'clock.", "He weren't sleeping at ten o'clock."], "The negative of the Past Continuous is wasn't / weren't + -ing, not didn't. For example: \"They weren't listening.\""),
        mc("pc4-8", "Find the mistake and choose the correct sentence: \"The children were play in the garden.\"", ["The children were playing in the garden.", "The children was playing in the garden.", "The children were played in the garden."], "After were, the verb needs -ing: playing. For example: \"The birds were singing.\""),
      ],
    },
  ];

  const PRESENT_PERFECT = [
    {
      id: "pp-1",
      emoji: "🧩",
      title: "have / has + past participle",
      blurb: "I have finished. She has just left.",
      learn: {
        intro:
          "We use the Present Perfect to talk about something that happened at an unspecified time in the past and still matters now, or about experiences. Use have / has + past participle.",
        headers: ["Subject", "Form"],
        rows: [
          ["I / you / we / they", "have played"],
          ["he / she / it", "has played"],
          ["Negative", "haven't / hasn't played"],
          ["Question", "Have you played? Has she played?"],
        ],
        tips: [
          "For regular verbs, the past participle looks the same as the Past Simple: played, walked, finished.",
          "Has goes with he, she and it. Have goes with I, you, we and they.",
        ],
        mistake: "\"She have finished\" is wrong. Say \"She has finished.\"",
      },
      items: [
        fb("pp1-1", "We ___ already cleaned the classroom.", ["have", "has", "are", "do"], "\"We\" takes have in the Present Perfect. For example: \"They have already left.\""),
        fb("pp1-2", "My mum ___ just arrived home.", ["has", "have", "is", "does"], "\"My mum\" is singular (she), so use has. For example: \"He has just finished.\""),
        fb("pp1-3", "They have ___ their homework.", ["finished", "finish", "finishing", "finishes"], "After have / has, use the past participle: finished. For example: \"We have opened the box.\""),
        fb("pp1-4", "I haven't ___ the book yet.", ["finished", "finish", "finishing", "finishes"], "After haven't, use the past participle: finished. For example: \"She hasn't called yet.\""),
        fb("pp1-5", "Has she ___ the door?", ["opened", "open", "opening", "opens"], "After has she, use the past participle: opened. For example: \"Have you washed the dishes?\""),
        fb("pp1-6", "The bus ___ already left.", ["has", "have", "is", "does"], "\"The bus\" is singular, so use has. For example: \"The film has already started.\""),
        fb("pp1-7", "___ you ever visited Japan?", ["Have", "Has", "Did", "Are"], "A Present Perfect question with \"you\" starts with Have. For example: \"Have they finished?\""),
        fb("pp1-8", "He hasn't ___ his room this week.", ["tidied", "tidy", "tidying", "tidies"], "After hasn't, use the past participle: tidied (tidy → tidied). For example: \"She hasn't cleaned her shoes.\""),
      ],
    },
    {
      id: "pp-2",
      emoji: "🔀",
      title: "Irregular past participles",
      blurb: "see → seen, write → written, eat → eaten",
      learn: {
        intro: "Many irregular verbs have a past participle that is different from the Past Simple. It is used after have / has.",
        headers: ["Base", "Past participle"],
        rows: [
          ["be", "been"],
          ["go", "gone / been"],
          ["see", "seen"],
          ["eat", "eaten"],
          ["write", "written"],
          ["take", "taken"],
          ["do", "done"],
          ["give", "given"],
          ["know", "known"],
          ["break", "broken"],
          ["speak", "spoken"],
          ["drive", "driven"],
        ],
        tips: [
          "Compare: see – saw – seen. Use saw for the Past Simple and seen after have / has.",
          "Some are the same in both forms: buy – bought – bought, make – made – made.",
        ],
        mistake: "\"I have saw\" and \"She has wrote\" are wrong. Say \"I have seen\" and \"She has written.\"",
      },
      items: [
        fb("pp2-1", "I have ___ that film three times.", ["seen", "saw", "see", "seed"], "After have, use the past participle: seen. For example: \"We have seen a whale.\""),
        fb("pp2-2", "She has ___ a letter to her cousin.", ["written", "wrote", "writed", "write"], "After has, use the past participle: written. For example: \"He has written a story.\""),
        fb("pp2-3", "They have already ___ all the cake.", ["eaten", "ate", "eat", "eated"], "After have, use the past participle: eaten. For example: \"I have eaten my lunch.\""),
        fb("pp2-4", "He has ___ his arm and can't play.", ["broken", "broke", "break", "breaked"], "After has, use the past participle: broken. For example: \"She has broken her glasses.\""),
        fb("pp2-5", "Have you ever ___ to Singapore?", ["been", "went", "gone", "go"], "For an experience (visiting and coming back), use been. Gone means the person is still there. For example: \"I have been to Paris twice.\""),
        fb("pp2-6", "My teacher has ___ us a lot of homework.", ["given", "gave", "give", "gived"], "After has, use the past participle: given. For example: \"She has given me a present.\""),
        fb("pp2-7", "Who has ___ my pen?", ["taken", "took", "take", "taked"], "After has, use the past participle: taken. For example: \"Someone has taken my seat.\""),
        fb("pp2-8", "I have ___ him since primary school.", ["known", "knew", "know", "knowed"], "After have, use the past participle: known. For example: \"They have known each other for years.\""),
      ],
    },
    {
      id: "pp-3",
      emoji: "⏳",
      title: "for and since",
      blurb: "She has lived here for five years / since 2019.",
      learn: {
        intro:
          "Use the Present Perfect with for and since for something that started in the past and is still true now. It answers the question \"How long?\"",
        headers: ["Word", "Use"],
        rows: [
          ["for + a period of time", "for two hours, for a week, for three years"],
          ["since + a starting point", "since 9 o'clock, since Monday, since 2020"],
          ["Example", "I have lived here for five years / since 2020."],
        ],
        tips: [
          "Ask yourself: is it a length of time (for) or a starting point (since)?",
          "Do not use the Present Simple with for / since. Say \"I have lived here since 2020,\" not \"I live here since 2020.\"",
        ],
        mistake: "\"I live here since 2020\" is wrong. Say \"I have lived here since 2020.\"",
      },
      items: [
        fb("pp3-1", "She has lived here ___ 2019.", ["since", "for", "from", "in"], "2019 is a starting point, so use since. For example: \"He has played chess since Monday.\""),
        fb("pp3-2", "We have been friends ___ five years.", ["for", "since", "from", "during"], "\"Five years\" is a length of time, so use for. For example: \"I have known her for a month.\""),
        fb("pp3-3", "I have known him ___ I was six.", ["since", "for", "from", "while"], "\"I was six\" is a starting point in the past, so use since. For example: \"She has lived here since she was born.\""),
        fb("pp3-4", "He has played the violin ___ two hours.", ["for", "since", "from", "at"], "\"Two hours\" is a length of time, so use for. For example: \"We have waited for ten minutes.\""),
        fb("pp3-5", "It has rained ___ Monday.", ["since", "for", "at", "during"], "Monday is a starting point, so use since. For example: \"It has been cold since December.\""),
        fb("pp3-6", "They have been in Hong Kong ___ a month.", ["for", "since", "at", "in"], "\"A month\" is a length of time, so use for. For example: \"She has been ill for three days.\""),
        fb("pp3-7", "My uncle ___ in Canada since 2015.", ["has lived", "lives", "lived", "is living"], "With since, use the Present Perfect: has lived. For example: \"My aunt has worked here since 2010.\""),
        fb("pp3-8", "We ___ each other for ten years.", ["have known", "know", "knew", "are knowing"], "With for + a length of time up to now, use the Present Perfect: have known. For example: \"They have been married for a year.\""),
      ],
    },
    {
      id: "pp-4",
      emoji: "🔎",
      title: "already, yet, just, ever, never",
      blurb: "I have already eaten. Have you ever seen a whale?",
      learn: {
        intro: "These small words often appear in the Present Perfect. Each has its own place in the sentence.",
        headers: ["Word", "Example"],
        rows: [
          ["already", "Positive: I have already eaten."],
          ["yet", "Negatives and questions, at the end: I haven't eaten yet. Have you eaten yet?"],
          ["just", "A very short time ago: She has just left."],
          ["ever", "In questions: Have you ever seen a whale?"],
          ["never", "Not at any time: I have never seen a whale."],
        ],
        tips: [
          "Already, just, ever and never go between have / has and the past participle.",
          "Yet goes at the end of the sentence.",
        ],
        mistake: "\"I have yet finished\" is wrong. Say \"I haven't finished yet.\"",
      },
      items: [
        fb("pp4-1", "I have ___ finished my homework, so I'm free.", ["already", "yet", "ever", "since"], "\"Already\" is used in positive sentences to show something finished earlier than expected. For example: \"She has already left.\""),
        fb("pp4-2", "Have you finished your project ___ ?", ["yet", "already", "never", "just"], "\"Yet\" goes at the end of questions and negatives. For example: \"Has he arrived yet?\""),
        fb("pp4-3", "She hasn't called me ___ .", ["yet", "already", "ever", "just"], "\"Yet\" goes at the end of negative sentences. For example: \"They haven't finished yet.\""),
        fb("pp4-4", "The film has ___ started. Quick, sit down!", ["just", "yet", "ever", "for"], "\"Just\" shows something happened a very short time ago. For example: \"He has just gone out.\""),
        fb("pp4-5", "Have you ___ eaten durian?", ["ever", "yet", "already", "since"], "\"Ever\" is used in questions about life experience. For example: \"Have you ever ridden a horse?\""),
        fb("pp4-6", "I have ___ been to Europe. I'd love to go.", ["never", "ever", "already", "yet"], "\"Never\" means not at any time in your life. For example: \"She has never seen snow.\""),
        fb("pp4-7", "We have ___ arrived. The train was early.", ["just", "yet", "ever", "never"], "\"Just\" shows something happened a very short time ago. For example: \"I have just finished my dinner.\""),
        fb("pp4-8", "Tom has ___ seen that film, so he doesn't want to watch it again.", ["already", "yet", "ever", "never"], "\"Already\" fits a positive sentence about something done earlier. For example: \"I have already read this book.\""),
      ],
    },
    {
      id: "pp-5",
      emoji: "⚖️",
      title: "Present Perfect or Past Simple?",
      blurb: "I saw him yesterday. / I have seen him.",
      learn: {
        intro:
          "If you say exactly WHEN something happened, use the Past Simple. If the time is not stated, or the action connects to now, use the Present Perfect.",
        headers: ["Clue", "Tense"],
        rows: [
          ["yesterday, last week, in 2019, two days ago", "Past Simple: I saw him yesterday."],
          ["ever, never, already, just, yet", "Present Perfect: I have seen him."],
          ["for, since (still true now)", "Present Perfect: I have lived here for five years."],
        ],
        tips: [
          "Finished time word (yesterday, last year, ago) → Past Simple.",
          "No time word, or a link to now (ever, never, already, just, yet, for, since) → Present Perfect.",
        ],
        mistake: "\"I have seen him yesterday\" is wrong. Say \"I saw him yesterday.\"",
      },
      items: [
        fb("pp5-1", "I ___ my keys yesterday.", ["lost", "have lost", "has lost", "am losing"], "\"Yesterday\" is a finished time, so use the Past Simple: lost. For example: \"She left last night.\""),
        fb("pp5-2", "We ___ to Japan in 2019.", ["went", "have been", "have gone", "go"], "\"In 2019\" is a specific finished time, so use the Past Simple: went. For example: \"They moved here in 2020.\""),
        fb("pp5-3", "We ___ to Japan twice.", ["have been", "went", "go", "are going"], "\"Twice\" gives no specific time; it is about experience. Use the Present Perfect: have been. For example: \"I have seen that film three times.\""),
        fb("pp5-4", "She ___ here since March.", ["has worked", "worked", "works", "is working"], "\"Since March\" links the past to now, so use the Present Perfect: has worked. For example: \"He has studied here since 2022.\""),
        fb("pp5-5", "When ___ you last see him?", ["did", "have", "do", "has"], "\"When\" asks about a specific time, so use the Past Simple: did you see. For example: \"When did she arrive?\""),
        fb("pp5-6", "I ___ that film already.", ["have seen", "saw", "see", "am seeing"], "\"Already\" links to now, so use the Present Perfect: have seen. For example: \"They have already eaten.\""),
        fb("pp5-7", "They ___ the match two days ago.", ["won", "have won", "has won", "win"], "\"Two days ago\" is a finished time, so use the Past Simple: won. For example: \"We met a week ago.\""),
        fb("pp5-8", "___ you ever tried bubble tea?", ["Have", "Did", "Has", "Are"], "\"Ever\" asks about life experience, so use the Present Perfect: Have you ever tried. For example: \"Have they ever been abroad?\""),
      ],
    },
  ];

  const FUTURE = [
    {
      id: "fu-1",
      emoji: "🔮",
      title: "will: predictions, promises and offers",
      blurb: "It will rain. I'll help you.",
      learn: {
        intro: "Use will + base verb for predictions, promises, offers, and decisions made at the moment of speaking.",
        headers: ["Use", "Example"],
        rows: [
          ["Prediction", "It will rain tomorrow."],
          ["Promise", "I will help you."],
          ["Offer / quick decision", "I'll carry that bag for you."],
          ["Negative", "won't = will not"],
        ],
        tips: [
          "Will is the same for every person: I will, she will, they will.",
          "After will, use the base verb: She will go, not She will goes.",
        ],
        mistake: "\"She will goes\" is wrong. Say \"She will go.\"",
      },
      items: [
        fb("fu1-1", "I think it ___ rain tomorrow.", ["will", "is", "wills", "going"], "A prediction (\"I think ...\") uses will + base verb. For example: \"I think she will win.\""),
        fb("fu1-2", "Don't worry. I ___ help you with your bag.", ["will", "am", "does", "have"], "An offer uses will + base verb. For example: \"I will carry it for you.\""),
        fb("fu1-3", "\"The phone is ringing.\" \"I ___ answer it.\"", ["will", "am", "do", "have"], "A decision made at the moment of speaking uses will. For example: \"I'm cold. I will close the window.\""),
        fb("fu1-4", "I promise I ___ tell anyone your secret.", ["won't", "don't", "am not", "wasn't"], "A promise uses will / won't + base verb. For example: \"I won't be late.\""),
        fb("fu1-5", "Do you think our team ___ win the match?", ["will", "is", "does", "did"], "A question about a prediction uses will + subject + base verb. For example: \"Will it rain tomorrow?\""),
        fb("fu1-6", "Tomorrow ___ be sunny and warm.", ["it will", "it is", "will it", "it does"], "A weather prediction uses will + base verb: it will be. For example: \"Next week it will be cooler.\""),
        fb("fu1-7", "He ___ pass the test because he studied hard.", ["will", "is", "does", "has"], "A prediction based on our opinion uses will + base verb. For example: \"She will do well in the race.\""),
        fb("fu1-8", "We ___ probably eat out tonight.", ["will", "are", "did", "have"], "Will is used with \"probably\" for a prediction: will probably eat. For example: \"They will probably come late.\""),
      ],
    },
    {
      id: "fu-2",
      emoji: "🧭",
      title: "going to: plans and clear signs",
      blurb: "I am going to visit my grandma.",
      learn: {
        intro:
          "Use am / is / are + going to + base verb for plans you have already decided, and when you can see that something is about to happen.",
        headers: ["Use", "Example"],
        rows: [
          ["Plan", "I am going to visit my grandma on Sunday."],
          ["Clear sign now", "Look at those clouds! It is going to rain."],
          ["Negative", "She isn't going to come."],
          ["Question", "Are you going to join us?"],
        ],
        tips: [
          "Going to is about plans and about signs you can see now.",
          "Don't forget am / is / are: I am going to, she is going to, they are going to.",
        ],
        mistake: "\"He going to swim\" is wrong. Say \"He is going to swim.\"",
      },
      items: [
        fb("fu2-1", "I ___ visit my grandparents this weekend.", ["am going to", "will going to", "go to", "am going"], "A plan uses am / is / are + going to + base verb. \"I\" takes am. For example: \"I am going to cook dinner.\""),
        fb("fu2-2", "Look at those black clouds! It ___ rain.", ["is going to", "will going to", "goes to", "are going to"], "We can see a sign now, so use going to. \"It\" takes is. For example: \"Look! The boy is going to fall.\""),
        fb("fu2-3", "They ___ build a new library next year.", ["are going to", "is going to", "going to", "goes to"], "A plan uses going to; \"they\" takes are. For example: \"We are going to move house.\""),
        fb("fu2-4", "She ___ study medicine at university.", ["is going to", "are going to", "going to", "am going to"], "A plan uses going to; \"she\" takes is. For example: \"He is going to become a teacher.\""),
        fb("fu2-5", "We ___ have a picnic on Saturday if it's sunny.", ["are going to", "am going to", "is going to", "go to"], "A plan uses going to; \"we\" takes are. For example: \"You are going to love this.\""),
        fb("fu2-6", "___ you going to wear that hat?", ["Are", "Is", "Do", "Does"], "A question about plans with \"you\" starts with Are. For example: \"Is she going to come?\""),
        fb("fu2-7", "He ___ going to miss the bus. He is walking too slowly.", ["is", "are", "am", "does"], "\"He\" takes is, and we can see a sign now. For example: \"She is going to be late.\""),
        fb("fu2-8", "My brother ___ going to be a pilot.", ["is", "are", "am", "be"], "\"My brother\" is singular (he), so use is. For example: \"My sister is going to be a doctor.\""),
      ],
    },
    {
      id: "fu-3",
      emoji: "📅",
      title: "Present Continuous for arrangements",
      blurb: "I'm meeting Kim at five tomorrow.",
      learn: {
        intro:
          "Use the Present Continuous (am / is / are + -ing) with a future time for fixed arrangements: things where the time or place has already been decided.",
        headers: ["Example", "Meaning"],
        rows: [
          ["I'm meeting Kim at five tomorrow.", "a fixed arrangement"],
          ["We're flying to Tokyo on Friday.", "the tickets are booked"],
          ["Time clues", "tomorrow, next week, on Saturday, tonight"],
        ],
        tips: [
          "The time or place is already decided: tonight, on Friday, at six o'clock.",
          "Going to also works: We're going to fly. The Present Continuous sounds more fixed.",
        ],
        mistake: "",
      },
      items: [
        fb("fu3-1", "I ___ my cousin at the cinema at six tonight.", ["am meeting", "meet", "will meeting", "meets"], "A fixed arrangement (time and place decided) uses the Present Continuous: am meeting. For example: \"We are having dinner at eight.\""),
        fb("fu3-2", "We ___ to Tokyo next Friday. The tickets are booked.", ["are flying", "fly", "flies", "is flying"], "The tickets are booked, so it is a firm arrangement: are flying. For example: \"They are leaving on Monday.\""),
        fb("fu3-3", "She ___ her grandma on Sunday afternoon.", ["is visiting", "visits", "visit", "are visiting"], "A planned visit at a set time uses the Present Continuous: is visiting. For example: \"He is seeing the doctor at ten.\""),
        fb("fu3-4", "What ___ you doing this Saturday?", ["are", "do", "will", "is"], "A question about arrangements uses are + you + -ing. For example: \"Where are they going tonight?\""),
        fb("fu3-5", "They ___ a party on Friday. Everyone is invited.", ["are having", "have", "has", "is having"], "The party is arranged, so use the Present Continuous: are having. For example: \"We are painting the room on Sunday.\""),
        fb("fu3-6", "My dad ___ me to football practice tomorrow.", ["is taking", "takes", "take", "are taking"], "An arrangement for tomorrow uses the Present Continuous; \"my dad\" takes is. For example: \"Mum is driving us to school.\""),
        fb("fu3-7", "I ___ home late tonight. I have a meeting.", ["am not coming", "don't coming", "not coming", "am no coming"], "A negative arrangement uses am not + -ing. For example: \"She isn't working tomorrow.\""),
        fb("fu3-8", "The class ___ on a trip to the museum next week.", ["is going", "go", "goes", "are going"], "\"The class\" is treated as one group, so use is + -ing. For example: \"The team is playing on Saturday.\""),
      ],
    },
    {
      id: "fu-4",
      emoji: "⚖️",
      title: "will or going to?",
      blurb: "Choose the best future form.",
      learn: {
        intro: "Both talk about the future, but they are used in different situations.",
        headers: ["Situation", "Form"],
        rows: [
          ["A plan you already made", "going to: We are going to paint the room."],
          ["A sudden decision or offer", "will: I'll open the window."],
          ["A prediction with evidence now", "going to: Look! He's going to fall."],
          ["An opinion or a guess", "will: I think you'll love it."],
        ],
        tips: [
          "Planned before speaking → going to. Decided while speaking → will.",
          "If you can SEE the sign now → going to. If it is only your opinion → will.",
        ],
        mistake: "",
      },
      items: [
        fb("fu4-1", "\"There's no milk.\" \"I ___ buy some.\"", ["will", "am going to", "going to", "buying"], "A decision made at the moment of speaking uses will. For example: \"It's hot. I will open a window.\""),
        fb("fu4-2", "We ___ move to a bigger flat next month. We've already signed the contract.", ["are going to", "will", "are going", "move"], "A plan already made uses going to. For example: \"They are going to get a puppy.\""),
        fb("fu4-3", "Watch out! That boy ___ fall off his bike!", ["is going to", "will", "goes to", "is go to"], "We can see a sign now, so use going to. For example: \"Look at the sky! It is going to snow.\""),
        fb("fu4-4", "I think you ___ love this book.", ["will", "did", "have", "are"], "An opinion about the future uses will. For example: \"I think she will like the gift.\""),
        fb("fu4-5", "\"I can't lift this box.\" \"Don't worry, I ___ help you.\"", ["will", "am going to", "going to", "helped"], "An offer made on the spot uses will. For example: \"I will hold the door for you.\""),
        fb("fu4-6", "She has bought the ingredients. She ___ bake a cake.", ["is going to", "will", "goes to", "baking"], "She has already prepared, so it is a plan: is going to. For example: \"He has bought a ticket. He is going to travel.\""),
        fb("fu4-7", "It's so cloudy. I think it ___ rain soon.", ["is going to", "will going", "goes to", "are going to"], "We can see clouds now, which is evidence: is going to. For example: \"He is running slowly. He is going to lose.\""),
        fb("fu4-8", "I promise I ___ be late again.", ["won't", "am not going", "don't", "isn't"], "A promise uses will / won't. For example: \"I promise I won't forget.\""),
      ],
    },
  ];

  const paths = (window.App.Content.GRAMMAR_PATHS = window.App.Content.GRAMMAR_PATHS || []);
  paths.push(
    {
      key: "present",
      emoji: "🌤️",
      label: "Present Tenses",
      blurb: "Present Simple and Present Continuous, step by step.",
      sections: { 0: "Present Simple", 3: "Present Continuous", 4: "Choosing the tense" },
      levels: PRESENT,
    },
    {
      key: "pastcont",
      emoji: "🌧️",
      label: "Past Continuous",
      blurb: "Actions in progress in the past, and how they mix with Past Simple.",
      sections: { 0: "Form", 1: "Using it", 3: "Editing" },
      levels: PAST_CONTINUOUS,
    },
    {
      key: "perfect",
      emoji: "🎒",
      label: "Present Perfect",
      blurb: "have / has + past participle, for / since, already / yet.",
      sections: { 0: "Form", 2: "Using it", 4: "Choosing the tense" },
      levels: PRESENT_PERFECT,
    },
    {
      key: "future",
      emoji: "🚀",
      label: "Future Forms",
      blurb: "will, going to, and the Present Continuous for plans.",
      sections: { 0: "Ways to talk about the future" },
      levels: FUTURE,
    }
  );
})();
