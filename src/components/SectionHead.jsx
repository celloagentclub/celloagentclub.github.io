import { ClaudeSparkle } from './Icons.jsx'

export default function SectionHead({ label, title }) {
  return (
    <div className="section-head">
      <p className="section-head__label">
        <ClaudeSparkle className="section-head__sparkle" />
        {label}
      </p>
      <h2 className="section-head__title">{title}</h2>
      <div className="section-head__rule" aria-hidden="true" />
    </div>
  )
}
