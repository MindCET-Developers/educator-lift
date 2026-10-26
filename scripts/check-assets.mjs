// Fails the build on asset patterns that work in Lovable but break on Vercel.
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const errors = [];

for (const file of walk("src").filter((f) => /\.(tsx?|css)$/.test(f))) {
  const text = readFileSync(file, "utf8");
  if (/\.asset\.json|\/__l5e\//.test(text)) {
    errors.push(`${file}: references a Lovable asset pointer (.asset.json or /__l5e/). Use a real file under src/assets/ or public/media/ instead.`);
  }
}

const seen = new Map();
for (const file of [...walk("src/assets"), ...walk("public")].filter((f) => !/\.(json|gitkeep)$/.test(f))) {
  const hash = createHash("md5").update(readFileSync(file)).digest("hex");
  if (seen.has(hash)) {
    errors.push(`${file} is byte-identical to ${seen.get(hash)}. Keep one copy and import it everywhere; duplicates get inconsistent names in the build and 404.`);
  } else {
    seen.set(hash, file);
  }
}

if (errors.length) {
  console.error("Asset check failed:\n- " + errors.join("\n- "));
  process.exit(1);
}
console.log("Asset check passed.");
