**iterable**

- objects where can use for of loop
- string,map,nodelist are also iterable

**array-like**

- Have length and index to access items
- nodelist and string are also array-like

**creating array**

- const nums=[1,2,3]
- const nums=new Array() //[]
- const nums=new Array(1,2,3) //[1,2,3]
- const nums=new Array(3) //[empty*3] //empty is undefined
- const nums=Array(5,2) //[5,2]
- const nums=Array.of(5,2) //[5,2]
- const nums=Array.from('hi') //[h,i] //array like //nodelist to array

**Element in array**

- Elements can me different type

**Adding and Remove Element**

- add: array.push('ex'), array.unshift('ex')
- remove: array.pop(),array.shift()
- array.splice(start,number of delete,item) //return removed elements

**Range and copies**

- array.slice() // return brand new array
- array.slice(0,2) // slice from index 0 to 1
- array.slice(2) //slice from index 2
- array.concat([1,2]) // return brand new array adding 1,2 element

**Retreiving items**

- indexOf wont work if element is object
- array.indexOf(element) //the first element
- array.lastIndexOf(element)
- array.includes(element) // true or false
- array.find((element)=>{return element.name === 'GZ'}) // does not copy object
- array.findIndex((element)=>{return element.name === 'GZ'})

**forEach()**

- Different than for of loop: the access of index
- const prices =[1,2,3]  
  const tax =1  
  const result=[]  
  prices.forEach((price,idx)=>{  
   const priceObj ={index:idx,taxPrice:price+tax}  
   result.push(priceObj)  
  })

**map()**

- Different than forEach: initiliazing variable
- const prices =[1,2,3]  
  const tax =1  
  const result= prices.map((price,idx)=>{  
   const priceObj ={index:idx,taxPrice:price+tax}  
   return priceObj //brand new array
  })

**sorting and reversing**

- sort by default converts to string
- const sortedPrices = prices.sort((a,b)=>{
  if(a>b){
  return 1
  }else if (a===b){
  return 0
  }else{
  return -1  
  }
  })
- console.log(sortedPrices.reverse())

**filter()**

- const result= prices.filter((price,idx)=>{  
   return price>6
  })

**reduce**

- const sum = prices.reduce((prevValue,curValue,index)=>{
  return prevValue+curValue
  },0)

**Leverage method chaining**

- Since it produces array, chaining is available

**Split and Join**

- string.split(';') //array
- array.join(' ') //default comma

**The spread operator**

- Although creates new array, Beware that inner reference value is not copied
- console.log(Math.min(...prices)))
- const copyPrice = [...prices]

**Array destructuring**

- const names =['hello','world']
  const [a,b]=names
- const names =['hello','world',1,2]
  const [a,b,...c]=names //rest operator

**Array,Maps,Sets**

- Sets: Duplicate are not allowed. No index based access
- Maps: key-value pair (any key value are available), iterable, duplicate key are not allow

**Sets**

- const ids = new Set([1,2,3]) // input are iterable
- ids.has(1) //true
- ids.add(4)
- ids.entries()
- ids.delete(1)

**Maps**

- const a ={name:'gz'}  
  const b= {name:'judy'}  
  const c = new Map([[a,[{date:'yesterday'}]]])

- c.get(a)  
  c.set(b,[{date:'two weeks ago'}])

- for (const [key,value] of c.entries()){  
  console.log(key,value) //array destructuring  
  }

- for (const value of c.values()){  
  console.log(value)  
  }

- c.size //2

**Maps vs Objects**

- less flexible key in objects
- large amount quantities are better for maps
- better performance in adding and removing data using maps

**Weakset**

- to make sure objects can be garbage collected

- let person = {name:'Judy'} //should be object  
  const persons = new WeakSet()  
  persons.add(person)

  // some operations before  
  person = null // address is released and clear object from heap

**Weakmap**

- const persons = new WeakMap()  
  persons.set(person,'extra info')  
  person = null // address is released and clear object from heap
