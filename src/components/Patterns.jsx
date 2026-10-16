/* 纯 SVG 装饰图案（零字节成本，不参与妙搭打包体积）
   价格模型：Claude 官网那句「淡色底 + 同色系大尺度曲线纹」 */

export function RingsPattern({ className = 'pattern' }) {
  return (
    <svg className={className} style={{ overflow: "hidden" }} viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="1.2" vectorEffect="non-scaling-stroke">
        <circle cx="748" cy="148" r="112" />
        <circle cx="748" cy="148" r="196" />
        <circle cx="748" cy="148" r="284" />
        <circle cx="748" cy="148" r="376" />
        <circle cx="748" cy="148" r="472" />
        <circle cx="748" cy="148" r="572" />
        <circle cx="748" cy="148" r="676" />
      </g>
    </svg>
  )
}

export function WavesPattern({ className = 'pattern' }) {
  return (
    <svg className={className} style={{ overflow: "hidden" }} viewBox="0 0 900 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="1.2" vectorEffect="non-scaling-stroke">
        <path d="M-80 96H190C392 96 452 262 648 262H980" />
        <path d="M-80 196H214C416 196 476 362 672 362H980" />
        <path d="M-80 296H238C440 296 500 462 696 462H980" />
        <path d="M-80 396H262C464 396 524 562 720 562H980" />
      </g>
    </svg>
  )
}
