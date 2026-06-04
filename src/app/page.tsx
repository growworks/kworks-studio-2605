import Link from 'next/link'
import { HeroParallax } from '@/components/layout/HeroParallax'
import { Carousel } from '@/components/ui/Carousel'
import { ARTISTS } from '@/data/artists'
import { NOTICES } from '@/data/notices'
import { PRODUCTIONS } from '@/data/productions'

export default function HomePage() {
  const recentNotices = NOTICES.slice(0, 3)

  return (
    <>
      <HeroParallax selector=".kw-hero__media" />

      {/* ====== HERO ====== */}
      <section className="kw-hero">
        <div className="kw-hero__media">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/assets/images/res/scene-01_m.jpg"
            />
            <img src="/assets/images/res/scene-01.jpg" alt="K Works 촬영 현장" />
          </picture>
        </div>
        <div className="kw-hero__inner">
          <div className="kw-hero__copy">
            <h1 className="kw-hero__title">
              K Works <em>Studio</em>
            </h1>
            <p className="kw-hero__subtitle">
              영화 및 콘텐츠 제작 · 아티스트 매니지먼트
            </p>
          </div>
        </div>
        <div className="kw-hero__scroll">scroll</div>
      </section>

      {/* ====== Latest Work Carousel ====== */}
      <section className="section">
        <div className="container container--wide">
          <Carousel
            eyebrow="Recent Productions"
            title={
              <>
                우리가
                <br />
                만든 이야기.
              </>
            }
            description={
              <>
                장편·드라마·단편을 가리지 않습니다.
                <br />
                다만, 끝까지 본 사람의 마음에 남는 작품을 만듭니다.
              </>
            }
          >
            {PRODUCTIONS.map((p) => (
              <Link
                key={p.slug}
                className="kw-card-work"
                href={`/production/${p.slug}`}
              >
                <div className="kw-card-work__poster">
                  <img src={p.poster} alt={`〈${p.ko}〉 포스터`} />
                </div>
                <div className="kw-card-work__meta">
                  <p className="en">
                    {p.en} · {p.year}
                  </p>
                  <h3 className="h-serif">{p.ko}</h3>
                  <span className="kw-card-work__tag">{p.genre}</span>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </section>

      {/* ====== Featured Artists ====== */}
      <section className="section">
        <div className="container">
          <div className="kw-section-head fade-up">
            <div>
              <span className="eyebrow">Featured Artists</span>
              <h2 className="section-title">
                함께하는
                <br />
                사람들.
              </h2>
            </div>
            <p>
              K Works가 매니지먼트하는 배우들. 한 사람을 깊게 알아가는 일을
              우선합니다.
            </p>
          </div>

          <div className="kw-featured-artists fade-up">
            {ARTISTS.map((a) => (
              <Link
                key={a.slug}
                className="kw-featured-artists__card"
                href={`/artists/${a.slug}`}
              >
                <div className="kw-featured-artists__card__photo">
                  <img src={a.cardImage} alt={`${a.ko} 화보`} />
                </div>
                <div className="kw-featured-artists__card__meta">
                  <div className="kw-featured-artists__card__name">
                    <span className="h-serif">{a.ko}</span>
                    <span className="en">{a.en}</span>
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

      {/* ====== Statement ====== */}
      <section className="kw-statement fade-up">
        <div className="kw-statement__inner">
          <blockquote>
            영화는 결국 사람의 일이라고 우리는 믿습니다.
            <br />
            장면을 지키는 스태프, 한 컷을 위해 다시 일어서는 배우,
            <br />
            그리고 끝까지 자리에 앉아 있는 관객.
            <br />
            K Works는 그 사이를 잇는 회사입니다.
            <cite>- K Works Studio</cite>
          </blockquote>
        </div>
      </section>

      {/* ====== Notice ====== */}
      <section className="section" id="notice">
        <div className="container">
          <div className="kw-section-head fade-up">
            <div>
              <span className="eyebrow">Notice & News</span>
              <h2 className="section-title">최신 소식.</h2>
            </div>
            <p>
              공식 공지와 보도자료를 같은 영역에 정리합니다. 카테고리 태그로
              구분하세요.
            </p>
          </div>
          <div className="kw-notice-list fade-up">
            {recentNotices.map((n) => (
              <Link
                key={n.id}
                href={`/notice/${n.id}`}
                className="kw-notice-row"
              >
                <span className="kw-notice-row__cat">{n.category}</span>
                <span className="kw-notice-row__date">{n.date}</span>
                <span className="kw-notice-row__title">{n.title}</span>
                <span className="kw-notice-row__arrow">VIEW →</span>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 'var(--sp-10)' }}>
            <Link href="/notice" className="btn btn--ghost">
              전체 공지 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* ====== CTA Duo ====== */}
      <section className="section--tight">
        <div className="container container--wide">
          <div className="kw-cta-duo fade-up">
            <Link
              href="/audition"
              className="kw-cta-duo__cell kw-cta-duo__cell--audition"
            >
              <div>
                <span className="eyebrow">Open Audition</span>
                <h3>
                  새로운 얼굴을
                  <br />
                  기다립니다.
                </h3>
                <p>
                  K Works는 1년 내내 새 얼굴을 만납니다. 성별·연령·국적 제한 없이
                  지원 가능합니다.
                </p>
              </div>
              <span className="kw-cta-duo__cell__more">지원 안내 보기 →</span>
            </Link>
            <Link
              href="/contact"
              className="kw-cta-duo__cell kw-cta-duo__cell--contact"
            >
              <div>
                <span className="eyebrow">Inquiries</span>
                <h3>
                  먼저 메시지를
                  <br />
                  주세요.
                </h3>
                <p>
                  작품 제안 · 캐스팅 의뢰 · 광고 협찬 · 언론 취재. 부서별
                  담당자에게 직접 전달됩니다.
                </p>
              </div>
              <span className="kw-cta-duo__cell__more">문의하기 →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
