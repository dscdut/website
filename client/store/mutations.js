import Vue from 'vue'
export default {
  // Communicate with Devtools
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      Vue.set(state, 'locale', locale)
    }
  },
}
