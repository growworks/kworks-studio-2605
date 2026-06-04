'use client'

import { useRef, type ReactNode } from 'react'

export function Carousel({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: ReactNode
  description: ReactNode
  children: ReactNode
}) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: -1 | 1) => {
    const track = trackRef.current
    if (!track) return
    const step = Math.max(track.clientWidth * 0.65, 280)
    track.scrollBy({ left: step * dir, behavior: 'smooth' })
  }

  return (
    <div className="kw-carousel fade-up">
      <div className="kw-carousel__head">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title">{title}</h2>
        <p>{description}</p>
        <div className="kw-carousel__controls">
          <button type="button" onClick={() => scrollBy(-1)} aria-label="이전">
            <svg viewBox="0 0 24 24">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button type="button" onClick={() => scrollBy(1)} aria-label="다음">
            <svg viewBox="0 0 24 24">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
      <div className="kw-carousel__track" ref={trackRef}>
        {children}
      </div>
    </div>
  )
}
