import Image from 'next/image'

const serviceLinks = [
  { href: '#servicos', label: 'Automação de Processos' },
  { href: '#servicos', label: 'Agentes de IA' },
  { href: '#servicos', label: 'Websites & Landing Pages' },
  { href: '#servicos', label: 'Dashboards & Analytics' },
]

const companyLinks = [
  { href: '#como-funciona', label: 'Como Trabalhamos' },
  { href: '#porque-trion', label: 'Porquê a TRION' },
  { href: '#contacto', label: 'Contacto' },
  { href: 'mailto:geral@trionagency.pt', label: 'geral@trionagency.pt' },
]

export default function Footer() {
  return (
    <footer>
      <div className="foot-inner">
        <div className="foot-top">
          <div className="foot-brand">
            <Image src="/logo_semfundo.png" alt="TRION Agency" width={120} height={34} />
            <p className="foot-tag">
              Automação inteligente para PMEs portuguesas. Crescimento real, com tecnologia que funciona.
            </p>
            <div className="socials">
              <a href="#" className="social" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="social" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="foot-col-title">Serviços</p>
            <ul className="foot-links">
              {serviceLinks.map(l => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="foot-col-title">Empresa</p>
            <ul className="foot-links">
              {companyLinks.map(l => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <p className="foot-copy">© 2025 TRION Agency. Todos os direitos reservados.</p>
          <p className="foot-copy">Feito com orgulho em Portugal 🇵🇹</p>
        </div>
      </div>
    </footer>
  )
}
