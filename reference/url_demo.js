// April 16, 2023
// URL Demo
// We learn how to : 

const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString()); // Same result as above

// Host (root domain)
console.log(myUrl.host);

// Hostname - Doesn't include the port (if there is one)
console.log(myUrl.hostname);

// Pathname - just the path to the actual file
console.log(myUrl.pathname);

// Serialized Query - gives us the parameters
console.log(myUrl.search);

// Params Object
console.log(myUrl.searchParams);

// Add params to existing
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through Params and lists them individually
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));