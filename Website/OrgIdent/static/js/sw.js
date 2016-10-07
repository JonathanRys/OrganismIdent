//Service workers
 
/* global self, caches, fetch, Request */
 
'use strict';
 
const CacheNames = {
    APP_SHELL: 'oi-shell-v0',

};
 
// Replaced by server
const URLS_TO_CACHE = ['./static/index.html',
                       './static/favicon.ico',
                       './static/css/styles.css',
                       './static/css/font-awesome.min.css',

                       './static/fonts/fontawesome-webfont.eot?v=4.6.1',
                       './static/fonts/fontawesome-webfont.svg?v=4.6.1',
                       './static/fonts/fontawesome-webfont.ttf?v=4.6.1',
                       './static/fonts/fontawesome-webfont.woff?v=4.6.1',
                       './static/fonts/fontawesome-webfont.woff2?v=4.6.1',

                       './static/fonts/OpenSans-Regular.woff',
                       './static/fonts/OpenSans-Bold.woff',

//These files are not static and should go into a different, more temporary cache
   './static/img/a530d7ce6b128c9d651e9f0a.jpg',
   './static/img/433fa2d90c12b3b5e6f76ac4.jpg',
   './static/img/d06a82e9c9b83dbc283a7a8f.jpg',
   './static/img/d06a82e9c9b83dbc283a7a90.jpg',
   './static/js/payload.json',

                       //'https://fonts.googleapis.com/css?family=Open+Sans:400,700',
                       './static/js/init.js',
                       './static/js/models.js',
                       './static/sw.js',
                       './static/js/templates.js',
                       './static/js/views.js']


self.oninstall = function (e) {
    e.waitUntil(
        caches.open(CacheNames.APP_SHELL)
            .then(function (cache) {
                return cache.addAll(URLS_TO_CACHE.map(function (url) {
                    return new Request(url, { mode: 'no-cors' })
                }))
            })
            .then(self.skipWaiting())
    )
}
 
self.onactivate = function (e) {
    var validCaches = {}
    Object.keys(CacheNames).forEach(function (key) {
        return validCaches[CacheNames[key]] = true
    })
 
    e.waitUntil(
        caches.keys()
            .then(function (currentCaches) {
                return Promise.all(currentCaches.map(function (cache) {
                    if (!validCaches[cache]) {
                        return caches.delete(cache)
                    }
                }))
            })
            .then(self.clients.claim())
    )
}
 
self.onfetch = function (e) {
    if (URLS_TO_CACHE.indexOf(e.request.url) == -1) return
 
    e.respondWith(
        caches.match(e.request)
            .then(function (response) {
                return response || fetch(e.request, {
                    mode: 'no-cors'
                })
            })
    )
}