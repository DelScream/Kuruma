import { useEffect, useRef, useState } from "react"
import { startScroll, stopScroll } from "../../hooks/useLenis.js"
import Credit from "../Credit/Credit.jsx"
import "./CreditPopup.css"

export default function CreditPopup() {
  const [open, setOpen] = useState(true)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = ""
      startScroll()
      return undefined
    }

    stopScroll()
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()

    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", onKey)
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
      startScroll()
    }
  }, [open])

  if (!open) return null

  return (
    <div className="credit-popup" role="dialog" aria-modal="true" aria-labelledby="credit-title">
      <button className="credit-popup__backdrop" type="button" aria-label="Закрыть" onClick={() => setOpen(false)} />
      <div className="credit-popup__card">
        <Credit
          titleId="credit-title"
          closeLabel="Смотреть сайт"
          closeRef={closeRef}
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  )
}
