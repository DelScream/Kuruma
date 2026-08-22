import { useLocale } from "../../context/LocaleContext.jsx"
import { scrollToId } from "../../hooks/useLenis.js"
import Credit from "../Credit/Credit.jsx"
import "./Footer.css"

const links = [
  { id: "exhibition", key: "exhibition" },
  { id: "collection", key: "collection" },
  { id: "history", key: "history" },
  { id: "events", key: "events" },
  { id: "museum", key: "contacts" },
]

export default function Footer() {
  const { t } = useLocale()

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <p className="logo__name">KURUMA</p>
          <p className="logo__jp">黒鉄</p>
          <p className="micro">Japanese Automotive Culture Museum</p>
        </div>
        <nav aria-label="Навигация в подвале">
          <ul>
            {links.map((item) => (
              <li key={item.key}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToId(item.id)
                  }}
                >
                  {t.nav[item.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="social">
          <li><a href="https://vk.com" rel="noreferrer">VK</a></li>
          <li><a href="https://t.me" rel="noreferrer">Telegram</a></li>
          <li><a href="https://youtube.com" rel="noreferrer">YouTube</a></li>
        </ul>
      </div>
      <div className="container site-footer__credit">
        <Credit heading="p" />
      </div>
      <div className="container site-footer__bottom">
        <p>© 2026 KURUMA / 黒鉄</p>
        <p>Москва · ул. Автомобильная, 17</p>
        <p className="concept">CONCEPT PROJECT / FICTIONAL MUSEUM · Photos: Wikimedia Commons / Unsplash</p>
      </div>
    </footer>
  )
}
