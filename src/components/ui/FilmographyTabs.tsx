'use client'

import { useEffect, useState } from 'react'
import type { Artist, FilmoCategory } from '@/data/artists'

const STEP = 10

const ALL_TABS: { key: FilmoCategory; label: string }[] = [
  { key: 'film', label: 'Film' },
  { key: 'drama', label: 'Drama' },
  { key: 'play', label: 'Play' },
  { key: 'musical', label: 'Musical' },
  { key: 'ent', label: 'Entertainment' },
  { key: 'album', label: 'Album' },
  { key: 'cf', label: 'CF' },
  { key: 'mv', label: 'MV' },
]

export function FilmographyTabs({ artist }: { artist: Artist }) {
  const TABS = ALL_TABS.filter((t) => artist.filmography[t.key]?.length > 0)
  const firstKey = TABS[0]?.key ?? 'film'
  const [active, setActive] = useState<FilmoCategory>(firstKey)
  const [visible, setVisible] = useState(STEP)

  useEffect(() => {
    setVisible(STEP)
  }, [active])

  return (
    <>
      <div className="kw-filmo-tabs fade-up">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            className={active === t.key ? 'is-active' : ''}
            onClick={() => setActive(t.key)}
          >
            {t.label}
            <em>{artist.filmography[t.key].length}</em>
          </button>
        ))}
      </div>
      {TABS.map((t) => {
        const rows = artist.filmography[t.key]
        const isActive = active === t.key
        const shown = isActive ? rows.slice(0, visible) : rows.slice(0, STEP)
        const hasMore = isActive && visible < rows.length
        const remaining = rows.length - visible

        return (
          <div
            key={t.key}
            className={`kw-filmo-list${isActive ? ' is-active' : ''}`}
          >
            {shown.map((row, i) => (
              <div className="kw-filmo-row" key={`${t.key}-${i}`}>
                <div className="kw-filmo-row__year">{row.year || '-'}</div>
                <div className="kw-filmo-row__title">
                  {row.title}
                  {row.titleEn && <small>{row.titleEn}</small>}
                </div>
                <div className="kw-filmo-row__role">{row.role}</div>
                <div className="kw-filmo-row__broadcaster">{row.outlet}</div>
              </div>
            ))}

            {isActive && rows.length > STEP && (
              <div className="kw-filmo-more">
                {hasMore ? (
                  <button
                    type="button"
                    className="kw-filmo-more__btn"
                    onClick={() => setVisible((v) => v + STEP)}
                  >
                    <span className="kw-filmo-more__label">
                      더 보기 +{Math.min(STEP, remaining)}
                    </span>
                    <span className="kw-filmo-more__count">
                      Showing {Math.min(visible, rows.length)} of {rows.length}
                    </span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="kw-filmo-more__btn"
                    onClick={() => setVisible(STEP)}
                  >
                    <span className="kw-filmo-more__label">접기</span>
                    <span className="kw-filmo-more__count">
                      All {rows.length} shown
                    </span>
                  </button>
                )}
              </div>
            )}
          </div>
        )
      })}
    </>
  )
}
