const CACHE_NAME = 'v1_cache_miapp';

// Instalar el Service Worker y guardar en caché la estructura básica
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll([
          './',
          './index.html',
          './styles.css',
          './manifest.json'
        ]).then(() => self.skipWaiting());
      })
  );
});

// Activar el Service Worker
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Hacer que la app funcione offline respondiendo con la caché
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});