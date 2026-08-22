import { pexels, srcSet, unsplash } from "../../data/images.js"

export default function Media({
  photo,
  alt,
  sizes = "(max-width: 767px) 100vw, (max-width: 1199px) 80vw, 1200px",
  eager = false,
  className = "",
  widths = [640, 960, 1280, 1600],
}) {
  if (!photo) return null

  if (photo.kind === "local") {
    return (
      <picture className={className}>
        <img
          src={`${import.meta.env.BASE_URL}images/${photo.src}`}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          decoding={eager ? "sync" : "async"}
        />
      </picture>
    )
  }

  const build = (fmt) => (w) =>
    photo.kind === "pexels" ? pexels(photo.id, w) : unsplash(photo.id, w, fmt)

  const jpg = photo.kind === "pexels" ? pexels(photo.id, 1280) : unsplash(photo.id, 1280)

  return (
    <picture className={className}>
      {photo.kind !== "pexels" && (
        <>
          <source type="image/avif" srcSet={srcSet(build("avif"), widths)} sizes={sizes} />
          <source type="image/webp" srcSet={srcSet(build("webp"), widths)} sizes={sizes} />
        </>
      )}
      <img
        src={jpg}
        srcSet={srcSet(build(), widths)}
        sizes={sizes}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding={eager ? "sync" : "async"}
      />
    </picture>
  )
}

export const local = (src) => ({ kind: "local", src })
