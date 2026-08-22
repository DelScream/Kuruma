import "./SectionTitle.css"

export default function SectionTitle({ kicker, title, sub, align = "left" }) {
  return (
    <header className={`section-title section-title--${align}`}>
      {kicker && <p className="micro">{kicker}</p>}
      <h2>{title}</h2>
      {sub && <p className="section-title__sub">{sub}</p>}
    </header>
  )
}
