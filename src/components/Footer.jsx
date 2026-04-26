import { Instagram, MapPin, Phone, Clock, Coffee, ArrowUpRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-[#050d0a] border-t border-[#d4b87a]/15 pt-24 pb-10 overflow-hidden">
      {/* Big mark */}
      <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 font-display text-[18rem] md:text-[26rem] leading-none text-[#0a2a1f]/40 select-none whitespace-nowrap">
        D&apos;Sultan
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Big CTA */}
        <div className="border-b border-[#d4b87a]/15 pb-16 mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-3xl text-balance">
              Mari kita ciptakan{" "}
              <span className="italic text-[#d4b87a]">momen istimewa</span>{" "}
              bersama.
            </h2>
            <a
              href="https://wa.me/6281332303128"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[#d4b87a] px-8 py-4 text-sm font-medium text-[#061a14] hover:bg-[#e9c97a] transition-all hover:scale-[1.02] shrink-0"
            >
              Reservasi via WhatsApp
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <span className="grid place-items-center w-10 h-10 rounded-full border border-[#d4b87a]/40 bg-[#0a2a1f] text-[#d4b87a]">
                <Coffee className="w-4 h-4" />
              </span>
              <span className="font-display text-2xl text-[#f5f1e8]">
                D&apos;Sultan<span className="text-[#d4b87a]">.</span>
              </span>
            </div>
            <p className="text-[#f5f1e8]/60 leading-relaxed max-w-md">
              Family &amp; hangout friendly cafe di jantung kota Tuban. Tempat
              di mana cita rasa, kenyamanan, dan kebersamaan bertemu.
            </p>

            {/* Social */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://instagram.com/dsultan.id"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-[#d4b87a]/30 px-5 py-2.5 text-sm text-[#f5f1e8] hover:border-[#d4b87a] hover:bg-[#d4b87a] hover:text-[#061a14] transition-all"
              >
                <Instagram className="w-4 h-4" />
                @dsultan.id
              </a>
            </div>
          </div>

          {/* Visit */}
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.25em] text-[#d4b87a] mb-5">
              Lokasi
            </div>
            <ul className="space-y-4 text-sm text-[#f5f1e8]/70">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#d4b87a] flex-shrink-0" />
                <span>
                  Jl. Basuki Rachmad No.282
                  <br />
                  Tuban, Jawa Timur
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-[#d4b87a] flex-shrink-0" />
                <span>
                  Senin – Minggu
                  <br />
                  10:00 – 23:00 WIB
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-[0.25em] text-[#d4b87a] mb-5">
              Kontak
            </div>
            <ul className="space-y-3 text-sm text-[#f5f1e8]/70">
              <li>
                <a
                  href="https://wa.me/6281332303128"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#d4b87a] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +62 813-3230-3128
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/dsultan.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#d4b87a] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Nav */}
          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-[0.25em] text-[#d4b87a] mb-5">
              Navigasi
            </div>
            <ul className="space-y-3 text-sm text-[#f5f1e8]/70">
              {[
                { l: "Tentang", h: "#about" },
                { l: "Galeri", h: "#gallery" },
                { l: "Fasilitas", h: "#facilities" },
                { l: "Menu", h: "#menu" },
                { l: "Ulasan", h: "#testimonial" },
              ].map((i) => (
                <li key={i.h}>
                  <a
                    href={i.h}
                    className="hover:text-[#d4b87a] transition-colors"
                  >
                    {i.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-[#d4b87a]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#f5f1e8]/40">
          <div>
            © {new Date().getFullYear()} D&apos;Sultan Cafe Tuban. Dikembangkan Oleh Websiters.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4b87a]" />
            Crafted with warmth in Tuban, Indonesia
          </div>
        </div>
      </div>
    </footer>
  )
}
