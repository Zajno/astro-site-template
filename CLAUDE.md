# Astro Site Template - Claude Instructions

This file defines project-wide instructions for Claude Code in this repository.

**Cursor equivalent:** `.cursor/rules/project.mdc` — keep both in sync for project-level rules. Skills and agents are canonical in `.claude/` and exposed in Cursor via symlinks (`.cursor/skills` -> `../.claude/skills`, `.cursor/agents` -> `../.claude/agents`). Full mapping: [docs/ai-governance-map.md](docs/ai-governance-map.md).

## Purpose

This repository is a starter template. Keep decisions generic, reusable, and safe for future projects built from this base.

## Tech Stack (Template Baseline)

- Astro 6 + TypeScript 6
- Vite build pipeline
- React islands via `@astrojs/react`
- SCSS/SASS styling
- ESLint for static analysis
- Yarn (v1 lockfile workflow)

## Working Rules

- Prefer extending existing template patterns over introducing one-off architecture.
- Keep folder aliases and import style consistent with current config.
- Preserve build and type-check health after each substantive change.
- Avoid project-specific hardcoding (customer names, environment assumptions, deploy-specific literals); prefer config modules and environment-driven values instead of one-off literals in source.
- Document meaningful template-level decisions in `README.md` when behavior changes.
- Git branching, commit, and push policy is defined in `.claude/git-workflow.md`.
- Git branch naming and commit naming conventions are defined in `.claude/skills/git-conventions/SKILL.md`.
- Implementation agent profile: `.claude/agents/implementor.md`.
- Plan verification agent profile: `.claude/agents/plan-verifier.md`.
- Requirements planning agent profile: `.claude/agents/requirements-planner.md`.
- Security review agent profile: `.claude/agents/security-reviewer.md`.
- Refactoring planning agent profile: `.claude/agents/refactoring-planner.md`.
- Setup verification agent profile: `.claude/agents/verify-setup.md`.

## Do Not

- Mix UI markup, data access, and imperative browser logic in one file; keep responsibilities separated by layer.
- Use `require()`; use ES module `import`/`export` only.
- Put heavy business logic in page entry files (`src/pages/*`); keep entry points thin and move logic to modules/components.
- Hardcode secrets or environment-specific URLs; use `.env` and typed config helpers.

## Security baseline (template)

Non-negotiable summary for always-on context; expanded checklists, CSP detail, and review prompts live in skill `security-best-practices` and [docs/security-review-report-template.md](docs/security-review-report-template.md).

- Avoid XSS: do not treat untrusted strings as HTML without sanitization; be deliberate with `dangerouslySetInnerHTML`, Astro `set:html`, and rich text from CMS or users.
- Client exposure: only `PUBLIC_*` env values are intentionally visible in the browser; keep private tokens server-side and follow **Do Not** plus typed config (details in skill `security-best-practices`).
- When the derived project controls hosting, plan CSP and related headers as part of hardening (see skill `security-best-practices`).
- Run `yarn audit:deps` for release hygiene; use [docs/security-review-report-template.md](docs/security-review-report-template.md) for structured security reviews.

## Rules for Derived Projects

- If this template is used as a base for a new project, review this file first.
- When the new project has different constraints (stack, tooling, workflow, naming, quality gates), update these rules accordingly.
- If an instruction from this file conflicts with real project requirements, treat this file as needing update rather than forcing outdated guidance.
- Keep this file as the source of truth for project-wide Claude behavior.

## Update Checklist (Derived Projects)

Update this file immediately when any of these change:

- package manager or lockfile policy (`yarn` to `pnpm` or `npm`, frozen lockfile requirements)
- CI/CD quality gates (required checks, lint/type/build/test thresholds)
- branching and release workflow (GitFlow, trunk-based, PR and merge strategy)
- stack-level decisions (framework version policy, routing/rendering approach, styling system)
- code standards and conventions (naming, module boundaries, alias strategy, folder structure)
- environment and deployment constraints (runtime version, hosting platform, secrets policy)
- security baseline and dependency audit policy (skills, `audit:deps`, report template)
