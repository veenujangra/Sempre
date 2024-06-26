export default class Navigation {
  constructor(options) {
    this.nav = document.querySelector(options.element)
    this.modalTrigger = document.querySelector(options.modalTrigger)
    this.modalCloseTrigger = document.querySelector(options.modalClose)
    this.lenis = options.lenis
    this.addEventListeners()
  }

  addEventListeners() {
    this.modalCloseTrigger.addEventListener('click', this.modalClose.bind(this))
    this.modalTrigger.addEventListener('click', this.handleClick.bind(this))
  }

  handleClick() {
    if (document.body.classList.contains('nav_products_open')) {
      document.body.classList.remove('nav_products_open')
      this.lenis.start()
      return
    }
    document.body.classList.add('nav_products_open')
    this.lenis.stop()
  }

  modalClose() {
    document.body.classList.remove('nav_products_open')
    this.lenis.start()
  }
}
