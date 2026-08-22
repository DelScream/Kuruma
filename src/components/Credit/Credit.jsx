import { PORTFOLIO, PORTFOLIO_LINKS } from "../../data/portfolio.js"
import "./Credit.css"

export default function Credit({ heading = "h2", titleId, closeLabel, onClose, closeRef }) {
  const Title = heading

  return (
    <div className="credit">
      <p className="micro credit__label">Portfolio</p>
      <Title className="credit__title" id={titleId}>
        Сделано в рамках портфолио
      </Title>
      <p className="credit__name">{PORTFOLIO.name}</p>
      <p className="credit__handle">{PORTFOLIO.handle}</p>
      <div className="credit__links">
        {PORTFOLIO_LINKS.map((item) => (
          <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
            {item.label}
          </a>
        ))}
      </div>
      {closeLabel ? (
        <button className="btn credit__close" type="button" ref={closeRef} onClick={onClose}>
          {closeLabel}
        </button>
      ) : null}
    </div>
  )
}
