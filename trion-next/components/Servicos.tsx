const services = [
  {
    delay: '',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      </svg>
    ),
    title: 'Automação de Processos',
    desc: 'Eliminamos tarefas repetitivas com fluxos automatizados que trabalham por si, 24 horas por dia, 7 dias por semana. Menos erros, mais tempo para o que importa.',
  },
  {
    delay: 'd1',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M9.5 2A2.5 2.5 0 017 4.5v15A2.5 2.5 0 009.5 22h5a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0014.5 2h-5z" />
        <circle cx="12" cy="9" r="2" />
        <path d="M10 14h4M10 17h4" />
      </svg>
    ),
    title: 'Agentes de Inteligência Artificial',
    desc: 'Desenvolvemos agentes de IA personalizados que tomam decisões, respondem clientes e processam dados de forma autónoma, adaptados ao seu negócio.',
  },
  {
    delay: 'd2',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h10M7 11h6" />
      </svg>
    ),
    title: 'Websites & Landing Pages',
    desc: 'Criamos presenças digitais premium que convertem visitantes em clientes, com design moderno, performance otimizada e foco em resultados.',
  },
  {
    delay: 'd3',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M18 20V10M12 20V4M6 20v-6" />
        <path d="M2 20h20" />
      </svg>
    ),
    title: 'Dashboards & Analytics',
    desc: 'Transformamos dados dispersos em painéis visuais claros e intuitivos, para que possa tomar decisões mais rápidas e fundamentadas.',
  },
]

export default function Servicos() {
  return (
    <section id="servicos" className="section">
      <div className="wrap">
        <div className="services-hd">
          <span className="s-label">Os nossos serviços</span>
          <h2 className="s-title reveal">O que fazemos</h2>
          <p className="s-sub reveal d1">
            Soluções digitais que transformam a forma como a sua empresa opera, comunica e cresce.
          </p>
        </div>
        <div className="services-grid">
          {services.map(s => (
            <div key={s.title} className={`svc-card reveal${s.delay ? ' ' + s.delay : ''}`}>
              <div className="svc-icon">{s.icon}</div>
              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-desc">{s.desc}</p>
              <a href="#contacto" className="svc-more">Saber mais →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
