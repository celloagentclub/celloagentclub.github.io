import RichText from './RichText.jsx'
import EnterpriseCases from './EnterpriseCases.jsx'
import { RingsPattern, WavesPattern } from './Patterns.jsx'
import {
  BookIcon,
  ChartIcon,
  ChatIcon,
  FlowIcon,
  LayersIcon,
  ShieldIcon,
  TargetIcon,
} from './Icons.jsx'

const CARD_ICONS = {
  target: TargetIcon,
  layers: LayersIcon,
  chart: ChartIcon,
  chat: ChatIcon,
  flow: FlowIcon,
  shield: ShieldIcon,
  book: BookIcon,
}

export default function Entry({ entry, t, onOpen }) {
  const labels = t.work
  const isAi = entry.id === 'ai'
  const isWork = entry.id === 'work'

  return (
    <article
      className={entry.featured ? 'entry entry--featured' : 'entry'}
      id={`entry-${entry.id}`}
    >
      <span className="entry__dot" aria-hidden="true" />
      {entry.featured ? <RingsPattern className="entry__pattern" /> : null}

      <div className="entry__head">
        <h3 className="entry__org">{entry.org}</h3>
        <span className="entry__when">{entry.when}</span>
      </div>
      {entry.role ? <p className="entry__role">{entry.role}</p> : null}
      {entry.summary ? (
        <p className="entry__summary">
          <RichText text={entry.summary} />
        </p>
      ) : null}

      {/* 能力要点 */}
      {entry.cards && entry.cards.length > 0 ? (
        <div className="entry__group">
          <p className="mini-label">{labels.cardsLabel}</p>
          <div className="entry__cards">
            {entry.cards.map((card, i) => {
              const Icon = CARD_ICONS[card.icon]
              return (
                <div className="entry-card" key={i}>
                  <div className="entry-card__top">
                    {Icon ? (
                      <span className="entry-card__icon">
                        <Icon />
                      </span>
                    ) : null}
                    <span className="entry-card__tag">{card.tag}</span>
                  </div>
                  <span className="entry-card__metric">{card.metric}</span>
                  <p className="entry-card__text">
                    <RichText text={card.text} />
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      ) : null}

      {/* 企业 AI 落地的 3 张标杆客户卡片（深度融合飞书 wiki） */}
      {isAi && entry.cases && entry.cases.length > 0 ? (
        <div className="entry__group">
          <p className="mini-label">
            {labels.casesLabel}
            <span className="mini-label__hint">{labels.casesHint}</span>
          </p>
          <EnterpriseCases items={entry.cases} onOpen={onOpen} t={t} />
        </div>
      ) : null}

      {/* 代表项目：针对电商操盘使用并排 3 张卡片，AI 项目使用并排 2 张卡片 */}
      {entry.projects && entry.projects.length > 0 ? (
        <div className="entry__group">
          <p className="mini-label">
            {entry.projectsLabel || labels.projectsLabel}
          </p>
          <div
            className="project-grid project-grid--3col"
          >
            {entry.projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-card__media" aria-hidden="true">
                  {project.thumb ? (
                    <img
                      className="project-card__img"
                      src={project.thumb}
                      alt={project.name}
                      loading="lazy"
                    />
                  ) : (
                    <WavesPattern />
                  )}
                </div>
                <div className="project-card__body">
                  <div className="project-card__head">
                    <h4 className="project-card__name">{project.name}</h4>
                    <p className="project-card__meta">
                      {project.role}
                    </p>
                  </div>
                  <ul className="project-card__points">
                    {project.points.map((point, i) => (
                      <li key={i}>
                        <RichText text={point} />
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          {isWork ? (
            <div className="projects-cta">
              <a href="/assets/jootle-brand-strategy.pdf" target="_blank" rel="noopener noreferrer" className="projects-cta__link">
                查看 Jootle 品牌策划全案 →
              </a>
            </div>
          ) : null}
        </div>
      ) : null}

      {entry.bullets && entry.bullets.length > 0 ? (
        <ul className="entry__list">
          {entry.bullets.map((b, i) => (
            <li key={i}>
              <RichText text={b} />
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}
