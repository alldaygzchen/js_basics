""**What is DOM**

- Browser expose web api to allow js to work with [rendered and parsed HTML (DOM)]
- document and window are global object
- console.dir(document)
- window.document=document
- html is parsed to element node and text node
- DOM node are just js object e.g. querySelector just return address
- element nodes are element which contains property and method which is differ to text node

**Attribute vs Properties**

- HTML:attribute
- JS:properties
- attribute and properties are not 1-1 sync e.g. Input.value in js, backgroundColor

**Static and Live collection**

- https://gomakethings.com/live-vs.-static-nodelists-and-htmlcollections-in-vanilla-js/

**Traversing the DOM**

- Diving to its child node
- Parent : parentNode,parentElement,closest() (for parent and ancestor)
  Sibling : nextSibling,nextElementSibling,previousSibling,previousElementSibling  
  Child : firstChild,firstElementChild,lastChild,lastElementChild,childNode,children,querySelector()

- example 1:  
  const ul = document.querySelector('ul');
  document.querySelector('li:last-of-type') equals ul.lastChild

- example 2:
  ul.children // list

**Styling DOM ELEMENTS**

- inline style has a higher property than class style
- element.className="red-bg visible" // multiple class available
- element.classList.toogle('visible') // "red-bg visible" or "red-bg"

**Styling DOM ELEMENTS**

- Html String:
  - innerHTML (replace all with new added html string)
  - insertAdjacentHTML(,)  
    //firstparam: beforebegin,afterbegin,beforeend,afterend  
    //secondparam: custom html string
  - Since innerHTML replace all sometimes insertAdjacentHTML(,) is better
- createElement():

  - appendChild()/append() // element/sting,element,multiple element
  - prepend(),before(),after()
  - replaceChild(),replaceWith()

- Html String vs createElement():

  - variables should assign after innerHTML

- innerHTML vs textContent:
  - textContent is for text

**Styling DOM ELEMENTS**

- element.cloneNode(false) //true=>decesdent are cloned (delete addEventlistner using bind)

**Remove Elements**

- const list = document.querySelector('ul')  
  list.parentElement.removeChild(list) or list.remove()

**Browser support**

- old: appendChild() ,insertAdjacentHTML(,),replaceChild(),removeChild()
- new: append(),prepend(),before(),after(),replaceWith(),remove()
