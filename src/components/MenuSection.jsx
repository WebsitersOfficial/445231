import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Download, ArrowUpRight } from "lucide-react"

const MENU_PREVIEW = [
  {
    cat: "Signature Coffee",
    items: [
      { name: "D'Sultan Royal Latte", desc: "Espresso, susu, sirup gula aren khas Tuban", price: "28K" },
      { name: "Pandan Cloud Latte", desc: "Espresso lembut dengan aroma pandan & cream", price: "30K" },
      { name: "Cold Brew Tonik", desc: "Cold brew 12 jam, tonic, lemon segar", price: "32K" },
    ],
  },
  {
    cat: "Mains & Bites",
    items: [
      { name: "Nasi Goreng Sultan", desc: "Nasi goreng kambing premium, telur mata sapi", price: "45K" },
      { name: "Spaghetti Aglio Olio", desc: "Pasta klasik, bawang putih, cabai, parmesan", price: "42K" },
      { name: "Crispy Chicken Wings", desc: "Sayap ayam crispy dengan saus pilihan", price: "38K" },
    ],
  },
]

export default function MenuSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".menu-heading", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.utils.toArray(".menu-col").forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 80%" },
          y: 60,
          opacity: 0,
          duration: 1,
          delay: i * 0.15,
          ease: "power3.out",
        })
      })

      gsap.utils.toArray(".menu-item").forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 90%" },
          y: 30,
          opacity: 0,
          duration: 0.7,
          delay: (i % 3) * 0.08,
          ease: "power2.out",
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-[#050d0a] overflow-hidden"
    >
      {/* Marquee bg word */}
      <div className="pointer-events-none absolute -top-20 left-0 right-0 overflow-hidden opacity-[0.04]">
        <div className="font-display text-[18rem] leading-none whitespace-nowrap animate-marquee">
          Menu &nbsp;·&nbsp; Cuisine &nbsp;·&nbsp; Coffee &nbsp;·&nbsp; Menu
          &nbsp;·&nbsp; Cuisine &nbsp;·&nbsp; Coffee &nbsp;·&nbsp;
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="menu-heading flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-[#d4b87a]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#d4b87a]">
                The Menu
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance">
              Cita Rasa yang{" "}
              <span className="italic text-[#d4b87a]">Bicara</span>.
            </h2>
          </div>
          <p className="max-w-sm text-[#f5f1e8]/60 leading-relaxed">
            Setiap menu kami racik dari bahan terpilih, dipersembahkan dengan
            ketelitian seorang sultan untuk tamu istimewanya.
          </p>
        </div>

        {/* Menu columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {MENU_PREVIEW.map((cat) => (
            <div key={cat.cat} className="menu-col">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#d4b87a]/15">
                <span className="font-display text-3xl text-[#d4b87a]">{cat.cat}</span>
                <span className="ml-auto text-xs text-[#f5f1e8]/40 uppercase tracking-wider">
                  Featured
                </span>
              </div>

              <ul className="space-y-7">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="menu-item group flex items-start justify-between gap-6"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <span className="font-display text-xl lg:text-2xl text-[#f5f1e8] group-hover:text-[#d4b87a] transition-colors">
                          {item.name}
                        </span>
                        <span className="flex-1 h-px border-t border-dotted border-[#d4b87a]/30 mx-1 mt-2" />
                      </div>
                      <p className="mt-2 text-sm text-[#f5f1e8]/60 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="font-display text-xl text-[#d4b87a] tabular-nums shrink-0">
                      {item.price}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 lg:mt-24 rounded-3xl border border-[#d4b87a]/20 bg-gradient-to-br from-[#0a2a1f] to-[#061a14] p-10 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 overflow-hidden relative">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-[#d4b87a]/10" />
          <div className="absolute -bottom-32 -right-10 w-96 h-96 rounded-full border border-[#d4b87a]/5" />

          <div className="relative max-w-xl">
            <div className="text-xs uppercase tracking-[0.3em] text-[#d4b87a] mb-4">
              Full Menu
            </div>
            <h3 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance">
              Jelajahi seluruh menu kami dalam katalog lengkap.
            </h3>
            <p className="mt-4 text-[#f5f1e8]/60">
              Dari kopi signature hingga hidangan utama — semua tersedia dalam
              satu file siap unduh.
            </p>
          </div>

          <a
            href="https://drive.google.com/file/d/1LNAQRv8csXfd61eA1v69saW5ilzB2iHH/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center gap-3 rounded-full bg-[#d4b87a] px-8 py-4 text-sm font-medium text-[#061a14] hover:bg-[#e9c97a] transition-all hover:scale-[1.02] shrink-0"
          >
            <Download className="w-4 h-4" />
            Download Full Menu
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
