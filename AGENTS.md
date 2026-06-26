# Agent Instructions — Repo Root

These instructions apply to all files in the repository unless overridden by a closer `AGENTS.md`.

## Scope
Nearest-ancestor `AGENTS.md` takes precedence over this file for subdirectory changes.

## Conventions
- Follow the monorepo layout: `backend/` for Express, `frontend/` for React.
- Package management: use `pnpm` at the root; do not mix with `npm` or `yarn` in the same session.
- Branch names follow `type/short-description` (e.g. `feat/cart-discount`, `fix/auth-token-expiry`).

## PR Checklist
- [ ] No new `TODO` comments without a linked issue.
- [ ] `pnpm lint` passes with zero errors.
- [ ] Any new environment variable is documented in `readme.md`.

## Off-Limits
- Do not modify `pnpm-lock.yaml` manually.
- Do not alter the `uploads/` directory structure; it is managed by the file-upload middleware.
