# Project: English Quest

(Repo/folder name stays `english-ops` — only the in-app display name and
branding changed, after feedback that "English Ops" + an owl mascot read as
an odd combination. Visual style takes inspiration from bright, game-like kids'
English platforms like British Council LearnEnglish Kids and Funbrain's
Grammar Gorillas — colourful, playful, activity-framed — without copying
their names, logos, or content.)

## Language convention: British English
All content (passages, questions, explanations, model essays, UI copy) uses
British English spelling and, where natural, British vocabulary — e.g.
"recognise" not "recognize", "colour" not "color", "favourite" not
"favorite", "practise" (verb) vs "practice" (noun), "mum" not "mom",
"football" not "soccer", "maths" not "math", "holiday" not "vacation". When
writing new content, default to British spelling throughout; when in doubt,
prefer the `-ise`/`-our`/`-re` British forms over `-ize`/`-or`/`-er`.

A web app to help a child (age 10-11) practice English across eleven
activities: Listening, Speaking, Storytelling, Reading, Comprehension,
Writing, Grammar Drills, Word Hunt (Bookworm/Word Wipe-style), Vocabulary
Builder, History & Science (English practice through real facts/stories from
subjects the child enjoys), and Hangman. Includes daily missions and
progress tracking across four difficulty tiers.

## UI redesign: "探險護照" (Explorer's Passport) — staged, in progress
A visual-only redesign requested to replace the bright flat-Tailwind-palette
look with a warmer "explorer's passport / field notebook" aesthetic — kraft
paper, ink, a passport-stamp red accent, brass-gold badges, and two module
color families. Explicitly visual-only: no content, data structure, or
functional/logic changes. Follows the exact staged-rollout pattern already
used in the sibling `chinese-ops` project (`src/theme.jsx` there has the
same "LEGACY vs NEW system" comment header — read it first if extending
this further, the two are meant to stay structurally parallel):
- **`src/theme.jsx`** now carries TWO parallel systems. `COLORS`/`Button`/
  `Card`/`BackButton`/`RefreshButton`/`TierBadge` are the untouched LEGACY
  system — every module not yet migrated keeps using these with zero risk.
  `INK`/`MODULE_ACCENTS`/`TYPE`/`PaperCard`/`InkButton`/`PaperBackButton`/
  `PaperRefreshButton`/`PaperTierBadge`/`Stamp` are the NEW system.
- **Palette**: `INK.paper` #EFE6D3 (page bg), `INK.ink` #233142 (text),
  `INK.stamp` #A83A3A (primary accent — CTAs/highlights), `INK.gold`
  #B8923A (badges/achievements/streak only). Every module keeps its own
  distinct colour (not collapsed into one look) but each is now a tonal
  variant within one of two families instead of an arbitrary Tailwind hue:
  `mapBlue` (#2F6B7A family — listening, speaking, storytelling, reading,
  comprehension, writing — the core "reading the map" language skills) and
  `forestGreen` (#3F6B4A family — grammar, wordhunt, vocabulary, knowledge,
  hangman — practice/game/exploration modules). This split for the 5
  modules beyond the user's original 2 named groups (Listening/Reading/
  Comprehension → mapBlue, History&Science/WordHunt/Hangman → forestGreen)
  was my own judgement call, flagged to the user as adjustable.
- **Fonts**: "Special Elite" (typewriter/stamp feel, loaded in index.html,
  Tailwind key `font-stamp`) for headings/display text via `TYPE.display`/
  `TYPE.heading`; body text stays on the existing Baloo 2 per instruction
  to keep it "clear" — `TYPE.body`/`TYPE.caption`.
- **Cards/buttons**: `PaperCard` — kraft-tinted bg, thin tinted border,
  layered soft shadow (contact + diffuse ambient + inset top highlight)
  instead of the legacy flat hard-offset shadow. `InkButton` — keeps the
  chunky press-down feel but with a layered shadow (inset highlight + solid
  dark "thickness" layer + diffuse drop shadow).
- **`Stamp`**: passport-stamp badge look for achievements — oval, thick
  gold ring, slight rotation, double-inset border to read as "stamped"
  rather than a plain rounded icon; greyed out + a 🔒 when not yet earned.
- **Root.jsx**: page background/header switched to the new palette
  *globally* already (this is page chrome behind every screen, not a
  per-module component — same choice chinese-ops made), so even
  unmigrated modules now sit on the new kraft background even though their
  own cards/buttons still render in the old legacy style.
