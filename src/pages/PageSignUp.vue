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
  <div class="w-75 container-fluid bg-light-subtle border rounded-3">
    <SignUpSubmitter v-on:reg-data-submitted="submit" />
  </div>
</template>
