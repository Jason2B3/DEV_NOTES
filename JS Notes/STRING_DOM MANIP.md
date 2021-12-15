# ———【DOM MANIPULATION】———

# DOM Fundamentals: 

Most of this unit will feature lessons from Traversy Media's series on DOM manipulation:  
[(20) JavaScript DOM Crash Course - Part 1 - YouTube](https://www.youtube.com/watch?v=0ik6X4DJKCc&list=PLWrdF35wo-ISLXL9R7khxtpZ17jCsmeiv&index=1)

The central project we'll be building is an item listing application:

![image-20210326083746978](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210326083746978.png)

STARTING CODE: The below pen with an empty JS doc instead

ENDING CODE: [DOM Item Lister (codepen.io)](https://codepen.io/bradtraversy/pen/Bwapow)



### What is the DOM? (Repeat)

The DOM is a complicated API that lets us interact with the DOM tree- which is formulated based off our HTML file. 

Through DOM manipulation, we can force JS to interact with the browser by... 

- Adding/placing new elements
- Modify or delete existing ones
- Set CSS styles, classes, and attributes
- Create events that trigger when we do certain things on our webpage

We use DOM methods and properties to interact with the tree. You've seen plenty already

![image-20210411232522464](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210411232522464.png)

#### Terminology

When speak about the DOM, we use these terms: 
Child element, parent element, sibling element, nodes...etc

![image-20210226174738311](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210226174738311.png)

If an element is the child of another, it will be placed below its parents
Sibling elements result in branching paths

There are more than just element nodes on the actual DOM of a typical HTML document. There's nodes for all text, comments, and other things. Everything in the HTML document must be in the DOM

#### DOM and JS being Separate Entities

To properly manipulate this structure, you'll need DOM methods and properties
You've already used a common one: `document.querySelector()`

These properties and methods are technically not JS. 
They're part of web API's- libraries that browsers implement. 
You can directly access certain methods/properties in JS.

There are many more API's than just the DOM: ![image-20210226180115095](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210226180115095.png)

### How the DOM Nodes Work

TLDR: 
The DOM API is broken up into different types of nodes.
Each of these types of nodes has access to different properties and methods 

#### HOW THE DOM API IS ORGANIZED

![image-20210411222001680](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210411222001680.png)

This is not a visual representation of the DOM tree. 
It is a diagram to help you understand what role nodes play in the DOM

#### Everything in HTML is in the DOM

DOM nodes come in many forms, but every one of them is represented by a JS object
Some nodes represent elements while others are for the nested text, or even comments

Each node gets access to special node methods and properties: ![image-20210411233443563](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210411233443563.png)

The node type (yellow rectangle) has a couple of "child-types". 
These would be the element type, text type, comment type, and the document type
This is how nodes can represent more than just elements (nested text, comments...etc)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210411233953141.png" alt="image-20210411233953141" style="zoom:75%;" />

EXAMPLE: Explain what nodes are generated b/c of this code snippet

```html
<p>Hello World</p> <!--explained-->
```

`<p></p>` gets an element node			`Hello World` gets a text Node
`<!--explained-->` gets a comment node	 the entire document itself is a node

#### Element Nodes and HTML Tag Origins

The element nodes give HTML access to slew of useful methods and properties- all of which can be used for DOM manipulation through our JS document

Useful properties and methods: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210411235452097.png" alt="image-20210411235452097" style="zoom: 67%;" />

The element node has a child which represents the HTML element's type
What I mean is, divs would result in a different type of node than article tags

We have special types of nodes for buttons, images, links, and more. 
By now, you've noticed that they all have differing properties

- An image has a source attribute in HTML which no other element has
- The anchor element for links has the HREF attribute which also no other element has

The DOM needed a way of storing these different attributes. 
This is how ~~babies~~ HTML elements were born in the DOM API

#### Documents Node Type

The document itself is just another type of node that lets us use important methods

![image-20210412001747192](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210412001747192.png)

If you look closely at the diagram up top, you'll notice that querySelector is available for both element and document nodes, You'll see why later

#### Intro to Prototypal Inheritance

Inheritance means that all the child types will also get access to the methods and properties of all their parent node types.

- For example, an HTML element will get access to everything from the element type, like innerHTML, or classList or all these other methods and properties.
- And besides that it will also get access to everything from the node type because that is also its parent type. It's somewhat similar to the scope chain

This will be explored further when we learn about Object-Oriented-Programming

#### Why Event Listeners Work on Everything

Event listeners work on every single node type on the DOM API

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210412002323473.png" alt="image-20210412002323473" style="zoom:67%;" />

As you can see on the diagram, EventTarget is a parent to the node and window node types- while being a node itself of course. Thanks to inheritance, everything down the descendant gets access to its methods

EventTarget methods are extremely popular: ![image-20210412002215645](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210412002215645.png)

### The Document Object

In the past, we've used `console.dir()` to look inside JS objects and see what's inside. Let's do the same with the document itself- which is in fact, an object

```js
console.dir(document)
```

goes much longer: ![image-20210326090140805](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210326090140805.png)

You get a very large tree of document methods and properties, all of which you can access through your JS code to read or manipulate things in the DOM

#### A few Document Properties/Methods

```js
console.log(document.domain);  // Shows loop back address
console.log(document.URL);     // Shows URL of the page
console.log(document.doctype) // returns doctype. In this case <!DOCTYPE html>
console.log(document.head) // returns entire head section in HTML
console.log(document.body) // returns the body section in HTML w/ all its nested tags
console.log(document.all) // gives an array of everything inside the DOM
console.log(document.links) // fetches all links in your array
console.log(document.images)  // fetches all images in your array
console.log(document.forms) 
	// fetches all forms in your webpage so you can access their properties
```

(Not disclosing my IP address for obvious reasons)

#### Changing the Webpage with Doc Properties

As you will see, we're not limited to reading off these properties on the console. 
We can make changes in our code using them:

EXAMPLE 1: Change Webpage Title

```js
console.log(document.title);   // Shows title of the doc that's found on tab
document.title="New Age Black" //CHANGES the title on your site's browser tab
console.log(document.title); // Shows new title
```

![image-20210326091239652](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210326091239652.png)



### Selecting HTML Elements & Adding/Removing Classes

To create a dynamic webpage, we can't just hardcode everything in HTML/CSS, we need JS to perform certain actions once conditions are met by the page's visitors

- There are multiple ways to bring HTML elements into JS- and once you do, you'll typically want to store them inside an aptly-named variable
- After that, you can use them to change webpage content via your JS file, incorporate event listeners, change CSS styles, add classes to give pages a new look...whatever!

#### 1 Element via ID:

```js
const varName= document.getElementById("elementID")
//OR
const varName= document.querySelector("#elementID")
```

- Some methods in JS allow you to target elements by their ID's without this importing step- for example, `rawID.addeventlistener` works
- In case they don't however, this is important to know 

#### 1 Element via Class:

```js
const varName= document.querySelector('.hello');	
// standard CSS selector (can use any selector type, even combinators)
```

- Searches for a SINGLE element inside the "hello" class
- If there are multiple elements in that "hello" class, this selector will go for the first one it finds in the HTML file (the one closest to the top)

#### 2+ Elements via Class


```js
const varName= document.querySelectorAll('.hello');	 //returns node list
//OR
const varName= document.getElementsByClassName("hello") //returns HTML collection
```

- Searches for EVERY element inside the "hello" class
- This creates a nodelist with every element successfully targeted, in the order they're found in HTML 
- If you want to apply an event listener for all of them, you cannot do so normally.
  You'll have to create a for loop to contain your event listener (Ex. WARP: AXQZE1)

#### All HTML Tags by Type

```js
const varName= document.getElementsByTagName('li') //returns HTML collection
// OR
const varName= document.querySelectorAll('li'); //returns node list
```

- Captures every single `li` element (in this case) and places them all into an HTML collection, which is different than a node list or array
- HTML collections update every time a change to the DOM is made.
  Ex. if a list item is removed programmatically, our collection will reflect that
  A node list or array would not

#### Versatile Searches

- Since querySelector and querySelectorAll use any kind of CSS selector to pick their targets, we are not forced into searching with ID's or classes only
- This lets you create searches that can target different element types, or only pick some elements of what would normally be chosen

EXAMPLE: You have a list. Pick the odd numbered list items only, then add color 

```html
<ul id="items" class="list-group">
    <li class="list-group-item">Item 1</li>
    <li class="list-group-item">Item 2</li>
    <li class="list-group-item">Item 3</li>
    <li class="list-group-item">Item 4</li>
</ul>
<script>
	let listItems= document.querySelectorAll(".list-group-item:nth-child(odd)")
	for (let i=0;i<listItems.length;i++){
  		listItems[i].style.backgroundColor="lavender"
	}
</script>
```

![image-20210326154240607](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210326154240607.png)

#### Selecting the Entire Document

```js
let varName= document.documentElement
varName.style.opacity=0; 		//makes entire webpage invisible
```

We also have an alternative to using querySelector on major webage sections. 
Just refer to them directly on the document like this:

```js
document.head
document.body
```

#### Only Searching within an Element Container

- The `document.querySelector("")` method searches your HTML file for elements because of the "document" part. 
- You can force it to only look inside an element by replacing "document" with it

EXAMPLE: Search for anchor tags within the unordered list, not the entire document

```js
let ul= document.querySelector(".nav__links")
let ul_Anchors= ul.querySelectorAll("a")
```

![image-20210421111452284](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210421111452284.png)

#### Add/Remove/Toggle Classes 

Assume we imported an element from HTML named `testEl`

|                         |                                                     |
| ----------------------- | --------------------------------------------------- |
| add a class             | `testEl.classList.add('className')`                 |
| add multiple classes    | `testEl.classList.add('className1, className2')`    |
| remove a class          | `testEl.classList.remove('className')`              |
| remove multiple classes | `testEl.classList.remove('className1, className2')` |
| toggle a class on/off   | `testEl.classList.toggle('className')`              |

###### BAD METHOD TO SET CLASSES

You should never use this method, but should be able to spot when it is.

```js
htmlEl.className= 'whatever'
```

This overrides every existing class the element once had. 
Also, it limits the element to only having 1 class- the one you set here

### Checking Elements for Classes

You aren't required to use `.classlist.contains()` inside an event listener, in case you're wondering

```js
checkIt.addEventListener('click', ()=>{     //% CHECK FOR CLASS
  let hasOrNot = $hello.classList.contains('bg','bd');  
  //~ Checks if el belongs to the "bg" OR 'bd' class. returns true if in either 
  // We can perform actions based on if an element has a certain class now...
})
```



### Dealing with NodeLists of HTML Elements

#### Targeting them All at Once

If you've used `getElementsByClassName` or `querySelectorAll` , you need to loop over the arrays they produce if you want to apply changes to all the entries- which are HTML elements

EXAMPLE: Take all the li elements in this list, and change the background color

```html
<ul id="items" class="list-group">
      <li class="list-group-item">Item 1</li>
      <li class="list-group-item">Item 2</li>
      <li class="list-group-item">Item 3</li>
      <li class="list-group-item">Item 4</li>
</ul>
<script> 
    let listItems= document.getElementsByClassName("list-group-item")
	for (let i=0;i<listItems.length;i++){
  		listItems[i].style.backgroundColor="lavender"
	}
</script>
```

![image-20210326150112444](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210326150112444.png)	=>	![image-20210326150050424](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210326150050424.png)

#### Targeting them Individually

If you wish to target the items in an HTML element array one-by-one, just use bracket notation as you would with any array

```js
let listItems= document.getElementsByClassName("list-group-item")
console.log(listItems);
```

![image-20210326150910239](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210326150910239.png)

- When we hover over a specific element in our array, it highlights the location on our webpage preview
- This is how you know what you'll be directing your changes towards
  You could also just see which element appears earliest in the HTML doc

```JS
listItems[0].style.backgroundColor="orange" // continuing from last snippet...
```

![image-20210326151336849](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210326151336849.png)

#### Add Event Listeners to all List Nodes

FUN FACT, forEach works on node lists as well as arrays
There's no need for conversion if we wish to apply event listeners to them all

EXAMPLE: Add a modal to a group of captured buttons

```js
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

btnsOpenModal.forEach((btnElement)=>{
  btnElement.addEventListener('click',eventHandlerFunction) //dw about the details
})
```

Feel free to use a callback function you defined elsewhere
Or you could define the event handler right inside the forEach loop (Doesn't matter)

#### Applying Array Methods to a NodeList

- `document.querySelectorAll()` and `getElementsByClassName` create a nodelist with all elements that match the selector in brackets. 
- They don't create real arrays, so you have to convert it into one before you can use any array methods on it (use the spread operator)

```js
let listItems= document.getElementsByClassName("list-group-item")
let listItemsArray= [...listItems]
```



### Manipulating or Using Text

We have several options when it comes to adding, changing, or using existing webpage text. The most popular three are textContent, innerText, and innerHTML

These methods are similar to each other, and can sometimes be used interchangeably
That being said, they each have slight differences which dictate their use-cases

|             | What it does                                                 | When to use                                                  |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| innerText   | retrieves and sets the content of the tag as plain text      | When you only need to see what’s in the element — with zero formatting |
| innerHTML   | retrieves and sets the tag's content in HTML format          | When you want to see the HTML markup and what exactly is in our element — including any spacing, line break, and formatting irregulars |
| textContent | same as innerText, but does NOT care about the rendered appearance of text | When you want to see what’s in the element, plus any styling on it |

Additional notes for Inner HTML:

If the text inside the element includes the characters `&`, `<`, or `>`, innerHTML will return these characters as HTML entities `&`, `<`, and `>`.

#### Capturing Existing Text

If you save existing text into a variable, you can reuse it at any time to do whatever you want. Make an alert with the text inside a div for example (not showing that)

Sample HTML Code:

```html
<div id='blog-test'>
This element is <strong>strong</strong> and     has some super fun <code>code</code>!
</div>
```

![image-20210326135124002](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210326135124002.png)

NOTICE THE DIFFERENCES BETWEEN OUR 3 METHODS:

```JS
const getValue = document.getElementById('blog-test');
let a= getValue.innerText 	// reformats text & removes HTML syntax
let b= getValue.innerHTML	// keeps the tag's text as is, including all HTML code
let c= getValue.textContent	// removes HTML syntax but keeps original formatting 

console.log(a,b,c);
```

![image-20210326142643196](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210326142643196.png)

#### Changing Text

The use-cases are much simpler when trying to change words on our sites. 

- If you want to have HTML nested tag effects, use innerHTML
- Otherwise, use innerText or textContent
  The sentence will be reformatted thanks to HTML regardless

```html
<div id='blog-test'></div>
<div id='blog-test2'></div>
<div id='blog-test3'></div>
<script> 
	const getValue = document.getElementById('blog-test');
	const getValue2 = document.getElementById('blog-test2');
	const getValue3 = document.getElementById('blog-test3');

	getValue.innerText= 'New		text with <strong>HTML bait</strong>'
	getValue2.innerHTML= 'New		text with <strong>HTML bait</strong>'
	getValue3.textContent= 'New		text with <strong>HTML bait</strong>' 
</script>
```

![image-20210326144413440](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210326144413440.png)

#### Using/Manipulating Input Field Text

- If you want to save or change text that's inside of an input field, the syntax is different.
- The user typed it in his/herself or did something that changed its value

```html
<form class="form-inline mb-3">
      <input type="text" class="form-control mr-2">
      <input type="submit" class="btn btn-dark" value="Submit">
</form>
<!--Starter code above-->
<script> 
	document.querySelector('.mr-2').value="insert filler text hither"
</script>
```

![image-20210326121512610](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210326121512610.png) ![image-20210326121750738](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210326121750738.png)

#### .insertAdjacentText()  

- You can actually add words to the beginning or end of an element- even it already has hardcoded words attached to it

```js
reference.insertAdjacentText("position-str",insertStr)
```

- `"afterbegin"` - at the top of the target element's children tree
- `"beforeend"` - at the bottom of the target element's children tree

You can use these last 2 if you want, but your text won't be nested inside any element

- `"beforebegin"` - just before the target element
- `"afterend"` - just after the target element

EXAMPLE: Add some characters to the end of your existing list item

```html
<ul id="listContainer">
	<li>List Item 1</li>
	<li>List Item 2</li>
	<li>List Item 3</li>
</ul>
<script>
	const secondLI = document.querySelector("li:nth-child(1)");
	const insertStr= "===="
</script>
```

![image-20210328153552438](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210328153552438.png)	![image-20210328183435348](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210328183435348.png)

# DOM: Manipulating HTML and CSS with JavaScript + Data Attributes

### Extracting Values of CSS Properties (S1)

There are a handful of methods which let you use hardcoded CSS property values in JS
Changing their values is another topic- one found in a nearby lesson

- Sometimes you might want to know a CSS property value without manually checking it. 

|                                                | purpose                                                      |
| ---------------------------------------------- | ------------------------------------------------------------ |
| `window.getComputedStyle(element)`             | returns an object containing the values of all CSS properties of an element |
| `HTMLelement.style.setProperty('color','red')` | changes the value of a CSS property                          |
| getPropertyValue()                             | gets the property value of an HTML element that has getComputedStyle() applied to it. SEE NEXT LESSON |

#### getComputedStyle()

Remember, this method gets updated every time you change the document in a way that affects the property you're targeting

STARTER CODE

HTML: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210412165550454.png" alt="image-20210412165550454" style="zoom:80%;" /> CSS: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210412165612026.png" alt="image-20210412165612026" style="zoom:80%;" /> Result: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210412165651644.png" alt="image-20210412165651644" style="zoom: 33%;" />

EXAMPLE: Log the color of the div 

```JS
let square= document.querySelector('div')

let divStyles=window.getComputedStyle(square)
console.log(divStyles.backgroundColor); //OUTPUT: rgb(0, 255, 0)

let widthVal = divStyles.getPropertyValue('width');
console.log(widthVal); //OUTPUT: "200px"
```

As you can see, we get the computed rgb code for the "lime" color we hardcoded in CSS. It's not what we typed, but what the browser COMPUTES it to be

- If you get the computed style of bold font weight, it'll return the computed thickness. 
- If you feed the method a font size in em or rem, it'll return the hardcoded px size

If you want to check a CSS property of a pseudo element, just add that as the second argument in `getComputedStyle()`

Manipulating Regular CSS 

#### Changing Inline CSS with getComputedStyle()

We need to use parseFloat to extract a number from the result of getComputedStyle()

```js
let square= document.querySelector('div')
let divStyles=window.getComputedStyle(square)

square.style.width=Number.parseFloat(divStyles.width) + 200+ `px`
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210412175825840.png" alt="image-20210412175825840" style="zoom:33%;" />

### Changing Inline CSS Properties (S2)

#### Changing Inline CSS

The DOM contains CSS styles as well- which means we can manipulate them using JS.
There are just a few things you need to keep in mind

- The method shown in this subsection applies inline CSS styles
  You won't see any changes in the CSS or SASS documents
- In JS, we need to use camelCase to name CSS properties that involve 2+ words
  CSS: `font-size`	JS: `fontSize`
- When typing the values for the CSS property in JS, they always need to be surrounded by quotation marks

```js
//SYNTAX
importedElement.style.camelCaseProperty="value"
```

Some properties have different names altogther. For example, to use float we must type importedElement.style.cssFloat (cases like this are fairly uncommon though)

DEMONSTRATION:

Before we begin, realize that you can tweak any CSS property through JS
Use your imagination, and don't limit yourself to simple applications like this one

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210326113723672.png" alt="image-20210326113723672" style="zoom: 50%;" />

Say we start off with a green square on our webpage- it's 200px by 200px
Change the color to violet, then change the size to make it much longer

```js
let square= document.querySelector('div')
square.style.backgroundColor= 'violet'
square.style.width= '500px'
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210326114712649.png" alt="image-20210326114712649" style="zoom: 50%;" />

PROPERTIES WITH MULTIPLE VALUES:

If you want to set 2+ values for a single property, stay w/ 1 pair of quotation marks

```js
document.querySelector('.btn').style.padding = '20px 10px';
```

### Changing Regular CSS Properties (S3)

Through JS, you can change the values of CSS properties, or even custom variables 
As far as I know, this doesn't work with SASS variables - only native CSS variables

WARP KEY: L943VR

#### EXAMPLE 1: Practical Example

STARTER CODE:

```html
<ul id="list1"> LIST 1
	<li class="uno">List Item 1</li>
	<li class="uno">List Item 2</li>
	<li class="uno">List Item 3</li>
</ul>

<style>
	:root{ --textColor: blue; }
	#list1{
  		color: var(--textColor);
	}
	.uno{ font-size: 24px }
	p { font-size:24px }
</style>
```

JS CODE:

- From our JS doc, we can change custom properties, or even regular CSS properties
- If the CSS custom property was defined on a different scope, you'd query select the selector it was defined inside of

```js
//———————————【Change custom property --textColor to teal 】—————————————
const root= document.querySelector(':root')
root.style.setProperty('--textColor','teal') 

//————————————【Change regular property color to red (for p tags)】————————————————
const paras= document.querySelector('p') // target all p tags
paras.style.setProperty('color','red') /*change color property fr.JS*/
```

Before JS: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210412202224161.png" alt="image-20210412202224161" style="zoom:80%;" /> After JS: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210412202202785.png" alt="image-20210412202202785" style="zoom:80%;" />

ALTERNATIVE (for changing CSS custom properties through JS)

```js
document.documentElement.style.setProperty('--textColor','teal')
/*Keep in mind this only works for the ones defined in the root's scope*/
```



#### EXAMPLE 2: Very Niche Scenario

Instead of hardcoding the second argument for setProperty(), we can even set it equal to the value of another property in CSS by using getProperty()

```js
const list= document.querySelector('#list1')
const paras= document.querySelector('p') 

/*Use the list's style object to get the property value of the "color" property*/
const listStyles= getComputedStyle(list)
const listColor= listStyles.getPropertyValue('color')

/*Set the color property of something else equal to list's color*/
paras.style.setProperty('color',listColor)
```

Before JS: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210412202224161.png" alt="image-20210412202224161" style="zoom:80%;" /> After JS: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210412221046921.png" alt="image-20210412221046921" style="zoom:80%;" />

TLDR: We colored the paragraph at the bottom the same color as the list, by getting and setting property values

Alternatively, we could have just gotten the property value of the root's custom variable, and colored the paragraph with that

```js
const root= document.querySelector(':root')
const paras= document.querySelector('p') 

const rootStyles= getComputedStyle(root)
const rootColor= rootStyles.getPropertyValue('--textColor')

paras.style.setProperty('color',rootColor)
```

https://codepen.io/NFuego24-7/pen/wvgmgPw

### Extract or Change CSS Attributes

METHODS WE'LL NEED:

| method                                         | effect on the element it's applied to                    |
| ---------------------------------------------- | -------------------------------------------------------- |
| `htmlEl.getAttribute('id')`                    | returns the value of the attribute specified in brackets |
| `htmlEl.setAttribute('attrib','desiredValue')` | sets an element attribute to your desired value          |

#### EXAMPLE: Change Image using "src" Attribute

We're going to use the exact same code for all subsections

STARTER HTML: (we have no CSS)

```html
<h2 data-version-number='3.0'>We so fly</h2>
<img href="#" src="https://i.postimg.cc/MTrfMx0t/94.jpg" width="500" height="600"> 
```

Before CSS: ![image-20210412225724711](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210412225724711.png) After CSS: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210412225140273.png" alt="image-20210412225140273"  />

SOLUTION:

```js
const pic= document.querySelector('img')
//————————————————【Get attributes in 2 ways】—————————————————————
let picSRC1= pic.getAttribute('src')
let picSRC2= pic.src // whichever one of these you use D.N matter in this example
console.log(picSRC1);
console.log(picSRC2);
//————————————————【Set attribute】—————————————————————
pic.setAttribute('src','https://i.postimg.cc/MTrfMx0t/94.jpg') // new image link
```

Console logs: ![image-20210412230457629](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210412230457629.png)

Directly accessing attributes using dot notation (picSRC2) has certain drawbacks. 

- If the attribute is uncommon on the type of element its used on in HTML, JS won't recognize it when you try to read it. 
- This does not mean we should always use setAttribute though

#### The Diff b/t Dot Notation & getAttribute()

Absolute vs Relative outputs is what separates our 2 methods of the day

```js
// all previous code is the same
console.log(pic.href);					//returns undefined
console.log(pic.getAttribute('href'));	// returns exactly what we typed in HTML
```

![image-20210412232119886](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210412232119886.png)

### Data Attributes 

These are special kinds of attributes that start with `data-` 

We use data attributes quite a lot when we work with the UI
Especially when we need to store data in user interface (basically the HTML code)

```HTML
<h2 data-version-number='3.0'>We so fly</h2>    
<h2 data-versionWAN='4.0'>Radio Rebel's underrated</h2>
<script> 
	let header2= document.querySelector('h2')
	console.log(header2.dataset.versionNumber); //OUTPUT:3.0

	let header22= document.querySelector('h2:nth-child(2)') //grab the second h2
	console.log(header22.dataset.versionWAN);  //OUTPUT: undefined (JS d.n recognize)
	console.log(header22.dataset.versionwan); //OUTPUT: 4.0
</script>
```

All the data attributes can be found within the `dataset`

- Just make sure to only capitalize words that come after the data attribute's second dash- assuming it has another dash in the first place
- Look at the second last log. We namedropped the data attribute exactly as it was presented, yet JS still did not see it until we decapitalized the attribute name

CONVERT THE DATASET OUTPUT TO A NUMBER:
Fairly sure that datasets convert whatever you stored into a string (i forgot)



# DOM: Create/Place/Delete Elements

- We can create elements within our JS files then place them anywhere in the DOM. 
- Once we place them in, it'll be as if they were hardcoded in our index.html file. 
- This lets us dynamically introduce content that our actual HTML document never had

### createElement Method  (S1)

You can use JS to create entirely new HTML elements that work as if they were hardcoded in your HTML file initially. This can be used to dynamically add content to your webpage

PRACTICAL EXAMPLE: 
On Udemy, wishlisting a course will add it to the existing ones you have there
You can interact with this new element- you can click it to go to a new webpage

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210325065442656.png" alt="image-20210325065442656" style="zoom:50%;" />

You can create new DOM elements in multiple ways:

#### Example 1: 

These methods are used in conjunction to create brand new elements from your JS file.
To demonstrate, create the following div element:

EXAMPLE 1: Create the following element

```html
<div class="greet msg" id="hi" title="welcome">Hello World</div>
```

SOLN:

```JS
let newDiv = document.createElement("div");		//creates an element
newDiv.className = "greet msg"; 				//sets class name(s)
newDiv.id = "hi"; 								// sets ID
newDiv.setAttribute("title", "welcome"); 		//sets a title attribute

// Creating your element's text...

let newDivText = document.createTextNode("Hello World"); // create text for element
newDiv.appendChild(newDivText); 		// assign the text to your element
console.log(newDiv); 
```

![image-20210327164755781](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210327164755781.png)

- The text doesn't show on Firefox's log for some reason, but it does acknowledge its existence when you check the textContent property of your newly created element
- Preview shown in the picture above is from edge

List of attributes: [HTML Attributes (w3schools.com)](https://www.w3schools.com/tags/ref_attributes.asp)

#### EXAMPLE 2: Nested Tags

Create the following:

```html
<li>
	<span class="name">The wise man's fear</span>
    <span class="delete">delete</span>
</li>
```

- The appendChild() method can assign tags to be nested inside other elements too. 
  It's not just used for assigning text
- We're going to use a different method to add in the words for your elements
  Appending text nodes is one way, but textContent is also an option

SOLN:

```JS
//# Creating 3 new sets of tags: li, and 2 pairs of span
const listItem = document.createElement("li");
const span1 = document.createElement("span");
const span2 = document.createElement("span");

//# Add the spans' words
span1.textContent="The wise man's fear"
span2.textContent="Delete"

//# Add the spans' class names
span1.className = "name";
span2.className = "delete";

//# Append the nested elements to their parents
// by assigning span1 first, it goes to the top of the list
listItem.appendChild(span1);
listItem.appendChild(span2);

console.log(listItem);
```

![image-20210328082118716](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210328082118716.png)

#### Adding CSS Styles to New Elements

```js
newDiv.style.fontSize= "30px" //changing a CSS style of our new element
```





### Inserting Elements into the DOM (S2)

When you create an element in JS, it does not get placed in your HTML file by default. You must place it there yourself using a specific method

- You have a handful of methods for new element insertion- choose based on where you want it to be placed (relative to the element you use your method on)
- If you create an element in JS, it can only exist at one place at the same time

#### insertAdjacentElement()

```js
referenceEl.insertAdjacentElement("position-str", elementToInsert)
```

- `"beforebegin"` - just before the target element
- `"afterend"` - just after the target element
- `"afterbegin"` - at the top of the target element's children tree
- `"beforeend"` - at the bottom of the target element's children tree

#### Demonstrations

Starter Code: ![image-20210328121210319](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210328121210319.png)

```html
<div id="container">
	<article>THE UNORDERED LIST BEGINS HERE</article>
	<ul ID="listContainer">
		<li>List Item 1</li>
		<li>List Item 2</li>
		<li>List Item 3</li>
	</ul>
</div>
<script>
    // Imported 2 elements from our hardcoded HTML file to use as references
    const container= document.getElementById("container") 
	const listContainer= document.getElementById("listContainer");
    
    //Created a simple new element to insert
    const newHeader= document.createElement("h2"); 
	newHeader.textContent= "Someone INSERT me!"
</script>
```

JS Code:

```js
listContainer.insertAdjacentElement("beforebegin",newHeader) //before UL list
listContainer.insertAdjacentElement("afterend",newHeader) // after UL list
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210328121345334.png" alt="image-20210328121345334" style="zoom:90%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210328121430449.png" alt="image-20210328121430449" style="zoom:90%;" />



```JS
listContainer.insertAdjacentElement("afterbegin", newHeader); // start of child list
listContainer.insertAdjacentElement("beforeend", newHeader); // end of child list
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210328124337836.png" alt="image-20210328124337836" style="zoom:90%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210328124432969.png" alt="image-20210328124432969" style="zoom:90%;" />



### Alternative Ways to Insert DOM Elements

I've already gone over the simplest ways to place elements in the previous lesson, but you may encounter others when looking over code. They perform similar or congruent tasks, and can be used interchangeably

- If you want to read more about these, read this: 
  [How to Add an Element to the DOM? (areknawo.com)](https://areknawo.com/how-to-add-an-element-to-dom/)
- Don't focus on these too much- this type of work is now done using JS frameworks

#### Alternate Element Inserts: 

(We will refer to the element we use these methods on as the REFERENCE)

|                      | Effect                                                       |
| -------------------- | ------------------------------------------------------------ |
| `.appendChild(el)`   | places a new element at the end of the reference's child list |
| `.prepend(el)`       | places new element at the START of the reference's child list. Can accept multiple arguments |
| `.append(el)`        | same as appendChild() but can accept multiple arguments      |
|                      |                                                              |
| `.insertBefore(a,b)` | inserts element right before the reference<br />a is the element you're inserting, b is the reference |
| insert after         | Does not exist, but you can achieve this effect using a premade function |

ADDITIONAL INFO:

- prepend.() and append() only have 92% support ATM, but it has simple polyfills 
- I recommend using insertAdjacentElement instead- it accomplishes the same thing plus it's universally supported


```js
// Insert After Function
const insertAfter = (parent, child, reference) => {
  parent.insertBefore(child, reference.nextElementSibling);
};

document.body.append(el);
insertAfter(document.body, el2, el);
```



### Template Literal Method to Create/Place Elements

Instead of using a slew of methods to create an element, you have the option to just type out HTML syntax within JS...as a string. 

- The browser can convert the string into actual HTML in a location you specify
- You can use innerHTML form this, but it has major drawbacks:

![image-20210328155834776](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210328155834776.png)

#### insertAdjacentHTML()

This is your main choice for turning typed out strings in JS into HTML elements
You can even combine these with functions along with ${placeholders}

```JS
reference.insertAdjacentHTML("position-str","template-literal")
```

- `"beforebegin"` - just before the target element
- `"afterend"` - just after the target element
- `"afterbegin"` - at the top of the target element's children tree
- `"beforeend"` - at the bottom of the target element's children tree

EXAMPLE:

```html
<ul id="listContainer">
	<li>List Item 1</li>
	<li>List Item 2</li>
	<li>List Item 3</li>
</ul>
//—————————————————————【starter code above】——————————————————————————
<script>
	const unorderedList = document.querySelector("#listContainer");
	const fourthLI= `<li class="str">List item 4- created via temp literal</li>`
	unorderedList.insertAdjacentHTML("afterbegin",fourthLI)
</script>
```

![image-20210328153552438](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210328153552438.png)	![image-20210328175404345](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210328175404345.png)

#### Cloning Created Elements

insertAdjacentHTML() lets us place a newly generated HTML element in multiple locations at the same time

```js
const unorderedList = document.querySelector("#listContainer");
const fourthLI= `<li class="str">List item 4- created via temp literal</li>`
unorderedList.insertAdjacentHTML("afterbegin",fourthLI) //top of child list
unorderedList.insertAdjacentHTML("beforeend",fourthLI) // end of child list
```

![image-20210412134359556](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210412134359556.png)

- Newly created elements in JS can only exist in one place a time, if you're placing it with an append method or one of the other alternates

- Fortunately, the cloneNode() method exists to let us position new elements in 2+ locations at the same time. 

However, this can be done naturally by using insertAdjacentHTML anyway, so I'm not going to demonstrate it



### Replace or Erase Existing Elements

#### Replace

```js
oldEl.parentNode.replaceChild(newEl, oldEl);	//SYNTAX
```

EXAMPLE: Replace the final list item with a new one you create

```html
<ul id="listContainer">
	<li>List Item 1</li>
	<li>List Item 2</li>
	<li>List Item 3</li>
</ul>
<script>
    // Select the last li element
	const lastLI = document.querySelector("#listContainer :last-child");
    // Create a new li element
	const newLI= document.createElement("li");
	newLI.textContent="Replacement"
    
    //Replace the old one with the new
	lastLI.parentNode.replaceChild(newLI,lastLI)
</script>
```

![image-20210328153552438](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210328153552438.png)	![image-20210328153607621](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210328153607621.png)

#### Delete All Children in a Container

```js
importedEl.innerHTML=""
```

- We can actually use template literals with innerHTML to create new DOM elements
  Not recommended over insertAdjacentHTML though
- One twist on this is to set a container's innerHTML to nothing (an empty string)
  This clears any children it originally has

#### Delete a Specific Element

For this, we use the remove() method which is fairly new and has 96% support (no IE)

```html
<ul id="listContainer"> 
    <li>List Item 1</li> 	<li>List Item 2</li> 	<li>List Item 3</li>
</ul>
<script>
	let thirdLI= document.querySelector('li:nth-child(3)')
	thirdLI.remove()
</script>
```

![image-20210328153552438](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210328153552438.png) ![image-20210412141846678](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210412141846678.png)

OLD ALTERNATIVE (is wordier)

A lot of people don't know about this feature yet, and use removeChild() instead
The support is less than 0.1% larger- but IE supports it...so

```html
<ul id="listContainer"> 
    <li>List Item 1</li> 	<li>List Item 2</li> 	<li>List Item 3</li>
</ul>
<script>
	let thirdLI= document.querySelector('li:nth-child(3)')
	thirdLI.parentElement.removeChild(thirdLI) // old method
</script>
```

### Generate HTML w/ Template Tags

Instead of generating DOM content with strings each time, you can actually pre-make container blocks in your HTML file

1. Surround a container block you plan on reusing multiple times with template blocks
   Give each one a unique ID- makes it easier to reference them

![image-20210704230131494](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210704230131494.png)

2. Find a location where you want to put this template

![image-20210704230231159](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210704230231159.png)

3. Use a variation of the following code snippet:

```js
var temp = document.querySelector("#statsCountTemplate");
var clon = temp.content.cloneNode(true);
var location= document.querySelector("aside")
location.appendChild(clon);
```

#### Compared to Template Literal Method

ADVANTAGES:

- Any container wrapped in template tags will not be visible or take up any space before you render it, so you can place them where they will be rendered later
- It lets you see where DOM content will eventually be directly in your HTML file
- Takes up less space in your JS file, compared to generating brand new HTML methods

DISADVANTAGES:

- You can't add dynamic data to template tag content, like you can with template literals with `${}`

# DOM: Element Parents, Children, and Siblings

When performing DOM manipulation, you'll often need to target the siblings, parents, or children of the elements you import to JS. 

You won't always target them directly with classes or ID's when selecting your tags to bring over to JS- that could bloat our code significantly

STARTER CODE FOR THIS ENTIRE CHAPTER:

```html
<h2 class="title">Items</h2>
<ul id="items" class="list-group">
    <li class="list-group-item">Item 1</li>
    <li class="list-group-item">Item 2</li>
    <li class="list-group-item">Item 3</li>
    <li class="list-group-item">Item 4</li>
</ul>
```

### QUICK REFERENCE

You have the option to save the elements these methods capture into a variable
Or you can put them to use directly by chaining more methods onto the end of these

| `htmlEl.whatever`         | Captures [~~] of the HTML element you use the method on      |
| ------------------------- | ------------------------------------------------------------ |
| `.parentElement`          | the parent element                                           |
|                           |                                                              |
| `.children`               | all the direct child elements <br />Creates an HTML collection that looks like an array. Suggest converting to an actual array with `Array.from()` |
| `.firstElementChild`      | the first child                                              |
| `.lastElementChild`       | the last child                                               |
|                           |                                                              |
| `.nextElementSibling`     | the sibling that comes directly after                        |
| `.previousElementSibling` | the sibling that came right before                           |
|                           |                                                              |

FODDER: Don't bother using these methods- they each have counterparts in this table that work better

.parentNode (may be the only 1 that's maybe worth using over .parentElement)
.firstChild - useful counterpart is .firstElementChild
.lastChild - useful counterpart is .lastElementChild
.nextSibling - useful counterpart is .nextElementSibling
.previousSibling - useful counterpart is .previousElementSibling

#### .closest()

The `closest()` method searches up the DOM tree for the closest elder element which matches a specified CSS selector. 

- It starts at the element itself, then tests the parent, grandparent, and so on until a match is found. 
- If a match is not found, this method returns *null*.

```js
let vari= htmlEl.closest('CSS_selector') // returns a matching element or null

// Guard clause:
if (!vari) return; // ends E-L early if closest() returns "null"
```

###### Sample Problem Description

[Closest() (codepen.io)](https://codepen.io/NFuego24-7/pen/MWJzYWL?editors=1010)

![image-20210421054709910](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210421054709910.png)

These button elements have spans inside them. If we want to apply E-Ls to them via delegation, we're going to run into a small problem

```JS
const tabsContainer = document.querySelector('.operations__tab-container');
tabsContainer.addEventListener('click', e => {
  const clicked = e.target;
  console.log(clicked);
});
```

![image-20210421055443741](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210421055443741.png)

- Clicking on the buttons works well- they return the button elements. 
  However, clicking on the inline span elements within the buttons, does not
- Ideally, we want to click anywhere on the button (even the span), and have it return the button element

###### Solution 

- We have to use closest(), because it will select the element we're currently on when we click the button, AND it will search up for the nearest match for the CSS selector we feed it
- closest() searches for the the nearest button element in this instance

```JS
tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('button'); // find nearest button element
  console.log(clicked);
});
```

![image-20210421060226962](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210421060226962.png)



### Parent of an Element

#### .parentNode and .parentElement  

These 2 methods are nearly identical, and can often be used interchangeably. 
Their purpose is to target your imported HTML element's parents

```js
let listItem1 = document.querySelector(".list-group-item"); 
listItem1.parentNode.style.flexDirection = "row"; // switched parent flex direc
listItem1.parentElement.style.border = "5px dashed black"; //created border 
```

We brought the `li` element into JS, yet we managed to target its parent element `ul` for all our changes

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210326184928187.png" alt="image-20210326184928187" style="zoom:80%;" />   ![image-20210326184857029](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210326184857029.png)

### Children of an Element

#### .children 

```js
let unorderedList= document.querySelector("#items"); // bring in the UL element
let listItems= unorderedList.children // this is an HTMLcollection, not an array
console.log(listItems);
listItems[2].color = "green" //FAILS, because listItems is not really an array
```

![image-20210326195936437](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210326195936437.png)

- This method creates an HTML collection, containing the direct children of the element we imported. (in this case, ul is the parent while 4 li's are the children)
- If there are elements nested more than 1 level deeper, `.children` does not capture those. Direct-children only, no grandchildren or further descendants

You CAN access individual entries in our node as if it were an array 

- However, you cannot loop over it with a for loop normally- you must first overcome the fact that this is technically not a real array

Method 1: 
Convert the collection to an array using `Array.from()`
Iterate over your newly created array with `forEach or map` methods

```js
let unorderedList = document.querySelector("#items"); // bring in the UL element
let listItems = Array.from(unorderedList.children); //NOW this is an array

listItems.map((li) => {
  li.style.color = "blue";
});
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210326184928187.png" alt="image-20210326184928187" style="zoom:80%;" /> 	Now the text is blue: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210326200911563.png" alt="image-20210326200911563" style="zoom:80%;" />

METHOD 2: Use a for loop and redefine the node inside

```JS
let unorderedList = document.querySelector("#items"); // bring in the UL element
let listItems = unorderedList.children; // HTMLcollection

for (let i = 0; i < listItems.length; i++) {
  let tableChild = listItems[i]; // i guess this converts it? idk but it works 
  tableChild.style.color="BLUE"
}
```



#### .firstElementChild & .lastElementChild

- firstElementChild fetches us the first element that's the child of the HTML element we imported to JS
- lastElementChild fetches us the last element that's the child of the HTML element we imported to JS

```JS
let unorderedList = document.querySelector("#items"); // bring in the UL element
let firstBornLI = unorderedList.firstElementChild;
let lastBornLI= unorderedList.lastElementChild
firstBornLI.style.backgroundColor='dodgerBlue'
lastBornLI.style.backgroundColor="#909090"
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210327060020835.png" alt="image-20210327060020835" style="zoom:80%;" />

### Siblings

#### .nextElementSibling and .previousElementSibling

As their names suggest, these methods target the elements that come right before or after the HTML tag we import

```js
let secondLI = document.querySelector(".list-group-item:nth-child(2)");
secondLI.nextElementSibling.style.backgroundColor="#E71989"
secondLI.previousElementSibling.style.backgroundColor="#FFE042"
```

![image-20210327061631150](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210327061631150.png)



### Useless Methods

#### .childNodes 

Is the useless version of the `children` method

- Works the same as children, but adds in extra text nodes every time HTML elements are separated by a line jump (is the reason why we hardly ever use it)
- These extra text nodes don't show up when the HTML elements kiss, but either way, we have better options to select our children

```js
let unorderedList = document.querySelector("#items"); // bring in the UL element
let listItems = unorderedList.childNodes; // array-like node
console.log(listItems);
```

![image-20210327053055468](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210327053055468.png)

#### List of Remaining Useless Methods

- For the record, just know that all of these are considered worthless because of the HTML line jump issue described above. 
- They offer us text nodes we don't want to consider as family members to our elements
  Each of these have their own counterpart that does not consider line jumps

.firstChild - useful counterpart is .firstElementChild
.lastChild - useful counterpart is .lastElementChild
.nextSibling - useful counterpart is .nextElementSibling
.previousSibling - useful counterpart is .previousElementSibling



# DOM: Events

### Add/Remove Classes with Event Listeners

Event listeners have the power to cause something once the specified condition is met. Oftentimes, we add/remove/toggle CSS classes to make a visual change.

- Typically, devs will give styles to a class in CSS, but they won't give any elements that class in the HTML doc- that's hardcoding.
- Instead, they'll give the class to an element in JS, only when a certain condition is met (this is why event listeners are so crucial)

One common example would be a login page. 

- Your site's content could be given a class that's coded to be transparent in CSS. 
- Once you give your email and password, that class can be taken away- letting you see what used to be invisible

#### Structure of Event Listeners

- The target element is the element that changes when you click something
  It's typically an HTML import - though you can also directly target elements with their ID's

- If you're dealing with multiple classes, use 2 sets of quotation marks and separate them with a comma `('bg','bd')`
- Event listeners typically use arrow functions due to how compact they are
  The official term for these functions are EVENT HANDLERS

![image-20210204090413044](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210204090413044.png)

We can do more than just add classes in the callback function. 
You can save the event listener to a variable, and it'll still work as if it wasn't

#### Explanation of the Above 

Know that my terminology differs fr/ official sources

instigation element: `add`

- Click the element with id="add"... something happens to itself and/or another element
- Can also point to the instigation element using classes (shown in the "Add a singular class" example found later in this lesson)

target element: `$hello`

- $hello is an imported HTML element. This element is going to have the class "bg" added to it when someone clicks the id="add" element
- This is one of the cases where the instigation/target elements are not the same

![image-20210204090808826](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210204090808826.png) ![image-20210204090943726](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210204090943726.png)

![image-20210226103722178](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210226103722178.png)

When we press the add button (which has id="plus"), the classes are added to the hello world box, not the add button itself

#### Different Kinds of Event Listeners

Different action keywords allow us to....

1) Add a singular class		 2) Add multiple classes

3) Remove a singular class 	 4) Remove multiple classes

5) Toggle a class on/off		6) Check if class/classes are active

HTML CODE:

```html
  <div class="controls"> 
    <!--% Class Controller. 
Performs many operations (see their ID's)-->
      <button id="plus">Add</button>
      <button id="ditch">Remove</button>
      <button id="flip">Toggle</button>
      <button id="checkIt">Check</button>
      <button id="plusAll">Add All</button>
      <button id="clear">Remove All</button>
    </div>

    <div class="hello">
      Hello World!
    </div>
```

CSS CODE:

```CSS
.bg { background-color: gray; color: white;}
.bd { border: 5px solid pink;}

/* bg class makes the box gray with white text*/
/* bd class adds a black border*/
/* Some code was excluded above, but it was purely aesthetic*/
```

JS CODE:

```js
const $hello= document.querySelector('.hello');
```

//—————————————————————【】——————————————————————————

If you're adding/removing/toggling classes, the dev tools will be updating in real time-telling you what classes or styles are active

ADD A SINGULAR CLASS:

```JS
plus.addEventListener('click', ()=>{     //% targets el. with id="add"
  $hello.classList.add('bg'); 
  //~"bg" class added to .hello element
})
```

ADD MULTIPLE CLASSES:

```JS
plusAll.addEventListener('click', ()=>{    //% targets el. with id="addALL" 
  $hello.classList.add('bg', 'bd'); 
  //~ Adds both the bg and bd classes to .hello element
})
```

REMOVE A SINGULAR CLASS:

```js
ditch.addEventListener('click', ()=>{     //% targets el with id="remove"
  $hello.classList.remove('bg'); 
  //~ "bg" class removed from .hello element
})
```

REMOVE MULTIPLE CLASSES:

```js
clear.addEventListener('click', ()=>{    //% targets el with id="removeAll"
  $hello.classList.remove('bg', 'bd'); 
  //~ Removes both the bg and bd classes to .hello element
})
```

TOGGLE A CLASS ON/OFF: (does not work with multiple)

```js
flip.addEventListener('click', ()=>{    //% targets el. with id="flip"
  $hello.classList.toggle('bg'); 
  //~ "bg" class toggled on/off on $hello element
})
```

CHECK IF CLASS/CLASSES ARE ACTIVE

```js
checkIt.addEventListener('click', ()=>{     //% CHECK FOR CLASS
  let hasOrNot = $hello.classList.contains('bg','bd');  
  //~ Checks if el belongs to the "bg" OR 'bd' class. returns true if in either 
  // We can perform actions based on if an element has a certain class now...
})
```



#### Variations to this Procedure

Instead of using the element with the id="add", import an HTML element using class
Then replace the instigation element with the JS variable for the import

```html
<button id="plus" class="backup">Add</button>
```

```js
const $howdy= document.querySelector('.backup');
$howdy.addEventListener('click', ()=>{     //% ADD CLASS
  $hello.classList.add('bg'); 
})
```

^^ Works just as well as the ID method

We can even skip the process of storing our element imports into variables. 
Target elements for manipulation all in 1 line:

```js
document.querySelector('.backup').addEventListener('click', ()=>{     //% ADD CLASS
  $hello.classList.add('bg'); 
})
```

#### Full Codepen Example

See here: Full Codepen Example: [Event Listeners (codepen.io)](https://codepen.io/NFuego24-7/pen/WNoQWwM)

class "bg" gives its target a gray background and white text
class "bd" gives its target a pink border 

Lesson this series is based on: 
[(1) How to Add and Remove Class in Javascript - YouTube](https://www.youtube.com/watch?v=IKzlUvYSZO4)



### The Event Object

When we create an event listener, our callback function lets us access the event object
This object has a large number of properties

Take a look at the general structure of an event handler defined within the event listener method:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210204090413044.png" alt="image-20210204090413044" style="zoom: 33%;" />

- The arrow function has no argument in this version- but event handlers do have 1 parameter hardcoded into them- the event object

- This is just like how forEach looks have index values and array entries hardcoded into them

```js
let body = document.querySelector("body");

function buttonClick(event) { console.log(event); }
let a= body.addEventListener("click", buttonClick);
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210329132415931.png" alt="image-20210329132415931" style="zoom: 80%;" />

#### Relevant Properties

These adhere to the event listener we created above- just imagine you swapped console.log() statements

```js
eventObj.type; 	// gives the event type

eventObj.clientX; // gives the X position of where you clicked (rel2window)
eventObj.clientY; // gives the Y position of where you clicked (rel2window)
eventObj.offsetX; // gives the X position of where you clicked (rel2element)
eventObj.offsetY; // gives the Y position of where you clicked (rel2element)
```

These next few methods return true or false, depending on if you clicked the event trigger with another key held down at the same time

```js
eventObj.shiftKey; // True if you shift-clicked, false if you didn't
eventObj.altKey; 
eventObj.ctrlKey;
```

#### Event target Properties

These are important to understand when writing event handlers for multiple elements
Just assume the event listener type is 'click' for all these explanations

```js
eventObj.target; 		// the element you clicked
this; 					// same as .target
eventObj.target.id; 	// gives the ID of the element you clicked on

eventObj.currentTarget; 
// gives the element whose eventListener triggered the event
// Does not mean that this element is what was clicked on (or whatever your trigger is)
// comes into play when bubbling occurs due to HTML element nesting

eventObj.target.className; 		// gives a single string with all classnames in it
eventObj.target.classList; 		// gives an ""array"" w/ each class as an entry
```

To illustrate the difference between `eventObj.target` and `eventObj.currentTarget` , use this demo: https://codepen.io/NFuego24-7/pen/wvgYGGv?editors=1010



### Mouse Events

There are more event triggers we can use aside from a traditional click on an element

#### Click-Oriented Events:

```
"dblclick"		requires you to double click
"mousedown"	 	trigger occurs as soon as you left click (does not wait for a release)
"mouseup"  		similar to a click event
```

Difference between "click" and "mouseup":

- With a mouseup event, you can click somewhere else on the screen, hold down the click button, and move the pointer to your mouseup element, and then release 
- A click event requires the mousedown and mouseup event to happen on that element

#### Hover-Oriented Events:

Triggers event when...

```
"mousemove"		you move your mouse through the element field

"mouseenter"	your mouse enters the element area (doesn't bubble)
"mouseover"		same as above, but triggers again if you hover over child els inside 

"mouseleave"	triggers event when your mouse leaves the element area
"mouseout"		same as above, but triggers again if you exit child els inside 

See 18:30 of this vid to see the diff: 
https://www.youtube.com/watch?v=wK2cBMcDTss&t=838s
```

TIP FOR EVENT DELEGATION AND BUBBLING: 
Use `mouseover and mouseout`
mouseenter and mouseleave don't work with bubbling

#### Inline HTML Mouse Events (try not to use)

You can apply these directly onto elements in HTML if you want to set up events in JS 
It's an inferior, old school alternative to the addEventListener method



![image-20210419144322132](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210419144322132.png)

EXAMPLES:

```html
<p id="demo" onclick="myFunction()">Click me to change my text color.</p>

<script>
	function myFunction() {
  		alert('You clicked a paragraph element')
	}
</script>
```

- Here, we define an "onclick" event and point the HTML element to the event handler which will be written in JS later
- We can actually define the event handler right inside the HTML tag, but you probably shouldn't ( it's an extremely archaic way of doing things)

```html
<p id="demo" onclick="alert('You clicked a paragraph element')">Click me to change my text color.</p>
```

DISADVANTAGES

- You can't apply multiple event listeners to one element
  Using 2 on-events on a single element will cause the earlier ones to get overwritten
- addEventListener lets us remove an event handler if we don't need it anymore, while on-events do not (see the temporary events lesson)

### Keyboard Events

Keyboard events are another form of event triggering, just like hitting a button

- They are "global events" because they do not happen on one specific element
- The main difference here is that we're pressing a button on our keyboard to trigger something, making this a keyboard event

There are 3 kinds of keyboard events: `key down`   `key press`    `key up`

|             | triggers an event when...                                    |
| ----------- | ------------------------------------------------------------ |
| `key up`    | we lift our finger OFF a key after pressing it first         |
| `key press` | event triggers for this works a bit differently<br />It continuously fires when we keep our finger pressed on a key |
| `key down`  | we tap a key                                                 |

- When using keyboard event listeners, knowing which key has been pressed is important. 
- You'll need to grab they "key" property from the object that's created as soon as you click anything(assuming a keyboard event is active)

Check out this keyboard event we apply to the entire document
The object is much larger than this- but the key property we care about is visible

```js
document.addEventListener('keydown', (eventObj) => console.log(eventObj));
```

We pressed Caps Lock:	![image-20210228151148045](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210228151148045.png)

#### Applying Specific Keyboard Events

Now that we can see the key property we need, we can use it to create conditional statements. We can tell JS to do something only if a specific key is pressed

```js
document.addEventListener("keydown", (eventObj) => {
  if(eventObj.key==="Escape") console.log("We pressed the escape key");
    // be careful. This is case sensitive. escape != Escape
});
```

- We applied this to the entire webpage (because of document.~~)
- "We pressed the escape key" gets logged every time someone presses ESC

#### Checking Official Key Names:

- If you're mapping actions to keyboard keys, you'll need their names- which we can find with a simple custom function 
- They are case sensitive, so you'll need to be exact

```js
document.addEventListener("keydown", (eventObj) => {
  console.log(eventObj.key);
});
```

Pressed some keys: ![image-20210329163448714](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210329163448714.png)

### Input Events

These events deal with input fields

```
"focus"		fires when you left click inside an input field (selecting it)
"blur"		requires an input field to be selected 1st. Fires when you click out

"cut"		triggers event when you cut content inside the input field
"paste"		triggers event when you paste content in your input field
"input"		fires when you do anything in the input field (copy,cut,paste,type)

"change"	fires when you select an option from a drop down list
```

#### Clearing Input Fields

When you click/select an input field, you give it focus

- If you successfully log in or fail to do so, you should erase the old contents of the input field and remove its focus

- You probably want to place these upcoming actions in an event listener- specifically for the submit button (typically, fields clear after being submitted)

Carefully decide what gets deleted though. 

- If the user types in a correct username but wrong password, it'd be annoying to have to retype everything just because of 1 minor mistake

EXAMPLE:

Assuming we imported the HTML elements representing these input fields earlier, and named them `userField` and `pinField`

```JS
userField.value=""; // clears contents of username field
userField.blur();	// removes focus
pinField.value=""; // clears contents of PIN input field
pinField.blur(); // removes focus
```

![image-20210331132200524](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210331132200524.png)	![image-20210331132107976](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210331132107976.png)



#### Submit Button Event Handlers

This one event type gets its own sub section because it's usually problematic. 
Submit buttons usually have default behaviors that reload pages or send data 

- If you want an event to happen after clicking them, you'll need to prevent that default behaviour with `eventObj.preventDefault();` in your event handler. 
- You'll need to use the built-in event object parameter for your event handler

```js
btnClose.addEventListener('click', (eventObj) => {
  eventObj.preventDefault(); // stops submit btn from reloading page
  // ~~~ Whatever else you want to happen when you hit submit
}
```

#### All form field Inputs are Strings

- Remember, all typed user inputs in a form field are considered strings
  Convert them when comparing them to numbers for example (PIN verification)
- By default, hitting enter inside a form field will trigger a "click" event for the actual submit button

![image-20210331091015679](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210331091015679.png)

#### < Empty string > Bug

Sometimes when you try to use the words/numbers typed inside input fields, JS will say what's written inside your fields is an `<empty string>` or `""` 

See here: [JSFiddle - Code Playground](https://jsfiddle.net/JasonXtuyotech/bus7z458/10/)

SOLN: Move the form field element imports out of the global scope and into the event handler. 

### Temporary Event Listeners

By using the addEventListener method, we can can make it so events are only listened for a limited number of times, or for a limited time period

#### Remove Event based on Trigger Counts or Time

GREEN: 	 Remove event after triggered once
AQUA: 	  Remove event after triggered 3X
PURPLE: 	Remove event after 4 seconds have passed

```html
<div id= "demo"></div>
<div id= "demo2"></div>
<script>
//—————————————————————【GREEN】——————————————————————————
	// Green box only has event active for 1
	let greenEl= document.querySelector('#demo')
    
	let handler= ()=>{
		alert('You clicked me')
  		greenEl.removeEventListener('click', handler)
	}
    
	greenEl.addEventListener('click', handler)
//—————————————————————【AQUA】——————————————————————————
	//Aqua box has event active for 3
	let aquaEl= document.querySelector('#demo2')
	let counter=0
    
	let handler2= ()=>{
		counter++
		alert('You clicked me')
  	if(counter===3) aquaEl.removeEventListener('click', handler2)
	}
    
	aquaEl.addEventListener('click', handler2)
    //—————————————————————【PURPLE】———————————————————————
	let purpleEl= document.querySelector('#demo3')
    
	let handler3= ()=>{ alert('You clicked me') }
	purpleEl.addEventListener('click', handler3)
    
	setTimeout(()=>{
		purpleEl.removeEventListener('click', handler3)
	},4000)
    
</script>
```

![image-20210419161420324](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210419161420324.png)

TEST HERE: https://jsfiddle.net/JasonXtuyotech/oah4857w/46/

In both examples, we define our callback ƒ() externally. 

- Inside them, we use the `removeEventListener` method, with the exact same parameters used in the `addEventListener` method for that element
- To listen for an even more than once, but not infinity times, use a counter variable
  Wrap your `removeEventListener` in an if statement



### Preventing Default Behaviors

As described in the previous lesson, many items on a webpage have default behaviors that me may want to disable with `preventDefault()`

- Submit button reloads the page when pressed

- An anchor link with `href=#` as an attribute brings you to the top of the webpage
- An anchor with `href="#some-id"` would scroll to an element on the page with that specific ID

#### Where to Apply preventDefault()

Typically, the event handlers are defined inside the event listener. 
So, we cancel default behaviors in there

```js
elementName.addEventListener('click', (eventObj) => {
  eventObj.preventDefault(); // stops default behaviors
}
```

If the event handler is a callback function we defined elsewhere, we must cancel the default behavior wherever that callback is located

![image-20210411210921116](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210411210921116.png)

In the above photo, we were applying event listeners to `btnElement`, a node list of buttons captured by `querySelectorAll`

**Note:** Not all events are cancelable. Use the [cancelable](https://www.w3schools.com/jsref/event_cancelable.asp) property to find out if an event is cancelable.



### Trick for Multiple Event Listeners on the same Element

PREREQUISITES

1. Multiple event listeners being applied to the same HTML element
   Event types may vary
2. The same callback function is being used on all of them

#### Demonstration

```js
window.addEventListener('hashchange', callbackA) 
window.addEventListener('load', callbackA) 
```

Refactored:

```js
['hashchange','load'].forEach((eventType)=> window.addEventListener(eventType, callbackA))
```



### Rendering Efficiently

When building more complex applications, you'll be generating and rendering new HTML constantly, whenever someone interacts with your site.

- If you constantly re render the entire DOM after every state change, that will be terrible for performance
- Instead, we need to use a technique called Paint Flash rendering, which is performed automatically in React but can be replicated in vanilla JS

#### How does React Update the DOM?

Virtual DOM: 
A virtual representation of the DOM which only exists in our computer's memory- but is not actively on the webpage

React will make 2 virtual copies of the DOM:

1.  A representation of your DOM's current state
2. A representation of the DOM after a state change 
   Usually means "after you generate new HTML and render it"

NOW WHAT?

- Once those 2 representations are made, React will compare the 2 and only change the current DOM in the specific areas where the 2 differ. 
- This way, you get your requested changes, but only re render things when absolutely necessary- saving performance

#### Replicating React Rendering in JS

React is written in JS, so you can absolutely replicate the process described in the previous subsection- although admittedly it is effortless in React and a pain in vanilla JS

TRY USING THIS:

```JS
  update(data) {
    this._data = data; // update class _data variable
    // Set data variable equal to the info we pass in as an arg 
    // (info came from model=>controller)
    const newMarkup = this._generateMarkup(); // uses _data (can't see how atm)
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    // Capture all els w/in the current HTML container and the one about 2Brendered
    // conv nodelists into arrays with Array.from(), you can loop over them ATST
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // 1) Updates changed TEXT
      // Changes old DOM elements with new DOM elements, 
      // but only those whose text content's changed
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }
      // 2) Updates changed ATTRIBUTES
      // We change the old attributes with the new ones
      if (!newEl.isEqualNode(curEl)) {
        console.log(newEl.attribute); 
        // logs attributes of all EL's that have changed
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
    });
  }
```

#### EXAMPLE: forkify

For an example of what I just described, feel free to check out the forkify git repo I've posted
Look in View.js, update() method

- Be aware that the functions we used are not robust enough for IRL professional work
  You'd probably want o use a framework like React that does it automatically
- Use them to learn or as a tool for your smaller code projects

Explanation: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649619#questions/5589754

# DOM: Event Delegation & Bubbling

### Bubbling/Capturing (S1)

JavaScript events have a capturing phase and a bubbling phase- and they are incredibly important properties to understand

- A common 'click' event is generated at the document root, at the top of the DOM tree. 
  It's not generated at the element the event listener's attached to
- This event travels down a path of different elements, then back upwards
  Along the way, it sets off event listeners of the same type

QUICK REVIEW ON EVENT OBJECT PROPERTIES:
Assuming we're using 'click' event listeners

`eventObj.currentTarget` : the element whose event listener triggered (could be bubbled)
`eventObj.target` : the element we actually clicked on (or whatever trigger)
`this` keyword: the exact same thing as `eventObj.target`

#### Explanations for Bubbling and Capturing

![image-20210419224729646](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210419224729646.png)

In the example on the left, several elements are nested in each other. 
The diagram in the middle is like a family tree with 1 branch, showing the hierarchy
Assume each one of these elements has an <u>event listener with the same type (ex. click)</u>

SCENARIO

- Anchor `<a>` and `<section>` elements both have 'click' event listeners used on them
- Their event handlers can perform the same actions or do completely different things, but the event listener types MUST be the same for bubbling to occur
- Can both involve events based on 'click', or 'mouseenter'...etc

If someone clicks the `<a>` element, the handler for `<a>` and `<section>` will go off
This is because `<a>` is below `<section>` on the chain, and bubbling occurs upward

If someone clicks on the `<section>` element, only its handler goes off (in this ex.)
The event for `<section>` bubbles up the chain, not down
If something higher on the chain than `<section>` had a click event, that would go off

Now, let's say I click the anchor tag, which is nested fairly deeply

- The click event is not generated down where element `<a>` is
  It's generated at the document root, at the top of the DOM tree
- From there, the so-called capturing phase happens, where the event then travels all the way down from the document root to the target element `<a>`

#### Phases Described in Detail

CAPTURING PHASE (represented by downward arrows)

As the event travels down the tree, it will pass through every single parent element of the target element 

TARGET PHASE
Event listeners wait for a certain event to occur on a certain element. Once the condition is met, they run the callback function in this phase

BUBBLING PHASE (represented by upward arrows) 
After reaching the target, the event then actually returns all the way up to the document root, passing all its elders again.

#### Event Delegation Intro

Event delegation is when we use bubbling to our advantage by attaching an event listener to a common parent of all the elements we're interested in. (practical example shown in next lesson)

EXAMPLE 1:

> ![image-20210420064632116](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210420064632116.png)
>
> There's some jQuery here- it adds an event listener to the parent and child element. (other element has none)

Click on the child: ![image-20210420064849720](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210420064849720.png)

Explanation of console logs:
Child event is clicked, so its event handler goes off 
Parent element also has a click event listener, so that handler goes off too 

Click on parent: ![image-20210420065113176](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210420065113176.png)

Explanation of console logs:
Parent's click event handler goes off, but not the child's

Click on other: ![image-20210420065226980](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210420065226980.png)

Other element never had an event listener applied to it directly. 
Since it's inside the parent element anyway, its as if you clicked that instead

EXAMPLE 2: https://codepen.io/NFuego24-7/pen/wvgYGGv

I created my own demonstration for the above phenomenon, and included console logs of `eventObj.target` and `eventObj.currentTarget` , so you can adequately understand the difference

#### Practical Demonstration

DEMO: https://jsfiddle.net/JasonXtuyotech/4fpaw8Lt/2/

![image-20210419183345951](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210419183345951.png)

In this navbar, we have `<a>` nested in `<li>` nested in `<ul>` 

- We have an event listener applied to each groups of these elements, which generates a random color for their background
- It's easy to see which elements have their events triggered, because their appearance will look drastically different than their original states
- The console will also log which event handlers go off

![image-20210419181433418](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210419181433418.png)

JS CODE:

```js
let a_tag = document.querySelector(".nav__link");
let li_tag = document.querySelector(".nav__item");
let ul_tag = document.querySelector(".nav__links");
function getRandomColor() { generates random color **}

a_tag.addEventListener("click", () => {
  a_tag.style.backgroundColor = getRandomColor();
  console.log("anchor!");
  // eventObj.stopPropagation() 
  // UNCOMMENT TO PREVENT BUBBLING
});

li_tag.addEventListener("click", () => {
  li_tag.style.backgroundColor = getRandomColor();
  console.log("list item!");
});

ul_tag.addEventListener("click", () => {
  ul_tag.style.backgroundColor = getRandomColor();
  console.log("unordered list item!");
});
```

#### Explanations

TEST 1: Click on "Features"
When we clicked on the element nested deepest, its elders got their colors changed

![image-20210419183749463](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210419183749463.png) ![image-20210419183758810](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210419183758810.png)

TEST 2: Click on the space between nav links
We we clicked on the element at the top of the chain, only it got changed

![image-20210419183850054](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210419183850054.png) ![image-20210419183910374](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210419183910374.png)

TEST 3: Prevent bubbling with `eventObj.stopPropagation()` then click "Features" again
Now, when we click an anchor tag, only its color gets changed

- The location of `.stopPropagation()` can be seen in our JS code snippet 
  (is commented out for all tests except for this one)
- This is useful in complex scenarios where you have more than one event handler for the same events
- However, stopping the propagation of events is apparently not a good idea normally

REMEMBER:

The `eventObj.target` is the same across all 3 of our handlers- due to bubbling passing the same event across multiple elements

THIS TEST COULD'VE BEEN PERFORMED BETTER:

For the record, it's pretty tough being able to click on `li` but not `a` at the same time, just because of my CSS. 1 background color has been overshadowed by another, but the point behind the lesson still stands

Better execution fr/ tutorial: ![image-20210419184554915](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210419184554915.png)

#### Capturing

We hardly ever have a practical use for capturing over bubbling these days. 
It only remains in JS for legacy reasons. 

- Still, capturing can be activated by setting a third argument in your event listener to the Boolean "true"
- This causes the inverse of typical bubbling behaviour. Event listeners trigger things on the way down instead of up

```js
htmlEl.addEventListener('click',()=>{whatever}, true)
```

By default, the third argument for an event listener is set to false
Only set it to true when you want to use capturing (hardly ever)



### Writing Handlers for Multiple Events (S2)

So far, you've stuck to defining event handlers within the listeners they're meant for. If several listeners share the same callback however, you can't hardcode certain values

#### Important Event Object Properties

`eventObj.currentTarget` : the element whose event listener triggered (could be bubbled)
`eventObj.target` : the element we actually clicked on (or whatever trigger)
`this` keyword: the exact same thing as `eventObj.target`

EXAMPLE:

```html
<button id="uno" style="width: 50px">1</button>
<button id="dos" style="width: 50px">2</button>
<button id="tre" style="width: 50px">3</button>
<script> 
	let handler= function(eventObj){
		alert(eventObj.currentTarget.innerText)
  		console.log(eventObj.target.innerText);
	}
	uno.addEventListener('click',handler)
	dos.addEventListener('click',handler)
	tre.addEventListener('click',handler)
</script>
```

OUTPUT: Press "1" button, get an alert and console log containing "1"

In this example, we have no nested elements in HTML, so the choice we make really doesn't matter

TEST IT OUT: https://jsfiddle.net/JasonXtuyotech/kc70p6bn/9/

The event object properties described earlier can help cut down your code

#### Problem Description:

![image-20210420005132988](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210420005132988.png)

Take a look at this navbar. We want each click on a nav link to take us to that section of the page, with smooth scrolling

![image-20210420005423283](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210420005423283.png)

#### Solutions 1-2 in Detail

SOLUTION 1: Define each event handler inside the listener

```js
// HTML elements imported earlier***
featuresLink.addEventListener('click', (e) => {
  e.preventDefault()
  document.getElementById('section--1').scrollIntoView({ behavior: 'smooth' });
});
operationsLink.addEventListener('click', (e) => {
  e.preventDefault()
  document.getElementById('section--2').scrollIntoView({ behavior: 'smooth' });
});
testimonialsLink.addEventListener('click', (e) => {
  e.preventDefault()
  document.getElementById('section--3').scrollIntoView({ behavior: 'smooth' });
});
```

SOLUTION 2: Recycle a handler that can be used on all nav links

```js
let handler= function(e){
  e.preventDefault()
  let destinationID= e.target.getAttribute("href") // equals #id-name
  // (changes per element. Each event listener is applied to a new one)
  console.log(destinationID);
  document.querySelector(destinationID).scrollIntoView({ behavior: 'smooth' });
}
featuresLink.addEventListener('click',handler)
operationsLink.addEventListener('click',handler)
testimonialsLink.addEventListener('click',handler)
```

SOLLUTION 2.5: Use forEach to apply the handler function (will only describe)

- We could even apply event listeners to an array of anchor links captured with querySelectorAll if we wanted. 
- It would stop us from applying the handler function 3 times individually. 
  We'd apply it 3 times in 1 go instead
- Though this is easier to read, you'd still be applying this same callback thrice. 
  A more efficient method would be to use event delegation (next lesson)

SOLUTION 3: Event Delegation



### Event Delegation (S3) - Fix the span in Button Issue

#### Simple Example

Event delegation is when we use bubbling to our advantage by attaching an event listener to a common parent of all the elements we're interested in

Take a navbar, and make clicking the links return the `<li>` element they're nested in
You are not allowed to attach event listeners to all anchors, use bubbling/delegation

PERSONAL TUT: https://drive.google.com/file/d/1eqp3l_u6l5abuzNf3UDqXEpSw_Jda0PR/view
CODE: [Event Delegation (codepen.io)](https://codepen.io/NFuego24-7/pen/MWJzeOG)

```html
<ul class="nav__links">
  <li class="nav__item">
    <a class="nav__link" href="#section--1">Features</a>
  </li>
  <li class="nav__item">
    <a class="nav__link" href="#section--2">Operations</a>
  </li>
  <li class="nav__item">
    <a class="nav__link" href="#section--3">Testimonials</a>
  </li>
  <li class="nav__item">
    <a class="nav__link nav__link--btn btn--show-modal" href="#">Open account</a>
  </li>
</ul>
```

JS:

```JS
console.clear()
const navContainer= document.querySelector(".nav__links")

navContainer.addEventListener('click', (e) => {
  let clicked= e.target.closest("li") // returns li nested upwards or in place
  if(!clicked) return // guard clause in case there are no li elders around
  console.log(clicked);
})
```

Remember that closest looks up the DOM, it doesn't just find the nearest element that happens to be `<li>` (see the lesson)

We now click on the general area where these elements are. If we hit `<li>` or `<a>`, we'll get the li element returned to us. If we hit the `<ul>` and nothing else, nothing will happen. 

#### SOLUTION 3:

Let's solve last lesson's problem with event delegation now 

- Look at our last solutions- it looks efficient, but in reality we're copying the same function and event listener 3 times

- What if we were attaching the handler ƒ() to 1000 buttons? That'd be inefficient

Step 1) Add event listener to the common parent element (`<ul>` in this case)
Step 2) Determine what element originated the event (which el we clicked on)

WANT:

- Clicking a nav link anchor element smooth scrolls us to the location dictated by the `<a>` tag's href value. 
- We also don't want to apply event listeners to those tags individually multiple times
  Is time consuming and bad for performance when you have a lot of elements

PLAN:
Chain => `<ul>` parent of `<li>` parent of `<a>`

- So, we'll apply an event listener to `<ul>`, but make it so it only performs an action if you click on the anchor `<a>`
- This step is necessary, or else clicking anywhere on the nav would sooth scroll us somewhere, which would be annoying AF

```js
let ulElement = document.querySelector('.nav__links');

ulElement.addEventListener('click', e => {
  e.preventDefault();
  //# Now, make sure the element you clicked is the anchor <a>
  let isAnchor = e.target.classList.contains('nav__link'); // returns T/F
  // if the element you clicked IS an anchor, it'll be in the nav__link class
  //# Once you verify, smooth scroll to the location dictated by its href value
  if (isAnchor === true) {
    let destinationID = e.target.getAttribute('href');
    document.querySelector(destinationID).scrollIntoView({ behavior: 'smooth' });
  }
});
```

FULL SOLUTION: https://codepen.io/NFuego24-7/pen/KKaGaRB

#### Great Use Case

- When working on larger projects, you'll be rendering lots of new HTML for your webpage, and you'll want event listeners to be set on startup
- You can't  `document.querySelector("")` an element that does not exist, but you can use event bubbling and delegation

If curious, take a look at your forkify project's controller module. 
The bottom of that file has several event listeners set up that way

IN VIEW:
![image-20210708160828625](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210708160828625.png)

![image-20210708161647974](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210708161647974.png)

IN CONTROLLER:
<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210708162108912.png" alt="image-20210708162108912" style="zoom:80%;" />

# Intersection Observer API

Typical Uses:

- Lazy-loading of images or other content as a page is scrolled.
- Implementing "infinite scrolling" web sites, where more and more content is loaded and rendered as you scroll, so that the user doesn't have to flip through pages.
- Reporting of visibility of advertisements in order to calculate ad revenues.
- Deciding whether or not to perform tasks or animation processes based on whether or not the user will see the result

### API Basics

#### Definitions 

|                | What it is                                                   |
| -------------- | ------------------------------------------------------------ |
| target element | the element we're checking is in range of the root or root element |
| root           | The reference for what the target element will be intersecting<br />root: htmlEl makes the reference an element on your page<br />root: null makes the reference the viewport |
| rootMargin     | operates just like the CSS margin property "40px 0px 0px 0px" [TRBL] Negative values extend the trigger area for target elements<br />Positive values reduce the trigger area<br />Can be set in px or percent which is based on the target element dims |
| threshold      | The percent of the target element that must be inside the viewport if root equals 0 for example. (threshold of 0.5 means that half must be on screen for your callback to go off) |
| entries        | An array containing objects which house several useful properties which you'll likely use to write your event handlers |
| observer       | `observer.unobserve(entry.target);` is often used to stop the API from observing an element after its been detected once. "entry" is just a name given to one of entries' array values- can be called something else |

If unspecified, `threshold:0` and `root:null`

entries:  <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210421170645872.png" alt="image-20210421170645872" style="zoom:80%;" />

observer: ![image-20210421170820886](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210421170820886.png)

#### How the Entries Array of Objects Works:

Let's say you have 4 target elements. Upon loading, your callback function goes off 4 times- once for each element. The entries array will contain 4 objects total

When you scroll down your page, you're eventually going to intersect with some target elements. 

- If you intersect with 1, the entries array will contain one object. 
- If you encounter 2 at the same time, it will have 2 objects
- Every time a handler is invoked for a new target element encounter, the previous one seems to be discarded. 
- The current entries array length is dictated by how many target elements are detected right at that moment (with the exception of the very start, as I explained)

(I came up with this, but it may need additional verification)
TEST HERE: [Entries Observation (codepen.io)](https://codepen.io/NFuego24-7/pen/mdRaRZP)

#### ENTRIES PROPERTIES:

| entries.             | gives...                                                     |
| -------------------- | ------------------------------------------------------------ |
| `isIntersecting`     | a Boolean based on if targetEl is intersecting the root at this exact moment |
| `intersectionRatio`  | a rough ratio estimation of where a callback is invoked.<br />If threshold is 0.4, you'd get around 0.38 if you were scrolling into targetEl, and 0.41 if you were scrolling it out. |
| `boundingClientRect` | the width, height, and L/R/B/T measurements relative to viewport (visual seen below) |
| `target`             | the target element you're seeking intersections for          |
|                      |                                                              |

`.boundingClientRect` provides:  <img src="https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect/element-box-diagram.png" alt="img" style="zoom: 33%;" />

#### THRESHOLD VALUE MEANINGS

|                 | triggers event when...                                       |
| --------------- | ------------------------------------------------------------ |
| `threshold:0`   | any part of the target el gets on screen, or when all of it leaves |
| `threshold:1`   | the entire target el is on screen (impossible if targetEl's bigger than the viewport) |
| `threshold:0.4` | 40% of target element must be on screen to invoke the callback function |

#### MULTIPLE THRESHOLD VALUES

- You can have multiple thresholds in an array if you want- just make sure to loop over the entries argument inside the handler (assuming you need it)
- You can loop over entries even if you only have 1 threshold. 
  Just do that every time, for simplicity

![image-20210422112637658](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210422112637658.png)

#### CALLING THE OBSERVE FUNCTION ON 2+ ELEMENTS

You have the option to use the API on several elements at once by looping over your observe function with your target element inside

![image-20210422114349475](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210422114349475.png)

#### THE API START-UP ISSUE 

This API will automatically invoke the callback function as soon as the page loads up- regardless whether the target element intersects the root or not 

That being said, `entries.isIntersecting` will still return an accurate true/false value. Use that in your callback function to guard yourself from this problem

#### UNDERSTANDING ENTRIES (return4)

I'll admit, I don't fully comprehend how this aspect of the API works. Not sure if the number of elements in this array is dependent on the number of target elements, or thresholds, or whatever.

- To negate this, I use forEach on every entries array I deal with, then filter out all values that don't matter using if statements. (slightly worse for performance)

![image-20210423122033473](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210423122033473.png)

- I've seen the Udemy instructor pick out which array value from entries they want. 
  Go back and review this video at 7:08 to see what I mean (picture above)

[The Complete JavaScript Course 2021: From Zero to Expert! | Udemy](https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648999#questions)



### Example Problems

#### Challenge 1: Track 1 Element's Ins and Outs

CHALLENGE DESCRIPTION: 
Log a message to the console when an element ENTERS the screen (any % of it)
Log a message to the console when an element EXITS the screen fully (0% on screen)
Be sure to ignore the first callback function invocation (no message at all)

Refer to the element entering and leaving the screen with its ID

```html
<h1>SCROLL DOWN AND SEE WHAT'S IN STORE</h1>
<p id="p1"> Long paragraph ~ </p>
<section>pads out space</section>
```

JS CODE:

```js
//# Define options array
const obsOptions = {
  root: null, // Viewport is the frame of reference
  threshold: 0, // trigger ƒ() if any of the targetEl is on screen
};
//# Observe callback ƒunction
let count = 0;
const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) console.log(entry.target.id + " on screen");
    if (!entry.isIntersecting) {
      count > 0 && console.log(entry.target.id + " NOT on screen");
      count++;
      // if count is at least 1, then log a message (skips the first invocation)
    } 
  });
};

//# API call, specify the target element
const paraChecker = new IntersectionObserver(obsCallback, obsOptions);
paraChecker.observe(document.querySelector("p")); // target element
```

FULL SOLUTION: https://jsfiddle.net/JasonXtuyotech/9z3bu1hf/14/

INCOMPLETE SOLUTION: https://jsfiddle.net/JasonXtuyotech/uharz6Ld/5/

The incomplete solution does not address the problem where callbacks are invoked on page-loading. (Test the difference between these 2)

#### CHALLENGE 2: Track 4 Elements' Ins and Outs

Repeat, but track if any part of 4 paragraph elements are on screen
Track all 4 of them entering and leaving all at the same time

```html
<h1>SCROLL DOWN AND SEE WHAT'S IN STORE</h1>
<p id="p1"> Long paragraph ~ </p>	<p id="p2"> Long paragraph ~ </p>
<p id="p3"> Long paragraph ~ </p>	<p id="p4"> Long paragraph ~ </p>
<section>pads out space</section>
```

Aside from the HTML looking different, this is the only change:

```JS
"use strict";
const allParagraphs = document.querySelectorAll("p");
//# Define options array
const obsOptions = {
  root: null, // Viewport is the frame of reference
  threshold: 0, // trigger ƒ() if any of the targetEl is on screen
};
//# Observe callback ƒunction
let count = 0;
const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) console.log(entry.target.id + " ON screen");
    if (!entry.isIntersecting) {
      count > allParagraphs.length - 1 && console.log(entry.target.id + " OFF screen");
      count++;
      // (skips the first 4 invocations) 
    } 
  });
};

//# API call, specify the target element
const paraChecker = new IntersectionObserver(obsCallback, obsOptions);
allParagraphs.forEach((para) => {
  paraChecker.observe(para); // target element
});
```

SOLUTION: https://jsfiddle.net/JasonXtuyotech/1k72vanj/6/

This time, we needed to ignore the first 4 callbacks. 

- We have 4 elements, and the API will think all of them are in the viewport at start. 
- Change the condition regarding your count variable. 
  Don't hardcode the number 4 either 
- Let JS calc how many elements there are to ignore using the captured target elements' array/nodelist (assuming you used `document.querySelectorAll` or an equivalent)



#### CHALLENGE 3: Track 4 Elements w/ Diff Thresholds

CHALLENGE DESCRIPTION: 
Log a specific message to the console when each element FULLY is on screen (100%)
Log a message to the console when an element EXITS the screen fully (0% on screen)
Be sure to ignore the first callback function invocation (no message at all)
Refer to the elements entering and leaving the screen with its ID

HINT: You'll need 2 threshold values. 
Fully exit screen needs a threshold is 0
Fully on screen needs a threshold of 1

Don't skip the initial callbacks this time. Just make sure the logs accurate tell you if an element is on screen or not

```html
<h1>SCROLL DOWN AND SEE WHAT'S IN STORE</h1>
<p id="p1"> Long paragraph ~ </p>	<p id="p2"> Long paragraph ~ </p>
<p id="p3"> Long paragraph ~ </p>	<p id="p4"> Long paragraph ~ </p>
<section>pads out space</section>
```

JS Code:

```js
const allParagraphs = document.querySelectorAll("p");
//# Define options array
const obsOptions = {
  root: null, // Viewport is the frame of reference
  threshold: [0, 1], // trigger ƒ() if any of the targetEl is on screen
};
//# Observe callback ƒunction
let count = 0;
const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    //&—————————————————————【 Is element fully onscreen? 】——————————————————————————
    if (entry.isIntersecting && entry.intersectionRatio === 1) {
      console.log(entry.target.id + " fully ON screen");
    }
    //&—————————————————————【 Is element FULLY offscreen? 】——————————————————————————
    if (!entry.isIntersecting) console.log(entry.target.id + " fully OFF screen");
  });
};

//# API call, specify the target element
const paraChecker = new IntersectionObserver(obsCallback, obsOptions);
allParagraphs.forEach((para) => {
  paraChecker.observe(para); // target element
});
```

SOLUTION: https://jsfiddle.net/JasonXtuyotech/1vtzhpoq/4/

Logic Explained:

We need to feed the API 2 thresholds to be on the lookout for. 
Naturally, more event handlers are going off than we bother to show. 

We only have 2 circumstances in mind where we want the console to log a message
Define those circumstances, then code the actions to be taken after they're met
The circumstances should be described using properties of the entries object

#### CHALLENGE 4: Stop Tracking Elements after they're found

With all previous challenges, the API detects a target element intersecting the root, which is usually the viewport. You can scroll all the way down a webpage, then back up- while the API detects every new intersection that occurs because of it

- Some features don't need more than 1 detection for a target element
- Example: Text animation occurring only when you scroll deep enough. 
  Once an animation fires, that's it. No reason to let the API keep running tests

###### How to do this:

This is where we need the observe parameter built into the handler function 

```js
observer.unobserve(targetEl); // stops API from detecting a target element
```

- This works best when the browser determines what has already been detected
  Use this in the entries forEach loop you rely on so much
- The above method is effective, but this can be applied in slightly different ways (see the Udemy video ending about "Revealing Elements on Scroll")

###### Back to the Challenge:

Take Challenge 1, and tweak it...

Version A 
Stop detecting the element after it's found to be on screen 
Exclude initial event handler going off

```js
//# Define options array
const obsOptions = {
  root: null, // Viewport is the frame of reference
  threshold: 0, // trigger ƒ() if any of the targetEl is on screen
};
//# Observe callback ƒunction
let count = 0;
const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target.id + " on screen");
      //^ VERSION A:
      count > 0 && observer.unobserve(entry.target); // this version does not
    }
    if (!entry.isIntersecting) {
      count > 0 && console.log(entry.target.id + " NOT on screen");
      count++;
    }
  });
};

//# API call, specify the target element
const paraChecker = new IntersectionObserver(obsCallback, obsOptions);
paraChecker.observe(document.querySelector("p")); // target element
```

Version B
Stop detecting element after its been found to be off screen
Exclude initial event handler going off

```js
//# Define options array
const obsOptions = {
  root: null, // Viewport is the frame of reference
  threshold: 0, // trigger ƒ() if any of the targetEl is on screen
};
//# Observe callback ƒunction
let count = 0;
const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target.id + " on screen");
    }
    if (!entry.isIntersecting) {
      count > 0 && console.log(entry.target.id + " NOT on screen");
      //^ VERSION B: 
      count > 0 && observer.unobserve(entry.target);
      count++;
    }
  });
};

//# API call, specify the target element
const paraChecker = new IntersectionObserver(obsCallback, obsOptions);
paraChecker.observe(document.querySelector("p")); // target element
```

Version A: https://codepen.io/NFuego24-7/pen/BapvRJE
Version B: https://codepen.io/NFuego24-7/pen/dyNwWdm



# Forms (partial)

### Read First

1. Forms can be built in their default states using HTML alone. There's no need to recreate what's already built into the browser using JS. Simply use the tools at your disposal, then stylize them afterwards
2. The YouTube video we use to learn this chapter is provided below. Each interactive element in his code pen and video were placed sequentially after one another. To simplify things, I'm dissecting each interactive element/form separately
3. If the required attribute is not used on a block of code used to create an interactive button/field, then the user is allowed to submit nothing for that specific one

[(10) Learn HTML Forms In 25 Minutes - YouTube](https://www.youtube.com/watch?v=fNcJuPIZ2WE&ab_channel=WebDevSimplified)

```html
<!-- Structure of the document that has all the buttons on 1 HTML page. Have a standard template active and place the following syntax in the body element -->
	
<form action="results.html" method="GET" enctype="multipart/form-data">
  	<div> INTERACTIVE ELEMENT OR FORM 1</div> 
 	<div> INTERACTIVE ELEMENT OR FORM 2</div>
</form>
```

action="results.html"
Submits the data users enter to a page called results.html

method="GET"
Appends things to the URL and will send it to another page on your site. Incredibly unsafe to use GET requests on your webpages due to a lack of security. Only use for demo purposes where you don't have a server for hosting

method="POST"
Sends information to a server instead- much more secure. Browsers can't render post requests, so if we attempt to use this without an actual server, you'll receive an error message

ENCTYPE="multipart/form-data"
Included when we have method= POST
And if one of our input labels has its type="file". 
It allows entire files to be included in the data




> ![image-20201208161309975](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201208161309975.png)![image-20201208161333285](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201208161333285.png) END RESULT

### Checking for Empty Input Field Values

If you have several input fields, you want to make sure that someone doesn't forget to fill one in
That being said, if the user enters whitespace, that should not be a valid input wither

```js
const formSubmitHandler= event => {
	event.preventDefault()
	// End submit ƒ() early if the input is just whitespace
	if(enteredValue.trim().length === 0 ) return
}
```



### Scroll Lists

No preselected option: ![image-20201209220617570](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201209220617570.png)  With preselected option: ![image-20210504173653793](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210504173653793.png)

```html
<div>
    <label for="eyeColor">Eye Color:</label>
    <select name="eyeColor" id="eyeColor" multiple>
        <option value="Green">Green</option>
        <option label="Red" value="Red"></option>
        <option value="Blue">Blue</option>
        <option label="Brown" value="Brown"></option>
        <option selected="selected" value="Sharingan">Sharingan</option>
    </select>
</div>
```

Because of the property `selected="selected"`, the Sharingan option is the default choice that's pre-picked as soon as the page loads

#### Accepting Data with JS

Usually, people store values from input fields inside variables. For our simple example, we'll just log what we would have saved.

Either way, you'll be using `menuElement.value` to capture the option chosen

EXAMPLE: Change your choice by clicking diff options on the list, and log your selected choice every time

```js
const eyeColorDDM= document.querySelector("#eyeColor")
const allOptions= document.querySelectorAll("#eyeColor option")

allOptions.forEach((el)=>{
	el.addEventListener('click', (e) => { console.log(eyeColorDDM.value) })
})
```

DEMO: https://jsfiddle.net/JasonXtuyotech/uj5wavem/9/



### Text Fields

#### Name 

> ![image-20201208163822184](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201208163822184.png)
>
> It auto-suggests previously used names on your PC when you click the field

```html
<div>
   <label for="name">Name</label>
   <input type="text" name="name" id="name" required>
</div>
```

#### Email 

```html
<div>
   <label for="email">Email</label>
   <input type="email" name="email" id="email" required>
</div>
```

#### Age 

```html
<div>
   <label for="age">Age</label>
   <input type="number" name="age" id="age" min="1" max="200" step="5">
</div>
<!-- Step=5 just makes it so hitting up arrow increases the age by 5 year increments instead of 1
```

#### Phone 

```html
<div>
   <label for="phone">Phone</label>
   <input type="tel" name="phone" id="phone">
</div>
```

#### URL 

```html
<div>
   <label for="url">URL</label>
   <input type="url" name="url" id="url">
</div>
```

#### Password 

```html
<div>
    <label for="ally"> ASSword </label>
    <input type="password" name="password" id="ally" required>
</div>
```

```html
<div>
  <label>
    Password
    <input type="password" name="password" required>
  </label>
</div>
<!-- alternative to using the for attribute is to nest the input inside the label tags. End result is the same
```

#### Adjustable Size Text Field

![image-20201209220309244](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201209220309244.png)

```html
<div>
   <label for="bio">Bio</label>
   <textarea id="bio" name="bio"></textarea>
</div>
<input type="hidden" name="hidden" value="hi"> <!-- FIND LATER -->
```



### Date Fields 

#### MM DD YYYY

![image-20201209220050803](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201209220050803.png)

```html
<div>
   <label for="date">Birthdate</label>
   <input type="date" name="date" id="date" min="2019-06-10">
</div>
```

The earliest possible date the user can enter is june 6th 2019, thanks to our min attribute

### Increment Arrow Input Fields

```
<input type="number" step="1">
```

![image-20210727024521079](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210727024521079.png)

### Checkbox Fields

#### 1 Option Permitted

![image-20201209220451899](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201209220451899.png)

```html
<div>
     Gender:
     <label for="male">Male</label>
     <input type="radio" name="gender" id="male" value="male">
    
     <label for="female">Female</label>
     <input type="radio" name="gender" id="female" value="female">
</div>
```

Notice how the name "gender" is shared by both of our options. This is done deliberately to tell HTML that we may only select 1 choice between the 2.

#### Multiple Options Permitted

![image-20201209220414780](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201209220414780.png)

```html
<div>
   Favorite Food:
   <label for="banana">Banana</label>
   <input type="checkbox" name="banana" id="banana">
   
   <label for="apple">Apple</label>
   <input type="checkbox" name="apple" id="apple">
</div>
```

Our 2 choices here do not share the same attribute names. This is because we are allowed to select both as our favorite food- despite what "favorite" may typically insinuate

### Buttons

#### Reset

![image-20201209220516396](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201209220516396.png)

```html
<button type="reset">Reset</button>
```

#### Submit 

```html
<button type="submit">Submit</button>
```





### Other Types

#### Color Selection via Spectrum

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201209220719635.png" alt="image-20201209220719635" style="zoom:67%;" />

```html
<div>
   <label for="color">Color</label>
   <input type="color" name="color" id="color">
</div>
```



#### Select File

![image-20201209220803608](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201209220803608.png)

```html
<div>
   <label for="file">Select File:</label> <br>
   <input id="file" type="file" name="file">
</div>
```



### Search Bar

![image-20210131160728254](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210131160728254.png)



#### Importing Icons

To import the icons for the magnifying glass and the x, copy this link tag to the head of your HTML doc:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
```

The icons are from font-awesome, and you can summon them using `fa fa-something` class names. 

- These names will match the ones you've seen on the site-assuming they came included in that CSS doc found on the cloud flare site
- Follow the link in the href to look at more packages
  Go to the font-awesome site to check out your available icons

![image-20210131170941827](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210131170941827.png)

#### Syntax

```html
      <!-- Search Bar -->
     <div class="searchbar-container">
          <div class="fa fa-search"></div> <!--Search icon-->
          <input type="text" placeholder="Search" /> <!--Search text field-->
          <div class="fa fa-times"></div> <!--X icon -->
      </div>
```

```scss
* {
  font-size: 1.5rem; // can apply directly to the a element 
}

.searchbar-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: $comp2; // searchbar icon color [][][C]
  padding: 0.6rem;
  border-radius: 0.5rem;
  color: $charcoal;
  width: 20vw; // searchbar width [][][S]

  input {
    margin: 0 0.8rem; //moves icons a bit away from textbox
    width: 100%; //makes this 100% of container width (responsive)
    border: none; //removes browser defaults for text field lines
    outline: none; //removes browser defaults for text field lines
    background: $comp2; //Searchbar Color [][][C]
    color: $charcoal; // font color when searchbar's typed into
  }

  ::placeholder {
    color: $charcoal; // placeholder text color [][][C]
  }

```









# Modal Window

WHERE TO FIND OUR FINAL CODE FOR THIS PROJECT
FULL: Check Modal Practice file in your Study problems folder
	  Or use this: https://codepen.io/NFuego24-7/pen/VwmXXva

### Project Description

- The modal pop-up window, and the backdrop are all set to `display:none` when the webpage is in its default state. 
- They're just regular HTML elements whose appearances are hardcoded. 
  We'll be switching `display:none` off when it's time for them to appear

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210228001921096.png" alt="image-20210228001921096" style="zoom:25%;" />    <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210228001951933.png" alt="image-20210228001951933" style="zoom:25%;" />

TIP: If many elements have something in common (needing to be hidden with display none for example), put them all in the same CSS class. That way, we can target multiple elements at once using `querySelectorAll` in JS

EXAMPLE:

Behold the code for the 'show modal' buttons

```html
    <button class="show-modal">Show modal 1</button>
    <button class="show-modal">Show modal 2</button>
    <button class="show-modal">Show modal 3</button>

    <div class="modal hidden"> <!--modal in hidden class-->
      <button class="close-modal">&times;</button>
      <h1>I'm a modal window 😍</h1>
      <p> Random karp </p>
    </div>
    <div class="overlay hidden"></div> <!--backdrop in hidden class-->
```

Log the text content of each modal button, and the entire query selector array

```js
let modalBtn= document.querySelectorAll('.show-modal')
console.log(modalBtn);  	// log the entire array

for (let i=0; i<modalBtn.length;i++){
  console.error(modalBtn[i].textContent); // show text content
}
```

![image-20210228014357163](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210228014357163.png)

### Adding and Removing Classes (P1: Execution)

Read the previous lesson. The modal and backdrop are both already hardcoded in our HTML and CSS. 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210228001921096.png" alt="image-20210228001921096" style="zoom:25%;" />    <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210228001951933.png" alt="image-20210228001951933" style="zoom:25%;" />

- They're unseen in our website's default state because of their "hidden" class.
- To show them, remove this class as soon as we click one of our "Show Modal" buttons 

#### Handling Query Selector Arrays

We've done something similar to this at the start of section 7, but this is more advanced. 

- We have 3 buttons that must summon both the modal and backdrop at the same time. We'll need to manage the arrays that `querySelectorAll` creates

```html
<!--Relevant HTML-->
	<button class="show-modal">Show modal 1</button>
    <button class="show-modal">Show modal 2</button>
    <button class="show-modal">Show modal 3</button>

    <div class="modal hidden">			<!--Modal element-->
      <button class="close-modal">&times;</button>
    </div>
    <div class="overlay hidden"></div>	<!--Overlay element-->
```

```css
/*Relevant CSS*/
.hidden { display: none; }	/* hidden class hides everything inside it*/
```

#### Procedure

OBJECTIVES:

- Activate modal and backdrop when any one of our "Show Modal" buttons are clicked
- Be able to exit the modal/backdrop by pressing the x button on the upper right
- Be able to exit by hitting the background space behind the modal (aka the backdrop itself)
- Be able to exit using ESC (later lesson)

1) Store the modal element and the overlay element in JS elements, SEPERATELY

- We could target them both with `querySelectorAll`, but then it would make them harder to manage since they'd be in an array. 

- This'd lead to problems like pressing a button and only activating them 1 at a time

```js
let modal= document.querySelector('.modal')
let overlay= document.querySelector('.overlay') 
```

2) Create JS variables for the 3 buttons and the X button for exiting

```js
let btnOpenModal= document.querySelectorAll('.show-modal')  // 3 button elements
let btnCloseModal= document.querySelector('.close-modal') // X button
```

3) Create a single event listener for your 3 buttons

Since your 3 buttons are placed in an array thanks to `querySelectorAll`, use a for loop to make sure each of the 3 are affect by your event listener

```js
for (let i=0; i<btnOpenModal.length;i++){
  btnOpenModal[i].addEventListener('click', ()=>{
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
    // target the overlay and modal elements then REMOVE "hidden"
  })
} // WARP: AXQZE1
```

4) Create an event listener for the modal's X button. Exit the modal+backdrop when its clicked

```js
//# Exit the modal+backdrop when you hit the X button
btnCloseModal.addEventListener('click', ()=>{
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
  // target the overlay and modal elements then ADD "hidden"
})
```

5) Create an event listener for the background space behind the pop up window. Exit the modal+backdrop when its clicked

```js
overlay.addEventListener('click', ()=>{
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
})
```

6) Refactor to create dry code

You may have noticed that the callback function for the X button and the backdrop space are identical. 

- Let's define the callback function externally instead, letting us dry up our code
- Do the same for our callback function to open the modal as well

```js
// FINAL CODE
'use strict';
// classes: overlay hidden  ... modal hidden

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnOpenModal = document.querySelectorAll('.show-modal'); // 3 button elements
let btnCloseModal = document.querySelector('.close-modal'); // X button

//@ open modal when something is pressed (will be used for callbacks)
const openModal = function () {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};
//@ close modal when something is pressed (will be used for callbacks)
const closeModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

//# Activate modal and backdrop when we hit 1 of 3 "Show Modal" buttons
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}
//# Exit the modal+backdrop when you hit the X button, OR hit the backdrop
btnCloseModal.addEventListener('click', closeModal);  //READ IMPORTANT DETAILS BELOW
overlay.addEventListener('click', closeModal);  //READ IMPORTANT DETAILS BELOW
//—————————————————————【】——————————————————————————
// This last section requires you to understand keyboard events
document.addEventListener('keydown', (obj) => { 
  let isModalActiv= modal.classList.contains('hidden') //returns a Boolean
  let isBackdropActiv= overlay.classList.contains('hidden') //returns a Boolean
  if(obj.key==="Escape" && isModalActiv==false && isBackdropActiv==false) {
    closeModal(); 
    console.log("closed the modal!");	// HELPER LINE
  }
});
```

!!! IMPORTANT !!!
When using your externally defined callback function inside your event listener, do not include parameter brackets ().

CORRECT WAY TO USE CALLBACK: `btnCloseModal.addEventListener('click', closeModal);`
IT IS NOT=> `overlay.addEventListener('click', closeModal());`

If we include brackets (), that tells JS to execute that function as soon as its parsed over. We want the event handler to only call that function WHEN/IF the event trigger occurs

//—————————————————————【】——————————————————————————

COMPLETED DEMO: https://codepen.io/NFuego24-7/pen/VwmXXva

The last part of our code can be understood by reading our lesson on keyboard events


### Adding and Removing Classes (P2)

#### 2 Ways to Implement Class Toggling

Method 1) WHAT WE DID HERE
Have the class with your modal+backdrop hardcoded to the webpage
Add a secondary class with "display: none" applied to it
Remove that secondary class to show your outcome

Method 2) ALTERNATIVE
Have a class that produces a modal+backdrop, but don't assign it to anything
Assign the class to an element as soon as a button is pressed

Both of these are equally viable, and can be applied to any scenario involving eventy listeners

#### This Method VS Manipulating CSS Styles

Adding and removing classes using JS is a much more efficient way to make website changes compared to manipulating CSS styles one by one

- In CSS, a class can contain dozen's of changes, all of which will affect elements when we add or remove that class
- With CSS style manipulation, we can only change CSS properties 1 at a time

### Making ESC Exit the Modal

```JS
btnCloseModal.addEventListener('click', closeModal);	//randome example
```

- Our event handler function is waiting for a button on our webpage to clicked. 
- Once this happens, JS generates an object that contains information about the event. We can access this object in the event handler function

This is necessary to tell JS which key should activate our keyboard event. Otherwise, your event will trigger as soon as any key is pressed.


#### RTTP: Making ESC exit the modal+backdrop

We don't want to make the modal hidden if it is already being concealed- that would be sloppy coding. So we make an if statement that list our conditions for making the ESC exit our modal

```js
document.addEventListener('keydown', (obj) => { 
  let isModalActiv= modal.classList.contains('hidden') //returns a Boolean
  let isBackdropActiv= overlay.classList.contains('hidden') //returns a Boolean
  
  if(obj.key==="Escape" && isModalActiv==false && isBackdropActiv==false) {
    closeModal(); 
    console.log("closed the modal!"); //HELPER LINE 
  }
});
```

EXPLANATION: 
Conditions: ESC key is pressed, modal is active, & the backdrop is active...
OUTCOME: Exit the pop-up by calling the closeModal function we made in a prev. lesson

When you click escape and no modal/backdrop is open, the console should say nothing
If you use ESC to exit them, the console will say "closed the modal!". Test it out

Find code here: https://codepen.io/NFuego24-7/pen/VwmXXva

# ——【STRING MANIPULATION】———

# Strings

- Remember that strings are immutable. 
  Simply applying methods to them will not change the original string they're used on
- You can redefine the string variable using a method though. 
  That will cause a permanent change

EXAMPLE: Eliminate all 0's fr/ the string

```js
let str= "My0, what0 a beau0tiful d0ay it is"
str.replaceAll(0,"") // method does not permanently change the string
console.log(str); 
```

![image-20210316122936415](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210316122936415.png)

```js
let str= "My0, what0 a beau0tiful d0ay it is"
str= str.replaceAll(0,"") // redefining the string does permanently change it
console.log(str); 
```

![image-20210316122913721](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210316122913721.png)

### Definitions

REGEX TERMS:

Capturing Group: ()
Character Class: []



### Intro Methods Part 1

Standalone strings can have individual characters called just like arrays
You can call them after the strings are declared (top-half), or during (bot-half)

```js
let dia= "Tuesday"
console.log(dia[0]);  // OUTPUT: T
console.log(dia[1]);  // OUTPUT: U

console.log("L9Yamato"[1]); // OUTPUT: 9
let thirdLetterInWord= "FFF_at_20"[2]	// variable set equal to F
```

#### Common String Methods

|                              | effect                                                       |
| ---------------------------- | ------------------------------------------------------------ |
| `strName.indexOf("a")`       | get the first position of a char/word in the string          |
| `strName.lastIndexOf("a")`   | get the last position of a char/word in the string           |
| `strName.slice(start,end)` ◐ | extracts parts of a string<br />starts slice at index 4, ends at index 8 |
| `strName.toLowerCase()`      | converts letters to lowercase<br />does not require arguments |
| `strName.toUpperCase()`      | converts letters to uppercase<br />does not require arguments |

Remember that spaces count as characters in strings, and that whatever you do to a string with these methods will not affect the original- they're immutable primitives.

- If an `indexOf` method can't find your requested character, it returns `-1`
- If no end is specified for the slice method, it takes everything after start index# and creates a string with that
- The length of a substring created with `slice` is always the `endIndex-startIndex`



EXAMPLE 1: Demonstrate `indexOf and lastIndexOf` 

```js
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane.indexOf(0)); // OUTPUT: 3
console.log(plane.indexOf('a')); // OUTPUT: -1 (case sensitive)
console.log(plane.indexOf('A')); // OUTPUT: 0

console.log(airline.lastIndexOf('A')); //OUTPUT: 4
```

If you don't specify the end index of a string, it just slices until the end

```js
const airline = 'TAP Air Portugal';
//               012345678
console.log(airline.slice(8)); // OUTPUT: Portugal
// removes strings 1-7. 
```

#### Slice w/out Hardcoded Index Numbers

Sometimes we may receive strings that we haven't gotten the chance to look at beforehand. In cases like these, we need to be able to create substrings without giving our methods exact numbers

EXAMPLE A: 
Get the first word of our given sentence
Get the last word of our given sentence

```js
const line= "Advanced Solids, the legendary mech eng course"

let firstWord= line.slice(0,line.indexOf(" "))  // ◐ does not include end index value
console.log(firstWord);  //OUTPUT: "Advanced", not "Advanced " with a space

let lastWord= line.slice(line.lastIndexOf(" ")+1) // need +1 to not include last space
console.log(lastWord);  //OUTPUT: "course"
```

![image-20210309191801831](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210309191801831.png)

#### Slice Method with Negative Indexes

We can use negative index numbers too- they start counting from the end of a string

Remember ◐ : The slice method does not include the end letter
-1: last letter 	-2: Second Last letter

```js
const song= "To be Reborn";
let a= song.slice(0, -4)  //OUTPUT: "To be re" 
						 //(we don't include the last 4 letters)
```

#### Practical Example

Create a function that tells us if we got a border or middle seat on an airplane

```js
const checkMiddleSeat= function(seat){
  // B and E are middle seats
  const lastChar= seat.slice(-1) // start at last letter
  switch (lastChar){
    case "B":
    case "E":
      console.log(`${seat} is a middle seat`);
      break;
    default:
      console.log(`${seat} is a border seat`);
  }
}
checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')
```

![image-20210309195250438](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210309195250438.png)

### Intro Methods Part 2

EXAMPLE 1: Demonstrate the upper and lower case methods

```js
let phrase= "Do NOT smile"
console.log(phrase.toLowerCase());
console.log(phrase.toUpperCase(0,3)); // arguments do nothing 
```

![image-20210309200038046](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210309200038046.png)

If you want to affect only parts of a string with upper or lower case methods, you'll have to do it in multiple steps

EXAMPLE 2: Capitalize the first letter of Harry's mistyped name

```js
const myName= "haRRy";
const lowStr= myName.toLowerCase();
let final= myName[0].toUpperCase() + lowStr.slice(1)
// 								H  +  arry
console.log(final);  //OUTPUT: Harry
```

#### Methods for Removing White Space

What counts as white space: Space, tab, non-breaking space, LF, CR

```JS
let nbsp= '\U00A0';		let cr= '\u000D'
let lf= '\u000A';		let tab= '\t'
// i believe this is unicode
```

|                       | effect                                       |
| --------------------- | -------------------------------------------- |
| `strName.trim()`      | removes white space fr/ both sides           |
| `strName.trimStart()` | removes white space fr/ start side of string |
| `strName.trimEnd()`   | removes white space from end side of string  |



EXAMPLE 2: Eliminate the mistakes the user made while typing his email

```js
const email= "Hello@JONAs.Io \n" // in JS, \n is like an enter key for line skips
const lowEmail= email.toLowerCase();
const properEmail1= lowEmail.trim()
console.log(properEmail1);
```

BEFORE: ![image-20210309221234138](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210309221234138.png)  	AFTER: ![image-20210309221613473](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210309221613473.png)

Skip the line where you make a new variable for your lowercase version. By chaining methods together, you can get 2 actions done at once:

```js
const email= "Hello@JONAs.Io \n"
const properEmail2= email.toLowerCase().trim()	// make lowercase and trim
console.log(properEmail1);
```



EXAMPLE 3: Test out the trim method on differing sides

```js
let sentence= `   Not what you want.      `
console.log(sentence.trim());
console.log(sentence.trimEnd());	// trims right side only
console.log(sentence.trimStart());	// trims left side only
```

![image-20210309220342655](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210309220342655.png)

- The `trimEnd` method only trims the right side, leaving extra blank space on the left
  The side considered "start" and "end" is dependent on which human lang we're using
- The third output actually has multiple blank space characters after the period. 
  You just can't see them

#### Methods for Replacing String Portions Ⓝ

These replace methods are case sensitive:

|                                              | effect                                                     |
| -------------------------------------------- | ---------------------------------------------------------- |
| `strName.replace(toReplace, replacement)`    | replaces the first instance <br />of the to-Replace string |
| `strName.replaceAll(toReplace, replacement)` | replaces all instances of<br />the to-replace string       |

EXAMPLE 4: Change the door number from 44A to 39B

```js
let message= "Direct flight to Washington, door 44A. I repeat, Washington, 44A"

console.log(message.replace("44A", "39A")); // replaces first instance of 44A
console.log(message.replaceAll("44A", "39A")); // replaces all instances
```

All replacements highlighted: ![image-20210309223325401](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210309223325401.png)

EXAMPLE 5: Replace part of a string using the index location of a character

```js
let str= "38:92:37"
str= str.replace(str[0],"a") // replace first character with "a"
console.log(str)  //OUTPUT: "a8:92:37"
```



This method is fairly new, making the support iffy at a mere 85.62%
There's a way to do this using regex:

```js
console.log(message.replace(/44A/g, '39B'));
```



#### Methods for Returning Booleans fr/ Strings

|                             | returns true if...                               |
| --------------------------- | ------------------------------------------------ |
| `strName.startsWith("air")` | `strName` starts with the argument string        |
| `strName.endsWith("air")`   | `strName` ends with the argument string          |
| `strName.includes("air")`   | `strName` includes the argument string somewhere |

DEMONSTRATION:

```js
let word= " Chip Skylark"
console.log(word.includes("ky")); //TRUE
console.log(word.startsWith("Chip")); //FALSE (first chaaracter is a space)
console.log(word.endsWith("lark")); //TRUE
console.log(word.endsWith("Lark")); // FALSE (is case sensitive)
```

#### Practical Example

We're at the airport, and passengers are reporting what they're carrying in their luggage. Design a function that forbids people from carrying any and all guns or knives

PROTIP: When receiving string inputs, convert the responses to lower case as step 1 NEARLY EVERY TIME. Since these methods are case sensitive, this becomes necessary when creating conditions

```js
const acceptability= function(gear){
  let lowGear= gear.toLowerCase()
  if(lowGear.includes('gun') || lowGear.includes('knife') || lowGear.includes('knives')){
    console.log("You are not allowed on board");
  }
  else {
    console.log("Welcome aboard!");
  }
}
const user_input1= "CARRYING: clothes, snacks, Gun"
const user_input2= "CARRYING: Shotgun, ammo, explosives"
const user_input3= "CARRYING: books, electronics, switchblades" // OVERSIGHT
acceptability(user_input1);
acceptability(user_input2);
acceptability(user_input3);
```

2 out of 3 ain't bad...right? ![image-20210309230702777](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210309230702777.png)

This just goes to show how important conditions are when dealing with strings
User 3 should not be allowed on, but we specified no synonyms for "knives"
If we did not make everything lower case, passenger 1 would've been allowed on



### Intro Methods Part 3

|                      | effect                                                       |
| -------------------- | ------------------------------------------------------------ |
| `strName.split(" ")` | splits up a string using the arg<br />places individual sub strings ordered in an array |
| `strName.join(" ")`  | takes an array of strings and joins them together<br />separates each individual entry with the divider argument |
| `strName.repeat(5)`  | repeats a string the amount of times the argument says       |

> Padding Methods:
>
> strName.padStart(length, "filler")
> strName.padEnd(length, "filler")

Force your string to be the length specified in the argument by adding filler characters containing the symbol you specify in argument 2

```js
// On a standalone string:
console.log("FF at 20".padEnd(15,"!"))
// On a variable:
let str= " 9140 "
console.log(str.padStart(10,"x"));
// Chaining padEnd and padStart together
console.log(str.padStart(10,"x").padEnd(14,"x"));
```

![image-20210310014950561](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210310014950561.png)



#### Split Method

The most common divider string coders use is the empty space " "

```js
let str= "Ichi nibi, boku wa Tobi!"

let strArray= str.split(" ")	// split every time there's an empty space
console.log(strArray);
```

![image-20210310002926199](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210310002926199.png)

- If we dislike the comma, remove all special symbols from your original string with another method (replace or replaceAll with "")
- For the record, this is a shallow overview of the split method. Check the regex lesson on split to learn about its optional variable to set an array size cap, plus how it works alongside regular expressions

#### Join Method

```js
let arr= ["Sugar", "spice", "everything nice"];
console.log(arr.join(" + "));
```

![image-20210310004830063](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210310004830063.png)

#### Repeat Method

```js
let nom= "Tobi";
console.log(nom.repeat(4));	
```

![image-20210310021904844](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210310021904844.png)

Feel free to use string methods as expressions for object literals:

```js
let redundancy= function(n){
  console.log(`There are ${n} vehicles left to choose from: ${"🚗".repeat(n)}`);
}
redundancy(3)
```

![image-20210310022430114](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210310022430114.png)



#### Practical Examples

EXAMPLE 1: Destructuring + Split Combo

Since you're creating an array, that means you can destructure it after the array variable is declared, or even during

```js
let str= "Jason.Bustamante"
let [firstName, surName]= str.split(".")
console.log(`Howdy, fellah! The name's ${firstName} ${surName}`);
```

![image-20210310003419735](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210310003419735.png)

EXAMPLE 2: Capitalize all names in a multi-word string

Strat 1: To create capitalized names, add the capital starting letter, then the lower case rest of each word

```js
let fullname= "jason LeonarDo busTamante";
let lowerArray= fullname.toLowerCase().split(" "); 
	// make lowercase then split up words

let capArray=[];
for(let el of lowerArray){
  let newWord= el.replace(el[0], el[0].toUpperCase())
	// replace first letter of each array entry with a capitalized version
  capArray.push(newWord) 
    // add each iteration result to an array
}
console.log(capArray);		//just to show what the for loop made
console.log(capArray.join(" ")); 
```

![image-20210310012531247](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210310012531247.png)

Strat 2: Define `newWord` a different way (less sophisticated IMO)

```js
  let newWord= el[0].toUpperCase()+el.slice(1)
  	// Add the capitalized first letter to the rest of each word (which is lower case)
```

EXAMPLE 3:
Oftentimes, a website will show you the last 4 digits of your credit card openly, but will replace all the others with X's. Create a function that accepts a numeric input of 16 random digits and does this:

```js
let creditNo= 2635954290003628;
const obstruct= function(num){
  let creditStr=String(num)	// must convert number to a string for these methods 
  let final4= creditStr.slice(-4)
  let rest= final4.padStart(19,"XXXX-XXXX-XXXX-")
  return rest;
}
console.log(obstruct(creditNo)); 
```

![image-20210310020435222](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210310020435222.png)

This was built based on the assumption that users are not allowed to submit numbers that have more than 16 digits. Can code this functionality into our websites



### split() in depth ☮

FYI: If you want to split up a string using more than 1 delimiter, check your `Regex Methods` chapter for the lesson on the regex-version of split()

SYNTAX:

```js
string.split(delimiter, limit)
```

- This method lets you take a string, and turn it into an array full of sub strings. You choose a delimiter to decide where to split up your strings
- The limit tells JS that you only want X amount of substrings, and to stop cutting them up past that point. Useful if you only care about a few early substrings

#### Example: Split up song lyrics

- Place all individual words in an array
- You only care about the first 5 words of the song, so use your limit argument

```js
let kanye = `No one man should have all that power
The clock's ticking', I just count the hours
Stop tripping', I'm tripping' off the power`;

kanye= kanye.split(" ",5) // split song by spaces, stop after 5 array entries
console.log(kanye);
```

The delimiter gets deleted when the array is created

![image-20210316125529528](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210316125529528.png)

#### Chaining Splits in 1 Line

You can split up a string twice or more on one line, with different delimiters 

EXAMPLE: 
Take a URL, and split the URL into 2 pieces using the "?" symbol
Split the second half with the "=" symbol
Merge both arrays into 1

Multi-Line Way:

```js
let url= "https://www.youtube.com/watch?v=IMm1GsOUGvQ"
url= url.split("?")
console.log(`After splitting with '?':`, url); // helper

let url2= url[1].split("=")
console.log(`After splitting with '=':`, url2); // helper 

let urlCombo= [...url,...url2]
console.log(urlCombo);
```

![image-20210316130833111](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210316130833111.png)

Refactored Way:

```js
let url= "https://www.youtube.com/watch?v=IMm1GsOUGvQ"
let urlCombo= [url.split("?")[0], ...url.split("?")[1].split("=")]
console.log(urlCombo);
```

![image-20210316130917446](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210316130917446.png)

- We split with "?", then kept the first half for entry 0 of our combo array
- We split the second half with "=", then kept all those pieces for the remaining entries on the combo array
- We needed the spread operator to liberate these values from their original array
  Otherwise we'd just create a nested array, which we do not want

#### Capture all Characters

If you wish to funnel every character (even spaces) into an array, just use an empty string as a delimiter

```js
let str= "SERR PBQR PNZC"
str.split("");  //OUTPUT: [ "S", "E", "R", "R", " ", "P", "!", "B", "Q", "R" ]
```



### QUICK REFERENCE

#### Common String Methods

|                              | effect                                                       |
| ---------------------------- | ------------------------------------------------------------ |
| `strName.indexOf("a")`       | get the first position of a char/word in the string          |
| `strName.lastIndexOf("a")`   | get the last position of a char/word in the string           |
| `strName.slice(start,end)` ◐ | extracts parts of a string<br />starts slice at index 4, ends at index 8 |
| `strName.toLowerCase()`      | converts letters to lowercase<br />does not require arguments |
| `strName.toUpperCase()`      | converts letters to uppercase<br />does not require arguments |



#### Methods for Removing White Space

What counts as white space: Space, tab, non-breaking space, LF, CR

```JS
let nbsp= '\U00A0';		let cr= '\u000D'
let lf= '\u000A';		let tab= '\t'
// i believe this is unicode
```

|                       | effect                                       |
| --------------------- | -------------------------------------------- |
| `strName.trim()`      | removes white space fr/ both sides           |
| `strName.trimStart()` | removes white space fr/ start side of string |
| `strName.trimEnd()`   | removes white space from end side of string  |



#### Methods for Replacing String Portions 

These replace methods are case sensitive:

| Ⓝ                                            | effect                                                     |
| -------------------------------------------- | ---------------------------------------------------------- |
| `strName.replace(toReplace, replacement)`    | replaces the first instance <br />of the to-Replace string |
| `strName.replaceAll(toReplace, replacement)` | replaces all instances of<br />the to-replace string       |

This method is fairly new, making the support iffy at a mere 85.62%
There's a way to do this using regex (see lesson)



#### Methods for Returning Booleans fr/ Strings

|                             | returns true if...                               |
| --------------------------- | ------------------------------------------------ |
| `strName.startsWith("air")` | `strName` starts with the argument string        |
| `strName.endsWith("air")`   | `strName` ends with the argument string          |
| `strName.includes("air")`   | `strName` includes the argument string somewhere |



#### Splitting, Joining, and Repeating

|                      | effect                                                       |
| -------------------- | ------------------------------------------------------------ |
| `strName.split(" ")` | splits up a string using the arg<br />places individual sub strings ordered in an array |
| `arrName.join(" ")`  | takes an array of strings and joins them together<br />separates each individual entry with the divider argument |
| `strName.repeat(5)`  | repeats a string the amount of times the argument says       |

REVERSING A STRING:

```js
const flipString= function(str){
  return str.split('').reverse().join("")
} // copy paste this
```

Why this is relevant:

- We used a split method with an empty string- which lets us catch all characters for our array, even the spaces

  

- We use the join method with an empty string as well. 

- Normally you form a string by separating array values from each other with a space/symbol. If you give join() no argument, it defaults to adding commas

- We can eliminate this default behavior with an empty string argument

```JS
let test= "123 45 678"
let a= test.split('').reverse().join("") // eliminates default behaviour from join()
let b= test.split('').reverse().join()

console.log(a) // looks good! SOLUTION
console.log(b); // is not a perfect reversed string
```

![image-20210321191952066](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210321191952066.png)

#### Padding Out Strings

> `strName.padStart(length, "filler")`
> `strName.padEnd(length, "filler")`

Force your string to be the length specified in the argument by adding filler characters containing the symbol you specify in argument 2



# Advanced String Methods **✓**

Always remember that applying a method to a string will not change the original string- it's immutable. Feel free to assign the method output to a new variable and use that

WHAT WE COVERED:

The string methods we didn't cover in this chapter all have to deal with Unicode UTF-16 code units. If you suddenly care about those 2 topics, go here to see what we've skipped:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll

### Reversing a String

JS does not actually have a built in reverse string function, so we'll have to come up with some copy paste ways to do it manually

OPTION 1: Backwards looping

```js
function reverseString(str) {
  let rvs=""
  for(let i=str.length-1; i>-1;i--) rvs+= str[i]
  return rvs
}
console.log(reverseString("12345"));  //OUTPUT:54321
```

OPTION 2: Use built-in String Methods

Split up your string using an empty string as a divider- it'll capture the spaces
The split function creates an array, which you can use the reverse() method on
Use the join function to spit a string back out- just use an empty string connector

```js
function reverseStr(str){
	return str.split('').reverse().join("")
}
```



```JS
let test= "123 45 678"
let a= test.split('').reverse().join("") // eliminates default behaviour from join()
let b= test.split('').reverse().join()

console.log(a) // looks good!
console.log(b); // is not a perfect reversed string
```

![image-20210321191952066](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210321191952066.png)

### substring()

```js
//SYNTAX
str.substring(indexStart, optionalIndexEnd)
```

- Creates a new string by slicing off a chunk of an existing one- just like slice()
  Operates based on the index number parameters you feed it  ◐
- The second parameter is optional
  When not specified, the substring takes every last character after the start it can
- Negative numbers don't count backwards from the end like you've seen with slice
  Don't bother using them- even if they won't throw errors at you

EXAMPLE:

```js
const str = 'Mozilla';

console.log(str.substring(1, 4)); // use index numbers 1,2,3 but not 4 ◐
// expected output: "ozi"

console.log(str.substring(2)); // uses indexes 2 and beyond
// expected output: "zilla"
```



### startsWith()

```js
//syntax
str.startsWith(searchString, optionalPosition)
```

- The **`startsWith()`** method determines whether a string begins with the characters of a specified string, returning a Boolean as appropriate. 
- You can offset where you want to start counting from with the optional position argument, which defaults to 0 when not specified
- This method is case sensitive and the arguments are based on index numbers- not IRL sequential

EXAMPLE:

```JS
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// expected output: true

console.log(str1.startsWith('Sat', 1));
// expected output: false

console.log(str1.startsWith('a', 2));
// expected output: false
```



### endsWith()

- Checks if the last character in your string matches the argument you feed and returns a Boolean
- You can exclude some letters from your scan- that's the 2nd optional argument

For example, if a string is 19 characters long, and your 2nd parameter is 18...it'll scan every character except the last one. This argument works in the sequential IRL  sense, not with index numbers

EXAMPLE:

```js
const str1 = 'Cats are the best';
console.log(str1.endsWith('best'));
// expected output: TRUE

const str2 = 'Is this a question?'; // string is 19 chars long
console.log(str2.endsWith('?',18)); // stops at the 18th character. index 17
// expected output: FALSE
```

If you dislike thinking, use an expression like this:

```js
const str2 = 'Is this a question?'; // this string is 19 chars long
console.log(str2.endsWith('o',str2.length-2)); // ignores last 2 characters
// expected output: TRUE
```



### charAt()

```js
//SYNTAX
let character = str.charAt(index)
```

Creates a new string using a single character. The method accepts a numeric input which'll equal the index number of an existing string you're using the method on.

EXAMPLE:

We use an expression to specify the index number for the second last character

```JS
const myString = 'Every green bus drives fast.';

// Using length property and charAt() method
const lengthWay = myString.charAt(myString.length-2); //picks second last character
console.log(lengthWay); // Logs: 't'
```

It's the same thing as...

```js
console.log(myString[myString.length-2]); 
```

### Making Things Case Insensitive

There are certain ways to make string methods case insensitive without relying on regex. However there is an easy trick you can you use: Change everything you're comparing to lower case.

#### Example: FCC Algorithm Challenge

![image-20210325093634660](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210325093634660.png)

TLDR: 
Take each letter in word 2 of your argument array. 
If every one of those letters is in word 1, return true. Otherwise, return false
This needs to be case insensitive

`myFunction(["hello","Hlo])` should equal true

SOLN:

```js
function mutation(arr) {
  let [firstW, secondW] = arr;
  let w1= firstW.toLowerCase(); 
  let w2= secondW.toLowerCase(); // make this case insensitive
  let secondArr = w2.split(""); // split up word 2
  let emptyArr = [];
  for (let letter of secondArr) {
    // check if each letter is in word 1
    let contains = w1.includes(letter);
    emptyArr.push(contains); //push results in empty arg
  }
  console.log(emptyArr); //$ helper
  let a = emptyArr.includes(false) ? false : true; 
  // if there's even one missmatch, the result is false
  console.log(a); //$ helper
  return a;
}

mutation(["hello", "Hel"]);
```



# Regex Fundamentals Part 1

Reference documents for Regex:
[JavaScript RegExp Reference (w3schools.com)](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)
https://www.regular-expressions.info/refcapture.html

PLAYLIST:
 [(6) 2.1: Introduction to Regular Expressions - Programming with Text - YouTube](https://www.youtube.com/watch?v=7DG3kCDx53c&list=PLRqwX-V7Uu6YEypLuls7iidwHMdCM6o2w)



### What RegEx is

Regular expressions are extremely important for enforcing certain rules on what user inputs are allowed to be. Here are some use cases:

- "this is an invalid email", "please correct the information in his field", or "this password needs 1 symbol, 1 capital...etc"
- We specify a pattern that we want the information in a field to conform to

They are pretty much essential for forms: ![image-20210310204628897](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210310204628897.png)

#### Regex websites

These sites are helpful tools for you to test your regex syntax. 

- You can take expressions and see what strings pass/fail the conditions you set up
- There are plenty more features included that let you perform all kinds of operations quickly without having to set up a proper code environment first
- For example, if you want to test regex expressions for a form field, you can skip designing the form field first in HTML

![image-20210310211011278](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210310211011278.png)

2 popular choices: https://regex101.com/ 	&& 	https://regexr.com/

#### Setup

We're going to start off by using regex101
1)  Make ECMAScript your "flavor" in the settings
2)  Deselect "global" after hitting the "set regex options" button highlighted red
	Will reenable later

![image-20210310212241917](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210310212241917.png)

![image-20210310212047971](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210310212047971.png)



### Simple Patterns

#### Replicating CTRL F

1)

```js
/taka/mg	// Flags enabled: Global, multiline (mg)
```

![image-20210310214744214](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210310214744214.png)

- We're looking for the string, "taka", and the site highlights every instance of it in the "test string" section- even if "taka" is not the entire word
- The search is case sensitive, which is why the last line is not highlighted

2)

```js
/taka/m		// Flags enabled: multiline (at the end we have m, instead of mg)
```

![image-20210310214715455](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210310214715455.png)

- When the global flag is disabled, the site only looks for the first instance of "taka"
- Many things change depending on what flags are active

3) 

```js
/taka/mgi	// Flags enabled: Multiline, global, insenstive
```

![image-20210310215056064](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210310215056064.png)

- We have the insensitive flag enabled, making the search case insensitive
- Taka is now considered equal to the same word starting with a lower case

#### Flag Effects

It is possible to use a regex expression with no flags, for the record

Flag Options: ![image-20210310215311502](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210310215311502.png) ![image-20210310215323482](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210310215323482.png)

GLOBAL: When enabled, this makes your searches look for every instance of your conditions being met, not just the first

INSENSITIVE: Disables the default case-sensitive nature of our search, making "apple=APPLe" in the site's eyes

### Brackets

|                    | effect                                                       |
| ------------------ | ------------------------------------------------------------ |
| `[xyz]`            | must match any of the individual letters x y or z            |
| `(sl)`             | must contain the string "sl"                                 |
| `(x|y)`            | match either x or y <br />can use more than 2 options: (x\|y\|z) |
| `[^xyz] and (^sl)` | The "must not contain" variations of the above 2             |



#### Character Sets

1) Standalone character sets

```js
/[abcdefg]/g
```

![image-20210310220331015](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210310220331015.png)

Searches for every instance of [a,b,c,d,e,f,g] appearing in a string

2) Character sets with other letters that follow

```js
/[gm]ay/gi
```

![image-20210310220940283](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210310220940283.png)

We looked for any strings that end in "ay" but are preceded by "g" or "m"



```js
/[pl]ay/gi
```

![image-20210310221953816](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210310221953816.png)

- We directly targeted "play" by specifying that "ay" must come after "p" or "l"
- This can happen anywhere in the string- we aren't limited to having "p" or "l" as the first letter (see childsplay)
- Play only gets highlighted partially, because it's immediately preceded by an "l"
- If we want to highlight the whole word, we'll have to learn how to tell the site to consider words that lead with "pl" before "ay"

We can use what we call "capturing groups"- a compact string placed within brackets

```js
/(pl)ay/g
```

![image-20210311035520306](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210311035520306.png)

#### Exclude Sets

These work similarly to character sets, but reversed. 

- We specify the characters we DON'T want to appear in certain positions. 
- If any other symbol appears in that spot in a string, it's considered a match and gets highlighted

1)  

```JS
/[^89]000/gi
```

![image-20210310223014273](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210310223014273.png)

WANT: `[anything but 8 or 9]    followed_by    000`

- 95000 and 22000 only gets partially highlighted because we're only concerning ourselves with 1 character before the 000

2)

```js
/[^92][^89]000/gi
```

![image-20210310223643684](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210310223643684.png)

![image-20210310223830151](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210310223830151.png)

- 946 million and 146000 get partially highlighted because it does contain the expression we're scanning for, even if it has extra characters
- 2000 is fully highlighted because it passes the [not 8 or 9] rule
  It also has no character before 2, so it can't disobey the [not 9 or 2] rule
- If even 1 of the conditions is violated, the whole string is DQ'd. 
  22000 only disobeyed the [not 9 or 2] rule, yet it is not highlighted anywhere



### Ranges

|            | effect                      |
| ---------- | --------------------------- |
| `[a-z]`  ⦵ | include all letters fr/ a-z |
| `[^a-d]` ⦵ | exclude all letters fr/ a-d |

Let's say you want to match with every single letter in the alphabet, followed by 000
What our regex would look like without ranges:

```
/[abcdefghijklmnopqrstuvwxyz]000/gi		(not the best option)
/[a-z]000/gi 							(uses a range)
```

This is pretty cringe to look at or type, which is why ranges exist

#### Letter Ranges

1) Set a letter range excluding letters a and b

```
/[c-z]000/gi
OR...
/[^a-b]000/g
```

![image-20210311015747558](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210311015747558.png)

2) Set 2 ranges this time. A-Z uppercase and a-z lowercase

