'use client'
import { motion } from 'framer-motion'
import { FadeIn } from './FadeIn'

const pillars = [
  {
    stat: '< 4',
    unit: 'semanas',
    title: 'Resultados visíveis depressa',
    desc: 'Implementamos rapidamente e medimos resultados concretos desde o primeiro mês. Sem reuniões intermináveis, sem promessas vazias.',
  },
  {
    stat: '100%',
    unit: 'personalizado',
    title: 'Feito para o seu negócio',
    desc: 'Não vendemos pacotes pré-definidos. Cada solução é desenhada especificamente para os seus processos, equipa e objetivos.',
  },
  {
    stat: '24/7',
    unit: 'suporte contínuo',
    title: 'Estamos sempre presentes',
    desc: 'Não desaparecemos depois da implementação. Acompanhamos, ajustamos e escalamos à medida que o seu negócio cresce.',
  },
]

export default function PorqueTRION() {
  return (
    <section
      id="porque-trion"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 80px)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ marginBottom: '80px' }}>
            <span style={{
              fontSize: '.68rem', fontWeight: 700, letterSpacing: '.18em',
              textTransform: 'uppercase', color: 'var(--cyan)',
              display: 'block', marginBottom: '20px',
            }}>
              Porquê a TRION
            </span>
            <h2 style={{
              fontFamily: 'var(--ff-head)',
              fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              color: 'var(--mist)',
              lineHeight: 1.05,
            }}>
              A diferença que importa
            </h2>
          </div>
        </FadeIn>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'var(--border)',
        }}
          className="pillar-grid"
        >
          {pillars.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ backgroundColor: 'rgba(35,40,49,0.6)' }}
                transition={{ duration: 0.2 }}
                style={{
                  padding: 'clamp(40px, 5vw, 64px)',
                  background: 'var(--obsidian)',
                  height: '100%',
                }}
              >
                <div style={{
                  fontFamily: 'var(--ff-head)',
                  fontSize: 'clamp(2.8rem, 4vw, 4.2rem)',
                  fontWeight: 800,
                  color: 'var(--cyan)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}>
                  {p.stat}
                </div>
                <div style={{
                  fontSize: '.72rem',
                  fontWeight: 700,
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: 'var(--steel)',
                  marginBottom: '28px',
                }}>
                  {p.unit}
                </div>
                <h3 style={{
                  fontFamily: 'var(--ff-head)',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'var(--mist)',
                  marginBottom: '14px',
                  letterSpacing: '-0.01em',
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontSize: '.88rem',
                  color: 'var(--steel)',
                  lineHeight: 1.8,
                }}>
                  {p.desc}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
