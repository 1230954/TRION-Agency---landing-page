'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#casos', label: 'Casos' },
  { href: '#como-funciona', label: 'Processo' },
  { href: '#faq', label: 'FAQ' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <Link href="#hero" className="nav-logo">
            <Image src="/logo_semfundo.png" alt="TRION Agency" width={140} height={40} priority />
          </Link>

          <ul className="nav-links">
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <a href={l.href} className={activeSection === l.href.slice(1) ? 'active' : ''}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="https://calendly.com/gmopimenta/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta-btn">
            Diagnóstico Gratuito
          </a>

          <button
            className={`burger${menuOpen ? ' open' : ''}`}
            aria-label="Menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mob-menu${menuOpen ? ' open' : ''}`}>
        <ul>
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={closeMenu}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a
          href="https://calendly.com/gmopimenta/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          onClick={closeMenu}
        >
          Diagnóstico Gratuito →
        </a>
      </div>
    </>
  )
}
