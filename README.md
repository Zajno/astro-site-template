# Astro Site Template

**v3.0** — A production-ready static website template by [Zajno](https://zajno.com), built on Astro 6 with GSAP, Lenis, Lottie, i18n, and Firebase Hosting support.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro 6](https://astro.build) |
| Language | TypeScript 6 |
| Styling | SASS/SCSS |
| Animation | [GSAP (Shockingly Green)](https://greensock.com/gsap/) + [Lenis](https://lenis.darkroom.engineering/) (smooth scroll) |
| Lottie | [lottie-web](https://github.com/airbnb/lottie-web) |
| React | React 19 + React Router DOM (available, not wired as Astro integration by default) |
| Utilities | [split-type](https://github.com/lukePeavey/SplitType), [detect-browser](https://github.com/DamonOehlman/detect-browser) |
| Deployment | Firebase Hosting (staging + production targets) |
| Package manager | Yarn |
| Node | `>=22.12.0` (see `package.json` `engines`) |

---

## Project Structure

```
/
├── config/                   # Build-time environment config (hostname, logger, version)
│   ├── index.ts              #   Environment presets (development / staging / production)
│   ├── utils.ts              #   Injects PUBLIC_* env vars at build time
│   └── version.ts            #   Full version string helper
│
├── docs/                     # Governance map, security report template; `plans/` for `*-design.md` / `*-plan.md` (optional)
│
├── public/                   # Static assets served as-is
│   ├── desktop/
│   ├── mobile/
│   └── tablet/
│
├── data/                     # Page metadata, routes, and i18n copy
│   ├── pages.ts              #   Route definitions and SEO metadata per page
│   ├── types.ts              #   SitePage type
│   └── copyright/            #   Per-locale copy (home, about, header, footer, …)
│
├── src/
│   ├── assets/               # Compiled assets (favicon, images)
│   ├── components/
│   │   ├── common/           # Shared UI: header, footer, mobile menu, preloader, lazy picture
│   │   └── sections/         # Page sections: home/hero, home/second, about/hero, 404, not-supported, no-script
│   ├── layouts/              # Page layout wrappers: page.astro, section.astro, meta.astro, fonts.astro
│   ├── pages/                # Astro routes: index, about, 404, not-supported, no-script + [lang]/ i18n variants
│   ├── scripts/              # Client-side TypeScript
│   │   ├── index.ts          #   App entry point
│   │   ├── core/             #   Base Component + Section classes
│   │   ├── lib/gsap/         #   GSAP helpers and presets
│   │   ├── modules/          #   Feature modules (scroll, lenis, forms, lottie, video, tabs, modal, …)
│   │   └── utils/            #   Config, breakpoints, logger, app-ready signal
│   └── styles/               # Global SASS: base, variables, typography, reset, utilities
│
├── astro.config.ts           # Astro + Vite config (sitemap, webmanifest, asset routing)
├── firebase.json             # Firebase Hosting targets (web-stage / web-prod)
├── tsconfig.json             # TypeScript config with path aliases
└── eslint.config.js          # ESLint flat config (@zajno/eslint-config)
```

### AI assistant rules (Cursor & Claude Code)

Agent/skill governance is Claude-first: canonical files live in `.claude/agents/` and `.claude/skills/`; Cursor uses symlinks at `.cursor/agents` and `.cursor/skills`. Project rule counterparts remain `.cursor/rules/project.mdc` and `CLAUDE.md`. See [docs/ai-governance-map.md](docs/ai-governance-map.md) for full mapping.

Maintenance checklist for governance sync: [docs/ai-governance-map.md#sync-maintenance-playbook](docs/ai-governance-map.md#sync-maintenance-playbook).

Implementation agent profile: `.claude/agents/implementor.md` (Cursor path: `.cursor/agents/implementor.md`).
Implementation planning agent profile: `.claude/agents/implementation-planner.md` (Cursor path: `.cursor/agents/implementation-planner.md`).
Plan verification agent profile: `.claude/agents/plan-verifier.md` (Cursor path: `.cursor/agents/plan-verifier.md`).
Requirements planning agent profile: `.claude/agents/requirements-planner.md` (Cursor path: `.cursor/agents/requirements-planner.md`).
Security review agent profile: `.claude/agents/security-reviewer.md` (Cursor path: `.cursor/agents/security-reviewer.md`).
Refactoring planning agent profile: `.claude/agents/refactoring-planner.md` (Cursor path: `.cursor/agents/refactoring-planner.md`).
Setup verification agent profile: `.claude/agents/verify-setup.md` (Cursor path: `.cursor/agents/verify-setup.md`).

Implementor usage (example): `Work as implementor using .cursor/agents/implementor.md. Task: <your task>. Files: <paths>. Follow docs/plans if present; always read stack-best-practices + git-conventions; include mandatory Step 2 skill receipt in your response before first edit; run self-review and checks after changes.`
Implementation planner usage (example): `Work as implementation-planner using .cursor/agents/implementation-planner.md. Task: <your task>. Produce docs/plans/YYYY-MM-DD-<topic>-plan.md with goal/scope, ordered tasks, risks, validation checklist, and rollback plan before coding starts.`
Plan verifier usage (example): `Work as plan-verifier using .cursor/agents/plan-verifier.md. Plan: <paste plan>. Optional PRD: <paste PRD>. Verify PRD->Plan coverage (if PRD provided), then Plan->Code completion; return coverage/completion tables, gaps, and verdict.`
Requirements planner usage (example): `Work as requirements-planner using .cursor/agents/requirements-planner.md. We are starting a new feature. Ask questions category by category first (data, layout, interactions, states, feedback, edge cases), summarize, confirm, then write the final requirements doc.`
Security reviewer usage (example): `Work as security-reviewer using .cursor/agents/security-reviewer.md. Review changed files for exploitable security issues only; trace attacker-controlled input to sensitive sinks; report findings by severity with evidence, remediation, and confidence.`
Refactoring planner usage (example): `Work as refactoring-planner using .cursor/agents/refactoring-planner.md. Analyze current behavior and dependencies first, ask scope/safety/testing/parallelism questions category by category, build a risk matrix, confirm understanding, then write docs/plans/YYYY-MM-DD-refactor-<name>.md with baby-step tasks and rollback plan.`
Verify setup usage (example): `Work as verify-setup using .cursor/agents/verify-setup.md. Validate parity and references across .cursor/.claude agents and skills, governance map entries, and README/rules mentions; report PASS/FAIL with concrete file paths.`

Stack, security, and workflow skills (e.g. `security-best-practices`, `brainstorming`, `writing-plans`, `section-delivery`) are canonical under `.claude/skills/` and available in Cursor via `.cursor/skills/` symlink paths. Design docs (`*-design.md`) and implementation plans (`*-plan.md`) from those workflows live in `docs/plans/` by convention.

When you bump dependencies or `engines` in `package.json`, update the **Tech Stack** section (and any related commands) in the same change so this file stays aligned — see [docs/ai-governance-map.md](docs/ai-governance-map.md#readme-and-stack-versions).

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/about` | About page |
| `/404` | Not found |
| `/not-supported` | Unsupported browser fallback |
| `/no-script` | JavaScript disabled fallback |
| `/[lang]/` | i18n variants (e.g. `/ja/`) |
| `/[lang]/about` | i18n about page variant |

---

## Commands

All commands are run from the project root:

| Command | Description |
|---------|-------------|
| `yarn dev` | Start dev server at `http://localhost:8080` |
| `yarn dev:ts` | Run TypeScript type checking in watch mode |
| `yarn verify` | Run lint + type-check + production build checks |
| `yarn build` | Type-check + build for the current `APP_ENV` |
| `yarn build:prod` | Build with `NODE_ENV=production` |
| `yarn build:release:staging` | Install deps and build for staging |
| `yarn build:release:production` | Install deps and build for production |
| `yarn preview` | Preview the production build locally |
| `yarn lint` | Run ESLint on `src/**` |
| `yarn audit:deps` | Run `yarn audit` on the lockfile (dependency vulnerabilities) |
| `yarn emulate` | Run Firebase Hosting emulator at port `8010` |

### Security hygiene

- Run `yarn audit:deps` before releases and address high/critical findings (or document accepted risk with upgrades/`resolutions`).
- For structured manual or agent-assisted reviews, use [docs/security-review-report-template.md](docs/security-review-report-template.md).
- Detailed guidance lives in `.cursor/skills/security-best-practices/` (mirrored under `.claude/skills/`).

---

## CI Baseline Checks

This template includes `.github/workflows/quality-checks.yml` for baseline repository checks on every pull request and on pushes to `main` and `staging`.

The workflow runs:

- `yarn lint`
- `yarn build:ts`
- `yarn build`
- `yarn audit:deps` (non-blocking while the baseline may have known advisories; tighten or fix findings in derived projects)

For forks created from this template, these checks are transferred automatically with the repository.

---

## Local Git Hooks (Husky)

This template uses Husky to enforce local checks before push.

- Hook: `.husky/pre-push`
- Command: `yarn lint && yarn build:ts`

If needed, install/update hooks with:

```bash
yarn prepare
```

---

## Environment Variables

### Build-time (set via `APP_ENV` or `.env`)

| Variable | Description | Default |
|----------|-------------|---------|
| `APP_ENV` | Target environment: `development` \| `staging` \| `production` | `development` |
| `APP_HASH` | Git commit hash override (auto-detected from git if omitted) | — |

### Injected for the client build (from `config/utils.ts`)

| Variable | Description |
|----------|-------------|
| `PUBLIC_APP_ENV` | Active environment name |
| `PUBLIC_FULL_VERSION` | `name@version+hash` string |
| `PUBLIC_ENABLE_LOGGER` | Whether console logger is active |
| `PUBLIC_APP_URL` | Site hostname for the active environment |

### Optional runtime env vars

| Variable | Description |
|----------|-------------|
| `PUBLIC_SUPABASE_URL` | Supabase project URL (used in `src/scripts/utils/config.ts`) |
| `PUBLIC_SUPABASE_KEY` | Supabase anon key |

Create a `.env` file in the project root (it is gitignored):

```bash
APP_ENV=development
# Optional
PUBLIC_SUPABASE_URL=https://xxx.supabase.co
PUBLIC_SUPABASE_KEY=your_anon_key
```

---

## Environment Hostnames

Configured in `config/index.ts`:

| `APP_ENV` | Hostname |
|-----------|---------|
| `development` | `http://localhost:8080` |
| `staging` | `https://zajno-dev.web.app/` |
| `production` | `https://zajno.com/` |

Update these values for your own project.

---

## GSAP Setup

GSAP is now fully free and publicly available on npm — no license, private registry, or auth token required.

```bash
yarn add gsap
```

---

## i18n

The template supports locale-prefixed routes via Astro's file-based routing under `src/pages/[lang]/`. Locale definitions live in `data/copyright/` and are consumed by the sitemap integration in `astro.config.ts`.

Default locale: `en` (served at `/`).
Example additional locale: `ja` (served at `/ja/`).

Add new locales by extending `data/copyright/index.ts` and creating corresponding `src/pages/[lang]/` page files.

---

## Deployment (Firebase Hosting)

Two hosting targets are configured in `firebase.json`:

| Target | Environment |
|--------|-------------|
| `web-stage` | Staging |
| `web-prod` | Production |

Both serve from the `dist/` directory with clean URLs enabled.

**Deploy flow:**

```bash
# Build for staging and deploy
yarn build:release:staging
firebase deploy --only hosting:web-stage

# Build for production and deploy
yarn build:release:production
firebase deploy --only hosting:web-prod
```

To test locally with Firebase:

```bash
yarn emulate   # starts Firebase Hosting emulator at http://localhost:8010
```

---

## Path Aliases (TypeScript)

Defined in `tsconfig.json`:

| Alias | Resolves to |
|-------|-------------|
| `styles/*` | `src/styles/*` |
| `layouts/*` | `src/layouts/*` |
| `pages/*` | `src/pages/*` |
| `assets/*` | `src/assets/*` |
| `scripts/*` | `src/scripts/*` |
| `components/*` | `src/components/*` |
| `sections/*` | `src/components/sections/*` |
| `data/*` | `data/*` |
| `copyright/*` | `data/copyright/*` |

---

## Asset Output Structure (Vite/Rollup)

The build organises compiled assets predictably under `dist/`:

```
dist/
├── css/           fonts, stylesheets
├── js/            scripts
└── assets/
    ├── img/       raster images (png, jpg, webp, gif)
    ├── fonts/     web fonts (woff, woff2, ttf, …)
    ├── video/     video files (mp4, webm, mov, …)
    ├── audio/     audio files (mp3, wav)
    ├── glb/       3D models (glb, gltf)
    └── lottie/    Lottie JSON + image sequences
```

---

## Adding a New Page

1. Create a new entry in `data/pages.ts` (route, title, description).
2. Add copy data to `data/copyright/` if needed.
3. Create `src/pages/your-page.astro` using the `page.astro` layout.
4. Add corresponding section components under `src/components/sections/your-page/`.

---

## Links

- [Astro documentation](https://docs.astro.build)
- [GSAP documentation](https://gsap.com/docs/v3/)
- [Lenis documentation](https://lenis.darkroom.engineering/)
- [Firebase Hosting documentation](https://firebase.google.com/docs/hosting)
- [Zajno](https://zajno.com)
