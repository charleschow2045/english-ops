// Grammar path E: "Advanced" — active/passive voice, modal verbs,
// conditionals (0/1/2, plus the third conditional as an expert-only
// stretch), reported speech and tense shifts, the Past Perfect, the Present
// Perfect Continuous, modifier placement (misplaced modifiers for everyone,
// dangling modifiers as an expert-only stretch), and an editing level.
//
// Tier gating: most content in this path is the same for every tier, like
// every other path. A small number of items — the third conditional (level
// 3) and dangling modifiers (level 7), plus their matching editing items in
// level 8 — are not S1 must-haves, so they carry `tiers: ["expert"]` and
// only appear in a session when the child's tier is expert. This is a
// generic mechanism (see the `tiers` allow-list check in GrammarModule.jsx,
// where `baseItems` is filtered for path items): any future item in any
// path can opt in the same way. Items with no `tiers` field are unaffected
// and always show, exactly as before. The Learn cards still explain these
// ideas for every tier (there's no per-tier Learn card content yet), just
// with a clear "Expert challenge" label; only the quiz items are gated.
//
// Registered into GRAMMAR_PATHS; same level / Learn-card shape as the other
// paths (Learn card first, then a practice round; the editing level matches
// Past Simple level 11). Items use correctIndex 0 (options are shuffled at
// runtime). Each explanation gives the rule plus a second example that is
// not in the item itself.
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  const fb = (id, sentence, options, explanation) => ({ id, type: "fillblank", sentence, options, correctIndex: 0, explanation });
  const mc = (id, prompt, options, explanation) => ({ id, type: "mc", prompt, options, correctIndex: 0, explanation });
  // Marks an item as an expert-only stretch topic (see the header comment).
  const expertOnly = (item) => ({ ...item, tiers: ["expert"] });

  const LEVELS = [
    {
      id: "adv-1",
      emoji: "🔄",
      title: "Active and passive voice",
      blurb: "The chef cooked the meal. → The meal was cooked by the chef.",
      learn: {
        intro:
          "In the active voice, the subject does the action: The chef cooked the meal. In the passive voice, the subject receives the action: The meal was cooked by the chef. Form the passive with be + the past participle. We often use the passive when we don't know who did something, or when the receiver of the action matters more than the doer.",
        headers: ["Voice", "Example"],
        rows: [
          ["Active: subject does the action", "The chef cooked the meal."],
          ["Passive: subject receives the action", "The meal was cooked by the chef."],
          ["Passive with the doer unknown", "The window was broken. (we don't know who)"],
        ],
        tips: [
          "Form: be (is/are/was/were/has been) + past participle. Match the be verb to the tense and subject: was written, is made, has been built.",
          "The \"by ...\" part naming the doer is optional in the passive, and is often left out when it isn't important or isn't known.",
        ],
        mistake: "\"The meal cooked by the chef\" is missing the be verb. Say \"The meal was cooked by the chef.\"",
      },
      items: [
        fb("adv1-1", "The letter ___ by Tom yesterday.", ["was written", "wrote", "is written", "has written"], "Past passive: was + past participle. For example: \"The email was sent this morning.\""),
        fb("adv1-2", "The cake ___ by my grandmother every year.", ["is made", "made", "was making", "makes"], "Present passive for a habit: is + past participle. For example: \"The bread is baked fresh daily.\""),
        mc("adv1-3", "Which sentence is in the passive voice?", ["The window was broken.", "Someone broke the window.", "The boy broke the window."], "The subject (the window) receives the action, with was + broken. For example: \"The vase was smashed.\""),
        mc("adv1-4", "Which sentence is in the active voice?", ["The dog chased the cat.", "The cat was chased by the dog.", "The cat was being chased."], "The subject (the dog) performs the action directly. For example: \"The team won the match.\""),
        fb("adv1-5", "The homework ___ by all the students last night.", ["was finished", "finished", "is finishing", "has finish"], "Past passive: was + past participle. For example: \"The project was completed on time.\""),
        mc("adv1-6", "Which is the correct passive form of \"The workers built the bridge\"?", ["The bridge was built by the workers.", "The bridge built the workers.", "The workers were built by the bridge."], "The receiver (the bridge) becomes the subject, with was built. For example: \"The house was designed by an architect.\""),
        mc("adv1-7", "Which is the correct passive form of \"Someone stole my bicycle\"?", ["My bicycle was stolen.", "My bicycle stole someone.", "Someone was stolen my bicycle."], "The receiver (my bicycle) becomes the subject; the unknown doer can be left out. For example: \"My phone was taken.\""),
        fb("adv1-8", "This bridge ___ over a hundred years ago.", ["was built", "built", "is building", "has build"], "Past passive: was + past participle. For example: \"This school was founded in 1950.\""),
        mc("adv1-9", "Why might a writer choose the passive voice for \"The window was broken\"?", ["Because we don't know who broke it", "Because it sounds more exciting", "Because passive is always more polite"], "The passive is useful when the doer is unknown or unimportant. For example: \"The car was stolen last night\" (we don't know who)."),
        mc("adv1-10", "Which sentence uses the passive voice correctly?", ["The results will be announced tomorrow.", "The results will announce tomorrow.", "The results announced will tomorrow."], "Future passive: will be + past participle. For example: \"The winner will be chosen next week.\""),
      ],
    },
    {
      id: "adv-2",
      emoji: "🧭",
      title: "Modal verbs",
      blurb: "can, could, may, might, must, should",
      learn: {
        intro:
          "Modal verbs add meaning to a main verb: ability, permission, possibility, obligation or advice. They are always followed by the base verb, with no to and no -s.",
        headers: ["Modal", "Meaning"],
        rows: [
          ["can", "ability or informal permission — She can speak French."],
          ["could", "past ability, or a polite request — Could I borrow this?"],
          ["may", "permission, or possibility — May I leave early?"],
          ["might", "possibility, less certain than may — It might rain."],
          ["must", "strong obligation, or a confident deduction — You must wear a seatbelt. / He must be tired."],
          ["should", "advice or a recommendation — You should see a doctor."],
        ],
        tips: [
          "After a modal verb, always use the base verb: she can swim, not she can swims or she can to swim.",
          "Must can mean \"it is necessary\" (You must finish this) or \"I am almost certain\" (He must be at home; the light is on).",
        ],
        mistake: "\"She can plays the piano\" and \"You must to finish\" are wrong. Say \"She can play the piano\" and \"You must finish.\"",
      },
      items: [
        fb("adv2-1", "She ___ speak three languages fluently.", ["can", "cans", "canning", "could to"], "Can shows present ability. For example: \"He can ride a bicycle.\""),
        fb("adv2-2", "___ I borrow your pen, please?", ["Could", "Can's", "Must", "Shoulds"], "Could makes a polite request. For example: \"Could you help me with this?\""),
        fb("adv2-3", "It ___ rain later; the sky looks grey.", ["might", "musts", "coulds", "shoulding"], "Might shows a possibility that isn't certain. For example: \"She might come to the party.\""),
        fb("adv2-4", "You ___ wear a helmet when you cycle.", ["must", "musts", "must to", "musting"], "Must shows a strong obligation. For example: \"You must bring your ID card.\""),
        fb("adv2-5", "You ___ apologise to her for being late.", ["should", "shoulds", "should to", "shoulding"], "Should gives advice. For example: \"You should drink more water.\""),
        fb("adv2-6", "When I was young, I ___ run very fast.", ["could", "can", "cans", "could to"], "Could shows a past ability. For example: \"He could climb trees when he was small.\""),
        fb("adv2-7", "___ I use the bathroom, please?", ["May", "Cans", "Musting", "Shoulding"], "May asks for permission politely. For example: \"May I ask a question?\""),
        fb("adv2-8", "He ___ be at home; the lights are on.", ["must", "musts", "must to", "musting"], "Must shows a confident deduction here, not an obligation. For example: \"She must be tired after the long trip.\""),
        fb("adv2-9", "They ___ finish the project by Friday.", ["must", "musts", "must to", "musting"], "Must shows a strong obligation. For example: \"We must leave before six.\""),
        fb("adv2-10", "We ___ visit the museum if we have time.", ["might", "musts", "coulds", "shoulding"], "Might shows a possibility. For example: \"They might join us later.\""),
      ],
    },
    {
      id: "adv-3",
      emoji: "🔀",
      title: "Conditionals: if... then...",
      blurb: "Zero, first, second, and (expert challenge) third conditional",
      learn: {
        intro:
          "A conditional sentence has an if-clause and a result. The zero conditional states a general truth. The first conditional talks about a real possibility in the future. The second conditional talks about something unreal or unlikely now. Expert challenge: the third conditional talks about something unreal in the past — imagining how it could have been different.",
        headers: ["Type", "Example"],
        rows: [
          ["Zero: general truth", "If you heat ice, it melts."],
          ["First: real future possibility", "If it rains tomorrow, we will stay inside."],
          ["Second: unreal or unlikely now", "If I had a million dollars, I would travel the world."],
          ["Expert challenge — Third: unreal past", "If she had studied harder, she would have passed the exam."],
        ],
        tips: [
          "Zero conditional: if + present simple, present simple. First conditional: if + present simple, will + base verb.",
          "Second conditional: if + past simple, would + base verb (even with I/he/she, use were: If I were you...). Expert challenge — third conditional: if + had + past participle, would have + past participle.",
        ],
        mistake: "\"If it will rain, we will stay inside\" is wrong; the if-clause uses present simple, not will. Say \"If it rains, we will stay inside.\"",
      },
      items: [
        fb("adv3-1", "If you heat ice, it ___.", ["melts", "will melt", "melted", "would melt"], "Zero conditional: present simple in both parts, for a general truth. For example: \"If you freeze water, it turns to ice.\""),
        fb("adv3-2", "If it rains tomorrow, we ___ inside.", ["will stay", "stay", "stayed", "would stay"], "First conditional: if + present simple, will + base verb, for a real future possibility. For example: \"If she calls, I will answer.\""),
        fb("adv3-3", "If I had a million dollars, I ___ around the world.", ["would travel", "will travel", "travel", "travelled"], "Second conditional: if + past simple, would + base verb, for something unreal or unlikely now. For example: \"If I were taller, I would play basketball.\""),
        fb("adv3-4", "If you mix red and blue, you ___ purple.", ["get", "will get", "got", "would get"], "Zero conditional: present simple in both parts, for a general truth. For example: \"If you press this button, the light turns on.\""),
        fb("adv3-5", "If she studies hard, she ___ the exam.", ["will pass", "passes", "passed", "would pass"], "First conditional: a real future possibility. For example: \"If he trains daily, he will improve.\""),
        fb("adv3-6", "If I were you, I ___ apologise to her.", ["would", "will", "am", "was"], "Second conditional: an unreal or unlikely situation now, using would. For example: \"If I were rich, I would help others.\""),
        fb("adv3-7", "If we don't leave now, we ___ the train.", ["will miss", "miss", "missed", "would miss"], "First conditional: a real future possibility. For example: \"If you don't hurry, you will be late.\""),
        expertOnly(fb("adv3-8", "If she had studied harder, she ___ the exam.", ["would have passed", "would certainly pass", "had already passed", "will definitely pass"], "Expert challenge — third conditional: if + had + past participle, would have + past participle, for an unreal past. For example: \"If he had trained more, he would have won.\"")),
        expertOnly(fb("adv3-9", "If I had known about the party, I ___.", ["would have come", "would surely come", "had already come", "will definitely come"], "Expert challenge — third conditional describes an imagined different past. For example: \"If they had left earlier, they would have caught the train.\"")),
        expertOnly(mc("adv3-10", "Which sentence uses the third conditional correctly?", ["If it had rained, we would have stayed inside.", "If it rained, we would have stayed inside.", "If it had rained, we would stay inside."], "Both parts need the past form: if + had + past participle, would have + past participle. For example: \"If she had asked, I would have helped.\"")),
      ],
    },
    {
      id: "adv-4",
      emoji: "🗨️",
      title: "Reported speech: tense shifts",
      blurb: "\"I am tired,\" she said. → She said she was tired.",
      learn: {
        intro:
          "When we report what someone said, the tense usually shifts back one step into the past, and pronouns and time words change to fit the new speaker and time.",
        headers: ["Direct speech", "Reported speech"],
        rows: [
          ["present simple: \"I am tired.\"", "past simple: She said she was tired."],
          ["present continuous: \"I am watching TV.\"", "past continuous: He said he was watching TV."],
          ["will: \"I will call you.\"", "would: He said he would call me."],
          ["can: \"I can swim.\"", "could: Tom said he could swim."],
          ["present perfect: \"I have finished.\"", "past perfect: She said she had finished."],
        ],
        tips: [
          "Pronouns change too: \"I\" in direct speech often becomes \"he\" or \"she\" in reported speech.",
          "Time words shift as well: today → that day, tomorrow → the next day, yesterday → the day before.",
        ],
        mistake: "\"He said he is tired\" is wrong; the tense should shift back. Say \"He said he was tired.\"",
      },
      items: [
        fb("adv4-1", "\"I am tired,\" she said. → She said she ___ tired.", ["was", "is", "were", "am"], "Present simple shifts back to past simple in reported speech. For example: \"I am busy,\" he said. → He said he was busy."),
        fb("adv4-2", "\"I will call you,\" he said. → He said he ___ call me.", ["would", "will", "can", "should"], "Will shifts back to would in reported speech. For example: \"I will help,\" she said. → She said she would help."),
        fb("adv4-3", "\"I can swim,\" said Tom. → Tom said he ___ swim.", ["could", "can", "would", "should"], "Can shifts back to could in reported speech. For example: \"I can drive,\" he said. → He said he could drive."),
        fb("adv4-4", "\"I have finished my homework,\" she said. → She said she ___ finished her homework.", ["had", "has", "have", "was"], "Present perfect shifts back to past perfect in reported speech. For example: \"I have eaten,\" he said. → He said he had eaten."),
        fb("adv4-5", "\"I am watching TV,\" he said. → He said he ___ TV.", ["was watching", "is watching", "watches", "watched"], "Present continuous shifts back to past continuous in reported speech. For example: \"I am reading,\" she said. → She said she was reading."),
        fb("adv4-6", "\"We visited Japan last year,\" they said. → They said they ___ Japan the year before.", ["had visited", "visited", "have visited", "visit"], "Past simple shifts back to past perfect in reported speech. For example: \"I saw the film,\" she said. → She said she had seen the film."),
        mc("adv4-7", "Which is the correct reported speech for: \"I am hungry,\" said Mei.", ["Mei said she was hungry.", "Mei said she is hungry.", "Mei said I was hungry."], "Present simple shifts to past simple, and the pronoun changes to she. For example: \"I am ready,\" he said. → He said he was ready."),
        mc("adv4-8", "Which is the correct reported speech for: \"I will help you,\" said Ben.", ["Ben said he would help me.", "Ben said he will help me.", "Ben said he would help you."], "Will shifts to would, and you (the listener) becomes me from the reporter's point of view. For example: \"I will call you,\" she said. → She said she would call me."),
        fb("adv4-9", "\"I like ice cream,\" she said. → She said she ___ ice cream.", ["liked", "likes", "like", "would like"], "Present simple shifts back to past simple in reported speech. For example: \"I enjoy football,\" he said. → He said he enjoyed football."),
        mc("adv4-10", "Which is the correct reported speech for: \"I can't come today,\" said Leo.", ["Leo said he couldn't come that day.", "Leo said he can't come today.", "Leo said he couldn't come today."], "Can't shifts to couldn't, and today shifts to that day. For example: \"I can't stay tonight,\" she said. → She said she couldn't stay that night."),
      ],
    },
    {
      id: "adv-5",
      emoji: "⏮️",
      title: "Past Perfect",
      blurb: "had + past participle: an earlier past action",
      learn: {
        intro:
          "The Past Perfect (had + past participle) describes an action that happened before another action or time in the past. It shows which of two past events came first.",
        headers: ["Use", "Example"],
        rows: [
          ["The earlier of two past actions", "By the time we arrived, the film had already started."],
          ["Explaining a past feeling or state", "He was tired because he had run five kilometres."],
          ["With before / after / by the time / already", "When I got to the station, the train had already left."],
        ],
        tips: [
          "Ask: which action happened FIRST? The earlier action takes had + past participle; the later one stays in the Past Simple.",
          "Common signal words: by the time, before, after, already, never (before then).",
        ],
        mistake: "\"When we arrived, the party already started\" is missing had. Say \"When we arrived, the party had already started.\"",
      },
      items: [
        fb("adv5-1", "By the time we arrived, the film ___ already started.", ["had", "has", "was", "did"], "The film starting happened before we arrived, so it needs had. For example: \"By the time I woke up, the sun had risen.\""),
        fb("adv5-2", "She ___ finished her homework before dinner.", ["had", "has", "was", "did"], "Finishing happened before dinner, an earlier past action. For example: \"He had left before I arrived.\""),
        fb("adv5-3", "He was tired because he ___ run five kilometres.", ["had", "has", "was", "did"], "The running happened before he felt tired. For example: \"She was proud because she had won the race.\""),
        fb("adv5-4", "When I got to the station, the train ___ already left.", ["had", "has", "was", "did"], "The train leaving happened before I got there. For example: \"When we called, they had already gone.\""),
        fb("adv5-5", "They ___ never seen snow before that winter.", ["had", "has", "was", "did"], "This describes their experience up to a point in the past. For example: \"She had never visited Japan before that trip.\""),
        fb("adv5-6", "After she ___ eaten, she washed the dishes.", ["had", "has", "was", "did"], "Eating happened before washing the dishes. For example: \"After he had finished, he went to bed.\""),
        fb("adv5-7", "I realised I ___ left my keys at home.", ["had", "has", "was", "did"], "Leaving the keys happened before the moment of realising. For example: \"She noticed she had forgotten her umbrella.\""),
        fb("adv5-8", "The match ___ already started by the time we got there.", ["had", "has", "was", "did"], "The match starting happened before we arrived. For example: \"The show had already begun by the time we sat down.\""),
        mc("adv5-9", "Which sentence correctly uses the Past Perfect?", ["When we arrived, the party had already started.", "When we arrived, the party has already started.", "When we arrived, the party already started had."], "Had, not has, is used for an earlier past action. For example: \"When she called, he had already left.\""),
        mc("adv5-10", "Which sentence correctly uses the Past Perfect?", ["She had finished her homework before dinner.", "She finished had her homework before dinner.", "She has finished her homework before dinner."], "Had comes before the past participle: had finished. For example: \"He had packed his bag before breakfast.\""),
      ],
    },
    {
      id: "adv-6",
      emoji: "⏳",
      title: "Present Perfect Continuous",
      blurb: "have/has been + -ing: an action continuing up to now",
      learn: {
        intro:
          "The Present Perfect Continuous (have/has been + verb-ing) describes an action that started in the past and is still continuing, or has just stopped but has a result you can see now. It often emphasises how long something has been happening.",
        headers: ["Use", "Example"],
        rows: [
          ["Action still continuing, emphasising duration", "I have been studying for three hours."],
          ["Started in the past, still true now", "She has been working here since 2020."],
          ["Just stopped, with a visible present result", "He looks tired because he has been running."],
        ],
        tips: [
          "Form: have/has + been + verb-ing. Use has with he/she/it, and have with I/you/we/they.",
          "It's often used with for (a length of time) or since (a starting point): for three hours, since 2020.",
        ],
        mistake: "\"I have reading this book for a week\" is missing been. Say \"I have been reading this book for a week.\"",
      },
      items: [
        fb("adv6-1", "I ___ studying for three hours.", ["have been", "has been", "was", "am"], "Have been + -ing shows an action continuing up to now. For example: \"We have been waiting for an hour.\""),
        fb("adv6-2", "She ___ working here since 2020.", ["has been", "have been", "was", "is"], "Has been + -ing (she takes has). For example: \"He has been living here for two years.\""),
        fb("adv6-3", "They ___ playing football all afternoon.", ["have been", "has been", "were", "are"], "Have been + -ing (they takes have). For example: \"We have been practising all week.\""),
        fb("adv6-4", "He looks tired because he ___ running.", ["has been", "have been", "was", "is"], "Has been + -ing explains the present result (looking tired). For example: \"She looks happy because she has been dancing.\""),
        fb("adv6-5", "We ___ waiting for the bus for twenty minutes.", ["have been", "has been", "were", "are"], "Have been + -ing shows the action continuing up to now. For example: \"They have been queuing since noon.\""),
        fb("adv6-6", "How long ___ you been learning English?", ["have", "has", "were", "are"], "Have you been...? is the question form with you. For example: \"How long have they been travelling?\""),
        fb("adv6-7", "It ___ raining since this morning.", ["has been", "have been", "was", "is"], "Has been + -ing (it takes has). For example: \"It has been snowing all day.\""),
        mc("adv6-8", "Which sentence correctly uses the Present Perfect Continuous?", ["I have been reading this book for a week.", "I have reading this book for a week.", "I am been reading this book for a week."], "The full form is have/has + been + -ing. For example: \"She has been learning the guitar.\""),
        mc("adv6-9", "Which sentence best emphasises how long an action has continued?", ["She has been practising piano for two hours.", "She practised the piano for two long hours.", "She practises the piano for two long hours."], "Has been + -ing highlights the ongoing duration up to now. For example: \"He has been training for months.\""),
        fb("adv6-10", "My hands are dirty because I ___ gardening.", ["have been", "has been", "was", "am"], "Have been + -ing explains the present result (dirty hands). For example: \"His shoes are wet because he has been walking in the rain.\""),
      ],
    },
    {
      id: "adv-7",
      emoji: "🧷",
      title: "Modifier placement",
      blurb: "Keep a describing phrase next to the word it describes",
      learn: {
        intro:
          "A modifier is a word or phrase that describes something else, and it should sit right next to the word it describes. A misplaced modifier sits in the wrong spot, which can make a sentence confusing or unintentionally funny. Expert challenge: a dangling modifier is even trickier — it's an opening phrase (often starting with -ing) whose describer isn't actually the subject that follows it.",
        headers: ["Problem", "Example"],
        rows: [
          ["Misplaced modifier", "I saw a spider in the bathroom that was huge. (sounds like the bathroom was huge)"],
          ["Fixed: modifier next to spider", "I saw a huge spider in the bathroom."],
          ["Expert challenge — dangling modifier", "Walking home from school, a lost puppy was found by Mei. (sounds like the puppy was walking home)"],
          ["Expert challenge — fixed: the walker (Mei) comes right after the comma", "Walking home from school, Mei found a lost puppy."],
        ],
        tips: [
          "Read the sentence literally: does the modifier end up describing something silly or impossible? If so, it's misplaced.",
          "Expert challenge — for an opening -ing phrase, check that the very next word after the comma is the person or thing actually doing that action.",
        ],
        mistake: "\"He gave the sandwich to the boy wrapped in foil\" makes it sound like the boy is wrapped in foil. Say \"He gave the boy the sandwich wrapped in foil.\"",
      },
      items: [
        mc("adv7-1", "Which sentence places the modifier correctly?", ["The dog with a red collar suddenly barked at the mailman.", "The dog suddenly barked with a red collar at the mailman.", "Suddenly the dog barked at the mailman with a red collar."], "\"With a red collar\" describes the dog, so it belongs right after dog. For example: \"The girl in a blue coat waved at us.\""),
        mc("adv7-2", "Which sentence places the modifier correctly?", ["I saw a huge spider in the bathroom.", "I saw a spider in the bathroom that was huge.", "In the bathroom, huge, I saw a spider."], "\"Huge\" describes the spider, so it belongs right before spider. For example: \"She found a tiny kitten in the garden.\""),
        mc("adv7-3", "Which sentence places the modifier correctly?", ["He gave the boy the sandwich wrapped in foil.", "He gave the sandwich to the boy wrapped in foil.", "He gave the boy wrapped in foil the sandwich."], "\"Wrapped in foil\" describes the sandwich, so it belongs right after sandwich. For example: \"She handed him the letter sealed in an envelope.\""),
        mc("adv7-4", "Which sentence places the modifier correctly?", ["The waiter in a white apron served coffee to the woman.", "The waiter served coffee to the woman in a white apron.", "The waiter served the woman coffee in a white apron."], "\"In a white apron\" describes the waiter, so it belongs right after waiter. For example: \"The chef in a tall hat greeted the guests.\""),
        mc("adv7-5", "Which sentence places the modifier correctly?", ["The girl walking her dog waved at us.", "The girl waved at us walking her dog.", "Walking her dog, at us the girl waved."], "\"Walking her dog\" describes the girl, so it belongs right after girl. For example: \"The man reading a newspaper smiled at us.\""),
        mc("adv7-6", "Which sentence places the modifier correctly?", ["She wore a hat with feathers to the party.", "She wore a hat to the party with feathers.", "To the party with feathers she wore a hat."], "\"With feathers\" describes the hat, so it belongs right after hat. For example: \"He carried a bag full of books to school.\""),
        expertOnly(mc("adv7-7", "Which sentence avoids a dangling modifier?", ["Walking home from school, Mei suddenly found a lost puppy.", "Walking home from school, a lost puppy was found by Mei.", "A lost puppy, walking home from school, was found by Mei."], "Expert challenge — the word right after the opening phrase should be the one doing the action: Mei was walking, not the puppy. For example: \"Feeling tired, Ben went to bed.\"")),
        expertOnly(mc("adv7-8", "Which sentence avoids a dangling modifier?", ["Feeling exhausted, Ben went straight to bed.", "Feeling exhausted, the bed welcomed Ben.", "The bed, feeling exhausted, welcomed Ben."], "Expert challenge — Ben is the one feeling exhausted, so Ben must come right after the comma, not the bed. For example: \"Excited about the trip, the children packed their bags.\"")),
        expertOnly(mc("adv7-9", "Which sentence avoids a dangling modifier?", ["Having finished all of her homework, Mei happily watched television.", "Having finished her homework, the television was watched by Mei.", "The television, having finished her homework, was watched by Mei."], "Expert challenge — Mei is the one who finished her homework, so Mei must come right after the comma. For example: \"Having packed his bag, Ben left for school.\"")),
        expertOnly(mc("adv7-10", "Which sentence avoids a dangling modifier?", ["Driving through the thick fog, we could barely see the road.", "Driving through the fog, the headlights barely lit the road.", "The headlights, driving through the fog, barely lit the road."], "Expert challenge — we were the ones driving, so we must come right after the comma, not the headlights. For example: \"Rounding the corner, the runners spotted the finish line.\"")),
      ],
    },
    {
      id: "adv-8",
      emoji: "✏️",
      title: "Editing: fix the mistake",
      blurb: "Find the error and pick the correct sentence",
      learn: {
        intro:
          "Editing means finding a mistake in a sentence and correcting it. For this path, check the passive form, the modal verb, the conditional pattern, the tense shift in reported speech, had for an earlier past action, been for a continuing action, and where a modifier sits.",
        headers: ["Mistake", "Fix"],
        rows: [
          ["The cake eaten by the children.", "The cake was eaten by the children."],
          ["She can plays the piano.", "She can play the piano."],
          ["If it rain tomorrow, we will stay inside.", "If it rains tomorrow, we will stay inside."],
          ["He said he is tired.", "He said he was tired."],
          ["By the time we arrived, the film already started.", "By the time we arrived, the film had already started."],
        ],
        tips: [
          "Step 1: Check the verb form — is a helping verb (was, can, had, been) missing or wrong?",
          "Step 2: Check the pattern is complete and consistent — the if-clause tense, the reported-speech shift, or where a describing phrase sits.",
        ],
        mistake: "Do not fix only one word and leave another mistake in the sentence. Check the whole sentence.",
      },
      items: [
        mc("adv8-1", "Find the mistake and choose the correct sentence: \"The cake eaten by the children.\"", ["The cake was eaten by the children.", "The cake ate by the children.", "The cake eaten was by the children."], "The passive needs the be verb: was eaten. For example: \"The trophy was awarded to the winner.\""),
        mc("adv8-2", "Find the mistake and choose the correct sentence: \"She can plays the piano very well.\"", ["She can play the piano very well.", "She can played the piano very well.", "She cans play the piano very well."], "After a modal verb, use the base verb: can play, not can plays. For example: \"He can speak Spanish.\""),
        mc("adv8-3", "Find the mistake and choose the correct sentence: \"If it rain tomorrow, we will stay inside.\"", ["If it rains tomorrow, we will stay inside.", "If it will rain tomorrow, we will stay inside.", "If it rain tomorrow, we stay inside."], "The if-clause uses present simple: if it rains, not if it rain or if it will rain. For example: \"If she calls, I will answer.\""),
        mc("adv8-4", "Find the mistake and choose the correct sentence: \"He said he is tired.\"", ["He said he was tired.", "He told he is tired.", "He said he were tired."], "The tense shifts back in reported speech: is becomes was. For example: \"She said she was busy.\""),
        mc("adv8-5", "Find the mistake and choose the correct sentence: \"By the time we arrived, the film already started.\"", ["By the time we arrived, the film had already started.", "By the time we arrived, the film was already started.", "By the time we arrived, the film has already started."], "The earlier past action needs had: had already started. For example: \"By the time I called, she had already left.\""),
        mc("adv8-6", "Find the mistake and choose the correct sentence: \"I have been study English for three years.\"", ["I have been studying English for three years.", "I have study English for three years.", "I am been studying English for three years."], "The Present Perfect Continuous needs -ing: have been studying. For example: \"He has been learning the piano for a year.\""),
        mc("adv8-7", "Find the mistake and choose the correct sentence: \"The bone was given to the dog with a lot of meat on it.\"", ["The dog was given a bone with a lot of meat on it.", "The dog was given to the bone with a lot of meat on it.", "The dog with a lot of meat on it was given a bone."], "\"With a lot of meat on it\" describes the bone, so it must sit right after bone, not after dog. For example: \"She handed him the box full of toys.\""),
        mc("adv8-8", "Find the mistake and choose the correct sentence: \"You must to finish your homework before dinner.\"", ["You must finish your homework before dinner.", "You must finished your homework before dinner.", "You must to finished your homework before dinner."], "After a modal verb, use the base verb with no to: must finish. For example: \"You must bring your ticket.\""),
        expertOnly(mc("adv8-9", "Find the mistake and choose the correct sentence: \"If she had study harder, she would have passed the exam.\"", ["If she had studied harder, she would have passed the exam.", "If she had study harder, she would passed the exam.", "If she studied harder, she would have passed the exam."], "Expert challenge — the third conditional needs had + past participle: had studied. For example: \"If he had practised more, he would have won.\"")),
        expertOnly(mc("adv8-10", "Find the mistake and choose the correct sentence: \"Walking home from school, a lost puppy was found by Mei.\"", ["Walking home from school, Mei suddenly found a lost puppy.", "Walking home from school, Mei was found by a lost puppy.", "A lost puppy, walking home from school, was found by Mei."], "Expert challenge — Mei was the one walking home, so Mei must come right after the opening phrase. For example: \"Arriving late, the students missed the announcement.\"")),
      ],
    },
  ];

  window.App.Content.GRAMMAR_PATHS = window.App.Content.GRAMMAR_PATHS || [];
  window.App.Content.GRAMMAR_PATHS.push({
    key: "advanced",
    emoji: "🎓",
    label: "Advanced",
    blurb: "Active/passive, modals, conditionals, reported speech, and more.",
    sections: { 0: "Voice and modals", 2: "Conditionals", 3: "Reporting and perfect tenses", 6: "Modifiers", 7: "Editing" },
    levels: LEVELS,
  });
})();
