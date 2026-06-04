import { SITE } from '@/data/site'
import type { Artist } from '@/data/artists'
import type { Production } from '@/data/productions'

export function getBaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://k-worksstudio.com'
  ).replace(/\/$/, '')
}

export function organizationLd() {
  const base = getBaseUrl()
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${base}#organization`,
    name: SITE.brand,
    alternateName: [SITE.brandKo, 'K Works'],
    url: base,
    logo: `${base}/assets/images/logo_w.png`,
    description: SITE.description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KR',
      streetAddress: SITE.address,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: `+82-${SITE.tel.replace(/^0/, '').replace(/-/g, '-')}`,
        contactType: 'customer service',
        areaServed: 'KR',
        availableLanguage: 'ko',
      },
      {
        '@type': 'ContactPoint',
        email: SITE.email,
        contactType: 'customer service',
      },
    ],
  }
}

export function websiteLd() {
  const base = getBaseUrl()
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.brand,
    alternateName: SITE.brandKo,
    url: base,
    inLanguage: 'ko-KR',
    publisher: { '@id': `${base}#organization` },
  }
}

export function personLd(artist: Artist) {
  const base = getBaseUrl()
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: artist.ko,
    alternateName: artist.en,
    url: `${base}/artists/${artist.slug}`,
    image: `${base}${artist.heroImage}`,
    birthDate: artist.born,
    height: artist.height,
    nationality: 'KR',
    affiliation: {
      '@type': 'Organization',
      name: SITE.brand,
      '@id': `${base}#organization`,
    },
    sameAs:
      artist.sns && artist.sns.href !== '#' ? [artist.sns.href] : undefined,
  }
}

export function movieLd(prod: Production) {
  const base = getBaseUrl()
  return {
    '@context': 'https://schema.org',
    '@type': prod.category === 'drama' ? 'TVSeries' : 'Movie',
    name: prod.ko,
    alternateName: prod.en,
    url: `${base}/production/${prod.slug}`,
    image: `${base}${prod.poster}`,
    datePublished: prod.year,
    director: { '@type': 'Person', name: prod.director },
    productionCompany: { '@type': 'Organization', name: SITE.brand },
    description: prod.synopsisLead,
    actor: prod.cast.lead.map((c) => ({ '@type': 'Person', name: c.name })),
    inLanguage: 'ko-KR',
  }
}

export function noticeLd(notice: {
  id: string
  title: string
  body: string
  date: string
}) {
  const base = getBaseUrl()
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: notice.title,
    description: notice.body.slice(0, 160),
    datePublished: notice.date.replace(/\./g, '-'),
    author: { '@type': 'Organization', name: SITE.brand, '@id': `${base}#organization` },
    publisher: { '@id': `${base}#organization` },
    url: `${base}/notice/${notice.id}`,
  }
}
