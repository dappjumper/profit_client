<template>
  <v-card
    color="secondary"
    dark
    class="mb-4"
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div v-if="!ready">
        <v-card-title>Loading...</v-card-title>
        <v-card-subtitle>Loading...</v-card-subtitle>
        <v-card-text>Loading...</v-card-text>
        <v-card-actions>Loading...</v-card-actions>
      </div>
      <div v-else>
        <v-card-title>{{bot.t_info.first_name}}</v-card-title>
        <v-card-subtitle>@{{bot.t_info.username}}</v-card-subtitle>
        <v-card-text>{{ bot.active ? 'This bot is active.' : 'This bot is not active.'}}</v-card-text>
        <v-card-actions>
          <v-btn :loading="loading.active" :disabled="loading.active" @click="setActivation(bot.active ? false : true)">
            {{bot.active ? 'De-activate' : 'Activate'}}
          </v-btn>
          <v-btn link :to="'/app/bots/'+botID">
            Settings
          </v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script>

import { botLogic } from './../mixins/botLogic'

export default {
  name: 'BotListItem',
  mixins: [botLogic]
}

</script>