# Repo-Wide Guidelines

This is a full-stack e-commerce app (ProShop v2) with a Node/Express backend and a React frontend.

## General Rules
- Use `async/await` over raw Promises; never leave floating Promises unhandled.
- All API errors must be forwarded with `next(error)` — do not call `res.status().json()` directly in catch blocks.
- No `console.log` in committed code; use the `utils/logger.js` helper or remove before committing.
- Keep environment secrets in `.env`; never hard-code credentials or API keys.

## Code Style
- 2-space indentation, single quotes, no trailing semicolons (frontend); follow existing ESLint config.
- Function names should be descriptive verbs: `getProduct`, `updateOrderStatus`, not `product` or `doUpdate`.
- Prefer named exports over default exports in utility modules.

## Testing
- Every new route handler must have at least one integration test.
- Mock only external services (Stripe, email); hit the real DB in tests using a test database.

## Security
- Sanitize all user-supplied query parameters before passing to Mongoose.
- Authentication middleware (`protect`) must be applied to every route that mutates data.
- Never expose stack traces in production responses.
