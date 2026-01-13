<script>
import AddressItem from './AddressItem.vue'
export default {
  components: { AddressItem },

  props: ['clientInbox', 'clietOutbox'],

  emit: ['clientBoxes-updated'],

  methods: {
    delete(id) {
      this.$emit(
        'clientBoxes-updated',
        this.clientBoxes.filter(c => c.id !== id)
      )
    },
  },
}
</script>

<template>
  <div class="shadow-none p-2 mb-1 bg-body-tertiary rounded">
    <AddressItem
      v-for="clientbox of clientInbox"
      v-bind:key="address.id"
      v-bind:address="address"
      v-on:address-deleted="deleteAddress($event)"
    />
  </div>
  <AddressItem
    v-for="clientBox of clietOutbox"
    v-bind:key="clientBox.id"
    v-bind:client-outbox="clientOutbox"
    v-on:clientBox-deleted="delete"
  />
</template>
