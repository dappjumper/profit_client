<template>
  <div class="container">
    <h1>Project Finch</h1>
    <router-link to="/app">
      <v-btn
        color="primary"
        elevation="2"
      >
      <v-icon
        left
        dark
      >
        mdi-rocket
      </v-icon>
      Get started
      </v-btn>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'PageIndex',
  layout: 'landing',
  mounted () {}
}
</script>