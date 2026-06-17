import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { getPortfolios } from '@/lib/api/portfolios'
import { getPosts } from '@/lib/api/posts'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL || 'https://k-worksstudio.com'
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/artists`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/production`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/notice`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/audition`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]

  try {
    const [artists, prods, notices] = await Promise.all([
      getPortfolios({ category: '아티스트' }),
      getPortfolios({ category: '프로덕션' }),
      getPosts({ category: '공지사항' }),
    ])

    const artistPages: MetadataRoute.Sitemap = artists.items
      .map((p) => (p.custom as Record<string, unknown> | null | undefined)?.slug)
      .filter((s): s is string => typeof s === 'string' && s.length > 0)
      .map((slug) => ({
        url: `${baseUrl}/artists/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
      }))

    const prodPages: MetadataRoute.Sitemap = prods.items
      .map((p) => (p.custom as Record<string, unknown> | null | undefined)?.slug)
      .filter((s): s is string => typeof s === 'string' && s.length > 0)
      .map((slug) => ({
        url: `${baseUrl}/production/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
      }))

    const noticePages: MetadataRoute.Sitemap = notices.items.map((n) => ({
      url: `${baseUrl}/notice/${n.id}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    }))

    return [...staticPages, ...artistPages, ...prodPages, ...noticePages]
  } catch (e) {
    console.error('[sitemap] API fetch failed', e)
    return staticPages
  }
}
