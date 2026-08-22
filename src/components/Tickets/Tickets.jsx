import { useState } from "react"
import { tickets } from "../../data/events.js"
import { Barcode } from "../Decor/Decor.jsx"
import "./Tickets.css"

const empty = {
  tariff: "standard",
  date: "",
  qty: "1",
  name: "",
  phone: "",
  email: "",
}

export default function Tickets() {
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)
  const selected = tickets.find((item) => item.id === form.tariff) || tickets[0]

  const set = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="tickets" id="tickets">
      <div className="container">
        <p className="micro">EXHIBITION PASS</p>
        <h2>Билеты</h2>
        <div className="tickets__grid">
          {tickets.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`ticket-card ${form.tariff === item.id ? "is-active" : ""}`}
              onClick={() => setForm((prev) => ({ ...prev, tariff: item.id }))}
            >
              <div className="ticket-card__top">
                <p>KURUMA · 黒鉄</p>
                <p>№ 00018{index + 4}</p>
              </div>
              <h3>{item.name}</h3>
              <p className="ticket-card__price">{item.price}</p>
              <ul>
                {item.items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <Barcode code={`00018${index + 4}`} />
              <div className="ticket-card__bottom">
                <span>22.08.2026</span>
                <span className="stamp">{form.tariff === item.id ? "SELECT" : "VALID"}</span>
              </div>
            </button>
          ))}
        </div>

        {sent ? (
          <div className="ticket-form ticket-form--done" role="status">
            <p className="micro">PASS CONFIRMED</p>
            <h3>Бронь принята</h3>
            <p>
              {form.name}, тариф {selected.name} на {form.qty}{" "}
              {Number(form.qty) === 1 ? "гостя" : "гостей"}
              {form.date ? ` · ${form.date}` : ""}.
            </p>
            <p className="ticket-form__note">CONCEPT PROJECT / FICTIONAL MUSEUM. Оплата не производится.</p>
            <button type="button" className="btn" onClick={() => setSent(false)}>
              Новая бронь
            </button>
          </div>
        ) : (
          <form className="ticket-form" onSubmit={submit}>
            <p className="micro">КУПИТЬ БИЛЕТ</p>
            <h3>Оформление посещения</h3>
            <div className="ticket-form__grid">
              <label>
                <span>Тариф</span>
                <select name="tariff" value={form.tariff} onChange={set("tariff")} required>
                  {tickets.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name} — {item.price}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>Дата посещения</span>
                <input type="date" name="date" value={form.date} onChange={set("date")} required />
              </label>
              <label>
                <span>Количество</span>
                <input type="number" name="qty" min="1" max="8" value={form.qty} onChange={set("qty")} required />
              </label>
              <label>
                <span>Имя</span>
                <input type="text" name="name" value={form.name} onChange={set("name")} required autoComplete="name" />
              </label>
              <label>
                <span>Телефон</span>
                <input type="tel" name="phone" value={form.phone} onChange={set("phone")} required autoComplete="tel" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" value={form.email} onChange={set("email")} required autoComplete="email" />
              </label>
            </div>
            <p className="ticket-form__sum">
              {selected.name} · {selected.price} × {form.qty}
            </p>
            <button type="submit" className="btn">
              Забронировать посещение
            </button>
            <p className="ticket-form__note">Вымышленный музей. Форма демонстрационная, платеж не списывается.</p>
          </form>
        )}
      </div>
    </section>
  )
}
