---
name: git-conventions
description: Project git conventions for branch naming, commit messages, and PR formatting.
---

# Git Conventions

Canonical location for git conventions in the symlink setup.

## Branch naming

| Prefix | Use for | Example |
|--------|---------|---------|
| `feat/<description>` | new functionality | `feat/mobile-menu-animation` |
| `fix/<description>` | bug fix | `fix/header-scroll-on-mobile` |
| `update/<description>` | update existing feature | `update/hero-section-layout` |
| `refactor/<description>` | refactoring | `refactor/data-layer-structure` |
| `docs/<description>` | documentation | `docs/update-readme` |
| `style/<description>` | styles or CSS | `style/button-hover-states` |
| `test/<description>` | tests | `test/add-unit-tests-for-utils` |
| `deps/<package>` | dependency upgrades | `deps/astro-6` |

Use **kebab-case** and a short description for `<description>`.

## Commit messages

- Use English consistently.
- Use single-line imperative messages.
- No capital first letter.
- No period at the end.
- Avoid generic messages without context.

## Pull request format

Use concise, action-oriented bullets and include validation steps when relevant.
If a ClickUp task exists, include the URL in the PR description.
