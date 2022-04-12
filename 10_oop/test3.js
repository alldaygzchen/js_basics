class Test {
  constructor(name) {
    this.name = name;
    this.someFunction();
  }

  someFunction() {
    this.output = this.name + "hehe";
    return this.output;
  }
}

class Grade extends Test {
  constructor(name) {
    super(name);
  }
  someFunction() {
    // this.output = this.name + "haha";
    // return this.output; //remove
    this.name = this.name + "haha";
  }
}

const grade = new Grade("Judy");
console.log(grade);
console.log(grade.someFunction());
console.log(grade);
