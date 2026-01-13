<script>
export default {
  props: ['address'],

  emits: ['address-deleted'],
}
</script>

<template>
  <div
    v-on:click="$emit('address-deleted', address.id)"
    class="container text-center"
  >
    <div class="row align-items-center">
      <div class="col">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" />
          <label class="form-check-label" for="checkDefault">
            {{ address.fullname }}
          </label>
        </div>
      </div>
      <div class="col">{{ address.address }}</div>
      <div class="col text-end">{{ address.data }}</div>
    </div>
  </div>
</template>
