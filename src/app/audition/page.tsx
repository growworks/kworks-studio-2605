import type { Metadata } from 'next'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'Audition',
  description:
    'K Works Studio 상시 오디션. 배우(연기자) 모집, 성별·연령·국적 제한 없음.',
}

export default function AuditionPage() {
  return (
    <>
      <section className="kw-page-hero">
        <div className="kw-hero__media">
          <img src="/assets/images/res/scene-03.jpg" alt="K Works 촬영 현장" />
        </div>
        <div className="kw-page-hero__inner">
          <span className="eyebrow">Open Audition</span>
          <h1>Audition</h1>
          <p>우리는 365일 새로운 얼굴을 기다립니다.</p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          {/* 오디션 안내 */}
          <div className="kw-audition-block fade-up">
            <div className="kw-audition-block__head">
              <span className="eyebrow">K Works Audition</span>
              <h3>오디션 안내.</h3>
            </div>
            <dl className="kw-audition-info">
              <dt>모집분야</dt>
              <dd>배우 (연기자)</dd>
              <dt>모집기간</dt>
              <dd>상시 진행</dd>
              <dt>지원 자격</dt>
              <dd>성별, 연령, 국적 제한 없음</dd>
            </dl>
          </div>

          {/* 진행 사항 */}
          <div className="kw-audition-block fade-up">
            <div className="kw-audition-block__head">
              <span className="eyebrow">Process</span>
              <h3>진행 사항.</h3>
            </div>
            <ol className="kw-audition-steps">
              <li>
                <span className="step-num">01</span>
                <span className="step-title">지원서 접수 및 심사</span>
                <span className="step-desc">
                  제출된 서류를 바탕으로 1차 검토합니다.
                </span>
              </li>
              <li>
                <span className="step-num">02</span>
                <span className="step-title">현장(실물) 미팅</span>
                <span className="step-desc">
                  합격자에 한해 사무실에서 직접 만납니다.
                </span>
              </li>
              <li>
                <span className="step-num">03</span>
                <span className="step-title">임원진 미팅</span>
                <span className="step-desc">
                  최종 단계 전 대표 면담이 진행됩니다.
                </span>
              </li>
              <li>
                <span className="step-num">04</span>
                <span className="step-title">최종 합격</span>
                <span className="step-desc">
                  매니지먼트 계약 절차를 안내드립니다.
                </span>
              </li>
            </ol>
          </div>

          {/* 제출 서류 */}
          <div className="kw-audition-block fade-up">
            <div className="kw-audition-block__head">
              <span className="eyebrow">Documents</span>
              <h3>제출 서류.</h3>
            </div>
            <div className="kw-audition-docs">
              <ul className="kw-audition-docs__list">
                <li>
                  오디션 지원서<small>K Works 공식 양식</small>
                </li>
                <li>
                  개인 프로필 (전신 · 클로즈업 이미지 각 1장)
                  <small>최근 3개월 이내 촬영본 권장 · JPG/PNG</small>
                </li>
                <li>
                  1분 내외 자기 소개 영상
                  <small>MP4 · MOV 또는 YouTube/Vimeo 공유 URL</small>
                </li>
              </ul>
              <aside className="kw-audition-docs__cta">
                <span className="eyebrow">Application Form</span>
                <p>
                  K Works 공식
                  <br />
                  지원서 양식.
                </p>
                <a
                  href="/forms/k-works-audition-form.docx"
                  className="btn btn--gold"
                  download
                >
                  지원서 다운 받기 →
                </a>
                <small>
                  다운로드한 양식에 작성 후, 사진·영상 자료와 함께 아래
                  이메일로 보내주세요.
                </small>
              </aside>
            </div>
          </div>

          {/* 접수 방법 */}
          <div className="kw-audition-howto fade-up">
            <div className="kw-audition-block__head">
              <span className="eyebrow">How to Apply</span>
              <h3>접수 방법.</h3>
            </div>
            <p className="kw-audition-howto__main">
              지원서 양식 다운로드 후 작성
              <span className="arrow">→</span>
              <a href={`mailto:${SITE.email}`} className="email">
                {SITE.email}
              </a>
              로 지원
            </p>
            <small>
              *현장(실물) 미팅은 보내주신 자료를 바탕으로 1차 심사 후 합격 여부에
              따라 1-2주 내, 개별 연락 드립니다.
            </small>
          </div>
        </div>
      </section>
    </>
  )
}
