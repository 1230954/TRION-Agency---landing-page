export default function CTABand() {
  return (
    <section id="cta-band">
      <div className="cta-wrap reveal">
        <span className="s-label" style={{ display: 'block', textAlign: 'center', marginBottom: '20px' }}>
          Pronto para começar?
        </span>
        <h2 className="cta-title">
          Pronto para transformar<br />o seu negócio?
        </h2>
        <p className="cta-sub">
          Marque um diagnóstico gratuito de 30 minutos e descubra exatamente como podemos ajudar a sua empresa a crescer e a ser mais eficiente.
        </p>
        <a href="https://calendly.com/gmopimenta/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Marcar Diagnóstico Gratuito →
        </a>
        <p className="cta-note">Sem compromisso. Sem custos ocultos.</p>
      </div>
    </section>
  )
}
