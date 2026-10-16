import { ClaudeSparkle, ChartIcon, FlowIcon } from './Icons.jsx'

export default function PerspectiveBand({ activeFilter, onSelectFilter, t }) {
  const isEn = t.code === 'en'

  const filters = [
    {
      id: 'all',
      label: isEn ? '✦ All Overview' : '✦ 综合全景',
      desc: isEn ? 'Category PM + Enterprise AI Control Planes' : '爆品操盘 + 企业 AI 中控全栈',
      target: '#work',
      icon: ClaudeSparkle,
    },
    {
      id: 'work',
      label: isEn ? 'Amazon Category PM' : 'Amazon 爆品产品操盘',
      desc: isEn ? '$4M Category GMV · VOC Board · 20 SKUs' : '$400万品类操盘 · VOC 看板 · 20款文创爆品',
      target: '#work',
      icon: ChartIcon,
    },
    {
      id: 'ai',
      label: isEn ? 'Enterprise AI FDE' : '企业 AI 落地与 Agent 中控',
      desc: isEn ? '8 Cross-Border Firms · Deterministic Control Planes' : '8家跨境企业 · 21合一业务中控 · 确定性风控',
      target: '#ai',
      icon: FlowIcon,
    },
  ]

  const handleClick = (item) => {
    onSelectFilter?.(item.id)
    const el = document.querySelector(item.target)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="perspective-band" aria-label={isEn ? 'Filter by perspective' : '招聘与合作视角导览'}>
      <div className="wrap perspective-band__inner">
        <div className="perspective-band__header">
          <span className="perspective-band__eyebrow">
            <span className="perspective-band__dot" />
            <span>{isEn ? 'EXPLORE BY PERSPECTIVE' : '招聘与合作视角导览'}</span>
          </span>
          <p className="perspective-band__hint">
            {isEn
              ? 'Select your focus area to navigate directly to the verified deliverables:'
              : '切换关注重点，一键穿透至核心实战成果：'}
          </p>
        </div>

        <div className="perspective-band__pills" role="tablist">
          {filters.map((item) => {
            const Icon = item.icon
            const isActive = activeFilter === item.id
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`perspective-pill ${isActive ? 'is-active' : ''}`}
                onClick={() => handleClick(item)}
              >
                <div className="perspective-pill__top">
                  <Icon className="perspective-pill__icon" />
                  <span className="perspective-pill__label">{item.label}</span>
                </div>
                <span className="perspective-pill__desc">{item.desc}</span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
