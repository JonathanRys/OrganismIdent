//Service workers
 
/* global self, caches, fetch, Request */
 
'use strict';
 
const CacheNames = {
    APP_SHELL: 'oi-shell-v0',

};
 
// Replaced by server
const URLS_TO_CACHE = ['http://localhost/OI_app_shell/index.html',
                       'http://localhost/OI_app_shell/favicon.ico',
                       'http://localhost/OI_app_shell/css/styles.css',
                       'http://localhost/OI_app_shell/css/font-awesome.min.css',

                       'http://localhost/OI_app_shell/fonts/fontawesome-webfont.eot?v=4.6.1',
                       'http://localhost/OI_app_shell/fonts/fontawesome-webfont.svg?v=4.6.1',
                       'http://localhost/OI_app_shell/fonts/fontawesome-webfont.ttf?v=4.6.1',
                       'http://localhost/OI_app_shell/fonts/fontawesome-webfont.woff?v=4.6.1',
                       'http://localhost/OI_app_shell/fonts/fontawesome-webfont.woff2?v=4.6.1',

                       'http://localhost/OI_app_shell/fonts/OpenSans-Regular.woff',
                       'http://localhost/OI_app_shell/fonts/OpenSans-Bold.woff',

//These files are not static and should go into a different, more temporary cache
   'http://localhost/OI_app_shell/img/a530d7ce6b128c9d651e9f0a.jpg',
   'http://localhost/OI_app_shell/img/433fa2d90c12b3b5e6f76ac4.jpg',
   'http://localhost/OI_app_shell/img/d06a82e9c9b83dbc283a7a8f.jpg',
   'http://localhost/OI_app_shell/img/d06a82e9c9b83dbc283a7a90.jpg',
   'http://localhost/OI_app_shell/js/payload.json',

                       //'https://fonts.googleapis.com/css?family=Open+Sans:400,700',
                       'http://localhost/OI_app_shell/js/init.js',
                       'http://localhost/OI_app_shell/js/models.js',
                       'http://localhost/OI_app_shell/sw.js',
                       'http://localhost/OI_app_shell/js/templates.js',
                       'http://localhost/OI_app_shell/js/views.js']


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