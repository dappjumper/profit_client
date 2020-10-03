<template>
  <section>
    <h1>Bots</h1>
  </section>
</template>

<script>

  import { mapMutations, mapState } from 'vuex'

  export default {
    name: 'DashBots',
    layout: 'app',
    computed: {
      ...mapState('user',['user'])
    },
    methods: {
      ...mapMutations('user', ['forgetUser'])
    }
  }
</script>