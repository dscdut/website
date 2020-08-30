import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { rootMutations } from '~/constants/vuex'

Vue.use(VueI18n)

export default ({ app, store, query }, inject) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      en: require('~/locales/en.json'),
      vi: require('~/locales/vi.json'),
    },
  })

  const changeLocale = (locale) => {
    // Set locale in i18n
    app.i18n.locale = locale
    // Set locale in VueX state
    store.commit(rootMutations.SET.LANG, locale)
    // Set locale in localStorage
    if (process.browser) {
      localStorage.setItem('locale', locale)
    }
    // Set locale in query param
    app.router.push({ query: { lang: locale } })
  }

  // process.browser slow initial load speed time
  // Use this to make sure that the important stuff is loaded first
  // By doing this, with a right amount of time, we seperate this action
  // from the initial load phase and gain some speading credit for SEO
  setTimeout(() => {
    if (process.browser) {
      if (!query.lang) {
        if (localStorage.getItem('locale')) {
          changeLocale(localStorage.getItem('locale'))
        }
      } else {
        changeLocale(query.lang)
      }
    }
  }, 1500)

  inject('changeLocale', changeLocale)
}
