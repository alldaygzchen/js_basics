class Test {
  constructor(a) {
    this.a = a;
    this.someFunction();
  }

  someFunction() {
    this.a = this.a + 1;
  }
}

class Grade extends Test {
  constructor(a) {
    super(a);
  }
  someFunction() {
    this.a = this.a + 100;
    return "haha";
  }
}
console.log("@@@@@@@");
const test = new Test(10);
console.log("test", test);
const grade = new Grade(100);
console.log("grade", grade);

console.log(grade.someFunction());
console.log("grade", grade);
// console.log(test);
