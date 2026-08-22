import { useEffect, useState } from "react"
import "./Loader.css"

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = performance.now()
    const duration = 980
    let frame

    const tick = (now) => {
      const value = Math.min(100, ((now - start) / duration) * 100)
      setProgress(value)
      if (value < 100) frame = requestAnimationFrame(tick)
      else onDone()
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [onDone])

  return (
    <div className="loader" role="status" aria-live="polite">
      <p className="loader__brand">KURUMA / 黒鉄</p>
      <p className="micro">Loading archive</p>
      <div className="loader__bar" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
      <p className="tech">SYSTEM 01</p>
    </div>
  )
}
