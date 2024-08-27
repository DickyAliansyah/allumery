self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache').then((cache) => {
            return cache.addAll([
                './images.html',
                './about.html',
                './index.html',
                './logo1.png',
                './logoapp1.png',
                './logoapp2.png',
                './main.js',
                './manifest.json',
                './service-worker.js',
                './style.css',
                './assets/css/bootstrap.min.css',
                './assets/css/jquery.fancybox.min.css',
                './assets/css/swiper-bundle.min.css',
                './assets/images/brands/shopee.png',
                './assets/images/brands/zhiro.png',
                './assets/images/chef/founder1.jpg',
                './assets/images/chef/founder2.jpg',
                './assets/images/chef/founder3.png',
                './assets/images/dish',
                './assets/images/dish/coklat65.jpg',
                './assets/images/dish/coklat140.jpg',
                './assets/images/dish/coklat250.jpg',
                './assets/images/dish/greentea65.jpg',
                './assets/images/dish/greentea140.jpg',
                './assets/images/dish/greentea250.jpg',
                './assets/images/dish/tiramisu140.jpg',
                './assets/images/dish/rostel2.jpg',
                './assets/images/dish/rostel4.jpg',
                './assets/images/abaut.jpg',
                './assets/images/berry.png',
                './assets/images/blog-pattern-bg.png',
                './assets/images/faq-bg.png',
                './assets/images/g (1).jpg',
                './assets/images/g (2).jpg',
                './assets/images/g (3).jpg',
                './assets/images/g (4).jpg',
                './assets/images/g (5).jpg',
                './assets/images/g (6).jpg',
                './assets/images/g (7).jpg',
                './assets/images/g (8).jpg',
                './assets/images/g (9).jpg',
                './assets/images/g (10).jpg',
                './assets/images/g (11).jpg',
                './assets/images/g (12).jpg',
                './assets/images/g (13).jpg',
                './assets/images/g (14).jpg',
                './assets/images/g (15).jpg',
                './assets/images/galery1.jpg',
                './assets/images/header1.jpg',
                './assets/images/leaf.png',
                './assets/images/loader.gif',
                './assets/images/menu-bg.png',
                './assets/images/pisangcoklat.jpg',
                './assets/images/table-leaves-shape.png',
                './assets/images/title-shape.svg',
                './assets/images/v (4).mp4',
                './assets/js/bootstrap.min.js',
                './assets/js/font-awesome.min.js',
                './assets/js/gsap.min.js',
                './assets/js/jquery-3.5.1.min.js',
                './assets/js/jquery.fancybox.min.js',
                './assets/js/jquery.mixitup.min.js',
                './assets/js/parallax.min.js',
                './assets/js/popper.min.js',
                './assets/js/ScrollToPlugin.min.js',
                './assets/js/ScrollTrigger.min.js',
                './assets/js/smooth-scroll.js',
                './assets/js/swiper-bundle.min.js',
                './assets/src/app.js',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});



