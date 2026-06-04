import { z } from 'zod'

/**
 * admin API 응답 공통 타입
 */

// ─────────────────────────────────────────
// SiteConfig — /v1/{slug}/config
// ─────────────────────────────────────────
export const siteConfigSchema = z.object({
  slug: z.string(),
  siteName: z.string(),
  siteUrl: z.string().optional(),
  logoUrl: z.string().optional(),
  logoWhiteUrl: z.string().optional(),
  description: z.string().optional(),
  keywords: z.array(z.string()).optional(),

  contact: z
    .object({
      email: z.string().optional(),
      phone: z.string().optional(),
      kakaoUrl: z.string().optional(),
    })
    .optional(),

  seo: z
    .object({
      title: z.string().optional(),
      titleTemplate: z.string().optional(),
      description: z.string().optional(),
      ogImageUrl: z.string().optional(),
      locale: z.string().optional(),
    })
    .optional(),

  analytics: z
    .object({
      gaId: z.string().optional(),
      metaPixelId: z.string().optional(),
    })
    .optional(),
})
export type SiteConfig = z.infer<typeof siteConfigSchema>

// ─────────────────────────────────────────
// Presign 응답 — /v1/{slug}/presign
// ─────────────────────────────────────────
export const presignUploadSchema = z.object({
  uploadUrl: z.string(),
  fileUrl: z.string(),
  name: z.string(),
})
export const presignResponseSchema = z.object({
  uploads: z.array(presignUploadSchema),
})
export type PresignResponse = z.infer<typeof presignResponseSchema>
