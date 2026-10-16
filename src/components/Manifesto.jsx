import { ClaudeAsterisk } from './Icons.jsx'
import RichText from './RichText.jsx'

export default function Manifesto({ t }) {
  if (!t.manifesto) return null
  return (
    <aside className="manifesto" aria-label="Philosophy">
      <div className="wrap">
        <div className="manifesto__card">
          <div className="manifesto__top">
            <span className="manifesto__badge">
              <ClaudeAsterisk />
              {t.manifesto.badge}
            </span>
            <span className="manifesto__tag">{t.manifesto.tag}</span>
          </div>
          <blockquote className="manifesto__quote">
            “<RichText text={t.manifesto.quote} />”
          </blockquote>
          <div className="manifesto__footer">
            <span className="manifesto__rule" aria-hidden="true" />
            <span className="manifesto__byline">{t.manifesto.byline}</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
