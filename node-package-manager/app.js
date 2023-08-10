const validator = require('validator')
const chalk = require('chalk')

console.log(validator.isEmail('a@mail.co'))

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Input your phone number: ', (number) => {
  const mobileValid = validator.isMobilePhone(number, 'id-ID')

  if (mobileValid == true) {
    console.log(`Your phone number: ${number}`)
  } else {
    console.log('your phone number is not valid')
  }

  rl.close()
})

// const message = chalk`Lorem ipsum dolor {blue.italic sit amet} consectetur adipisicing elit. Velit, maiores.`

// console.log(message)