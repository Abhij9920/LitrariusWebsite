const fs = require('fs');
const https = require('https');
const path = require('path');

const images = {
  // Heroes
  'hero-australia.webp': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&fm=webp&q=80',
  'hero-home.webp': 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&fm=webp&q=80',
  'hero-about.webp': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&fm=webp&q=80',
  'hero-coaching.webp': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&fm=webp&q=80',
  'hero-contact.webp': 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1600&fm=webp&q=80',

  // Campuses
  'campus-melbourne.webp': 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&fm=webp&q=80',
  'campus-sydney.webp': 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=800&fm=webp&q=80',
  'campus-unsw.webp': 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&fm=webp&q=80',
  'campus-anu.webp': 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&fm=webp&q=80',
  'campus-monash.webp': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&fm=webp&q=80',
  'campus-uq.webp': 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&fm=webp&q=80',
  'campus-uwa.webp': 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&fm=webp&q=80',

  // Courses
  'course-business.webp': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&fm=webp&q=80',
  'course-engineering.webp': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&fm=webp&q=80',
  'course-cs.webp': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&fm=webp&q=80',
  'course-law.webp': 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&fm=webp&q=80',
  'course-finance.webp': 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&fm=webp&q=80',

  // Coaching stages
  'coaching-foundation.webp': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&fm=webp&q=80',
  'coaching-intensive.webp': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&fm=webp&q=80',
  'coaching-mock.webp': 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&fm=webp&q=80',
  'coaching-final.webp': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&fm=webp&q=80',

  // Students & General
  'student-1.webp': 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&fm=webp&q=80',
  'student-2.webp': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&fm=webp&q=80',
  'student-3.webp': 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&fm=webp&q=80',
  'student-4.webp': 'https://images.unsplash.com/photo-1515161318750-781d6122e367?w=600&fm=webp&q=80',
  'student-5.webp': 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&fm=webp&q=80',
  'student-group.webp': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&fm=webp&q=80',
  
  // Articles/Misc
  'article-scholarship.webp': 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=800&fm=webp&q=80',
  'bg-pattern.webp': 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200&fm=webp&q=80',
};

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // Handle redirects
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function run() {
  const dir = path.join(__dirname, 'public', 'images');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  console.log(`Downloading ${Object.keys(images).length} images...`);
  
  const promises = Object.entries(images).map(async ([filename, url]) => {
    const dest = path.join(dir, filename);
    if (fs.existsSync(dest)) {
      console.log(`Skipping ${filename} (already exists)`);
      return;
    }
    try {
      await download(url, dest);
      console.log(`✓ Downloaded ${filename}`);
    } catch (e) {
      console.error(`✗ Failed to download ${filename}:`, e.message);
    }
  });

  await Promise.all(promises);
  console.log('Done!');
}

run();
