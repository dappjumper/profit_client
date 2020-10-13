<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    v-on:submit.prevent="submit"
  >

    <v-text-field
      v-model="email"
      :rules="emailRules"
      :loading="loading"
      :disabled="loading"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :rules="passwordRules"
      :loading="loading"
      :disabled="loading"
      label="Password"
      type="password"
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
      {{ type }}
    </v-btn>
    <v-btn
      color="gray"
      @click="$router.push('/')"
    >
      Home
    </v-btn>
  </v-form>
</template>
<script>

  import api from './../dry/api.js'

  import { mapMutations } from 'vuex'

  export default {
    name: 'AccessForm',
    props: ['type'],
    data: () => ({
      attempts: 0,
      loading: false,
      valid: true,
      error: false,
      errorString: '',
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 4) || 'Password must be at least 4 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ]
    }),
    mounted () {
      api.boot({
        handler: this.$axios,
        USER_API: process.env.USER_API
      })
    },
    methods: {
      ...mapMutations('user', ['set']),
      submit () {
        if(!api.handler) api.handler = this.$axios
        if(!this.$refs.form.validate()) return false
        this.loading = true
        api.user({
          method: 'post',
          data: {
            email: this.email,
            password: this.password
          },
          path: this.type
        })
        .then((result)=>{
          this.attempts = true
          if(!result.ok) throw result.error
          this.set(result)
          this.$router.push('/app')
        })
        .catch((e)=>{
          if(this.attempts < 5) {
            return setTimeout(()=>{
              this.submit()
            }, 500)
          }
          this.loading = false
          this.error = true
          this.errorString = e
        })
      }
    },
  }
</script>