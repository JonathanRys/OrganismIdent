//Service workers
 
/* global self, caches, fetch, Request */
 
'use strict';
 
const CacheNames = {
    APP_SHELL: 'oi-shell-v0',

};
 
// Replaced by server
const URLS_TO_CACHE = ['/index.html',
                       '/favicon.ico',
                       '/css/styles.css',
                       '/css/font-awesome.min.css',
/*
                       '/fonts/fontawesome-webfont.eot',
                       '/fonts/fontawesome-webfont.svg',
                       '/fonts/fontawesome-webfont.ttf',
                       '/fonts/fontawesome-webfont.woff',
                       '/fonts/fontawesome-webfont.woff2',
                       '/fonts/fontawesome-webfont.woff2?v=4.6.1',
*/
                       //'https://fonts.googleapis.com/css?family=Open+Sans:400,700',
                       '/js/init.js',
                       '/js/models.js',
                       '/js/payload.json',
                       '/sw.js',
                       "fake.js",
                       '/js/templates.js',
                       '/js/views.js']

                       //'/img/a530d7ce6b128c9d651e9f0a.jpg',
                       //'/img/d06a82e9c9b83dbc283a7a8f.jpg',

self.oninstall = function (e) {
    alert("installing")
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
    alert("Activating")
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
    alert("Fetching");
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