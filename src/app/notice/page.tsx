import type { Metadata } from 'next'
import Link from 'next/link'
import { NOTICES } from '@/data/notices'

export const metadata: Metadata = {
  title: 'Notice',
  description: 'K Works Studio 공식 공지와 보도자료.',
  alternates: { canonical: '/notice' },
}

const PAGE_SIZE = 3

type SearchParams = Promise<{ page?: string }>

export default async function NoticePage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const { page } = await searchParams
  const totalPages = Math.max(1, Math.ceil(NOTICES.length / PAGE_SIZE))
  const current = Math.min(
    totalPages,
    Math.max(1, parseInt(page ?? '1', 10) || 1),
  )
  const start = (current - 1) * PAGE_SIZE
  const items = NOTICES.slice(start, start + PAGE_SIZE)

  return (
    <>
      <section className="kw-page-hero">
        <div className="kw-hero__media">
          <img src="/assets/images/res/scene-04.jpg" alt="K Works 촬영 현장" />
        </div>
        <div className="kw-page-hero__inner">
          <span className="eyebrow">Notice & News</span>
          <h1>Notice</h1>
          <p>공식 공지와 보도자료를 같은 영역에 정리합니다.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kw-notice-list fade-up">
            {items.map((n) => (
              <Link
                key={n.id}
                href={`/notice/${n.id}`}
                className="kw-notice-row"
              >
                <span className="kw-notice-row__cat">{n.category}</span>
                <span className="kw-notice-row__date">{n.date}</span>
                <span className="kw-notice-row__title">{n.title}</span>
                <span className="kw-notice-row__arrow">VIEW →</span>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="kw-notice-pager">
              {current > 1 ? (
                <Link href={`/notice?page=${current - 1}`}>← Prev</Link>
              ) : (
                <span>← Prev</span>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) =>
                p === current ? (
                  <span key={p} className="is-current">
                    {p}
                  </span>
                ) : (
                  <Link key={p} href={`/notice?page=${p}`}>
                    {p}
                  </Link>
                ),
              )}
              {current < totalPages ? (
                <Link
                  href={`/notice?page=${current + 1}`}
                  className="kw-notice-pager__next"
                >
                  Next →
                </Link>
              ) : (
                <span className="kw-notice-pager__next">Next →</span>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
