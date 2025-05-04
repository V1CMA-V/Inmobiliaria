import { gsap } from 'gsap'

window.addEventListener('DOMContentLoaded', () => {
  const cursor = document.getElementById('cursor')
  if (!cursor) return

  // Estado inicial: centrado y escala 1
  gsap.set(cursor, { xPercent: -50, yPercent: -50, scale: 1 })

  // Mover el cursor
  document.addEventListener('mousemove', e => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
      ease: 'power2.out',
    })
  })

  // Qué etiquetas consideramos "clicables"
  const CLICKABLE_SELECTOR = 'a, button, input, textarea, [role="button"], .clickable'

  // Encoger al entrar y volver al salir
  document.addEventListener('mouseover', e => {
    if (e.target.matches(CLICKABLE_SELECTOR)) {
      gsap.to(cursor, { scale: 0.5, duration: 0.15, ease: 'power1.out' })
    }
  })
  document.addEventListener('mouseout', e => {
    if (e.target.matches(CLICKABLE_SELECTOR)) {
      gsap.to(cursor, { scale: 1, duration: 0.15, ease: 'power1.out' })
    }
  })
})
