const CACHE_NAME = 'baileys-deals-cache';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/renderer.js',
    '/images/logo.png',
    '/images/deal1.jpg',
    '/images/deal2.jpg',
    '/images/deal3.jpg',
    '/images/deal4.jpg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
