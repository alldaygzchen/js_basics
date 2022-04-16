**Introducing Constructor Functions**

- function Person(){this. ....}

**Constructor Functions vs Classes & Understanding "new"**

- new adding this={} and return this in constructor function using new

**The Prototype Chain and the Global "Object"**

- Build in function constructor has a lot of predefined static method and property

**Methods in classes and in constructor**

- methods are added in prototype for saving memory and inheritance

**Setting & Getting Prototypes**

- set prototype after the object has been created
- const course ={object.getPrototypeOf(course))  
  Object.setPrototypeOf(course,{...Object.getPrototypeOf(course),printRating:function(){console.log()}})

- set prototype not created by own construction function
- const student = Object.create({printProgress:function(){console.log(this.progress)}},{name:{configure:true...}})

**Constructor function vs classes**

- constructor function: all properties and methods are enumerable
- methods are non enumerable
