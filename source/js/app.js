if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/site/service-worker.js').then(() => {
    console.log('Service Worker registered!');
  });
}