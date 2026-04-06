# Git Workflow

Mirror note: keep Cursor and Claude git-workflow files synchronized in the same commit.

## Check branch before starting any work

Before touching any file, check the current branch with:

`git branch --show-current`

If the current branch is `main` or `staging`:

1. Stop immediately and do not make any changes yet.
2. Propose a new branch name based on the task (for example `feat/add-auth`, `fix/header-scroll`, `docs/update-readme`).
3. List existing non-protected branches as alternatives.
4. Wait for explicit user confirmation before proceeding.

Only after branch confirmation, create or switch branch and begin work.

If already on a feature branch (anything other than `main` or `staging`), proceed normally.

## Never commit or push to main/staging without explicit request

- Never commit directly on `main` or `staging`.
- Never run `git push origin main` or `git push origin staging` unless explicitly requested.
- Never merge into `main` or `staging` unless explicitly requested.

## Verify checks before pushing

Before `git push`, check whether verification was done in this session:

- lint: `yarn lint`
- build/type: `yarn build` or `yarn build:ts`

If checks were not done, warn and ask:

`Lint/build checks were not verified in this session. Recommend running yarn lint and yarn build:ts before pushing. Run them now?`

Skip this warning only if user explicitly asks to push without build verification.

## Keep long-lived branches synchronized

Never perform branch sync automatically.

Before branch sync, ask whether the user wants to sync now.

Run sync only after explicit confirmation.

Use a non-destructive sync flow (for example, merge `main` into branch) unless the user explicitly requests rebase.

## Merge strategy

When merging feature branches into `main` or `staging`, prefer `--no-ff` to preserve merge context unless the user explicitly requests another strategy.

## Branch cleanup after merge

Never perform branch cleanup automatically.

Before cleanup, ask whether the user wants local cleanup, remote cleanup, or both.

Run cleanup only after explicit confirmation.

- Delete local branch with `git branch -d <branch>`.
- Delete remote branch if it exists and the user requested remote cleanup.

## Never commit without explicit request

After making file changes, stop. Do not run `git add` or `git commit` until user explicitly asks.

Finishing a task is not the same as committing.

When user asks to commit:

- Use a concise commit message in English.
- Do not amend pushed commits.

PR formatting conventions are defined in `.claude/git-conventions.md`.