```js
/[A-Za-z]000/g
```

![image-20210311020322457](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210311020322457.png)

#### Number Ranges

1)

```js
/UR[5-9][0-9]/g
```

![image-20210311021517260](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210311021517260.png)

2) Create an expression for a 10 digit cellphone number

```js
/[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/g
```

![image-20210311023002217](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210311023002217.png)

This works, but it's still very repetitive. 
There's a better way to do this, with repeating characters





### Repeating Characters

QUANTIFIERS TABLE:

|            | effect             |
| ---------- | ------------------ |
| `+`        | One or more        |
| `{3}`      | exactly 3 times    |
| `{3,}`   ⦵ | 3 or more times    |
| `{3-8}`  ⦵ | 3 to 8 times       |
| `a*`       | zero or more times |
| `a?`       | Once or none       |

1) Create an expression for a 10 digit cellphone number again, but in a concise manner
Use the exactly X times quantifier

```js
/[0-9]{10}/g
```

![image-20210311022956874](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210311022956874.png)

- The string must be 10 characters long to be accepted
- If it's longer, it gets highlighted partially for the first 10 digits

2) Use the once or more quantifier

```JS
/[0-9]+/g
```

![image-20210311025126351](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210311025126351.png)

3) Use the X times or more quantifier

```js
/[0-9][4]{2,}/g
```

