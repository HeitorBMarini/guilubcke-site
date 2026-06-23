"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Share2, MessageCircle, Send } from "lucide-react"

export default function Contato() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [form, setForm] = useState({ nome: "", telefone: "", mensagem: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Olá Gui! Me chamo *${form.nome}*.\n\nTelefone: ${form.telefone}\n\n${form.mensagem}`
    )
    window.open(`https://wa.me/5500000000000?text=${msg}`, "_blank")
  }

  return (
    <section id="contato" ref={ref} className="py-24 lg:py-36 bg-[#0d0d0d] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-orange-500" />
              <span
                className="text-orange-400 text-xs font-bold tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Contato
              </span>
            </div>
            <h2
              className="text-5xl lg:text-6xl font-black text-white uppercase leading-[1.0] mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Vamos
              <span className="text-orange-500 block">conversar?</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-12 text-base">
              Tire suas dúvidas, agende uma avaliação ou saiba mais sobre os treinamentos. Respondo pelo WhatsApp ou Instagram.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 bg-green-500/5 border border-green-500/20 hover:bg-green-500/10 hover:border-green-500/40 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-green-600 flex items-center justify-center shrink-0">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-600 uppercase tracking-wider mb-1">WhatsApp</div>
                  <div className="text-white font-semibold group-hover:text-green-400 transition-colors">Chamar no WhatsApp</div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/guilubcketreinador"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-orange-500/30 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center shrink-0">
                  <Share2 size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-600 uppercase tracking-wider mb-1">Instagram</div>
                  <div className="text-white font-semibold group-hover:text-orange-400 transition-colors">@guilubcketreinador</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/[0.03] border border-white/5 p-8 lg:p-10">
              <h3
                className="text-2xl font-black text-white uppercase mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Enviar mensagem
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-widest">Seu nome *</label>
                  <input
                    type="text"
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    placeholder="Guilherme Silva"
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-orange-500 transition-colors text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-widest">Telefone</label>
                  <input
                    type="tel"
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-orange-500 transition-colors text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-widest">Mensagem *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    placeholder="Olá, tenho interesse em treinamento de pilotagem..."
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-4 text-white placeholder-gray-700 focus:outline-none focus:border-orange-500 transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-black font-black text-sm tracking-widest uppercase py-4 transition-all duration-200 hover:scale-[1.02] mt-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <Send size={16} /> Enviar pelo WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
