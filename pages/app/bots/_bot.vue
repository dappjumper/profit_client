<template>
  <section>
    <BotDetails :botID="botID"/>
  </section>
</template>

<script>

import BotDetails from './../../../components/BotDetails'

export default {
  name: 'BotDetailPage',
  layout: 'app',
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