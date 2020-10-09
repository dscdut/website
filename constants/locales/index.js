const enModule = require.context('./', true, /en.js/)
enModule.keys().forEach(enModule)
const en = {}
enModule.keys().forEach((fileName) => {
  const temp = fileName.replace(/(\.\/|\.js)/g, '').split('/')
  const moduleName = temp.length > 1 ? temp[temp.length - 2] : temp[0]
  en[moduleName] = enModule(fileName).default
})

const viModule = require.context('./', true, /vi.js/)
viModule.keys().forEach(viModule)
const vi = {}
viModule.keys().forEach((fileName) => {
  const temp = fileName.replace(/(\.\/|\.js)/g, '').split('/')
  const moduleName = temp.length > 1 ? temp[temp.length - 2] : temp[0]
  vi[moduleName] = viModule(fileName).default
})

export default { en, vi }
