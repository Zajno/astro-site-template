---
name: scss-best-practices
description: "SCSS patterns for this template. Enforces rem-only sizing, variable-driven styles, typography mixins, and responsive rules based on the project rem system."
---

# SCSS Best Practices

For snippets, see [examples.md](examples.md).

## Severity Levels

- **CRITICAL** - selector leakage causing regressions across pages
- **HIGH** - hard-to-maintain style coupling
- **MEDIUM** - inconsistent style organization

## Global vs Local Boundaries (CRITICAL)

- Keep global primitives in `src/styles/*` only
- Keep section/component styles scoped to their block
- Avoid global tag selectors for section-level tweaks

## Units Policy (CRITICAL)

- Do not use `px` in style properties for layout/spacing/typography sizing
- Use the project rem system via `gem(...)` and CSS variables
- Borders are the explicit exception (see `src/styles/common/rem.scss` note)
- Keep root scaling behavior controlled by `remBase(...)`, do not override `html { font-size }` ad hoc

## Selector Discipline (HIGH)

- Prefer explicit block scopes over broad descendant chains
- Avoid deeply nested selectors that are fragile to markup changes
- Keep specificity predictable

## Variables and Tokens (CRITICAL)

- Reuse existing variables and mixins before adding new values
- Keep design tokens in `src/styles/common/variables.*.sass` (`:root` CSS variables)
- Use semantic variables (`var(--color-*)`, `var(--font-size-*)`, `var(--container-width)`) instead of raw literals
- Add new tokens in variable files first, then consume them in components/sections
- When the team uses Figma, prefer prepared variables/components from the design file as source-of-truth
- When Figma MCP is available and the project relies on it, use it for token/component sync and design-to-code mapping instead of copying values by hand

## Figma MCP Flow (HIGH)

Apply this section **only when** the repo uses a Figma workflow and the Figma MCP is enabled. If there is no Figma integration or MCP, **skip** these bullets; implement styles from existing tokens, `variables.*.sass`, typography classes, and written specs—do not invoke Figma tools.

- Get design context from Figma node/file before implementing styles
- Map design tokens to existing project variables first (`variables.*.sass`, typography classes)
- If token is missing, add it to variable files and reuse semantically across components
- Verify resulting component uses project classes/tokens instead of inline hardcoded values

## Typography Rules (HIGH)

- Use typography mixins from `src/styles/common/typography.sass` for text styles
- Reuse existing semantic classes/mixins (`title-h1`, `desc-1`, `label-3`, etc.) before introducing new text styles
- Keep font family/weight/size/line-height/letter-spacing driven by typography variables, not one-off declarations

## Responsive Rules (HIGH)

- Follow existing breakpoints (`max-width: 1024px`, `max-width: 480px`) unless a new one is justified
- Define responsive token changes in variable files (`variables.typography.sass`, `variables.sizes.sass`) rather than scattering overrides
- When responsive behavior depends on design viewport scaling, use `remBase(...)` / `remBreakpoint(...)` patterns
- Prefer token updates per breakpoint over per-component hardcoded numeric overrides

## Over-Engineering (HIGH)

- Avoid creating one-off mixins/placeholders for single-use style blocks
- Avoid parallel token systems outside `variables.*.sass`
- Avoid wrapper selectors that only increase specificity without meaning

## Accessibility in Styles (HIGH)

- Keep visible focus styles for interactive controls (`:focus-visible`)
- Avoid color-only state indication when a secondary cue can be added
- Respect reduced-motion preferences for non-essential animations

## Code Organization (MEDIUM)

- Keep style file order predictable: imports, tokens/mixins, block styles, responsive overrides
- Keep section-specific styles near section implementation
- Reuse existing utility classes/tokens before adding new custom selectors
