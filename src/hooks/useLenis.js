import { useEffect } from "react"
import Lenis from "lenis"
import "lenis/dist/lenis.css"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

let lenisRef = null

export function stopScroll() {
  lenisRef?.stop()
}

export function startScroll() {
  lenisRef?.start()
}

export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  if (lenisRef) lenisRef.scrollTo(el, { offset: -8, duration: 1.15 })
  else el.scrollIntoView({ behavior: "smooth", block: "start" })
}

export function useLenis() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return undefined

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    })
    lenisRef = lenis

    lenis.on("scroll", ScrollTrigger.update)

    const ticker = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(ticker)
      lenis.destroy()
      if (lenisRef === lenis) lenisRef = null
    }
  }, [])
}