- **Rollout status — complete.** After the 3 sample screens (Home, Badges,
  Reading) were approved, the system was extended to every remaining
  module: `GrammarModule.jsx`, `HangmanModule.jsx`, `ListeningModule.jsx`,
  `SpeakingModule.jsx`, `VocabularyModule.jsx`, `WordHuntModule.jsx`, and
  `WritingModule.jsx` were each rewritten onto `PaperCard`/`InkButton`/
  `INK`/`TYPE` with their own `MODULE_ACCENTS` entry, and Storytelling/
  Comprehension/Knowledge now pass `accent={MODULE_ACCENTS.<key>}` into
  the same shared `PassageModule.jsx`/`QuestionBlock` that Reading already
  used (no further changes needed to those two shared files themselves —
  their existing `accent`-present/absent branch just now always takes the
  `accent` path since every caller supplies one). `VoicePicker.jsx`
  (shared by Listening/Speaking) also gained an optional `accent` prop.
  `renderBlankSentence` (the fill-in-the-blank placeholder inside
  `QuestionBlock`) now tints to the passed `accent` too, fixing a missed
  spot where it stayed hardcoded indigo through the first rollout pass.
  The legacy `COLORS`/`Button`/`Card`/`BackButton`/`RefreshButton`/
  `TierBadge` exports in `theme.jsx` are no longer referenced by any
  module — left in place rather than deleted, since removing them wasn't
  requested and they're harmless dead code, not a maintenance risk.
  VocabularyModule's old per-part-of-speech rainbow badge colour was
  dropped in favour of a single consistent module accent colour, matching
  every other migrated module — a deliberate simplification, not an
  oversight.

## Gamification: badges & streak freeze
Added after researching what makes Duolingo/Prodigy/Khan Academy Kids
engaging — badges/achievements and a forgiving streak mechanic are cheap
(pure localStorage, no backend) and proven to work; a social leaderboard was
explicitly skipped since that needs a backend/accounts, which is out of scope.

- **Lifetime stats** (`state.stats`) track `totalMissionsCompleted`,
  `moduleCompletions` (per module key), `bestStreak`, and `freezesUsedTotal` —
  incremented inside `Storage.markModuleComplete`, independent of the daily
  checklist (which resets every day). Badges are computed live from this data
  (`Storage.earnedBadgeKeys`), never stored as a separate "earned" flag that
  could drift out of sync.
- **13 badges** defined in `storage.jsx` (`BADGES`), each a `{ key, emoji,
  label, description, check(state) }`. Shown on `src/BadgesScreen.jsx`,
  reachable via a tile on the Daily Missions home screen. Locked badges show
  🔒 and their requirement; earned ones show their real emoji.
- **Streak freeze**: `state.streakFreezes` (starts at 1, cap 2) auto-consumes
  when a day's missions are completed but the previous streak day was missed
  (not consecutive) — the streak is preserved and incremented instead of
  reset to 1. A freeze is earned back at every 7-day streak milestone.
  `markModuleComplete` returns `{ state, freezeUsed }`; `Root.jsx` shows a
  dismissible "🧊 Streak Freeze used!" banner on the home screen when
  `freezeUsed` is true (transient — not persisted, just local component state).

## Tech stack
- Single-page web app: React + Tailwind CSS
- No backend — all data stored in browser localStorage (single-device, single-user app)
- Deployed as static site, added to iPad/tablet home screen (behaves like a standalone app)
- Mobile-first layout

### Implementation detail: no build step
- No Node.js required: React, ReactDOM, Babel Standalone, and Tailwind are
  loaded via `<script>` CDN tags (same pattern as the sibling `beetle-care-app`
  and `sketch-echo` projects)
- JSX files are plain classic `<script type="text/babel" src="...">` tags,
  loaded in dependency order, sharing a single global namespace object `App`
  (each file attaches what it defines to `window.App.*`) — no ES modules,
  no bundler
- Requires being served over http(s) (not opened via `file://`) because
  Babel Standalone fetches `src` scripts via XHR. Local testing uses
  `.claude/static-server.ps1` (same tiny PowerShell HTTP server used by the
  sibling projects) — run it with
  `powershell -File .claude/static-server.ps1 -Root english-ops -Port 5600`

## Difficulty tiers
Four named tiers — Easy, Medium, Hard, Expert (tier keys: `easy`, `medium`,
`hard`, `expert`). All modules work across all four tiers — content
difficulty scales, but the mechanics of each module stay the same. Content is
pitched at an age 10-11 reading level across all tiers (Easy = simple recall
on short passages; Expert = inference/"why" questions on denser passages).

