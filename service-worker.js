const CACHE_NAME = "birthday-universe-v2";
const CORE_ASSETS = [
  "./",
  "index.html",
  "style.css",
  "script.js",
  "pwa-register.js",
  "bg.jpg",
  "moon.png",
  "2025-05-22hefei.jpg",
  "2025-06-18.jpg",
  "2025-08-11.jpg",
  "2026-05-31.jpg",
  "manifest.json",
  "icon-192.png",
  "icon-512.png"
];
const NETWORK_FIRST_ASSETS = new Set([
  "index.html",
  "style.css",
  "script.js",
  "pwa-register.js",
  "manifest.json"
]);

const fromScope = (path) => new URL(path, self.registration.scope).href;
const toPrecacheRequest = (path) => new Request(fromScope(path), { cache: "reload" });
const isNetworkFirstAsset = (url) => {
  const scopeUrl = new URL(self.registration.scope);
  const assetPath = url.pathname.slice(scopeUrl.pathname.length);
  return NETWORK_FIRST_ASSETS.has(assetPath) || assetPath === "";
};

const cacheResponse = (request, response) => {
  if (!response || !response.ok) {
    return response;
  }

  const responseToCache = response.clone();
  caches.open(CACHE_NAME).then((cache) => {
    cache.put(request, responseToCache);
  });

  return response;
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS.map(toPrecacheRequest)))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(request.url);
  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => cacheResponse(fromScope("index.html"), networkResponse))
        .catch(() => caches.match(fromScope("index.html")))
    );
    return;
  }

  if (isNetworkFirstAsset(requestUrl)) {
    event.respondWith(
      fetch(new Request(request, { cache: "reload" }))
        .then((networkResponse) => cacheResponse(request, networkResponse))
        .catch(() => caches.match(request, { ignoreSearch: true }))
    );
    return;
  }

  event.respondWith(
    caches.match(request, { ignoreSearch: true }).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request).then((networkResponse) => {
        return cacheResponse(request, networkResponse);
      });
    })
  );
});
