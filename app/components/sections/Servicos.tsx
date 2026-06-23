"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Bike, Dumbbell, Target, Users, Shield, Trophy } from "lucide-react"

const servicos = [
  {
    icon: Bike,
    title: "Treinamento de Pilotagem",
    desc: "Aperfeiçoe sua técnica nas curvas, frenagem, aceleração e posição no guidão. Do básico ao avançado.",
    tag: "Técnica",
  },
  {
    icon: Dumbbell,
    title: "Condicionamento Físico",
    desc: "Programa de treino físico específico para motociclistas: força, resistência, flexibilidade e equilíbrio.",
    tag: "Físico",
  },
  {
    icon: Target,
    title: "Mentoria Individual",
    desc: "Acompanhamento personalizado com análise de performance, metas e evolução contínua.",
    tag: "1:1",
  },
  {
    icon: Users,
    title: "Treinos em Grupo",
    desc: "Sessões coletivas em pista com feedback imediato e aprendizado colaborativo.",
    tag: "Grupo",
  },
  {
    icon: Shield,
    title: "Pilotagem Defensiva",
    desc: "Técnicas de segurança, leitura de pista e tomada de decisão para reduzir riscos.",
    tag: "Segurança",
  },
  {
    icon: Trophy,
    title: "Preparação para Competição",
    desc: "Treinamento intensivo focado em resultados para pilotos que querem competir.",
    tag: "Competição",
  },
]

export default function Servicos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="servicos" ref={ref} className="py-24 lg:py-36 bg-[#0d0d0d] relative">
      {/* Linha laranja no topo */}
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
              O que ofereço
            </span>
          </div>
          <h2
            className="text-5xl lg:text-6xl font-black text-white uppercase leading-[1.0] max-w-xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Serviços
            <span className="text-orange-500 block">Especializados</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {servicos.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-[#0d0d0d] p-8 lg:p-10 hover:bg-[#141414] transition-colors duration-300 relative overflow-hidden"
              >
                {/* Hover accent */}
                <div className="absolute top-0 left-0 w-full h-px bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <Icon size={22} className="text-orange-400" />
                  </div>
                  <span
                    className="text-xs text-orange-500/60 font-bold tracking-widest uppercase border border-orange-500/20 px-2 py-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.tag}
                  </span>
                </div>

                <h3
                  className="text-xl font-black text-white uppercase mb-3 group-hover:text-orange-400 transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
    </section>
  )
}
