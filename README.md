# NodeJS-Exercise-1
Node JS Exercise 1

Began **APRIL 12, 2023**

The objective of this Exercise is to be a crash course introduction to Node.JS

-Written in C++

-NodeJS is a **Javascript Runtime** NOT a framework or language

-Event-driven non-blocking I/O model

It is asynchronous, single threaded. It can run tens of thousands of connections on one thread. This allows for efficiency and scalability. However, it is not ideal for CPU intensive actions.

**NODES EVENT LOOP**

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


goal completion: sunday March 16

add more detailed notes here


**Exercise 1:** 04/15 <br> 
Create 'module' files and access them from index.js. Learn how the module wrapper function wraps around all our modules to give us access to exports, require and module.

**Exercise 2:** 04/16 <br> <br> <br>
Test different methods from the path_demo module. These are different ways to retrieve different parts of the path, including the ext and dir. However we can also create a path object which contains it all. We learn how to concatenate paths, which is useful for adding the correct delimiter (windows uses backslash while Mac & Linux use forwardslash)

**Exercise 3:** 04/16 <br> <br>
File System (FS) <br>
A review of how to create folders, create & write to a file, how to append files, read and rename files
