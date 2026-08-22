import { useEffect } from "react"
import "./ScrollProgress.css"

export default function ScrollProgress() {
  useEffect(() => {
    const bar = document.querySelector(".scroll-progress span")
    const heroLine = document.querySelector(".hero__scroll i")
    if (!bar) return undefined

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const value = max > 0 ? window.scrollY / max : 0
      bar.style.transform = `scaleX(${value})`
      if (heroLine) heroLine.style.setProperty("--fill", `${Math.min(1, window.scrollY / window.innerHeight)}`)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span />
    </div>
  )
}
