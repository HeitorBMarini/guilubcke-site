"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Bike, Dumbbell, Target, Users, Shield, Trophy } from "lucide-react"

const servicos = [
  { icon: Bike, num: "01", title: "Pilotagem", tag: "Técnica", desc: "Aperfeiçoe curvas, frenagem e posição. Do básico ao avançado." },
  { icon: Dumbbell, num: "02", title: "Condicionamento", tag: "Físico", desc: "Força, resistência e flexibilidade específicos para motociclistas." },
  { icon: Target, num: "03", title: "Mentoria 1:1", tag: "Individual", desc: "Acompanhamento com análise de performance e metas personalizadas." },
  { icon: Users, num: "04", title: "Treino em Grupo", tag: "Coletivo", desc: "Sessões em pista com feedback imediato e aprendizado colaborativo." },
  { icon: Shield, num: "05", title: "Pilotagem Defensiva", tag: "Segurança", desc: "Leitura de pista e tomada de decisão para reduzir riscos." },
  { icon: Trophy, num: "06", title: "Prep. Competição", tag: "Elite", desc: "Treinamento intensivo para pilotos que querem competir." },
]

export default function Servicos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="servicos" ref={ref} className="py-28 lg:py-40 bg-[#111] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-14">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="text-red-600 text-[10px] font-black tracking-[0.3em] uppercase">03</span>
              <div className="w-12 h-px bg-red-600" />
              <span className="text-white/30 text-[10px] font-bold tracking-[0.3em] uppercase">Serviços</span>
            </div>
            <h2
              className="text-[4rem] lg:text-[5.5rem] font-black text-white uppercase leading-[0.88]"
              style={{ fontFamily: "var(--font-family-display, 'Barlow Condensed', sans-serif)" }}
            >
              O que
              <br />
              ofereço<span className="text-red-600"> //</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/35 text-sm leading-relaxed max-w-xs lg:text-right"
          >
            Cada serviço é desenhado para extrair o melhor de você — na pista e fora dela.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {servicos.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group relative bg-[#111] p-8 lg:p-10 hover:bg-[#161616] transition-colors duration-300 overflow-hidden cursor-default"
              >
                {/* Top reveal line on hover */}
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-red-600 transition-all duration-500" />

                <div className="flex items-start justify-between mb-8">
                  <span
                    className="text-5xl font-black text-white/6 leading-none group-hover:text-white/10 transition-colors"
                    style={{ fontFamily: "var(--font-family-display, 'Barlow Condensed', sans-serif)" }}
                  >
                    {s.num}
                  </span>
                  <span className="text-[9px] font-black tracking-[0.25em] uppercase text-red-600/50 border border-red-600/20 px-2 py-1">
                    {s.tag}
                  </span>
                </div>

                <div className="w-8 h-8 mb-5 flex items-center justify-center text-red-600/70 group-hover:text-red-600 transition-colors">
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                <h3
                  className="text-xl font-black text-white uppercase mb-3 group-hover:text-red-500 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-family-display, 'Barlow Condensed', sans-serif)" }}
                >
                  {s.title} <span className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">//</span>
                </h3>
                <p className="text-white/35 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
    </section>
  )
}
