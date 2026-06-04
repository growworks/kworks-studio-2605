# K Works Studio (kworks-studio)

영화·콘텐츠 제작 + 배우 매니지먼트 **K Works Studio**의 Next.js 운영 사이트.

- **베이스**: `growworks-core` (Next.js 16.2.2 · React 19 · Tailwind v4 · zod 4)
- **데모 1:1**: `k-works-demo` 시네마틱 HTML 데모를 100% 재현
- **참고 패턴**: `erum-inc` (멀티페이지 라우팅 · SEO JsonLd · API)

## 실행

```bash
cp .env.example .env.local
npm install
npm run dev      # http://localhost:3410
```

## 환경변수

| 변수 | 설명 | 기본 |
|---|---|---|
| `SITE_SLUG` | admin 사이트 식별자 | `kworks-studio` |
| `API_BASE_URL` | admin API 베이스 URL | `https://api.growworks.co.kr` |
| `CONTACT_API_MOCK` | true 시 외부 API 없이 콘솔 로그 | `true` |
| `NEXT_PUBLIC_SITE_URL` | 사이트 URL (sitemap·metadata) | `https://k-worksstudio.com` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics | 선택 |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel | 선택 |

## 라우트 (9 페이지)

| 경로 | 데모 대응 |
|---|---|
| `/` | index.html |
| `/artists` | artists.html |
| `/artists/[slug]` | artist-detail.html (yoon-bok-in, lee-byung-jun) |
| `/production` | production.html |
| `/production/[slug]` | production-detail.html (chaebi 외 4편) |
| `/notice` | notice.html |
| `/notice/[id]` | notice-detail.html |
| `/audition` | audition.html |
| `/contact` | contact.html |

SEO 라우트: `/sitemap.xml`, `/robots.txt`, `/opengraph-image.png`.

## 디렉토리

```
src/
├── app/
│   ├── artists/, production/, notice/, audition/, contact/
│   ├── api/contact/route.ts        분기형 문의 라우팅 (5분기)
│   ├── layout.tsx                  Pretendard·Inter, JsonLd(Org/WebSite)
│   ├── page.tsx                    HOME (hero·carousel·featured·statement·notice·CTA)
│   ├── sitemap.ts, robots.ts, opengraph-image.tsx
│   └── globals.css                 데모 디자인 토큰 + 전 컴포넌트 스타일
├── components/
│   ├── layout/{Header,Footer,RevealRoot,HeroParallax}.tsx
│   ├── ui/{Carousel,FilmographyTabs,ProductionFilter,ContactForm}.tsx
│   └── seo/JsonLd.tsx
├── data/
│   ├── site.ts                     브랜드·연락처·SNS·법적정보
│   ├── artists.ts                  배우 2명 · 필모 · 갤러리 · 쇼릴
│   ├── productions.ts              작품 5편 · 시놉시스 · 캐스트
│   └── notices.ts                  공지 5건
└── lib/
    ├── seo/jsonld.ts               Organization · Person · Movie · NewsArticle
    └── validations.ts              contactSchema (branch + 분기별 필드)
```

## 데이터 변경

배우·작품·공지는 모두 **정적 코드 상수**입니다.

| 추가/수정 | 파일 |
|---|---|
| 배우 (프로필·필모·갤러리·쇼릴·PDF) | `src/data/artists.ts` |
| 작품 (포스터·시놉시스·캐스트·트레일러) | `src/data/productions.ts` |
| 공지 (News/Notice/Audition 카테고리) | `src/data/notices.ts` |
| 회사 정보 (주소·연락처·SNS) | `src/data/site.ts` |

## 디자인 시스템 핵심

- **컬러**: 무채색 베이스 80%+ · `#C8A968` 골드 5% 이하
- **반경**: 0/2/4px만 (`--r-0/1/2`)
- **타이포**: Pretendard Variable (CDN) + Inter (Google Fonts)
- **모션**: vanilla CSS + IntersectionObserver (`.fade-up` → `.is-visible`)
- **레이아웃**: 비대칭 매거진 그리드, 헤로 parallax (`prefers-reduced-motion` 분기)

## 인계용 TODO

- 정적 PDF 업로드 (`public/pdf/`):
  - `profile-yoon-bok-in.pdf`, `profile-lee-byung-jun.pdf`
  - `audition-form.pdf`
- 실 SNS URL: `src/data/site.ts` 의 `social.*` 갱신
- 개인정보처리방침·이용약관 페이지: `src/data/site.ts` 의 `legal.*` 갱신
- `.env.local` 설정 (특히 `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID`)
- `CONTACT_API_MOCK=false` + admin 사이트 등록 후 실제 라우팅 검증

## 베이스 변경 요약

`growworks-core` 대비 추가/제거:

- 추가: `src/data/*`, `src/components/layout/*`, `src/components/ui/*`, `src/components/seo/*`, `src/lib/seo/jsonld.ts`
- 갱신: `app/layout.tsx`(Pretendard CDN + Header/Footer + JsonLd), `app/page.tsx`(HOME 9페이지), `globals.css`(데모 디자인 토큰 이식), `api/contact/route.ts`(분기형), `validations.ts`(K Works 폼 스키마), `sitemap.ts`(전 페이지 포함), `opengraph-image.tsx`(시네마틱 톤)
- 제거: `/sample`, `/api/presign` (파일 업로드 미사용)
