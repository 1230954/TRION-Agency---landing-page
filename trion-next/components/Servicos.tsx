'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [open, setOpen] = useState<number>(0)

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
          <div style={{ marginBottom: '64px' }}>
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
          {services.map((s, i) => {
            const isOpen = open === i
            return (
              <FadeIn key={s.num} delay={i * 0.06}>
                <div className="acc-item">
                  <button
                    className="acc-trigger"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="acc-num">{s.num}</span>
                    <span
                      className="acc-title"
                      style={{ color: isOpen ? 'var(--cyan)' : 'var(--mist)', transition: 'color .25s' }}
                    >
                      {s.title}
                    </span>
                    <span className="acc-tag">{s.tag}</span>
                    <motion.svg
                      className="acc-chevron"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </motion.svg>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: [0.04, 0.62, 0.23, 0.98] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <motion.div
                          className="acc-desc"
                          initial={{ y: -8 }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.3, delay: 0.05 }}
                        >
                          {s.desc}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
