# Agent Instructions — Backend

Applies to all files under `backend/`. Overrides the root `AGENTS.md` for backend changes.

## Stack
Node.js + Express + Mongoose (MongoDB). JWT-based auth stored in HTTP-only cookies.

## Route Conventions
- Group related routes in `routes/`; keep controllers in `controllers/` — no business logic in route files.
- Return consistent shapes: `{ message }` for mutations, `{ data, page, pages }` for paginated lists.
- Use `asyncHandler` wrapper from `middleware/asyncHandler.js` on every async controller function.

## Model Rules
- All Mongoose schemas must define `timestamps: true`.
- Virtual fields and instance methods belong in the schema file, not in controllers.

## Configuration
- Numeric thresholds and limits must be read from `process.env` (with a sensible default), never hardcoded as literals.

## Do Not
- Do not bypass the `protect` or `admin` middleware for any write endpoint.
- Do not return raw Mongoose documents; always call `.toObject()` or shape the response manually.
