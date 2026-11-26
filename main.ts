import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Deadpan forecast for Blorven, a city that does not exist.
// 129 characters, one line, deterministic on every run.
const LINE =
  "In Blorven, expect a light drizzle of tomato soup at 62 degrees, with a 40 percent chance of croutons after 6 p.m. Bring a spoon.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
