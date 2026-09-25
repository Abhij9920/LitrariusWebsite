const fs = require('fs');
const path = require('path');

const replacements = {
    'duration-\\[1000ms\\]': 'duration-[800ms]',
    'duration-\\[1200ms\\]': 'duration-[1000ms]',
    'duration-\\[1500ms\\]': 'duration-[1200ms]',
    'duration-\\[2000ms\\]': 'duration-[1400ms]',
    'duration-\\[10000ms\\]': 'duration-[1200ms]'
};

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk(path.join(__dirname, 'src'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    for (const [pattern, replacement] of Object.entries(replacements)) {
        content = content.replace(new RegExp(pattern, 'g'), replacement);
    }
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
