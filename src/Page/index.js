import { each, map } from 'lodash'
import Title from '../animations/title'
import Description from '../animations/description'
import ImageAnimation from '../animations/image'
import SlideUp from '../animations/slideup'
import Accordion from '../animations/accordion'
import gsap from 'gsap'
import Lenis from '@studio-freight/lenis'

export default class Page {
  constructor(options) {
    this.element = options.element
    this.animationElement = {
      title: '[da = t]',
      description: '[da = d]',
      slideUp: '[da = s]',
      image: '[da = i]',
      accordion: '[data-accordion = wrapper]',
    }
    this.scrollLerp = 1
    if (window.innerWidth > 768) {
      this.scrollLerp = 0.1
    }
    this.createSmoothScroll()
  }

  create() {
    this.elements = {}
    each(this.animationElement, (item, index) => {
      if (item instanceof window.HTMLElement || item instanceof window.NodeList || Array.isArray(item)) {
        this.elements[index] = item
      } else {
        this.elements[index] = document.querySelectorAll(item)
        if (this.elements[index].length === 0) {
          this.elements[index] = null
        } else if (this.elements[index].length === 1) {
          this.elements[index] = document.querySelectorAll(item)
        }
      }
    })

    this.createAnimations()
  }

  createSmoothScroll() {
    this.lenis = new Lenis({
      lerp: this.scrollLerp,
      // syncTouch: true,
      // syncTouchLerp: this.scrollLerp * 0.75,
    })
    this.update()
  }

  update(time) {
    this.lenis.raf(time)
    requestAnimationFrame(this.update.bind(this))
  }

  createAnimations() {
    this.animations = []

    this.animationTitles = map(this.elements.title, (element) => {
      return new Title({ element })
    })
    this.animations.push([...this.animationTitles])

    this.animationDescription = map(this.elements.description, (element) => {
      return new Description({ element })
    })
    this.animations.push([...this.animationDescription])

    this.animationImage = map(this.elements.image, (element) => {
      return new ImageAnimation({ element })
    })
    this.animations.push([...this.animationImage])

    this.animationSlideup = map(this.elements.slideUp, (element) => {
      return new SlideUp({ element })
    })
    this.animations.push([...this.animationSlideup])

    this.animationAccordion = map(this.elements.accordion, (element) => {
      return new Accordion({ element })
    })
    this.animations.push([...this.animationAccordion])
  }

  show(animation) {
    return new Promise((resolve) => {
      if (animation) {
        this.animateIn = animation
      } else {
        this.animateIn = gsap.timeline()

        this.animateIn.fromTo(
          this.element,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1.2,
            ease: 'Power1.easeIn',
          }
        )
      }
      this.animateIn.call((_) => {
        this.addEventListeners()
        resolve()
      })
    })
  }

  addEventListeners() {
    window.addEventListener('scroll', this.onScroll.bind(this))
  }

  onScroll() {
    const html = document.documentElement
    if (this.lenis) {
      if (Math.round(this.lenis.progress * 100) > 0 && !html.classList.contains('scrolled')) {
        html.classList.add('scrolled')
      } else if (Math.round(this.lenis.progress * 100) === 0 && html.classList.contains('scrolled')) {
        html.classList.remove('scrolled')
      }
      if (window.innerWidth > 768) {
        if (this.lenis.direction === -1) {
          html.classList.add('scroll-up')
          html.classList.remove('scroll-down')
        } else if (this.lenis.direction === 1) {
          html.classList.remove('scroll-up')
          html.classList.add('scroll-down')
        }
      }
    }
  }

  onResize() {}
}
