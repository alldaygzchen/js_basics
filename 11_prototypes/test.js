class Person {
  name = "Max";

  constructor() {
    this.age = 30;
    // this.greet(); // try it
  }

  greet() {
    this.age = this.age + 1;
    return this.age;
  }
}

// function Person() {
//   this.age = 30;
//   this.name = "Max";

//   this.greet = function () {
//     this.age = this.age + 1;
//     return this.age;
//   };
// }

class Me extends Person {
  constructor() {
    super();
  }

  greet() {
    this.age = this.age + 100;
    return this.age;
  }
}

person = new Person();
console.log("person", person);
console.log(person.greet());
console.log("person", person);

me = new Me();
console.log("me", me);
console.log(me.greet());
console.log("me", me);
