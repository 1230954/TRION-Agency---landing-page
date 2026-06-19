'use client'
import { motion } from 'framer-motion'
import { FadeIn } from './FadeIn'

export default function CTABand() {
  return (
    <section
      id="cta-band"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: 'clamp(100px, 14vw, 180px) clamp(24px, 6vw, 80px)',
        textAlign: 'center',
        overflow: 'hidden',
        background: 'var(--graphite)',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '600px',
        background: 'radial-gradient(ellipse at center, rgba(46,211,168,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: '820px', margin: '0 auto' }}>
        <FadeIn>
          <span style={{
            fontSize: '.68rem', fontWeight: 700, letterSpacing: '.18em',
            textTransform: 'uppercase', color: 'var(--cyan)',
            display: 'block', marginBottom: '28px',
          }}>
            Pronto para começar?
          </span>
          <h2 style={{
            fontFamily: 'var(--ff-head)',
            fontSize: 'clamp(2.6rem, 5vw, 4.8rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            color: 'var(--mist)',
            lineHeight: 1.05,
            marginBottom: '24px',
          }}>
                        Transforme o seu negócio.<br />
            <em style={{ fontFamily: 'var(--ff-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--cyan)' }}>Comece hoje.</em>
          </h2>
          <p style={{
            fontSize: 'clamp(.95rem, 1.4vw, 1.1rem)',
            color: 'var(--steel)',
            lineHeight: 1.8,
            maxWidth: '520px',
            margin: '0 auto 48px',
          }}>
            Diagnóstico gratuito de 30 minutos. Perceba exatamente onde a automação pode fazer diferença — sem compromisso.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <motion.a
            href="https://calendly.com/gmopimenta/30min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, boxShadow: '0 12px 40px rgba(46,211,168,0.3)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'var(--cyan)',
              color: 'var(--obsidian)',
              fontFamily: 'var(--ff-body)',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '16px 40px',
              borderRadius: '8px',
              textDecoration: 'none',
              letterSpacing: '.01em',
            }}
          >
            Marcar Diagnóstico Gratuito →
          </motion.a>
          <p style={{
            fontSize: '.76rem',
            color: 'var(--steel)',
            marginTop: '18px',
            opacity: 0.6,
          }}>
            Sem compromisso. Sem custos ocultos.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
