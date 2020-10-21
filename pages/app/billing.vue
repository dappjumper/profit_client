<template>
  <v-container class="mt-4 ml-4">
    <v-row dense>
      <v-col
        cols="12"
      >
        <v-card
        class="mb-4 px-3 py-3"
        >
          You have {{ user.tokens }} Tokens
        </v-card>
        <v-btn @click="openDialog = true">Buy more</v-btn>
      </v-col>
    </v-row>
    <v-dialog width="500" v-model="openDialog">
      <ShopInterface />
    </v-dialog>
  </v-container>
</template>

<script>

import { mapState } from 'vuex'
import ShopInterface from './../../components/ShopInterface'

  export default {
    name: 'DashBilling',
    layout: 'app',
    components: {
      ShopInterface
    },
    data () {
      return {
        openDialog: null
      }
    },
    computed: {
      ...mapState('user', ['user'])
    }
  }
</script> 