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

## Visual style: "style C" (modern explorer)
Visual-only restyle of the whole app (no content, data or logic changes). The
spec is `design-preview/style-c.html` (mock-ups of three candidate styles live
in `design-preview/`; they are static and not linked from the app). The system
began as the kraft-paper "探險護照" (explorer's passport) look; its names
(`INK`, `PaperCard`, `InkButton`, `Stamp`...) were kept so no screen changed
its imports, only the values.
- **Tokens live in `src/theme.jsx`** — use them, never hard-code colours
  (`grep "#[0-9A-Fa-f]\{6\}" src/` should only hit theme.jsx, TestModeBanner
  and `#ffffff`). `INK`: page `paper` #f1f6f5, card `paperCard` #ffffff, text
  `ink` #12353d / `mutedInk` #4f6b72, primary action `stamp` #d23f1c (+
  `stampDark`, `stampTint`, `stampTintBorder`, `stampText`), `teal` #0f5b66 /
  `teal2` + tints, text-safe gold `gold`/`goldDark`/`goldTint` for streak and
  badge text, bright gold `sun` #ffc857 for fills only (progress bars,
  highlights — it is too light to be text), `line`/`lineDark` hairlines,
  `disabled`, `success`. `coral` #ff6b4a is decorative only: white text on it is
  2.8:1, which is why buttons use `stamp` (4.7:1).
- **`MODULE_ACCENTS`**: one hue per module (same hues as the preview) turned
  into `solid`/`dark`/`tint`/`tintBorder`/`on` by `accentFromHue`, which
  darkens `solid` until white text on it is >= 4.5:1. Add a module = add a hue.
- **Fonts**: Poppins (Tailwind `font-heading`) for titles, Nunito (`font-ui`)
  for text, loaded in index.html. `TYPE.display`/`heading` = Poppins
  800/700, `TYPE.body` = Nunito, `TYPE.caption` = Nunito 700 in normal case
  (no uppercase). Root wraps the app in `font-ui`; `<body>` and the Tailwind
  `sans`/`stamp` families are unchanged (Baloo 2 / Special Elite are no longer
  used by any live screen).
- **Components**: `PaperCard` = white card, radius 20, hairline border, soft
  teal shadow (`accent` tints the border). `InkButton` = rounded 14, 4px solid
  bottom shadow, coral by default or a module `accent`. `PaperBackButton`,
  `PaperRefreshButton`, `PaperTierBadge`, `Stamp` follow the same look.
  `InkButton` also takes an opt-in `disabledLook="flat"` (a flat `INK.disabled`
  grey with `mutedInk` text, 4.9:1) used by Writing's "Check My Writing"; without it
  a disabled button is still the accent colour at half opacity (Word Hunt,
  Speaking, short-answer "Check My Answer").
