# Git Conventions

**Cursor equivalent:** `.cursor/skills/git-conventions/SKILL.md` — full mapping: [docs/ai-governance-map.md](../docs/ai-governance-map.md).

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

Use **kebab-case** and a short description for the `<description>` segment of branch names.

## Message conventions

- Use English consistently.
- No ticket format is required.

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

### Optional Conventional Commits mode

Use this mode only if the project enables conventional commits automation:

- Format: `<type>(<scope>): <description>`
- Example: `feat(build): add rollup output tuning for client bundles`
- Breaking changes: use `!` and/or a `BREAKING CHANGE:` footer in multi-line commits.

Common types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `build`, `ci`.

## Pull Request format

Use this PR body template:

```markdown
## Summary

- <Action verb> <specific change> in `<file-or-area>`
- <Action verb> <specific change>

## Why

- <Short reason for this approach and expected impact>

## Test plan *(optional — include only when validation is needed)*

- [ ] `yarn lint`
- [ ] `yarn build:ts`
- [ ] `yarn build`
- [ ] <Manual check if relevant>

## ClickUp *(optional)*

- <ClickUp task URL>
- Example: `https://app.clickup.com/t/abc123`

## Breaking changes *(optional)*

- <What changed and who is affected>
- <Migration notes, if any>

## Risk & rollback *(optional)*

- Risk: <low|medium|high> and main concern
- Rollback: <how to revert safely>
```

Rules:

- Keep it concise and file-specific.
- Start each bullet with an action verb; keep capitalization consistent within one PR.
- Include **Test plan** only when it adds value for this PR.
- If a ClickUp task exists for this work, include it in **ClickUp**.
- Before finalizing PR text, ask the user whether there is a ClickUp task and request the URL if it was not provided.
