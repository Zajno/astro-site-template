# AI governance: Cursor ↔ Claude Code

This repository uses **Claude-first canonical governance** for skills and agents.

- Canonical source: `.claude/skills/` and `.claude/agents/`
- Cursor access paths are symlinks:
  - `.cursor/skills` -> `../.claude/skills`
  - `.cursor/agents` -> `../.claude/agents`

Project-level rule files remain explicit counterparts: `.cursor/rules/project.mdc` and `CLAUDE.md`.

## Policy ownership model

Use one primary owner per policy area. Other files may summarize or mirror a policy, but they should not redefine it.

| Policy area | Primary owner | Secondary surfaces | Notes |
|-------------|---------------|--------------------|-------|
| Cross-tool mapping, sync rules, canonical-vs-symlink model | `docs/ai-governance-map.md` | `README.md`, agent/skill headers | This document is the governance hub. |
| Project-wide template rules and guardrails | `CLAUDE.md` <-> `.cursor/rules/project.mdc` | `README.md`, skill references | These are an intentionally paired mirror set because both tools need native always-on rule surfaces. Keep semantics aligned. |
| Git workflow policy | `.claude/git-workflow.md` <-> `.cursor/rules/git-workflow.mdc` | `README.md`, agent references | Also an intentionally paired mirror set. Keep semantics aligned. |
| Section/Figma delivery hard-gates | `.claude/skills/section-delivery/SKILL.md` | `implementor.md`, `plan-verifier.md`, project rule summaries | This skill owns the detailed delivery contract. Other files should only summarize or enforce it. |
| Security baseline and review heuristics | `.claude/skills/security-best-practices/SKILL.md` | `security-reviewer.md`, project rules, `README.md` | Keep deep security guidance in the skill; other surfaces stay brief. |
| Implementation planning workflow | `.claude/agents/implementation-planner.md` | `.claude/skills/writing-plans/SKILL.md` | Agent owns planning workflow and orchestration; skill owns reusable plan-writing conventions and document structure. |
| Human-facing onboarding summary | `README.md` | none | README should explain the model briefly and link here instead of duplicating the full governance playbook. |

## Project-wide rules

| Topic | Cursor | Claude Code |
|--------|--------|-------------|
| Template purpose, stack baseline, working rules, “do not”, derived-project checklist | `.cursor/rules/project.mdc` (always applied) | `CLAUDE.md` (repository root) |
| Git branch protection, push/merge policy, commit workflow | `.cursor/rules/git-workflow.mdc` (always applied) | `.claude/git-workflow.md` |

## Git conventions (branch names, commits, PR body)

| Cursor | Claude Code |
|--------|-------------|
| `.cursor/skills/git-conventions/SKILL.md` (via symlink) | `.claude/skills/git-conventions/SKILL.md` |

## Agent profiles

| Topic | Cursor | Claude Code |
|-------|--------|-------------|
| Implementation agent profile | `.cursor/agents/implementor.md` (symlink path) | `.claude/agents/implementor.md` (canonical) |
| Implementation planning agent profile | `.cursor/agents/implementation-planner.md` (symlink path) | `.claude/agents/implementation-planner.md` (canonical) |
| Plan verification agent profile | `.cursor/agents/plan-verifier.md` (symlink path) | `.claude/agents/plan-verifier.md` (canonical) |
| Requirements planning agent profile | `.cursor/agents/requirements-planner.md` (symlink path) | `.claude/agents/requirements-planner.md` (canonical) |
| Security review agent profile | `.cursor/agents/security-reviewer.md` (symlink path) | `.claude/agents/security-reviewer.md` (canonical) |
| Refactoring planning agent profile | `.cursor/agents/refactoring-planner.md` (symlink path) | `.claude/agents/refactoring-planner.md` (canonical) |
| Setup verification agent profile | `.cursor/agents/verify-setup.md` (symlink path) | `.claude/agents/verify-setup.md` (canonical) |

## Stack skills (best practices + examples)

