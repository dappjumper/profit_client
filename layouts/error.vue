<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>{{message || 'An error occurred' }}</h1>
    <nuxt-link to="/">Phone home</nuxt-link>
  </div>
</template>

<script>
  export default {
    props: ['error','message'],
    layout: 'landing'
  }
</script>