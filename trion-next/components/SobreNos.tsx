'use client'
import { motion } from 'framer-motion'
import { FadeIn } from './FadeIn'

const pillars = [
  {
    title: 'Baseados em Portugal',
    desc: 'Equipa local que conhece o mercado português e fala a sua língua — sem intermediários.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"/>
        <circle cx="12" cy="10" r="2.5"/>
      </svg>
    ),
  },
  {
    title: 'Foco exclusivo em PMEs',
    desc: 'Não somos uma agência genérica. Especialistas em pequenas e médias empresas que querem crescer.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    title: 'Resultados em 2 a 4 semanas',
    desc: 'Do diagnóstico gratuito ao primeiro resultado visível. Sem burocracia, sem jargão técnico.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
]

export default function SobreNos() {
  return (
    <section
      id="sobre"
      style={{
        position: 'relative',
        zIndex: 1,
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Glowing separator at section boundary */}
      <div style={{
        position: 'absolute',
        top: 0, left: '8%', right: '8%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(79,209,197,0.45) 50%, transparent)',
      }} />
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="sobre-grid">
          {/* Left: identity */}
          <FadeIn>
            <div>
              <span style={{
                fontSize: '.68rem', fontWeight: 700, letterSpacing: '.18em',
                textTransform: 'uppercase', color: 'var(--cyan)',
                display: 'block', marginBottom: '20px',
              }}>
                Sobre Nós
              </span>
              <h2 style={{
                fontFamily: 'var(--ff-head)',
                fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                color: 'var(--mist)',
                lineHeight: 1.08,
                marginBottom: '28px',
              }}>
                Somos a TRION.
              </h2>
              <p style={{
                fontSize: 'clamp(.95rem, 1.4vw, 1.08rem)',
                color: 'var(--steel)',
                lineHeight: 1.85,
                maxWidth: '420px',
              }}>
                Uma agência portuguesa especializada em automação inteligente e presença digital.
                Ajudamos PMEs a crescer mais depressa — com menos trabalho manual e mais decisões baseadas em dados.
              </p>
            </div>
          </FadeIn>

          {/* Right: pillars */}
          <FadeIn delay={0.15}>
            <div className="sobre-pillars">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  className="sobre-pillar"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <div className="sobre-pillar-icon">
                    {p.icon}
                  </div>
                  <div>
                    <div className="sobre-pillar-title">{p.title}</div>
                    <div className="sobre-pillar-desc">{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
