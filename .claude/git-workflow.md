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

## Verify build before pushing

Before `git push`, check whether a build verification was done in this session (`yarn build` or `yarn build:ts`).

If no build check was done, warn and ask:

`Build was not verified in this session. Recommend running yarn build before pushing. Run it now?`

Skip this warning only if user explicitly asks to push without build verification.

## Never commit without explicit request

After making file changes, stop. Do not run `git add` or `git commit` until user explicitly asks.

Finishing a task is not the same as committing.

When user asks to commit:

- Use a concise commit message in English.
- Do not amend pushed commits.

PR formatting conventions are defined in `.claude/git-conventions.md`.
