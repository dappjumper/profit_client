<template>
  <v-navigation-drawer
        app
        permanent
  >
    <v-list
      style="margin-top:64px; padding-top:0"
    >
      <v-list-item exact-active-class="none" link to="/app/profile">
        <v-list-item-content>
          <v-list-item-title class="title pt-4 mt-0">
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
      <v-list-item link to="/app/billing">
        <v-list-item-icon>
          <v-icon>mdi-cash</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Billing</v-list-item-title>
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
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'SideBar',
    computed: {
      ...mapState('user', ['user'])
    }
  }
</script>