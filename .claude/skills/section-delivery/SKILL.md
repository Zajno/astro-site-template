---
name: section-delivery
description: Delivers full-scope section implementation for Astro pages and Figma handoffs. Use when implementing a section, hero block, or Figma node, especially from short prompts with minimal scope details.
---

# Section Delivery

Use this skill when implementing or updating a page section in this template (including Figma-driven tasks).

## Required companion skills

When this skill is active, also read and apply:

1. `.claude/skills/astro-best-practices/SKILL.md`
2. `.claude/skills/scss-best-practices/SKILL.md`
3. `.claude/skills/typescript-best-practices/SKILL.md`

Conditionally include:

- `.claude/skills/react-islands-best-practices/SKILL.md` when `.tsx` islands or React client components are touched.
- `.claude/skills/security-best-practices/SKILL.md` when forms, untrusted input, auth, URL/query parsing, or HTML injection surfaces are involved.

## Scope policy

For short section/Figma prompts, default to full-scope delivery unless user explicitly narrows scope.

Arbitration rule: if full-scope default conflicts with "not enough detail to implement safely", stop and clarify/escalate first.

Default full scope includes:

1. Markup integration in existing section architecture.
2. SCSS aligned with shared tokens/typography paths (`src/styles/common/` or existing token paths).
3. Client behavior wiring in `src/scripts/modules/` and registration path when interactions are expected (that is: Figma/design shows interactive controls or states, user explicitly requests behavior, or existing section pattern for this block already includes script wiring).
4. Thin `view.astro` (avoid bulky inline types/assets/copy blocks).
5. Required `data/**`, types, registry, and page composition updates for integration.
6. Validation checks: `yarn lint` and `yarn build:ts` (or explicit blocker report).
7. Explicit script decision: `Script wiring: required/optional + reason`.

Narrow only with explicit user instructions such as:
- "markup only"
- "no JS"
- "styles only"
- "skip lint/build"

## Where to store what

Use these default storage locations:

1. **Section markup/composition:** `src/components/sections/<page>/<section>/view.astro`
2. **Section styles:** `src/components/sections/<page>/<section>/style.scss`
3. **Shared styleguide/tokens/typography primitives:** `src/styles/common/*` (especially `variables.*.sass`, `typography.sass`, rem helpers)
4. **Client behavior modules:** `src/scripts/modules/*` (+ registration path used by existing sections)
5. **Copy/content data:** `data/copyright/**` and related `data/**` files
6. **Section/page wiring:** section registries/types and page composition files (for example `src/components/sections/**`, `src/pages/**`, and related `data/pages.ts` entries when required)

Do not create parallel token/styleguide systems outside shared style paths.

## Delivery checklist

1. **Markup:** integrate using existing section patterns under `src/components/sections/**`.
2. **Styles / styleguide:** follow project styleguide conventions (tokens, typography, spacing, responsive rules) via shared primitives; avoid one-off token systems in section-local SCSS.
   - Typography for new section text styles must be centralized through `src/styles/common/typography.sass` (reuse existing semantic mixins/classes or add new semantic mixins + required `variables.typography.sass` entries).
   - Colors must be tokenized via `src/styles/common/variables.colors.sass` and consumed as `var(--color-*)`; do not keep final raw color literals in section SCSS (transparent keywords are the only acceptable exception when semantically appropriate).
   - "Visual match" is insufficient if typography/token architecture is not compliant.
   - Canonical source for section hard-gates is this skill; `implementor` should mirror these rules without changing meaning.
3. **Scripts:** wire behaviors in `src/scripts/modules/` + registration when needed.
   - Before implementation, explicitly record `Script wiring: required/optional + reason`.
   - Treat script wiring as **required** when design/request/pattern implies behavior (interactive controls/states, requested activation/animation, or existing page section pattern depends on script activation flow).
   - If script wiring is required, section is not done until `script.ts` and any required registration/integration are in place.
   - Existing section script contract gate: if target section has `script.ts` (or had one before changes), preserve activation wiring in `view.astro` via `<script src="./script.ts"></script>` unless there is an explicit documented migration path.
4. **Data/copy:** move content and metadata to `data/**` patterns where appropriate.
5. **Thin view:** keep Astro view focused on composition and wiring.
6. **Validation:** run lint/type checks and report outcomes.

## Definition of done

A section task is complete only when:

1. Markup, styles, and expected interactions are implemented (or explicitly scoped out by user).
2. Integration wiring is complete (section composition, types/registries, data paths as needed).
3. Shared style primitives are used (no avoidable local-only token systems), including:
   - typography centralized in `typography.sass`,
   - colors tokenized in `variables.colors.sass`.
4. Validation commands were run or blocked with clear reason.
5. Final report includes changed files, summary, and remaining risks/TODOs.
6. Final report includes `SCSS compliance:` typography centralized (yes/no), colors tokenized (yes/no). If any value is `no`, status is `partial` (not done).
7. Final report includes `Script wiring compliance:` required/optional, reason, implemented (yes/no when required). If required but not implemented, status is `partial` (not done).
8. Final report includes `Script contract compliance:` section `script.ts` exists/existed (yes/no), activation preserved in `view.astro` or migrated with evidence (yes/no). If this value is `no`, status is `partial` (not done).

## Anti-patterns

- Treating short Figma/section prompts as markup-only by default.
- Shipping section visuals without client wiring when behavior is expected.
- Keeping large inline copy/types/assets in `view.astro` when template patterns exist.
- Declaring done without lint/type validation status.
- Declaring done when typography remains section-local and not centralized in `typography.sass`.
- Declaring done when raw colors remain in section SCSS instead of semantic color tokens.
- Declaring done without explicit `Script wiring` decision (`required/optional + reason`).
- Declaring done when script wiring is required but section `script.ts`/integration is missing.
- Declaring done after removing/ignoring an existing section `script.ts` contract without migration evidence.

