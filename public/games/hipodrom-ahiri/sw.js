const CACHE_NAME = 'hipodrom-ahiri-v12';

// index.html daima internetten cekilerek guncellemeler aninda yansir.
// Diger statik dosyalar (gorseller, ikonlar) cache-first ile hizli acilir.
const NETWORK_FIRST = ['./', './index.html', './manifest.json', './sw.js'];

const ASSETS = [
  './index.html',
  './manifest.json',
  './privacy-policy.html',
  './img/icon.webp',
  './img/icon-192.png',
  './img/icon-512.png',
  './img/icon-maskable-192.png',
  './img/icon-maskable-512.png',
  './img/al.webp',
  './img/bg_arka.webp',
  './img/bg_tribun.webp',
  './img/dirt.webp',
  './img/doru.webp',
  './img/gate_door.webp',
  './img/gate_frame.webp',
  './img/kir.webp',
  './img/kula.webp',
  './img/run_al.webp',
  './img/run_doru.webp',
  './img/run_kir.webp',
  './img/run_kula.webp',
  './img/run_mask.webp',
  './img/run_yagiz.webp',
  './img/splash.webp',
  './img/turf.webp',
  './img/walk_al.webp',
  './img/walk_doru.webp',
  './img/walk_kir.webp',
  './img/walk_kula.webp',
  './img/walk_mask.webp',
  './img/walk_yagiz.webp',
  './img/whip_al.webp',
  './img/whip_doru.webp',
  './img/whip_kir.webp',
  './img/whip_kula.webp',
  './img/whip_mask.webp',
  './img/whip_yagiz.webp',
  './img/yagiz.webp',
  './img/splash_wide.webp',
  './img/studio_logo.webp',
  './sfx/click.mp3',
  './sfx/coin.mp3',
  './sfx/gate.mp3',
  './sfx/bell.mp3',
  './sfx/beeps.mp3',
  './sfx/gallop.mp3',
  './sfx/crowd.mp3',
  './sfx/cheer.mp3',
  './sfx/neigh.mp3',
  './sfx/snort.mp3',
  './sfx/menu.mp3',
  './sfx/tension.mp3',
  './sfx/win.mp3',
  './sfx/lose.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS).catch(err => {
        console.warn('Some assets failed to cache:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      })
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const pathname = url.pathname.replace(/\/$/, '/index.html');
  const isNetworkFirst = NETWORK_FIRST.some(p => {
    const norm = p.replace('./', '/');
    return pathname === norm || pathname.endsWith('/index.html');
  });

  if (isNetworkFirst) {
    // Network-first: once internetten cek, hata olursa cache'e don
    event.respondWith(
      fetch(event.request).then(response => {
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => caches.match(event.request, { ignoreSearch: true }).then(cached => cached || caches.match('./index.html')))
    );
  } else {
    // Cache-first: statik varliklar icin hizli acilis
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') return response;
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        }).catch(() => caches.match('./index.html'));
      })
    );
  }
});

// Arka planda guncelleme: internet geri geldiginde / periyodik olarak
// oyun dosyalarini tazeler, boylece cevrimdisi surum hep guncel kalir.
function refreshCore() {
  return caches.open(CACHE_NAME).then(cache =>
    Promise.all(NETWORK_FIRST.map(u => fetch(u, { cache: 'no-store' })
      .then(r => { if (r && r.ok) return cache.put(u, r); })
      .catch(() => {})))
  );
}
self.addEventListener('sync', event => {
  if (event.tag === 'hipodrom-sync') event.waitUntil(refreshCore());
});
self.addEventListener('periodicsync', event => {
  if (event.tag === 'hipodrom-guncelle') event.waitUntil(refreshCore());
});

// Bildirimler (ileride "yarisin basliyor" hatirlatmalari icin hazir)
self.addEventListener('push', event => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch (e) { data = { body: event.data && event.data.text() }; }
  event.waitUntil(self.registration.showNotification(data.title || 'Hipodrom Ahırı', {
    body: data.body || 'Ahırında seni bekleyen atlar var!',
    icon: './img/icon-192.png',
    badge: './img/icon-192.png',
    data: { url: data.url || './index.html' }
  }));
});
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || './index.html';
  event.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) { if ('focus' in c) return c.focus(); }
    return self.clients.openWindow(url);
  }));
});
