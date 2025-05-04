// src/js/header-animate.js
import { gsap } from 'gsap'

window.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-btn')
  const closeButton = document.getElementById('close-btn')
  const fullMenu = document.getElementById('full')

  if (!menuButton || !closeButton || !fullMenu) return

  // 3. Inicializa el menú fuera de pantalla con GSAP
  gsap.set(fullMenu, { xPercent: 100, autoAlpha: 0 })

  // 4. Crea el timeline pausado
  const tl = gsap.timeline({ paused: true })
  tl.to(fullMenu, {
    xPercent: 0,
    autoAlpha: 1,
    duration: 0.8,
    onStart() {
      fullMenu.style.visibility = 'visible'
    },
  })
    .from(
      '#menu-links a',
      {
        x: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
      },
      '-=0.5'
    )
    .from(
      '#menu-info div',
      {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
      },
      '-=0.4'
    )

  // 5. Dispara apertura y cierre
  menuButton.addEventListener('click', () => tl.play())
  closeButton.addEventListener('click', () => tl.reverse())
})
