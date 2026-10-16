export default function Stats({ items }) {
  return (
    <div className="stats">
      <div className="wrap stats__grid">
        {items.map((s) => (
          <div className="stat" key={s.label}>
            <p className="stat__num">
              {s.num}
              <small>{s.unit}</small>
            </p>
            <p className="stat__label">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
