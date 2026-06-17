import type { Metadata } from 'next'
import Link from 'next/link'
import { getPortfolios } from '@/lib/api/portfolios'
import { mapProduction } from '@/lib/api/mappers'
import { getReleaseYear } from '@/data/productions'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Production',
  description: 'K Works Studio 필모그래피. 영화·드라마·단편 콘텐츠 작품 목록.',
  alternates: { canonical: '/production' },
}

export default async function ProductionPage() {
  const list = await getPortfolios({ category: '프로덕션' })
  const productions = list.items.map(mapProduction)

  return (
    <>
      <section className="kw-page-hero">
        <div className="kw-hero__media">
          <img src="/assets/images/res/scene-00.jpg" alt="K Works 촬영 현장" />
        </div>
        <div className="kw-page-hero__inner">
          <span className="eyebrow">Production</span>
          <h1>Filmography</h1>
          <p>한 편의 영화는 수많은 결정의 합입니다.</p>
        </div>
      </section>

      <section className="section">
        <div className="container container--wide">
          <div className="kw-prod-grid fade-up">
            {productions.map((p) => (
              <Link
                key={p.slug}
                href={`/production/${p.slug}`}
                className="kw-prod-card"
              >
                <div className="kw-prod-card__poster">
                  <img src={p.poster} alt={`〈${p.ko}〉`} />
                </div>
                <div className="kw-prod-card__meta">
                  <p className="en">
                    {p.en} · {getReleaseYear(p)}
                  </p>
                  <h3 className="ko">{p.ko}</h3>
                  <p className="info">
                    {p.genre}
                    {p.runtime ? ` · ${p.runtime}` : ''}
                    {p.episodes ? ` · ${p.episodes}` : ''}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <p
            className="kw-disclaimer"
            style={{ textAlign: 'left', marginTop: 'var(--sp-12)' }}
          >
            K Works Studio · 총 {productions.length}편.
          </p>
        </div>
      </section>
    </>
  )
}
