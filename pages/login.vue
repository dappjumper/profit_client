<template>
  <div class="container">
    <h1>Project Finch - Login</h1>
    <AccessForm type="login"/>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
import AccessForm from './../components/AccessForm'

export default {
  name: 'PageLogin',
  layout: 'landing',
  computed: {
    ...mapState('user', ['isLoggedIn', 'user', 'token'])
  },
  methods: {
    ...mapMutations('user', ['loadUser', 'setUser', 'forgetUser'])
  },
  components: {
    AccessForm
  },
  mounted () {
    this.loadUser()
    if(this.token) this.$router.push('/app')
  }
}
</script>