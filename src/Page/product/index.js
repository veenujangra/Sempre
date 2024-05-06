import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
export default class Product {
  constructor(options) {
    this.media = document.querySelectorAll(options.media)

    this.create()
  }

  create() {
    gsap.registerPlugin(ScrollTrigger)

    this.tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.media,
        start: 'top 20%',
        end: 'center center',
        scrub: 1,
        // markers: 1,
      },
    })

    this.tl.fromTo(
      this.media,
      {
        autoAlpha: 0.4,
      },
      {
        autoAlpha: 1,
        scrub: 1,
      }
    )
  }
}
