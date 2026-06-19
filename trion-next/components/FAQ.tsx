'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn } from './FadeIn'

const faqs = [
  {
    q: 'Quanto tempo demora a implementação?',
    a: 'A maioria das soluções fica operacional em 2 a 4 semanas. O diagnóstico inicial é gratuito e permite-nos dar uma estimativa precisa logo na primeira conversa.',
  },
  {
    q: 'Preciso de ter conhecimentos técnicos?',
    a: 'Não. Tratamos de toda a parte técnica — integrações, configuração e testes. A sua equipa recebe formação prática e fica com uma solução que consegue usar de forma autónoma.',
  },
  {
    q: 'As soluções integram com os sistemas que já usamos?',
    a: 'Sim. Trabalhamos com as ferramentas que já usa — seja Excel, CRM, ERP, email ou qualquer plataforma de gestão. A integração é parte central do nosso trabalho.',
  },
  {
    q: 'Qual é o investimento mínimo?',
    a: 'Depende da complexidade e do impacto esperado. Temos soluções a partir de alguns milhares de euros, com retorno mensurável em semanas. O diagnóstico gratuito ajuda a perceber o que faz sentido para o seu caso.',
  },
  {
    q: 'O que acontece depois da implementação?',
    a: 'Continuamos a acompanhar. Monitorizamos o desempenho, fazemos ajustes quando necessário e estamos disponíveis para escalar a solução à medida que o seu negócio cresce.',
  },
  {
    q: 'Com que tipo de empresas trabalham?',
    a: 'Focamo-nos em PMEs portuguesas — empresas entre 5 e 200 colaboradores, em sectores como saúde, imobiliário, comércio, construção e serviços profissionais.',
  },
]

function Item({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'clamp(20px, 3vw, 28px) 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          gap: '24px',
          textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: 'var(--ff-head)',
          fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
          fontWeight: 500,
          color: isOpen ? 'var(--mist)' : 'var(--steel)',
          letterSpacing: '-0.01em',
          transition: 'color 0.2s',
          lineHeight: 1.4,
        }}>
          {q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            flexShrink: 0,
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            border: `1px solid ${isOpen ? 'rgba(46,211,168,0.4)' : 'var(--border)'}`,
            background: isOpen ? 'rgba(46,211,168,0.08)' : 'transparent',
            color: isOpen ? 'var(--cyan)' : 'var(--steel)',
            fontSize: '18px',
            lineHeight: 1,
            transition: 'background 0.2s, border-color 0.2s, color 0.2s',
          }}
        >
          +
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              paddingBottom: 'clamp(20px, 3vw, 28px)',
              fontSize: '.92rem',
              color: 'var(--steel)',
              lineHeight: 1.8,
              maxWidth: '680px',
            }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      id="faq"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 80px)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.8fr',
          gap: 'clamp(60px, 8vw, 120px)',
          alignItems: 'start',
        }}
          className="faq-grid"
        >
          <FadeIn>
            <div style={{ position: 'sticky', top: 'calc(var(--nav-h) + 40px)' }}>
              <span style={{
                fontSize: '.68rem', fontWeight: 700, letterSpacing: '.18em',
                textTransform: 'uppercase', color: 'var(--cyan)',
                display: 'block', marginBottom: '20px',
              }}>
                Perguntas frequentes
              </span>
              <h2 style={{
                fontFamily: 'var(--ff-head)',
                fontSize: 'clamp(2rem, 3.5vw, 3.4rem)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                color: 'var(--mist)',
                lineHeight: 1.1,
                marginBottom: '24px',
              }}>
                Tem dúvidas?
                <br />Nós respondemos.
              </h2>
              <p style={{
                fontSize: '.92rem',
                color: 'var(--steel)',
                lineHeight: 1.8,
                marginBottom: '36px',
              }}>
                Não encontrou o que procurava? Fale connosco diretamente.
              </p>
              <a
                href="#contacto"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '.82rem',
                  fontWeight: 600,
                  color: 'var(--cyan)',
                  textDecoration: 'none',
                  transition: 'gap 0.2s',
                }}
              >
                Enviar mensagem →
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div style={{ borderTop: '1px solid var(--border)' }}>
              {faqs.map((f, i) => (
                <Item
                  key={i}
                  q={f.q}
                  a={f.a}
                  isOpen={open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
