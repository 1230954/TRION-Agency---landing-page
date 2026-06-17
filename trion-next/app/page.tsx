import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TechStrip from '@/components/TechStrip'
import Servicos from '@/components/Servicos'
import ComoFunciona from '@/components/ComoFunciona'
import PorqueTRION from '@/components/PorqueTRION'
import CTABand from '@/components/CTABand'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'
import RevealInit from '@/components/RevealInit'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TechStrip />
      <Servicos />
      <ComoFunciona />
      <PorqueTRION />
      <CTABand />
      <Contacto />
      <Footer />
      {/* Initialises IntersectionObserver for all .reveal elements */}
      <RevealInit />
    </>
  )
}
