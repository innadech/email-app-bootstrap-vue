<script>
import PageAddress from './pages/PageAddress.vue'
import PageCompose from './pages/PageCompose.vue'
import PageSignIn from './pages/PageSignIn.vue'
import PageSignUp from './pages/PageSignUp.vue'
import PageAllEmail from './pages/PageAllEmail.vue'

export default {
  components: {
    PageSignUp,
    PageSignIn,
    PageCompose,
    PageAddress,
    PageAllEmail,
  },
  data() {
    return {
      currentEmail: '',
      serverEmails: [],
      accounts: [],
      clientInbox: [],
      clientOutbox: [],
      // clientBoxes: [...this.clientInbox, ...this.clientOutbox],
      addresses: [],
    }
  },
  created() {
    const saved = localStorage.getItem('accounts')
    if (saved) {
      this.accounts = JSON.parse(saved)
    }
  },

  watch: {
    accounts: {
      handler() {
        localStorage.setItem('accounts', JSON.stringify(this.accounts))
      },
      deep: true,
    },
  },

  methods: {
    emailSubmit(email) {
      this.serverEmail.push(email)
    },
    sendEmail(email) {
      serverEmails.push(email)
      this.saveEmails(email)
      return true
    },
    receiveEmailsIncoming(currentEmail) {
      return serverEmails.filter(se => se.recipient === currentEmail)
    },

    receiveEmailsOutcoming(currentEmail) {
      return serverEmails.filter(se => se.sender === currentEmail)
    },
    getAddressByAuth(auth) {
      const findedAccount = this.accounts.find(
        a => a.address === auth.address && a.password === auth.password
      )
      if (findedAccount === undefined) {
        return undefined
      } else {
        return findedAccount.address
      }
    },
    authenticate(auth) {
      const addressMaybe = this.getAddressByAuth(auth)
      if (addressMaybe) {
        const sessionId = this.startSession(addressMaybe)
        return sessionId
      } else {
        return false
      }
    },
    authorize(sessionId) {
      const address = this.getEmailBySessionId(sessionId)
      const account = this.accounts.find(a => a.address === address)
      if (account) {
        return account
      }
      return false
    },
    startSession(address) {
      const sessions = restoreSessions()
      const sessionId = Math.random()
      sessions[sessionId] = address
      this.saveSessions(sessions)
      return sessionId
    },
    saveSessions(sessions) {
      const stringifiedSessions = JSON.stringify(sessions)
      localStorage.setItem('sessions', stringifiedSessions)
    },
    restoreSessions() {
      const stringifiedSessions = localStorage.getItem('sessions')
      const parsedSessions = JSON.parse(stringifiedSessions)
      return parsedSessions ?? {}
    },
    getEmailBySessionId(sessionId) {
      const sessions = this.restoreSessions()
      return sessions[sessionId]
    },
  },
}
</script>

<template>
  <div
    style="width: 70%; height: 600px"
    class="container-fluid mt-5 bg-light-subtle border rounded-3"
  >
    <PageSignUp v-on:submitted="submit" />
    <PageSignIn v-on:submitted="authenticate" />
    <PageCompose v-on:submitted="sendEmail" />
    <PageAddress
      v-bind:addresses="addresses"
      v-on:update="addresses = $event"
    />
    <PageAllEmail
      v-bind:client-inbox="clientInbox"
      v-bind:client-outbox="clientOutbox"
      v-on:update="clientInbox = $event"
    />
  </div>
</template>
