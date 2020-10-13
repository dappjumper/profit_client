import api from './../dry/api.js'
import cache from './../dry/cache.js'

import { mapState, mapMutations } from 'vuex'

export const userLogic = {
  data () {
    return {
      ...mapState('user', ['user']),
      ready: false
    }
  },
  methods: {
    ...mapMutations('user',['set']),
    boot () {
      if(!cache.metadata) cache.boot()
      if(!api.token) api.boot({
        handler: this.$axios,
        token: cache.load('user', 'token', 43800),
        API_BOT: process.env.BOT_API,
        API_USER: process.env.USER_API,
        API_TELEGRAM: process.env.TELEGRAM_API,
      })
      if(!api.token) return this.$router.push('/login')
      this.fetchUser()
    },
    fetchUser () {
      this.ready = false
      api.user({
        method: 'get',
        path: 'me'
      })
        .then((result)=>{
          this.set({
            user: result,
            token: api.token
          })
          this.ready = true
        })
        .catch((e)=>{ 
          this.$router.push('/login') 
        })
    }
  }
}