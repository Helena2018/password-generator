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

clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea')
  const password = resultEl.innerText

  if(!password) { return }

  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
  alert('Password copied to clipboard!')
})

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value
  const hasUpper = upperEl.checked 
  const hasLower = lowerEl.checked
  const hasNumber = numbersEl.checked
  const hasSymbol = symbolsEl.checked

  resultEl.innerHTML = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = ''

  const typesCount = lower + upper + number + symbol
  const typesArr = [{lower}, {upper}, {number}, {symbol}]
  .filter(item => Object.values(item)[0])
  
  if(typesCount === 0) {
    return ''
  }

  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName =Object.keys(type)[0]
      generatedPassword += randomeFunc[funcName]()
    })
  }

  const finalPassword = generatedPassword.slice(0, length)

  return finalPassword
}

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
