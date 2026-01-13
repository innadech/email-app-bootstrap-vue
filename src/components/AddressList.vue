<script>
import AddressItem from './AddressItem.vue'
export default {
  components: { AddressItem },

  props: ['addresses'],

  emit: ['addresses-updated'],

  methods: {
    deleteAddress(id) {
      this.$emit(
        'addresses-updated',
        this.addresses.filter(a => a.id !== id)
      )
    },
  },
}
</script>

<template>
  <div class="shadow-none p-2 mb-1 bg-body-tertiary rounded">
    <AddressItem
      v-for="address of addresses"
      v-bind:key="address.id"
      v-bind:address="address"
      v-on:address-deleted="deleteAddress($event)"
    />
  </div>
</template>
