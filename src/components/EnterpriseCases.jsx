import { useState } from 'react'
import { ClaudeSparkle, ArrowIcon, CopyIcon, CheckIcon } from './Icons.jsx'
import RichText from './RichText.jsx'

// Case 主题色映射 (对标 Claude 官方水彩体系: Cactus / Heather / Peach)
const THEME_MAP = {
  furniture: {
    accent: 'var(--swatch-cactus-deep)',
    tint: 'var(--swatch-cactus-tint)',
    border: 'var(--swatch-cactus-border)',
    file: 'furniture-control-tower.yaml',
  },
  autoparts: {
    accent: 'var(--swatch-heather-deep)',
    tint: 'var(--swatch-heather-tint)',
    border: 'var(--swatch-heather-border)',
    file: 'autoparts-matrix-guard.json',
  },
  shein: {
    accent: 'var(--clay-deep)',
    tint: 'var(--clay-tint)',
    border: 'var(--clay-ring)',
    file: 'shein-fast-replenish.ts',
  },
}

function CaseCard({ item, index, isEn, onOpen }) {
  const [tab, setTab] = useState('deliver') // 默认呈现交付成果，可一键切换看业务输入痛点
  const [copied, setCopied] = useState(false)
  const theme = THEME_MAP[item.id] || THEME_MAP.furniture

  const handleCopy = (e) => {
    e.stopPropagation()
    const text = `### ${item.who} (${item.scale})\n- 业务痛点: ${item.pain}\n- 交付中控: ${item.deliver}\n- 核心指标: ${item.metrics.join(' | ')}\n- 落地场景:\n  ${item.keyScenarios.map((s, i) => `${i + 1}. ${s}`).join('\n  ')}`
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    }
  }

  return (
    <article className={`ent-card ent-card--${item.id}`} key={item.id}>
      {/* 左栏：客户身份 + 核心指标 + 详情入口 */}
      <div className="ent-card__aside">
        <div className="ent-card__header">
          <span className="ent-card__case-id" style={{ color: theme.accent, borderColor: theme.border, background: theme.tint }}>
            <ClaudeSparkle />
            CASE 0{index + 1}
          </span>
          <span className="ent-card__badge">{item.scale}</span>
        </div>

        <h3 className="ent-card__title">{item.who}</h3>
        <p className="ent-card__sub">{item.sub}</p>

        <div className="ent-card__metrics">
          {item.metrics.map((m) => (
            <div className="ent-card__metric-pill" key={m} style={{ borderColor: theme.border }}>
              <span className="ent-card__metric-dot" style={{ background: theme.accent }} />
              <span>{m}</span>
            </div>
          ))}
        </div>

        <div className="ent-card__footer">
          <button
            type="button"
            className="ent-card__btn"
            onClick={() => onOpen(item)}
          >
            <span>{isEn ? 'View Architecture & SOP Spec' : '查看完整技术架构与 SOP'}</span>
            <ArrowIcon />
          </button>
        </div>
      </div>

      {/* 右栏：Claude 官方风格 Artifact 业务工作台窗口 (artwin) */}
      <div className="ent-card__main">
        <div className="artwin">
          {/* Artifact 顶栏控制条 */}
          <div className="artwin__bar">
            <div className="artwin__dots" aria-hidden="true">
              <span className="artwin__dot artwin__dot--red" />
              <span className="artwin__dot artwin__dot--yellow" />
              <span className="artwin__dot artwin__dot--green" />
            </div>

            <span className="artwin__filename">{theme.file}</span>

            {/* 核心双态切换：1. 原始输入痛点 ⇋ 2. 交付 Agent 中控 */}
            <div className="artwin__tab-track" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={tab === 'pain'}
                className={`artwin__tab ${tab === 'pain' ? 'is-active' : ''}`}
                onClick={() => setTab('pain')}
              >
                <span className="artwin__tab-num">1.</span>
                <span>{isEn ? 'The Input & Chaos' : '业务痛点与输入'}</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={tab === 'deliver'}
                className={`artwin__tab ${tab === 'deliver' ? 'is-active' : ''}`}
                onClick={() => setTab('deliver')}
              >
                <span className="artwin__tab-num">2.</span>
                <span>{isEn ? 'The Delivered Control Plane' : '交付的 Agent 中控'}</span>
              </button>
            </div>

            {/* 一键复制规范按钮 */}
            <button
              type="button"
              className="artwin__copy-btn"
              onClick={handleCopy}
              title={isEn ? 'Copy Case Markdown Spec' : '复制案例业务规范'}
              aria-label={isEn ? 'Copy Case Markdown Spec' : '复制案例业务规范'}
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
              <span>{copied ? (isEn ? 'Copied' : '已复制') : (isEn ? 'Copy Spec' : '复制规范')}</span>
            </button>
          </div>

          {/* Artifact 窗口主体内容 */}
          <div className="artwin__body">
            {tab === 'pain' ? (
              <div className="artwin__pane artwin__pane--pain" role="tabpanel">
                <div className="artwin__pane-header">
                  <span className="artwin__pill-tag artwin__pill-tag--pain">
                    {isEn ? 'PROMPT INPUT & BOTTLENECKS' : '输入痛点与人工断点'}
                  </span>
                  <span className="artwin__pane-meta">{isEn ? 'Fragmented supply chain data' : '治理前：分散在数十个 Excel 表与人工估算'}</span>
                </div>
                <div className="artwin__narrative">
                  <RichText text={item.pain} />
                </div>
                <div className="artwin__callout">
                  <span className="artwin__callout-icon">⚠</span>
                  <p className="artwin__callout-text">
                    {item.id === 'furniture' && '最大风险：45-60天海运甩柜导致海外仓爆款断货；49KG / 320CM 超重超规频遭平台巨额罚款。'}
                    {item.id === 'autoparts' && '最大风险：24店铺多运营各自为政自杀式降价；侵权全网连坐封店；1500+虚拟SKU与库存映射对不上。'}
                    {item.id === 'shein' && '最大风险：合金款与水钻款生产周期相差1倍导致备料错漏；月均2000+场活动手工提报繁琐极易丢单。'}
                  </p>
                </div>
              </div>
            ) : (
              <div className="artwin__pane artwin__pane--deliver" role="tabpanel">
                <div className="artwin__pane-header">
                  <span className="artwin__pill-tag artwin__pill-tag--deliver" style={{ color: theme.accent, borderColor: theme.border, background: theme.tint }}>
                    {isEn ? 'DELIVERED AGENT CONTROL PLANE' : '交付确定性规则引擎与中控'}
                  </span>
                  <span className="artwin__pane-meta">{isEn ? 'Deterministic execution & safeguards' : '治理后：系统级硬卡口 + 门禁审批 + 自动战报'}</span>
                </div>
                <div className="artwin__narrative artwin__narrative--bold">
                  <RichText text={item.deliver} />
                </div>
              </div>
            )}

            {/* 标杆落地场景拆解（两种视图均保留作为坚实事实证明） */}
            <div className="artwin__scenarios">
              <div className="artwin__scenarios-head">
                <span className="artwin__scenarios-label">
                  {isEn ? 'KEY SCENARIOS DELIVERED' : '标杆落地场景拆解'}
                </span>
                <span className="artwin__scenarios-count">4 Scenarios Verified</span>
              </div>
              <ul className="artwin__scenarios-list">
                {item.keyScenarios.map((sc, i) => (
                  <li key={i} className="artwin__scenario-item">
                    <span className="artwin__scenario-idx" style={{ color: theme.accent }}>0{i + 1}</span>
                    <span className="artwin__scenario-text">
                      <RichText text={sc} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function EnterpriseCases({ items, onOpen, t }) {
  const isEn = t.code === 'en'

  return (
    <div className="ent-cases">
      <div className="ent-cases__grid">
        {items.map((item, index) => (
          <CaseCard
            key={item.id}
            item={item}
            index={index}
            isEn={isEn}
            onOpen={onOpen}
          />
        ))}
      </div>
    </div>
  )
}
