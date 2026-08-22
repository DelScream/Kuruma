import { useLocale } from "../../context/LocaleContext.jsx"
import "./JdmSection.css"

export default function JdmSection() {
  const { t } = useLocale()

  return (
    <section className="jdm" id="history">
      <div className="container jdm__grid">
        <div>
          <p className="tech">01</p>
          <h2>JDM</h2>
        </div>
        <p className="jdm__text">{t.jdm}</p>
      </div>
      <p className="jdm__huge" aria-hidden="true">
        JDM
      </p>
    </section>
  )
}
