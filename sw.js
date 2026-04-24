self.addEventListener('install', (e) => {
  self.skipWaiting(); // يجبر المتصفح ينهي التثبيت فوراً
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim()); // يفعل المشغل مباشرة
});

self.addEventListener('fetch', (e) => {
  // يمرر الطلبات بشكل طبيعي عشان يكتمل التثبيت
  e.respondWith(fetch(e.request).catch(() => new Response('Offline')));
});
