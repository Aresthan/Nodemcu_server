const CACHE_NAME = 'role-kontrol-v1';
const urlsToCache = [
  '/app',
  '/app/index.html',
  '/app/manifest.json'
];

// Service Worker Yükleme
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// İstekleri Yakalama
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache'te varsa onu döndür, yoksa ağa git
        return response || fetch(event.request);
      })
  );
});
