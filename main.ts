import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Deadpan forecast for Zorblat, a city that does not exist.
// 159 characters, one line, deterministic on every run.
const LINE =
  "In Zorblat, the afternoon sun goes down for scheduled maintenance at 3 p.m., so temperatures hold at 54 degrees until the repair crew finishes at 8 p.m. sharp.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
