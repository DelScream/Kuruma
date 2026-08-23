import { useLocale } from "../../context/LocaleContext.jsx"
import { scrollToId } from "../../hooks/useLenis.js"
import Media from "../Media/Media.jsx"
import { PHOTOS } from "../../data/images.js"
import "./FinalCTA.css"

export default function FinalCTA() {
  const { t } = useLocale()

  return (
    <section className="final">
      <Media photo={PHOTOS.gtrFront} alt="Красный свет фар на мокром асфальте" sizes="100vw" />
      <div className="final__shade" />
      <div className="container final__copy">
        <h2>
          {t.final[0]}
          <br />
          {t.final[1]}
          <br />
          {t.final[2]}
        </h2>
        <button type="button" className="btn" onClick={() => scrollToId("tickets")}>
          {t.book}
        </button>
      </div>
    </section>
  )
}
