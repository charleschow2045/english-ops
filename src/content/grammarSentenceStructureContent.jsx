// Grammar path C: "Sentence Structure" — what makes a complete sentence,
// English word order (including questions), the four sentence types, joining
// ideas with compound and complex sentences (and the comma rules that go
// with them), relative clauses (who/which/that/where), fixing run-ons and
// comma splices, a mixed review, and an editing level.
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
      id: "sen-1",
      emoji: "🧱",
      title: "What makes a complete sentence?",
      blurb: "A complete sentence needs a subject and a verb",
      learn: {
        intro:
          "A complete sentence has a subject (who or what) and a verb (what happens), and it expresses a complete thought. A fragment is missing one of these, or it is a dependent clause left on its own (a clause that starts with a word like because, when or although and cannot stand alone).",
        headers: ["Type", "Example"],
        rows: [
          ["Complete sentence", "The dog barked loudly."],
          ["Fragment: no verb", "The dog. / My sister and her friends."],
          ["Fragment: no subject", "Barked loudly. / Painting pictures every weekend."],
          ["Fragment: a dependent clause alone", "Because the film was too scary."],
          ["A common trap: -ing with no helping verb", "The kitten hiding under the sofa. (missing was)"],
        ],
        tips: [
          "Test it: can the group of words stand alone and make complete sense? If not, it is a fragment.",
          "A word ending in -ing (hiding, painting) needs a helping verb like was, is or were to be a complete verb: The kitten was hiding.",
        ],
        mistake: "\"Because the film was too scary\" is not a complete sentence on its own. Say \"The film was too scary\" or \"Because the film was too scary, we left early.\"",
      },
      items: [
        mc("sen1-1", "Which group of words is a complete sentence?", ["The children played in the park.", "In the crowded park all afternoon.", "Played happily in the local park."], "This has a subject (the children) and a verb (played), so it is complete. For example: \"The dog slept.\""),
        mc("sen1-2", "Which group of words is a complete sentence?", ["My sister enjoys painting pictures.", "My sister and her friends.", "Painting pictures every weekend."], "This has a subject (my sister) and a verb (enjoys), so it is complete. For example: \"He loves reading comics.\""),
        mc("sen1-3", "Which group of words is a complete sentence?", ["The film was really too scary.", "Because the film was too scary.", "Too scary for young children."], "This has a subject and a verb and stands alone. \"Because...\" is a dependent clause and cannot stand alone. For example: \"The soup was much too hot.\""),
        mc("sen1-4", "Which group of words is a complete sentence?", ["The library closes at nine o'clock.", "Closes very late at nine o'clock.", "The old library at nine o'clock."], "This has a subject (the library) and a verb (closes). For example: \"The shop opens at eight.\""),
        mc("sen1-5", "Which group of words is a complete sentence?", ["She left without saying goodbye.", "Without saying a single goodbye.", "She without saying any goodbye."], "This has a subject (she) and a verb (left). For example: \"He arrived without warning.\""),
        mc("sen1-6", "Which group of words is a complete sentence?", ["We watched the fireworks from the rooftop.", "From the tall rooftop late last night.", "Watched the fireworks quietly alone."], "This has a subject (we) and a verb (watched). For example: \"They admired the view.\""),
        mc("sen1-7", "Which group of words is a complete sentence?", ["It was raining heavily.", "Although it was raining.", "Raining heavily outside."], "This has a subject (it) and a verb (was raining) and stands alone. \"Although...\" is a dependent clause. For example: \"The wind was blowing hard.\""),
        mc("sen1-8", "Which group of words is a complete sentence?", ["The tall man near the door waved.", "The tall man standing near the door.", "Near the door and the window."], "This has a subject (the tall man near the door) and a verb (waved). For example: \"The small dog by the gate barked.\""),
        mc("sen1-9", "Which group of words is a complete sentence?", ["We go outside when the bell rings.", "When the loud bell finally rings.", "Goes outside when the bell rings."], "This has a subject (we) and a full verb, and it makes sense on its own. For example: \"They cheer when the team scores.\""),
        mc("sen1-10", "Which group of words is a complete sentence?", ["The kitten was hiding under the sofa.", "The kitten hiding under the old sofa.", "Hiding quietly under the sofa."], "Hiding needs a helping verb (was) to become a complete verb: was hiding. For example: \"The baby was sleeping in the cot.\""),
      ],
    },
    {
      id: "sen-2",
      emoji: "↔️",
      title: "Word order: subject, verb, object",
      blurb: "She (S) eats (V) rice (O). What do you want?",
      learn: {
        intro:
          "English sentences usually follow subject-verb-object order: who does it, what they do, and what it is done to. Questions change the order: a question word or an auxiliary verb (do, does, did, can, is) comes before the subject.",
        headers: ["Sentence type", "Order"],
        rows: [
          ["Statement", "Subject + verb + object: She eats rice."],
          ["Yes/no question", "Auxiliary + subject + verb: Do you like tea?"],
          ["Wh- question", "Wh-word + auxiliary + subject + verb: What do you want?"],
        ],
        tips: [
          "The object usually comes straight after the verb: \"I like football,\" not \"Football I like\" or \"I like very much football.\"",
          "In questions, the auxiliary (do, does, did, is, can) moves in front of the subject: \"Where do you live?\" not \"Where you do live?\"",
        ],
        mistake: "\"She likes very much ice cream\" and \"Where you do live?\" are wrong. Say \"She likes ice cream very much\" and \"Where do you live?\"",
      },
      items: [
        mc("sen2-1", "Which sentence has the correct word order?", ["She likes ice cream very much.", "She likes very much ice cream.", "She very much likes ice cream."], "The object (ice cream) comes straight after the verb; \"very much\" goes at the end. For example: \"He enjoys football a lot.\""),
        mc("sen2-2", "Which sentence has the correct word order?", ["I like football.", "Football I like.", "Like I football."], "Subject, then verb, then object: I like football. For example: \"She plays tennis.\""),
        mc("sen2-3", "Which sentence has the correct word order?", ["My mother cooks dinner every evening.", "My mother every evening cooks dinner.", "Cooks my mother dinner every evening."], "Subject, verb, object, then the time phrase at the end. For example: \"He reads the news every morning.\""),
        mc("sen2-4", "Which sentence has the correct word order?", ["Where do you live?", "Where you do live?", "You where do live?"], "The question word comes first, then the auxiliary do, then the subject you. For example: \"Where does she work?\""),
        mc("sen2-5", "Which sentence has the correct word order?", ["What does he want?", "What he does want?", "Does what he want?"], "Wh-word, then auxiliary does, then subject, then the base verb. For example: \"What does she need?\""),
        mc("sen2-6", "Which sentence has the correct word order?", ["Why is she crying?", "Why she is crying?", "Is why she crying?"], "Wh-word, then the auxiliary is, then the subject. For example: \"Why is he laughing?\""),
        mc("sen2-7", "Which sentence has the correct word order?", ["I gave my friend a present.", "I gave a present my friend.", "My friend I gave a present."], "The person comes before the thing given: gave my friend a present. For example: \"She showed her mum the photo.\""),
        mc("sen2-8", "Which sentence has the correct word order?", ["The cat chased the mouse.", "The mouse the cat chased.", "Chased the cat the mouse."], "Subject, then verb, then object: the cat chased the mouse. For example: \"The boy kicked the ball.\""),
        mc("sen2-9", "Which sentence has the correct word order?", ["When did you arrive?", "When you did arrive?", "Did when you arrive?"], "Wh-word, then the auxiliary did, then the subject. For example: \"When did they leave?\""),
        mc("sen2-10", "Which sentence has the correct word order?", ["Can you help me?", "You can help me?", "Help can you me?"], "In a question, the auxiliary can moves in front of the subject you. For example: \"Can she swim?\""),
      ],
    },
    {
      id: "sen-3",
      emoji: "🗣️",
      title: "Four sentence types",
      blurb: "Statement. Question? Command. Exclamation!",
      learn: {
        intro:
          "There are four types of sentence. A statement tells us something and ends with a full stop. A question asks something and ends with a question mark. A command tells someone to do something. An exclamation shows strong feeling, often starting with What or How, and ends with an exclamation mark.",
        headers: ["Type", "Example"],
        rows: [
          ["Statement (.)", "The train leaves at six o'clock."],
          ["Question (?)", "Where is the library?"],
          ["Command (often ends in . or !)", "Please sit down. / Watch out!"],
          ["Exclamation (!) — often starts with What or How", "What a beautiful sunset!"],
        ],
        tips: [
          "A command often has no subject written down; the subject you is understood: (You) Close the window.",
          "An exclamation usually starts with What or How and shows surprise or strong feeling: What a great goal! How incredible!",
        ],
        mistake: "Adding \"!\" to an ordinary statement does not turn it into an exclamation on its own; the sentence itself needs to show strong feeling, often with What or How.",
      },
      items: [
        mc("sen3-1", "What type of sentence is this? \"Close the window, please.\"", ["command", "question", "statement"], "It tells someone to do something, so it is a command. For example: \"Please pass the salt.\""),
        mc("sen3-2", "What type of sentence is this? \"What a beautiful sunset!\"", ["exclamation", "statement", "command"], "It starts with What and shows strong feeling, so it is an exclamation. For example: \"How wonderful!\""),
        mc("sen3-3", "What type of sentence is this? \"Where is the library?\"", ["question", "statement", "command"], "It asks something and ends with a question mark. For example: \"What time is it?\""),
        mc("sen3-4", "What type of sentence is this? \"The train leaves at six o'clock.\"", ["statement", "question", "exclamation"], "It simply tells us a fact and ends with a full stop. For example: \"The shop opens at nine.\""),
        mc("sen3-5", "What type of sentence is this? \"Please sit down.\"", ["command", "statement", "question"], "It tells someone to do something. For example: \"Turn off the light.\""),
        mc("sen3-6", "What type of sentence is this? \"How amazing that trick was!\"", ["exclamation", "question", "command"], "It starts with How and shows strong feeling. For example: \"What a shock!\""),
        mc("sen3-7", "What type of sentence is this? \"Do you like chocolate?\"", ["question", "command", "statement"], "It asks something and ends with a question mark. For example: \"Are you ready?\""),
        mc("sen3-8", "What type of sentence is this? \"Hong Kong has many tall buildings.\"", ["statement", "exclamation", "question"], "It simply tells us a fact. For example: \"The park is very green.\""),
        mc("sen3-9", "What type of sentence is this? \"Watch out for the step!\"", ["command", "exclamation", "question"], "It tells someone to do something, even with an exclamation mark for urgency. For example: \"Look out for the car!\""),
        mc("sen3-10", "What type of sentence is this? \"What a delicious meal!\"", ["exclamation", "statement", "command"], "It starts with What and shows strong feeling. For example: \"What a mess!\""),
      ],
    },
    {
      id: "sen-4",
      emoji: "➕",
      title: "Compound sentences: and, but, or, so",
      blurb: "I like tea, and I like coffee.",
      learn: {
        intro:
          "A compound sentence joins two complete sentences (independent clauses) with a comma and a joining word: and, but, or, so. If the two parts are not both complete sentences — for example, just two objects, or two verbs sharing one subject — you do not need a comma.",
        headers: ["Rule", "Example"],
        rows: [
          ["Two complete sentences: comma + joining word", "I like tea, and I like coffee."],
          ["Just two objects: no comma", "He likes football and basketball."],
          ["One subject, two verbs: no comma", "I finished my homework and went to bed."],
          ["Two complete sentences: comma + joining word", "The sky was dark, and the wind grew stronger."],
        ],
        tips: [
          "Ask: could each half stand alone as its own sentence? If yes, use a comma before and/but/or/so.",
          "If the second half has no subject of its own (I finished... and went...), it is not a full second sentence, so no comma is needed.",
        ],
        mistake: "\"He likes football, and basketball\" has a comma it does not need — \"football and basketball\" are just two objects, not two sentences.",
      },
      items: [
        mc("sen4-1", "Which sentence is punctuated correctly?", ["I like tea, and I like coffee.", "I like tea and I like coffee.", "I like tea, and, I like coffee."], "Two complete sentences joined by and need a comma before it. For example: \"I play chess, and I play cards.\""),
        mc("sen4-2", "Which sentence is punctuated correctly?", ["She was tired, but she kept working.", "She was tired but she kept working.", "She was tired but, she kept working."], "Two complete sentences joined by but need a comma before it. For example: \"He was hungry, but he waited.\""),
        mc("sen4-3", "Which sentence is punctuated correctly?", ["We can walk, or we can take the bus.", "We can walk or we can take the bus.", "We can walk or, we can take the bus."], "Two complete sentences joined by or need a comma before it. For example: \"You can stay, or you can leave.\""),
        mc("sen4-4", "Which sentence is punctuated correctly?", ["It was raining, so we stayed inside.", "It was raining so we stayed inside.", "It was raining, so, we stayed inside."], "Two complete sentences joined by so need a comma before it. For example: \"She was ill, so she rested.\""),
        mc("sen4-5", "Which sentence is punctuated correctly?", ["He likes football and basketball.", "He likes football, and basketball.", "He, likes football and basketball."], "Football and basketball are just two objects, not two sentences, so no comma is needed. For example: \"She plays piano and violin.\""),
        mc("sen4-6", "Which sentence is punctuated correctly?", ["I finished my homework and went to bed.", "I finished my homework, and went to bed.", "I, finished my homework and went to bed."], "One subject (I) shares two verbs, so this is not two full sentences, and no comma is needed. For example: \"He opened the door and walked in.\""),
        mc("sen4-7", "Which sentence is punctuated correctly?", ["The sky was dark, and the wind grew stronger.", "The sky was dark and the wind grew stronger.", "The sky, was dark and the wind grew stronger."], "Both halves are complete sentences, so a comma is needed before and. For example: \"The lights dimmed, and the music started.\""),
        mc("sen4-8", "Which sentence is punctuated correctly?", ["She wanted to go, but her mother said no.", "She wanted to go but her mother said no.", "She wanted, to go but her mother said no."], "Both halves are complete sentences, so a comma is needed before but. For example: \"He tried hard, but he lost.\""),
        mc("sen4-9", "Which sentence is punctuated correctly?", ["Do you want tea or coffee?", "Do you want tea, or coffee?", "Do you, want tea or coffee?"], "Tea and coffee are just two objects, not two sentences, so no comma is needed. For example: \"Would you like rice or noodles?\""),
        mc("sen4-10", "Which sentence is punctuated correctly?", ["He studied hard, so he passed the exam.", "He studied hard so he passed the exam.", "He studied hard, so, he passed the exam."], "Both halves are complete sentences, so a comma is needed before so. For example: \"She practised daily, so she improved.\""),
      ],
    },
    {
      id: "sen-5",
      emoji: "🪢",
      title: "Complex sentences: because, when, if, although",
      blurb: "Because it was raining, we stayed inside.",
      learn: {
        intro:
          "A complex sentence joins a main clause with a dependent clause starting with a word like because, when, if, although or while. If the dependent clause comes FIRST, put a comma after it. If it comes SECOND, you usually do not need a comma.",
        headers: ["Clause order", "Example"],
        rows: [
          ["Dependent clause first: comma after it", "Because it was raining, we stayed inside."],
          ["Dependent clause second: usually no comma", "We stayed inside because it was raining."],
          ["Dependent clause first: comma after it", "When the bell rings, we line up quietly."],
          ["Dependent clause second: usually no comma", "We line up quietly when the bell rings."],
        ],
        tips: [
          "The rule is about ORDER, not about which joining word you use: first needs a comma, second usually does not.",
          "Common dependent-clause starters: because, when, if, although, while, since, until.",
        ],
        mistake: "\"Because it was raining we stayed inside\" is missing a comma. \"We stayed inside, because it was raining\" has a comma it does not need.",
      },
      items: [
        mc("sen5-1", "Which sentence is punctuated correctly?", ["Because it was raining, we stayed inside.", "Because it was raining we stayed inside.", "Because, it was raining, we stayed inside."], "The dependent clause comes first, so it needs a comma after it. For example: \"Because he was late, he missed the bus.\""),
        mc("sen5-2", "Which sentence is punctuated correctly?", ["We stayed inside because it was raining.", "We stayed inside, because it was raining.", "We, stayed inside because it was raining."], "The dependent clause comes second, so it usually needs no comma. For example: \"He missed the bus because he was late.\""),
        mc("sen5-3", "Which sentence is punctuated correctly?", ["When the bell rings, we line up quietly.", "When the bell rings we line up quietly.", "When the bell, rings, we line up quietly."], "The dependent clause comes first, so it needs a comma after it. For example: \"When the film ends, we will leave.\""),
        mc("sen5-4", "Which sentence is punctuated correctly?", ["We line up quietly when the bell rings.", "We line up quietly, when the bell rings.", "We, line up quietly when the bell rings."], "The dependent clause comes second, so no comma is needed. For example: \"We will leave when the film ends.\""),
        mc("sen5-5", "Which sentence is punctuated correctly?", ["If it rains tomorrow, the match will be cancelled.", "If it rains tomorrow the match will be cancelled.", "If, it rains tomorrow, the match will be cancelled."], "The dependent clause comes first, so it needs a comma after it. For example: \"If you finish early, you can go home.\""),
        mc("sen5-6", "Which sentence is punctuated correctly?", ["The match will be cancelled if it rains tomorrow.", "The match will be cancelled, if it rains tomorrow.", "The match, will be cancelled if it rains tomorrow."], "The dependent clause comes second, so no comma is needed. For example: \"You can go home if you finish early.\""),
        mc("sen5-7", "Which sentence is punctuated correctly?", ["Although she was nervous, she gave a great speech.", "Although she was nervous she gave a great speech.", "Although, she was nervous, she gave a great speech."], "The dependent clause comes first, so it needs a comma after it. For example: \"Although he was tired, he kept running.\""),
        mc("sen5-8", "Which sentence is punctuated correctly?", ["She gave a great speech although she was nervous.", "She gave a great speech, although she was nervous.", "She, gave a great speech although she was nervous."], "The dependent clause comes second, so no comma is needed. For example: \"He kept running although he was tired.\""),
        mc("sen5-9", "Which sentence is punctuated correctly?", ["While the cake was baking, Mei set the table.", "While the cake was baking Mei set the table.", "While the cake, was baking, Mei set the table."], "The dependent clause comes first, so it needs a comma after it. For example: \"While we waited, the rain stopped.\""),
        mc("sen5-10", "Which sentence is punctuated correctly?", ["Mei set the table while the cake was baking.", "Mei set the table, while the cake was baking.", "Mei, set the table while the cake was baking."], "The dependent clause comes second, so no comma is needed. For example: \"The rain stopped while we waited.\""),
      ],
    },
    {
      id: "sen-6",
      emoji: "🧵",
      title: "Relative clauses: who, which, that, where",
      blurb: "The girl who won the race is my sister.",
      learn: {
        intro:
          "A relative clause adds extra information about a noun, right after it. Use who for people, that for people or things (very common), which for things, and where for places.",
        headers: ["Word", "Use"],
        rows: [
          ["who", "for people — The boy who sits next to me..."],
          ["that", "for people or things — the shop that sells bread..."],
          ["which", "for things — the book which I borrowed..."],
          ["where", "for places — the village where she was born..."],
        ],
        tips: [
          "The relative clause goes right after the noun it describes: The girl who won the race is my sister, not The girl is my sister who won the race.",
          "For things, that is the safest everyday choice; which is used too, especially in more formal writing.",
        ],
        mistake: "\"The shop who sells bread\" and \"The girl which won the race\" mix up who and which. Use who for people and that/which for things.",
      },
      items: [
        fb("sen6-1", "The boy ___ sits next to me is very funny.", ["who", "which", "where", "that"], "Who is used for a person. For example: \"the teacher who helped me\"."),
        fb("sen6-2", "This is the shop ___ sells the cheapest bread.", ["that", "who", "where", "which"], "That is a common, safe choice for a thing like a shop. For example: \"the bus that stops here\"."),
        fb("sen6-3", "That's the teacher ___ helped me with maths.", ["who", "that", "where", "which"], "Who is used for a person. For example: \"the doctor who treated her\"."),
        fb("sen6-4", "Look at the mountain ___ we climbed last year.", ["that", "who", "where", "which"], "That refers back to the mountain, a thing. For example: \"the film that we watched\"."),
        fb("sen6-5", "This is the village ___ my grandmother was born.", ["where", "who", "that", "which"], "Where is used for a place. For example: \"the school where I studied\"."),
        fb("sen6-6", "The keys ___ I lost yesterday were finally found.", ["that", "who", "where", "which"], "That refers back to the keys, a thing. For example: \"the ball that rolled away\"."),
        fb("sen6-7", "She is the nurse ___ takes care of my grandpa.", ["who", "that", "where", "which"], "Who is used for a person. For example: \"the woman who called us\"."),
        fb("sen6-8", "We visited the museum ___ has dinosaur bones.", ["that", "who", "where", "which"], "That refers back to the museum, a thing. For example: \"the café that opened last week\"."),
        fb("sen6-9", "That's the corner ___ the accident happened.", ["where", "who", "that", "which"], "Where is used for a place. For example: \"the beach where we swam\"."),
        fb("sen6-10", "He is the man ___ helped us fix the car.", ["who", "that", "where", "which"], "Who is used for a person. For example: \"the mechanic who repaired it\"."),
      ],
    },
    {
      id: "sen-7",
      emoji: "🩹",
      title: "Fixing run-ons and comma splices",
      blurb: "I was tired I went to bed. → I was tired, so I went to bed.",
      learn: {
        intro:
          "A run-on sentence joins two complete sentences with no punctuation at all. A comma splice joins them with only a comma, and no joining word. Fix either one by adding a joining word after the comma, splitting them into two sentences, or using a semicolon.",
        headers: ["Problem", "Example"],
        rows: [
          ["Run-on (no punctuation)", "I was tired I went to bed."],
          ["Comma splice (comma, no joining word)", "I was tired, I went to bed."],
          ["Fixed: comma + joining word", "I was tired, so I went to bed."],
          ["Fixed: two separate sentences", "I was tired. I went to bed."],
        ],
        tips: [
          "The quickest fix is usually to add a joining word (and, but, or, so) right after the comma.",
          "You can also split a run-on or comma splice into two separate sentences with a full stop and a capital letter.",
        ],
        mistake: "\"The film was long, it was still exciting\" is a comma splice. Say \"The film was long, but it was still exciting.\"",
      },
      items: [
        mc("sen7-1", "Which sentence correctly fixes this comma splice? \"The film was long, it was still exciting.\"", ["The film was long, but it was still exciting.", "The film was long, it was still exciting still.", "The film, was long it was still exciting."], "Adding but after the comma joins the two ideas correctly. For example: \"The test was hard, but I passed it.\""),
        mc("sen7-2", "Which sentence correctly fixes this run-on? \"I was hungry I made a sandwich.\"", ["I was hungry, so I made a sandwich.", "I was hungry I made, a sandwich.", "I was, hungry I made a sandwich."], "Adding a comma and so joins the two complete sentences correctly. For example: \"I was cold, so I put on a coat.\""),
        mc("sen7-3", "Which sentence correctly fixes this comma splice? \"The bus was late, we missed the start of the film.\"", ["The bus was late, so we missed the start of the film.", "The bus, was late we missed the start of the film.", "The bus was late we, missed the start of the film."], "Adding so after the comma shows the result clearly. For example: \"The train broke down, so we walked.\""),
        mc("sen7-4", "Which sentence correctly fixes this run-on? \"She practised every day she became a great swimmer.\"", ["She practised every day, so she became a great swimmer.", "She practised every day she, became a great swimmer.", "She, practised every day she became a great swimmer."], "Adding a comma and so joins the two complete sentences correctly. For example: \"He trained hard, so he won the race.\""),
        mc("sen7-5", "Which sentence correctly fixes this comma splice? \"It began to rain, the match continued anyway.\"", ["It began to rain, but the match continued anyway.", "It began, to rain the match continued anyway.", "It began to rain the match, continued anyway."], "Adding but after the comma shows the contrast. For example: \"It was late, but they kept playing.\""),
        mc("sen7-6", "Which sentence correctly fixes this run-on? \"He forgot his umbrella he got soaked.\"", ["He forgot his umbrella, so he got soaked.", "He forgot his umbrella he, got soaked.", "He, forgot his umbrella he got soaked."], "Adding a comma and so joins the two complete sentences correctly. For example: \"She missed the bus, so she was late.\""),
        mc("sen7-7", "Which sentence correctly fixes this comma splice? \"The shop was closed, we went home.\"", ["The shop was closed, so we went home.", "The shop, was closed we went home.", "The shop was closed we, went home."], "Adding so after the comma shows the result clearly. For example: \"The park was full, so we left.\""),
        mc("sen7-8", "Which sentence correctly fixes this run-on? \"I called her twice she didn't answer.\"", ["I called her twice, but she didn't answer.", "I called her twice she, didn't answer.", "I, called her twice she didn't answer."], "Adding a comma and but shows the contrast correctly. For example: \"I waited an hour, but he never came.\""),
        mc("sen7-9", "Which sentence correctly fixes this comma splice? \"We arrived early, the doors were still locked.\"", ["We arrived early, but the doors were still locked.", "We arrived, early the doors were still locked.", "We arrived early the doors, were still locked."], "Adding but after the comma shows the contrast. For example: \"We hurried, but we still missed it.\""),
        mc("sen7-10", "Which sentence correctly fixes this comma splice? \"The teacher was strict, the students respected her.\"", ["The teacher was strict, and the students respected her.", "The teacher, was strict the students respected her.", "The teacher was strict the students, respected her."], "Adding and after the comma joins the two related ideas correctly. For example: \"The coach was tough, and the team improved.\""),
      ],
    },
    {
      id: "sen-8",
      emoji: "✏️",
      title: "Editing: fix the mistake",
      blurb: "Find the error and pick the correct sentence",
      learn: {
        intro:
          "Editing means finding a mistake in a sentence and correcting it. For sentence structure, check: is it a complete sentence or a fragment? Does it need a comma between two joined sentences? Is the relative pronoun (who/that/where) correct?",
        headers: ["Mistake", "Fix"],
        rows: [
          ["Because it was cold outside.", "It was cold outside."],
          ["The dog barking loudly.", "The dog was barking loudly."],
          ["I like tea and I like coffee.", "I like tea, and I like coffee."],
          ["We stayed inside, because it was raining.", "We stayed inside because it was raining."],
          ["The girl which won the race is my sister.", "The girl who won the race is my sister."],
        ],
        tips: [
          "Step 1: Check whether it is a complete sentence — does it have a subject and a full verb, and can it stand alone?",
          "Step 2: Check commas for joined sentences, and check who/that/where match the right kind of noun.",
        ],
        mistake: "Do not fix only one word and leave another mistake in the sentence. Check the whole sentence.",
      },
      items: [
        mc("sen8-1", "Find the mistake and choose the correct sentence: \"Because it was cold outside.\"", ["It was very cold outside last night.", "Because it was cold, outside in the yard.", "Because was cold outside in the yard."], "\"Because it was cold outside\" is a fragment, a dependent clause with no main clause. For example: \"It was very dark outside last night.\""),
        mc("sen8-2", "Find the mistake and choose the correct sentence: \"The dog barking loudly at the mailman.\"", ["The dog was barking loudly at the mailman.", "The dog barked loudly, at the mailman.", "The dog barking was loudly at the mailman."], "Barking needs the helping verb was to become a complete verb. For example: \"The baby was crying loudly.\""),
        mc("sen8-3", "Find the mistake and choose the correct sentence: \"I like tea and I like coffee.\"", ["I like tea, and I like coffee.", "I like tea and, I like coffee.", "I, like tea and I like coffee."], "Two complete sentences joined by and need a comma before it. For example: \"I read books, and I write stories.\""),
        mc("sen8-4", "Find the mistake and choose the correct sentence: \"He likes football, and basketball.\"", ["He likes football and basketball.", "He, likes football and basketball.", "He likes football and, basketball."], "Football and basketball are just two objects, not two sentences, so no comma is needed. For example: \"She plays piano and violin.\""),
        mc("sen8-5", "Find the mistake and choose the correct sentence: \"Because it was raining we stayed inside.\"", ["Because it was raining, we stayed inside.", "Because, it was raining we stayed inside.", "Because it was, raining we stayed inside."], "The dependent clause comes first, so it needs a comma after it. For example: \"Because he was tired, he rested.\""),
        mc("sen8-6", "Find the mistake and choose the correct sentence: \"We stayed inside, because it was raining.\"", ["We stayed inside because it was raining.", "We, stayed inside because it was raining.", "We stayed inside because, it was raining."], "The dependent clause comes second, so it usually needs no comma. For example: \"He rested because he was tired.\""),
        mc("sen8-7", "Find the mistake and choose the correct sentence: \"The girl which won the race is my sister.\"", ["The girl who won the race is my sister.", "The girl, which won the race is my sister.", "The girl who, won the race is my sister."], "Who is used for a person, not which. For example: \"the boy who scored the goal\"."),
        mc("sen8-8", "Find the mistake and choose the correct sentence: \"The film was long, it was still exciting.\"", ["The film was long, but it was still exciting.", "The film, was long it was still exciting.", "The film was long it was, still exciting."], "This is a comma splice; adding but fixes it. For example: \"The book was old, but it was fascinating.\""),
        mc("sen8-9", "Find the mistake and choose the correct sentence: \"I was hungry I made a sandwich.\"", ["I was hungry, so I made a sandwich.", "I was, hungry I made a sandwich.", "I was hungry I made, a sandwich."], "This is a run-on; adding a comma and so fixes it. For example: \"I was thirsty, so I got some water.\""),
        mc("sen8-10", "Find the mistake and choose the correct sentence: \"This is the shop who sells the cheapest bread.\"", ["This is the shop that sells the cheapest bread.", "This is the shop, who sells the cheapest bread.", "This is the shop that, sells the cheapest bread."], "That (or which) is used for a thing like a shop, not who. For example: \"the café that opened last week\"."),
      ],
    },
  ];

  window.App.Content.GRAMMAR_PATHS = window.App.Content.GRAMMAR_PATHS || [];
  window.App.Content.GRAMMAR_PATHS.push({
    key: "sentence",
    emoji: "🧩",
    label: "Sentence Structure",
    blurb: "Complete sentences, word order, joining ideas, and fixing run-ons.",
    sections: { 0: "What makes a sentence?", 3: "Joining ideas", 5: "Adding more information", 6: "Fixing broken sentences" },
    levels: LEVELS,
  });
})();
