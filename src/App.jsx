import { useCallback, useEffect, useState } from 'react'
import { LANGUAGES } from './content/index.js'
import Hero from './components/Hero.jsx'
import Portrait from './components/Portrait.jsx'
import SectionHead from './components/SectionHead.jsx'
import Entry from './components/Entry.jsx'
import CaseModal from './components/CaseModal.jsx'
import VideoGallery from './components/VideoGallery.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'
import RichText from './components/RichText.jsx'

const THEME_KEY = 'resume.theme'
const LANG_KEY = 'resume.lang'

const readTheme = () => {
  const saved = localStorage.getItem(THEME_KEY)
  if (saved === 'dark' || saved === 'light') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const readLang = () => {
  const saved = localStorage.getItem(LANG_KEY)
  return LANGUAGES[saved] ? saved : 'zh'
}

export default function App() {
  const [theme, setTheme] = useState(readTheme)
  const [lang, setLang] = useState(readLang)
  const [activeCase, setActiveCase] = useState(null)

  const t = LANGUAGES[lang]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(THEME_KEY, theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#141413' : '#F0EEE6')
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    localStorage.setItem(LANG_KEY, lang)
  }, [lang, t.htmlLang])

  // 弹窗打开时锁定页面滚动
  useEffect(() => {
    document.body.classList.toggle('is-locked', Boolean(activeCase))
    return () => document.body.classList.remove('is-locked')
  }, [activeCase])

  const closeCase = useCallback(() => setActiveCase(null), [])

  return (
    <>
      {/* 第一屏：全屏动画 + 左下角名字 */}
      <Hero t={t} theme={theme} onToggleTheme={() => setTheme((v) => (v === 'dark' ? 'light' : 'dark'))} onSwitchLang={() => setLang((v) => (v === 'zh' ? 'en' : 'zh'))} />

      {/* 基本信息 */}
      <section className="section section--about" id="about">
        <div className="wrap about-grid">
          <div className="about__left">
            <div className="about__portrait">
              <Portrait />
            </div>
            <ul className="about__meta">
              <li>
                <span className="about__num">01</span>
                <span className="about__label">Location</span>
                <span className="about__value">湖南 · 长沙</span>
              </li>
              <li>
                <span className="about__num">02</span>
                <span className="about__label">Contact</span>
                <span className="about__value">
                  <a href="tel:15682131751">15682131751</a>
                  <span className="about__sep">/</span>
                  <a href="mailto:864901440@qq.com">864901440@qq.com</a>
                </span>
              </li>
            </ul>
          </div>
          <div className="about__body">
            <p className="about__eyebrow">{t.about.eyebrow}</p>
            <h2 className="about__name">{t.about.name}</h2>
            <p className="about__role">{t.about.role}</p>
            <ul className="about__timeline">
              <li>
                <span className="about__period">2024.06 — 2026.02</span>
                <div className="about__titem">
                  <h3 className="about__trole">Amazon 文具产品经理 · 跨境电商</h3>
                  <p className="about__tdesc">负责书写类马克笔开发，开发 12 个 SKU 拿到年 $200 万 GMV；后负责绘画类马克笔项目，从调研开品到采购上架全链路。</p>
                </div>
              </li>
              <li>
                <span className="about__period">2026.02 — 至今 <em className="about__active">● ACTIVE</em></span>
                <div className="about__titem">
                  <h3 className="about__trole">企业 AI 交付工程师 (FDE)</h3>
                  <p className="about__tdesc">深入 9 家跨境公司进行 AI 改造，从随岗调研、需求访谈、出具方案，到系统落地和培训交付，整体客户人效提升 50%，部分流程实现无人化。</p>
                </div>
              </li>
            </ul>
            <div className="about__cta">
              <a href="/resume.pdf" download className="btn btn--dark">下载 PDF 简历</a>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* 第一段经历：跨境电商产品操盘（并排三张卡片） */}
        <section
          className="section"
          id="work"
        >
          <div className="wrap stack">
            <SectionHead label={t.work.label} title={t.work.title} />
            {t.work.lede ? (
              <p className="section-lede">
                <RichText text={t.work.lede} />
              </p>
            ) : null}
            <div className="timeline">
              {t.work.entries
                .filter((e) => e.id === 'work')
                .map((entry) => (
                  <Entry key={entry.id} entry={entry} t={t} onOpen={setActiveCase} />
                ))}
            </div>
          </div>
        </section>

        {/* 第二段经历：企业 AI 落地 */}
        <section
          className="section"
          id="ai"
        >
          <div className="wrap stack">
            <SectionHead label={t.ai.label} title={t.ai.title} />
            {t.ai.lede ? (
              <p className="section-lede">
                <RichText text={t.ai.lede} />
              </p>
            ) : null}
            <div className="timeline">
              {t.work.entries
                .filter((e) => e.id === 'ai')
                .map((entry) => (
                  <Entry key={entry.id} entry={entry} t={t} onOpen={setActiveCase} />
                ))}
            </div>
          </div>
        </section>

        {/* 技能图谱：Bento Grid 便当盒栅格 + AI 内容流水线产出 */}
        <section className="section" id="skills">
          <div className="wrap stack">
            <SectionHead label={t.skills.label} title={t.skills.title} />
            <Skills items={t.skills.items}>
              <div className="bento-card bento-card--cream bento-card--wide video-bento">
                <div className="bento-card__head">
                  <div className="bento-card__title-wrap">
                    <span className="bento-card__index">05</span>
                    <h4 className="bento-card__cat">AI 内容流水线产出</h4>
                  </div>
                </div>
                <p className="video-bento__lede">
                  <RichText text={t.video.lede} />
                </p>
                <VideoGallery t={t} />
              </div>
            </Skills>
          </div>
        </section>
      </main>

      <Footer t={t} />

      {activeCase ? <CaseModal item={activeCase} t={t} onClose={closeCase} /> : null}
    </>
  )
}
