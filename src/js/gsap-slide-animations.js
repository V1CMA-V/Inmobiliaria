import gsap from 'gsap'

export function animateSlideContent() {
  const activeSlide = document.querySelector('swiper-slide.swiper-slide-active')
  if (!activeSlide) return

  const title = activeSlide.querySelector('.slide-title')
  const description = activeSlide.querySelector('.slide-description')
  const button = activeSlide.querySelector('.slide-button')
  const image = activeSlide.querySelector('img')

  const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.8 } })

  if (title) {
    tl.fromTo(title, { y: 40, opacity: 0 }, { y: 0, opacity: 1 })
  }

  if (description) {
    tl.fromTo(description, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.6')
  }

  if (button) {
    tl.fromTo(button, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1 }, '-=0.5')
  }

  if (image) {
    // Parallax efecto leve (imagen se desliza hacia arriba)
    gsap.fromTo(
      image,
      { y: 30, scale: 1.05, opacity: 0.7 },
      { y: 0, scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
    )
  }
}
