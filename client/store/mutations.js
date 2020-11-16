import Vue from 'vue'

/**
 * Root mutation module's enum
 */
export const rootMutations = {
  SET: {
    LANG: 'SET_LANG',
  },
  CLEAR: {},
  TOGGLE: {},
  ADD: {},
  REMOVE: {},
  INC: {},
  SUB: {},
}

export default {
  // Communicate with Devtools
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      Vue.set(state, 'locale', locale)
    }
  },
}
