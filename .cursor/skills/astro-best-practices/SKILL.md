---
name: astro-best-practices
description: "Astro-first implementation patterns for this template. Use for page composition, hydration directives, content collections, and integration boundaries."
---

# Astro Best Practices

For snippets, see [examples.md](examples.md).

## Severity Levels

- **CRITICAL** - likely runtime bug or hydration mismatch
- **HIGH** - unnecessary client JS or fragile architecture
- **MEDIUM** - maintainability and consistency issues

## Page Composition (CRITICAL)

- Keep `src/pages/*` as route composition only
- Use layout + sections pattern (`src/layouts/*`, `src/components/sections/*`)
- Do not put browser-only APIs in Astro frontmatter
- Do not move feature/business logic into page frontmatter when it can live in modules/components

## Islands and Hydration (HIGH)

- Default to server-rendered Astro markup
- Add hydration only for interactive components
- Prefer narrow directives (`client:visible`, `client:idle`) before `client:load`
- Keep islands behavior-focused and small
- Do not hydrate static content blocks
- Prefer one island per interactive concern instead of wrapping whole page sections

## Content and Data Boundaries (HIGH)

- Keep content schema explicit in `src/content.config.ts` when collections exist
- Keep route metadata in `data/pages.ts`; do not duplicate per component
- Avoid ad hoc data fetching logic spread across page entry files
- Keep i18n text in `data/copyright/*`; avoid inline locale strings in page/component markup

## Config Boundaries (MEDIUM)

- Keep `astro.config.ts` for framework/integration setup only
- Avoid business logic in Astro config
- Add integrations only when template-level value is clear

## Integration Discipline (HIGH)

- Prefer existing stack primitives before introducing new framework-level integrations
- Remove unused integrations/directives to avoid hidden runtime and build complexity
- For multi-framework usage, keep ownership boundaries explicit per folder/feature

## Markup and Data Flow (MEDIUM)

- Keep Astro component props explicit and typed when shared across sections/layouts
- Prefer passing prepared data from page/layout to sections over sections fetching global data ad hoc
- Keep section components focused on rendering, not cross-route coordination

## Over-Engineering (CRITICAL)

- Avoid adding framework-level abstractions before a second real use case appears
- Avoid wrapper layers that only forward props without adding behavior or constraints
- Avoid page-level orchestrators when behavior can live in focused sections/modules

## Accessibility Baseline (HIGH)

- Ensure interactive islands expose semantic controls and labels
- Keep non-interactive content server-rendered and readable without hydration
- Ensure keyboard flow remains valid when islands mount/unmount dynamic UI

## Performance Beyond Hydration (MEDIUM)

- Prefer partial hydration and progressive activation over eager island loading
- Keep heavy optional UI behind deferred loading boundaries
- Revisit bundle/chunk strategy when adding large client-side dependencies

## Code Organization (MEDIUM)

- Keep feature colocation clear: section markup + related scripts/styles together by feature
- Keep shared layout primitives centralized in `src/layouts/*` and `src/components/common/*`
- Reuse existing section/data patterns before inventing parallel structures
