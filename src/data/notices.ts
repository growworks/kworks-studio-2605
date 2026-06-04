export type NoticeCategory = 'News' | 'Notice' | 'Audition'

export type Notice = {
  id: string
  category: NoticeCategory
  date: string
  title: string
  body: string
}

export const NOTICES: Notice[] = [
  {
    id: 'audition-2026',
    category: 'Audition',
    date: '2026.03.21',
    title: '2026년도 상시 오디션 안내 · 배우(연기자) 모집',
    body: `K Works Studio가 2026년도 상시 오디션을 통해 새로운 얼굴을 만납니다.

**모집 분야**
배우 (연기자)

**자격 요건**
성별·연령·국적 제한 없음

**접수 방법**
공식 지원서 양식을 다운로드한 뒤 작성하여, 개인 프로필 사진(전신·클로즈업 각 1장)과 1분 내외 자기소개 영상과 함께 kwstudio33@gmail.com 으로 보내주세요.

1차 서류 심사 후 1~2주 내 개별 연락드립니다.`,
  },
]

export function findNotice(id: string): Notice | undefined {
  return NOTICES.find((n) => n.id === id)
}

export function getAdjacentNotices(id: string): {
  prev?: Notice
  next?: Notice
} {
  const idx = NOTICES.findIndex((n) => n.id === id)
  if (idx === -1) return {}
  return {
    prev: idx > 0 ? NOTICES[idx - 1] : undefined,
    next: idx < NOTICES.length - 1 ? NOTICES[idx + 1] : undefined,
  }
}
