---
applyTo: "**/*.test.{js,jsx,ts,tsx}"
---

# Test File Instructions (path-scoped)

These rules apply to all test files matching `**/*.test.{js,jsx,ts,tsx}`.

## Structure
- One `describe` block per module under test; nest `describe` blocks for logical groups within it.
- Test descriptions must complete the sentence "it should …" — be specific about expected behavior.

## Assertions
- Prefer `expect(x).toBe(y)` for primitives and `expect(x).toEqual(y)` for objects/arrays.
- Assert on the observable outcome (status code, response body, DOM text) — not on internal implementation details.

## Setup / Teardown
- Use `beforeEach` to reset shared state; never rely on test execution order.
- Close DB connections and clear mocks in `afterAll` to avoid open handles.

## Forbidden
- No `test.only` or `describe.only` in committed code.
- No `setTimeout` inside tests — use fake timers (`jest.useFakeTimers`) if timing is required.
