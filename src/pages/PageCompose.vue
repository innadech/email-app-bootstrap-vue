<script>
import ComposeSubmitter from '@/components/ComposeSubmitter.vue'

export default {
  components: { ComposeSubmitter },
  emits: ['submitted'],
}
</script>

<template>
  <div
    class="container-fluid mt-3 bg-light-subtle border border-primary-subtle rounded-3"
  >
    <div class="text-center">
      <h2>Compose</h2>
    </div>
    <div
      style="height: 600px"
      class="container-fluid mt-3 bg-light-subtle border border-primary-subtle rounded-3"
    >
      <div
        style="height: 500px"
        class="container p-4 bg-light-subtle border border-primary-subtle rounded-3"
      >
        <ComposeSubmitter v-on:email-submitted="$emit('submitted', $event)" />
      </div>
    </div>
  </div>
</template>
