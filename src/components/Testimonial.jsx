import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Quote, Star } from "lucide-react"

const REVIEWS = [
  {
    name: "Aulia & Family",
    role: "Pelanggan Setia",
    quote:
      "Tempat favorit kami akhir pekan. Anak-anak betah, dan menu kopinya juara. D'Sultan benar-benar family friendly.",
    initial: "A",
  },
  {
    name: "Bagas Pratama",
    role: "Founder, Local Studio",
    quote:
      "WiFi cepat, suasana tenang, dan kopi yang konsisten. Sering meeting di sini, klien selalu impressed dengan ambience-nya.",
    initial: "B",
  },
  {
    name: "Citra Larasati",
    role: "Travel Blogger",
    quote:
      "Ambience-nya estetik, pencahayaannya hangat, dan stafnya ramah sekali. Spot must-visit kalau lagi ke Tuban.",
    initial: "C",
  },
  {
    name: "Dimas Wirawan",
    role: "Pelanggan",
    quote:
      "Pernah adain ulang tahun istri di event space-nya. Setup-nya elegan dan pelayanan dari awal sampai akhir tanpa cela.",
    initial: "D",
  },
]

export default function Testimonial() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".test-heading", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.utils.toArray(".test-card").forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 85%" },
          y: 60,
          opacity: 0,
          duration: 1,
          delay: (i % 2) * 0.15,
          ease: "power3.out",
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="testimonial"
      ref={sectionRef}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="test-heading max-w-3xl mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-[#d4b87a]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#d4b87a]">
              Testimonial
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance">
            Kata Mereka tentang{" "}
            <span className="italic text-[#d4b87a]">D&apos;Sultan</span>.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {REVIEWS.map((r, i) => (
            <article
              key={r.name}
              className={`test-card relative group rounded-3xl border border-[#d4b87a]/15 bg-gradient-to-br from-[#0a2a1f]/60 to-[#061a14] p-8 lg:p-10 hover:border-[#d4b87a]/40 transition-all duration-500 ${
                i % 2 === 1 ? "md:translate-y-12" : ""
              }`}
            >
              <Quote
                className="absolute top-6 right-6 w-12 h-12 text-[#d4b87a]/15"
                strokeWidth={1}
              />

              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star
                    key={k}
                    className="w-4 h-4 fill-[#d4b87a] text-[#d4b87a]"
                  />
                ))}
              </div>

              <p className="font-display text-xl lg:text-2xl text-[#f5f1e8] leading-snug text-pretty mb-8">
                &ldquo;{r.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-[#d4b87a]/10">
                <div className="grid place-items-center w-12 h-12 rounded-full bg-[#d4b87a] text-[#061a14] font-display text-xl">
                  {r.initial}
                </div>
                <div>
                  <div className="font-medium text-[#f5f1e8]">{r.name}</div>
                  <div className="text-xs text-[#f5f1e8]/50 uppercase tracking-wider mt-0.5">
                    {r.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
