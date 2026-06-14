import type { Metadata } from 'next'
import { ContactForm } from '@/components/ui/ContactForm'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'K Works Studio 분기형 문의 · 작품 제안, 캐스팅 의뢰, CF 협찬, 언론 취재, 일반.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <section className="kw-page-hero">
        <div className="kw-hero__media">
          <img src="/assets/images/res/scene-02.jpg" alt="서울 야경" />
        </div>
        <div className="kw-page-hero__inner">
          <span className="eyebrow">Inquiries</span>
          <h1>Contact</h1>
          <p>문의는 담당 부서로 자동 분기됩니다.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kw-section-head fade-up">
            <div>
              <span className="eyebrow">How can we help</span>
              <h2 className="section-title">
                어떤 일로
                <br />
                연락주셨나요?
              </h2>
            </div>
            <p>
              아래에서 문의 유형을 먼저 선택해 주세요. 유형에 맞는 부서로 자동
              분기되며, 영업일 기준 2~3일 내 회신드립니다.
            </p>
          </div>

          <ContactForm />

          <div className="kw-contact-info">
            <dl className="kw-contact-info__data">
              <dt>Address · 주소</dt>
              <dd>
                경기도 고양시 덕양구 항동로 217
                <br />
                DMC 플렉스데시앙 A타워 1407호
              </dd>

              <dt>Tel · Fax</dt>
              <dd>
                {SITE.tel} · {SITE.fax}
              </dd>

              <dt>Email</dt>
              <dd>{SITE.email}</dd>

              <dt>Office Hours · 운영 시간</dt>
              <dd>{SITE.officeHours}</dd>

              <dt>Registration · 등록</dt>
              <dd style={{ fontSize: '13px' }}>{SITE.registration}</dd>
            </dl>

            <a
              className="kw-contact-map"
              href={SITE.naverMapUrl}
              target="_blank"
              rel="noopener"
              aria-label="네이버 지도에서 K Works Studio 위치 보기"
            >
              <img
                src="/assets/images/res/map-naver.jpg"
                alt="K Works Studio 위치, 경기도 고양시 덕양구 항동로 217 DMC 플렉스데시앙"
              />
              <span className="kw-contact-map__link">
                네이버 지도에서 보기 →
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
