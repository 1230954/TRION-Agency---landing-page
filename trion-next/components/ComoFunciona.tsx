'use client'
import { motion } from 'framer-motion'
import { FadeIn } from './FadeIn'

const steps = [
  {
    num: '01',
    title: 'Diagnóstico Gratuito',
    desc: 'Analisamos o seu negócio e identificamos onde a automação gera maior impacto e retorno imediato.',
  },
  {
    num: '02',
    title: 'Proposta à Medida',
    desc: 'Desenhamos uma solução personalizada para os seus processos, objetivos e orçamento — sem surpresas.',
  },
  {
    num: '03',
    title: 'Implementação & Suporte',
    desc: 'Entregamos, formamos a sua equipa e acompanhamos os resultados. Estamos presentes a longo prazo.',
  },
]

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 80px)',
        background: 'var(--graphite)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
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
              O nosso processo
            </span>
            <h2 style={{
              fontFamily: 'var(--ff-head)',
              fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              color: 'var(--mist)',
              lineHeight: 1.05,
            }}>
              Como trabalhamos
            </h2>
          </div>
        </FadeIn>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
        }}
          className="como-grid"
        >
          {steps.map((s, i) => (
            <FadeIn key={s.num} delay={i * 0.12}>
              <motion.div
                whileHover={{ backgroundColor: 'rgba(6,6,6,0.5)' }}
                transition={{ duration: 0.2 }}
                style={{
                  padding: 'clamp(40px, 5vw, 64px)',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%',
                  borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '24px',
                  fontFamily: 'var(--ff-head)',
                  fontSize: 'clamp(5rem, 10vw, 9rem)',
                  fontWeight: 800,
                  color: 'rgba(46,211,168,0.04)',
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}>
                  {s.num}
                </div>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '1px solid rgba(46,211,168,0.3)',
                  background: 'rgba(46,211,168,0.06)',
                  fontFamily: 'var(--ff-head)',
                  fontSize: '.82rem',
                  fontWeight: 700,
                  color: 'var(--cyan)',
                  marginBottom: '32px',
                }}>
                  {s.num}
                </div>

                <h3 style={{
                  fontFamily: 'var(--ff-head)',
                  fontSize: 'clamp(1.2rem, 1.8vw, 1.45rem)',
                  fontWeight: 600,
                  color: 'var(--mist)',
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                  lineHeight: 1.2,
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontSize: '.9rem',
                  color: 'var(--steel)',
                  lineHeight: 1.8,
                }}>
                  {s.desc}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
