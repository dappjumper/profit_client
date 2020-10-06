import { mapActions, mapMutations, mapState } from 'vuex'

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
  watch: {
    ready (isReady) {
      if(!isReady && !this.bot) return false
      this.loadBotAvatar({
        bot_id: this.bot.t_info.id,
        token: this.bot.t_info.token
      })
    }
  },
  methods: {
    ...mapActions('bots', ['api', 't_api']),
    ...mapActions('user', ['tryJWT']),
    ...mapMutations('user', ['unlistBot']),
    removeBot (botID, redirect) {
      this.ready = false
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
    },
    loadBot (botID) {
      this.api({
        bot_id: botID,
        url: '',
        method: 'get',
        cacheId: 'bot_'+botID
      })
      .then((result)=>{
        this.bot = result
      })
      .catch((err)=>{
        this.error = true
        this.errorString = err
        if(this.$route.path === '/app/bots') return this.removeBot(botID)
        this.$router.push('/app/bots')
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

      })
    }
  }
}