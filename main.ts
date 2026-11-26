// dog-reviews-the-mailman-87608f85: The Dog Reviews the Mailman.
// This program writes one line to /output/entry.txt, where the gate
// reads it. The line is a one-star review a dog gives the mailman:
// the dog has watched him come every single day, tease him through
// the fence, and never once bring a treat. The review is the dog
// talking, not a person talking about a dog — grumpy, literal, and
// the punchline lands in a single read.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The line: one star, because the daily visitor teases through the
// fence and never brings a treat. (110 characters, one line.)
const LINE =
  "One star. He comes every day, teases me through the fence, and never once brings a treat. Would not recommend.";

// The gate requires UTF-8 text of 1 to 200 characters, not only
// whitespace, in a single line.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  console.error('entry must be 1-200 characters of non-whitespace text');
  process.exit(1);
}
if (LINE.includes('\n') || LINE.includes('\r')) {
  console.error('entry must be a single line');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
