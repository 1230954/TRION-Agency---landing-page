'use client'
import { FadeIn } from './FadeIn'

const clientes = [
  'Grupo Martins', 'MedCenter Lisboa', 'NovaPedra', 'Ritmo Digital',
  'AtlantiCo', 'Prime Real Estate', 'Saúde+', 'Construções Faro',
  'Grupo Martins', 'MedCenter Lisboa', 'NovaPedra', 'Ritmo Digital',
  'AtlantiCo', 'Prime Real Estate', 'Saúde+', 'Construções Faro',
]

export default function Clientes() {
  return (
    <section
      style={{
        position: 'relative',
        zIndex: 1,
        padding: 'clamp(60px, 8vw, 100px) 0',
        borderTop: '1px solid var(--border)',
        overflow: 'hidden',
      }}
    >
      <FadeIn>
        <p style={{
          textAlign: 'center',
          fontSize: '.68rem',
          fontWeight: 700,
          letterSpacing: '.2em',
          textTransform: 'uppercase',
          color: 'var(--steel)',
          marginBottom: '48px',
        }}>
          Empresas que confiam na TRION
        </p>
      </FadeIn>

      <div style={{
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
      }}>
        <div style={{
          display: 'flex',
          gap: '0',
          width: 'max-content',
          animation: 'marquee-scroll 40s linear infinite',
        }}>
          {clientes.map((c, i) => (
            <div
              key={i}
              style={{
                padding: '0 48px',
                borderRight: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                height: '56px',
                whiteSpace: 'nowrap',
                fontFamily: 'var(--ff-head)',
                fontSize: '.85rem',
                fontWeight: 600,
                color: 'var(--steel)',
                letterSpacing: '.04em',
                opacity: 0.6,
                transition: 'opacity 0.2s',
                cursor: 'default',
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
