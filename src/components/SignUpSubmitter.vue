<script>
export default {
  emits: ['account-submitted'],

  data() {
    return {
      regData: {
        address: '',
        password: '',
        repassword: '',
        firstname: '',
        lastname: '',
      },
      err: {
        address: '',
        password: '',
        repassword: '',
        firstname: '',
        lastname: '',
      },
    }
  },

  methods: {
    submit() {
      if (this.regData.address.length === 0) {
        this.err.address = 'Insert email'
      } else {
        this.err.address = ''
      }
      if (this.regData.password.length === 0) {
        this.err.password = 'Insert password'
      } else {
        this.err.password = ''
      }
      if (this.regData.repassword.length === 0) {
        this.err.repassword = 'Repeat password'
      } else {
        this.err.repassword = ''
      }
      if (this.regData.firstname.length === 0) {
        this.err.firstname = 'Insert firstname'
      } else {
        this.err.firstname = ''
      }
      if (this.regData.lastname.length === 0) {
        this.err.lastname = 'Insert lastname'
      } else {
        this.err.lastname = ''
      }
      if (
        this.regData.address.length &&
        this.regData.password.length &&
        this.regData.firstname.length &&
        this.regData.lastname.length
      ) {
        this.$emit('account-submitted', { ...this.regData })
        this.regData.address = ''
        this.regData.password = ''
        this.regData.firstname = ''
        this.regData.lastname = ''
      }
    },
    makeId() {
      return Math.trunc(Math.random() * 10_000_000_000).toString(16)
    },
  },
}
</script>

<template>
  <form v-on:submit.prevent="submit">
    <div
      style="width: 50%; height: 500px"
      class="container-fluid mt-5 bg-light-subtle"
    >
      <p class="fs-2 text-center">Sign up</p>
      <div class="form-floating mb-3">
        <label for="">
          Email address
          <input
            v-model="regData.address"
            type="email"
            name="address"
            placeholder="username@example.com"
            required
            minlength="2"
            class="form-control"
          />
        </label>
        <span v-if="err.address">{{ err.address }}</span>
      </div>
      <div class="form-floating">
        <label for="">
          Password
          <input
            v-model="regData.password"
            type="password"
            name="password"
            required
            minlength="3"
            class="form-control"
          />
        </label>
        <span v-if="err.password">{{ err.password }}</span>
      </div>
      <div class="form-floating">
        <label for="">
          Password Repeat
          <input
            v-model="regData.repassword"
            type="password"
            name="repassword"
            required
            minlength="3"
            class="form-control"
          />
        </label>
        <span v-if="err.repassword">{{ err.repassword }}</span>
      </div>
      <div class="form-floating mt-3">
        <label for="">
          Name
          <input
            v-model="regData.firstname"
            type="text"
            name="firstname"
            placeholder="Вася"
            required
            minlength="1"
            class="form-control"
          />
        </label>
        <span v-if="err.firstname">{{ err.firstname }}</span>
      </div>
      <div class="form-floating">
        <label>
          Lastname
          <input
            v-model="regData.lastname"
            type="text"
            name="lastname"
            placeholder="Васильев"
            required
            minlength="3"
            class="form-control"
          />
        </label>
        <span v-if="err.lastname">{{ err.lastname }}</span>
      </div>
      <div class="text-center mt-5">
        <button type="submit" class="btn btn-primary btn-lg">Sign up</button>
      </div>
    </div>
  </form>
</template>
