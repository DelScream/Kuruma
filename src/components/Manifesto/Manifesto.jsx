import { useLocale } from "../../context/LocaleContext.jsx"
import "./Manifesto.css"

export default function Manifesto() {
  const { t } = useLocale()
  const years = ["1980", "1990", "2000", "2010", "2020"]

  return (
    <section className="manifesto" id="exhibition">
      <div className="container">
        <p className="micro">ARCHIVE / 0091 · MUSEUM DATABASE</p>
        <h2>{t.manifesto}</h2>
        <div className="manifesto__line" aria-hidden="true" />
        <ol className="manifesto__years">
          {years.map((year) => (
            <li key={year}>{year}</li>
          ))}
        </ol>
      </div>
    </section>
  )
}
