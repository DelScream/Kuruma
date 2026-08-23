import { useLocale } from "../../context/LocaleContext.jsx"
import Media from "../Media/Media.jsx"
import { PHOTOS } from "../../data/images.js"
import "./VisitSection.css"

export default function VisitSection() {
  const { t } = useLocale()

  return (
    <section className="visit" id="museum">
      <div className="container visit__head">
        <p className="micro">KURUMA / 黒鉄</p>
        <h2>{t.museumTitle}</h2>
        <p>{t.museum}</p>
      </div>
      <figure>
        <Media photo={PHOTOS.garage} alt="Гаражный зал музея автомобильной культуры" sizes="100vw" />
      </figure>
      <div className="container visit__info">
        <div>
          <p className="micro">Адрес</p>
          <p>Москва</p>
          <p>ул. Автомобильная, 17</p>
        </div>
        <div>
          <p className="micro">{t.hours.open}</p>
          <p>{t.hours.time}</p>
        </div>
        <div>
          <p className="micro">{t.hours.closed}</p>
          <p>{t.hours.tech}</p>
        </div>
      </div>
    </section>
  )
}
