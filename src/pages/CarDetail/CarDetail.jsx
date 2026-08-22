import { Link, useParams } from "react-router-dom"
import { getCar } from "../../data/cars.js"
import Media from "../../components/Media/Media.jsx"
import TechDrawing from "../../components/TechDrawing/TechDrawing.jsx"
import Seo from "../../components/Seo/Seo.jsx"
import "../Pages.css"

export default function CarDetail() {
  const { slug } = useParams()
  const car = getCar(slug)

  if (!car) {
    return (
      <section className="page">
        <div className="container">
          <h1>Экспонат не найден</h1>
          <Link to="/collection" className="btn">
            Вернуться в коллекцию
          </Link>
        </div>
      </section>
    )
  }

  const json = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: `${car.brand} ${car.model} ${car.generation}`,
    brand: car.brand,
    model: car.model,
    vehicleModelDate: String(car.year),
    vehicleEngine: car.engine,
    driveWheelConfiguration: car.drive,
  }

  return (
    <article>
      <Seo json={json} />
      <header className="car-page__hero">
        <Media photo={car.image} alt={`${car.brand} ${car.model} ${car.generation}`} eager sizes="100vw" />
        <div className="car-page__hero-copy">
          <div className="container">
            <p className="micro">
              {car.brand} · EXHIBIT №{car.exhibit}
            </p>
            <h1>
              {car.model}
              <br />
              {car.generation}
            </h1>
          </div>
        </div>
      </header>
      <div className="container car-page__body">
        <dl className="car-page__specs">
          <div>
            <dt>Year</dt>
            <dd>{car.year}</dd>
          </div>
          <div>
            <dt>Engine</dt>
            <dd>{car.engine}</dd>
          </div>
          <div>
            <dt>Drive</dt>
            <dd>{car.drive}</dd>
          </div>
          <div>
            <dt>Power</dt>
            <dd>{car.power}</dd>
          </div>
        </dl>
        <p className="car-page__history">{car.history}</p>
        <TechDrawing car={car} />
        <div className="car-page__gallery">
          {car.gallery.map((photo, index) => (
            <Media key={index} photo={photo} alt={`${car.model}, кадр ${index + 1}`} sizes="50vw" />
          ))}
        </div>
        <Link to="/collection" className="btn btn-ghost">
          ← Коллекция
        </Link>
      </div>
    </article>
  )
}
