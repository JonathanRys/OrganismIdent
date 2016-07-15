//Service workers
 
/* global self, caches, fetch, Request */
 
'use strict';
 
const CacheNames = {
    MENU: 'mdm-fonts-v2'
};
 
// Replaced by server
const URLS_TO_CACHE = ["https://cdn-static-1.medium.com/_/fp/css/fonts-base.by5Oi_VbnwEIvhnWIsuUjA.css"]

self.oninstall = function (e) {
    e.waitUntil(
        caches.open(CacheNames.MENU)
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