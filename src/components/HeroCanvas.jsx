import { useEffect, useState } from 'react'
import { ClaudeSparkle, ClaudeAsterisk } from './Icons.jsx'

export default function HeroCanvas({ t }) {
  const isEn = t.code === 'en'

  const stages = isEn
    ? [
        { task: 'Analyzing 10,000+ customer reviews for nib dry-out root causes...', activeNode: 0, out: 0 },
        { task: 'Auditing 24 storefronts: checking virtual SKU mapping & pricing guardrails...', activeNode: 1, out: 1 },
        { task: 'Calculating lead-time buffers: alloy (3-5d) vs rhinestone (5-7d)...', activeNode: 2, out: 2 },
        { task: 'Intercepting 49KG / 320CM parcel over-dimension before ocean dispatch...', activeNode: 0, out: 0 },
      ]
    : [
        { task: '解析 10,000+ 差评，提取双密封笔帽设计模具公差...', activeNode: 0, out: 0 },
        { task: '巡检 24 店铺矩阵：校验 1500+ 虚拟 SKU 映射与调价人机门禁...', activeNode: 1, out: 1 },
        { task: '推演动态材质工期缓冲：合金款 (3-5天) vs 水钻款 (5-7天)...', activeNode: 2, out: 2 },
        { task: '海运发货前质检巡检：强拦截 49KG / 320CM 超规包裹，罚款清零...', activeNode: 0, out: 0 },
      ]

  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((v) => (v + 1) % stages.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [stages.length])

  const cur = stages[step]

  const inputNodes = isEn
    ? [
        { title: 'Amazon VOC & Competitors', sub: '10k+ Customer Reviews / Batch' },
        { title: '24 Storefront Real-time Sync', sub: '1,400+ SKU Data Foundation' },
        { title: 'Ocean Freight ETD / ETA', sub: '45-60 Days In-transit Feeds' },
      ]
    : [
        { title: 'Amazon VOC 评论与竞品流', sub: '数万条买家反馈 / 单批次清洗' },
        { title: '24 店铺矩阵多维数据底座', sub: '1400+ SKU 归一化与虚拟映射' },
        { title: '海运船期与货柜在途追踪', sub: '45-60 天海运周期实时监控' },
      ]

  const outputNodes = isEn
    ? [
        { status: 'VERIFIED', title: 'Listing VOC Counter-Copy', desc: 'Direct feedback to airtight dual-seal design' },
        { status: 'LOCKED', title: 'Infringement Risk Gate', desc: 'Human-in-the-loop sign-off triggered' },
        { status: 'TRIGGERED', title: 'Dynamic Restock Order', desc: 'Stockout rate dropped by 80-90%' },
      ]
    : [
        { status: 'VERIFIED', title: 'VOC 痛点反转与产品开模', desc: '反哺双密封笔盖结构设计，退货降 42%' },
        { status: 'LOCKED', title: '侵权与价格连坐人机门禁', desc: '阻断非法写入，钉钉/飞书一键审批' },
        { status: 'TRIGGERED', title: '加权安全库存返单建议', desc: '区分生产周期的动态算法，断货率降 90%' },
      ]

  return (
    <div className="hero-canvas" aria-hidden="true">
      {/* 顶部指示状态 */}
      <div className="hero-canvas__bar">
        <div className="hero-canvas__lights">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
        </div>
        <div className="hero-canvas__engine">
          <ClaudeSparkle className="hero-canvas__sparkle" />
          <span>Claude 3.5 Sonnet · Business Agent Control Plane</span>
        </div>
        <div className="hero-canvas__live">
          <span className="pulse-dot" />
          <span>LIVE PIPELINE</span>
        </div>
      </div>

      {/* 动画主视觉流转网格 */}
      <div className="hero-canvas__grid">
        {/* 左侧：业务数据源输入 */}
        <div className="hero-canvas__col hero-canvas__col--inputs">
          <span className="hero-canvas__col-label">
            {isEn ? 'INPUT: CROSS-BORDER STREAMS' : '输入端：跨境业务与供应链数据流'}
          </span>
          <div className="hero-canvas__nodes">
            {inputNodes.map((node, i) => (
              <div
                key={node.title}
                className={`hero-node ${cur.activeNode === i ? 'is-active' : ''}`}
              >
                <div className="hero-node__indicator" />
                <div className="hero-node__text">
                  <span className="hero-node__title">{node.title}</span>
                  <span className="hero-node__sub">{node.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 中间：Claude Agent 思考与调度中枢 */}
        <div className="hero-canvas__center">
          <div className="hero-hub">
            <div className="hero-hub__rings">
              <div className="hero-hub__ring hero-hub__ring--1" />
              <div className="hero-hub__ring hero-hub__ring--2" />
            </div>
            <div className="hero-hub__core">
              <ClaudeAsterisk className="hero-hub__icon" />
              <span className="hero-hub__label">AGENT CORE</span>
            </div>
          </div>

          <div className="hero-thinking-box">
            <div className="hero-thinking-box__head">
              <span className="hero-thinking-box__dot" />
              <span>{isEn ? 'Thinking & Constraint Reasoning' : '思考推演与风控门禁校验中'}</span>
            </div>
            <p className="hero-thinking-box__task">{cur.task}</p>
          </div>
        </div>

        {/* 右侧：确定性执行输出 */}
        <div className="hero-canvas__col hero-canvas__col--outputs">
          <span className="hero-canvas__col-label">
            {isEn ? 'OUTPUT: DETERMINISTIC GUARDS' : '输出端：确定性业务闭环与门禁'}
          </span>
          <div className="hero-canvas__nodes">
            {outputNodes.map((node, i) => (
              <div
                key={node.title}
                className={`hero-out-node ${cur.out === i ? 'is-active' : ''}`}
              >
                <div className="hero-out-node__badge">{node.status}</div>
                <div className="hero-out-node__body">
                  <span className="hero-out-node__title">{node.title}</span>
                  <span className="hero-out-node__desc">{node.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
