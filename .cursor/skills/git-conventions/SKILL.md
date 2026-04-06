---
name: git-conventions
description: Project git conventions for branch naming, commit messages, and PR formatting. Use when creating a branch, writing a commit message, or preparing a pull request.
---

Mirror note: keep Cursor and Claude git-convention files synchronized in the same commit.

# Git Conventions

## Branch naming

| Prefix | Use for | Example |
|--------|---------|---------|
| `feat/<description>` | new functionality | `feat/mobile-menu-animation` |
| `fix/<description>` | bug fix | `fix/header-scroll-on-mobile` |
| `update/<description>` | update existing feature | `update/hero-section-layout` |
| `refactor/<description>` | refactoring | `refactor/data-layer-structure` |
| `docs/<description>` | documentation | `docs/update-readme` |
| `style/<description>` | styles / CSS | `style/button-hover-states` |
| `test/<description>` | tests | `test/add-unit-tests-for-utils` |
| `deps/<package>` | dependency upgrades | `deps/astro-6` |

## Message conventions

- Use English consistently.
- No ticket format is required.

### Branch names

- Use kebab-case and a short description.

## Commit messages

Single line, imperative mood:

```
upgrade TypeScript to 6.0.2 and fix all type errors
add git workflow cursor rule
fix minimatch ReDoS via yarn resolutions
```

- No capital first letter
- No period at the end
- No "WIP", "fix", "update" without context
- Describe the *what* and *why*, not the *how*

## Pull Request format

Use this PR body template:

```markdown
## Summary

- <Action verb> <specific change> in `<file-or-area>`
- <Action verb> <specific change>

## Why

- <Short reason for this approach and expected impact>

## Test plan *(optional — include only when validation is needed)*

- [ ] `yarn build:ts`
- [ ] `yarn build`
- [ ] <Manual check if relevant>

## ClickUp *(optional)*

- <ClickUp task URL>
```

Rules:

- Keep it concise and file-specific.
- Start each bullet with an action verb; keep capitalization consistent within one PR.
- Include **Test plan** only when it adds value for this PR.
- If a ClickUp task exists for this work, include it in **ClickUp**.
