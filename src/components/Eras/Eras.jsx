import Media from "../Media/Media.jsx"
import { local } from "../Media/Media.jsx"
import { PHOTOS } from "../../data/images.js"
import "./Eras.css"

const eras = [
  { id: "80s", year: "1980", title: "The origin", photo: local("cars/ae86.jpg"), stamp: "起源", tags: "AE86 · FIRST BLOOD" },
  { id: "90s", year: "1990", title: "The golden era", photo: PHOTOS.tokyoNeon, stamp: "黄金", tags: "1990—1999 · TURBO · DRIFT · JDM" },
  { id: "00s", year: "2000", title: "The global icon", photo: local("cars/r34.jpg"), stamp: "象徴", tags: "R34 · NSX-R · WORLD" },
]

export default function Eras() {
  return (
    <section className="eras" id="eras">
      {eras.map((era) => (
        <article key={era.id} className={`eras__screen eras__screen--${era.id}`}>
          <Media photo={era.photo} alt={`${era.title}, ${era.year}`} sizes="100vw" />
          <div className="eras__shade" />
          <div className="container eras__copy">
            <p className="micro">{era.tags}</p>
            <p className="eras__year">{era.year}</p>
            <h2>{era.title}</h2>
            <span className="stamp">{era.stamp}</span>
            {era.id === "90s" && (
              <p className="eras__micro">GRAN TURISMO · INITIAL D · TURBO · DRIFT · JDM · GROUP A</p>
            )}
          </div>
        </article>
      ))}
    </section>
  )
}
