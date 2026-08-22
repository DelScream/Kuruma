import { events } from "../../data/events.js"
import Seo, { museumJson } from "../../components/Seo/Seo.jsx"
import "../Pages.css"

export default function Events() {
  const json = {
    "@context": "https://schema.org",
    "@graph": events.map((item) => ({
      "@type": "Event",
      name: item.title,
      startDate: item.date,
      location: { "@type": "Place", name: item.place, address: "Москва, ул. Автомобильная, 17" },
      description: item.text,
    })),
  }

  return (
    <section className="page">
      <Seo json={json} />
      <div className="container">
        <p className="micro">CALENDAR / 2026</p>
        <h1>События</h1>
        <p className="page__lead">Лекции, архивные показы и закрытые гаражные сессии вымышленного музея.</p>
        <div className="page-list">
          {events.map((item) => (
            <article key={item.id}>
              <p className="micro">
                {item.date} · {item.time} · {item.place}
              </p>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
