// Grammar drills — three categories (Mixed / Tenses / Prepositions), each with
// tier-scaled fill-in-the-blank items. Distractors are chosen to require real
// grammatical discrimination (subject-verb agreement edge cases, inversion,
// subjunctive, prepositional collocations), not just semantically obvious wrong answers.
// Every item has an `explanation` shown after answering (right or wrong) so
// the child learns the underlying rule, not just the correct letter.
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  window.App.Content.GRAMMAR_ITEMS = {
    mixed: {
      easy: [
        { id: "gm-easy-1", type: "fillblank", sentence: "Neither of the answers ___ correct.", options: ["is", "are", "were", "being"], correctIndex: 0, explanation: "\"Neither\" takes a singular verb, so it's \"is,\" not \"are.\"" },
        { id: "gm-easy-2", type: "fillblank", sentence: "Each of the students ___ a book.", options: ["has", "have", "are having", "were having"], correctIndex: 0, explanation: "\"Each\" is singular, so it takes \"has,\" not \"have.\"" },
        { id: "gm-easy-3", type: "fillblank", sentence: "There ___ a lot of information to cover.", options: ["is", "are", "were", "have"], correctIndex: 0, explanation: "\"Information\" is uncountable, so it takes the singular verb \"is.\"" },
        { id: "gm-easy-4", type: "fillblank", sentence: "She doesn't like coffee, and ___ do I.", options: ["neither", "either", "so", "too"], correctIndex: 0, explanation: "\"Neither do I\" agrees with a negative statement; \"so\" would need a positive one." },
      ],
      medium: [
        { id: "gm-medium-1", type: "fillblank", sentence: "If I were you, I ___ apologize right away.", options: ["would", "will", "was going to", "am going to"], correctIndex: 0, explanation: "The second conditional (If + past, ... would) is used for hypothetical advice." },
        { id: "gm-medium-2", type: "fillblank", sentence: "This is the book ___ I told you about.", options: ["that", "what", "who", "whom"], correctIndex: 0, explanation: "\"That\" (or \"which\") is used for things; \"who\"/\"whom\" are for people." },
        { id: "gm-medium-3", type: "fillblank", sentence: "By the time she gets here, we ___ dinner.", options: ["will have finished", "will finish", "finish", "are finishing"], correctIndex: 0, explanation: "Future perfect (\"will have + past participle\") shows an action completed before another future point." },
        { id: "gm-medium-4", type: "fillblank", sentence: "He speaks English fluently, ___?", options: ["doesn't he", "isn't he", "hasn't he", "won't he"], correctIndex: 0, explanation: "Question tags match the main verb's tense — \"speaks\" is present simple, so the tag uses \"doesn't.\"" },
      ],
      hard: [
        { id: "gm-hard-1", type: "fillblank", sentence: "Scarcely ___ the game begun when it started raining.", options: ["had", "did", "has", "was"], correctIndex: 0, explanation: "Negative adverbs like \"scarcely\" at the start of a sentence trigger inversion with \"had.\"" },
        { id: "gm-hard-2", type: "fillblank", sentence: "The report, along with all the appendices, ___ due tomorrow.", options: ["is", "are", "were", "have been"], correctIndex: 0, explanation: "\"Along with...\" doesn't change the subject's number — the subject is still the singular \"report.\"" },
        { id: "gm-hard-3", type: "fillblank", sentence: "I'd rather you ___ tell anyone about this.", options: ["didn't", "don't", "won't", "hadn't"], correctIndex: 0, explanation: "\"I'd rather you + past simple\" expresses a present/future wish about someone else's actions." },
        { id: "gm-hard-4", type: "fillblank", sentence: "It is essential that he ___ present at the meeting.", options: ["be", "is", "was", "will be"], correctIndex: 0, explanation: "The subjunctive mood after \"essential that\" uses the base form \"be,\" not \"is.\"" },
      ],
      expert: [
        { id: "gm-expert-1", type: "fillblank", sentence: "Were it not for your help, I ___ have finished on time.", options: ["wouldn't", "won't", "don't", "didn't"], correctIndex: 0, explanation: "\"Were it not for\" is an inverted third conditional; the result clause needs \"wouldn't have.\"" },
        { id: "gm-expert-2", type: "fillblank", sentence: "The evidence, far from being conclusive, ___ several new questions.", options: ["raises", "raise", "have raised", "is raising"], correctIndex: 0, explanation: "The subject is the singular \"evidence,\" so the verb stays singular: \"raises.\"" },
        { id: "gm-expert-3", type: "fillblank", sentence: "So absorbed ___ she in the novel that she didn't hear the doorbell.", options: ["was", "did", "is", "had"], correctIndex: 0, explanation: "\"So + adjective\" at the start of a sentence triggers inversion: \"so absorbed was she.\"" },
        { id: "gm-expert-4", type: "fillblank", sentence: "No sooner ___ he arrived than the meeting started.", options: ["had", "did", "has", "was"], correctIndex: 0, explanation: "\"No sooner...than\" uses past perfect with inversion: \"had he arrived.\"" },
      ],
    },
    tense: {
      easy: [
        { id: "gt-easy-1", type: "fillblank", sentence: "She ___ breakfast every morning.", options: ["eats", "eating", "was eating", "eat"], correctIndex: 0, explanation: "Habits/routines use present simple, and \"she\" needs the -s form: \"eats.\"" },
        { id: "gt-easy-2", type: "fillblank", sentence: "Right now, they ___ football in the park.", options: ["are playing", "play", "played", "plays"], correctIndex: 0, explanation: "\"Right now\" signals an action in progress, so it needs present continuous." },
        { id: "gt-easy-3", type: "fillblank", sentence: "Yesterday, I ___ to the cinema with my friends.", options: ["went", "go", "goes", "was go"], correctIndex: 0, explanation: "\"Yesterday\" is a finished past time, so it needs simple past: \"went.\"" },
        { id: "gt-easy-4", type: "fillblank", sentence: "He ___ his homework already, so he can watch TV now.", options: ["has finished", "finished", "finish", "was finished"], correctIndex: 0, explanation: "\"Already\" with a result in the present usually signals present perfect." },
      ],
      medium: [
        { id: "gt-medium-1", type: "fillblank", sentence: "While I ___ dinner, the phone rang.", options: ["was cooking", "cooked", "cook", "have cooked"], correctIndex: 0, explanation: "Past continuous (\"was cooking\") sets the ongoing background action interrupted by \"rang.\"" },
        { id: "gt-medium-2", type: "fillblank", sentence: "I ___ sushi for the first time last year.", options: ["tried", "have tried", "was trying", "try"], correctIndex: 0, explanation: "\"Last year\" is a specific finished time, so it needs simple past." },
        { id: "gt-medium-3", type: "fillblank", sentence: "She ___ here since 2019.", options: ["has lived", "lived", "is living", "live"], correctIndex: 0, explanation: "\"Since\" + a starting point signals present perfect for a state continuing to now." },
        { id: "gt-medium-4", type: "fillblank", sentence: "By the time we arrived, the movie ___ already started.", options: ["had", "have", "has", "was"], correctIndex: 0, explanation: "Past perfect (\"had started\") shows one past action finishing before another past action." },
      ],
      hard: [
        { id: "gt-hard-1", type: "fillblank", sentence: "I ___ for three hours when you finally called me.", options: ["had been waiting", "was waiting", "have waited", "waited"], correctIndex: 0, explanation: "Past perfect continuous emphasizes the duration of an action before another past event." },
        { id: "gt-hard-2", type: "fillblank", sentence: "By next June, she ___ from university.", options: ["will have graduated", "will graduate", "graduates", "is graduating"], correctIndex: 0, explanation: "Future perfect shows an action that will be completed before a future point in time." },
        { id: "gt-hard-3", type: "fillblank", sentence: "They ___ working on the project since 9 a.m., and they're still not done.", options: ["have been", "had been", "were", "are"], correctIndex: 0, explanation: "Present perfect continuous shows an action that started in the past and is still ongoing." },
        { id: "gt-hard-4", type: "fillblank", sentence: "If she ___ harder, she would have passed the exam.", options: ["had studied", "studied", "has studied", "would study"], correctIndex: 0, explanation: "Third conditional (If + past perfect, ... would have + past participle) talks about an unreal past." },
      ],
      expert: [
        { id: "gt-expert-1", type: "fillblank", sentence: "He told me he ___ the report by Friday.", options: ["would finish", "will finish", "finishes", "finished"], correctIndex: 0, explanation: "In reported speech, \"will\" shifts back to \"would\" when the reporting verb is past tense." },
        { id: "gt-expert-2", type: "fillblank", sentence: "It's high time we ___ this issue.", options: ["addressed", "address", "are addressing", "will address"], correctIndex: 0, explanation: "\"It's (high) time\" + subject uses a past tense form to express something that should happen now." },
        { id: "gt-expert-3", type: "fillblank", sentence: "Not until the results were announced ___ how close the race had been.", options: ["did we realize", "we realized", "we did realize", "did we realized"], correctIndex: 0, explanation: "Negative time expressions like \"not until\" at the start trigger subject-auxiliary inversion." },
        { id: "gt-expert-4", type: "fillblank", sentence: "The bridge ___ by the end of next year, according to the latest schedule.", options: ["will have been built", "will be built", "has been built", "is built"], correctIndex: 0, explanation: "Future perfect passive shows a passive action completed by a future point." },
      ],
    },
    preposition: {
      easy: [
        { id: "gp-easy-1", type: "fillblank", sentence: "She arrived ___ school at eight o'clock.", options: ["at", "in", "on", "to"], correctIndex: 0, explanation: "\"Arrive at\" is used for smaller/specific places like a building; \"arrive in\" is for cities/countries." },
        { id: "gp-easy-2", type: "fillblank", sentence: "The keys are ___ the drawer.", options: ["in", "at", "on", "to"], correctIndex: 0, explanation: "\"In\" is used for something enclosed inside a container." },
        { id: "gp-easy-3", type: "fillblank", sentence: "We're going ___ Paris next summer.", options: ["to", "at", "in", "for"], correctIndex: 0, explanation: "\"Go to\" + destination is the standard pattern for travel." },
        { id: "gp-easy-4", type: "fillblank", sentence: "My birthday is ___ July.", options: ["in", "on", "at", "to"], correctIndex: 0, explanation: "Months use \"in\"; specific dates use \"on\"; clock times use \"at.\"" },
      ],
      medium: [
        { id: "gp-medium-1", type: "fillblank", sentence: "He's really good ___ playing the guitar.", options: ["at", "in", "on", "for"], correctIndex: 0, explanation: "\"Good at\" is the fixed collocation for skills and abilities." },
        { id: "gp-medium-2", type: "fillblank", sentence: "I'm looking forward ___ the weekend.", options: ["to", "for", "at", "on"], correctIndex: 0, explanation: "\"Look forward to\" is a fixed phrase — \"to\" here is a preposition, not part of an infinitive." },
        { id: "gp-medium-3", type: "fillblank", sentence: "She apologized ___ being late.", options: ["for", "to", "about", "of"], correctIndex: 0, explanation: "\"Apologize for\" is the standard collocation for the reason behind an apology." },
        { id: "gp-medium-4", type: "fillblank", sentence: "The meeting starts ___ 9 a.m. sharp.", options: ["at", "on", "in", "by"], correctIndex: 0, explanation: "Specific clock times always use \"at.\"" },
      ],
      hard: [
        { id: "gp-hard-1", type: "fillblank", sentence: "The company is responsible ___ the delay in shipping.", options: ["for", "of", "to", "with"], correctIndex: 0, explanation: "\"Responsible for\" is the fixed collocation." },
        { id: "gp-hard-2", type: "fillblank", sentence: "She's married ___ a doctor.", options: ["to", "with", "for", "by"], correctIndex: 0, explanation: "\"Married to\" is the standard collocation, not \"married with.\"" },
        { id: "gp-hard-3", type: "fillblank", sentence: "He was accused ___ cheating on the test.", options: ["of", "for", "with", "by"], correctIndex: 0, explanation: "\"Accused of\" is the fixed collocation." },
        { id: "gp-hard-4", type: "fillblank", sentence: "Despite ___ tired, she finished the marathon.", options: ["being", "of being", "to be", "be"], correctIndex: 0, explanation: "\"Despite\" is followed by a noun or gerund (\"being\"), never a full clause with \"to be.\"" },
      ],
      expert: [
        { id: "gp-expert-1", type: "fillblank", sentence: "The committee insisted ___ reviewing the proposal again before voting.", options: ["on", "for", "of", "about"], correctIndex: 0, explanation: "\"Insist on\" is the fixed collocation." },
        { id: "gp-expert-2", type: "fillblank", sentence: "___ many of her peers, the theory was deeply flawed.", options: ["According to", "Accord to", "According with", "According at"], correctIndex: 0, explanation: "\"According to\" reports someone's opinion or a source; \"according with/at\" aren't standard English." },
        { id: "gp-expert-3", type: "fillblank", sentence: "The company had to account ___ the unexpected losses in its quarterly report.", options: ["for", "of", "on", "to"], correctIndex: 0, explanation: "\"Account for\" means \"to explain\" — a fixed collocation." },
        { id: "gp-expert-4", type: "fillblank", sentence: "Her success can be attributed ___ years of hard work and discipline.", options: ["to", "for", "with", "by"], correctIndex: 0, explanation: "\"Attribute (something) to\" is the fixed collocation for identifying a cause." },
      ],
    },
  };
})();
