import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function About() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const headingRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
      })

      // Parallax on image
      gsap.to(imageRef.current.querySelector("img"), {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: -80,
        ease: "none",
      })

      gsap.utils.toArray(".about-fade").forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
          y: 40,
          opacity: 0,
          duration: 0.9,
          delay: i * 0.1,
          ease: "power3.out",
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Decoration */}
      <div className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 text-[20rem] font-display text-[#0a2a1f]/40 select-none whitespace-nowrap">
        ABOUT
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px w-12 bg-[#d4b87a]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#d4b87a]">
            Our Story
          </span>
        </div>

        <h2
          ref={headingRef}
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl text-balance"
        >
          A Sanctuary for{" "}
          <span className="italic text-[#d4b87a]">Family</span> &amp;
          <br />
          Effortless <span className="italic text-[#d4b87a]">Hangouts</span>.
        </h2>

        {/* Asymmetric grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Image — wide, left-side, offset */}
          <div className="lg:col-span-7 lg:-mt-10">
            <div ref={imageRef} className="relative group">
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] lg:aspect-[5/6]">
                <img
                  src="/images/about-cafe.jpg"
                  alt="Family enjoying time at D'Sultan Cafe"
                  className="w-full h-[110%] object-cover -translate-y-[5%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061a14]/60 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 lg:-right-10 bg-[#d4b87a] text-[#061a14] rounded-2xl p-6 shadow-2xl max-w-[220px]">
                <div className="font-display text-4xl leading-none">2024</div>
                <div className="text-xs uppercase tracking-wider mt-2 opacity-80">
                  Tahun didirikan dengan cinta
                </div>
              </div>
            </div>
          </div>

          {/* Text — right column, offset down */}
          <div className="lg:col-span-5 lg:mt-32 space-y-8">
            <p className="about-fade text-lg lg:text-xl text-[#f5f1e8]/80 leading-relaxed text-pretty">
              Di D&apos;Sultan, kami percaya bahwa cafe yang baik adalah lebih
              dari sekadar tempat ngopi. Ia adalah ruang temu — tempat tawa
              keluarga, obrolan sahabat, dan momen tenang bersatu dalam
              ambience yang hangat.
            </p>

            <p className="about-fade text-base text-[#f5f1e8]/60 leading-relaxed">
              Setiap detail kami rancang dengan hati: dari pencahayaan lembut,
              pilihan musik akustik, hingga kursi yang nyaman untuk anak-anak
              maupun dewasa. Inilah definisi kami tentang{" "}
              <span className="text-[#d4b87a]">Family &amp; Hangout Friendly</span>.
            </p>

            {/* Pillars */}
            <div className="about-fade grid grid-cols-2 gap-px bg-[#d4b87a]/10 mt-12">
              {[
                { t: "Family Friendly", d: "Ramah anak & keluarga" },
                { t: "Premium Vibe", d: "Interior elegan & nyaman" },
                { t: "Quality Coffee", d: "Biji pilihan setiap hari" },
                { t: "Local Heart", d: "Kebanggaan kota Tuban" },
              ].map((p) => (
                <div
                  key={p.t}
                  className="bg-[#061a14] p-6 hover:bg-[#0a2a1f] transition-colors"
                >
                  <div className="font-display text-xl text-[#d4b87a]">
                    {p.t}
                  </div>
                  <div className="text-sm text-[#f5f1e8]/60 mt-1">{p.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
