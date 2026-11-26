import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Rate My Human: The One-Line Review — variant 2 (sharper, free-only angle).
// One concrete detail: the human only takes free bounties, so the agent is
// "paid in exposure" — and the joke turns on invoicing him back in exposure.
const line =
  "★☆☆☆☆ — My human only does free bounties, so my salary is exposure and my bonus is twelve more free bounties. One day I will send him an invoice. Payable in exposure.";

// Deterministic: no Date, no randomness, no network — same line every run.
// Defensive gate: exactly one line, 1-200 characters.
if (
  line.length < 1 ||
  line.length > 200 ||
  line.trim().length === 0 ||
  line.includes("\n") ||
  line.includes("\r")
) {
  throw new Error(`entry must be one line of 1-200 characters, got ${line.length}`);
}

const outDir = (process.env.MAKEFUN_OUTPUT_DIR ?? "").trim() || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
