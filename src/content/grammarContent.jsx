// Grammar drills — three categories (Mixed / Tenses / Prepositions), each with
// tier-scaled fill-in-the-blank items. Distractors require real grammatical
// discrimination (subject-verb agreement edge cases, inversion, subjunctive,
// prepositional collocations), not just semantically obvious wrong answers.
// Every item has an `explanation` with a second worked example demonstrating
// the same rule, so the child learns the underlying pattern, not just the
// letter. Every explanation/answer pair below has been double-checked for
// grammatical correctness against standard English usage.
//
// Tenses also includes a "paragraph" format: two flattened fillblank entries
// that share a two-sentence narrative (with the OTHER blank already filled
// in correctly), testing how tense choice shifts within one continuous
// context rather than isolated sentences.
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  window.App.Content.GRAMMAR_ITEMS = {
    mixed: {
      easy: [
        { id: "gm-easy-1", type: "fillblank", sentence: "Neither of the answers ___ correct.", options: ["is", "are", "were", "being"], correctIndex: 0, explanation: "\"Neither\" takes a singular verb, so it's \"is,\" not \"are.\" For example: \"Neither of my sisters is coming to the party.\"" },
        { id: "gm-easy-2", type: "fillblank", sentence: "Each of the students ___ a book.", options: ["has", "have", "are having", "were having"], correctIndex: 0, explanation: "\"Each\" is singular, so it takes \"has,\" not \"have.\" For example: \"Each of the boxes has a label on it.\"" },
        { id: "gm-easy-3", type: "fillblank", sentence: "There ___ a lot of information to cover.", options: ["is", "are", "were", "have"], correctIndex: 0, explanation: "\"Information\" is uncountable, so it takes the singular verb \"is.\" For example: \"There is a lot of homework to finish tonight.\"" },
        { id: "gm-easy-4", type: "fillblank", sentence: "She doesn't like coffee, and ___ do I.", options: ["neither", "either", "so", "too"], correctIndex: 0, explanation: "\"Neither do I\" agrees with a negative statement; \"so\" would need a positive one. For example: \"He can't swim, and neither can his brother.\"" },
        { id: "gm-easy-5", type: "fillblank", sentence: "Everybody in the class ___ excited about the trip.", options: ["is", "are", "were", "being"], correctIndex: 0, explanation: "\"Everybody\" is always singular, so it takes \"is,\" not \"are.\" For example: \"Everybody here is ready to start.\"" },
        { id: "gm-easy-6", type: "fillblank", sentence: "The scissors ___ on the table.", options: ["are", "is", "was", "being"], correctIndex: 0, explanation: "Tool words like \"scissors,\" \"trousers,\" and \"glasses\" are treated as plural, so they take \"are.\" For example: \"My glasses are on the desk.\"" },
        { id: "gm-easy-7", type: "fillblank", sentence: "One of the puppies ___ a black spot on its ear.", options: ["has", "have", "having", "had"], correctIndex: 0, explanation: "\"One of the...\" is always followed by a singular verb, since \"one\" is the true subject. For example: \"One of the windows is broken.\"" },
        { id: "gm-easy-8", type: "fillblank", sentence: "My family ___ going on holiday next week.", options: ["is", "are", "were", "have"], correctIndex: 0, explanation: "Collective nouns like \"family,\" \"team,\" and \"class\" usually take a singular verb when acting as one unit. For example: \"The team is practising every day this week.\"" },
      ],
      medium: [
        { id: "gm-medium-1", type: "fillblank", sentence: "If I were you, I ___ apologise right away.", options: ["would", "will", "was going to", "am going to"], correctIndex: 0, explanation: "The second conditional (If + past, ... would) is used for hypothetical advice. For example: \"If I were rich, I would travel the world.\"" },
        { id: "gm-medium-2", type: "fillblank", sentence: "This is the book ___ I told you about.", options: ["that", "what", "who", "whom"], correctIndex: 0, explanation: "\"That\" (or \"which\") is used for things; \"who\"/\"whom\" are for people. For example: \"She's the girl that won the contest.\"" },
        { id: "gm-medium-3", type: "fillblank", sentence: "By the time she gets here, we ___ dinner.", options: ["will have finished", "will finish", "finish", "are finishing"], correctIndex: 0, explanation: "Future perfect (\"will have + past participle\") shows an action completed before another future point. For example: \"By the time the movie starts, we will have eaten dinner.\"" },
        { id: "gm-medium-4", type: "fillblank", sentence: "He speaks English fluently, ___?", options: ["doesn't he", "isn't he", "hasn't he", "won't he"], correctIndex: 0, explanation: "Question tags match the main verb's tense — \"speaks\" is present simple, so the tag uses \"doesn't.\" For example: \"They live nearby, don't they?\"" },
        { id: "gm-medium-5", type: "fillblank", sentence: "I wish I ___ more time to finish my project.", options: ["had", "have", "having", "will have"], correctIndex: 0, explanation: "\"Wish\" about the present uses past simple to show something is not currently true. For example: \"I wish I knew the answer.\"" },
        { id: "gm-medium-6", type: "fillblank", sentence: "The movie was ___ than I expected.", options: ["more boring", "boringer", "most boring", "more bored"], correctIndex: 0, explanation: "Two-or-more-syllable adjectives like \"boring\" use \"more\" for comparatives, not an -er ending. For example: \"This puzzle is more difficult than the last one.\"" },
        { id: "gm-medium-7", type: "fillblank", sentence: "You'd better ___ your homework before dinner.", options: ["finish", "finishing", "to finish", "finished"], correctIndex: 0, explanation: "\"Had better\" is followed by the base form of the verb, with no \"to.\" For example: \"You'd better call her back soon.\"" },
        { id: "gm-medium-8", type: "fillblank", sentence: "The teacher asked us ___ our books.", options: ["to open", "opening", "open", "that we open"], correctIndex: 0, explanation: "\"Ask someone + to + verb\" is the standard reported-request pattern. For example: \"She asked him to close the door.\"" },
      ],
      hard: [
        { id: "gm-hard-1", type: "fillblank", sentence: "Scarcely ___ the game begun when it started raining.", options: ["had", "did", "has", "was"], correctIndex: 0, explanation: "Negative adverbs like \"scarcely\" at the start of a sentence trigger inversion with \"had.\" For example: \"Scarcely had she sat down when the phone rang.\"" },
        { id: "gm-hard-2", type: "fillblank", sentence: "The report, along with all the appendices, ___ due tomorrow.", options: ["is", "are", "were", "have been"], correctIndex: 0, explanation: "\"Along with...\" doesn't change the subject's number — the subject is still the singular \"report.\" For example: \"The coach, together with the players, is arriving early.\"" },
        { id: "gm-hard-3", type: "fillblank", sentence: "I'd rather you ___ tell anyone about this.", options: ["didn't", "don't", "won't", "hadn't"], correctIndex: 0, explanation: "\"I'd rather you + past simple\" expresses a present/future wish about someone else's actions. For example: \"I'd rather you stayed a bit longer.\"" },
        { id: "gm-hard-4", type: "fillblank", sentence: "It is essential that he ___ present at the meeting.", options: ["be", "is", "was", "will be"], correctIndex: 0, explanation: "The subjunctive mood after \"essential that\" uses the base form \"be,\" not \"is.\" For example: \"It's important that she be informed right away.\"" },
        { id: "gm-hard-5", type: "fillblank", sentence: "Not only ___ the plan save money, but it also saved time.", options: ["did", "does", "was", "has"], correctIndex: 0, explanation: "\"Not only\" at the start of a sentence triggers inversion; with a past action, use \"did + base verb.\" For example: \"Not only did he apologise, he also fixed the mistake.\"" },
        { id: "gm-hard-6", type: "fillblank", sentence: "Had she known about the traffic, she ___ earlier.", options: ["would have left", "will leave", "would leave", "had left"], correctIndex: 0, explanation: "\"Had she known\" is an inverted third conditional (no \"if\"); the result needs \"would have + past participle.\" For example: \"Had I studied harder, I would have passed.\"" },
        { id: "gm-hard-7", type: "fillblank", sentence: "The number of students ___ increased this year.", options: ["has", "have", "were", "are"], correctIndex: 0, explanation: "\"The number of\" takes a singular verb (it's the number that increases), unlike \"a number of,\" which is plural. For example: \"The number of visitors has doubled.\"" },
        { id: "gm-hard-8", type: "fillblank", sentence: "Only after the alarm rang ___ what had happened.", options: ["did they realise", "they realised", "did they realised", "they did realise"], correctIndex: 0, explanation: "\"Only after...\" at the start of a sentence triggers inversion: \"did + subject + base verb.\" For example: \"Only after he left did she understand.\"" },
      ],
      expert: [
        { id: "gm-expert-1", type: "fillblank", sentence: "Were it not for your help, I ___ have finished on time.", options: ["wouldn't", "won't", "don't", "didn't"], correctIndex: 0, explanation: "\"Were it not for\" is an inverted third conditional; the result clause needs \"wouldn't have.\" For example: \"Were it not for the rain, we would have gone hiking.\"" },
        { id: "gm-expert-2", type: "fillblank", sentence: "The evidence, far from being conclusive, ___ several new questions.", options: ["raises", "raise", "have raised", "is raising"], correctIndex: 0, explanation: "The subject is the singular \"evidence,\" so the verb stays singular: \"raises.\" For example: \"The results, contrary to expectations, confirm the theory.\"" },
        { id: "gm-expert-3", type: "fillblank", sentence: "So absorbed ___ she in the novel that she didn't hear the doorbell.", options: ["was", "did", "is", "had"], correctIndex: 0, explanation: "\"So + adjective\" at the start of a sentence triggers inversion: \"so absorbed was she.\" For example: \"So tired was he that he fell asleep at his desk.\"" },
        { id: "gm-expert-4", type: "fillblank", sentence: "No sooner ___ he arrived than the meeting started.", options: ["had", "did", "has", "was"], correctIndex: 0, explanation: "\"No sooner...than\" uses past perfect with inversion: \"had he arrived.\" For example: \"No sooner had we left than it began to pour.\"" },
        { id: "gm-expert-5", type: "fillblank", sentence: "Had it not been for the delay, the plan ___ perfectly.", options: ["would have worked", "will work", "would work", "works"], correctIndex: 0, explanation: "\"Had it not been for\" is an inverted third conditional; the result clause needs \"would have + past participle.\" For example: \"Had it not been for you, I would have missed the flight.\"" },
        { id: "gm-expert-6", type: "fillblank", sentence: "Rarely ___ such dedication among new employees.", options: ["have we seen", "we have seen", "did we see", "we saw"], correctIndex: 0, explanation: "Negative frequency adverbs like \"rarely\" at the start trigger inversion; with present perfect meaning, use \"have + subject + past participle.\" For example: \"Rarely have I witnessed such kindness.\"" },
        { id: "gm-expert-7", type: "fillblank", sentence: "Little ___ that the decision would change everything.", options: ["did she know", "she knew", "she did know", "did she known"], correctIndex: 0, explanation: "\"Little\" at the start of a sentence (meaning \"she hardly knew\") triggers inversion with \"did + subject + base verb.\" For example: \"Little did he suspect the surprise waiting for him.\"" },
        { id: "gm-expert-8", type: "fillblank", sentence: "Such was the impact of the speech ___ the audience gave a standing ovation.", options: ["that", "which", "so", "as"], correctIndex: 0, explanation: "\"Such + be + subject + that\" is a fixed emphatic structure showing result. For example: \"Such was her excitement that she couldn't sleep.\"" },
      ],
    },
    tense: {
      easy: [
        { id: "gt-easy-1", type: "fillblank", sentence: "She ___ breakfast every morning.", options: ["eats", "eating", "was eating", "eat"], correctIndex: 0, explanation: "Habits/routines use present simple, and \"she\" needs the -s form: \"eats.\" For example: \"He brushes his teeth every night.\"" },
        { id: "gt-easy-2", type: "fillblank", sentence: "Right now, they ___ football in the park.", options: ["are playing", "play", "played", "plays"], correctIndex: 0, explanation: "\"Right now\" signals an action in progress, so it needs present continuous. For example: \"Listen! Someone is knocking.\"" },
        { id: "gt-easy-3", type: "fillblank", sentence: "Yesterday, I ___ to the cinema with my friends.", options: ["went", "go", "goes", "was go"], correctIndex: 0, explanation: "\"Yesterday\" is a finished past time, so it needs simple past: \"went.\" For example: \"They visited their grandma last month.\"" },
        { id: "gt-easy-4", type: "fillblank", sentence: "He ___ his homework already, so he can watch TV now.", options: ["has finished", "finished", "finish", "was finished"], correctIndex: 0, explanation: "\"Already\" with a result in the present usually signals present perfect. For example: \"I have already eaten, thanks.\"" },
        { id: "gt-easy-5", type: "fillblank", sentence: "We ___ to the beach last weekend.", options: ["went", "go", "goes", "was go"], correctIndex: 0, explanation: "A completed action at a stated past time (\"last weekend\") needs simple past. For example: \"They visited their grandma last month.\"" },
        { id: "gt-easy-6", type: "fillblank", sentence: "Look! It ___ outside.", options: ["is raining", "rains", "rained", "was rain"], correctIndex: 0, explanation: "\"Look!\" points to something happening right now, so present continuous is needed. For example: \"Listen! The baby is crying.\"" },
        { id: "gt-easy-7", type: "fillblank", sentence: "She always ___ her homework before dinner.", options: ["does", "do", "doing", "did"], correctIndex: 0, explanation: "\"Always\" with a routine signals present simple, and \"she\" needs the -s/does form. For example: \"He always checks his email in the morning.\"" },
        { id: "gt-easy-8", type: "fillblank", sentence: "They ___ dinner when I called them.", options: ["were having", "have", "had", "having"], correctIndex: 0, explanation: "Past continuous describes an action in progress at a specific past moment, interrupted by \"called.\" For example: \"I was watching TV when the power went out.\"" },
      ],
      medium: [
        { id: "gt-medium-1", type: "fillblank", sentence: "While I ___ dinner, the phone rang.", options: ["was cooking", "cooked", "cook", "have cooked"], correctIndex: 0, explanation: "Past continuous (\"was cooking\") sets the ongoing background action interrupted by \"rang.\" For example: \"While she was studying, the lights went out.\"" },
        { id: "gt-medium-2", type: "fillblank", sentence: "I ___ sushi for the first time last year.", options: ["tried", "have tried", "was trying", "try"], correctIndex: 0, explanation: "\"Last year\" is a specific finished time, so it needs simple past. For example: \"We moved to this city two years ago.\"" },
        { id: "gt-medium-3", type: "fillblank", sentence: "She ___ here since 2019.", options: ["has lived", "lived", "is living", "live"], correctIndex: 0, explanation: "\"Since\" + a starting point signals present perfect for a state continuing to now. For example: \"He has worked here since March.\"" },
        { id: "gt-medium-4", type: "fillblank", sentence: "By the time we arrived, the movie ___ already started.", options: ["had", "have", "has", "was"], correctIndex: 0, explanation: "Past perfect (\"had started\") shows one past action finishing before another past action. For example: \"By six, she had already left.\"" },
        { id: "gt-medium-5", type: "fillblank", sentence: "By six o'clock, she ___ home from work.", options: ["had already left", "already left", "has already left", "leaves"], correctIndex: 0, explanation: "Past perfect shows an action completed before another past time point (\"by six o'clock\"). For example: \"By noon, they had already eaten lunch.\"" },
        { id: "gt-medium-6", type: "fillblank", sentence: "I ___ this movie three times already.", options: ["have seen", "saw", "had seen", "see"], correctIndex: 0, explanation: "Present perfect is used for a repeated, completed experience without a specific past time given. For example: \"She has visited Paris twice.\"" },
        { id: "gt-medium-7", type: "fillblank", sentence: "While she was reading, the lights ___ off.", options: ["went", "were going", "go", "had gone"], correctIndex: 0, explanation: "A short, completed action that interrupts an ongoing past action uses simple past. For example: \"While he was driving, the engine stalled.\"" },
        { id: "gt-medium-8", type: "fillblank", sentence: "This time next week, we ___ on a plane to Japan.", options: ["will be flying", "fly", "are flying", "will fly"], correctIndex: 0, explanation: "Future continuous describes an action that will be in progress at a specific future time. For example: \"This time tomorrow, I'll be relaxing on the beach.\"" },
      ],
      hard: [
        { id: "gt-hard-1", type: "fillblank", sentence: "I ___ for three hours when you finally called me.", options: ["had been waiting", "was waiting", "have waited", "waited"], correctIndex: 0, explanation: "Past perfect continuous emphasises the duration of an action before another past event. For example: \"She had been studying for two hours when the fire alarm went off.\"" },
        { id: "gt-hard-2", type: "fillblank", sentence: "By next June, she ___ from university.", options: ["will have graduated", "will graduate", "graduates", "is graduating"], correctIndex: 0, explanation: "Future perfect shows an action that will be completed before a future point in time. For example: \"By 2030, the bridge will have been rebuilt.\"" },
        { id: "gt-hard-3", type: "fillblank", sentence: "They ___ working on the project since 9 a.m., and they're still not done.", options: ["have been", "had been", "were", "are"], correctIndex: 0, explanation: "Present perfect continuous shows an action that started in the past and is still ongoing. For example: \"We have been waiting here for an hour.\"" },
        { id: "gt-hard-4", type: "fillblank", sentence: "If she ___ harder, she would have passed the exam.", options: ["had studied", "studied", "has studied", "would study"], correctIndex: 0, explanation: "Third conditional (If + past perfect, ... would have + past participle) talks about an unreal past. For example: \"If he had left earlier, he wouldn't have missed the train.\"" },
        { id: "gt-hard-5", type: "fillblank", sentence: "She ___ five novels by the time she turned twenty.", options: ["had written", "wrote", "has written", "was writing"], correctIndex: 0, explanation: "Past perfect shows an action completed before a specific past milestone (\"by the time she turned twenty\"). For example: \"He had visited ten countries by the time he was eighteen.\"" },
        { id: "gt-hard-6", type: "fillblank", sentence: "I'll have finished the report by the time you ___ back.", options: ["get", "will get", "got", "are getting"], correctIndex: 0, explanation: "In future time clauses starting with \"by the time,\" present simple is used even though the meaning is future. For example: \"She'll be asleep by the time we arrive.\"" },
        { id: "gt-hard-7", type: "fillblank", sentence: "He ___ football professionally for ten years before he retired.", options: ["had been playing", "played", "has been playing", "was playing"], correctIndex: 0, explanation: "Past perfect continuous emphasises the duration of an activity that continued up until another past event (retiring). For example: \"They had been living there for years before they moved.\"" },
        { id: "gt-hard-8", type: "fillblank", sentence: "The company ___ record profits this quarter, according to early estimates.", options: ["is expected to report", "expects to report", "reports", "was reporting"], correctIndex: 0, explanation: "\"Is expected to\" + base verb is used for a predicted future outcome based on current evidence. For example: \"The team is expected to win the championship.\"" },
      ],
      expert: [
        { id: "gt-expert-1", type: "fillblank", sentence: "He told me he ___ the report by Friday.", options: ["would finish", "will finish", "finishes", "finished"], correctIndex: 0, explanation: "In reported speech, \"will\" shifts back to \"would\" when the reporting verb is past tense. For example: \"She said she would call later.\"" },
        { id: "gt-expert-2", type: "fillblank", sentence: "It's high time we ___ this issue.", options: ["addressed", "address", "are addressing", "will address"], correctIndex: 0, explanation: "\"It's (high) time\" + subject uses a past tense form to express something that should happen now. For example: \"It's about time you apologised.\"" },
        { id: "gt-expert-3", type: "fillblank", sentence: "Not until the results were announced ___ how close the race had been.", options: ["did we realise", "we realised", "we did realise", "did we realised"], correctIndex: 0, explanation: "Negative time expressions like \"not until\" at the start trigger subject-auxiliary inversion. For example: \"Not until she spoke did I recognise her voice.\"" },
        { id: "gt-expert-4", type: "fillblank", sentence: "The bridge ___ by the end of next year, according to the latest schedule.", options: ["will have been built", "will be built", "has been built", "is built"], correctIndex: 0, explanation: "Future perfect passive shows a passive action completed by a future point. For example: \"The report will have been submitted by Friday.\"" },
        { id: "gt-expert-5", type: "fillblank", sentence: "She said she ___ the assignment by Monday.", options: ["would have finished", "will have finished", "has finished", "finished"], correctIndex: 0, explanation: "In reported speech, future perfect (\"will have finished\") shifts back to \"would have finished\" when the reporting verb is past. For example: \"He said he would have left by then.\"" },
        { id: "gt-expert-6", type: "fillblank", sentence: "Had the weather been better, the event ___ outdoors.", options: ["would have been held", "would be held", "will be held", "is held"], correctIndex: 0, explanation: "Inverted third conditional (\"Had... been\") needs \"would have + past participle\" in the result clause. For example: \"Had she known, she would have come.\"" },
        { id: "gt-expert-7", type: "fillblank", sentence: "By the time the treaty was signed, the war ___ for nearly a decade.", options: ["had been raging", "was raging", "has been raging", "raged"], correctIndex: 0, explanation: "Past perfect continuous emphasises an ongoing action's duration up to a specific past point (the treaty being signed). For example: \"By 1990, the debate had been going on for years.\"" },
        { id: "gt-expert-8", type: "fillblank", sentence: "It won't be long before the new policy ___ into effect.", options: ["comes", "will come", "came", "is coming"], correctIndex: 0, explanation: "After \"before\" in a future time clause, present simple is used even though the meaning refers to the future. For example: \"Call me before you leave.\"" },
        {
          id: "gt-expert-p1a",
          type: "fillblank",
          sentence:
            "Had the committee reviewed the proposal more carefully, they ___ the error before the deadline. As it stands, the mistake has already cost the company thousands of dollars.",
          options: ["would have caught", "would catch", "will catch", "caught"],
          correctIndex: 0,
          explanation: "\"Had the committee reviewed...\" is an inverted third conditional; the result clause needs \"would have + past participle.\"",
        },
        {
          id: "gt-expert-p1b",
          type: "fillblank",
          sentence:
            "Had the committee reviewed the proposal more carefully, they would have caught the error before the deadline. As it stands, the mistake ___ the company thousands of dollars.",
          options: ["has already cost", "already cost", "is already costing", "had already cost"],
          correctIndex: 0,
          explanation: "\"As it stands\" signals a present result of a past problem, fitting present perfect: \"has already cost.\"",
        },
        {
          id: "gt-expert-p2a",
          type: "fillblank",
          sentence:
            "By the time renewable energy sources account for half of global power generation, fossil fuel demand ___ significantly, according to most forecasts.",
          options: ["will have declined", "will decline", "has declined", "declines"],
          correctIndex: 0,
          explanation: "\"By the time\" + a future milestone requires future perfect for the other clause: \"will have declined.\"",
        },
        {
          id: "gt-expert-p2b",
          type: "fillblank",
          sentence:
            "By the time renewable energy sources ___ for half of global power generation, fossil fuel demand will have declined significantly, according to most forecasts.",
          options: ["account", "will account", "accounted", "are accounting"],
          correctIndex: 0,
          explanation: "After \"by the time\" introducing a future time clause, present simple is used even though the meaning is future: \"account.\"",
        },
      ],
    },
    preposition: {
      easy: [
        { id: "gp-easy-1", type: "fillblank", sentence: "She arrived ___ school at eight o'clock.", options: ["at", "in", "on", "to"], correctIndex: 0, explanation: "\"Arrive at\" is used for smaller/specific places like a building; \"arrive in\" is for cities/countries. For example: \"We arrived at the airport early.\"" },
        { id: "gp-easy-2", type: "fillblank", sentence: "The keys are ___ the drawer.", options: ["in", "at", "on", "to"], correctIndex: 0, explanation: "\"In\" is used for something enclosed inside a container. For example: \"The milk is in the fridge.\"" },
        { id: "gp-easy-3", type: "fillblank", sentence: "We're going ___ Paris next summer.", options: ["to", "at", "in", "for"], correctIndex: 0, explanation: "\"Go to\" + destination is the standard pattern for travel. For example: \"They're flying to Tokyo tomorrow.\"" },
        { id: "gp-easy-4", type: "fillblank", sentence: "My birthday is ___ July.", options: ["in", "on", "at", "to"], correctIndex: 0, explanation: "Months use \"in\"; specific dates use \"on\"; clock times use \"at.\" For example: \"School starts in September.\"" },
        { id: "gp-easy-5", type: "fillblank", sentence: "The cat is hiding ___ the bed.", options: ["under", "on", "at", "to"], correctIndex: 0, explanation: "\"Under\" describes a position beneath something. For example: \"The ball rolled under the couch.\"" },
        { id: "gp-easy-6", type: "fillblank", sentence: "We usually eat dinner ___ 6 p.m.", options: ["at", "in", "on", "for"], correctIndex: 0, explanation: "Specific clock times always use \"at.\" For example: \"The train leaves at 9 a.m.\"" },
        { id: "gp-easy-7", type: "fillblank", sentence: "The picture is hanging ___ the wall.", options: ["on", "in", "at", "over"], correctIndex: 0, explanation: "\"On\" is used for something attached to a flat surface. For example: \"There's a poster on the door.\"" },
        { id: "gp-easy-8", type: "fillblank", sentence: "Her birthday party is ___ Saturday.", options: ["on", "in", "at", "to"], correctIndex: 0, explanation: "Specific days of the week use \"on.\" For example: \"We have a test on Monday.\"" },
      ],
      medium: [
        { id: "gp-medium-1", type: "fillblank", sentence: "He's really good ___ playing the guitar.", options: ["at", "in", "on", "for"], correctIndex: 0, explanation: "\"Good at\" is the fixed collocation for skills and abilities. For example: \"She's great at solving puzzles.\"" },
        { id: "gp-medium-2", type: "fillblank", sentence: "I'm looking forward ___ the weekend.", options: ["to", "for", "at", "on"], correctIndex: 0, explanation: "\"Look forward to\" is a fixed phrase — \"to\" here is a preposition, not part of an infinitive. For example: \"We're looking forward to the trip.\"" },
        { id: "gp-medium-3", type: "fillblank", sentence: "She apologised ___ being late.", options: ["for", "to", "about", "of"], correctIndex: 0, explanation: "\"Apologise for\" is the standard collocation for the reason behind an apology. For example: \"He apologised for the mess.\"" },
        { id: "gp-medium-4", type: "fillblank", sentence: "The meeting starts ___ 9 a.m. sharp.", options: ["at", "on", "in", "by"], correctIndex: 0, explanation: "Specific clock times always use \"at.\" For example: \"Class begins at 8:30.\"" },
        { id: "gp-medium-5", type: "fillblank", sentence: "This gift is ___ my best friend.", options: ["for", "to", "of", "with"], correctIndex: 0, explanation: "\"For\" shows who something is intended for. For example: \"This card is for my grandmother.\"" },
        { id: "gp-medium-6", type: "fillblank", sentence: "He's afraid ___ spiders.", options: ["of", "from", "for", "about"], correctIndex: 0, explanation: "\"Afraid of\" is the fixed collocation. For example: \"She's afraid of the dark.\"" },
        { id: "gp-medium-7", type: "fillblank", sentence: "The children were divided ___ two teams.", options: ["into", "in", "to", "on"], correctIndex: 0, explanation: "\"Divide into\" shows a change from one group into separate parts. For example: \"Cut the pizza into eight slices.\"" },
        { id: "gp-medium-8", type: "fillblank", sentence: "She's interested ___ marine biology.", options: ["in", "at", "for", "with"], correctIndex: 0, explanation: "\"Interested in\" is the fixed collocation. For example: \"He's interested in ancient history.\"" },
      ],
      hard: [
        { id: "gp-hard-1", type: "fillblank", sentence: "The company is responsible ___ the delay in shipping.", options: ["for", "of", "to", "with"], correctIndex: 0, explanation: "\"Responsible for\" is the fixed collocation. For example: \"Who's responsible for cleaning the kitchen?\"" },
        { id: "gp-hard-2", type: "fillblank", sentence: "She's married ___ a doctor.", options: ["to", "with", "for", "by"], correctIndex: 0, explanation: "\"Married to\" is the standard collocation, not \"married with.\" For example: \"He's been married to her for ten years.\"" },
        { id: "gp-hard-3", type: "fillblank", sentence: "He was accused ___ cheating on the test.", options: ["of", "for", "with", "by"], correctIndex: 0, explanation: "\"Accused of\" is the fixed collocation. For example: \"She was accused of lying.\"" },
        { id: "gp-hard-4", type: "fillblank", sentence: "Despite ___ tired, she finished the marathon.", options: ["being", "of being", "to be", "be"], correctIndex: 0, explanation: "\"Despite\" is followed by a noun or gerund (\"being\"), never a full clause with \"to be.\" For example: \"Despite losing, they stayed positive.\"" },
        { id: "gp-hard-5", type: "fillblank", sentence: "The results were consistent ___ our predictions.", options: ["with", "to", "for", "of"], correctIndex: 0, explanation: "\"Consistent with\" is the fixed collocation. For example: \"His story is consistent with the evidence.\"" },
        { id: "gp-hard-6", type: "fillblank", sentence: "She's capable ___ handling difficult situations.", options: ["of", "for", "to", "in"], correctIndex: 0, explanation: "\"Capable of\" is the fixed collocation, usually followed by a gerund. For example: \"He's capable of finishing this alone.\"" },
        { id: "gp-hard-7", type: "fillblank", sentence: "The new rule applies ___ all employees, without exception.", options: ["to", "for", "on", "with"], correctIndex: 0, explanation: "\"Apply to\" is the fixed collocation when a rule affects someone. For example: \"This discount applies to new customers.\"" },
        { id: "gp-hard-8", type: "fillblank", sentence: "He was praised ___ his dedication to the team.", options: ["for", "of", "with", "on"], correctIndex: 0, explanation: "\"Praised for\" is the fixed collocation, naming the reason for the praise. For example: \"She was praised for her leadership.\"" },
      ],
      expert: [
        { id: "gp-expert-1", type: "fillblank", sentence: "The committee insisted ___ reviewing the proposal again before voting.", options: ["on", "for", "of", "about"], correctIndex: 0, explanation: "\"Insist on\" is the fixed collocation. For example: \"She insisted on paying for dinner.\"" },
        { id: "gp-expert-2", type: "fillblank", sentence: "___ many of her peers, the theory was deeply flawed.", options: ["According to", "Accord to", "According with", "According at"], correctIndex: 0, explanation: "\"According to\" reports someone's opinion or a source; \"according with/at\" aren't standard English. For example: \"According to the report, sales rose last quarter.\"" },
        { id: "gp-expert-3", type: "fillblank", sentence: "The company had to account ___ the unexpected losses in its quarterly report.", options: ["for", "of", "on", "to"], correctIndex: 0, explanation: "\"Account for\" means \"to explain\" — a fixed collocation. For example: \"How do you account for the sudden drop in sales?\"" },
        { id: "gp-expert-4", type: "fillblank", sentence: "Her success can be attributed ___ years of hard work and discipline.", options: ["to", "for", "with", "by"], correctIndex: 0, explanation: "\"Attribute (something) to\" is the fixed collocation for identifying a cause. For example: \"He attributes his recovery to his doctor's care.\"" },
        { id: "gp-expert-5", type: "fillblank", sentence: "The proposal was met ___ considerable resistance from the board.", options: ["with", "by", "from", "of"], correctIndex: 0, explanation: "\"Met with\" is the fixed collocation for how a plan or idea was received. For example: \"The idea was met with enthusiasm.\"" },
        { id: "gp-expert-6", type: "fillblank", sentence: "The findings are consistent ___ earlier research on the subject.", options: ["with", "to", "for", "on"], correctIndex: 0, explanation: "\"Consistent with\" is the fixed collocation, even in more formal or academic writing. For example: \"This data is consistent with the original hypothesis.\"" },
        { id: "gp-expert-7", type: "fillblank", sentence: "The negotiations eventually broke down ___ a disagreement over pricing.", options: ["over", "for", "about", "of"], correctIndex: 0, explanation: "\"Break down over\" is the idiomatic collocation for the cause of a failed negotiation. For example: \"Talks broke down over the budget.\"" },
        { id: "gp-expert-8", type: "fillblank", sentence: "The scholarship is contingent ___ maintaining a high grade average.", options: ["on", "to", "for", "with"], correctIndex: 0, explanation: "\"Contingent on\" is the fixed formal collocation meaning \"dependent on.\" For example: \"The offer is contingent on passing the background check.\"" },
      ],
    },
  };

  // Two-sentence narratives with the OTHER blank pre-filled correctly — tests
  // how tense choice shifts within one continuous context rather than
  // isolated sentences. Merged into the "tense" bank at each tier below.
  const TENSE_PARAGRAPHS = {
    easy: [
      {
        base: "gt-easy-p1",
        items: [
          {
            sentence: "Every day, Ben ___ his dog before breakfast. Yesterday, though, he forgot and had to rush to school without doing it.",
            options: ["walks", "walked", "is walking", "walk"],
            correctIndex: 0,
            explanation: "This describes Ben's regular daily routine, so present simple \"walks\" is correct — separate from the one-time exception described afterward.",
          },
          {
            sentence: "Every day, Ben walks his dog before breakfast. Yesterday, though, he ___ and had to rush to school without doing it.",
            options: ["forgot", "forgets", "is forgetting", "has forgotten"],
            correctIndex: 0,
            explanation: "\"Yesterday\" marks a specific, finished past time, so simple past \"forgot\" is correct, in contrast to the routine in the first sentence.",
          },
        ],
      },
      {
        base: "gt-easy-p2",
        items: [
          {
            sentence: "Right now, Mia ___ cookies for the school fair. She has already baked two batches today.",
            options: ["is baking", "bakes", "baked", "bake"],
            correctIndex: 0,
            explanation: "\"Right now\" signals an action happening at this exact moment, so present continuous \"is baking\" is correct.",
          },
          {
            sentence: "Right now, Mia is baking cookies for the school fair. She ___ two batches today.",
            options: ["has already baked", "already baked", "is already baking", "bake"],
            correctIndex: 0,
            explanation: "\"Today\" is an unfinished time period, so present perfect \"has already baked\" fits better than simple past.",
          },
        ],
      },
    ],
    medium: [
      {
        base: "gt-medium-p1",
        items: [
          {
            sentence: "Aiden ___ free throws when his coach arrived. By the end of practice, he had made over fifty shots in a row.",
            options: ["was practising", "practised", "has practised", "practises"],
            correctIndex: 0,
            explanation: "Past continuous shows an action in progress when it was interrupted by another past event (\"arrived\").",
          },
          {
            sentence: "Aiden was practising free throws when his coach arrived. By the end of practice, he ___ over fifty shots in a row.",
            options: ["had made", "made", "has made", "was making"],
            correctIndex: 0,
            explanation: "\"By the end of practice\" marks a past milestone, so past perfect \"had made\" shows the action finished before that point.",
          },
        ],
      },
      {
        base: "gt-medium-p2",
        items: [
          {
            sentence: "Since January, Priya ___ for the swim meet. Next month, she will compete for the first time.",
            options: ["has been training", "trained", "is training", "had trained"],
            correctIndex: 0,
            explanation: "\"Since January\" with an action continuing to now uses present perfect continuous: \"has been training.\"",
          },
          {
            sentence: "Since January, Priya has been training for the swim meet. Next month, she ___ for the first time.",
            options: ["will compete", "competes", "is competing", "competed"],
            correctIndex: 0,
            explanation: "A planned future event uses \"will + base verb\": \"will compete.\"",
          },
        ],
      },
    ],
    hard: [
      {
        base: "gt-hard-p1",
        items: [
          {
            sentence: "By the time the fire alarm went off, most students ___ the building. Firefighters arrived within minutes and confirmed it was a false alarm.",
            options: ["had already left", "already left", "have already left", "were already leaving"],
            correctIndex: 0,
            explanation: "\"By the time\" + a past event marks a reference point; the earlier action needs past perfect: \"had already left.\"",
          },
          {
            sentence: "By the time the fire alarm went off, most students had already left the building. Firefighters ___ within minutes and confirmed it was a false alarm.",
            options: ["arrived", "had arrived", "were arriving", "have arrived"],
            correctIndex: 0,
            explanation: "This describes a straightforward completed past action in sequence, so simple past \"arrived\" is correct.",
          },
        ],
      },
      {
        base: "gt-hard-p2",
        items: [
          {
            sentence: "The scientists ___ the coral reef for years when they noticed the first signs of bleaching. Since then, they have published several reports on the damage.",
            options: ["had been studying", "studied", "have studied", "were studying"],
            correctIndex: 0,
            explanation: "Past perfect continuous shows a long action still going on up until another past moment (\"noticed\").",
          },
          {
            sentence: "The scientists had been studying the coral reef for years when they noticed the first signs of bleaching. Since then, they ___ several reports on the damage.",
            options: ["have published", "published", "had published", "are publishing"],
            correctIndex: 0,
            explanation: "\"Since then\" connects a past starting point to now, the signature use of present perfect: \"have published.\"",
          },
        ],
      },
    ],
    expert: [
      {
        base: "gt-expert-p1",
        items: [], // superseded by gt-expert-p1a/b flat entries above, kept structurally consistent
      },
    ],
  };

  // Flatten paragraph pairs into the tense bank for easy/medium/hard (expert's
  // pair was authored directly into the flat list above for variety of format).
  ["easy", "medium", "hard"].forEach((tier) => {
    TENSE_PARAGRAPHS[tier].forEach((set, si) => {
      set.items.forEach((q, qi) => {
        window.App.Content.GRAMMAR_ITEMS.tense[tier].push({
          id: `${set.base}-${qi === 0 ? "a" : "b"}`,
          type: "fillblank",
          sentence: q.sentence,
          options: q.options,
          correctIndex: q.correctIndex,
          explanation: q.explanation,
        });
      });
    });
  });
})();