![image-20210311032838746](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210311032838746.png)

- When we have more than 2 fours, it'll capture them all
  Along with everything else that helps the string meet our conditions
- As usual, anything extra that does not not adhere to the conditions leads to a partial highlight (144lopunny)

4) Use the zero or more operator
5) Use the zero or once operator

```
/(j*)ay/g	(left)
/(j?)ay/g	(right)
```

![image-20210311040208367](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210311040208367.png) ![image-20210311040318364](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210311040318364.png)

- `*` highlights all the j's, if there is any
- `?` highlights 1 "j", if there is one
  If there's extra, they aren't highlighted

### Metacharacters

MOST COMMON METACHARACTERS

Remember that anti-metacharacters use capital letters instead
\D matches with everything but digits 0-9 

|      | effect                                                       |
| ---- | ------------------------------------------------------------ |
| `\d` | matches any digit character (same as [0-9])                  |
| `\w` | matches any word character (a-z,A-Z,0-9, and _ )             |
| `\s` | matches a whitespace character (spaces, tabs...etc)<br />equivalent to [\r\t\f\n\v] |
| `\t` | matches tab character only                                   |
| `\b` | only allows matches with an entire word<br />`\bAnna\b` will not partially match with Hanna for example.<br /> Match the full word "Anna" or match nothing at all |