- **Home screen** (`DailyMissions.jsx`): status card (date, streak/freeze
  pills, today's count, tier selector), Today's Missions as wide cards with a
  Start › / Done ✓ pill, Badges and Mistake Notebook rows, All Activities as a
  2-column grid. No level card and no bottom navigation yet (planned, not
  decided).
- **Text size**: nothing in `src/` should be smaller than 13px (use
  `text-[13px]`, not `text-xs`).
- **Legacy components** (`COLORS`/`Button`/`Card`/`BackButton`/`RefreshButton`/
  `TierBadge` in theme.jsx) are untouched and are no longer rendered by any live
  screen: only `PassageModule`'s fallback branch for callers that pass no
  `accent` uses them, and `Root.jsx` always passes one. **No module is left on
  the old look** — the old note about "unmigrated modules" no longer applies.

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
- **Streak freeze**: `state.streakFreezes` (starts at 1, cap 2). When a day's
  missions are completed and `gap` days have passed since the last counted
  day, each missed day (`gap - 1`) costs ONE freeze: with enough freezes the
  streak continues (+1) and they are spent; with too few the streak restarts
  at 1 and NO freeze is spent. A freeze is earned back at every 7-day streak
  milestone. `markModuleComplete(state, key, today)` returns `{ state,
  freezeUsed, freezesUsedNow, streakReset, dayCompleted }`; `Root.jsx` shows a
  dismissible "🧊 N streak freezes used!" banner (transient, not persisted).
  The home screen shows the streak as it is *today* (`Storage.getStreakView`,
  read-only, statuses none / doneToday / pending / saved / broken): a broken
  streak reads "Streak ended" with the best streak, without touching the
  stored count.

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
- **Daily missions** — 3 missions a day, one from each group (A reading &
  knowledge: reading / comprehension / storytelling / knowledge; B listening /
  speaking / writing; C grammar / vocabulary / wordhunt / hangman), picked
  deterministically from the date by `Storage.pickMissions` (see its comment
  for the rotation and gap guarantees) and stored in
  `dailyProgress.missions` so a later regrouping can't change today. The other
  modules stay playable and still count in the lifetime stats and badges; only
  the 3 missions complete the day. Tapping a mission jumps into that module
- **Home layout & per-module progress line** — "All Activities" is a 2-column
  grid from 640px up (1 column on phones; all 11 modules, equal-height cards);
  a module that is one of today's missions carries a ⭐ after its name there.
  Every module card has a third line, `progressText` in `DailyMissions.jsx`,
  computed from existing saved data only (no storage change). Grammar shows
  "done / total levels done": total = path levels the current tier can see,
  done = those whose `<pathKey>:<levelId>` is in
  `moduleProgress.grammar.doneLevels` (done keys for hidden levels, or for
  content that no longer exists, are ignored). The visibility rules live in
  `window.App.GrammarLevels` (`util.jsx`) and are used by both GrammarModule
  and the home card, so the home total always equals the sum of the
  "Level N of M" shown inside Grammar. No other module records which items
  were finished (only a lifetime session count with no total to compare with),
  so their cards have no progress line at all (`progressText` returns null)
  rather than an invented number; giving one a real count needs per-item
  progress stored first (a data-model change).
- **Minimum font size on the home screen: 13px** — nothing on the home screen
  may be smaller (use `text-[13px]`, not `text-xs`, which is 12px). Other
  screens (Grammar, Hangman, Word Hunt, Writing, Vocabulary, Speaking,
  VoicePicker, Passage, Listening, Badges, shared theme.jsx buttons) still use
  `text-xs` in places and have not been raised yet.
- **Grammar drills** — category picker (Mixed / Tenses / Prepositions), each
  with tier-scaled fill-in-the-blank exercises
- **Progress/streak tracking** — consecutive days on which all 3 of that
  day's missions were completed (see Daily missions above)
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
  dailyProgress: { date: "YYYY-MM-DD", completedModules: string[],
                   missions: [string, string, string] },  // module keys; resets on day change; `missions` is
                                                          // optional on load/import (older saves lack it) and is filled in by ensureToday
  moduleProgress: {
    listening:     { completedPassageIds: string[] },
    speaking:      {},   // extended when Speaking is built
    storytelling:  {},
    reading:       {},
    comprehension: {},
    writing:       {},
    grammar:       {}
  },
  mistakes: { entries: { ... } },   // see "Mistakes notebook"
  activityLog: { "YYYY-MM-DD": { modules: string[], dayCompleted: boolean } }  // last 56 days; see "Activity log and Parent report"
}
```

## Explorer level card (home screen)
- Shows the child's level on the home screen (deep-teal card between the
  status card and Today's Missions): stamp emoji, "Level N", the name, a bar in
  `INK.sun` toward the next level, and "X more missions to <next>" (or
  "Max level" at the top). Display only, not tappable; no animation.
- **Data**: `state.stats.totalMissionsCompleted`, the existing lifetime
  counter (`markModuleComplete` adds 1 each time a module is finished for the
  day: once per module per day, any module). Nothing about the level is stored
  — no schema change, no new key — so existing saves and backups get their
  level immediately and backup/restore is unaffected.
- **Table** (`window.App.LEVELS`): Explorer 🧭 0, Scout 🔭 15, Ranger 🥾 45,
  Navigator 🗺️ 90, Captain ⚓ 150, Legend 👑 240.
- **`window.App.getLevel(total)`** in `src/util.jsx` (pure): returns `{ index,
  number, name, stamp, min, nextMin, nextName, progress (0..1), remaining,
  isMax }`; bad input counts as 0, fractions round down. The card is
  `LevelCard` in `DailyMissions.jsx`. Tests: section 7 of `tests/run.html`.
  Changing a threshold means changing the table and those tests together.

## Activity log and Parent report
- **New saved field** `state.activityLog` (the only schema addition since the
  backup feature): `{ "YYYY-MM-DD": { modules: ["hangman", "grammar", ...],
  dayCompleted: true | false } }`. `modules` = module keys finished that day,
  each once, in order; `dayCompleted` = that day's streak was counted (all 3
  missions done, or already counted earlier that day). Dates are the same local
  dates the streak uses (`todayStr()`, so test mode's `?today=` too).
- **Written in one place**: `Storage.markModuleComplete` (`storage.jsx`) calls
  the pure `recordActivity(log, moduleKey, dayCounted, today)`. Its return value
  and events are unchanged; only the returned state has the extra field. A repeat
  of the same module the same day adds nothing; if the device clock went back
  (a later date is already counted or logged) nothing is written.
- **56 calendar days kept**: `ACTIVITY_DAYS = 56`, today counting as day 1
  (`activityWindowStart(today)`); older dates are dropped on every write, on
  load and on import. Later dates are kept.
- **Validation / backup**: `sanitizeActivityLog(raw, today)` is used by
  `normalizeState` (old saves get `{}`) and `sanitizeImportedState`. A bad entry
  (date that is not a real calendar date, `modules` not an array of known module
  keys, `dayCompleted` not a boolean) is dropped on its own; it never fails the
  whole backup. The backup file is the whole state, so the field is exported and
  restored with the rest; an old backup without it restores with `{}`.
- **Parent report** (`src/ParentReport.jsx`, view `"report"` in `Root.jsx`, link
  "Parent report" beside the Backup link at the bottom of the home screen):
  read-only, writes nothing. Last 7 days (✅ day done, 🟡 some played with the
  count, ⬜ nothing played, – "Not tracked yet" for days before the first record,
  which is not the same as doing nothing), this week's totals, streak / best
  streak / freezes / level / badges, and mistakes due today by module. The
  numbers come from pure functions in `window.App.ParentReport` (`util.jsx`):
  `trackingStart`, `weekCells`, `mostPlayed`, `weekSummary`, `dueByModule`.
  Tests: section 9 of `tests/run.html`.

## Hangman word bank and "New word"
- **Word bank** (`src/content/hangmanContent.jsx`, `HANGMAN_WORDS`): 40 words per
  tier (160 in all; the original 61 are kept unchanged, new words come after them
  in each tier). Each word has a `category` shown above the blanks. Rules, all
  checked by `tests/run.html` (section 10): capital letters A-Z only (no spaces,
  hyphens, apostrophes, digits); no repeats inside a tier or across tiers; a
  specific, capitalised English category (not "Things" or "Words"); length easy
  3-4, medium 4-7, hard 6-8, expert 7-12, spread evenly; British spelling; everyday
  words for a Hong Kong Primary 5 child, no proper nouns, brands, slang or
  anything violent or frightening. Avoid words with a British/American spelling
  variant (e.g. encyclopaedia). Two of the original 61 were replaced on review:
  `SOCCER` -> `HOCKEY` (the app says "football", and FOOTBALL is 8 letters, too long
  for medium) and `CIVILIZATION` -> `CIVILISATION` (British -ise); the test lists
  them as the only allowed changes. A word's category must not mislead (CLIMATE is
  under Geography, not Weather).
- **The answer is one row of letter boxes** (`HangmanModule.jsx`): `flex-nowrap`,
  each box `flex-1 min-w-0` with a maximum width and a line under it; found letters
  show inside, the rest stay empty. Type size steps down with length (32 / 26 / 22 /
  18px, never below 18px). It never wraps, so a 12-letter word on a phone cannot
  look like two words. The row has `role="img"` and one `aria-label` such as
  "Word with 5 letters: C _ T _ _"; the boxes are `aria-hidden`.
- **No immediate repeats**: the pick is the pure `window.App.pickHangmanWord(bank,
  recentWords, rng)` in `src/util.jsx`: it leaves out `recentWords` and falls back
  to the whole bank only if that leaves nothing; `rng` can be injected for tests.
  `window.App.updateRecentWords(recent, word, bankSize)` keeps the last
  `min(8, bankSize - 1)` words, newest last.
- **Memory only**: `HangmanModule.jsx` keeps `recentWordsByTier` in a module
  variable (not React state, not saved), so leaving and re-entering Hangman keeps
  it; a page reload starts afresh. Used for the first word and for "New word" /
  "Try another word". Lives, hints, scoring and the "I'm done for today" button are
  unchanged.

## Level-up celebration
- When finishing a module takes the child into a higher level, the home screen
  shows a celebration dialog once: a full-screen dim-teal overlay, a card with
  the new stamp (pops in, sparkles twinkle), "Level up!", the new name, "You are
  now a Scout!" and a coral Continue button. It closes on Continue, a tap on the
  dim area, or Esc; it has `role="dialog"` / `aria-modal`, focus starts on
  Continue and stays there, and the animations are plain CSS that switch off
  under `prefers-reduced-motion`. The Continue button shows a teal focus ring
  (`:focus-visible`, token colour) only for keyboard use: a tap or click shows none
  (`lastInputWasPointer` + `data-kb` in the component, so it does not depend on
  how a browser treats focus moved by script). The component is `LevelUpDialog`
  in `src/DailyMissions.jsx` (colours from theme tokens, no sound, no libraries).
- **Detection point**: `completeModule` in `src/Root.jsx`, inside the
  `setState` updater, compares `totalMissionsCompleted` before and after
  `Storage.markModuleComplete` (which is unchanged) with the pure
  `window.App.levelUpBetween(prev, next)` (`util.jsx`): `null`, or `{ from, to }`
  (`getLevel` results) when `to.index > from.index`. A repeat of the same module
  the same day adds nothing, so it never counts; skipping several levels shows
  only the final one.
- **Hand-over**: `window.App.setPendingLevelUp(x)` / `takePendingLevelUp()`
  hold the value in a module variable in memory only — never localStorage, no
  schema or key change. `DailyMissions` calls `takePendingLevelUp()` once on
  mount (it clears at once), so one level-up is shown once. Only `completeModule`
  sets it, so a reload, a first load, a backup restore or switching the test
  date can never trigger it.
- Tests: section 8 of `tests/run.html`.

## Regression tests (`tests/run.html`)
- Run: serve the repo and open `/tests/run.html` (also live at
  `https://charleschow2045.github.io/english-ops/tests/run.html`). It needs a
  static server, not `file://` (Babel fetches the `.jsx` files). It runs on
  load, lists every check with PASS/FAIL (expected vs actual for failures) and
  sets the tab title to `PASS n/n` or `FAIL ...`. Details in `tests/README.md`.
