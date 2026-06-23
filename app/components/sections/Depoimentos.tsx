"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"

const depoimentos = [
  {
    nome: "Carlos M.",
    cargo: "Piloto amador",
    texto: "O Gui mudou completamente minha relação com a moto. Em 3 meses de treino, minha confiança nas curvas dobrou. A metodologia dele é diferente de tudo que já vi.",
    estrelas: 5,
  },
  {
    nome: "Rafael S.",
    cargo: "Motociclista recreativo",
    texto: "Comecei do zero e hoje me sinto muito mais seguro nas estradas. O treinamento físico junto com a técnica de pilotagem fez toda a diferença.",
    estrelas: 5,
  },
  {
    nome: "André P.",
    cargo: "Piloto de enduro",
    texto: "Preparação impecável para a temporada. O Gui entende profundamente as necessidades de cada piloto. Recomendo a todos que querem evoluir.",
    estrelas: 5,
  },
  {
    nome: "Lucas T.",
    cargo: "Piloto de trilha",
    texto: "Fiz o treinamento de pilotagem defensiva e foi um divisor de águas. Aprendi a ler a pista e tomar decisões muito mais rápidas e seguras.",
    estrelas: 5,
  },
]

export default function Depoimentos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="depoimentos" ref={ref} className="py-24 lg:py-36 bg-[#0d0d0d] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-orange-500" />
            <span
              className="text-orange-400 text-xs font-bold tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Resultados reais
            </span>
          </div>
          <h2
            className="text-5xl lg:text-6xl font-black text-white uppercase leading-[1.0]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            O que dizem
            <span className="text-orange-500 block">meus alunos</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-px bg-white/5">
          {depoimentos.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#0d0d0d] hover:bg-[#141414] transition-colors duration-300 p-8 lg:p-10 group"
            >
              {/* Estrelas */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: d.estrelas }).map((_, j) => (
                  <Star key={j} size={14} className="text-orange-500 fill-orange-500" />
                ))}
              </div>

              <p className="text-gray-300 text-base leading-relaxed mb-8 italic">"{d.texto}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                  <span
                    className="text-orange-500 font-black text-sm"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {d.nome[0]}
                  </span>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{d.nome}</div>
                  <div className="text-gray-600 text-xs uppercase tracking-wider">{d.cargo}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