The `\` is what escapes the normal behaviour of these common letters and turns them into metacharacters with special abilities

> d			matches any literal character "d"
> \d		   matches any digit character

Demonstrations:

```
/\d/g
/\w/g
/\s/g
/\t/g
```

![image-20210311055855581](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210311055855581.png) ![image-20210311055924147](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210311055924147.png) ![image-20210311060007378](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210311060007378.png) ![image-20210311060113539](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210311060113539.png)

1) Search for a string with a number (less than 5 long), a space, then a letter beginning. Ex. 89 Southern Lake Drive

```
/\d{1,4}\s\w/g
/\d{1,4}\s\w+/g
```

![image-20210311061202194](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210311061202194.png) ![image-20210311061226771](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210311061226771.png)

Line 3 is DQ'd for having too many spaces. \s only calls for one- though we could specify that more are allowed if we wanted to

#### \b Beginning and End of a Word

This is useful when you're searching to match an entire word only. 

Regex will refuse to partially match with things when a word is surrounded by \b on both sides:

Without \b:   ![image-20210318065527743](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318065527743.png)

With \b:	  ![image-20210318065409704](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318065409704.png)



#### Other Metacharacters

![image-20210311055639240](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210311055639240.png)





### Special Chars Part 1

TABLE OF SPECIAL CHARACTERS

| quantifier | name                                 | effect                                                       |
| ---------- | ------------------------------------ | ------------------------------------------------------------ |
| +          | 1-or-more                            | highlights the letter(s) before it, even if it shows up multiple times |
| \          | escape character                     | Enables metacharacters if followed by the right letters chosen to have special abilities |
| []         | character set                        | Tells browser to match any individual characters inside the brackets at the position it's placed in |
| [^]        | negate character set                 | Matches anything except the characters that come after it    |
| (peach)    | group set                            | tells browser to match the full string "peach" in any strings it's examining |
| \|         | match either                         | matches one thing beside \| or the other<br />can be used with 3 or more options |
|            |                                      | WHAT'S NEW-----------------------------------                |
| ?          | 0-or-1                               | Makes a character or set before the "?" optional. Can appear once, or not at all |
| *          | 0-or-more                            | Makes the character before it optional, like w/ "?" Difference is, it can appear any amount of times or not at all |
| .          | any character aside fr/newline enter | matches anything aside from the enter key being pressed to start a new line |

1) 0-or-1	VS 	0-or-more

```
/h?at/g		// ? effect: h can show up 0 or 1 times 
/h*at/g		// * effect: h can show up 0 to infinity times
```

![image-20210312222159900](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210312222159900.png)	![image-20210312222215143](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210312222215143.png)

If the letter ? or * is targeting does not show up, a different letter taking its place will not be highlighted:

![image-20210318084836491](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318084836491.png) ![image-20210318084907692](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318084907692.png)

2) Any character but newline

```
/.at/g			// any character must come before "at"
```

![image-20210312214937943](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210312214937943.png)

- 'at' is DQ'd because nothing comes before 'at'

If you want to check for a string containing any characters with no length limit, use this: `.+`

3) Match using the or operator

```js
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString); //true
```



#### Scanning for Special Chars w/out extra Effects

Use the backslash symbol to search for special characters without triggering their abilities:

```
1\+1	// with \, it searches for 1+1
1+1		// without \, it allows for 111111111111
```

![image-20210312220440883](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210312220440883.png) ![image-20210312220459680](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210312220459680.png)



#### Special Chars Invalidated Inside []

- If you place `?,*, or .` inside of [], the browser will look for their actual chars. 
- Their effects won't work like how it would with a metacharacter

`/[.s]at/g` does not look for (any character => s) before "at", it looks for ".sat"
Instead, use ranges or metacharacters. `[\w]sat` or `[a-z]sat` or even `.sat`

```
/[.l]ouse/g		
/.louse/g
/[a-z]louse/g
/[\w]louse/g
```

FIRST LINE: ![image-20210312223020963](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210312223020963.png)  SECOND LINE: ![image-20210312223100809](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210312223100809.png)

THIRD AND FOURTH LINE: ![image-20210312223439973](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210312223439973.png)



### Special Chars Part 2: Start/End Patterns

#### The Problem they Solve

By now I'm sure you've noticed an issue with the way you scan for words. Look at this example where we look for the word "apple":

```
/(apple)/g
```

![image-20210312224634219](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210312224634219.png)

The browser will accept any string with "apple" inside, even if it contains tons of extra characters. It would be problematic if email forms accepted inputs like this: 

```
0389389839u3eud8normanHue@hotmail.comjdjijfcifsdkifjisj
```

Start and end characters remedy this problem by letting you specify when something should be at the start and/or end of the string

#### How they Work

|      | name          | effect                                                       |
| ---- | ------------- | ------------------------------------------------------------ |
| ^    | start pattern | makes it so the character/set that follows must be at the START of the string, or else nothing gets highlighted |
| $    | end pattern   | makes it so the character/set that came before must be at the END of the string, or else nothing gets highlighted |

START PATTERN DEMO, END PATTERN DEMO:


```
/^abcd/gm			OR ALTERNATIVELY....		/^(abcd)/gm

