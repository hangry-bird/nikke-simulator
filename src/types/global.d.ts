export {};

declare global {
    interface Window {
        dataLayer: [];
        gtag: function;
    }
  }
  