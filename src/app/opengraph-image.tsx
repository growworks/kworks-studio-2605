import { ImageResponse } from 'next/og'

export const alt = 'k-works studio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * 원래 사이트 톤(흰 배경 + 검정 K 모노그램 + 영문/한글 워드마크)을 유지.
 * SVG 로고는 인라인으로 렌더 — public/assets/images/logo_b.svg 와 동일한 패스.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FFFFFF',
          color: '#0B0B0C',
          fontFamily: 'sans-serif',
        }}
      >
        <svg
          width="240"
          height="240"
          viewBox="0 0 120 120"
          fill="none"
          stroke="#0B0B0C"
          strokeWidth="1.6"
          strokeLinecap="square"
        >
          <circle cx="60" cy="60" r="54" strokeWidth="1.1" />
          <path d="M38 22 L38 98" strokeWidth="1.8" />
          <path d="M38 60 L80 22" strokeWidth="1.8" />
          <path d="M38 60 L80 98" strokeWidth="1.8" />
          <path d="M55 75 L62 98" strokeWidth="1.2" />
          <path d="M62 98 L72 70" strokeWidth="1.2" />
          <path d="M72 70 L80 98" strokeWidth="1.2" />
        </svg>

        <div
          style={{
            display: 'flex',
            fontSize: 68,
            fontWeight: 600,
            letterSpacing: -1.5,
            marginTop: 40,
          }}
        >
          K Works Studio
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 20,
            letterSpacing: 8,
            color: '#6B6B70',
            marginTop: 12,
          }}
        >
          케이웍스 스튜디오
        </div>
      </div>
    ),
    size,
  )
}
