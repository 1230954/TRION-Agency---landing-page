const steps = [
  {
    delay: '',
    num: '01',
    title: 'Diagnóstico Gratuito',
    desc: 'Analisamos o seu negócio e identificamos onde a automação gera maior impacto e retorno imediato.',
  },
  {
    delay: 'd1',
    num: '02',
    title: 'Proposta à Medida',
    desc: 'Desenhamos uma solução personalizada para os seus processos, objetivos e orçamento.',
  },
  {
    delay: 'd2',
    num: '03',
    title: 'Implementação & Suporte',
    desc: 'Entregamos, formamos a sua equipa e acompanhamos os resultados a longo prazo.',
  },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="section section-alt">
      <div className="wrap">
        <div className="process-hd">
          <span className="s-label">O nosso processo</span>
          <h2 className="s-title reveal">Como trabalhamos</h2>
          <p className="s-sub reveal d1">
            Um processo simples e transparente, do primeiro contacto à implementação.
          </p>
        </div>
        <div className="steps-row">
          <div className="steps-line" />
          {steps.map(s => (
            <div key={s.num} className={`step reveal${s.delay ? ' ' + s.delay : ''}`}>
              <div className="step-num">{s.num}</div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
