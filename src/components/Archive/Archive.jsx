import { archive, culture } from "../../data/archive.js"
import Media from "../Media/Media.jsx"
import "./Archive.css"

export function CultureSection() {
  return (
    <section className="culture" id="culture">
      <div className="container">
        <p className="micro">NOT JUST CARS</p>
        <h2>Культура</h2>
        <div className="culture__grid">
          {culture.map((item) => (
            <article key={item.id}>
              <Media photo={item.image} alt={item.title} sizes="30vw" />
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Archive() {
  return (
    <section className="archive" id="archive">
      <div className="container">
        <p className="micro">MUSEUM DATABASE</p>
        <h2>Archive</h2>
        <div className="archive__masonry">
          {archive.map((item) => (
            <article key={item.id}>
              <Media photo={item.image} alt={`${item.title}, ${item.city} ${item.year}`} sizes="30vw" />
              <div>
                <p>ARCHIVE №{item.id}</p>
                <p>
                  {item.city} · {item.year}
                </p>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
