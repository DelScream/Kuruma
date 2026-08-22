import Media from "../Media/Media.jsx"
import { PHOTOS } from "../../data/images.js"
import { useLocale } from "../../context/LocaleContext.jsx"
import "./Atmosphere.css"

export function DriftSection() {
  return (
    <section className="atmosphere atmosphere--drift" id="drift">
      <Media photo={{ kind: "unsplash", id: PHOTOS.gtrFront }} alt="Ночной спортивный автомобиль, декоративный кадр" sizes="100vw" />
      <div className="atmosphere__shade" />
      <div className="container atmosphere__content">
        <p className="micro">展示 / DRIFT</p>
        <h2>
          Control
          <br />
          the
          <br />
          chaos
        </h2>
        <ul className="telemetry" aria-hidden="true">
          <li>ANGLE 34°</li>
          <li>RPM 7.8K</li>
          <li>SPEED 112</li>
        </ul>
        <p className="atmosphere__note">Декоративная телеметрия. Не является показаниями конкретного автомобиля.</p>
      </div>
    </section>
  )
}

export function TougeSection() {
  return (
    <section className="atmosphere atmosphere--touge" id="touge">
      <Media photo={{ kind: "unsplash", id: PHOTOS.mountain }} alt="Горный перевал в тумане" sizes="100vw" />
      <div className="atmosphere__shade" />
      <p className="atmosphere__jp">速度</p>
      <div className="container atmosphere__content">
        <p className="micro">TOUGE / SILENCE</p>
        <h2>
          Mountain
          <br />
          pass
        </h2>
        <svg className="atmosphere__lines" viewBox="0 0 400 80" aria-hidden="true">
          <path d="M0 60 L80 40 L160 52 L240 18 L320 34 L400 10" fill="none" stroke="#D71920" strokeWidth="1" />
        </svg>
      </div>
    </section>
  )
}

export function WanganSection() {
  return (
    <section className="atmosphere atmosphere--wangan" id="wangan">
      <Media photo={{ kind: "unsplash", id: PHOTOS.tokyoStreet }} alt="Ночной Токио и скоростная трасса" sizes="100vw" />
      <div className="atmosphere__shade" />
      <div className="container atmosphere__content">
        <p className="micro">TOKYO BAY EXPRESSWAY</p>
        <h2>Wangan</h2>
        <div className="wangan-ui" aria-hidden="true">
          <span>35.62 N / 139.78 E</span>
          <span className="speedo">280</span>
          <span>SYSTEM 04 · GRID ON</span>
        </div>
      </div>
    </section>
  )
}

export function DaikokuSection() {
  const { t } = useLocale()
  return (
    <section className="atmosphere atmosphere--daikoku" id="daikoku">
      <Media photo={{ kind: "unsplash", id: PHOTOS.meet }} alt="Встреча автомобилей, сообщество и культура" sizes="100vw" />
      <div className="atmosphere__shade" />
      <div className="container atmosphere__content">
        <p className="micro">COMMUNITY / MEETING</p>
        <h2>
          Daikoku
          <br />
          PA
        </h2>
        <p className="atmosphere__lead">{t.daikoku}</p>
      </div>
    </section>
  )
}
