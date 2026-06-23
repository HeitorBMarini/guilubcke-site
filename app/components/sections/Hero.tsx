"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, Play } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1920&q=80')",
        }}
      />
      {/* Overlay gradientes */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

      {/* Linha laranja lateral */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500" />

      {/* Detalhe geométrico */}
      <div className="absolute top-1/3 right-16 lg:right-32 w-px h-48 bg-orange-500/30 hidden lg:block" />
      <div className="absolute top-1/3 right-20 lg:right-36 w-px h-32 bg-white/10 hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 pt-28 pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-orange-500" />
            <span
              className="text-orange-400 text-xs font-bold tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Treinador de Motociclismo
            </span>
          </motion.div>

          {/* Heading */}
          <h1
            className="text-6xl sm:text-7xl lg:text-[7rem] font-black text-white uppercase leading-[0.95] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Acelere seu
            <span className="text-orange-500 block">Desempenho.</span>
          </h1>

          <p className="text-gray-400 text-base lg:text-lg leading-relaxed mb-10 max-w-xl">
            Treinamento especializado para motociclistas. Técnica, condicionamento físico e mentalidade para você ir mais longe — com segurança e confiança.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-black font-bold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Começar agora <ArrowRight size={16} />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2.5 border border-white/20 text-white/80 hover:text-white hover:border-white/50 font-bold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <Play size={14} /> Conhecer mais
            </a>
          </div>

          {/* Stats rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex gap-10 mt-16 pt-10 border-t border-white/10"
          >
            {[
              { value: "500+", label: "Alunos treinados" },
              { value: "10+", label: "Anos de experiência" },
              { value: "100%", label: "Dedicação" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-3xl font-black text-orange-500"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <span className="text-white/30 text-[10px] tracking-[0.25em] uppercase group-hover:text-orange-400 transition-colors">Scroll</span>
        <ChevronDown size={18} className="text-white/30 group-hover:text-orange-400 transition-colors" />
      </motion.a>
    </section>
  )
}
