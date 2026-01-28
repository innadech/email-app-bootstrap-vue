let serverAccounts = []

function checkRegData(a) {
  const okEmail =
    a.address && typeof a.address === 'string' && a.address.trim().length > 0
  const okPasswd = a.address && a.password && a.password === a.repeatpassword
  if (okEmail && okPasswd) return true
  console.log('неправильно заполнена форма регистрации')
  return false
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
