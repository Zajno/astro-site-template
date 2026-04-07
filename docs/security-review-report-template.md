# Security review report (template)

Use this structure for manual or agent-assisted reviews. Remove sections that do not apply.

## Metadata

- **Scope:** (e.g. full repo / feature branch / staged files / paths: `…`)
- **Reviewer:** (human or agent + date)
- **Baseline:** (commit SHA or branch pair)

## Executive summary

- **Overall risk:** (Low / Medium / High)
- **Top findings:** (1–3 bullets)

## Findings

For each item:

| ID | Severity | Area | Location | Summary | Remediation |
|----|----------|------|----------|---------|-------------|
| SEC-001 | High | XSS | `path:line` | … | … |

**Severity:** Critical | High | Medium | Low | Informational

## Dependency and supply chain

- `yarn audit:deps` result: (pass / N issues)
- Notable upgrades or `resolutions`: (none / see below)

## Checklist (quick)

- [ ] No secrets or private URLs in committed files
- [ ] No unsafe raw HTML without sanitization for untrusted input
- [ ] Env and `PUBLIC_*` usage reviewed for client exposure
- [ ] New third-party scripts or iframes justified and scoped

## Follow-ups

- [ ] Task or ticket IDs (optional)
