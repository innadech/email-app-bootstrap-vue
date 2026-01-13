<script>
export default {
  emits: ['auth-submitted'],

  data() {
    return {
      authData: {
        email: '',
        password: '',
      },
      err: {
        email: '',
        password: '',
      },
    }
  },

  methods: {
    submit() {
      if (this.authData.email.length === 0) {
        this.err.email = 'Insert email'
      } else {
        this.err.email = ''
      }
      if (this.authData.password.length === 0) {
        this.err.password = 'Insert password'
      } else {
        this.err.password = ''
      }
      if (this.authData.email.length && this.authData.password.length) {
        this.$emit('auth-submitted', { ...this.authData })
        this.authData.email = ''
        this.authData.password = ''
      }
    },
  },
}
</script>

<template>
  <form v-on:submit.prevent="submit">
    <p class="fs-2 text-center">Sign in</p>
    <div class="form-floating mb-3">
      <input
        v-model="authData.email"
        type="email"
        class="form-control"
        name="address"
        placeholder="name@example.com"
        required
        minlength="3"
      />
      <label for="floatingInput">Email address</label>
      <span v-if="err.email">{{ err.email }}</span>
    </div>
    <div class="form-floating">
      <input
        v-model="authData.password"
        type="password"
        class="form-control"
        name="password"
        placeholder="Password"
        required
        minlength="3"
      />
      <label for="floatingPassword">Password</label>
      <span v-if="err.password">{{ err.password }}</span>
    </div>

    <div class="text-center mt-5">
      <button type="submit" class="btn btn-primary btn-lg id">Login in</button>
    </div>
  </form>
</template>