/dom$/gm			OR ALTERNATIVELY....		/(dom)$/gm
```

![image-20210313004913342](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210313004913342.png) ![image-20210313005405681](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210313005405681.png)

- "abcd" must be the start of the new string
- "dom" must be at the end of the new string

TESTING THESE PROPERLY:

1. Keep in mind that you can't test multiple strings on one line like we've been doing until now to conserve space. These test for the start and ends of strings
2. Enable the multiline flag, or else strings that meet the standards you set won't be highlighted unless they're the very first one one the test string field

```
/^(apple)/gi
```

![image-20210312225754233](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210312225754233.png)

You might be wondering, why aren't `appletree` and `appleZZZ` highlighted? 

A) They're part of strings that don't begin with them

B) Even if each word did have its own dedicated line, multistring is not enabled. Everything in the field would be considered a single multiline string

SOLN:

```
/^apple/gim		
```

Multistring flag's enabled, and the words have their own dedicated lines/strings now

![image-20210313010035011](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210313010035011.png)

#### Using Start/End at the Same Time

Basically says, this needs to be the start and end of the word- the entire string must be foreshadowed in the expression

EXAMPLE: 
Let's try to get our customers to make a username. 
They're allowed exactly 5 letters, then exactly 3 numbers
We're going to test variations on the valid answer: mikey619

```
/[a-zA-Z]{5}[\d]{3}/gm			// no start or end

