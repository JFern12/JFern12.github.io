//Define name of cache and files to cache
const CACHE_NAME = 'PWA_cache';
const FILES_TO_CACHE= ['/'];

//On install event, cache the initial content from online
//Will fails if it cannot retrive a file
//synchronous, not robus
self.addEventListener('install', anEvent =>
{
    anEvent.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) 
        {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

//On fetch event, serve content if local or retrieve content
//Synchronous, not robust
self.addEventListener('fetch', anEvent => 
{
    anEvent.respondWith(
        caches.match(anEvent).then(function(response) 
        {
            return response || fetch(anEvent.request);
        })
    );    
});
