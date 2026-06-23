"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section ref={ref} className="relative py-28 lg:py-40 bg-[#0e0e0e] overflow-hidden noise-overlay">
      {/* Full-width red bar behind heading area */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-40 bg-red-600 hidden lg:block" />

      {/* Background text */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
        style={{ fontFamily: "var(--font-family-display, 'Barlow Condensed', sans-serif)" }}
      >
        <span className="text-[20rem] font-black text-white/[0.015] uppercase leading-none whitespace-nowrap">GO</span>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-red-600 text-[10px] font-black tracking-[0.3em] uppercase">06</span>
          <div className="w-12 h-px bg-red-600" />
          <span className="text-white/30 text-[10px] font-bold tracking-[0.3em] uppercase">Próximo passo</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-[5rem] sm:text-[7rem] lg:text-[10rem] font-black text-white uppercase leading-[0.83] tracking-tight mb-14"
          style={{ fontFamily: "var(--font-family-display, 'Barlow Condensed', sans-serif)" }}
        >
          Pronto
          <br />
          para
          <br />
          acelerar<span className="text-red-600"> //</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
        >
          <a
            href="#contato"
            className="group inline-flex items-center gap-4 bg-red-600 hover:bg-red-700 text-white font-black text-sm tracking-[0.2em] uppercase px-10 py-5 transition-all duration-200 hover:scale-[1.03]"
          >
            Agendar agora
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="https://www.instagram.com/guilubcketreinador"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xs font-black tracking-[0.25em] uppercase text-white/40 hover:text-white group transition-colors"
          >
            <span className="w-8 h-px bg-white/20 group-hover:bg-red-600 group-hover:w-12 transition-all duration-300" />
            Ver Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
