<template>
  <v-app style="background:rgb(240,240,240);" id="inspire">
    <div v-if="ready">
      <v-app-bar style="z-index:9; position:fixed;" dark>
        <a style="width:240px; margin-right:16px" @click="$router.push('/')">
          <img style="width:auto; max-height:40px; display:inline-block;" src="~assets/logo_white.svg"></img>
        </a>
        <v-toolbar-title style="text-transform: capitalize;">{{ page }}</v-toolbar-title>
      </v-app-bar>
      <v-main style="margin-top:64px;">
        <SideBar/>
        <nuxt class="px-0 py-0"/>
      </v-main>
    </div>
    <div v-else>
      Loading...
    </div>
  </v-app>
</template>

<script>

import api from './../dry/api.js'
import cache from './../dry/cache.js'
import { userLogic } from './../mixins/userLogic.js'
import AccessForm from './../components/AccessForm'
import SideBar from './../components/SideBar'
import Error from './error'

export default {
  name: 'Dashboard',
  mixins: [userLogic],
  components: {
    AccessForm,
    SideBar,
    Error
  },
  computed: {
    page () {
      if (this.$route.path == '/app' || this.$route.path == '/app/') return 'Dashboard'
      return this.$route.path.replaceAll('/app/','').replaceAll('/',' - ') + (this.$route.hash ? 'Details' : '')
    }
  },
  mounted () {
    this.boot()
  }
}
</script>