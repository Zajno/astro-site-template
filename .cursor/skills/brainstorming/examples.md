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

`docs/plans/YYYY-MM-DD-<topic>-design.md`

Use one **topic** slug (kebab-case) for both this file and the optional paired `-plan.md` so names line up.

Example: `docs/plans/2026-04-06-hero-animation-design.md` pairs with `docs/plans/2026-04-06-hero-animation-plan.md` when you write a plan.

## Spec self-review (before asking the user to approve)

1. **Placeholders:** Any TBD, TODO, or empty sections? Fill or remove.
2. **Consistency:** Do sections contradict each other?
3. **Scope:** Still one coherent implementation pass, or does it need splitting?
4. **Ambiguity:** Could any requirement be read two ways? Make one explicit choice.

## User gate (prompt)

After self-review passes:

> Spec written at `docs/plans/…-design.md`. Please read it and say if you want changes before we implement.

## After approval (optional plan)

For multi-file or non-trivial work, open [../writing-plans/SKILL.md](../writing-plans/SKILL.md) and write `docs/plans/YYYY-MM-DD-<topic>-plan.md` using the **same** `<topic>` as in `-design.md`. For a trivial one-file change, a separate plan file is optional — see that skill.

