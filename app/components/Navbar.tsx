"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Depoimentos", href: "#depoimentos" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0e0e0e]/95 backdrop-blur-sm border-b border-white/5" : ""
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-6 lg:px-14 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span
            className="text-xl font-black uppercase tracking-[0.12em] text-white"
            style={{ fontFamily: "var(--font-family-display, 'Barlow Condensed', sans-serif)" }}
          >
            GUI <span className="text-red-600">LUBCKE</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] font-bold text-white/40 hover:text-white transition-colors tracking-[0.18em] uppercase"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contato"
            className="text-[11px] font-black tracking-[0.2em] uppercase border border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-5 py-2.5 transition-all duration-200"
          >
            Agendar treino
          </a>
        </div>

        {/* Mobile */}
        <button className="lg:hidden text-white/70 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0e0e0e] border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white/60 hover:text-white font-bold text-base tracking-wider uppercase transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="border border-red-600 text-red-500 text-xs font-black tracking-widest uppercase px-5 py-3 w-fit mt-2"
              >
                Agendar treino
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
