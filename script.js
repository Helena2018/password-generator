function getRamdomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRamdomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRamdomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRamdomSymbol() {
  const symbols = '!@#$%ˆ&*(){};<>?,./'
  return symbols[Math.floor(Math.random() * symbols.length)]
}

console.log(getRamdomSymbol())