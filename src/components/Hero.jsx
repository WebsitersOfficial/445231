import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ArrowRight, MapPin } from "lucide-react"

export default function Hero() {
  const titleRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const imageRef = useRef(null)
  const tagsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Custom split-text effect: split each word into chars
      const splitToChars = (el) => {
        const text = el.textContent
        el.textContent = ""
        const words = text.split(" ")
        const chars = []
        words.forEach((word, wi) => {
          const wordSpan = document.createElement("span")
          wordSpan.style.display = "inline-block"
          wordSpan.style.whiteSpace = "nowrap"
          word.split("").forEach((ch) => {
            const charSpan = document.createElement("span")
            charSpan.className = "split-char"
            charSpan.textContent = ch
            wordSpan.appendChild(charSpan)
            chars.push(charSpan)
          })
          el.appendChild(wordSpan)
          if (wi < words.length - 1) {
            el.appendChild(document.createTextNode(" "))
          }
        })
        return chars
      }

      const titleChars = splitToChars(titleRef.current)

      gsap.set(titleChars, { y: 120, opacity: 0, rotateX: -40 })
      gsap.set(subRef.current, { y: 30, opacity: 0 })
      gsap.set(ctaRef.current, { y: 30, opacity: 0 })
      gsap.set(tagsRef.current, { y: 20, opacity: 0 })
      gsap.set(imageRef.current, { scale: 1.15, opacity: 0 })

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.to(imageRef.current, { opacity: 1, scale: 1, duration: 1.6, ease: "expo.out" })
        .to(
          titleChars,
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.025,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=1.2",
        )
        .to(subRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
        .to(tagsRef.current, { y: 0, opacity: 1, duration: 0.7 }, "-=0.5")
        .to(ctaRef.current, { y: 0, opacity: 1, duration: 0.7 }, "-=0.5")
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center pt-32 pb-20"
    >
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0 -z-10">
        <img
          src="/images/hero-cafe.jpg"
          alt="D'Sultan Cafe interior ambience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061a14]/80 via-[#061a14]/70 to-[#061a14]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a14] via-[#061a14]/50 to-transparent" />
      </div>

      {/* Decorative ring */}
      <div className="pointer-events-none absolute -right-40 top-1/3 w-[600px] h-[600px] rounded-full border border-[#d4b87a]/10" />
      <div className="pointer-events-none absolute -right-20 top-1/4 w-[400px] h-[400px] rounded-full border border-[#d4b87a]/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div ref={tagsRef} className="mb-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#d4b87a]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d4b87a]/30 bg-[#0a2a1f]/40 backdrop-blur px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4b87a] animate-pulse" />
              Now Open in Tuban
            </span>
            <span className="inline-flex items-center gap-2 text-[#f5f1e8]/60">
              <MapPin className="w-3.5 h-3.5" />
              Jl. Basuki Rachmad No.282
            </span>
          </div>

          {/* Title */}
          <h1
            ref={titleRef}
            className="font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] text-[#f5f1e8] [perspective:600px]"
          >
            Where Family Meets Flavor.
          </h1>

          {/* Sub */}
          <p
            ref={subRef}
            className="mt-8 max-w-xl text-lg md:text-xl text-[#f5f1e8]/70 leading-relaxed"
          >
            D&apos;Sultan Cafe Tuban — ruang elegan untuk kumpul keluarga,
            ngopi santai, dan momen tak terlupakan dalam balutan ambience
            premium.
          </p>

          {/* CTA */}
          <div ref={ctaRef} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/6281332303128"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[#d4b87a] px-7 py-4 text-sm font-medium text-[#061a14] hover:bg-[#e9c97a] transition-all hover:scale-[1.02]"
            >
              Reservasi Sekarang
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-3 rounded-full border border-[#f5f1e8]/20 px-7 py-4 text-sm text-[#f5f1e8] hover:border-[#d4b87a]/60 hover:text-[#d4b87a] transition-colors"
            >
              Lihat Menu
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { v: "5★", l: "Rating Pelanggan" },
              { v: "100+", l: "Menu Spesial" },
              { v: "24/7", l: "Suasana Hangat" },
            ].map((s) => (
              <div key={s.l} className="border-l border-[#d4b87a]/20 pl-4">
                <div className="font-display text-3xl text-[#d4b87a]">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-[#f5f1e8]/50 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#f5f1e8]/40 text-xs uppercase tracking-[0.3em] flex flex-col items-center gap-3">
        <span>Scroll</span>
        <span className="w-px h-12 bg-gradient-to-b from-[#d4b87a]/60 to-transparent" />
      </div>
    </section>
  )
}
