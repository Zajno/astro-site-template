# Git Workflow

**Cursor equivalent:** `.cursor/rules/git-workflow.mdc` — keep both in sync. This file pair is an intentionally mirrored always-on git policy surface for Claude/Cursor. Ownership details live in [docs/ai-governance-map.md](../docs/ai-governance-map.md).

## Check branch before starting ANY work

Before touching any file, the agent MUST check the current branch with `git branch --show-current`.

**If the current branch is `main` or `staging`:**

1. STOP immediately — do not make any changes yet
2. Ask the user:
   - Propose a new branch name based on the task (e.g. `feat/add-auth`, `fix/header-scroll`, `docs/update-readme`)
   - List existing non-protected branches as alternatives to switch to
   - Wait for explicit confirmation before proceeding

Only after the user confirms the branch — create or switch to it, then begin work.

**If already on a feature branch** (anything other than `main` / `staging`): proceed normally.

## Never commit or push to `main` / `staging` without explicit user request

- **NEVER** commit directly on `main` or `staging`
- **NEVER** run `git push origin main` or `git push origin staging` unless the user explicitly says to push
- **NEVER** merge into `main` or `staging` unless the user explicitly says to merge

## Verify checks before pushing

Before running `git push`, check whether verification was done in this session:

- lint: `yarn lint`
- build/type: `yarn build` or `yarn build:ts`

If checks were not done — warn the user and suggest running them first:

> ⚠️ Lint/build checks were not verified in this session. Recommend running `yarn lint` and `yarn build:ts` before pushing. Run them now?

Only skip this warning if the user explicitly says to push without checking.

## Keep long-lived branches synchronized

Never perform branch sync automatically.

Before branch sync, ask whether the user wants to sync now.

Run sync only after explicit confirmation.

Use a non-destructive sync flow (e.g., merge `main` into branch) unless the user explicitly requests rebase.

## Merge strategy

When merging feature branches into `main` or `staging`, prefer `--no-ff` to preserve merge context unless the user explicitly requests another strategy.

## Branch cleanup after merge

Never perform branch cleanup automatically.

Before cleanup, ask whether the user wants local cleanup, remote cleanup, or both.

Run cleanup only after explicit confirmation.

- Delete local branch with `git branch -d <branch>`.
- Delete remote branch if it exists and the user requested remote cleanup.

## NEVER commit without an explicit request

After making file changes — STOP. Do not run `git add` or `git commit`.

Just report what was changed and wait. The user will say "commit" when ready.

**Finishing a task ≠ committing.** These are two separate steps.

When the user does ask to commit:

- Use a concise commit message in English
- Never amend pushed commits

PR formatting conventions are defined in `.claude/skills/git-conventions/SKILL.md`.
