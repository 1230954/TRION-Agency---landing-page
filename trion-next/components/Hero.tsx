'use client'

import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  p: number
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let nodes: Node[] = []
    let raf: number

    function sizeCanvas() {
      const w = canvas!.parentElement!.offsetWidth
      canvas!.width = w
      canvas!.height = w
      buildNodes(w)
    }

    function buildNodes(s: number) {
      nodes = Array.from({ length: 28 }, () => ({
        x: Math.random() * s,
        y: Math.random() * s,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.8 + 1,
        p: Math.random() * Math.PI * 2,
      }))
    }

    function drawNet() {
      const s = canvas!.width
      ctx.clearRect(0, 0, s, s)

      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy; n.p += 0.018
        if (n.x < 0 || n.x > s) n.vx *= -1
        if (n.y < 0 || n.y > s) n.vy *= -1
      })

      const D = 115
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < D) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(79,209,197,${(1 - d / D) * 0.38})`
            ctx.lineWidth = 0.7
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      nodes.forEach(n => {
        const pr = n.r + Math.sin(n.p) * 0.6
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, pr * 7)
        g.addColorStop(0, 'rgba(79,209,197,.28)')
        g.addColorStop(1, 'rgba(79,209,197,0)')
        ctx.beginPath(); ctx.arc(n.x, n.y, pr * 7, 0, Math.PI * 2)
        ctx.fillStyle = g; ctx.fill()
        ctx.beginPath(); ctx.arc(n.x, n.y, pr, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(79,209,197,.92)'; ctx.fill()
      })

      raf = requestAnimationFrame(drawNet)
    }

    function handleResize() {
      cancelAnimationFrame(raf)
      sizeCanvas()
      drawNet()
    }

    sizeCanvas()
    drawNet()
    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section id="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Automação Inteligente para PMEs
          </div>
          <h1 className="hero-h1">
            Automatize o que repete.<br />
            <em>Acelere</em> o que importa.
          </h1>
          <p className="hero-sub">
            Ajudamos PMEs portuguesas a crescer com automação de processos, agentes de IA e presença digital de topo.
          </p>
          <div className="hero-ctas">
            <a href="https://calendly.com/officialtrionagency/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Marcar Diagnóstico Gratuito →</a>
            <a href="#servicos" className="btn btn-ghost">Ver os nossos serviços</a>
          </div>
          <div className="hero-metrics">
            <div className="metric">
              <div className="metric-val">-40<span>%</span></div>
              <div className="metric-lbl">tarefas manuais</div>
            </div>
            <div className="metric">
              <div className="metric-val">2–4<span> sem</span></div>
              <div className="metric-lbl">tempo de implementação</div>
            </div>
            <div className="metric">
              <div className="metric-val">24<span>/7</span></div>
              <div className="metric-lbl">processos a trabalhar</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="canvas-wrap">
            <canvas ref={canvasRef} id="net-canvas" />
          </div>
        </div>
      </div>
    </section>
  )
}
