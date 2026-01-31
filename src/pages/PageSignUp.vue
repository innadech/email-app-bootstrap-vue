<script>
import SignUpSubmitter from '@/components/SignUpSubmitter.vue'

import { registerAccount } from '@/sv/accounts'

export default {
  components: { SignUpSubmitter },

  methods: {
    submit(regData) {
      registerAccount(regData)
    },
  },
}
</script>

<template>
  <div
    style="width: 70%; height: 600px"
    class="container-fluid mt-5 bg-light-subtle border rounded-3"
  >
    <SignUpSubmitter v-on:reg-data-submitted="submit" />
  </div>
</template>
