<template>
  <v-list-item :loading="!ready" link :to="'/app/bots/'+botID">
    <v-list-item-icon>
      <v-icon>mdi-robot</v-icon>
    </v-list-item-icon>
    <v-list-item-title v-if="ready">{{ bot.t_info.first_name }} @{{bot.t_info.username}}</v-list-item-title>
    <v-list-item-title v-else>Loading...</v-list-item-title>
  </v-list-item>
</template>

<script>

import { botLogic } from './../mixins/botLogic'

export default {
  name: 'BotListItem',
  props: ['botID'],
  mixins: [botLogic],
  mounted () {
    this.loadBot(this.botID)
  }
}

</script>