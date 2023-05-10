/* eslint-disable no-restricted-globals */
// Nome do cache
const CACHE_NAME = 'weptech-cache';

const urlsToCache = ['https://diegoarruda.vercel.app'];

// A primeira vez que o usuário inicia a PWA, 'install' é acionado.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      // Abre um cache e armazena nossos arquivos em cache
      cache.addAll(urlsToCache)),
  );
});

// Elimina caches antigos que não sejam os atuais.
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keyList) => Promise.all(
      keyList.map((key) => {
        if (!cacheWhitelist.includes(key)) {
          return caches.delete(key);
        }

        return null;
      }),
    )),
  );
});

// se tivemos
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (event.request.cache === 'only-if-cache') {
        event.request.mode = 'same-origin';
      }
      return response || fetch(event.request);
    }),
  );
});

self.addEventListener('push', (event) => {
  const body = event.data?.text() ?? '';
  console.log(body);

  const notificationData = JSON.parse(body);
  console.log(notificationData);

  event.waitUntil(
    self.registration.showNotification('Viagem disponível!', {
      body: notificationData.text,
      data: {
        url: notificationData.url,
      },
    }),
  );
});
