let serverAccounts = []

function makeId() {
  return Math.trunc(Math.random() * 10_000_000_000).toString(16)
}

window.serverAccounts = serverAccounts

function createAccount(regData) {
  return {
    id: makeId(),
    date: Date.now(),
    address: regData.address,
    password: regData.password,
    firstname: regData.firstname,
    lastname: regData.lastname,
  }
}

// ID - ID
// SIGNIN - NA
// not available

function checkRegData(regData) {
  console.log(regData)

  const okEmail =
    regData.address &&
    typeof regData.address === 'string' &&
    regData.address.trim().length > 0

  const okPasswd = regData.password && regData.password === regData.repassword

  console.log(okEmail)
  console.log(okPasswd)

  if (okEmail && okPasswd) return true
  return false
}

function registerAccount(regData) {
  console.log('registerAccount')
  if (!checkRegData(regData)) return false
  const findedAccount = serverAccounts.find(a => a.address === regData.address)
  console.log('serverAccounts.find')
  if (findedAccount) return false
  const createdAccount = createAccount(regData)
  serverAccounts.push(createdAccount)
  console.log('serverAccounts.push')
  // storage.saveAccounts(accounts)
  return true
}
function getAddressByAuth(auth) {
  const findedAccount = serverAccounts.find(
    a => a.address === auth.address && a.password === auth.password,
  )
  if (findedAccount === undefined) {
    return undefined
  } else {
    return findedAccount.address
  }
}

function authenticate(auth) {
  console.log('###', auth)
  const addressMaybe = getAddressByAuth(auth)
  console.log('>>>', addressMaybe)
  if (addressMaybe) {
    const sessionId = startSession(addressMaybe)
    return sessionId
  } else {
    return false
  }
}

function authorize(sessionId) {
  const address = getEmailBySessionId(sessionId)
  const account = serverAccounts.find(a => a.address === address)
  if (account) {
    return account
  }
  return false
}
export { registerAccount, authenticate, authorize }
