declare global {
  interface Window {
    gtag?: (event: 'event', name: string, params?: Record<string, unknown>) => void;
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}

export function trackWhatsAppClick(params?: Record<string, unknown>) {
  trackEvent('whatsapp_click', params);
}
