//Define name of cache and files to cache
var cachename = 'PWA';
var filesToCache= ['index.html'];

//On install event, cache the specified content from online
//Fails if fails to add any files
self.addEventListener('install', function(anEvent)
{
    anEvent.waitUntil(
        cache.open(cacheName).then(function(cache) 
        {
            return cache.addAll(filesToCache);
        })
    );
});

//On fetch event, serve fetched content 
self.addEventListener('fetch', function(anEvent) 
{
    anEvent.respondWith(
        caches.match(anEvent).then(function(response) 
        {
            return response || fetch(anEvent.request);
        })
    );    
});
