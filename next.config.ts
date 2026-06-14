import type { NextConfig } from 'next'

/**
 * 기존 아임웹 사이트 (k-worksstudio.com) → 신규 Next.js 사이트 마이그레이션 시
 * 네이버에 색인된 URL들을 신규 경로로 301 영구 이전.
 *
 * Next.js redirects 의 `permanent: true` 는 308 을 반환하므로,
 * 검색엔진 호환성을 최대로 하기 위해 `statusCode: 301` 을 명시한다.
 *
 * 추가 ID 발견 시 LEGACY_ID_MAP 에 한 줄씩 추가하면 자동으로 redirects 에 합쳐진다.
 */

// 아임웹 숫자 ID → 신규 경로 매핑
// 사이트맵 전수 조사 후 보강 필요
const LEGACY_ID_MAP: Record<string, string> = {
  '20': '/notice', // NEWS 목록 → 통합 NOTICE
  '22': '/artists/yoon-bok-in', // 윤복인 상세
  '26': '/artists/lee-byung-jun', // 이병준 상세
}

// 메뉴 경로 (대소문자 보정 포함)
const LEGACY_MENU_MAP: Record<string, string> = {
  '/STAR': '/artists',
  '/star': '/artists',
  '/company': '/', // 신규 사이트에 COMPANY 메뉴 없음
  '/COMPANY': '/',
}

const nextConfig: NextConfig = {
  async redirects() {
    const menuRedirects = Object.entries(LEGACY_MENU_MAP).map(
      ([source, destination]) => ({
        source,
        destination,
        statusCode: 301 as const,
      }),
    )

    const idRedirects = Object.entries(LEGACY_ID_MAP).map(
      ([id, destination]) => ({
        source: `/${id}`,
        destination,
        statusCode: 301 as const,
      }),
    )

    return [...menuRedirects, ...idRedirects]
  },
}

export default nextConfig
