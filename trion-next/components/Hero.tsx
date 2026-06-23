'use client'

import { motion, type Variants } from 'framer-motion'
import { AuroraBackground } from '@/components/ui/aurora-background'

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

export default function Hero() {
  return (
    <AuroraBackground
      id="hero"
      className="!bg-[#060606] pt-[var(--nav-h)]"
      showRadialGradient
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative flex flex-col items-center text-center px-6 w-full max-w-5xl mx-auto"
      >
        <motion.div variants={fadeUp} className="hero-badge mb-8">
          <span className="badge-dot" />
          Automação Inteligente para PMEs
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mb-6"
          style={{
            fontFamily: 'var(--ff-head)',
            fontSize: 'clamp(3.1rem, 6.2vw, 5.8rem)',
            fontWeight: 600,
            lineHeight: '1.06',
            letterSpacing: '-0.03em',
            color: 'var(--mist)',
          }}
        >
          Automatize o que repete.<br />
          <em style={{ fontFamily: 'var(--ff-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--cyan)' }}>Acelere</em> o que importa.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mb-10 max-w-xl"
          style={{
            color: 'var(--steel)',
            fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
            lineHeight: '1.75',
          }}
        >
          Ajudamos PMEs portuguesas a crescer através da automação de processos, 
          agentes de IA e soluções digitais.
        </motion.p>

        <motion.div variants={fadeUp} className="hero-ctas">
          <a
            href="https://calendly.com/gmopimenta/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ fontSize: '.95rem', padding: '13px 28px' }}
          >
            Marcar Diagnóstico Gratuito →
          </a>
          <a
            href="#servicos"
            className="btn btn-ghost"
            style={{ fontSize: '.95rem', padding: '13px 28px' }}
          >
            Ver os nossos serviços
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="hero-metrics w-full mt-16">
          <div className="metric">
            <div className="metric-val">-40<span>%</span></div>
            <div className="metric-lbl">tarefas manuais</div>
          </div>
          <div className="metric">
            <div className="metric-val">2–4<span> sem</span></div>
            <div className="metric-lbl">tempo de implementação</div>
          </div>
          <div className="metric">
            <div className="metric-val">24<span>/7</span></div>
            <div className="metric-lbl">processos a trabalhar</div>
          </div>
        </motion.div>
      </motion.div>
    </AuroraBackground>
  )
}
