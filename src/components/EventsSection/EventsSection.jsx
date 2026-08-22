import { events } from "../../data/events.js"
import "./EventsSection.css"

export default function EventsSection() {
  return (
    <section className="events" id="events">
      <div className="container">
        <p className="micro">CALENDAR / 2026</p>
        <h2>События</h2>
        <div className="events__list">
          {events.map((item) => (
            <article key={item.id}>
              <p className="micro">
                {item.date} · {item.time} · {item.place}
              </p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
