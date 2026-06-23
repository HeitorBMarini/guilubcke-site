"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const depoimentos = [
  { nome: "Carlos M.", cargo: "Piloto Amador", texto: "O Gui mudou completamente minha relação com a moto. Em 3 meses minha confiança nas curvas dobrou. A metodologia dele é diferente de tudo que já vi." },
  { nome: "Rafael S.", cargo: "Motociclista Recreativo", texto: "Comecei do zero e hoje me sinto muito mais seguro nas estradas. O treinamento físico junto com a técnica de pilotagem fez toda a diferença." },
  { nome: "André P.", cargo: "Piloto de Enduro", texto: "Preparação impecável para a temporada. O Gui entende profundamente as necessidades de cada piloto. Recomendo a todos que querem evoluir." },
  { nome: "Lucas T.", cargo: "Piloto de Trilha", texto: "Fiz o treinamento de pilotagem defensiva e foi um divisor de águas. Aprendi a ler a pista e tomar decisões muito mais rápidas e seguras." },
]

export default function Depoimentos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? depoimentos.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === depoimentos.length - 1 ? 0 : c + 1))
  const d = depoimentos[current]

  return (
    <section id="depoimentos" ref={ref} className="py-28 lg:py-40 bg-[#111] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5" />

      {/* Large quote mark */}
      <div
        className="absolute left-8 lg:left-14 top-16 text-[12rem] font-black text-white/[0.025] leading-none select-none pointer-events-none"
        style={{ fontFamily: "var(--font-family-display, 'Barlow Condensed', sans-serif)" }}
      >
        "
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-red-600 text-[10px] font-black tracking-[0.3em] uppercase">05</span>
          <div className="w-12 h-px bg-red-600" />
          <span className="text-white/30 text-[10px] font-bold tracking-[0.3em] uppercase">Depoimentos</span>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2
              className="text-[4.5rem] lg:text-[5.5rem] font-black text-white uppercase leading-[0.86]"
              style={{ fontFamily: "var(--font-family-display, 'Barlow Condensed', sans-serif)" }}
            >
              O que
              <br />
              dizem<span className="text-red-600"> //</span>
            </h2>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-12">
              <button
                onClick={prev}
                className="w-10 h-10 border border-white/10 hover:border-red-600 flex items-center justify-center text-white/40 hover:text-red-500 transition-all duration-200"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-white/20 text-sm">
                <span className="text-white/60 font-bold">{String(current + 1).padStart(2, "0")}</span>
                {" "}/ {String(depoimentos.length).padStart(2, "0")}
              </span>
              <button
                onClick={next}
                className="w-10 h-10 border border-white/10 hover:border-red-600 flex items-center justify-center text-white/40 hover:text-red-500 transition-all duration-200"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* Right: quote */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3"
          >
            <p className="text-white/70 text-xl lg:text-2xl leading-relaxed mb-10 font-light">
              "{d.texto}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center shrink-0">
                <span
                  className="text-white font-black text-sm"
                  style={{ fontFamily: "var(--font-family-display, 'Barlow Condensed', sans-serif)" }}
                >
                  {d.nome[0]}
                </span>
              </div>
              <div>
                <div className="text-white font-bold text-sm">{d.nome}</div>
                <div className="text-white/30 text-xs uppercase tracking-wider">{d.cargo}</div>
              </div>
              <div className="ml-auto text-red-600 font-black text-2xl" style={{ fontFamily: "var(--font-family-display, 'Barlow Condensed', sans-serif)" }}>
                //
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-12">
          {depoimentos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[2px] transition-all duration-300 ${i === current ? "bg-red-600 w-8" : "bg-white/15 w-4 hover:bg-white/30"}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
    </section>
  )
}
