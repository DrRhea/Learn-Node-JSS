const printName = (name) => `Hi, my name's ${name}`

const pi = 3.14

const student = {
  name: 'rhea',
  age: '19',
  printStudent() {
    return `hi, i'm ${this.name} and i'm ${this.age} years old`
  }
}

// module.exports.printName = printName
// module.exports.pi = pi
// module.exports.student = student

/* module.exports = {
  printName: printName,
  pi: pi,
  student: student
} */

module.exports = {printName, pi, student}