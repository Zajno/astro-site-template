# Brainstorming — Examples

## When to open this skill

- "I want to add a new section to the home page" → brainstorm layout, data, and hydration before editing files.
- "Refactor how we load i18n" → compare approaches (build-time vs runtime) before changing `data/` or routes.

## Approach comparison (template)

```
**Approach A: [Name]** (recommended)
- How it works: …
- Pros: …
- Cons: …

**Approach B: [Name]**
- How it works: …
- Pros: …
- Cons: …
```

Lead with why **A** is recommended, then ask which direction to take.

## Design doc output

Per the skill, save agreed designs as:

`docs/plans/YYYY-MM-DD-<short-name>-design.md`

Example: `docs/plans/2026-04-06-hero-animation-design.md`

## Spec self-review (before asking the user to approve)

1. **Placeholders:** Any TBD, TODO, or empty sections? Fill or remove.
2. **Consistency:** Do sections contradict each other?
3. **Scope:** Still one coherent implementation pass, or does it need splitting?
4. **Ambiguity:** Could any requirement be read two ways? Make one explicit choice.

## User gate (prompt)

After self-review passes:

> Spec written at `docs/plans/…-design.md`. Please read it and say if you want changes before we implement.
