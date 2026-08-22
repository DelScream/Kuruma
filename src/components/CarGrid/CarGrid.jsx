import { useMemo, useRef, useState } from "react"
import gsap from "gsap"
import { cars, filterCars, filters } from "../../data/cars.js"
import CarCard from "../CarCard/CarCard.jsx"
import "./CarGrid.css"

const sizes = ["xl", "s", "s", "wide", "tall", "m", "m", "m", "wide", "s", "m", "tall"]

export default function CarGrid({ title = "Легенды", kicker = "The collection" }) {
  const [active, setActive] = useState("ALL")
  const grid = useRef(null)

  const list = useMemo(() => filterCars(active), [active])

  const onFilter = (key) => {
    if (key === active) return
    const cards = grid.current?.querySelectorAll(".car-card")
    gsap.to(cards, {
      autoAlpha: 0,
      y: 16,
      duration: 0.22,
      stagger: 0.03,
      onComplete: () => {
        setActive(key)
        requestAnimationFrame(() => {
          const next = grid.current?.querySelectorAll(".car-card")
          gsap.fromTo(next, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.04 })
        })
      },
    })
  }

  return (
    <section className="collection" id="collection">
      <div className="container">
        <p className="micro">{kicker}</p>
        <h2>{title}</h2>
        <div className="collection__filters" role="tablist" aria-label="Фильтр коллекции">
          {filters.map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={active === key}
              className={active === key ? "is-active" : ""}
              onClick={() => onFilter(key)}
            >
              {key}
            </button>
          ))}
        </div>
        <div className="collection__grid" ref={grid}>
          {list.map((car, i) => (
            <CarCard key={car.id} car={car} size={sizes[i % sizes.length]} />
          ))}
        </div>
        {list.length === 0 && <p className="collection__empty">Экспонаты не найдены.</p>}
      </div>
    </section>
  )
}

export { cars }
