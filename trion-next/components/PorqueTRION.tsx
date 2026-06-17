const reasons = [
  {
    delay: '',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Especialistas em PMEs',
    desc: 'Não somos uma consultora genérica. Focamo-nos exclusivamente em empresas como a sua, com soluções ajustadas à sua realidade, dimensão e orçamento.',
  },
  {
    delay: 'd1',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Resultados em Semanas',
    desc: 'Implementamos depressa e medimos resultados concretos. Sem meses de espera, sem reuniões intermináveis, sem promessas vazias.',
  },
  {
    delay: 'd2',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.61 3.38 2 2 0 013.6 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.65a16 16 0 006 6l.92-.92a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    title: 'Suporte Contínuo',
    desc: 'Estamos sempre disponíveis para ajustar, melhorar e escalar as suas automações à medida que o seu negócio cresce e evolui.',
  },
]

export default function PorqueTRION() {
  return (
    <section id="porque-trion" className="section">
      <div className="wrap">
        <span className="s-label">Porquê a TRION</span>
        <h2 className="s-title reveal">A diferença que importa</h2>
        <div className="why-grid">
          {reasons.map(r => (
            <div key={r.title} className={`why-card reveal${r.delay ? ' ' + r.delay : ''}`}>
              <div className="why-icon">{r.icon}</div>
              <h3 className="why-title">{r.title}</h3>
              <p className="why-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
