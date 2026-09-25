import os
import glob
import re

replacements = {
    r'duration-\[1000ms\]': 'duration-[800ms]',
    r'duration-\[1200ms\]': 'duration-[1000ms]',
    r'duration-\[1500ms\]': 'duration-[1200ms]',
    r'duration-\[2000ms\]': 'duration-[1400ms]',
    r'duration-\[10000ms\]': 'duration-[1200ms]',
}

src_dir = r"C:\Users\Abhijeet\.gemini\antigravity-ide\scratch\literarius-react\src"
files = glob.glob(os.path.join(src_dir, '**', '*.tsx'), recursive=True)

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    for pattern, repl in replacements.items():
        new_content = re.sub(pattern, repl, new_content)
        
    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file}")
