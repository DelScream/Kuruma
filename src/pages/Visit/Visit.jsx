import { Link } from "react-router-dom"
import Seo, { museumJson } from "../../components/Seo/Seo.jsx"
import { useLocale } from "../../context/LocaleContext.jsx"
import { tickets } from "../../data/events.js"
import { Barcode } from "../../components/Decor/Decor.jsx"
import Media from "../../components/Media/Media.jsx"
import { PHOTOS } from "../../data/images.js"
import "../../components/Tickets/Tickets.css"
import "../Pages.css"
import "./VisitPage.css"

export default function Visit() {
  const { t } = useLocale()

  return (
    <article className="visit-page">
      <Seo json={museumJson} />
      <section className="visit-page__hero">
        <Media photo={{ kind: "unsplash", id: PHOTOS.garage }} alt="Гаражный зал музея KURUMA" eager sizes="100vw" />
        <div className="visit-page__shade" />
        <div className="container visit-page__hero-copy">
          <p className="micro">VISIT / CONTACT</p>
          <h1>Маршрут</h1>
          <p>
            KURUMA / 黒鉄 · Москва, ул. Автомобильная, 17. {t.hours.open}: {t.hours.time}.
          </p>
        </div>
      </section>

      <section className="container visit-page__block">
        <p className="micro">KURUMA / 黒鉄</p>
        <h2>{t.museumTitle}</h2>
        <p className="page__lead">{t.museum}</p>
        <div className="visit-page__info">
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

      <section className="container visit-page__block">
        <p className="micro">EXHIBITION PASS</p>
        <h2>Билеты</h2>
        <div className="visit-page__tickets">
          {tickets.map((item, index) => (
            <article key={item.id} className="ticket-card">
              <div className="ticket-card__top">
                <p>KURUMA · 黒鉄</p>
                <p>№ 00018{index + 4}</p>
              </div>
              <h3>{item.name}</h3>
              <p className="ticket-card__price">{item.price}</p>
              <ul>
                {item.items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <Barcode code={`00018${index + 4}`} />
              <div className="ticket-card__bottom">
                <span>22.08.2026</span>
                <span className="stamp">VALID</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="visit-page__cta">
        <div className="container">
          <h2>
            {t.final[0]}
            <br />
            {t.final[1]}
            <br />
            {t.final[2]}
          </h2>
          <Link to="/collection" className="btn">
            {t.book}
          </Link>
        </div>
      </section>
    </article>
  )
}
