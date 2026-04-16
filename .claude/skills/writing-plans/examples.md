# Writing Plans — Examples

## When to open this skill

- User approved `docs/plans/2026-04-10-hero-redesign-design.md` → write `docs/plans/2026-04-10-hero-redesign-plan.md` with ordered tasks.
- “Break the footer i18n change into tasks” → plan file + verification using `yarn lint` / `yarn build:ts`.
- Trivial one-file change with an approved design → a separate `-plan.md` is optional; implement from the design or use a short inline checklist (see [SKILL.md](SKILL.md)).

## Sample task block (Astro template)

```markdown
### Task 2: Add section markup and wire route metadata

**Files:**
- `src/components/sections/home/NewSection.astro` — new section
- `data/pages.ts` — register section or route copy if needed

**What to do:**
1. Create `NewSection.astro` following the structure of an existing section in `src/components/sections/home/`.
2. Import and render from the home page (or the layout the design specifies).
3. If the design adds copy, extend `data/copyright/` and types as per `data/types.ts`.

**Verification:**
- [ ] `yarn lint` passes
- [ ] `yarn dev` — home route shows the new block without console errors
```

## File naming

| Artifact | Pattern |
|----------|---------|
| Design | `docs/plans/YYYY-MM-DD-<topic>-design.md` |
| Plan | `docs/plans/YYYY-MM-DD-<topic>-plan.md` |
