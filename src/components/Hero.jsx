import SlicedWaves from "./SlicedWaves.jsx"

export default function Hero({ t, theme = "light" }) {
  const isDark = theme === "dark"

  const color1 = isDark ? "#e89a78" : "#dea48b"
  const color2 = isDark ? "#c86747" : "#bc5b3c"
  const color3 = isDark ? "#527561" : "#6f9a86"

  return (
    <header className="hero hero--ambient" id="top">
      <div className="hero__ambient-canvas-wrap">
        <SlicedWaves
          color1={color1}
          color2={color2}
          color3={color3}
          ribbons={4}
          spacing={18}
          barWidth={0.95}
          perspective={0.42}
          blur={1.4}
          glow={0.5}
          brightness={1.0}
          position={0.5}
          spread={0.24}
          ribbonHeight={0.34}
          amplitude={0.20}
          opacity={0.7}
          speed={0.85}
          intro={false}
          mouseInteraction={true}
          lightMode={!isDark}
          grain={0.04}
          className="hero__ambient-canvas"
        />
        <div className="hero__ambient-vignette" aria-hidden="true" />
      </div>

      {/* 左下角名字 */}
      <div className="hero__bottom-left">
        <h1 className="hero__title">{t.hero.title1}</h1>
        <p className="hero__subtitle">{t.hero.title2}</p>
      </div>
    </header>
  )
}
