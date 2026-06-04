import { ImageResponse } from 'next/og'

export const alt = 'K Works Studio · 영화·콘텐츠 제작과 배우 매니지먼트'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '80px 96px',
          background: '#000000',
          color: '#EDEDED',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 14,
            letterSpacing: 8,
            textTransform: 'uppercase',
            color: '#C8A968',
            marginBottom: 24,
          }}
        >
          Cinema · Management
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 120,
            fontWeight: 500,
            letterSpacing: -2,
            lineHeight: 1,
          }}
        >
          K Works <span style={{ color: '#C8A968', fontWeight: 300, marginLeft: 24 }}>Studio</span>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            color: '#9A9A9F',
            marginTop: 24,
            letterSpacing: 1,
          }}
        >
          영화·콘텐츠 제작 · 아티스트 매니지먼트
        </div>
      </div>
    ),
    size,
  )
}
