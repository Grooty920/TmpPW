const CACHE_NAME = "xiaoyang-v5";
const ASSET_CACHE = "xiaoyang-assets-v1";

// ?????????????????
self.addEventListener("install", function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      // ?????????????????
      return cache.add("/").catch(function() {});
    })
  );
});

// ????????????????????
self.addEventListener("fetch", function(event) {
  var request = event.request;
  var url = new URL(request.url);

  // ?????????
  if (url.pathname.startsWith("/_astro/") || 
      url.pathname.startsWith("/assets/") ||
      url.pathname.startsWith("/ink/") ||
      url.pathname.startsWith("/uploads/") ||
      url.pathname.match(/\.(js|css|woff2?|png|jpg|webp|svg|ico)$/)) {
    event.respondWith(
      caches.match(request).then(function(cached) {
        return cached || fetch(request).then(function(response) {
          if (response && response.status === 200) {
            var clone = response.clone();
            caches.open(ASSET_CACHE).then(function(cache) {
              cache.put(request, clone);
            });
          }
          return response;
        });
      })
    );
    return;
  }

  // HTML ????????????
  event.respondWith(
    fetch(request).then(function(response) {
      if (response && response.status === 200) {
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(request, clone);
        });
      }
      return response;
    }).catch(function() {
      return caches.match(request).then(function(cached) {
        return cached || caches.match("/");
      });
    })
  );
});

self.addEventListener("activate", function(event) {
  var cacheWhitelist = [CACHE_NAME, ASSET_CACHE];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
