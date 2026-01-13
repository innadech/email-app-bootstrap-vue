<script>
export default {
  props: ['clientBox'],

  emits: ['clientBox-deleted'],
}
</script>

<template>
  <div
    v-on:click="$emit('clientBox-deleted', clientBox.id)"
    class="shadow-none p-2 mb-1 bg-body-tertiary rounded"
  >
    <div class="container text-center">
      <div class="row align-items-center">
        <div class="col">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" />
            <label class="form-check-label" for="checkDefault">
              {{ clientBox.fullName }}
            </label>
          </div>
        </div>
        <div class="col">{{ clientBox.subject }}</div>
        <div class="col text-end">{{ clientBox.date }}</div>
      </div>
    </div>
  </div>
</template>
