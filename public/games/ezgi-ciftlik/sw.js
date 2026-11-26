const CACHE_NAME = 'ezgi-ciftlik-shell-v5';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './style.css',
  './bundle.js',
  './img/icon-180.png',
  './img/icon-512.png',
  './img/splash.jpg',
  './assets/big-barn.glb',
  './assets/chicken.glb',
  './assets/cow.glb',
  './assets/pig.glb',
  './assets/sheep.glb'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key.startsWith('ezgi-ciftlik-shell-') && key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    try {
      const response = await fetch(request);
      if (response.ok) await cache.put(request, response.clone());
      return response;
    } catch (error) {
      const cached = await cache.match(request);
      if (cached) return cached;
      if (request.mode === 'navigate') return (await cache.match('./index.html')) || Response.error();
      return Response.error();
    }
  })());
});
