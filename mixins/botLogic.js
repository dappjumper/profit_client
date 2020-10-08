import { mapActions, mapMutations, mapState } from 'vuex'

import cache from './../dry/cache.js'
import api from './../dry/api.js'

export const botLogic = {
  computed: {
    ...mapState('user',['user'])
  },
  data () {
    return {
      bot: {},
      bot_avatar: '',
      ready: false,
      error: false,
      errorString: ''
    }
  },
  methods: {
    ...mapActions('bots', ['api', 't_api']),
    ...mapActions('user', ['tryJWT']),
    ...mapMutations('user', ['unlistBot']),
    ...mapMutations('bots', ['updateBot']),
    removeBot (botID, redirect) {
      /*this.ready = false
      this.tryJWT({
        url: 'user/bot/'+this.bot._id,
        method: 'delete'
      })
      .then((result)=>{
        if (!result.data.ok) {
          return this.ready = true
        }
        this.unlistBot(this.bot._id)
        if(this.$route.path !== '/app/bots') this.$router.push('/app/bots')
      })
      .catch((error)=>{
        this.$router.push('/app/bots')
      })
      */
    },
    loadBot (botID) {
      const cachedBot = cache.load('bot', botID, 1)
      if (cachedBot) {
        console.log('Using cached bot')
        this.bot = cachedBot
        return this.ready = true
      }
      console.log('Getting bot data')
      api.bot({
        botID: botID,
        method: 'get'
      })
      .then((result)=>{
        cache.save('bot', botID, result)
        this.bot = result
        this.ready = true
      })
      .catch((error)=>{
        console.log('Failed getting bot information', error)
      })
    },
    toggleActivation (botID) {
      /*
      this.ready = false
      this.api({
        bot_id: botID,
        url: 'activation',
        method: 'patch',
        data: {
          state: !this.bot.active
        }
      })
      .then((result)=>{
        if(typeof result.state === 'undefined') return false
        this.updateBot({
          bot: this.bot,
          cacheId: 'bot_'+botID,
          data: {
            active: result.state
          }
        })
      })
      .catch((err)=>{
        this.error = true
        this.errorString = err
      })
      .finally(()=>{
        this.ready = true
      })
    },
    loadBotAvatar (payload) {
      this.t_api({
        url: 'getUserProfilePhotos',
        bot_id: payload.bot_id,
        token: payload.token,
        data: {
          user_id: payload.bot_id,
          limit: 1
        },
        cacheId: 't_userProfilePhotos_'+payload.bot_id
      })
      .then((result)=>{
        if(result.photos) {
          const retrieveThis = result.photos[0][result.photos.length-1].file_id
          this.t_api({
            url: 'getFile',
            bot_id: payload.bot_id,
            token: payload.token,
            data: {
              file_id: retrieveThis
            },
            cacheId: 't_getFile_'+payload.bot_id
          })
          .then((result)=>{
            if(result.file_path) this.bot_avatar = `https://api.telegram.org/file/bot${payload.token}/${result.file_path}`
          })
          .catch((err)=>{})
        }
      })
      .catch((err)=>{

      })
      .finally(()=>{

      })*/
    }
  }
}