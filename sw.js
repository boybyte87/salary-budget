self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // هذا الكود ضروري عشان المتصفح يسمح بالتثبيت
});
