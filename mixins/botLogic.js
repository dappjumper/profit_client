import cache from './../dry/cache.js'
import api from './../dry/api.js'

export const botLogic = {
  data () {
    return {
      bot: null,
      ready: false,
      errorFor: {
        bot: null
      }
    }
  },
  props: ['botID'],
  beforeMount () {
    if (!this.botID) return this.errorFor.bot = 'No bot ID specified'
    this.bot = cache.load('bot', this.botID, 10)
    if (this.bot) return this.ready = true
    this.fetchBot(this.botID)
  },
  methods: {
    fetchBot(botID) {
      this.ready = false
      api.bot({
        botID,
        method: 'get'
      })
      .then((result)=>{
        cache.save('bot', botID, result)
        this.bot = result
        this.ready = true
      })
      .catch((error)=>{
        this.errorFor.bot = error
      })
    }
  }
}