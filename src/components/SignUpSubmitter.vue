<script>
export default {
  emits: ['reg-data-submitted'],

  data() {
    return {
      regData: {
        address: '',
        password: '',
        repassword: '',
        firstname: '',
        lastname: '',
      },
      err: this.initErr(),
    }
  },

  methods: {
    initErr() {
      return {
        address: '',
        password: '',
        repassword: '',
        firstname: '',
        lastname: '',
      }
    },
    submit() {
      this.err = this.initErr()
      if (!this.regData.address) {
        this.err.address = 'Insert email'
      }
      if (!this.regData.password) {
        this.err.password = 'Insert password'
      }
      if (!this.regData.repassword) {
        this.err.repassword = 'Repeat password'
      }
      if (!this.regData.firstname) {
        this.err.firstname = 'Insert firstname'
      }
      if (!this.regData.lastname) {
        this.err.lastname = 'Insert lastname'
      }
      if (
        Object.values(this.regData).every(d => d)
        this.regData.address &&
        this.regData.password &&
        this.regData.repassword &&
        this.regData.firstname &&
        this.regData.lastname
      ) {
        this.$emit('reg-data-submitted', { ...this.regData })
        this.regData.address = ''
        this.regData.password = ''
        this.regData.repassword = ''
        this.regData.firstname = ''
        this.regData.lastname = ''
      }
    },
  },
}
</script>

<template>
  <form v-on:submit.prevent="submit">
    <div class="w-50 container-fluid bg-light-subtle">
      <p class="fs-2 text-center">Sign up</p>
      <div class="mb-3">
        <label for="">
          Email address
          <input
            v-model="regData.address"
            type="email"
            name="address"
            placeholder="username@example.com"
            class="form-control"
          />
        </label>
        <span class="text-danger" v-if="err.address">{{ err.address }}</span>
      </div>
      <div class="">
        <label for="">
          Password
          <input
            v-model="regData.password"
            type="password"
            name="password"
            class="form-control"
          />
        </label>
        <span class="text-danger" v-if="err.password">{{ err.password }}</span>
      </div>
      <div class="">
        <label for="">
          Password Repeat
          <input
            v-model="regData.repassword"
            type="password"
            name="repassword"
            class="form-control"
          />
        </label>
        <span class="text-danger" v-if="err.repassword">{{
          err.repassword
        }}</span>
      </div>
      <div class="mt-3">
        <label for="">
          Name
          <input
            v-model="regData.firstname"
            type="text"
            name="firstname"
            placeholder="Вася"
            class="form-control"
          />
        </label>
        <span class="text-danger" v-if="err.firstname">{{
          err.firstname
        }}</span>
      </div>
      <div class="">
        <label>
          Lastname
          <input
            v-model="regData.lastname"
            type="text"
            name="lastname"
            placeholder="Васильев"
            class="form-control"
          />
        </label>
        <span class="text-danger" v-if="err.lastname">{{ err.lastname }}</span>
      </div>
      <div class="text-center mt-5">
        <button type="submit" class="btn btn-primary btn-lg">Sign up</button>
      </div>
    </div>
  </form>
</template>
