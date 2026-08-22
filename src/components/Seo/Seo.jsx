import { useEffect } from "react"

export default function Seo({ json }) {
  useEffect(() => {
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.id = "kuruma-jsonld"
    script.text = JSON.stringify(json)
    document.getElementById("kuruma-jsonld")?.remove()
    document.head.appendChild(script)
    return () => script.remove()
  }, [json])

  return null
}

export const museumJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Museum",
      name: "KURUMA / 黒鉄",
      alternateName: "Музей японской автомобильной культуры",
      description:
        "Виртуальный музей японской автомобильной культуры: JDM, культовые автомобили, история тюнинга.",
      url: "https://delscream.github.io/Kuruma/",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Москва",
        streetAddress: "ул. Автомобильная, 17",
        addressCountry: "RU",
      },
      openingHours: "We-Mo 10:00-22:00",
    },
    {
      "@type": "Organization",
      name: "KURUMA / 黒鉄",
      url: "https://delscream.github.io/Kuruma/",
    },
    {
      "@type": "ImageObject",
      contentUrl: "https://delscream.github.io/Kuruma/og.jpg",
      width: 1200,
      height: 630,
      caption: "KURUMA / 黒鉄 — музей японской автомобильной культуры",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://delscream.github.io/Kuruma/" },
        { "@type": "ListItem", position: 2, name: "Коллекция", item: "https://delscream.github.io/Kuruma/#collection" },
      ],
    },
  ],
}
