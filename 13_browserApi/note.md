**Attaching Data to Elements**

- Using Element.dataset.extraInfo in js to extract value in html data-extra-info tag

**Working with Element Coordinates and sizes**

- These are read-only value, setting should use css e.g. Element.style.position='absolute', Element.style.left=100px
- Element.getBoundingClientRect() the element top,right,bottom,left information
- Element.offsetTop: the distance between the start of document coordinate (does not change upon scrolling)
- Element.clientTop: the distance between the inner content
- Element.offsetHeight:Include border and scrollbar
- Element.clientHeight: Without border and scrollbar
- Element.scrollHeight: Including invincible part
- Element.scrollHeight: How much you have scroll
- window.innerWidth,window.innerHeight without devtool and url
- document.documentElement.clientWidth,document.documentElement.clientHeight exclude scrollbar
- Element.scrollBy(), Element.scrollTo() scrollBy can be continous added
- Element.scrollIntoView({behavior:'smooth'})

**Working with Templates and Dynamic Scripts**

- <template></template> to be used html code in js scripts
  e.g. document.importNode(element.content,true)

- static startAnalytics() {
  const analyticsScript = document.createElement('script');
  analyticsScript.src = 'assets/scripts/analytics.js';
  analyticsScript.defer = true;
  document.head.append(analyticsScript);
  } (do not use in input, at least you should validate it )

- setTimeout(this.startAnalytics,3000) clearTimeout(timerId)
- setInterval(this.startAnalytics,3000) clearInterval(timerId)

- **navigator,location and window.history**
- location.ref='https://github.com/alldaygzchen/js_basics'
- location.replace('https://github.com/alldaygzchen/js_basics')
- location.host
- location.origin
- location.pathname
- history.back()
- navigator
- const date = new Date()  
  date.getDate()
- throw new Error('something went wrong') // gives you stack trace
