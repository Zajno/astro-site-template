# Stack Best Practices - Routing Examples

This file shows which focused skill to use for each task type.

## Docs-first

For framework or library **APIs and configuration** (Astro, React, TypeScript, Vite, ESLint, …), follow the **Docs-first rule** in [SKILL.md](SKILL.md): use Context7 or another docs MCP when available, otherwise official documentation — do not guess version-sensitive behavior.

## Example routing

- "Refactor hydration directives in `src/components/sections/*`" ->
  `../astro-best-practices/SKILL.md`
- "Fix derived state and effect misuse in a React island" ->
  `../react-islands-best-practices/SKILL.md`
- "Tighten types and alias imports in `src/scripts/*`" ->
  `../typescript-best-practices/SKILL.md`
- "Restructure SCSS to avoid selector leakage" ->
  `../scss-best-practices/SKILL.md`
- "Review env handling, XSS risk, or dependency audit before release" ->
  `../security-best-practices/SKILL.md`
- "New feature or refactor — clarify requirements and options before coding" ->
  `../brainstorming/SKILL.md`
- "Design is approved — break work into ordered tasks with verification" ->
  `../writing-plans/SKILL.md`

## Plans vs trivial scope

Use [../writing-plans/SKILL.md](../writing-plans/SKILL.md) for ordered tasks and verification. Prefer a `*-plan.md` for multi-file or non-trivial work; for a trivial one-file change you may implement straight from the approved design without a plan file.
