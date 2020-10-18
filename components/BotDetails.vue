<template>
  <div>
    <div v-if="ready">
      <v-card
        class="mb-4"
        v-if="bot.t_info"
      >
        <v-card-title>
          {{ bot.t_info.first_name }}
        </v-card-title>
        <v-card-subtitle>
          <a :href="'https://t.me/'+bot.t_info.username" target="_blank">
            @{{ bot.t_info.username }}
          </a>
        </v-card-subtitle>
        <v-card-text dense>
          <p>
            {{ bot.active ? 'This bot is active' : 'This bot is inactive' }}.
          </p>
          <p>
            {{ bot.t_info.can_join_groups ? 'Can' : 'Can not' }} be ordered to join groups.
          </p>
          <p>
            {{ bot.t_info.can_read_all_group_messages ? 'Can read all group messages' : 'Can not read all group messages unless elevated to admin' }}.
          </p>
          <p>
            {{ bot.t_info.supports_inline_queries ? 'Can read inline queries' : 'Can not read inline queries. Talk to @botfather to resolve if required' }}.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="setActivation(!bot.active)" :dark="!bot.active && !loading.active" :disabled="loading.active" :loading="loading.active">
            {{ bot.active ? 'De-activate' : 'Activate' }}
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card loading disabled v-if="loading.modules">
        <v-card-title>Modules</v-card-title>
        <v-card-text>Loading...</v-card-text>
      </v-card>
      
    </div>
    <v-card v-else>
      Loading...
    </v-card>
    <v-btn dark class="mt-4" link to="/app/bots">
      Back to bots list
    </v-btn>
  </div>
</template>

<style scoped>
  a {
    color: inherit;
    text-decoration: none;
  }
  [dense] p {
    margin-top:.5em;
    margin-bottom:.5rem;
  }
  .v-input {
    margin-top:0;
  }
</style>

<script>

import { botLogic } from './../mixins/botLogic'

import api from './../dry/api.js'

export default {
  name: 'BotDetails',
  mixins: [botLogic],
  data () {
    return {
      loading: {
        modules: true
      }
    }
  }
}

</script>