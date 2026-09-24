// Grammar path D: "Punctuation & Capitals" — capital letters, end
// punctuation (. ? !), commas (lists and introductory words), apostrophes
// (contractions, possessives, its vs it's), quotation marks for direct
// speech, then a level covering colons, semicolons, dashes and brackets
// (expert-only — see below), and finally an editing level. Seven levels
// (not eight): unlike the other paths, there is no separate "mixed review"
// level here, matching the original plan for this path.
//
// Tier gating: level pun-6 (colons/semicolons/dashes/brackets) is more
// advanced than the rest of this path, so every item in it is wrapped in
// expertOnly() and carries `tiers: ["expert"]` — the level only appears in
// a session when the child's tier is expert. This uses the same generic
// `tiers` allow-list mechanism as grammarAdvancedContent.jsx (see the
// filter on `baseItems` in GrammarModule.jsx); items without `tiers` are
// unaffected, so every other level in this path is unchanged.
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
  // Marks an item (or, as here, a whole level's worth of items) as an
  // expert-only stretch topic. GrammarModule.jsx filters items by `tiers`
  // before sampling a session; items without `tiers` are unaffected. Same
  // mechanism as grammarAdvancedContent.jsx's expertOnly() helper.
  const expertOnly = (item) => ({ ...item, tiers: ["expert"] });

  const LEVELS = [
    {
      id: "pun-1",
      emoji: "🅰️",
      title: "Capital letters",
      blurb: "The first word, names, days, months, titles, and I",
      learn: {
        intro:
          "Use a capital letter for the first word of a sentence, for the pronoun I, and for proper nouns — the special name of a particular person, place, day, month or title. Ordinary (common) nouns like city, teacher or month do not need a capital.",
        headers: ["Needs a capital", "Example"],
        rows: [
          ["First word of a sentence", "We visited Hong Kong."],
          ["The pronoun I", "Tom and I are best friends."],
          ["Names of people and titles", "Mr Chan, Ms Wong"],
          ["Places", "Hong Kong, Causeway Bay, the Great Wall"],
          ["Days and months", "Monday, December"],
          ["Titles of books and films", "Harry Potter"],
        ],
        tips: [
          "Only the special name needs a capital, not the ordinary word around it: Mr Chan teaches science (science is a common noun, no capital).",
          "I is always a capital letter, even in the middle of a sentence: Tom and I are friends.",
        ],
        mistake: "\"we visited hong kong on monday\" is wrong. Say \"We visited Hong Kong on Monday.\"",
      },
      items: [
        mc("pun1-1", "Which sentence is correct?", ["We visited Hong Kong last Monday.", "We visited hong kong last monday.", "we visited Hong Kong last Monday."], "Hong Kong and Monday are proper nouns, and the sentence starts with a capital. For example: \"We travelled to Macau last Friday.\""),
        mc("pun1-2", "Which sentence is correct?", ["My birthday is in December.", "My birthday is in december.", "my birthday is in December."], "December is the name of a month, so it needs a capital. For example: \"Her birthday is in March.\""),
        mc("pun1-3", "Which sentence is correct?", ["I am going to the party with my sister.", "i am going to the party with my sister.", "I am going to the party with My sister."], "I is always capital; sister is a common noun and does not need one. For example: \"I am walking with my dog.\""),
        mc("pun1-4", "Which sentence is correct?", ["Mr Chan teaches us science.", "mr chan teaches us science.", "Mr chan teaches us Science."], "Mr Chan is a person's title and name, so both words need a capital; science is a common noun. For example: \"Ms Lee teaches us maths.\""),
        mc("pun1-5", "Which sentence is correct?", ["She lives in Causeway Bay.", "She lives in causeway bay.", "she lives in Causeway Bay."], "Causeway Bay is a place name, a proper noun. For example: \"He lives in Mong Kok.\""),
        mc("pun1-6", "Which sentence is correct?", ["We will meet on Friday afternoon.", "We will meet on friday afternoon.", "we will meet On Friday afternoon."], "Friday is the name of a day, so it needs a capital. For example: \"We will meet on Tuesday morning.\""),
        mc("pun1-7", "Which sentence is correct?", ["Have you read Harry Potter?", "Have you read harry potter?", "have you read Harry potter?"], "Harry Potter is the title of a book, a proper noun. For example: \"Have you seen Toy Story?\""),
        mc("pun1-8", "Which sentence is correct?", ["Tom and I are best friends.", "Tom and i are best friends.", "tom and I are best friends."], "I is always a capital letter, even in the middle of a sentence. For example: \"Ben and I play chess.\""),
        mc("pun1-9", "Which sentence is correct?", ["The Great Wall of China is amazing.", "The great wall of china is amazing.", "the Great Wall of China is amazing."], "The Great Wall of China is a proper noun made of several words. For example: \"The Star Ferry crosses the harbour.\""),
        mc("pun1-10", "Which sentence is correct?", ["Our teacher, Ms Wong, is very kind.", "Our teacher, ms wong, is very kind.", "our teacher, Ms Wong, is very kind."], "Ms Wong is a person's title and name, so both words need a capital. For example: \"Our coach, Mr Ho, is strict.\""),
      ],
    },
    {
      id: "pun-2",
      emoji: "❗",
      title: "End punctuation: . ? !",
      blurb: "Statements end in . Questions end in ? Strong feeling ends in !",
      learn: {
        intro:
          "Every sentence ends with one of three marks. A full stop (.) ends a statement or a calm command. A question mark (?) ends a question. An exclamation mark (!) ends a sentence that shows strong feeling or urgency.",
        headers: ["Mark", "Use"],
        rows: [
          [".", "The bus stops here. (statement or calm command)"],
          ["?", "Where is my bag? (question)"],
          ["!", "What a huge surprise! (strong feeling or urgency)"],
        ],
        tips: [
          "Check the beginning of the sentence: words like where, what, why, how, do, does, did, is or are often signal a question.",
          "Save ! for real strong feeling or urgency — using it on every sentence makes it lose its power.",
        ],
        mistake: "\"Where is my bag.\" is wrong for a question. Say \"Where is my bag?\"",
      },
      items: [
        mc("pun2-1", "Which punctuation mark correctly ends this sentence? \"Where is my bag\"", ["?", ".", "!"], "This is a question, asking about the bag's location, so it needs a question mark. For example: \"Where is the exit?\""),
        mc("pun2-2", "Which punctuation mark correctly ends this sentence? \"The bus stops here\"", [".", "?", "!"], "This is a calm statement of fact, so it needs a full stop. For example: \"The shop opens at nine.\""),
        mc("pun2-3", "Which punctuation mark correctly ends this sentence? \"What a huge surprise\"", ["!", ".", "?"], "This shows strong feeling and starts with What, so it needs an exclamation mark. For example: \"What a great idea!\""),
        mc("pun2-4", "Which punctuation mark correctly ends this sentence? \"Please open the door\"", [".", "?", "!"], "This is a calm, ordinary request, so it needs a full stop. For example: \"Please pass the salt.\""),
        mc("pun2-5", "Which punctuation mark correctly ends this sentence? \"How exciting the show was\"", ["!", ".", "?"], "This shows strong feeling and starts with How, so it needs an exclamation mark. For example: \"How brilliant that was!\""),
        mc("pun2-6", "Which punctuation mark correctly ends this sentence? \"Did you finish your homework\"", ["?", ".", "!"], "This is a question, so it needs a question mark. For example: \"Did you lock the door?\""),
        mc("pun2-7", "Which punctuation mark correctly ends this sentence? \"The library closes at five\"", [".", "?", "!"], "This is a calm statement of fact, so it needs a full stop. For example: \"The train arrives at noon.\""),
        mc("pun2-8", "Which punctuation mark correctly ends this sentence? \"Watch out for the wet floor\"", ["!", ".", "?"], "This is an urgent warning, so it needs an exclamation mark. For example: \"Look out for the car!\""),
        mc("pun2-9", "Which punctuation mark correctly ends this sentence? \"Why is the sky blue\"", ["?", ".", "!"], "This is a question, so it needs a question mark. For example: \"Why is the water cold?\""),
        mc("pun2-10", "Which punctuation mark correctly ends this sentence? \"What a fantastic goal\"", ["!", ".", "?"], "This shows strong feeling and starts with What, so it needs an exclamation mark. For example: \"What a fantastic catch!\""),
      ],
    },
    {
      id: "pun-3",
      emoji: "🧾",
      title: "Commas: lists and introductions",
      blurb: "apples, oranges, and bananas · After school, we played.",
      learn: {
        intro:
          "Use a comma between items in a list of three or more, including one before and at the end (apples, oranges, and bananas). Use a comma after an introductory word or phrase that comes before the main part of the sentence, such as a time phrase or a transition word like however.",
        headers: ["Rule", "Example"],
        rows: [
          ["Comma between list items (and before the final and)", "I bought apples, oranges, and bananas."],
          ["Comma after an introductory time phrase", "After school, we played football."],
          ["Comma after a transition word", "However, she disagreed with the plan."],
        ],
        tips: [
          "In a list, put a comma after every item except the last, including one just before and: red, blue, and green.",
          "If a sentence starts with a phrase like Yesterday, First, or However before the main subject and verb, add a comma after it.",
        ],
        mistake: "\"I bought apples oranges and bananas\" is missing commas. Say \"I bought apples, oranges, and bananas.\"",
      },
      items: [
        mc("pun3-1", "Which sentence is punctuated correctly?", ["I bought apples, oranges, and bananas.", "I bought apples oranges and bananas.", "I bought apples, oranges and, bananas."], "Commas separate each item in the list, including one before and. For example: \"She packed shoes, socks, and a hat.\""),
        mc("pun3-2", "Which sentence is punctuated correctly?", ["After school, we played football.", "After school we played football.", "After, school we played football."], "A comma follows the introductory time phrase After school. For example: \"Before dinner, we washed our hands.\""),
        mc("pun3-3", "Which sentence is punctuated correctly?", ["However, she disagreed with the plan.", "However she disagreed with the plan.", "However, she, disagreed with the plan."], "A comma follows the introductory transition word However. For example: \"Therefore, we changed the plan.\""),
        mc("pun3-4", "Which sentence is punctuated correctly?", ["We need pencils, erasers, and rulers for the test.", "We need pencils erasers and rulers for the test.", "We need pencils, erasers and, rulers for the test."], "Commas separate each item in the list. For example: \"Pack a towel, sun cream, and a hat.\""),
        mc("pun3-5", "Which sentence is punctuated correctly?", ["Yesterday, I finished my project early.", "Yesterday I finished my project early.", "Yesterday, I, finished my project early."], "A comma follows the introductory word Yesterday. For example: \"Suddenly, the lights went out.\""),
        mc("pun3-6", "Which sentence is punctuated correctly?", ["The zoo has lions, tigers, and elephants.", "The zoo has lions tigers and elephants.", "The zoo has lions, tigers and, elephants."], "Commas separate each item in the list. For example: \"The farm has cows, goats, and hens.\""),
        mc("pun3-7", "Which sentence is punctuated correctly?", ["First, wash your hands before dinner.", "First wash your hands before dinner.", "First, wash, your hands before dinner."], "A comma follows the introductory word First. For example: \"Next, add the sugar.\""),
        mc("pun3-8", "Which sentence is punctuated correctly?", ["In the morning, we went for a walk.", "In the morning we went for a walk.", "In, the morning, we went for a walk."], "A comma follows the introductory phrase In the morning. For example: \"At noon, we had lunch.\""),
        mc("pun3-9", "Which sentence is punctuated correctly?", ["My favourite colours are red, blue, and green.", "My favourite colours are red blue and green.", "My favourite colours are red, blue and, green."], "Commas separate each item in the list. For example: \"His favourite sports are football, tennis, and swimming.\""),
        mc("pun3-10", "Which sentence is punctuated correctly?", ["Finally, the rain stopped and the sun came out.", "Finally the rain stopped and the sun came out.", "Finally, the rain, stopped and the sun came out."], "A comma follows the introductory word Finally. For example: \"Eventually, the storm passed.\""),
      ],
    },
    {
      id: "pun-4",
      emoji: "✂️",
      title: "Apostrophes: contractions and possessives",
      blurb: "don't, it's raining · Tom's bag · the students' books",
      learn: {
        intro:
          "An apostrophe shows either missing letters in a contraction (don't = do not, it's = it is), or that something belongs to someone (Tom's bag). For a singular owner, add 's. For a plural owner already ending in s, add just an apostrophe. Its (no apostrophe) means belonging to it; it's (with apostrophe) means it is or it has.",
        headers: ["Use", "Example"],
        rows: [
          ["Contraction: missing letters", "don't = do not, it's = it is"],
          ["Singular possessive: add 's", "Tom's bag, the dog's tail"],
          ["Plural possessive (already ends in s): add just '", "the students' books"],
          ["Irregular plural possessive: add 's", "the children's playground"],
          ["its = belonging to it (no apostrophe)", "The dog wagged its tail."],
          ["it's = it is / it has (apostrophe)", "It's raining. / It's been a long day."],
        ],
        tips: [
          "To check its or it's, try saying \"it is\" instead. If that makes sense, use it's.",
          "For a plural word that already ends in s (students, dogs), just add an apostrophe at the end: students'.",
        ],
        mistake: "\"The cat licked it's paw\" is wrong. Say \"The cat licked its paw\" (belonging to it, no apostrophe).",
      },
      items: [
        fb("pun4-1", "I ___ finished my homework yet.", ["haven't", "havent", "have'nt", "havn't"], "The apostrophe replaces the missing o in not: have not → haven't. For example: \"She hasn't arrived yet.\""),
        fb("pun4-2", "___ raining outside, so bring an umbrella.", ["It's", "Its", "Its'", "I'ts"], "It's is short for it is. For example: \"It's getting dark.\""),
        fb("pun4-3", "The dog wagged ___ tail happily.", ["its", "it's", "its'", "it is"], "Its (no apostrophe) shows the tail belongs to the dog. For example: \"The bird cleaned its feathers.\""),
        fb("pun4-4", "This is ___ bag; he left it on the bus.", ["Tom's", "Toms", "Tom's'", "Toms'"], "Add 's to show the bag belongs to one person, Tom. For example: \"That is Mei's pencil.\""),
        fb("pun4-5", "The ___ books were left on the bus after the trip.", ["students'", "student's", "students's", "students"], "Students is already plural and ends in s, so just add an apostrophe. For example: \"the teachers' meeting\"."),
        fb("pun4-6", "___ going to the party together tonight.", ["We're", "Were", "Weren't", "We'r"], "We're is short for we are. For example: \"They're arriving soon.\""),
        mc("pun4-7", "Which sentence is correct?", ["It's a beautiful day today.", "Its a beautiful day today.", "It's' a beautiful day today."], "It's is short for it is. For example: \"It's my birthday today.\""),
        mc("pun4-8", "Which sentence is correct?", ["The cat licked its paw.", "The cat licked it's paw.", "The cat licked its' paw."], "Its (no apostrophe) shows the paw belongs to the cat. For example: \"The bird built its nest.\""),
        fb("pun4-9", "___ time to go home now.", ["It's", "Its", "Its'", "It"], "It's is short for it is. For example: \"It's almost dinner time.\""),
        fb("pun4-10", "The ___ playground was rebuilt after the storm.", ["children's", "childrens'", "childrens", "children"], "Children is already plural (irregular), so add 's, not just an apostrophe. For example: \"the men's changing room\"."),
      ],
    },
    {
      id: "pun-5",
      emoji: "💬",
      title: "Quotation marks and direct speech",
      blurb: "\"I'm hungry,\" said Tom.",
      learn: {
        intro:
          "Put a speaker's exact words inside quotation marks. The quoted sentence starts with a capital letter. A comma, full stop, question mark or exclamation mark that belongs to the spoken words goes inside the closing quotation mark, not outside it.",
        headers: ["Rule", "Example"],
        rows: [
          ["Quotation marks around the exact words", "\"I'm hungry,\" said Tom."],
          ["Capital letter starts the quoted sentence", "Mei asked, \"What time is it?\""],
          ["Punctuation goes inside the closing quotation mark", "He shouted, \"Look out!\""],
        ],
        tips: [
          "A comma usually introduces the quote when it comes before the speaker's words: Mei asked, \"...\"",
          "Keep the question mark or exclamation mark inside the quotation marks if it belongs to what was said.",
        ],
        mistake: "\"I'm hungry\", said Tom. has the comma in the wrong place. Say \"I'm hungry,\" said Tom. (comma inside the quotation marks).",
      },
      items: [
        mc("pun5-1", "Which sentence is punctuated correctly?", ["\"I'm hungry,\" said Tom.", "\"I'm hungry\", said Tom.", "I'm hungry, said Tom."], "The comma goes inside the closing quotation mark, and the words are inside quotation marks. For example: \"I'm tired,\" said Ben."),
        mc("pun5-2", "Which sentence is punctuated correctly?", ["Mei asked, \"What time is it?\"", "Mei asked \"What time is it?\"", "Mei asked, \"what time is it?\""], "A comma introduces the quote, and the quoted sentence starts with a capital letter. For example: Sam asked, \"Where are we going?\""),
        mc("pun5-3", "Which sentence is punctuated correctly?", ["He shouted, \"Look out!\"", "He shouted \"look out\"!", "He shouted, \"look out!\""], "The quoted sentence starts with a capital, and the exclamation mark stays inside the quotation marks. For example: She cried, \"Wait for me!\""),
        mc("pun5-4", "Which sentence is punctuated correctly?", ["\"Please be quiet,\" whispered the librarian.", "\"Please be quiet\", whispered the librarian.", "Please be quiet, whispered the librarian."], "The comma goes inside the closing quotation mark. For example: \"Follow me,\" whispered the guide."),
        mc("pun5-5", "Which sentence is punctuated correctly?", ["\"Where are my shoes?\" asked Sam.", "\"Where are my shoes\"? asked Sam.", "Where are my shoes? asked Sam."], "The question mark stays inside the quotation marks, since it belongs to the spoken question. For example: \"Have you seen my bag?\" asked Mei."),
        mc("pun5-6", "Which sentence is punctuated correctly?", ["The teacher said, \"Open your books to page ten.\"", "The teacher said \"Open your books to page ten.\"", "The teacher said, \"open your books to page ten.\""], "A comma introduces the quote, and it starts with a capital letter. For example: The coach said, \"Run faster.\""),
        mc("pun5-7", "Which sentence is punctuated correctly?", ["\"That's amazing!\" cried Lily.", "\"That's amazing\"! cried Lily.", "That's amazing! cried Lily."], "The exclamation mark stays inside the quotation marks. For example: \"We won!\" cheered the team."),
        mc("pun5-8", "Which sentence is punctuated correctly?", ["\"I can't find my keys,\" he sighed.", "\"I can't find my keys\", he sighed.", "I can't find my keys, he sighed."], "The comma goes inside the closing quotation mark. For example: \"I forgot my umbrella,\" she said."),
        mc("pun5-9", "Which sentence is punctuated correctly?", ["Dad called, \"Dinner is ready!\"", "Dad called \"Dinner is ready!\"", "Dad called, \"dinner is ready!\""], "A comma introduces the quote, it starts with a capital, and the exclamation mark stays inside. For example: Mum called, \"Time for bed!\""),
        mc("pun5-10", "Which sentence is punctuated correctly?", ["\"Watch your step,\" the guide warned.", "\"Watch your step\", the guide warned.", "Watch your step, the guide warned."], "The comma goes inside the closing quotation mark. For example: \"Hold the rail,\" the driver warned."),
      ],
    },
    {
      id: "pun-6",
      // Level-level gate: only shows up in the level list (and "Next level")
      // for the expert tier. See the `lv.tiers` check in GrammarModule.jsx.
      // Every item below is also individually wrapped in expertOnly() as
      // belt-and-braces, so the item filter agrees even if this level were
      // ever reached another way.
      tiers: ["expert"],
      emoji: "🧰",
      title: "Colons, semicolons, dashes and brackets",
      blurb: "one goal: to win · The rain stopped; the sun came out. · (extra info) — Expert challenge",
      learn: {
        intro:
          "A colon (:) introduces a list or an explanation. A semicolon (;) joins two closely related complete sentences without a joining word. A pair of dashes or a pair of brackets adds extra information in the middle of a sentence, and both marks of the pair must be used.",
        headers: ["Mark", "Use"],
        rows: [
          ["Colon (:)", "Introduces a list or explanation: She packed three things: a hat, a scarf, and gloves."],
          ["Semicolon (;)", "Joins two related complete sentences: The rain stopped; the sun came out."],
          ["Dashes ( — … — )", "Adds an extra remark: My brother — who is only seven — can already swim."],
          ["Brackets ( ( … ) )", "Adds extra, non-essential information: The Great Wall (built over centuries) is very long."],
        ],
        tips: [
          "A semicolon is like a strong comma: it joins two sentences that could stand alone, without needing and, but or so.",
          "Dashes and brackets used for extra information always come in pairs — check that both marks are there.",
        ],
        mistake: "\"She packed three things, a hat, a scarf, and gloves\" should use a colon before the list, not a comma: \"She packed three things: a hat, a scarf, and gloves.\"",
      },
      items: [
        expertOnly(mc("pun6-1", "Which sentence is punctuated correctly?", ["She packed three things: a hat, a scarf, and gloves.", "She packed three things, a hat, a scarf, and gloves.", "She packed three things; a hat, a scarf, and gloves."], "A colon introduces the list that follows. For example: He needed one tool: a hammer.")),
        expertOnly(mc("pun6-2", "Which sentence is punctuated correctly?", ["The rain stopped; the sun came out.", "The rain stopped, the sun came out.", "The rain stopped: the sun came out."], "A semicolon joins two closely related complete sentences. For example: The lights dimmed; the show began.")),
        expertOnly(mc("pun6-3", "Which sentence is punctuated correctly?", ["My brother — who is only seven — can already swim.", "My brother who is only seven can already swim —", "My brother — who is only seven, can already swim."], "The extra remark needs a matching pair of dashes, one on each side. For example: My cousin — a talented artist — painted the mural.")),
        expertOnly(mc("pun6-4", "Which sentence is punctuated correctly?", ["The Great Wall (built over centuries) is very long.", "The Great Wall built over centuries) is very long.", "The Great Wall (built over centuries is very long."], "The extra information needs a matching pair of brackets, one on each side. For example: The museum (opened last year) is very popular.")),
        expertOnly(mc("pun6-5", "Which sentence is punctuated correctly?", ["He had one goal: to win the race.", "He had one goal, to win the race.", "He had one goal; to win the race."], "A colon introduces the explanation that follows. For example: She had one wish: to travel the world.")),
        expertOnly(mc("pun6-6", "Which sentence is punctuated correctly?", ["I was tired; I still finished the race.", "I was tired, I still finished the race.", "I was tired: I still finished the race."], "A semicolon joins two closely related complete sentences. For example: He was nervous; he still gave the speech.")),
        expertOnly(mc("pun6-7", "Which sentence is punctuated correctly?", ["The museum (open until six) is free today.", "The museum open until six) is free today.", "The museum (open until six is free today."], "The extra information needs a matching pair of brackets. For example: The park (closed on Mondays) is very quiet.")),
        expertOnly(mc("pun6-8", "Which sentence is punctuated correctly?", ["She needed just one thing: courage.", "She needed just one thing, courage.", "She needed just one thing; courage."], "A colon introduces the single-word explanation that follows. For example: He lacked one skill: patience.")),
        expertOnly(mc("pun6-9", "Which sentence is punctuated correctly?", ["The concert was cancelled; the tickets were refunded.", "The concert was cancelled, the tickets were refunded.", "The concert was cancelled: the tickets were refunded."], "A semicolon joins two closely related complete sentences. For example: The match was postponed; the fans were disappointed.")),
        expertOnly(mc("pun6-10", "Which sentence is punctuated correctly?", ["My uncle — a keen photographer — took hundreds of photos.", "My uncle, a keen photographer — took hundreds of photos.", "My uncle — a keen photographer, took hundreds of photos."], "The extra remark needs a matching pair of dashes, not a mix of a comma and a dash. For example: My aunt — a talented chef — cooked the whole meal.")),
      ],
    },
    {
      id: "pun-7",
      emoji: "✏️",
      title: "Editing: fix the mistake",
      blurb: "Find the error and pick the correct sentence",
      learn: {
        intro:
          "Editing means finding a mistake in a sentence and correcting it. For punctuation and capitals, check: capital letters, the right end mark, commas in lists, apostrophes (its/it's, possessives), and punctuation inside quotation marks.",
        headers: ["Mistake", "Fix"],
        rows: [
          ["i visited hong kong last year.", "I visited Hong Kong last year."],
          ["Where is my bag.", "Where is my bag?"],
          ["I bought apples oranges and bananas.", "I bought apples, oranges, and bananas."],
          ["The cat licked it's paw.", "The cat licked its paw."],
          ["Mei asked \"What time is it?\"", "Mei asked, \"What time is it?\""],
        ],
        tips: [
          "Step 1: Check the capital letters — the first word, I, and any proper nouns.",
          "Step 2: Check the end mark, the commas, and the apostrophes one at a time.",
        ],
        mistake: "Do not fix only one word and leave another mistake in the sentence. Check the whole sentence.",
      },
      items: [
        mc("pun7-1", "Find the mistake and choose the correct sentence: \"i visited hong kong last year.\"", ["I visited Hong Kong last year.", "I Visited hong Kong last year.", "I visited hong kong last Year."], "I, Hong and Kong all need capital letters. For example: \"I visited Macau last summer.\""),
        mc("pun7-2", "Find the mistake and choose the correct sentence: \"Where is my bag.\"", ["Where is my bag?", "Where is my bag!", "where is my bag?"], "This is a question, so it needs a question mark, not a full stop. For example: \"Where is the exit?\""),
        mc("pun7-3", "Find the mistake and choose the correct sentence: \"I bought apples oranges and bananas.\"", ["I bought apples, oranges, and bananas.", "I bought apples, oranges and bananas,.", "I bought, apples oranges and bananas."], "Commas are needed between the items in the list. For example: \"She packed shoes, socks, and a hat.\""),
        mc("pun7-4", "Find the mistake and choose the correct sentence: \"The cat licked it's paw.\"", ["The cat licked its paw.", "The cat licked its' paw.", "The cat licked it's' paw."], "Its (no apostrophe) shows the paw belongs to the cat; it's means it is. For example: \"The dog wagged its tail.\""),
        mc("pun7-5", "Find the mistake and choose the correct sentence: \"Mei asked, what time is it?\"", ["Mei asked, \"What time is it?\"", "Mei asked, \"what time is it?\"", "Mei, asked \"What time is it?\""], "The spoken words need quotation marks, and the quoted sentence starts with a capital letter. For example: Sam asked, \"Where are we going?\""),
        mc("pun7-6", "Find the mistake and choose the correct sentence: \"Its raining outside.\"", ["It's raining outside.", "Its' raining outside.", "Its raining, outside."], "It's is short for it is. For example: \"It's snowing outside.\""),
        mc("pun7-7", "Find the mistake and choose the correct sentence: \"Tom bag is red.\"", ["Tom's bag is red.", "Toms' bag is red.", "Toms bag is red."], "Add 's to show the bag belongs to Tom. For example: \"Mei's pencil is blue.\""),
        mc("pun7-8", "Find the mistake and choose the correct sentence: \"The students books were left behind.\"", ["The students' books were left behind.", "The student's books were left behind.", "The students's books were left behind."], "Students is plural and already ends in s, so just add an apostrophe. For example: \"the teachers' staff room\"."),
        mc("pun7-9", "Find the mistake and choose the correct sentence: \"She packed three things a hat a scarf and gloves.\"", ["She packed three things: a hat, a scarf, and gloves.", "She packed three things, a hat a scarf and gloves.", "She packed three things: a hat a scarf and gloves."], "A colon introduces the list, and commas separate each item. For example: \"He needed two tools: a hammer and a saw.\""),
        mc("pun7-10", "Find the mistake and choose the correct sentence: \"I can't find my keys, he sighed.\"", ["\"I can't find my keys,\" he sighed.", "\"I can't find my keys\", he sighed.", "I can't find my keys he sighed."], "The spoken words need quotation marks, with the comma inside the closing mark. For example: \"I forgot my umbrella,\" she said."),
      ],
    },
  ];

  window.App.Content.GRAMMAR_PATHS = window.App.Content.GRAMMAR_PATHS || [];
  window.App.Content.GRAMMAR_PATHS.push({
    key: "punctuation",
    emoji: "🖊️",
    label: "Punctuation & Capitals",
    blurb: "Capital letters, end marks, commas, apostrophes, quotation marks and more.",
    sections: { 0: "Capitals and end marks", 2: "Commas", 3: "Apostrophes", 4: "Quotation marks", 5: "More punctuation marks", 6: "Editing" },
    levels: LEVELS,
  });
})();
