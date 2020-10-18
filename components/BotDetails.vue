<template>
  <pre>
    {{ bot }}
  </pre>
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