// April 15, 2023
// Node.JS Crash Course

// Common JS
// const Person = require('./person');
// ES 6 - not implemented yet: import Person from './person';
// const person1 = new Person('John Doe', 30);
//person1.greeting();

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log('Called Listener:', data));

logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');