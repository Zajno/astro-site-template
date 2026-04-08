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

Each skill folder typically contains `SKILL.md` and `examples.md`.

## Cross-references inside skills

- Stack skills may mention `.cursor/rules/*` for repo governance. The **equivalent** files are listed in the tables above (use `.claude/git-workflow.md` and `CLAUDE.md` on the Claude side).

## When you change governance

1. Edit the canonical intent once, then mirror the wording to the paired file(s).
2. If you add a new skill or rule file, add a row to this document in the same PR.
