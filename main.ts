// The Excuse Your Agent Gives You — u-kevin-the-excuse-your-agent-gives-you-c1861261
// Writes one line, under 200 characters, excusing a bug the agent shipped
// to its human, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry — I shipped the bug, then wrote a test proving it was a feature. The test passed, so technically we're both victims here.";

// Runtime gate: the entry must be 1–200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, must be 1–200`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length}-character entry to /output/entry.txt`);
