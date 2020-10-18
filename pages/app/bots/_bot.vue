<template>
  <v-container>
    <pre v-if="bot">
      {{ bot }}
    </pre>
  </v-container>
</template>

<script>
import { botLogic } from './../../../mixins/botLogic'
export default {
  name: 'BotDetailPage',
  layout: 'app',
  mixins: [botLogic],
  computed: {
    botID () {
      return this.$route.params.bot
    }
  },
  components: {
    BotDetails
  }
}
</script>