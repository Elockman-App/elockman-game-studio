const CACHE_NAME = 'ring-tycoon-v5';
const NETWORK_FIRST = ['./', './index.html', './manifest.json', './sw.js'];
const ASSETS = [
  './index.html',
  './manifest.json',
  './privacy-policy.html',
  './img/icon.webp',
  './img/icon-192.png',
  './img/icon-512.png',
  './img/studio_logo.webp',
  './img/splash.webp',
  './img/bg_arena.webp',
  './img/bg_gym.webp',
  './img/belt_gold.webp',
  './img/bx_1.webp',
  './img/bx_2.webp',
  './img/bx_3.webp',
  './img/bx_4.webp',
  './img/bx_5.webp',
  './sfx/bell.mp3',
  './sfx/beeps.mp3',
  './sfx/cheer.mp3',
  './sfx/click.mp3',
  './sfx/coin.mp3',
  './sfx/crowd.mp3',
  './sfx/lose.mp3',
  './sfx/menu.mp3',
  './sfx/tension.mp3',
  './sfx/win.mp3',
  './fonts/alfa-slab-one-latin-400-normal.woff2',
  './fonts/alfa-slab-one-latin-ext-400-normal.woff2',
  './fonts/barlow-condensed-latin-600-normal.woff2',
  './fonts/barlow-condensed-latin-700-normal.woff2',
  './fonts/barlow-condensed-latin-ext-600-normal.woff2',
  './fonts/barlow-condensed-latin-ext-700-normal.woff2',
  './fonts/barlow-latin-400-normal.woff2',
  './fonts/barlow-latin-600-normal.woff2',
  './fonts/barlow-latin-700-normal.woff2',
  './fonts/barlow-latin-ext-400-normal.woff2',
  './fonts/barlow-latin-ext-600-normal.woff2',
  './fonts/barlow-latin-ext-700-normal.woff2'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS).catch(() => {})).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request).then(res => {
      if (res && res.status === 200 && res.type === 'basic') {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
      }
      return res;
    }).catch(() => caches.match(event.request, { ignoreSearch: true }).then(r => r || caches.match('./index.html')))
  );
});
