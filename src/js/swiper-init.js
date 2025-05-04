import { register } from 'swiper/element/bundle'

register()

// Utilidad para inicializar múltiples swipers
function setupSwiper(selector, config) {
  const el = document.querySelector(selector)
  if (!el) return

  Object.assign(el, config)
  el.initialize()
}

window.addEventListener('DOMContentLoaded', () => {
  // Swiper principal
  setupSwiper('.mySwiper', {
    grabCursor: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  })

  // Swiper 2
  setupSwiper('.mySwiper2', {
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
      prev: { shadow: true, translate: ['-120%', 0, -500] },
      next: { shadow: true, translate: ['120%', 0, -500] },
    },
  })

  // Swiper 3
  setupSwiper('.mySwiper3', {
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
      prev: { shadow: true, translate: ['-20%', 0, -1] },
      next: { translate: ['100%', 0, 0] },
    },
  })

  // Swiper 4
  setupSwiper('.mySwiper4', {
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -800],
        rotate: [180, 0, 0],
      },
      next: {
        shadow: true,
        translate: [0, 0, -800],
        rotate: [-180, 0, 0],
      },
    },
  })

  // Swiper 5
  setupSwiper('.mySwiper5', {
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ['-125%', 0, -800],
        rotate: [0, 0, -90],
      },
      next: {
        shadow: true,
        translate: ['125%', 0, -800],
        rotate: [0, 0, 90],
      },
    },
  })

  // Swiper 6
  setupSwiper('.mySwiper6', {
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
      prev: {
        shadow: true,
        origin: 'left center',
        translate: ['-5%', 0, -200],
        rotate: [0, 100, 0],
      },
      next: {
        origin: 'right center',
        translate: ['5%', 0, -200],
        rotate: [0, -100, 0],
      },
    },
  })
})
