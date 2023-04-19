// April 16, 2023
// Event Emitters
// Much of Node.js core API is built around asynchronous event-driven architecture in which objects called "emitters" emit named events that cause Function objects("listeners") to be called.

const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter { };

// Init Object
const myEmitter = new MyEmitter;

// Event Listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Init Event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');// Every time it fires