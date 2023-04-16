const fs = require('fs');
const path = require('path');

// Create Folder
  // there is an async and a sync version
  // In most cases the async version is used using callbacks
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) throw err;
    console.log('Folder created...');
}); // Creates test folder in our dir


// Create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
    if(err) throw err;
    console.log('File written to...');

// Append file - run in callback since both are async
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love NodeJS', err => {
        if(err) throw err;
        console.log('File written to...');
    });
});

// Read File - must include 'utf8' encoding parameter
  // Reads to us what's in the file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Rename File - current path & the second path is new name
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),  
    path.join(__dirname, '/test', 'newfile.txt'), 
    err => {
        if (err) throw err;
        console.log('File renamed..');
    }
);