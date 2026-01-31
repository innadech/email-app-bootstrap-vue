<script>
import SignUpSubmitter from '@/components/SignUpSubmitter.vue'

import { registerAccount, fillRegData } from '@/sv/accounts'

export default {
  components: { SignUpSubmitter },

  methods: {
    submit(account) {
      fillRegData(account)
      registerAccount(account)
    },
  },
}
</script>

<template>
  <div
    style="width: 70%; height: 600px"
    class="container-fluid mt-5 bg-light-subtle border rounded-3"
  >
    <SignUpSubmitter v-on:account-submitted="$emit('submitted', $event)" />
  </div>
</template>
