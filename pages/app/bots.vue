<template>
  <section>
    <h1>Bots</h1>
    <div v-for="bot in user.bots">
      <a :href="'/app/bots/'+bot"> {{bot}} </a>
    </div>
    <AddBotForm />
  </section>
</template>

<script>

  import { mapMutations, mapState } from 'vuex'
  import AddBotForm from './../../components/AddBotForm'

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