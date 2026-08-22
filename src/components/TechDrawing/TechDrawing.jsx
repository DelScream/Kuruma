import "./TechDrawing.css"

export default function TechDrawing({ car }) {
  return (
    <figure className="drawing">
      <svg viewBox="0 0 640 240" role="img" aria-label={`Технический чертёж ${car.model}`}>
        <path
          d="M70 140 l36-42 h90 l28-32 h150 l48 32 h88 l34 24 v38 h-30 a26 26 0 0 1-52 0 H248 a26 26 0 0 1-52 0 H70 z"
          fill="none"
          stroke="#A9C7D8"
          strokeWidth="1.2"
        />
        <circle cx="222" cy="176" r="26" fill="none" stroke="#8B8B8B" />
        <circle cx="478" cy="176" r="26" fill="none" stroke="#8B8B8B" />
        <circle cx="222" cy="176" r="3" fill="#D71920" />
        <circle cx="478" cy="176" r="3" fill="#D71920" />
        <circle cx="318" cy="78" r="3" fill="#D71920" />
        <line x1="70" y1="210" x2="574" y2="210" stroke="#555" />
        <line x1="196" y1="200" x2="452" y2="200" stroke="#D71920" />
      </svg>
      <figcaption>
        <div>
          <span>Length</span>
          <strong>{car.length} MM</strong>
        </div>
        <div>
          <span>Wheelbase</span>
          <strong>{car.wheelbase} MM</strong>
        </div>
        <div>
          <span>Engine</span>
          <strong>{car.engine}</strong>
        </div>
        <div>
          <span>Drive</span>
          <strong>{car.drive}</strong>
        </div>
        <div>
          <span>Year</span>
          <strong>{car.year}</strong>
        </div>
      </figcaption>
    </figure>
  )
}
