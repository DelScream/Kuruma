import "./Decor.css"

export function Barcode({ code = "001847" }) {
  return (
    <svg className="barcode" viewBox="0 0 120 28" aria-hidden="true">
      {[2, 4, 3, 6, 2, 5, 3, 2, 7, 3, 4, 2, 5, 3, 2, 6, 3, 4, 2, 5].map((w, i) => (
        <rect key={i} x={i * 6} y="0" width={w === 2 || w === 6 ? 1 : 2} height="20" fill="#F2F0EA" />
      ))}
      <text x="0" y="28" fill="#8B8B8B" fontSize="6">
        {code}
      </text>
    </svg>
  )
}

export function Crosshair() {
  return (
    <div className="crosshair" aria-hidden="true">
      <i />
      <i />
    </div>
  )
}
