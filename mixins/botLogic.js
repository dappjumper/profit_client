import { mapActions, mapMutations, mapState } from 'vuex'

export const botLogic = {
  computed: {
    ...mapState('user',['user'])
  },
  data () {
    return {
      bot: {},
      ready: false,
      error: false,
      errorString: ''
    }
  },
  methods: {
    ...mapActions('bots', ['api']),
    ...mapMutations('user', ['removeBot']),
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
        this.removeBot(botID)
      })
      .finally(()=>{
        this.ready = true
      })
    }
  }
}