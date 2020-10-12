<template>
  <section>
    <h1>Communities</h1>
    <p>
      Nothing has been seen by any of your bots, add a bot and come back later.
    </p>
  </section>
</template>

<script>

  import { mapState } from 'vuex'

  export default {
    name: 'DashCommunities',
    layout: 'app',
    computed: {
      ...mapState('user', ['user'])
    }
  }
</script>