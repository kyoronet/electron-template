module.exports = {
  mode: 'spa',
  head: {
    // Headers of the page
    title: '{{name}}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  loading: {
    color: '#fff'
  },
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        // Run ESLint on save
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.target = 'electron-renderer'
      }
    }
  },
  dev: process.env.NODE_ENV === 'DEV',
  css: ['@/assets/css/global.css']
}
