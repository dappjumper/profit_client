<template>
  <div>
    <v-card
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
          <v-card-text>
            <div>{{ bot.active ? 'This bot is active.' : 'This bot is not active.'}}</div>
            <div><br/></div>
            <div :key="" v-for="(value, name) in bot.t_info">
              <span v-if="name == 'username'"></span>
              <span v-else-if="name == 'token'"></span>
              <span v-else-if="name == 'is_bot'"></span>
              <span v-else-if="name == 'first_name'"></span>
              <span v-else>
                {{ name | readableKey }}: {{ value | readableValue }}
              </span> 
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn :loading="loading.active" :disabled="loading.active" @click="setActivation(bot.active ? false : true)">
              {{bot.active ? 'De-activate' : 'Activate'}}
            </v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>
    <v-card
      class="mb-4"
      v-if="loading.modules"
      loading
      disabled
    >
      <v-card-title>Modules</v-card-title>
      <v-card-text>Loading modules...</v-card-text>
    </v-card>
    <v-card v-else v-for="module in extras.modules" :key="module.id">
      <v-card-title>{{module.name}}</v-card-title>
      <v-card-text>{{module.description}}</v-card-text>
      <div v-if="bot.modules[module.id]">
        <v-card-text v-if="bot.modules[module.id].active">
          <div v-for="option in module.options">
            <v-checkbox @change="setModule(module.id, {[option.id]: bot.modules[module.id][option.id]})" v-model="bot.modules[module.id][option.id]" :label="option.name"/>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn :loading="loading['module_'+module.id]" @click="setModule(module.id, {active: !bot.modules[module.id].active})">{{bot.modules[module.id].active ? 'Disable' : 'Enable'}}</v-btn>
        </v-card-actions>
      </div>
      <div v-else>
        <v-card-actions>
          <v-btn :loading="loading['module_'+module.id]" @click="setModule(module.id, {active: true})">Enable</v-btn>
        </v-card-actions>
      </div>
    </v-card>
    <v-btn dark class="mt-4" link to="/app/bots">
      Back to bots list
    </v-btn>
  </div>
</template>

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
  },
  filters: {
    readableKey (value) {
      return value.charAt(0).toUpperCase() + value.slice(1).replaceAll('_',' ')
    },
    readableValue (value) {
      if (typeof value == 'boolean') return (value ? 'yes' : 'no')
      return value
    }
  }
}

</script>