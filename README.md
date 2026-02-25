# Ratcliffe Legacy Foundation — Brand Guidelines Site

A simple brand guidelines website for the Ratcliffe Legacy Foundation. Stakeholders and designers can browse and download the brand guidelines document, logos, fonts, ripple graphics, social media icons, and other brand assets.

## Features

- **Brand overview** — Brand adjectives and foundation mission
- **Color palette** — Full brand colors (Green, Red, Blue, Gray scales + neutrals)
- **Typography** — Brand fonts (Jubilat & Lexend) with examples and hierarchy
- **Guidelines document** — Download link for RLF-Brand-Guidelines.pdf
- **Asset library** — Thumbnails and individual downloads in SVG/PNG and font formats

## How to Run

The site uses `fetch()` to load `assets.json`, so it must be served over HTTP. Opening `index.html` directly (`file://`) will prevent assets from loading.

### Option 1: Python (built-in)

```bash
cd "Guidelines Site"
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

### Option 2: Node.js (npx serve)

```bash
cd "Guidelines Site"
npx serve .
```

### Option 3: VS Code Live Server

Right-click `index.html` and choose "Open with Live Server."

## Project Structure

```
Guidelines Site/
├── index.html          # Main page
├── styles.css          # Styles
├── app.js              # Asset loading and rendering
├── assets.json         # Asset manifest (paths to Final Assets)
├── Brand Guidelines/
│   └── RLF-Brand-Guidelines.pdf
├── Final Assets/
│   ├── Logo/
│   ├── Ripple Graphic/
│   ├── Social Media Icons/
│   └── Fonts/
└── README.md
```

## Updating the Asset Manifest

When new assets are added to the `Final Assets` folder, regenerate `assets.json`:

```bash
node scripts/generate-assets.js
```

(Requires Node.js.)
