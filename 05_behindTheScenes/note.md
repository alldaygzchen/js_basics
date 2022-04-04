**ES5 vs ES6:**

- Start with a standard rule in ES5
- Modern Javascript in ES6
- ES6 can be transmit to ES5

**Block Scope:**

- block scope: let, const (if ,try catch)
- global scope: var

**Hoisting:**

- console.log(userName)  
  var username='Max' //undefined

- console.log(userName)  
  let username='Max' //no initialization

**Strict mode:**

- 'use strict'
  var undefined =5;

**Parsed and compiled:**

- Browser (include engine and browser api) > Javascript engine

- Your code =>  
  javascript parsing and execution including browser api  
  (Interpreter (output : bytecode) and compiler (output : machine code))=>  
  my computer

- https://www.quora.com/What-is-the-difference-between-byte-code-and-machine-code-and-what-are-its-advantages
- https://www.quora.com/What-is-difference-between-platform-dependent-and-independent-language

**Inside the javascript engine:**

- Heap: Memory allocation (store data in memory and manage to access it)
- Stack: Execution context (manage your program flow)
- https://medium.com/itsems-frontend/javascript-event-loop-event-queue-call-stack-74a02fed5625

**Primitive and reference value:**

- Primitive: store in memory stack, variable store its value
- Reference: store in memory heap, variable store its address  
  const person1={age:28}  
  const person2={age:29}  
  person1===person2 //false

**Garbage Collection:**

- Garbage collection: check for unused objects (variables without reference)
- Memory leaks: Still holds reference but not used
