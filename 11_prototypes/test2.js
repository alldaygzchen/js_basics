// create greet in prototype

class Person0 {
  name = "Max";
  constructor() {
    this.age = 30;
    this.greet(); //shorthand optimization
  }

  greet() {
    console.log("Hi, Iam" + this.name);
  }
}

const p0 = new Person0();
console.log("p0", p0);
for (key in p0) {
  console.log(key);
}

// create greet in prototype

class Person1 {
  name = "Max";
  constructor() {
    this.age = 30;
  }

  greet() {
    console.log("Hi, Iam" + this.name); //shorthand optimization
  }
}

const p1 = new Person1();
console.log("p1", p1);
for (key in p1) {
  console.log(key);
}
// create greet in every object
class Person2 {
  name = "Max";
  constructor() {
    this.age = 30;
    this.greet = function () {
      "Hi, Iam" + this.name;
    };
  }
}

const p2 = new Person2();
console.log("p2", p2);
for (key in p2) {
  console.log(key);
}
// create greet in every object
class Person3 {
  name = "Max";
  constructor() {
    this.age = 30;
  }

  greet = function () {
    console.log("Hi, Iam" + this.name);
  };
}

const p3 = new Person3();
console.log("p3", p3);
for (key in p3) {
  console.log(key);
}

// create greet in every object
class Person4 {
  name = "Max";
  constructor() {
    this.age = 30;
  }

  greet = () => {
    console.log("Hi, Iam" + this.name);
  }; // good for addeventlistener
}

Person4.prototype.printAge = function () {
  console.log(this.age);
};

const p4 = new Person4();
console.log("p4", p4);
for (key in p4) {
  console.log(key);
}
