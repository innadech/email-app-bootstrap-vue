<script>
import AllEmailList from '@/components/AllEmailList.vue'

export default {
  components: { AllEmailList },
  props: ['clientInbox', 'clientOutbox'],
  emits: ['submitted'],

  data() {
    return {
      showFirst: true,
      // clientInbox: this.clientInbox,
      // clientInbox: this.clientOutbox,
    }
  },
}
</script>

<template>
  <div class="container-fluid mt-3 min-vw-500 bg-light-subtle border rounded-3">
    <!-- <div
        style="height: 50px"
        class="container-fluid mt-3 bg-light-subtle border rounded-3"
      >
        <div class="row align-items-start text-center p-2">
          <div class="col"><a href="./compose.html">Compose</a></div>
          <div onclick="onClickButtonAddress()" class="col">
            Address
          </div>
          <div class="col">inna_d@meta.ua</div>
          <div class="col"><a href="./sign_up.html">Log out</a></div>
        </div>
      </div> -->
    <div
      style="height: 600px"
      class="container-fluid mt-3 bg-light-subtle border rounded-3"
    >
      <div style="height: 100%" class="row gx-5">
        <div class="col-sm-3 text-left">
          <div v-on:click="showFirst = true" class="p-2 fs-5">Inbox</div>
          <div v-on:click="showFirst = false" class="p-2 fs-5">Outbox</div>
          <div id="elAllEmail" class="p-2 fs-5">All email</div>
        </div>
        <div class="col-sm-9 p-2">
          <div
            id="elEmailsList"
            style="height: 90%"
            class="container p-2 bg-primary-subtle border rounded-3"
          >
            <AllEmailList
              v-bind:client-inbox="clientInbox"
              v-bind:client-outbox="clientOutbox"
              v-on:submitted="submit"
            />
          </div>

          <!-- <div class="p-5 bg-primary-subtle">Custom column padding</div> -->
        </div>
      </div>
    </div>
  </div>
</template>
