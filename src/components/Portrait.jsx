export default function Portrait({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      {/* 米色圆角方块底 */}
      <rect x="0" y="0" width="200" height="200" rx="16" fill="#EDEAE0" />
      {/* 白色细曲线 */}
      <path d="M30 50 Q80 30 100 70 T170 60" stroke="#FAF9F5" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M25 90 Q70 70 95 110 T165 100" stroke="#FAF9F5" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M35 130 Q80 115 105 150 T175 140" stroke="#FAF9F5" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* 两个节点：白 + 陶土 */}
      <circle cx="100" cy="70" r="4" fill="#FAF9F5" />
      <circle cx="95" cy="110" r="4" fill="#D97757" />
    </svg>
  )
}
