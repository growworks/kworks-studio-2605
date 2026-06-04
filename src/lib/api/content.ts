import { apiFetch } from '@/lib/api/client'
import { siteContentSchema, type SiteContent } from '@/types/sections'

/**
 * 사이트 콘텐츠 조회 — 변경 빈도 중간, 짧은 캐시
 */
export async function getContent(): Promise<SiteContent> {
  const data = await apiFetch('/content', {
    next: { revalidate: 60, tags: ['site-content'] },
  })
  return siteContentSchema.parse(data)
}
