const path = require('path');

// __filename - Gives the entire path and filename
console.log('Entire path: ' + __filename); 
// Base file name - Gives  just the filename
console.log('Just the filename: ' + path.basename(__filename)); 

// Directory Name - Just the directory
console.log('Just the directory: ' + path.dirname(__filename));

// File Extension
console.log('Just the extension: ' + path.extname(__filename));

// Create Path Object
console.log('An object with everything: ');
console.log(path.parse(__filename)); // must be logged seperately from the string to be properly displayed

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));
// This puts the correct delimiter in (windows uses backslash while
// Mac & Linux use forward slashes)