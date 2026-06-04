type Still = { src: string; alt: string }

function isCharacter(s: Still) {
  return /\/character-\d/.test(s.src)
}

export function ProductionGallery({ stills }: { stills: Still[] }) {
  if (!stills || stills.length === 0) return null

  const characters = stills.filter(isCharacter)
  const scenes = stills.filter((s) => !isCharacter(s))

  return (
    <>
      {scenes.length > 0 && <SceneStills stills={scenes} />}
      {characters.length > 0 && <CharacterPosters stills={characters} />}
    </>
  )
}

function SceneStills({ stills }: { stills: Still[] }) {
  const rows: { big: Still; col: Still[]; reverse: boolean }[] = []
  let i = 0
  let flip = false
  while (i < stills.length) {
    const big = stills[i]
    const col = stills.slice(i + 1, i + 3)
    rows.push({ big, col, reverse: flip })
    i += 1 + col.length
    flip = !flip
  }

  return (
    <>
      {rows.map((row, idx) => {
        const variant =
          row.col.length === 0
            ? 'kw-prod-stills--single'
            : row.reverse
              ? 'kw-prod-stills--reverse'
              : 'kw-prod-stills--magazine'

        return (
          <div key={idx} className={`kw-prod-stills ${variant} fade-up`}>
            {row.col.length === 0 ? (
              <div className="kw-prod-stills__big">
                <img src={row.big.src} alt={row.big.alt} loading="lazy" />
              </div>
            ) : row.reverse ? (
              <>
                <div className="kw-prod-stills__col">
                  {row.col.map((c, j) => (
                    <div key={j}>
                      <img src={c.src} alt={c.alt} loading="lazy" />
                    </div>
                  ))}
                </div>
                <div className="kw-prod-stills__big">
                  <img src={row.big.src} alt={row.big.alt} loading="lazy" />
                </div>
              </>
            ) : (
              <>
                <div className="kw-prod-stills__big">
                  <img src={row.big.src} alt={row.big.alt} loading="lazy" />
                </div>
                <div className="kw-prod-stills__col">
                  {row.col.map((c, j) => (
                    <div key={j}>
                      <img src={c.src} alt={c.alt} loading="lazy" />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )
      })}
    </>
  )
}

function CharacterPosters({ stills }: { stills: Still[] }) {
  return (
    <div className="kw-prod-characters fade-up">
      <div className="kw-prod-characters__head">
        <span className="eyebrow eyebrow--gold">Character Posters</span>
      </div>
      <div
        className="kw-prod-characters__grid"
        data-count={Math.min(stills.length, 4)}
      >
        {stills.map((s, i) => (
          <div key={i}>
            <img src={s.src} alt={s.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}
