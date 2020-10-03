<template>
  <div class="container">
    <h1>Project Finch - Register</h1>
    <AccessForm type="register"/>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
import AccessForm from './../components/AccessForm'

export default {
  name: 'PageRegister',
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