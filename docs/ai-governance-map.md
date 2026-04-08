# AI governance: Cursor ↔ Claude Code

This repository keeps **parallel copies** of project rules and skills so both **Cursor** (`.cursor/`) and **Claude Code** (`.claude/` + `CLAUDE.md`) stay aligned. Content should stay in sync; update **both sides** in the same commit when you change governance text.

## Project-wide rules

| Topic | Cursor | Claude Code |
|--------|--------|-------------|
| Template purpose, stack baseline, working rules, “do not”, derived-project checklist | `.cursor/rules/project.mdc` (always applied) | `CLAUDE.md` (repository root) |
| Git branch protection, push/merge policy, commit workflow | `.cursor/rules/git-workflow.mdc` (always applied) | `.claude/git-workflow.md` |

## Git conventions (branch names, commits, PR body)

| Cursor | Claude Code |
|--------|-------------|
| `.cursor/skills/git-conventions/SKILL.md` | `.claude/git-conventions.md` |

## Stack skills (best practices + examples)

Skills live under the same folder names in both trees. Prefer editing **both** copies together.

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

- Stack skills may mention `.cursor/rules/*` for repo governance. The **equivalent** files are listed in the tables above (use `.claude/git-workflow.md` and `CLAUDE.md` on the Claude side).

## When you change governance

1. Edit the canonical intent once, then mirror the wording to the paired file(s).
2. If you add a new skill or rule file, add a row to this document in the same PR.
3. Update `README.md` when user-visible behavior, documented stack versions, CI commands, or repo layout changes — and keep version claims aligned with `package.json` (do not edit README for governance-only wording tweaks).

## README and stack versions

Documented framework and tooling versions in `README.md` should match `package.json` (and typical lockfile resolution). After changing dependencies or `engines`, update the Tech Stack and related tables in the same change.
