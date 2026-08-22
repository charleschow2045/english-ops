# Project: English Ops

A web app to help a child (age 10-11) practice English across six skill areas:
Listening, Speaking, Storytelling, Reading, Comprehension, and Writing.
Includes daily missions and progress tracking across four difficulty tiers.

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
   spelling (keep feedback encouraging, not harsh — this is for a child)

## Supporting features
- **Daily missions** — a checklist/dashboard of today's tasks across modules
  (the 6 core modules + Grammar Drills); tapping an incomplete task jumps into
  that module
- **Grammar drills** — short exercises testing grammar rules, tier-appropriate
- **Progress/streak tracking** — consecutive days where all *currently built*
  daily tasks are completed; the streak target automatically grows as more
  modules ship (a module only counts toward the day's checklist once it's
  actually implemented — see Build status below)

## Design notes
- Bright, playful, encouraging tone throughout — this is for a child learner
- Positive reinforcement on correct answers; gentle, non-discouraging feedback
  on mistakes (never a red "wrong" — use warm amber "try again" language)
- Large tap targets, simple navigation
- Navigation is hub-and-spoke: a single "Daily Missions" home screen lists all
  modules; tapping one opens that module full-screen with a "← Back" button,
  rather than a persistent tab bar (keeps each module screen focused for a
  young reader)
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
Comprehension passages (~300 words each) mix standard multiple-choice with a
`shortanswer` type: the child types a free-text response, taps "Check My
Answer," and a model answer is revealed for self-comparison rather than being
auto-graded (no external grading API — see out-of-scope below). `PassageModule`
handles both types; `shortanswer` items just need `prompt` + `modelAnswer`
instead of `options`/`correctIndex`.

## Storytelling technique tips
Each Storytelling item can carry `tipTitle` + `tip` fields — a short "writing
trick" callout (e.g. hooks, show-don't-tell, planting a problem, leaving a bit
of mystery) shown between the passage and the questions. Rendered generically
in `PassageModule` off those two fields, so it only appears where content
supplies them (currently Storytelling only).

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
- [x] Module 1 — Listening
- [x] Module 2 — Speaking
- [x] Module 3 — Story-telling
- [x] Module 4 — Reading
- [x] Module 5 — Comprehension
- [x] Module 6 — Writing
- [x] Grammar drills
- [x] Vocabulary glossary (tap-to-reveal Traditional Chinese on hard words)
- [ ] More content per tier — each module currently ships with 1 item per tier
      (3 for Listening/Speaking); expand the content files under `src/content/`
      as more material is written
