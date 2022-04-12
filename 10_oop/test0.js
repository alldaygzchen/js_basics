let a = 1;

class Test {
  constructor(name) {
    this.name = name;
    this.someFunction();
  }

  someFunction() {
    a = a + 1;
  }
}

class Grade extends Test {
  constructor(name, hw) {
    super(name);
    this.hw = hw;
  }
  someFunction() {
    a = a + 10;
    return "haha";
  }
}
console.log("@@@@@@@");
console.log("a", a);
const test = new Test("Judy");
console.log("test", test);
console.log("a", a);
const grade = new Grade("Judy", 100);
console.log("a", a);
console.log("grade", grade);
console.log("a", a);
console.log(grade.someFunction());
console.log("a", a);

// console.log(test);
