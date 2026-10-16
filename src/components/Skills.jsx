import { FlowIcon, TargetIcon, ChartIcon, LayersIcon } from './Icons.jsx'

const SKILL_ICONS = {
  0: FlowIcon,
  1: TargetIcon,
  2: ChartIcon,
  3: LayersIcon,
}

const SKILL_THEMES = ['cactus', 'peach', 'heather', 'cream']

export default function Skills({ items, children }) {
  return (
    <div className="bento-skills">
      {items.map((s, idx) => {
        const Icon = SKILL_ICONS[idx] || FlowIcon
        const theme = SKILL_THEMES[idx % SKILL_THEMES.length]
        const pills = s.pills
          ? s.pills
          : s.text
              ? s.text.split('·').map((name) => ({ name: name.trim(), level: null }))
              : []

        return (
          <div
            className={`bento-card bento-card--${theme} ${
              idx === 0 || idx === 3 ? 'bento-card--wide' : ''
            }`}
            key={s.cat}
          >
            <div className="bento-card__head">
              <div className="bento-card__title-wrap">
                <span className="bento-card__index">
                  0{idx + 1}
                </span>
                <span className="bento-card__icon" aria-hidden="true">
                  <Icon />
                </span>
                <h4 className="bento-card__cat">{s.cat}</h4>
              </div>
            </div>

            <div className="bento-card__pills">
              {pills.map((p, pIdx) => (
                <span className="skill-pill" key={pIdx}>
                  <span className="skill-pill__name">{p.name}</span>
                  {p.level ? (
                    <span className="skill-pill__level" aria-hidden="true">
                      {[1, 2, 3].map((n) => (
                        <i key={n} className={n <= p.level ? 'on' : ''} />
                      ))}
                    </span>
                  ) : null}
                </span>
              ))}
            </div>

            <div className="bento-card__specular" aria-hidden="true" />
          </div>
        )
      })}
      {children}
    </div>
  )
}
