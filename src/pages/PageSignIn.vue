<script>
import SignInSubmitter from '@/components/SignInSubmitter.vue'

export default {
  components: { SignInSubmitter },
  emits: ['submitted'],

  // data() {
  //   return {
  //     drinks: [],
  //   }
  // },
  // methods: {
  //   submit(drink) {
  //     if (!this.drinks.includes(drink)) this.drinks.push(drink)
  //   },
  // },
  // created() {
  //   const saved = localStorage.getItem('drinks')
  //   if (saved) {
  //     this.drinks = JSON.parse(saved)
  //   }
  // },

  watch: {
    drinks: {
      handler() {
        localStorage.setItem('drinks', JSON.stringify(this.drinks))
      },
      deep: true,
    },
  },
}
</script>

<template>
  <div
    style="width: 70%; height: 600px"
    class="container-fluid mt-5 bg-light-subtle border border-primary-subtle rounded-3"
  >
    <div style="width: 50%; height: 500px" class="container-fluid mt-5">
      <SignInSubmitter v-on:auth-submitted="$emit('submitted', $event)" />
    </div>
  </div>
</template>
