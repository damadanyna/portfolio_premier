var dama=0
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(
                "./",
                "./img/logo.png",
                "./app.css",
                "./app.js",
                "./chunk-vendors.js",
                "./animation.css",
                "./main.js"
            )
        })
    );
});

