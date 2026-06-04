import type { MetadataRoute } from 'next'
import { ARTISTS } from '@/data/artists'
import { PRODUCTIONS } from '@/data/productions'
import { NOTICES } from '@/data/notices'
import { SITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
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

  const artistPages: MetadataRoute.Sitemap = ARTISTS.map((a) => ({
    url: `${baseUrl}/artists/${a.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const productionPages: MetadataRoute.Sitemap = PRODUCTIONS.map((p) => ({
    url: `${baseUrl}/production/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const noticePages: MetadataRoute.Sitemap = NOTICES.map((n) => ({
    url: `${baseUrl}/notice/${n.id}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...artistPages, ...productionPages, ...noticePages]
}
