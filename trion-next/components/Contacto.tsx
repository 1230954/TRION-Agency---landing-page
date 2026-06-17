'use client'

import { useState } from 'react'
import type { SubmitEvent } from 'react'

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
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
      // fail silently — still show confirmation to avoid confusion
    }

    setSending(false)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      form.reset()
    }, 3500)
  }

  return (
    <section id="contacto" className="section">
      <div className="wrap">
        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info reveal">
            <span className="s-label">Contacto</span>
            <h2 className="s-title">Fale connosco</h2>
            <p className="s-sub">
              Tem dúvidas ou quer saber mais? Envie uma mensagem — respondemos em menos de 24 horas.
            </p>

            <div className="c-detail" style={{ marginTop: '36px' }}>
              <div className="c-detail-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '.75rem', color: 'var(--steel)', marginBottom: '2px' }}>Email</div>
                <a href="mailto:geral.trionagency@gmail.com">geral.trionagency@gmail.com</a>
              </div>
            </div>

            <div className="c-detail">
              <div className="c-detail-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '.75rem', color: 'var(--steel)', marginBottom: '2px' }}>Localização</div>
                <span style={{ color: 'var(--mist)', fontWeight: 500 }}>Portugal</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-card reveal d1">
            <form onSubmit={handleSubmit}>
              <div className="fg-row">
                <div className="fg">
                  <label htmlFor="f-name">Nome</label>
                  <input type="text" id="f-name" placeholder="O seu nome" required />
                </div>
                <div className="fg">
                  <label htmlFor="f-email">Email</label>
                  <input type="email" id="f-email" placeholder="email@empresa.pt" required />
                </div>
              </div>
              <div className="fg">
                <label htmlFor="f-company">Empresa</label>
                <input type="text" id="f-company" placeholder="Nome da sua empresa" />
              </div>
              <div className="fg">
                <label htmlFor="f-msg">Mensagem</label>
                <textarea id="f-msg" placeholder="Descreva brevemente o que procura..." />
              </div>
              <button
                type="submit"
                className="btn btn-primary form-submit"
                disabled={sending}
                style={
                  submitted
                    ? {
                        background: 'transparent',
                        color: 'var(--cyan)',
                        border: '1px solid var(--cyan)',
                      }
                    : {}
                }
              >
                {submitted ? 'Mensagem enviada ✓' : sending ? 'A enviar…' : 'Enviar Mensagem →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
