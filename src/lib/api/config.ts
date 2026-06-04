import { apiFetch } from '@/lib/api/client'
import { siteConfigSchema, type SiteConfig } from '@/types/api'

/**
 * 사이트 설정 조회 — 비교적 변경 빈도 낮음, 캐시 길게
 */
export async function getSiteConfig(): Promise<SiteConfig> {
  const data = await apiFetch('/config', {
    next: { revalidate: 3600, tags: ['site-config'] },
  })
  return siteConfigSchema.parse(data)
}
