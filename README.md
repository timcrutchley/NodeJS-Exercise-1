# NodeJS-Crash Course
<br>Node JS Crash Course - Following Brad Traversy

Began **APRIL 12, 2023**

The objective of this Exercise is to be a crash course introduction to Node.JS

-Written in C++

-NodeJS is a **Javascript Runtime** NOT a framework or language

-Event-driven non-blocking I/O model

It is asynchronous, single threaded. It can run tens of thousands of connections on one thread. This allows for efficiency and scalability. However, it is not ideal for CPU intensive actions.

**NODES EVENT LOOP**
<br>*Subject should be looked up and more detail noted*

EventEmitter Class is used to bind events & listeners

Events

Event Loop

Event Handlers


Node is good for:

REST API & Microservices
Real Time Services (Chat, Live Updates)
CRUD Apps - Blogs, Shopping Carts, Social Networks
Tools & Utilities


Node Core Modules (path, fs, http, etc)
3rd party modules/packages installed via NPM
Custom modules (files)

const path = require('path');
const myFile = require('./myFile');


goal completion: April 26th

add more detailed notes here


**Exercise 1:** 04/15 <br> 
Create 'module' files and access them from index.js. Learn how the module wrapper function wraps around all our modules to give us access to exports, require and module.

**Exercise 2:** 04/16 <br>
Test different methods from the path_demo module. These are different ways to retrieve different parts of the path, including the ext and dir. However we can also create a path object which contains it all. We learn how to concatenate paths, which is useful for adding the correct delimiter (windows uses backslash while Mac & Linux use forwardslash)

**Exercise 3:** 04/16 <br>
File System (FS) <br>
A review of how to create folders, create & write to a file, how to append files, read and rename files

**Exercise 3:** 04/16 <br>
Operating System (OS) <br>
A review of how to get various information about the Operating System, CPU, Memory

**Exercise 4:** 04/16 <br>
URL Demo <br>
A review of how to get various info about our url, host and parameters

**Exercise 5 - Part 1:** 04/16 <br>
Event Emitter Demo
Shows how emitters interact with listeners to init objects & events<br>
**Exercise 5 - Part 2:** 04/18 <br>
Event Emitter - Logger Demo
Shows how we can use the logger method to create our own custom logs.<br>
*TO DO: Include FS (File System) and append file with a log of the keys that are generated*

**Exercise 6 - Http Demo** 04/20 <br>
Http Demo - A very simple demo of a functional http server
