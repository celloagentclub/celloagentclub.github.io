import { useEffect, useRef } from 'react'
import RichText from './RichText.jsx'
import { CloseIcon } from './Icons.jsx'

function Blocks({ blocks }) {
  return blocks.map((b, i) => {
    if (b.t === 'h') {
      const Tag = b.level >= 4 ? 'h5' : 'h4'
      return (
        <Tag className={b.level >= 4 ? 'doc__h doc__h--4' : 'doc__h doc__h--3'} key={i}>
          <RichText text={b.text} />
        </Tag>
      )
    }
    if (b.t === 'p') {
      return (
        <p className="doc__p" key={i}>
          <RichText text={b.text} />
        </p>
      )
    }
    if (b.t === 'list') {
      return (
        <ul className="doc__list" key={i}>
          {b.items.map((item, j) => (
            <li key={j}>
              <RichText text={item.text} />
              {item.subs && item.subs.length > 0 ? (
                <ul className="doc__subs">
                  {item.subs.map((s, k) => (
                    <li key={k}>
                      <RichText text={s} />
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      )
    }
    if (b.t === 'table') {
      return (
        <div className="doc__table-wrap" key={i}>
          <table className="doc__table">
            {b.head && b.head.length > 0 ? (
              <thead>
                <tr>
                  {b.head.map((h, j) => (
                    <th key={j}>{h}</th>
                  ))}
                </tr>
              </thead>
            ) : null}
            <tbody>
              {b.rows.map((row, j) => (
                <tr key={j}>
                  {row.map((cell, k) => (
                    <td key={k}>
                      <RichText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
    if (b.t === 'quote') {
      return (
        <blockquote className="doc__quote" key={i}>
          <RichText text={b.text} />
        </blockquote>
      )
    }
    return null
  })
}

export default function CaseModal({ item, t, onClose }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    closeRef.current?.focus()
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab' || !panelRef.current) return
      const nodes = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (nodes.length === 0) return
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div
      className="modal"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="modal__panel" role="dialog" aria-modal="true" aria-labelledby="case-modal-title" ref={panelRef}>
        <button type="button" className="modal__close" onClick={onClose} aria-label={t.a11y.closeModal} ref={closeRef}>
          <CloseIcon />
        </button>

        <p className="modal__kicker">{t.modal.kicker}</p>
        <h3 className="modal__title" id="case-modal-title">
          {item.who}
        </h3>
        <p className="modal__sub">
          {item.sub} · {item.scale}
        </p>

        <div className="modal__metrics">
          <span className="modal__metrics-label">{t.modal.metricsLabel}</span>
          {item.metrics.map((m) => (
            <span className="metric-pill" key={m}>
              {m}
            </span>
          ))}
        </div>

        <div className="modal__doc">
          <Blocks blocks={item.blocks} />
        </div>
      </div>
    </div>
  )
}
