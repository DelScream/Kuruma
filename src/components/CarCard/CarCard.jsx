import Media from "../Media/Media.jsx"
import "./CarCard.css"

export default function CarCard({ car, size = "m" }) {
  return (
    <article className={`car-card car-card--${size}`}>
      <div className="car-card__media">
        <Media photo={car.image} alt={`${car.brand} ${car.model} ${car.generation}`} sizes="(max-width: 991px) 100vw, 40vw" />
        <div className="car-card__grid" />
        <span className="stamp">収蔵</span>
      </div>
      <div className="car-card__meta">
        <p className="micro">{car.brand}</p>
        <h3>
          {car.model}
          <span>{car.generation}</span>
        </h3>
        <p className="tech">EXHIBIT №{car.exhibit}</p>
        <dl className="car-card__facts">
          <div>
            <dt>Engine</dt>
            <dd>{car.engine}</dd>
          </div>
          <div>
            <dt>Drive</dt>
            <dd>{car.drive}</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>{car.year}</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}