Skills are canonical in `.claude/skills/`. Cursor uses the same files through symlinks under `.cursor/skills/`.

| Cursor base | Claude Code base |
|-------------|------------------|
| `.cursor/skills/stack-best-practices/` | `.claude/skills/stack-best-practices/` |
| `.cursor/skills/astro-best-practices/` | `.claude/skills/astro-best-practices/` |
| `.cursor/skills/react-islands-best-practices/` | `.claude/skills/react-islands-best-practices/` |
| `.cursor/skills/typescript-best-practices/` | `.claude/skills/typescript-best-practices/` |
| `.cursor/skills/scss-best-practices/` | `.claude/skills/scss-best-practices/` |
| `.cursor/skills/security-best-practices/` | `.claude/skills/security-best-practices/` |
| `.cursor/skills/brainstorming/` | `.claude/skills/brainstorming/` |
| `.cursor/skills/writing-plans/` | `.claude/skills/writing-plans/` |
| `.cursor/skills/section-delivery/` | `.claude/skills/section-delivery/` |

Each skill folder typically contains `SKILL.md` and `examples.md`.

## Cross-references inside skills

- Skills may reference `.cursor/rules/*` for repo governance. Treat these as paired project-level rule files and use the mapped Claude counterparts from this document (primarily `.claude/git-workflow.md` and `CLAUDE.md`).

## When you change governance

1. For skills and agents, edit only canonical files under `.claude/`.
2. Keep `.cursor/skills` and `.cursor/agents` as symlinks to `.claude`.
3. For project-level rule counterparts (`.cursor/rules/project.mdc` and `CLAUDE.md`), update both when intent changes.
4. If you add a new skill/agent/rule file, add a row to this document in the same PR.
5. Update `README.md` when user-visible behavior, documented stack versions, CI commands, repo layout, or top-level governance navigation changes — and keep version claims aligned with `package.json`.

## Behavioral hard-gates (section/Figma delivery)

Detailed section/Figma delivery rules are owned by `.claude/skills/section-delivery/SKILL.md`.

When other files summarize this contract, keep the summary limited to these invariants. If any required value is `no`, status must be `partial` (not done).

1. **SCSS token contract**
   - Typography centralized in `src/styles/common/typography.sass`
   - Colors tokenized in `src/styles/common/variables.colors.sass`
2. **Script wiring decision contract**
   - Explicit `required/optional + reason` is mandatory in final report
3. **Existing section script contract**
   - If target section has `script.ts` (or had one before edits), activation must be preserved in `view.astro` via `<script src="./script.ts"></script>`, or replaced only with explicit migration evidence.
4. **Validation contract**
   - Run `yarn lint` and `yarn build:ts` or report explicit blocker

## Sync maintenance playbook

Use this as the default operational checklist for AI governance changes.

### A) Skills and agents

1. Edit only `.claude/skills/*` and `.claude/agents/*`.
2. Do not create direct duplicates under `.cursor/skills/*` or `.cursor/agents/*`.
3. Run a quick symlink check:
   - `readlink .cursor/skills` should be `../.claude/skills`
   - `readlink .cursor/agents` should be `../.claude/agents`
4. If a new skill/agent is added, register it in this map and README.

### B) Project-level rules (paired files)

Always update both sides when intent changes:
- `.cursor/rules/project.mdc` <-> `CLAUDE.md`
- `.cursor/rules/git-workflow.mdc` <-> `.claude/git-workflow.md`

### C) Canonical validation before commit

1. Run `verify-setup` agent using `.cursor/agents/verify-setup.md`.
2. Confirm no broken paths to agents/skills in README or rule files.
3. Confirm intentionally paired mirrors reflect the same intent across Cursor and Claude surfaces.
4. Confirm summaries still point to the documented owner for each policy area.

## README and stack versions

Documented framework and tooling versions in `README.md` should match `package.json` (and typical lockfile resolution). After changing dependencies or `engines`, update the Tech Stack and related tables in the same change.
