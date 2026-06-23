"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, MessageCircle, Share2 } from "lucide-react"

export default function Contato() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [form, setForm] = useState({ nome: "", telefone: "", mensagem: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(`Olá Gui! Me chamo *${form.nome}*.\nTelefone: ${form.telefone}\n\n${form.mensagem}`)
    window.open(`https://wa.me/5500000000000?text=${msg}`, "_blank")
  }

  return (
    <section id="contato" ref={ref} className="py-28 lg:py-40 bg-[#111] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-red-600 text-[10px] font-black tracking-[0.3em] uppercase">07</span>
          <div className="w-12 h-px bg-red-600" />
          <span className="text-white/30 text-[10px] font-bold tracking-[0.3em] uppercase">Contato</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-[4.5rem] lg:text-[6rem] font-black text-white uppercase leading-[0.86] mb-10"
              style={{ fontFamily: "var(--font-family-display, 'Barlow Condensed', sans-serif)" }}
            >
              Vamos
              <br />
              conversar<span className="text-red-600"> //</span>
            </h2>
            <p className="text-white/40 text-base leading-relaxed mb-10">
              Tire suas dúvidas, agende uma avaliação ou saiba mais sobre os treinamentos.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 py-5 border-b border-white/5 hover:border-green-500/30 transition-colors"
              >
                <div className="w-10 h-10 bg-green-600 flex items-center justify-center shrink-0">
                  <MessageCircle size={17} className="text-white" />
                </div>
                <div>
                  <div className="text-[10px] text-white/25 uppercase tracking-widest mb-0.5">WhatsApp</div>
                  <div className="text-sm text-white/70 group-hover:text-white transition-colors font-medium">Chamar no WhatsApp</div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/guilubcketreinador"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 py-5 border-b border-white/5 hover:border-red-600/30 transition-colors"
              >
                <div className="w-10 h-10 bg-red-600 flex items-center justify-center shrink-0">
                  <Share2 size={17} className="text-white" />
                </div>
                <div>
                  <div className="text-[10px] text-white/25 uppercase tracking-widest mb-0.5">Instagram</div>
                  <div className="text-sm text-white/70 group-hover:text-white transition-colors font-medium">@guilubcketreinador</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Nome *</label>
                  <input
                    type="text"
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    placeholder="Seu nome"
                    className="bg-transparent border-b border-white/10 focus:border-red-600 py-3 text-white placeholder-white/20 text-sm outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Telefone</label>
                  <input
                    type="tel"
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="bg-transparent border-b border-white/10 focus:border-red-600 py-3 text-white placeholder-white/20 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Mensagem *</label>
                <textarea
                  required
                  rows={5}
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  placeholder="Olá Gui, tenho interesse em..."
                  className="bg-transparent border-b border-white/10 focus:border-red-600 py-3 text-white placeholder-white/20 text-sm outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs tracking-[0.2em] uppercase px-8 py-4 w-fit transition-all duration-200 hover:scale-[1.03] mt-2"
              >
                <Send size={14} />
                Enviar pelo WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
