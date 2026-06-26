---
applyTo: "frontend/**"
---

# Frontend Instructions (path-scoped)

These rules apply specifically to files matching `frontend/**`.

## API Integration
- Use RTK Query hooks (`useGetProductsQuery`, `useLoginMutation`, etc.) generated from `slices/`.
- Always handle the `isLoading` and `isError` states returned by RTK Query hooks; never assume data is immediately available.

## Forms
- Controlled inputs only — no uncontrolled refs for form fields.
- Validate on submit, not on every keystroke, unless UX explicitly requires inline validation.

## Accessibility
- Every `<img>` must have a descriptive `alt` attribute.
- Interactive elements (`<button>`, `<a>`) must be keyboard-navigable; do not use `onClick` on `<div>` elements.

## Performance
- Lazy-load route-level components with `React.lazy` + `Suspense`.
- Avoid anonymous arrow functions as `onClick` props on list items — extract named handlers.
