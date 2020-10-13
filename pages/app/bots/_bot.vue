<template>
  <section>
    <BotDetails :botID="$route.params.bot"/>
  </section>
</template>

<script>

import BotDetails from './../../../components/BotDetails'

export default {
  name: 'BotDetailPage',
  layout: 'app',
  components: {
    BotDetails
  }
}
</script>