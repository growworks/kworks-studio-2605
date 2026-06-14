import type { ContactSchema } from '@/lib/validations'

/**
 * 운영 서버 공개 API 명세(openapi-kworksstudio.yaml)의
 * "권장 message 구성 형식"에 맞춰 폼 입력 전체를 한 덩어리 본문으로 합친다.
 *
 * 실제 API 는 `name`, `phone`, `serviceType`, `message` 4 필드만 저장하므로
 * 회사/소속·이메일·주제별 추가 항목은 모두 이 본문에 라벨:값 으로 적재한다.
 *
 * 값이 비어 있는 선택 항목은 라인을 생략한다.
 */
export function composeContactMessage(
  data: ContactSchema,
  branchLabel: string,
): string {
  const lines: string[] = [`[${branchLabel}]`]

  push(lines, '회사/소속', data.company)
  push(lines, '이메일', data.email)

  switch (data.branch) {
    case 'project':
      push(lines, '작품 형식', data.projectType)
      push(lines, '예상 제작 시기', data.projectPeriod)
      break
    case 'casting':
      push(lines, '희망 배우', data.actor)
      push(lines, '촬영 일정', data.schedule)
      break
    case 'cf':
      push(lines, '브랜드명', data.brand)
      push(lines, '캠페인 기간', data.campaign)
      push(lines, '예상 캠페인 모델', data.model)
      break
    case 'press':
      push(lines, '매체명', data.media)
      push(lines, '취재 주제', data.topic)
      break
    case 'etc':
      // 추가 항목 없음
      break
  }

  lines.push('', '문의 내용:', data.message)

  return lines.join('\n')
}

function push(lines: string[], label: string, value: string | undefined): void {
  const trimmed = value?.trim()
  if (!trimmed) return
  lines.push(`${label}: ${trimmed}`)
}
