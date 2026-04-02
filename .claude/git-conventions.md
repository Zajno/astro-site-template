# Git Conventions

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

Use kebab-case, English, and short descriptions.

## Commit messages

Use single-line English messages in imperative mood.

Examples:

- `upgrade TypeScript to 6.0.2 and fix all type errors`
- `add git workflow cursor rule`
- `fix minimatch ReDoS via yarn resolutions`

Rules:

- No capital first letter
- No period at the end
- No generic "WIP", "fix", or "update" without context
- Describe what and why, not how
