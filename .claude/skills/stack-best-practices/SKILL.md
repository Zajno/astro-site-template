---
name: stack-best-practices
description: "Entry point skill for this template stack. Routes tasks to focused skills: Astro, React islands, TypeScript, and SCSS."
---

Mirror note: keep Cursor and Claude stack-best-practices files synchronized in the same commit.

# Stack Best Practices Index

Template baseline: Astro 6, TypeScript 6, React 19 via `@astrojs/react`, SCSS, Vite.

This skill is intentionally thin. It delegates to focused stack skills to avoid rule duplication.

## Context7-First Rule (CRITICAL)

When the task involves framework/library APIs or configuration:

- Always resolve docs with Context7 first (`resolve-library-id` -> `query-docs`)
- Prefer official docs IDs (Astro, React, TypeScript, ESLint, Vite, Husky)
- Use version-aware docs when available (for this template: Astro 6, TS 6, React 19)
- Do not rely on memory for version-sensitive behavior

## Skill Routing

- For Astro architecture, routing, hydration directives, and content collections:
  - use `../astro-best-practices/SKILL.md`
- For React component/hook patterns inside Astro islands:
  - use `../react-islands-best-practices/SKILL.md`
- For typing, contracts, module boundaries, alias usage:
  - use `../typescript-best-practices/SKILL.md`
- For SCSS structure, selector scope, and style maintainability:
  - use `../scss-best-practices/SKILL.md`

## Usage Pattern

- Activate one focused skill for narrow tasks.
- Activate multiple focused skills for cross-cutting refactors.
- Keep this file as the shared entry point to preserve discoverability.

## What Not To Put Here

- Do not duplicate detailed framework rules from focused skills.
- Do not duplicate repo governance from `.cursor/rules/*`.
