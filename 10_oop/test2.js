class Test {
  constructor(name) {
    this.name = name;
    this.someFunction();
  }

  someFunction() {
    this.output = this.name;
    return this.output;
  }
}

const test = new Test("Judy");
console.log(test);
console.log(test.someFunction());
console.log(test);
