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
      if (this.account.address.length === 0) {
        this.err.address = 'Insert email'
      } else {
        this.err.address = ''
      }
      if (this.account.password.length === 0) {
        this.err.password = 'Insert password'
      } else {
        this.err.password = ''
      }
      if (this.account.firstname.length === 0) {
        this.err.firstname = 'Insert firstname'
      } else {
        this.err.firstname = ''
      }
      if (this.account.lastname.length === 0) {
        this.err.lastname = 'Insert lastname'
      } else {
        this.err.lastname = ''
      }
      if (
        this.account.address.length &&
        this.account.password.length &&
        this.account.firstname.length &&
        this.account.lastname.length
      ) {
        this.$emit('account-submitted', { ...this.account })
        this.account.address = ''
        this.account.password = ''
        this.account.firstname = ''
        this.account.lastname = ''
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
        <input
          v-model="account.address"
          type="email"
          name="address"
          placeholder="username@example.com"
          required
          minlength="2"
          class="form-control"
        />
        <label for="floatingInput">Email address</label>
        <span v-if="err.address">{{ err.address }}</span>
      </div>
      <div class="form-floating">
        <input
          v-model="account.password"
          type="password"
          name="password"
          required
          minlength="3"
          class="form-control"
        />
        <label for="floatingPassword">Password</label>
        <span v-if="err.password">{{ err.password }}</span>
      </div>
      <div class="form-floating">
        <input
          v-model="account.repassword"
          type="password"
          name="repassword"
          required
          minlength="3"
          class="form-control"
        />
        <label for="floatingPassword">Password Repeat</label>
        <span v-if="err.repassword">{{ err.repassword }}</span>
      </div>
      <div class="form-floating mt-3">
        <input
          v-model="account.firstname"
          type="text"
          name="firstname"
          placeholder="Вася"
          required
          minlength="1"
          class="form-control"
        />
        <label for="floatingPassword">Name</label>
        <span v-if="err.firstname">{{ err.firstname }}</span>
      </div>
      <div class="form-floating">
        <label>
          Lastname
          <input
            v-model="account.lastname"
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
