// Perform install steps
var CACHE_NAME = 'pndpx-v1';
var urlsToCache = [
    'styles/panda.css',
    'js/aframe.min.js',
    'js/a-layout.js',
    'js/pandaxr.js',
    'js/super-hands.min.js',
    'imgs/icon512.png',
    'imgs/pp-logo.png',
    'imgs/pis.png',
    'imgs/pnd1.png',
    'imgs/pnd2.png',
    'imgs/pnd3.png',
    'imgs/pnd4.png',
    'imgs/pnd5.png',
    'imgs/pnd6.png',
    'imgs/pnd7.png',
    'imgs/pnd8.png',
    'imgs/pnd9.png',
    'imgs/pnd10.png',
    'imgs/pnd11.png',
    'imgs/pnd12.png',
    'imgs/pnd13.png',
    'imgs/pnd14.png',
    'imgs/pnd15.png',
    'imgs/cortina.png',
    'imgs/arrow.png',
    'models/bamboo.glb',
    'models/panda.glb',
    'manifest.json'
];

self.addEventListener('install', function(event) {
// Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
        return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', function(event) {

  var cacheWhitelist = ['pndpx-v1'];

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