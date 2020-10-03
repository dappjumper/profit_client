<template>
  <v-app style="background:rgb(240,240,240);" id="inspire">
    <div v-if="ready && user">
      <v-navigation-drawer
            app
            permanent
      >
        <v-list
          class="pt-0"
        >
          <v-list-item to="/" class="px-4 py-4" style="text-align:left;">
              <img style="width:auto; max-height:40px; display:inline-block;" src="~assets/logo.svg"></img>
          </v-list-item>
          <v-list-item exact-active-class="none" link to="/app/profile">
            <v-list-item-content>
              <v-list-item-title class="title">
                {{user.email}}
              </v-list-item-title>
              <v-list-item-subtitle>{{user.id}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item exact link to="/app" active="false">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/app/bots">
            <v-list-item-icon>
              <v-icon>mdi-robot</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Bots</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/app/communities">
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Communities</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/app/profile">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <nuxt class="px-8 py-4"/>
      </v-main>
    </div>
    <div v-else>
      Loading...
    </div>
  </v-app>
</template>

<script>

import { mapState, mapMutations, mapActions } from 'vuex'
import AccessForm from './../components/AccessForm'
import Error from './error'

export default {
  name: 'Dashboard',
  layout: 'app',
  components: {
    AccessForm,
    Error
  },
  data: () => ({
    ready: false
  }),
  computed: {
    ...mapState('user', ['isLoggedIn', 'user', 'token'])
  },
  methods: {
    ...mapActions('user', ['tryJWT']),
    ...mapMutations('user', ['loadUser', 'setUser', 'forgetUser']),
    returnToLogin () {
      this.$router.push('/login')
    }
  },
  watch: {
    isLoggedIn (val) {
      if (!val) return this.returnToLogin()
      this.ready = true
    }
  },
  mounted () {
    this.loadUser()
    if(!this.token) return this.returnToLogin()
    if(this.isLoggedIn) return this.ready = true // No need to try the JWT after a successful login/registration
    this.tryJWT({
      url: 'user/me'
    })
    .then((result)=>{
      if (!result.data.ok) {
        this.forgetUser()
        return this.returnToLogin()
      }
      this.ready = true
    })
    .catch((error)=>{
      return this.returnToLogin()
    })
  }
}
</script>