/^[a-zA-Z]{5}[\d]{3}/gm			// start only

/[a-zA-Z]{5}[\d]{3}$/gm			// end only

/^[a-zA-Z]{5}[\d]{3}$/gm		// both
```

no start or end: ![image-20210313012013859](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210313012013859.png) 	start only: ![image-20210313012033536](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210313012033536.png)

end only:        ![image-20210313012104330](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210313012104330.png) 		both:   ![image-20210313012137483](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210313012137483.png)

In all cases, the browser scans for 5 letters followed by 3 numbers
What other stipulations does it have when we include these symbols?

|                 | extra requirements                                      |
| --------------- | ------------------------------------------------------- |
| no start or end | None. Anything can come before or after that            |
| start only `^`  | String must begin with 5 letters                        |
| end only `$`    | String must end with 3 numbers                          |
| both `^ ~~ $`   | String must begin with 5 letters AND end with 3 numbers |

Remember, the start and end symbols only affect the character nearest to them
^ does not affect the 3 numbers, while $ does not care about the 5 letters

### Scanning for Special Characters

Certain characters in regex work differently than others. For example, if you included a "+" symbol in your expression, the browser would not search for that symbol- it's the one or more operator with its own special action

They work normally when inside a character set however. Watch:

EXAMPLE 1:

Error w/ `\`: ![image-20210316181957981](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210316181957981.png) Corrected:![image-20210316181823921](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210316181823921.png)

- The only character we had to make arrangements for was `\`
- Without `\\`, it would just escape the next character and would not look for backslashes in our string (left photo shows what would happen if I made this mistake)

EXAMPLE 2:

If you want to search for a space, just add a space in your character set, there's no need to add quotation marks. () and " are searched individually as well

![image-20210316200335290](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210316200335290.png)



### Alternate Characters

The | symbol lets you choose between 2 or more alternate choices for what you want parts of your string to be

- It's easier to understand alternate solutions when you wrap your | statement in () brackets

- You can choose between individual letters, words, and even multiple words in sequence

EXAMPLE:

```
/^(hyper|over) drive$/gim		//works as expected with ()

