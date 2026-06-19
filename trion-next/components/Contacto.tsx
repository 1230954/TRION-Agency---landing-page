'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn } from './FadeIn'

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)

    const form = e.currentTarget
    const payload = {
      Nome: (form.querySelector('#f-name') as HTMLInputElement).value,
      Email: (form.querySelector('#f-email') as HTMLInputElement).value,
      Empresa: (form.querySelector('#f-company') as HTMLInputElement).value,
      Mensagem: (form.querySelector('#f-msg') as HTMLTextAreaElement).value,
      _subject: 'Nova mensagem — TRION Agency website',
    }

    try {
      await fetch('https://formsubmit.co/ajax/geral.trionagency@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch {
      // fail silently
    }

    setSending(false)
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); form.reset() }, 3500)
  }

  return (
    <section
      id="contacto"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 80px)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="contact-grid">

          {/* ── Left: info ── */}
          <FadeIn>
            <div style={{ paddingTop: '8px' }}>
              <span style={{
                fontSize: '.68rem', fontWeight: 700, letterSpacing: '.18em',
                textTransform: 'uppercase', color: 'var(--cyan)',
                display: 'block', marginBottom: '20px',
              }}>
                Contacto
              </span>
              <h2 style={{
                fontFamily: 'var(--ff-head)',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                color: 'var(--mist)',
                lineHeight: 1.1,
                marginBottom: '20px',
              }}>
                Fale connosco.
              </h2>
              <p style={{
                fontSize: 'clamp(.9rem, 1.3vw, 1rem)',
                color: 'var(--steel)',
                lineHeight: 1.8,
                maxWidth: '360px',
                marginBottom: '48px',
              }}>
                Tem dúvidas ou quer saber mais? Envie uma mensagem — respondemos em menos de 24 horas.
              </p>

              {[
                {
                  label: 'Email',
                  value: <a href="mailto:geral.trionagency@gmail.com" style={{ color: 'var(--mist)', fontWeight: 500, textDecoration: 'none' }}>geral.trionagency@gmail.com</a>,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                },
                {
                  label: 'Localização',
                  value: <span style={{ color: 'var(--mist)', fontWeight: 500 }}>Portugal</span>,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"/>
                      <circle cx="12" cy="10" r="2.5"/>
                    </svg>
                  ),
                },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                  <div style={{
                    width: '36px', height: '36px', flexShrink: 0,
                    background: 'var(--cyan-10)', border: '1px solid var(--cyan-20)',
                    borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{ width: '15px', height: '15px', color: 'var(--cyan)' }}>{item.icon}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '.68rem', color: 'var(--steel)', marginBottom: '2px', letterSpacing: '.04em' }}>{item.label}</div>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* ── Right: form ── */}
          <FadeIn delay={0.12}>
            <div className="contact-form-minimal">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    style={{
                      display: 'flex', flexDirection: 'column', alignItems: 'center',
                      justifyContent: 'center', textAlign: 'center', height: '320px', gap: '16px',
                    }}
                  >
                    <div style={{
                      width: '52px', height: '52px',
                      background: 'var(--cyan-10)', border: '1px solid var(--cyan-20)',
                      borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p style={{ fontFamily: 'var(--ff-head)', fontSize: '1.1rem', color: 'var(--mist)', fontWeight: 600 }}>
                      Mensagem enviada.
                    </p>
                    <p style={{ fontSize: '.85rem', color: 'var(--steel)' }}>
                      Respondemos em menos de 24 horas.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '0' }}
                  >
                    {/* Name + Email row */}
                    <div className="cfm-row">
                      <div className="cfm-field">
                        <label className="cfm-label" htmlFor="f-name">Nome</label>
                        <input className="cfm-input" type="text" id="f-name" placeholder="O seu nome" required />
                      </div>
                      <div className="cfm-field">
                        <label className="cfm-label" htmlFor="f-email">Email</label>
                        <input className="cfm-input" type="email" id="f-email" placeholder="email@empresa.pt" required />
                      </div>
                    </div>

                    <div className="cfm-field">
                      <label className="cfm-label" htmlFor="f-company">Empresa</label>
                      <input className="cfm-input" type="text" id="f-company" placeholder="Nome da sua empresa" />
                    </div>

                    <div className="cfm-field">
                      <label className="cfm-label" htmlFor="f-msg">Mensagem</label>
                      <textarea className="cfm-input cfm-textarea" id="f-msg" placeholder="Descreva brevemente o que procura…" />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={sending}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      style={{
                        marginTop: '32px',
                        width: '100%', padding: '14px 24px',
                        background: 'var(--cyan)', color: 'var(--obsidian)',
                        fontFamily: 'var(--ff-body)', fontWeight: 700, fontSize: '.9rem',
                        border: 'none', borderRadius: '8px', cursor: sending ? 'default' : 'pointer',
                        opacity: sending ? 0.7 : 1, transition: 'opacity .2s',
                        letterSpacing: '.01em',
                      }}
                    >
                      {sending ? 'A enviar…' : 'Enviar Mensagem →'}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
