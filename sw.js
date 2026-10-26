/* Minimal service worker: lets Chrome treat the page as an installable app. No caching, so the app is always live. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* network only */ });
