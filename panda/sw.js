// Perform install steps
var CACHE_NAME = 'pndpx-v1';
var urlsToCache = [
    'styles/panda.css',
    'js/aframe.min.js',
    'js/a-layout.js',
    'js/pandaxr.js',
    'js/super-hands.min.js',
    'imgs/icon512.png',
    'imgs/icon192.png',
    'imgs/pp-logo.png',
    'imgs/pis.png',
    'imgs/pnd1.jpg',
    'imgs/pnd2.jpg',
    'imgs/pnd3.jpg',
    'imgs/pnd4.jpg',
    'imgs/pnd5.jpg',
    'imgs/pnd6.jpg',
    'imgs/pnd7.jpg',
    'imgs/pnd8.jpg',
    'imgs/pnd9.jpg',
    'imgs/pnd10.jpg',
    'imgs/pnd11.jpg',
    'imgs/pnd12.jpg',
    'imgs/pnd13.jpg',
    'imgs/pnd14.jpg',
    'imgs/pnd15.jpg',
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