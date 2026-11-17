/* Service worker: guarda todo al instalar y sirve desde caché, así funciona sin internet.
   Al cambiar cualquier archivo, sube el número de VERSION para que los teléfonos se actualicen. */
var VERSION = "rutina-v5";
var FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./fonts/bricolage.woff2",
  "./fonts/figtree.woff2",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(function (hit) {
      if (hit) return hit;
      return fetch(e.request).catch(function () {
        return e.request.mode === "navigate" ? caches.match("./index.html") : Response.error();
      });
    })
  );
});
