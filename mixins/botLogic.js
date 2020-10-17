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
    this.bot = cache.load('bot', this.botID, 0)
    if (this.bot) {
      this.fetchAdditional()
      return this.ready = true
    }
    this.fetchBot(this.botID)
  },
  methods: {
    getModuleOptions (module) {
      this.bot.modules = this.bot.modules || {}
      this.bot.modules[module.id] = this.bot.modules[module.id] || {}
      for(let i = 0; i<module.options.length; i++) {
        this.bot.modules[module.id][module.options[i].id] = this.getOptionValue(module, module.options[i])
      }
      return module.options
    },
    getOptionValue (module, option) {
      if (typeof this.bot.modules == 'undefined') return option.default
      if (typeof this.bot.modules[module.id] == 'undefined') return option.default
      return (typeof this.bot.modules[module.id][option.id] == 'undefined' ? option.default : this.bot.modules[module.id][option.id])
    },
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
      const lazyCached = cache.load('lazy', current, 0)
      if(lazyCached) {
        this.setLazy(current, lazyCached)
        return this.fetchLazy(array)
      }
      api.basic({
        method: 'get',
        path: current
      })
      .then((result)=>{
        this.setLazy(current, result)
      })
      .catch((e)=>{
        console.log(e)
      })
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
      this.loading = Object.assign({}, this.loading, { ['module_'+mod.id]: true })
      api.bot({
        botID: this.botID,
        path: mod.id,
        method: 'patch',
        data: {
          data
        }
      })
      .then((result)=>{
        this.bot.modules = this.bot.modules || {}
        for(let [key, value] of Object.entries(result)) {
          this.$set(this.bot.modules[mod.id], key, value);
        }
        this.save(this.botID)
      })
      .catch((e)=>{
        console.log(e, 'some error')
      })
      .finally(()=>{
        this.loading['module_'+mod.id] = false
      })
    },
    setActivation() {
      this.loading.active = true
      api.bot({
        botID: this.botID,
        path: '',
        method: 'patch',
        data: {
          data: {
            active: !this.bot.active
          }
        }
      })
      .then((result)=>{
        if(typeof result.active !== 'undefined') {
          this.bot.active = result.active
          this.save(this.botID)
        }
      })
      .catch((e)=>{
        console.log(e)
      })
      .finally(()=>{
        this.loading.active = false
      })
    }
  }
}