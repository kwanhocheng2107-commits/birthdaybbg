(function registerPwaServiceWorker() {
  if (!("serviceWorker" in navigator) || window.location.protocol === "file:") {
    return;
  }

  window.addEventListener("load", () => {
    const serviceWorkerUrl = new URL("service-worker.js", window.location.href);

    navigator.serviceWorker.register(serviceWorkerUrl).catch((error) => {
      console.warn("Service worker registration failed:", error);
    });
  });
})();
