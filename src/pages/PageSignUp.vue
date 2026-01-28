<script>
import SignUpSubmitter from '@/components/SignUpSubmitter.vue'

import { registerAccount } from '@/sv/accounts'

export default {
  components: { SignUpSubmitter },

  methods: {
    submit(account) {
      registerAccount(account)
    },
  },
}
</script>

<template>
  <div
    style="width: 70%; height: 600px"
    class="container-fluid mt-5 bg-light-subtle border border-primary-subtle rounded-3"
  >
    <SignUpSubmitter v-on:account-submitted="$emit('submitted', $event)" />
  </div>
</template>
