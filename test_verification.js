const fs = require('fs');
const path = require('path');

let errors = [];

// 1. Check index.html
const indexHtml = fs.readFileSync('public/index.html', 'utf8');

// Mojibake check
if (indexHtml.includes('\u00C3') || indexHtml.includes('\u00C5') || indexHtml.includes('\u00C4') || indexHtml.includes('â€”')) {
  errors.push('index.html contains mojibake characters');
}

// Cinematic teaser check (must be removed)
if (indexHtml.includes('video-teaser') || indexHtml.includes('<video') || indexHtml.includes('elockman_intro.mp4')) {
  errors.push('index.html still contains video teaser / cinematic entrance!');
}

// Bureaucratic passport table check
if (indexHtml.includes('Stüdyo Kimliği') || indexHtml.includes('Geliştirici Pasaportu')) {
  errors.push('index.html still contains bureaucratic table!');
}

// 5 games check
const requiredGames = [
  'Garaj Efsanesi',
  'Kulüp Efsanesi',
  'Orbit Escape',
  'Ring Tycoon',
  'Hipodrom Ahırı'
];
for (const g of requiredGames) {
  if (!indexHtml.includes(g)) {
    errors.push('Missing game: ' + g);
  }
}

// Badge check
if (!indexHtml.includes('Bağımsız Mobil Oyun Stüdyosu')) {
  errors.push('Missing badge: Bağımsız Mobil Oyun Stüdyosu');
}

// JSON-LD check
const jsonLdMatch = indexHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (!jsonLdMatch) {
  errors.push('Missing JSON-LD structured data');
} else {
  try {
    const parsed = JSON.parse(jsonLdMatch[1]);
    if (!parsed['@graph'] || parsed['@graph'].length < 2) {
      errors.push('JSON-LD missing graph nodes');
    }
  } catch (e) {
    errors.push('Invalid JSON-LD syntax: ' + e.message);
  }
}

// Check all referenced assets exist on disk
const assetMatches = indexHtml.match(/["'](\/?assets\/[^"'#?]+)/g) || [];
for (const m of assetMatches) {
  const cleanPath = m.replace(/["']/g, '').replace(/^\//, '');
  const filePath = path.join('public', cleanPath);
  if (!fs.existsSync(filePath)) {
    errors.push('Referenced asset not found: ' + filePath);
  }
}

// 2. Check site.css
const siteCss = fs.readFileSync('public/assets/site.css', 'utf8');
if (!siteCss.includes('overflow-x: hidden')) {
  errors.push('site.css missing overflow-x: hidden safety');
}
if (!siteCss.includes('studio-hero.jpg')) {
  errors.push('site.css missing studio-hero.jpg');
}

// 3. Check render.yaml
const renderYaml = fs.readFileSync('render.yaml', 'utf8');
if (!renderYaml.includes('no-cache, no-store, must-revalidate')) {
  errors.push('render.yaml missing strong cache-control headers');
}

// 4. Check test-hub, privacy, terms
['public/test-hub.html', 'public/privacy.html', 'public/terms.html'].forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('\u00C3') || c.includes('\u00C5') || c.includes('â€”')) {
    errors.push(f + ' contains mojibake');
  }
  if (!c.includes('/assets/site.css?v=20261109_v3')) {
    errors.push(f + ' missing cache-busted site.css');
  }
});

if (errors.length > 0) {
  console.error('TEST FAILURES:');
  errors.forEach(e => console.error('  - ' + e));
  process.exit(1);
} else {
  console.log('ALL VERIFICATION CHECKS PASSED PERFECTLY!');
}
