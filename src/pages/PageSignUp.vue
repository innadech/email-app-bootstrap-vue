<script>
import SignUpSubmitter from '@/components/SignUpSubmitter.vue'

export default {
  components: { SignUpSubmitter },
  emits: ['submitted'],
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
