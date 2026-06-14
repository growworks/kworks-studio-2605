import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { NOTICES, findNotice, getAdjacentNotices } from '@/data/notices'
import { JsonLd } from '@/components/seo/JsonLd'
import { noticeLd } from '@/lib/seo/jsonld'

type Params = Promise<{ id: string }>

export function generateStaticParams() {
  return NOTICES.map((n) => ({ id: n.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { id } = await params
  const notice = findNotice(id)
  if (!notice) return { title: 'Not Found' }
  return {
    title: notice.title,
    description: notice.body.slice(0, 140),
    alternates: { canonical: `/notice/${notice.id}` },
  }
}

export default async function NoticeDetailPage({ params }: { params: Params }) {
  const { id } = await params
  const notice = findNotice(id)
  if (!notice) notFound()

  const { prev, next } = getAdjacentNotices(id)

  return (
    <section className="kw-notice-article-wrap section">
      <JsonLd data={noticeLd(notice)} />
      <div className="container">
        <article className="kw-notice-article fade-up">
          <header className="kw-notice-article__head">
            <span className="kw-notice-article__cat">{notice.category}</span>
            <h1 className="kw-notice-article__title">{notice.title}</h1>
            <div className="kw-notice-article__meta">
              <span>{notice.date}</span>
              <span>K Works Studio</span>
            </div>
          </header>

          <div className="kw-notice-article__body">
            {notice.body.split('\n\n').map((para, i) => (
              <p key={i}>
                {para.split('\n').map((line, j) => {
                  const html = line.replace(
                    /\*\*(.+?)\*\*/g,
                    '<strong>$1</strong>',
                  )
                  return (
                    <span
                      key={j}
                      dangerouslySetInnerHTML={{
                        __html: `${html}${
                          j < para.split('\n').length - 1 ? '<br/>' : ''
                        }`,
                      }}
                    />
                  )
                })}
              </p>
            ))}
          </div>

          <nav className="kw-notice-article__nav kw-notice-pager">
            {prev ? (
              <Link href={`/notice/${prev.id}`}>← Prev</Link>
            ) : (
              <span>← Prev</span>
            )}
            <Link href="/notice" style={{ marginLeft: 'auto' }}>
              List
            </Link>
            {next ? (
              <Link
                href={`/notice/${next.id}`}
                className="kw-notice-pager__next"
              >
                Next →
              </Link>
            ) : (
              <span className="kw-notice-pager__next">Next →</span>
            )}
          </nav>
        </article>
      </div>
    </section>
  )
}
