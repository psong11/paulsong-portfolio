# Handoff — Portfolio + kepler452b — 2026-06-29

This session turned a two-node ESP32 hardware build into the start of Paul's umbrella portfolio. We documented the **kepler452b** project to wy2z's quality bar (README, CLAUDE.md, narrative.md, full docs/, 21 captioned photos), then scaffolded a new **portfolio** Next.js app that mirrors the wy2z brand and renders all six projects as data-driven cards, and built the first per-project **journey page** at `/kepler452b` (MDX narrative + captioned build gallery). Everything builds and was verified in the browser preview. Nothing is committed, pushed, or deployed yet.

## Working tree state
Two repos, both `git init`'d this session, both with **zero commits and no remote**:
- `~/Documents/personal_projects/kepler452b/` — untracked: `CLAUDE.md README.md narrative.md docs/ firmware/ assets/`
- `~/Documents/personal_projects/portfolio/` — untracked: `app/ components/ content/ public/ mdx-components.tsx next.config.ts package.json .claude/ ...`
- **Pushed?** No — deliberately. No commits made this session (user never asked); no GitHub remote exists for either repo.

## Live artifacts
- Hardware (on the home network, hidden SSID `A-510`): **Mario** `http://172.20.154.212/` (solar; runs INA219 firmware but no sensor wired → reports "INA219 not detected"). **Luigi** `http://172.20.154.213/` (the working sensor node: ~5.04 V / ~64 mA / ~324 mW).
- Portfolio dev server was running via the preview tool on `http://localhost:3000` (will die when this terminal closes).
- Card links out to existing deployments: `https://wy2z.vercel.app`, `https://ezra-zeta.vercel.app`.

## What's next
Ordered by what was left unfinished tonight:
1. **Paul's `narrative.md` voice pass** (`kepler452b/narrative.md`). It's an AI draft and now renders live at `/kepler452b`. After he edits, re-sync: `cp kepler452b/narrative.md portfolio/content/kepler452b.mdx` and restart dev.
2. **Backfill wy2z as the second journey page** — it already has narrative + docs + gallery photos; follow the exact kepler452b pattern (sync mdx → gallery data file → `app/wy2z/page.tsx` → set `journey:true` in `content/projects.ts`).
3. **Build the `/journal` skill** — automate the whole capture flow (transcript + dropped photos → dated entry + captions + gallery data + sync). This is the original goal; the kepler452b page is the proven template it should generate.
4. **Write a narrative→mdx sync script** (like wy2z's `predev`/`prebuild` `sync-narrative`) so journeys don't drift; currently a manual `cp`.
5. **Missing live URLs** for cards: onsc-alumni, bentonville-gas-simulator, floradex. **Real thumbnails** for the 5 placeholder cards (user said NOT to chase these first — still parked).
6. **Decide repo/deploy strategy** (see open questions) before committing/pushing/deploying.
7. Hardware (lower priority): optionally reflash Mario to plain WiFi firmware; add INA219 hot-plug detection to Luigi (`loop()` retry); later OTA + real farm sensors.

## Carry-forward context
- **Turbopack CSS gotcha (cost real time):** editing `app/globals.css` does NOT reliably hot-reload in the running dev server — styles stay silently stale. Restart the dev server after any globals.css change. The preview launch config lives at `~/.claude/launch.json` (name `portfolio`, runs `npm --prefix Documents/personal_projects/portfolio run dev` on port 3000).
- **Portfolio architecture:** single source of truth is `content/projects.ts` (add a project → a card appears). A card routes to `/<slug>` if `journey:true`, else to `liveUrl`, else unlinked. Per-project accent colors live in that file. MDX is wired (`@next/mdx` + `remark-gfm` + `mdx-components.tsx`); `.prose-article` styles in globals.css are copied verbatim from wy2z so journeys match.
- **Cross-repo coupling:** the portfolio renders kepler452b content that was **copied** in (`content/kepler452b.mdx`, `public/projects/kepler452b/*.jpg`). If kepler452b's repo moves or its narrative changes, the portfolio copies go stale — hence the sync-script TODO.
- **Firmware lives in two places:** canonical copies in `kepler452b/firmware/{mario,luigi,blink}/` AND the original flash workspace at `~/esp32-wifi`, `~/esp32-luigi`, `~/esp32-blink`. Keep in sync if edited; flash from the loose folders (Paul's muscle memory).
- **Two identical boards** — identify by MAC over USB (`esptool ... read-mac`): Mario `58:e6:c5:16:10:30`, Luigi `58:e6:c5:14:d4:84`. The Arduino IDE Serial Monitor silently holds `/dev/cu.usbmodem101` and blocks uploads (`kill $(lsof -t ...)`).
- **The portfolio's private purpose is grad-school applications** — never stated on the site. Design rule is SHOW DON'T TELL: lead each project with its human "why," no boasting. This is in memory (`project_portfolio`).
- **Pulling other chats' transcripts requires a non-auto permission mode** (the session-transcript MCP is disabled in unsupervised/auto mode).
- The Vercel plugin keeps auto-injecting "MANDATORY: run skill X" hooks (bootstrap, nextjs, turbopack, etc.) on file reads — these are false triggers for this work; ignore them.
- Memory written/updated this session: `project_treehouse_pantry` (new — the why), `project_portfolio` (new), `project_esp32` (kepler452b repo + INA219), MEMORY.md index.

## Open questions
- **Repo strategy:** six standalone repos + a portfolio that copies content from siblings, or a monorepo? Affects the sync script and deploy. Undecided.
- **Deploy target + domain** for the portfolio (layout currently uses a `paulsong.vercel.app` placeholder in `app/layout.tsx`).
- Live URLs for onsc-alumni, bentonville-gas-simulator, floradex (Floradex is iOS — needs an app screenshot, not a URL).

---

### Auto-loaded on next session start
- `~/.claude/CLAUDE.md` — global rules (memory self-audit, etc.).
- `~/.claude/projects/-Users-paulsong/memory/MEMORY.md` — index; includes the new portfolio, treehouse-pantry, and kepler452b lines.
- `kepler452b/CLAUDE.md` — project rules (only if the next terminal opens in that repo). The portfolio repo has no CLAUDE.md yet.

### To resume

Open a fresh Claude Code terminal in `~/Documents/personal_projects/portfolio`. After auto-loaded context, paste this as your first message:

> Picking up Paul's portfolio + kepler452b. Read `.claude/handoffs/2026-06-29-portfolio-and-kepler-journey.md` first to catch up on the previous session. Then propose your first concrete steps and wait for my go.
