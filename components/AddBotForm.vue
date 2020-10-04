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
      ...mapMutations('user', ['addBot']),
      ...mapActions('user', ['tryJWT']),
      submit () {
        if(!this.validate()) return false
        this.loading = true
        this.tryJWT({
          url: 'user/bot',
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
            this.addBot(result.data.bot_id)
            //this.$router.push(`/app/bot/${result.data.bot_id}`)
          })
          .catch((e)=>{
            this.loading = false
            this.error = true
            this.errorString = e
          })
      },
      validate () {
        return this.$refs.form.validate()
      },
      reset () {
        return this.$refs.form.reset()
      },
      resetValidation () {
        return this.$refs.form.resetValidation()
      },
    },
  }
</script>