const APP_VERSION = "1.0.0";
const STATIC_CACHE_NAME = `static_${APP_VERSION}`;
const DYNAMIC_CACHE_NAME = `dynamic_${APP_VERSION}`;

self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/css/main.css',
          '/images/author.jpg',
          '/js/app.js',
          '//fonts.googleapis.com/css?family=Montserrat:300,400,700',
          '/manifest.json',
          '/fonts/end2end.ttf?cgaqog',
          '/fonts/end2end.svg?cgaqog',
          '/fonts/end2end.woff?cgaqog',
          '/images/placeholder.png',
          '/images/icons/app-icon-144x144.png',
          '/favicon.ico'
        ]);
      }).catch(error => console.log(error))
  );
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating Service Worker ...', event);
  event.waitUntil(
    caches.keys()
    .then(keyList => {
      return Promise.all(keyList.map(key => {
        console.log(key);
        if (key !== STATIC_CACHE_NAME && key !== DYNAMIC_CACHE_NAME) {
          return caches.delete(key);
        }
      }))
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        } else {
          return fetch(event.request);
            /*
            .then(res => {
              caches.open(DYNAMIC_CACHE_NAME)
                .then(cache => {
                  cache.put(event.request.url, res.clone());
                  return res;
                }).catch(error => console.log(error));
            }).catch(error => console.log(`dynamic error: ${error}`));
            */
        }
      })
  );
});