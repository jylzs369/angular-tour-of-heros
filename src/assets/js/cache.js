var VERSION = 'v1';

// 缓存
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(VERSION).then(function(cache) {
      return cache.addAll([
        '../../index.html',
        '../../vendor.js',
        '../../runtime.js',
        '../../polyfills.js',
        '../../styles.js',
        '../../main.js',
        '../../favicon.ico',
        '../imgs/avatars/1.jpg',
        '../imgs/avatars/2.jpg',
        '../imgs/avatars/3.jpg',
        '../imgs/avatars/4.jpg',
        '../imgs/avatars/5.jpg',
        '../imgs/avatars/6.jpg',
        '../imgs/avatars/7.jpg',
        '../imgs/avatars/8.jpg',
        '../imgs/avatars/9.jpg',
        '../imgs/avatars/10.jpg'
      ])
    })
  )
})

// 缓存更新
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          // 如果当前版本和缓存版本不一致
          if (cacheName !== VERSION) {
            return caches.delete(cacheName);
          }
        })
      )
    })
  )
})

// 捕获请求并返回缓存数据
self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).catch(function() {
    return fetch(event.request);
  }).then(function(response) {
    caches.open(VERSION).then(function(cache) {
      cache.put(event.request, response);
    });
    return response.clone();
  }).catch(function(err) {
    return err
  }))
})