// const person = {
//     name: 'John Doe',
//     age: 30
// }

// Module Wrapper Function
// This wraps around the person.js module to give us acccess to exports, require, module
// (function (exports, require, module, __filename, __dirname) {

// })

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}

module.exports = Person;