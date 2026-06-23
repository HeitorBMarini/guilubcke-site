"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const etapas = [
  {
    num: "01",
    title: "Avaliação Inicial",
    desc: "Análise completa do seu nível atual — técnica de pilotagem, condicionamento físico e objetivos pessoais.",
  },
  {
    num: "02",
    title: "Plano Personalizado",
    desc: "Desenvolvimento de um programa exclusivo para as suas necessidades, tempo disponível e metas.",
  },
  {
    num: "03",
    title: "Treinamento em Pista",
    desc: "Sessões práticas com foco em técnica, segurança e evolução progressiva. Feedback em tempo real.",
  },
  {
    num: "04",
    title: "Condicionamento Físico",
    desc: "Treinos de força, resistência e mobilidade específicos para o desempenho no guidão.",
  },
  {
    num: "05",
    title: "Análise de Performance",
    desc: "Revisão periódica dos resultados com ajustes no programa para garantir evolução contínua.",
  },
  {
    num: "06",
    title: "Resultado Comprovado",
    desc: "Pilotagem mais segura, rápida e confiante. Você avança para o próximo nível.",
  },
]

export default function Metodologia() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="metodologia" ref={ref} className="py-24 lg:py-36 bg-[#0a0a0a] relative overflow-hidden">
      {/* BG decorativo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16">

          {/* Título fixo à esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:sticky lg:top-28 h-fit"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-orange-500" />
              <span
                className="text-orange-400 text-xs font-bold tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Como funciona
              </span>
            </div>
            <h2
              className="text-5xl lg:text-6xl font-black text-white uppercase leading-[1.0] mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Minha
              <span className="text-orange-500 block">Metodologia</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Um processo estruturado e comprovado que garante evolução real — do iniciante ao piloto competitivo.
            </p>
          </motion.div>

          {/* Etapas */}
          <div className="lg:col-span-3 flex flex-col gap-0">
            {etapas.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group flex gap-6 py-8 border-b border-white/5 hover:border-orange-500/30 transition-colors last:border-b-0"
              >
                <span
                  className="text-4xl font-black text-white/10 group-hover:text-orange-500/30 transition-colors shrink-0 w-14"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {e.num}
                </span>
                <div>
                  <h3
                    className="text-xl font-black text-white uppercase mb-2 group-hover:text-orange-400 transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {e.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
