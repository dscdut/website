const locale = 'en'
export default {
  ...require(`./common/components/layout/navbar/${locale}.json`),
  ...require(`./common/components/layout/sidebar/${locale}.json`),
  ...require(`./common/error/${locale}.json`),
  ...require(`./common/meta/${locale}.json`),
  ...require(`./common/validate/${locale}.json`),
  ...require(`./pages/index/${locale}.json`),
  ...require(`./pages/login/${locale}.json`),
}
