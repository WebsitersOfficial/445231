import { useEffect, useState } from "react"
import { Menu, X, Coffee } from "lucide-react"

const NAV_ITEMS = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Galeri", href: "#gallery" },
  { label: "Fasilitas", href: "#facilities" },
  { label: "Menu", href: "#menu" },
  { label: "Ulasan", href: "#testimonial" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between rounded-full border transition-all duration-500 ${
            scrolled
              ? "border-[#d4b87a]/20 bg-[#061a14]/70 backdrop-blur-xl px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "border-transparent bg-transparent px-2 py-2"
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group pl-3">
            <span className="grid place-items-center w-9 h-9 rounded-full border border-[#d4b87a]/40 bg-[#0a2a1f]/60 text-[#d4b87a] group-hover:rotate-12 transition-transform duration-500">
              <Coffee className="w-4 h-4" />
            </span>
            <span className="font-display text-xl tracking-tight text-[#f5f1e8]">
              D&apos;Sultan
              <span className="text-[#d4b87a]">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative px-4 py-2 text-sm text-[#f5f1e8]/80 hover:text-[#d4b87a] transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/6281332303128"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#d4b87a] px-5 py-2.5 text-sm font-medium text-[#061a14] hover:bg-[#e9c97a] transition-colors"
            >
              Reservasi
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden grid place-items-center w-10 h-10 rounded-full border border-[#d4b87a]/30 text-[#f5f1e8] mr-1"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden mt-3 rounded-3xl border border-[#d4b87a]/20 bg-[#061a14]/95 backdrop-blur-xl p-6 shadow-2xl">
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-xl text-[#f5f1e8]/90 hover:bg-[#0a2a1f] hover:text-[#d4b87a] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/6281332303128"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#d4b87a] px-5 py-3 text-sm font-medium text-[#061a14]"
            >
              Reservasi via WhatsApp
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
