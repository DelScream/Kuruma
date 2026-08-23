export function unsplash(id, w = 1600, fmt) {
  const format = fmt ? `&fm=${fmt}` : ""
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=78${format}`
}

export function pexels(id, w = 1600) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`
}

export function srcSet(builder, widths = [640, 960, 1280, 1920]) {
  return widths.map((w) => `${builder(w)} ${w}w`).join(", ")
}

const shot = (src) => ({ kind: "local", src })

export const PHOTOS = {
  hero: shot("cars/r34.jpg"),
  gtrFront: shot("cars/r32.jpg"),
  tokyoNeon: shot("stock/tokyo-neon.jpg"),
  tokyoStreet: shot("stock/tokyo-street.jpg"),
  nightCar: shot("cars/r34-2.jpg"),
  redCar: shot("cars/a80.jpg"),
  wetRoad: shot("cars/r34-2.jpg"),
  mountain: shot("stock/mountain.jpg"),
  highway: shot("stock/tokyo-street.jpg"),
  travel: shot("cars/ae86.jpg"),
  engine: shot("stock/engine.jpg"),
  garage: shot("cars/a80.jpg"),
  meet: shot("cars/s15.jpg"),
  wheels: shot("cars/gc8.jpg"),
  classic: shot("cars/ae86.jpg"),
  cabin: shot("cars/fd3s.jpg"),
  silver: shot("cars/nsxr.jpg"),
  darkCar: shot("cars/r32-2.jpg"),
  museum: shot("cars/a80-2.jpg"),
  industrial: shot("stock/engine.jpg"),
  helmet: shot("cars/dc2.jpg"),
  poster: shot("stock/tokyo-neon.jpg"),
  magazine: shot("stock/tokyo-neon.jpg"),
  tools: shot("stock/engine.jpg"),
  asphalt: shot("cars/r32.jpg"),
}
