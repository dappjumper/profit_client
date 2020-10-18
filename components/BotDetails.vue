<template>
  <div>
    <div v-if="ready">
      
      <v-card loading disabled v-if="loading.modules">
        <v-card-title>Modules</v-card-title>
        <v-card-text>Loading...</v-card-text>
      </v-card>
      <div v-else>
        <v-card :loading="loading['module_'+module.id]" :disabled="loading['module_'+module.id]" :key="module.id" v-for="module in extras.modules">
          <v-card-title>{{ module.name }}</v-card-title>
          <v-card-subtitle>
            <div>{{ module.description }}</div>
            <div v-if="module.slots">
              <v-chip
                :key="'module_'+module.id+'_slot_'+slot"
                v-for="slot in module.slots"
                class="mr-2"
                color="grey"
                label
                text-color="white"
              >
                <v-icon left v-if="slot == 'group'">
                  mdi-account-multiple
                </v-icon>
                <v-icon left v-else-if="slot == 'private'">
                  mdi-account
                </v-icon>
                <v-icon left v-else-if="slot == 'channel'">
                  mdi-bullhorn
                </v-icon>
                <v-icon left v-else-if="slot == 'inline'">
                  mdi-text-short
                </v-icon>
                <v-icon left v-else-if="slot == 'callback'">
                  mdi-gesture-tap-button
                </v-icon>
                <v-icon left v-else>
                  mdi-help
                </v-icon>
                {{slot}}
              </v-chip>
            </div>
          </v-card-subtitle>
          <div>
            <v-card-text>
              <div :key="module.id+'_'+option.id" v-for="option in getModuleOptions(module)">
                <div v-if="option.type == 'Boolean'">
                  <v-checkbox dense :label="option.name" v-model="bot.modules[module.id][option.id]" @change="setModule(module, { [option.id]: bot.modules[module.id][option.id] })"></v-checkbox>
                </div>
                <div v-else>
                  {{ option.name }}: {{ getOptionValue(module, option) }}
                </div>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn :dark="!getOptionValue(module, { id: 'active', default: false })" @click="setModule(module, { active: !getOptionValue(module, { id: 'active', default: false }) })">
                {{ !getOptionValue(module, { id: 'active', default: false }) ? 'Enable' : 'Disable' }}
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </div>
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