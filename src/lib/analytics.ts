/**
 * GA4 + Meta Pixel 이벤트 트래킹 유틸
 * 클라이언트 전용 — window 객체 접근
 */

type EventParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

const META_EVENT_MAP: Record<string, string> = {
  contact_submit_success: 'Lead',
  cta_click: 'InitiateCheckout',
  portfolio_click: 'ViewContent',
}

export function trackEvent(eventName: string, params?: EventParams): void {
  if (typeof window === 'undefined') return

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }

  if (typeof window.fbq === 'function') {
    const metaEvent = META_EVENT_MAP[eventName]
    if (metaEvent) {
      window.fbq('track', metaEvent, params)
    } else {
      window.fbq('trackCustom', eventName, params)
    }
  }
}
