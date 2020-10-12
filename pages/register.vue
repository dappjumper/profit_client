<template>
  <div class="container">
    <h1>Project Finch - Login</h1>
    <AccessForm type="register"/>
  </div>
</template>

<script>

import AccessForm from './../components/AccessForm'

export default {
  name: 'PageRegister',
  layout: 'landing',
  components: {
    AccessForm
  },
  mounted () {}
}
</script>