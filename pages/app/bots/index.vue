<template>
  <section>
    <h1>Bots</h1>
    <v-list
      class="pt-0 pb-0"
    >
      <v-list-item link :key="bot" :to="'/app/bots/'+bot" v-for="bot in user.bots">
        <v-list-item-icon>
          <v-icon>mdi-robot</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{bot}}</v-list-item-title>
      </v-list-item>
    </v-list>
    <AddBotForm />
  </section>
</template>

<script>

  import { mapMutations, mapState } from 'vuex'
  import AddBotForm from './../../../components/AddBotForm'

  export default {
    name: 'DashBots',
    layout: 'app',
    components: {
      AddBotForm
    },
    computed: {
      ...mapState('user',['user'])
    },
    methods: {
      ...mapMutations('user', ['forgetUser'])
    }
  }
</script>