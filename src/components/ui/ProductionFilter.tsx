'use client'

import { useState, type ReactNode } from 'react'
import type { Production } from '@/data/productions'

type Filter = 'all' | 'film' | 'drama' | 'short' | 'ongoing'

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'film', label: '영화' },
  { key: 'drama', label: '드라마' },
  { key: 'short', label: '단편·콘텐츠' },
]

export function ProductionFilter({
  productions,
  renderCard,
}: {
  productions: Production[]
  renderCard: (p: Production) => ReactNode
}) {
  const [filter, setFilter] = useState<Filter>('all')

  return (
    <>
      <div className="kw-prod-filter fade-up">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            className={filter === f.key ? 'is-active' : ''}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="kw-prod-grid fade-up">
        {productions.map((p) => (
          <div
            key={p.slug}
            className={`kw-prod-card-wrap${filter !== 'all' && p.category !== filter ? ' is-hidden' : ''}`}
            style={
              filter !== 'all' && p.category !== filter
                ? { display: 'none' }
                : undefined
            }
          >
            {renderCard(p)}
          </div>
        ))}
      </div>
    </>
  )
}
