import { API_BASE_URL, SITE_SLUG } from '@/lib/constants'

/**
 * admin API 호출 공통 래퍼
 * - 런타임 페치 (RSC 또는 서버 라우트에서 호출)
 * - 캐시 전략은 호출부에서 `next` 옵션으로 조정
 */
export async function apiFetch<T = unknown>(
  path: string,
  init: RequestInit & { next?: { revalidate?: number; tags?: string[] } } = {},
): Promise<T> {
  if (!SITE_SLUG) {
    throw new Error('SITE_SLUG 환경변수가 설정되지 않았습니다.')
  }

  const url = `${API_BASE_URL}/v1/${SITE_SLUG}${path}`
  const res = await fetch(url, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init.headers ?? {}),
    },
  })

  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`API ${res.status}: ${body || res.statusText}`)
  }

  return res.json() as Promise<T>
}
