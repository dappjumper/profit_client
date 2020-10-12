import cache from './../dry/cache.js'
import api from './../dry/api.js'

export const botLogic = {
  data () {
    return {
      bot: null,
      ready: false,
      errorFor: {
        bot: null
      },
      loading: {
        active: false
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
    save(botID) {
      cache.save('bot', botID, this.bot)
    },
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
    },
    setActivation(botID, state) {
      this.loading.active = true
      api.bot({
        botID,
        path: 'activation',
        method: 'patch',
        data: {
          state
        }
      })
      .then((result)=>{
        if(typeof result.state !== 'undefined') {
          this.bot.active = result.state
          this.save(this.botID)
        }
      })
      .catch(()=>{

      })
      .finally(()=>{
        this.loading.active = false
      })
    }
  }
}