# Git Conventions

Mirror note: keep Cursor and Claude git-convention files synchronized in the same commit.

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

## Message conventions

- Use English consistently.
- No ticket format is required.

### Branch names

- Use kebab-case and a short description.

## Commit messages

Use single-line messages in imperative mood.

Examples:

- `upgrade TypeScript to 6.0.2 and fix all type errors`
- `add git workflow cursor rule`
- `fix minimatch ReDoS via yarn resolutions`

Rules:

- No capital first letter
- No period at the end
- No generic "WIP", "fix", or "update" without context
- Describe what and why, not how

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
