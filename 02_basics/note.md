**_Data Types:_**

- Numbers, String, Booleans, Objects, Arrays
- undefined(No equal sign), null(never assume by default, use for reset and clear), NAN(Not a type)
- tyoeOf() For objects,Arrays and null are all objects

**_Function:_**

- Avoid code duplication
- function add(){}
- function will be moved all to the top in the script automatically before running
- paramters: Input of the function
- functions of addEventListner if it is global not suggest to use return (For simplity reason). For local variable, it is essential
- functions of addEventListner should have explicit output
- console.log(3\*'3') //9
- let x=3, y=3;  
  y=++x;  
  console.log("y",y) //y=4

**_Shadowed Variable:_**

- creates a new variable on a different scope (global and local scope co-exists)
- Only if no such local variable existed, JavaScript would fall back to the global variable.
- Executing value indirectly

**_Attention:_**

be careful of line breaks in code when using white-space:pre in css and template literal

**_Converting Datatype:_**

- parseInt(), +,parseFloat(), .toString()

**_Array:_**  
push()

**_Script:_**

- <script src="..." defer></script> Execute script immediately after parsing all html
- <script src="..." async></script> Execute script immediately after loading
