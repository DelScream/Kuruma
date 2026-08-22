import { useEffect, useState } from "react"
import { useLocale } from "../../context/LocaleContext.jsx"
import { scrollToId } from "../../hooks/useLenis.js"
import "./Header.css"

const links = [
  { id: "exhibition", key: "exhibition" },
  { id: "collection", key: "collection" },
  { id: "history", key: "history" },
  { id: "museum", key: "route" },
  { id: "events", key: "events" },
]

export default function Header({ soundOn, onSound }) {
  const { lang, setLang, t } = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="site-header__line" />
      <div className="site-header__bar">
        <a
          href="#main"
          className="logo"
          aria-label="KURUMA / 黒鉄"
          onClick={(e) => {
            e.preventDefault()
            go("main")
          }}
        >
          <span className="logo__name">KURUMA</span>
          <span className="logo__jp">黒鉄</span>
          <span className="logo__sub">Japanese Automotive Culture Museum</span>
        </a>

        <nav className="site-nav" aria-label="Основная навигация">
          <ul>
            {links.map((item) => (
              <li key={item.key}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    go(item.id)
                  }}
                >
                  {t.nav[item.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__tools">
          <div className="lang" role="group" aria-label="Язык">
            <button type="button" className={lang === "ru" ? "is-active" : ""} onClick={() => setLang("ru")}>
              RU
            </button>
            <span>/</span>
            <button type="button" className={lang === "jp" ? "is-active" : ""} onClick={() => setLang("jp")}>
              JP
            </button>
          </div>
          <button type="button" className="sound-toggle" onClick={onSound} aria-pressed={soundOn}>
            SOUND {soundOn ? "ON" : "OFF"}
          </button>
          <button type="button" className="btn header-cta" onClick={() => go("tickets")}>
            {t.nav.ticket}
          </button>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Меню</span>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-nav" className="mobile-nav" hidden={!open}>
        <nav aria-label="Мобильная навигация">
          <ul>
            {links.map((item) => (
              <li key={item.key}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    go(item.id)
                  }}
                >
                  {t.nav[item.key]}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#tickets"
                onClick={(e) => {
                  e.preventDefault()
                  go("tickets")
                }}
              >
                {t.nav.ticket}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
