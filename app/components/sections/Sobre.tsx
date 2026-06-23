"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Sobre() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="sobre" ref={ref} className="py-28 lg:py-40 bg-[#0e0e0e] relative overflow-hidden">
      {/* Large background number */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-black text-white/[0.02] leading-none select-none pointer-events-none pr-8 hidden lg:block"
        style={{ fontFamily: "var(--font-family-display, 'Barlow Condensed', sans-serif)" }}
      >
        GL
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-red-600 text-[10px] font-black tracking-[0.3em] uppercase">02</span>
          <div className="w-12 h-px bg-red-600" />
          <span className="text-white/30 text-[10px] font-bold tracking-[0.3em] uppercase">Quem sou</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: big heading + image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-[5rem] lg:text-[7rem] xl:text-[8rem] font-black text-white uppercase leading-[0.85] tracking-tight mb-10"
              style={{ fontFamily: "var(--font-family-display, 'Barlow Condensed', sans-serif)" }}
            >
              Guilherme
              <br />
              Lubcke<span className="text-red-600"> //</span>
            </h2>

            {/* Photo */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
                alt="Gui Lubcke"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/80 via-transparent to-transparent" />
              {/* Badge */}
              <div className="absolute bottom-0 left-0 p-6">
                <div
                  className="text-6xl font-black text-white leading-none"
                  style={{ fontFamily: "var(--font-family-display, 'Barlow Condensed', sans-serif)" }}
                >
                  10<span className="text-red-600">+</span>
                </div>
                <div className="text-xs text-white/50 uppercase tracking-widest mt-1">Anos de Experiência</div>
              </div>
            </div>
          </motion.div>

          {/* Right: text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:pt-28"
          >
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Sou preparador físico especializado em motociclismo e esportes de performance, com mais de 10 anos transformando atletas em versões mais rápidas e resilientes de si mesmos.
            </p>
            <p className="text-white/40 text-base leading-relaxed mb-12">
              Desenvolvi uma metodologia exclusiva que une condicionamento físico, mentalidade esportiva e técnica de pilotagem — tudo adaptado ao nível e objetivo de cada aluno.
            </p>

            {/* Key points */}
            <div className="flex flex-col gap-0 border-t border-white/5">
              {[
                "Metodologia exclusiva para motociclistas",
                "Acompanhamento 100% personalizado",
                "Foco em segurança e alta performance",
                "Resultado comprovado em pista",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 py-4 border-b border-white/5 group hover:border-red-600/30 transition-colors"
                >
                  <span
                    className="text-red-600 font-black text-sm shrink-0"
                    style={{ fontFamily: "var(--font-family-display, 'Barlow Condensed', sans-serif)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white/60 text-sm group-hover:text-white/90 transition-colors">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contato"
              className="inline-flex items-center gap-3 mt-10 text-xs font-black tracking-[0.25em] uppercase text-white/50 hover:text-white group transition-colors"
            >
              <span className="w-8 h-px bg-red-600 group-hover:w-14 transition-all duration-300" />
              Falar com o Gui
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
