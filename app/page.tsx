import Hero from "@/app/components/sections/Hero"
import Sobre from "@/app/components/sections/Sobre"
import Servicos from "@/app/components/sections/Servicos"
import Metodologia from "@/app/components/sections/Metodologia"
import Depoimentos from "@/app/components/sections/Depoimentos"
import CTA from "@/app/components/sections/CTA"
import Contato from "@/app/components/sections/Contato"
import Footer from "@/app/components/Footer"

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Servicos />
      <Metodologia />
      <Depoimentos />
      <CTA />
      <Contato />
      <Footer />
    </>
  )
}
