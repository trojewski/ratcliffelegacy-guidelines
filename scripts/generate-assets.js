#!/usr/bin/env node
/**
 * Generates assets.json manifest from Final Assets folder
 * Run: node scripts/generate-assets.js
 */

const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '..', 'Final Assets');
const OUTPUT_FILE = path.join(__dirname, '..', 'assets.json');

const IMAGE_EXT = ['.svg', '.png'];
const FONT_EXT = ['.ttf', '.otf', '.woff', '.woff2'];

function getAllFiles(dir, baseDir = dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath);
    
    if (entry.isDirectory()) {
      if (!entry.name.startsWith('•') && !entry.name.includes('Working')) {
        results.push(...getAllFiles(fullPath, baseDir));
      }
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (IMAGE_EXT.includes(ext) || FONT_EXT.includes(ext)) {
        results.push(relativePath.replace(/\\/g, '/'));
      }
    }
  }
  
  return results;
}

function categorizeAsset(filePath) {
  const parts = filePath.split('/');
  if (parts[0] !== 'Final Assets') {
    parts.unshift('Final Assets');
  }
  const category = parts[1]; // Logo, Ripple Graphic, Fonts, etc.
  const ext = path.extname(filePath).toLowerCase();
  const isFont = FONT_EXT.includes(ext);
  
  return { category, isFont, path: filePath };
}

function groupAssets(files) {
  const groups = {};
  
  for (const file of files) {
    const { category, isFont, path: filePath } = categorizeAsset(file);
    if (!groups[category]) groups[category] = { images: [], fonts: [] };
    
    const name = path.basename(filePath, path.extname(filePath));
    const ext = path.extname(filePath).toLowerCase().replace('.', '');
    
    const asset = {
      name,
      path: filePath,
      ext: ext.toUpperCase(),
    };
    
    if (isFont) {
      const fontFamily = parts => parts.includes('Jubilat') ? 'Jubilat' : 'Lexend';
      const parts = filePath.split('/');
      asset.family = fontFamily(parts);
      groups[category].fonts.push(asset);
    } else {
      // Group by base name - same asset in SVG and PNG
      const baseKey = `${path.dirname(filePath)}/${name}`;
      if (!groups[category].imagesByBase) groups[category].imagesByBase = {};
      if (!groups[category].imagesByBase[baseKey]) {
        groups[category].imagesByBase[baseKey] = { name, formats: [] };
      }
      groups[category].imagesByBase[baseKey].formats.push({ path: filePath, ext });
    }
  }
  
  // Flatten images
  for (const cat of Object.keys(groups)) {
    const imagesByBase = groups[cat].imagesByBase || {};
    groups[cat].images = Object.values(imagesByBase).map(item => ({
      name: item.name,
      formats: item.formats,
      thumbnail: item.formats.find(f => f.ext === 'svg')?.path || item.formats[0]?.path,
    }));
    delete groups[cat].imagesByBase;
  }
  
  return groups;
}

// Fix: files are relative to Final Assets
function categorizeAssetFixed(filePath) {
  const parts = filePath.split('/');
  const category = parts[1]; // Logo, Ripple Graphic, Fonts, etc. (parts[0] is "Final Assets")
  const ext = path.extname(filePath).toLowerCase();
  const isFont = FONT_EXT.includes(ext);
  
  return { category, isFont };
}

function groupAssetsFixed(files) {
  const groups = {};
  
  for (const file of files) {
    const fullPath = 'Final Assets/' + file;
    const { category, isFont } = categorizeAssetFixed(fullPath);
    if (!groups[category]) groups[category] = { images: [], fonts: [] };
    
    const name = path.basename(file, path.extname(file));
    const ext = path.extname(file).toLowerCase().replace('.', '');
    
    const asset = {
      name,
      path: fullPath,
      ext: ext.toUpperCase(),
    };
    
    if (isFont) {
      asset.family = fullPath.includes('Jubilat') ? 'Jubilat' : 'Lexend';
      groups[category].fonts.push(asset);
    } else {
      const dir = path.dirname(fullPath);
      const baseKey = dir + '/' + name;
      if (!groups[category].imagesByBase) groups[category].imagesByBase = {};
      if (!groups[category].imagesByBase[baseKey]) {
        groups[category].imagesByBase[baseKey] = { name, formats: [] };
      }
      groups[category].imagesByBase[baseKey].formats.push({ path: fullPath, ext });
    }
  }
  
  for (const cat of Object.keys(groups)) {
    const imagesByBase = groups[cat].imagesByBase || {};
    groups[cat].images = Object.values(imagesByBase).map(item => ({
      name: item.name,
      formats: item.formats,
      thumbnail: item.formats.find(f => f.ext === 'svg')?.path || item.formats[0]?.path,
    }));
    delete groups[cat].imagesByBase;
  }
  
  return groups;
}

const files = getAllFiles(ASSETS_DIR);
const groups = groupAssetsFixed(files);

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(groups, null, 2));
console.log(`Generated ${OUTPUT_FILE} with ${files.length} assets`);
