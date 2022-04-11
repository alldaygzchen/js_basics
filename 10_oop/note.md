**What is OOP**

- To turn the code easier for human reading
- object literal disadvantage: duplicate code

**Classes and Instance**

- objects are instance of classes
- e.g.  
  class Product{
  <!-- title='DEFAULT'; // field //default
  imageUrl;
  description;
  price -->

  constructor(title,image,desc,price){  
  this.title =title;  
  this.imageUrl =image;  
  this.description =desc;  
  this.price =price;  
  }

  }

  new Product('A pillow',"...","...","...")

**Field and Property**

- Class: field
- Object: property

**Static Methods & Properties**

- connect classes
- https://stackoverflow.com/questions/51381966/how-do-i-use-a-static-variable-in-es6-class

**When to use Classes**

- resue (In other words, the blueprint should come up first)

**Implementing Inheritance**

- when subclass has no constructor, the parent is called automatically (if no parameter, gets no value but still called)
- if adding constructor in subclass, the parent constructor will not be called
- if called the parent construtor from child constructor
  constructor(sth){
  super(sth)
  }
