let serverAccounts = []

let regData = {
  address: '',
  password: '',
  repassword: '',
  firstname: '',
  lastname: '',
}
function fillRegData(data) {
  regData.address = data.address || ''
  regData.password = data.password || ''
  regData.repassword = data.repassword || ''
  regData.firstname = data.firstname || ''
  regData.lastname = data.lastname || ''
}

// const newAccount = createAccount(regData)

// let newAccount = {
//   id: 111,
//   date: 111111111111,
//   address: 'foo',
//   password: 'bar',
//   firstname: '',
//   lastname: '',
// }

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

function checkRegData(a) {
  const okEmail =
    a.address && typeof a.address === 'string' && a.address.trim().length > 0
  const okPasswd = a.password && a.password === a.repeatpassword
  if (okEmail && okPasswd) return true
  console.log('неправильно заполнена форма регистрации')
  return false
}

function registerAccount(regData) {
  if (!checkRegData(regData)) return false
  const createdAccount = createAccount(regData)
  const findedAccount = serverAccounts.find(a => a.address === regData.address)
  if (findedAccount) {
    return false
  } else {
    serverAccounts.push(createdAccount)
    // saveAccounts(accounts)
    return true
  }
}

export { registerAccount, fillRegData }
