<template>
  <section>
    <v-card
      color="secondary"
      dark
      class="mb-4"
    >
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title
            class="headline"
            v-text="ready ? bot.t_info.first_name : 'Loading...'"
          ></v-card-title>

          <v-card-subtitle v-text="ready ? '@'+bot.t_info.username : 'Loading...'"></v-card-subtitle>
          <v-card-subtitle v-text="ready ? '@'+bot.t_info.token : 'Loading...'"></v-card-subtitle>
          <v-card-actions v-if="ready">
            <v-btn
              class="mt-4 ml-2"
              outlined
              rounded
              small
              target="_blank"
              :href="'https://t.me/'+bot.t_info.username"
            >
              <v-icon class="mr-2">mdi-telegram</v-icon>
              Message
            </v-btn>
            <v-btn
              class="mt-4 ml-2"
              outlined
              rounded
              small
              color="red"
              @click="removeBot()"
            >
              <v-icon class="mr-2">mdi-close</v-icon>
              Remove
            </v-btn>
          </v-card-actions>

        </div>

        <v-avatar
        class="ma-3"
        size="125"
        rounded
      >
        <v-img :src="bot_avatar"></v-img>
      </v-avatar>
      </div>
    </v-card>
  </section>
</template>

<script>
import { botLogic } from './../../../mixins/botLogic'

export default {
  name: 'BotDetailPage',
  layout: 'app',
  mixins: [botLogic],
  props: ['user'],
  mounted () {
    this.loadBot(this.$route.params.bot)
  }
}
</script>