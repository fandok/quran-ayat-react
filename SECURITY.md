# Security Policy

## Supported Versions

This is a static web app deployed from `master`. No release branches are
maintained, so only the current `master` receives fixes.

| Version               | Supported          |
| --------------------- | ------------------ |
| master (latest)       | :white_check_mark: |
| older commits / forks | :x:                |

## Reporting a Vulnerability

Report privately through GitHub's advisory form:

https://github.com/fandok/quran-ayat-react/security/advisories/new

Please don't open a public issue for a suspected vulnerability.

I aim to acknowledge within 7 days. If the report is accepted, I'll ship a fix
and publish a GitHub security advisory crediting you unless you prefer
otherwise. If declined, I'll explain why.

## Scope

In scope:

- Application code in `src/`
- Build configuration: `vite.config.ts`, `index.html`, `pnpm-lock.yaml`
- Deployed security headers and CSP in `vercel.json`

Out of scope:

- The upstream API at `api.alquran.cloud` — report those to that project
- Dependency versions already tracked by Dependabot
  (https://github.com/fandok/quran-ayat-react/security/dependabot) — a bump PR
  is more useful than an advisory

## Notes

There is no backend, no authentication and no stored user data. Everything in
the built bundle is public by design, so "secret exposed in bundle" is not a
valid finding.
