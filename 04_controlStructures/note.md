**_refactor:_**

- addEventListner has no paranthesis in function (Be aware)

**If statement:**

- if(){

  }else if (){

  }else{  
  // not required  
  }

**Object and array equality:**

- const person1= {name:'GZ'}  
  const person2=person1  
  console.log(person2===person1) //true

**Operator precendence:**

- addition/subtraction> comparison operators> && > ||

**Truthy and falsy:**

- 0, "", null , undefined, NAN: falsy
- [],{}:truthy
- isNaN(variable)

**Global Variable:**

- Utilizaing GLobal Constants: prevent duplicate miss typing
- const variables recommend use uppercase for code reading

**Function convention:**

- can use onClick or clickHandler for example

**Ternary Operation:**

- Since if cannot create value of its own, Despite use let defined variable first

**Statement vs Expression:**

- The entire snippet is a statement.
- Everything after = is an expression.

**Logical Operator Trick:**

- !!
- const name = null || "Max" //"Max" (consider the first)
- const name = "Max" || null //"Max" (consider the first)
- const name = "Judy" || "Max" //"Judy"
- const name = true && "Max" //"Max" (consider both)
- const name = null && "Max" //null
- const name = true && "" //""
- const name = "Judy" && "Max" //"Max"

**Switch Case:**

- switch(var){  
  case A:  
   console.log('A')  
   break;  
   case B:  
   console.log('B')  
   break;  
   default:  
   console.log('c')  
  }

**Introducing to loops:**

- for loop (contains counter variable)
- for-of loop (contains array)
- for-in loop (contains object, execute key in the object)
- while loop (boolean, execute as long as its true)
- for (const a of array) ??
- while vs do while
  let j =3;  
   while(j<3){  
   console.log(j)  
   j++  
   }

  do{  
   console.log(j);  
   j++;  
   }while(j<3) //j=3

**Break and continue:**

- Stop the current execution loop
- let j=0;
  a: do {
  console.log('Outer', j);
  b: for (let k = 0; k < 5; k++) {
  if (k === 3) {
  break a;
  }
  console.log('Inner', k);
  }
  j++;
  } while (j < 3);

**Error Handling:**

- user input, network error, ... (not beyond your control)
- throw {message:'Invalid user'}
- only put code not beyond your control in try catch
