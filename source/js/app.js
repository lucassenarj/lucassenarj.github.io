if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/blog/service-worker.js').then(() => {
    console.log('Service Worker registered!');
  });
}