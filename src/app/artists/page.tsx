import type { Metadata } from 'next'
import Link from 'next/link'
import { getPortfolios } from '@/lib/api/portfolios'
import { mapArtist } from '@/lib/api/mappers'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Artists',
  description: 'K Works Studio 소속 배우. 화보 그리드와 개별 프로필.',
  alternates: { canonical: '/artists' },
}

export default async function ArtistsPage() {
  const list = await getPortfolios({ category: '아티스트' })
  const artists = list.items.map((p, i) => mapArtist(p, i + 1))

  return (
    <>
      <section className="kw-page-hero">
        <div className="kw-hero__media">
          <img src="/assets/images/res/scene-05.jpg" alt="K Works 촬영 현장" />
        </div>
        <div className="kw-page-hero__inner">
          <span className="eyebrow">Management</span>
          <h1>Artists</h1>
          <p>오래 머무는 얼굴을 발굴합니다.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kw-artists-count">
            <span className="kw-artists-count__label">
              K Works가 함께하는 배우들.
            </span>
            <span className="kw-artists-count__count">
              Total {artists.length}
            </span>
          </div>

          <div className="kw-featured-artists fade-up">
            {artists.map((a) => (
              <Link
                key={a.slug}
                href={`/artists/${a.slug}`}
                className="kw-featured-artists__card"
              >
                <div className="kw-featured-artists__card__photo">
                  <img src={a.artistsCardImage} alt={a.ko} />
                </div>
                <div className="kw-featured-artists__card__meta">
                  <div className="kw-featured-artists__card__name">
                    <span className="h-serif">{a.ko}</span>
                    <span className="en">
                      {a.en}
                      {a.birthYearShort ? ` · ${a.birthYearShort}` : ''}
                    </span>
                  </div>
                  <div className="kw-featured-artists__card__stat">
                    View Profile →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
