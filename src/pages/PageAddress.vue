<script>
import AddressList from '@/components/AddressList.vue'

export default {
  components: { AddressList },
  emits: ['update'],
  props: ['addresses'],
}
</script>

<template>
  <div class="container-fluid mt-3 bg-light-subtle border rounded-3">
    <div class="text-center">
      <h2>Counterparties</h2>
    </div>
    <div
      style="height: 600px"
      class="container-fluid mt-3 bg-light-subtle border rounded-3"
    >
      <div
        style="height: 90%"
        class="container p-2 bg-primary-subtle border rounded-3 d-none"
      >
        <AddressList
          v-bind:addresses="addresses"
          v-on:addresses-updated="$emit('update', $event)"
        />
      </div>
    </div>
  </div>
</template>
