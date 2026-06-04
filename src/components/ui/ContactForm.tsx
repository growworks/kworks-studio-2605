'use client'

import { Fragment, useState, type FormEvent } from 'react'

type Branch = 'project' | 'casting' | 'cf' | 'press' | 'etc'

const BRANCHES: { value: Branch; en: string; label: string }[] = [
  { value: 'project', en: '01 · Project', label: '작품 제안' },
  { value: 'casting', en: '02 · Casting', label: '캐스팅 의뢰' },
  { value: 'cf', en: '03 · CF', label: '광고 협찬' },
  { value: 'press', en: '04 · Press', label: '언론·취재' },
  { value: 'etc', en: '05 · General', label: '일반 문의' },
]

export function ContactForm() {
  const [branch, setBranch] = useState<Branch | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const selected = branch ? BRANCHES.find((b) => b.value === branch) : null

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!branch) return
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setSubmitting(true)
    const branchLabel = selected?.label ?? '일반 문의'

    try {
      const data = Object.fromEntries(new FormData(form).entries())
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ branch, branchLabel, ...data }),
      }).catch(() => null)

      window.alert(
        `[${branchLabel}] 문의가 담당 부서로 전달되었습니다.\n영업일 기준 2~3일 내 회신드립니다.`,
      )
      form.reset()
      setBranch(null)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      className={`kw-contact-form${!branch ? ' is-locked' : ''}`}
      onSubmit={onSubmit}
      noValidate
    >
      {!selected ? (
        <>
          <div className="kw-contact-branch">
            {BRANCHES.map((b) => (
              <Fragment key={b.value}>
                <input
                  type="radio"
                  name="branch"
                  id={`b-${b.value}`}
                  value={b.value}
                  checked={branch === b.value}
                  onChange={() => setBranch(b.value)}
                />
                <label htmlFor={`b-${b.value}`}>
                  <span className="en">{b.en}</span>
                  <strong>{b.label}</strong>
                </label>
              </Fragment>
            ))}
          </div>
          <div className="kw-contact-form__lock-msg">
            문의 유형을 먼저 선택해 주세요.
          </div>
        </>
      ) : (
        <div className="kw-contact-selected">
          <span className="kw-contact-selected__en">{selected.en}</span>
          <strong className="kw-contact-selected__label">{selected.label}</strong>
          <button
            type="button"
            className="kw-contact-selected__change"
            onClick={() => setBranch(null)}
          >
            변경 ↺
          </button>
        </div>
      )}

      <div className="kw-contact-form__body">
        <div className="kw-form__row">
          <div className="kw-form__group">
            <label>
              담당자 성명 <span className="required">*</span>
            </label>
            <input type="text" name="name" required placeholder="홍길동" />
          </div>
          <div className="kw-form__group">
            <label>
              회사 / 소속 <span className="required">*</span>
            </label>
            <input
              type="text"
              name="company"
              required
              placeholder="○○ 엔터테인먼트 / 프리랜서"
            />
          </div>
        </div>

        <div className="kw-form__row">
          <div className="kw-form__group">
            <label>이메일</label>
            <input
              type="email"
              name="email"
              placeholder="contact@example.com"
            />
          </div>
          <div className="kw-form__group">
            <label>
              연락처 <span className="required">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="010-0000-0000"
            />
          </div>
        </div>

        <div
          className={`kw-branch-fields${branch === 'project' ? ' is-visible' : ''}`}
        >
          <div className="kw-form__group">
            <label>작품 형식</label>
            <select name="projectType" defaultValue="장편영화">
              <option>장편영화</option>
              <option>드라마</option>
              <option>단편</option>
              <option>OTT 시리즈</option>
              <option>기타</option>
            </select>
          </div>
          <div className="kw-form__group">
            <label>예상 제작 시기</label>
            <input
              type="text"
              name="projectPeriod"
              placeholder="예: 2026 상반기 크랭크인 예정"
            />
          </div>
        </div>

        <div
          className={`kw-branch-fields${branch === 'casting' ? ' is-visible' : ''}`}
        >
          <div className="kw-form__group">
            <label>희망 배우</label>
            <input
              type="text"
              name="actor"
              placeholder="복수 입력 시 쉼표(,)로 구분"
            />
          </div>
          <div className="kw-form__group">
            <label>촬영 일정</label>
            <input
              type="text"
              name="schedule"
              placeholder="예: 2025.08 ~ 2025.10"
            />
          </div>
        </div>

        <div
          className={`kw-branch-fields${branch === 'cf' ? ' is-visible' : ''}`}
        >
          <div className="kw-form__row">
            <div className="kw-form__group">
              <label>브랜드명</label>
              <input type="text" name="brand" placeholder="○○ Cosmetics" />
            </div>
            <div className="kw-form__group">
              <label>캠페인 기간</label>
              <input
                type="text"
                name="campaign"
                placeholder="예: 2025.09 ~ 2025.12"
              />
            </div>
          </div>
          <div className="kw-form__group">
            <label>예상 캠페인 모델</label>
            <input
              type="text"
              name="model"
              placeholder="희망 배우 (없으면 추천 요청)"
            />
          </div>
        </div>

        <div
          className={`kw-branch-fields${branch === 'press' ? ' is-visible' : ''}`}
        >
          <div className="kw-form__group">
            <label>매체명</label>
            <input type="text" name="media" placeholder="○○ 데일리 / ○○ 매거진" />
          </div>
          <div className="kw-form__group">
            <label>취재 주제</label>
            <input
              type="text"
              name="topic"
              placeholder="예: 〈리듬〉 크랭크인 현장 취재"
            />
          </div>
        </div>

        <div className="kw-form__group">
          <label>
            문의 내용 <span className="required">*</span>
          </label>
          <textarea
            name="message"
            required
            placeholder="구체적인 내용을 적어주시면 더 빠른 회신이 가능합니다."
          ></textarea>
        </div>

        <label className="kw-form__check">
          <input type="checkbox" required />
          <span>
            개인정보 수집·이용에 동의합니다. 수집된 정보는 문의 처리 목적 외 사용되지
            않습니다. <a href="#">자세히 보기</a>
          </span>
        </label>

        <div style={{ marginTop: 'var(--sp-6)' }}>
          <button type="submit" className="btn btn--filled" disabled={submitting}>
            {submitting ? '전송 중…' : '문의 보내기 →'}
          </button>
        </div>
      </div>
    </form>
  )
}
