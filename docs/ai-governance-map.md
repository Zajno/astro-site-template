# AI governance: Cursor ↔ Claude Code

This repository uses **Claude-first canonical governance** for skills and agents.

- Canonical source: `.claude/skills/` and `.claude/agents/`
- Cursor access paths are symlinks:
  - `.cursor/skills` -> `../.claude/skills`
  - `.cursor/agents` -> `../.claude/agents`

Project-level rule files remain explicit counterparts: `.cursor/rules/project.mdc` and `CLAUDE.md`.

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

Each skill folder typically contains `SKILL.md` and `examples.md`.

## Cross-references inside skills

- Skills may reference `.cursor/rules/*` for repo governance. Treat these as paired project-level rule files and use the mapped Claude counterparts from this document (primarily `.claude/git-workflow.md` and `CLAUDE.md`).

## When you change governance

1. For skills and agents, edit only canonical files under `.claude/`.
2. Keep `.cursor/skills` and `.cursor/agents` as symlinks to `.claude`.
3. For project-level rule counterparts (`.cursor/rules/project.mdc` and `CLAUDE.md`), update both when intent changes.
4. If you add a new skill/agent/rule file, add a row to this document in the same PR.
5. Update `README.md` when user-visible behavior, documented stack versions, CI commands, or repo layout changes — and keep version claims aligned with `package.json` (do not edit README for governance-only wording tweaks).

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
3. Confirm changed governance docs reflect the same intent across Cursor and Claude surfaces.

## README and stack versions

Documented framework and tooling versions in `README.md` should match `package.json` (and typical lockfile resolution). After changing dependencies or `engines`, update the Tech Stack and related tables in the same change.
