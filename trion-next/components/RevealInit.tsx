'use client'

import { useEffect } from 'react'

// Mirrors the original IntersectionObserver that adds class "in" to .reveal elements.
// Rendered once in page.tsx; applies globally to all .reveal nodes in the DOM.
export default function RevealInit() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.08 },
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return null
}
