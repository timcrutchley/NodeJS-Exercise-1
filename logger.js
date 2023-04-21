// April 18th, 2023
// Logger Demo (Module Method)
// TO DO:
// Include FS (File System) and append file
// with a log of the keys that are generated

const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        // Call event with a new ID & message sent
        this.emit('message', { id: uuid.v4(), msg });
    }
}

// module.exports = Logger;

const logger = new Logger();

logger.on('message', data => console.log('Called Listener:', data));

logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');