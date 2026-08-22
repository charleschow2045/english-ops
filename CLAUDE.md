# Project: English Quest

(Repo/folder name stays `english-ops` — only the in-app display name and
branding changed, after feedback that "English Ops" + an owl mascot read as
an odd combination. Visual style takes inspiration from bright, game-like kids'
English platforms like British Council LearnEnglish Kids and Funbrain's
Grammar Gorillas — colorful, playful, activity-framed — without copying their
names, logos, or content.)

A web app to help a child (age 10-11) practice English across nine activities:
Listening, Speaking, Storytelling, Reading, Comprehension, Writing, Grammar
Drills, Word Guess (Wordle-style), and Vocabulary Builder. Includes daily
missions and progress tracking across four difficulty tiers.

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
7. **Word Guess** — a Wordle-style game: guess a 5-letter word in 6 tries, with
   green/yellow/gray tile feedback and an on-screen keyboard. "Today's word" is
   date-seeded (same word all day per tier); Refresh picks a new random word
8. **Vocabulary Builder** — flashcards through 10 tier-appropriate words per
   session: English word + part of speech, flip to reveal Traditional Chinese
   translation + definition + example sentence

Grammar Drills (category picker: Mixed Grammar / Tenses / Prepositions) is a
supporting activity alongside these, not part of the original numbered list.

## Supporting features
- **Daily missions** — a checklist/dashboard of today's tasks across all 9
  activities; tapping an incomplete task jumps into that module
- **Grammar drills** — category picker (Mixed / Tenses / Prepositions), each
  with tier-scaled fill-in-the-blank exercises
- **Progress/streak tracking** — consecutive days where all *currently built*
  daily tasks are completed; the streak target automatically grows as more
  modules ship (a module only counts toward the day's checklist once it's
  actually implemented — see Build status below)
- **Refresh button** — every module has a 🔄 button that resets its session
  with newly shuffled content/order (a different story/passage where more than
  one exists, a reshuffled item order, or a new Wordle word), so replaying a
  module doesn't mean seeing the exact same run
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
`src/content/grammarContent.jsx` (`GRAMMAR_ITEMS[category][tier]`, 4 items
each). Content is written to require real grammatical discrimination —
subject-verb agreement edge cases, inversion, subjunctive mood, perfect/perfect
continuous tenses, prepositional collocations — not just an obviously-wrong
distractor, and gets harder tier over tier (Easy: basic present/past forms and
common prepositions; Expert: inversion, future perfect passive, reported
speech tense shifts, less common collocations like "account for"/"insist on").
Finishing any one category marks the day's Grammar Drills mission done; the
"← Categories" back button lets a child do more than one category in a
session without leaving the module.

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

## Writing model essays
After a child submits their writing and sees the heuristic feedback (word
count, capitalization, punctuation, repeated words, a small common-misspelling
check, and a "vary your sentence starts" check if most sentences begin with
"I"), they can tap "📖 See an example of strong writing for this topic" to
reveal a full model essay for that tier/prompt (`WRITING_MODEL_ESSAYS` in
`src/content/writingContent.jsx`) — a comparison point, not a correction of
their own text.

## Word Guess (Wordle-style)
`src/WordleModule.jsx` + `src/content/wordleContent.jsx`. Standard Wordle
mechanics (5 letters, 6 guesses, green/yellow/gray feedback via a duplicate-
letter-aware evaluator, on-screen QWERTY keyboard with best-known-status
coloring). Word length is fixed at 5 across all tiers so the mechanic stays
familiar; only word obscurity scales with tier. "Today's word" is picked by a
day-of-year seed (same word all day per tier, like real Wordle); the Refresh
button overrides this with a random word from the tier's list. Any 5-letter
A-Z guess is accepted — there's no full dictionary validator bundled (would
require a large embedded word list), which is a reasonable v1 tradeoff for a
kids' app where the answer list itself is small and curated. Finishing (win
or lose) marks the mission done — losing a Wordle isn't a failure state here.

## Vocabulary Builder
`src/VocabularyModule.jsx` + `src/content/vocabularyContent.jsx`. 10 words per
tier (40 total), each with `word`, `pos` (noun/verb/adj), `zh` (Traditional
Chinese), `definition`, and an `example` sentence. Flashcard flow: see the
English word + POS badge + 🔊 Hear It, tap "Show Meaning" to flip and reveal
the rest, then Next. Refresh reshuffles the session's word order. The 10-per-
tier bank is a fixed set for now (not yet a larger rotating daily pool) —
expanding `VOCABULARY_ITEMS` is the natural next step if more variety is wanted.

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
- [x] Module 6 — Writing (structure hints + model essay reveal)
- [x] Grammar drills (3 categories × 4 tiers × 4 items, with explanations)
- [x] Word Guess (Wordle-style)
- [x] Vocabulary Builder (10 words/tier, EN + Traditional Chinese + POS + example)
- [x] Vocabulary glossary (tap-to-reveal Traditional Chinese on hard words)
- [x] Answer-order shuffling (no more predictably-first-option correct answers)
- [x] Lock-and-explain on every MC/fill-blank question
- [x] Refresh button per module
- [x] Rebrand: "English Ops" + owl → "English Quest" + 🚀
- [ ] Even more content per tier — current counts above are a solid step up
      from the original single-item banks, but there's room to keep growing
      (especially Vocabulary's fixed 10-per-tier set and Wordle's 5-word lists)
