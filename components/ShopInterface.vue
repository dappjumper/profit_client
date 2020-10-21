<template>
  <v-card>
    <v-card-title>Shop</v-card-title>
    <v-card-subtitle>Buy tokens for your account</v-card-subtitle>
    <v-card-text>One token equal one month of premium for one bot.<br/>They are non-refundable.</v-card-text>
    <div v-if="ready && !error">
      <v-list-item-group>
        <v-list-item :key="product.id" v-for="product in products">
          {{ product.name }} x <v-btn @click="product.quantity > 0 ? product.quantity-- : product.quantity = 0" class="mx-2">-</v-btn>{{product.quantity}}<v-btn @click="product.quantity++" class="mx-2">+</v-btn>
        </v-list-item>
      </v-list-item-group>
    </div>
    <v-card-text v-else>{{ error ? error : 'Loading shop...' }}</v-card-text>
  </v-card>
</template>

<script>
  import api from './../dry/api.js'
  export default {
    name: 'ShopInterface',
    data () {
      return {
        ready: false,
        error: '',
        products: []
      }
    },
    mounted () {
      api.basic({ method: 'get', path: 'products' })
        .then((products)=>{
          products.map((value)=>{
            value.quantity = 0
            return value
          })
          this.products = products
          this.ready = true
        })
        .catch(error => console.log(error))
    }
  }
</script>