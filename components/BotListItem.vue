<template>
  <v-card
    color="secondary"
    dark
    class="mb-4"
    :disabled="loading.forget"
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div v-if="!ready">
        <v-card-title>Loading...</v-card-title>
        <v-card-subtitle>Loading...</v-card-subtitle>
        <v-card-text>Loading...</v-card-text>
        <v-card-actions>Loading...</v-card-actions>
      </div>
      <div v-else>
        <v-card-title class="mb-0 pb-0">{{bot.t_info.first_name}}</v-card-title>
        <v-chip
          class="ml-2"
          color="rgba(0,0,0,0.2)"
          label
          text-color="white"
        >
          {{ bot.subscription ? bot.subscription.tier + '(' + (bot.subscription.expiry | monthsUntil)+'months left)' : 'Free limited functionality'}}
        </v-chip>
        <v-card-subtitle>@{{bot.t_info.username}}</v-card-subtitle>
        <v-card-text>{{ bot.active ? 'This bot is active.' : 'This bot is not active.'}}</v-card-text>
        <v-card-actions>
          <v-btn :loading="loading.active" :disabled="loading.active" @click="setActivation(bot.active ? false : true)">
            {{bot.active ? 'De-activate' : 'Activate'}}
          </v-btn>
          <v-btn link @click="selectBot(botID)">
            Settings
          </v-btn>
          <v-btn link :loading="loading.forget" @click="forgetBot(botID)">
            Forget
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
  mixins: [botLogic],
  filters: {
    monthsUntil (value) {
      return '123'
    }
  }
}

</script>