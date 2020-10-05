<template>
  <section>
    <h1>Bot</h1>
    <div v-if="ready">
      <div v-if="!error">
        <h3>{{bot.t_info.first_name}}</h3>
        <a :href="'https://t.me/'+bot.t_info.username" target="_blank">@{{bot.t_info.username}}</a>
      </div>
      <div v-else>
        Error: {{errorString}}
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </section>
</template>

<script>

  import { mapMutations, mapState, mapActions } from 'vuex'

  export default {
    name: 'DashBot',
    layout: 'app',
    components: {},
    computed: {
      ...mapState('user',['user']),
      id () {
        return this.$route.params.bot
      }
    },
    data () {
      return {
        bot: {},
        ready: false,
        error: false,
        errorString: ''
      }
    },
    mounted () {
      this.api({
        bot_id: this.id,
        url: '',
        method: 'get',
        cacheId: 'bot_'+this.id
      })
        .then((result)=>{
          console.log(result)
          this.bot = result
        })
        .catch((err)=>{
          this.error = true
          this.errorString = err
          this.removeBot(this.id)
        })
        .finally(()=>{
          this.ready = true
        })
    },
    methods: {
      ...mapActions('bots', ['api']),
      ...mapMutations('user', ['removeBot'])
    }
  }
</script>