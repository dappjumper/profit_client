<template>
  <v-container>
        <v-row dense>
          <v-col
            cols="12"
          >
            <BotListItem :botID="bot" :key="bot" v-for="bot in user.bots" />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <h2>Add bot</h2>
            <AddBotForm />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
</template>

<script>

  import { mapMutations, mapState } from 'vuex'
  import AddBotForm from './../../../components/AddBotForm'
  import BotListItem from './../../../components/BotListItem'

  export default {
    name: 'DashBots',
    layout: 'app',
    components: {
      AddBotForm,
      BotListItem
    },
    computed: {
      ...mapState('user',['user'])
    },
    methods: {
      ...mapMutations('user', ['forgetUser'])
    }
  }
</script>