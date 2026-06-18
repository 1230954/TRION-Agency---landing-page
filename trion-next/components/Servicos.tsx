'use client'
import { motion } from 'framer-motion'
import { FadeIn } from './FadeIn'

const services = [
  {
    num: '01',
    tag: 'Operações',
    title: 'Automação de Processos',
    desc: 'Eliminamos tarefas repetitivas com fluxos automatizados que trabalham por si, 24 horas por dia. Menos erros, mais tempo para o que importa.',
  },
  {
    num: '02',
    tag: 'Inteligência Artificial',
    title: 'Agentes de IA',
    desc: 'Agentes autónomos que tomam decisões, respondem clientes e processam dados — completamente adaptados ao seu negócio.',
  },
  {
    num: '03',
    tag: 'Presença Digital',
    title: 'Websites & Landing Pages',
    desc: 'Presenças digitais que convertem visitantes em clientes, com design moderno, performance de topo e foco total em resultados.',
  },
  {
    num: '04',
    tag: 'Dados',
    title: 'Dashboards & Analytics',
    desc: 'Dados dispersos transformados em painéis visuais claros e intuitivos, para decisões mais rápidas e fundamentadas.',
  },
]

export default function Servicos() {
  return (
    <section
      id="servicos"
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
              Os nossos serviços
            </span>
            <h2 style={{
              fontFamily: 'var(--ff-head)',
              fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              color: 'var(--mist)',
              lineHeight: 1.05,
            }}>
              O que fazemos
            </h2>
          </div>
        </FadeIn>

        <div style={{ borderTop: '1px solid var(--border)' }}>
          {services.map((s, i) => (
            <FadeIn key={s.num} delay={i * 0.08}>
              <motion.div
                whileHover={{ backgroundColor: 'rgba(35,40,49,0.35)' }}
                transition={{ duration: 0.2 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '72px 1fr auto',
                  gap: '40px',
                  padding: 'clamp(32px, 4vw, 52px) clamp(16px, 2vw, 24px)',
                  borderBottom: '1px solid var(--border)',
                  alignItems: 'start',
                  cursor: 'default',
                  transition: 'background 0.25s',
                  position: 'relative',
                }}
              >
                <span style={{
                  fontFamily: 'var(--ff-head)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'var(--steel)',
                  paddingTop: '4px',
                }}>
                  {s.num}
                </span>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--ff-head)',
                    fontSize: 'clamp(1.3rem, 2vw, 1.7rem)',
                    fontWeight: 600,
                    color: 'var(--mist)',
                    letterSpacing: '-0.02em',
                    marginBottom: '14px',
                    lineHeight: 1.2,
                  }}>
                    {s.title}
                  </h3>
                  <p style={{
                    fontSize: '.92rem',
                    color: 'var(--steel)',
                    lineHeight: 1.75,
                    maxWidth: '520px',
                  }}>
                    {s.desc}
                  </p>
                </div>
                <span style={{
                  fontSize: '.65rem',
                  fontWeight: 700,
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: 'var(--cyan)',
                  background: 'rgba(79,209,197,0.08)',
                  border: '1px solid rgba(79,209,197,0.15)',
                  padding: '5px 12px',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap',
                  alignSelf: 'start',
                  marginTop: '4px',
                }}>
                  {s.tag}
                </span>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
