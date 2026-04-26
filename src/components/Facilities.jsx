import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Wifi, Car, Sun, Calendar, UtensilsCrossed, Music } from "lucide-react"

const FACILITIES = [
  {
    icon: Wifi,
    title: "Free High-Speed WiFi",
    desc: "Koneksi cepat dan stabil di seluruh area cafe untuk kerja, meeting, atau sekadar streaming.",
  },
  {
    icon: Car,
    title: "Area Parkir Luas",
    desc: "Lahan parkir yang aman dan luas, mampu menampung mobil dan motor tanpa antrean.",
  },
  {
    icon: Sun,
    title: "Indoor & Outdoor Seating",
    desc: "Pilih kenyamanan: ruang ber-AC sejuk atau teras outdoor dengan pemandangan terbuka.",
  },
  {
    icon: Calendar,
    title: "Event Space",
    desc: "Ruang khusus untuk arisan, ulang tahun, gathering, hingga private dinner kapasitas hingga 50 tamu.",
  },
  {
    icon: UtensilsCrossed,
    title: "Family-Friendly Menu",
    desc: "Pilihan menu lengkap untuk semua usia, dari kopi spesial hingga kuliner berat ramah anak.",
  },
  {
    icon: Music,
    title: "Live Acoustic Nights",
    desc: "Nikmati alunan akustik di akhir pekan yang membuat momen Anda semakin berkesan.",
  },
]

export default function Facilities() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fac-heading", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.utils.toArray(".fac-card").forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 85%" },
          y: 60,
          opacity: 0,
          duration: 0.9,
          delay: (i % 3) * 0.08,
          ease: "power3.out",
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="facilities"
      ref={sectionRef}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="fac-heading max-w-3xl mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-[#d4b87a]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#d4b87a]">
              Facilities
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance">
            Setiap Detail, Dirancang untuk{" "}
            <span className="italic text-[#d4b87a]">Anda</span>.
          </h2>
          <p className="mt-6 text-lg text-[#f5f1e8]/60 max-w-xl">
            Kami percaya kenyamanan terbaik lahir dari perhatian terhadap hal
            kecil. Inilah yang menanti Anda di D&apos;Sultan.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#d4b87a]/15">
          {FACILITIES.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="fac-card group relative bg-[#061a14] p-8 lg:p-10 hover:bg-[#0a2a1f] transition-colors duration-500"
              >
                {/* Number */}
                <div className="absolute top-6 right-6 font-display text-sm text-[#d4b87a]/40 tabular-nums">
                  0{i + 1}
                </div>

                {/* Icon */}
                <div className="inline-grid place-items-center w-14 h-14 rounded-2xl border border-[#d4b87a]/30 bg-[#0a2a1f]/60 text-[#d4b87a] mb-6 group-hover:border-[#d4b87a]/70 group-hover:rotate-6 transition-all duration-500">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>

                <h3 className="font-display text-2xl lg:text-3xl text-[#f5f1e8] mb-3 group-hover:text-[#d4b87a] transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-[#f5f1e8]/60 leading-relaxed">
                  {f.desc}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#d4b87a] group-hover:w-full transition-all duration-700" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
