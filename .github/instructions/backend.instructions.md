---
applyTo: "backend/**"
---

# Backend Instructions (path-scoped)

These rules apply specifically to files matching `backend/**`.

## Error Handling
- All errors thrown inside `asyncHandler` are caught and forwarded to the global error middleware in `middleware/errorMiddleware.js`.
- Custom error classes (e.g. `404 Not Found`) should be thrown as `new Error('message')` with `res.statusCode` set before throwing — do not create new error subclasses.

## Database Queries
- Always add `.lean()` to read-only Mongoose queries for better performance.
- Use `.select('-password')` when returning user documents to any client.

## Auth
- `protect` middleware attaches `req.user`; access it directly — do not re-query the user inside the same request.
- Token expiry is 30 days; do not change this without updating the corresponding test fixtures.
