import Animation from '..'
import SplitType from 'split-type'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default class Description extends Animation {
  constructor({ element }) {
    super({ element })
    this.element = element

    this.animationOptions = {
      delay: this.element.getAttribute('dd') || 0.0,
      stagger: this.element.getAttribute('data-stagger') || 0.1,
      ease: this.element.getAttribute('data-ease') || 'Power1.easeOut',
      duration: this.element.getAttribute('data-duration') || 0.8,
    }

    this.create()
  }

  create() {
    this.text = new SplitType(this.element)

    this.text.lines.forEach((item) => {
      var parent = item.parentNode
      var wrapper = document.createElement('div')
      wrapper.classList.add('line_wrapper')
      parent.replaceChild(wrapper, item)
      wrapper.appendChild(item)
    })
  }

  animateIn() {
    if (this.element.classList.contains('visible')) return

    gsap.registerPlugin(ScrollTrigger)

    this.tl = gsap.timeline({
      // delay: this.animationOptions.delay,
      onComplete: () => {
        this.element.classList.add('visible')
      },
    })

    this.tl.from(this.text.chars, {
      scrollTrigger: {
        trigger: this.element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
        // markers: 1,
      },
      opacity: 0.2,
      stagger: 0.1,
    })
  }

  animateOut() {}

  onResize() {
    // this.create()
  }
}
