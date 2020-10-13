import cache from './../dry/cache.js'
import api from './../dry/api.js'

export const botLogic = {
  data () {
    return {
      bot: null,
      ready: false,
      extras: {},
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
    this.bot = cache.load('bot', this.botID, 1)
    if (this.bot) {
      this.fetchAdditional()
      return this.ready = true
    }
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
        if(!this.bot.modules) this.bot.modules = {}
        this.ready = true
        this.fetchAdditional()
      })
      .catch((error)=>{
        this.errorFor.bot = error
      })
    },
    setLazy(key, value) {
        cache.save('lazy', key, value)
        this.extras[key] = value
        this.loading[key] = false
    },
    fetchLazy(array) {
      let current = array.pop()
      if(!current) return false
      const lazyCached = cache.load('lazy', current, 1)
      if(lazyCached) {
        this.setLazy(current, lazyCached)
        return this.fetchLazy(array)
      }
      api.bot({
        method: 'get',
        path: current
      })
      .then((result)=>{
        this.setLazy(current, result)
      })
      .catch((e)=>{})
      .finally(()=>{
        this.fetchLazy(array)
      })
    },
    fetchAdditional() {
      let loadThese = []
      for(const [key, value] of Object.entries(this.loading)) {
        if (value) loadThese.push(key)
      }
      if(loadThese.length) this.fetchLazy(loadThese)
    },
    setModule(mod, data) {
      this.loading = Object.assign({}, this.loading, { ['module_'+mod]: true })
      api.bot({
        botID: this.botID,
        path: 'module',
        method: 'patch',
        data: {
          module: mod,
          data
        }
      })
      .then((result)=>{
        this.bot.modules = this.bot.modules || {}
        for(let [key, value] of Object.entries(result)) {
          this.$set(this.bot.modules[mod], key, value);
        }
        this.save(this.botID)
      })
      .catch(()=>{

      })
      .finally(()=>{
        this.loading['module_'+mod] = false
      })
    },
    setActivation(state) {
      this.loading.active = true
      api.bot({
        botID: this.botID,
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