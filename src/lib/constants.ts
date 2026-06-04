/**
 * 환경변수 기반 상수
 * 데이터/콘텐츠는 admin API에서 가져온다 (lib/api/ 참고)
 */

export const SITE_SLUG = process.env.SITE_SLUG ?? ''
export const API_BASE_URL = process.env.API_BASE_URL ?? 'https://api.growworks.co.kr'

// 클라이언트에서 접근 가능 (NEXT_PUBLIC_*)
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? ''
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? ''
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? ''
