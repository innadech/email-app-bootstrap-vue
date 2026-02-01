const regData = {
  address: 'q',
  password: 'w',
  repassword: 'e',
  firstname: 'r',
  lastname: 't',
}

console.log(Object.keys(regData))
console.log(Object.values(regData))

console.log([1, 2, 3, 4, 5].every(q => q))

// every
// что хотим проверить:
// является ли КАЖДЫЙ элемент массива трушным

// как работает
// для каждого элемента массива вызывает callback

if (
  Object.values(regData).every(q => q)
  // regData.address &&
  // regData.password &&
  // regData.repassword &&
  // regData.firstname &&
  // regData.lastname
) {
  console.log('ok')
} else {
  console.log('not ok')
}

const ID = q => q

console.log(q => q)

console.log(ID(42))

function SUPERFUNC(q) {
  return q
}

console.log(SUPERFUNC(101))
