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

A web app to help a child (age 10-11) practice English across ten activities:
Listening, Speaking, Storytelling, Reading, Comprehension, Writing, Grammar
Drills, Word Hunt (Bookworm/Word Wipe-style), Vocabulary Builder, and History
& Science (English practice through real facts/stories from subjects the
child enjoys). Includes daily missions and progress tracking across four
difficulty tiers.

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
- **12 badges** defined in `storage.jsx` (`BADGES`), each a `{ key, emoji,
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
   a pool of 20/tier) per session: English word + part of speech, flip to
   reveal Traditional Chinese translation + definition + example sentence +
   tap-to-hear similar/opposite words
9. **History & Science** — real historical events and scientific phenomena as
   reading passages (reuses the Reading/Comprehension engine), for a child
   whose interests lean that way; hard names/terms get the same
   tap-to-translate Traditional Chinese glossary as other modules

Grammar Drills (category picker: Mixed Grammar / Tenses / Prepositions) is a
supporting activity alongside these, not part of the original numbered list.

## Supporting features
- **Daily missions** — a checklist/dashboard of today's tasks across all 10
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
Comprehension has 2 passages per tier (~300 words each), mixing standard
multiple-choice with a `shortanswer` type: the child types a free-text
response, taps "Check My Answer," and a model answer is revealed for
self-comparison rather than being auto-graded (no external grading API — see
out-of-scope below). `PassageModule` handles both types; `shortanswer` items
just need `prompt` + `modelAnswer` instead of `options`/`correctIndex`.

## Storytelling technique tips
Each Storytelling item (2 per tier) can carry `tipTitle` + `tip` fields — a
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
or a curated ~150-word common-word bonus list (partial points) — there's no
full dictionary bundled, so a real word outside both lists just won't be
recognized yet; the in-game "❓ How to Play" modal explains the mechanic and
that limitation implicitly by framing it as "our word list." No timer, no
losing state — finishing all target words shows a celebration, and a "I'm
done for today ✅" link lets a child stop anytime and still mark the mission
complete.

## Vocabulary Builder
`src/VocabularyModule.jsx` + `src/content/vocabularyContent.jsx`. 20 items per
tier (80 total: mostly single words, a few common phrases tagged `pos:
"phrase"`), each with `word`, `pos`, `zh` (Traditional Chinese), `definition`,
`example`, and optionally `synonyms`/`antonyms` (arrays of `{word, zh}`,
tap-to-hear related words shown after flipping the card). A session samples
10 of the 20 per tier (`sampleArray`), so replays surface a different subset.
Flashcard flow: see the English word + POS badge + 🔊 Hear It, tap "Show
Meaning" to flip and reveal translation/definition/example/related words,
then Next. Honest scope note: this is a meaningful expansion (2x from the
first version) but nowhere near "thousands of words" — reaching that scale
by hand isn't practical in a single pass; a real source word list from the
user would make a much bigger jump possible.

## History & Science
`src/content/knowledgeContent.jsx`, rendered through the existing
`PassageModule` (no new component needed) — one history + one science
passage per tier (8 total, ~150-300 words), each with a "🔍 Fun Fact" bonus
callout (reuses the same `tipTitle`/`tip` fields Storytelling uses) and 2-3
questions. Session picks one of the two at random per the same
`sampleArray`-based logic as other `PassageModule` content. Includes one
Hong Kong-specific topic (the Star Ferry) alongside global history/science.
Hard proper nouns and technical terms (e.g. "dynasties," "gravitational,"
"Victoria Harbour" components) are added to `src/content/glossary.jsx` for
the same tap-to-translate Traditional Chinese feature used elsewhere.

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
- [x] Module 1 — Listening (3 passages/tier)
- [x] Module 2 — Speaking (4 sentences/tier, raised past toddler-level words)
- [x] Module 3 — Story-telling (2 longer stories/tier + writing-technique tips)
- [x] Module 4 — Reading (2 passages/tier)
- [x] Module 5 — Comprehension (2 ~300-word passages/tier, mixed question types)
- [x] Module 6 — Writing (structure hints + craft tips + model essay reveal, research-grounded)
- [x] Grammar drills (3 categories × 4 tiers, 8-12 items each with worked-example
      explanations, incl. mixed-tense paragraph questions)
- [x] Word Hunt (Bookworm/Word Wipe-style, replaces earlier Wordle-clone)
- [x] Vocabulary Builder (20 items/tier incl. phrases + synonyms/antonyms)
- [x] History & Science module (8 passages, HK-relevant + global topics)
- [x] Vocabulary glossary (tap-to-reveal Traditional Chinese on hard words)
- [x] Answer-order shuffling (no more predictably-first-option correct answers)
- [x] Lock-and-explain on every MC/fill-blank question
- [x] Refresh button per module + true per-session randomization (fixed a bug
      where PassageModule always opened on the same first item)
- [x] Tier badge shown inside every module
- [x] Rebrand: "English Ops" + owl → "English Quest" + 🚀
- [x] British English content pass
- [x] Badges (12) + streak freeze gamification
- [ ] Vocabulary at real scale (thousands of words) — would need a source word
      list from the user; hand-authoring beyond the current 80 isn't practical
- [ ] Word Hunt dictionary validation — currently target list + curated bonus
      list only, no full dictionary
- [ ] More History & Science passages — 8 is a solid start, not exhaustive
