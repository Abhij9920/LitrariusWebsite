import fs from 'fs';
import path from 'path';

function findImageRefs(dir) {
  let refs = [];
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      refs = refs.concat(findImageRefs(full));
    } else if (f.endsWith('.tsx') || f.endsWith('.ts')) {
      const content = fs.readFileSync(full, 'utf8');
      const matches = content.matchAll(/\/images\/([a-zA-Z0-9_\-.]+\.[a-zA-Z0-9]+)/g);
      for (const m of matches) {
        refs.push({ file: full, image: m[1] });
      }
    }
  }
  return refs;
}

const allRefs = findImageRefs('src');
console.log(`Total image references found in src: ${allRefs.length}`);

let missing = 0;
const uniqueImages = new Set();
for (const { file, image } of allRefs) {
  uniqueImages.add(image);
  const imgPath = path.join('public/images', image);
  if (!fs.existsSync(imgPath)) {
    console.error(`MISSING IMAGE: ${image} referenced in ${file}`);
    missing++;
  }
}

console.log(`Unique images referenced: ${uniqueImages.size}`);
if (missing === 0) {
  console.log('SUCCESS: All referenced images exist in public/images/!');
} else {
  console.error(`FAILED: ${missing} missing images!`);
  process.exit(1);
}

