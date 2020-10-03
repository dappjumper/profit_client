<template>
  <section>
    <h1>Communities</h1>
  </section>
</template>

<script>

  import { mapMutations, mapState } from 'vuex'

  export default {
    name: 'DashCommunities',
    layout: 'app',
    computed: {
      ...mapState('user',['user'])
    },
    methods: {
      ...mapMutations('user', ['forgetUser'])
    }
  }
</script>