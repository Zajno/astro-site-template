---
name: writing-plans
description: "Use when you have an approved design or feature spec and need a step-by-step implementation plan. Activates after brainstorming/design approval. Breaks work into small, verifiable tasks."
---

Mirror note: keep Cursor and Claude writing-plans files synchronized in the same commit.

Adapted for this Astro template from common “implementation plan” patterns ([example reference](https://github.com/burnjohn/quick-blog/blob/main/.claude/skills/writing-plans/SKILL.md)).

# Writing Implementation Plans

Create detailed, step-by-step implementation plans from approved designs or feature specs.

## When This Activates

- After a design is approved (see `../brainstorming/SKILL.md`) and before touching application code for the feature.
- When the user says “plan this”, “break into tasks”, or “implementation steps”.
- When work spans multiple files — a plan reduces drift and skipped verification.

## Design vs plan files

- **Design (what/why):** `docs/plans/YYYY-MM-DD-<topic>-design.md`
- **Implementation plan (how, ordered tasks):** `docs/plans/YYYY-MM-DD-<topic>-plan.md`

Use a matching `<topic>` so pairs are easy to find. Do not overwrite the design doc with the plan.

**Relationship to brainstorming:** [Brainstorming](../brainstorming/SKILL.md) requires user agreement before implementation; that agreement can be minimal. This plan file is optional when scope is a single small change — capture steps inline or skip a formal plan if the approved design is enough.

## Core Principles

1. **Audience:** Write for a careful implementer with **little implicit context**. Name paths, patterns, and entry points explicitly.
2. **Task size:** Prefer tasks that are **small and completable in one sitting**; if a step mixes many files or concerns, split it.
3. **Verifiable:** Every task has a **verification** subsection — how do you know it is done?
4. **Sequential:** Order tasks so each builds on the previous. **No forward dependencies** (task 5 must not be required before task 3).
5. **Complete:** Prefer concrete file paths and checklist items over vague “implement the feature”.

## Plan Structure

Write the plan to `docs/plans/YYYY-MM-DD-<name>-plan.md`:

```markdown
# Implementation Plan: <Feature Name>

## Goal
<1-2 sentence summary of what we're building>

## Source design
Link or path: `docs/plans/YYYY-MM-DD-<name>-design.md`

## Architecture Overview
<Brief description of how the pieces fit together in this repo (layouts, sections, data, scripts)>

### Files to Create
- `path/to/new/file` — purpose

### Files to Modify
- `path/to/existing/file` — what changes

---

## Tasks

### Task 1: <Short descriptive title>

**Files:** `path/to/file` (and others if needed)

**What to do:**
1. Step-by-step instructions
2. Reference existing patterns in this codebase (name an example file)

**Verification:**
- [ ] How to verify this task is complete
- [ ] e.g. `yarn lint`, `yarn build:ts`, or manual check

---

### Task 2: ...
```

## Task Writing Rules

### Be explicit

- Include the exact path under `src/`, `data/`, or `config/` as this template uses.
- Point to an existing file as a pattern when copying structure (e.g. “follow `src/components/sections/...`”).
- List imports or aliases when non-obvious (`components/*`, `layouts/*`, etc.).

### Be small

Each task should ideally be **one** of:

- Create one file with a clear responsibility.
- Add or change one component, section, or layout.
- Modify one focused area of `src/scripts/` or `data/`.
- Update styles tied to one block or section.

If a change must touch many files, split into **multiple tasks** in dependency order.

### Be verifiable

Use checks that work in this repo:

- `yarn lint`
- `yarn build:ts`
- `yarn dev` — dev server runs (default in this template: see `README.md` for port)
- Visual or manual checks described in plain language

### Typical ordering (this template)

Adjust to the feature; common order:

1. **Data and types** — `data/pages.ts`, `data/copyright/*`, `data/types.ts`, content config if used.
2. **Client logic** — `src/scripts/` modules or utilities when the feature needs behavior.
3. **Components** — `src/components/sections/*` or `src/components/common/*`.
4. **Layouts** — `src/layouts/*` when routing or wrappers change.
5. **Pages** — `src/pages/*` for new routes or composition.
6. **Styles** — scoped SCSS next to sections or under `src/styles/` as per existing patterns.
7. **Config** — `astro.config.ts`, `config/*`, env only when the design requires it.
8. **Final verification** — `yarn verify` or `yarn lint && yarn build:ts && yarn build` before merge.

## Anti-Patterns

- **Vague tasks:** “Implement the feature” is not a task.
- **Giant tasks:** If a task has many unrelated steps, split it.
- **Missing paths:** Always include file paths.
- **No verification:** Every task needs a completion check.
- **Forward references:** Later tasks must not be prerequisites for earlier ones.
- **Mixing design and plan:** Keep `-design.md` for intent; put steps only in `-plan.md`.

## Remember

- Plans are living documents — update them if implementation reveals issues.
- If something is unknown, add an **Open question** in the plan instead of guessing.
- After the plan is written, the implementer should follow `stack-best-practices` and focused skills (Astro, React islands, TypeScript, SCSS, security).
