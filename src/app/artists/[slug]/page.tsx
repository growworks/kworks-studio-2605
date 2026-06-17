import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FilmographyTabs } from '@/components/ui/FilmographyTabs'
import { HeroParallax } from '@/components/layout/HeroParallax'
import { JsonLd } from '@/components/seo/JsonLd'
import { personLd } from '@/lib/seo/jsonld'
import { findPortfolioBySlug, getPortfolios } from '@/lib/api/portfolios'
import { mapArtist } from '@/lib/api/mappers'

export const dynamic = 'force-dynamic'

type Params = Promise<{ slug: string }>

async function loadArtist(slug: string) {
  const list = await getPortfolios({ category: '아티스트' })
  const idx = list.items.findIndex((p) => {
    const customSlug = (p.custom as Record<string, unknown> | null | undefined)?.slug
    return typeof customSlug === 'string' && customSlug === slug
  })
  if (idx === -1) return null
  return mapArtist(list.items[idx], idx + 1)
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { slug } = await params
  const artist = await loadArtist(slug)
  if (!artist) return { title: 'Artist Not Found' }
  return {
    title: `${artist.ko} ${artist.en}`,
    description: artist.description.split('\n')[0],
    alternates: { canonical: `/artists/${artist.slug}` },
  }
}

export default async function ArtistDetailPage({ params }: { params: Params }) {
  const { slug } = await params
  const artist = await loadArtist(slug)
  if (!artist) notFound()

  const heroStyle = {
    ['--artist-hero-bg' as string]: `url('${artist.heroImage}')`,
  } as React.CSSProperties

  const indexNum = artist.index.toString().padStart(2, '0')

  return (
    <>
      <JsonLd data={personLd(artist)} />
      <HeroParallax selector=".kw-artist-hero img" />

      <section className="kw-artist-hero" style={heroStyle}>
        <img src={artist.heroImage} alt={`${artist.ko} 화보`} />
        <div className="kw-artist-hero__caption">
          <div className="kw-artist-hero__caption__inner">
            <span className="eyebrow">K Works Artists · {indexNum}</span>
            <span className="h-serif">{artist.ko}</span>
            <span className="en">{artist.en}</span>
            <p className="bio">
              {artist.description.split('\n').map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kw-section-head fade-up">
            <div>
              <span className="eyebrow">Profile</span>
              <h2 className="section-title">기본 프로필.</h2>
            </div>
            <p>
              캐스팅 디렉터·작품 의뢰자께 안내드리는 공식 프로필입니다.
            </p>
          </div>

          <div className="kw-profile fade-up">
            <div className="kw-profile__img">
              <img src={artist.profileImage} alt={`${artist.ko} 프로필`} />
            </div>
            <dl className="kw-profile__data">
              <dt>Name · 본명</dt>
              <dd>
                {artist.ko} ({artist.en})
              </dd>
              {artist.born && (
                <>
                  <dt>Born · 생년</dt>
                  <dd>{artist.born}</dd>
                </>
              )}
              {artist.education && (
                <>
                  <dt>Education · 학력</dt>
                  <dd>{artist.education}</dd>
                </>
              )}
              {artist.debut && (
                <>
                  <dt>Debut · 데뷔</dt>
                  <dd>{artist.debut}</dd>
                </>
              )}
              <dt>Agency · 소속</dt>
              <dd>{artist.agency}</dd>
            </dl>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kw-section-head fade-up">
            <div>
              <span className="eyebrow">Filmography</span>
              <h2 className="section-title">필모그래피.</h2>
            </div>
            <p>장르별로 정렬되어 있습니다. 연도 역순으로 표시합니다.</p>
          </div>

          <FilmographyTabs artist={artist} />
        </div>
      </section>

      {artist.galleries.length > 0 && (
        <section className="section">
          <div className="container container--wide">
            <div className="kw-section-head fade-up">
              <div>
                <span className="eyebrow">Gallery</span>
                <h2 className="section-title">화보.</h2>
              </div>
              <p>최근 화보·스틸 컷.</p>
            </div>

            {artist.galleries.map((g, i) => (
              <div
                key={i}
                className={`kw-gallery${g.reverse ? ' kw-gallery--reverse' : ''} fade-up`}
              >
                {g.reverse ? (
                  <>
                    <div className="kw-gallery__col">
                      {g.col.map((c, j) => (
                        <div key={j}>
                          <img src={c.src} alt={c.alt} />
                        </div>
                      ))}
                    </div>
                    <div className="kw-gallery__big">
                      <img src={g.big.src} alt={g.big.alt} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="kw-gallery__big">
                      <img src={g.big.src} alt={g.big.alt} />
                    </div>
                    <div className="kw-gallery__col">
                      {g.col.map((c, j) => (
                        <div key={j}>
                          <img src={c.src} alt={c.alt} />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
