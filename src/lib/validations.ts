import { z } from 'zod'

export const BRANCH_VALUES = ['project', 'casting', 'cf', 'press', 'etc'] as const
export type BranchValue = (typeof BRANCH_VALUES)[number]

export const contactSchema = z.object({
  branch: z.enum(BRANCH_VALUES),
  branchLabel: z.string().optional(),
  name: z.string().min(2, '담당자 성명을 2자 이상 입력해 주세요.'),
  company: z.string().min(1, '회사 / 소속을 입력해 주세요.'),
  email: z
    .string()
    .email('올바른 이메일 형식이 아닙니다.')
    .optional()
    .or(z.literal('')),
  phone: z
    .string()
    .min(9, '연락처를 정확히 입력해 주세요.')
    .regex(/^[0-9\-+\s()]+$/, '올바른 전화번호 형식이 아닙니다.'),
  projectType: z.string().optional(),
  projectPeriod: z.string().optional(),
  actor: z.string().optional(),
  schedule: z.string().optional(),
  brand: z.string().optional(),
  campaign: z.string().optional(),
  model: z.string().optional(),
  media: z.string().optional(),
  topic: z.string().optional(),
  message: z.string().min(1, '문의 내용을 입력해 주세요.'),
})

export type ContactSchema = z.infer<typeof contactSchema>
