# Curated Images & Validation Pipeline

**IMPORTANT:**
Do NOT re-run scripts that download generic/random stock photos (like the former `download-images.cjs`).

All institution campus imagery in `public/images/` is strictly curated from Wikimedia Commons and official archives. Every institution image is:
1. **Provenance-checked**: Confirmed to depict the exact institution and campus.
2. **Visually verified**: Matches independent photographs of the landmark.
3. **Quality-checked**: High resolution (>= 1200px width), landscape ratio, clear landmark view.
4. **License-compliant**: CC0, CC BY, or CC BY-SA with full attribution recorded.
5. **1-to-1 Mapping**: Each university has one unique verified image. No university image is reused for other universities or generic cards.

See `images.manifest.json` for the complete record of verified files and `IMAGE_CREDITS.md` in the project root.

