---
name: security-best-practices
description: "Security baseline for this template: OWASP-oriented checks, secrets, XSS, CSP, dependency audit, and structured review output. Use for threat review, hardening, and release hygiene."
---

Mirror note: keep Cursor and Claude security-best-practices files synchronized in the same commit.

# Security Best Practices

For a copy-paste report skeleton, see [docs/security-review-report-template.md](../../../docs/security-review-report-template.md). For short examples, see [examples.md](examples.md).

## Priority levels (this skill)

These labels apply **only within this document** (not a global OWASP-style severity scale). They describe security impact for this template’s baseline review.

- **CRITICAL** - direct credential leak, trivial RCE/injection, or secret committed to git
- **HIGH** - XSS, broken authz on sensitive actions, unsafe deserialization of untrusted data
- **MEDIUM** - missing headers, verbose errors, weak validation at trust boundaries
- **LOW** - hygiene, dependency noise, defense-in-depth

## Secrets and Configuration (CRITICAL)

- Never commit API keys, tokens, or private URLs; use `.env` (ignored) and typed config loaders
- Never log secrets; redact values in client-side bundles (`import.meta.env` / `PUBLIC_*` only for safe values)
- Keep environment-specific hostnames and feature flags in config modules, not scattered literals

## XSS and Untrusted HTML (HIGH)

- Avoid `dangerouslySetInnerHTML` and `set:html` unless input is trusted or sanitized for the context
- Do not concatenate untrusted strings into HTML; prefer structured data and framework escaping
- For rich text from CMS or users, use a vetted sanitization path appropriate to the stack

## Browser Security Headers and CSP (MEDIUM)

- When the derived project controls hosting (e.g. Firebase, nginx), plan CSP, `X-Frame-Options` / `frame-ancestors`, and HTTPS defaults
- Avoid inline scripts where a hash or external file is feasible once CSP is enabled

## Astro and React Islands (HIGH)

- Keep server-only secrets out of island props and client bundles
- Validate external input at boundaries (forms, query params, storage) before use in logic or markup
- Prefer least privilege for third-party scripts (load only on routes that need them)

## Supply Chain and Dependencies (HIGH)

- Run `yarn audit:deps` regularly; treat high/critical findings before release
- In this Yarn 1 template, `yarn audit:deps` delegates to `npm audit --no-package-lock --legacy-peer-deps --audit-level=high` because the legacy `yarn audit` endpoint is no longer reliable
- Prefer pinning and reviewing upgrades for security-sensitive dependencies
- Use `resolutions` in `package.json` only with a documented reason (see existing template pattern)

## Automation vs Manual Review

- **Automated:** ESLint, TypeScript, `yarn audit:deps` (npm-backed in this template), CI quality workflow (see `README.md`)
- **Manual (agent or human):** scoped review of git diff — use the prompts in [examples.md](examples.md) and record findings with [docs/security-review-report-template.md](../../../docs/security-review-report-template.md)

## What Not To Put Here

- Do not duplicate repo governance; see [docs/ai-governance-map.md](../../../docs/ai-governance-map.md)
- Do not treat this file as a penetration test; it is a template-oriented baseline
