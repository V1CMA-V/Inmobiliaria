import gsap from 'gsap'

export function animateSlideContent(index) {
  console.log('Animacion ....')
  // Selecciona todos los slides visibles en el DOM renderizado (no el shadow DOM)
  const slides = document.querySelectorAll('.swiper-slide')
  const activeSlide = slides[index]

  if (!activeSlide) return

  const title = activeSlide.querySelector('.slide-title')
  const button = activeSlide.querySelector('.slide-button')

  if (title) {
    gsap.fromTo(title, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'expo.out' })
  }

  if (button) {
    gsap.fromTo(
      button,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 0.3, ease: 'back.out(1.7)' }
    )
  }
}
