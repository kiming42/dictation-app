const CACHE_NAME = 'dictation-app-v17';

// 安裝 Service Worker
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

// 啟用 Service Worker
self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

// 攔截網路請求 (滿足 PWA 可安裝條件)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
