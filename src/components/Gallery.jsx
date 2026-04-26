import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const IMAGES = [
  { src: "/images/gallery-1.jpg", title: "Outdoor Garden", tag: "Ambience" },
  { src: "/images/gallery-2.jpg", title: "Signature Latte", tag: "Coffee" },
  { src: "/images/gallery-3.jpg", title: "Family Corner", tag: "Interior" },
  { src: "/images/gallery-4.jpg", title: "Plated Cuisine", tag: "Food" },
  { src: "/images/gallery-5.jpg", title: "Event Space", tag: "Venue" },
  { src: "/images/gallery-6.jpg", title: "Barista Craft", tag: "Coffee" },
]

export default function Gallery() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-heading", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.utils.toArray(".gallery-item").forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 85%" },
          y: 80,
          opacity: 0,
          duration: 1,
          delay: (i % 3) * 0.1,
          ease: "power3.out",
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-gradient-to-b from-[#061a14] via-[#0a2a1f]/30 to-[#061a14]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="gallery-heading flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-[#d4b87a]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#d4b87a]">
                Gallery
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance">
              Moments of <span className="italic text-[#d4b87a]">Warmth</span>.
            </h2>
          </div>
          <p className="max-w-md text-[#f5f1e8]/60 leading-relaxed">
            Sebuah pratinjau ke dalam dunia D&apos;Sultan — dari sudut nyaman
            hingga sajian istimewa yang dibuat dengan cinta.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
          {/* Big — col 1-3, row 1-2 */}
          <GalleryCard {...IMAGES[0]} className="md:col-span-3 md:row-span-2 aspect-[4/5] md:aspect-auto md:min-h-[600px]" />
          {/* Top right — col 4-6, row 1 */}
          <GalleryCard {...IMAGES[1]} className="md:col-span-3 aspect-[4/3]" />
          {/* Middle right — col 4-5, row 2 */}
          <GalleryCard {...IMAGES[2]} className="md:col-span-2 aspect-square" />
          {/* Right small — col 6, row 2 */}
          <GalleryCard {...IMAGES[3]} className="md:col-span-1 aspect-square" />
          {/* Bottom wide — col 1-4 */}
          <GalleryCard {...IMAGES[4]} className="md:col-span-4 aspect-[16/9]" />
          {/* Bottom right — col 5-6 */}
          <GalleryCard {...IMAGES[5]} className="md:col-span-2 aspect-[4/3]" />
        </div>
      </div>
    </section>
  )
}

function GalleryCard({ src, title, tag, className = "" }) {
  return (
    <figure
      className={`gallery-item group relative overflow-hidden rounded-2xl bg-[#0a2a1f] ${className}`}
    >
      <img
        src={src || "/placeholder.svg"}
        alt={title}
        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#061a14] via-[#061a14]/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />

      {/* Border on hover */}
      <div className="absolute inset-0 ring-1 ring-inset ring-[#d4b87a]/0 group-hover:ring-[#d4b87a]/40 transition-all duration-500 rounded-2xl" />

      <figcaption className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 flex items-end justify-between gap-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-[#d4b87a] mb-1">
            {tag}
          </div>
          <div className="font-display text-2xl md:text-3xl text-[#f5f1e8]">
            {title}
          </div>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 grid place-items-center w-10 h-10 rounded-full bg-[#d4b87a] text-[#061a14] text-lg flex-shrink-0">
          →
        </div>
      </figcaption>
    </figure>
  )
}
