import CarGrid from "../../components/CarGrid/CarGrid.jsx"
import Seo, { museumJson } from "../../components/Seo/Seo.jsx"
import "../Pages.css"

export default function Collection() {
  return (
    <>
      <Seo json={museumJson} />
      <section className="page">
        <div className="container">
          <p className="micro">収蔵 / COLLECTION</p>
          <h1>Коллекция</h1>
          <p className="page__lead">
            Skyline, Supra, RX-7, NSX и другие японские автомобили 80-х и 90-х. Каждый экспонат — документ эпохи.
          </p>
        </div>
      </section>
      <CarGrid title="Легенды" kicker="The collection" />
    </>
  )
}
