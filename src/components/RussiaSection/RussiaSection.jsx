import { useLocale } from "../../context/LocaleContext.jsx"
import "./RussiaSection.css"

export default function RussiaSection() {
  const { t } = useLocale()

  return (
    <section className="russia" id="russia">
      <div className="container">
        <p className="micro">TOKYO → VLADIVOSTOK → MOSCOW</p>
        <h2>{t.russiaTitle}</h2>
        <p className="russia__text">{t.russia}</p>
        <svg className="russia__map" viewBox="0 0 900 280" role="img" aria-label="Путь культуры: Токио, Владивосток, Москва">
          <path d="M820 190 C 640 210, 520 90, 360 120 C 230 140, 140 70, 70 80" fill="none" stroke="#D71920" strokeWidth="1.5" />
          <circle cx="820" cy="190" r="5" fill="#D71920" />
          <circle cx="360" cy="120" r="5" fill="#D71920" />
          <circle cx="70" cy="80" r="5" fill="#D71920" />
          <text x="790" y="220" fill="#F2F0EA">TOKYO</text>
          <text x="330" y="150" fill="#F2F0EA">VLADIVOSTOK</text>
          <text x="40" y="64" fill="#F2F0EA">MOSCOW</text>
        </svg>
      </div>
    </section>
  )
}
