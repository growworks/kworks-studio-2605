import { ImageResponse } from 'next/og'
import { promises as fs } from 'node:fs'
import path from 'node:path'

export const alt = 'k-works studio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * 메인 로고(logo_b.png)를 흰 배경 중앙에 그대로 배치.
 * 로고 자체에 모노그램 + "K Works Studio" + "케이웍스 스튜디오"가 포함되어 있어
 * 별도 텍스트 합성 없이 그대로 사용한다.
 */
export default async function OpengraphImage() {
  const logoPath = path.join(
    process.cwd(),
    'public',
    'assets',
    'images',
    'logo_b.png',
  )
  const logoBuffer = await fs.readFile(logoPath)
  const logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FFFFFF',
        }}
      >
        <img
          src={logoSrc}
          width={840}
          height={320}
          style={{ objectFit: 'contain' }}
          alt=""
        />
      </div>
    ),
    size,
  )
}
