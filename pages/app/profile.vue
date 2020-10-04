<template>
  <section>
    <h1>Profile</h1>
    <pre>{{user}}</pre>
    <v-btn color="red" dark @click="forgetUser(); $router.push('/login')">Log out</v-btn>
  </section>
</template>

<script>

  import { mapMutations, mapState } from 'vuex'

  export default {
    name: 'DashProfile',
    layout: 'app',
    computed: {
      ...mapState('user',['user'])
    },
    methods: {
      ...mapMutations('user', ['forgetUser'])
    }
  }
</script>