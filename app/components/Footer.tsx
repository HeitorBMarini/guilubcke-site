import { Share2, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-orange-500 flex items-center justify-center">
            <span className="text-black font-black text-xs" style={{ fontFamily: "var(--font-display)" }}>GL</span>
          </div>
          <span className="text-white/40 text-sm uppercase tracking-widest" style={{ fontFamily: "var(--font-display)" }}>
            Gui Lubcke © {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/guilubcketreinador"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border border-white/10 hover:border-orange-500/50 flex items-center justify-center text-white/40 hover:text-orange-400 transition-all duration-200"
          >
            <Share2 size={16} />
          </a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border border-white/10 hover:border-green-500/50 flex items-center justify-center text-white/40 hover:text-green-400 transition-all duration-200"
          >
            <MessageCircle size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
