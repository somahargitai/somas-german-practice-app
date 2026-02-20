# Testing & Quality Gates

Before claiming a task is done:
- Typecheck passes (or a clear explanation if not set up yet).
- Lint passes.
- Build passes (when scripts exist).

Prefer:
- Small smoke tests for critical flows.
- No brittle snapshot tests unless needed.