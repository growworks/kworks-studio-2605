'use client'

import { useEffect } from 'react'

export function HeroParallax({ selector = '.kw-hero__media, .kw-artist-hero img' }: { selector?: string }) {
  useEffect(() => {
    const media = document.querySelector<HTMLElement>(selector)
    if (!media) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let lastY = 0
    let ticking = false
    const update = () => {
      media.style.transform = `translate3d(0, ${lastY * 0.18}px, 0)`
      ticking = false
    }
    const onScroll = () => {
      lastY = window.scrollY
      if (!ticking && lastY < window.innerHeight * 1.2) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [selector])

  return null
}
