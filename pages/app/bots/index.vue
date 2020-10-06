<template>
  <section>
    <h1>Bots</h1>
    <v-list
      class="pt-0 pb-0"
    >
      <BotListItem :key="bot" :botID="bot" v-for="bot in user.bots"/>
    </v-list>
    <AddBotForm />
  </section>
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