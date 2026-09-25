const fs = require('fs');
const https = require('https');
const path = require('path');

const imagesOverrides = {
  'hero-australia.webp': 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1600&fm=webp&q=80'
}

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function run() {
  const dir = path.join(__dirname, 'public', 'images');
  for (const [filename, url] of Object.entries(imagesOverrides)) {
    const dest = path.join(dir, filename);
    console.log(`Downloading ${filename}...`);
    try {
      await download(url, dest);
      console.log(`✓ Downloaded ${filename}`);
    } catch (e) {
      console.error(`✗ Failed to download ${filename}:`, e.message);
    }
  }
}

run();
