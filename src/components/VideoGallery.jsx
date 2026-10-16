import { useState } from 'react'

export default function VideoGallery({ t }) {
  const groups = t.video.groups
  const [active, setActive] = useState(0)
  const current = groups[active]
  const wide = current.clips[0].ratio === '16 / 9'
  const layout = wide ? '--wide' : `--p${current.clips.length}`

  const goTo = (i) => {
    setActive(Math.max(0, Math.min(groups.length - 1, i)))
  }

  return (
    <div className="vcar">
      <button
        type="button"
        className="vcar__arrow vcar__arrow--prev"
        onClick={() => goTo(active - 1)}
        disabled={active === 0}
        aria-label="上一组"
      >
        ←
      </button>

      <div className="vcar__viewport">
        <div className="vcar__slide vcar__slide--active" key={active}>
          <div className="vcar__card">
            <div className="vcar__head">
              <span className="vcar__tag">{current.tag}</span>
              <h3 className="vcar__title">{current.title}</h3>
              <p className="vcar__desc">{current.desc}</p>
            </div>
            <div className={`video-group__clips video-group__clips${layout}`}>
              {current.clips.map((clip) => (
                <figure className="video-clip" key={clip.src}>
                  <div className="video-clip__frame" style={{ aspectRatio: clip.ratio }}>
                    <video
                      controls
                      preload="metadata"
                      playsInline
                      poster={clip.src.replace(/\.mp4$/, '-poster.jpg')}
                    >
                      <source src={clip.src} type="video/mp4" />
                    </video>
                  </div>
                  <figcaption className="video-clip__label">{clip.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="vcar__arrow vcar__arrow--next"
        onClick={() => goTo(active + 1)}
        disabled={active === groups.length - 1}
        aria-label="下一组"
      >
        →
      </button>

      <div className="vcar__dots">
        {groups.map((g, i) => (
          <button
            type="button"
            key={g.title}
            className={`vcar__dot${i === active ? ' vcar__dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`第 ${i + 1} 组`}
          />
        ))}
      </div>
    </div>
  )
}
