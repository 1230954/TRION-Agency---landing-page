'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#porque-trion', label: 'Porquê a Trion' },
  { href: '#contacto', label: 'Contacto' },
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

  // Scroll spy for active nav link
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

          <a href="#contacto" className="btn btn-primary nav-cta-btn">
            Marcar Diagnóstico
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
        <a href="#contacto" className="btn btn-primary" onClick={closeMenu}>
          Marcar Diagnóstico Gratuito →
        </a>
      </div>
    </>
  )
}
