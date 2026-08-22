import { useLocale } from "../../context/LocaleContext.jsx"
import Media from "../Media/Media.jsx"
import { local } from "../Media/Media.jsx"
import "./GoldenEra.css"

export default function GoldenEra() {
  const { t } = useLocale()

  return (
    <section className="golden" id="golden">
      <div className="container">
        <p className="micro">THE GOLDEN ERA</p>
        <h2>1980—2000</h2>
        <p className="golden__text">{t.golden}</p>
      </div>
      <figure className="golden__shot">
        <Media
          photo={local("cars/r34.jpg")}
          alt="Nissan Skyline GT-R R34, экспонат золотой эры"
          sizes="100vw"
        />
        <figcaption>
          <span>1999</span>
          <span>EXHIBIT №07</span>
          <span>RB26DETT</span>
          <span>AWD</span>
          <span>SYS / 04-GE</span>
        </figcaption>
      </figure>
    </section>
  )
}
