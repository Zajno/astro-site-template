---
name: git-conventions
description: Project git conventions for branch naming and commit messages. Use when creating a branch, writing a commit message, or when the user asks how to name a branch or format a commit.
---

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

Use kebab-case, English, short description.

## Commit messages

Single line, English, imperative mood:

```
upgrade TypeScript to 6.0.2 and fix all type errors
add git workflow cursor rule
fix minimatch ReDoS via yarn resolutions
```

- No capital first letter
- No period at the end
- No "WIP", "fix", "update" without context
- Describe the *what* and *why*, not the *how*
