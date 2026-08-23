import { PHOTOS } from "./images.js"

const shot = (src) => ({ kind: "local", src })

export const archive = [
  { id: "034", city: "TOKYO", year: 1997, title: "Ночной Токио", image: PHOTOS.tokyoNeon },
  { id: "041", city: "YOKOHAMA", year: 1999, title: "Встреча у парковки", image: PHOTOS.meet },
  { id: "018", city: "NAGOYA", year: 1994, title: "Каталог дисков", image: PHOTOS.wheels },
  { id: "055", city: "OSAKA", year: 2001, title: "Гаражный свет", image: PHOTOS.garage },
  { id: "009", city: "HAKONE", year: 1989, title: "Горный профиль", image: PHOTOS.mountain },
  { id: "062", city: "TOKYO", year: 1998, title: "Мокрый асфальт", image: PHOTOS.wetRoad },
  { id: "027", city: "CHIBA", year: 1996, title: "Моторный отсек", image: PHOTOS.engine },
  { id: "073", city: "FUKUOKA", year: 2000, title: "Кабина ночью", image: PHOTOS.cabin },
  { id: "012", city: "TOKYO", year: 1991, title: "Неоновая улица", image: PHOTOS.tokyoStreet },
  { id: "088", city: "KANAGAWA", year: 2002, title: "Ночной город", image: PHOTOS.tokyoNeon },
  { id: "021", city: "GUNMA", year: 1993, title: "Перевал", image: PHOTOS.travel },
  { id: "046", city: "TOKYO", year: 1995, title: "Skyline R34", image: shot("cars/r34.jpg") },
]

export const engines = [
  {
    id: "rb26",
    name: "RB26",
    full: "RB26DETT",
    config: "I6 / 2.6L / twin-turbo",
    text: "Рядная шестёрка Nissan, вокруг которой выросла целая школа наддува и ночных легенд.",
    image: shot("cars/r34.jpg"),
  },
  {
    id: "2jz",
    name: "2JZ",
    full: "2JZ-GTE",
    config: "I6 / 3.0L / twin-turbo",
    text: "Чугунный блок и запас прочности, который сделал двигатель символом тюнинга 90-х.",
    image: shot("cars/a80.jpg"),
  },
  {
    id: "13b",
    name: "13B",
    full: "13B-REW",
    config: "Rotary / 1.3L / twin-turbo",
    text: "Ротор Mazda: малое рабочее пространство, высокий характер и звук, который невозможно спутать.",
    image: shot("cars/fd3s.jpg"),
  },
  {
    id: "4g63",
    name: "4G63",
    full: "4G63T",
    config: "I4 / 2.0L / turbo",
    text: "Турбочетвёрка Mitsubishi — основа раллийных седанов и гаражных проектов.",
    image: shot("cars/evo6.jpg"),
  },
  {
    id: "b18c",
    name: "B18C",
    full: "B18C Spec R",
    config: "I4 / 1.8L / NA",
    text: "Высокие обороты, VTEC и философия Honda: мощность рождается на верхах.",
    image: shot("cars/dc2.jpg"),
  },
  {
    id: "k20",
    name: "K20",
    full: "K20A",
    config: "I4 / 2.0L / NA",
    text: "Следующее поколение атмосферных моторов Honda — точность, отклик и культура оборотов.",
    image: shot("cars/nsxr.jpg"),
  },
]

export const culture = [
  { id: "mag", title: "Печать 90-х", image: PHOTOS.magazine },
  { id: "cat", title: "Гаражный свет", image: PHOTOS.garage },
  { id: "mini", title: "Skyline R34", image: shot("cars/r34.jpg") },
  { id: "wheel", title: "Кабина", image: PHOTOS.cabin },
  { id: "emblem", title: "NSX", image: shot("cars/nsxr.jpg") },
  { id: "hero", title: "AE86", image: shot("cars/ae86.jpg") },
  { id: "disc", title: "Диски", image: PHOTOS.wheels },
  { id: "dash", title: "RX-7 FD", image: shot("cars/fd3s.jpg") },
]
