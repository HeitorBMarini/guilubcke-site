"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="relative py-24 lg:py-36 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500" />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-950/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-orange-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span
            className="inline-block text-orange-400 text-xs font-bold tracking-[0.3em] uppercase border border-orange-500/30 bg-orange-500/5 px-4 py-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Vamos juntos
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-black text-white uppercase leading-[1.02] tracking-tight mb-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Pronto para
          <span className="text-orange-500 block">Acelerar?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
        >
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm uppercase tracking-wider">
            Entre em contato agora e dê o primeiro passo para transformar sua pilotagem.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#contato"
              className="inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-black font-black text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:scale-105"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Fale comigo <ArrowRight size={16} />
            </a>
            <a
              href="https://www.instagram.com/guilubcketreinador"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-white/20 text-white/70 hover:text-white hover:border-white/50 font-black text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ver Instagram
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-16 h-px bg-gradient-to-r from-orange-500 via-orange-500/40 to-transparent origin-left"
        />
      </div>
    </section>
  )
}
