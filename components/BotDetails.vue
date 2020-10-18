<template>
  <div>
    <div v-if="ready && bot">
    </div>
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