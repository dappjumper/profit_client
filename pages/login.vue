<template>
  <div class="container">
    <h1>Project Finch</h1>
    <AccessForm type="login"/>
  </div>
</template>

<script>

import AccessForm from './../components/AccessForm'

export default {
  name: 'PageLogin',
  layout: 'landing',
  components: {
    AccessForm
  },
  data () {},
  mounted () {}
}
</script>