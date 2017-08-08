self.addEventListener('install', function(event){
  // only happens once for this version of the service worker
  // wait until the install event has resolved
  // event.waitUntil(
  //   // then create our named cached
  //   caches
  //   .open('my-sw-cache')
  //   .then(function(cache) {
  //     // once created, lets add some local resouces
  //     return cache.addAll([
  //       './js/app.min.js',
  //       './css/style.min.css'
  //     ]);
  //   })
  //   .then(function(){
  //     console.log('Service worker is ready, and assets are cached');
  //   });
  // );
});

self.addEventListener('activate', function (event) {

});

self.addEventListener('fetch', function (event) {

});

self.addEventListener('push', function (event) {

});