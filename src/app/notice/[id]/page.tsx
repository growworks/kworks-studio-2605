import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/seo/JsonLd'
import { noticeLd } from '@/lib/seo/jsonld'
import { getPost, getPosts } from '@/lib/api/posts'
import { mapNotice } from '@/lib/api/mappers'

export const dynamic = 'force-dynamic'

type Params = Promise<{ id: string }>

async function loadNotice(idParam: string) {
  const id = parseInt(idParam, 10)
  if (!Number.isFinite(id) || id <= 0) return null
  try {
    const post = await getPost(id)
    return mapNotice(post)
  } catch {
    return null
  }
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { id } = await params
  const notice = await loadNotice(id)
  if (!notice) return { title: 'Not Found' }
  return {
    title: notice.title,
    description: notice.body.slice(0, 140),
    alternates: { canonical: `/notice/${notice.id}` },
  }
}

export default async function NoticeDetailPage({ params }: { params: Params }) {
  const { id } = await params
  const notice = await loadNotice(id)
  if (!notice) notFound()

  const list = await getPosts({ category: '공지사항' })
  const idx = list.items.findIndex((p) => String(p.id) === notice.id)
  const prev = idx > 0 ? mapNotice(list.items[idx - 1]) : undefined
  const next =
    idx >= 0 && idx < list.items.length - 1
      ? mapNotice(list.items[idx + 1])
      : undefined

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
                {para.split('\n').map((line, j, arr) => {
                  const html = line.replace(
                    /\*\*(.+?)\*\*/g,
                    '<strong>$1</strong>',
                  )
                  return (
                    <span
                      key={j}
                      dangerouslySetInnerHTML={{
                        __html: `${html}${j < arr.length - 1 ? '<br/>' : ''}`,
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
