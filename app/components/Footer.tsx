import { Share2, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-14 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <a
          href="#hero"
          className="text-base font-black uppercase tracking-[0.12em] text-white/30 hover:text-white/60 transition-colors"
          style={{ fontFamily: "var(--font-family-display, 'Barlow Condensed', sans-serif)" }}
        >
          GUI <span className="text-red-600/60">LUBCKE</span>
        </a>

        <span className="text-[10px] text-white/15 uppercase tracking-widest">
          Preparador Físico & Coach © {new Date().getFullYear()}
        </span>

        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/guilubcketreinador"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 border border-white/8 hover:border-red-600/50 flex items-center justify-center text-white/25 hover:text-red-500 transition-all"
          >
            <Share2 size={13} />
          </a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 border border-white/8 hover:border-green-500/50 flex items-center justify-center text-white/25 hover:text-green-400 transition-all"
          >
            <MessageCircle size={13} />
          </a>
        </div>
      </div>
    </footer>
  )
}
