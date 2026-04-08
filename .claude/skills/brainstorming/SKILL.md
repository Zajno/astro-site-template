---
name: brainstorming
description: "Use when starting creative work — new features, architectural changes, or significant modifications. Activates BEFORE any code is written to refine ideas through structured questions and present designs for validation."
---

Mirror note: keep Cursor and Claude brainstorming files synchronized in the same commit.

Template skill: blends common agent patterns with ideas from community brainstorming skills (e.g. explicit design gate and spec review).

# Brainstorming

Refine rough ideas into clear, validated designs before writing any code.

## When This Activates

Before any creative work: new features, new components, architectural changes, significant modifications. If the user jumps straight to "build X", pause and brainstorm first.

## Implementation gate

Do **not** scaffold, implement, or invoke stack implementation work until a design has been presented and the user has approved moving forward. This applies even when the change looks tiny — the design can be a few sentences, but it must exist and be agreed.

For this template, "implementation" means editing application code, adding dependencies, or running generators for the feature — not reading files or drafting the design doc.

## Anti-pattern: "too simple for a design"

Small tasks (a utility, a config tweak, a one-off script) still go through this flow. **Simple** changes are where unexamined assumptions waste the most time. Keep the written design minimal when appropriate, but do not skip agreement.

## Scope and decomposition

Before detailed questions, assess scope. If the request bundles many independent systems (e.g. "add chat, billing, and analytics in one go"), stop and help decompose: what are the pieces, in what order should they ship, and which piece is first? Then run this skill on **one** appropriately scoped slice at a time.

## Core Principles

1. **One question at a time.** Never dump a list of questions. Ask one, wait for the answer, then ask the next.
2. **Multiple choice when possible.** Give 2-3 concrete options instead of open-ended questions.
3. **YAGNI.** Do not add features that are not requested. Push back on unnecessary complexity.
4. **Alternatives before decisions.** Present at least 2 approaches with trade-offs; give a **recommended** option and why.
5. **Small chunks.** Present design in short sections (roughly 200-300 words when nuanced). Get validation on each before continuing.

## Process checklist (order)

Complete these in order before implementation:

1. **Explore project context** — structure, relevant files, existing patterns (follow them unless the design explicitly improves a localized problem).
2. **Clarifying questions** — one per message; purpose, constraints, success criteria.
3. **Propose 2-3 approaches** — trade-offs and a recommendation.
4. **Present the design in sections** — scale depth to complexity; confirm after each section.
5. **Write the design doc** — `docs/plans/YYYY-MM-DD-<name>-design.md` (create `docs/plans/` if missing). User may override path for their repo.
6. **Spec self-review** — run the checklist in [examples.md](examples.md) inline; fix issues in the doc.
7. **User reviews the written spec** — pause until the user approves or requests edits; if edits, update the doc and repeat step 6 as needed.
8. **Implementation** — use `stack-best-practices` and focused skills (Astro, React islands, TypeScript, SCSS, security) as appropriate. Do not treat brainstorming as permission to skip lint, types, or security baseline.

## Workflow detail

### Understand the project

1. Read structure and key files; note similar features or patterns already in the tree.
2. Summarize understanding in 2-3 sentences before deep questions.

### Explore the idea

Use questions such as:

- What problem does this solve for the user?
- Who uses it (public, internal, both)?
- What is the smallest useful version?
- Is something similar already in the codebase?

**One question at a time.**

### Propose approaches

Use a small comparison block (see [examples.md](examples.md)). Lead with the recommended option.

### Design in chunks

Cover what the scope needs, scaled to complexity — for example:

- Data / content sources
- User flow
- Components or modules and boundaries (**isolation**: clear interfaces; avoid units that do too much in one file)
- Errors and edge cases
- Testing or verification expectations if the design implies them

**In existing codebases:** prefer extending established patterns; include only targeted refactors that unblock the work — no unrelated cleanups.

### Write the design document

After sections are validated, write to `docs/plans/YYYY-MM-DD-<name>-design.md`:

```markdown
# Feature: <Name>

## Summary
<1-2 sentences>

## Approach
<Chosen approach and why>

## Data Model
<What was agreed>

## User Flow
<Step by step>

## Component/API Structure
<Agreed structure>

## Edge Cases
<What was discussed>

## Open Questions
<Anything unresolved>
```

### After the design doc

- **Self-review:** placeholders (TBD/TODO), internal contradictions, scope too large for one implementation pass, ambiguous requirements — fix in the file before asking the user.
- **User gate:** ask the user to read the saved file and confirm before coding.
- **Then** implement; optional visual mockups or diagrams only if the tool environment supports them and the topic is inherently visual — default to text.

## Anti-patterns

- **Jumping to code** before agreement.
- **Many questions in one message.**
- **Only one approach** with no alternatives.
- **Oversized specs** for tiny changes (match length to scope).
- **Gold-plating** or unrelated refactors.
- **Skipping the written doc** when the change is non-trivial.

## Remember

- The goal is a shared understanding and a written spec the user can review.
- Simple beats clever.
- The product owner knows the domain — ask, do not assume.
