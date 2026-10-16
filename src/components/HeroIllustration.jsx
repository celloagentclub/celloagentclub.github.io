export default function HeroIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 320 260"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* 陶土色块：不规则矩形，略带手绘抖动 */}
      <path
        d="M40 70 Q38 45 65 43 L245 35 Q275 33 277 62 L282 200 Q283 228 255 230 L72 235 Q42 236 41 207 Z"
        fill="#EBC9B7"
      />
      {/* 手绘：一条曲线穿过两个节点，代表数据流 */}
      <path
        d="M70 160 Q120 100 160 140 T250 120"
        stroke="#141413"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* 节点 1 */}
      <circle cx="70" cy="160" r="7" fill="#141413" />
      {/* 节点 2：中心节点（Agent Core） */}
      <circle cx="160" cy="140" r="14" fill="none" stroke="#141413" strokeWidth="3" />
      <circle cx="160" cy="140" r="5" fill="#141413" />
      {/* 节点 3 */}
      <circle cx="250" cy="120" r="7" fill="#141413" />
      {/* 手绘装饰：右上角小叉 */}
      <path
        d="M250 60 L265 75 M265 60 L250 75"
        stroke="#141413"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* 左下角小下划线 */}
      <path
        d="M90 200 L180 202"
        stroke="#141413"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  )
}
