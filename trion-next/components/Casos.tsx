'use client'
import { motion } from 'framer-motion'
import { FadeIn } from './FadeIn'

const casos = [
  {
    sector: 'Imobiliário',
    problema: 'Gestão manual de 200+ leads por mês em folhas de cálculo',
    solucao: 'Sistema automático de qualificação, triagem e follow-up de leads integrado com o CRM existente.',
    metrica: '-80%',
    metricaLabel: 'tempo administrativo',
    metrica2: '+35%',
    metrica2Label: 'taxa de conversão',
    cor: 'rgba(79,209,197,0.06)',
  },
  {
    sector: 'Saúde',
    problema: '1 em cada 4 consultas perdida por falha na comunicação com pacientes',
    solucao: 'Agente de IA para confirmação automática de consultas, gestão de remarcações e resposta a perguntas frequentes.',
    metrica: '-60%',
    metricaLabel: 'faltas às consultas',
    metrica2: '24/7',
    metrica2Label: 'atendimento automático',
    cor: 'rgba(79,209,197,0.03)',
  },
  {
    sector: 'Comércio B2B',
    problema: 'Processo de encomendas fragmentado em 3 ferramentas diferentes com erros constantes',
    solucao: 'Automação completa do fluxo order-to-fulfillment — da encomenda ao armazém, transportadora e faturação.',
    metrica: '3×',
    metricaLabel: 'capacidade de encomendas',
    metrica2: '0',
    metrica2Label: 'erros manuais de processamento',
    cor: 'rgba(79,209,197,0.06)',
  },
]

export default function Casos() {
  return (
    <section
      id="casos"
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
              Casos em que atuamos
            </span>
            <h2 style={{
              fontFamily: 'var(--ff-head)',
              fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              color: 'var(--mist)',
              lineHeight: 1.05,
              maxWidth: '700px',
            }}>
              Problemas reais.<br />Resultados mensuráveis.
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {casos.map((c, i) => (
            <FadeIn key={c.sector} delay={i * 0.1}>
              <motion.div
                whileHover={{ backgroundColor: 'rgba(18,20,24,0.6)' }}
                transition={{ duration: 0.25 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0',
                  background: 'rgba(18,20,24,0.35)',
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
                className="caso-card"
              >
                {/* Left: context */}
                <div style={{
                  padding: 'clamp(40px, 5vw, 60px)',
                  borderRight: '1px solid var(--border)',
                }}>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '.65rem', fontWeight: 700, letterSpacing: '.14em',
                    textTransform: 'uppercase', color: 'var(--cyan)',
                    background: 'rgba(79,209,197,0.08)',
                    border: '1px solid rgba(79,209,197,0.15)',
                    padding: '4px 12px', borderRadius: '4px',
                    marginBottom: '28px',
                  }}>
                    {c.sector}
                  </span>
                  <p style={{
                    fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
                    fontWeight: 500,
                    color: 'var(--mist)',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                    fontFamily: 'var(--ff-head)',
                    letterSpacing: '-0.01em',
                  }}>
                    "{c.problema}"
                  </p>
                  <p style={{
                    fontSize: '.88rem',
                    color: 'var(--steel)',
                    lineHeight: 1.8,
                  }}>
                    {c.solucao}
                  </p>
                </div>

                {/* Right: metrics */}
                <div style={{
                  padding: 'clamp(40px, 5vw, 60px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '40px',
                  background: c.cor,
                }}>
                  <div>
                    <div style={{
                      fontFamily: 'var(--ff-head)',
                      fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                      fontWeight: 800,
                      color: 'var(--cyan)',
                      letterSpacing: '-0.04em',
                      lineHeight: 1,
                    }}>
                      {c.metrica}
                    </div>
                    <div style={{
                      fontSize: '.78rem',
                      color: 'var(--steel)',
                      marginTop: '8px',
                      letterSpacing: '.02em',
                    }}>
                      {c.metricaLabel}
                    </div>
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'var(--ff-head)',
                      fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                      fontWeight: 800,
                      color: 'var(--mist)',
                      letterSpacing: '-0.04em',
                      lineHeight: 1,
                    }}>
                      {c.metrica2}
                    </div>
                    <div style={{
                      fontSize: '.78rem',
                      color: 'var(--steel)',
                      marginTop: '8px',
                      letterSpacing: '.02em',
                    }}>
                      {c.metrica2Label}
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
