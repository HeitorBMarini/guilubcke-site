"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const stats = [
  { num: "+10", label: "Anos como\nCoach" },
  { num: "+887", label: "Seguidores\nno Instagram" },
  { num: "100%", label: "Atendimento\nPersonalizado" },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col bg-[#0e0e0e] overflow-hidden noise-overlay"
    >
      {/* Subtle center glow where the image is */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_80%_at_58%_52%,#1c1c1c_0%,transparent_70%)] pointer-events-none" />

      {/* Hero image — floating, masked at edges */}
      <div
        className="absolute inset-0 lg:left-[35%] lg:right-[-5%]"
        style={{
          maskImage:
            "radial-gradient(ellipse 85% 95% at 55% 50%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 95% at 55% 50%, black 30%, transparent 80%)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1400&q=80"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Darken image to match Caliber tone */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0e0e0e] to-transparent pointer-events-none" />

      {/* Left edge red line */}
      <div className="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-red-600 hidden lg:block" />

      {/* Main layout */}
      <div className="relative z-10 flex-1 flex flex-col max-w-screen-xl mx-auto w-full px-6 lg:px-14">
        <div className="flex-1 flex items-center">
          <div className="w-full grid grid-cols-12 items-center gap-4 pt-20 lg:pt-0">

            {/* LEFT: content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="col-span-12 lg:col-span-5"
            >
              {/* Tag */}
              <div className="inline-flex items-center gap-2.5 border border-white/10 px-3 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-white/50">
                  Preparador Físico & Coach
                </span>
              </div>

              {/* Heading */}
              <h1
                className="text-[4.5rem] sm:text-[6rem] lg:text-[7.5rem] xl:text-[8.5rem] font-black text-white uppercase leading-[0.86] tracking-tight mb-10"
                style={{ fontFamily: "var(--font-family-display, 'Barlow Condensed', sans-serif)" }}
              >
                Eleve
                <br />
                seu
                <br />
                desemp.
                <span className="text-red-600"> //</span>
              </h1>

              {/* CTA */}
              <motion.a
                href="#contato"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="inline-flex items-center gap-3 text-xs font-black tracking-[0.25em] uppercase text-white/60 hover:text-white group transition-colors duration-200"
              >
                <span className="w-10 h-px bg-red-600 group-hover:w-16 transition-all duration-300" />
                Agendar treino
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* CENTER: empty space for image (image is absolutely positioned) */}
            <div className="col-span-12 lg:col-span-5 h-[300px] lg:h-0" />

            {/* RIGHT: stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="col-span-12 lg:col-span-2 flex flex-row lg:flex-col gap-6 lg:gap-8"
            >
              {stats.map((s, i) => (
                <div key={i} className="shrink-0">
                  <div
                    className="text-3xl lg:text-4xl font-black text-white leading-none mb-1.5"
                    style={{ fontFamily: "var(--font-family-display, 'Barlow Condensed', sans-serif)" }}
                  >
                    {s.num}
                    <span className="text-red-600 text-2xl"> //</span>
                  </div>
                  <div className="text-[10px] text-white/35 uppercase tracking-widest leading-snug whitespace-pre-line">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom: slide indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="pb-10 flex items-center gap-4"
        >
          <span
            className="text-5xl font-black text-white/8 leading-none"
            style={{ fontFamily: "var(--font-family-display, 'Barlow Condensed', sans-serif)" }}
          >
            01
          </span>
          <div className="flex flex-col gap-0.5">
            <div className="w-px h-4 bg-white/20 mx-auto" />
          </div>
          <span className="text-[10px] text-white/25 uppercase tracking-widest">/ 03</span>

          <div className="ml-auto flex items-center gap-3">
            <a
              href="#sobre"
              className="text-[10px] text-white/30 uppercase tracking-[0.25em] hover:text-white/60 transition-colors flex items-center gap-2"
            >
              Scroll
              <span className="block w-6 h-px bg-white/20" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom red progress line */}
      <div className="absolute bottom-0 left-0 w-[35%] h-[3px] bg-red-600" />
    </section>
  )
}
