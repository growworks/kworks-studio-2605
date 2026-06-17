import { z } from 'zod'

/**
 * admin 공개 API 응답 스키마 (openapi-kworksstudio.yaml 기준).
 * 매퍼에서 사용하며, 응답이 명세와 어긋나면 일찍 throw 해서
 * 페이지가 깨진 채로 렌더되지 않도록 한다.
 */

const customValueSchema: z.ZodType<unknown> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.null(),
    z.array(z.union([z.string(), z.record(z.string(), z.unknown())])),
  ]),
)

const customSchema = z.record(z.string(), customValueSchema).nullable().optional()

export const portfolioSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string().nullable().optional(),
  category: z.string().nullable().optional(),
  thumbnailUrl: z.string().nullable().optional(),
  images: z.array(z.string()).nullable().optional(),
  link: z.string().nullable().optional(),
  custom: customSchema,
  isVisible: z.boolean(),
  sortOrder: z.number(),
  createdAt: z.string().optional(),
})

export const portfolioListSchema = z.object({
  items: z.array(portfolioSchema),
  total: z.number(),
  page: z.number(),
  limit: z.number(),
})

export const postSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  category: z.string().nullable().optional(),
  custom: customSchema,
  authorAdminId: z.number().nullable().optional(),
  authorName: z.string().nullable().optional(),
  isPinned: z.boolean(),
  isVisible: z.boolean(),
  viewCount: z.number(),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
})

export const postListSchema = z.object({
  items: z.array(postSchema),
  total: z.number(),
  page: z.number(),
  limit: z.number(),
})

export type ApiPortfolio = z.infer<typeof portfolioSchema>
export type ApiPortfolioList = z.infer<typeof portfolioListSchema>
export type ApiPost = z.infer<typeof postSchema>
export type ApiPostList = z.infer<typeof postListSchema>
