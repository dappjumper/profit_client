<template>
  <v-app style="background:rgb(240,240,240);" id="inspire">
    <div v-if="ready">
      <SideBar/>
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
  beforeMount () {
    this.boot()
  }
}
</script>