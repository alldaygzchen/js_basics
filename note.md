**Parameters vs Arguments:**

- Parameters: specify between parentheses
- Arguments: concrete value

**Functions are object:**

- console.dir(function)

**Different ways of creating functions:**

- const start = function startGame(){  
  console.log('Hello world')  
  } //expression

- const start = function(){  
  console.log('Hello world')  
  } //expression
- function start(){  
   console.log('Hello world')  
   } // declaration

**Function Declaration vs Function Expression:**

- Declaration: Hoisted and Initialized
- Expression: Hoisted but not initialized

**Anoymous Function:**

- Sometimes giving a name to function is better for debugging  
   e.g. btn.addEventListner('click',function hello(){console.log('Hello')})

**Arrow Function:**

- const start = ()=>{  
  console.log('Hello world')  
  } //expression
- if arrow function expressed in one statement, no brackets and return required

**Callback Function:**

- give the browser or the pointer of the function to execute for you
- pass function as parameter and execute inside the body (function())

**Function in function:**

- functions are objects, thus objects contain function is fine

**Default Arguments:**

- use undefined for missing arguments
- parameter and arguments doesn't need to match the quantity but order

**Rest Operators:**

- spread operator: spread array or object content
- rest operator: construct to array, mostly define in function parameters
- const sumUp = (a,b,...numbers)=>{return}

**Bind:**

- Bind create a new reference function and it is not immediately executed (some prameters are already set)
- callback function still receive all the parameters  
  e.g. showResult.bind(this,bindArgument,argument)
- When might bind() come in handy? preconfigure function arguments when not calling the function on your own

**Call and Apply:**

- apply and call execute immediately

  **Memory leak:**

- example: if addEventListener is unique, anonymous function will not lead memory leak

**Const in for of loop:**

- https://stackoverflow.com/questions/58483101/for-of-loop-should-i-use-const-or-let
