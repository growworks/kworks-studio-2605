'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function RevealRoot() {
  const pathname = usePathname()

  useEffect(() => {
    const fadeEls = document.querySelectorAll<HTMLElement>('.fade-up')
    if (!fadeEls.length) return

    if (!('IntersectionObserver' in window)) {
      fadeEls.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )
    fadeEls.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])

  return null
}
