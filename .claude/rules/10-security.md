# Security & Safety

Never:
- Read or modify `.env`, `.env.*`, secrets, keys, tokens.
- Run destructive shell commands (rm -rf, sudo, disk/network admin).
- Force-push or rewrite git history without explicit approval.

Always:
- Keep secrets out of git.
- If credentials are needed, ask for them; never invent values.