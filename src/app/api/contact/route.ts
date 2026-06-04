import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validations'
import { API_BASE_URL, SITE_SLUG } from '@/lib/constants'

const BRANCH_LABEL: Record<string, string> = {
  project: '작품 제안',
  casting: '캐스팅 의뢰',
  cf: 'CF · 광고 협찬',
  press: '언론·취재 문의',
  etc: '일반 문의',
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, unknown>

    const parsed = contactSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: '입력값이 올바르지 않습니다.', details: parsed.error.flatten() },
        { status: 400 },
      )
    }

    const data = parsed.data
    const branchLabel = BRANCH_LABEL[data.branch] ?? data.branchLabel ?? '일반 문의'

    const payload = {
      branch: data.branch,
      branchLabel,
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone ?? null,
      projectType: data.projectType ?? null,
      projectPeriod: data.projectPeriod ?? null,
      actor: data.actor ?? null,
      schedule: data.schedule ?? null,
      brand: data.brand ?? null,
      campaign: data.campaign ?? null,
      model: data.model ?? null,
      media: data.media ?? null,
      topic: data.topic ?? null,
      message: data.message,
    }

    if (process.env.CONTACT_API_MOCK === 'true' || !SITE_SLUG) {
      console.log('[K Works Contact]', JSON.stringify(payload, null, 2))
      return NextResponse.json({
        success: true,
        message: `[${branchLabel}] 문의가 담당 부서로 전달되었습니다.`,
      })
    }

    const apiResponse = await fetch(`${API_BASE_URL}/v1/${SITE_SLUG}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!apiResponse.ok) {
      const errorText = await apiResponse.text()
      console.error('[Contact API Error]', apiResponse.status, errorText)
      throw new Error(`API responded with ${apiResponse.status}`)
    }

    return NextResponse.json({
      success: true,
      message: `[${branchLabel}] 문의가 담당 부서로 전달되었습니다.`,
    })
  } catch (error) {
    console.error('[Contact API Error]', error)
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.' },
      { status: 500 },
    )
  }
}
