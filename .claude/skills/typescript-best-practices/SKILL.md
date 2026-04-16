---
name: typescript-best-practices
description: "TypeScript 6 patterns for this template. Use for contracts, imports, alias consistency, and safer utility signatures."
---

# TypeScript Best Practices

For snippets, see [examples.md](examples.md).

## Priority levels (this skill)

These labels apply **only within this document** (not a global OWASP-style severity scale).

- **CRITICAL** - type holes that hide runtime defects
- **HIGH** - weak contracts and drift between modules
- **MEDIUM** - consistency/readability issues

## Contracts First (CRITICAL)

- Avoid `any` unless crossing an unavoidable external boundary
- Define explicit types for module interfaces and data contracts
- Keep utility function inputs/outputs precise
- Avoid `as any` and double assertions (`as unknown as T`) in app code paths

## Safer Unknown Boundaries (CRITICAL)

- For external input (API/env/localStorage), parse as `unknown` first
- Narrow with runtime guards before use
- Keep boundary parsing close to source, export typed data deeper in app

## Assertions and Nullability (HIGH)

- Prefer narrowing (`if`, type guards) over blind assertions (`!`, `as`)
- Use non-null assertion only when invariant is guaranteed in same scope
- Keep nullable types explicit in signatures instead of hiding with casts

## Type-Only Syntax (HIGH)

- Use `import type` for type-only imports
- Use `export type` for type re-exports
- Avoid mixing runtime imports with type-only imports when unnecessary

## Alias Consistency (HIGH)

- Prefer configured aliases over deep relative paths
- Reuse existing aliases: `layouts/*`, `components/*`, `scripts/*`, `data/*`
- Keep import style consistent in modified files

## Function Contracts (HIGH)

- Keep return types explicit for exported functions in shared modules
- Model impossible states with unions instead of sentinel strings
- Prefer discriminated unions for stateful flows (`loading | success | error`)

## Narrow Utilities (MEDIUM)

- Prefer exact object shapes over broad index signatures
- Avoid `Record<string, unknown>` unless dictionary semantics are intended
- Keep helper return types explicit when inference is ambiguous

## Generic Discipline (MEDIUM)

- Add generics only when they preserve real relationships between input/output
- Avoid unused generic parameters and over-abstracted helper signatures
- Prefer concrete types when no reusable generic behavior is needed

## Over-Engineering (HIGH)

- Avoid type abstractions that hide domain meaning (`TData`, `TItem`) when concrete names are clearer
- Avoid deeply nested utility types when explicit interfaces are easier to maintain
- Prefer incremental type extraction over speculative global type frameworks

## Code Organization (MEDIUM)

- Keep domain types close to owning module/feature; extract shared contracts intentionally
- Keep one canonical source for shared types/constants to avoid near-duplicate drift
- Keep file order predictable: imports, constants, types/interfaces, helpers, exports
