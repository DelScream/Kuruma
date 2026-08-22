import { engines } from "../../data/archive.js"
import Media from "../Media/Media.jsx"
import "./EngineSection.css"

export default function EngineSection() {
  return (
    <section className="engines" id="engines">
      <div className="container">
        <p className="micro">TECHNICAL ARCHIVE</p>
        <h2>Under the hood</h2>
        <div className="engines__grid">
          {engines.map((item) => (
            <article key={item.id}>
              <Media photo={item.image} alt={`Двигатель ${item.full}`} sizes="30vw" />
              <div>
                <h3>{item.name}</h3>
                <p className="tech">{item.config}</p>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
