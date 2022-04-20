**A closer look at events**

- 3 Ways of Listening to Events

  - <button onclick="alert('')"> Click me</button> //javascript code in html
  - Element.onclick = function(){} //can only add a handler to element
  - Element.addEventListener() //https://www.tutorialrepublic.com/faq/how-to-call-multiple-javascript-functions-in-a-single-onclick-event.php // removeEventListener()

- common events
  - mouseevent, scroll
- Working with "preventDefault()"

  - For form element with <button type='submit'>Submit</button> will refresh browser page
  - use event.preventDefault()

- Understanding "Capturing" & "Bubbling" Phases

  - Capturing:outside to inside
  - Bubbling:inside to outside (default)
  - https://javascript.info/bubbling-and-capturing

- **Event Propagation**
- event.stopPropagation vs event.preventDefault
- event.stopImmediatePropagation()
- using forEach loop adding multiple elements event listener have bad memory performance.Instead use Bubbling
- event.currentTarget
- event.target.closest('li') // including itself
  **Drag and Drop**
