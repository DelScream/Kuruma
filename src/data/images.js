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

export const PHOTOS = {
  hero: "photo-1605559424843-9e4c228bf1c2",
  gtrFront: "photo-1544636331-e26879cd4d9b",
  tokyoNeon: "photo-1542051841857-5f90071e7989",
  tokyoStreet: "photo-1503899036084-c55cdd92da26",
  nightCar: "photo-1614162692292-7ac56d7f7f1e",
  redCar: "photo-1511919884226-fd3cad34687c",
  wetRoad: "photo-1471479917193-f00955256257",
  mountain: "photo-1506905925346-21bda4d32df4",
  highway: "photo-1449824913935-59a10b8d2000",
  travel: "photo-1469854523086-cc02fe5d8800",
  engine: "photo-1486262715619-67b85e0b08d3",
  garage: "photo-1487754180451-c456f719a1fc",
  meet: "photo-1493238792000-8113da705763",
  wheels: "photo-1558618666-fcd25c85cd64",
  classic: "photo-1503376780353-7e6692767b70",
  cabin: "photo-1542362567-b07e54358753",
  silver: "photo-1549317661-bd32c8ce0db2",
  darkCar: "photo-1492144534655-ae79c964c9d7",
  museum: "photo-1554907984-15263bfd63bd",
  industrial: "photo-1504328345606-18bbc8c9d7d1",
  helmet: "photo-1542362567-b07e54358753",
  poster: "photo-1499781350541-7783f6c6a0c8",
  magazine: "photo-1463320897365-92ba30040427",
  tools: "photo-1487754180451-c456f719a1fc",
  asphalt: "photo-1511919884226-fd3cad34687c",
}

export const PEXELS = {
  gtr: 3874337,
  gtrBlue: 3802510,
  sports: 3752194,
  gtrNight: 3311574,
  red: 1545743,
  white: 1149831,
  dark: 210019,
  street: 244206,
}
