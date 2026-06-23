import type { Metadata } from "next"
import { Barlow_Condensed, Barlow } from "next/font/google"
import "./globals.css"
import Navbar from "@/app/components/Navbar"

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
})

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Gui Lubcke | Treinador de Motociclismo",
  description:
    "Treinamento especializado para motociclistas. Melhore sua técnica, condicionamento físico e segurança nas pistas com Guilherme Lubcke.",
  keywords: ["treinamento motociclismo", "motociclista", "treinador moto", "pilotagem", "Guilherme Lubcke"],
  openGraph: {
    title: "Gui Lubcke | Treinador de Motociclismo",
    description: "Treinamento especializado para motociclistas.",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${barlowCondensed.variable} ${barlow.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
