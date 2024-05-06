import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default class About {
  constructor(options) {
    this.media = document.querySelector(options.media)
    this.content = document.querySelector(options.content)

    this.create()
  }

  create() {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.create({
      trigger: this.media,
      start: 'top top',
      end: 'top 20%',
      onEnter: () => {
        this.media.classList.add('is--scrolled')
      },
      onUpdate: () => {
        this.media.classList.toggle('is--scrolled')
      },
    })
  }
}