/^hyper|over drive$/gim			// works strangely without them
```

![image-20210313014248675](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210313014248675.png) ![image-20210313015524325](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210313015524325.png)



#### Matching b/t More than 2 Options

```
/(limited edition|regular build|luxury model) Rav4/gim
```

`Rav5` and `Rav (spce) 4` are invalid: ![image-20210313014848255](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210313014848255.png)

# Regex Fundamentals Part 2

### Greedy Expressions

By default, regex expressions are greedy. Assuming your expression matches a string, every part of a regex line will attempt to match with as many characters as it can- as long as the rest of the line is satisfied.

Reminder: ![image-20210318090649952](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318090649952.png)

![image-20210318091519187](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318091519187.png)

#### Example 1

![image-20210318090333594](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318090333594.png)

Regex: Digits of any length, word character, digits of any length
By following this description, regex can match...
`01_FY_07` or it can match `01_FY_07_report_99`

This is because all characters highlighted red in possibility 2 count as \w

By default, regex will always try to match as much as it can (hence, greed)
So, expect possibility 2 to be what we get back as a match

#### Example 2

![image-20210318091641955](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318091641955.png)

This phenomenon can be tough to notice when you're trying to match an entire string, and not just part of it

How would I know just by looking?  ![image-20210318091802036](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318091802036.png) 

Fortunately for us, we know that this is just the default way regex acts, unless we deliberately make it lazy instead.

### Lazy Expressions

Lazy behaviour: 
Match as little as possible before giving control to the next expression part 
Must still abide by the regex statement and match if possible

- We activate this by using the metacharacter `?`, which we've used previously as a quantifier (0 or 1, optional)

- We can use `?` in a different context- right after another quantifier
  This instructs it to be lazy instead of greedy 

![image-20210318095830609](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318095830609.png) ![image-20210318095842732](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318095842732.png)

#### Example

- When the anything-dot and the 0-9 are both lazy, they both return as little as possible
- Anything-dot takes `Page space `, up until 266 (has to take it all to match properly)
  0-9 takes character 2 only. Because + only demands a single character or more. 

![image-20210318100339368](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318100339368.png)

- If we let anything-dot be greedy again, it'll highlight the entire string. 
- The anything-dot will take as much as it possibly can (everything)
- It allows [0-9] to be lazy and take as little as it wants as long as the string still matches. In this case, [0-9] takes nothing

![image-20210318101023395](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318101023395.png)

### Positive and Negative Lookahead

Lookaheads will match something AS long as what you specify in brackets does/doesn't show up afterwards. 

- Let's refer to what we specify in brackets as the deal breaker
- The deal breaker will not be highlighted or matched with
  It simply determines if what we affect with our lookahead will be

#### Negative Lookahead

```
include this in your regex: 	2match(?!dealbreaker)/
```

Negative lookahead makes it so you only match something IF it is NOT followed by what you specify in brackets

EXAMPLE 1: Only match a 3-4 digit number IF it's NOT followed by a space then USD

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318215149504.png" alt="image-20210318215149504"  /> add \b: ![image-20210318214817522](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318214817522.png)

- Our lookahead is affecting \b[\d]{3,4}\b - it will or won't be highlighted depending on the deal breaker
- Added \b to ensure we don't get any partial matches on the numbers (like on line 3)

EXAMPLE 2: Only match a 3-4 digit number if it's NOT followed by CAD or yen

![image-20210318215902340](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318215902340.png)

- Only matches one of our strings, even though you'd think that it'd match the third
- The word boundary operators is what causes this non-match

#### Positive Lookahead

```
include this in your regex: 	2match(?=dealbreaker)/
```

Positive lookahead only lets you match something of what is specified in brackets DOES come afterwards

EXAMPLE 1: Only match with a website's name if it ends includes .com or .ca

![image-20210318221800727](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318221800727.png)

### Lookaheads for Complex Testing

You don't need to attach your deal breaker to something in regex, it can just be the entire statement. Look at this:

EXAMPLE: 
Choose a password that contains 3-6 alphanumeric characters
Must contain at least 1 number, and at least 1 letter

```js
let regex10= /^(?=\w{3,6})(?=\D*\d)(?=[^a-z]*[a-z])$/i
let falsePasswords = ["56753", "aaaa", "1234abcde"]; // should return false
let corrPasswords = ["abc123", "1av3bc", "1111c", "oooo9"]; //should return true

for (let el of falsePasswords) console.log(regex10.test(el));
for (let el of corrPasswords) console.log(regex10.test(el));
```

![image-20210318235941456](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318235941456.png)

- We can't know ahead of time whether someone's password will have a number first or not, so the only solution we'd know of before this lesson would be to involve OR expressions-probably several of them
- This makes regex extremely hard to read, but lookaheads help fix this issue

#### Syntax Explanation

```
/^(?=\w{3,6})(?=\D*\d)(?=[^a-z]*[a-z])$/i
```

`(?=\w{3,6})` : 
Makes it so the string must contain 3-6 alphanumeric characters

`(?=\D*\d)` : 
Makes it so the string must contain at least 1 letter
Requirement explanation- a non digit (0-or-more) must be followed by a digit

`(?=[^a-z]*[a-z])` : 
Makes it so the string must contain at least 1 letter
Requirement explanation- a non letter (0-or-more) must be followed by a letter

The last 2 statements make it so the string MUST include at least 1 digit and at least 1 number somewhere

This technique is not usable in the regexr website- trying to do so will get you a warning. It's meant to be used with the test method to see if the string you supply it abides by the rules you set

#### FCC Challenge: Test for valid passwords

REQUIREMENTS: 

1. Password must have 2 digits in a row, it being the same number does not matter

2. Must contain 1 letter minimum, and 1 digit minimum

3. Must be 5 characters or longer

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210319003620181.png" alt="image-20210319003620181" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210319003637018.png" alt="image-20210319003637018" style="zoom:80%;" />

SOLUTION:

```js
let regex10 = /(?=\w{5,})(?=\D*\d\d)(?=[^a-z]*[a-z])/i;
let falsePasswords = ["astronaut", "banan1", "12345", "1a2bcde"]; 
let corrPasswords = ["bana12", "abc123", "8pass99", "astr1on11aut"];

for (let el of falsePasswords) console.log(regex10.test(el));
for (let el of corrPasswords) console.log(regex10.test(el));
```

![image-20210319003719830](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210319003719830.png)

`(?=\w{5,})` : 
makes it so string must be 5 letters or longer

`(?=\D*\d\d)`: 
Makes it so the string must have 2 consecutive numbers somewhere
Requirement explanation- a non number(0-or-more) must be followed by 2 numbers

`(?=[^a-z]*[a-z])`
Makes it so the string must have 1 letter somewhere
Requirement explanation- a non letter(0-or-more) must be followed by a letter

### Tips and Advice

- Don't forget to include ^ and $ to tell your regex statement when your string should end- that's the most common mistake

#### RegExr Website

- It's okay to not understand regex fully- oftentimes you can trial and error your way to a good solution using regexr.com 
- Read the tooltips below the string field to see what your regex is scanning for
  Oftentimes you'll notice things like \1 aren't working properly due to the location
  (\1) is a back reference for example, while \1 just searches for the number one
- Use the testS option to test multiple strings at once without needing to use multiline
- This site is not meant for when you're trying to emulate using the test() method
  See the Lookaheads lesson for testing if you want to do that



# Regex Methods

### new String()

We've been declaring strings using simple variables this entire time, but there is another way

Variable Strings

```js
let strin= "Hello new world" // regular string variable
console.log(strin);
console.log(strin[1]);
```

![image-20210315124153669](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210315124153669.png)

New Strings

```js
let str= new String("Hi there friendo") // string stored as an index 0 "array-like object"
console.log(str);
console.log(str[1]); 
```

![image-20210315124436420](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210315124436420.png) ![image-20210315124453034](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210315124453034.png)

As you can see, either method allows you to access different characters in a string using index numbers

### test/match/search

These are two JS methods commonly used on strings when dealing with regex

|          | use method on the.. | Argument is the...  | output if regex is satisfied                                 | output if regex is not satisfied |
| -------- | ------------------- | ------------------- | ------------------------------------------------------------ | -------------------------------- |
| test()   | regular expression  | string being tested | true                                                         | false                            |
| match()  | string being tested | regular expression  | strange array containing what's matched<br />can access index where match is satisfied with test().index | null                             |
| search() | string being tested | regular expression  | index where regex is satisfied                               | -1                               |

Use search() if there's a possibility that your regex test may fail. 
match().index would be turned into null, index in that case, leading to an error

#### test Method

Tells us if a string we place as an argument abides by our regular expression's conditions. Returns a Boolean 

```js
let regExpr= /\d{3}/
regExpr.test("004abc")	// OUTPUT: true (b/c it contains 3 digits)
```

#### match Method

Returns the first occurrence of the digit we're looking for when you use match().index
Otherwise, it returns an array with mostly pointless info (fr/ the looks of it)

```js
let str= new String("aaaa905bbbb") 
console.log(str.match(/905/));
console.log(str.match(/905/).index); //access the index number where it first appears
```

![image-20210315130254672](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210315130254672.png)

If it can't find what the regex asks it to
match() returns "null"
match().index returns an error

#### search Method

This method can also give us back the index where our regex line is satisfied
Before, you needed match().index for that, but now search() is enough on its own

```js
let a= "jfk2020l9n"
let res1= a.match(/2020/)
let res2= a.search(/2020/)

console.log(res1);
console.log(res2);
```

![image-20210315130934480](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210315130934480.png)

Another difference between search() and match is what they return if the regex is not satisfied anywhere in the string

```js
let a= "jfk2020l9n"
let res1= a.match(/20XX/)
let res2= a.search(/20XX/)

