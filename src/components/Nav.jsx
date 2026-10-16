import { useEffect, useState } from 'react'
import { CloseIcon, DownloadIcon, MenuIcon, MoonIcon, SunIcon } from './Icons.jsx'

export default function Nav({ t, theme, onToggleTheme, onSwitchLang, onDownloadPdf, activeId }) {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 抽屉打开时，窗口尺寸变大要自动收起
  useEffect(() => {
    if (!open) return
    const mq = window.matchMedia('(min-width: 1001px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [open])

  const tools = (
    <>
      <button
        type="button"
        className="tool-btn tool-btn--wide"
        onClick={onDownloadPdf}
        aria-label={t.a11y.downloadPdf}
        title={t.a11y.downloadPdf}
      >
        <DownloadIcon />
        <span>{t.pdfLabel}</span>
      </button>
      <button type="button" className="tool-btn" onClick={onSwitchLang} aria-label={t.a11y.toggleLang}>
        {t.switchLabel}
      </button>
      <button type="button" className="tool-btn" onClick={onToggleTheme} aria-label={t.a11y.toggleTheme}>
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </button>
    </>
  )

  return (
    <header className={stuck ? 'nav is-stuck' : 'nav'}>
      <div className="wrap nav__inner">
        <nav className="nav__links" aria-label="Primary">
          {t.nav.map((item) => (
            <a
              key={item.id}
              className={activeId === item.id ? 'nav__link is-active' : 'nav__link'}
              href={`#${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__tools">{tools}</div>

        <button
          type="button"
          className="tool-btn nav__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div className={open ? 'nav__drawer is-open' : 'nav__drawer'}>
        <ul>
          {t.nav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav__drawer-tools">{tools}</div>
      </div>
    </header>
  )
}
