<template>
  <v-app style="background:rgb(240,240,240);" id="inspire">
    <div v-if="ready">
      <v-app-bar style="margin-left:256px;" dark>
        <v-toolbar-title style="text-transform: capitalize;">{{ page }}</v-toolbar-title>
      </v-app-bar>
      <v-main>
        <SideBar/>
        <nuxt class="px-8 py-4"/>
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