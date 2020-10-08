<template>
  <v-card
    color="secondary"
    dark
    class="mb-4"
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        {{ botID }}
        <pre v-if="ready">
          {{ bot }}
        </pre>
        <pre v-else>Loading...</pre>
      </div>
      <!--<div>
        <v-card-title
          class="headline"
          v-text="ready ? bot.t_info.first_name : 'Loading...'"
        ></v-card-title>

        <v-card-subtitle v-text="ready ? '@'+bot.t_info.username : 'Loading...'"></v-card-subtitle>
        <v-card-subtitle v-text="ready ? bot.active ? 'Active. Ready for action.' : 'De-activated. Idle.' : 'Loading...'"></v-card-subtitle>
        <v-card-actions v-if="ready">
          <v-btn
            class="mt-4 ml-2 pr-3"
            outlined
            rounded
            small
            link
            :to="'/app/bots/'+botID"
          >
            <v-icon class="mr-2">mdi-cog</v-icon>
            Settings
          </v-btn>
          <v-btn
            class="mt-4 ml-2 pr-3"
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
            class="mt-4 ml-2 pr-3"
            outlined
            rounded
            small
            @click="toggleActivation(botID)"
            :color="bot.active ? 'red' : 'green'"
          >
            <v-icon class="mr-2">{{bot.active ? 'mdi-pause-circle' : 'mdi-play-circle'}}</v-icon>
            {{bot.active ? 'De-activate' : 'Activate'}}
          </v-btn>
          <v-btn
            class="mt-4 ml-2 pr-3"
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
    -->
    </div>
  </v-card>
</template>

<script>

import { botLogic } from './../mixins/botLogic'

export default {
  name: 'BotListItem',
  props: ['botID'],
  mixins: [botLogic],
  mounted () {
    this.loadBot(this.botID)
  }
}

</script>