import { apiFetch } from './client'
import { portfolioListSchema, portfolioSchema } from './types'
import type { ApiPortfolio, ApiPortfolioList } from './types'

const NO_CACHE = { cache: 'no-store' as const }

/**
 * 작품(포트폴리오) 목록.
 * category 미지정 시 전체. limit 기본 100 — 케이웍스 규모상 페이징 불필요.
 */
export async function getPortfolios(
  options: { category?: '아티스트' | '프로덕션'; limit?: number } = {},
): Promise<ApiPortfolioList> {
  const params = new URLSearchParams()
  if (options.category) params.set('category', options.category)
  params.set('limit', String(options.limit ?? 100))

  const raw = await apiFetch(`/portfolios?${params.toString()}`, NO_CACHE)
  return portfolioListSchema.parse(raw)
}

/** 작품(포트폴리오) 단건. id는 admin 내부 정수 식별자. */
export async function getPortfolio(id: number): Promise<ApiPortfolio> {
  const raw = await apiFetch(`/portfolios/${id}`, NO_CACHE)
  return portfolioSchema.parse(raw)
}

/**
 * custom.slug 로 단건을 찾는다. 라우트 URL 이 slug 기반(`/artists/yoon-bok-in`)이므로
 * 목록을 먼저 받아 클라이언트 측에서 매칭.
 */
export async function findPortfolioBySlug(
  category: '아티스트' | '프로덕션',
  slug: string,
): Promise<ApiPortfolio | null> {
  const list = await getPortfolios({ category })
  return (
    list.items.find((it) => {
      const customSlug = (it.custom as Record<string, unknown> | null | undefined)?.slug
      return typeof customSlug === 'string' && customSlug === slug
    }) ?? null
  )
}
