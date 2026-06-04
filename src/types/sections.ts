import { z } from 'zod'

/**
 * 섹션별 콘텐츠 zod 스키마
 *
 * admin API `/v1/{slug}/content` 응답을 파싱·검증하기 위한 표준 타입.
 * 모든 섹션은 optional 처리하여, 사이트마다 사용하는 섹션이 다를 수 있다.
 */

// ─────────────────────────────────────────
// 공통
// ─────────────────────────────────────────
export const ctaSchema = z.object({
  label: z.string(),
  href: z.string(),
})

// ─────────────────────────────────────────
// Hero
// ─────────────────────────────────────────
export const heroSchema = z.object({
  headline: z.string(),
  subhead: z.string().optional(),
  primaryCta: ctaSchema.optional(),
  secondaryCta: ctaSchema.optional(),
  trustItems: z.array(z.string()).optional(),
})
export type Hero = z.infer<typeof heroSchema>

// ─────────────────────────────────────────
// Why (서비스 차별점)
// ─────────────────────────────────────────
export const whyItemSchema = z.object({
  icon: z.string().optional(),
  title: z.string(),
  description: z.string(),
})
export const whySectionSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  items: z.array(whyItemSchema),
})
export type WhySection = z.infer<typeof whySectionSchema>

// ─────────────────────────────────────────
// Services
// ─────────────────────────────────────────
export const serviceItemSchema = z.object({
  icon: z.string().optional(),
  title: z.string(),
  description: z.string(),
  features: z.array(z.string()).optional(),
  href: z.string().optional(),
})
export const servicesSectionSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  items: z.array(serviceItemSchema),
})
export type ServicesSection = z.infer<typeof servicesSectionSchema>

// ─────────────────────────────────────────
// Process
// ─────────────────────────────────────────
export const processStepSchema = z.object({
  step: z.number(),
  title: z.string(),
  description: z.string().optional(),
  note: z.string().optional(),
})
export const processSectionSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  steps: z.array(processStepSchema),
})
export type ProcessSection = z.infer<typeof processSectionSchema>

// ─────────────────────────────────────────
// Pricing
// ─────────────────────────────────────────
export const pricingPlanSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  price: z.number(),
  priceNote: z.string().optional(),
  features: z.array(z.string()),
  highlight: z.boolean().optional(),
})
export const pricingSectionSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  plans: z.array(pricingPlanSchema),
})
export type PricingSection = z.infer<typeof pricingSectionSchema>

// ─────────────────────────────────────────
// Operating Policy (운영 및 보수 정책)
// ─────────────────────────────────────────
export const operatingPolicyCardSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  features: z.array(z.string()).optional(),
  price: z.number().optional(),
  priceNote: z.string().optional(),
  note: z.string().optional(),
})
export const operatingPolicySectionSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  cards: z.array(operatingPolicyCardSchema),
})
export type OperatingPolicySection = z.infer<typeof operatingPolicySectionSchema>

// ─────────────────────────────────────────
// Team
// ─────────────────────────────────────────
export const teamMemberSchema = z.object({
  name: z.string(),
  role: z.string(),
  bio: z.string().optional(),
  photoUrl: z.string().optional(),
  tags: z.array(z.string()).optional(),
})
export const teamSectionSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  members: z.array(teamMemberSchema),
})
export type TeamSection = z.infer<typeof teamSectionSchema>

// ─────────────────────────────────────────
// Portfolio
// ─────────────────────────────────────────
export const portfolioItemSchema = z.object({
  id: z.string(),
  category: z.string(),
  title: z.string(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
  thumbnailUrl: z.string().optional(),
  href: z.string().optional(),
  duration: z.string().optional(),
})
export const portfolioSectionSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  items: z.array(portfolioItemSchema),
})
export type PortfolioSection = z.infer<typeof portfolioSectionSchema>

// ─────────────────────────────────────────
// Contact
// ─────────────────────────────────────────
export const contactSectionSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  kakaoUrl: z.string().optional(),
})
export type ContactSection = z.infer<typeof contactSectionSchema>

// ─────────────────────────────────────────
// 전체 콘텐츠
// ─────────────────────────────────────────
export const siteContentSchema = z.object({
  hero: heroSchema.optional(),
  why: whySectionSchema.optional(),
  services: servicesSectionSchema.optional(),
  process: processSectionSchema.optional(),
  pricing: pricingSectionSchema.optional(),
  operatingPolicy: operatingPolicySectionSchema.optional(),
  team: teamSectionSchema.optional(),
  portfolio: portfolioSectionSchema.optional(),
  contact: contactSectionSchema.optional(),
})
export type SiteContent = z.infer<typeof siteContentSchema>
