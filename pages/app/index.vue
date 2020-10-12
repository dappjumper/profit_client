<template>
  <section>
    <h1>Dashboard</h1>
  </section>
</template>

<script>

  import { mapState } from 'vuex'

  export default {
    name: 'DashIndex',
    layout: 'app',
    computed: {
      ...mapState('user', ['user'])
    }
  }
</script>