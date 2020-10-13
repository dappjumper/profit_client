export default {
  buildModules: [
    ['@nuxtjs/vuetify', {}]
  ],

  modules: ['@nuxtjs/axios'],

  target: 'static',

  axios: {},
  env: {
    USER_API: process.env.USER_API || 'http://localhost:8000/user',
    BOT_API: process.env.BOT_API || 'http://localhost:8000/bot',
    TELEGRAM_API: process.env.TELEGRAM_API || 'https://api.telegram.org/bot'
  }
}