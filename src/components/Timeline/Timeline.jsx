import { useEffect, useRef } from "react"
import gsap from "gsap"
import { cars, timelineIds } from "../../data/cars.js"
import Media from "../Media/Media.jsx"
import "./Timeline.css"

export default function Timeline() {
  const root = useRef(null)
  const items = timelineIds.map((id) => cars.find((car) => car.id === id)).filter(Boolean)
  const loop = [...items, ...items]

  useEffect(() => {
    const track = root.current?.querySelector(".timeline__track")
    if (!track) return undefined

    const tween = gsap.to(track, {
      xPercent: -50,
      duration: 56,
      ease: "none",
      repeat: -1,
    })

    const pause = () => tween.pause()
    const play = () => tween.play()
    const node = root.current
    node.addEventListener("pointerenter", pause)
    node.addEventListener("pointerleave", play)

    return () => {
      tween.kill()
      node.removeEventListener("pointerenter", pause)
      node.removeEventListener("pointerleave", play)
    }
  }, [])

  return (
    <section className="timeline" ref={root} id="timeline" aria-label="Хронология легенд">
      <div className="container timeline__head">
        <p className="micro">ARCHIVE / TIMELINE</p>
        <h2>1986—2002</h2>
      </div>
      <div className="timeline__viewport">
        <div className="timeline__track">
          {loop.map((car, index) => (
            <article className="timeline__slide" key={`${car.id}-${index}`}>
              <p className="micro">
                {String((index % items.length) + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </p>
              <p className="timeline__year">{car.year}</p>
              <h3>
                {car.brand} {car.model}
                <span>{car.generation}</span>
              </h3>
              <div className="timeline__shot">
                <Media photo={car.image} alt={`${car.brand} ${car.model} ${car.generation}`} sizes="40vw" />
              </div>
              <dl>
                <div>
                  <dt>Engine</dt>
                  <dd>{car.engine}</dd>
                </div>
                <div>
                  <dt>Drive</dt>
                  <dd>{car.drive}</dd>
                </div>
              </dl>
              <p>{car.text}</p>
              <p className="tech">EXHIBIT №{car.exhibit}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