## Core modules (build in this order)
1. **Listening** — text-to-speech (Web Speech API `speechSynthesis`) plays a
   short passage, child answers a multiple-choice question about what they heard
2. **Speaking** — uses browser speech recognition (Web Speech API); child is
   shown a word/sentence to say aloud, app checks pronunciation/match, gives
   simple feedback (correct / try again)
3. **Story-telling** — app presents a short story appropriate to the tier,
   then asks 3 comprehension-style questions about it (multiple choice)
4. **Reading** — a short passage displayed on screen, followed by fill-in-the-blank
   and multiple-choice questions testing understanding
5. **Comprehension** — can share logic/question format with Story-telling and
   Reading, but as a standalone module using its own passages — focus on
   inference and "why" questions, not just recall
6. **Writing** — app gives a simple prompt (e.g. "describe your favorite animal"),
   child types a response in a text box, app gives gentle feedback on grammar/
   spelling (keep feedback encouraging, not harsh — this is for a child), then
   lets the child reveal a model essay for that prompt/tier to compare against
7. **Word Hunt** — a Bookworm/Word Wipe-style game: tap adjacent letters (any
   of 8 directions) on a random letter grid to spell hidden target words, tap
   the last letter again to submit. Includes a "❓ How to Play" tutorial modal.
8. **Vocabulary Builder** — flashcards through 10 randomly-sampled words (from
   a pool of 40/tier) per session: English word + part of speech, flip to
   reveal Traditional Chinese translation + definition + example sentence +
   tap-to-hear similar/opposite words
9. **History & Science** — real historical events and scientific phenomena as
   reading passages (reuses the Reading/Comprehension engine), for a child
   whose interests lean that way; hard names/terms get the same
   tap-to-translate Traditional Chinese glossary as other modules
