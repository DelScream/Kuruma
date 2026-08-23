import { Link } from "react-router-dom"
import { useLocale } from "../../context/LocaleContext.jsx"
import Media from "../../components/Media/Media.jsx"
import { PHOTOS } from "../../data/images.js"
import "../Pages.css"

export default function NotFound() {
  const { t } = useLocale()

  return (
    <section className="not-found">
      <Media photo={PHOTOS.tokyoStreet} alt="Ночная дорога" sizes="100vw" eager />
      <div className="not-found__shade" />
      <div className="container not-found__copy">
        <p className="micro">SYSTEM ERROR</p>
        <h1>404</h1>
        <p>{t.notFound}</p>
        <Link to="/" className="btn">
          {t.return} →
        </Link>
      </div>
    </section>
  )
}
