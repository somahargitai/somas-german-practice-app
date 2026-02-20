# Next.js Conventions

- Use App Router under `src/app/`.
- Prefer React Server Components; only add `"use client"` when necessary.
- Route handlers in `src/app/api/.../route.ts`.
- Keep server-only logic out of client components.
- Use `next/navigation` for routing in App Router.