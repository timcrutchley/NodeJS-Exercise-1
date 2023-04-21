// April 15, 2023
// Node.JS Crash Course

// Common JS
// const Person = require('./person');
// ES 6 - not implemented yet: import Person from './person';
// const person1 = new Person('John Doe', 30);
//person1.greeting();

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        })

    }
});

// First looks for the environment var, if not found runs on 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));