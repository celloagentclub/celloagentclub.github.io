const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  'aria-hidden': true,
}

export function SunIcon() {
  return (
    <svg {...base}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M19.1 4.9l-1.5 1.5M6.4 17.6l-1.5 1.5" />
    </svg>
  )
}

export function MoonIcon() {
  return (
    <svg {...base}>
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
    </svg>
  )
}

export function CloseIcon() {
  return (
    <svg {...base}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function ArrowIcon() {
  return (
    <svg {...base}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function MenuIcon() {
  return (
    <svg {...base}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  )
}

export function DownloadIcon() {
  return (
    <svg {...base}>
      <path d="M12 3.5v11M7.5 10.5 12 15l4.5-4.5M4.5 19.5h15" />
    </svg>
  )
}

export function TargetIcon() {
  return (
    <svg {...base}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function LayersIcon() {
  return (
    <svg {...base}>
      <path d="M12 3 3 7.4l9 4.4 9-4.4L12 3Z" />
      <path d="M3 12.4 12 16.8l9-4.4" />
      <path d="M3 16.9 12 21.3l9-4.4" />
    </svg>
  )
}

export function ChartIcon() {
  return (
    <svg {...base}>
      <path d="M4 4v16h16" />
      <path d="M8.5 17v-5M13 17V8M17.5 17v-3" />
    </svg>
  )
}

export function ChatIcon() {
  return (
    <svg {...base}>
      <path d="M21 12c0 4.2-4 7.6-9 7.6-1 0-2-.15-2.9-.43L4 21.5l1.4-3.7C4 16.2 3 14.2 3 12c0-4.2 4-7.6 9-7.6s9 3.4 9 7.6Z" />
    </svg>
  )
}

export function FlowIcon() {
  return (
    <svg {...base}>
      <rect x="3" y="3.5" width="7" height="6" rx="1.6" />
      <rect x="14" y="14.5" width="7" height="6" rx="1.6" />
      <path d="M10 6.5h4a3 3 0 0 1 3 3v5" />
    </svg>
  )
}

export function ShieldIcon() {
  return (
    <svg {...base}>
      <path d="M12 3.5 19 6.2v5.3c0 4.3-2.9 7.6-7 9-4.1-1.4-7-4.7-7-9V6.2L12 3.5Z" />
      <path d="M9.2 12.1l2 2 3.6-3.8" />
    </svg>
  )
}

export function BookIcon() {
  return (
    <svg {...base}>
      <path d="M4 4.5h5.5A2.5 2.5 0 0 1 12 7v13a2 2 0 0 0-2-2H4V4.5Z" />
      <path d="M20 4.5h-5.5A2.5 2.5 0 0 0 12 7v13a2 2 0 0 1 2-2h6V4.5Z" />
    </svg>
  )
}

/* Claude 标志性珊瑚多芒星 (Sparkle) */
export function ClaudeSparkle({ className = '' }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="13"
      height="13"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      style={{ display: 'inline-block', verticalAlign: '-0.1em' }}
    >
      <path d="M8 0C8.3 3.8 8.8 6.5 10 7.8C11.3 9 13.9 9.5 16 9.8C13.9 10.1 11.3 10.6 10 11.8C8.8 13.1 8.3 15.8 8 16C7.7 15.8 7.2 13.1 6 11.8C4.7 10.6 2.1 10.1 0 9.8C2.1 9.5 4.7 9 6 7.8C7.2 6.5 7.7 3.8 8 0Z" />
    </svg>
  )
}

/* Claude 标志性八角印记 (Asterisk) */
export function ClaudeAsterisk({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      style={{ display: 'inline-block', verticalAlign: '-0.12em' }}
    >
      <path d="M11 2h2v7.17l5.07-5.07 1.41 1.41L14.41 10.6H22v2h-7.59l5.07 5.07-1.41 1.41L13 14.01V22h-2v-7.99l-5.07 5.07-1.41-1.41L9.59 12.6H2v-2h7.59L4.52 5.51l1.41-1.41L11 9.17V2z" />
    </svg>
  )
}

export function TerminalIcon() {
  return (
    <svg {...base}>
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  )
}

export function CodeIcon() {
  return (
    <svg {...base}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

export function CheckCircleIcon() {
  return (
    <svg {...base}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}


export function CopyIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
