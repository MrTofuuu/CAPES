const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/assets/images/heroes/Antman.jpg",
    "/assets/images/heroes/BlackPanther.jpg",
    "/assets/images/heroes/BlackWidow.jpg",
    "/assets/images/heroes/BonniesDad.png",
    "/assets/images/heroes/CandrasDad.png",
    "/assets/images/heroes/CaptainAmerica.jpg",
    "/assets/images/heroes/CaptianMarvel.jpg",
    "/assets/images/heroes/ChrisDad.png",
    "/assets/images/heroes/drManhattan.jpg",
    "/assets/images/heroes/drStrange.jpg",
    "/assets/images/heroes/Falcon.jpg",
    "/assets/images/heroes/Gamora.jpg",
    "/assets/images/heroes/Hawkeye.jpg",
    "/assets/images/heroes/Hulk.jpg",
    "/assets/images/heroes/Ironman.jpg",
    "/assets/images/heroes/JessicaJones.jpg",
    "/assets/images/heroes/KonnersDad.jpg",
    "/assets/images/heroes/Korg.jpg",
    "/assets/images/heroes/Loki.jpg",
    "/assets/images/heroes/MistysDad.png",
    "/assets/images/heroes/ScarletWitch.jpg",
    "/assets/images/heroes/spiderman.jpg",
    "/assets/images/heroes/Starlord.jpg",
    "/assets/images/heroes/Storm.jpg",
    "/assets/images/heroes/Vision.jpg",
    "/assets/images/heroes/Wasp.jpg",
    "/assets/images/heroes/WinderSoldier.jpg",
    "/assets/images/heroes/Wolverine.jpg",
    "/assets/images/background-avengers.jpg",
    "/assets/images/background-image-home.jpg",
    "/assets/images/Features-Crime.jpg",
    "/assets/images/Features-Fire.jpg",
    "/assets/images/Features-MuchMore.jpg",
    "/assets/images/Features-WorldEnder.jpg",
    "/assets/images/logo-white.png",
];

const STATIC_CACHE = "static-cache-v1";
const RUNTIME_CACHE = "runtime-cache";

self.addEventListener("install", event => {
    event.waitUntil(
        caches
            .open(STATIC_CACHE)
            .then(cache => cache.addAll(FILES_TO_CACHE))
            .then(() => self.skipWaiting())
    );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener("activate", event => {
    const currentCaches = [STATIC_CACHE, RUNTIME_CACHE];
    event.waitUntil(
        caches
            .keys()
            .then(cacheNames => {
                // return array of cache names that are old to delete
                return cacheNames.filter(
                    cacheName => !currentCaches.includes(cacheName)
                );
            })
            .then(cachesToDelete => {
                return Promise.all(
                    cachesToDelete.map(cacheToDelete => {
                        return caches.delete(cacheToDelete);
                    })
                );
            })
            .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", event => {
    // non GET requests are not cached and requests to other origins are not cached
    if (
        event.request.method !== "GET" ||
        !event.request.url.startsWith(self.location.origin)
    ) {
        event.respondWith(fetch(event.request));
        return;
    }

    // handle runtime GET requests for data from /api routes
    if (event.request.url.includes("/api/images")) {
        // make network request and fallback to cache if network request fails (offline)
        event.respondWith(
            caches.open(RUNTIME_CACHE).then(cache => {
                return fetch(event.request)
                    .then(response => {
                        cache.put(event.request, response.clone());
                        return response;
                    })
                    .catch(() => caches.match(event.request));
            })
        );
        return;
    }

    // use cache first for all other requests for performance
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }

            // request is not in cache. make network request and cache the response
            return caches.open(RUNTIME_CACHE).then(cache => {
                return fetch(event.request).then(response => {
                    return cache.put(event.request, response.clone()).then(() => {
                        return response;
                    });
                });
            });
        })
    );
});