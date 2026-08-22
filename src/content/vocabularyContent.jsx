// New module: Vocabulary Builder — 10 words per tier, each with English word,
// part of speech, Traditional Chinese translation, a simple definition, and
// an example sentence showing how to use it.
window.App = window.App || {};
window.App.Content = window.App.Content || {};

(function () {
  window.App.Content.VOCABULARY_ITEMS = {
    easy: [
      { word: "gigantic", pos: "adj", zh: "巨大的", definition: "extremely large", example: "The gigantic whale swam past our boat." },
      { word: "delighted", pos: "adj", zh: "非常高興的", definition: "very pleased", example: "She was delighted with her birthday gift." },
      { word: "enormous", pos: "adj", zh: "巨大的", definition: "very big in size", example: "They live in an enormous house." },
      { word: "curious", pos: "adj", zh: "好奇的", definition: "eager to know or learn something", example: "The curious cat explored every room." },
      { word: "ancient", pos: "adj", zh: "古老的", definition: "very old, from long ago", example: "We visited some ancient ruins in Rome." },
      { word: "brave", pos: "adj", zh: "勇敢的", definition: "showing courage", example: "The brave firefighter rescued the kitten." },
      { word: "wander", pos: "verb", zh: "漫遊；閒逛", definition: "to walk around without a clear direction", example: "We wandered through the old town." },
      { word: "vanish", pos: "verb", zh: "消失", definition: "to disappear suddenly", example: "The magician made the coin vanish." },
      { word: "journey", pos: "noun", zh: "旅程", definition: "a trip from one place to another", example: "Their journey across the country took five days." },
      { word: "treasure", pos: "noun", zh: "寶藏", definition: "a collection of valuable things", example: "The pirates buried their treasure on the island." },
    ],
    medium: [
      { word: "reluctant", pos: "adj", zh: "不情願的", definition: "unwilling to do something", example: "He was reluctant to try the spicy food." },
      { word: "persuade", pos: "verb", zh: "說服", definition: "to convince someone to do something", example: "She persuaded her parents to get a dog." },
      { word: "exhausted", pos: "adj", zh: "精疲力盡的", definition: "extremely tired", example: "After the race, the runners were exhausted." },
      { word: "generous", pos: "adj", zh: "慷慨的", definition: "willing to give freely", example: "He was generous and shared his lunch." },
      { word: "hesitate", pos: "verb", zh: "猶豫", definition: "to pause because you are unsure", example: "Don't hesitate to ask for help." },
      { word: "astonish", pos: "verb", zh: "使震驚；使驚訝", definition: "to surprise someone greatly", example: "The magic trick astonished the audience." },
      { word: "resourceful", pos: "adj", zh: "足智多謀的", definition: "good at finding quick, clever solutions", example: "The resourceful team fixed the robot with tape." },
      { word: "anxious", pos: "adj", zh: "焦慮的", definition: "worried or nervous", example: "She felt anxious before the exam." },
      { word: "achievement", pos: "noun", zh: "成就", definition: "something accomplished successfully", example: "Winning the competition was a huge achievement." },
      { word: "determination", pos: "noun", zh: "決心", definition: "firmness of purpose", example: "Her determination helped her finish the marathon." },
    ],
    hard: [
      { word: "inevitable", pos: "adj", zh: "不可避免的", definition: "certain to happen", example: "Change was inevitable as the city grew." },
      { word: "skeptical", pos: "adj", zh: "懷疑的", definition: "having doubts about something", example: "He was skeptical about the new plan." },
      { word: "articulate", pos: "adj / verb", zh: "表達清晰的；清楚表達", definition: "able to express ideas clearly", example: "She gave an articulate speech." },
      { word: "persevere", pos: "verb", zh: "堅持不懈", definition: "to continue despite difficulty", example: "He persevered through months of training." },
      { word: "ambiguous", pos: "adj", zh: "模稜兩可的", definition: "unclear or open to more than one meaning", example: "The instructions were ambiguous." },
      { word: "underestimate", pos: "verb", zh: "低估", definition: "to think something is smaller or less important than it is", example: "Never underestimate a determined opponent." },
      { word: "controversy", pos: "noun", zh: "爭議", definition: "a disagreement about something", example: "The new rule caused a lot of controversy." },
      { word: "legitimate", pos: "adj", zh: "合法的；正當的", definition: "reasonable or acceptable", example: "She had a legitimate reason for being late." },
      { word: "compromise", pos: "noun / verb", zh: "妥協", definition: "an agreement where each side gives something up", example: "They reached a compromise after a long talk." },
      { word: "perspective", pos: "noun", zh: "觀點", definition: "a particular way of viewing things", example: "Try to see it from her perspective." },
    ],
    expert: [
      { word: "ubiquitous", pos: "adj", zh: "無所不在的", definition: "found everywhere", example: "Smartphones have become ubiquitous in daily life." },
      { word: "meticulous", pos: "adj", zh: "一絲不苟的", definition: "very careful and precise", example: "The scientist kept meticulous notes." },
      { word: "resilience", pos: "noun", zh: "韌性；復原力", definition: "the ability to recover from difficulty", example: "Her resilience helped her recover from the setback." },
      { word: "eloquent", pos: "adj", zh: "雄辯的；有說服力的", definition: "fluent and persuasive in speaking", example: "He gave an eloquent argument for the proposal." },
      { word: "paradox", pos: "noun", zh: "悖論", definition: "a statement that seems contradictory but may be true", example: "It's a paradox that saving time often takes longer." },
      { word: "hypothesis", pos: "noun", zh: "假設", definition: "an idea proposed as a starting point for investigation", example: "Scientists tested their hypothesis with an experiment." },
      { word: "discern", pos: "verb", zh: "辨別", definition: "to recognize or understand something clearly", example: "It was hard to discern his true intentions." },
      { word: "plausible", pos: "adj", zh: "似乎合理的", definition: "seeming reasonable or probable", example: "Her explanation sounded plausible." },
      { word: "arbitrary", pos: "adj", zh: "隨意的；武斷的", definition: "based on random choice rather than reason", example: "The deadline seemed completely arbitrary." },
      { word: "autonomy", pos: "noun", zh: "自主權", definition: "the ability to act independently", example: "Teenagers often seek more autonomy from their parents." },
    ],
  };
})();
