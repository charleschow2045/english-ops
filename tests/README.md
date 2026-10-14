# English Quest tests

**How to open:** serve the repo with any static server (for example `powershell -File .claude/static-server.ps1 -Root english-ops -Port 5600`) and open `/tests/run.html`; it needs a server, not `file://`, because Babel fetches the `.jsx` files over HTTP exactly as `index.html` does. On GitHub Pages it is at `https://charleschow2045.github.io/english-ops/tests/run.html`. The page runs everything on load and shows each check as pass/fail, with the expected and actual values for any failure.

No install, no Node. It loads the real `src/storage.jsx`, `mistakes.jsx`, `util.jsx` and the Grammar content, and calls the same functions the app does (`window.App.Storage`, `window.App.GrammarLevels`, ...); nothing is copied.

## What is tested

1. **Daily missions** — `pickMissions` over 20,000 days: always 3 distinct missions, one from each of groups A/B/C, never the same module two days running, each module at least every 7 days, all 16 A/C pairings and 48 triples occur.
2. **Streak and freezes** — `markModuleComplete`: next day +1; one missed day uses 1 freeze; two missed days with one freeze restarts at 1 and keeps the freeze; two freezes cover two days; five missed days restart; a freeze is earned at day 7 (never above 2); non-mission modules do not complete the day; finishing the same day twice and a device date that goes backwards do not count again.
3. **Streak display** — `getStreakView` returns `none`, `doneToday`, `pending`, `saved` and `broken` correctly and never changes saved data.
4. **Older saves** — a save with no `missions` field (or a malformed one, or from an earlier day) gets today's 3 missions from `ensureToday`; an old backup file imports the same way.
5. **Backup and restore** — `buildBackup` then `parseBackup` keeps streak, freezes, statistics, tier, Grammar levels, mistakes notebook and today's checklist exactly; broken JSON, other apps' files, newer versions, invalid dates, bad shapes and files over 2 MB are refused; `parseBackup` never throws.
6. **Grammar levels** — `GrammarLevels.progress` totals are 76 for easy/medium/hard and 77 for expert, and the visible levels of the 11 paths add up to the same totals; done keys for hidden or unknown levels are ignored; level numbers are continuous. If you add or remove Grammar levels, update these two numbers on purpose.
7. **Safety** — the page is in test mode on `englishOps:test`, and nothing tried to write the real key.

## Why the URL needs `?today=2026-10-14`

`?today=` is the app's test-mode switch: the app then reads and writes only the separate key `englishOps:test` and pretends today is that date. That keeps the real progress key `englishOps:v1` untouched (on the live site it holds the child's real progress) and makes the date-dependent checks repeatable. The page enforces this itself: if the URL does not carry exactly `?today=2026-10-14` it redirects there before any app code loads, and it refuses and records any write to `englishOps:v1`. The only storage the tests use is one save/load round trip on the test key, which puts back whatever was there before.
