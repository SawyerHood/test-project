# Save system prompt to Codex AGENTS.md

This package now includes a helper to persist a user's system prompt into the Codex CLI folder when Codex is in use.

- Function: `saveSystemPromptToAgentsMd(systemPrompt: string)`
- Behavior: Writes the provided system prompt to `~/.codex/AGENTS.md` (or `$CODEX_HOME/AGENTS.md`) only if the Codex folder exists.

Usage example (TypeScript):

```
import { saveSystemPromptToAgentsMd } from './src';

// Call this after updating the user's settings
saveSystemPromptToAgentsMd(settings.systemPrompt);
```

Notes:
- Codex detection is based on existence of the `~/.codex` directory (or `$CODEX_HOME`).
- The file is overwritten on each call to reflect the latest system prompt.
This is a test repo for mathimatical operations.
