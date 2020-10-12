<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    v-on:submit.prevent="submit"
  >
    <v-text-field
      v-model="token"
      :rules="tokenRules"
      :loading="loading"
      :disabled="loading"
      label="Token from @Botfather"
      required
    ></v-text-field>

    <v-alert
      color="red"
      v-model="error"
      dismissible
      type="error"
    >{{errorString}}</v-alert>
    <v-btn
      :disabled="loading || !valid"
      color="success"
      class="mr-4"
      :loading="loading"
      type="submit"
    >
      Continue
    </v-btn>
  </v-form>
</template>
<script>

import api from './../dry/api.js'

  import { mapActions, mapMutations } from 'vuex'

  export default {
    name: 'AddBotForm',
    props: ['type'],
    data: () => ({
      loading: false,
      valid: true,
      error: false,
      errorString: '',
      token: '',
      tokenRules: [
        v => !!v || 'Token is required'
      ]
    }),
    methods: {
      ...mapMutations('user', ['addToSet']),
      submit () {
        if(!this.$refs.form.validate()) return false
        this.loading = true
        api.user({
          path: 'bot',
          method: 'put',
          data: {
            token: this.token
          }
        })
          .then((result)=>{
            this.loading = false
            if(!result.data.ok) {
              this.error = true
              return this.errorString = result.data.error
            }
            this.addToSet({
              key: bots,
              data: result.data.bot_id
            })
            this.$refs.form.reset()
          })
          .catch((e)=>{
            this.loading = false
            this.error = true
            this.errorString = e
          })
      },
    },
  }
</script>