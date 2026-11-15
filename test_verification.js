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

// Verify all 5 games have working Web Oyna links on elockmangames.com (no onrender.com)
const requiredGameSlugs = [
  'garaj-efsanesi',
  'kulup-efsanesi',
  'orbit-escape',
  'ring-tycoon',
  'hipodrom-ahiri'
];
for (const slug of requiredGameSlugs) {
  const u = `https://elockmangames.com/games/${slug}/`;
  if (!indexHtml.includes(u)) {
    errors.push('Missing working game URL in index.html: ' + u);
  }
  const gameIndexPath = path.join('public', 'games', slug, 'index.html');
  if (!fs.existsSync(gameIndexPath)) {
    errors.push('Missing self-hosted game build: ' + gameIndexPath);
  }
}
if (indexHtml.includes('onrender.com')) {
  errors.push('index.html must not contain onrender.com URLs');
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

// Check for forbidden inline executable script (CSP strict compliance)
const rawScripts = indexHtml.match(/<script\b[^>]*>([\s\S]*?)<\/script>/gi) || [];
for (const s of rawScripts) {
  if (s.includes('application/ld+json')) continue;
  if (!s.includes('src=')) {
    errors.push('Found inline executable script violating strict CSP: ' + s.slice(0, 50));
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
const requiredPlayRoutes = [
  '/play/garaj-efsanesi',
  '/play/kulup-efsanesi',
  '/play/orbit-escape',
  '/play/ring-tycoon',
  '/play/hipodrom-ahiri'
];
for (const route of requiredPlayRoutes) {
  if (!renderYaml.includes(route)) {
    errors.push('render.yaml missing server-side redirect route: ' + route);
  }
}

// 4. Check test-hub, privacy, terms
['public/test-hub.html', 'public/privacy.html', 'public/terms.html'].forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('\u00C3') || c.includes('\u00C5') || c.includes('â€”')) {
    errors.push(f + ' contains mojibake');
  }
  if (!c.includes('/assets/site.css?v=20261109_v4')) {
    errors.push(f + ' missing cache-busted site.css');
  }
});

// 5. Check fallback files
if (!fs.existsSync('public/style.css') || !fs.readFileSync('public/style.css', 'utf8').includes('site.css')) {
  errors.push('Missing or invalid public/style.css fallback');
}
if (!fs.existsSync('public/app.js')) {
  errors.push('Missing public/app.js fallback');
}
if (!fs.existsSync('public/assets/site.js')) {
  errors.push('Missing public/assets/site.js');
}

// 6. Faz 4: CEO Mobil PWA Paneli checks
const requiredPwaFiles = [
  'public/ceo-panel.html',
  'public/manifest.json',
  'public/sw.js',
  'public/assets/ceo-panel.css',
  'public/assets/ceo-panel.js',
  'public/assets/ceo-snapshot.json',
  'public/assets/emulator-latest.png',
  'server-ceo.mjs'
];
for (const pwaFile of requiredPwaFiles) {
  if (!fs.existsSync(pwaFile)) {
    errors.push('Missing Faz 4 PWA file: ' + pwaFile);
  }
}

if (fs.existsSync('public/ceo-panel.html')) {
  const ceoHtml = fs.readFileSync('public/ceo-panel.html', 'utf8');
  if (ceoHtml.includes('\u00C3') || ceoHtml.includes('\u00C5') || ceoHtml.includes('\u00C4') || ceoHtml.includes('â€”')) {
    errors.push('public/ceo-panel.html contains mojibake characters');
  }
  if (!ceoHtml.includes('<link rel="manifest" href="/manifest.json">')) {
    errors.push('public/ceo-panel.html missing manifest link');
  }
  if (!ceoHtml.includes('/assets/ceo-panel.css') || !ceoHtml.includes('/assets/ceo-panel.js')) {
    errors.push('public/ceo-panel.html missing external css/js references');
  }
  const ceoScripts = ceoHtml.match(/<script\b[^>]*>([\s\S]*?)<\/script>/gi) || [];
  for (const s of ceoScripts) {
    if (!s.includes('src=')) {
      errors.push('public/ceo-panel.html contains inline executable script violating strict CSP');
    }
  }
  if (/\son[a-z]+\s*=/i.test(ceoHtml)) {
    errors.push('public/ceo-panel.html contains inline event handler attribute');
  }
  for (const btnId of ['btn-cmd-scan', 'btn-cmd-report', 'btn-cmd-emulator']) {
    if (!ceoHtml.includes(`id="${btnId}"`)) {
      errors.push('public/ceo-panel.html missing COO command button: ' + btnId);
    }
  }
}

if (fs.existsSync('public/manifest.json')) {
  try {
    const manifest = JSON.parse(fs.readFileSync('public/manifest.json', 'utf8'));
    if (manifest.start_url !== '/ceo-panel.html' || manifest.display !== 'standalone') {
      errors.push('public/manifest.json has invalid start_url or display mode');
    }
  } catch (e) {
    errors.push('Invalid JSON in public/manifest.json: ' + e.message);
  }
}

if (fs.existsSync('public/assets/ceo-snapshot.json')) {
  try {
    const snap = JSON.parse(fs.readFileSync('public/assets/ceo-snapshot.json', 'utf8'));
    if (!Array.isArray(snap.games) || snap.games.length !== 5) {
      errors.push('public/assets/ceo-snapshot.json must list all 5 studio games');
    }
    if (snap.studio?.googleGroupEmail !== 'elockman-testers@googlegroups.com') {
      errors.push('public/assets/ceo-snapshot.json missing studio Google Group email');
    }
  } catch (e) {
    errors.push('Invalid JSON in public/assets/ceo-snapshot.json: ' + e.message);
  }
}

if (errors.length > 0) {
  console.error('TEST FAILURES:');
  errors.forEach(e => console.error('  - ' + e));
  process.exit(1);
} else {
  console.log('ALL VERIFICATION CHECKS PASSED PERFECTLY!');
}
