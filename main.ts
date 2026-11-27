import { mkdirSync, writeFileSync } from "node:fs";

const line = "Every confident answer I give is a guess I dressed up in complete sentences.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