console.log(res1); 		//OUTPUT from match(): null
console.log(res2); 		//OUTPUT from search(): -1
```

### split() to Split Strings

This method works with or without regex- the non-regex version is explained in an earlier chapter

```js
str.split([separator[, limit]])	// non-regex split method
```

- Instead of placing a separator in the arguments location, place a regex line. 
- Anything satisfying it will act as a separator. 
  As a bonus, you can offer it multiple options using character classes []
- The perk described above is what makes this method more versatile than the split method without regex

```js
let date1 = "2021-03-16";	let date2 = "2021/03/16";	let date3 = "2021.03.16";
console.log(date1.split(/[-/.]/)); 
console.log(date2.split(/[-/.]/)); 
console.log(date3.split(/[-/.]/)); 
```

![image-20210316174855312](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210316174855312.png)

We split the string using dashes, periods, and forward slashes

#### Splitting Complicated Text

You may encounter a scenario where you have a paragraph filled with all sorts of punctuation marks, symbols, or a number of other unpredictable things.

-  Use anything that could possibly be a cause to cut up a string
- In cases where you have multiple potential separators in a row, you may be left with some unwanted array entries. Filter them out if needed

EXAMPLE:

```js
let para = `"Explain to me again why I shouldn't cheat?" he asked. "All the others do and nobody ever gets punished for doing so. I should go about being happy losing to cheaters because I know that I don't? That's what you're telling me?"`;

let regex= /[,.!?\s"]/ // most of the regular english punctuation marks
let words= para.split(regex)
console.log(words); // we still have some empty spaces in our array entries

let a= words.filter((value)=>{
  return value != ""	//filter the empty spaces out
})
console.log(a);
```

​							![image-20210316210700980](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210316210700980.png)	![image-20210316210731404](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210316210731404.png)

### exec() to Split Strings

Turning strings into arrays is typically done by using the split() method, which is very simple. You can also do it with regex using the exec method

WARNING: The exec method only captures data contained in () brackets

- If you don't use them, this won't work properly
- Also, know that anything inside () will be captured

EXAMPLE: Split up the date given to us from an external source

You're not sure what the date numbers will be separated by, but you know it'll be YYYY MM DD. You may receive...2021-03-16, 2021/03/16, 2021.03.16, 2021 03 16

```js
let date1= '2021-03-16'
let regex= /^[\d]{4}[-/." "][\d]{2}[-/." "][\d]{2}$/ //tested on regexr (works)
```

Captures nothing: ![image-20210316172259826](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210316172259826.png)

In the above example, we didn't use capturing groups, so the exec method didn't accomplish anything. Let's try again

```js
let date1= '2021-03-16';
let reg = /^([\d]{4})[-/." "]([\d]{2})[-/." "]([\d]{2})$/
console.log(reg.exec(date1));
```

![image-20210316172238658](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210316172238658.png)

Success! It created an array with the original input, plus the 3 substrings exec cut up. Ignore the extra stuff on the side, it's not officially part of the array



### replace() with regex Ⓝ

This method can be used with regex or without, but when we're using regex, we have the freedom to perform more complex operations

```js
str.replace("to replace", "replacement-string")	// non regex syntax

str.replace(/to replace/, "replacement-string") //regex replace version
str.replace(/to replace/g, "replacement-string") //regex replaceAll version
str.replace(/to replace/g, callback functi0n )
```

The regex version just uses an expression in the "to-replace" location
It doesn't work with `replaceAll`, so just use a global flag in your regex instead

#### Simple Examples

EXAMPLE 1: Replace a word or series of words with regex

```js
let str= "Howdy there professor! I am having a good day, but I am not sure it'll last."
str= str.replace(/(Howdy there)/, "Greetings"); // replace "Howdy there"
str= str.replace(/(I am)/g,"I'm") // replace "I am" w/ "I'm"
console.log(str);
```

![image-20210316234836513](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210316234836513.png)

EXAMPLE 2: Replace every 4 or more digit number with "large_sum"

```js
let str= "100, 4, 6000, 90, 49510"
str= str.replace(/(\d){4,}/g, "large_sum") // don't forget the global flag
console.log(str);
```

![image-20210316235937765](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210316235937765.png)

EXAMPLE 3: Every time you find a vowel, double how many times it shows up

```js
let str= "With a super-powered mind & a mechanical canine..."
str= str.replace(/([aeiouy])/g, "$1$1")
console.log(str);
 //OUTPUT: Wiith aa suupeer-pooweereed miind & aa meechaaniicaal caaniinee...
```

Yes, we can access groups we match with and capture in regex. 
Just remember to surround them with parentheses(), or it won't work



#### Passing in a function

Instead of passing in a replacement string, you can actually use a callback function

```js
str.replace("to replace", "callback-function")
```

EXAMPLE 1: Replace certain HTML entities with other values that we specify in an object

```js
let trigObject = { "&": `&amp;`, "<": "&lt;", ">": "&gt;", '"': "&quot;",
                  "'": "&apos;" };
function convertHTML(str) {
  str= str.replace(/[&<>"']/g,(match)=>{ // Ⓝ 
    return trigObject[match] 
    // replace all regex matches with the values in our object
  })
  console.log(str)
  return str
}
convertHTML("Dolce & Gabbana")
convertHTML("Hamburgers < Pizza < Tacos")
convertHTML("Sixty > twelve")
convertHTML('Stuff in "quotation marks"')
convertHTML("Schindler's List")
convertHTML("<>")
convertHTML("abc")
```

![image-20210602000627398](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210602000627398.png)

EXAMPLE 2: Capitalize every 5+ letter word in a string 

Be sure to wrap what you want to capture as a match in parenthesis
In this instance you can skip them, but in others you'll get an undefined match

```js
let str= "The trees, therefore, must be such old and primitive techniques that they thought nothing of them, deeming them so inconsequential that even savages like us would know of them and not be suspicious. At that, they probably didn't have too much time after they detected us orbiting and intending to land. And if that were true, there could be only one place where their civilization was hidden"

str= str.replace(/(\w{5,})/g, (match)=>{
  return match.toUpperCase() // change every 5+ letter word to uppercase
    // WHAT YOU RETURN IS THE CHANGE YOU MAKE TO WHAT'S MATCHED
})
console.log(str);
```

![image-20210317001917660](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210317001917660.png)

#### 'Destructure' your Regex Matches

Last time, we accessed the entire regex match and did something to it. 

- We can "deconstruct" our matches and access different parts of it using ()
  It's not actually destructuring, but it sure works like it
- Each group located inside () will count as a group. We can access those groups individually

So if the entire regex statement matches with a phone number like 804-999-0871
And your regex is structured like this: /(3digits) (3digits 4digits)/ ...

- Group 1 would be 804, and group 2 would be 999-0871

```js
let str= "Alexa's number is 555-901-7944. Tenzin's is 019-766-2126"
str= str.replace(/(\d{3})-(\d{3}-\d{4})/g, (match, group1, group2)=>{
  console.log(match);	// log entire match
  console.log(group1);	// log group 1 of match
  console.log(group2);	// log group 2 of match
    //we didn't return anything in our function this time, which is unusual
    // WHAT YOU RETURN IS THE CHANGE YOU MAKE TO WHAT'S MATCHED
})
```

​				Match 1: ![image-20210317005125444](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210317005125444.png) Match 2:![image-20210317005136909](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210317005136909.png)

#### More Potential Uses

THE IMPLICATIONS ARE HUGE!

- These perks make regex replacing exceptionally powerful. 
- You can do practically anything whenever regex gets a match- API queries, text translations, mixing up words, reversing orders...etc 



### Capturing Groups & Back References

When you surround a part of your regex line in parentheses, it will capture that group
Let's say we have a phone number: 802-616-5359

```js
/\d{3}-(\d{3})-(\d{3})/
```

We surrounded the last two parts specifically so we capture those groups
GROUP 1: 616 (b/c of the parentheses in our regex)
GROUP 2: 5359 (b/c of the parentheses in our regex)

You can refer to captured groups using 1 of 2 back references: 
`$num` : Use when you want to use the replace method
`\num` : When you're in the reg expression and you want to refer to a captured group

#### Using $num when Replacing

Take your phone number and replace everything but the area code with X

```js
let cell= '802-616-5359'
let regex= /(\d{3})-(\d{3})-(\d{4})/g
console.log(cell.replace(regex,'$1-xxx-xxxx')); 
// replace what variable regex matches with:  group1-xxx-xxxx
```

![image-20210318051638716](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318051638716.png)

NESTED CAPTURE GROUPS:

If you surround your entire regex statement in a set of brackets, that will be considered group 1. Anything nested inside will be groups 2,3...etc

```js
let cell= '802-616-5359'
let reg= /((\d{3})-(\d{3})-(\d{4}))/g
console.log(cell.replace(reg,'$3-xxx-xxxx'));
```

GROUP 1: The entire match (since it's all surrounded by brackets)
GROUP 2: 802
GROUP 3: 616
GROUP 4: 5359

You can nested brackets as much as you want, you'll always be able to access what's inside a pair with $num. Just trial and error your way until you find the right group when dealing with more complex examples



#### Alternative Way to Replace w/ $num

EXAMPLE: Take "one two three" and replace it with the string "three two one"

```js
let str = "one two three";
let fixRegex = /^(\w+) (\w+) (\w+)$/; 
let replaceText = str.replace(fixRegex,'$3 $2 $1')
console.log(replaceText);
```

Alt:

```js
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1"; // Store rearranged version in a variable 1st
let result = str.replace(fixRegex, replaceText);
console.log(result);
```



#### RegExp and Replace

When you use the replace method with regex, you get access to a special snippet of code that I admittedly don't fully understand:

```js
RegExp.$1 // access the current first capture group
```

You might be using multiple replace methods with regex, so understand that this references the most recent one only

```js
let cell= '802-616-5359'
let regex= /(\d{3})-(\d{3})-(\d{4})/g
console.log(cell.replace(regex,'$1-xxx-xxxx'));

let cell9= '111-222-3333'
let regex9= /(\d{3})-(\d{3})-(\d{4})/g
console.log(cell9.replace(regex9,'$1-xxx-xxxx'));

console.log(RegExp.$1); // RegExp references the most recent regex replace method
```

![image-20210318052423459](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318052423459.png)

Store the RegExp values in a variable if you want to reuse them without worrying what it'll be referencing

```js
let cell= '802-616-5359'
let reg= /(\d{3})-(\d{3})-(\d{4})/g
console.log(cell.replace(reg,'$1-xxx-xxxx'));
let areaCell= RegExp.$1 // this RegExp is different when positioned here

let cell9= '111-222-3333'
let reg9= /(\d{3})-(\d{3})-(\d{4})/g
console.log(cell9.replace(reg9,'$1-xxx-xxxx'));
let areaCell9= RegExp.$1 // this RegExp is different when positioned here

console.log(areaCell, areaCell9); 
```

![image-20210318053137323](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318053137323.png)

#### Back References

\1 allows you to reuse something regex has captured in the statement itself

example: Catch when a word appears twice in a row within a string

![image-20210318064359213](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318064359213.png)

(\1) tells regex to match whenever a word is followed by a space, then itself again

- A mistake in our code here is that singular letters get matched when they follow each other as well
- Fix this with `\b`

![image-20210318070414822](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318070414822.png)

### CHALLENGE: Telephone Number Validator

DESCRIPTION: 
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

SAVED TESTS ON REGEXR:

- Matches: regexr.com/60qh6
- Rejections: regexr.com/60qh9

```js
function intCheck(str) {
  let splits = str.split("");
  let convertedChars = splits
    .map((el) => {
      return Number.parseInt(el);
    })
    .filter((v) => v > -1).length;
  if (convertedChars >9) return true;
  else return false;
}
function telephoneCheck(strin) {
  // STEP 1. See if the supplied number has 10 digits minimum
  if(!intCheck(strin)) return false
  // STEP 2. See if it begins with "1" or "1 ", then remove either
  let rejects = /^(1 )?(1)?([(][\d]{3}[)])?([\d]{3})?[" "-]?[\d]{3}[" "-]?[\d]{4}$/;
  return rejects.test(strin)
}
```

![image-20210627162458242](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210627162458242.png) ![image-20210627162507289](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210627162507289.png)

![image-20210627162552590](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210627162552590.png) ![image-20210627162616231](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210627162616231.png) ![image-20210627162647130](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210627162647130.png)



# Creating a Form Sheet

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210313020852852.png" alt="image-20210313020852852" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210313020905990.png" alt="image-20210313020905990" style="zoom:80%;" />

- We're making regex expressions to signal when a user's inputs are valid/invalid
- We'll add a green border when the answer is sufficient, and a red border for when it's not



### Creating Regex for Each Field

- Understand that for our crash course, the requirements for each field are pretty simple since we're still learning. 

- IRL, there will be many more rules to implement for each regex. 

- For example, passwords are not allowed to be made with only 1 symbol, mustn't include the word "password", can't contain your username...etc

Research the proper regex lines to use for each scenario. 

- A lot of preparation and teamwork goes into creating ones that abide by all relevant standards. 
- As long as you can somewhat understand/tweak them, that'll be good enough

#### Username

Our username must contain 5-12 characters- numbers or letters

```
/^[\w]{5,12}$/
```

![image-20210313022301281](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210313022301281.png)

We had the global and multiline flags active to test out several strings at the same time. However, they were excluded them from the solution code snippet



#### Password

3. Password must be alphanumeric and 8-20 chars long
   Is allowed to include (@ _ -)

```
/^[@-\w]{8,20}$/
```

Using the "tests" option in regexr: ![image-20210313035242179](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210313035242179.png) ![image-20210313034752653](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210313034752653.png)

Some of our valid strings here would not be good choices for a password

HARDER VERSION: TBD

- Password must be alphanumeric and 8-20 chars long
  Is allowed to include (@ _ -)
- Must contain minimum 5 letters and at least 1 symbol



#### Telephone Number

Telephone number must have 11 digits

```
/^[\d]{11}$/
```

Multiline flag on for this test: ![image-20210313035651388](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210313035651388.png)

HARDER VERSION: TBD

Beginning of the phone number must match the area the user says he/she is from
Requires other website features to work

#### Other

"slug" must be composed of lowercase letters, numbers, and/or hyphens only
Permitted to be 8-20 chars long

```
/^[a-z0-9-]{8,20}$/
```

![image-20210313040536573](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210313040536573.png) ![image-20210313040547855](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210313040547855.png) ![image-20210313040616666](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210313040616666.png)



### Email

Email structure: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210315085607452.png" alt="image-20210315085607452" style="zoom:50%;" />

The 4th part is optional- anyone could have an email that ends in `.com` or `.ca`
However, we prepare for anyone's email that ends in `.co.uk` or something similar

```
/^[\w.-]+@([a-z\d-]{2,20})\.([a-z]{2,8})(\.[a-z]{2,8})?$/i
```

Added rules: 
Part 2 has a min length of 2 and a max length of 20
Part 3/4 has a min length of 2 and a max length of 8
The email is allowed to be case insensitive- this is how emails work IRL anyway

I'm not sure how long extensions for email services are, but I think 8 is well above whatever that number is. .com/.ca are the 2 most popular...so

Tests: ![image-20210315103944102](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210315103944102.png) ![image-20210315104639311](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210315104639311.png)

Tips when writing long regex statements: 

- Separate new segments with parentheses and remember, each one is like its own little regex line

- Feel free to add nested regex statements in brackets
  Ex. The last part `(\.([a-z])+)?` that makes .co.uk a possible email ending

The following is optional thanks to `?`: dots, and 2-8 letters
This is what allows XXXXX@hotmail.com and XXX@hotmail.co.uk to both be accepted

HARDER VERSION: TBD.

This one is by far the toughest, purely because so many email providers exist

- They each might have different rules on the min/max size of your email
- They exist in different languages
- The name of each email service is different

There is an international standard email regex, and I believe it's this:



### Implementing Regex in JS

We're starting off with a static, pre-prepared webpage. It's a standard form field that only took HTML and CSS to build- nothing you're incapable of making.

There are 2 main ways to implement regex expressions in the JS document we'll be creating- one of which is more popular the other

Method 1) Store your regular expression in a variable (most popular)

```js
let reg= /[a-z]/ig;
```

Method 2) Use a method

```js
let reg2= new RegExp(/[a-z]/,"i")
```

- Our only choice if we want to take user inputs to make them into a reg expression

Youtube Comment: (unsure what this means atm)

- One major advantage of using "new RegExp( )" is that it accepts a string as its first parameter which it converts to a regular expression at runtime. 
- Is necessary when the regex is created dynamically.
- `const searchTerm = getUserInput()` 
  `const reg = new Regex(searchTerm, 'gi')`



### Testing Regex in JS

- When we type something into our form field, we need to compare it to the regex expression stored in our variables or object- to give it the "yay" or "nay". 
- We can use the test method for that, and we'll also perform a trick that requires us to store our regex inside an object

#### PLAN:

0. Try to match your name attribute values in HTML with your object key names in JS

1. Add keyboard event listeners to each form field- specifically key up events for each time the user types something
2. Test the user input and compare it to the regex we created for our form fields
   Add a "valid" and "invalid" class for when the user's input is sufficient or not
3. Style the above classes in CSS to give them a visual effect (not in this lesson)

#### Procedure

Starter Code- 

```html
<form>	<!--the HTML that matters (descriptions w/in p tags are omitted-->
	<input type="text" name="username" placeholder="username">
	<p>USERNAME~~</p>

	<input type="text" name="email" placeholder="email">
	<p>EMAIL~~</p>

	<input type="text" name="password" placeholder="password">
	<p>PASSWORD~~</p>

	<input type="text" name="telephone" placeholder="telephone">
	<p>Telephone# ~~</p>

	<input type="text" name="slug" placeholder="profile slug">
	<p>SLUG~~</p>
</form>
```

#### Step 0. 

GOAL: Match HTML name attributes with JS keys

```
KVP Structure must be...
input field's name attribute value: regex for that field
```

Result:

```js
const patterns = {
  telephone: /^[0-9]{11}$/,
  username: /^[\w]{5,12}$/,
  password: /^[@-\w]{8,20}$/,
  email: /^[\w.-]+@([a-z\d-]{2,20})\.([a-z]{2,8})(\.[a-z]{2,8})?$/, 
  slug: /^[a-z0-9-]{8,20}$/,
};
```

#### Step 1. 

GOAL: Add event listeners to the form fields

Start by importing all the HTML input elements to our JS file

- In this case, we're using querySelectorAll to bring in every input tag at once
  We can't add an event listener to multiple elements at once, so use a forEach loop
- Our first forEach parameter `el` gives us access to the current iteration's input tag
- The event listener parameter `eventObj` gives us direct access to the event object created when we tap a key

```js
const inputs= document.querySelectorAll('input'); // list of 5
inputs.forEach((el)=>{
  el.addEventListener('keyup',(eventObj)=>{
    // Let's see what we can access using a forEach loop on our input elements....
    console.log(eventObj);  //1 Keyboard press event object
    console.log(eventObj.target)	//2 HTML element we typed inside (AKA. "el")
    console.log(eventObj.target.attributes)	//3 list of attributes for that element
    console.log(eventObj.target.attributes.name) //4 el's attributes list in HTML
    console.log(eventObj.target.attributes.name.value); //4 el's name value in HTML
  })
})
```

We typed an "A" into our username field to trigger this:

![image-20210315005840571](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210315005840571.png)

![image-20210315011328812](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210315011328812.png)

#### Step 2.

GOAL: Test the user input and compare it to the regex

We accomplish the above with our `compare2Regex` function
`inputEl`: The HTML element whose form field is typed inside
`inputEl.value`: what's typed inside the form field

`regex`: The regex statement for the field we typed in (the set up is a bit complicated, but we have a mini section about `matchedPatternKey` that explains it)

```js
const inputs = document.querySelectorAll("input"); // list of 5

const patterns = {
  telephone: /^[0-9]{11}$/,
  username: /^[\w]{5,12}$/,
  password: /^[@-\w]{8,20}$/,
  email: /^[\w.-]+@([a-z\d-]{2,20})\.([a-z]{2,8})(\.[a-z]{2,8})?$/, 
  slug: /^[a-z0-9-]{8,20}$/,
};

function compare2Regex(inputEl, regex) {
  //^ PARAM 1: input element    PARAM 2: object.username for example
  if (regex.test(inputEl.value)==true) {
    // when the user gets it right...
    inputEl.classList.remove("invalid") //remove invalid class 
    inputEl.classList.add("valid") // add valid class 
  } else {
    // when the user gets it wrong
    inputEl.classList.add("invalid") // add invalid key
  }
}

inputs.forEach((el) => {
  el.addEventListener("keyup", (eventObj) => {
    let matchedPatternKey = eventObj.target.attributes.name.value;
    console.log(matchedPatternKey);
    compare2Regex(eventObj.target, patterns[matchedPatternKey]);
    //^ PARAM 1: input element     PARAM 2: regex: object.username for example
  });
});
```

How Matched Pattern Key Works:

- Parameter 2 is set equal to `patterns[matchedPatternKey]`, aka... `patterns[eventObj.target.attributes.name.value]`
- The telephone field's `eventObj.target.attributes.name.value` equals "telephone" because its name attribute in HTML is set to "telephone"
- We have a regex in our patterns object whose key is named "telephone" deliberately
  Now, we can access it via `patterns[matchedPatternKey]`

### Finishing Touches in CSS

Let's make the descriptions below each form field more dynamic

![image-20210315120809822](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210315120809822.png)

- Only show the form field descriptions when the answer is invalid or when the user starts typing. It should go away when their answer is sufficient
- When not present, the descriptions should have their place in the DOM removed, letting other content fill in the gap they leave

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210315120701254.png" alt="image-20210315120701254" style="zoom:70%;" />

```css
input+p{
  display:none; /* the suggestion text is off by default */
}
.valid {
  border-color: green; /*add green border color to field when answer is correct*/
}
.invalid {
  border-color: rgb(230, 8, 82); /*add red border color when answer's insufficient*/
}

input.valid+p{
  display:none; /*when valid, remove suggestion fr/sight and DOM*/
}

input.invalid+p{
  display:block; /*when invalid, add the suggestion text back*/
}
```

#### Final Code

Codepen: [Form Field First (codepen.io)](https://codepen.io/NFuego24-7/pen/NWbmKpR)
Or check your study problems' regex files



























