// Caches the app and, after first use, the hand model so it works offline.
// Own files: network first (so updates arrive), falling back to cache offline.
// Libraries and the hand model: cache first (large, never change).
const CACHE = "signspeak-v2";
const SHELL = ["./", "./index.html", "./manifest.json", "./icon.svg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)));
  self.skipWaiting();
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
function store(req, res) {
  if (res.ok || res.type === "opaque") {
    const copy = res.clone();
    caches.open(CACHE).then(c => c.put(req, copy));
  }
  return res;
}
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (new URL(req.url).origin === self.location.origin) {
    e.respondWith(fetch(req).then(res => store(req, res)).catch(() => caches.match(req)));
  } else {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => store(req, res))));
  }
});
