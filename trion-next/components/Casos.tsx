'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn } from './FadeIn'

const casos = [
  {
    sector: 'Imobiliário',
    problema: 'Gestão manual de centenas de leads por mês em folhas de cálculo',
    solucao: 'Sistema automático de qualificação, triagem e follow-up de leads integrado com o CRM existente.',
    metrica: '-80%',
    metricaLabel: 'tempo administrativo',
    metrica2: '+35%',
    metrica2Label: 'taxa de conversão',
    src: '/images/caso-imobiliario.png',
  },
  {
    sector: 'Saúde',
    problema: 'Perda recorrente de consultas por falhas na comunicação com pacientes',
    solucao: 'Agente de IA para confirmação automática de consultas, gestão de remarcações e resposta a perguntas frequentes.',
    metrica: '-60%',
    metricaLabel: 'faltas às consultas',
    metrica2: '24/7',
    metrica2Label: 'atendimento automático',
    src: '/images/caso-saude.png',
  },
  {
    sector: 'Retalho e Logística',
    problema: 'Processo de encomendas distribuído por várias ferramentas, com atrasos e erros frequentes',
    solucao: 'Automatização completa do processo: da encomenda ao armazém, transportadora e faturação.',
    metrica: '3×',
    metricaLabel: 'capacidade operacional',
    metrica2: '0',
    metrica2Label: 'erros de processamento',
    src: '/images/caso-retalho.png',
  },
]

function getImageStyle(
  index: number,
  activeIndex: number,
  length: number,
  containerWidth: number,
): React.CSSProperties {
  const gap = Math.min(72, Math.max(36, containerWidth * 0.13))
  const stickUp = gap * 0.72
  const isActive = index === activeIndex
  const isLeft = (activeIndex - 1 + length) % length === index
  const isRight = (activeIndex + 1) % length === index

  if (isActive) return {
    zIndex: 3, opacity: 1, pointerEvents: 'auto',
    transform: 'translateX(0) translateY(0) scale(1) rotateY(0deg)',
    transition: 'all 0.8s cubic-bezier(.4,2,.3,1)',
  }
  if (isLeft) return {
    zIndex: 2, opacity: 0.72, pointerEvents: 'none',
    transform: `translateX(-${gap}px) translateY(-${stickUp}px) scale(0.84) rotateY(18deg)`,
    transition: 'all 0.8s cubic-bezier(.4,2,.3,1)',
  }
  if (isRight) return {
    zIndex: 2, opacity: 0.72, pointerEvents: 'none',
    transform: `translateX(${gap}px) translateY(-${stickUp}px) scale(0.84) rotateY(-18deg)`,
    transition: 'all 0.8s cubic-bezier(.4,2,.3,1)',
  }
  return { zIndex: 1, opacity: 0, pointerEvents: 'none', transition: 'all 0.8s cubic-bezier(.4,2,.3,1)' }
}

export default function Casos() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [containerWidth, setContainerWidth] = useState(400)
  const imageRef = useRef<HTMLDivElement>(null)
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)
  const length = casos.length

  useEffect(() => {
    const el = imageRef.current
    if (!el) return
    const obs = new ResizeObserver(() => setContainerWidth(el.offsetWidth))
    obs.observe(el)
    setContainerWidth(el.offsetWidth)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    autoplayRef.current = setInterval(() => setActiveIndex(p => (p + 1) % length), 5500)
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current) }
  }, [length])

  // Non-passive touchmove listener: blocks browser horizontal scroll while swiping
  useEffect(() => {
    const el = imageRef.current
    if (!el) return
    const onMove = (e: TouchEvent) => {
      const dx = Math.abs(e.touches[0].clientX - touchStartX.current)
      const dy = Math.abs(e.touches[0].clientY - touchStartY.current)
      if (dx > dy && dx > 6) e.preventDefault()
    }
    el.addEventListener('touchmove', onMove, { passive: false })
    return () => el.removeEventListener('touchmove', onMove)
  }, [])

  const go = useCallback((dir: 1 | -1) => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)
    setActiveIndex(p => (p + dir + length) % length)
  }, [length])

  const goTo = useCallback((i: number) => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)
    setActiveIndex(i)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = touchStartX.current - e.changedTouches[0].clientX
    const dy = touchStartY.current - e.changedTouches[0].clientY
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      go(dx > 0 ? 1 : -1)
    }
  }

  const active = casos[activeIndex]

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
          <div style={{ marginBottom: '72px' }}>
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

        <div className="casos-grid">
          {/* ── Image carousel ── */}
          <FadeIn>
            <div
              className="casos-images"
              ref={imageRef}
              style={{ perspective: '1200px' }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {casos.map((c, i) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={c.sector}
                  src={c.src}
                  alt={c.sector}
                  className="caso-img"
                  style={getImageStyle(i, activeIndex, length, containerWidth)}
                />
              ))}
            </div>
          </FadeIn>

          {/* ── Content ── */}
          <div className="casos-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.32, ease: 'easeInOut' }}
                style={{ flex: 1 }}
              >
                <span className="caso-sector-tag">{active.sector}</span>

                <p className="caso-problema">
                  &ldquo;{active.problema}&rdquo;
                </p>

                <p className="caso-solucao">{active.solucao}</p>

                <div className="caso-metrics">
                  <div>
                    <div className="caso-metric-val cyan">
                      {active.metrica.split('').map((ch, i) => (
                        <motion.span
                          key={`${activeIndex}-m1-${i}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.055, duration: 0.22 }}
                          style={{ display: 'inline-block' }}
                        >
                          {ch}
                        </motion.span>
                      ))}
                    </div>
                    <div className="caso-metric-lbl">{active.metricaLabel}</div>
                  </div>
                  <div>
                    <div className="caso-metric-val mist">
                      {active.metrica2.split('').map((ch, i) => (
                        <motion.span
                          key={`${activeIndex}-m2-${i}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.08 + i * 0.055, duration: 0.22 }}
                          style={{ display: 'inline-block' }}
                        >
                          {ch}
                        </motion.span>
                      ))}
                    </div>
                    <div className="caso-metric-lbl">{active.metrica2Label}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* ── Navigation ── */}
            <div className="caso-nav">
              <button className="caso-arrow" onClick={() => go(-1)} aria-label="Anterior">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button className="caso-arrow" onClick={() => go(1)} aria-label="Próximo">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
              <div className="caso-dots">
                {casos.map((_, i) => (
                  <button
                    key={i}
                    className={`caso-dot${i === activeIndex ? ' active' : ''}`}
                    onClick={() => goTo(i)}
                    aria-label={`Caso ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
