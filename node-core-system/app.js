// Core Module
// File System
const fs = require('fs')

// Write string to file (synchronous)
/* try {
  fs.writeFileSync('data/index.html', 'Synchronous Hello World!')
} catch (e) {
  console.log(e)
} */

// Write string to file (asynchronous)
/* fs.writeFile('data/index.html', 'Asynchronous Hello World', (e) => {
  console.log(e);
}) */

// Read file (synchronous)
/* const readFIle = fs.readFileSync('data/index.html', 'utf-8');
console.log(readFIle); */

// Read file (asynchronous)
/* const readFIle = fs.readFile('data/index.html', 'utf-8', (err, data) => {
  if(err) throw err
  console.log(data)
}) */

// Readline
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Input your name: ', (name) => {
  rl.question('Input you email: ', (email) => {
    const contact = {name, email}
    const file = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(file)

    contacts.push(contact)
    console.log(contacts)

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
    
    console.log('success')
    rl.close()
  })})