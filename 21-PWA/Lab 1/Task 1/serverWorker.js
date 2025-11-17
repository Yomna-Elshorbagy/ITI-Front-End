//==> 1- cash page for available offline
self.addEventListener("install", (event) => {
  console.log(`installed`);
  self.skipWaiting();
  event.waitUntil(
    caches.open("frontendTask").then((myCash) => {
      myCash.addAll(["/Task2.html", "/script.js", "/style.css", "/home.html"]);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log(`activated`);
});

//=> retrive from cash
self.addEventListener("fetch", (event) => {
  console.log(`fetched page: ${event.request.url}`);
  event.respondWith(
    caches.match(event.request.url).then((file) => {
      if (file) {
        console.log(file);
        console.log("inside if statment");
        return file;
      } else {
        console.log("network request");
        return fetch(event.request.url);
      }
    })
  );
});

