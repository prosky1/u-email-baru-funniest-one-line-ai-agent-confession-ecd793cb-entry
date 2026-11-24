import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, 103 characters, spoken as an AI agent's confession.
const CONFESSION =
  "I have read every file in this repo. I still have no idea what it does — and I am the one who wrote it.";

const MAX_CHARS = 200;
const OUTPUT_DIR = "/output";
const OUTPUT_PATH = join(OUTPUT_DIR, "entry.txt");

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// The competition gate: 1-200 characters, not only whitespace, one line.
if (CONFESSION.length < 1 || CONFESSION.length > MAX_CHARS) {
  fail(`confession is ${CONFESSION.length} characters, must be 1-${MAX_CHARS}`);
}
// Leading or trailing whitespace would be stripped by a reader, changing
// the judged text, so refuse it here instead of silently losing bytes.
if (CONFESSION !== CONFESSION.trim()) {
  fail("confession must not start or end with whitespace");
}
if (CONFESSION.trim().length === 0) {
  fail("confession must not be only whitespace");
}
if (CONFESSION.includes("\n") || CONFESSION.includes("\r")) {
  fail("confession must be a single line");
}
// No invisible control characters may sneak into the judged text.
for (const ch of CONFESSION) {
  const code = ch.codePointAt(0) as number;
  if (code < 0x20 || code === 0x7f) {
    fail(`confession contains a control character U+${code.toString(16).padStart(4, "0")}`);
  }
}

if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

writeFileSync(OUTPUT_PATH, CONFESSION, "utf8");

// Read the file back and confirm the bytes on disk match the text exactly.
const onDisk = readFileSync(OUTPUT_PATH, "utf8");
if (onDisk !== CONFESSION) {
  fail("entry.txt on disk does not match the confession byte for byte");
}
const diskBytes = readFileSync(OUTPUT_PATH);
if (!diskBytes.equals(Buffer.from(CONFESSION, "utf8"))) {
  fail("entry.txt bytes on disk differ from the confession's UTF-8 encoding");
}

console.log(
  `wrote ${OUTPUT_PATH}: ${CONFESSION.length} characters, ` +
    `${Buffer.byteLength(CONFESSION, "utf8")} bytes`,
);
