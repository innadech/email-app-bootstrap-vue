<script>
export default {
  emits: ['email-submitted'],
  props: ['currentAccount'],

  data() {
    return {
      email: {
        recipient: '',
        sender: currentAccount,
        subject: '',
        text: '',
      },
      err: {
        recipient: '',
        subject: '',
        text: '',
      },
    }
  },

  methods: {
    submit() {
      if (this.email.recipient.length === 0) {
        this.err.recipient = 'Insert email'
      } else {
        this.err.recipient = ''
      }
      if (this.email.subject.length === 0) {
        this.err.subject = 'Insert subject'
      } else {
        this.err.subject = ''
      }
      if (this.email.recipient.length && this.email.subject.length) {
        this.$emit('email-submitted', { ...this.email })
        this.email.recipient = ''
        this.email.subject = ''
      }
    },
  },
}
</script>

<template>
  <form v-on:submit.prevent="submit">
    <div style="height: 150px">
      <div>
        <div class="input-group">
          <span class="input-group-text">To</span>
          <input
            v-model="email.recipient"
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            name="recipient"
            required
          />
          <span v-if="err.recipient">{{ err.recipient }}</span>
        </div>
        <div class="input-group">
          <span class="input-group-text" id="basic-addon1">From</span>
          <span id="elAccountEmail" class="form-control">{{
            currentAccount
          }}</span>
        </div>
        <div class="input-group">
          <span class="input-group-text" id="addon-wrapping">Subject</span>
          <input
            v-model="email.subject"
            name="subject"
            type="text"
            class="form-control"
            required
          />
          <span v-if="err.subject">{{ err.subject }}</span>
        </div>
      </div>
    </div>
    <div style="width: 100%; height: 250px">
      <!-- <p class="fs-3">Text</p> -->
      <div class="form-floating">
        <textarea
          v-model="email.text"
          class="form-control"
          placeholder="Leave a comment here"
          style="height: 200px"
          name="text"
        ></textarea>
        <label for="floatingTextarea2">Message</label>
      </div>
    </div>
    <div style="width: 20%; height: 100px">
      <div class="container overflow-hidden text-center">
        <div class="row gx-5">
          <div class="col">
            <div
              class="p-2 bg-light-subtle border border-primary-subtle rounded-3"
            >
              <button id="elSend" type="submit" class="btn btn-primary btn-lg">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
