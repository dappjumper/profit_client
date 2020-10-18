<template>
  <section>
    <BotDetails v-if="ready" :botID="$route.params.bot"/>
  </section>
</template>

<script>

import BotDetails from './../../../components/BotDetails'

export default {
  name: 'BotDetailPage',
  layout: 'app',
  data () {
    return {
      ready: false
    }
  },
  components: {
    BotDetails
  },
  mounted () {
    this.ready = true
    console.log(this.$route.params.bot)
  }
}
</script>