import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PRODUCTIONS, findProduction } from '@/data/productions'
import { JsonLd } from '@/components/seo/JsonLd'
import { movieLd } from '@/lib/seo/jsonld'
import { ProductionGallery } from '@/components/ui/ProductionGallery'

type Params = Promise<{ slug: string }>

export function generateStaticParams() {
  return PRODUCTIONS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { slug } = await params
  const prod = findProduction(slug)
  if (!prod) return { title: 'Not Found' }
  return {
    title: `${prod.ko} ${prod.en}`,
    description: prod.synopsisLead,
  }
}

export default async function ProductionDetailPage({
  params,
}: {
  params: Params
}) {
  const { slug } = await params
  const prod = findProduction(slug)
  if (!prod) notFound()

  return (
    <>
      <JsonLd data={movieLd(prod)} />

      {/* Synopsis */}
      <section className="section" style={{ paddingTop: '160px' }}>
        <div className="container container--wide">
          <div className="kw-prod-synopsis fade-up">
            <div className="kw-prod-synopsis__poster">
              <img src={prod.poster} alt={`〈${prod.ko}〉 포스터`} />
            </div>
            <div className="kw-prod-synopsis__body">
              <span className="eyebrow">
                K Works Productions · {prod.year}
              </span>
              <h1 className="en">{prod.en}</h1>
              <h2 className="ko">{prod.ko}</h2>

              <div className="kw-prod-synopsis__meta">
                <div>
                  Year<strong>{prod.year}</strong>
                </div>
                <div>
                  Genre<strong>{prod.genre}</strong>
                </div>
                {prod.runtime && (
                  <div>
                    Runtime<strong>{prod.runtime}</strong>
                  </div>
                )}
                {prod.episodes && (
                  <div>
                    Episodes<strong>{prod.episodes}</strong>
                  </div>
                )}
                <div>
                  Director<strong>{prod.director}</strong>
                </div>
                <div>
                  Distribution<strong>{prod.distribution}</strong>
                </div>
              </div>

              <p>
                {prod.synopsisLead}
                <br />
                <br />
                {prod.synopsisBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stills Gallery */}
      {prod.stills && prod.stills.length > 0 && (
        <section className="section">
          <div className="container container--wide">
            <div className="kw-section-head fade-up">
              <div>
                <span className="eyebrow">Gallery</span>
                <h2 className="section-title">스틸·캐릭터.</h2>
              </div>
              <p>
                작품의 결을 담은 스틸과 캐릭터 컷.
                {prod.stills.length > 6
                  ? ` 총 ${prod.stills.length}장.`
                  : ''}
              </p>
            </div>

            <ProductionGallery stills={prod.stills} />
          </div>
        </section>
      )}

      {/* Trailer */}
      {prod.trailer && (
        <section className="section">
          <div className="container container--wide">
            <div className="kw-section-head fade-up">
              <div>
                <span className="eyebrow">Trailer</span>
                <h2 className="section-title">예고편.</h2>
              </div>
              <p>본 영상은 데모용 임시 임베드입니다.</p>
            </div>
            <div className="kw-prod-trailer fade-up">
              <iframe
                src={`https://www.youtube.com/embed/${prod.trailer.youtubeId}?rel=0&showinfo=0&modestbranding=1`}
                title={prod.trailer.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      )}

      {/* Cast & Crew */}
      <section className="section">
        <div className="container">
          <div className="kw-cast fade-up">
            <h3>
              <small>Cast &amp; Crew</small>주연·스태프.
            </h3>
            <dl className="kw-cast__list">
              <dt>Director · 감독</dt>
              <dd>{prod.cast.director}</dd>

              <dt>Screenplay · 각본</dt>
              <dd>{prod.cast.screenplay}</dd>

              <dt>Lead · 주연</dt>
              <dd>
                {prod.cast.lead.map((c, i) => (
                  <span key={i}>
                    {c.artistSlug ? (
                      <Link href={`/artists/${c.artistSlug}`}>{c.name}</Link>
                    ) : (
                      c.name
                    )}
                    {i < prod.cast.lead.length - 1 ? ' · ' : ''}
                  </span>
                ))}
              </dd>

              {prod.cast.supporting && (
                <>
                  <dt>Supporting · 조연</dt>
                  <dd>{prod.cast.supporting}</dd>
                </>
              )}

              {prod.cast.music && (
                <>
                  <dt>Music · 음악</dt>
                  <dd>{prod.cast.music}</dd>
                </>
              )}

              {prod.cast.producer && (
                <>
                  <dt>Producer · 제작</dt>
                  <dd>{prod.cast.producer}</dd>
                </>
              )}

              {prod.cast.distributor && (
                <>
                  <dt>Distributor · 배급</dt>
                  <dd>{prod.cast.distributor}</dd>
                </>
              )}
            </dl>
          </div>
        </div>
      </section>

      {/* Watch On */}
      {prod.watchOn.length > 0 && (
        <section className="section--tight">
          <div className="container">
            <div className="kw-section-head fade-up">
              <div>
                <span className="eyebrow">Watch On</span>
                <h2 className="section-title">시청 안내.</h2>
              </div>
              <p>다음 플랫폼에서 시청하실 수 있습니다.</p>
            </div>
            <div className="kw-watch-on fade-up">
              {prod.watchOn.map((w) => (
                <a key={w} href="#">
                  {w}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
