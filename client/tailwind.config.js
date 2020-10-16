/* eslint-disable */
/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const colors = require('./constants/config/tailwindcss/colors.js')
const nuxtConfig = require('../nuxt.config').default
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  important: true,
  theme: {
    extend: {
      colors: colors,
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      nuxtConfig.srcDir + '/components/**/*.vue',
      nuxtConfig.srcDir + '/layouts/**/*.vue',
      nuxtConfig.srcDir + '/pages/**/*.vue',
      nuxtConfig.srcDir + '/plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
