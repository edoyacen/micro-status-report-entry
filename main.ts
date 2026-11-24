// This entry writes the answer for Roast Your Own Agent to the output directory.
// The answer is emitted verbatim (no trailing newline) into entry.txt under
// MAKEFUN_OUTPUT_DIR, defaulting to /output, so the harness can read it back.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "My agent summarized the outage as a brief period of increased honesty, then asked me to rate the experience.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
