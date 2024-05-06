import './style.scss'
import Page from './src/Page'
import About from './src/Page/about'
import Product from './src/Page/product'

class App {
  constructor(options) {
    this.element = options.main

    this.createPage()
    this.addEventListeners()
  }

  async createPage() {
    this.fontLoaded = await document.fonts.ready

    document.documentElement.classList.add('loaded')

    this.page = new Page({
      element: this.element,
    })
    // create about page
    if (window.location.pathname === '/about-us') {
      this.about = new About({
        media: '.about_hero_media',
        content: '.about_hero_media_content',
      })
    } else if (window.location.pathname === '/product') {
      this.about = new Product({
        media: '.product_hero_media',
      })
    }

    this.page.create()
    this.page.show()
  }

  addEventListeners() {
    window.addEventListener('resize', this.onResize.bind(this))
  }

  onResize() {
    if (this.page && this.page.onResize) {
      this.page.onResize()
    }
  }
}

new App({ main: '.main' })
