import { useEffect, useRef } from "react"
import gsap from "gsap"
import { scrollToId } from "../../hooks/useLenis.js"
import { useLocale } from "../../context/LocaleContext.jsx"
import { useReady } from "../../context/ReadyContext.jsx"
import Media from "../Media/Media.jsx"
import { Crosshair } from "../Decor/Decor.jsx"
import { PHOTOS } from "../../data/images.js"
import "./Hero.css"

export default function Hero() {
  const { t } = useLocale()
  const ready = useReady()
  const root = useRef(null)

  useEffect(() => {
    if (!ready) return undefined
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.set(".hero__veil", { autoAlpha: 1 })
        .from(".hero__intro-brand", { autoAlpha: 0, duration: 0.28 }, 0.05)
        .from(".hero__intro-line", { scaleX: 0, duration: 0.22 }, 0.22)
        .to(".hero__media", { autoAlpha: 1, scale: 1, duration: 0.45 }, 0.38)
        .to(".hero__veil", { autoAlpha: 0, duration: 0.35 }, 0.5)
        .to(".hero__intro", { autoAlpha: 0, duration: 0.25 }, 0.5)
        .from(".hero__title span", { yPercent: 110, duration: 0.55, stagger: 0.08 }, 0.62)
        .from(".hero__ui", { autoAlpha: 0, y: 16, duration: 0.35, stagger: 0.05 }, 0.95)
    }, root)

    return () => ctx.revert()
  }, [ready])

  useEffect(() => {
    const node = root.current
    if (!node || window.matchMedia("(pointer: coarse)").matches) return undefined

    const layers = [
      [node.querySelector(".hero__media"), 12],
      [node.querySelector(".hero__copy"), 5],
      [node.querySelector(".hero__tech"), 20],
    ]

    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      layers.forEach(([el, amount]) => {
        if (!el) return
        gsap.to(el, { x: x * amount, y: y * amount, duration: 0.7, ease: "power3.out", overwrite: "auto" })
      })
    }

    window.addEventListener("pointermove", onMove)
    return () => window.removeEventListener("pointermove", onMove)
  }, [])

  return (
    <section className="hero" ref={root}>
      <div className="hero__media">
        <Media
          photo={{ kind: "unsplash", id: PHOTOS.hero }}
          alt="Ночной японский автомобиль на мокром асфальте"
          eager
          sizes="100vw"
          widths={[960, 1280, 1600, 1920]}
        />
      </div>
      <div className="hero__shade" />
      <div className="hero__veil" />

      <div className="hero__intro">
        <p className="hero__intro-brand">KURUMA / 黒鉄</p>
        <div className="hero__intro-line" />
      </div>

      <div className="container hero__layout">
        <p className="hero__coords hero__ui">
          TOKYO / JAPAN
          <br />
          35°41' N
          <br />
          139°41' E
        </p>

        <div className="hero__copy">
          <h1 className="hero__title">
            <span>{t.hero.h1a}</span>
            {t.hero.h1b && <span>{t.hero.h1b}</span>}
            <span>{t.hero.h1c}</span>
          </h1>
          <p className="hero__lead hero__ui">{t.hero.lead}</p>
          <div className="hero__actions hero__ui">
            <button type="button" className="btn" onClick={() => scrollToId("exhibition")}>
              {t.hero.cta} →
            </button>
            <button type="button" className="btn btn-ghost" onClick={() => scrollToId("history")}>
              {t.hero.secondary} ↓
            </button>
          </div>
        </div>

        <aside className="hero__tech hero__ui">
          <p className="micro">ARCHIVE №001</p>
          <p className="micro">JDM / 1990—2005</p>
          <p className="micro">EXHIBITION</p>
          <p className="micro">OPEN 10:00—22:00</p>
          <span className="stamp">東京</span>
        </aside>
      </div>

      <p className="hero__vert" aria-hidden="true">
        日本自動車文化
      </p>
      <div className="hero__cross hero__ui" aria-hidden="true">
        <Crosshair />
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>SCROLL</span>
        <i />
        <span>01</span>
      </div>
    </section>
  )
}
