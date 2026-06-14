import type { Metadata } from 'next'
import Link from 'next/link'
import { PRODUCTIONS } from '@/data/productions'

export const metadata: Metadata = {
  title: 'Production',
  description: 'K Works Studio 필모그래피. 영화·드라마·단편 콘텐츠 작품 목록.',
  alternates: { canonical: '/production' },
}

export default function ProductionPage() {
  const filmCount = PRODUCTIONS.filter((p) => p.category === 'film').length
  const dramaCount = PRODUCTIONS.filter((p) => p.category === 'drama').length

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
            {PRODUCTIONS.map((p) => (
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
                    {p.en} · {p.year}
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
            K Works Studio · 총 {PRODUCTIONS.length}편 (장편영화 {filmCount} · 드라마 {dramaCount}).
          </p>
        </div>
      </section>
    </>
  )
}
