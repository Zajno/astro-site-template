# Astro Site Template - Claude Instructions

This file defines project-wide instructions for Claude Code in this repository.

## Purpose

This repository is a starter template. Keep decisions generic, reusable, and safe for future projects built from this base.

## Tech Stack (Template Baseline)

- Astro 6 + TypeScript
- Vite build pipeline
- React islands via `@astrojs/react`
- SCSS/SASS styling
- ESLint for static analysis
- Yarn (v1 lockfile workflow)

## Working Rules

- Prefer extending existing template patterns over introducing one-off architecture.
- Keep folder aliases and import style consistent with current config.
- Preserve build and type-check health after each substantive change.
- Avoid project-specific hardcoding (URLs, secrets, customer names, environment assumptions).
- Document meaningful template-level decisions in `README.md` when behavior changes.
- Git branching, commit, and push policy is defined in `.claude/git-workflow.md`.
- Git branch naming and commit naming conventions are defined in `.claude/git-conventions.md`.

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
