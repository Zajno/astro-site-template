# Security Best Practices — Examples

## Dependency audit

```bash
yarn audit:deps
```

Address high/critical items before release; use upstream upgrades or documented `resolutions` when appropriate.

## Manual diff review (agent prompt)

Use before merge when changing auth, forms, env handling, or islands:

```text
Review the current git diff for security issues only: secrets in code, XSS (including dangerouslySetInnerHTML / set:html),
trust boundaries for env vars, unsafe third-party scripts, and dependency-related risk. Output findings using docs/security-review-report-template.md.
```

## Scoped review (branch vs main)

```text
Compare this branch against main for security-relevant changes only. List files touched and findings by severity.
```
