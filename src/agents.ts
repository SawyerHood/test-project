import fs from 'fs';
import path from 'path';
import os from 'os';

/**
 * Save the provided system prompt into AGENTS.md inside the Codex folder.
 *
 * Behavior:
 * - Detect Codex home as `$CODEX_HOME` or `~/.codex`.
 * - Only writes if the Codex folder exists (signals Codex is in use).
 * - Overwrites `AGENTS.md` with the given `systemPrompt` string.
 *
 * @param systemPrompt The system prompt text to persist.
 * @returns true if written, false if skipped (Codex not detected).
 */
export function saveSystemPromptToAgentsMd(systemPrompt: string): boolean {
  const codexHome = process.env.CODEX_HOME || path.join(os.homedir(), '.codex');

  try {
    const stats = fs.statSync(codexHome);
    if (!stats.isDirectory()) return false;
  } catch {
    // Codex folder not found: consider not using Codex, skip writing.
    return false;
  }

  const agentsPath = path.join(codexHome, 'AGENTS.md');

  // Write synchronously to ensure durability at call time.
  fs.writeFileSync(agentsPath, systemPrompt ?? '', { encoding: 'utf8' });
  return true;
}

export default saveSystemPromptToAgentsMd;

