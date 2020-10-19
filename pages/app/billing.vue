<template>
  <div v-if="view == 'list'">
    <v-container>
      <v-row dense>
        <v-col
          cols="12"
        >
          <BotListItem :botID="bot" :key="bot" v-for="bot in user.bots" />
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div v-else>
    <v-container>
      <v-row dense>
        <v-col
          cols="12"
        >
          <BotDetails :botID="detailBot" :key="'detail_'+detailBot" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

  import AddBotForm from './../../components/AddBotForm'
  import BotListItem from './../../components/BotListItem'
  import BotDetails from './../../components/BotDetails'

import { mapState } from 'vuex'

  export default {
    name: 'DashBilling',
    layout: 'app',
    data () {
      return {
        detailBot: null
      }
    },
    components: {
      AddBotForm,
      BotListItem,
      BotDetails
    },
    computed: {
      ...mapState('user', ['user']),
      view () {
        if (this.$route.hash) {
          this.detailBot = this.$route.hash.replace('#','')
          return 'detail'
        }
        return 'list'
      }
    }
  }
</script> 