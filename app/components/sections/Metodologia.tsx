"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const etapas = [
  { num: "01", title: "Avaliação Inicial", desc: "Análise completa do seu nível — técnica de pilotagem, condicionamento físico e objetivos." },
  { num: "02", title: "Plano Personalizado", desc: "Programa exclusivo para suas necessidades, tempo disponível e metas de curto e longo prazo." },
  { num: "03", title: "Treino em Pista", desc: "Sessões práticas com foco em técnica, segurança e evolução progressiva. Feedback em tempo real." },
  { num: "04", title: "Condicionamento", desc: "Treinos de força, resistência e mobilidade específicos para o desempenho no guidão." },
  { num: "05", title: "Análise de Performance", desc: "Revisão periódica com ajustes no programa para garantir evolução contínua." },
  { num: "06", title: "Resultado Comprovado", desc: "Pilotagem mais segura, rápida e confiante. Pronto para o próximo nível." },
]

export default function Metodologia() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="metodologia" ref={ref} className="py-28 lg:py-40 bg-[#0e0e0e] relative overflow-hidden">
      {/* Background text */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 text-[18rem] font-black text-white/[0.015] leading-none select-none pointer-events-none hidden lg:block"
        style={{ fontFamily: "var(--font-family-display, 'Barlow Condensed', sans-serif)" }}
      >
        MET
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-red-600 text-[10px] font-black tracking-[0.3em] uppercase">04</span>
          <div className="w-12 h-px bg-red-600" />
          <span className="text-white/30 text-[10px] font-bold tracking-[0.3em] uppercase">Como funciona</span>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Sticky title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:sticky lg:top-28 h-fit"
          >
            <h2
              className="text-[4.5rem] lg:text-[6rem] font-black text-white uppercase leading-[0.86] mb-8"
              style={{ fontFamily: "var(--font-family-display, 'Barlow Condensed', sans-serif)" }}
            >
              Minha
              <br />
              metodo
              <span className="text-red-600">//</span>
              <br />
              logia
            </h2>
            <p className="text-white/35 text-sm leading-relaxed">
              Um processo estruturado e comprovado que garante evolução real — do iniciante ao piloto competitivo.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="lg:col-span-3 flex flex-col">
            {etapas.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group flex items-start gap-6 py-7 border-b border-white/5 hover:border-red-600/25 transition-colors last:border-b-0"
              >
                <span
                  className="text-[2.5rem] font-black leading-none shrink-0 text-white/8 group-hover:text-red-600/25 transition-colors w-16 pt-1"
                  style={{ fontFamily: "var(--font-family-display, 'Barlow Condensed', sans-serif)" }}
                >
                  {e.num}
                </span>
                <div className="pt-1">
                  <h3
                    className="text-lg font-black text-white uppercase mb-2 group-hover:text-red-500 transition-colors"
                    style={{ fontFamily: "var(--font-family-display, 'Barlow Condensed', sans-serif)" }}
                  >
                    {e.title}
                  </h3>
                  <p className="text-white/35 text-sm leading-relaxed">{e.desc}</p>
                </div>
                <div className="ml-auto self-center opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                  <span className="text-red-600 text-xl font-black">//</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
