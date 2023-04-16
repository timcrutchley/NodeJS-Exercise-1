// April 16, 2023
// Operating System (OS) Demo
// We learn how to : Get various information about
// the OS, CPU, Memory

const os = require('os');

// Platform - Windows, Mac, Linux, etc
console.log(os.platform()); // Win32 = Windows

// CPU Arch
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());