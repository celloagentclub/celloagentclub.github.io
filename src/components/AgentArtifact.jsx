import { useState } from 'react'
import { ClaudeSparkle, CodeIcon, TerminalIcon, CheckCircleIcon } from './Icons.jsx'
import RichText from './RichText.jsx'

export default function AgentArtifact({ t }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [showThinking, setShowThinking] = useState(true)

  const data = t.artifact
  if (!data || !data.items || data.items.length === 0) return null

  const cur = data.items[activeIdx] || data.items[0]

  return (
    <div className="artifact-showcase" id="artifact-showcase">
      <div className="artifact-showcase__header">
        <div className="artifact-showcase__lead-wrap">
          <span className="artifact-pill">
            <ClaudeSparkle />
            {data.badge}
          </span>
          <h3 className="artifact-showcase__title">{data.title}</h3>
          <p className="artifact-showcase__lede">{data.lede}</p>
        </div>

        <div className="artifact-tabs" role="tablist">
          {data.items.map((item, idx) => (
            <button
              key={item.id}
              role="tab"
              aria-selected={idx === activeIdx}
              className={`artifact-tab ${idx === activeIdx ? 'is-active' : ''}`}
              onClick={() => setActiveIdx(idx)}
            >
              <span className="artifact-tab__index">0{idx + 1}</span>
              <span className="artifact-tab__name">{item.tabTitle}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Claude 经典 Artifact 窗口 */}
      <div className="artifact-window">
        {/* 顶部标题栏 */}
        <div className="artifact-window__bar">
          <div className="artifact-window__traffic-lights">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
          </div>
          <div className="artifact-window__title">
            <CodeIcon />
            <span>{cur.filename}</span>
            <small className="artifact-window__tag">Python 3.11 · Claude 3.5 Sonnet Tool Use</small>
          </div>
          <div className="artifact-window__status">
            <span className="status-live" />
            <span>Active Agent</span>
          </div>
        </div>

        {/* 核心内容区 */}
        <div className="artifact-window__content">
          {/* Claude 标志性 Thinking Process 折叠块 */}
          <div className="artifact-thinking">
            <button
              type="button"
              className="artifact-thinking__toggle"
              onClick={() => setShowThinking((v) => !v)}
              aria-expanded={showThinking}
            >
              <span className="artifact-thinking__icon">
                <ClaudeSparkle />
              </span>
              <span className="artifact-thinking__title">
                {cur.thinkingTitle} <small>({cur.thinkingDuration})</small>
              </span>
              <span className="artifact-thinking__chevron">{showThinking ? '收起' : '展开'}</span>
            </button>
            {showThinking && (
              <div className="artifact-thinking__body">
                <p className="artifact-thinking__text">
                  <RichText text={cur.thinkingContent} />
                </p>
              </div>
            )}
          </div>

          {/* 左右分栏：System Policy / Rules 与 业务中控执行结果 */}
          <div className="artifact-grid">
            <div className="artifact-col artifact-col--rules">
              <div className="artifact-col__head">
                <TerminalIcon />
                <span>{data.systemPolicyLabel}</span>
              </div>
              <div className="artifact-code">
                <pre>
                  <code>{cur.code}</code>
                </pre>
              </div>
            </div>

            <div className="artifact-col artifact-col--output">
              <div className="artifact-col__head">
                <CheckCircleIcon />
                <span>{data.deliveryResultLabel}</span>
              </div>
              <div className="artifact-result">
                <div className="artifact-metric-row">
                  {cur.metrics.map((m) => (
                    <div className="artifact-stat-item" key={m.label}>
                      <span className="artifact-stat-item__value">{m.val}</span>
                      <span className="artifact-stat-item__label">{m.label}</span>
                    </div>
                  ))}
                </div>
                <div className="artifact-takeaways">
                  <p className="artifact-takeaways__title">{data.highlightsLabel}:</p>
                  <ul>
                    {cur.takeaways.map((item, i) => (
                      <li key={i}>
                        <RichText text={item} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
