let serverAccounts = []

let regData = {
  address: 'foo',
  password: 'bar',
  repassword: 'bar',
  firstname: '',
  lastname: '',
}

let account = {
  id: 111,
  date: 111111111111,
  address: 'foo',
  password: 'bar',
  firstname: '',
  lastname: '',
}

function checkRegData(a) {
  const okEmail =
    a.address && typeof a.address === 'string' && a.address.trim().length > 0
  const okPasswd = a.password && a.password === a.repeatpassword
  if (okEmail && okPasswd) return true
  console.log('неправильно заполнена форма регистрации')
  return false
}

function createAccount(regData) {
  // body
}

function registerAccount(regData) {
  if (!checkRegData(regData)) return false
  const findedAccount = serverAccounts.find(a => a.address === regData.address)
  if (findedAccount) {
    return false
  } else {
    serverAccounts.push(regData)
    // saveAccounts(accounts)
    return true
  }
}

export { registerAccount }
