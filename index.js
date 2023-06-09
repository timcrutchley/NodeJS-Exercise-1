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

// const server1 = http.createServer((req, res) => {
//     if(req.url === '/') {
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
//             if (err) throw err;
//             // Document must have a content type
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(content);
//         })

//     }

//     if(req.url === '/api/users') {
//         const users = [
//             { name: 'Bob Smith', age: 40 },
//             { name: 'John Doe', age: 30 }
//         ];
//         res.writeHead(200, { 'Content-Type': 'application/json '});
//         res.end(JSON.stringify(users));
//     }
// });

const server2 = http.createServer((req, res) => {
    // Build File Path
    let filePath = path.join(
        __dirname, 
        'public', 
        req.url === '/' ? 'index.html' : req.url
    );

    // Extension of file
    let extname = path.extname(filePath);

    // Initial Content Type
    let contentType = 'text/html';

    // Check ext and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read File
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                // Page not found
                fs.readFile(
                    path.join(__dirname, 'public', '404.html'), 
                    (err, content) => {
                        res.writeHead(404, { 'Content-Type': 'text/html'});
                        res.end(content, 'utf8');
                    }
                );
            } else {
                // Some server error (500 most likely)
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8'); 
        }
    });
});

// First looks for the environment var, if not found runs on 5000
const PORT = process.env.PORT || 5000;

server2.listen(PORT, () => console.log(`Server running on port ${PORT}`));