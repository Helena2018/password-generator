const lowerEl = document.getElementById('lowercase')
const upperEl = document.getElementById('uppercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const lengthEl = document.getElementById('length')
const clipboardEl = document.getElementById('clipboard')
const generateEl = document.getElementById('generate')
const resultEl = document.getElementById('result')

const randomeFunc = {
  lower: getRamdomLower,
  upper: getRamdomUpper,
  number: getRamdomNumber,
  symbol: getRamdomSymbol
}

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value
  const hasUpper = upperEl.value
  const hasLower = lowerEl.value
  const hasNumber = numbersEl.value
  const hasSymbol = symbolsEl.value
  console.log(length)
})

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
