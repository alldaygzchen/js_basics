**Object**

- without object everything is abstract e.g. movie.title,movie.duration ...
- key and value are same, the value can be ommited

**Adding, modifying, deleting**

- const example ='last-name'
- const person ={name:"Judy",age:28,'first-name':'SU',1.5:'hello',[example]='chen'} //name automatically to string
- Adding,Modifying: person.isAdmin = true
- Deleting: delete person.age
- undefined and null is different

**Square Bracket**

- keys can also be written in string person['first-name'] //bracket must be string

**Property type and order**

- person[1.5] //hello
- person['1.5'] //hello

**Dynamic property access**

- const name2='first-name'
  person[name2]

**Object Spread Operator**

- Create a new copy (shallow)
- const person = {..person,age:29,},hobbies:[...person.hobbies]}

**Object.assign()**

- Create a new copy (shallow)
- const person2 = Object.assign({},person)

**Object destructuring**

- const {info,...otherProps}=movie //rest operator, the result is {}
- const {info:information}=movie //new variable called information

**Property existance**

- if ('info' in movie){...}
- movie.info === undefined

**This**

- Object do not use arrow function
- looking the thing which is responsible for executing the function
<!-- - methods can object destructuring too -->

**Method shorten syntax**

- No key, no function
- example: getTitle(){}

**This Strange behavior**
