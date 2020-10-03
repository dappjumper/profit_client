<template>
  <div class="container">
    <h1>Project Finch</h1>
    <router-link :to="token ? '/app' : '/login'">
      <v-btn
        color="primary"
        elevation="2"
      >
      <v-icon
        left
        dark
      >{{ token ? 'mdi-view-dashboard' : 'mdi-rocket' }}</v-icon>
      {{ token ? 'Dashboard' : 'Get started' }}
      </v-btn>
    </router-link>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'PageIndex',
  layout: 'landing',
  computed: {
    ...mapState('user', ['isLoggedIn', 'user', 'token'])
  },
  methods: {
    ...mapMutations('user', ['loadUser', 'setUser', 'forgetUser'])
  },
  mounted () {
    if (!this.loadUser()) return false
  }
}
</script>