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
import { botLogic } from './../../../mixins/botLogic'

export default {
  name: 'BotDetailPage',
  layout: 'app',
  mixins: [botLogic],
  mounted () {
    this.loadBot(this.$route.params.bot)
  }
}
</script>