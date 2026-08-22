import JdmSection from "../../components/JdmSection/JdmSection.jsx"
import GoldenEra from "../../components/GoldenEra/GoldenEra.jsx"
import Timeline from "../../components/Timeline/Timeline.jsx"
import Eras from "../../components/Eras/Eras.jsx"
import RussiaSection from "../../components/RussiaSection/RussiaSection.jsx"
import Seo, { museumJson } from "../../components/Seo/Seo.jsx"
import "../Pages.css"

export default function History() {
  return (
    <>
      <Seo json={museumJson} />
      <section className="page">
        <div className="container">
          <p className="micro">HISTORY / JDM</p>
          <h1>История</h1>
          <p className="page__lead">
            От внутреннего рынка Японии до мировой культуры: японский автопром, тюнинг автомобилей и сцена 80-х и 90-х.
          </p>
        </div>
      </section>
      <JdmSection />
      <GoldenEra />
      <Timeline />
      <Eras />
      <RussiaSection />
    </>
  )
}
