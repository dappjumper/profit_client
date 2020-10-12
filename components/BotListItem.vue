<template>
  <v-card
    color="secondary"
    dark
    class="mb-4"
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        {{ botID }}
        <pre v-if="ready">
          {{ bot }}
        </pre>
        <pre v-else>Loading...</pre>
      </div>
    </div>
  </v-card>
</template>

<script>

import { botLogic } from './../mixins/botLogic'

export default {
  name: 'BotListItem',
  mixins: [botLogic],
  mounted () {

  }
}

</script>