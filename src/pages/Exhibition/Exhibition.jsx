import Eras from "../../components/Eras/Eras.jsx"
import GoldenEra from "../../components/GoldenEra/GoldenEra.jsx"
import Manifesto from "../../components/Manifesto/Manifesto.jsx"
import VisitSection from "../../components/VisitSection/VisitSection.jsx"
import Seo, { museumJson } from "../../components/Seo/Seo.jsx"
import "../Pages.css"

export default function Exhibition() {
  return (
    <>
      <Seo json={museumJson} />
      <section className="page">
        <div className="container">
          <p className="micro">展示 / EXHIBITION</p>
          <h1>Экспозиция</h1>
          <p className="page__lead">
            Основной зал музея ведёт от первых лёгких купе 80-х к глобальным иконам начала 2000-х. Не просто автомобили —
            эпоха японского автопрома, тюнинга и культуры скорости.
          </p>
        </div>
      </section>
      <Manifesto />
      <GoldenEra />
      <Eras />
      <VisitSection />
    </>
  )
}
