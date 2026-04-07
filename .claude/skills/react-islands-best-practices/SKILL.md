---
name: react-islands-best-practices
description: "React 19 patterns for Astro islands. Use for component purity, state modeling, effects, and browser-only logic placement."
---

# React Islands Best Practices

For snippets, see [examples.md](examples.md).

## Severity Levels

- **CRITICAL** - bugs from impure render or unstable component identity
- **HIGH** - re-render/perf issues and brittle effects
- **MEDIUM** - readability and scaling concerns

## Render Purity (CRITICAL)

- Components/hooks must be pure during render
- Do not mutate module/global state inside component body
- Keep render deterministic from props/state
- Keep JSX-returning units as PascalCase components, not `renderThing()` helpers

## Component Design (CRITICAL)

- Keep business logic in hooks/helpers, not in component body render branches
- Prefer one component per file (small local helpers are acceptable)
- Extract helper functions outside component body when they do not need closure state
- Split components when they exceed roughly 200 lines or become multi-responsibility
- If component API grows past 5-7 props, reconsider composition or local state boundaries

## Composition Patterns (HIGH)

- Compose focused components over monolithic wrappers
- Push state down to the closest consumer
- Lift content up when wrapper component only passes children through
- Prefer `children` and composition over deep prop drilling in island trees (avoid pass-through wrappers)

## Derive, Do Not Sync (CRITICAL)

- Do not use `useEffect` + `setState` for derived values
- Compute derived values during render
- Use `useMemo` only for measured expensive computation

## Effects Discipline (HIGH)

- Use effects only for external synchronization
- Event workflow belongs in event handlers, not in effects
- Always cleanup subscriptions/listeners/timers
- Do not chain effects to trigger each other; this usually indicates derived-state misuse
- Declare effect dependencies explicitly and correctly

## Component Boundaries (HIGH)

- Keep state where it is used; avoid lifting state higher than needed
- Split container and presentational responsibilities when component grows

## Islands Scope (HIGH)

- Keep island state local to interaction boundary
- Avoid top-heavy islands hydrating entire page regions
- Split large islands into presentational + stateful parts when needed

## Browser APIs (HIGH)

- Access `window`/`document` in handlers or effects
- Never access browser APIs at module top-level for shared components

## List and Identity Safety (CRITICAL)

- Use stable data IDs as `key`
- Do not use array index as `key` for dynamic lists
- Do not generate unstable keys (`Math.random()`, timestamps per render)

## Conditional Rendering Safety (HIGH)

- Avoid `{count && <Badge />}` when `count` can be `0`
- Use explicit conditions (`count > 0`) or ternary
- Prefer early returns for loading/error/empty/success states

## Memoization Discipline (MEDIUM)

- `useMemo` only for expensive derived computations
- `useCallback` only when passing callback to memoized child or dependency-critical hook
- Avoid memoizing trivial string/boolean/math expressions

## Data Fetching (HIGH)

- Keep data fetching in hooks or container components, not in presentational components
- Handle loading/error/empty/success states explicitly in container layer
- Use `try/catch` in async hook flows and surface typed error states
- If project query abstractions exist, prefer them over ad hoc fetch logic

## Over-Engineering (CRITICAL)

- Avoid abstractions with a single consumer; inline until reuse is real
- Avoid "reusable" hooks with hardcoded field names; accept config/inputs explicitly
- Avoid wrapper components that only pass props through without behavior
- Do not create `null`-render components solely to invoke a hook when hook can be called directly

## Accessibility (HIGH)

- Add `aria-label` to icon-only interactive controls
- Associate input errors using `aria-describedby` and `aria-invalid`
- Use `aria-live="polite"` for dynamic updates (search results, toasts, async status)
- For modal interactions, ensure focus trap and clear keyboard escape path
- For SPA-like island navigation flows, ensure route/view changes are announced

## Performance Beyond Memoization (MEDIUM)

- Use `React.lazy()` and `<Suspense>` for heavy optional subtrees when appropriate
- Use static import paths in `lazy(() => import('./X'))` for build analysis stability
- Keep Vite chunk strategy intentional (e.g. `manualChunks`) when bundle growth demands it

## Code Organization (MEDIUM)

- Prefer feature-oriented colocation: component + hook + helpers + tests
- Keep shared primitives in stable common locations (e.g. `src/components/common`, `src/scripts/utils`)
- Keep file order predictable: imports, constants, helpers, component, exports
- Reuse existing types/constants before introducing new near-duplicates
