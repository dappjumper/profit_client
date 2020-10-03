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

  import { mapActions } from 'vuex'

  export default {
    name: 'AccessForm',
    props: ['type'],
    data: () => ({
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
    methods: {
      ...mapActions('user', ['tryAccess']),
      submit () {
        if(!this.validate()) return false
        this.loading = true
        this.tryAccess({
          email: this.email,
          password: this.password,
          type: this.type
        })
          .then(()=>{
            this.$router.push('/app')
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