- Covers `pickMissions` (20,000 days), streak/freeze rules, `getStreakView`,
  old saves without `missions`, backup build/parse round trip and rejections,
  and `GrammarLevels` (76 levels easy/medium/hard, 77 expert). Run it after
  touching `storage.jsx`, `mistakes.jsx`, `util.jsx` or Grammar content; when
  Grammar levels are added or removed, change the 76/77 expectation on purpose.
- **Must never touch the real key `englishOps:v1`** (on the live site that is
  the child's real progress). The page only runs with `?today=2026-10-14` (it
  redirects there if the URL differs, before any app code loads), so the app is
  in test mode on `englishOps:test`; it also blocks and records any write to
  the real key and fails if there was one. New tests must use pure functions
  or the test key and put back whatever they overwrite. They load the real
  source files — never copy app logic into the tests.

## Build status
- [x] Project scaffold — theme, storage, Daily Missions home screen, hub-and-spoke nav
- [x] Module 1 — Listening (10 passages/tier, 40 total; expanded from 3. A session draws 5 at random (`sessionSize={5}` passed from Root.jsx to ListeningModule; "Do it again" draws a fresh 5; omit the prop to play the whole pool). Passages grow from ~25 words (easy, direct facts, sequence, simple inference) to ~45 words (expert: implication, author's point, attitude); medium and above add inference questions. Option lengths balanced by script: mean gap 0.50 chars, max 4.5, including the 7 older items that were rebalanced)
- [x] Module 2 — Speaking (10 sentences/tier, 40 total; expanded from 4. Sentences get longer and more formal by tier: easy ~8 words / 48 chars average, medium ~9 / 62, hard ~9 / 71, expert ~10 / 84; no digits or contractions so the recogniser can match every word. A session draws 5 sentences at random (`sessionSize={5}` passed from Root.jsx to SpeakingModule; "New questions" and "Do it again" draw a fresh 5; omit the prop to use the whole pool). New hard words are in glossary.jsx because Speaking uses GlossaryText)
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
      these levels are the same for every tier. (Level-complete state was
      component-only at first; it is now saved, see the persistence item
      below.)
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
      just a new content file plus a script tag. Now 11 paths / 77 levels /
      ~760 items: Past Simple Steps (11), Present Tenses (6), Past Continuous
      (4), Present Perfect (6), Future Forms (5), Prepositions Explained (6:
      what a preposition is with a mouse-and-box, the "object of a
      preposition" rule, at/in/on for place and time, movement, what follows
      a preposition, adjective+preposition pairs), Parts of Speech (8),
      Articles & Quantifiers (8), Sentence Structure (8), Punctuation &
      Capitals (7), and Advanced (8, with an expert-only-item mechanism —
      see that entry below). The older advanced Prepositions set was
      relabelled "Prepositions: Advanced". Content files:
      grammarPastSimpleContent.jsx, grammarTensePathsContent.jsx,
      grammarPrepositionPathContent.jsx, grammarPartsOfSpeechContent.jsx,
      grammarArticlesContent.jsx, grammarSentenceStructureContent.jsx,
      grammarPunctuationContent.jsx, grammarAdvancedContent.jsx.
      Every tense path now ends with an "Editing: fix the mistake" level in
      the Past Simple level-11 shape (10 "Find the mistake and choose the
      correct sentence" mc items, a Learn card with a Mistake -> Fix table
      and Step 1 / Step 2 tips, and a `mistake` note): ps-11, pr-6, pc-4
      (topped up to 10 items), pp-6, fu-5.
      Agreed order for the rest (one path at a time, stop for review after
      each): A Parts of Speech -> B Articles & Quantifiers -> C Sentence
      Structure -> D Punctuation & Capitals -> E Advanced (E's Conditional 3
      and dangling modifiers only at expert tier, not S1 must-haves, so E
      will need a per-level tier gate). Older Mixed/Tenses banks are left
      alone for now.
- [x] Grammar path A, "Parts of Speech" (`grammarPartsOfSpeechContent.jsx`,
      script tag after the Prepositions path in index.html): 8 levels x 10
      items = 80 (32 mc, 48 fill-blank): nouns (plurals, proper nouns), verbs
      (action / state / be / helping / modal), adjectives (comparing),
      adverbs, pronouns (subject / object / possessive / reflexive),
      conjunctions, a mixed "which part of speech?" level, and an editing
      level in the Past Simple level-11 shape. Option lengths checked by
      script (mean gap 0.04 chars, max 5.0 over all 80 items).
- [x] Grammar level progress now persists: finished path levels are stored in
      `state.moduleProgress.grammar.doneLevels` as "<pathKey>:<levelId>"
      (level ids, not positions, so adding or reordering levels never shifts
      saved progress). `Storage.markGrammarLevelDone` (pure) + an
      `ensureGrammarProgress` step in `loadState` that upgrades older saved
      states whose `grammar` was `{}`; Root passes `doneLevels` /
      `onLevelDone` into GrammarModule (which falls back to component state
      if they are not passed). Verified in the real app: an old-shape saved
      state loads, completing a level writes the key, and after a reload the
      level shows the check mark. Only completion is stored, not scores.
- [x] Grammar path B, "Articles & Quantifiers" (`grammarArticlesContent.jsx`,
      script tag after Parts of Speech in index.html): 8 levels x 10 items =
      80 (24 mc, 56 fill-blank): a/an (sound not letter, incl. "an hour" /
      "a university"), the (specific/unique/landmarks), no article (general
      plural/uncountable, meals, sports, go to school/bed/work, by bus),
      countable vs uncountable (many/much/a lot of), some/any (incl.
      something/anything), few/a few vs little/a little plus each/every/
      all/both, a mixed review level, and an editing level. Targets a gap
      Cantonese-speaking learners commonly have (no articles or plural
      marking in Cantonese). Option lengths checked by script (mean gap
      -0.42 chars, max 4.0 over all 80 items). Verified in the real app.
- [x] Grammar path C, "Sentence Structure" (`grammarSentenceStructureContent.jsx`,
      script tag after Articles & Quantifiers in index.html): 8 levels x 10
      items = 80 (all mc except one fill-blank level): what makes a complete
      sentence vs a fragment (incl. -ing with no helping verb), word order
      (SVO and question inversion), the four sentence types, compound
      sentences (comma before and/but/or/so joining two independent clauses,
      vs no comma for two objects or a shared-subject compound predicate),
      complex sentences (comma after a fronted dependent clause, usually none
      when it comes second), relative clauses (who/that/where), fixing
      run-ons and comma splices, a mixed review level, and an editing level.
      Option lengths checked by script (mean gap 0.51 chars, max 6.0 over
      all 80 items). Verified in the real app.
- [x] Grammar path D, "Punctuation & Capitals" (`grammarPunctuationContent.jsx`,
      script tag after Sentence Structure in index.html): 7 levels (not 8 —
      no separate mixed-review level, matching the original plan for this
      path) x 10 items = 70: capital letters, end punctuation (. ? !),
      commas (lists and introductory words — list-comma territory only; the
      compound/complex-sentence comma rules live in path C), apostrophes
      (contractions, singular/plural/irregular possessives, its vs it's),
      quotation marks for direct speech (punctuation inside the closing
      mark), colons/semicolons/dashes/brackets, and an editing level. Option
      lengths checked by script (mean gap 0.30 chars, max 2.0 over all 70
      items). Verified in the real app, including that the nested-quote
      escaping in the quotation-marks and editing levels renders correctly.
      Follow-up fix: level pun-6 (colons/semicolons/dashes/brackets) had
      been left un-gated after path E introduced tier gating — it now
      carries `tiers: ["expert"]` on the level object itself (all 10 items
      are also individually wrapped in `expertOnly()`, belt-and-braces).
      This needed a small GrammarModule.jsx addition beyond the item-level
      filter added for path E: the level list now skips rendering a level
      whose `tiers` doesn't include the current tier (index `i` into the
      full, unfiltered `psLevels` stays the index used for `sections[i]`
      and `doneKey(i)`, so nothing shifts), and "Next level" after
      finishing a level now scans forward to the next tier-visible level
      instead of always doing `levelIdx + 1`, so it can't land on a hidden
      level. A level with no `tiers` field is unaffected, exactly like an
      item. Verified in the real app in both directions: at easy tier the
      level list has 6 entries with no "Colons..." row, and finishing level
      5 (Quotation marks) jumps straight to level 7 (Editing) via "Next
      level"; at expert tier the level list shows all 7, including
      "Colons, semicolons, dashes and brackets — Expert challenge".
      Numbering follow-up: the numbers shown to the child (list badge, Learn
      card "Level N", "Level N complete!", and "Level N of M" in the quiz)
      count only the levels the current tier can see (`levelNumber(i)` and
      `visibleLevelCount` in GrammarModule.jsx), so easy/medium/hard show
      1-6 with no jump to 7, and expert shows 1-7. Internal indices
      (`sections[i]`, `doneKey(i)`, `levelIdx`) still use the full list.
      NOTE: this one was pushed without local runtime verification (headless
      Edge had stopped working after an Edge update and the in-app browser
      pane was hidden), at the user's explicit request; the user checks it by
      eye on the live app.
- [x] Grammar path E, "Advanced" (`grammarAdvancedContent.jsx`, script tag
      after Punctuation & Capitals in index.html): 8 levels x 10 items = 80:
      active/passive voice, modal verbs (can/could/may/might/must/should),
      conditionals (zero/first/second for everyone, third conditional as an
      expert-only stretch), reported speech tense shifts, Past Perfect,
      Present Perfect Continuous, modifier placement (misplaced modifiers
      for everyone, dangling modifiers as an expert-only stretch), and an
      editing level. Added a generic tier-gating mechanism for this: an item
      can carry `tiers: ["expert"]` (see the `expertOnly()` helper in the
      content file) and GrammarModule.jsx filters `baseItems` by it before
      sampling a session; items without `tiers` are unaffected and always
      show, so every earlier path's behaviour is unchanged. 9 of the 80
      items (3 in Conditionals, 4 in Modifier placement, 2 in Editing) are
      expert-only. Option lengths checked by script (mean gap 0.50 chars,
      max 5.5 over all 80 items). Verified in the real app in both
      directions: an easy-tier session in the Conditionals level never drew
      a third-conditional item across two full sessions, and an expert-tier
      session did.
- [x] Progress backup / restore (`src/BackupScreen.jsx` + backup functions at
      the bottom of `storage.jsx`). All progress lives in one localStorage key
      (`englishOps:v1`; the voice choice is inside it as `state.voicePref`, and
      a grep of `src/` and `index.html` found no other storage use), so one
      key is the whole app. File format: `{ app: "english-ops", version: 1,
      exportedAt, data: { "englishOps:v1": <state> } }`, file name
      `english-ops-backup-YYYY-MM-DD.json` (local date). Entry point: a small
      low-key link at the very bottom of the home screen (a "backup" view in
      Root, like Badges). The backup SCREEN is parent-facing, so its copy is
      Traditional Chinese (unchanged); the home link to it is English ("Backup / Restore progress (back up once a week)"). The screen carries a "建議每星期備份一次" reminder and an iPad add-to-home-
      screen tip (which also warns that the home-screen app and Safari
      normally keep separate storage, so back up in Safari BEFORE adding to
      the home screen and restore afterwards). Import: `Storage.parseBackup`
      never throws — it rejects by reason (too_big > 2 MB, not_json,
      wrong_app = no/other `app` field incl. a beetle-care file, too_new =
      version above 1, invalid = shape problems such as non-numeric
      streak.count, bad dates, missing data) and accepts only a state that
      passes `sanitizeImportedState` (keeps known top-level fields only,
      clamps voice rate) and then the same `normalizeState` that
      `loadState` now uses (extracted from loadState, behaviour unchanged).
      Nothing is written until the child/parent taps "確認覆蓋" on a
      confirmation screen that shows the file's date and a file-vs-current
      table (badges, streak, missions, Grammar levels, tier). Tested: unit
      round trip + 33 rejected inputs + a 3000-file random-damage fuzz (no
      throw; every accepted state usable by the app), and an end-to-end run
      in the real app (export -> clear localStorage -> reload -> import ->
      progress identical, survives another reload; garbage, truncated,
      beetle-care, other-app, corrupt, too-new and oversized files all
      rejected with progress untouched; cancel leaves progress untouched).
      NOT tested: a real iPad — iOS home-screen web apps can handle
      `<a download>` blob downloads badly; if that happens the fallback would
      be `navigator.share({ files })` on iOS standalone.
- [x] Mistakes notebook ("錯題本") with spaced re-review (`src/mistakes.jsx`
      core, `src/MistakesReview.jsx` screen, hooks in Grammar/Listening/
      PassageModule). Wired modules: Grammar (all 839 items, old banks and
      paths), Listening (40), Reading, Storytelling, Comprehension, History &
      Science (mc/fillblank only). NOT wired: short-answer questions, Speaking,
      Writing, Hangman, Word Hunt, and Vocabulary Builder (flashcards — there is
      no right/wrong answer to record; it would need a new quiz mode).
      Key format `<module>:<question id>` (modules grammar, listening,
      reading, storytelling, comprehension, knowledge), e.g. grammar:pos1-7,
      listening:easy-2, reading:read-easy-6-q1, knowledge:know-easy-science-4-q1.
      Ids are data in the content files (the passage-module question ids were
      added in their own commit, `<passageId>-q<n>`; give any NEW question a new
      unique id and never renumber). Schedule (local whole days): wrong ->
      due +1 day; right in a review -> +3 days -> +7 days -> mastered (kept
      only as a small record, never due); wrong again, in a review OR in
      ordinary practice, resets to +1 day (and re-opens a mastered one); a right
      answer in ordinary practice changes nothing. The notebook UI is English
      like the rest of the app (the backup screen is the one parent-facing
      Traditional Chinese screen): the home card is "Mistake Notebook" with
      "N to review today" or "Nothing to review today 👍"; a round is at most
      10 questions, longest-overdue first; reading-type questions have a
      "Show passage" / "Hide passage" toggle, schedule lines read "Review
      again tomorrow / in 3 days / in 7 days" and "Mastered! Removed from the
      notebook";
      Listening has a play button (transcript stays hidden), and the correct
      answer + original explanation + next review date show right after each
      answer. Entries whose question no longer exists are ignored. Stored in
      `state.mistakes = { entries }` (added to defaultState, `normalizeState`
      and `sanitizeImportedState`, so backups keep it; malformed entries are
      dropped, well-formed ones round-trip unchanged); capped at 300 entries
      (mastered first, oldest first, then oldest active). The backup restore
      screen shows the notebook count. Tested: 45 logic checks (schedule,
      dates, cap, validation, backup round trip, 2000-file fuzz) and a 45-check
      end-to-end run in the real app with a shifted clock (days 0, 1, 4, 11),
      wrong answers in all six modules, reviews, export -> clear -> import.
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
- [x] Test mode (`?today=YYYY-MM-DD`): the app pretends today is that date and
      uses its own localStorage key `englishOps:test`, so the real key
      `englishOps:v1` is never read, written, exported over or restored over.
      A banner (`src/TestModeBanner.jsx`, Traditional Chinese, tester-facing)
      shows on every screen: previous/next day (reloads), "🌙 模擬過午夜" (moves
      the pretend date in memory WITHOUT reloading, to test an app left open
      past midnight; also rewrites ?today= so a reload stays on that day),
      clear test data (only ever the test key) and exit. Any `today` param,
      even a malformed one, selects the test key (a malformed date falls back
      to the real today). Test-mode exports carry `testMode: true` and a
      `test` file name and are refused outside test mode (`test_file`); test
      mode may import a real backup (it only writes the test key). Decided
      once at load from the URL. Use a Safari tab to test on the iPad (the
      home-screen app can't take a query string, and keeps separate storage).
- [x] Saved data the app can't read (damaged JSON, wrong shape) is copied to
      `<key>:corrupt-<date>` before the fresh default state overwrites it
      (never overwrites an earlier copy from the same day).
- [x] Streak fixes: missing N days costs N freezes (or restarts the streak
      without spending any); `markModuleComplete` rolls the day over first, so
      a module finished after midnight with the app left open no longer counts
      toward yesterday's checklist; Root tracks the date (visibilitychange,
      focus, pageshow, 60s timer). `normalizeState` clamps freezes to 0-2 and
      the streak count/date and repairs a stats block with no
      moduleCompletions; backup dates must be real calendar dates.
- [x] Daily missions reduced from 11 to 3 per day (groups above). Backup
      format version stays 1: `dailyProgress.missions` is optional, so older
      backups import (today's missions are filled in) and the previous app
      version can still read a new backup (it just ignores the field).
      Known one-day edge: if the previous app version had already finished
      all 3 modules the new rule picks for the deploy day, the streak is not
      settled until the next completion.
