import type { Metadata, Viewport } from 'next'
import { Analytics } from '@/components/Analytics'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { RevealRoot } from '@/components/layout/RevealRoot'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE } from '@/data/site'
import { SITE_URL } from '@/lib/constants'
import { organizationLd, websiteLd } from '@/lib/seo/jsonld'
import './globals.css'

const TITLE_DEFAULT = `${SITE.brand} | ${SITE.brandKo}`
const DESCRIPTION = `${SITE.brand} · 영화·콘텐츠 제작과 배우 매니지먼트. 우리는 이야기를 만든다.`

export const viewport: Viewport = {
  themeColor: '#0B0B0C',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: {
    default: TITLE_DEFAULT,
    template: `%s | ${SITE.brand}`,
  },
  description: DESCRIPTION,
  applicationName: SITE.brand,
  metadataBase: SITE_URL ? new URL(SITE_URL) : new URL('https://k-worksstudio.com'),
  icons: {
    icon: [
      { url: '/assets/images/logo_b.png', type: 'image/png' },
      {
        url: '/assets/images/logo_w.png',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: SITE.brand,
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
        />
        <JsonLd data={[organizationLd(), websiteLd()]} />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <RevealRoot />
        <Analytics />
      </body>
    </html>
  )
}