10. **Hangman** — classic letter-guessing game (`HangmanModule.jsx` +
    `src/content/hangmanContent.jsx`), added after feedback asking for "a
    word game like hangman" as a separate module rather than folded into
    Word Hunt. Its own word bank (not `WORD_HUNT_WORDS`) tags every word
    with a `category` (e.g. "Insects") shown above the blanks as a hint, and
    word length varies freely within a tier rather than climbing steadily —
    added after feedback that always drawing from `WORD_HUNT_WORDS` felt
    like a fixed-length word with no contextual clue. Keyboard is QWERTY
    rows (not A-Z order), modelled on classic mobile Hangman apps but with
    deliberately larger, more legible letter buttons than those references.
    Deliberately no hanging-figure artwork — consistent with this app's
    no-losing-state philosophy, wrong guesses cost a ❤️ life (6 total)
    instead, and running out of lives reveals the word gently ("So close —
    nice try!") rather than a "you lost" screen. A "💡 Hint" button reveals
    one letter at the cost of a life.

Grammar Drills (category picker: Mixed Grammar / Tenses / Prepositions) is a
supporting activity alongside these, not part of the original numbered list.

## Supporting features
- **Daily missions** — a checklist/dashboard of today's tasks across all 11
  activities; tapping an incomplete task jumps into that module
- **Grammar drills** — category picker (Mixed / Tenses / Prepositions), each
  with tier-scaled fill-in-the-blank exercises
- **Progress/streak tracking** — consecutive days where all *currently built*
  daily tasks are completed; the streak target automatically grows as more
  modules ship (a module only counts toward the day's checklist once it's
  actually implemented — see Build status below)
- **Tier badge** — every module screen shows a small "EASY/MEDIUM/HARD/EXPERT
  level" badge (`UI.TierBadge` in `theme.jsx`) near the top, so it's always
  obvious which difficulty is active — added after feedback that content felt
  harder than expected, which turned out to be tier selection not being
  visible inside the module itself
- **Refresh button** — every module has a 🔄 button that resets its session
  with freshly randomized content (a new random story/passage/word set, not
  just a reordering)
- **True per-session randomization** — `PassageModule` (Storytelling/Reading/
  Comprehension/History & Science) used to always start at index 0 of its
  item list on a fresh mount, which is why the same story could show up every
  single time; it now picks a random item via `sampleArray` (`util.jsx`) on
  every mount, not just on Refresh. Grammar/Listening/Speaking/Vocabulary
  already randomized via `shuffleArray`/`sampleArray` from the start.
- **Shuffled answer order + lock-and-explain** — multiple-choice/fill-in-blank
  options are shuffled per question (`QuizQuestion.useShuffledQuestion`, plus
  the same logic inlined in Listening) so the correct answer isn't predictably
  in the same position. The first tap locks the question: the correct option
  is always revealed (green), the child's pick is marked, and a short
  explanation of the underlying rule is shown — no more infinite re-guessing
  loops. See `q.explanation` in content files (falls back to a generic hint
  for older/generated content that hasn't been given one yet).

## Design notes
- Bright, playful, encouraging tone throughout — this is for a child learner
- Positive reinforcement on correct answers; gentle, non-discouraging feedback
  on mistakes (never a red "wrong" — use warm amber "try again" language)
- Large tap targets, simple navigation
- Navigation is hub-and-spoke: a single "Daily Missions" home screen lists all
  modules; tapping one opens that module full-screen with a chunky, bordered
  `BackButton` (`src/theme.jsx` — not a plain text link; feedback was that the
  original text-only "← Back" was too small/easy to miss), rather than a
  persistent tab bar (keeps each module screen focused for a young reader)
- Font: "Baloo 2" (Google Fonts) — rounded, bold, playful (same as beetle-care-app)
- Palette: sky-blue/cream background, white cards with soft indigo-tinted
  border and drop shadow; saturated sky/rose/violet/emerald/orange/amber/teal
  used per-module for buttons and badges
- Background: soft gradient (sky → indigo → violet) with blurred decorative
  color blobs and low-opacity emoji (⭐📚✏️🎈) behind the content, all
  `pointer-events-none` so they never interfere with tapping — see the wrapper
  in `Root.jsx`

## Text-to-speech voice & speed
Listening and Speaking (the "Hear It" button) share a `VoicePicker`
(`src/VoicePicker.jsx`) that enumerates the device's actual installed English
voices via `speechSynthesis.getVoices()` (nothing hardcoded — the list differs
per OS/browser) and a 3-step speed control (Slow/Normal/Clear & Fast). The
choice is persisted in `state.voicePref` and applied everywhere `speak()` is
called (`src/util.jsx`).

## Speaking module reliability
Web Speech recognition support and behavior vary a lot across browsers —
notably, it's unsupported or unreliable on iOS Safari, the primary target
device. `SpeakingModule.jsx` handles this defensively:
- requests mic permission explicitly via `getUserMedia` before starting
  recognition, so permission failures are caught with a clear message
- wraps `rec.start()` in try/catch (some browsers throw synchronously)
- runs a 7-second hard timeout in case recognition never fires any event
- always shows a manual "I said it!" / "Mic trouble?" fallback button, so the
  child can never get stuck regardless of device/browser quirks

## Vocabulary glossary (Duolingo-style)
Hard words in on-screen passages (Storytelling, Reading, Comprehension, Speaking
sentences) are underlined with a dotted indigo line. Tapping a word toggles a
small bubble showing its Traditional Chinese translation, then tapping again
hides it. Word list + translations: `src/content/glossary.jsx`. Rendering
component: `src/GlossaryText.jsx` (tokenizes text, looks up each word
case-insensitively). Not applied to Listening (passage text is intentionally
never shown on screen there) or Grammar Drills (short mechanical sentences,
not vocab-focused).

## Grammar drills structure
Opening Grammar Drills shows a category picker first: **Mixed Grammar**,
**Tenses**, **Prepositions**. Each category has its own tier-scaled bank in
`src/content/grammarContent.jsx` (`GRAMMAR_ITEMS[category][tier]`, 8 items for
Mixed/Prepositions, 12 for Tenses — 8 flat + 4 flattened from 2 two-question
"paragraph" sets, see below). A session samples 8 random items per category
per tier (`sampleArray`, `GrammarModule.jsx`), so replays vary even without
redoing the whole bank. Content requires real grammatical discrimination —
subject-verb agreement edge cases, inversion, subjunctive mood, perfect/perfect
continuous tenses, prepositional collocations — not just an obviously-wrong
distractor, and gets harder tier over tier (Easy: basic present/past forms and
common prepositions; Expert: inversion, future perfect passive, reported
speech tense shifts, less common collocations like "account for"/"insist on").
Every `explanation` includes a second worked example beyond the missed
sentence itself, so the child sees the rule applied twice, not once. Finishing
any one category marks the day's Grammar Drills mission done; the
"← Categories" back button lets a child do more than one category in a
session without leaving the module.

**Tenses paragraph format**: 2 of the 12 tense entries per tier (easy/medium/
hard; expert's pair is authored directly as flat items for format variety)
come from `TENSE_PARAGRAPHS` — a two-sentence narrative repeated across two
flattened fillblank entries, each with the OTHER blank already filled in
correctly, testing how tense choice shifts within one continuous context
rather than an isolated sentence.

## Comprehension question types
Comprehension has 8 passages per tier (32 total; ~140-300 words each,
longer at higher tiers), mixing standard
multiple-choice with a `shortanswer` type: the child types a free-text
response, taps "Check My Answer," and a model answer is revealed for
self-comparison rather than being auto-graded (no external grading API — see
out-of-scope below). `PassageModule` handles both types; `shortanswer` items
just need `prompt` + `modelAnswer` instead of `options`/`correctIndex`.

## Storytelling technique tips
Each Storytelling item (6 per tier) can carry `tipTitle` + `tip` fields — a
short "writing trick" callout (e.g. hooks, show-don't-tell, planting a
problem, leaving a bit of mystery, character growth) shown between the
passage and the questions. Rendered generically in `PassageModule` off those
two fields, so it only appears where content supplies them (currently
Storytelling only). Stories run ~200-350 words depending on tier.

## Writing model essays, research-informed hints
After a child submits their writing and sees the heuristic feedback (word
count, capitalization, punctuation, repeated words, a small common-misspelling
check, and a "vary your sentence starts" check if most sentences begin with
"I"), they can tap "📖 See an example of strong writing for this topic" to
reveal a full model essay for that tier/prompt (`WRITING_MODEL_ESSAYS` in
`src/content/writingContent.jsx`) — a comparison point, not a correction of
their own text. The structure hints and a separate "🎨 Make it more vivid"
craft-tips section (`WRITING_CRAFT_TIPS` — small-moment focus, dialogue,
sensory detail, simile) are grounded in standard elementary narrative/opinion
writing guidance (beginning-middle-end + logical sequence + specific small
moments for narrative; introduction/body-with-reasons-and-examples/conclusion
for opinion writing), researched via web search rather than invented from
scratch.

## Word Hunt (Bookworm / Word Wipe-style)
`src/WordHuntModule.jsx` + `src/content/wordHuntContent.jsx`. Replaced an
earlier Wordle-clone per feedback asking for this game type specifically. Tap
adjacent letters (8 directions) to build a word; tap the last tile again to
submit; "Clear" resets the current path. `buildGrid()` places a random sample
of the tier's target words into an 8×8 grid at runtime via randomized
backtracking (longest words first, ~400 placement attempts each, falls back
to fewer placed words if a placement can't be found rather than failing) —
grids are generated fresh each session/refresh, not hand-authored. Remaining
cells fill with frequency-weighted random letters (Boggle-like distribution).
Submitted words are checked against this puzzle's target list (full points)
or a ~7,200-word common-word bonus list (partial points) — sourced from the
Google 10,000 English word corpus (first20hours/google-10000-english,
swear-filtered), trimmed to alphabetic 3-8 letter entries with a small hand
list of sensitive-topic words removed. Still not a full dictionary, but real
everyday words (e.g. "her") are now recognized instead of only ~150
hand-picked ones. No timer, no
losing state — finishing all target words shows a celebration, and a "I'm
done for today ✅" link lets a child stop anytime and still mark the mission
complete.

Two fixes after feedback that hard-tier puzzles were "frustrating" — most
`WORD_HUNT_WORDS.hard` entries were 7 letters, and the Hint only said
"a 7-letter word starts near here" with no other clue: (1) hard/expert word
lists now mix in more 5-6 letter entries so a random 5-word draw is less
likely to be dominated by long words, and (2) the Hint message now states
the starting letter explicitly (`it's a 7-letter word starting with "C"...`),
not just the length. Also added "🔀 Shuffle grid" (`WordHuntModule.jsx`) —
regenerates the letter layout for the *same* target words without losing
found-word progress, distinct from "🔄 New puzzle" which picks new words
too; implemented by splitting word selection (`runSeed`) from grid layout
(`shuffleSeed`) into separate `useMemo`s.

## Vocabulary Builder
`src/VocabularyModule.jsx` + `src/content/vocabularyContent.jsx`. 40 items per
tier (160 total: mostly single words, a few common phrases tagged `pos:
"phrase"`), each with `word`, `pos`, `zh` (Traditional Chinese), `definition`,
`example`, and optionally `synonyms`/`antonyms` (arrays of `{word, zh}`,
tap-to-hear related words shown after flipping the card). A session samples
10 of the 40 per tier (`sampleArray`), so replays surface a different subset.
Flashcard flow: see the English word + POS badge + 🔊 Hear It, tap "Show
Meaning" to flip and reveal translation/definition/example/related words,
then Next. The second expansion pass (20→40/tier) selected new words from
real vetted sources — the Speech Therapy Store Tier 2 vocabulary lists
(grades 4-8) — rather than hand-picking arbitrarily, to keep difficulty
grading honest across tiers. Honest scope note: 160 words is a meaningful
expansion but still nowhere near "thousands of words" — reaching that scale
by hand isn't practical in a single pass; a real bulk source word list (with
translations) from the user would make a much bigger jump possible.

## History & Science
`src/content/knowledgeContent.jsx`, rendered through the existing
`PassageModule` (no new component needed) — 15 passages per tier (60 total, about half history and half science; ~120-250 words, longer at higher tiers), each with a "🔍 Fun Fact" bonus
callout (reuses the same `tipTitle`/`tip` fields Storytelling uses) and 2-3
questions (expert-tier passages include a `shortanswer` critical-thinking
question). A session draws 5 of the 15 at random (`sessionSize={5}` in Root.jsx, kept at 5 after the expansion: 5 passages of up to ~250 words each is already a long read, and 5 of 15 gives far more variety than 5 of 6 did). Every history item carries `era` (ancient/medieval/modern/myth) and `region`; every science item carries `field` (biology/chemistry/physics/earth science/astronomy/technology/ecology) — added per
feedback asking for content organised "by era, by location, by science
discipline"; the tags exist as metadata now but aren't yet wired into a
picker UI (would need one if the user wants to filter/browse by them later,
rather than the current fully-random sampling). Includes Hong Kong-specific
topics (the Star Ferry, the 1997 Handover) alongside global history/science
spanning China (paper, Chang'e myth, Zheng He's voyages), Africa (Mansa
Musa), ancient Greece/Egypt (the Library of Alexandria), and more, plus
science across biology/chemistry/physics (pandas, ice floating, why the sky
is blue, genetics) — all fact-checked via web search before writing, and
deliberately steering clear of violent/disturbing details per explicit
feedback to keep history content "suitable for kids." Hard proper nouns and
technical terms (e.g. "dynasties," "gravitational," "sovereignty,"
"crystallography," "pilgrimage," "alleles") are added to
`src/content/glossary.jsx` for the same tap-to-translate Traditional Chinese
feature used elsewhere.

## Explicitly out of scope for v1
- No backend, accounts, or login
- No multi-user / classroom features
- No AI-generated content requiring external API calls (use pre-written or
  locally-generated content unless later specified otherwise)

## Data model (localStorage key `englishOps:v1`)
```
{
  tier: "easy" | "medium" | "hard" | "expert",
  streak: { count: number, lastCompletedDate: "YYYY-MM-DD" | null },
  streakFreezes: number,          // starts at 1, cap 2, earned back every 7-day milestone
  lastFreezeUsedOn: "YYYY-MM-DD" | null,
  stats: {
    totalMissionsCompleted: number,
    moduleCompletions: { listening: number, speaking: number, ... },  // one key per MODULES entry
    bestStreak: number,
    freezesUsedTotal: number
  },
  dailyProgress: { date: "YYYY-MM-DD", completedModules: string[] },  // module keys, resets on day change
  moduleProgress: {
    listening:     { completedPassageIds: string[] },
    speaking:      {},   // extended when Speaking is built
    storytelling:  {},
    reading:       {},
    comprehension: {},
    writing:       {},
    grammar:       {}
  }
}
```

## Build status
- [x] Project scaffold — theme, storage, Daily Missions home screen, hub-and-spoke nav
- [x] Module 1 — Listening (10 passages/tier, 40 total; expanded from 3. A session draws 5 at random (`sessionSize={5}` passed from Root.jsx to ListeningModule; "Do it again" draws a fresh 5; omit the prop to play the whole pool). Passages grow from ~25 words (easy, direct facts, sequence, simple inference) to ~45 words (expert: implication, author's point, attitude); medium and above add inference questions. Option lengths balanced by script: mean gap 0.50 chars, max 4.5, including the 7 older items that were rebalanced)
- [x] Module 2 — Speaking (10 sentences/tier, 40 total; expanded from 4. Sentences get longer and more formal by tier: easy ~8 words / 48 chars average, medium ~9 / 62, hard ~9 / 71, expert ~10 / 84; no digits or contractions so the recogniser can match every word. SpeakingModule still plays the whole pool each session (no sessionSize yet). New hard words are in glossary.jsx because Speaking uses GlossaryText)
- [x] Module 3 — Story-telling (6 stories/tier, 24 total, each with a writing-technique tip and the 4 tagged skill questions; expanded from 2 — new stories are ~160-260 words; option lengths balanced by script)
- [x] Module 4 — Reading (6 passages/tier, 24 total; expanded from 2. New passages cover sport, science, history, daily life and society; answer options were length-balanced so the correct option is never noticeably longer than the distractors)
- [x] Module 5 — Comprehension (8 passages/tier, 32 total; expanded from 2. Mixed mc + shortanswer, inference / NOT / "what does X mean" questions, topics span daily life, sport, nature, science, history and society; answer options length-balanced, checked by script: mean gap 1.04 chars, max 6.0 after a second pass that rewrote 38 questions)
- [x] Module 6 — Writing (structure hints + craft tips + model essay reveal, research-grounded)
- [x] Writing expanded 1→6 prompts/tier (24 total) — WRITING_PROMPTS/HINTS/
      MODEL_ESSAYS keep their original per-item field names/shapes, just
      wrapped in arrays aligned by index; WritingModule picks a random index
      per session and added a "🔄 New topic" refresh button
- [x] Writing expanded again 6→10 prompts/tier (40 total; new topics don't
      repeat the earlier ones)
- [x] Storytelling questions rebuilt around a 4-skill framework (Structure /
      Problem-Solving / Expression / Engagement): each story now has exactly
      4 questions, one per skill, with a `tag` field shown as a chip by
      PassageModule. Easy/medium are all multiple-choice; hard/expert use
      shortanswer "how would you perform this?" for Expression/Engagement.
- [x] Reading + Comprehension questions redesigned (passages unchanged):
      inference, "which is NOT true", sequencing, and best-supported-
      statement questions, with distractors that echo the passage or are
      plausible mix-ups rather than one obvious answer and two silly ones.
- [x] Bug fixes: Root.jsx now passes `sessionSize` to the four PassageModule
      modules (they defaulted to 1); Word Hunt words are placed in one fixed
      straight line (8 directions) and the grid grows to fit the longest
      word; Hangman lives scale with word length (4 to 8).
- [x] Grammar "Past Simple Steps" (first phase of the grade-level grammar
      framework): a 4th Grammar category with 11 sub-levels (regular +ed /
      +d / doubling / y→ied, five irregular-verb groups, did/didn't, and a
      fix-the-mistake editing level), 10 items each in
      `src/content/grammarPastSimpleContent.jsx`. Every level opens with a
      Learn card (rule, verb table, tips, common mistake) before practice;
      these levels are the same for every tier. Level-complete state lives
      only in component state (no localStorage yet).
      **Coverage audit of the older Grammar content against the framework**
      (Mixed/Tenses/Prepositions in `grammarContent.jsx`): covered — subject-
      verb agreement, tense forms, prepositions as collocations, inversion/
      subjunctive/conditionals (all pitched far above P5-S2, even at "easy").
      Missing — compound sentences, adverbs, conjunctions, pronouns, articles
      and quantifiers (a/an/the/some/any), noun/verb/adjective identification,
      capital letters/basic sentence rules, punctuation (commas in lists,
      speech marks), complex/compound-complex sentences, active vs passive,
      modifier placement, editing exercises for other tenses, and any
      explanation of what a preposition is (incl. "object of a preposition").
      Not yet done: everything in that missing list except the two items
      covered by the second phase below.
- [x] Grammar paths, second phase: the level/Learn-card system was made
      generic — every entry in `window.App.Content.GRAMMAR_PATHS` (`key`,
      `emoji`, `label`, `blurb`, `sections` = label shown before a given
      level index, `levels`) becomes a Grammar category, so adding a path is
      just a new content file plus a script tag. Now 6 paths / 38 levels /
      ~360 items: Past Simple Steps (11), Present Tenses (6), Past Continuous
      (4), Present Perfect (6), Future Forms (5), and
      Prepositions Explained (6: what a preposition is with a mouse-and-box,
      the "object of a preposition" rule, at/in/on for place and time,
      movement, what follows a preposition, adjective+preposition pairs).
      The older advanced Prepositions set was relabelled "Prepositions:
      Advanced". Content files: grammarPastSimpleContent.jsx,
      grammarTensePathsContent.jsx, grammarPrepositionPathContent.jsx.
      Every tense path now ends with an "Editing: fix the mistake" level in
      the Past Simple level-11 shape (10 "Find the mistake and choose the
      correct sentence" mc items, a Learn card with a Mistake -> Fix table
      and Step 1 / Step 2 tips, and a `mistake` note): ps-11, pr-6, pc-4
      (topped up to 10 items), pp-6, fu-5.
      Still to do: parts of speech, sentence structure, punctuation, articles
      and quantifiers, and active/passive and other advanced points.
- [x] Grammar drills (3 categories × 4 tiers, 8-12 items each with worked-example
      explanations, incl. mixed-tense paragraph questions)
- [x] Word Hunt (Bookworm/Word Wipe-style, replaces earlier Wordle-clone)
- [x] Vocabulary Builder (40 items/tier incl. phrases + synonyms/antonyms)
- [x] History & Science module (24 passages, HK-relevant + global topics)
- [x] Vocabulary glossary (tap-to-reveal Traditional Chinese on hard words)
- [x] Answer-order shuffling (no more predictably-first-option correct answers)
- [x] Lock-and-explain on every MC/fill-blank question
- [x] Refresh button per module + true per-session randomization (fixed a bug
      where PassageModule always opened on the same first item)
- [x] Tier badge shown inside every module
- [x] Rebrand: "English Ops" + owl → "English Quest" + 🚀
- [x] British English content pass
- [x] Badges (13) + streak freeze gamification
- [x] Word Hunt bonus-word database enlarged (~150 → ~7,200 words, sourced
      from google-10000-english) so common real words are recognized
- [x] Module 10 — Hangman (new standalone module, reuses WORD_HUNT_WORDS,
      no losing state — wrong guesses cost a life, running out reveals the
      word gently instead of a "you lost" screen)
- [x] Vocabulary Builder doubled again (20→40 items/tier, 80→160 total),
      sourced from real vetted grade-level word lists rather than picked
      arbitrarily
- [x] History & Science doubled (8→16 passages), new topics fact-checked
      via web search before writing
- [x] Hangman word bank redesigned with `category` hints + varied length
      (per tier) instead of reusing WORD_HUNT_WORDS; QWERTY keyboard layout
- [x] Word Hunt hard/expert word lists broadened (more 5-6 letter entries,
      not mostly 7-letter); Hint now states the starting letter; added
      "🔀 Shuffle grid" (same words, new layout, keeps found-word progress)
- [x] History & Science expanded again (16→24 passages) with `era`/`region`
      (history) and `field` (science) tags per feedback asking for content
      organised by era/location/discipline — covers China, Africa, ancient
      Greece/Egypt, myth, and biology/chemistry/physics, all fact-checked
      and deliberately steering clear of violent/disturbing details
- [ ] Vocabulary at real scale (thousands of words) — would need a bulk
      source word list *with translations* from the user; hand-authoring
      beyond the current 160 isn't practical
- [ ] Word Hunt full dictionary validation — still a ~7,200-word common-word
      list, not an exhaustive dictionary; very obscure/rare words still won't
      be recognized
- [x] History & Science expanded to 15 passages per tier (24 → 60; 36 new).
      New topics span ancient Egypt, Inca Peru, Japan, Hong Kong trams,
      Greek myth, the Olympics, the Mongol relay, London 1666, Panama,
      Aztec Mexico, Mandela, the Rosetta Stone, the Black Death, Angkor,
      Roman aqueducts, the Green Revolution, Magna Carta and Ashoka; and
      science from magnets, tides, batteries and GPS to the microbiome,
      carbon dating, continental drift, the greenhouse effect and
      gravitational waves. Older items were back-filled with era/region/field
      tags. MC option lengths were rebalanced across all 165 questions (mean
      gap 10.21 -> 1.16 chars, max 68.5 -> 6.0). ~120 glossary entries added;
      `GlossaryText` now also matches hyphenated compounds (half-life,
      double-decker). Root.jsx `sessionSize` deliberately left at 5.
- [ ] A full era/region/discipline *picker UI* using the tags — the user
      described a larger 3-era × 7-region grid that would need a dedicated
      follow-up, not another content pass
