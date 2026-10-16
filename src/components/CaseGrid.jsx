import { ArrowIcon } from './Icons.jsx'

export default function CaseGrid({ items, openLabel, onOpen }) {
  return (
    <div className="case-grid">
      {items.map((c) => (
        <button type="button" className="case-card" key={c.id} onClick={() => onOpen(c)}>
          <div className="case-card__top">
            <span className="case-card__who">
              {c.who}
              <small>{c.sub}</small>
            </span>
            <span className="case-card__scale">{c.scale}</span>
          </div>
          <span className="case-card__deliver">{c.deliver}</span>
          <span className="case-card__metrics">
            {c.metrics.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </span>
          <span className="case-card__more">
            {openLabel}
            <ArrowIcon />
          </span>
        </button>
      ))}
    </div>
  )
}
