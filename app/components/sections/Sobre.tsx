"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2 } from "lucide-react"

const diferenciais = [
  "Metodologia exclusiva para motociclistas",
  "Treinamento físico e técnico integrado",
  "Acompanhamento personalizado",
  "Foco em segurança e performance",
  "Experiência comprovada nas pistas",
  "Atendimento individual e em grupos",
]

export default function Sobre() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="sobre" ref={ref} className="py-24 lg:py-36 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500/30" />

      {/* Grid decorativo */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80"
                alt="Gui Lubcke"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {/* Borda laranja */}
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-orange-500/30 pointer-events-none" />
            </div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-5 -right-5 lg:-right-8 bg-orange-500 text-black px-6 py-5 shadow-2xl shadow-orange-900/50"
            >
              <div className="text-3xl font-black leading-none" style={{ fontFamily: "var(--font-display)" }}>10+</div>
              <div className="text-black/70 text-xs mt-1 font-semibold uppercase tracking-wider">Anos de experiência</div>
            </motion.div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="pt-8 lg:pt-0"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-orange-500" />
              <span
                className="text-orange-400 text-xs font-bold tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Quem sou
              </span>
            </div>

            <h2
              className="text-5xl lg:text-6xl font-black text-white uppercase leading-[1.0] mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Guilherme
              <span className="text-orange-500 block">Lubcke</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-5 text-base lg:text-[1.05rem]">
              Sou treinador especializado em motociclismo, com mais de 10 anos dedicados a transformar motociclistas em pilotos mais seguros, rápidos e confiantes.
            </p>
            <p className="text-gray-400 leading-relaxed mb-10 text-base lg:text-[1.05rem]">
              Desenvolvi uma metodologia exclusiva que une treinamento físico, técnica de pilotagem e mentalidade competitiva — tudo adaptado ao nível e objetivo de cada aluno.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {diferenciais.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                  className="flex items-start gap-3 bg-white/[0.03] border border-white/5 rounded-sm px-4 py-3.5 hover:border-orange-500/30 transition-colors"
                >
                  <CheckCircle2 size={16} className="text-orange-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-300 leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
