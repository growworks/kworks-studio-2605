import type { Artist, FilmoCategory, FilmoEntry } from '@/data/artists'
import type { Notice, NoticeCategory } from '@/data/notices'
import type { Production } from '@/data/productions'
import type { ApiPortfolio, ApiPost } from './types'

/**
 * admin 응답 (Portfolio / Post)을 우리 도메인 타입으로 변환.
 *
 * custom 키 매핑은 openapi-kworksstudio.yaml § "kworksstudio 카테고리별 필드 매핑" 표 기준.
 * 운영 중 키 번호가 바뀌면 admin 어드민에서 customSchema 재정의 → 본 파일도 같이 갱신해야 한다.
 */

type CustomMap = Record<string, unknown>

function asString(v: unknown): string {
  if (v === null || v === undefined) return ''
  return String(v)
}

function asStringArray(v: unknown): string[] {
  if (!Array.isArray(v)) return []
  return v.filter((x): x is string => typeof x === 'string')
}

function asGroup(v: unknown): CustomMap[] {
  if (!Array.isArray(v)) return []
  return v.filter(
    (x): x is CustomMap => typeof x === 'object' && x !== null && !Array.isArray(x),
  )
}

/** HTML 태그 제거 + 엔티티 디코드 + 공백 정리. SSR 환경에서도 안전. */
function htmlToText(html: string | null | undefined): string {
  if (!html) return ''
  return html
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<br\s*\/?\s*>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

// ─────────────────────────────────────────────
// 아티스트
// ─────────────────────────────────────────────

export function mapArtist(p: ApiPortfolio, index: number): Artist {
  const c = (p.custom ?? {}) as CustomMap
  const born = asString(c.field_3)
  const birthYearMatch = born.match(/^(\d{4})/)
  const birthYearShort = birthYearMatch ? `b.${birthYearMatch[1]}` : ''

  const filmography: Record<FilmoCategory, FilmoEntry[]> = {
    film: mapFilmEntries(c.field_7),
    drama: mapDramaEntries(c.field_8),
    play: mapPlayEntries(c.field_9),
    musical: mapMusicalEntries(c.field_10),
    ent: mapEntEntries(c.field_11),
    album: mapAlbumEntries(c.field_12),
    cf: [],
    mv: [],
  }

  const heroImage = p.thumbnailUrl ?? ''
  const galleryImages = asStringArray(p.images)

  return {
    slug: asString(c.slug),
    index,
    ko: p.title,
    en: asString(c.field_2),
    born,
    birthYearShort,
    education: asString(c.field_4),
    debut: asString(c.field_5),
    agency: asString(c.field_6) || 'K Works Studio',
    description: htmlToText(p.description),
    heroImage,
    cardImage: heroImage,
    profileImage: heroImage,
    artistsCardImage: heroImage,
    filmography,
    galleries: buildGalleries(heroImage, galleryImages),
  }
}

function mapFilmEntries(v: unknown): FilmoEntry[] {
  return asGroup(v).map((row) => ({
    year: asString(row.sub_2),
    title: asString(row.title),
    titleEn: '',
    role: '',
    outlet: '',
  }))
}

function mapDramaEntries(v: unknown): FilmoEntry[] {
  return asGroup(v).map((row) => ({
    year: asString(row.sub_2),
    title: asString(row.title),
    titleEn: '',
    role: '',
    outlet: asString(row.sub_3),
  }))
}

function mapPlayEntries(v: unknown): FilmoEntry[] {
  return asGroup(v).map((row) => ({
    year: asString(row.sub_4),
    title: asString(row.title),
    titleEn: '',
    role: asString(row.sub_3),
    outlet: asString(row.sub_2),
  }))
}

function mapMusicalEntries(v: unknown): FilmoEntry[] {
  return asGroup(v).map((row) => ({
    year: '',
    title: asString(row.title),
    titleEn: '',
    role: asString(row.sub_2),
    outlet: '뮤지컬',
  }))
}

function mapEntEntries(v: unknown): FilmoEntry[] {
  return asGroup(v).map((row) => ({
    year: asString(row.sub_4),
    title: asString(row.title),
    titleEn: '',
    role: asString(row.sub_3),
    outlet: asString(row.sub_2),
  }))
}

function mapAlbumEntries(v: unknown): FilmoEntry[] {
  return asGroup(v).map((row) => ({
    year: asString(row.sub_2),
    title: asString(row.title),
    titleEn: 'Album',
    role: '',
    outlet: '',
  }))
}

/** thumbnail + images[]를 매거진 비대칭 갤러리 행(big 1 + col 2)으로 분배. */
function buildGalleries(thumb: string, images: string[]): Artist['galleries'] {
  const all = [thumb, ...images].filter((s) => !!s)
  if (all.length === 0) return []

  const rows: Artist['galleries'] = []
  let i = 0
  while (i < all.length) {
    const big = { src: all[i], alt: '' }
    const col = all.slice(i + 1, i + 3).map((src) => ({ src, alt: '' }))
    rows.push({ big, col, reverse: rows.length % 2 === 1 })
    i += 1 + col.length
  }
  return rows
}

// ─────────────────────────────────────────────
// 프로덕션
// ─────────────────────────────────────────────

export function mapProduction(p: ApiPortfolio): Production {
  const c = (p.custom ?? {}) as CustomMap
  const leadNames = asString(c.field_10)
    .split(/[,，]/)
    .map((s) => s.trim())
    .filter(Boolean)

  const stillUrls = asStringArray(c.field_7)
  const charUrls = asStringArray(c.field_8)
  const stills = [
    ...stillUrls.map((src) => ({ src, alt: '' })),
    ...charUrls.map((src) => ({ src: ensureCharacterMark(src), alt: '' })),
  ]

  return {
    slug: asString(c.slug),
    ko: p.title,
    en: asString(c.field_1),
    releaseDate: asString(c.field_14),
    genre: asString(c.field_3).replace(/,/g, ' · '),
    runtime: asString(c.field_4),
    director: asString(c.field_5),
    distribution: asString(c.field_6) || 'K Works Studio',
    poster: p.thumbnailUrl ?? '',
    stills,
    category: 'film',
    description: htmlToText(p.description),
    cast: {
      director: asString(c.field_5),
      screenplay: asString(c.field_9),
      lead: leadNames.map((name) => ({ name })),
      supporting: asString(c.field_11) || undefined,
      producer: asString(c.field_12) || undefined,
    },
    watchOn: [],
  }
}

/**
 * ProductionGallery 가 src 경로의 `/character-` 패턴으로 가로/세로 분기를 하므로,
 * S3 URL 끝에 `#character` 해시를 붙여 분기 트리거를 유지.
 * (URL 자체는 동일하게 응답)
 */
function ensureCharacterMark(src: string): string {
  if (/\/character[-_]/.test(src)) return src
  return `${src}#character-1`
}

// ─────────────────────────────────────────────
// 공지사항
// ─────────────────────────────────────────────

const CATEGORY_LABEL: Record<string, NoticeCategory> = {
  News: 'News',
  Notice: 'Notice',
  Audition: 'Audition',
}

export function mapNotice(p: ApiPost): Notice {
  const c = (p.custom ?? {}) as CustomMap
  const tag = asString(c.field_1)
  return {
    id: String(p.id),
    category: CATEGORY_LABEL[tag] ?? 'Notice',
    date: formatDate(p.createdAt),
    title: p.title,
    body: htmlToText(p.content),
  }
}

function formatDate(iso: string): string {
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})/)
  if (!m) return iso
  return `${m[1]}.${m[2]}.${m[3]}`
}
