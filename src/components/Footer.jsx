import { Fragment } from 'react'

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span>{t.footer.copy}</span>
        {t.footer.links?.length ? (
          <span className="footer__links">
            {t.footer.links.map((l, i) => (
              <Fragment key={l.text}>
                {i > 0 && <i aria-hidden="true" />}
                <a href={l.href} target="_blank" rel="noreferrer">
                  {l.text}
                </a>
              </Fragment>
            ))}
          </span>
        ) : null}
      </div>
    </footer>
  )
}
