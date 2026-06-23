"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Share2 } from "lucide-react"

const links = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/50" : "bg-transparent"
      }`}
    >
      <div className="absolute bottom-0 left-0 h-[2px] bg-orange-500 transition-all duration-100" style={{ width: `${progress}%` }} />

      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-orange-500 rounded-sm flex items-center justify-center">
            <span className="text-black font-black text-sm" style={{ fontFamily: "var(--font-display)" }}>GL</span>
          </div>
          <span className="text-white font-bold text-lg tracking-widest uppercase" style={{ fontFamily: "var(--font-display)" }}>
            Gui Lubcke
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/60 hover:text-orange-400 transition-colors tracking-wider uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/guilubcketreinador"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black px-5 py-2.5 font-bold text-sm tracking-widest uppercase transition-all duration-200 hover:scale-105"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <Share2 size={15} /> Instagram
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white hover:text-orange-400 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-black/98 border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white/70 hover:text-orange-400 font-semibold text-lg tracking-wider uppercase transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://www.instagram.com/guilubcketreinador"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-orange-500 text-black px-5 py-3 font-bold text-sm tracking-widest uppercase w-fit"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Share2 size={15} /> Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
