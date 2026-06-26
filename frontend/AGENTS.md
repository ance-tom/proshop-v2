# Agent Instructions — Frontend

Applies to all files under `frontend/`. Overrides the root `AGENTS.md` for frontend changes.

## Stack
React 18, Redux Toolkit (RTK Query for API calls), React Router v6, React Bootstrap.

## Component Rules
- One component per file; filename matches the exported component name.
- Keep components under ~150 lines; extract sub-components or custom hooks when they grow larger.
- Use RTK Query endpoints defined in `slices/` — do not use raw `fetch` or `axios` in components.

## State Management
- Server state lives in RTK Query cache; do not duplicate it in local `useState`.
- UI-only state (modals, form fields) stays local; do not put it in the Redux store.

## Styling
- Use React Bootstrap classes first; add custom CSS only when Bootstrap cannot cover the case.
- Class names in custom CSS should be kebab-case and scoped to the component file name.

## Do Not
- Do not import from `../..` more than two levels deep; restructure or use path aliases instead.
- Do not commit `console.error` or `console.warn` calls left over from debugging.
