<template>
  <section>
    <h1>Profile</h1>
    <pre>{{user}}</pre>
    <v-btn color="red" @click="logout()" dark>Log out</v-btn>
  </section>
</template>

<script>

  import { mapState } from 'vuex'

  export default {
    name: 'DashProfile',
    layout: 'app',
    computed: {
      ...mapState('user', ['user'])
    },
    methods: {
      logout () {
        localStorage.clear()
        window.location.href="/login"
      }
    }
  }
</script>