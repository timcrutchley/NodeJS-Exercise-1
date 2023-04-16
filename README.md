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


Exercise 1:
Create 'module' files and access them from index.js. Learn how the module wrapper function wraps around all our modules to give us access to exports, require and module.
