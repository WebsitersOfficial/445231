import { useEffect } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Gallery from "./components/Gallery.jsx"
import Facilities from "./components/Facilities.jsx"
import MenuSection from "./components/MenuSection.jsx"
import Testimonial from "./components/Testimonial.jsx"
import Footer from "./components/Footer.jsx"

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    })

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update)

    const raf = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <main className="relative min-h-screen bg-[#061a14] text-[#f5f1e8] grain overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Facilities />
      <MenuSection />
      <Testimonial />
      <Footer />
    </main>
  )
}
