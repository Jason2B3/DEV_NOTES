Good day, traveler!

# Introduction

### Basic Terms and Definitions

<u>Operator:</u>
A symbol that tells the compiler or interpreter to perform a specific operation to produce a final result

<u>Mutate:</u>
When we give a variable a new value, people call it mutation

<u>Immutable:</u>
Something that cannot be changed. Describes variables defined using const

<u>Implicitly:</u>
When JS does something automatically and behind the scenes without notice

<u>NaN:</u>
A "not-a-number" value that appears when a math function fails. Try subtracting a string from a number in the console and see what happens

<u>ECMAScript:</u>
A standard for scripting languages such as JavaScript

<u>Invoking/Calling/Running:</u>
A set of terms used in conjunction with functions. Means to call upon and use

<u>Dry Code:</u>
When we deliberately avoid repeating ourselves in our code, oft times through the application of reusable functions

<u>Method:</u>
In JS, methods are actions that can be performed on objects
For example, JS has some built in functions that perform operations on arrays

If a function is inside an object, we can also refer to it as a method

<u>Functions:</u> 
Chunks of code that can be reused- just variables on a larger scale
Hold 1 or more lines of code

<u>Variables:</u> 
Hold one value

<u>Parameters:</u> 
Variables specific only to the function. 
Can reuse parameter names or even name variables the same thing w/ no problems

<u>Arguments:</u> 
The real values passed to and received by the function

<u>Result:</u> 
The output- often passed out the function by `return varName;`
The return statement causes the computer to exit the function immediately

<u>Queue:</u>
An abstract Data Structure where items are kept in order. 
New items can be added at the back of the queue  
Old items are taken off from the front of the queue.

<u>Index Values:</u>	[10,5,7,8]
The index number of the element in an array. 
The index number of element 5 is 2

<u>Element:</u>	[10,5,7,8]
In an array, the associated value of the index value is the element
The element 10 has an index number of 0

<u>Callback:</u>
When you pass a function as another function's parameter
Can use pre-made functions, or you can declare a new one in the parameter spot
Common practice is to use an anonymous arrow function

<u>Pascal Notation:</u>
When each new word in a variable name has its first letter capitalized
Ex. `HextechGunBlade= 2900`
Use when naming constructor functions- common practice

<u>Case-sensitive:</u> 
If a method is case sensitive, it won't consider `varName` and `varname` to be the same thing

<u>Guard Clause:</u>
A new trend in modern JS, when writing the block portion of a function
Check to see if the opposite of the circumstances you need are true
If they are, return the function early- usually with an error message or empty string

```js
let num=7
function beOver10(){
  if(num<=10) return alert("Criterion not met")
  console.log("Success!")
}
```

In real projects, any operations that happen after the clause will not occur, and it'll be more complex than a simple log

### General Rules for Good Practice

Semicolons
Add one at the end of each line with no space b/t it and the last letter. Tells your browser the line is done- even if it isn't mandatory 100% of the time

Variable Names
Capitalize letters of new words in your names. `let newTitle='Paul';`
Use underscores as an alternative `let new_title=Paul;`



### The Console

The console is a powerful tool/environment that was built to execute small pieces of code and then show results immediately.

People use to deliver administrative messages. You will see`console.log( );`several times over this course. We log something to the console when we want the browser to tell us something 

- `console.log("words");`If this turns out to be false, deliver this message!
- `console.log(a)`Tell me the value of the `a` variable!

###### Entering Code Temporarily:

- In the very beginning, we will often just type our JavaScript directly in the console. It doesn't save any lines of code, so your actions there are one-offs 

- When you enter `console.log('whatever')` in the console, the browser will either spit out your desired response or an error. Check the console response in dev tools

Use the following line when you want the console to show us something. You can put many different values, variables, or data types into this set of brackets

```js
console.log(40+9); 
```

> ![image-20201230013127890](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201230013127890.png)
>
> The dev tools even tell us where the console response came from
> (index. html file line 31)



### What JS does In Web Dev

HTML: Creates the content we need on our site
CSS: Styles this content and arranges it 

JS: Makes webpages interactive. Here's a few examples how

- When you click a button and a modal/pop-up appears
- If you hover over someone's profile on FB, it shows your friends in common plus their location for some reason
- When something on a webpage is not done loading, a spinner appears. When it is ready to show the loaded content, it disappears
- If you click outside of a menu's window, it goes away

It even allows you to create web applications in the browser They feel almost like the apps people use on computers and phones every day



#### React, Angular, and Vue Frameworks:

3 popular JS frameworks that help developers build complex, reactive and modern user interfaces for the web. Though technically React.js is a library, not a framework.  

CONS: Has way less features than the other 2, is developed by Facebook

PROS: 
Easier to learn than Angular, hottest in the job market as of 2020, and its missing features won't matter until later in your career. Despite its missing features, the community has developed their own solutions to provide services that are not offered by default in React. 

> h ttps://academind.com/tutorials/angular-vs-react-vs-vue-my-thoughts/#:~:text=Who's%20working%20on%20those%20Frameworks,features%2C%20React%20is%20very%20minimalistic.
>
> GREAT article about the key differences between these 3


Remember, what's most popular today may not be as common in the future. To protect yourself, become fantastic at using vanilla JavaScript. Then, learning any new flavor-of-the-year framework will be a piece of cake



#### Front vs Back-End JS

JS runs either on a web-browser (front-end) or a server (back-end). This course will focus on the client-side only, so don't expect any server-side JS. 

You will learn all about back-end when you study Node.js. This technology lets us create applications that run on web servers and interact with databases

![image-20201230002009950](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201230002009950.png)



### Inline/External JS Linking

#### Inline

When building FE web applications, JS will always be linked to an HTML document. With inline linking, use script tags.

- Place these script tags with your JS code inside your body block in HTML near the very BOTTOM. You want your JS to be parsed last. 

- If it loads initially with the page, elements your JS will affect may not even be there yet-resulting in errors

  

- There are a few exceptions like when using jQuery. They have functions that say "don't run any of the code inside until the document is ready, or fully loaded."

- This will prevent any errors, but it can still slow down the loading time of your HTML

```html
<!-- Inline Script tags with sample JS inside -->
<script>
	let js= "amazing"
    if (js=== "amazing") alert( "JS is KING baby!");
</script>
```



#### External

1. Create a new JS file on the same level as your HTML file. If you nest it deeper, you'll have to change the file URL a bit (described in HTML and CSS notes)
2. Create script tags near the end of the body block. But this time, include a source attribute instead of JS code

```html
<script src="javascript-filename.js"> </script>
```



#### What's the Difference?

The advantage of an inline script is that you don't need to load any external JS files to your page. The downside is that it's not good when you want to separate website content from website logic



### Strict Mode

Strict mode is a special restricted mode you can activate in JS. It makes it easier for us to avoid bugs code by doing the following:

1. Forbids us to do certain things allowed in regular JS 
2. Creates visible errors where normal JS would fail silently
3. Forbids the use of near-future reserved words
4. If you try to get lazy and skip using let, const, or var when declaring variables, strict mode throws you an error

```js
// How to activate (put at the very top of the doc)
'use strict';
```

- Are allowed to place comments above it, but nothing else
- Can activate strict mode for blocks individually, but there's no point 



##### Example 1: Typo Locating with Strict Mode

```js
"use strict";
let hasG2 = false;
const passExam= true;

if(passExam) hasG1=true;
if(hasG2) console.log("Punch it into high gear")
```

![image-20210101154357234](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210101154357234.png)

Goal: If `passExam=true`, change the value of hasG2 to true
Mistake: Made a typo and said G1 in the first if statement instead of G2

Sloppy mode: No output to the console. Let's us define g1 as true, even though we never defined it outside of the if block beforehand

Strict Mode: Won't let us define a variable we never introduced outside of the if block.

##### Example 2: Trying to use future-reserved words

```js
"use strict";
const interface= "Audio";
const private=75;
```

![image-20210101153721571](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210101153721571.png)

Without strict mode, the console receives no errors. 
The next patch would introduce errors to our site since we'd be using these variables

Also, notice how even though we have 2 throw errors in our code, the console only warns us about the first

### Overreliance on console.log()

When learning JS, it's nice to have visual feedback when something happens 

- `console.log();` directly sends us a message through the console, showing us exactly what's going on
- We use it to check if what we've done has worked properly

One important thing to remember is that when we don't use `console.log();`, things still occur, just without any visual feedback

#### Example:

```js
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // output: true
myObj.hasOwnProperty("middle"); // output: false
```

These 2 methods output true then false when they check through our object. 
None of it is conveyed to us in any way unless we do 1 of 2 things:

A)   Shove `myObj.hasOwnProperty("top")` into the console

B)   Wrap the methods in console.log()... 
	`console.log(myObj.hasOwnProperty("middle"))`

#### When it's not Required

In most freecodecamp examples or real life problems, we won't be asked to log anything. 

- We'll just be asked to make certain things happen. 
  Feel free to use console.log() on the side to see if you're on the right track
- Unless a question specifically tells us to log something to the console, don't
  Making the function output a string does not mean logging from the console (*)

#### Logged Actions have Lasting Effects

If you perform an action inside a `console.log();` statement, that action's effect remains, even if the main intent was just to convey something. If you change a variable inside a log statement, it'll be changed afterwards

```js
let a=5
console.log(a=a+100); // action performed
console.log(a); // lets see what a is equal to now...
```

variable a is not equal to 5 anymore: ![image-20210222120335059](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210222120335059.png)

# Naming Conventions & Basic Info



### BEM Naming Convention

Keep in mind that CSS is case insensitive (`class="howdy"` = `class="Howdy"`)

![image-20210212100025961](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210212100025961.png)

#### Benefits 

- By looking at a class name, you should know where that element belongs in the doc
  The type of element we're dealing with should also be clear
- Debugging becomes easier since we can locate problematic elements easier
- It reduces the need to write nested selectors
  At the cost of bloating our code a fair bit

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210212104559606.png" alt="image-20210212104559606" style="zoom:80%;" />



#### BEM Syntax

> ![image-20210212100415139](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210212100415139.png)
>
> ![image-20210212102447439](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210212102447439.png)

- When we say "block", we're referring to what I often call a container/wrapper element
- Modifiers give extra details on what the element does. For example, if I had a button  with a "no" action performed upon a click, I may just use "decline" as my modifier

#### Common Mistakes

Do not use a modifier if it does not have non-special elements as siblings

![image-20210212103330422](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210212103330422.png)

`class="carousel-gallery__div--final-slide"` better have 
`class="carousel-gallery__div"` inside an element somewhere



#### Examples

```html
<ul> <!-- Let's say we'll be using this UL for our navbar -->
    <li> Regular list item</li>
    <li> Regular list item</li>
    <li> special</li>
</ul>
```

Final Result of `block__element--modifier`

```html
<ul class="nav"> 
    <li class="nav__list-item"> Regular list item</li>
    <li class="nav__list-item"> Regular list item</li>
    <li class="nav__list-item nav__list-item--special"> contact button </li>
</ul>
```

Source: [(2) What is BEM in CSS - Block, Element, Modifier in 6 minutes - YouTube](https://www.youtube.com/watch?v=iyR6RXUZFQ8)

———————————————————————————————————————————————————————————————————————————————

BLOCK:

```CSS
<ul class="nav">
```

a) This element is a container block
   Even if this isn't a nav element, we'll be using it to create a navbar

———————————————————————————————————————————————————————————————————————————————

ELEMENT WITHIN A BLOCK:


```css
<li class="nav__list-item">
```

What our class name tells us in our CSS doc... 

a) The element belongs to the block with a class name of "nav" (BLOCK)
b) The element is a list-item (ELEMENT)

———————————————————————————————————————————————————————————————————————————————

SPECIAL ELEMENT WITHIN A BLOCK:

```HTML
<li class="nav__list-item nav__list-item--special">
```

What our class name tells us in our CSS doc... 

a) The element belongs to the block with a class name of "nav" (BLOCK)
b) The element is a list-item (ELEMENT)
c) The list-item is styled differently than its siblings (MODIFIER)

#### Flexibility

The "element" part of BEM does not always have to be literal 
I'm unsure how strict people are about this however

If you're describing a div for example, the "element" part of the name can describe what it does for the application instead of just stating the element itself... sometimes

![image-20210502203650691](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210502203650691.png)

Teal: Literal. 		`form__label` on a label element
Red: Not literal. 	 `form__row` for a div element

### Page Loading and JS

There's a reason why we put our script tags at the bottom of our HTML documents' body. 

- It's done so the browser deals with our JS only after the HTML has been fully parsed and converted into the DOM tree
- In jQuery, people wrap their entire JS doc's content inside of `document.ready{}`
- In JS, you could even replicate that by wrapping all content inside of an equivalent line seen below (not that there's any need to)

Fires as soon as the DOM has been loaded:

```js
document.addEventListener('DOMContentLoaded', (e) => {
	// ALL OTHER JS CODE
})
```



Fires as soon the whole page has loaded, including all dependent resources such as stylesheets and images:

```js
window.addEventListener('load', (e) => { })
```



This event is created immediately before a user is about to leave a page:
Is often used when we want to ask users if they're sure they want to leave the page

```JS
window.addEventListener('beforeunload', (e) => { 
	// Prompt the default "are you sure you wish to leave?" message
})
```

Don't use this unless the website visitor may actually lose something by exiting your site- it's pretty intrusive. For example, they may be halfway through filling out a form



### Defer and Async Script Loading

Remember, it's called parsing when the browser build a DOM tree from an HTML file 


#### Regular Script Loading

![image-20210423150220439](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210423150220439.png)

Method 1: Place JS in the head section of your HTML (NEVER DO THIS)

- This method is never ideal because it pauses the parsing process while the browser processes your JS. 
- There's no upside to doing this, when you can avoid extra wait time by placing script tags at the end of the body instead

Method 2: Place JS at end of body tag

- This method is far superior, because the HTML is parsed before JS is even looked over
- Ideal, since JS often involves a lot of DOM manipulation
  Also, we don't halt any processes or wait

#### Async Script Loading

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210423150947621.png" alt="image-20210423150947621" style="zoom:150%;" />

Method 3: Place script tags in the head, with an `async` attribute

- Is faster than method 2, but still involves a bit of waiting
- The script is loaded at the same time as HTML is parsed, but the HTML parsing still stops for the script execution
- TLDR: Script is downloaded asynchronously, but is executed in a synchronous way

#### Defer Script Loading

![image-20210423151327911](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210423151327911.png)

Method 4: Place script tags in head section, with `defer` attribute

- The script is loaded asynchronously as the HTML is parsed, but the execution does not happen until after the parsing's finished (hence, the "defer" name)
- The loading time is similar to the async method, but has the benefit of never interrupting the HTML parsing process

Although you can use async and defer loading methods when you place script tags at the end of the body, there'd be no point. Speed would remain the same or worsen slightly

#### COMPARING ALL METHODS

By default: Use the defer method in the head section

![image-20210423152049775](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210423152049775.png)

#### When to Use each Method

Remember, applications often include more than one script. Choose which method you want to use depending on what your script actually does

###### Defer in head:

- Should be your go-to method, especially if you're using third party libraries like LoDash, date-fns, React... etc
- In cases where you use libraries, the scripts executing in order matter a lot.
  Async scripts load and run in an unpredictable order

###### Async in Head:

- Use when you want additional speed, and don't care what order your scripts are loaded 

###### End of Body:

- Use for supporting older browsers (NOT A SUGGESTION. IT'S THE ONLY OPTION)
- Since older browsers don't support async or defer loading, they ignore it. Since these are HTML5 features, you can't get over this limitation with a simple polyfill

### File Paths & Organization 

#### Definitions and Best Practices

ROOT FOLDER: 
Contains everything that strictly has to do with your website
Try to incorporate "root" in your root folder's name

- When freelancing or working at other companies, you'll probably have other file folders containing things they may have asked for
- If it isn't incorporated into the site, keep it out of the root folder
  Obviously you should keep SVG's/images that appear on site within the root folder

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210525125814742.png" alt="image-20210525125814742" style="zoom: 40%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210525130024534.png" alt="image-20210525130024534" style="zoom:50%;" />

ROOT LEVEL: 
When you double click your root folder in the file explorer, that level of depth is what we mean by saying "root level"

- Your index.html should always be there
- All sub-pages or files of any kind should be in their own designated type folder, if possible (it keeps things organized)
- Obviously you can't control what every codebase you encounter will look like, but its bad for organization and scalability to have images, CSS files, and scripts all littered across the same nesting level without being segregated

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210525132108533.png" alt="image-20210525132108533" style="zoom:50%;" />

CURRENT FILE/DIRECTORY: 
The file you're typing in currently

CURRENT FOLDER/DIRECTORY: 
The folder that houses the file you're currently in

PARENT FOLDER: 
The folder that houses your current folder (is 1 level above where you are now)

#### Path Syntax

File path starter meanings:

```
Start your path at the...
/ 		root folder of file system
./ 		current folder 
../ 	parent folder of current file
```

RELATIVE VS ABSOLUTE FILE PATHS:

- An absolute path directs you to a file location starting at the root folder 
  (begins with `/`) 
- A relative path directs you to a file location starting at the current directory
  (begins with `./` or `../`)

It is best practice to use relative file paths (if possible).

- With relative file paths, your web pages will not be bound to your current base URL. 
- All links will work on your own computer (localhost) as well as on your current public domain and your future public domains

#### File Path Example

EXAMPLE: Start at styles.css and provide a file path to logo.gif 

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201202200227217.png" alt="image-20201202200227217" style="zoom:70%;" /> 	Relative route: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201202212130051.png" alt="image-20201202212130051" style="zoom:70%;" />  

Absolute File Path => `/images/logo.gif`   (preferred)
Start from the root directory "Awesome Dogs"
Go deeper into the images folder, then reach logo.gif

Relative File Path => `../images/logo.gif`
../ brings us to the parent folder "Awesome Dogs" 
From there, go into the images folder then access logo.gif

For the record, "CSS" is the current folder of styles.css- it's not the parent folder

#### File Naming Conventions

The web is case-sensitive, so pick a naming convention and stick to it so you don't have to memorize your exact file names each time you need to refer back to them

RULES:

- No spaces, numeric first characters, or strange symbols ( `- _` are acceptable )
- Stick to using all lowercase with underscores to separate words, or else you'll have issues when working with NPM and JSON

### Clean & Modern Code

![image-20210528005522088](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210528005522088.png)

![image-20210528005547140](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210528005547140.png)

# Fundamentals Part 1

### Variables and Data Types

There are a total of 7 data types in JavaScript, and they are expressed in diff ways. The final 2 not in the table are Symbol and BigInt. Rarely used, but will learn later*

Remember that JS only deals with decimals. Even whole numbers are classified as such

| STRING TYPE | EXPRESSED AS...        | EXAMPLE                |
| ----------- | ---------------------- | ---------------------- |
| number      | decimals only (no int) | `let varName= 8;`      |
| string      | text                   | `let varName="ethan;"` |
| Boolean     | true/false             | `let varName= true;`   |
| undefined   | no type yet            | `let varName;`         |
| null        | non existent           | `let varName= null`    |

- Variables names cannot start with a number or symbol
  The exceptions are $ or _
- Reserved JS keywords are not allowed either
  Can't name a vari if, else, delete, function, new, name...etc
- As a whole, create variables using letters, numbers, _ , and $



#### Dynamic Typing in JS

- JS will automatically define the data type of a value stored in a variable. We don't have to do it manually like in some other langs
- Variables themselves do not hold types. Their values do
  This lets us later assign a variable new values w/ a diff type easily
  Makes things easier but also produces tough to find bugs

I sometimes refer to variables by their value types for the sake of ease.
("take a look at this null variable!")  
Just remember the distinction between a variable and its value's type

```js
let newTag;
console.log(typeof newTag);
newTag= null;
console.log(typeof newTag)
```

![image-20201230195459729](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201230195459729.png)

- We used the `typeof` operator to broadcast the data type of each value

- When REDEFINING variables, you don't have to use let or var a second time

- It seems the value type of null is "object". Hilariously enough, this is a bug that is left unfixed due to legacy reasons

  

#### Naming Etiquette

1. Don't use a capital for the first letter of your name (unless constant)
2. Capitalize new words `let newName= "2B-reborn";`
3. Don't use keywords, even if it doesn't throw you an error at first
4. When defining a constant that you know will never change, use all caps
   `PI=3.1415;` 
5. Be descriptive (example below)

| Not descriptive                               | Descriptive                                                  |
| --------------------------------------------- | ------------------------------------------------------------ |
| `let c1= 'Mech Eng'`<br />`let c2= 'Web Dev'` | `let firstCareer= 'Mech Eng'`<br />`let currentCareer= 'Web Dev'` |

6. Use "double quotation" marks for your strings. 

   Only use 'single quotation' marks when you want to show double quotations inside your string. Why you may ask?
   Though there's no difference, JSON only supports double. Get used to this early



#### Declaring Multiple Variables at Once

```js
let x=0, y=1, z=4;  // If the variable values differ

var a, b, c;
a = b = c = 25; 	// If the variable values are the same
```

Do not do it this way:

```js
var x = y = z = 25;		//SLOPPY, and creates unexpected global values
```



#### Undefined/Null Variables

Describing an Undefined Variable...
Value: is Undefined
Data Type: the Undefined type

```js
let a1;
console.log(a1);
console.log(typeof a1);
```

![image-20201230200031703](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201230200031703.png)

Null variables work the exact same way EXCEPT...
Value: null
Data Type: Object (a bug kept around for legacy reasons)

#### Returning a Null/Undefined Data Type

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210214153046975.png" alt="image-20210214153046975" style="zoom:67%;" />

![image-20210214153110392](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210214153110392.png)

- You can actually have the return value of a function be the undefined or null type
  Set your condition in an if statement or something then type `return undefined`



### var, let, const

| METHOD | USE TO...                                                    |
| ------ | ------------------------------------------------------------ |
| let    | for variables that can change later in our program           |
| const  | for variable values that will never change (must be a primitive)<br />*Optional, but blocking variable changes will prevent potential bugs<br />Fully capitalize variable names to show it's constant (ex. VARNAME) |
| var    | The pre ES6 way of declaring variables.<br />Works similarly to let, but should be avoided |

- If you try to mutate a variable defined as const, you'll get an error
- You can't use const to define an undefined variable

```js
let acclaim= 'Solidworks Badge' //Proper way to declare a variable
// VS
acclaim= 'Solidworks Badge'		//BAD way to declare variables. DON'T DO THIS
```

Although you may not get errors, don't define a variable without var, let, or const. It will create a property on the global object (undesired) 
We want to make a variable in the current scope



#### Redefining Variables

Don't use let/var again if you are redefining what a variable equals

```JS
let language= "English";	//first definition
language= "Spanish";		//re-defined
```



#### Changing const Variables

Primitive values are what const prevents from being changed: 
Strings, numbers, Booleans, undefined, also bigInt, symbol, and null.  

Everything else counts as an object or reference value, and they can be mutated just fine. Includes objects, arrays...etc

- When we declare reference values using `const` variables, it doesn't stop us from changing them. Instead, it stops us from redefining them completely

```js
const s = [5, 6, 7];

s = [1, 2, 3]; // ERROR. trying to assign a const
s[2] = 45; // JS allows us to change one of our index values
```

To protect your objects/arrays/functions from being mutated, use `Object.freeze( )`.
Now, we can't add,delete, or update any values

Ex1.

```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.newProp = "testValue"; // will be ignored. Mutation not allowed
```

Ex2. 

![image-20210217174325275](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210217174325275.png)



#### Using Undefined Variables Improperly

```js
console.log(typeof unbornVariable);
```

![image-20210103021845413](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210103021845413.png) Everything's fine. Comp just points out that variable is not defined

```js
console.log(typeof unbornVariable); // Calling a variable that is not defined
let unbornVariable= 13; 			// Defining variable after it's called b4 existing
```

![image-20210103022055319](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210103022055319.png) Browser does not allow this



### var vs let

#### scope

SCOPE:

var: Function scoped (works throughout entire JS doc)
let: Block scoped (only works inside if/for/while loops, and switch conditions)

```js
var coder= '2B-reborn' // Works everywhere, unless declared in a function
let coder= '2B-reborn' //Works in block only
```

https://www.javascripttutorial.net/es6/difference-between-var-and-let/

var: ![image-20210217163542794](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210217163542794.png)   let: ![image-20210217163613988](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210217163613988.png)

What would happen if we tried using `i` in another conditional down the road? 
Had we used var earlier on, it would still hold the value it was given earlier. 
This is why using var these days introduces unnecessary problems

#### Examples

```js
function checkScope() {
  let i = 'function scope'; // this is part of the function scope
  if (true) {
    let i = 'block scope';  // this is part of the if block scope
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
```

We use the variable name `i` twice- only `let` would allow it
Don't actually use this though. It causes confusion.  

- One of them is part of the function scope
- The other is part of the if block's scope. 

#### Redefining variables

Variables declared with `let` also can't be redefined with another let declaration. In big projects, there's a chance you may try to redeclare a variable later on- and var would allow it.

![image-20210217162822857](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210217162822857.png) ![image-20210217162832300](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210217162832300.png)

#### var Creates Window Properties

Window is the global object of JS in the browser. Declaring variables with var creates a property in that object, but variables declared with let/const do not

![image-20210303013639067](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210303013639067.png) ![image-20210303013713027](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210303013713027.png)

Just type "window" in the console, and have a look inside
OR, test for the presence of a key in the window function using dot/bracket notation

```js
var x=1; let y=2; const z=3;
// each of these will return a Boolean
console.log(x===window.x);  //TRUE
console.log(y===window.y);  //FALSE
console.log(z===window.z);  //FALSE
```



### Defining Multiple Variables and Swapping Values

There are a few ways to define more than one variable at the same time

```js
let a = 8, b = 6 		// if you're using the same declarator
// or
let a=9; const y=12		// if you're using different declarators
```

Using Arrays for declaring multiple variables:

```js
let [a,b,c,d] = [0,1,2,3]
```

#### Swapping Variables via Arrays

This is actually a form of array destructuring, which is an advanced technique explained later in this document

```js
let a = 8, b = 6, c=10;
[a, b, c] = [b, a, c];
```

Now... 	 `a=6`	`b=8`	`c=10`	



### Basic Operators

#### Arithmetic Operators

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201230214611607.png" alt="image-20201230214611607" style="zoom:60%;" />

```js
2**3 // Means 2^3 (exponents)
```



#### String Operators

> ![image-20201230215022188](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201230215022188.png)
>
> text1= "Good"	text2= "Morning"
>
> In the second example, text 1 gets redefined as the summation of it plus text2.
> Text2 remains the same



Adding Strings (no spaces b/t)

```js
let chant= 'Bill!'
console.log(chant+chant+chant)
```

![image-20201230213912053](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201230213912053.png)

Adding Strings (with spaces b/t)

```js
let amyJob= "nurse"
let intro= "Amy decided to become a"
console.log( intro + " " + amyJob+ " after psychology didn't work out")
```

![image-20201230213932008](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201230213932008.png)

Template strings are a better way to perform this. 



#### Assignment Operators

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201230214751336.png" alt="image-20201230214751336" style="zoom: 67%;" />

`x += y` 	x becomes the summation of itself plus y
`x /= y` 	x becomes the quotient of itself divided by y



#### Comparison/Equality Operators

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201230220319365.png" alt="image-20201230220319365" style="zoom:64%;" /> x=5 btw

Remember that when we compare 2 values to see if they’re equal, use `==`
A single equals sign is used to ASSIGN VALUES to something. NOT TO COMPARE

If we typed 5=10 or even 5=5 in the console, we’d get an error



#### Unique Ways to Apply

The console has access to all the variables declared in your code. You can store T/F values through the use of an arithmetic expression

```js
let age= 21;
const lissaLegal= age>=18;
console.log( lissaLegal);
/*This will now hold a true value*/
```



### Operator Precedence

JS has an established order of precedence- the order in which operators are executed. It's conceptually similar to BEDMAS in traditional mathematics.
The higher the precedence value, the more priority 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

#### EXAMPLE

```js
let now= 2020
console.log(now -1991 > now-2018); 		//will this work properly?
console.log((now -1991) > (now-2018));	// should i do this to be safe?
```

Which operator takes effect first? the `>` or the `-`?

`-` sign: 14 (higher # goes first)
`>` sign: 12
This line of code should work properly

- When in a rush, just use brackets to separate blocks of arithmetic you want to parse first- they have the highest priority
- In general, math operators (+ - / **) execute before comparison operators ( > < ==)

#### Associativity

When you look at MDN's precedence list, you'll notice how each entry has an associativity of L->R or R->L . This is just how the computer will execute certain operations

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201231003307488.png" alt="image-20201231003307488" style="zoom: 80%;" />


Left to Right Example: Division sign

```js
let redX= 12/6	// redX = 2 
// 	12 is on the left and is divided by 6 on the right. 
//	If the division sign parsed from right to left, redX would equal 0.5
```

Right to left Example: Assignment (aka equals sign)

```js
var a, b, c;
x = y = z = 25; 	// x, y, and z all equal 25 b/c of thr R->L parse order
					//	25=z	z=y		y=x
```

If this had parsed from left to right, x would equal y when neither of them had any values assigned yet



### Strings and Template Literals

Without using them, you're relegated to adding in spaces in a tedious fashion

```js
const myName= "Jason Bustamante!";
const oldCareer= "Mechanical Designer";

const mission = "My name is "+ myName + " I'm an ex "+ oldCareer + " and my goal is to become the world's greatest inventor. Coding is inevitable";

console.log(mission);
```

![image-20201231010912710](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201231010912710.png)

Template literals let us write a sentences using placeholders, then import strings using existing variables

```js
const myName= "Jason Bustamante!";
const oldCareer= "Mechanical Designer";

const mission = `My name is ${myName} I'm an ex ${oldCareer} and my goal is to become the world's greatest inventor. Coding is inevitable`

console.log(mission);
```

Instead of single or double quotation marks, we use `back ticks`
Fun fact, you can use back ticks instead of " " or ' ' for any and all purposes

`${string containers}` These can contain any type of JS. Math, functions...whatever



#### Multi-Line Strings

```js
console.log(`string
multiple
lines`)
// All hail ES6! This kicks the old \n\ method's ass
```

![image-20201231030133850](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201231030133850.png)

#### String Property: Immutable

Strings are constant and cannot be changed once they are defined:

```js
var myStr = "Jello World";
myStr[0] = "H"; 	// this attempt to fix our typo fails
```

See?	![image-20210213170435030](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210213170435030.png)

You can however, redefine the variable which may happen to have a string value.

```js
var myStr = "Jello World";
myStr = "Hello World"; // here we redefine the variable, not the string itself
```

### Concatenation

#### Examples

We can increment and add onto variables outside of loops too

```js
let a= 4;	
a++;	
console.log(a);	
```

![image-20210213164342959](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210213164342959.png)

```js
let b=10;
b+=8;		// b will now equal itself plus 8
console.log(b);
```

![image-20210213164622704](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210213164622704.png)

Concatenate with strings if you want. Just remember to add the spaces yourself

```js
var myStr="This is the first sentence. ";
myStr+="This is the second sentence."	// myStr= Σ itself + new string
console.log(myStr);
```

![image-20210213165034728](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210213165034728.png)

Concatenate with variables too!

```js
var someAdjective= "tough but rewarding";
var myStr = "Learning to code is ";

myStr+=someAdjective
console.log(myStr);
```

![image-20210213165734187](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210213165734187.png)

STRANGE QUIRK ABOUT ++ AND --

As you know, they increment a value upwards or downwards, but they return the old pre-incremented value on the same line they're used

```js
let ay= 10
console.log(ay++); 	//OUTPUT:10
console.log(ay); 	//OUTPUT:11 (incrementation comes into effect now)
```

Fortunately, there's a simple workaround- the prefix ++ operator

```js
let ay= 10
console.log(++ay); 	//OUTPUT:11
```



### Extracting Outputs from Loops & Conditionals

Before we begin, just know that you cannot use a return statement without a function. 

- The point of return is to stop the running of a function at as soon as it is encountered. 
- If you wish to derive something from a for loop, use variables

#### Using Function Outputs //———————————————————————————————

`return` is what the function will spit out. As soon as it is triggered, the function the browser is evaluating will get exited right away

You have 2 ways to use the output of a function 

1) Call the function and use the output immediately (for 1 time use)
2) Store the output in a variable then use that (for multiple uses)

IMMEDIATE USE:

```js
function divideFour(numero){ 
    return numero/4;
    console.log("this won't execute!");
}
console.log(divideFour(100)); // use the function output immediately
```

![image-20210213100838567](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210213100838567.png)

USED AFTER STORAGE:

```js
function divideFour(numero){
  return numero/4;
  console.log("this won't execute!");
}
let a=divideFour(100)	// store the function output in a variable first, then use
console.log(a);
```

![image-20210213100838567](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210213100838567.png)

You'll get some feedback in the console when you have code that's after `return` too

Excluded fr/ earlier pics: ![image-20210213101343883](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210213101343883.png)

###### Incorrect Use of Function Outputs 

In the previous 2 examples, notice how we invoke the function before we can use it immediately or after storage. 

- The return cannot be used if the function it's part of is not invoked
- This is a very easy mistake to make when we return a variable from a function instead
  It looks like we can use it anywhere

```js
function divideFour(numero){
  let dividedNum= numero/4;
  return dividedNum
}

console.log(dividedNum); // creates an error because the function hasn't been called
```

![image-20210213101845895](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210213101845895.png)

```js
function divideFour(numero){
  let dividedNum= numero/4;
  return dividedNum
}

dividedNum=divideFour(400); // invoked the function with storage this time
							// could have named this variable anything btw
console.log(dividedNum);
```

![image-20210213102159329](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210213102159329.png)

#### Using Outputs from Loops //——————————————————————————

The `yearsLeft` variable from the below if/else statement only exists in the scope of the block its defined in. What if we want to access it outside?

1. The best way is to state our variable before the if/else block, as undefined.
   Let it be mutated in the block 

```js
const age= 13;
let yearsLeft;				// Variable set initially as undefined

if(age>=18) { 
    console.log("Sarah can get her license"); 
}
else {
  yearsLeft= 18-age;  	// variable is redefined
  console.log(`She is too young to drive. Wait another ${yearsLeft} years.`);
}
console.log(yearsLeft)		
```

![image-20210213111127295](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210213111127295.png)

2. We could alternatively place our if else statements inside a function
   This allows us to use `return`

```js
function remain(age){
  if(age>=18) { 
    console.log("Sarah can get her license"); 
  }
  else {
    let yearsLeft= 18-age;  	// define a new variable 
    console.log(`She is too young to drive. Wait another ${yearsLeft} years.`);
    return yearsLeft	// make the function output this new variable
  }
}

let $var= remain(13); //store the output after invoking the function
console.log($var);
```

![image-20210213111127295](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210213111127295.png)

### Understanding the Lasting Effects of Methods

It's important to know when a method permanently changes your original target 

Ⓒ : Means the method PERMANENTLY changes/mutates the original array its used on
Ⓝ : Means the method creates a NEW array
Ⓡ : Target remains as it was originally

If a method does not permanently change its target naturally, you can still cause the same effect by redefining it.

EXAMPLE: 
The `parseFloat().toFixed()` rounding methods do not permanently change what they're used on. But you can force them to

Show how these methods do not cause permanent change:

```js
let num= 5
parseFloat(num).toFixed(6)
console.log(num); //OUTPUT: 5
```

Force permanent change via redefining:

```js
let num= 5
num=parseFloat(num).toFixed(6)
console.log(num); //OUTPUT: "5.000000"
```

In the first snippet, `parseFloat(num).toFixed(6)` isn't used for anything. 

- It's a free-floating value with no purpose. 
  It could be used as an input for something or stored in a variable for later
- The original target `num` remains unchanged regardless

# Fundamentals Part 2

### Type Conversion and Coercion

##### Type Conversion VS Coercion Definitions:

Conversion: Manually changing one type to another
Coercion: When JS does it for us automatically and behind the scenes

JS can only convert between 3 data types:  Boolean, strings, and numbers
This lesson focuses on numbers and strings only. 
For Boolean, see the Truthy and Falsy values lesson

> // Turns (Strings --> numbers) 		when any sign is used (besides plus)
> // Turns (Numbers --> strings)		 into 1 big string when a plus sign is used

```js
// Demonstration
console.log("19"-"13"+17)		// 19-13+17 due to coercion
console.log("19"-"13"+'17')		// (19-13)+"17"
console.log(5 + 6 + '4' + 9 - 4 - 2);		// (5+6)+"4"+(9-4-2)
console.log(5 + 6 + '4' - 9 - 4 - 2);		//  ~~~ "114"-15 becomes 114-15 after coercion
```

![image-20210103030314006](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210103030314006.png)

##### Simple Coercion Example:

Let's say we try to add an number with a verbal phrase. 
JS will change the number into a string so it can be summed up with the other 

```js
birthYear= 1996;
console.log("I was born in "+ birthYear);	// End result is a string
console.log("22"+ birthYear);  				// End result is a string here as well 
```

![image-20201231032000542](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201231032000542.png)

Coercion is essential no matter what language you study. 
We will need to convert strings-->numbers or numbers-->Booleans all the time

It is great for creating code faster and with more readability. It has the potential to introduce bugs if you don't know what you're doing however



##### List of Converters:

```js
Number(" ")
String(" ")
Boolean(" ")
```



### Conversion Examples

#### Strings to Numbers 

Example 1:

```js
const inputYear = "1991";
console.log(Number(inputYear)+ 9, typeof inputYear);
```

![image-20201231035159162](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201231035159162.png)

This new `Number( )` function temporarily converts a string to a number. 
It does not change the actual variable's value type permanently
This is shown by the console's second response shown in red

Example 2:

```js
console.log(Number('hat'));
console.log(typeof NaN);
```

![image-20201231041839398](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201231041839398.png)

In this example, we try to convert a word to a number, unsuccessfully
JS returns NaN, the invalid number response
NaN stands for "not a number", but technically it is one- it's just invalid



#### Numbers to Strings 

```js
let a= 23;
console.log(String(a), typeof a);
```

![image-20201231051725767](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201231051725767.png)

The 23 on the left is outputted as a string
The variable itself is still a number due to the temporary type change



#### Turn truthy/falsy values into Booleans

When you use React in the future, it's much easier to work with states when they equal true/false
Using `!!`, we can convert several expressions into Booleans with ease

|                | equals |
| -------------- | ------ |
| `!!any-falsy`  | false  |
| `!!any-truthy` | true   |

EXAMPLE:

```react
// falsys	(all expressions equal false)
!!""	!!0		!!undefined		!!null		
// truthys	(all expressions equal true)
!!"str"	!!8	
```



### Coercion Examples

Type coercion happens when an operator deals w/ 2 values of differing types. 
JS will convert one value to match the other in order to execute properly. 
Works with literal placeholders too

##### Part 1: What Happens Depending on the Operator

```js
console.log("I am now " + 23 + " years old")
// The number 23 auto-converts to a string
```

![image-20201231053109898](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201231053109898.png)

```js
console.log("23"-"10"- 3);
console.log("23"*"10"* 3);
console.log("23" / "10");
console.log("23" > "18");
console.log("23"+"10"+ 3);

// Strings --> numbers 		when any sign EXCEPT PLUS is used
// Numbers --> strings		into 1 big string when a plus sign is used
```

![image-20201231054015990](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201231054015990.png)

##### Part 2: Practice Time! Guess the Output

```js
let n= '19'+1; 	// n="191" as a string
n= n-1;			// n= 191-1 (the string is converted to a number due to the minus)
console.log(n);		// n= 190
```

![image-20201231054553209](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201231054553209.png)

```js
let eff= 2+3+4 +"5";	// n="95" as a string (after the real math b/t integers)
console.log(eff);
```

![image-20201231054753449](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201231054753449.png)



### Truthy and Falsy Values

We've thus far learned about coercion/conversion between numbers and strings. It is possible to do so with Booleans as well, but we must understand Truthy and Falsy values first

FALSY: Values that are not exactly false, but WILL become false if we try to convert them to Boolean

The 5 Falsy Values: `0`	`"(empty string)"`	`undefined`	`null`	`NaN`

TRUTHY: Values that are not exactly true, but will become true if we try converting them to Boolean

Every other kind of value: Non zero numbers, non-empty strings

#### Proving this Concept in Console

```js
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));

console.log(Boolean({})); //empty object
console.log(Boolean("Tornado Rojo"));
console.log(Boolean(99));
```

![image-20201231195904038](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201231195904038.png) --> Continued	![image-20201231195919336](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201231195919336.png)



#### Boolean Variables as Arguments to Show Coercion

Type changes typically happen implicitly via coercion- not manually using `Boolean()`. Take the sample code below for example. 

You can actually use Boolean variables as arguments for if block.
if blocks trigger when the condition is true
else blocks trigger when the condition is false

```JS
const swagPoints = 0
if (swagPoints) {
  console.log("You're a cool boy");
} else {
  console.log("You are not cool, unfortunately");
}
```

![image-20201231204355542](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201231204355542.png) when swagPoints=6

![image-20201231204426121](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201231204426121.png) when swagPoints= 0

The number 0 is converted to false (falsy)
The number 6 is converted to true (truthy)

#### Advanced Example

I know we said falsy values evaluate themselves to be false, but there are some limitations. Take a look at our filter function which should get rid of all false values from our original array:

```js
function bouncer(arr) {
  let a= arr.filter(value=> value!=false);
  console.log(a);
  return a;
}

bouncer([7, "ate", "", false,0,undefined,null, 9]);
```

![image-20210323132605359](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210323132605359.png)

undefined and null don't get converted to falsy

### Equality Operators

This table is identical to the one in the "Basic Operators" lesson. We just go more in depth about how each one works

| OPERATOR                        | FUNCTION                                      |
| ------------------------------- | --------------------------------------------- |
| `>   >=   <   <= `              | Should know by now**                          |
| `!=` Loose not-equal operator   | Compares and DOES type coercion if needed     |
| `!==` Strict not-equal operator | Compares and REFUSES to perform type coercion |
|                                 |                                               |
| `=` Assignment operator         | Assigns values. D.N use to compare            |
| `==` Loose equality operator    | Compares and DOES type coercion if needed     |
| `===` Strict equality operator  | Compares but REFUSES to perform type coercion |

Let's give the console some test lines to illustrate what we mean.
`18===18 `	true			`12==="12"`  false
`21===9`	 false		   `12=="12"`   true

- Try to avoid using the loose equality operator. Its weird rules will create tough to find bugs, and conceptually, using strict equality is much easier. 
- If you must involve type changes, do it manually

#### Code Example: 

What happens when both loose and strict conditions are met?

```js
const age= 18;
if(age===18){
  console.log("The STRICT conditions are met");
} else if (age==18) {
  console.log("The LOOSE conditions are met");
}
```

![image-20201231210605722](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201231210605722.png)

The else-if block is disregarded when the if block's conditions are met



#### Saving User Inputs

`prompt(" ")` an operator in JS that creates a pop-up for users to enter data
			  the data will always be saved as a string 

If we want to save this input as a number value, you'll need to use a type converter. The reason you may need this input as a number is to use it with a strict equality operator

```js
const faveNo = Number( prompt("What's your fave number?") );
console.log(faveNo, typeof faveNo);

if (faveNo===5) {
    console.log("Cool! We share the same number")
}
```

![image-20201231213107586](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201231213107586.png)

- The final if block would not trigger if we hadn't changed the string input to a number. this is due to the strict operator
- HOWEVER, a loose operator would let us skip the whole number conversion part. See below. (Notice how JS now considers it a string instead of a number, but still gives us the result we want)

```js
const faveNo = prompt("What's your fave number?");
console.log(faveNo, typeof faveNo);

if (faveNo==5) {
    console.log("Cool! We share the same number")
}
```

![image-20201231213321710](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201231213321710.png)



### Logical Operators Pt.1: and or not

#### The Mechanics of Boolean Logic

> ![image-20201231215649595](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201231215649595.png)
>
> A and B condition: 	A must be true, B must be true
> A or B condition: 	 Either A, B, or both must be true
> Not A condition: 	  If it is not A, this generates a true Boolean
>
> The truth table gets bigger when you involve more than 2 variables **



#### Official Operators w/ Examples

| OPERATOR  | A (OP) B Meaning                              |
| --------- | --------------------------------------------- |
| && (AND)  | Both A and B must be true                     |
| \|\| (OR) | Either A, B, or both must be true             |
| ! (NOT)   | If it is not A, this generates a true Boolean |

![image-20201231222146391](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201231222146391.png)

The NOT operator may put your mind in a pretzel with its logic- so just remember to invert the value. 

Value is True	 NOT generates false
Value is false	NOT generates true



### Logical Operators Pt.2

Logical operators `&& || !` are typically used with true/false values
They will return a Boolean value after the operation is complete

However, the `&&` and `||` operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value.

Example 1: Testing Boolean Logic in Console (2 variables)

```js
const native= false;
const cleanRecord= true;

console.log(native && cleanRecord);
console.log(native || cleanRecord);
console.log(!cleanRecord);
```

![image-20201231223815443](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201231223815443.png)

Example 2: Using Boolean Logic in Loops (2 variables)

- Remember that Boolean variables can be used as arguments in loop conditions
- This is how we model real life situations using syntax

```js
const native= false;
const cleanRecord= true;

if (native && cleanRecord) {
  console.log("You can land good jobs")
} else if (native || cleanRecord) {
  console.log("You may have a chance")
} 
```

![image-20210101012833795](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210101012833795.png)

Example 2: Using Boolean Logic in Loops (2+ variables)

You can drive if... you have a G license, have good vision, AND ARE NOT tired

```js
const gLicense= true;
const goodVision= true;
const isTired= false;

if(gLicense && goodVision && !isTired) {
  console.log("You're good to drive!");
} else {
  console.log("Let Srizen drive instead");
}
```

This is a good way to show how to combine our `not` operator with `and/or`



### Statements and Expressions

Expression: A piece of code that produces a value (see following examples)

```js
3+4		// produces number 7
1991	// produces itself
true && false && !false		// produces some Boolean value
```

Statement: A bigger piece of code that does not produce a value on itself
		   If something ends in a semicolon, it's usually a statement

In terms of regular English...
Statements are entire sentences
Expressions are the individual words that actually produce a value (verbs)

You'll notice how an expression (which produces a value), is ironically a key component of a statement (which does not)

##### Example:

```js
if (23 >10) {
    const str= "23 is bigger";
}
```

The entire if argument and block is a STATEMENT
It performs some ACTIONS like declaring a variable, but it doesn't produce a value

The string is an EXPRESSION, which produces a value in the form of a verbal message
`const str= "23 is bigger"` as a whole is a STATEMENT though

##### Why the Distinction Matters

JavaScript only allows certain types of inputs (expressions, statements...or whatever) in many scenarios. Take template literals for example- you are only allowed to store expressions in the placeholders

```js
const myName= "Jason Bustamante!";
const mission = `My name is ${myName}!`
```

We have to put strings or numbers in there. It wouldn't make sense if we tried to shove an if block into `${ }`



### JavaScript Releases

There's a new JS release every single year, adding new features and syntax to the existing language. 

- These are essentially just patches that add new things to JS without removing any old content which would break all the sites that use them
- The original JS language was created in 10 days by 1 guy who had no idea how big this would become. 
- As such, JS has a lot of odd quirks and strange bugs which gives it a sour reputation. However, the newly released features are designed to completely replace the old ways of doing things. Just look at how the var declaration style for variables has now changed to let and const

#### Compatibility and New Releases

ES5 is supported by all bowsers, so using features till then is nearly 100% safe. With future releases up till 2020 and beyond, you may need some extra steps. 

1. Use an updated Chrome browser while you develop. 
2. When its time to deploy your creations, use Babel to convert back to ES5 to assure compatibility for all users. (official actions are called transpile and polyfill)

#### Learning ES5 Stuff

- It is imperative that we learn to code with modern JS now that enough time has passed (ES6 and beyond)
- However, learning how ES5 functions in certain areas is also very important. 
  At your job, there will be tons of old code using ES5. 
  Plus, many online tutorials will still be using this old standard 

### ES5 Strings

Back then, we didn't use backticks to make using quotation marks within strings easy. We had to use escape sequences to signal the browser not to exit a string

#### Quotation Marks

Method A) 
Back in ES5, we relied on escaping a quote by preceding each nested quotation mark with a backslash `\`

Method B)
We still had the option to use both `' and "` to write quotes within strings

Desired String: ![image-20210213162114890](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210213162114890.png)

```js
let myString= "I am /"double quoting/" here in this string"
```

or

```js
let myString= 'I am /"double quoting/" here in this string'
```

The issue with method B is when we need to use apostrophes.
Including `shouldn't` in the above sentence would exit the string

#### Other Escape Sequences in ES5

![image-20210213163240360](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210213163240360.png) 	Desired String:  ![image-20210213163533064](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210213163533064.png)

```js
var myStr= 'FirstLine\n\t\\SecondLine\nThirdLine' // but how cringe is it?
```





# Functions

Before we begin, remember that it's typically bad practice to mutate data passed into a function permanently. Leave what's passed into a function intact, and if you need to do something to the data, shadow/deep clone it

### Overview of Function Properties

#### Returning Multiple Values from Functions 

- Traditionally, you are only allowed to return 1 thing from a function
- You can return an array, or object containing multiple values if you wish to have a function produce more than 1 result (in future lesson)

#### What Return Does

- The return statement causes the computer to immediately exit the function. 
  Any code coming after this statement will be ignored
- Can have multiple return statements if we are using a loop inside our function

```js
function admission(currentYear,birthYear){
  let age= currentYear-birthYear;

  if (age>=18) {
    return "You can go to uni!" ;
  }
  else {
    const yearsLeft= 18-age;
    return `You can go to uni in ${yearsLeft} years`;
  };
  console.log("This is here to prove return statements cause an immediate exit");

};
let x= admission(2020,2008);
console.log(x);
```

![image-20210103014938447](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210103014938447.png)



### Function Declarations & Managing Outputs

Functions: Chunks of code that can be reused- just variables on a larger scale
		   Hold 1 or more lines of code

Variables: Hold one value

Parameters: 
Variables specific only to the function. 
Can reuse parameter names or even name variables the same thing w/ no problems

Arguments: 
The real values passed to and received by the function

Result: 
The output- often passed out the function by `return varName;`
This can now be used anywhere in our code, not just the function block
The return statement causes the computer to exit the function immediately

```js
function name(parameter1, parameter2, parameter3) {
  	// code to be executed-only when invoked. 
	// Otherwise the function does zilch
}
```

The parameters don't need to be defined before the function block. When we invoke the function, we set the values of the parameters during the statement



##### Example 1: Simple Function with No Arguments

This function does not return any values, it just logs a message when called upon

```js
function msgLogger() {
  console.log("This is a proof of concept!")
}
msgLogger();
msgLogger();
```

![image-20210101173043768](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210101173043768.png)



##### Simple Example 2: Fruit processor

Pass data into a function then have them output something back to use. 
Imagine functions are food processor machines. 
Shove some fruit in there, and it'll return something more desirable

```js
function juicer(num1, num2) {
  const mix= `This is made from ${num1} apples and ${num2} oranges`;
  return mix;
}
const recipe= juicer(5,2);  // storing the returned output
console.log(recipe);
```

![image-20210101175106869](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210101175106869.png)

- If we want to save the function output for later use...
  Save it as a variable defined as a function call
- If we try to just use the `return mix;` without it being properly stored, JS will not know of its existence

INCORRECT STORAGE:

```js
// Proof of the Importance of Proper Output Storage
function juicer(num1, num2) {
  const mix= `This is made from ${num1} apples and ${num2} oranges`;
  return mix;
}
console.log(mix);
```

![image-20210101174410016](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210101174410016.png)

AVOIDING STORAGE: 

If you really don't want to store the outcome of a function as a variable, you have the option to just invoke a function to spit out something you'll use only once

```JS
// Proof of the Importance of Proper Output Storage
function juicer(num1, num2) {
  const mix= `This is made from ${num1} apples and ${num2} oranges`;
  return mix;
}
console.log(juicer(5,2));
```

![image-20210101175121569](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210101175121569.png)



##### Should we Return a Variable or a Regular Output?

You only need to define a variable inside a function body if you intend on using it for something else. 
If the calc in there only involves one step, you can just capture the output value

```js
function calcAge1(birthYear) {
  howOld= 2021-birthYear;	//We define a new variable inside the function body
  return howOld;
}
let age= calcAge1(1996);	// We capture the output as a variable
console.log(age);			// Log the output using a variable
```

```js
function calcAge1(birthYear) {
  return 2021-birthYear;
}
let age= calcAge1(1996);	// We capture the output as a variable
console.log(age);			// Log the output using a variable
```

Here in the bottom snippet, we capture the function output as a variable. Even that's optional. If we only wanted to broadcast the outcome to the console, we could've done this:

```js
function calcAge1(birthYear) {
  return 2021-birthYear;
}
console.log(calcAge1(1996)); // Log the output directly
```



### Function Expressions

There are 2 main ways to write functions; as a declaration or expression 

Function expressions are written very similarly to declarations
You even capture the returned value the same way too

With function expressions...
You define a variable as an unnamed function 

Allowed because functions are just values that aren't calculated until called
And variables are supposed to hold values... right? Yes, that's right

```JS
// DECLARATION VERSION
function calcAge1(birthYear) {	// declare a function
  return 2021-birthYear;
}
let age= calcAge1(1996);		//Capture output inside a variable
```

```JS
// EXPRESSION VERSION (anonymous in this case)
const calcAge2 = function (birthYear) {		// declare a function AS a variable value
  return 2021 - birthYear;
}
let age2= calcAge2(1996)		//Capture output of the funtion variable inside another
```

Difference When Invoking:

1. You CAN call upon a function declaration BEFORE it is defined in the JS doc
2. This produces an error if you try to do so with function expressions
   "Cannot access before initialization, blah blah"

#### No Return Functions

You can use functions with no returns to simply change the value of a variable inside. It's necessary for that variable to be defined outside of the function 
It's output will be undefined

```js
var sum = 1;	// variable defined outside the function

function addTotal(num) {
  sum = sum + num;
}
addTotal(3);  // we invoke the function, changing the sum variable value
console.log(sum);
console.log(addTotal(3)); //The output will be undefined due to no return
```

![image-20210213205631428](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210213205631428.png)

### Function Scope

Local Scope: 
When we declare a variable inside a function, it's only usable there by default
We can use it elsewhere using certain methods described in the "using outputs" lessons

Global Scope:
If a variable has global scope, it can be called upon/used anywhere in the JS doc

We can accidentally give variables global scope when we don't use a keyword during the initial declaration

```js
function fun1() {
  a=5	// accidentally global. Should have used let a=5
  let b=5	// local, as intended
}
```



#### Global VS Local Scope Variables

You can have 2 variables go by the same name, as long as 1's local while the other's global. It's not encouraged though

```js
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}

console.log(someVar); // uses global 
console.log(myFun()); // uses local b/c we invoked the function for this log
```

![image-20210213202657335](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210213202657335.png)

### Arrow Functions

Arrow functions were introduced in ES6, and are the 3rd way of conveying functions. 
They are a special form of function expressions that are shorter to type

The value after the arrow is returned implicitly- if the function is a 1 liner
We still capture the output with a variable and feed parameters values to do so

```
let functionName = (args) => output		//NAMED
(a, b) => a + b + 100;					//ANONYMOUS
```

We skip function, return, & even the curly braces when the case is simple enough

##### SIMPLEST VERSION: 1 parameter, 1 line of code to return		

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210217174650588.png" alt="image-20210217174650588" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210217174704725.png" alt="image-20210217174704725" style="zoom:80%;" />



##### EXAMPLE 2: 1 parameter, multiple lines of code in body

We must reintroduce curly braces

```js
const yearsTillRetire= (birthYear) => {
  const age= 2020- birthYear;
  const retirement = 65-age;
  return retirement;		// need the return since the function body is multi-line
}
let waitTime= yearsTillRetire(1996);		//Output capture
console.log(waitTime);
```

![image-20210101220934521](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210101220934521.png)

##### EXAMPLE 3: Multiple parameters, multiple code lines in body

We must reintroduce curly braces AND the parameter brackets

```js
const yearsTillRetire= (birthYear, myName) => {
  const age= 2020- birthYear;
  const retirement = 65-age;
  return `${myName} gets to retire in ${retirement} years`;
}
let waitTime= yearsTillRetire(1996, "Jason");
console.log(waitTime);
```

You might notice how the advantage of using arrow functions (short syntax and fast speed) is lost when we start tackling more complex problems

Remember that `const yearsTillRetire` is not actually part of the function. We're just defining a new variable, setting it equal to a function

##### One key Difference 

Arrow functions do not receive a 'this' keyword- unlike the other 2 function types.
Will learn more about the implications of this in another lesson



### Anonymous Functions and Callbacks

You've learned about the difference between function declarations and function expressions. 

- With expressions, you set a function equal to a variable. 
- You can choose to supply or omit a function name when using function expressions'
  We call these ANONYMOUS or NAMELESS functions

Named Function Expression:

```js
const calcAge = function bob(birthYear) {	//We named our function "bob" here.
  return 2021 - birthYear;
}
console.log(calcAge(1996)); //OUTPUT 25
```

At first glance, there's no advantage to naming function expressions since we'll invoke them using the variable name anyway

Anonymous Function Expression:

```js
const calcAge = function (birthYear) {	// excluded a name
  return 2021 - birthYear;
}
console.log(calcAge(1996)); //OUTPUT 25
```

#### Differences b/t Named and Anon Functions

The main difference is that you can't use an anonymous function anywhere other than where you declare it- due to being nameless n' all

For more info about the differences internally, check out this article!
[JavaScript Anonymous Functions (scottlogic.com)](https://blog.scottlogic.com/2011/06/10/javascript-anonymous-functions.html)

![image-20210218184224280](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210218184224280.png)

#### Callbacks

Functions are classified as objects in JS, and sometimes they require parameters

- We can pass a function as a parameter for another function
  This is what we refer to as a callback
- We can callback a function that was previously defined
  OR we can declare a function right when we need it as an anonymous function
- It's pretty common to use anonymous arrow functions for callbacks (lean)

CALLBACK WITH AN EXTERNAL FUNCTION

```js
const message = function() {console.log("Message is shown after 3 seconds");}
setTimeout(message, 3000);
```

- We defined an anonymous function
  Then we called the message function as a parameter to the TIMEOUT function

CALLBACK WITH AN INTERNAL FUNCTION

```JS
setTimeout(function() {  
    console.log("This message is shown after 3 seconds");
}, 3000);
```

- We defined the function for `message` inside our parameter brackets (nameless) 
  Don't forget the 3000 as the second parameter

CALLBACK WITH AN INTERNAL ARROW FUNCTION 

```js
setTimeout(() => {console.log("This message is shown after 3 seconds");}, 3000);
```



### Externally Defined Nested Functions

Let's say you need a combination of 2 machines in order to make peach mango juice. 
The outer machine cuts the fruits into slices
The inner machine grinds the slices into liquid juice
The only thing is, in JS we can define the inner machine outside of the grand contraption

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210102172041797.png" alt="image-20210102172041797" style="zoom: 67%;" />

#### Example: Fruit Extract Machine

A fruit extract machine takes half of the produce you put inside of it and creates a delicious mix. The rest of the fruits go to waste.

Function 1: Divides the fruit supplied by 2
Function 2: Outputs a string detailing exactly how many fruits the extract is made of

```js
function fruitDivider(numFruits) {
  return numFruits/2;
};
// this function expression takes the number you give it and divides it by 2
// If you try to give it a diff data type, it'll try to convert it to a number if possible

function extractRecipe(numPeach, numMango) {
  let x= fruitDivider(numPeach);   //param value 1 gets funneled to divider function
  let y= fruitDivider(numMango);   //param value 2 gets funneled to divider function
  return `Our extract is made from ${x} peaches and ${y} mangos`;
};
console.log(extractRecipe(8,5))
```

![image-20210102190629529](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210102190629529.png)

This works the same way with function expressions as well...

```js
const fruitDivider= function(numFruits) {
  //SAME INTERIOR CODE 
};

const extractRecipe= function(numPeach, numMango) {
 // SAME INTERIOR CODE
}

console.log(extractRecipe(8,5));
```



#### Why Bother Plying a Function Here?

We absolutely could just divide the numFruits input by 2 then output a string. 
However, what would happen if we had 15 fruits to consider? 
What if the juicer efficiency increased and it now used 75% of its input to make the extract? 
We'd have many lines of code to change

Follow the dry code principle, and avoid repeating yourself



### Internally Defined Nested Functions

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210102172453397.png" alt="image-20210102172453397" style="zoom:65%;" />

#### Example: Remake of Previous Lesson with Nested Functions

A fruit extract machine takes half of the produce you put inside of it and creates a delicious mix. The rest of the fruits go to waste.

Nested Function: Divides the fruit supplied by 2
Outer Function 2: Outputs a string detailing exactly how many fruits the extract is made of

```js
function extractRecipe(numPeach, numMango) {
  function fruitDivider(numFruits) {
    return numFruits/2;
  }
  let x= fruitDivider(numPeach);   //param value 1 gets funneled to divider function
  let y= fruitDivider(numMango);   //param value 2 gets funneled to divider function
  return `Our extract is made from ${x} peaches and ${y} mangos`;
};

console.log(extractRecipe(10,4));
```

#### Nested Functions are Local

- The scope of nested functions are local to their parents- they cannot be invoked anywhere else
- Can use the nested functions outside of its parent function with some trickery
  Must have it be the return of its parent function

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210102233200212.png" alt="image-20210102233200212" style="zoom:70%;" />

```js
function extractRecipe(numPeach, numMango) {
  function fruitDivider(numFruits) {
    return numFruits/2;				// defined a nested divider function
  }
  function fruitMultiplier(numFruit) {
    return numFruit*2;				// defined a nested multiplier function
  }
  let x= fruitDivider(numPeach);   
  //param value 1 gets funneled to divider function
  let y= fruitMultiplier(numMango);   
  //param value 2 gets funneled to divider function
  return y;	
};

let yImport= extractRecipe;		// set a new variable equal to the parent function
console.log(yImport(6,8));

// we can use the nested function by calling the parent function now. 
// This is because the parent returns y - a variable we set equal to the nested function inside
```

![image-20210213080016952](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210213080016952.png)

#### Can Redefine Parent Function as Inner Function

- Inner functions can be programmed to override what the parent function was originally
  In the demo below, when you call the parent function the first time, it'll go normally
  If you call the function a second time, it'll run the inner function it was redefined as

![image-20210102234023451](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210102234023451.png)

```JS
function divider(intD) {
  
  function multiplier(intM) {
    let product= intM*2;
    console.log(`The number input multiplied by two equals ${product}`);
  };
  
  let quotient= intD/2;
  console.log(`The number input divided by two equals ${quotient}`);
  divider= multiplier; //Function redefines itself for every iteration after first
};    

divider(10);  divider(10);  divider(10);

// Result 1 is 10/5 since the answer is logged before the function redefines itself
// Result 2 is 10*2 because we redefined the divider function as the multiplier 
// From here on, each time we call the parent, we actually call the inner function
```

![image-20210102235706859](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210102235706859.png)



https://www.youtube.com/watch?v=VtG0WAUvq2w)



### Default Parameters for Functions

Functions allow us to define default parameters- which are used as placeholders in case the coder does not fill in a required argument for our function

- It's also useful when a function will typically use the same arguments multiple times. Now we don't even need to feed it any arguments unless they're different than normal

For the record, these work with all kinds of functions. Us using arrow functions for each of the following examples is a coincidence

![image-20210217180434688](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210217180434688.png)

Let's see what happens when a function that requires an an input is not fed one:
The missing parameter is set to "undefined"



#### EXAMPLE: Multiple Default Parameters

```js
const increment = (number=5, value=1) => number + value;

console.log(increment(5, 2));
console.log(increment(5));	
```

![image-20210217181728475](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210217181728475.png)

#### Expressions as Default Parameters

Your default parameters don't always have to be flat values. They can be...

- Expressions- even ones involving earlier parameters in that same function

```js
function airCanada(flight, passengers = 1, cost = passengers * 400) {
  return `flight number: ${flight}\npassengers: ${passengers}\ncost: ${cost}`;
}
console.log(airCanada('L1H')); 
```

![image-20210319215001232](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210319215001232.png)

Cost has a default parameter that's calculated based on the default number of passengers. Obviously, the cost default parameter needs to come after passengers

#### Skipping Parameters when Invoking Functions

Take a look at the previous example- we defined the first parameter then skipped defining the rest, leaving them as undefined

- We can't do this if we wanted to only supply parameters values to the 1st and 3rd
  JS will assign your parameter to the next in line that needs one (the 2nd)

- If you want to skip parameters in situations like this, simply feed it undefined

```js
// define only parameters 1 and 3: Correct way
function airCanada(flight, passengers = 1, cost = passengers * 400) {
  return `flight number: ${flight}\npassengers: ${passengers}\ncost: ${cost}`;
}
console.log(airCanada('L1H',undefined,1000));
```

![image-20210319215726019](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210319215726019.png)

#### ES5 Default Parameters

Before ES6, we redefined the function parameter early on within the function

```js
function add(arg1,arg2){
  arg1= arg1 || 10; //or defaults to 10 if arg1 is undefined
  arg2= arg2 || 5; //or defaults to 10 if arg1 is undefined
  return arg1+arg2;
}
console.log(add()); //OUTPUT:15
```



# Arrays

### Intro to Arrays

Arrays are single objects that contain multiple values stored in a list. 
Objects in arrays can be stored in variables and dealt with like any other value

The difference is that we can access each value inside the list individually, and do super useful and efficient things with the list, like loop through it and do the same thing to every value. 

- You can store various data types — strings, numbers, objects, and even other arrays. 
- Feel free to mix data types in a single array

```js
// SYNTAX FOR ARRAYS
const metFriends= ["Jesse", 2016, "Chung", 2015, "Mahmud", 2018];
// OR
const metFriends= new Array("Jesse", 2016, "Chung", 2015, "Mahmud", 2018);
// FOR AN ARRAY TO FILL IN LATER...
const toFill=[];
```

Arrays are zero based. The index value of the first element is 0, not one
If an element semantically is 20th, it is [19] in JS
If an element in JS is [4] in JS, it's 5th semantically

#### Changing Array Values

```js
const metFriends= ["Jesse", 2016, "Chung", 2015, "Mahmud", 2018];
metFriends[0]= "Srizen";	//ALLOWED
metFriends= ["Katherine", 2015. "Shehnoor", 2014, "Ali", 2020] // NOT ALLOWED
```

- Even though this array is defined as a const variable, its contents can be changed because arrays are not primitive values
- You are blocked from redefining the array as a whole however 
  (unless you initially defined it with `let`)

Selecting the Final Element without an Index Value:

```js
console.log(arr[arr.length-1]);
```

This works because we use an expression to create a value to target an element with. This would not work with a declaration

#### Example 1: Multiple Data Types

In this array, we're going to shove our friends array in as an element
Alongside it we'll put variables, expressions, undefined/null variables...etc

```js
const metFriends= ["Jesse", 2016, "Chung", 2015, "Mahmud", 2018];
let a=19
let b;
let c=null;
const oddArray= [metFriends, a, a-19, "Penguin", b, c];
console.log(oddArray);
```

![image-20210103205341743](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210103205341743.png)

#### Example 2: Function Calcs on Individual Elements

- Calculate the age of the 1st, 2nd, and final person whose birth years are stored in the "birth" array
- Store these results in a new array
  Option 1: Put calc outputs in variables. Store variables in array
  Option 2: Directly put the function call expressions in the array

OPTION 1

```js
const calcAge= function(birthYR) {
  return 2020-birthYR;
}
const birth= [1990,1967,2002,2010,2018];

const age1= calcAge(birth[0]);
const age2= calcAge(birth[1]);
const age3= calcAge(birth[birth.length-1]); // Last
// We run array elements through a function then set em equal to new variables
//The original array's contents are still intact

const newArrayV1= [age1,age2,age3];
console.log(newArrayV1);
```

OPTION 2 BELOW

```JS
const calcAge= function(birthYR) {
  return 2020-birthYR;
}
const birth= [1990,1967,2002,2010,2018];

const newArrayV2= 
[ calcAge(birth[0]), calcAge(birth[1]), calcAge(birth[birth.length-1]) ];
console.log(newArrayV2);
```

Works because arrays need values to be put inside them
Function calls are expressions that spit out values



### Basic Array Methods

JS has some built in functions that can be applied directly to arrays- aka methods.
Remember that functions return something, meaning each method will return a value 

There are tons of methods available, which is good because arrays are one of the most important topics. This is an intro lesson! We have a whole module for this

#### Array Methods/Expressions 

| METHOD    | PURPOSE                                                      | RETURNS                           | SYNTAX                                                       |
| --------- | ------------------------------------------------------------ | --------------------------------- | ------------------------------------------------------------ |
| Push Ⓟ    | Adds element(s) to end of array                              | Length of mutated array           | `rayName.push(7,8)`                                          |
| Unshift Ⓟ | Adds element(s) to start of array                            | Length of mutated array           | `rayName.unshift(7,8)`                                       |
| Pop Ⓟ     | Removes final array element (returns value it removes)       | Removed element                   | `rayName.pop()`                                              |
| Shift Ⓟ   | Removes first array element (returns value it removes)       | Removed element                   | `rayName.shift()`                                            |
| indexOf   | Gives index# of an array element                             | index # of element                | `rayName.indexOf(el_value)`                                  |
| includes  | returns a Boolean based on whether a value is present in the array (T), or isn't (F) | true/false                        | `rayName.includes(el_value)`                                 |
| slice Ⓝ   | Clones a part of an existing array and places values inside another. Orig array left intact | sliced portion in a new array  ◐  | `arr.slice(2)`<br />`arr.slice(2,4)`                         |
| splice Ⓟ  | Causes lasting change to an array by removing entries, adding, or doing both at once | removed entries                   | `arr.splice(~~~)`<br />many versions depending on intent (see examples) |
| reverse Ⓟ | Reverses the original array, permanently changing it         | flipped version of original array | `arr.reverse()`                                              |

Be aware that the includes method uses strict equality- no type coercion.
Since it returns a Boolean, this method is great for conditional statements like if/else statements



#### Push Method

```js
const pals = ["Mayra", "Bethany", "Srizen"];
pals.push("Shristi");	// Value return fr/ this method is the length of the array
console.log(pals);
```

![image-20210103215038034](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210103215038034.png)

Let's add on to our code and see what value is returned from our function

```js
const pals = ["Mayra", "Bethany", "Srizen"];
const returnedValue= pals.push("Shristi");
console.log(returnedValue, pals);
```

![image-20210103215613518](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210103215613518.png)

#### Unshift Method

```js
const smashers= ["DizZy", "Anai", "JW", "RickyRush"]
smashers.unshift("KingFuego")
console.log(smashers);
```

![image-20210103220348087](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210103220348087.png)

#### Pop Method

```js
const rip= ["FutureShop", "Zellers", "Weston Produce", "Buffet King"]
rip.pop();
console.log(rip);
```

![image-20210103224834235](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210103224834235.png)

The pop method returns the value it removes

```js
const rip= ["FutureShop", "Zellers", "Weston Produce", "Buffet King"]
const returnedValue=rip.pop();
console.log(returnedValue);
```

![image-20210103225046653](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210103225046653.png)

#### Shift Method

```js
const numbers= [3, -9, 7, 25];
numbers.shift();
console.log(numbers);
```

![image-20210103225602416](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210103225602416.png)

The shift method returns the value it removes:

```JS
const numbers= [3, -9, 7, 25];
const vari_A= numbers.shift();
console.log(vari_A);
```

![image-20210103225743307](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210103225743307.png)

#### indexOf Method

```js
const heroes= [3, -9, "Punisher", "Daredevil"];
console.log(heroes.indexOf("Punisher"));
```

![image-20210103231130953](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210103231130953.png)

If you try to use this on an array element that isn't there, the result will be -1

#### slice Method

The slice method cuts off and clones values from an array based on index numbers. `arr.slice(2,5)` means we take array values 2,3, and 4. ◐

```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2)); 
// OUTPUT: ["camel", "duck", "elephant"]

console.log(animals.slice(1, 5)); 
// OUTPUT: ["bison", "camel", "duck", "elephant"]
```

We can use negative numbers to slice as well:

```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(-2)); 
// takes last 2 entries (when using negatives, think IRL sequential) 
// OUTPUT: ["duck", "elephant"]

console.log(animals.slice(1,-2)); // exclude taking final 2. Start taking fr/ index 1
// OUTPUT: ["bison", "camel"]
```

If you want to clone an array, just use slice() with no argument

```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const clone= animals.slice() // 
```



#### splice Method

The splice method is completely different than slice, and should not be mistaken for it

```JS
arr.splice(startInd, OptionalDeleteCount, Optionalitem1, Optionalitem2...)
```

- If you don't specify the delete count, it'll delete everything past the starter index
- The splice itself equals the elements in the array you deleted 
  The original array is permanently changed, and likely has elements removed/added

```js
let arr= ["a","b","c","d","e","f"] //starter code
```

REMOVING ARRAY ELEMENTS:

```js
let arr= ["a","b","c","d","e","f"]

let ripped=arr.splice(4,1) // cut off 5th index value and that's it
console.log(`deleted the following: [${ripped}]`);
console.log(`left with: [${arr}]`);
```

![image-20210421113948636](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210421113948636.png)

```js
let ripped=arr.splice(1) // cut off index 1 and everything after
console.log(`deleted the following: [${ripped}]`); // splice= all removed elements*
console.log(`left with: [${arr}]`);
```

![image-20210319064709343](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210319064709343.png)

```js
let ripped=arr.splice(1,3) // cut off 3 entries starting with index 1
console.log(`deleted the following: [${ripped}]`);
console.log(`left with: [${arr}]`);
```

![image-20210319064652660](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210319064652660.png)

We can also use negative numbers in splice

```js
let arr= ["a","b","c","d","e","f"];
let ripped= arr.splice(-4,2) //remove 2 elements starting from index -4 (cd removed)

console.log(`deleted the following: [${ripped}]`);
console.log(`left with: [${arr}]`);
```

![image-20210324053717329](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210324053717329.png)

```js
demoArr.splice(nemoArr.length-2) //remove final 2 entries
```

REMOVING AND REPLACING

- This time, we cut off 3 entries starting with index 1, just like last time. 
  However, we insert 2 new entries; strings X and Y
- You're allowed to cut off more values than you add in, and vice versa. 
  The ratio does not have to be 1:1
- They're added where the start index is- index 1 in this case

```js
let ripped=arr.splice(1,3,"X","Y") //cut off 3 entries starting with index 1
console.log(`cut off the following: [${ripped}]`);
console.log(`left with: [${arr}]`);
```

![image-20210319065607143](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210319065607143.png)

ADDING 

- You can also choose to remove nothing and just add new things into your array
  Just set the second parameter, `deleteCount` to 0

```js
let ripped=arr.splice(1,0,"X","Y") //insert 3 entries starting with index 1
console.log(`cut off the following: [${ripped}]`);
console.log(`left with: [${arr}]`);
```

![image-20210319065542755](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210319065542755.png)

#### reverse() for arrays Ⓟ

Reverses your array's index order

```js
const array1 = ['one', 'two', 'three'];
array1.reverse();	// causes PERMANENT change to the orig array
console.log(array1);
// expected output: Array ["three", "two", "one"]
```



### Looping through Arrays

Looping through arrays takes place as soon as you involve the array inside the action code block of your loop. Typically you select which index you'll be using via the incrementation variable

A common way to store the results of your operations is to put them inside an empty array

#### EX 1.

GOAL: Loop through an array and store each value's type into a new array

```js
const jonas= [ 
  "Jonas", 
  "Schmedt", 
  2037, 
  "teacher", 
  ["Mike","Pete", "Steve", true]
];
const types=[];

for (let i=0; i< jonas.length; i++) {	
    // Be sure to start counter at 0. Arrays start at this value
  types[i]= typeof jonas[i]			// Method 1

}
console.log(types);
```

![image-20210105161839217](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210105161839217.png)

The other way to fill in the empty array is to use the push function, which adds values to the end of an array. Either way works

```js
types[i]= typeof jonas[i]     	//Method 1
types.push(typeof jonas[i])		// Method 2. A bit cleaner
```



#### EX 2.

GOAL: Perform an age calculation on the birthyear array, then record all of the results in an empty array

```js
const birthYears= [1991,2007,1969,2020];
const ages= [];

for(let i=0; i<birthYears.length; i++) {
  ages[i]= 2020-birthYears[i]
}
console.log(ages);
```



### Nested/Multidimensional Arrays

You already know that you can store arrays inside of a parent array

```js
let myArray= [1,2,3,[11,7,93]] 
```

HOWEVER, you can also store arrays inside of arrays inside of an array (....yeah)

```js
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
```

We access these nested array elements using bracket notation. 
However, you'll need multiple pairs of brackets in cases like this

> ```js
> arr[3]; // equals [[10,11,12], 13, 14]	(first nested array)
> arr[3][0]; // equals [10,11,12]			(second nested array)
> arr[3][0][1]; // equals 11				(index element 1 of the 2nd nested array)
> ```



#### Looping through Nested Arrays

When you have nested arrays, looping through them requires nested loops

- The first loop will parse through the highest level parent array
- Subsequent loops will sift through the nested arrays

```js
var arr = [
  [1,2], [3,4], [5,6]
];
```

Loop through this entire multidimensional array- don't skip a single entry

Log the following to the console:

1) The parent index number you're on
2) The nested array's index number you're on
   Go through every single element 

```js
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
// Console log reads: 1 2 3 4 5 6 (on new lines each)
```

for loop 1: 
iterates through entire parent array, 1 index at a time

for loop 2: 
Each iteration goes through 1 of the nested arrays. 
However, these nested ones are nameless. So they refer to them using `arr[i]`
We then log the current element of the nested array

#### Official Terminology

When describing exactly how far an array is nested, we use "levels of depth"

```js
let arr=[1,2,3,[4,5,6]] // [4,5,6] is at depth level 2
```

Let's try to create a depth of 5:

```js
let myNestedArray = [ //nested depth level 1
  [[[['iterate']]], 1.3849, 7, '8.4876', 'arbitrary', 'depth']
//2345 <= 5 nested levels of depth (just count brackets, it's easy)
];
```

CHALLENGE:

```js
let myNestedArray = [
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
];
```

Take your starter code and give it 5 levels of depth. 
Include these strings on these levels:

- Somewhere on the third level, include the string `deep`
  On the fourth level, include the string `deeper`
  On the fifth level, include the string `deepest`

```js
let myNestedArray = [ //depth level 1
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  [["deep",["deeper",['deepest']]], 1.3849, 7, '8.4876', 'arbitrary', 'depth']
//23       4         5 
];
```



### Counting Duplicates in Arrays (experimental)

Checking to see if duplicates are present is simple- there's a dedicated method for that. Sometimes we want to know exactly how many times things repeat in an array

PRELIMINARY KNOWLEDGE YOU'LL NEED

- `Null + 1 = 1`. To keep things friendly, we could've replaced null with 0
- `counts["ape"]= "great"` sets a key value pair in an object 
- X is the element of the array (forEach loop parameter gives us direct access)

#### Example:

```JS
const uniqueCount= ["c", "c", "c", "b", "b", "a"]
function countAppearances(arr) {
  let counts = {};
  arr.forEach(function (x) {
    counts[x] = (counts[x] || null) + 1;
  });
  return counts;
}
console.log(countAppearances(uniqueCount));
```

![image-20210309014935475](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210309014935475.png)

EXPLANATION (feel free to just use the snippet without this if you want)

The only complicated part of this code is:

```js
counts[x] = (counts[x] || null)+1;			
// this creates a key value pair in the array on first visit
// It'll adjust it on the second visit and onwards
```

We have an OR operator here. 
It will pick the first truthy it finds or default to using the final option (null)

The 2 possible outcomes are
`counts[x]= counts[x]+1` if the counts[x] KVP exists already (that's the truthy)
`counts[x]= null+1` if the counts[x] KVP does not exist (happens for first encounters)

> WHAT HAPPENS IN EACH ITERATION
> counts[c]= null + 1 		(1)
> counts[c]= 1 + 1			(2)
> counts[c]= 2 + 1			(3)		final key value pair is c:3
> counts[b]= null + 1		 (1)
> counts[b]= 1 + 1			(2)		final key value pair is b:2
> counts[a]= null + 1		 (1)		final key value pair is a:1

![image-20210309014935475](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210309014935475.png)

#### Not Perfect

This custom solution is still not without errors. We get the same answer shown above even when we feed it an array like this:

```js
const uniqueCount = ["c", ['c'], 'c', 'b', 'b', 'a'];
```

I would recommend only using this for simple arrays
https://www.youtube.com/watch?v=AYVYxezrMWA



### Borrowing Methods via call, bind, & apply

#### Example 1: call/apply

Reuse an object's method inside another object. 
The 'this' keyword will not be compatible by default

Starter Code: An airline "Lufthansa" has an object set up with an internal method inside. 
It logs a message and adds values to an array. 
To do so, it needs to use the method's arguments, plus the "this" keyword a couple times

```js
const Lufthansa={
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name){
    console.log(
      `${name} booked a seat on ${this.airline}\nflight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
  }
}
Lufthansa.book(239, 'Jonas Schmedtmann')
console.log(Lufthansa.bookings);
```

![image-20210320111529872](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210320111529872.png)

Let's say the company that owns Lufthansa purchases another airline. It's object will be the exact same, but we want to reuse Lufthansa's method without copy-pasting it (that'd bloat our code). Make this happen

METHOD 1: Clone the function on the global scope, then use call

You cannot simply clone the function and feed it arguments right away- it's defined on the global scale and is no longer a method. You'll have to use the call method so that the "this" keyword it uses points to the Eurowings object

```JS
const eurowings= {
  airline:"Eurowings",
  iataCode: "EW",
  bookings: [],
}
let book= Lufthansa.book; // this is on the global scope, causing errors for "this"
book.call(eurowings, 239, "Aden") // issue fixed when we point it to EUwings obj
console.log(eurowings.bookings)
```

![image-20210320114403932](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210320114403932.png)

ALTERNATE METHOD I FOUND: Define the method inside Eurowings' object

```js
const eurowings= {
  airline:"Eurowings",
  iataCode: "EW",
  bookings: [],
  book: Lufthansa.book
}
eurowings.book(239, "Aden")
console.log(eurowings.bookings);
```

![image-20210320113940044](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210320113940044.png)

#### Ex 2. Bind

Use the starter code from the previous sub section. 
Redo the question from example 1, but use bind this time. 
Tailor your function to always work for flight 400 (hardcode the `flightNum`)

```js
const eurowings= {
  airline:"Eurowings",
  iataCode: "EW",
  bookings: [],
}

let boundBookingF400= Lufthansa.book.bind(eurowings,400) //hardcoded flightNum
boundBookingF400("Terry") 
// only need to feed 1 arg for a function that regularly takes 2
```

![image-20210620030805053](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210620030805053.png)



### Creating Empty Arrays && fill() 

Sometimes you may want to create an array in a situation where you don't know what the exact values of the entries will be. 

- Use the constructor method to create a new array, but only feed it 1 argument. 
- That argument will equal the number of entries in your array- all of which will be set to "empty"'

```JS
const emptyArr= new Array(5);
// since we only gave it 1 arg, it creates an empty array with a length of 5
//RESULT: 		Array(5) [ <5 empty slots> ]
```

No methods work on empty arrays, except fill()

#### fill() 

This method sets array entries equal to a value of your choosing
You can use it on an empty array or even a normal one

```js
arrName.fill(fillValue,startPt,endPt) //  ◐
// the last 2 args are both optional
```

EXAMPLE: Fill the entire empty array with 0's 

```js
const emptyArr= new Array(5);
emptyArr.fill(0)
//RESULT: 		Array(5) [ <5 empty slots> ]
```

EXAMPLE: Fill everything but the first 2 entries with 0's 

```JS
const emptyArr= new Array(5);
emptyArr.fill(0,2)
//RESULT:		Array(5) [ <2 empty slots>, 0, 0, 0 ]
```

EXAMPLE: Fill the 2nd to 4th entries with 0's

```js
const emptyArr= new Array(5);
emptyArr.fill(0,1,4) //  ◐ affects index 1,2,3, but not index 4
```



### Array.from() to convert Iterables to Arrays

#### Converting Iterables to actual Arrays

Examples of iterables: Strings, maps, sets, DOM data structures
This method's main purpose is to turn iterable array-like structures into actual arrays

- This can prove very useful when using querySelectorAll, which creates a node list with all the HTML elements it matches with
- We turn this into an actual array so we can use array methods on it
  If not for `Array.from()`, we couldn't use any array methods on the node list 
  (unless we converted it another way, like with the spread operator)

EXAMPLE: 
Create a new array using the text content of query-selected elements

```html
<p>10</p> 	<p>2</p> 	<p>5</p>	 <p>3</p>
<script>
	const pTags= document.querySelectorAll("p")
	let tagNumbers= Array.from(pTags,(el)=>el.textContent)
	console.log(tagNumbers);  //OUTPUT: ["10", "2", "5", "3"]
</script>
```

#### Alternative to Empty Array+Fill 

- We can also use this constructor method as an alternative to the previous lesson. 
- Create empty arrays and fill them with whatever you want- with added flexibility thanks to the use of callback functions

The arrow function we employ actually has built in parameters identical to the map method. It gives you access to, array value, index value... and maybe other stuff

```js
const ex = Array.from({ length: 5 }, () => 0); // arr with length 5 filled w/ zeros
const ex2 = Array.from({ length: 5 }, (el,ind)=>ind); // arr with each entry=ind value
```

EXAMPLE 2: Create an array with randomly generated numbers between 0 and 100

```js
function randomInt0_100() {
  let a = Math.random()*101;
  return Math.floor(a);
}
const ex3 = Array.from({ length: 5 }, (el,ind)=>randomInt0_100());
console.log(ex3);
```



# Advanced Array Methods

![image-20210406012331371](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210406012331371.png)

Arrays have access to special methods which automate what you would otherwise have to set up manually. 

- If you wanted to add up all entries in an array for example, you would have to assign variables, set up an incrementor and counter...etc. 
- There's a method that will do this for you in as little as 1 or 2 lines

Each of them have parameters that must be provided in order for the method to work. 
You also have additional ones which are optional. 
All of these parameters give you direct access to certain aspects of your array

## Mutating with Ⓝ Methods

- Most of the time, having a method that creates a new object can be really useful, especially when writing pure functions. 
- Sometimes however, it can be annoying since we may want to permanently change something (there's a simple workaround though)

EXAMPLE: Use filter within a for loop

```js
function removeMatches(arr1, arr2) {
  arr2.forEach((ent) => {
    arr1.filter((val) => val !== ent); // creates a new array (not ideal)
  });
  console.log(arr1)
  return arr1 //OUTPUT: [ 5, 2, 1, 4 ] (FAIL)
}
removeMatches([5, 2, 1, 4], [1, 3, 2])
// goal: remove arr2 values from arr1
```

PROBLEM: Here, filter() keeps on creating new arrays instead of causing permanent change to the arr1- which ruins our potential results

SOLUTIONS

A) Use the pull method from Lodash which is just a mutation version of filter
B) Redefine the array you want to mutate as the result of filter

```js
function removeMatches(arr1, arr2) {
  arr2.forEach((ent) => {
    arr1= arr1.filter((val) => val !== ent); // JUST ADDED arr1= 
  });
  console.log(arr1)
  return arr1 // arr2 get
}
removeMatches([5, 2, 1, 4], [1, 3, 2])
// remove 1, 3, and 2 from the first array arg
```

Now, arr1 is continuously redefined, based off the previous iteration's version each time

## Chaining Methods Together

If applying a method to an array results in another array, feel free to chain another array method to it. 

- This array can be a tweaked original version or a brand new one
  So long as a method's output matches the next in line's required input
- This logic extends to methods used on objects and strings too

EXAMPLE: Describe a chain that wouldn't work 

- We couldn't chain a map method after a reduce method
- The reduce method turns the given array into 1 value- preventing us from chaining an other array methods afterwards

#### Example from Code Challenge

![image-20210330160435306](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210330160435306.png)



```js
let data1 = [5, 2, 4, 1, 15, 8, 3];
let data2 = [16, 6, 10, 5, 6, 1, 4];
function calcAverageHumanAge(arr) {
  let humanAgesAVG = arr
    .map(dogAge => {
      //# Convert dog ages to human based on the original number
      if (dogAge <= 2) return 2 * dogAge;
      if (dogAge > 2) return 16 + dogAge * 4;
    })
    .filter(val => {
      //# Get rid of all values below 18
      return val > 18; 
    })
    .reduce((avg, value, _, { length }) => {
      //# Calculate average (not straightforward in a pipeline)
      return avg + value / length;
    }, 0);
  console.log(humanAgesAVG);
  return humanAgesAVG;
}
calcAverageHumanAge(data1);	 //OUTPUT:44
```



## Misc Methods

#### isArray Method:

Determines whether the passed value is an array

```js
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false
```



#### localeString

This takes every element in your array and returns a single string back to you. 
It takes every entry, converts it to a string, then adds them all up into one. Similar to the join method-which i prefer to this tbh

```js
const rayray= [1,"Karen", "Firey", undefined, null, 0]

const xlocaleString = rayray.toLocaleString();
console.log(xlocaleString);
```

It seems null and undefined are skipped over: ![image-20210303015907681](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210303015907681.png)

There are 2 optional parameters that you can employ to do a few useful tricks involving languages. Will look into them if needed later

![image-20210303020028543](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210303020028543.png)

## MUTATE ORIGINAL ARRAY

IN ARRAYS CHAPTER: push, unshift, pop, shift, splice, reverse



### sort() Ⓟ

The sort function takes the array you use it on, and reorders its values- causing permanent change 

```js
arr.sort(compareFunction) // the compare function is optional
```

- Since the compare function is optional, we can use sort() with no argument
  This will let the default behavior choose how your array should be reordered

#### Premades

```js
testAttribute.sort((num1,num2)=>num1-num2)		// lowest -> highest
testAttribute.sort((num1,num2)=>num2-num1)		// highest -> lowest
```



#### Default Behavior with No Args

WITH STRINGS:

With no arguments, the sort() method rearranges string values using alphabetical order
This is typically desirable

```js
let movies = ['Star Wars', "Days Gone", "Babe", "Zathura"];
movies.sort()
console.log(movies);
```

![image-20210324094126983](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210324094126983.png)

WITH NUMBERS:

Avoid using the sort() method with no arguments on numbers- the default behaviour is a bit unpredictable, so stick to using sorting functions

- The default behaviour of sort() can change depending on the array. 
- In this example here, it sorts based on the first digit of each number
  This is why 100 comes before 9

```js
let arr= [100,9,40,26]
arr.sort()
console.log(arr); // i don't even know what order this is tbh

let arr2= [1,29,55,9]
arr2.sort()
console.log(arr2); // doesn't reorder anything this time
```

![image-20210324091300371](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210324091300371.png)

#### What Sort Arguments do

The sort method goes through an array in bunches of 2. (a and b)
It compares 1 value to another and decides on doing 1 of 2 things:

+1: Change of order is required
-1 or 0: No change is required

- The order in which the method compares values is a bit confusing
  You don't need to perfectly understand them to build your own functions 
- Just understand that whether a or b is larger dictates the sorting behavior.

DEMONSTRATION:

```js
let arr1= [100,9,40,26,30,11];
arr1.sort((a, b) => console.log(a,b)); // look at all the comparison pairs
```

![image-20210324102042570](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210324102042570.png)  =>  ![image-20210324102050477](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210324102050477.png)  This shows us each check the sort method goes through

#### Writing your Own Sort Functions

> ![image-20210324124119652](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210324124119652.png)
>
> Remember that b just represents the "next" variable we compare "a" to
> If both numbers equal, we get 0 which means no change is required

Sort from highest to Lowest: LONG VERSION

```JS
let test= [100,9,40,26,30,11]
test.sort((num1,num2)=>{
  if (num1>num2) return -1;
  else if (num1<num2) return 1;
  else return 0;
})
console.log(test);
```

![image-20210324125611945](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210324125611945.png)

You can create shorter arrow functions to accomplish the same tasks as the sort functions written with if/else statements. 

Write your long version first, then take a look at what a-b or b-a would result in
Make sure the result matches the return +1 and return -1

```js
let test= [100,9,40,26,30,11]
test.sort((num1,num2)=>{
  if (num1>num2) return -1;		//num2-num1 results in a negative (matches -1)
  else if (num1<num2) return 1;	//num2-num1 results in a positive (matches +1)
  else return 0;
})
console.log(test);

// SHORTENED VERSION...uses b-a
test.sort((num1,num2)=>num2-num1)
```

Be careful!. Sometimes the answer may be `a-b` , and other times it might be `b-a`

#### Sorting Nested Objects/Arrays

- When we have nested objects/arrays, we need to use a path on your function args for them to properly sort
- The build logic for our sorting function remains the same

```js
let people = [	// STARTER CODE
  {"id":123, "name":"Rick Deckard", "email":"rick@bladerunner.org"},
  {"id":456, "name":"Roy Batty", "email":"roy@replicant.io"},
  {"id":789, "name":"J.F. Sebastian", "email":"j.f@tyler.com"},
  {"id":258, "name":"Pris", "email":"pris@replicant.io"}
];
```

Sort based on id numbers. Lowest to highest
Can easily be reworked to be used on numbers (just drop `.id`)

This works so long as the id numbers are not strings. Ex. `id: "18"`

```JS
people.sort((a,b)=>{
  if (a.id>b.id) return 1;
  else if (a.id<b.id) return -1;
  else return 0;
})
```

![image-20210324131405880](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210324131405880.png)

Sort based on name. Alphabetical Order
The letter Z is considered "greater than" the letter A

```JS
people.sort((a,b)=>{
  if (a.name>b.name) return 1;
  else if (a.name<b.name) return -1;
  else return 0;
})
console.log(people);
```

![image-20210324131922287](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210324131922287.png)

Sort based on name. Reverse alphabetical Order
Just switched the return numbers. We could switch < or >, but this is simpler

```JS
people.sort((a,b)=>{  
  // just inversed the return numbers from the alphabetical order option
  if (a.name>b.name) return -1;
  else if (a.name<b.name) return 1;
  else return 0;
})
console.log(people);
```

![image-20210324131957335](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210324131957335.png)



### copyWithin()

This method copies values of an array to a different part of it- all while keeping the array length the same. This means that any overflow on the right side will be knocked out of the array entirely

- It also permanently mutates the original array you use it on ℗
- Args 2 and 3 are optional- meaning that this method has a handful of variations

```js
array1.copyWithin(1, 2, 6)
// arg1: where to start copying
// arg2: start index of copy
// arg3: end index of copy, which is not included  ◐
```

UNDERSTAND THIS BEFORE WE BEGIN:

- Arguments 2 and 3 determine what you're going to be shoving into your original array.
  `copyWithin(0,3,6)` would shove in a partial array with 3 values
  Those values would be from array indexes... 3,4,5.  ◐
- Any overflow is lost to the ether
- Negative numbers can be used too, and they work in the negative IRL sequential sense
  `copyWithin(-2)` asks you to shove in the entire array starting from the 2nd last element (we have a dedicated lesson for negative numbers as parameters)

#### 1 Parameter

WHAT USING 1 ARG DOES: 
Copies the entire array, starting from index 2 [c]
There won't be enough room, but JS will try its best

```js
const array1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(array1.copyWithin(2));
    ['a', 'b', ('c', 'd', 'e', 'f')]  //visual aid 
    ['a', 'b', ('a', 'b', 'c', 'd')]  //OUTPUT:
```

#### 2 Parameters

WHAT USING 2 ARGS DOES:
Copies a partial array, starting from index 2 [c]
In this case the partial array involves index 1 and beyond. [b,c,d,e,f] 

```js
const array1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(array1.copyWithin(2,1));
  ['a', 'b', ('c', 'd', 'e', 'f')]  	//visual aid 
  ['a', 'b', ('b', 'c', 'd', 'e')]  	//OUTPUT:
```

#### All 3 Parameters

We're keeping these examples easy by having the index numbers match the element values. 
This won't be the case, 99% of the time

###### Replace element 0 with elements 3,4:

```JS
const array1 = [0, 1, 2, 3, 4, 5, 6];
console.log(array1.copyWithin(0, 3, 5)); // ◐ 2 targets
	[(0,1),2,3,4,5,6] // targets start at index 0
 	[(3,4),2,3,4,5,6] // replace with index 3,4 values.  	//OUTPUT:
```

###### Replace element 4 with index 2,3,4,5

```js
const array1 = [0, 1, 2, 3, 4, 5, 6];
console.log(array1.copyWithin(4, 2, 6)); // ◐ 4 targets
	[0, 1, 2, 3, (4, 5, 6)] // targets start at index 4
	[0, 1, 2, 3, (2, 3, 4)] // not enough room for 5  	//OUTPUT:
```

- In this case, the parameters 2 and 6 make it so we have 4 replacements
  Index 2,3,4, and 5's elements
- We do not have enough room for 4 replacements when we start inserting starting at index 4. So the final replacement with index 5 is ignored

###### Replace element 1 with index 3 and beyond

```JS
const array1 = [0, 1, 2, 3, 4, 5, 6];
console.log(array1.copyWithin(1, 3));  // ◐ 4 targets
	[0, (1, 2, 3, 4), 5, 6] // targets start at index 1
	[0, (3, 4, 5, 6), 5, 6]   	//OUTPUT:
```

###### More Complex Examples

This time, we're using an array with values that don't match the index numbers

EXAMPLE 1:

```js
const array1 = [
  'Daredevil',  //0
  'Ruby Heart', //1     
  'Mysterion',  //2     Replaced with "Daredevil"
  'Static Shock', //3   Replaced with "Ruby Heart"
  'Bogard', //4         Replaced with "Mysterion"
];
console.log(array1);

console.log(array1.copyWithin(2,0,4));
// Copy a partial array, starting at index 2 ["Mysterion"]
// Partial array [Daredevil,Ruby Heart, Mysterion, Static Shock]
```

![image-20210324165450934](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210324165450934.png)

EXAMPLE 2: Set args 1 and 2 to the same number

```js
const array1 = [
  'Daredevil',  //0
  'Ruby Heart', //1
  'Mysterion',  //2      Replaced with Mysterion
  'Static Shock', //3     Replaced with "Static shock"
  'Bogard', //4
];
console.log(array1);

console.log(array1.copyWithin(2, 2, 4));
// Copy a partial array, starting at index 2 [Mysterion]
// Partial array [Mysterion, Static shock]
```

![image-20210324164659088](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210324164659088.png)

- We replaced 2 array entries with themselves in this example
- This happens every time the first and second parameters are the same number 

### copyWithin() with Negative Numbers

This method also allows the use of negative numbers- they work in the IRL sequential sense. -1 represents the final element, -2 represents the second last...etc

- As long as you understand the above point, the logic works exactly the same, regardless of how many arguments you funnel into this method

#### 1 Parameter

```js
const array1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(array1);
console.log(array1.copyWithin(-2));
// Copy the entrire array, starting from the second last array value [e]
//  ['a', 'b', 'c', 'd', ('e', 'f')]
//  ['a', 'b', 'c', 'd', ('a', 'b')]
```

#### 2 Parameters

EXAMPLE 1:

```js
const array1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(array1);
console.log(array1.copyWithin(-2,1));
// copy a partial array, starting from second last element [e]
// partial array involves index 1 and beyond. [b,c,d,e,f]
// partial array equals b,c,d,e,f 
  ['a', 'b', 'c', 'd', ('e', 'f')]
  ['a', 'b', 'c', 'd', ('b', 'c')]
```

EXAMPLE 2: 

```js
const array1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(array1);
console.log(array1.copyWithin(2,-2));
// copy a partial array, starting from index 2 [c]
// partial array includes index -2 and beyond. [e,f] 
    ['a', 'b', ('c', 'd'), 'e', 'f']
    ['a', 'b', ('e', 'f'), 'e', 'f']
```

#### 3 Parameters

```js
const array1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(array1);
console.log(array1.copyWithin(0, 1,-2));
// Copy a partial array, starting from the first array value
// Partial array [b,c,d]  ◐
  [('a', 'b', 'c'), 'd', 'e', 'f']
  [('b', 'c', 'd'), 'd', 'e', 'f']
```



## CREATE NEW ARRAY

IN ARRAYS CHAPTER: slice

### Map Method (forEach) Ⓝ

- The map method runs on an existing array- it takes each array element and applies a function to it
- All the array elements will be changed and funneled into a new array, leaving the original one intact. 
- Just make sure you `return` what you want to be the new array's entries

That last point is what makes the map() method an alternative to forEach. 
The map method clones an array and changes that clone (while allowing returns)
forEach applies permanent changes to the original (while ignoring returns)

EXAMPLE: Multiply all the array elements by 10 and add an exclamation mark

```js
const numbers= [10,-1,2,-4];
let newArray= numbers.map(function(value){
  return (value*10)+"!"
});
console.log(newArray);
```

![image-20210220164436443](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210220164436443.png)

#### Optional Parameters

You get immediate access to the 

a) current iteration's index 
b) the array you're working on
c) 'this' argument

![image-20210220170626569](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210220170626569.png)

"this" can be a string, number, object, array, or plenty of other things. You just place it as your final parameter, then get to use it inside your callback function

#### In-depth Examples

EX1: Insert the index number beside each entry in your array

```js
const arrayN= ["Henry", "Mark", "Gerald", "Ford"];
const newN= arrayN.map((value,index)=>`${index}: ${value}`)
console.log(newN);
```

![image-20210220172631623](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210220172631623.png)

EX2: Use a string for your THIS parameter

```js
const arrayN= ["Henry", "Mark", "Gerald", "Ford"];
const newN= arrayN.map(function(value,index){
  return `${index}: ${value} (${this})`
}, "done") // "done" is our THIS parameter
console.log(newN);
```

![image-20210220173136725](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210220173136725.png)

Strings for THIS don't seem to work very well with arrow functions

EX3. Use an object for your THIS parameter

```js
const arrayN= ["Henry", "Mark", "Gerald", "Ford"];
const newN= arrayN.map((value,index)=>`${index}: ${value} (${this})`, {100: "done", 600: "howdy"})
console.log(newN);
```

![image-20210220173501373](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210220173501373.png)

What we're logging to the console is not particularly useful- BUT we can get some good use out of this when we begin doing other things

#### Filtering Object Content with map()

FCC CHALLENGE: Create an array with objects as values using the map method. 

- We have objects with irrelevant information in our starter code. 
- Keep only the "Title" and "imdbRating" KVP's in your new array 

```JS
// STARTER CODE
var watchList = [
  {Title: 'Inception',Year: '2010',Rated: 'PG-13',imdbRating: '8.8'},
  {Title: 'Interstellar',Year: '2014',Rated: 'PG-13',imdbRating: '8.6'},
  {Title: 'The Dark Knight',Year: '2008',Rated: 'PG-13',imdbRating: '9.0'},
  {Title: 'Batman Begins',Year: '2005',Rated: 'PG-13',imdbRating: '8.3'},
  {Title: 'Avatar',Year: '2009',Rated: 'PG-13',imdbRating: '7.9'}
    
];
```

DESIRED OUTCOME:

```
[{"title":"Inception","rating":"8.8"},
{"title":"Interstellar","rating":"8.6"},
{"title":"The Dark Knight","rating":"9.0"},
{"title":"Batman Begins","rating":"8.3"},
{"title":"Avatar","rating":"7.9"}].
```

SOLUTION:

```JS
let filtered = watchList.map(movieObj => {
  return { title: movieObj.Title, rating: movieObj.imdbRating };
});
console.log(filtered);
```

![image-20210516033635847](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210516033635847.png)



### filter Method & Counting Occurrences Ⓝ

Take an array and use the filter method on it to create a new array that only contains the elements that meet your criteria

EXAMPLE: Remove all the negative numbers in your original array

```js
const numbers= [10,-1,2,-4];
let a= numbers.filter((value)=>{	//callback function
  return value>=0;		// only return values that equal or exceed 0
});

console.log(a);
```

![image-20210220160331492](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210220160331492.png)

The return is just our search criterion
The input variable "value" represents each array element (name it what you want)
Your output array is produced automatically by the filter method

```js
//Arrow function variant
const numbers= [10,-1,2,-4];
let a= numbers.filter(value=> value>=0);
console.log(a);
```

#### Multiple Filter Conditions

EXAMPLE: Remove all negative numbers, plus all non integers

```js
const squareList = arr => {
  let clone = arr.concat([]);
  return clone.filter(val => val > 0 && Number.isInteger(val)); 
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers); //OUTPUT: [ 5, 3 ]
```

EXAMPLE: Specifically look for values in an array and remove the rest

```js
const numbers= [10,-1,2,-4];
let a= numbers.filter(function(value){	//callback function
  return value===10 || value===-4;		// only return values that equal 10 or -4
});

console.log(a); //OUTPUT: [10,-4]
```



#### Optional Parameters

The filter method can actually accept more optional parameters 
You may need them when you start performing more complex operations:

![image-20210220170726973](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210220170726973.png)

You get immediate access to the index value, and the very array you are filtering

#### Example 2: Remove all Strings from an Array

The challenge for this Udemy lesson involved a thermostat. We won't ever encounter a temperature as low as -10000F or Celsius

```js
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

function removeLetters(array) {
  let cleanArr = array.filter(function (value) {
    return value > -10000;
  });
  return cleanArr;
}

// We use a filter method to get rid of all strings in an unorthodox way.
// String > - 10000 returns false. So our condition works
```

![image-20210225134330779](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210225134330779.png)

#### Counting Occurrences in an Array

Filter method also lets you count the number of times a value appears in your array

```js
let arr= [false, true, false];
const numTrue = arr.filter(i => i === true).length;
const numFalse = arr.filter(i => i === false).length;
console.log(numTrue, numFalse); //OUTPUT: 1 2
```

#### Filtering Arrays containing Objects

```js
var watchList = [
    {"Title": "Inception", "rating": "8.8"},
    {"Title": "Interstellar", "rating": "7.6"},
    {"Title": "The Dark Knight", "rating": "9.0"},
    {"Title": "Batman Begins", "rating": "8.3"},
    {"Title": "Avatar", "rating": "5.9"}
];

var filteredList= watchList.filter((ent)=>{
    let score= parseInt(ent.rating) // must convert the "num" into an integer
    return score >= 8
})
console.log(filteredList)
```

![image-20210625234043322](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210625234043322.png)

### concat() Ⓝ

Use this array method to merge 2 existing arrays:

```js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```

DISCLAIMER: If you wanted to add 2 arrays together like this, but include some new stray entries in between, use a spread operator instead (more flexible)

This is also the main way to create SHALLOW CLONES of arrays- if you're trying to overcome the ties that bind mutable objects- see dedicated chapter if interested



### flat() and flatMap() Ⓝ

Remember, these do not affect the original array if applied without being assigned to a variable

#### flat()

EXAMPLE 1: Completely flatten with level 1

This method allows you to create a copy of your original array which has some/all of its depth removed. The original array is left intact

```js
const matrix= [1,2,3,[4,5,6],7]
const flattened= matrix.flat(1);
console.log(matrix, flattened);
```

![image-20210324133049177](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210324133049177.png)

`matrix` has subarrays nested on level 1. Since we fed the flat method an parameter of 1, those sub arrays were removed.

EXAMPLE 2: Partially flatten with level 1

If we only flatten level 1, but we have arrays nested deeper, then not all the subarrays will be flattened

```js
const matrix= [1,2,3,[4,[5,6]],7]
const flattened= matrix.flat(1);
console.log(matrix, flattened);
```

![image-20210324133839667](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210324133839667.png)

EXAMPLE 3: Flatten everything

If you don't know how deeply nested your arrays are, just flatten to infinity

```js
const matrix= [1,2,3,[4,[5,6]],7]
const flattened= matrix.flat(Infinity);
console.log(matrix, flattened);
```

![image-20210324133954409](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210324133954409.png)

#### flatMap()

Combines your map method with a flat method- although it only flattens 1 level deep in this form

EXAMPLE: Combine 2 arrays with values that correspond and pair them up

```js
let subjects = ['French', 'Math', 'Solids'];
let profs = ['Kassab', 'Correia', 'Greg'];
// USING MAP()
let combo= subjects.map((value,ind)=>{
  return [value,profs[ind]] // returns 1 nested array for each iteration
})
console.log(combo); 
// CAN NOW USE FLAT()
```

Learned multiple returned arrays creates subarrays: ![image-20210324135907253](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210324135907253.png)

We could just apply flat() to our combo array right now, but we can also do this in one step using flatMap()

```js
let combo= subjects.flatMap((value,ind)=>{	
    //all we did was change the method name
  return [value,profs[ind]] // returns several of these arrays
})
console.log(combo);
```

![image-20210324140318698](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210324140318698.png)



## FIND AN ARRAY INDEX OR VALUE

### find & findIndex

Both of these methods run a testing function across each element in an array
It returns a value

- If the test is satisfied by an entry, the method will return something
  If the test fails across all elements, each method returns a different failure output
- This method is great for sifting through arrays of objects containing user data
  We can locate profiles based on names- assuming the objects name is unique

|           | returns if successful                                 | returns if<br />not successful |
| --------- | ----------------------------------------------------- | ------------------------------ |
| find      | the first array element that passes the test          | undefined                      |
| findIndex | index of the first element value that passes the test | -1                             |

EXAMPLE:


```js
const arrayName = [5, 12, 80, 130, 44];
let firstNumOver50= arrayName.find((element) => { 
    return element > 50 
});  
let firstIndexOver50= arrayName.findIndex((element) => { 
  return element > 50 
});  
console.log(firstNumOver50,firstIndexOver50);  // OUTPUT: 80  2
```

Alternatively, define your callback function externally:

```js
const array = [5, 12, 80, 130, 44];
const isLargeNumber = (element) => { return element > 50 }
console.log(array.findIndex(isLargeNumber)); //fetch index#
console.log(array.find(isLargeNumber));  //fetch value
```

#### Practical Example

Check if a certain name can be found inside 1 object inside an array of them
Retrieve the matching object if it exists

```js
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
};
const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
};
const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
};
const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
};
const accounts = [account1, account2, account3, account4];
```

SOLN

```JS
let transferTarget = 'Sarah Smith';
let validTarget = accounts.find(acc => {
  return acc.owner === transferTarget;
});
console.log(validTarget);
```

![image-20210331152032306](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210331152032306.png)

Would return undefined if the `transferTarget` name we specified matched none of the objects or was spelled incorrectly due to case sensitivity



### indexOf()

```js
arr.indexOf(searchElement, fromIndex)
// fromIndex is optional
```

This method returns the first index at which a given element can be found in the array, or -1 if it is not present.

```js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

console.log(beasts.indexOf('bison', 2));	// start from index 2
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1
```



### indexOfAll() Custom Function

Oftentimes, we'll want to know every index number where a value appears in an array. Use a custom utility function to achieve this

```js
function indexOfAll(array, searchItem) {
  let i = array.indexOf(searchItem),
      indexes = [];
  while (i !== -1) {
    indexes.push(i);
    i = array.indexOf(searchItem, ++i);
  }
  console.log(indexes)
  return indexes;
}

var array = ["test234", "test9495", "test234", "test93992", "test234"];
indexOfAll(array, "test234"); //OUTPUT: [ 0, 2, 4 ]
```



### lastIndexOf()

Use this when you have an array with duplicates inside

- It will return the index number of the last time the element you specify is present in an array. 
- The method will scour the object starting from the end

```JS
let heroes= ["C", "A", "B","A", "T"]
console.log(heroes.lastIndexOf('A'));	
// Last index number for element A is 3
```

'A' was the search element- one of two parameters you can pass into this method. 
The second one `fromIndex` is optional, but useful

It lets you tell JS to search at a different index number than the absolute last one

```JS
let heroes= ["C", "A", "B","A", "T"]
console.log(heroes.lastIndexOf('A', heroes.length-3));
// If we started from the second last array element instead of third-last, A would be detected immediately and the output would still be 3
```

The `fromIndex` parameter defaults to `array.length-1` (last element) when not specified

| to start from...          | use this value for `fromIndex` |
| ------------------------- | ------------------------------ |
| second last array element | `array.length-2`               |
| third last array element  | `array.length-3`               |



## SEE IF AN ARRAY INCLUDES

### includes()

This method determines whether an array includes a certain value among its entries, then returns a Boolean

```JS
arr.includes(valueToFind[, fromIndex])
// fromIndex is optional
```

This method will always scan your array from left to right. 
You can give fromIndex a positive or negative value
Positive displaces the start count location from the left side
Negative numbers will displace the count from the right side

EXAMPLE 1: 

```js
const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat')); 	// expected output: true
console.log(pets.includes('lizardo'));	// expected output: false
```

You can add a second parameter to the includes method, if you want to start checking from a different point in your array. This is `fromIndex`

#### Searching Parts of An Array

No matter what you do, this method will always scan from left to right

EXAMPLE 2: 
Exclude the 1st-3rd array elements from your scan using `fromIndex`
Then exclude the 1st-2nd array element from your scan

```js
const lite = [3, 7, 9, 8, 10]; // length of array: 5
console.log(lite.includes(9,3));	// OUTPUT: false
console.log(lite.includes(9,2));	//OUTPUT: true
```

FALSE: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210307184534533.png" alt="image-20210307184534533" style="zoom:50%;" />	TRUE: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210307184609593.png" alt="image-20210307184609593" style="zoom:50%;" />

EXAMPLE 3: Testing and Visualizing the `fromIndex` parameter

```js
const lite = [3, 7, 9, 8, 10]; 
console.log(lite.includes(8,-2));	//OUTPUT: TRUE. img 1
console.log(lite.includes(8,-1));	//OUTPUT: FALSE. img 2 
console.log(lite.includes(9,-4));	// OUTPUT: TRUE img 3
console.log(lite.includes(9,-2));	// OUTPUT: FALSE img 4
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210307184824630.png" alt="image-20210307184824630" style="zoom:50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210307184904790.png" alt="image-20210307184904790" style="zoom:50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210307184950769.png" alt="image-20210307184950769" style="zoom:50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210307185114543.png" alt="image-20210307185114543" style="zoom:50%;" />

If the element we're searching for falls somewhere directly underneath the arrow, it returns true

#### Searching Backwards via Tricks

This method naturally scans left to right, so if you want to exclude some elements from the right side, you'll need to get creative and use the reverse method

Search for 8, ignore the last 2 elements in the original "lite" array:

```js
const lite = [3, 7, 9, 8, 10]; // length of array: 5
const liteReversed= lite.reverse();
console.log(liteReversed.includes(8,2));	// OUTPUT: false
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210307210606282.png" alt="image-20210307210606282" style="zoom:50%;" />

#### Returning an Array Entry instead of a Boolean

Even though the includes() method returns a Boolean, you can still combine it with find() to return an array entry that includes something

EXAMPLE: Dive into the dogs array, and return the array entry that has "Sarah" as one of the owners

```js
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

let sarahObj= dogs.find((ownerObj)=>{
  return ownerObj.owners.includes("Sarah")
  // the find method returns an object whose owners array INCLUDES "Sarah"
})
console.log(sarahObj); 
//OUTPUT: Object { weight: 13, curFood: 275, owners: (2) […] }
```

#### Includes anything other than (DN work)

> TLDR: Does NOT work with includes() - but you can use some() instead

FAILED EXAMPLE: 
See if an object contains any values other than 0

```js
let obj = {
  5: 0,
  10: 2,
  20: 0,
};
function anyMoneyLeft(obj) {
  // If any KVP has a value that is not 0, return true- otherwise return false
  let fill = [];
  for (let flatVal in obj) fill.push(obj[flatVal]);
  let notZero = !0;
  console.log(fill.includes(notZero));  //OUTPUT: false (which is wrong!!!)
}
anyMoneyLeft(obj);
```

AS AN ALTERNATIVE, use some()

```js
let obj = {
  5: 0,
  10: 3,
  20: 0,
};
function anyMoneyLeft(obj) {
  // If any KVP has a value that is not 0, return true- otherwise return false
  let fill = [];
  for (let flatVal in obj) fill.push(obj[flatVal]);
  return fill.some((val) => val != 0);
}
console.log(anyMoneyLeft(obj));  //OUTPUT: true 			!!! Correct !!!
```



### every()

This method runs all array elements through a certain test and spits out a Boolean. 
If EVERY element passes the test it'll return true- otherwise it returns false.

EX1. See if every array element surpasses 100 (use an externally defined callback function)

```js
const array= [120,300,-5];

function over100 (n){ return n>100; }
let c= array.every(over100);  // callback function is externally defined this time
console.log(c);
```

![image-20210220181857965](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210220181857965.png)

EX2. Repeat with an internally defined function instead

```js
const array= [120,300,-5];

let c= array.every(function(value){
  return value>100;
});  				//callback is internally defined
console.log(c);
```

or use an arrow function:

```js
const array= [120,300,-5];

let c= array.every((value)=>value>100);  //callback is internally defined
console.log(c);
```

OPTIONAL PARAMETERS FOR EVERY()

You get direct access to these aspects of an array as well:

![image-20210220183941417](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210220183941417.png)

### some() 

The some method will run through an entire array then return a Boolean- just like the every method, but with 1 key difference. 

- It'll spit out true if at least ONE of the array elements meet your criteria- otherwise it'll return false

EX1. See if any entries in your array are over 100

```js
const numbers= [99, 1, 4, 200]

let d= numbers.some(function(value){
  return value>100;
})
console.log(d);
```

![image-20210220184205204](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210220184205204.png)

Or perhaps try an arrow function instead

```js
const numbers= [99, 1, 4, 200]

let d= numbers.some((value)=>value>100)
console.log(d);
```

OPTIONAL PARAMETERS FOR SOME()

You have immediate access to these as well:

![image-20210220184440056](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210220184440056.png)

### anythingAsideFrom()

CUSTOM FUNCTION
Check to see if an object contains any value aside from a certain one that you specify

```js
function anythingAsideFrom(obj, value) {
  // If any KVP has a value aside fr/ arg2, return true
  // otherwise return false
  let fill = [];
  for (let k in obj) fill.push(obj[k]);
  return fill.some((z) => z != value);
}
```

EXAMPLE:

```js
let obj = {
  5: 0,
  10: 0,
  20: 0,
};

anythingAsideFrom(obj, 0); //OUTPUT: false
```



## BOIL DOWN TO 1 THING

### reduce() Method

REMEMBER TO SET YOUR REDUCE EXPRESSION EQUAL TO A VARIABLE OR ELSE IT DOES SHIT-ALL

With no extra Index or Array Components Involved:

```JS
arr.reduce((accumulator, currentValue)=>{return acc}, initialValue)
```

All Optional Parameters Included:

```js
arr.reduce((accumulator, currentValue, currentIndex, array)=>{return acc},initialValue)
```

![image-20210220171059205](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210220171059205.png)

- Only the accumulator and currentValue are strictly required. 
- The other components are optional, but I wouldn't skip initialValue- it sets the accumulator's starting off value
- Calling reduce() on an empty array without an initialValue will throw an error

![image-20210218223348116](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210218223348116.png)

#### Parameter Descriptions

`initialValue` (optional): 

- The starting value for the accumulator
- If not specified, the indexValue, accumulator start, and currentValue all change
  Section on this later in lesson
- Set an initial value of 0 if you want to use a reduce method on an empty array to arrive at 0

`accumulator`

- The value we finish with then return at the end of our method
  We can end off with a number, string, object...whatever!
- It builds up from its starting value which is specified by `initialValue`

`currentValue` : The array element (changes per each iteration)

`index` : The index number (changes per each iteration)

The currentValue and currentIndex are wonderful things to have immediate access to. You can perform all sorts of operations with these, and you don't need to specify a path to any of em now 

`array`: haven't seen these used yet in any examples

#### Compared to for loops

Let's write 2 snippets of code that will add up all the numbers in this array:

```js
const numbers= [1,-1,2,3];
```

forOf approach

```js
const numbers= [1,-1,2,3];
let sum=0;
for(let n of numbers){sum=sum+n;}
console.log(sum); // OUTPUT:5
```

The sum variable declared outside of the for loop is set to zero. 
As the for loop iterates, this value is continuously added onto. 
This is what a reduce method replaces with its ACCUMULATOR parameter

REDUCE METHOD APPROACH (defined function in parameter's spot)

```JS
const numbers= [1,-1,2,3];
const sum=numbers.reduce((accumulator,currentValue)=>{
  return accumulator+currentValue;
},0);
console.log(sum); // OUTPUT:5
```

We used an arrow function for our callback this time. Feel free to use a regular function declaration if you want

|        | accumulator at start | currentValue | accumulator at end |
| ------ | -------------------- | ------------ | ------------------ |
| call 1 | 0                    | 1            | 1                  |
| call 2 | 1                    | -1           | 0                  |
| call 3 | 0                    | 2            | 2                  |
| call 4 | 2                    | 3            | 5                  |

accumulator at the end of a call = accumulator at start of next call
Current value is known at each step from the get-go (just the array element)

#### What happens when initialValue is not Set?

`ACCUMULATOR= ELEMENT 1` 		
`currentValue skips to array element 2`
`indexValue skips to index 1`

```JS
Let array=[4,5,1,9]

let b= array.reduce(function(accumulator, currentValue, currentIndex) {
  return console.log(`
  current value: ${currentValue}
  currentIndex: ${currentIndex}
  accumulator: ${accumulator}`);
}) // keep in mind that the accumulator is not added onto in this example
```

no initialValue: ![image-20210219125732762](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210219125732762.png) if initialValue=0: ![image-20210219125859505](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210219125859505.png)

If initialValue is set to a number other than 0, everything works as if it equaled 0. The accumulator just starts at that number- only difference

if initialValue=2: ![image-20210219130303711](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210219130303711.png)



#### More Involved Example

Here, we don't specify an initial value. So...
Accumulator starts at 20 and currentValue skips 20

```JS
let arr=[20, 10, 8, 3, 4]
let a= arr.reduce(function(accumulator, currentValue, currentIndex) {
  return accumulator - (currentValue*currentIndex)
})
console.log(a); // OUTPUT: -31
```

|        | accumulator at start | currentValue | currentIndex | accumulator at end |
| ------ | -------------------- | ------------ | ------------ | ------------------ |
| call 1 | 20                   | 10           | 1            | 10                 |
| call 2 | 10                   | 8            | 2            | -6                 |
| call 3 | -6                   | 3            | 3            | -15                |
| call 4 | -15                  | 4            | 4            | -31                |



### Creative Usage of reduce()

The reduce method is the most powerful native array method for a reason- it can perform several unique actions and even replace other array methods if used properly



#### Add all entries in an array

EXAMPLE 1:

```js
let summation= test.reduce((acc,currVal)=>acc+currVal,0)
```

EXAMPLE 2: Use destructuring to break down arrays containing other data structures

```js
function changeReq(arr) {
  return arr.reduce((acc, [, currVal]) => acc + currVal, 0);
}

console.log(
  changeReq([
    ["PENNY", 0.5], ["NICKEL", 4], ["DIME", 0],
    ["QUARTER", 0], ["ONE", 0], ["FIVE", 0],
    ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0],
  ])
);  //OUTPUT: 4.5
```



#### Calculate array average

```js
let a = arrName.reduce((avg, value, _, { length }) => {
  return avg + value / length;
}, 0);
```



#### Get highest array value

You can write conditionals inside of your reduce method as well, letting you perform tasks like this:

```js
let arrayTest = [10, 20, -8, 4000, 200, 1000];
function findHighest(arr) {
  let a= arr.reduce((acc, val) => {
    console.log(`Current accumulator value is: ${acc}`);
    if (acc > val) return acc;  //return acc
    else return val;  // if currentVal>acc , currentVal becomes acc
  }, arr[0]); // set initial value to the firstarray entry (not zero this time)
  return a
}
console.log(findHighest(arrayTest));
```

![image-20210330132340280](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210330132340280.png)

Notice how we never directly set `acc=value` 

- Doing so actually messes up our results
- We return the current value, which automatically makes it equal the accumulator



#### Create Object with Reduce

We're not limited to only reducing arrays down into primitive values

EXAMPLE: 
Take an array with positive and negative account movements. 
Create an object with a KVP for total deposits and withdrawals

Instead of having 0 as our initial value, we're going to start ourselves off with an object containing KVP's

```js
let movements= [1000,-200,-60,1350,-400,85]
let a= movements.reduce((acc,val)=>{
  val>0 ? acc.deposits += val : acc.withdrawals += val
  return acc //
},{deposits:0, withdrawals:0})
console.log(a); //OUTPUT: Object { deposits: 2435, withdrawals: -660 }
```

OTHER PURPOSES:

- You can also use the reduce method to change how objects are oriented in JS. Turn object values into keys like so:

![image-20210219132438087](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210219132438087.png) ![image-20210219132450277](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210219132450277.png)

Find out how here: 
https://www.digitalocean.com/community/tutorials/js-finally-understand-reduce 

Can also remove duplicates items, write maps, and do other things too. See MDN

### reduceRight ()

This method is a twist on the reduce() method- and leaves the original array intact
It simply accumulates starting from the right side instead of the left.

- When adding numbers, the order in which we accumulate makes no difference. 
- When adding strings however, accumulating from the finishing side gives us a completely different outcome. 
- This method is especially useful when dealing with palindromes

```js
let letters= ["q","w","e","r","t","y"]
let totalSum= letters.reduce((acc,val)=>{
  acc=acc+val;	// accumulate starting from an empty string
  return acc	// return a single value, the final acc 
},"")
console.log(totalSum); //OUTPUT: qwerty
```

Now, let's accumulate backwards: (just changed the method name...lol)

```js
let letters= ["q","w","e","r","t","y"]
let totalSum= letters.reduceRight((acc,val)=>{
  acc=acc+val;
  return acc
},"")
console.log(totalSum); //OUTPUT: ytrewq
```



### join() 

We've used this in the string chapter, but it works for arrays filled with anything

```js
arrName.join("connector")
```

- Takes an array and joins the entries together
  Separates each individual entry with the connector argument
- Does not affect the original array

```js
const anai= [1,"x","y",4,["a","b","c"],{0:0,1:1}]
let connected= anai.join("-")
console.log(connected);
```

![image-20210324060330545](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210324060330545.png)

# Objects and Methods

### Objects 

In arrays, you can only reference elements via their index numbers

Objects are an alternative data structure that allows us to use 
`property name: property value` pairs. AKA... `key-value pairs`

#### How they Work

Every value stored in an object has its own name
The order inside of objects doesn't matter

- Objects count as variables
- Objects can store variables, arrays, expressions, other objects...etc

```js
const myArray= ['Magical leaf', 'Aeroblast'];

const obj = {
  firstName: "Jason",
  geass: "assimilation",
  tactic: 99, 	// not everything has do be related to the object's theme
  exJobs: ['tutor','engineer'],		//placed an internally defined array 
  poke_moves: myArray				// placed an externally defined array
};
console.log(obj);
```

![image-20210103235714437](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210103235714437.png)

There are many ways to define objects in JS. The above example is called OBJECT LITERAL

#### Flexibility with the Property Names

The key/property can be expressed with or without quotation marks or even as a numeric value. 

- You are allowed to omit quotation marks from the property if they are single words
- However, if your object has any non-string properties, JavaScript will automatically typecast them as strings (end result is the same)

Valid Object: ![image-20210214182955497](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210214182955497.png)



### Dot vs Bracket Notation 

With arrays, you retrieve data by using designated index numbers. 
The value order matters in an array.

With objects, you retrieve key-value pairs using the name via Dot or Bracket Notation
The order of pairs inside of an object does not matter

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210104030908393.png" alt="image-20210104030908393" style="zoom:67%;" />

#### The Difference

DOT NOTATION: Use only when you know the key name

- Dot Notation relies on you calling a key name for the value you're after 
  It needs a definite input

BRACKET NOTATION:

- Allows you to use expressions that calculate a value, which will then be used to locate stuff. 
  EX. You can only use bracket notation to look up a property with variables
- The input can be calculated and is subject to change- even via user input
- Bracket notation can be used the same way as dot notation as well. 
  It's more versatile



#### Dot/Bracket Notation Example:

Bracket notation can accomplish the same things as dot notation

```js
const myInfo = {
  firstName: "Jason",
  lastName: "XB",
  geass: "assimilation",
}
console.log(myInfo.geass); 		//dot notation
// OR
console.log(myInfo["geass"]); 	// simple bracket notation
```

![image-20210104021839520](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210104021839520.png)

#### Bracket Notation for Expressions

The following cannot be done using dot notation. 

```js
const myInfo = {
  firstName: "Jason",
  lastName: "XB",
  geass: "assimilation",
}
const commonKey= "Name";
console.log(myInfo["first"+commonKey]);		//bracket notation for an expression
console.log(myInfo["last"+commonKey]);
```

When we need to compute a property name using common keywords among names, use bracket notation
Otherwise, use dot notation since its easier

![image-20210104021937734](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210104021937734.png)

Function Example: ![image-20210214184428207](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210214184428207.png)



#### Bracket Notation with Variables

Bracket notation lets us use pre-defined variables in order to look through objects- as long as they're equal to one of the object properties

![image-20210214184449280](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210214184449280.png)



### Add, Change, Delete KVP's

#### Adding Key-Value Pairs

```js
const herInfo = {
  firstName: "Grace",
  lastName: "Aliaga",
  geass: "Heart of Gold",
  intelligence: "9 out of 10"
}
herInfo.nation= "Peru";		//Dot
herInfo["Pet"]= "Cindy";	//Bracket
```

#### Revising Key-Value Pairs

Change the property value using dot or bracket notation

```js
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
// I'm going to change my dog's name to "Happy Coder"

myDog["name"]= "Happy Coder";
// OR
myDog.name="Happy Coder";
```

#### Removing Key-Value Pairs

To delete a property, use the `delete` operator

I'm fully aware I could just backspace it out of existence
You may need a property at the start but wish it gone at a later time

```js
var person = {
  firstName:"John",
  lastName:"Doe",
  age:50,
  eyeColor:"blue"
};

delete person.age;  
// or 
delete person["age"]; 
```

If you delete an object key that does not exist, nothing happens- no errors even.
So you can use this loosely



### Bracket Notation for User Inputs

GOAL: Have the user type in what attribute they want to know more about

- Brackets are the only operation for this kind of operation because they are allowed to involve expressions which produce a value
- Dot notation will return "undefined" since there is no `interest` key or value in our object. 

```js
const myInfo = {
  firstName: "Jason",
  lastName: "XB",
  geass: "assimilation",
  intelligence: "8 out of 10"
}
let interest= prompt(`Type in what you'd like to know about Jason. Choices are as follows...   firstName    lastName    geass    intelligence`); 
// we store the user input as a variable

console.log(myInfo[interest]);

//console.log(myInfo.interest);  Dot Notation fails here. Output is undefined
```

> User types in one of the pair names** 
> Computer logs the value assigned to that name in the console
>
> BUT WHAT HAPPENS IF A USER TYPES SOMETHING ELSE? They receive an undefined message



#### Example Pt 2.: Incorporating Conditionals

```js
const myInfo = {
  firstName: "Jason",
  lastName: "XB",
  geass: "assimilation",
  intelligence: "8 out of 10"
}
let interest= prompt(`Type in what you'd like to know about Jason. Choices are as follows...
firstName    lastName    geass    intelligence`);

if (myInfo[interest]) {
  console.log(myInfo[interest]); 
    //Truthy. If the user inputs something, this'll activate
} 

else {
  console.log("We do not know enough about this attribute");
}
```

This example does a great job of showing the power of Truthy/Falsy values.
if argument: if the user types in an object key, that'll be coerced to true
			 if the user input does not match an object name, it'll be coerced to false



### Checking Objects for Properties or Values

#### Seeing if a Property is Present

```js
objectName.hasOwnProperty("propName")		// returns T/F
```

EXAMPLE:

```js
let myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false
myObj.hasOwnProperty("hat"); // FALSE, due to how this works
```

Remember, this checks for the presence of the PROPERTY. 
If you place a value inside the brackets, it'll return false

#### Seeing if a Property Value is Present

```js
function check(val){
  let exists= Object.values(myObj).includes(val)   // NEWish feature!
  if(exists==true){
    return "This value is latched to a key in the object"
  }
  return "It seems this value is not present"; 
    // if the if block returns nothing, this will
}
check("pants");	// OUTPUT: "This value is latched to a key in the object"
check("V9"); // OUTPUT: "It seems this value is not present"
```

The `.includes` feature checks an object for a value the coder specifies- val in our case. We feed it a value to check using our function.

This feature is not supported by IE. For that reason, use a polyfill if you care about IE users: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/includes#Polyfill

#### Checking for Properties with Destructuring

Attempt to destructure an object with a key name. If there's no KVP with that key in the object, that variable will be set to undefined, and you can use it afterwards

EXAMPLE:

```js
let testObj = {
  apple: 9,
  orange: 1,
};
let { pear } = testObj; // destructuring line
console.log(pear); // pear equals undefined now
if(!pear) console.log(`value of pear: ${pear}`)
```

With destructuring line:  ![image-20210516233231048](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210516233231048.png)

Without destructuring line:  ![image-20210516233322180](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210516233322180.png) 

#### Reverse Tracking: Find a key with its value

```js
function getKeyByValue(object, value) {
  // only use when an object has unique values for each key!
  return Object.keys(object).find((key) => object[key] === value);
}

let obj= {a:1, b:2}
getKeyByValue(obj, 2) //OUTPUT: b
```



### Nested Objects

You can nest objects or arrays deeply inside of parent objects if you choose to. In order to access some of the key value pairs, you'll need to chain together dot notation, bracket notation, or a combination of both

```js
var ourStorage = {
  "desk": {					// object inside object 1
    "drawer": "stapler"
  },		
  "cabinet": { //-----------   object inside object 2
    "top drawer": { 		// object w/in an object...w/in an object (depth 2)
      "folder1": "a file",
      "folder2": "secrets"
    		},
    "bottom drawer": "soda"
  } //----------- 
};

ourStorage.desk.drawer; // "stapler"
ourStorage.cabinet["top drawer"].folder2;  // "secrets"
```

To access secrets, we were forced to use bracket notation for the "top drawer" key
It had a space between words, so dot notation wouldn't have worked

#### Example 2: Nested Objects inside Arrays

You can nest objects inside of arrays, or vice versa, making things look like a mess.

To access key-value pairs when you have a nested array/object fiesta...

- Use bracket notation when you have an index number to work with
- Use dot/bracket notation when you have a key name in an object to work with

```js
var ourPets = [
  {						// object as index 0
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {						// object as index 1
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"
```



### Objects for Tabular Data

Objects can be thought of as a key/value storage, like a dictionary. I

- if you have tabular data, you can use an object to "lookup" values rather than a switch statement or an if/else chain. 
- This is most useful when you know that your input data is limited to a certain range

Convert the below switch statement into an object called `lookup`. 
Use it to look up `val` and assign the associated string to the `result` variable.

 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210214191534121.png" alt="image-20210214191534121" style="zoom: 80%;" /> ![image-20210214192600179](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210214192600179.png)



### Object Methods

Object key value pairs consist of `PROPERTY NAME   :   PROPERTY VALUE`
Functions are just elaborate blocks of code that generate a value- making functions themselves a value
We can make a key value pair with a function for a property value

Any function attached to an object is called a method
Note that arrays are just special/ordered objects with built-in methods. Here we build our own

#### Method Example V1:

```js
const herInfo = {
  firstName: "Grace",
  lastName: "Aliaga",
  geass: "Heart of Gold",
  birthYear: 1958,
  calcAge: function (birthYear) {
    return 2020-birthYear;
  }
}
console.log(herInfo.calcAge(1958));       // Called using dot natation
console.log(herInfo["calcAge"](1958));    // Called using bracket notation
```

One problem with our above example is that we have to pass in the birthyear manually to get the function to work. This is not ideal, and violates our dry code principle.

Pass in properties from objects into a method using the special `this` variable
The `this` variable references the object itself
JS gives every method access to this unique variable

```js
const herInfo = {
  firstName: "Grace",
  lastName: "Aliaga",
  geass: "Heart of Gold",
  birthYear: 1958,
  calcAge: function () { 
      console.log(this);			// Logs THIS entire object 
      return 2020-this.birthYear; 	//uses the birthYear property from THIS object 
  }  
}
console.log(herInfo.calcAge()); // No longer need to provide a parameter
```

![image-20210104191903498](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210104191903498.png)

#### Creating New Properties w/ this keyword

- What if in the above example, we needed to log the output of the calcAge function several times over? 
  We could copy/paste the last line several times over, but that would waste computing power since it would force a recalculation each time. 
- Instead, let's learn how to make new key value pairs INSIDE OF THE OBJECT using the `this` keyword

```js
let herInfo = {
  firstName: "Grace",
  lastName: "Aliaga",
  geass: "Heart of Gold",
  birthYear: 1958,
  
  calcAge: function () {
    this.age= 2020-this.birthYear;
    return this.age;   
  }
}
herInfo.calcAge();        
// Need to invoke the function to make it work. Otherwise herInfo.age= undefined
console.log(herInfo.age);
console.log(herInfo);
```

![image-20210213093853046](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210213093853046.png)


> ```js
> // EXPLANATION OF THIS SECTION:
> this.age= 2020-this.birthYear;
> return this.age;
> 
> // Create variable named "age" in this object. 
> // Set it equal to (2020-the "birthYear" variable in this object)
> // Return the "age" variable calc'd in this method
> ```



### Enhanced Object Literals

You can tell the snippet below is an object literal because we defined it within curly braces `{ }`. ES6 introduced new ways to declare object literals aside from this:

```js
const testObj= {
	ruby: "red",
    weiss: "white"
}
```



#### Adding Methods without the function keyword

ES5: ![image-20210222203932593](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210222203932593.png)ES6: ![image-20210222203947934](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210222203947934.png)

#### Same-Name Object Addition

Let's say you want to add an object inside of another one. 
It'd be nice to keep their names the same so you have less to remember

```js
// ES5
const support={ blitz: "Engage", sona: "Healer" }

const league={
  adc: { jinx: "Hypercarry", caitlyn: "lane bully" },
  support: support	// but how cringe is this?
}

console.log(league);
```

We set the key value to "support", then call in the value from the "support" variable
The syntax is kind of confusing though. We set the key and value to the same word

```JS
// ES6
const support={ blitz: "Engage", sona: "Healer" }

const league={
  adc: { jinx: "Hypercarry", caitlyn: "lane bully" },
  support,	// much better
}

console.log(league);
```

With ES6, we just write the object name we're importing once. 
The key name and object name must always match though, or else this fails

#### Using Expressions as Property Names

Instead of using flat values for keys in objects, you can use expressions instead
Define them using variables, array entries, template literals...whatever!

```js
const champs= ["Swain", "J4", "Senna"]
const [a,b,c]=champs; //DESTRUCTURING... a:swain 	b:J4 	c:Senna

const obj={
  [b]: "Engage",
  [champs[0]]: "Healer",
  [`Lucian's wife, ${c}`]: "Assassin",
}

console.log(obj);
```

![image-20210306031922399](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210306031922399.png)

### More ES6 Additions to Objects

Rest parameters, enhanced object literals, spread operators, and destructuring are all covered elsewhere in our notes. They are also ES6 additions, like the rest of the functionalities covered in this lesson

#### Setting Up Keys with No Initial Values

This function here allows you to set up all the key names in an object without specifying their values. These values will only be defined when you call upon that function and feed it the parameters it needs:

```js
const createPerson = (name, age, gender) => {
  return ({name,age,gender});  // we set up the key names here
};

console.log(createPerson("Zodiac Hasbro", 56, "male")); 
```

![image-20210222203251516](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210222203251516.png)

The parameter names don't need to match the key names we set up inside ({ })



#### Spread Operator on Objects

The spread operator gives us another method to create shallow clones

```js
const smasher = {
  name: 'Rush',
  main: 'Falcon',
};

const newSmasher={ game: "LoL", ...smasher}
newSmasher.name= "Yamato"	// name change on clone object
console.log(newSmasher);
console.log(smasher);	// test to see if our orig object is unaffected by name change
```

![image-20210305040535960](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210305040535960.png)



# Conditionals

### if, else, else-if 

#### Mechanics

IF: If the conditions outlined by the if statement's argument are met, the code within the if block will run

ELSE IF: An additional if statement with different conditions than the first

ELSE: A blanket that catches every possibility not outlined by if and else-if arguments. All other possibilities lead to the code in this block being executed

UNDERSTANDING THE ARGUMENT:

For an if block to execute, you need a true Boolean value. This makes it so there are multiple ways to define your argument

a) Just use a Boolean variable

b) Compare a variable to something, which results in TRUE or False

c) Use a non Boolean, and let JS coerce it automatically using Boolean( ) 
   Doesn't work with everything

```js
let x= 88;
let y= x>20;
let z= "go F yourself";

if (x>20) console.log("Condition met... sire");
if (y) console.log("Condition met... minister");
if (y===true) console.log("Condition met... Mr.Lord");
if (z) console.log("Can't believe this works");
```

![image-20210101160336383](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210101160336383.png)



#### if else Example

![image-20201231162824830](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201231162824830.png)

```js
const age= 13;

if(age>=18) { console.log("Sarah can get her license"); }
else {
  const yearsLeft= 18-age;
  console.log(`She is too young to drive. Wait another ${yearsLeft} years.`);
}
```

```js
// EXPLANTION
if(ARGUMENT) {"This code will run if the argument condition is met" }
else { "If the condition is not met, the code in this else block runs instead" }
```

- If there is no else block, JS will do nothing and just move on to the next line of code after the if block
- The variable yearsLeft, is defined inside the else block. 
  It is not accessible anywhere outside of it



#### else-if Example

This shows how to write code blocks in a space-conservative manner

```js
age= -29

if(age>0 && age<18) {
  console.log("You're a young boy or girl");
} else if (age >=18) {
  console.log("You're legally an adult");
} else {
  console.log("You're not 0 years old or less, clown. Stop trolling");
}
```

![image-20201231193843319](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201231193843319.png)

#### Short-Form if Statements

```js
x=31;
if( x>10 ) console.log("x is over 10");
```

To keep things short, you can opt out of using curly braces when an if statement's code block only involves one line

This strat works with multiple lines too, but it's poor form

#### Statement Order

Order is important in `if`, `else if` statements.

The function is executed from top to bottom so you will want to be careful of what statement comes first.

EX 1:

![image-20210214080442573](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210214080442573.png) ![image-20210214080456141](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210214080456141.png)

> ```js
> foo(0) // "Less than one"  (BETTER)
> bar(0) // "Less than two" (not untrue but probably not what we wanted)
> ```

Rule of thumb: 
Smallest number up top in the if argument
Next largest number in the subsequent else if argument...etc
Largest number in the final else if argument

EX2: Good logic with negative numbers

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210214082935842.png" alt="image-20210214082935842" style="zoom:67%;" /> ![image-20210214083011217](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210214083011217.png)

#### Nested ifs VS &&

To keep things looking clean, try to avoid writing code like this:

```js
if(b>0){
  if(b<12){
    console.log("b is over 0 and below 12");
  }
}
```

"IF this condition is true and IF this condition is also true, do this"
If you're writing nested if statement with no else accompanying it, just use `&&`

```js
if(b>0 && b<12){
    console.log("b is over 0 and below 12")
}
```



### Switch Statements

These function similarly to if/else statements, and are great for cases where we would be forced to use too many else-ifs

- Give JS a list of cases, each with its own code block to run if found to be true 
- If no cases are true, you have the default code block run instead

```js
switch(expression) {
  case x:
    **CODE BLOCK
    break;
  case y:
  case z:
    **CODE BLOCK
    break;
  default:
    **CODE BLOCK
}
// z y and z are the values you want the switch argument to be in order to trigger that corresponding code block
```



#### Example: Weekly Mood Monitor

![image-20210101023456003](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210101023456003.png)

```js
let day= "Monday";

switch(day) {
  case "Friday":	// day==="Friday"
      console.log("Thank ALLAH! Love Fridays <3");
      break;

  case "Saturday":
  case "Sunday":
      console.log("I do love me them weekends");
      break;

  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
      console.log("The regular weekdays are all pretty much the same");
      break;
  
  default:
      console.log("Invalid day");
}
```

- If you want to repeat an action for 2 different cases, just stack cases like I did on Sat and Sun
- Even one uncapitalized letter will make "friday" not count as "Friday". 
  These use strict equality operators `===`
- Without `break;`, the next case's code block will run. Common error



### Switch Statements inside Functions

We have a choice whether we want to use variables inside switch statements or not.

- If you do, you can use the output of a switch statement in other operations
- If you don't want to use variables, the switch statement just returns something one time

#### Ex 1. Replacing if/Else w/ Switch 

![image-20210214122549814](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210214122549814.png)  We have some very specific cases here

```js
function chainToSwitch(val) {
  var answer;
  
  switch(val) {
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = 'Missed me by this much!';
    break;
  case 7:
    answer = "Ate Nine";
    break;
  default:
    answer=""
    break;
  }
  return answer; // local variable returned
}
console.log(chainToSwitch(7));
```

![image-20210214122712882](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210214122712882.png)

Switch Statement Method A: Redefine a Variable

In the previous example we defined a variable named answer inside of the function but outside of the switch statement. It was deliberately left undefined. When a condition is met, it will be defined (locally)

If we want to use this variable globally, we should move `var answer;` outside of the function

#### Example 2:

![image-20210214091540506](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210214091540506.png)

```js
function caseInSwitch(val) {

  switch (val) {
    case 1:
      return "alpha";	// string output returned
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
    default:
      return "not what I expected"
      break;
  }
}
console.log(caseInSwitch(3)); // function output
```

Switch Statement Method B: Generate an Output with Return
This time, we simply have the switch statement spit out something once it's done
We don't have any variables this time



### Conditional (Ternary) Operator

- This is yet another alternative to if/else statements- one that allows us to get a lot done in just one line. **Handy! 
- It's core strength is providing a fast way for assigning variables certain values under conditions

SYNTAX:

```js
condition ? expressionIfTrue : expressionIfFalse
```



#### Use Cases

##### Use 1: Occasional Alt for else/if Statements

```js
const level= 45000
level>9000 ? console.log("His level's over 9000!") : console.log("What a weakling")
```

![image-20210101043727320](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210101043727320.png)

- This approach is very lean, but it won't work well for bigger blocks of code that need to be executed based on conditions. 
- You'll have to resort to classic if/else or switch for that



##### Use 2: Conditional Assign for Variables

```js
const age= 9;
const group= age>= 18 ? "Adult" : "Child";
console.log(group);
```

The user inputs their age
The statement in the middle sets a new variable `group`. 

We have 2 choices for the expression it'll be defined as. You can be classified as an adult or child, and the CONDITION involves the user's age input

```js
// Regular else/if Method for same purpose
const age=9;
let group;
if(age>=18) {
    group="Adult";
} else {
    group="Child";
}
console.log(group);
```

![image-20210101043205717](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210101043205717.png)

See how much work is involved doing things the old way? 

There are many more lines, plus you need to set the variable as undefined outside the loop. Otherwise you wouldn't be able to call it later to log on the console



##### Use 3: Placing Conditionals Inside a Template Literal

We've already discussed how only expressions are allowed inside template literal placeholders. We can circumvent that rule using ternary operators- they produce values.

```js
// Conditional from earlier
const group= age>= 18 ? "Adult" : "Child";
const group= <<<<	 age>= 18 ? "Adult" : "Child";	 >>>> cut out
```

```js
// Using it in Template Literal Placeholders
age= 12;
console.log(`I am legally classified as a(n) ${age>= 18 ? "Adult" : "Child"}`);
```

All we did was take out the variable that was decided based on a condition and replaced it with a string. 

#### Function Outputs w/ Ternary Ops

Put your return statement at the start of your ternary operator

![image-20210217151858354](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210217151858354.png) ![image-20210217151909012](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210217151909012.png)

#### Multiple Ternary Operators

Here's what ternary operators look like when you replace multiple if/else if/ else conditionals

![image-20210217152233991](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210217152233991.png) ![image-20210217152244804](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210217152244804.png)

Notice that the final ternary operator has no argument, just like an else block

EXAMPLE: Tell us if a Number is positive, negative, or zero

```js
function checkSign(num) {
  return (num>0) ? "positive"   // if
      : (num<0) ? "negative"  //else-if
      : "zero" ;         // else statement has no argument
  }
checkSign(10);
```



# for Loops 

![image-20210218152654584](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210218152654584.png)

### for Loops

The for loop will keep running as long as the condition is true.
It runs as soon as its parsed, and does not need to be invoked 

The loop condition involves 3 parts separated by semi colons

```js
for (let i=1; i<=8; i=i+2)	 // This will run 4 times. When i= 1,3,5,7
```

1)  Starting point. 
    Define a new variable using let and set it to a starting value

2)  End boundary involving this variable. 
    Use comparison operators

3)  Incrementor. 
    Set up your variable to increase/decrease after each iteration

#### Demo Example:

```js
for (let i=0; i<=20; i= i+5) {
  console.log(`The i value is currently at ${i}`);
}
```

![image-20210105140506920](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210105140506920.png)

#### Example 2: Arrays

GOAL: Loop through an array and log the contents of each slot to the console. 
Display the type of each value as well

```js
const jonas= [ 
  "Jonas", 
  "Schmedt", 
  2037, 
  "teacher", 
  ["Mike","Pete", "Steve", true]
];

for (let i=0; i< jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
}
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210105155637307.png" alt="image-20210105155637307" style="zoom:80%;" />

Notice how the array inside the object returns an "object" when typeof is applied. Proves that they are just an ordered version of the common object

We used `jonas.length` instead of hardcoding the length of the array in case we added new key value pairs to it. This is more intuitive and future-proof



### Continue and Break Statements

#### Continue Statements

They force an exit of the current FOR-type loop iteration
The browser then moves on to the next with no further action

In the below example...

- If the type of the current array element does not equal "string"... 
  The system skips the console.log and moves on to the next iteration
- This means only strings will be logged

```js
// Example: Take an array, and only log the strings
const jonas= [ 
  "Jonas", 
  "Schmedt", 
  2037, 
  "teacher", 
  ["Mike","Pete", "Steve", true]
];

for (let i=0; i< jonas.length; i++) {
  if(typeof jonas[i] !=="string") { continue; }		// key action here
  console.log(jonas[i]);
}
```

![image-20210106222501151](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210106222501151.png)

#### Break Statements

They terminate the entire for loop as soon as a condition is met

```js
// EXAMPLE: Log the contents of an array, but stop as soon as you're about to log a number
const jonas= [ 
  "Jonas", 
  "Schmedt", 
  2037, 
  "teacher", 
  ["Mike","Pete", "Steve", true],
  2020
];

for (let i=0; i< jonas.length; i++) {
  if(typeof jonas[i] ==="number") {break;} 		// Key action here
  console.log(jonas[i]);
}
```

- If the type of the current element equals "number, the loop is exited right away. What comes afterward doesn't change anything



#### Looping Backwards

```js
const jonas= [ 
  "Jonas", 
  "Schmedt", 
  2037, 
  "teacher", 
  ["Mike","Pete", "Steve", true]
];

let a=jonas.length-1 	// start on the last array element
for (let i=a; i>=0; i--) {		
  console.log(i, jonas[i]);
}
```

We use a negative incrementor this time, and use the expression `jonas.length-1` to choose the last array element- works even if we add or subtract from the array later on

![image-20210106225003709](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210106225003709.png)



### Nested for Loops

#### Ex 1.

Let's say we want to log our workout routine to the console. 
We go through 2 cycles in total-each cycle consisting of 3 unique exercises

Repeat the following sequence 3 TIMES:
Exercise 1: Star Jumps (2 reps)
Exercise 2: Burpees (4 reps)
Exercise 3: Goblet squats (3 reps)

```js
for(let rev=1; rev<=2 ; rev++) { 		// 2 grand cycles

  for(let star=1; star<=2; star++) {								// Star jump loop
    console.log(`CYCLE ${rev} -Star jump number ${star}!`);
  }

  for(let burp=1; burp<=4; burp++) {								// Burpee loop
    console.log(`CYCLE ${rev} -Burpee number ${burp}!`);  
  }

  for(let gob=1; gob<=3; gob++) {							// Goblet squat loop
    console.log(`CYCLE ${rev} -Goblet squat number ${gob}!`);
  }

}
```

![image-20210106233138984](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210106233138984.png) ![image-20210106233156805](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210106233156805.png)



#### Nested for Loops and Arrays (CodeCamp Ex.)

GOAL: You have 3 arrays nested inside a parent array
Create a function that returns the product of the 3 arrays in an array

```js
let sample=[ [20,5], [4,10], [40,2,3] ]
```

Return [100, 40, 240]

```js
let sample=[ [20,5],[4,10], [40,2,3] ] 
			// i=0    i=1    i=2
function getIndexArray3(arr){
  var endProduct=[]; //  endProduct is not reset in the for loop
  
  for(i=0; i<sample.length;i++){
    var product=1; // product is reset with every parent for iteration
    
    for(j=0; j<sample[i].length; j++){
      product= product*sample[i][j]
        
      if(j===sample[i].length-1){
        endProduct[i]= product;
      	}
    }
  }
  return endProduct
    
} 
console.log(getIndexArray3(sample));
```



|      | j=0        | j=1        | j=2        | endProduct   |
| ---- | ---------- | ---------- | ---------- | ------------ |
| i=0  | prod= 1*20 | prod= 20*5 |            | [100]        |
| i=1  | prod= 1*4  | prod= 4*10 |            | [100,40]     |
| i=2  | prod= 40*1 | prod= 40*2 | prod= 80*3 | [100,40,240] |

![image-20210215191237086](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210215191237086.png)

Personal Explanation: 10 mins long total

> < video src="Typora-Vids/NestedFor1.mp4" controls> </video>

> < video src="Typora-Vids/NestedFor2.mp4" controls> </video>







### forEach Loops (arrays*)

#### Description

forEach is fan-favorite loop for a number of reasons

- It lets us skip writing complex "for" arguments

- It gives us immediate access to index values and elements in an array

You employ a callback function directly into the forEach brackets
It makes changes to the array you targeted with forEach

- forEach will loop through your entire array and perform operations dictated by that callback function
- You have the option to invoke a pre-made function, or define a new one
  Arrow functions are a popular choice due to their brevity



#### Function Declare Ex.

Take an array of numbers and add up the total sum of each element multiplied with it's index value.

`[5,10,4]` should give return (5x0) + (10x1) + (4*2) = 18

```JS
const numeros=[5,10,4];

let total=0; //start
numeros.forEach(function addTotal(element,index){ 
  total= total+(element*index)
})
```

console.log(total): ![image-20210218120239613](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210218120239613.png)

- The 2 parameters for our function will always be: `ARRAY-ELEMENT, INDEX-VALUE` 
  Name them whatever you want, but they will always point towards the same thing
- The order must always be the same as well (element first, index value second)



#### Function Call Ex.

This type of forEach implementation seems to be a more limited. 

- The functions we call into a forEach loop don't work if they have parameters (MayBeWrong, but I keep getting errors)
- Avoid using this type of forEach loop

```js
const days= ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

function salute(){
  console.log('Bienvenido!')
}

days.forEach(salute)
```

Repeated once for every element in our array: ![image-20210218122127623](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210218122127623.png)

#### Properties

- Only works with arrays
- Can't use break statements inside this type of loop- iterates through entire array non-stop. (If you want a break, use a normal for or forOf) 
- If you want to return something from a forEach loop, use a variable
  Although it uses functions, returns are always ignored by forEach



### Comparing for-in, for-of, & forEach

- Each of these loops eliminates some of the legwork involved when using regular for loops. These include setting up counters, incrementors, getting access to array index/entry values...etc
- They each have  use-cases, and should be chosen based on what needs they meet that align with your current problems

#### Options Table

Keep in mind that all of these methods are used to mutate existing objects/arrays..etc

|         | meant for...               | access to                                                    |
| ------- | -------------------------- | ------------------------------------------------------------ |
| forIn   | objects                    | keys (direct)<br />values (via path)                         |
| forOf   | arrays<br />sets<br />maps | elements (direct)<br />"continue" and "break" keywords<br />index numbers (through a simple trick) |
| forEach | arrays<br />sets<br />maps | index values (direct)<br />array elements (direct)<br />array itself (use to apply a ƒ() to all entries<br />callback ƒ()- best when defined inside forEach() |

Although you can use some of these loops with sets/maps, look up their lessons to see how. They work differently than with regular arrays/objects

WORTH KNOWING:

- forEach will loop through the ENTIRE array no matter what
- Although you can use forIn loops on arrays, it's not recommended and introduces unwanted errors/changes to how things work internally
- Since strings are an iterable type, you can use forOf on them as well (not explored in this lesson)

RELATED LESSONS:

Accessing the index values in a forOf loop is a bit trickier- it's recommended to use forEach instead. That is unless you need to use the break statement in forOf loop- in that case check the following lesson

Looping through sets works similar to arrays, just with a few limitations (see first sets lesson to see)

#### forIn

We log the object keys with their associated values beside them

```js
let obj= { 'University': 'debt', 'marraige': 'alimony', 'consumerism': 'habitual'}

for(let keyName in obj){
  console.log(keyName, obj[keyName] );	
} //		   DIRECT   PATH
```

![image-20210217205019133](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210217205019133.png)

`keyName` can be called whatever you want, it'll always point to the object property
`obj` is the name of whatever object you're iterating over

#### forOf

EXAMPLE 1: Subtract all the array elements from a starting value of 100

```js
let numbers=[10, 5, 4, 1];
let remains=100;		//start at 100
for (let elName of numbers){
   //   ELEMENT    ARRAY   
  remains=remains-elName;
}
console.log(remains); //OUTPUT:80
```

![image-20210218151853933](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210218151853933.png)

EXAMPLE 2: Gain access to the index numbers and array values, just like in forEach

Used destructuring and the entries method. Remember that the [names, inside] the destructure brackets can be anything you want

```js
const transacs = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [index,entry] of transacs.entries()){
  console.log(`${index}:${entry}`);
}
```

​								![image-20210324063142711](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210324063142711.png) => ![image-20210324063156027](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210324063156027.png)

#### forEach to Change Variable Values

EXAMPLE: Take an array of numbers and add up the total sum of each element multiplied with its index value.

`[5,10,4]` should give return (5x0) + (10x1) + (4*2) = 18

```JS
const numeros=[5,10,4];
let total=0; //start

numeros.forEach((elementValue,indexValue)=>{ 
  total= total+(elementValue*indexValue)
})
console.log(total);
```

![image-20210218152015645](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210218152015645.png)

- The 3 args for our function will always be: `ARRAY-ELEMENT, INDEX-VALUE, WHOLE-ARRAY` 
  Only the first one is mandatory to have 
- Name them whatever you want, but they will always point towards the same thing
  The order must always be the same though (element first, index value second)

#### forEach to Change the Initial Array

If you want to apply a function to each array entry and change their values, you'll need to use the 3rd built in parameter.

EXAMPLE: Double all the array entries

```js
const arr1= [1,2,3,4,5]

arr1.forEach((entry, index, theArray)=> {
  theArray[index] = entry*2;
});
console.log(arr1); 	//OUTPUT: [ 2, 4, 6, 8, 10 ]
```

It does not work if you simply try to re-define the entry argument. Look.

```js
const arr1= [1,2,3,4,5]

arr1.forEach((entry)=> {
  entry = entry*2;
});
console.log(arr1); 	//OUTPUT: [1, 2, 3, 4, 5]
```



### Accessing the Index Value in forOf Loops

- If you're iterating over an entire array, I would recommend skipping this lesson and using forEach loops over forOf 
- It has a built in parameter that lets you easily access the index value of the current array element 

HOWEVER, forEach loops don't let you use break and continue keywords- which are pretty useful for skipping iterations or ending them if a condition is met. 

Example: Using Break in forOf Loops

```js
const restaurant = {
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
}

for (const item of restaurant.starterMenu) {
  if (item == 'Garlic Bread') {
    continue;	//skip logging garlic bread & move to the nest iteration
  }else{
    console.log(item);
  }
}
```

![image-20210306021254286](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210306021254286.png)

#### Which For loop to Use? 

|         | use case (we're only considering arrays)                     |
| ------- | ------------------------------------------------------------ |
| forEach | iterating over entire array                                  |
| forOf   | iterating over an array, possibly only part of it<br />Will need a break or continue statement to skip or end all iterations if a condition is met |
| for     | when iterating part of an array, AND you know the exact index # to stop |

#### Accessing forOf Index Values

Back to my main point- we can actually access the index # of a forOf loop's iteration. Use the `.entries` property. It's a unique tool that creates arrays with nested arrays inside

Let's say you have an array like this:

```js
let testArray= ["Marta", "Rubi", "Yasmin"]
console.log([...testArray.entries()]); // syntax is crucial
```

It returns a parent array whose children arrays are composed of... 
The index number of the iteration's element, and the element itself

![image-20210306022020335](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210306022020335.png)

The syntax I pointed out is very important. Without the 3 dots, the .entries property doesn't return anything useful

#### Example

let's say Marta, Rubi, and Yasmin each need to have their index number used in an operation:
Add 1 to their number, the multiply the sum by 3

```js
let testArray= ["Marta", "Rubi", "Yasmin"]
```

PROOF OF CONCEPT:

We know what sort of arrays the entries property will give us. 
Let's destructure them immediately so we can gain direct access to the index and element, just like in forEach loops

```js
for (const [index, element] of testArray.entries()){
  console.log(`${element}: ${index}`);
}
```

![image-20210306024135428](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210306024135428.png)

ACTUAL SOLUTION:

```JS
for (const [index, element] of testArray.entries()){
  console.log(`${element}: ${(index+1)*3}`);
}
```

^^ Use the above syntax as a template for any time you want immediate access to the index and element values of an array while using forOf loops



# (do)while Loops

Both forms of while loops are great for situations where you want to iterate some code an unknown number of times

This often happens when you're looking for something that has no set pattern or predictable end. (Often the case with complex math like searching for prime numbers or special sequences like Fibonacci)

### while Loops

While and for loops work very similarly to each other, and can sometimes be used interchangeably

|                               | for loop                           | while loop                                                   |
| ----------------------------- | ---------------------------------- | ------------------------------------------------------------ |
| incrementor                   | part of argument                   | must be added at end of each while loop                      |
| starting pt.                  | part of argument                   | must be defined before while loop                            |
| nested loop<br />value resets | automatic<br />in nested for loops | must reset values manually <br />at the top of the while loop |

- In a nested for loop, its argument variable resets itself to 1 after an iteration of its parent loop finishes
- This doesn't happen in while loops
  You must reset the nested while loop values manually (MANUAL ADDITION 3)

```js
i=0	// Start point

while(i<=10) { //STAR 
    // code block to be executed
    i++;   //Incrementor
  }
```

#### Emulating Nested for Loops

We're going to redo the example from the previous lecture-which involved running nested for loops to log our exercise routine

Repeat the following sequence 3 TIMES:
Exercise 1: Star Jumps (2 reps)
Exercise 2: Burpees (4 reps)
Exercise 3: Goblet squats (3 reps)

```js
let revo=1;   //Starting point for the grande while loop (MANUAL ADDITION 1)

while(revo<=2) {
  let star=1; let burp=1; let gob=1; 
  // Restarts the star, burp and gob values at 1 for each grande while iteration 
  // (MANUAL ADDITION 3)

  while(star<=2) { //STAR 
    console.log(`CYCLE ${revo} -Star jump number ${star}!`);
    star++;   //Incrementor (MANUAL ADDITION 1)
  }

  while(burp<=4) { //BURP  
    console.log(`CYCLE ${revo} -Burpee number ${burp}!`); 
    burp++;   //Incrementor 
  }

  while(gob<=3) { // GOB  
    console.log(`CYCLE ${revo} -Goblet squat number ${gob}!`);
    gob++;    //Incrementor 
  }
  
  revo++;
}
```

![image-20210107015744392](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210107015744392.png) ![image-20210107015804175](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210107015804175.png)

Without the manual incrementor we added, the while loop would only iterate once. Our `star, burp, gob` variables for our inner loops do not auto-reset themselves to 1 like they do in for loops



#### When to use while VS for 

WHEN TO USE for: When you know the # of iterations an operation will have
			 Ex. Arrays, when you know a loop will execute "i" number of times 

WHEN TO USE while: When you don't know how long an operation will last
Ex. User inputs, relying on nonstandard increment values, reading a file into a variable

We can also define an incrementor outside of the while loop IF we want to, it's optional

#### Example: Random Dice Roller

GOAL: Create an integer randomizer that spits values from 1 to 6 then logs the results to the console
	  As soon the randomizer rolls a 6, cease all operations

Note that there's no need for an incrementor in this example

```js
let dice=Math.trunc(Math.random()*6)+1;
// The syntax of our dice roller doesn't matter RN

while(dice!==6) {
  console.log(`You rolled a ${dice}`);
  dice= Math.trunc(Math.random()*6)+1;  // Crucial to avoid an infinite loop
  if (dice===6) console.log("You rolled a 6! Loop ending now");
}
// The dice value is reassigned inside the while loop. 
// If it equates to 6, then the console recieves a message saying so, and the loop stops iterating
```

![image-20210107021419309](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210107021419309.png)

That line I specified in the syntax is necessary to avoid an infinite loop. 
Let's say our roller gave us a 4. The while loop executes because our dice value isn't 6. 

It then continues to iterate over and over because 4 will never equal 6, AND we don't redefine the variable involved with the condition



### Do While Loops

Do while loops are simply just while loops that are guaranteed to execute iteration 1, despite whether the argument conditions are met or not.

See the below example:

```js
var ourArray = []; 
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

i starts off equaling 5. The condition demands that i be under 5. 
If this were a regular while loop `ourArray` would stay empty.

Iteration 1: 
We ignore the argument requirement and execute the code in curly braces
5 is added to `ourArray`, then i is incremented to a value of 6

Iteration 2:
Now we pay attention to the argument
i=6, so now the do while loop breaks and no more actions are taken

End result: `ourArray=[5]`

#### Compared to While

The code structure is very similar:

while: ![image-20210215205622701](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210215205622701.png)  		do while: ![image-20210215205636801](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210215205636801.png)



### FCC While Challenges

#### Prob 1

In this challenge the goal is to take 2 arguments (an array and an integer), to then create a parent array with a nested array inside. The integer dictates how long the sub arrays should be:

```
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]]
```

We don't know how many times we're going to split up our array argument, so it's a perfect chance to use a while loop. 

While Condition Description: 
Split up the array, as long as it's smaller than the cut size
We wouldn't want to split ["a","b"] any further if the cut size was 4

SOLN: 

- Remember that splice permanently changes our original array
- `arr` size gets reduced with every splice(), so there's no need to set an incrementor for our while loop.

```JS
function chunkArrayInGroups(arr, size) {
  const parentArray=[];
  while (arr.length >= size) {
    let rip = arr.splice(0, size); // cut off "size" # of entries, starting at index   
    parentArray.push(rip) 
  }
    
  if (arr.length < size && arr.length !== 0) {
    let leftover = arr;
    parentArray.push(leftover)
    
    // if the array size dips below the cut size, we just hand over what's left. 
    //If there's nothing left, this if block gets skipped and the function just ends  
  }
  console.log(parentArray); //visualizer
  return parentArray
}
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)
```

![image-20210325113908209](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210325113908209.png)

#### Prob 2: Fibonacci

Fibonacci Numbers are just a series of values that get their next 1 by adding the previous 2. For Example

> Fibonacci sequence for 9:  0,1,1,2,3,5,8
> Fibonacci sequence for 21: 0,1,1,2,3,5,8,13,21

- We have no idea how many Fibonacci numbers there'll be, so we have to use while 
- We won't increment the letter I up by 1. 
  Instead, we'll use a value that's going to be altered naturally during each loop

```js
function findFibNumbers(num) {
  if (num === 1) return [0, 1, 1];
  if (num === 2) return [0, 1, 1, 2];
  let start = [0, 1, 1, 2];
  let last, secondLast, sum;
  last = secondLast = sum = 0;
  // Continue summing up the last 2 array entries until you surpass num
  while (sum <= num) {
    last = start[start.length - 1];
    secondLast = start[start.length - 2];
    sum = last + secondLast;
    console.log(
      `last is ${last} while second last is ${secondLast} and sum is ${sum}`
    );
    start.push(sum);
    // console.log(start);
  }
  // When you finally surpass num, cut off the last array value and return that
  return start.slice(0, start.length - 1);
}
console.log(findFibNumbers(8));
```

![image-20210608173649243](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210608173649243.png)

#### Get all Numbers between 2 Inputs

```js
function allNumsBetween(arr) {
  // Reorder the array so that the lower number's first
  if (arr[0] > arr[1]) arr.reverse();
  let [lower, upper] = arr;
  let numRange = [];
  do {
    numRange.push(lower);
    lower++;
  } while (lower <= upper);
  console.log(numRange);  //OUTPUT: [ 1, 2, 3, 4, 5 ]
}
allNumsBetween([1, 5]);
```





# Array/Object Destructuring + Spread/Rest 

- Every lesson in this chapter can be found in the previous document for JS Notes. 
- We've placed them here as well in case you want to read the lessons in succession 
- Zipping from the objects chapter to the array chapter, or wherever these concepts apply can be a pain. These techniques can be used in tandem with one another

### Destructuring Arrays

Destructuring can be used on both arrays and objects to extract data so that you can assign them to variables. You break down a complex data structure into a simple one

The original data structure will be left unaffected

```js
const [newName1, newName2...etc]= objName		//No renaming
```

Old way of assigning variables to array elements:

```js
const array= [1,2,3,4,500]
let a= array[0] // 1
let b= array[1] // 2
```

Destructuring:

```js
const array= [1,2,3,4,500]
const [a,b]= array			// a=1 b=2
console.log(a); console.log(b);
```

![image-20210304233158471](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210304233158471.png)

If we wanted to assign variables to the first and last array element:

```js
const array= [1,2,3,4,500]
const [a,,,,b]= array			// a=1 b=500
console.log(a); console.log(b);
```

![image-20210222143756396](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210222143756396.png)

The distance between entry 1 and 500 is 3 elements in total
Add 3 extra commas to the one you would normally use to separate variables (4 total)

#### Accessing Nested Arrays

NESTED ARRAYS IN OBJECTS:

Use dot or bracket notation to reference an array nested on level 1

```js
const restaurant = {
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const [firstMM, secondMM] = restaurant.mainMenu;	
console.log(firstMM, secondMM);
```

![image-20210304233607016](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210304233607016.png)

NESTED ARRAYS IN ANOTHER ARRAY

Fetch values 2, 5, and 6 in the given array and assign them to variables i, j, and k

```js
//Fast way: Use deep destructuring
const nested= [2,4,[5,6]];
const[i,,[j,k]]=nested;
console.log(i,j,k);
```

![image-20210305003804934](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210305003804934.png)

```js
// Long way: Destructure twice
const nested= [2,4,[5,6]];
const[i,,filler]=nested;
const[j,k]=filler;
console.log(i,j,k);
```

Challenge: Fetch 2 5 6 out of this:

```js
const nested= [2,4,[5,[9,6,10]]]
const[i,,[j,[,k]]]=nested;
console.log(i,j,k);
```

#### Incorporating Rest Parameters

If you turn some elements into variables then want to capture the rest of them, use a rest parameter. 

- It will take all that remains and put them in an array that you name
- The rest variable must be at the very end of your list in square brackets

```js
const array= [1,2,3,4,500]
const [a,b, ...remains]= array
console.log(remains);
```

![image-20210222144538113](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210222144538113.png)

If you place a rest parameter after array elements you've skipped, it won't add what you've ignored into the remains array

```js
const array= [1,2,3,4,500]

const [a,,b, ...remains]= array
// a= 1    b=3    index[1]=2 is skipped over
console.log(remains); 
```

![image-20210222144926819](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210222144926819.png)

#### Using Default Values

Sometimes, we won't even know what our array will look like before we write code to destructure it. This often happens with API's fetching data. 

- In cases like these, it may be good to predefine backup values that'll trigger if the destructure method fails to find an array entry

```js
const returnArray=[2,5];
const [a=0,b=0,c=0]=returnArray;
console.log(a,b,c);
```

![image-20210305005014097](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210305005014097.png)

There was no third array entry to deconstruct, so it used the default value of 0



### Tricks with Array Destructuring

#### Swapping Values

Destructuring allows you to take variables that have been declared and have them swap their values:

```js
let a = 8, b = 6, c=10;	// doesn't matter how we declared our variabled, ftr
[a, b, c] = [b, a, c];
```

Now... 	 `a=6`	`b=8`	`c=10`	

#### Getting Multiple Outputs fr/ One Function

If you make the output of a function an array, you can destructure it outside. 
You'll have multiple values, each with their own assigned variable

```js
const restaurant = {
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterMenuIndex, mainMenuIndex){
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]]
    // we'll return an array with 2 nested array elements inside
    // these elements are foods- 1 picked fr/ the starter menu, and 1 fr/ main menu
  }
};
console.log(restaurant.order(2,1));	// let's see what the function output is
```

![image-20210305002652640](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210305002652640.png)

Now, let's destructure the array and prove we can use the elements as variables:

```js
const [appetizer, mainCourse]= restaurant.order(2,1) //this method call gives an array
console.log(appetizer);
console.log(mainCourse);
```

![image-20210305002943863](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210305002943863.png)



### Destructuring Objects

Destructuring assignments make it possible to extract data from arrays or objects so that you can assign them to variables

```js
const{keyName1, keyName2...etc}= objName		//No renaming
// OR
const{keyName1: newName1 , keyName2: newName2...etc}= objName	// With renaming
```

#### Simple Examples

Old way to assign variables to object values:

```js
let voxel= {x:3.6, y=7.4, z:6.54}
const x= voxel.x; 				 // x=3.6
const z= voxel.z;				 // z=6.54
```

Destructuring without Renaming:

```js
let voxel= {x:3.6, y:7.4, z:6.54}
const{x,z}= voxel; 
console.log(x,z);
```

![image-20210304232803037](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210304232803037.png)

- We create const variables x and z at the same time using the voxel object
- The new variable names must match the object keys- even if you specify new names
  See how in this next snippet...

Destructuring with Renaming:

```js
let voxel= {x:3.6, y:7.4, z:6.54}
const{ x: hextech , z: z_move}= voxel; 
console.log(hextech);	// OUTPUT IS 3.6
```

#### Nested Object Destructuring

Take the following object with nested objects inside. 
Define new variables: `startX, startY, endX, endY`

```JS
const nest= {
  start: {x:5, y:6},
  end: {x:6, y:-9}
};

const{ start: {x:startX, y:startY} } = nest		// enter the start key 
const{ end: {x:endX, y:endY} } = nest			// enter the end key

console.log(`startX:${startX}   startY:${startY}    endX:${endX}    endY:${endY}`);
```

![image-20210222135724419](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210222135724419.png)

#### Using Default Values

You can set default values in case you're trying to extract data from a key value pair that doesn't exist. This is a failsafe commonly used when fetching data from servers. The endeavor ain't always successful

```js
const restaurant = {
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
    // we'll return an array with 2 nested array elements inside, each picked from the restaurant menus
  },
};

const { menu = [], starterMenu: appetizers = [] } = restaurant;
console.log(menu);
console.log(appetizers);
```

![image-20210305020854261](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210305020854261.png)

We set a default parameter for `restauarant.menu`: An empty array

- `restauarant.menu` actually does not exist, so it returns an empty array instead of undefined
- The `starterMenu` key-value pair we extract gets renamed to "appetizers" for its vari
  It also has a default parameter equaling to an empty array- it just isn't used due to the fact that `restaurant.starterMenu` does exist

### Tricks for Object Destructuring

#### Mutating Variables with Object Values

In the array destructuring lesson, we learned how to swap variable values. 
Here, we're going to mutate variable values with object destructuring

```js
let a= 111;	let b=999;
const obj= {a:23, b:7, c:14};
({a,b}=obj);	// mutating the a and b variables (NOT creating new ones)
console.log(a,b);
```

![image-20210305022334106](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210305022334106.png)

- The a and b variables were already defined, but they happened to match the keys of the obj
- Without the () brackets, JS would think we were trying to initially declare a and b a second time- which results in an error

#### Passing Object Values as Function Arguments

This allows you to use object values as parameters for practically any function you can come up with.

Let's say you have the following profile object:

```js
const data={
  name: "Mayra",
  age:"28",
  major:"arts"
}
```

If you want to use object values as parameters, you can either... 
A) Use destructuring INSIDE a function

```js
const profileUpdate= (obj)=>{	
  const {name, major}= obj;
  // Do whatever you want with your object keys now
  console.log(name, major);	
}
profileUpdate(data) // we send in our data object as (obj)
```

![image-20210222142439087](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210222142439087.png)

Here, we say that our function parameter will be an object
We'll specify that object when we call the function

B) Destructure where the arguments of a function go

```js
const profileUpdate= ({name, major})=>{
  // Do whatever you want with your object keys now
  console.log(name, major);
}
profileUpdate(data) // we send in our data object
```

![image-20210222142439087](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210222142439087.png)

This time, we say that our function parameters will be the extracted keys from whatever object we pass into our function during its call. (more direct)

MORE PRACTICAL EXAMPLE:

Let's feed an object with details about a Foodora order into a method belonging to a different object:

```js
const restaurant = {
  orderDelivery: function ({time,address,cost}) { 
      	// destructuring right in the arguments area 
    console.log(`
    Order recieved! 
    time: ${time}
    address: ${address}
    cost: ${cost}
    `);
  },
};
const orderObj={ 
  time: "9PM",
  cost: 42,
  address: "91 Blackwood Lane"
}
restaurant.orderDelivery(orderObj);
```

![image-20210305024239953](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210305024239953.png)

- Oftentimes in JS, it can be annoying to memorize what order the arguments of a function must be provided in. This trick negates that issue

- We could have given the order information in reverse order and everything'd be fine

Combine everything you've learned about object destructuring when you build your applications. We skipped using default parameters in the above example



### Spread Operator

Spread operators are just 3 dots that allow us to use array elements in places where parameters are expected. 

- Can only use the spread operator when building an array or passing values into a function (both of them expect multiple values)
- You can't use spread operators in template literals, they expect 1 value
  `${...args}` will not fly without errors

#### Relation to Rest Parameters

If you compare it to rest parameters, you'll notice the 2 are opposites of each other. 
Feel free to check out the Rest Parameters lesson in our Function Chapter

Spread Operator: Takes elements already in an array, and releases them from it. 
Rest parameters: Place loose inputs into an array

#### Purposes

###### Pass Array Elements as Arguments

```js
function add3(x,y,z){ 
    return x+y+z;	// function only needs 3 arguments
}	
let args= [2,5,4,1];
console.log(add3(...args));	
    // we pass in the first 3 arguments of the arr array
    // The forth array element is IGNORED since add3 doesn't need a 4th arg
```

![image-20210222115017949](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210222115017949.png)

You can make a function be able to accept unlimited arguments using rest parameters

###### Array Cloning

If we set blank=numbers, `blank[0]=400` would affect the numbers array as well
This is typically undesirable

```js
let numbers= [1,2,3,4];	let blank=[];	//blank array starts off as empty
blank=[...numbers];	// clone
blank[0]=400; //should only affect the clone "blank" while leaving numbers the same
console.log(numbers);
console.log(blank);
```

![image-20210305031507045](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210305031507045.png)

###### Flexible Array Concatenation

We have 2 arrays here. 

- The second one has some elements, but we want to shove array one's elements into it 
- We want the elements inside, not the entire array itself with the square brackets

```js
let uno= [1,2]; let dos= ["Jake", "Amir"];
dos= [...uno,...dos]; //chose to put uno's elements before dos'

console.log(dos);
```

![image-20210222121113307](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210222121113307.png)

- We can even include new additions in between the array elements we're spreading

```js
let uno= [1,2]
let dos= ["Jake", "Amir"];

dos= ["Murph", ...uno,"Henry",...dos]; //chose to put the ray's elements before bands'
console.log(dos);
```

![image-20210222121038928](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210222121038928.png)

It's be real annoying to do this by pointing to each array entry 1 at a time

#### iterables

The spread operator can be used on any kind of iterable, not only arrays. 
Iterables include: Strings, maps, sets, but NOT objects 
(though spread does work on objects too)

Ex. Split a string up into individual letters, then place them in an array with other letters added in

```js
const str= "Fuego"
const letters = ['N', ' ', ...str]; // added an N and a space
console.log(letters);
```

![image-20210305033633092](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210305033633092.png)

Fuego is now split up into 5 individual letters



### Rest Patterns

The rest pattern has the same syntax as the spread parameter- it uses 3 dots. However it accomplishes the exact opposite 

Spread: 
Takes elements already in an array, and spreads them out so they're individual
Let's you build new arrays or place individual values into a function
Unpacks, and is on the RIGHT SIDE of the assignment operator (=)

Rest Pattern: 
Collects multiple stray values and condenses them into an array
Packs, and is on the LEFT SIDE of the assignment operator (=)

#### Spread Operator VS Rest Pattern

SPREAD) Use the spread operator to unpack an array with a nested array inside

We take a condensed array and spread it's contents out

```js
const unpackThis= [1,2,3,[6,1,9]];
const [a,b,c,remain]= unpackThis;	//destructure this first
const unpacked=[a,b,c,...remain]	//SPREAD! unpack the nested array
console.log(unpacked);
```

![image-20210305163948894](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210305163948894.png)

REST) Use rest patterns to take an array and condense half of it into a new array

We take an array with spread out elements and condense some of them 

```js
const packHalf= [1,2,3,6,1,9];
const [a,b,c,...remains]= packHalf;	//REST! Condense half
const packed= [a,b,c,remains];// create a new array with the condensed one nested 
console.log(packed);
```

![image-20210305164253395](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210305164253395.png)

```js
const unpackThis= [1,2,3,[6,1,9]];
const [a,b,c,remain]= unpackThis;	//destructure this first
const unpacked=[a,b,c,...remain]	//SPREAD! unpack the nested array
//VS ------------------------------------------------------------------
const packHalf= [1,2,3,6,1,9];
const [a,b,c,...remains]= packHalf;	//REST! Condense half
```



### ∞ Parameters for Functions

Rest parameters allow us to supply an unspecified amount of inputs to our functions. 
It does this by packing all the inputs into an array (just like rest patterns)

- You can use rest parameters alongside regular ones, but the rest parameters must be last or else you get an error

EXAMPLE: We use rest parameters to plug all our inputs into an array

```js
function spontArray(...nums){
  return nums
}
const result1= spontArray(5,10,2)
const result2= spontArray(1,9,110,23,-8)
console.log(result1, result2);
```

 ![image-20210217191022218](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210217191022218.png) We get a 3 length array, then a 5 length array



#### Provide Regular Arguments Alongside Rest Parameters

Create a method that logs a customer's order. 
Separate the logs based on the main dish they order, and the side dishes

```js
const restaurant = {
  name: 'Classico Chino',
  orderChinese: function(main, ...sides){
    console.log(`Main Course: ${main}`);
    console.log(`Sides: ${sides} `);
  }
};
restaurant.orderChinese(" Teriyaki Chicken", " Dim Sum", " Wonton Soup"," Spring Rolls")
```

Teriyaki Chicken is the regular argument. Everything else is packed into an array. You just can't see it because we log each entry sequentially to the console

SIMPLER EXAMPLE:

```js
function newF(a,...nums){
  return console.log(a, nums)
}
const result1= newF(5,-30,9) 
// 5 is the normal variable
// everything else is part of the array
console.log(result1);
```

Output: integer 5, then an array with all the other parameters inside: ![image-20210217191649819](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210217191649819.png)



#### Combining with the Spread Parameter

The spread parameter takes elements in an array, then unpacks them into individual values. Use this alongside rest parameters to feed an array to your function, and use each entry as an input

PART 1: 
Use rest parameters to create a function that adds all entries in an array with an unspecified length

PART 2: 
Feed this function a bunch of values as arguments
Feed this function an existing array as an argument

```js
function addEmAll(...numbers){
  // the above rest parameter packs all inputs into an array
  let sum=0;
  for(let i=0; i<numbers.length;i++){
    sum= sum+numbers[i]
  }
  return sum;
}
console.log(addEmAll(10,5,5,20,100)); 
let test= [5,4,1];

console.log(addEmAll(...test));  
// if you want to use an array as an argument, you'll have to unpack its values with a spread operator
```

![image-20210305175440541](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210305175440541.png)

Look how flexible our function is. 
It can accept regular inputs and array inputs now! 
Also, the number of arguments can be whatever we want

#### ES5 Method for Rest Parameters

Back before rest parameters existed, we used the "arguments" keyword that every function (aside from arrows) has access to. 

```js
const addExpr= function(a,b){
  console.log(arguments);
  return a+b;
}
console.log(addExpr(2,5,10)); 
//D.N return 17 because of our return equalling a+b
```

![image-20210304003032574](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210304003032574.png)

Anyway, the argument keyword makes an object with all your arguments as values, and would-be index numbers as keys (if this were an array)

### Destructuring Inside Functions

Sometimes, we don't want to feed a function an entire object or array as an argument. 

- Specifying which part to use at what time is a pain, especially when there's looping involved. 
- Wouldn't it be great if you could give a function an object then have it immediately give you the index numbers,keys, or values right from the get go?

This is possible, and not even particularly difficult- via destructuring.
Option 1) Destructure immediately where the arguments go
Option 2) Let the object enter the function first, then destructure inside

I would suggest using Option 2) if the destructuring is lengthy
The following examples all use that. 

#### Basic Example

We'll learn how to retrieve nested objects and array values using destructuring
Be aware, you may be able to combine multiple lines into one if they work sequentially

GOAL: 
Fetch "final flash", "Kaio-ken", and "fusion". Set them to variables a,b,c
No functions involved in this example, but it's important for building fundamentals

```js
let object={
  gotenks: 'fusion',
  vegeta: ["Big bang attack", "final flash"],
  goku: { teleport: "instant transmission", powerup: "Kaio-ken"},
}
```

###### SOLN STAGE 1 ————————————————【】—————————————————————

```JS
const { gotenks: a }= object  //FUSION FETCHED, renamed a
const {vegeta: [,b]}=object   // FINAL FLASH FETCHED, renamed b	(double destructure)
const{goku: {powerup:c}}= object  //KAIO-KEN FETCHED, renamed c (double destructure)
```

Double destructuring Explanation for Final Flash

1) Destructure the object, and target the `vegeta` key-value pair
2) Destructure the value of that key (it's an array)
3) Get the value of the second entry and rename it to variable b

For the record, "vegeta" is not defined as a variable after this
if we only typed `const{vegeta}=object`, then it would be

Double Destructuring Explanation for Kaioken

1) Destructure the object, and target the `goku` key-value pair
2) Destructure the value of that key (it's an object)
3) Get the value of the `powerup` key value pair there, then rename it to variable "c"

"goku" is not defined as a variable after this. 
if we only typed `const{goku}=object`, then it would be

###### SOLN 2: Condense Everything ————————————————【】——————————

Since all 3 lines search for things inside the same object, we can technically do everything one 1 line.

```js
const { gotenks: a }= object  //FUSION FETCHED, renamed a
const {vegeta: [,b]}=object   // FINAL FLASH FETCHED, renamed b
const{goku: {powerup:c}}= object  //KAIO-KEN FETCHED, renamed c
```

becomes....

```js
const{gotenks: a, vegeta: [,b], goku: {powerup:c}  }=object
```

I would honestly recommend doing things the long way first, then condensing everything afterwards. It's much easier to comprehend that way



#### ADVANCED CHALLENGE:

We have the object below given to us. We want to take the opening/closing time values and create new variables with them. We want the variable names to be:

`openThu, closeThu`  `openFri, closeFri`  `openSat, closeSat`

Create a function that lets you feed an object as an argument

```js
const resto = {
  openingHours: {
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 },
  },
};
```

PHASE 1 SOLUTION: Solve the problem in as many lines needed

```JS
function hours(obj) {
  
    const { openingHours }= obj	
  //STEP 1: make the openingHours object its own variable (so we can deconstruct it)
    
  const{thu,fri,sat}= openingHours	
  //STEP 2: make the thu fri sat nested objects their own variables (to deconstruct)
  
  const {open: openThu, close: closeThu}=thu
  const {open: openFri, close: closeFri}=fri
  const {open: openSat, close: closeSat}=sat
  //STEP 3:
  // deconstruct the thu fri sat objects and finally access their open/close times
  // now we can extract the key value pairs using key names. Rename them afterwards
  
  console.log(closeSat);	//tests if it worked
}
hours(resto);
```

PHASE 2: Combine Steps 1 and 2 (2 deconstructs => 1 double deconstruction)

Step 1 and 2 were just two deconstructions performed in sequence. 
Instead, use double deconstruction, all on one line

```JS
function hours2(obj) {
  const { openingHours: { thu, fri, sat } } = obj; //STEP 1/2 double deconstruction!
  
  const {open: openThu, close: closeThu}=thu
  const {open: openFri, close: closeFri}=fri
  const {open: openSat, close: closeSat}=sat	//STEP 3 is the same
  console.log(openFri);
}
hours2(resto);
```

PHASE 3: Make your code as lean as possible

Look at phase 2's code. Step 3 involves 3 deconstructions on variables `thu, fri, and sat`. Step 1/2 stops when we create those variables. Why not just deconstruct them right then and there?

```JS
function hourFinal(obj) {
  const {											//FROM HERE
    openingHours: {
      thu: { open: openThu, close: closeThu },
      fri: { open: openFri, close: closeFri },
      sat: { open: openSat, close: closeSat },
    },
  } = obj;											// TO HERE IS 1 LINE (lmao)
  console.log(closeFri);
} 
hourFinal(resto);
```

![image-20210306235147164](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210306235147164.png)

#### Destructuring inside Arguments

The examples we solved in this lesson would look terrible if we destructured inside the function's argument. If you want to see an example of how to do so, check out this video:

> < video src="Typora-Vids/Refactoring-Deconstruction.mp4" controls> </video>

For context on the problem this solution is for, check out the lesson titled: "Looping through Objects with forOf"



# Modern Data Structures & Operators

### Modern Operators and Short Circuiting

| SYMBOL | PICKS THE FIRST...                         | IF NOT FOUND                                                 |
| ------ | ------------------------------------------ | ------------------------------------------------------------ |
| &&     | falsy                                      | picks the last option, even if its truthy                    |
| \|\|   | truthy                                     | picks the last option, even if its falsy                     |
| ??     | truthy<br />(considers "" and 0 as truthy) | picks the last option, even if its falsy<br />(only considers null and undefined as falsy) |

AND: 
Make the last option in the list a function call
Execute function of all other options in the list are found to be true

OR:
Use to set default values

NULLISH:
Use to set default values, but want to consider 0 and empty strings as valid/truthy options



#### Short Circuiting

SHORT CIRCUITING WITH && (and)

```js
console.log(5 && 'teeth' && 0);			//OUTPUT: 0
console.log(null && '' && undefined);	//OUTPUT: null
console.log(10 && 7 && 'hah');			//OUTPUT: "hah" (all truthy)
```

SHORT CIRCUITING WITH || (or)

```js
console.log(5 || "NF");             //OUTPUT: 5
console.log(undefined || [1,2,4]);  //OUTPUT: [1,2,4]
console.log(0 || true);             //OUTPUT: true
console.log("" || null);            //OUTPUT: null	(both are falsy)
console.log("" || 0 || null || 6 || 8);		//OUTPUT: 6
```

SHORT CIRCUITING WITH ?? (nullish)

```js
console.log(5 ?? "NF");             //OUTPUT: 5
console.log(undefined ?? [1,2,4]);  //OUTPUT: [1,2,4]
console.log(0 ?? true);             //OUTPUT: 0
console.log("" ?? null);            //OUTPUT: ""
console.log("" ?? 0 ?? null ?? 6 ?? 8);		//OUTPUT: ""
```



#### &&: Execute if true

PREMISE:
You're coding some sort of game where you want the total to reset to 0 if you roll a 7

CONDITIONAL METHOD:

```JS
let total=20;
let resetTotal= function(){ total=0 }
if (roll===7) resetTotal();				// if statement

let roll=7; 		// we rolled a 7!
console.log(total);	//OUTPUT: 0
```

SHORT CIRCUIT METHOD:

```js
let total=20;
let resetTotal= function(){ total=0 }
roll===7 && resetTotal()				// short circuit

let roll=7; 		// we rolled a 7!
console.log(total);	//OUTPUT: 0
```

OPTIONAL ->  You can assign your  short circuit to a variable

```js
let restart= roll===7 && resetTotal()
console.log(total); //OUTPUT: 0
```

Even if you set your short circuit expression equal to a variable, it'll still effect our total score. 
Be aware of this- but know that it's pointless to assign a variable when it's not needed



#### ||  and ??: Pick a default option

PREMISE:
We're managing our restaurant and want to know how many guests to prep for that day. 

- If no guests make reservations that day, the computer makes no KVP for it
  In this case, use a default value of 1 
- If guest have registered, there should be a KVP in the object called `numGuests`. 
  Give that value back instead

CONDITIONAL METHOD:

```JS
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy'
}

restaurant.numGuests = 23;	// we hardcoded numGuests in
const guests1 = restaurant.numGuests ? restaurant.numGuests : 1;
console.log(guests1); //OUTPUT: 23
```

SHORT CIRCUIT METHOD:

```JS
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy'
}

restaurant.numGuests = 23;	// we hardcoded numGuests in
const guests2= restaurant.numGuests || 1;
console.log(guests2);	// we did not not hardcode numGuests in this snippet
```

——————————————————————————————————————————————————————
TWIST: 

- Instead of no KVP, let's say the computer places `{ numGuests: 0 }` in our object when nobody makes a reservation
- We need to distinguish 0 guests from not having a KVP at all
  We can't do that with OR, but we can with NULLISH

```JS
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  numGuests: 0
}

const guests = rest2.numGuests ?? 'action if this KVP does not exist';
console.log(guests);	// OUTPUT:0 (would equal the message if we used OR)
```



#### Extract Booleans fr/ Modern Operators 

The aforementioned modern operators don't always have to be used to log things to the console or execute functions. They can also be used exclusively with conditional expressions. Watch

&&: 

Ignores truthy, picks first falsy, or defaults to the last expression if there are none
But what if we gave it statement that all turned out to be true or false?

```js
let a=5;
let allFalse= a>15 && a>30;
console.log(allFalse);	//OUTPUT: FALSE
```

![image-20210308014940689](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210308014940689.png)

```js
let a=500;
let allTrue= a>15 && a>30;
console.log(allTrue);	//OUTPUT: TRUE
```

![image-20210308014907078](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210308014907078.png)

Technically this is not is a new rule. 
Since no falsys are found, the last expression is what && defaults to.
`a>30=false` in example 1, and `a>30=true` in example 2

The result is the same regardless of which operator you choose while doing this (&& || ??)



### Optional Chaining for Object Keys

This is a new feature that can be applied to both objects and arrays. 
It has excellent synergy with the nullish `??` operator we just learned about 

With optional chaining, if a certain property does not exist, it'll return undefined immediately. This is good for when you need to check for things that may or may not exist

#### Illustrating the Need

```js
const restaurant = {
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
}
```

Let's check to see the closing time of our restaurant on Sunday. 
If the place isn't open on Sunday, you'll experience some difficulties

```js
console.log(restaurant.openingHours.sun.close);		
```

![image-20210306151653279](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210306151653279.png)

Returns an error because `restaurant.openingHours.sun` equals undefined. When we attempt to get `undefined.close`, JS throws an error.

To mitigate this, we'd have to write an if statement

```js
if(restaurant.openingHours.sun){
  console.log(restaurant.openingHours.sun.close);	
}
```

//—————————————————————【】——————————————————————————

WHY THIS APPROACH DOESN'T ALWAYS WORK WELL:

This problem appears solved, but what if we had more than just one condition we needed to fulfill? IRL, things get much more complicated. 

- What if we had to check if the object had an `openingHours` nested object, and if they were open on Sunday, and if they did delivery at that certain time... all just to pull one value?
- Our if statement would be a mile long `if( x==true && y==true && z==true && ...etc)`

To fix this, optional chaining was invented- to give back "undefined" as soon as JS recognizes that something you're pointing to is not present. It beats getting errors back down the line

#### How Optional Chaining Works on Objects

RULES:

- A property does not exist if it equals undefined or null- this tool abides by nullish operator rules
- Empty strings and the value 0 will still make JS consider the property to exist

HOW TO APPLY:

- Place a question mark at the end of the first property you're not sure exists

- We have the option to add a `?` before every dot in our path, if we really don't know what's going on

#### EXAMPLE 1:

```js
let obj={
  roguelike: {
    shooter: "ruiner",
    dungeon: "Hades"
  }
}

let isItHere= obj.roguelike.mage?.water.boat.is.anyone.still.reading.this
console.log(isItHere); 			// OUTPUT: undefined (no mage key)
```

In the above example, we know `obj.roguelike` is present
We are unsure if there is a "mage" property, so we place `?` after that word

- If `obj.roguelike.mage?` doesn't exist, nothing afterwards will be considered
- If it does, then it will be evaluated. 
  We'd need more question marks for all the other keywords we told JS to look up

#### EXAMPLE 2: 

```js
let obj={
  roguelike: {
    shooter: "ruiner",
    dungeon: "Hades",
    mage: "Lux"	// we added the mage key to see what would happen
  }
}

let isItHere= obj.roguelike.mage?.water.boat.is.anyone.still.reading.this
console.log(isItHere); 
```

![image-20210306165353571](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210306165353571.png)

JS finds the mage key we were searching for now, but there is no water key, or boat key.. or any of the others we threw in. One `?` is not enough:

```JS
let isItHere= obj.roguelike.mage?.water?.boat.is.anyone.still.reading.this
```

You can even use a question mark before every dot- though that's probably bad form

```js
let isItHere= obj?.roguelike?.mage?.water?.boat?.is?.anyone?.still?.reading?.this
```



### Optional Chaining for Object Methods & Arrays

#### Chaining on Methods

This lets you check if a method exists in an object before before calling it

EXAMPLE:

Assume an object `pizzaPlace` does exist, but does not have a method named `orderDeliveri`

```js
// Taking a risk calling something that may not exist
let test= pizzaPlace.orderDeliveri()
```

![image-20210306171324129](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210306171324129.png)

```js
let experiment= pizzaPlace.orderDeliveri?.()  // added .? before arguments
console.log(experiment);
```

![image-20210306171304672](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210306171304672.png)

#### Chaining Arrays

We can use chaining with the nullish operator to check if an array's empty
Remember, nullish operator searches for a truthy or defaults to the last option
"" and 0 are considered truthy to it

EXAMPLE: 
If an array's not empty, log its first entry
If it is empty, log an error message

```js
const coders=[]
let isArrayEmpty= coders?.[0]  ?? "error message";
console.log(isArrayEmpty);
```

![image-20210306172932458](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210306172932458.png)

```js
const coders=["Shadid", "Kane", "Yuna"]
let isArrayEmpty= coders?.[0]  ?? "error message";
console.log(isArrayEmpty);
```

![image-20210306173006075](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210306173006075.png)

Old Method (Longer)

```js
if(coders.length>0){
  console.log(coders[i]);
} else{
  console.log("error message");
}
```



### Looping through Objects with forOf 

Typically, I'd use a forIn loop to iterate my way through an object. But, there is a way to do so with forOf. It involves using methods that give us access to the content an object holds

| Method              | gives us access to                                           |
| ------------------- | ------------------------------------------------------------ |
| `Object.keys( )`    | each key inside the specified object<br />They're placed inside an array |
| `Object.values( )`  | each value inside the specified object<br />They're placed inside an array |
| `Object.entries( )` | `[ [key1,value1], [key2,value2], [key3,value3] ]` <br />of the specified object |

GOAL: Take a complex object and return a concise string like this:

![image-20210306175632834](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210306175632834.png)

STARTER CODE: 

```JS
const resto = {
  openingHours: {
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 },
  },
};
```



#### Demonstrating our New Methods

`Object.keys`: Gathers the keys of the object we specify and places them in an array

```js
const dayProperties= Object.keys(restaurant.openingHours)
console.log(dayProperties);
```

![image-20210307012050870](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210307012050870.png)

`Object.values`: Gathers the values of the object we specify and puts them in an array

```js
const dayValues= Object.values(restaurant.openingHours)
console.log(dayValues);
```

![image-20210307012419618](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210307012419618.png)

`Object.properties`: Gives us `[ [key1,value1], [key2,value2], [key3,value3] ]`

```JS
const KVpairs= Object.entries(restaurant.openingHours)
console.log(KVpairs);
```

![image-20210307012702987](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210307012702987.png) ![image-20210307012832557](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210307012832557.png)

The objects that were too long for the short preview on the left have their elements highlighted yellow on the right

> [ 
>
> [ thu, {open:12, close:22} ],			
> [ fri, {open:11, close:23} ],			
> [ sat, {open:0, close:24} ] 
>
> ]; // these 3 array elements are inside one parent array

Starting Code, with doodles: ![image-20210307015831272](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210307015831272.png)

#### Solve with a forOf Loop

Remember, forOf doesn't work on objects, so we'll have to use one of our new methods to turn that object into an iterable array- unless you like errors

```js
for (let KVP of Object.entries(restaurant.openingHours)) {
  let [day, hours] = KVP;	// deconstruct [ [thu, {~}], [fri,{~}], [sat,{~}] ]
  let { open, close } = hours;	//deconstruct hrs object
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
```

![image-20210307021038981](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210307021038981.png)

Let's refactor:

```js
for (let [day, { open, close }] of Object.entries(restaurant.openingHours)) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
```

Want to see a step-by-step explanation of how we cleaned up or code?

> < video src="Typora-Vids/Refactoring-Deconstruction.mp4" controls> </video>



#### Solve with forIn Loop Instead

Straight up, this method's much easier, as long as the nested objects aren't nested too deep- our paths would get too long. Even so, I'm going to learn how to do this with forOf loops anyway

```js
for (let key in restaurant.openingHours){
  let openHr= restaurant.openingHours[key].open;
  let closeHr= restaurant.openingHours[key].close;
  console.log(`On ${key} we open at ${openHr} and close at ${closeHr}`);
}
```



### Sets (unique value arr.)

ES5-era JS only had objects and arrays for data structures. ES6 introduced 2 new data structures for us to use: Sets and Maps

ABOUT SETS

- Sets are collections of unique values- they don't allow for any duplicates
- Like arrays, they count as iterables and don't contain any key value pairs
- Since strings are iterables, sets work on them as well

WHAT SEPARATES THEM FROM ARRAYS

- No repeats are allowed
- The order inside a set is irrelevant

EXAMPLE 1: Declare a New Set Regularly

Create a set with different data types with repeats thrown in

```js
const ordersSet = new Set(['lomo', 5, null, 10, 'lomo saltado', 5, null]);
console.log(ordersSet);
```

All repeats were eliminated: ![image-20210307211201662](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210307211201662.png)

- Notice how "lomo" and "lomo saltado" are considered 2 different strings
- The set does not eliminate repeated letters inside strings that are given as entries to an iterable object.
  "Lomo Saltado" has multiple O's, L's, and A's, none of which are erased



#### Set Methods

|                    | effect                                                       |
| ------------------ | ------------------------------------------------------------ |
| `setName.size`     | checks for the size/length of the set                        |
| `setName.has()`    | sees if a set contains what you placed in brackets<br />returns Boolean |
| `setName.add()`    | adds what you put in brackets to the set                     |
| `setName.delete()` | deletes what you put in brackets from the set                |
| `setName.clear()`  | deletes the entire set's contents, leaving it empty          |

SIZE METHOD

Create a set using strings, and get the size as well

```js
const stringSet = new Set('lomo saltado o');
console.log(stringSet);
console.log(stringSet.size); 
// Spaces count towards the size, once
// Repeat letters do not count towards the size
```

Repeat letters are erased for standalone strings 

![image-20210307211816154](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210307211816154.png)

HAS/ADD/DELETE METHOD

```js
const stringSet = new Set(["A", "b", 23, undefined, "", 0, null]);
console.log(stringSet.has("a")); // does not have lower case a (case sensitive)
console.log(stringSet.has("A")); // does contain A
```

![image-20210307213835111](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210307213835111.png)

```js
// LEFT PICTURE (add method)
const stringSet = new Set(["A", "b", 23, undefined, "", 0, null]); //initial set
console.log(stringSet.add("Arkaos")); // added something 
```

```JS
// RIGHT PICTURE (delete method)
const stringSet = new Set(["A", "b", 23, undefined, "", 0, null]);	//initial set
stringSet.delete(undefined);	// get rid of the undefined item
console.log(stringSet);
```

![image-20210307213944703](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210307213944703.png) 	![image-20210307214349278](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210307214349278.png)

CLEAR METHOD:

```JS
const stringSet = new Set(["A", "b", 23, undefined, "", 0, null]);
stringSet.clear()
console.log(stringSet); 
```

![image-20210307230931120](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210307230931120.png)

#### Retrieving Values from Sets (lol)

You can't. This isn't really an issue when you think about it.

- If you want to store data that you'll retrieve later, use an array or an object with good names for your keys
- The purpose of a set is to see if something is unique or not- that's why we have the has method

//—————————————————————【】——————————————————————————

Quick word of advice- Even if we can loop through sets, stick to using arrays for complex operations. They have way more methods built for them. 

- Feel free to pass in array data, filter out duplicates, then pass the unique content back into an array though!

#### Looping through Sets

forEach - works on sets, but you can only access properties (there are no index #s)

```js
const vari= new Set(["Hades", "Ruiner", "Magicka", "Dragon's Dogma" ])
let str= "I'm looking forward to playing these games:"

vari.forEach(function addStr(property){
  str+= ` ${property},`; 		// use forEach to concatenate the string
})

let finalStr= str.slice(0,-1) // remove final letter
console.log(finalStr);
```

![image-20210307233704964](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210307233704964.png)

forOf - also works well on arrays. You have access to the property, plus break/continue keywords

```js
const vari= new Set(["Hades", "Ruiner", "Magicka", "Dragon's Dogma" ])
let str= "I'm looking forward to playing these games:"

for (let props of vari){ 
  if(props=="Magicka"){
    break;	// we end the for loop as soon as we see "Magicka appear"
  } 
  str+= ` ${props},`;	// concatenating the string
}
let finalStr= str.slice(0,-1) // remove final letter
console.log(finalStr);
```

![image-20210307233548324](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210307233548324.png)

#### forEach quirks on Sets

Since sets don't have index numbers, forEach's first and second argument will equal the exact same thing: 	`arg1=set_value	arg2=set_value (again)	arg3= entire_set`

- Since parameter 2 is a throwaway, use `_` as its name so other coders know
  Only if you need access args 1 and 3
- This naming convention is not strictly required, but is good practice

```js
const ordersSet = new Set(['To', 'be', 'or', 'not', 'to', 'be']);
ordersSet.forEach((value, _, set) => {
  console.log(value, set);
});
```

![image-20210325044604765](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210325044604765.png)

#### Conversion and Removing Array Duplicates

- The main use-case of sets is to remove duplicates from arrays. 
- It's much easier than other methods, as long as you're familiar with how spread operators liberate values already packed in an iterable (arrays, sets...etc)

```js
const staffArray= ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffSet= new Set(staffArray); // array=> set conversion

const revisedStaffArray= [...staffSet]	// set=> array conversion
console.log(revisedStaffArray);
```

![image-20210307231841384](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210307231841384.png)



### Maps: Fundamentals

Maps is the 2nd added data structure JS got in ES6. 
They're very similar to objects, but more flexible regarding what their keys can be

- Just like in objects, maps have keys with assigned values
- The main difference is that map keys are not as restricted as object keys
  Object keys must be strings, numbers, Booleans, or a falsy value
- Map keys are allowed to be practically anything (including what object keys can be)

MAP KEY POSSIBILITIES: Objects, arrays, other maps, anything object keys can be

#### Declaring Maps

REGULAR MAP DECLARATION:

```js
const zFighters = new Map([
  ["Piccolo", "Namekian"],
  ["vegeta", "saiyan prince"],
  ["krillin", "human"],
]);
console.log(zFighters);
```

![image-20210308063127107](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210308063127107.png)

SET METHOD FOR DECLARING MAPS:
Recreate the previous map with the set method
Then show how to chain set statement to shorten your code

```js
const zFighters= new Map();
zFighters.set("Piccolo", "Namekian");
zFighters.set("vegeta", "saiyan prince");
zFighters.set("krillin", "human")
console.log(zFighters);
```

This works, but we can chain all these sets:

```js
const zFighters= new Map();
zFighters.set("Piccolo", "Namekian").set("vegeta", "saiyan prince").set("krillin", "human")
console.log(zFighters);
```

![image-20210308011341486](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210308011341486.png)

Don't use this to initially declare maps. Save this method for when we want to add key value pairs one at a time later in our code- like `array.push()`

#### Common Methods 

|                          | effect                                                       |
| ------------------------ | ------------------------------------------------------------ |
| `mapName.set(key,value)` | Adds a key value pair to a map<br />can be chained multiple times in 1 line |
| `mapName.get(key)`       | retrieves a value from the set                               |
| `mapName.has(key)`       | checks if the map has that key somewhere                     |
| `mapName.delete(key)`    | deletes a KVP in your map                                    |
| `mapName.clear()`        | empties out the map                                          |
| `mapName.size`           | tells how many KVP's your map contains                       |

EXAMPLE 1:
Retrieve a key value pair with `get` after declaring some unorthodox ones

```js
const rand= new Map([
  [["Tony Danza", "Evan Wallace"], { general: "ironwall", huntsman: "Ruby"}],
  [true, 99]
]);

console.log(rand);	// log the entire map 
console.log(rand.get(true)); 	// get the value for the true boolean key (99)
```

Gives us back a map with the key value pairs we placed in set() brackets
KVP 1: Array key, object value
KVP 2: Boolean key, number value

![image-20210308010824082](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210308010824082.png) ![image-20210308010549291](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210308010549291.png)

EXAMPLE 3: Demonstrate the `check` and `delete` methods

```js
const simple = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);
console.log(simple.has("one")); //FALSE. It checks for keys, not values
console.log(simple.has(1));  //TRUE

simple.delete(1) // deletes one of the KVPs. 
// Don't try to log the above line directly, it just returns true

console.log(simple);	
```

![image-20210308032153097](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210308032153097.png)

EXAMPLE 4: Demonstrate the `clear` method

```js
const simple = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);
simple.clear();	// clear all the contents
console.log(simple);
```

![image-20210308032516941](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210308032516941.png)

#### Properly Retrieving Array/Object/Map Keys

If you want to properly access a map key that's defined as an object or array, you're going to have problems doing it like this:

```js
const oddKey= new Map([
  [["L9"], "Yamato"],
  ["youtube","RatIRL"]
]);
console.log(oddKey.get(["L9"])); // this should retrieve the value "Yamato"
```

but instead we get this:  ![image-20210308033457405](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210308033457405.png)

If you really want an array/object/map as a key, store and pass it using variables 

```js
const arrayL9= ['L9'];
const oddKey= new Map([
  [arrayL9, "Yamato"],
  ["youtube","RatIRL"]
]);
console.log(oddKey.get(arrayL9));
```

![image-20210308033715269](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210308033715269.png)

#### Using Maps on DOM Elements

This will likely be the focus of a future lesson. Here's a quick demonstration of how maps can directly affect the DOM:

Start from 12:40: [The Complete JavaScript Course 2021: From Zero to Expert! | Udemy](https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648593#overview)



### Maps: Conversions and Looping

#### Converting Objects => Maps

The structure of how maps are declared directly should look very familiar. 
A bunch of KVP sub-arrays... one parent array... looks exactly like the results from `Object.entries()` doesn't it?

This similarity is deliberate, and makes converting objects to maps easy as pie.

```js
const objName = {
  Lelouch: 'Geass',
  Light: 'Death Note',
  Vegeta: 'Super Saiyan Royal-Blue',
};

const conv2Map= new Map(Object.entries(objName))
console.log(conv2Map);
```

![image-20210308040137484](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210308040137484.png)

#### Converting Maps to Arrays

```js
// STARTER CODE
const oddKey = new Map([
  ['question', 'Which programming language is the most cringe?'],
  [1, 'JavaScript'],
  [2, 'Java'],
  [3, 'PHP'],
  ['correct', 3][(true, "You're right!")],
  [false, 'try again...'],
]);
```

When we turn the map into an array, it'll look near identical to the map when it's declared regularly like above

```js
const array1=[...quizMap]	//turns the map into an array
const array2=[...quizMap.keys()]	//creates an array of all KVP keys
const array3=[...quizMap.values()]  // creates array of all KVP values
console.log(array1); console.log(array2); console.log(array3);
```

![image-20210308093607102](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210308093607102.png)

#### Iterating Over Maps

```js
// STARTER CODE
const oddKey = new Map([
  ['question', 'Which programming language is the most cringe?'],
  [1, 'JavaScript'],
  [2, 'Java'],
  [3, 'PHP'],
  ['correct', 3][(true, "You're right!")],
  [false, 'try again...'],
]);
```

TLDR: 
`forEach and forOf` both work and give us direct access to keys and values of sub-arrays/objects in maps . You have to add in an extra step with forOf to make it work properly though 

forEach:

- You can actually directly dive into the KVP sub-array/object and gain access to its key AND value directly. 
- Just remember that the first argument forEach considers for maps is the value
  (unusual not to consider they key first, but whatever)
- We have 3 parameters in total: `value, key, entire map`

```js
quizMap.forEach(function addTotal(value, key){ 
  // value of the KVP is the first argument, key is the second! IMPORTANT
  console.log(value, key);
})
```

![image-20210308041437596](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210308041437596.png)

forOf

You can use forOf loops and access the elements/properties of maps directly.
For maps, the elements would be the nested KVP arrays/objects 

```js
for (let pairs of quizMap){
  console.log(pairs);
}
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210308040937454.png" alt="image-20210308040937454" style="zoom: 75%;" />

- Unlike forEach, forOf does not give us direct access to the keys and values of maps' nested arrays/objects in its vanilla form. 
- There is a quick fix we can use to add in this functionality though- destructuring directly in the arguments slot (fantastic use-case)

```js
for (let [key, value] of quizMap){
  console.log(value, key);
}
```

![image-20210308041950826](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210308041950826.png)

### Data Structure Use Cases

|         | when you need...                                             |
| ------- | ------------------------------------------------------------ |
| arrays  | to manip data organized in a simple list which may have duplicates<br />their values shouldn't need to be described |
| sets    | a list of unique entries<br />their values shouldn't need to be described |
|         |                                                              |
| objects | to describe values with key names<br />to include nested functions and have the "this" keyword available |
| maps    | to describe values with key names<br />complex key types (which can have some uses) |

- It's fairly common to mix data structures together to get the benefits of each. 
- Having multiple objects as array entries is standard when sorting information about different users

![image-20210308100344886](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210308100344886.png)

#### Other Data Structures

built into JS: ![image-20210308094950908](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210308094950908.png)  in other languages: ![image-20210308095038718](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210308095038718.png)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)

# Numbers, Math, Rounding

JS isn't the best language when it comes to making precise financial calculations, due to it using the base 2 format to represent numbers (binary)

It leads to strange results when calculating infinite decimal fractions
This is just a fault with the language we have to deal with

```js
console.log(0.1+0.2); 			//OUTPUT: 0.30000000000000004
console.log(0.1+0.2 === 0.3); 	//OUTPUT: false
```

Based on section 12 of your main Udemy JS course

### Generating Random Numbers

This'll generate a random decimal between 0 and 1. It can equal 0, but not one
You can also round down to the nearest integer if you want whole #s back

```js
Math.random() 	//random number between 0 and almost 1
Math.floor()	// rounds down to nearest integer
```

#### Generate Numbers within a Range

You'll need to use a special function for this one: 
`Math.floor(Math.random() * (max - min + 1)) + min`



```js
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
randomRange(-10,10) // ⦵ it CAN land on -10 and 10 
```

![image-20210217145548757](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210217145548757.png)

`Math.floor()` won't permanently change the variables its used on:

```js
let a = 8.451
Math.floor(a); // doesn't have an affect on the returned variable a
console.log(a); //OUTPUT:8.451
```

The reason why is because these math randomizers and rounders are functions
They must be invoked to be used properly. 
So, store them in a variable or use them in the return line

### parseInt & parseFloat

#### parseInt()

```
parseInt(string, **optional-radix**)
If not provided, the second arg will default to 10 (decimal numbering system)
```

SECONDARY PURPOSE (explained in next lesson)
You can supply a different value for arg2 if you want to switch between numbering systems

——————————————————————————————————————————————————————

MAIN PURPOSE:
This function will look over a string and convert it to a number if possible
It's like a more advanced version of the type coercion that would turn "23" to 23

- Use it to change numbers trapped in strings into actual numerical values
- It can even be accompanied by excess non-number characters 

Limitation: If the first character can't be converted to a integer, it returns NaN. 

```JS
Number.parseInt("23a");    //23
Number.parseInt("88gg4");  //88
Number.parseInt("8.5");    //8 parseInt does no rounding, it just keeps the int part
Number.parseInt("L9");     //NaN
```



#### parseFloat()

Does the same thing, but allows you to maintain any decimal values

```js
Number.parseFloat("9.14 meters")		//9.14
```



### Converting to Different Numbering Systems

#### Convert back to Decimal/Base 10

EXAMPLE: In binary, 17 is 10001

```js
let bin= '10001'
parseInt(bin, 2); //OUTPUT: 17
```

- The 2nd argument for parseInt will be the radix value (base of arg1)
- The base is 2 since '10001' is binary

#### Convert Decimal to Other System

EXAMPLE: Convert 15 into hexadecimal

```js
const number = 15

const result = number.toString(16); // arg is the desired system's base number
console.log(result) // f
```

#### Convert 1 Odd System to Another

1. Convert 1st strange system back to decimal
2. Convert decimal to the 2nd strange system

#### Bonus: Convert Binary to English

```js
function binaryAgent(str) {
    var binString = ''; 
    str.split(' ').map(function(bin) {
        binString += String.fromCharCode(parseInt(bin, 2));
    });
    console.log(binString) // helper
    return binString;
}
```



### Checking Nums with isNaN, isFinite, Number.isInteger

#### NaN

There are five different types of operations that return `NaN`:

- Number cannot be parsed (e.g. `parseInt("blabla")` or `Number(undefined)`)
- Math operation where the result is not a real number (e.g. `Math.sqrt(-1)` or `5/0`)
- Operand of an argument is `NaN` (e.g. `7 ** NaN`)
- Indeterminate form (e.g. `0 * Infinity`, or `undefined + undefined`)
- Any operation that involves a string and is not an addition (e.g. `"foo" / 3`)

#### isNaN()

There's usually no reason to use this method over isFinite()
false output means you're a number. Just remember that

- Normally, we compare values to each other using `== and ===`, but we cannot do so with NaN values. 

- NaN==NaN and NaN===NaN both equal false
  In fact, NaN is not considered equal to anything- even if it is a falsy value

So instead of equality operators, we use `isNaN()`

```js
isNaN()
//OUTPUT: returns false if you feed it a number
//OUTPUT: returns true if you feed it a non-number
```

EXAMPLES:

```js
// CLASSIFIED AS NaN 
isNaN("blah")	//true
isNaN(undefined) //true

// CLASSIFIED AS NUMBERS 
isNaN("22") 	//false 	b/c Number("22")=22
isNaN(true) 	//false 	b/c Number(true)=1
isNaN(false) 	//false 	b/c Number(false)=0
isNaN(null) 	//false 	b/c Number(null)=0
```

- You would expect true, false, and null to be considered NaN values right? 
- These unusual cases happen b/c of type coercion JS does for this method behind the scenes

MORE EXAMPLES:

```JS
// ALL CLASSIFIED AS NUMBERS
console.log(isNaN(new Date())); 					//empty date. false
console.log(isNaN(new Date('20 February, 2016'))); 	// filled in date. false
console.log(isNaN("")); 	// false
console.log(isNaN("  ")); 	//false
```

#### Number.isFinite()

This is your go-to method for checking if an input is a number or not
Just remember it does not accept numbers in string form

```js
// TRUE
Number.isFinite(6); 
Number.isFinite(4/8);
Number.isFinite(25.5); 
// FALSE
Number.isFinite('25');
Number.isFinite(true);
Number.isFinite(false);
Number.isFinite(null);
Number.isFinite('');
Number.isFinite(' ');
Number.isFinite(new Date());
Number.isFinite(new Date('20 February, 2016'));
Number.isFinite(undefined);
```

#### isFinite()

This method tests to see if the argument is a finite number- if so, it returns true
It returns false if the argument is (or will be coerced to) positive or negative Infinity, NaN, or undefined

```js
// CONSIDERED FINITE NUMBERS
isFinite('22'); //true
isFinite(true); //true
isFinite(false); //true
isFinite(null); //true
isFinite("") //true
isFinite("  ") //true
isFinite(new Date()); //true
isFinite(new Date('20 February, 2016')); //true

// CONSIDERED NaN, infinity, or undefined
isFinite('blah'); //false
isFinite(undefined) //false
```

#### Comparing isNaN to isFinite

TLDR: The 2 methods are damn near equal, so just use isFinite over isNaN

- isFinite has more conceptually-simple returns (no double negatives)
  true for numbers, false for non-numbers

|                             | isNaN considers it a... | isFinite considers it a... |
| --------------------------- | ----------------------- | -------------------------- |
| `'blah'`                    | NaN                     | NaN                        |
| `undefined`                 | NaN                     | NaN                        |
| `true`<br />`false`         | number                  | number                     |
| `null`                      | number                  | number                     |
| empty string                | number                  | number                     |
| empty date<br />filled date | number                  | number                     |
|                             |                         |                            |

#### Number.isInteger()

This simple method checks to see if the numbers you feed it count as integers or not
It returns a Boolean value

```js
Number.isInteger(9) 	//true
Number.isInteger(9.0) 	//true
Number.isInteger(0) 	// true

Number.isInteger(9.06) 	//false
```



### Math Operations and Rounding

#### Roots and Exponents

```js
// Square Root:
Math.sqrt(25) 	// (5)
25**(1/2) 		// (5)

// Other Roots:
8**(1/3) 		// cubic root of 8 equals (2)

// Exponents
5 ** 2 			// 5^2 equals (25)
```



#### Finding Max and Min Value

```js
// Find Maximum:
Math.max(5,18,23,9) 		// (OUTPUT: 23)
Math.max(5,18,"23",9) 		// does type coercion automatically (OUTPUT: 23)
Math.max(5,"18a","23",9; 	// does not parse automatically (OUTPUT: NaN)
         
// Find Minimum
Math.min(5,18,23,9)			// (OUTPUT: 5)
```



#### Rounding to Integers 

|                | behavior                                                     |      |
| -------------- | ------------------------------------------------------------ | ---- |
| `Math.ceil()`  | always rounds upward to highest/closest integer              |      |
| `Math.floor()` | always rounds downward to the lowest/closest integer         |      |
|                |                                                              |      |
| `Math.trunc()` | slices off the decimal part of a number<br />without considering rounding up or down |      |
| `Math.round()` | Rounds up or down to the nearest integer                     |      |

TESTS:

```js
Math.round(5.5) 	//6 (rounding starts at .5, as usual)
Math.round(5.49) 	//5

Math.trunc(8.99) 	//8
Math.floor(8.99) 	//8
Math.ceil(8.01) 	//9
```



#### Rounding Decimals- Flawed Methods Ⓡ

Because of the strange way JS works with numbers behind the scenes, rounding upwards begins at .6 instead of .5 when it comes to rounding decimals

```js
// .toFixed() Rounding Method
+(2.755).toFixed(2)	//2.75 ... NOT 2.76 like we'd expect
+(2.756).toFixed(2)	//2.76
			
// rounding with parsing
+Number.parseFloat("5.555cm").toFixed(2) 	// 5.55 
+Number.parseFloat("5.556cm").toFixed(2) 	// 5.56 (rounding up starts at 6)
```

- The plus signs before all the expressions so that the outputs are numbers, not strings- the default output of .toFixed()

- They can be replaced with Number() if you like:

```js
+		Number.parseFloat("5.555cm").toFixed(2)
Number( Number.parseFloat("5.555cm").toFixed(2) )
// same thing!
```




#### Rounding Decimals More Accurately

```js
function roundNumber(initNum,places){
  Number.prototype.round = function(places) {
    return +(Math.round(this + "e+" + places)  + "e-" + places);
  }
  return initNum.round(places) // 9.56
}

roundNumber(9.555,2)
```

DOWNSIDES:

- If the input number is already in exponential form? You will get NaN, apparently
- It's not inbuilt, so you'll have to copy paste it in each one of your documents

[javascript - How to round to at most 2 decimal places, if necessary? - Stack Overflow](https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary)



#### Other

```js
Math.PI 		// 3.14...
Math.abs(-2) 	// 2

// REMAINDER OPERATOR: Good for finding even/odd, or doing things every nth time
5 % 2			// 1
```

List of remaining `Math.` operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs



### BigInt

BigInt is a special type of integer that got introduced to JS in 2020

- Since JS uses binary to deal with numbers instead of base 10, it has certain limitations- one of which being that it cannot store extremely high numbers
- The max number JS can safely store is `Number.MAX_SAFE_INTEGER= 9007199254740991`
  If you try to perform math beyond this point, your results will be incorrect

Oftentimes, we do deal with numbers of this magnitude- friend codes, identification numbers, 60 bit numbers...etc. For these situations, define your numbers with bigInt

```js
// Method 1: Preferred**
console.log(100000000000000000000000000000000000000000n); // add an "n" after the num

//Method 2: Constructor (NOT RECOMMENDED)
console.log(BigInt(100000000000000000000000000000000000000000));
```

![image-20210407180305623](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210407180305623.png)

As you can see, JS can represent absurdly large numbers now. 

I would still advise against using the BigInt constructor method on standalone values- as you can see it still adjusts numbers in a strange and unwanted manner

#### Math Operations

Math with BigInts works the same as regular math for the most part
Just remember, you can't turn decimal values into BigInts, because they're not integers

LIMITATION: You can't mix BigInts with regular numbers
WORKAROUNDS: Turn small numbers into BigInts too using "n"
			 Convert variables holding regular numbers using BigInt()

```js
console.log(100000000000000000000000000000000000000000n * 2n);

//Workaround 1:
let mult= 2n
console.log(100000000000000000000000000000000000000000n*mult);

//Workaround 1:
let multip= 2n
console.log(100000000000000000000000000000000000000000n * BigInt(multip));

   //OUTPUT:200000000000000000000000000000000000000000n for all
```

DIVISION

Dividing BigInts works like elementary school division with remainders-with the remainders themselves removed

```js
console.log(11n/5n); //OUTPUT:2n
console.log(9n/5n);  //OUTPUT:1n
```

STRING CONCATENATION

Haven't noticed anything different about this yet

```js
console.log(100000000000000000000000000000000000000000n*4n +" and L9 for life yo");
//OUTPUT: 400000000000000000000000000000000000000000 and L9 for life yo
```

`MATH.METHODS`: 

These methods do not work on BigInts

```js
Math.max(5n,18n,23n,9n) //OUTPUT:error
```

These operators work if you surround the BigInts with `Number()`, but that approach doesn't make any sense. 

- The numbers would be calculated incorrectly if they were large enough to warrant using BigInt in the first place. So conversion is a no-go
- We only used small numbers in the last snippet to demonstrate an error 

#### BigInt Compared to Numbers

```js
console.log(20n>15); 	//OUTPUT: true (works like normal)

console.log(20n==20);	//OUTPUT: true (type coercion occurs with ==)
console.log(20n===20);	//OUTPUT: false (bigInt is its own type, number is another)
console.log(typeof 20n); //OUTPUT: BigInt
```



### Performing Complex Math with JS (2BC)

As you know by now, JS is not the most reliable language for performing exact calculations, due to its rounding errors which are the result of its reliance on binary. Floating point number calculations suck, to reiterate

Once you learn NPM, use one of these 2 libraries; "Numeric JS" or "Numbers.js"
https://smartbear.com/de/blog/2013/four-serious-math-libraries-for-javascript/

Or perhaps try a smaller math API like decimal.js or something

#### For Serious Math Requirements

Certain projects may require your calculations to be extremely precise. Consider using a language dedicated to mathematics like FORTRAN, then finding a way to "glue" your front end code together with that

# Dates, Times, Intl, Timers

Based on section 12 of your main Udemy JS course, except for the local storage part

### Creating Dates and Times

JS has 4 ways to create a date- they use the same constructor function with different sets of parameters

- All these dates you're creating are their own special kind of object. 
  Just like maps and sets, they have methods that are unique to them. 
- We can pull certain aspects of a date to use them individually

#### Method 1: Get the date right now

```js
const currentDate= new Date();

console.log(currentDate);
//OUTPUT: Wed Apr 07 2021 20:16:15 GMT-0400 (Eastern Daylight Time)
```

The date is taken right at the time the code is typed out- and updates continuously
This means that the date will appear differently after every minute/hour/second

#### Method 2: Specify a Date String

If you feed JS a date using a format it understands, it will automatically convert the date into this proper form you'll see in the output- even adding in more info

- There are a few ways you can tell JS the date. ``2 November 1994` works too 
- If JS does not understand, it will output "Invalid date" when the date is logged

```js
const randomDate = new Date('2 November 1994'); // Invalid date

const randomDate2 = new Date('November 2, 1994');
console.log(randomDate);
//OUTPUT: Wed Nov 02 1994 00:00:00 GMT-0500 (Eastern Standard Time)
```

#### Method 3: Specify Date Numbers

The new date constructor accepts 5 arguments- all of which will be numbers

```js
new Date(year,month,day,hour,minute,second) 
new Date(year,month-1,day,hour,minute,second) // w/ zero-based month taken into account
```

- There's one quirk with this method you should keep in mind- the month is zero based
  So December would require a month input of 11, not 12 (weird, I know)
- Not all parameters are strictly required 

EXAMPLE: Log the 4th of July 1975, at 9AM

```js
const patriotsDay= new Date(1975,6,4,9,0,0)
console.dir(patriotsDay);
//OUTPUT: Fri Jul 04 1975 09:00:00 GMT-0400 (Eastern Daylight Time)
```

INCORRECT DATA:

- If you enter incorrect data, like February 30th 2017, JS will skip ahead the number of days that don't exist. 
- In this case, that'd be 2 days, so it'd give you March 2nd 2017 instead

#### Method 4: Unix Timestamps

WHAT IS A UNIX TIME?
Unix time is a system for describing a point in time. 
It is the # of milliseconds that have elapsed since the Unix epoch
That would be...12AM on January 1st 1970

To express a Unix time, just feed date constructor a certain number of seconds after that date. For example, give me the Unix time 3 days post-epoch

```js
const threeDaysGone= new Date(3*24*60*60*1000)
console.log(threeDaysGone);
//OUTPUT: Sat Jan 03 1970 19:00:00 GMT-0500 (Eastern Standard Time)
```

CURRENT UNIX TIMESTAMP

```
new Date().getTime()
```



### Date Methods and Operations

#### Common Methods

|                  | returns                                                      |
| ---------------- | ------------------------------------------------------------ |
| `.getFullYear()` | year                                                         |
| `.getMonth()`    | 0-based month number<br />(December would be represented by 11, not 12) |
| `.getDate()`     | numbered day of the month<br />(Ex. Mar 17th,2009 would return 17) |
| `.getDay()`      | 0-based day of the week number <br />(Sunday is considered day 0, Saturday is day 6) |
| `.getHours()`    | Hour number                                                  |
| `.getMinutes()`  | Minute number                                                |
| `.getSeconds()`  | Seconds number                                               |
| `.toISOString()` | the international standard format for your date              |
| `.getTime()`     | the Unix timestamp for your date<br />tells how many milliseconds passed since Jan 1st 1970 |
| `Date.now()`     | the Unix timestamp for this exact moment                     |

DEMONSTRATION for Sept 9th,2001 at 11:52AM

```js
const doom= new Date(2001,8,9,11,0,0)
console.log(doom);
//OUTPUT: Sun Sep 09 2001 11:52:00 GMT-0400 (Eastern Daylight Time)

console.log(doom.getFullYear());  // 2001
console.log(doom.getMonth());     // 8 for September
console.log(doom.getDate());      // 9 for the 9th of September
console.log(doom.getDay(),"a");   // 0 for Sunday
console.log(doom.getHours());     // 11
console.log(doom.getMinutes());   // 52
console.log(doom.getSeconds());   // 0
console.log(doom.toISOString());  // 2001-09-09T15:52:00.000Z
console.log(doom.getTime());	  // 1000050720000
console.log(Date.now());          // 1617850609417 for now and never again
```

Remember that the month and day of the week are returned to you as zero-based numbers

Day Index Numbering:
Sun:0	Mon:1	Tues:2	Wed:3	Thurs:4	Fri:5	Sat:6

Month Index Numbering:
Jan:0	Feb:1	Mar:2	Apr:3	May:4	Jun:5 ...etc

#### Set Methods

We have set-versions of the methods that return an aspect of the date to us
Any method that involves the word "get", has a "set" equivalent
`.setMinutes`	`.setDay`	 ...etc

- They change an aspect of the original date we use it on, then make corrections to all other values 
- For example, if we change "March 13th,1990" to "March 13th, 1950", the day of the week will likely be altered

```js
const doom= new Date(1990,2,13)
console.log(doom) // Tue Mar 13 1990 00:00:00 GMT-0500 (Eastern Standard Time)
doom.setFullYear(1950)
console.log(doom) // Mon Mar 13 1950 00:00:00 GMT-0500 (Eastern Daylight Time)
```

#### Operations

When doing math with dates, JS converts your date into its Unix timestamp equivalent. Adding or subtracting milliseconds is simple, and JS can convert the result back into standard date formats

```js
console.log(+new Date()); //OUTPUT:1618001398768
// any mathematical operation turns a date into a Unix timestamp
```

EXAMPLE: Get the difference between 2 dates

```js
function calcDayDifference(date1,date2){
  let unixDiff= Math.abs(date1-date2) // diff in mili-secs
  return unixDiff/(1000*60*60*24); // convert ms to days
}
let d1= new Date('November 2, 1994');
let d2= new Date('November 14, 1994');
calcDayDifference(d1,d2) //OUTPUT:12
```

- If you need to take daylight savings or leap years into account, then that would require a library like moment.js
- If we were to use more precise dates (including the time of the day), then we would need to add some rounding to our function- the millisecond to day conversion would def give us a long decimal

#### ISO Format to Unix Timestamp

```js
const iso= '2021-12-06T18:31:11.256Z'
const date= new Date(iso) 	// "Mon Dec 06 2021 13:34:53 GMT-0500"
const unix= date.getTime() 	// 1638815854048
```



### Creating Dates with Internationalization Options 

You don't need to be familiar with how other nations display dates and times, there's an API that does this for you: `Intl`

It has plenty more capabilities aside from just reformatting dates. 
If interested, check out the methods on this page: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl

#### Strictly Numeric Dates

Display a date in the US format, then in the Great-Britain format
The HTML element attached to the date display is `labelDate` in this example

```js
const timeATM= new Date("4/10/2021");
labelDate.textContent= new Intl.DateTimeFormat('en-US').format(timeATM)	//U.S.A
labelDate.textContent= new Intl.DateTimeFormat('en-GB').format(timeATM) //GB
```

![image-20210410123651387](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210410123651387.png)	![image-20210410123734058](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210410123734058.png)

You can find language codes like "en-GB" from the list on this site: http://www.lingoes.net/en/translator/langcode.htm

#### Dates with Days and Time

If you want to specify times, it's advised that you create a configuration object to store the parts of the date you want to display

```js
const timeATM= new Date(); // take time right at this second
const options={
  hour: 'numeric',
  minute: 'numeric',
}
labelDate.textContent= new Intl.DateTimeFormat('en-US',options).format(timeATM)
 //OUTPUT: 12:53AM
```

The output is just the time- all we specified in the options object was the hour and minute. Let's experiment to see what would happen if we use different options objects:

```js
const options={ hour: "numeric", minute: "numeric", 
                year: "numeric", day: "numeric", month: "numeric" } 

const options={ hour: 'numeric', minute: 'numeric', year: "numeric",
  				day: "numeric", month: "long", weekday: "long" }

const optionsA={ hour: 'numeric', minute: 'numeric', year: "numeric",
  				 day: "numeric", month: "long", 
                 weekday: "short" // can also choose "narrow" for 1 letter }
```

![image-20210410125920587](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210410125920587.png)	![image-20210410130708558](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210410130708558.png) 	![image-20210410130927910](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210410130927910.png)

COMBINE OPTION OBJECTS WITH LANGUAGE CODES:

When combined with the language codes, we can format dates in any way we want, in any language we want. Use options A with Singapore Chinese:

```js
const timeATM= new Date(); // take time right at this second
const optionsA={
  hour: 'numeric',
  minute: 'numeric',
  year: "numeric",
  day: "numeric",
  month: "long",
  weekday: "short" // can also choose narrow for 1 letter 
}
labelDate.textContent= new Intl.DateTimeFormat('zh-SG',optionsA).format(timeATM)
```

![image-20210410131206686](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210410131206686.png)

#### Automating Language Code Selection

In many situations, we don't need to specify the language code ourselves. 
User browsers are configurated with language settings they chose themselves. 

Just use their own default language instead of a code
Replace the language code with `navigator.language`

```js
const timeATM= new Date(); // take time right at this second
const optionsA={
  hour: 'numeric',
  minute: 'numeric',
  year: "numeric",
  day: "numeric",
  month: "long",
  weekday: "short" // can also choose narrow for 1 letter 
}
labelDate.textContent= new Intl.DateTimeFormat(navigator.language,optionsA).format(timeATM)
// we replaced our language code with navigator.language
```

For more information, read MDN's page on `Intl`

TIP: If you're going to be feeding dates to other functions, stick to using "numeric" in your configuration object- you'll avoid bugs that way

### Internationalizing Numbers

Numbers can be internationalized just like dates. 

- In US-English, I'm sure you've noticed large numbers being separated by commas every 3 digits. These practices change depending where you are
- The `Intl.NumberFormat()` is our go-to method for helping us convert number formats
  It's another constructor property of the Internationalization API

EXAMPLE: Convert 18005000 (18 million five thousand) to US, German, and Syrian

```js
const num = 18005000;
let usa = new Intl.NumberFormat('en-US').format(num);
let german = new Intl.NumberFormat('de-DE').format(num);
let syrian = new Intl.NumberFormat('ar-SY').format(num);

console.log('USA:       ', usa);
console.log('Germany:   ', german);
console.log('Syrian:    ', syrian);
```

![image-20210410174141246](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210410174141246.png)

Turns out Germans separate digits with points and denote decimals with commas. 
Very strange, and it's the inverse of what I'm used to

#### Numbers with Units

When conveying a point, you might need to express data with units. 

- For example, vehicle velocity is often expressed in miles per hour, force is expressed in Pascals
- These units may vary depending on region, so we must convert them as well using an options object for configuration

EXAMPLE 1: Log 50 euros to the console for USA, Germany, and Syria

```js
const num = 50;
let usa = new Intl.NumberFormat('en-US',options).format(num);
let german = new Intl.NumberFormat('de-DE',options).format(num);
let syrian = new Intl.NumberFormat('ar-SY',options).format(num);
const options={
  style: 'currency',
  currency: "EUR" // the euro can be referred to in any country worldwide
}
console.log('USA:       ', usa);
console.log('Germany:   ', german);
console.log('Syrian:    ', syrian);
```

![image-20210410180153274](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210410180153274.png)

EXAMPLE 2: Log 50 miles per hour to the console for USA, Germany, and Syria

```js
const num = 50;
const options={
  style: 'unit',
  unit: "mile-per-hour" // the euro can be referred to in any country worldwide
}
let usa = new Intl.NumberFormat('en-US',options).format(num);
let german = new Intl.NumberFormat('de-DE',options).format(num);
let syrian = new Intl.NumberFormat('ar-SY',options).format(num);

console.log('USA:       ', usa);
console.log('Germany:   ', german);
console.log('Syrian:    ', syrian);
```

![image-20210410180440545](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210410180440545.png)

HOW DO I REMEMBER THE PROPERTIES AND VALUES FOR THE OPTION OBJECT?

Just remember the style property has 3 possible values: unit, percent, currency

- All the other properties have several possible values. 
  Check out the examples here, or google how to represent certain things when its time 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat 

 

### Delayed Actions with setTimeout

This method is essentially just a delayed function call that runs after an amount of time you specify. 
If placed within an event handler, you can make things happen X amount of time after an event occurs

EXAMPLE 1: Log a message 3 seconds after the page loads 

```js
setTimeout(()=>console.log("3 seconds have passed"),3*1000) //delay is in milliseconds
console.log("ASYNCH powers activate!"); //goes first due to delay
```

![image-20210411000656979](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210411000656979.png)

We demonstrated the essence behind asynchronous JavaScript with this example

- JS notices our setTimeout() function, and begins to run it
  It waits 3 seconds before logging the message
- It does NOT wait until the setTimeout() action completes before parsing anything else
- JS logs the second line first, THEN the finishing of the delay causes it to log the message on line 1

#### Adding Parameters

We can't feed the setTimeout() method parameters like we do for typical functions. 
The method's not invoked manually- it just runs upon the page loading

EXAMPLE 2: Log a message 3 seconds after the page loads 
  	     AND involve parameters 

```js
setTimeout(
  (ing1, ing2) =>
    console.log(`Your pizza with ${ing1} and ${ing2} will arrive shortly`),
  	3000, 'pineapple','bacon'
);  //DELAYED OUTPUT: Your pizza with pineapple and bacon will arrive shortly
```

- We can supply arguments to our setTimeout() method after the delay in milliseconds 
- Alternatively, we can feed it an array of arguments with the spread operator 
  (shown in next example)

#### Cancelling Timers 

We can assign setTimeout() methods to variables and they wills till run normally. 
This step is necessary if we want to potentially cancel the method

EXAMPLE 3: Log a message 3 seconds after the page loads, with parameters
           Cancel the timer based on a conditional statement

```js
const ingredients = ['pineapple', 'bacon'];
let pizzaTimer= setTimeout(
  (ing1, ing2) =>
    console.log(`Your pizza with ${ing1} and ${ing2} will arrive shortly`),
    3 * 1000,...ingredients
);
if(ingredients.includes("pineapple")){
  clearTimeout(pizzaTimer) 
    // stop the delayed message if the array includes pineapple
}
//OUTPUT: Nothing
```

#### Reformatting Code with setTimeout()

- If you want to take existing code and make it run after a delay, just wrap a setTimeout() method around it. 
- The pre-existing code should all be part of the callback function

```js
//BEFORE
// ~~ any operations
console.log("final output");

//AFTER
setTimeout(()=>{
    // ~~ any operations
	console.log("final output");
})
```

### Repeating Actions with setInterval...s

setInterval() is a method that causes a function to repeat after every X milliseconds

- This keeps going until infinity, unless someone stops it with `clearInterval()`
- Much like setTimeout(), you can assign your setInterval() method to a variable if you choose to. It's only required when you want to stop the iterations with a condition

#### EXAMPLE: Build an Alarm Clock

Create a digital clock that logs the exact time to the console after every second
Once it reaches a certain time, stop the iterations (ALARM)

```js
let alarmClock= setInterval(() => {
  const now = new Date();
  const options = {
    year: 'numeric', day: 'numeric', month: 'long',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
  };
  let timeNow = new Intl.DateTimeFormat('en-US', options).format(now);
  // everything before here just creates a time based on the current moment------
  if (timeNow==="April 11, 2021, 1:33:00 AM") clearInterval(alarmClock); //ALARM
  return console.log(timeNow); 
}, 1000);
```

![image-20210411013341070](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210411013341070.png)

### Unreliability of setInterval

EXAMPLE: Unreliability of setInterval & setTimeout

- The iteration timings in JS are not exact or even very precise- this is due to JS being single threaded. 
- This means that when you use setInterval or setTimeout every 1000ms, JS will not use it exactly after 1000ms- it's off by a little bit each time. 
- This accrues a lot over longer durations, resulting in a very inaccurate timer

![image-20210416031010700](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210416031010700.png)

#### Accurate Countdown Timer (Replaces setInterval)

```js
const accurateTimer = (fn, time = 1000) => {
  let nextAt, timeout;
  nextAt = new Date().getTime() + time;

  const wrapper = () => {
    nextAt += time;
    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
    fn();
  };
  const cancel = () => clearTimeout(timeout);
  timeout = setTimeout(wrapper, nextAt - new Date().getTime());
  return { cancel };
};

let letter=0
let timer = accurateTimer(() => console.log(letter++), 1000);
```



```js
timer.cancel();
```



### Implementing a Countdown Timer

Countdown timers are used everywhere, and are great for logging people out after being inactive for a certain amount of time

#### How to Code a Timer

1. Declare a variable containing the amount of time you want to start counting down from
2. Increment that variable's value downwards inside a setInterval() method
3. When the variable value reaches 0, stop the intervals (that's it)

```js
function seconds2Time(sec) { //~ Only use with positive times
  let minutes = String(Math.trunc(sec / 60000));
  let milliseconds = String((sec % 60000) / 1000);
  return `${minutes.padStart(2, 0)}:${milliseconds.padStart(2, 0)}`;
}

function startLogoutTimer() {
  let logoutTime = 6000; // give countdown time in millisecs (6sec in this test)
   
  let countdown = setInterval(() => {
    console.log(seconds2Time(logoutTime)); 
    if (logoutTime === 0) {
      clearInterval(countdown);		// stop de-increments at this point
      alert('Time over'); 			// "alarm"
    }
    logoutTime = logoutTime - 1000; //de-increment AFTER the if statement
  }, 1000); // perform action in this block after every 1 second
}
startLogoutTimer(); //INITIATE
```

![image-20210411170645916](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210411170645916.png)

This may look a bit confusing since we work with milliseconds

- All you need to do is change the `logoutTime` value at the top to initiate the countdown from a different number of milliseconds
- On personal projects, the logged values would instead be shown on the UI. 
  The amount of time to count down from would also likely come from an input field

Also, remember to de-increment your `logoutTime` value AFTER the nested if block. 
It keeps the alarm from going off 1 second early

#### Bugs with Multi-User Logins

- If you're on an app where you can log into another account while directly being logged into another, the timers freak out a bit.
- This is due to 2 timers running at the same time. To properly countdown for the new user account you log into, you must stop the first timer from running its original countdown 

Demonstrated at 19:00: [The Complete JavaScript Course 2021: From Zero to Expert! | Udemy]()

![image-20210611182320644](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210611182320644.png)



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

2) Remove a singular class 	 4) Remove multiple classes

3) Toggle a class on/off		6) Check if class/classes are active

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
2.  A representation of the DOM after a state change 
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
-  In cases where you have multiple potential separators in a row, you may be left with some unwanted array entries. Filter them out if needed

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



# === OBJECT ORIENTED CODING ===

# OOP Part 1: Objects with Prototypal Inheritance

> MAIN TOPICS
> Prototypal Inheritance Method 1: Constructor Functions
> Prototypal Inheritance Method 2: ES6 Classes
> Prototypal Inheritance Method 3: Object.create 

HOW I STRUCTURED THIS CHAPTER:

If a lesson is included after the lesson titled "METHOD 2: Class Syntax" for example, it means that lesson can be applied to that method

EXAMPLE: "Prototypes and Custom Methods (S1)" is directly related to "METHOD 1: Constructor Functions"

### Intro to Classical OOP

#### Why it Exists

![image-20210423155334403](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210423155334403.png)

The whole point of OOP is to reduce what people would refer to as "spaghetti code". This kind of code typically only makes sense to the person writing it

- This code includes a bunch of values gathered across multiple functions, even in the global scope
- The structure would be questionable, especially because function declarations can be used anywhere in the document
- Trying to upscale code made this way is nightmarish

Up until now, we've used objects to hold loose bits of data. Now, we'll need to create new ones programmatically, and be able to make objects interact with each other

#### Classes and Instances

To create new objects from our JS code, we must use something called classes 

###### What are classes?

- Imagine an architect develops a blueprint to accurately plan and describe a house. 
- The blueprint itself is just a set of rules- but one can use it to build many structures in the real world.
- Classes work this way as well, and they function the same in different languages- albeit with different syntax. Use them to create new objects based on the class rules

###### What are instances?

- An instance of a class is an object created by that same class
  The class itself is NOT an object
- Let's return to the blueprint analogy. 
  A house built from a blueprint would be the instance
- You will likely use a class to build several objects, which is why we call them instances in the first place- it implies they're 1 of many

![image-20210423171226815](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210423171226815.png)

The above diagram does not use actual JS syntax, it's purely conceptual

- We have a class that stores user data and methods inside an object it'll create
- When its used to create objects for Jonas, Mary, and Steven, their user information is different. But the overall structure of the object remains the same

#### Designing Classes with the 4 Fundamental OOP Principles

There is no singular correct way for people to design classes- we just have to abide by the 4 fundamental principles, which I will be describing next

> 1. Abstraction		2. Encapsulation		3. Inheritance		4. Polymorphism

###### Principle 1: ABSTRACTION

Ignore or hide details that do not matter. We want an OVERVIEW perspective of what we're implementing, instead of messing with smaller details

- This is why you create your own custom functions, or why methods like forEach were created- they abstract things like setting counters or end conditions

We don't even need to understand the low level operations we use. 

- For example, `addEventListener('click', (e) => {})` is an abstracted method- and we don't care how it works behind the scenes as long as it does what we expect it to do

![image-20210423172340797](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210423172340797.png)

###### Principle 2: ENCAPSULATION

Keep properties and methods private inside the class so they cannot be accessed from outside of it. Some methods can be exposed intentionally as a public interface (API)

- This is done to prevent external code from accidentally manipulating internal properties/state 
- It's conceptually similar to how we try to prevent permanent array/object changes via deep cloning

![image-20210423173724410](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210423173724410.png)

Encapsulation Example:

In the above diagram (which again, D.N include real JS syntax), we have private password and email. We also have a private checkSPAM method. 

- All of these are accessible from inside the class, but not outside. 
- If you could access it from outside the class, it'd be possible to change what the checkSPAM method does. 
- That would cause a lot of bugs, especially if that function was used in a large codebase

###### Principle 3: INHERITANCE

Make all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model IRL world relationships

Visual Explanation:

Imagine you're designing 2 classes for a company- classes A and B. 
Class B is just class A with some extra properties and methods. 

- Without inheritance, you'd have a lot of duplicate code. 
- With inheritance, you could make B a child of A, letting you add only the extra things you had in mind 

No inheritance:   ![image-20210423175213568](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210423175213568.png)

With inheritance: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210423175241047.png" alt="image-20210423175241047" style="zoom:80%;" />

###### Principle 4: POLYMORPHISM

A child class can overwrite a method it inherited from a parent class
The way in which it does this is easier said than done, but this is a simple intro

Visual Explanation:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210423180901616.png" alt="image-20210423180901616" style="zoom:80%;" />

The parent class includes a method that creates a login process. 

- The child class on the left is meant for admins- which need 2 factor authentication just to be safe. 
- Inside that child, we would redefine the login method, but differently. 
- With polymorphism, that new login() function would overwrite the parent's version that it inherited

### OOP in JavaScript

JavaScript OOP doesn't actually work exactly the way you saw in the last lecture. 

- That being said, it's important to understand the classical OOP model, because the concepts in JS are very similar
- Also, people often use the terms from classic OOP interchangeably when describing JS 

#### How OOP works in JS

All objects in JS are linked to a certain prototype object 
Reworded: Each object has a prototype with a set of rules

The prototype object contains methods (functions within objects), and properties that all objects linked to that prototype can use. This is PROTOTYPAL INHERITANCE

- For example, you can use reduce() on any kind of array object, but you can't use it on regular objects. 

![image-20210423222635187](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210423222635187.png)

The Difference: 

- In classic OOP, methods are copied from the class to the object
- With JS prototypes, an object's methods and properties are inherited from a prototype object

What "Delegation" Means:

Some explain inheritance as: "an object delegates its behavior to the prototype object"

- It sounds a bit backwards since the prototype dictates what objects of its type can and cannot do. 
- The diagram above even agrees with this notion, which is why the arrow points to the prototype, not away from it
- What they mean is that an object doesn't bother coming up with its own way to act. 
  It leaves that up to the prototype its connected to.

#### The 3 Methods to Create Prototypes

![image-20210424135344319](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210424135344319.png)

- ES6 classes being "syntactic sugar" simply means that they have the same constructor functions as method 1, but with nicer syntax that makes OOP easier and more intuitive
- Just to reiterate, ES6 classes DO NOT work like classical OOP classes



### METHOD 1: Constructor Functions

- Constructor functions are functions whose purpose is to create objects when invoked using the `new` keyword. 
- The `this` keyword is often used freely inside the function since they will be inside an object later on. 
- You CANNOT write arrow constructor functions- since "this" doesn't work inside them

#### Constructor ƒ() Example

Capitalize the first letter of your constructor function's name

```js
function Dog(arg1,arg2,arg3){
  // Instance properties below (found on all instances created with this blueprint)
  this.name= arg1;
  this.color=arg2;
  this.numLegs=arg3
}
const moralPup= new Dog("Bella","white",4) 
console.log(moralPup);
//OUTPUT:	Object { name: "Bella", color: "white", numLegs: 4 }
```

moralPup is now an INSTANCE of the Dog constructor ƒ()

EXPLANATION

- Notice how the Dog function incorporates the `this` keyword 3X
- You might assume it refers to the global object since it's inside a regular function
- You're technically correct, but we invoke the function alongside the `new` keyword
  It does 3 things behind the scenes

The new keyword does the following...
1) Creates an empty object
2) Sets `this` equal to that empty object- after we invoke the Dog constructor function
3) The empty object is linked to its prototype (WARP: XN18)
4) Constructor function automatically returns the new object

In real examples, the argument names will be identical or at least related to the key names they're used on. 

#### Standard Practices

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210424155748767.png" alt="image-20210424155748767" style="zoom:67%;" />

1. Capitalize the first letter of a constructor function's name 

2. Name your object keys and parameters the same thing 

- Done so you know exactly where an argument will go (matters in huge objects)
- For the sake of learning, I named the parameters in the initial example arg1, arg2, arg3 so you'd know what you're looking at

3. NEVER include functions or object methods inside a constructor function

- If you have multiple instances, you'll be copying the same ƒ() several times
- This is horrible for performance, and is why we bothered to learn event delegation
- To pass functions between constructors and their instances, we rely on prototypes and prototypal inheritance (will learn in a later lesson)

#### Adding Methods to Constructor Functions

EXAMPLE 2: All standard practices are in effect here
JS will automatically add (parentheses) around KVP's when prettier is active

```js
const Person = function (firstName, birthYear) {
  (this.firstName = firstName), (this.birthYear = birthYear);
  // NEVER do this
  // (this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // });
};
// Create new instances
const jonas = new Person('jonas', 1991);
const matilda = new Person('matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(jonas, matilda, jack);
```

We will learn how to add the function we refuse to include within the method in the "Prototypes" lesson



### Prototypes and Custom Methods v1 (R1)

DON'T FORGET THAT STATIC METHODS ARE AN ALTERNATIVE
They're good when you don't want every helper function you make to be inherited
You can still use them on  any instance a constructor function creates

#### How Prototypal Inheritance and Delegation Works

Each and every function in JavaScript automatically has a property called prototype. That includes constructor functions as well

This means that every object created by a certain constructor function will get access to all the methods/properties that we define on the constructors prototype property

TLDR: 
Give an instance's prototype property access to a certain function/method
After that, use that same function/method on any instances

#### Simple Example

Continue the example from the last lecture. We refused to add an object function to the constructor- it'd be bad for performance. Replace this inferior method using prototypes

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210424171556546.png" alt="image-20210424171556546" style="zoom: 80%;" />

REUSE A FUNCTION VIA PROTOTYPES:

```js
const Person = function (firstName, birthYear) {
  (this.firstName = firstName), (this.birthYear = birthYear);
};
// Assign function to Person.prototype
Person.prototype.calcAge = function () {
  return 2037 - this.birthYear;
};

const jonas = new Person('jonas', 1975); // Create new instance
console.log(jonas.calcAge())  //OUTPUT: 62
```

Now, any object created from the Person constructor has access to the `calcAge()` function- without it being declared more than once

#### Changing KVP's with Prototype Methods

We can alter values stored inside our instances by using our methods. 

- Take a look at this example where we build vehicle objects after we specify the "make" and starting "speed" in the constructor parameters
- We can increase and decrease the value of the "speed" key by using these methods after the instance is created

```js
const Vehicles = function (make, speed) {
  (this.make = make), (this.speed = speed);
};
Vehicles.prototype.accelerate= function(){
  this.speed+=10
  console.log(`${this.make} is going at ${this.speed} km/hr`)
}
Vehicles.prototype.brake= function(){
  this.speed-=10
  console.log(`${this.make} is going at ${this.speed} km/hr`)
}
const car1= new Vehicles("BMW", 120)
const car2= new Vehicles("Mercedes", 95)

car1.accelerate() // should subtract 10 from the speed (120+10=130)
car2.brake()      // should add 10 to the speed (95-10=85)
```

![image-20210425103437408](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210425103437408.png)

Remember that this method is inherited, and not explicitly declared in the constructor function

```js
let az = car1.hasOwnProperty('accelerate'); //OUTPUT: false
```



#### Custom-Made JS Methods (aka. Instance Methods)

Prototypal inheritance is how people build their own custom functions that operate just like official JS methods do. Just assign functions to inbuilt data structures

When making a custom function for arrays, apply it to the `Array.prototype`
When making some for objects, apply it to the `Object.prototype`

EXAMPLE 1: Create an array method that doubles all values 

```js
Array.prototype.doubleEntries= function(){
  let newArr= this.map((el)=>{
    return el*2
  })
  return newArr
}

let testArr= [1,2,3,4]
let doubleUp= testArr.doubleEntries()
console.log(doubleUp)
```

This function can easily be refactored, and tested further in case we have some arrays with entries other than numbers- but you get my point

EXAMPLE 2: "Delete array entries" ƒ() someone made (removes need for splice)

```js
Array.prototype.remove = function(from, to) {
  let rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};
arrName.remove(0, 2); // EXAMPLE: remove 1st to 3rd entry 
```

###### DISCLAIMER

Adding methods to built-in object is usually frowned upon for 2 reasons

1. JS may add a feature with the same name in the future. If that happens, the browser will pick the official method ahead of yours, which will break your code
2. When working in large teams, other developers risk using the same method names as you
3. By default, other devs probably won't understand what type of arguments your methods need to be fed in order for them to work properly 

SOLN: 

- Try to use custom functions when you build projects alone or with a small team you can communicate with often

- Create a file that briefly explains how your functions should be used

- Add an insignia to the end of your function names, so that nobody would possibly match your method's name. Ex. `.deleteArrayEntry_CF` 

#### Custom JS methods on other Methods

You can use custom methods on all 3 major methods. Just apply them on the prototype of what would be the constructor function

![image-20210429135638827](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210429135638827.png)

#### Consider Reading your Theory Document

This lesson teaches you how to practically use the prototype object. It lets you share 1 function from a constructor blueprint with all its instances. 

- If you want an in-depth explanation on what a prototype actually is, or how the prototype chain works, go read the chapter on "Prototypal Inheritance". 
- It looks complex but is actually fairly simple when you have the appropriate diagrams 



### METHOD 2: Class Syntax

The whole point of class syntax was to cater to people who come from different coding backgrounds. Their version of OOP looks and functions differently

- This way of performing OOP is mostly the same as constructor syntax, just with changed syntax which appeals to certain people
- Its important to be familiar with all popular methods of implementing OOP, although personally I prefer class syntax over constructors (they have a faster way to apply prototypal inheritance)

#### Class Expressions VS Declarations

Much like regular functions, classes can be defined as expressions or declarations

```js
/*DECLARATION*/
class Persona {
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  }
}
const joker = new Persona('Ren', 16);
console.log(joker);

/*EXPRESSION*/
const Persona = class {
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  }
};
const joker = new Persona('Ren', 16);
console.log(joker);
```

Output's the same either way: `Object { firstName: "Ren", age: 16 }`

- Using the special nested function `constructor` is a must- it's what the "new" operator calls when we create a new instance

###### The Difference 

These 2 methods can be used interchangeably, and the benefits come down to personal preference- unlike regular declarations/expressions where one is usually better thanks to hoisting differences 

- The main thing that separates these 2 is the fact that expressions are bound to a variable. When you call that expression, you need to call the variable
- This is the case, even when you name your expression's class
  I haven't shown you how to name them yet. Look below

![image-20210425111132644](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210425111132644.png) ![image-20210425111239361](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210425111239361.png)

Try to log our class using the variable name (works) and the class name (doesn't work)

```js
console.log(Persona)  	//OUTPUT: the constructor class
console.log(arsene) 	//OUTPUT: error 
```

![image-20210425111517994](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210425111517994.png)

#### Adding Instance Methods to Classes

When using constructor functions, we had to directly assign our methods to the constructor function's prototype. With ES6 classes, that's no longer needed

- We can specify the methods/properties inside the class, as long as its outside of the constructor's block.
- Anything declared in that zone is auto-included in the instances' prototype object
  MUCH faster than the constructor method 
- It's not its own property, but it is inherited through the constructor's "prototype" (actually just the proto of linked objects, but whatever...close enough for this description)

EXAMPLE: Give the "Persona" blueprint a method for all its instances to inherit

- Everything inside the class but outside the constructor block will automatically be placed in the constructor's prototype object
- All instances created by Persona will inherit these, but it's not their own property

```js
class Persona {
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  }
  rageMultiplier() {
    return 1.2 * this.age;
  }
}
const joker = new Persona('Ren', 16);
//—————————————————————【 OUTPUT TESTING 】——————————————————————————
console.log(joker);
console.log(
  joker.hasOwnProperty('age'),              // true
  joker.hasOwnProperty('rageMultiplier')    // false
); 
```

![image-20210425133316161](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210425133316161.png)

#### Important Details

1. Classes are first-class citizens
   Means they can be fed to functions as arguments or be returned from them

2. There is no clear advantage to using declarations over expressions like the way it is for regular functions (hoisting difference). Both class expressions and declarations  must be declared before they're used
3. The body of every class is executed in "strict mode" regardless of if you enabled that earlier

### Setters/Getters Part 1: How to Use them

You can use setters and getters an any object in JS. Traditional properties are referred to as data properties, while these are called assessor properties

Remember, you do not need a getter for every setter. Have 1/2 or both, no one cares

GETTERS: 
They GET you a certain property value- the one you specified when creating it
The original object you start with is left untouched

- You can run some code on the data it fetches as well
- For example, your object may have an array. 
  A setter can be coded to fetch you the final array value multiplied by 10 

SETTERS: Ⓟ
Use it to change a specified property in your object programmatically, with a function
It must contain exactly 1 argument to work, and DOES permanently change your object

- Add a new property that doesn't exist in the object yet
- Fully change an existing property to something new
- Tweak an existing property like an array (add to the end for example)

BEFORE YOU DIVE INTO THE EXAMPLES:

I'm well aware you can set or mutate object values without using a setter. 
The advantages of using setters will be explored in the next lesson. 
In this one, we simply learn how to use them in overly simplistic scenarios

#### EXAMPLE 1:

```js
const account={
  owner: 'Jonas',
  movements: [200,530,120,300],
  
  get latest(){
    return this.movements.slice(-1)[0] // return last array value    
  },
  set latest(mov){
    this.movements.push(mov)
  },
  set replaceOwner(newName){
    this.owner = newName
  },
  set secondOwner(newName){
    this.owner2 = newName
  }
} 
```

Here's how to use the getters and setters you set up:

```js
//GET the value of the last movements array element
console.log(account.latest)  

//SET the value of the new latest array element (add 1 on to the end)
account.latest=800 
console.log(account.movements) 

//CHANGE the value of the owner
account.replaceOwner= "Jefferson"
console.log(account) 

//ADD a new owner to the account
account.newOwner= "Marcy"
console.log(account)
```

![image-20210426105610278](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210426105610278.png)

#### Rules about Naming

IN OBJECT LITERALS:

- Naming one getter the same thing as one setter is fine inside object literals 
  The browser knows the difference because setters require 1 argument

IN ES6 CLASSES:

- When using ES6 classes, the set ƒ() name and the property name cannot be the same
  You'll get an error that says "too much recursion"

- Instead, name your object property the same thing...with an underscore in front. 

That's typical convention- but now we can't fetch `Obj.fullName` anymore. We can only fetch `Obj._fullName`

This flaw can be negated and used to our advantage when validating data (next lesson), but avoid this if that's not your intent 

![image-20210426132810955](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210426132810955.png) ![image-20210426132843365](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210426132843365.png)

IN EITHER:

Do not match getter/setter names with regular object properties! 
Worst case: the getter,setter, or regular property gets ignored, leading to bugs
Best case: An error's thrown at you

![image-20210426111814444](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210426111814444.png) ![image-20210426112410945](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210426112410945.png)



#### Class Getters and Setters

Not much changes when using getters/setters on classes- except for the fact that you can't name them the same thing without causing errors/bugs

```js
class Person {
  constructor(firstName, birthYear, currentYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.currentYear = currentYear;
  }
  get age() { return this.currentYear - this.birthYear }
  set personHeight(test){ this.height= test }
}
const felon = new Person('Rhodes', 1940, 2021);

const felon = new Person('Rhodes', 1940, 2021);
console.log(felon) 				// Show original object
console.log(felon.age) 			// GET (once calcd, this is stored in the prototype)

felon.personHeight= "5 ft 9"; 	// SET new property
console.log(felon) 				// Show mutated object
```

![image-20210426122115391](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210426122115391.png)

#### Tough EX. Use set to convert Fahrenheit to Celsius

This challenge from FCC is a great example that requires you to know exactly how getters/setters work. See "Getters/Setters for Conversion" in your challenges doc



### Getters/Setters Part 2: Advantages & Data Checks

#### The Problem they Solve

Getters and setters are special object methods with help us access things in our objects easier. There are many instances where we'd need this. Exhibit A...

```js
const person={ firstName: "Anthony", lastName:"Jone"}
console.log(`${person.firstName} ${person.lastName}`);
```

- If we want to access this person's full name multiple times, we'd have to use object literals several times over. 
- It'd make more sense to create a function that does this for us:

```js
const person={ 
  firstName: "Anthony", 
  lastName:"Jone",
  fullName(){ return `${person.firstName} ${person.lastName}` }
} 
console.log(person.fullName());
```

This approach works, but there are some issues with it:

1. We can't set `person.fullName="Anthony Jone"` and have it redefine the firstName, lastName, and fullName all at the same time

2. fullName is still treated as a method-   `person.fullName()`
   It'd be preferable to have it as a regular object property-   `person.fullName`

   getters => Access properties	  	 (fixes problem 2)
   setters => change/mutate properties	(fixes problem 1)

##### Fixing these Issues w/ Get & Set

We're going to solve our problems from subsection 1 using getters and setters.

```js
const person={ 
  firstName: "Anthony", 
  lastName:"Jone",
    
  get fullName(){return `${person.firstName} ${person.lastName}`},
    // can now access fullName as a property, not a method (PROB 2 SOLVED)
    
  set fullName(value){ 	//(PROB 1 SOLVED. Set function lets us define full/first/last)
    const parts= value.split(' ');  
    this.firstName= parts[0]; 
    this.lastName= parts[1];  
      
  }
}
console.log(person.fullName); // can now access fullName as a property (GET)
person.fullName= "Bruce Greene"; // change the full/first/last names all at once
console.log(person);	// see if the previous line worked
```

![image-20210223114000770](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210223114000770.png) 

![image-20210223114030070](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210223114030070.png) fullName's visible if you open the object

Don't worry if you don't understand the exact details of the set function.

We split our string into different parts using gaps and funnel them into an array
index 0: firstName		index 1: lastName

#### Data Validation & Setting Properties that Exist Already

- In the previous lesson, I mentioned that using setters to set a property that already exists will lead to callstack errors. 
- This is true, but we can negate this effect while checking for valid/invalid data at the same time

###### EXAMPLE: 

Make a class that creates student profiles, but only allow users to enter full names

——————————————————————————【 SOLUTION PHASE 1 】———————————————————————————————

First, test what happens when you have an equal property name and setter name
Do not include a getter just yet

```js
class Student {
  constructor(fullName, year) {
    this.fullName = fullName;
    this.year = year;
  }
  //^ Setting a Property that Exists Already
  set fullName(str) { this._fullName = str }
}
const girl = new Student('Katherine Pyra', 4);  //create initial object
console.log(girl);								// log object before setter
girl.fullName = 'Coraline Jones'; 			
console.log(girl);								// log object after setter
```

![image-20210426134952541](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210426134952541.png)

- Notice how the constructor doesn't create `fullName: Katherine Pyra` at all. 
  It creates `_fullName` right from the get-go
- Polymorphism sets fullName equal to the setter, so the original fullName:~ is ignored
  This happens because the browser encounters the setter earlier on the proto chain

`girl.fullname` would normally target the object property. Now it targets the setter
`_fullname: Katherine Pyra` disappears and is replaced with `_fullname: Coraline Jones`

——————————————————————————【 SOLUTION PHASE 2 】———————————————————————————————

Add in a getter to help remedy the situation. It will allow you to fetch `obj.fullName` even when there is only an `obj._fullName` property inside the object you created

```JS
class Student {
  constructor(fullName, year) {
    this.fullName = fullName;
    this.year = year;
  }
  //^ Setting a Property that Exists Already
  set fullName(str) {
    if(str.includes(' ')) this._fullName=str
    else alert (`${str} is not a full name!`)
  }
}
const girl = new Student('Katherine Pyra', 4);  	// creates initial object
console.log(girl)
console.log(girl.fullName) // fetches girl._fullName via the getter

const artist= new Student('Sher', 6) 				// gives an alert telling us off
console.log(artist)
```

![image-20210426140005815](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210426140005815.png) => ![image-20210426141255180](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210426141255180.png)

GIRL OBJECT:

- It creates an object with the property _fullName, but we can use `girl.fullName` because we set up our getter properly
- The name we fed our constructor was valid

ARTIST OBJECT:

- The name we fed the constructor did not meet standards, so the property was not added
  We got an alert telling us what's wrong instead
- The rest of the object was created however

### Static Helper Methods for Constructors (R4)

#### Definition

- They're methods who are properties of an object's constructor function
- They are not stored in the object's prototype, which means they're not inherited by any instances of that object's constructor
- This changes how they are used compared to methods that objects do inherit

EXAMPLE 1: `Array.from` VS `includes()`

Both of these are array methods, but only includes() can actually be used on an array
Array.from needs to be applied to the array constructor

```html
<p> P-tag 1 </p>
<p> P-tag 2 </p>
<script>
	let a= test.includes(1)  //true
	let b= Array.from(pTags, (el)=>el.textContent) // works. Gives an array
	let c= pTags.from((el)=>el.textContent) // SYNTAX ERROR
</script>
```

Array.from works as if its a custom function, even though its official
We never paid much attention to the syntax until now, but there is a reason for it

EXAMPLE 2: `Number.parseFloat(12)`

parseFloat is a property of the Number object, but is not inherited by any numbers

```js
let x= Number.parseFloat('14a2') 	// works. Gives 14
let y= '14a2'.parseFloat() 			// SYNTAX ERROR
```

#### METHOD 1 and 2 with Static Methods

Oftentimes, people use these as helpers that are strictly related to a constructor
All you have to do is define the property on your constructor directly

METHOD 1: Constructor Functions

```js
const Quadrilateral= function(width, height){
  this.width = width;
  this.height = height;
}
Quadrilateral.check= function(obj){
  if(obj.width===obj.height) return "You created a square or rhombus"
  else return "Your shape's sides are not all equal"
}
//————————————————【 TEST SECTION IS THE SAME AS METHOD 2】—————————————————————
```

As you can see in both cases, we use these static methods on the constructor function "Quadrilateral"

METHOD 2: ES6 Classes

```js
class Quadrilateral {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  static check(obj){
    if(obj.width===obj.height) return "You created a square or rhombus"
    else return "Your shape's sides are not all equal"
  }
}
```

Now, test the static methods to see if they work. 
Add the snippet below after either one of the previous ones

```js
//————————————————【 TEST SECTION】—————————————————————
const shape1= new Quadrilateral(5,5)
const shape2= new Quadrilateral(8,11)

let shapeType1= Quadrilateral.check(shape1)
let shapeType2= Quadrilateral.check(shape2)
console.log(shapeType1) // "You created a square or rhombus"
console.log(shapeType2) // "Your shape's sides are not all equal"
```



#### Compared to Custom Prototype Methods

Both forms of helper functions can be used to do the same things, so use whichever

- The static functions can still be used on any instances created by "Quadrilateral", there's just no inheritance involved
- It's not really a problem since we use `Quadrilateral.check()` to use the function

```js
class Quadrilateral {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  // STATIC METHOD
  static check(obj){
    if(obj.width===obj.height) return "You created a square or rhombus"
    else return "Your shape's sides are not all equal"
  }
}
// CUSTOM METHOD
Quadrilateral.prototype.check2= function(){
  if(this.width===this.height) return "You created a square or rhombus"
  else return "Your shape's sides are not all equal"
}

const shape1= new Quadrilateral(5,5)
const shape2= new Quadrilateral(8,11)
```

Test them both out to get the same result

```js
// Test the static methods
let shapeType1= Quadrilateral.check(shape1); console.log(shapeType1) 
let shapeType2= Quadrilateral.check(shape2); console.log(shapeType2)
// Test the custom methods
console.log(shape1.check2()) 
console.log(shape2.check2()) 
```

![image-20210429135748672](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210429135748672.png)

### METHOD 3: Object.create

This final method creates objects in a completely different way than the other two. 

- There is still prototypal inheritance involved, but we don't use any constructor functions, "new" keywords, or prototype properties
- Instead, we use Object.create to manually set the prototype of an object to any other object we want (we usually end up building it from scratch)

#### Demonstration

EXAMPLE 1: Create empty object "Larry" and assign its prototype to an object literal

```js
const s4_Proto= {
  calcAge(){
    console.log(2021-this.birthYear)
  }
}
const larryLurr= Object.create(s4_Proto)
console.log(larryLurr) 
```

![image-20210426172627848](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210426172627848.png)

At this point, we can add properties using dot notation if we want. But we want a more programmatic way to achieve this

EXAMPLE 2: 
Add in some properties to the object you make with Method 3 (directly on the object)

```js
const s4_Proto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const foxMain = Object.create(s4_Proto);
foxMain.init('Larry', 1990);
console.log(foxMain); //OUTPUT:
```

![image-20210426205811674](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210426205811674.png)

- The `init()` function can be named anything
- Just like method 2, the instance has `s4_Proto`'s properties as its own, but the functions are just inherited through prototypes

#### The Scope Chain with Object.create

It works the exact same way it normally does. 

- The only difference is that with method 3, you manually set the prototype for an instance you `Object.create()` into existence. 
- With other methods, instance prototypes are set the be equal to the constructor function's "prototype" (POLO, actually)

![image-20210426201229930](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210426201229930.png)



### instanceof Operator

This operator lets you identify whether an object was created using a certain constructor or not by returning a Boolean 

- Remember, it doesn't work properly on objects constructed using method 0 (a regular function that happens to output an object) - it will return false 
- It only works on constructor functions, class syntax, and `Object.create`
- Returns an error if the object name or function name you give it is undefined

#### Testing the Operator

 ————————————————————————【 with Method 0 】—————————————————————————————

Method 0 (which I'm introducing here) simply involves returning an object from a function that is now a constructor. 

- There's no "new" operator, and the instanceof operator will always return "false" when an object is created with this
- NEVER use this method for OOP- it's just a proof of concept

```js
function DogMaker(arg1, arg2, arg3) {
  return {
    name: arg1,
    color: arg2,
    numLegs: arg3,
  };
}
const murillPup = new DogMaker('Tobias', 'caramel', 4);
console.log(murillPup instanceof DogMaker);		//OUTPUT: FALSE 
```

The instanceof operator returns false even if that's where the object originated from

————————————————————————【 with Method 1 】—————————————————————————————

```js
class DogSynthesizer {
  constructor(arg1, arg2, arg3) {
    this.name = arg1;
    this.color = arg2;
    this.numLegs = arg3;
  }
}
const streliPup= new DogSynthesizer("Zippo","gray",4)
console.log(streliPup instanceof DogSynthesizer); 	//OUTPUT: TRUE
```

### Defining Properties on Prototypes 1

Throughout most of this chapter, we've discussed ways on how to define...

1. Methods on prototypes (good for performance)
2. Methods directly on instance objects (taught to avoid this at all costs)
3. Properties on instance objects directly

We've never discussed how to define properties on prototypes- but its fairly easy

#### Demonstrations

On Constructor Functions:

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs=2 // defined this property on the constructor proto

let beagle = new Dog("Snoopy");
console.log(beagle.numLegs)  //OUTPUT: 2
```

![image-20210429152503012](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210429152503012.png)

On ES6 Classes:

```js
class Persona {
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  }
}
Persona.prototype.game= "P5" // defined this property on the constructor class proto
const joker = new Persona('Ren', 16);
console.log(joker.game) //OUTPUT:"P5"
```

![image-20210429152404793](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210429152404793.png)

On Object.create:

```js
const s4_Proto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
s4_Proto.pine= "tree" // defining a property on the prototype obj we made
const foxMain = Object.create(s4_Proto);
foxMain.init('Larry', 1990);
console.log(foxMain.pine)
console.log(foxMain)
```

![image-20210429152303696](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210429152303696.png)

#### Faster Way to Add Prototype Properties

The way I just showed you can get tedious when you have multiple properties you want to add to the prototype- especially when using method 1

- A faster way to assign properties to constructor functions is to just redefine the prototype to new object literal
- Just make sure to define the `constructor` property inside the prototype object itself. 
- If you don't, that property will be erased when you redefine the prototype object
  The `.constructor` property will give false results if you try to use it

Before:

```js
function Bird(name,potential) {
  this.name = name;  //own property
  this.potential=potential
}
Bird.prototype.numLegs = 2; // prototype property
Bird.prototype.flyDirection = "Eat"; // prototype property
Bird.prototype.aviationSpeed= function(){
  return (90*this.potential)+" mph"
}
```

After redefining the prototype:

```js
function Bird(name,potential) {
  this.name = name;  //own property
  this.potential=potential
}
Bird.prototype={
  constructor: Bird, //! DO NOT FORGET THIS !!!!!!!!!!!!!!!!!!!!
  numLegs: 2,
  flyDirection: "Eat",
  aviationSpeed(){
    return 90*this.potential
  }
}
```

#### Iterating Over Prototype Properties

You can iterate over properties/methods that are part of an instance's prototype as well as those defined on the instance directly

```js
function Bird(name,lastname) {
  this.name = name;  //own property
  this.lastname= lastname
}
Bird.prototype.numLegs = 2; // prototype property
Bird.prototype.calcU= function(){
  return 25*4
}
let duck = new Bird("Daffy","Duck");
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) ownProps.push(property);
  else prototypeProps.push(property);
}
console.log(ownProps) // contains key names of all props/methods directly on obj
console.log(prototypeProps) // contains key names of all prototype properties/methods
```

![image-20210429231627730](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210429231627730.png)



### ES6 Classes Overview 1

This will likely be the most popular method you encounter, regardless of whether you're using prototypal or class inheritance. I'm assuming you know the basics of how to set up ES6 classes for both in this lesson.

I'll be showing you where to define...

1)  Properties directly on object instances (dark blue)
2)  Properties on constructor function prototypes (orange)
3)  Methods on constructor function prototypes (teal)

You can define methods directly on object instances, but you really shouldn't for the sake of performance. Not shown in the example

![image-20210429182753787](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210429182753787.png)

CODE: https://jsfiddle.net/JasonXtuyotech/mjzgswde/

### Imitating Class Inheritance with Protos

It's funny when you think about it, isn't it? Classes in JS are just mimicking classes in other OOP languages like Java or C++. But we can also mimic that mimicry with prototypal inheritance

In simple terms: 

You can make a child constructor function inherit properties/methods from a parent constructor function. You can then give the child its own unique properties/methods (the entire point of class inheritance)

- Hardcoded properties from the parent's constructor function block will also be defined directly on any instances created by the child constructor ƒ()
- Properties on the parent's prototype will be inherited by the child constructor and any instances created by it

#### Example

```js
//^ Create Parent Constructor ƒ()
function Animal(type, name) {
  this.type = type;
  this.name = name;
}
Animal.prototype.eat = function () {
  return 'nom nom nom';
};

//^ Create Child Constructor ƒ()
//^ Inherits all properties/methods from parent's prototype and constructor ƒ()
function Bird(type, name, speed) {
  Animal.call(this, type, name); // set "this" keyword
  this.speed = speed; // new child-exclusive properties
}
Animal.prototype.devour = function () {
  return 'CHOMP';
};
//^ Set the bird's prototype to the Animal's prototype
Bird.prototype = Object.create(Animal.prototype); // use M3 to make a prototype. New!
Bird.prototype.constructor = Bird; // set the constructor ƒ() straight
//—————————————————————【 TESTING 】——————————————————————————
const radarr = new Bird('Condor', 'Connie', 90);
console.log(radarr);
console.log(radarr.eat());
console.log(radarr.devour());
```

![image-20210429230237352](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210429230237352.png)

- `Animal.call(this, type, name)` is what allows us to bring over all the hardcoded properties from "Animal". That would be the "type" and "name" properties
- Without this line, we'd have to retype all of Animal's properties, which violates the DRY principle

The prototype chain should be set up correctly if I'm not mistaken

### Using Closures to Make Properties Private

If you have a constructor function where all properties are available publicly, that means anything from outside the constructor ƒ() can access properties and change them

Think about things like passwords and bank accounts being easily changeable by any part of your codebase. That could cause a lot of issues

- With class inheritance, the creators of JS are currently working on creating private versions of properties and methods (next chapter has a lesson on this, and I'm speaking as of April 2021)
- When it comes to prototypal inheritance, we use closures

#### How we use Closures 

Involves creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. 

- This way, the variable can only be accessed and changed by "privileged methods" also within the constructor function- all of which the developer specifies his/herself
- The only way anyone will be able to mess with your data from outside of the constructor is with methods you typed that allow them to do so (API)
- They could just change your constructor function, but that's direct intent to mess things up on their part. Any bugs or critical errors caused by that will be on them, not you

Method 1 EXAMPLE: Constructor Functions

This is likely doable with methods 2 and 3 as well, but I haven't tested it

```js
function Bird(name) {
  this.name=name;
  let hatchedEggs = 10;

  this.getHatchedEggCount = function () {
    return hatchedEggs;
  };
  this.addEgg = function () {
    hatchedEggs++ // add 1 to the variable
    return hatchedEggs
  };
}
let ducky = new Bird("Ace");
console.log(ducky.getHatchedEggCount()) // 10
console.log(ducky.addEgg()) // 11
console.log(ducky)
```

![image-20210430000646994](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210430000646994.png)

Trying to access variables defined in constructor functions doesn't work.
`console.log(ducky.hatchedEggs)` gives undefined 

#### Downsides

This way of implementing security comes at the cost of performance. If you use the constructor 100 times, you'll be re-assigning the same privileged methods 100 times

Closures don't work when you try to place the methods in the prototype instead. 
You'll get an error for trying to access variables that exist in the constructor while outside of it

```js
function Bird(name) {
  this.name = name;
  var hatchedEggs = 10;
}
Bird.prototype.addEgg = function () {
  hatchedEggs++; // add 1 to the variable
  return hatchedEggs;
};
let ducky = new Bird('Ace');
console.log(ducky.addEgg()); // 11
```

Closure working against us: ![image-20210430001523708](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210430001523708.png)

> WARP: BNLSING

# OOP Part 2: Inheritance between Classes

> MAIN TOPICS
> Class Inheritance Method 1: Constructor Functions
> Class Inheritance Method 2: ES6 Classes 
> Class Inheritance Method 3: Object.create

This chapter has a lot of long examples, but they're all fairly simple. We simply need to demonstrate inheritance by allowing several properties and methods to be transferred

PREVIOUS LESSONS:

- We learned about how prototypal inheritance works in JS using 3 core methods. 
- We allowed instances to inherit methods from prototypes
  Now we'll learn about traditional OOP-style inheritance, like the image below shows

THIS LESSON AND THE NEXT 2:

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210426230336838.png" alt="image-20210426230336838" style="zoom:67%;" />
>
> Student is a subset of Person
> The tip of the arrow points to where an object delegates its behavior from
> AKA. inherits properties and methods

The whole point of inheritance is to have specific/self-tailored methods for the "Student" object, while at the same time being able to use generic methods that any instance of "Person" can access

- We're going to learn how to do this while using all 3 major methods 
- The first lesson focusing on constructor functions is by far the least convenient and most informative- it teaches you how to manipulate prototype objects manually

### Inheritance b/t Classes: Constructor Functions

#### Procedure

Make "Student" a child class of "Person" that inherits all its methods and properties

STARTER CODE: A Person object constructor ƒ() with 1 method assigned to its prototype

```JS
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
```

——————————————————————【 STEP 1 】—————————————————————————

STEP 1: Import all parent properties, and add new specific ones for the child

```js
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // brings in all Person Properties
  this.course = course; // set new properties only for "Student"
};
```

- This step gives the illusion of inheritance, but we're really doing all this manually
- Created a new constructor function for "Student"
  It includes a new property not seen in the "Person" object (course)
- Brought in all "Person" properties with the call method- had to set "this" value to the "Student" object the student constructor is going to make soon

<< State of Prototype Chain >> 

("prototype" means prototype of linked objects...aka POLO)

We have the Student constructor function, its "prototype" property, and the mike object linked to it. The mike object being linked to the Student's "prototype" happens automatically when we use the "new" operator 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210427110524305.png" alt="image-20210427110524305" style="zoom: 67%;" />

————————————————————【 STEP 2 】——————————————————————————————

STEP 2: Link the child's prototype to the parent prototype via Object.create

```JS
Student.prototype = Object.create(Person.prototype); // links Student proto to Person's
Student.prototype.constructor= Student // LINE 2.2
```

- Object.create is the only way we can manually set prototypes
  A simple `Student.prototype=Person.prototype` would mess up our prototype chain
- Line 2.2 is needed or else the browser thinks Person constructed student's prototype
  Check by w/ `console.dir(Student.prototype.constructor)` and getting Person obj back
  This is an unwanted effect from Object.create with a simple fix
- Object.create builds an empty object. So right now `Student.prototype` is empty and we need to fill it with any child-exclusive methods we want it to have

<< State of Chain right before line 2.2 >>

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210427005521320.png" alt="image-20210427005521320" style="zoom:75%;" />

- After we add `Student.prototype.constructor= Student `, the chain is actually finished being built properly (go to the end for the final diagram)
- Step 3 just involves assigning a child-only method, which is self explanatory

<< Why we can't set `Student.prototype=Person.prototype` in step 2 >>

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210427005603357.png" alt="image-20210427005603357" style="zoom: 60%;" />

- This is the chain that would be created behind the scenes, which would lead to unexpected behavior when we try to inherit functions and properties

—————————————————————————【 STEP 3 】———————————————————————

STEP 3: Set any new child-only methods

```js
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
```

- Done by assigning the methods as properties of the child's prototype, so only that child can use it
- Different than calcAge() which can be used on any instance of "Person" and also "Student" by the time we're done (they are linked by prototypes now after all)

Now we can test out new instance objects and test out the methods (both child-only, and those inherited-by-all)

#### FINAL CODE:

Video explanation: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649085?start=720#questions

DEMO: https://codepen.io/NFuego24-7/pen/GRrLqGz

```js
// --【 Define your parent class w/ any methods you want stored in its prototype 】--
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

/*【 STEP 1: Import all parent properties, and add new specific ones for the child 】*/
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); //brings in all Person Properties
  this.course = course; // set new property only for "Student"
};

/*【 STEP 2: Link the child's prototype to the parent prototype via Object.Create 】*/
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor= Student 
// above line needed or else browser thinks Person constructed student's prototype

/*【 STEP 3: Set any new child-only methods to that child's prototype】*/
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

//—————————————————————【Testing zone】——————————————————————————
const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce(); // test out the child-only method
mike.calcAge(); //test the inherited method that comes fr/ the constructor prototype
```

#### Checking your Prototype Chain

How the Prototype Chain should Look at Completion:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210427010556947.png" alt="image-20210427010556947" style="zoom:67%;" />

Look back at this diagram when you conduct your tests

CONSTRUCTOR CHECK:

```JS
console.log(Student.prototype.constructor);
console.log(Person.prototype.constructor);
console.log(Object.prototype.constructor);
```

![image-20210427125003827](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210427125003827.png)

Student constructor ƒ() created the student prototype
Person constructor ƒ() created the Person prototype
Object constructor ƒ() created the Object prototype. Looks good to me!

INSTANCE CHECK:

```js
//# Check Instances
console.log(mike instanceof Student) //OUTPUT: true
console.log(mike instanceof Person)  //OUTPUT: true
console.log(mike instanceof Object)  //OUTPUT: true
```

We check to see if the mike object is an instance of the Student/Person/Object Constructor. If class inheritance was set up properly, we should get true for all 3

PROTOTYPE CHAIN SCANNING:

If everything was done as per the procedure, check if your proto chain's correct
We named the variables what the expression SHOULD give us
We can check inside the objects for constructors, directly defined properties...etc

```js
let student_Proto= mike.__proto__          
let person_Proto= mike.__proto__.__proto__  
let object_Proto= mike.__proto__.__proto__.__proto__  
// End of the chain
console.log(student_Proto)
console.log(person_Proto)
console.log(object_Proto)
```

![image-20210427122941484](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210427122941484.png)

1) We can tell student_proto is the `Student.prototype`

- The introduce() method was only defined directly on the child's prototype
  If it were inherited, you'd see it inside the grey `<prototype> Object` line
- The constructor: function Student() was directly caused by line 2.2 in step 2

2) We can tell person_Proto is the `Person.prototype`

- The calcAge() function was defined directly on the Person prototype during the starter code (this proto did not inherit the function, just look at the blue text)
- The constructor: function Person()

3) We can tell object_Proto is the `Object.prototype`

- The chain clearly ends here since `__proto__: null`
- The constructor: function Object()

You can look up the proto chain by using `console.dor(mike)`, but its a lot messier due to all the additional nesting. You still look for the same indicators and arrive at the same conclusion however



### Polymorphism

Polymorphism is just prototype chain priority when you have 2 methods/properties with the same name. 

- As you know, when a property or method doesn't exist on an object, the browser will look at the object's prototype. If not found there it'll look up to the prototype's prototype...etc. 
- Naturally, if searching for a method named "doubleUp", the browser will select the first one it encounters on the chain

EXAMPLE: 
Define 2 different methods- one on the parent prototype, and one on a child prototype. Give them the same name, but make them do different things

We're going to borrow the large example from the last lesson

//—————————————————————【 Code before changes 】—————————————————

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210427143835366.png" alt="image-20210427143835366" style="zoom: 80%;" />

//—————————————————————【 Code after changes 】——————————————————

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210427144032558.png" alt="image-20210427144032558" style="zoom:80%;" />

We changed Step 3's instance() method to a new calcAge() method. 
It's the same as the first one, but it calculates your Age from 3037 instead of 2037

TEST:

```JS
const mike = new Student('Mike', 2020, 'Computer Science');
mike.calcAge() //OUTPUT: 1017 	(3037-2020= 1017)
```

This proves that calcAge() from the child prototype is encountered first, thus used over the calcAge() defined in the parent's prototype

Code: https://codepen.io/NFuego24-7/pen/poRBNGB?editors=1010

### Inheritance b/t Classes: ES6 Classes

Class inheritance with ES6 classes is much easier than with constructors- mainly because all the manual prototype setting is done automatically

#### EXAMPLE 1: No new Properties or Methods

Make the StudentCL2 class a child of the PersonCL class
Want the child to inherit all methods/properties, but have no new ones of its own
Remember that getters and setters all count as methods too

STARTER CODE:

- PersonCL class has 2 properties, a calcAge() method, 1 getter, and 2 setters- all of which will be inherited by the child if we do this correctly
- This example doesn't need to involve such a long parent, but I'm demonstrating that everything will be inherited by this class' child

```js
// PersonCL class
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //————————————————【METHODS HERE DEFINED IN PROTOTYPE】—————————————————————
  // Deliberate. Should never define them in the constructor (performance nightmare)
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  get doubleAge() {
    return (2037 - this.birthYear) * 2;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
    // console.log(`New name is currently ${this.name}`)
  }
  get fullName() {
    return this._fullName;
  }
  //————————————————【METHODS HERE DEFINED IN PROTOTYPE】—————————————————————
}
```

CREATE YOUR CHILD CLASS:

Yes, that's all we have to do. It's easier than last time huh?

```JS
// StudentCL2 Class
class StudentCL2 extends PersonCL {} // create child class
const mom = new StudentCL2('Lois Griffin', 1975);
```

TEST IT OUT:

```JS
// TESTING
console.log(mom)
console.log(mom.doubleAge); // use the getter fr/ PersonCL
mom.calcAge(); // use the method fr/ Person CL

mom.fullName="Megan Griffin"
console.log(mom)
```

![image-20210427172345899](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210427172345899.png)

All the properties, methods, getters, and setters are properly inherited by the child.

#### Example 2: Yes to New Properties/Methods

If we want the child class to have new properties/methods of its own while still inheriting all those from its parent, we'll need to include a constructor function inside that new class as we build it

Use the same starter code from example 1
Give the new child class its own method that halves age
Give the new child a property called "major"

```js
// PersonCL class
class PersonCL {
  university = 'YorkU'; // hardcoded property available on all instances
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // All methods are defined on the prototype when placed outside of the constructor
  // Deliberate. Should never define them in the constructor (performance nightnare)
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  get doubleAge() {
    return (2037 - this.birthYear) * 2;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
    // console.log(`New name is currently ${this.name}`)
  }
  get fullName() {
    return this._fullName;
  }
}
//—————————————————————【STARTER CODE ABOVE】——————————————————————————
//Create your child class
class StudentCL3 extends PersonCL {
  constructor(fullName, birthYear, major) {
    super(fullName, birthYear); 	// sets the "this" keyword (CAN be empty)
    this.major = major; 			// add in any child-exclusive properties
  }
  // Add all new methods outside of the constructor ƒ()
  halfAge(){
    return (2037 - this.birthYear)/2
  }
}

const fuego= new StudentCL3("Leon Hart", 1990,"Radiology")
console.log(fuego.major) 		// use StudenCL3's property
console.log(fuego.halfAge()) 	// use StudenCL3's method
console.log(fuego.doubleAge) 	// use Person's getter
console.log(fuego)
```

![image-20210504122924913](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210504122924913.png)

- "extends" will link Student Cl's proto to PersonCl's proto automatically, which passes over all its properties/methods after you set "this" with `super()`
- "super()" is the constructor function of the parent class (PersonCl)

CHECKING THE PROTOTYPE CHAIN:

Perform checks the same way you did with constructor functions. 
If curious, check out "Inheritance b/t Classes: Constructor Functions

#### Hardcoded Properties on Instances

Hardcoded properties are just like the properties we leave in the constructor, except they don't require parameters to be set. We have a value for them in mind

From the looks of it, we can omplement them in one of 2 ways. Look at the property `university: YorkU `

```JS
// The new way (unofficial as of April 2021)
class PersonCL {
  university = 'YorkU';
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
}
// OR the traditional way
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
    this.university = 'YorkU';
  }
}
```

![image-20210504122924913](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210504122924913.png) ![image-20210504123755214](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210504123755214.png)

Eitherway, every instance object will have the university property directly defined on them. This is particularly useful when API's come up with values for you (with dates for example)



### Inheritance b/t Classes: Object.create

One important thing to understand is that Object.create does not involve faking classes like the other 2 main methods do. 

- All we're doing is linking objects together, and having certain objects act as prototypes for others
- Unfortunately, this method isn't as popular in the real world as the other 2

#### Challenge Description

GOAL: Build a scope chain that looks like the above image

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210427230510583.png" alt="image-20210427230510583" style="zoom: 50%;" />

<< `PersonProto` >>

- Should have 1 function, and 2 properties defined directly on it
- Everything below this object on the chain should inherit them as well

<< `StudentProto` >>

- Should be the child of its prototype `PersonProto`
- Should have 1 new property in addition to all of `PersonProto`'s

<< `jay` object >> 

- Should have `StudentProto` as its prototype
- Must inherit all properties and methods from `StudentProto` and `PersonProto`

We want an object named "jay" to have `StudentProto` as its prototype. 
`StudentProto` should be a child of `Personproto`

#### Procedure

STEP 1: Build your PersonProto object from scratch

```js
const PersonProto={
  calcAge(){
    console.log(2037-this.birthYear)
  },
  init(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear= birthYear;
  },
};
```

- Directly contains 2 properties: firstName and birthYear
- Has 1 method directly defined on it: calcAge()

STEP 2: Build your StudentProto Object

```js
const StudentProto= Object.create(PersonProto); 
StudentProto.init= function(firstName, birthYear, course){
  PersonProto.init.call(this, firstName, birthYear); // set "this", import properties
  this.course= course // child-only property
}
StudentProto.introduce= function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`)
}
```

- This step creates an empty StudentProto object with PersonProto as its prototype 
- Then, we fill it with all the properties PersonProto had, while having access to its methods via inheritance through the proto chain
- We define one new child-exclusive property, "course"
  Also define a child-exclusive method, "introduce"

STEP 3: The prototype chain is set. Create an instance and test it

```js
const jay= Object.create(StudentProto) //create empty object "jay"
jay.init("jay",2010, "Computer Science"); // Fill it with its properties

console.log(jay)
jay.introduce() // test the child-exclusive method
jay.calcAge() // test the method inherited from PersonProto
```

![image-20210428000936960](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210428000936960.png)

FINAL CODE:

```JS
// STEP 1: Build your PersonProto object from scratch
const PersonProto={
  calcAge(){
    console.log(2037-this.birthYear)
  },
  init(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear= birthYear;
  },
};
// STEP 2: Build your StudentProto Object
const StudentProto= Object.create(PersonProto); 
StudentProto.init= function(firstName, birthYear, course){
  PersonProto.init.call(this, firstName, birthYear); // set "this", import properties
  this.course= course // child-only property
}
StudentProto.introduce= function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`)
}
//STEP 3: Create an instance and test it
const jay= Object.create(StudentProto) //create empty object "jay"
jay.init("jay",2010, "Computer Science"); // Fill it with its properties

console.log(jay)
jay.introduce() // test the child-exclusive method
jay.calcAge()
```

#### Checking the Prototype Chain

- Since we're not actually mimicking having classes in JS, the way we check our prototype chain is different. 
- We can't look up constructors or instances of things anymore, because we have no constructor functions to begin with

This stuff would work on Methods 1-2 but not here!

```js
console.log(jay instanceof StudentProto) //OUTPUT: true
console.log(jay instanceof PersonProto)  //OUTPUT: true
console.log(jay instanceof Object) 

console.log(Student.prototype.constructor);
console.log(Person.prototype.constructor);
console.log(Object.prototype.constructor);
```

SOLUTION:

- We have to bite the bullet and do things the long way
  Use `console.dir()` on your instance object, then look up its prototype chain
- Look through object prototype after object prototype and see if the methods are defined directly in the right places 

```js
console.dir(jay)
```

![image-20210428003048671](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210428003048671.png)

- We see "jay" has a prototype that includes the init() and introduce() methods
  We did define both of those on StudentProto, which is jay's prototype
- That prototype's prototype is an object that has calcAge() defined on it
  That would be PersonProto

Everything checks out

### Prototypal Inheritance VS Class Inheritance 

#### What gets Inherited and How

Before we begin, understand 2 things

1. The 3 core methods (constructor functions, ES6 Classes, and Object.create) all have slightly different applications in prototypal inheritance VS class-inheritance
2. "Method 2: ES6 classes" in our OOP Part 1 Chapter is still considered to be a method to perform prototypal inheritance, despite the name.

PROTOTYPAL INHERITANCE METHODS:

- An object's methods and properties are inherited from a prototype object
  Our job is to assign these methods/properties to the parent's prototype
- JS was designed to work with prototypes, and you can accomplish the exact same things that classes can do

CLASS INHERITANCE METHODS:

- Methods/properties are inherited by child classes, from a parent class. 
  Those methods are then copied fr/ the child class to an instance object created by it
- JS was never designed to work with classes. Even now it just mimics the ability to use them - and that comes with certain issues, especially with binding

#### Comparison: Prototypal vs Class Inheritance

Achieve the same thing using Method 2 for both Prototypal Inheritance and Class Inheritance

###### PROTOTYPE- Challenge Description

1. Make a parent constructor function named "Persona" 
   Make it generate instances that inherit all its properties/methods

- Persona properties: "firstName" and "age"
  Persona methods: ageX2() 
  Remember, we define methods on constructor prototypes, never directly on them

2. Create your new "joker" object from the above constructor
   Store a new property "genre" and method ageX3() on its prototype

We might be using class syntax, but this is really just syntactic sugar over the traditional constructor function method to induce prototypal inheritance

SOLUTION:

```js
class Persona {
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  }
  // Stored on constructor function's prototype
  ageX2(){
    return this.age*2
  }
}
//& Create new instance
const joker = new Persona('Ren', 16); // created new object

//& Store a new method on joker's prototype
joker.__proto__.ageX3= function(){ 
  return this.age*3 
}
// Store a new property directly on the joker object
joker.genre= "RPG" 
```

Now lets test these methods and properties out:

```js
// TESTING
console.log(joker.ageX2()); // method from constructor proto
console.log(joker.ageX3()); // method from joker proto
console.log(joker.genre) // property defined directly on "joker"
console.log(joker)
```

![image-20210428140924111](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210428140924111.png)

- It might be possible that I messed up the chain here somewhere, but I've inherited everything I wanted
- The methods are also stored in prototypes instead of being directly defined in objects or constructor functions. Our job is done

CLASS- Challenge Description

1. Make a parent class named "Persona" 
   Make a child class named "Phantom"
   Ensure that "Phantom" inherits all methods/properties from its parent class
   Give it unique methods and properties of its own that match the previous challenge

- Persona properties: "firstName" and "age"
  Persona methods: ageX2() 
- Remember, we define methods on constructor prototypes, never directly on them

2. With classes, you add any child-exclusive properties/methods before you generate the instance

- Store a new property "genre" directly on the new instance object
- Store method ageX3() on the future instance's prototype

SOLUTION:

```JS
class Persona {
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  }
  ageX2(){
    return this.age*2
  }
}
// STEP 1: Import all parent properties and methods 
class Phantom extends Persona{
  constructor(firstName, age, genre){
    super (firstName, age) // set "this" keyword
    this.genre=genre // add child-exclusive properties here
  }
  // STEP 2: Add any child-exclusive methods outside the constructor
  ageX3(){
    return this.age*3
  };
}
```

Create your new object "joker" and test out your methods

```js
const joker = new Phantom('Ren', 16,"RPG"); // created new object
console.log(joker.ageX2()); // method from constructor proto
console.log(joker.ageX3()); // method from joker proto
console.log(joker.genre) // property from joker proto
console.log(joker)
```

![image-20210428140342491](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210428140342491.png)

#### Why not to Use Classes

DISCLAIMER: This method of inheritance can be very problematic or dangerous in the real world when designing software

1. **Binding issues**. As class constructor functions deal closely with `this` keyword, it can introduce potential binding issues, especially if you try to pass your class method as a callback to an external routine  (hello, React devs )
2. **Performance issues**. Because of classes’ implementation, they are notoriously difficult to optimize at runtime. While we enjoy performant machines at the moment,  the fact that [Moore’s law is fading away](https://en.wikipedia.org/wiki/Moore's_law) can change all that.
3. **Private variables**. One of the great advantages and the main reasons for classes in the first place, private variables, is just non-existent in JS.
4. **Strict hierarchies**. Classes introduce a straight top-to-bottom order and make changes  harder to implement, which is unacceptable in most JS applications.
5. **[Because the React team tells you not to](https://reactjs.org/docs/hooks-intro.html)**. While they did not explicitly deprecate the class-based components yet, they are likely to in the near future.

SOLUTION:

- All of these issues can be mitigated with JS objects and prototype delegation. 
  JS offers so much more that classes can ever do, yet most developers are blind to it. 
- If you want to truly master JS, you need to  embrace its philosophy and move away from dogmatic class-based thinking

### Additional Tricks & Tips for JS Classes

EXTRA CAPABILITIES OF CLASSES:

- You can add properties into constructor functions that don't involve any parameters
- You can code instantaneous actions for when the constructor builds a new object

BEST PRACTICES:
When mutating values inside objects, it's never a good idea to target them directly

- Typically, you'll want to create a method to facilitate what you're trying to do
  It'll reduce bugs in future projects, especially large scale ones
- If you create good functions that automate low level actions, there's less to think about when coding (benefits you with abstraction)

#### Demonstration

PHASE 1: Create a bank account object generator

- Fill your initially empty movements array with a deposit and a withdrawal
- Use a heavily discouraged tactic for mutating data- accessing it directly

```js
class Account{
  constructor(owner,currency,pin){
    this.owner= owner;
    this.currency=currency;
    this.pin=pin;
    this.movements=[]; // requires no argument
    this.locale= navigator.language; // requires no argument
    console.log(`This fires with every new account! Welcome, ${this.owner}`)
    // the above message is logged instantaneously after every new object is created
  }
}
const acc1= new Account('Jonas','EUR',1111)
console.log(acc1)

acc1.movements.push(2000) // deposit 2000
acc1.movements.push(-500) // withdraw 500
console.log(acc1.movements)
```

![image-20210428011248216](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210428011248216.png)

PHASE 2: Replace your direct mutations of the movements array

- Instead, create 2 methods that will make positive or negative additions to the array
- Abstract away the need to supply negative number arguments for withdrawals
  Aka. Get rid of manual manipulation
- Make this function part of the Account constructor's prototype

```js
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = []; // requires no argument
    this.locale = navigator.language; // requires no argument
    console.log(`This fires with every new account! Welcome, ${this.owner}`);
    // the above message is logged instantaneously after every new object is created
  }
  // Public interface of our objects
  deposit(amount) {
    this.movements.push(amount);
  }
  withdraw(amount) {
    this.movements.push(-amount);
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

acc1.deposit(2000)
acc1.withdraw(500)
console.log(acc1.movements);
```

same results: ![image-20210428011248216](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210428011248216.png)

These two methods we created "deposit" and "withdraw" make up the public interface for our objects (API)

#### Intro to Privacy and Data Encapsulation

Those methods we created that compose our API are fairly simple. 

- In the real world, you may have plenty of medium to large size methods that automate and abstract complex operations. 
- Just because they exist doesn't mean that some dev won't attempt to do things manually. When he/does, they introduce the possibility for lots of bugs 

Date encapsulation and privacy limit the access of methods and properties at certain locations in your code (not from outside the object for example)

### Encapsulation: Protected Properties and Methods

- Encapsulation involves keeping certain properties/methods private inside the class they're defined in so that nobody can access them outside of it
- The remaining methods are essentially just exposed as a public interface with the object (API)
- This is necessary for all professional projects that are to be taken seriously

#### Why Data Privacy & Encapsulation is Needed

1. To prevent code outside a class from accidentally manipulating data inside one

- If something should not be messed with manually, encapsulate it

2. Encapsulation lets us change internal methods with more confidence

- If we only expose a small API consisting of only a few public methods, we can change all other internal methods with more confidence
- At this point, we'd be sure that external code does not rely on the "private methods"
  Our code will not break when we do internal changes

#### Faking Encapsulation & Privacy in JS

As of April 2021, JS classes don't support real data privacy and encapsulation yet. 

- There is a proposal to add truly private class fields and methods to the language, but it's not completely ready- and it would take a while to become mainstream even if it was
- The best developers can do in native JS is to mimic encapsulation and privacy, in the same spirit that we mimic having classes

When we do this using the typical conventions that all devs agree to use, our data is data is "protected", but not truly private. This why people refer to things as "protected properties"

EXAMPLE: "Protect" an array of movements within 

The only difference between image 1 and 2 is the name of the movements array

![image-20210428155701958](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210428155701958.png) ![image-20210428155733167](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210428155733167.png)

```js
const acc1 = new Account('Jonas', 'EUR', 1111);
acc1._movements.push(900) // not a good idea to do this
```

Now, if a developer wants to access the movements array, they'd have to include an underscore when calling the property. 

- I would know that I'm not supposed to access that property because of the underscore
- If I access it anyway, someone's likely going to call me out if things go wrong as a result of directly targeting a "protected" property
- For the rest of your code to work properly, you'd have to adjust every direct call to `movements` and make it to `_movements` instead

#### Large Example

STARTER CODE:

```JS
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = []; 
    this.locale = navigator.language; 
    console.log(`This fires with every new account! Welcome, ${this.owner}`);
    // logged instantaneously after every new object is created
  }
  deposit(amount) {
    this.movements.push(amount);
  }
  withdraw(amount) {
    this.movements.push(-amount);
  }
  approveLoan() {
    return true;
  }
  requestLoan(amount) {
    if (this.approveLoan()) {
      this.deposit(amount);
      console.log('Loan approved');
    }
  }
}
```

To-protect:

- The "pin" and "movements" property
- The "approveLoan" method

To-abstract:

- Fetching the movements array
  We want to be able to grab it at a moment's notice, but through a method instead of accessing `objName._movements` directly

```js
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this._movements = []; // requires no argument
    this.locale = navigator.language; // requires no argument
    console.log(`This fires with every new account! Welcome, ${this.owner}`);
    // the above message is logged instantaneously after every new object is created
  }

  deposit(amount) {
    this._movements.push(amount);
  }
  withdraw(amount) {
    this._movements.push(-amount);
  }
  _approveLoan() {
    return true;
  }
  requestLoan(amount) {
    if (this._approveLoan()) {
      this.deposit(amount);
      console.log('Loan approved');
    }
  }
  getMovements(){
    return this._movements
  }
}
```

Let's test out generating objects and using all the public methods

```js
const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

acc1.deposit(2000);
acc1.withdraw(500);
console.log(acc1.getMovements());
```

![image-20210429113624738](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210429113624738.png)

deposit(), withdraw(), and getMovements() are 3 functions that are intentionally exposed publicly. They, and all other methods/properties without a leading "_" are part of the API

### Encapsulation: Truly Private Class Fields/Methods

Class fields are not part of the JS language yet as of late April, 2021, but likely will be at some point in the near future. Use google chrome when testing them out in their developmental state

Field: A property that will be on all instances (name comes from traditional OOP langs)

- With this new proposal, JS intends to move away from the idea that classes are just syntactic sugar over constructor functions. 
- Classes will soon be able to have abilities that constructor functions didn't let them have before

The proposal includes 8 new features, but we're going to focus on 4 in this lesson

1. Public fields	2. Private fields	3. Public methods	4. Private methods

#### Demonstration

STARTER CODE: 

```JS
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this._movements = []; // requires no argument
    this.locale = navigator.language; // requires no argument
    console.log(`This fires with every new account! Welcome, ${this.owner}`);
    // the above message is logged instantaneously after every new object is created
  }

  deposit(amount) {
    this._movements.push(amount);
  }
  withdraw(amount) {
    this._movements.push(-amount);
  }
  _approveLoan() {
    return true;
  }
  requestLoan(amount) {
    if (this._approveLoan()) {
      this.deposit(amount);
      console.log('Loan approved');
    }
  }
  getMovements() {
    return this._movements;
  }
}
```

Take your starter code and make the following changes to the methods and properties already there. Pay attention to the location and syntax of the code replacing the old 

————————————————【 Public fields: locale 】—————————————————————

- Public fields are located directly on the instance objects, not the prototype
- They're accessible via the "this" keyword, just like the constructor ƒ() properties

————————————————【 Private fields: _movements, _pin 】—————————————————————  

- These fields are defined directly on the instance objects, not the prototype
- Trying to access private fields results in an error

SYNTAX: Place a # in front of the property's original name. 

- In our case, we also removed the "_" in front of _movements because there's no longer a need to fake "protect" this property 
- If we try to access these fields directly, we get an error message

![image-20210429123802071](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210429123802071.png)

————————————————【 Public Methods 】—————————————————————

- The methods we placed beneath the constructor function in ES6 Classes have always been private (no new syntax or concepts to go over with this)

————————————————【 Private Methods: approveLoan() 】—————————————

DISCLAIMER: I'm showing you how private methods will work in the future. Right now, they're not supported by any browser. So just comment them all out when testing this on chrome

- Place these below all the public methods, and make a simple change to their name by adding a #
- Remove any fake protection "_"'s you may already have applied to their names too

![image-20210429124007008](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210429124007008.png)

#### Full Solution Code

Paste the JS into any generic HTML/CSS/JS environment. We don't use DOM manipulation
FINAL CODE: https://jsfiddle.net/JasonXtuyotech/185Lagq7/

![image-20210429124624101](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210429124624101.png)

Let's test out our code by generating an object:
(Don't forget to comment out private methods since they're unsupported as of Apr 2021)

```js
const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

acc1.deposit(2000);
acc1.withdraw(500);
console.log(acc1.getMovements()); // works b/c we access private field through the API
```

![image-20210429124838433](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210429124838433.png)

Now, bait some errors by trying to access private properties/methods
The error message may change eventually

```JS
console.log(acc1._movements.#movements)
console.log(acc1.#pin)
```

![image-20210429124951782](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210429124951782.png)

#### Remaining Features

Some/all of these are currently supported in chrome, but are apparently not that important. Return to this later if needed

5. Static Public Fields
6. Static Private Fields
7. Static Public Methods (we've learned these in the "Static Methods" lecture)
8. Static Private Methods



### Chaining Methods

Back in the array methods chapter, we learned that you can chain methods together. 
It works as long as the output of the first matches the required input of the second

This can be done with class methods as well, so long as you return the object itself inside the method you want to be chainable

#### Watch for This!

All we need to do to make a function chainable is to make it return the object its inside via `return this`. However, you can't just add this to the end of a function without considering the implications

- Most functions have conditions about when it can/cannot perform its intended action 
- Only add `return this` to the end of a block where the function has decided "all my conditions are met. I can go ahead and perform my action". 
- You don't want the function to return the object its in if no actions are performed due to incorrect conditions. You want it to throw you an error to let you know what you're trying to do is wrong

![image-20210429143353613](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210429143353613.png)

You would never put `return this` in the else block, or at the very end of this function. You'd create several bugs by doing that

#### Example

STARTER CODE: 

```JS
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this._movements = []; // requires no argument
  }
  deposit(amount) {
    this._movements.push(amount);
  }
  withdraw(amount) {
    this._movements.push(-amount);
  }
  _approveLoan() {
    return true;
  }
  requestLoan(amount) {
    if (this._approveLoan()) {
      this.deposit(amount);
      console.log('Loan approved');
    }
  }
  getMovements() {
    return this._movements;
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111); // INSTANCE
```

Let's say we want to do the following on one line...
Deposit 300, deposit 500, withdraw 35, request a loan for 25K, then withdraw 4000

```js
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000)
// Make this actually work by changing our starter code
```



SOLUTION:

Make the deposit(), withdraw(), and requestLoan() functions all return the object they're inside of. Just tack on `return this` to their functions at the end 

We have 3 incredibly minor changes denoted by //TACKED ON

```JS
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this._movements = []; // requires no argument
  }
  deposit(amount) {
    this._movements.push(amount);
    return this 								// TACKED ON
  }
  withdraw(amount) {
    this._movements.push(-amount);
    return this									// TACKED ON
  }
  _approveLoan() {
    return true;
  }
  requestLoan(amount) {
    if (this._approveLoan()) {
      this.deposit(amount);
      console.log('Loan approved');
      return this								// TACKED ON (conditions met here)
    }
    // return this				// AN EXAMPLE OF WHERE NOT TO PUT "return this"
  }
  getMovements() {
    return this._movements;
  }
}
//—————————————————————【 TESTING 】——————————————————————————
const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000)
console.log(acc1.getMovements());
```

![image-20210429132147832](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210429132147832.png)

### Define Properties on Prototypes 2

In the previous chapter, we had a similar lecture that taught us how to define properties on constructor function prototypes. 

- They would later be inherited by all instance objects those constructors generated. The whole point is to have properties that aren't defined on instances directly
- It works the same way with class inheritance methods

#### Method 1: Constructor Functions

```JS
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
Person.prototype.exampleProp= 99 // DEFINE PROPERTY ON CONSTRUCTOR PROTO HERE

/*【 STEP 1: Import all parent properties, and add new specific ones for the child 】*/
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); //brings in all Person Properties
  this.course = course; // set new property only for "Student"
};

/*【 STEP 2: Link the child's prototype to the parent prototype via Object.Create 】*/
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor= Student 
// above line needed or else browser thinks Person constructed student's prototype

/*【 STEP 3: Set any new child-only methods to that child's prototype】*/
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

//—————————————————————【Testing zone】——————————————————————————
const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike.exampleProp)
console.log(mike);
mike.introduce(); // test out the child-only method
mike.calcAge(); //test the inherited method that comes fr/ the constructor prototype
```

#### METHOD 2: ES6 Classes

```js
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //————————————————【METHODS HERE DEFINED IN PROTOTYPE】—————————————————————
  // Deliberate. Should never define them in the constructor (performance nightnare)
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  //————————————————【METHODS HERE DEFINED IN PROTOTYPE】—————————————————————
}
PersonCL.prototype.testProp= 99 // DEFINE PROPERTY ON PARENT CLASS PROTO

class StudentCL3 extends PersonCL {
  constructor(fullName, birthYear, major) {
    super(fullName, birthYear); 	// sets the "this" keyword 
    this.major = major; 			// add in any child-exclusive properties
  }
  // Add all new methods outside of the constructor ƒ()
  halfAge(){
    return (2037 - this.birthYear)/2
  }
}

const fuego= new StudentCL3("Leon Hart", 1990,"Radiology")
console.log(fuego.testProp) 		// 99
```

#### METHOD 3: Object.create

```js
// STEP 1: Build your PersonProto object from scratch
const PersonProto={
  calcAge(){
    console.log(2037-this.birthYear)
  },
  init(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear= birthYear;
  },
};
PersonProto.testProp=99 // DEFINE PROPERTY ON PROTOTYPE HERE

// STEP 2: Build your StudentProto Object
const StudentProto= Object.create(PersonProto); 
StudentProto.init= function(firstName, birthYear, course){
  PersonProto.init.call(this, firstName, birthYear); // set "this", import properties
  this.course= course // child-only property
}
StudentProto.introduce= function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`)
}
//STEP 3: Create an instance and test it
const jay= Object.create(StudentProto) //create empty object "jay"
jay.init("jay",2010, "Computer Science"); // Fill it with its properties

console.log(jay)
console.log(jay.testProp)  //OUTPUT: 99
```



### ES6 Classes Overview 2

FOR THE RECORD: Our theory document has a more detailed explanation on how this works

This will likely be the most popular method you encounter, regardless of whether you're using prototypal or class inheritance. I'm assuming you know the basics of how to set up ES6 classes for both in this lesson.

I'll be showing you where to define...

1)  Properties directly on object instances (dark blue)
2)  Properties on parent class prototypes (orange)
	  Properties on child class prototypes (orange)

3)  Methods on constructor function prototypes (teal)

You can define methods directly on object instances, but you really shouldn't for the sake of performance. Not shown in the example

#### Cheat-Sheet Imagery

The super keyword refers to **the parent class**. It is used to call the constructor of the parent class and to access the parent's properties and methods.

CODE: https://jsfiddle.net/JasonXtuyotech/mujxfb0d/

![image-20210429183502029](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210429183502029.png)

YOU CAN ALSO...
Add properties, event listener setups, and invoke methods on startup inside the constructor
Taken from Mapty Project (before we learn MVC Architecture)

![image-20210823175812129](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210823175812129.png)

DON'T FORGET:

1. Classes don't always require constructors
2. Child classes inherit parent class variables as well as methods

![image-20210706014408105](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210706014408105.png)

#### Redefining Inherited Methods & Variable Values

- You can change the values of hardcoded class variables, even if they start by inherting a value you don't like
- You can also redefine methods you inherited initially

![image-20210706014610159](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210706014610159.png)

This feeds into my next point : 
You can set variables equal to all kinds of things inside a class but outside the constructor:

![image-20210824233623207](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210824233623207.png)

### Using "this" and Rebinding it

The "this" keyword points to different things depending on where it's used

#### this" in Different Situations

| LOCATION                                                     | value of "this"                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| functions defined on global scope                            | undefined                                                    |
| functions defined in an object                               | the object they're inside                                    |
| internally defined event handlers (arrow_function)           | window object<br />Never use arrow handlers!!                |
| externally or internally defined <br />event handlers (function_declaration) | Equals `eventObj.target`<br />For click events, it's be what you clicked on |
| Inside a class                                               | The class "this" is used within.<br />Can be overridden      |
| geolocation API callback F's                                 | undefined (overrides the "inside class rule")                |
| inside a prototype method                                    | refers to what you'll be using it on                         |

#### Rebinding "this"

When using classes in JS or Class-based React, we sometimes need to change what the this keyword inside a function will be referencing- most commonly when dealing with event handlers

- We usually want "this" to point to the class your function or event handler resides in
  That way, we can access nested functions, regular class object properties...etc
- Set up event listeners in the constructor (their handlers should be defined outside of it)
  Bind those handlers to the class you're inside using `.bind(this)`

![image-20210823175812129](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210823175812129.png)

Let's evaluate!

```js
form.addEventListener('submit', this._newWorkout.bind(this));
```

- We're setting up an event listener onto `form`, an element we likely targeted with query selector
- `_newWorkout` is a method we defined outside of the constructor but offscreen, just like the `_getPosition` you can see at the bottom (must use `this.` to reference it)
- We bind the new workout method to the class we're residing in using `.bind(this)`
  While inside the constructor, this will reference the class

Now, we are free to use the this keyword inside our new workout method
It will reference the App class

# Advanced Object Methods and Operators

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is

### Prototype-Oriented Methods

#### isPrototypeOf

Verifies if an object checks if an object exists in another object's prototype chain.

```js
const Person = function (firstName, birthYear) {
  (this.firstName = firstName), (this.birthYear = birthYear);
};
const jonas = new Person('jonas', 1975); // Create new instance

let verify= Person.prototype.isPrototypeOf(jonas)
console.log(verify) //OUTPUT: true
```

![image-20210424221400564](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210424221400564.png)

#### getPrototypeOf()

Is the newer version of `ObjectName.__proto__`

- Both return the prototype property of the object parameter you feed this method
- Includes all the functions you assigned to the constructor's prototype, the constructor function itself, and more

```js
const Person = function (firstName, birthYear) {
  (this.firstName = firstName), (this.birthYear = birthYear);
};
Person.prototype.calcAge = function () {
  return 2037 - this.birthYear;
};
const jonas = new Person('jonas', 1975); // Create new instance

console.log(jonas.__proto__); 			   //Shows the prototype object of jonas
console.log(Object.getPrototypeOf(jonas))  //Shows the prototype object of jonas
```

![image-20210424214526991](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210424214526991.png)

#### __ proto __

The older version of getPrototypeOf(). Is not encouraged, but is very useful for when you want to go up the prototype chain quickly. 

- Chaining this method multiple times lets you get the prototype of a prototype
- There is a much more in-depth explanation of this example in the theory document
  Lesson titled "Prototypal Inheritance and the Prototype Chain"

```js
const Person = function (firstName, birthYear) {
  (this.firstName = firstName), (this.birthYear = birthYear);
};
const jonas = new Person('jonas', 1975); // Create new instance

// jonas object's prototype 
const box2= jonas.__proto__

//prototype of jonas object's prototype
const box1= jonas.__proto__.__proto__

// Should equal null. We've reached the end of the chain
const null_bait= jonas.__proto__.__proto__.__proto__
```

![image-20210425100213458](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210425100213458.png)



#### hasOwnProperty()

- This method will check if an instance/object has a certain property or key inside. 
- It returns a Boolean, but doesn't count properties only accessible because of the prototype

EXAMPLE: 

```js
const Person = function (firstName, birthYear) {
  (this.firstName = firstName), (this.birthYear = birthYear);
};
const jonas = new Person('jonas', 1975); // Create new instance
//—————————————————————【Setting properties】——————————————————————————
Person.prototype.powerLevel= 9000; // set property to the POLO

/*PICTURE 1*/
console.log(jonas.powerLevel) //OUTPUT:9000 (BUT, it is not kept as a KVP)
console.log(jonas)
/*PICTURE 2*/
let testA = jonas.hasOwnProperty('firstName'); //OUTPUT: true
let testB = jonas.hasOwnProperty('powerLevel'); //OUTPUT: false
console.log(testA, testB);
```

![image-20210424235205753](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210424235205753.png) ![image-20210425002218815](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210425002218815.png)

As you can see, we can still access `jonas.powerLevel` with dot notation, but it is not directly showcased on the jonas object preview. It's inside the prototype object

- When we use `hasOwnProperty`, it knows when a property is only available because of the prototype the instance inherited (hence the false output)
- The method does consider properties that were deliberately included within the constructor function's initial declaration

### instanceof Operator

#### instanceof 

This operator lets you identify whether an object was created using a certain constructor or not by returning a Boolean 

- Remember, it doesn't work properly on objects constructed using method 0 (a regular function that happens to output an object) - it will return false 
- It only works on constructor functions, class syntax, and `Object.create`
- Returns an error if the object name or function name you give it is undefined

### create() CONTINUE

This method creates a new object, using another one as the prototype for it
This means the new object will have all of the prototype's KVPs

```js
Object.create(prototypeObj, optionalPropertyObject)
```

PLACE THIS LESSON IN OOP chapter and then read this: [Understanding Own Properties of an Object in JavaScript (javascripttutorial.net)](https://www.javascripttutorial.net/javascript-own-properties/#:~:text=JavaScript uses prototypal inheritance.,from its prototype is inherited.)

This method clones an object

### getOwnPropertyNames() and keys()

These methods create an array with all the key names of an object inside of it

```js
const chars = {
  alien: "Piccolo",
  creator: "Shin",
  prince: "Vegeta"
};

let keyNames= Object.getOwnPropertyNames(chars);
console.log(keyNames);  //OUTPUT: ["alien", "creator", "prince"]

let keyNames2= Object.keys(chars);
console.log(keyNames2);	//OUTPUT: ["alien", "creator", "prince"]
```

These 2 methods do have 1 small difference between each other:

- `Object.getOwnPropertyNames(a)` returns *all* own properties of the object
- `Object.keys(a)` returns *all enumerable* own properties

These work the exact same as long as you don't set obj properties to `enumerable: false`



### assign() 

This method merges existing objects with each other, causing permanent change to the original starting object its used on. ℗

```js
Object.assign(startingObject,{KVPs_2_Add})
//OR
Object.assign(startingObject,additionObject) 	// if you're adding an existing object
```

- If the object you're adding has keys that with the same name as the starting object, the starting object's keys will be overwritten
- This causes permanent change to the original object- yet it is our go-to choice for shallow cloning objects. Just set the starting object equal to `{}` 

#### Basic Examples

EXAMPLE 1:

You can make the starting/adding objects come from existing variables, or you can make them up on the spot

```js
const starter = { jak1: "Gol", jak2: "Kor", jak3:"Errol"};
const combo= Object.assign(starter,{jakX:"Mizo"}) 
console.log(combo); // the starter object is equal to this as well, now
```

![image-20210324082022424](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210324082022424.png)

EXAMPLE 2: Show how the starting obj and obj we add are binded together

```js
const target = { a: 1, b: 2, c:10};
const source = { d:4, a:0 };

const returned = Object.assign(target, source); // adds d:4 & overrides a:1 with a:0
console.log(target, returned);
```

Both the starting and returned obj are the same: ![image-20210324080334733](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210324080334733.png)

Negate this effect with shallow/deep cloning

#### Shallow Cloning

```js
const target = { a: 1, b: 2, c:10};
const source = { d:4, a:0 };
const targetClone= Object.assign({},target) //adds target obj to an empty obj

const returned = Object.assign(targetClone, source);
console.log(target, returned);
```

Did not log `targetClone`- just know it's the same as "returned"

![image-20210324081221269](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210324081221269.png)

### fromEntries(NEXT) 

[Object.fromEntries() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)

# ===== ASYNC PROGRAMMING =====

MODERN UTILITY FUNCTION:

```JS
export async function fetchJSON(url) {
  try {
    const res = await Promise.race([fetch(url), timeout(10)]); // SET TIME IN SEC
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
}
```

PURPOSE:

- Uses fetchAPI to pull data based on the URL you feed it
- Errors will be handled wherever fetchJSON is used
  This will likely be in another async function in another JS file- fetchJSON meant to be a helper ƒ()

PROMISE REJECTS IF...
Fetch takes too long due to bad connection (set time in seconds)
The URL provided is invalid

——————————————————————————————————————————————————————

OLD UTILITY FUNCTION (used in most of our Async Lessons)

```JS
function getJSON(url, errorMSG = "Something went wrong") {
  // feed it the fetch URL, then your customized error message
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(errorMSG);
    return response.json();
  });
}
```

Performs a fetch API request and returns the data parsed by .json().
Can also provide a custom error message

# XML, JSON, API's

The goal of async JS is to deal with long-running tasks that happen in the background.
Its most common use is fetching data from remote servers (AJAX calls to API's)

FREE API LIST: https://github.com/public-apis/public-apis
Pick those with `CORS: yes` or `CORS: unknown`
You'll need CORS to access the API through your code

The 4 most important HTTP methods:

GET: 			  			  Request data
POST: 			 			Send data
PUT and PATCH: 	 Modify data



### Overview of JSON

Check if your JSON is valid: https://jsonlint.com/

JSON (JS Object Notation) syntax is based off object literals in vanilla JS, and it's commonly used instead of XML nowadays. It works with more languages than just JS

PURPOSE 

- JSON is used to send data to/from servers using text/strings
- It's commonly paired with AJAX, which sends data back and forth b/t client and server without the need to reload your webpages. 

DATA TYPES: To remember them all, just use the acronym BASON

|         | DETAILS                                         |
| ------- | ----------------------------------------------- |
| Number  | No difference b/t decimals, floats, or integers |
| String  | Must be wrapped in "double quotes"              |
| Boolean |                                                 |
| Array   | Allowed to be empty with 0 values               |
| Object  | Nested objects, with no specified depth limit   |
| Null    | Empty values                                    |

As you can see, not all JS data types are available in this list; which is why native JS deep cloning doesn't work with things like Dates or functions

There is a superset of JSON called BSON- which is used by MongoDB and permits the use of additional data types.

#### How JSON Works

Valid JS requires you to use...

- The filetype extension `.json`, if you have a file dedicated to JSON exclusively
- The MIME type `Application/json`
  Use this type in the header when sending data to restful API's

EXAMPLE 1:

- KVP's should have both the key/value have quotes around them individually, unlike JS
- There are exceptions; you should not put quotes around any of the 5 data types' values. See below

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210510145017559.png" alt="image-20210510145017559" style="zoom: 67%;" /> ![image-20211002043442834](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211002043442834.png)
>
> You can render individual objects or arrays in your JSON files

If you get lazy and want to convert JS to JSON without any effort, use a converter ▼
[Convert Javascript Object to JSON Online - ConvertSimple.com](https://www.convertsimple.com/convert-javascript-to-json/)

#### parse & stringify in JS

`JSON.stringify()`

- While working in JS, there will be times where you need to convert your object literals in JSON format quickly. 
- Use this method, but only when the object you're converting to JSON involves the 5 acceptable data types (BASON)

`JSON.parse()`

- Use this method to convert a JSON object back into regular JS literal syntax

```js
let person = {
  name: "Brad",
  age: 35,
  human: true,
  faults: null,
  address: {
    street: "5 main st",
    city: "Boston",
  },
  children: ["Brianna", "Nicholas"],
};

person = JSON.stringify(person); // convert to JSON
console.log(person);
person = JSON.parse(person); // convert back to JS
console.log(person);
```

![image-20210510152322596](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210510152322596.png)

### Sync vs Async

Most of the code we write is synchronous

- This means that each line gets executed one after another in the order they appear in the JS document. 
- Each line waits for the previous one to finish before continuing
- This can lead to long-running operations blocking the thread of execution 
  (a part of the execution context that executes the code in the computer's CPU)

EXAMPLE 1: Block the execution thread on purpose
The second message won't be logged until after we click "ok" on the alert popup

```js
console.log('First message shown!');
alert('This will hold up any future lines of code!');
console.log('Message number 2');
```

EXAMPLE 2: Use asynchronous JS to run the alert in the background

```JS
console.log('First message shown!');
setTimeout(function () {
  alert("This WON'T hold up any future lines of code!");
}, 3000);

console.log('Message number 2');
```

Now, both messages get logged immediately while the alert goes off asynchronously, 3 seconds after the page is done loading

![image-20210510112802887](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210510112802887.png)

EX1: ![image-20210510113719209](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210510113719209.png)	EX2: ![image-20210510113818368](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210510113818368.png)

NOT ALL CALLBACKS or EVENT LISTENERS ARE ASYNCHRONOUS

![image-20210510113629068](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210510113629068.png)

Like the image states, not all code written inside callback functions are executed asynchronously. There are a few methods whose callbacks work in such a way - setTimeout being one of them

#### More Asynchronous Examples

More asynchronous operations: Loading pictures, geolocation API, AJAX calls

EXAMPLE: Loading images

- `htmlEl.src` happens asynchronously by default because that's how the JS makers wanted it to be. Wouldn't make sense to halt webpage operations when loading large images
- The element will have a load event occur on it once the image has been loaded
  We can then apply event listeners which wait for that event on it

![image-20210510114820637](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210510114820637.png)



### AJAX and API's

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210510120428890.png" alt="image-20210510120428890" style="zoom: 67%;" />

- AJAX calls request data from a web server in the background as the rest of our page is running normally. 
- We use the info as soon is it's delivered to us, and our webpage execution remains unhalted. There is also no need to reload the page either

#### API 

To put it simply, API's are just pieces of software that interact with other software. Their purpose is to communicate with each other so they can exchange information

- We've casually used several API's already in our code 
  (DOM API, geolocation, local storage)
- Creating our own classes with helpful prototype methods is also something we could consider an API 

![image-20210510123131053](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210510123131053.png)



### AJAX Calls for Local Files & API's

#### History

For this initial example, we're going to use `XMLHttpRequest();`
DO NOT use arrow functions instead of traditional function declarations

```JS
let vari = new XMLHttpRequest();
vari.open("GET", "people.json", true);
vari.send();
vari.addEventListener("load", function () {
  // TYPE OUT ACTIONS FOR WHAT YOU WANT TO HAPPEN HERE
});
```

OR

```JS
let vari = new XMLHttpRequest();
vari.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // TYPE OUT ACTIONS FOR WHAT YOU WANT TO HAPPEN HERE
    }
};
vari.open("GET", "filename", true);
vari.send();
```

Feel free to change `vari`'s name. The rest of the code is copy/paste

- You can do this using vanilla JS but the syntax is a bit wordy, as you can see
  Luckily, you can make AJAX calls in different ways with JS
- In the past, people used libraries like Axios/jQuery to make this easier
  In ES6, JS implemented a new feature called "Promises" to do the same thing natively

#### Local JSON File Call

Create a JSON file. Have it contain an array of people's names/ages inside
Fetch the data inside the `people` array via AJAX, then output them on screen

AJAX FILE NAME: 	`people.json`

```json
{
  "people": [
    {
      "name":"Brad",
      "age": 35
    },
    {
      "name":"John",
      "age":40
    },
    {
      "name":"Sara",
      "age":25
    },
    {
      "name":"Jeff",
      "age":20
    }
  ]
}
```

JS:

```JS
let vari = new XMLHttpRequest();
vari.open("GET", "people.json", true);
vari.send();
vari.addEventListener("load", function () {
  let response = this.responseText; // "this" will point to the XMLhttprequest object
  console.log(response); // log JSON file text
});
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210510154916353.png" alt="image-20210510154916353" style="zoom:80%;" /> ![image-20210510155627983](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210510155627983.png) ![image-20210510155932809](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210510155932809.png)

Normally, the "this" keyword in an internally defined handler would point to the window, but in an E-L assigned to an XML request, it'll point to the XMLHttpRequest object instead:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210510182900702.png" alt="image-20210510182900702" style="zoom:80%;" />

We performed a GET request on the `people.json` file which is within the same file folder as the JS document. That being said, we can fetch JSON info from an API as well. 

- This opens the floodgates for what we can do with our applications
- There's an API for almost everything, and you can fetch information from any one of them using XMLHttpRequest, or any of the alternatives

#### API Call

We're going to create a small comparison between 2 countries on our webpage using the "Rest Countries API" (https://restcountries.eu/#api-endpoints-full-name)

```js
let request = new XMLHttpRequest();
request.open(
  "GET",
  "https://restcountries.eu/rest/v2/name/Canada?fullText=true",
  true								// countryName			
);
request.send();

request.addEventListener("load", function () {
  const info = JSON.parse(this.responseText); // an array containing 1 object
  console.log(info); // log JSON file text
});
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210510211148669.png" alt="image-20210510211148669" style="zoom:67%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210510211319653.png" alt="image-20210510211319653" style="zoom:85%;" />

- We now have an array containing 1 object filled with information specifically about the country we chose (should probably destructure the array later)
- We'll use the properties to add accurate information that we didn't have to manually search for into our projects

#### API Call Part 2

Now, let's take it a step further. 
Generate HTML and customize it with properties from the request object

```js
let request = new XMLHttpRequest();
request.open(
  "GET",
  "https://restcountries.eu/rest/v2/name/Canada?fullText=true"
);
request.send();

request.addEventListener("load", function () {
  const [info] = JSON.parse(this.responseText); // the XMLRequest object
  console.log(info); // log JSON file text
  const bodyEl = document.querySelector("body");
  const html = `<article class="country">
  <img class="country__img" src="${info.flag}" />
  <div class="country__data">
    <h3 class="country__name">${info.name}</h3>
    <h4 class="country__region">${info.region}</h4>
    <p class="country__row"><span>👫</span>${info.population}</p>
    <p class="country__row"><span>🗣️</span>${info.languages[0].name}</p> 
    <p class="country__row"><span>💰</span>${info.currencies.code}</p>
  </div>
</article>`;

  bodyEl.insertAdjacentHTML("beforebegin", html); // only works because of id
});
```

(CSS styling not shown)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210510214249152.png" alt="image-20210510214249152" style="zoom:80%;" />

Not a bad start! The final iteration of our code will be a function that generates a similar image whenever we type in a country name

```js
const bodyEl = document.querySelector("body");
function nationMaker(nation) {
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://restcountries.eu/rest/v2/name/${nation}?fullText=true`
  );
  request.send();

  request.addEventListener("load", function () {
    const [info] = JSON.parse(this.responseText); // the XMLRequest object
    console.log(info); // log JSON file text
    const html = `<article class="country">
    <img class="country__img" src="${info.flag}" />
    <div class="country__data">
      <h3 class="country__name">${info.name}</h3>
      <h4 class="country__region">${info.region}</h4>
      <p class="country__row"><span>👫</span>${info.population}</p>
      <p class="country__row"><span>🗣️</span>${info.languages[0].name}</p> 
      <p class="country__row"><span>💰</span>${info.currencies[0].name}</p>
    </div>
  </article>`;

    bodyEl.insertAdjacentHTML("beforebegin", html); // only works because of id
  });
}
nationMaker("USA");
nationMaker("Portugal");
```

![image-20210510230447249](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210510230447249.png)

Since we're making 2 AJAX calls at once, the order they appear can be random at times. Whichever nation gets its data returned first is what will show up first

To establish a certain order, we'd have to chain requests together- which led to a phenomenon people named "callback hell"



### Chaining CML Requests + Callback Hell 

We're going to expand on the previous lesson's function which takes country data from an API, then displays it on screen. 

- The request object returned from the API includes a property named "borders"
- If we generated a display about Canada, the borders array would look like this:
  `borders: Array [ "USA" ]`
- Not all countries have entries in their arrays (some have no bordering nations)

#### Callback Hell Demo

Let's change our function to now create HTML based on the selected nation, AND its bordering nations... if any

https://jsfiddle.net/JasonXtuyotech/nsLpzhw0/1/

HTML and CSS are the same as last lesson's

```js
const bodyEl = document.querySelector("body");
let borderNation;
function renderData(info, className = "") {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${info.flag}" />
    <div class="country__data">
      <h3 class="country__name">${info.name}</h3>
      <h4 class="country__region">${info.region}</h4>
      <p class="country__row"><span>👫</span>${info.population}</p>
      <p class="country__row"><span>🗣️</span>${info.languages[0].name}</p> 
      <p class="country__row"><span>💰</span>${info.currencies[0].name}</p>
    </div>
  </article>`;
  bodyEl.insertAdjacentHTML("beforeend", html);
}
function multiNationData(nation) {
  //&—————————————————————【 NATION 1 】——————————————————————————
  const request = new XMLHttpRequest();
  request.open("GET",`https://restcountries.eu/rest/v2/name/${nation}?fullText=true`);
  request.send();
    
  request.addEventListener("load", function () {
    const [info] = JSON.parse(this.responseText); // the XMLRequest object
    console.log(info); // log JSON file text
    renderData(info); // display to UI
    const [neighbor] = info.borders; // get first entry in array
    if (!neighbor) return console.log(typeof neighbor); 
      // guard clause if there are no neighbors
      
    //&—————————————————————【 NATION 2 】——————————————————————————
    // AJAX call 2 fires inside the first AJAX call's load event handler (dependent)
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.eu/rest/v2/alpha/${neighbor}`);
    request2.send();
      
    request2.addEventListener("load", function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderData(data2, "neighbor");
      // Pass it a class name so we can make it smaller compared to the chosen nation
      // Preparations in CSS that make data for the neighbor look smaller
    });
  });
}

multiNationData("Canada");
// multiNationData("Nauru");
```

![image-20210511003801000](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210511003801000.png)

Does this look complicated? TLDR:
AJAX call 2 and load event handler 2 is inside...
AJAX call 1 and load event handler 1 for AJAX call 1

This is necessary if we want to ensure that the second AJAX call happens after the first one is finished (that's why its inside the first call's load event handler)

#### Why is this Bad?

- We only chained 2 calls together here. Imagine if we had to chain 10. 
- They referred to this as callback hell b/c chaining becomes unreadable quickly due to all the nesting- which makes it harder to understand/maintain

Code that's tough to understand/maintain is bad code- plain and simple.
They're more prone to bugs and it's hard to add new features to something you don't get

Nesting handlers within other handlers happens with all asynchronous operations, including but not limited to AJAX calls. 

EXAMPLE: Make a 5 second timer go off after a 1 second timer

```js
setTimeout(() => {
  console.log("1 sec passed");
  setTimeout(() => {
    console.log("6 sec passed");
  }, 5000);
}, 1000);
```



### Different kinds of API's (return4)

#### Understand diff kinds of API's

[REST APIs vs GraphQL APIs (academind.com)](https://academind.com/tutorials/rest-vs-graphql/)



### API Endpoints: Practical Guide

To use API's properly, you should understand the basics of how endpoints work

#### Parts of the Endpoint

STEM:
An API will have a string that starts off every single endpoint it has available- I call it the stem
After the stem, add query parameters to narrow down your search

QUERY PARAMETERS:

- These are KVP's you place in a string
- Place a `?` before the first one, then an `&` in between it and any new ones

API KEYS IN THE REQUEST:
Not all API's are usable right away- some require a sign up process that gives you an API key if you finish it successfully

- The API key is what gives your project permission to access API endpoints, and should be kept private at all costs- so place it in a .env file in your project files
- When making a request, attach the following KVP in your request header
  `Authorization: Bearer <API-KEY-HERE>`

#### Testing Endpoints with Online Tools

Use postman in the browser to test out API calls without having to explicitly write code for it first
Afterwards, view the JSON fullscreen using another tools

1. Make requests with Postman:					https://web.postman.co/
2. View formatted JSON responses: 			http://jsonviewer.stack.hu/

#### Demo

API ENDPOINT EXAMPLE:

```
STEM:
https://api.yelp.com/v3/businesses/search

QUERY PARAMETER FORMULA
https://api.yelp.com/v3/businesses/search?<queryParameter>&<queryParameter>

WORKING EXAMPLE: Searches Yelp API based on current location
https://api.yelp.com/v3/businesses/search?latitude=83.8530=443&longitude=-21.434973
```



# AsyncJS: fetch() + then() Chains

We'll be learning all about the fetch API to extract data from 3rd party services- and promise chaining + error handling is required to do this effectively.

This is a superior method than the XML requests from the previous chapter, and is integral to understand Async/Await- an even better method to accomplish what I just described

PROMISE METHODS:

|              | When's each method goes off                 |
| ------------ | ------------------------------------------- |
| `.then()`    | only if the promise is settled successfully |
| `.catch()`   | only if the promise is rejected             |
| `.finally()` | Fires no matter what the promise result is  |

Brief Info on `.finally()`

The only requirement `.finally()` has: the method preceding it must return a promise
Aka, then() better precede it.

You're can return nothing, and it still works: ![image-20210520052722390](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210520052722390.png)

Some operations need to happen regardless of the promise's outcome. 
For example, when loading something, display a rotating spinner 
That spinner will be replaced with an error message OR what you loaded successfully



### Promises & Fetch API: Theory

We can avoid callback hell by using a more modern alternative to XML requests; the fetch API coupled with promise chaining

```js
// XML Method
let request = new XMLHttpRequest();
request.open("GET",`https://restcountries.eu/rest/v2/name/${nation}?fullText=true`);
request.send();

// Fetch API Method (NOT COMPLETE YET)
let request = fetch(`https://restcountries.eu/rest/v2/name/${nation}?fullText=true`); 
```

The request variable builds a promise that starts off as pending
The fetch method has more optional parameters- but we're performing a simple GET rn

PROMISE DEFINITION:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210512234330695.png" alt="image-20210512234330695" style="zoom: 67%;" />

#### Life Cycle of a Promise

- During the "pending" stage, the asynchronous task is still underway
- At the "settled" stage, the asynchronous task is finished
  The promise can be fulfilled (success) or rejected (failed)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210512235934902.png" alt="image-20210512235934902" style="zoom:67%;" />

Lets use a GET request as an analogy. If we retrieve data successfully, the promise is fulfilled. If you lose connection and can't connect to the API in a subway tunnel, the promise is rejected

ADDITIONAL DETAILS

- A promise is only settled once. The state will remain unchanged forever
- You can decide what happens in both rejected and fulfilled states in your code

#### Building vs Consuming Promises

When it comes to GET requests and AJAX calls, the promise is built by the fetch API. We'll typically just be consuming promises- which is the easiest and most useful part

Sometimes however, we will need to build one ourselves

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210513003332266.png" alt="image-20210513003332266" style="zoom:50%;" />

### Consuming Resolved Promises with (S1) 

SUGGESTION: Read the next lesson after finishing this one (directly related)

To consume a promise that you assume will be resolved, use the `.then()` method
It requires a callback function that JS gave an inbuilt parameter to

- The first parameter of the callback ƒ() will always be the promise response
  Parse it with the `.json` method, then make it what the function returns
- The `.json` method is asynchronous and returns a promise itself, so extracting from it requires you to use a 2nd `.then` method 

The `.json` method is available to all response objects

Take a look at the response object:

```js
const request = fetch(
  `https://restcountries.eu/rest/v2/name/${nation}?fullText=true`
).then(function (response) {
  console.log(response);
});
```

We can't read the information from the body just yet (need to parse it with `.json`)

![image-20210513010025390](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210513010025390.png)

#### Practical Example

Take an old fashioned AJAX call made with XML requests and reformat it
Use the fetch API and promises instead

```JS
// OLD METHOD:
const request = new XMLHttpRequest();
request.open("GET",`https://restcountries.eu/rest/v2/name/Peru?fullText=true`);
request.send();
request.addEventListener("load", function () {
  const [info] = JSON.parse(this.responseText); // the XMLRequest object
  console.log(info); // log JSON file text 
})
```

![image-20210513013355442](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210513013355442.png)

SOLUTION:

```js
// NEW METHOD:
const request = fetch(`https://restcountries.eu/rest/v2/name/Peru?fullText=true`)
  .then(function (response) {
    return response.json(); //parse the object the API returns with JSON
  })
  .then(function (data) {
    return console.log(data[0]); // data is an array with 1 obj full of useful info
  });
console.log(request);
```

We didn't return anything inside the second function defined in `.then()`, but we'd probably have to if we want more promises to chain

REFACTORED SOLUTION:

```JS
const request2 = fetch(`https://restcountries.eu/rest/v2/name/Peru?fullText=true`)
.then((response) => response.json()) // can use arrows too
.then((data) => console.log(data[0]));
console.log(request2);
```

![image-20210513020547381](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210513020547381.png)



### Chaining Multiple Promises (S2)

#### How .then() Works

No matter what, using `.then()` will always return a promise, even if we have no return statement in the block. If we do return a value, that value will become the FULFILLMENT VALUE of the returned promise

SIMPLE EXAMPLE: (Remember that the inbuilt values for methods can be named whatever)

```JS
const request = fetch(`https://restcountries.eu/rest/v2/name/Canada?fullText=true`)
  .then(function (response) {
    let parsedArr = response.json(); // API's returned info not used for anything
    return 99; // fulfillment value (will equal "data" in next then() method)
  })
  .then(function (data) {
    console.log(data);  //OUTPUT: 99
  });
console.log(request); // when the code runs initially, the promise is still pending
```

![image-20210513115250217](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210513115250217.png)

Here, we choose to return the number 99 from our first then method
The second then method now has this value for its first built in parameter

PRACTICAL EXAMPLE:

```js
const request = fetch(`https://restcountries.eu/rest/v2/name/Canada?fullText=true`)
  .then(function (response) {
    let parsedArr = response.json();
    console.log(parsedArr); // 30
    return parsedArr; // fulfillment value
  })
  .then(function (data) {
    // data argument equals parsedArr's value
    console.log(data); // 36
  });
console.log(request); //38
```

![image-20210513114900397](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210513114900397.png)

- The API returns an array containing an object with a ton of info about Canada
- The first `.then()` method returns that array, parsed with JSON
  Find it in the `<value>` key in the promise object
- The 2nd then method's built in parameter will equal what's returned in the preceding then method in the chain

#### Chaining AJAX Calls

In the last lesson's example, you chained multiple promises together while using the Rest Countries API to make one AJAX call

```js
// STARTER CODE
const request2 = fetch(`https://restcountries.eu/rest/v2/name/Peru?fullText=true`)
.then((response) => response.json()) 
.then((data) => console.log(data[0]));
console.log(request2);
```

- You can chain multiple AJAX calls together as well; just return a new fetch statement
- Its the way to avoid callback hell when you need a 2nd AJAX call to fire after a preceding AJAX call is resolved successfully

#### Practical Example

PROBLEM DESCRIPTION:

1) Log data about country 1 (already done in starter code)
2) Log data about the first neighbor country 

- Info about surrounding nations can be found in the `data.borders` KVP in the object the API returns (represented by "data" parameter in our code) 
- AJAX call 2 is dependent on AJAX call 1. Write their promises in sequence

SOLUTION:

```js
const request2 = fetch(`https://restcountries.eu/rest/v2/name/Peru?fullText=true`)
.then((response) => response.json()) // return a parsed array of info
.then((data) => {
  let nation1Data= data[0] 
  console.log(nation1Data)
  let neighbor= nation1Data.borders[0] // will be an array with 0 or more values
  console.log(`Nearest nation is ${neighbor}`)
  return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`)
})
.then((data2)=>console.log(data2.json()))
```

![image-20210513121523929](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210513121523929.png)

The only complex thing about this is how we need to use different API links
fetch Link 1: Searches for country based on its full name (Peru)
fetch Link 2: Searches for country based on 3 letter code (BOL for Bolivia)



### Handling Rejected Fetch API Promises (S3)

We're going to be using the code form the last lesson, which logs data about the first nation given to the fetch method, then fetches data on any neighboring countries

#### Rejected Promises from fetch API

Remember, the fetch API only rejects a promise when we lose connection. You can tell the API to fetch something that doesn't exist, and the promise still gets settled- technically

HOW TO SIMULATE LOSING CONNECTION:

Only search for a neighbor nation after we press a button

- Use dev tools to disable cache, then set network to offline
- It will simulate losing connection in the middle of an AJAX call

 ![image-20210513214843983](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210513214843983.png) ![image-20210513215426715](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210513215426715.png)

![image-20210513213409129](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210513213409129.png)

The error says "failed to fetch" because you didn't have anything set in place to handle what happens if/when a promise gets rejected

#### Catching Errors

There are 2 main ways to program what should happen after a rejected promise

1) Add a 2nd function to specific `.then()` methods on the chain- ones you know may fail

2) Use `.catch()` at the end of your promise chain- it'll catch an error anywhere on it

- Its inbuilt error parameter is relative to where on the chain the error occurs
- The error parameter is actually a JS object, containing multiple things, including a default error message for why the error took place
- Feel free to display error message into your webpage using that error message value plus `insertAdjacentText`

#### Error Method 1:

The orange button will use fetch API to grab then log an array containing an object with info about Canada

[JSFiddle - Code Playground](https://jsfiddle.net/JasonXtuyotech/u1q4mjpf/1/)

```JS
// STARTER CODE
btn.addEventListener('click', () => {
  const request = fetch(`https://restcountries.eu/rest/v2/name/Canada?fullText=true`)
    .then(response => response.json())
    .then(data => console.log(data[0]))
});
```

Now, add in some code to handle an error using method 1. Simulate losing connection like how I explained at the start of this lesson

```js
btn.addEventListener('click', () => {
  const request = fetch(`https://restcountries.eu/rest/v2/name/Canada?fullText=true`)
    .then(
    	response => response.json(),
    	error => alert("Connection dropped, info not retreived")
    )
    .then(data => console.log(data[0]))
});
```

- We use our error function right after the AJAX call with fetch(), because that's where things can go wrong. 
- The second .then() just logs information the browser should already have at that point. Losing connection then wouldn't do anything
- If we had multiple AJAX calls, we'd have more error functions coming after our success functions in the .then() methods

#### Error Method 2

Use a catch() method instead- we'll only ever need one of those at the end of a chain
A finally() method can come after it though (explain how that works in next subsection)

[JSFiddle - Code Playground](https://jsfiddle.net/JasonXtuyotech/zk90bvoc/2/)

```js
btn.addEventListener('click', () => {
  const request = fetch(`https://restcountries.eu/rest/v2/name/Canada?fullText=true`)
    .then(response => response.json())
    .then(data => console.log(data[0]))
    .catch(err => console.log(err))
    .finally(() => console.log("HOORAY! WWe're done!"));
});
```

![image-20210513222325103](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210513222325103.png)



### Custom Error Messages via Manual Error Throws (S4)

What if you told the fetchAPI to get information that doesn't exist? 

- It still wouldn't reject the promise- just because that's how fetchAPI is designed 
  Rejected promises from fetchAPI are only possible when you lose connection
- That'll leave us with questionable results- requiring us to manually add a custom error, when the API can't retrieve anything due to a bad request argument

#### Demonstration

EXAMPLE: AJAX call 1 works, the second chained AJAX call doesn't 

Use the REST countries API to look up info on a nation, and its neighbor nation 
Then pick an island country without any neighbors at all
The error object does not contain a very informative message when we do this

```js
const request2 = fetch(`https://restcountries.eu/rest/v2/name/Nauru?fullText=true`)
.then((response) => response.json()) // return a parsed array of info
.then((data) => {
  let nation1Data= data[0] 
  console.log(nation1Data)
  let neighbor= nation1Data.borders[0] // will be an array with 0 or more values
  console.log(`Nearest nation is ${neighbor}`)
  return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`)
})
.then((data2)=>console.log(data2.json()))
```

We still see `<state> "fulfilled"` in the promise object, despite the bad request

![image-20210513122918967](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210513122918967.png)

This problem needs to be addressed. It's poor practice to leave up all these errors that no one will understand once they're encountered

#### Examine the API Response Object

There are some differences between response objects when your AJAX call successfully grabs something VS when it doesn't

First picture is when we search for "FakeName" country
Second picture is when we search for "Egypt"

```JS
const request2 = fetch(`https://restcountries.eu/rest/v2/name/FakeName?fullText=true`)
// Searching for a country that doesn't exist this time        ^^^^^^^  
.then((response) =>{
  console.log(response) // LOOK INTO THIS RESPONSE OBJECT (highlighted yellow)
  return response.json()
}) 
.then((data) => {
  let nation1Data= data[0] 
  console.log(nation1Data)
  let neighbor= nation1Data.borders[0] // will be an array with 0 or more values
  console.log(`Nearest nation is ${neighbor}`)
  return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`)
})
.then((data2)=>console.log(data2.json()))
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210514005103462.png" alt="image-20210514005103462" style="zoom:85%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210514005216501.png" alt="image-20210514005216501" style="zoom:85%;" />

We can use the response object's "ok" KVP to reject the promise ourselves manually

#### Manually Defining Errors

```js
const request2 = fetch(`https://restcountries.eu/rest/v2/name/gypt?fullText=true`)
  .then(response => {
    if(!response.ok) throw new Error(999) // MANUALLY DEFINED ERROR
    return response.json();
  }) 
  .then(data => {
    let nation1Data = data[0];
    console.log(nation1Data);
    let neighbor = nation1Data.borders[0]; // will be an array with 0 or more values
    console.log(`Nearest nation is ${neighbor}`);
    return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
  })
  .then(data2 => console.log(data2.json()))
  .catch((err)=>console.error(`Well shit. ${err}`)) 
	// shows starter MSG+ manually defined error
```

![image-20210514010534445](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210514010534445.png)

The key line of interest is `if(!response.ok) throw new Error(999)`

- If response is false, we get a new Error, which immediately rejects the promise

- The chain skips all the following `.then()` methods and jumps right to the end where the `.catch()` and `.finally()` methods are

In our example, the catch method tells the browser to say 
"Well shit, **insert error message here"

- We defined the error message in our line of interest (its usually a string, ftr)
- We can program complex instructions for what to do in the catch function as well
  That's all we need to explain what went wrong to the user

WHEN TO USE: Anywhere you expect something could go wrong

#### Practical Example

In the previous subsection, we learned how to make our own error messages, and how to reject a promise when we feel circumstances are not up to our standards

CHALLENGE DESCRIPTION:

Take the code from Link 1; it shows off info regarding a country and its neighbor
Create intuitive error messages for the following 2 scenarios:

| possible fuckups | reason                    | desired error message                   |
| ---------------- | ------------------------- | --------------------------------------- |
| error 1          | Nation 1 does not exist   | "Invalid country chosen for research"   |
| error 2          | Nation 1 has no neighbors | "This country has no bordering nations" |

STARTER CODE:	  https://jsfiddle.net/JasonXtuyotech/j0xhzbos/2/
FINAL CODE:		https://jsfiddle.net/JasonXtuyotech/z3gcbrLj/3/

Important JS Code: (will be refactored)

```js
function multiNationData(nation) {
  let request = fetch(`https://restcountries.eu/rest/v2/name/${nation}?fullText=true`)
    .then(response => {
      if (!response.ok) throw new Error('Invalid country chosen for research');
      return response.json();
    }) // NATION 1
    .then(data => {
      renderData(data[0]); // display first country data
      let neighbor = data[0].borders[0];
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
    })
    .then(response2 => {
      if (!response2.ok) throw new Error("This country has no bordering nations");
      return response2.json();   
    }) // NATION 2
    .then(data2 => renderData(data2))
    .catch(err => alert(`CRAP! ${err}`));
}
```

Let's test out 3 scenarios to see if our code works (it does)

```js
// TESTS: Try 1 at a time
multiNationData('Nepal'); // has a neighboring nation
multiNationData('Naur'); // doesn't exist
multiNationData("Australia") // has no neighbors
```

Nepal: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210514022423223.png" alt="image-20210514022423223" style="zoom:50%;" /> 	

Naur:  ![image-20210514022551114](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210514022551114.png) 	Australia: ![image-20210514022627252](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210514022627252.png)

REFACTORED VERSION:

- We can move the code that parses the JSON data and renders visuals for a certain country into a function. 
- We can even use a custom error message for each time we call it. That'll shorten our code and make the chain look less long
- Our `getJSON` function returns a promise. 
  It's why you see 2 returns in 1 helper ƒ()

```js
function getJSON(url, errorMSG = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(errorMSG);
    return response.json();
  });
}
//———————————————————————————————————————————————
function multiNationData(nation) {
  const request = getJSON(
    `https://restcountries.eu/rest/v2/name/${nation}?fullText=true`,
    'Invalid country chosen for research'
  ) // get JSON data for nation 1
    .then(data => {
      renderData(data[0]); // display first country data
      let neighbor = data[0].borders[0];
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbor}`,
        'This country has no bordering nations'
      ); // get JSON data for nation 2
    })
    .then(data2 => renderData(data2))
    .catch(err => alert(`CRAP! ${err}`));
}
multiNationData('Nepal');
// multiNationData('Naur');
// multiNationData('Australia');
```

### Immediately Resolved or Rejected Promises

SYNTAX:

```js
Promise.resolve().then() 	// immediately resolved
Promise.resolve().catch()	// immediately rejected
```

These allow us to build a promise that gets resolved/rejected immediately. 
The success/failure value of the promise is what you place inside the brackets

EXAMPLE:

```js
Promise.resolve(new Object({ x: 8 })).then(x => console.log(x));
Promise.reject(new Error('Problem Detected!')).then(y => console.log(y));
```

![image-20210515000738100](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210515000738100.png)

You can specify a new success object using object literal syntax instead of a constructor as well:

```js
Promise.resolve({
  x: 8,
}).then(x => console.log(x));

Promise.reject(new Error('Problem Detected!')).then(y => console.log(y));
```



### Building Our Own Promises & Promisifying

To demonstrate how to build promises, we're going to be using the lottery example:
A fulfilled promise means we win the lottery, while a rejected one means we lose

SYNTAX:

```js
new Promise(function(resolveFunction, rejectFunction){
  // executor function goes here
})
```

- The new promise constructor only accepts 1 argument; the executor function

- The executor function accepts 2 parameters, the resolve/reject function

The executor function is what contains the asynchronous behavior that we're trying to handle with the promise. 

- It should eventually produce a result value, which (as you know) will become the future parameter value of the promise created when you use a `.then()` method

#### Build a Promise Pt.1

- In our mock lottery, the odds of winning or losing are both 50%
- When we construct a promise, we specify when the promise gets accepted and when it gets rejected. It's important to cover all possible scenarios when you do this

PHASE 1: (None of it is asynchronous yet)

- For the record, the whole point of building promises is to encapsulate asynchronous behavior (we will turn the following code asynchronous in the next subsection)
- Just learn how to build promises in general here in phase 1

```js
const lotteryPromise = new Promise(function (resolve, reject) {
  let rng = Math.random(); // creates 0 or 1
  if (rng > 0.5) resolve('You WIN! 💰');
  else reject('You lose 👎');
});

lotteryPromise
  .then(goodResult => console.log(goodResult))
  .catch(badResult => console.error(badResult));
```

​								![image-20210514213321684](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210514213321684.png) ![image-20210514213348183](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210514213348183.png)

The promise we constructed is treated just like a fetchAPI call. 

- We use `.then()` methods on it for when/if the promise is deemed successful. 
- We have `.catch()` in place at the end of the promise chain to dictate what happens if the promise gets rejected. 
- IRL, you won't simply be logging success or fail messages to the console- but this is just to teach you the basics of how things operate

#### Build a Promise Pt.2

- We're taking the last subsection's example and turning it asynchronous here
- The whole purpose of building promises is to encapsulate asynchronous behavior- otherwise we could have accomplished the same thing on the global scope

```js
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw in progress...');

  setTimeout(function () {
    let rng = Math.random(); // generates number b/t 0 and almost 1
    if (rng > 0.5) resolve('You WIN! 💰');
    else reject(new Error('You lose 👎'));
  }, 4000); // made asynchronous by putting the lottery operations on a timer
});

lotteryPromise
  .then(goodResult => console.log(goodResult))
  .catch(badResult => console.error(badResult));
```

![image-20210514214815432](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210514214815432.png)

- The lottery is asynchronous now after we placed operations in `setTimeout()`
- We also created an error object instead of logging a simple failure message. 
- This is much better, as it shows the dev where the error occurred and looks more like an error message you'd see on a legitimate website

#### Making Functions that Build New Promises

EXAMPLE: 
Create a ƒ() that builds a promise that rejects after X amount of time
Do not let it resolve, ever

```js
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};
timeout(2);
```

After 2s: ![image-20210519131843983](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210519131843983.png)

EXAMPLE 2:
Create a promise that returns fruit emojis when you supply the right name
Let the promise be fulfilled even if you give a bad name. Let it return undefined

```js
const getFruit = async title => {
  const fruits = {
    pineapple: '🍍',
    peach: '🍑 ',
    strawberry: '🍓',
    plantain: '🍌',
  };
  return Promise.resolve(fruits[title]); // immediately resolved promise
};
console.log(getFruit('peach'));
```

![image-20210519173246989](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210519173246989.png)

#### Promisifying

We usually don't build promises from scratch. 

- At most, you'll probably be asked to wrap old callback-based functions with asynchronous behavior into promises
- In other words, you'll take old functions suffering from callback hell and refactor/modernize them by using promises instead

EXAMPLE: Promisify the setTimeout() function from the last subsection:

Things can look real cumbersome when we have asynchronous callbacks nested within other asynchronous callbacks. Try chaining asynchronous timers 1 after another and see

```js
setTimeout(() => {
  console.log('Waited for 1 second');
  setTimeout(() => {
    console.log('Waited for 3 seconds');
    setTimeout(() => {
      console.log('Waited for 6 seconds');
    }, 3000);
  }, 2000);
}, 1000);
```

![image-20210514233828790](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210514233828790.png)

Reformat the code above so that it looks more readable

```js
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000); 
    // we must return a new promise in order to chain methods after this
  });
};

wait(1)
  .then(() => {
    console.log('I waited for 1 second');
    return wait(2);
  })
  .then(() => {
    console.log('I waited for 3 seconds');
    return wait(3);
  })
  .then(() => {
    console.log('I waited for 6 seconds');
  });
```

We're allowed to skip specifying a reject function in this example because there's no way the promise will fail. It's a simple count down from a specified time



### Promisifying the Geolocation API

REVIEW:

```JS
navigator.geolocation.getCurrentPosition(successCB, errorCB)
// successCB has an inbuilt parameter; an object full of current location info
```

#### Geolocation is Async which has Implications

The geolocation API is asynchronous, meaning it runs in the background. 
We can prove it with this simple code snippet:

```js
navigator.geolocation.getCurrentPosition(
  posit => console.log(posit),
  () => alert('Could not find current location')
);
console.log("This should come 2nd if geolocationAPI is synchronous") // it doesn't
```

![image-20210515002348025](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210515002348025.png)

Due to its async nature, we can't use the data returned from this API unless we place all of our logic in the success callback (which lumps too much logic into one place)

![image-20220120013300666](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220120013300666.png)



#### Chaining Logic after Geolocation

Imagine you need to get your latitude and longitude for your current location, then need to make an API call using them

- You could continue the then() chain and place all your logic there
- Though the above suggestion is valid, perhaps you don't want to group all your logic in 1 file

SOLUTION 1:
Execute a function inside then() that is defined in another file

```js
import doSomethingElseWithPosition from "elsewhere"
function parent(){
  let position;

  function success(p) {
    position = p;
    doSomethingWithPosition(); // chain function calls here
  }
  function error (msg) { }
    
  navigator.geolocation.getCurrentPosition(success, error);
}
```

SOLUTION 2:
Update state (as in Redux or ContextAPI), at the end of your then() chain
Code other things in your site that are dependent on that state

```react
const getPosition = function (seconds) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject); // automatic
  });
};

getPosition()
  .then(pos => console.log(pos))
  .then( r => setStateVariable("whatever"))
  .catch(error => console.log(error));
```

For an example of solution 2, check out your Restaurant finder app's locationContext.js file

#### Geolocation Boiler Plate

The following snippet has many parts that can be recycled across different projects, with some minor differences

- You'll likely be using coordinates to do something else
- Replace alerts with better UI communication tools like modals or something

ASYNC AWAIT VERSION
We use Axios for its useful auto-throw errors feature when something goes wrong

```JS
const detectLocation = async function (findNew) {
  // Check the visitor's browser supports Geolocation
  if (!navigator.geolocation) alert("Geolocation not supported by your browser")
 
  // Made a promisified Geolocation API function (call then await it)
  const getPosition = function () {
    return new Promise(function (onSuccess, onReject) {
      navigator.geolocation.getCurrentPosition(onSuccess, onReject);
    });
  };
  //~ Code any actions requiring coordinates here
  // Use the coordinates to get the current area name via Mapquest API
  const actionsAfterCoordinates = async function () {
    // ONSUCCESS LOGIC HERE
    try {
      const locationInfo = await getPosition();
      // Make an API Route call then extract successful request data
      const apiRouteCall = await axios.post("/api/mapquest", {
        // Body payload in JS form- send lat and long
        latitude: locationInfo.coords.latitude,
        longitude: locationInfo.coords.longitude,
      });
      console.log(apiRouteCall);
      const requestData = apiRouteCall.data.requestData;
      // Save details to localStorage and project state
      localStorage.setItem("savedLocation", JSON.stringify(requestData));
      setLocationObj(requestData);
    } 
    // ONREJECT LOGIC HERE
    catch (err) {
      alert("Geolocation denied, or something went wrong in this chain");
    }
  };
  actionsAfterCoordinates();
};
```

From locationContext.js in our restaurant finder project *

### Coding Challenge 1 (Summary & Practice)

#### Description

![image-20210515141120790](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210515141120790.png)

#### PART 1: Find location of coordinates

```js
function whereAmI(lat, long) {
  const request = fetch(`https://geocode.xyz/${lat},${long}?geoit=json`);
  request
    .then(response => {
      if (!response.ok) throw new Error();
      return response.json();
      // REJECT: create error object with custom msg
      // RESOLVE: parse json data
    })
    .then(parsedData => {
      if (!parsedData.country) throw new Error('Invalid coordinates');
      console.log(parsedData); // obj full of info
      console.log(`You are in ${parsedData.city}, ${parsedData.country}`);
    })
    .catch(errMSG => console.error(errMSG));
}
// whereAmI(0, 0); // undefined undefined, if we had no custom error MSG
whereAmI(52.508, 13.38); // Berlin, Germany
whereAmI(19.037, 72.873); // Mumbai, India
whereAmI(-33.933, 18.474); // Cape Town South Africa
```

Default reload error MSG: ![image-20210515134636861](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210515134636861.png)

Bad coords custom error MSG: ![image-20210515140549836](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210515140549836.png)

Resolved promise example: ![image-20210515141512188](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210515141512188.png)

You can manually code in special error messages at different locations on your promise chain. The message should be specifically tailored to that what would go wrong at that exact spot

#### PART 2: Render visuals based on supplied coordinates

CODE: https://jsfiddle.net/JasonXtuyotech/gLvmu89y/1/

![image-20210515145038165](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210515145038165.png)

###### —————【 BONUS: Render visuals based on current PC coordinates 】——————

We used the geolocation API for this one

CODE: https://codepen.io/NFuego24-7/pen/NWprbYa



### REVIEW

#### Good to know

HELPER FUNCTION:
Automates a task we'll be doing several times; taking an response and parsing it with JSON
Also lets us plug in our own custom error message- the default is set if you don't feel like it

```js
function getJSON(url, errorMSG = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(errorMSG);
    return response.json();
  });
}
```

#### Bad Request Vs Dropped Connection

If you make a fetch request that turns no results or makes no sense, it won't be rejected
The only way to get a promise rejected is by losing connection 

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210514005103462.png" alt="image-20210514005103462" style="zoom:83%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210514005216501.png" alt="image-20210514005216501" style="zoom:83%;" />
>
> LEFT: made a fetch request to pull info about a country named "fake name" (bad request)
> RIGHT: made a fetch request to pull info about "Egypt"
>
> Neither promise is rejected

#### Error Handling with Custom Messages

We can use the response object's "ok" KVP to reject the promise ourselves manually

#### Practical Example

In the previous subsection, we learned how to make our own error messages, and how to reject a promise when we feel circumstances are not up to our standards

CHALLENGE DESCRIPTION:

Take the code from Link 1; it shows off info regarding a country and its neighbor
Create intuitive error messages for the following 2 scenarios:

| possible fuckups | reason                    | desired error message                   |
| ---------------- | ------------------------- | --------------------------------------- |
| error 1          | Nation 1 does not exist   | "Invalid country chosen for research"   |
| error 2          | Nation 1 has no neighbors | "This country has no bordering nations" |

STARTER CODE:	  						https://jsfiddle.net/JasonXtuyotech/j0xhzbos/2/
FINAL REFACTORED CODE:	 	https://jsfiddle.net/JasonXtuyotech/z3gcbrLj/3/

Important JS Code: (will be refactored)

```js
function multiNationData(nation) {
  let request = fetch(`https://restcountries.eu/rest/v2/name/${nation}?fullText=true`)
    .then(response => {
      if (!response.ok) throw new Error('Invalid country chosen for research');
      return response.json();
    }) // NATION 1
    .then(data => {
      renderData(data[0]); // display first country data
      let neighbor = data[0].borders[0];
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
    })
    .then(response2 => {
      if (!response2.ok) throw new Error("This country has no bordering nations");
      return response2.json();   
    }) // NATION 2
    .then(data2 => renderData(data2))
    .catch(err => alert(`CRAP! ${err}`));
}
```

Let's test out 3 scenarios to see if our code works (it does)

```js
// TESTS: Try 1 at a time
multiNationData('Nepal'); // has a neighboring nation
multiNationData('Naur'); // doesn't exist
multiNationData("Australia") // has no neighbors
```

Nepal: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210514022423223.png" alt="image-20210514022423223" style="zoom:50%;" /> 	

Naur:  ![image-20210514022551114](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210514022551114.png) 	Australia: ![image-20210514022627252](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210514022627252.png)

REFACTORED VERSION:

- We can move the code that parses the JSON data and renders visuals for a certain country into a function. 
- We can even use a custom error message for each time we call it. That'll shorten our code and make the chain look less long
- Our `getJSON` function returns a promise. 
  It's why you see 2 returns in 1 helper ƒ()

```js
function getJSON(url, errorMSG = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(errorMSG);
    return response.json();
  });
}
//———————————————————————————————————————————————
function multiNationData(nation) {
  const request = getJSON(
    `https://restcountries.eu/rest/v2/name/${nation}?fullText=true`,
    'Invalid country chosen for research'
  ) // get JSON data for nation 1
    .then(data => {
      renderData(data[0]); // display first country data
      let neighbor = data[0].borders[0];
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbor}`,
        'This country has no bordering nations'
      ); // get JSON data for nation 2
    })
    .then(data2 => renderData(data2))
    .catch(err => alert(`CRAP! ${err}`));
}
multiNationData('Nepal');
// multiNationData('Naur');
// multiNationData('Australia');
```



# AsyncJS: fetch() + Async/Await

In the 2 previous chapters, we learned about XML requests, the fetch API, and chaining promises with `then()`, `catch()`, and `finally()`

ES2017 introduced an even easier way to consume promises compared to any of the aforementioned methods. 

————————————————————【 Async JS Tips 】—————————————————————————

GENERAL PROBLEM SOLVING ADVICE

- Try to solve a problem using whichever method's easiest, then refactor later
- If something doesn't work, check where your `await` is located, and if you forgot the `async` on your function
- You can create an array of pending promises with map()

RULES OF THUMB

- Async functions will always return a promise- set promise's fulfillment value with return
- If something returns or is a promise, you can attach a then() chain to it
- You can use immediately resolved or rejected promises for then() chains as well

CONNECTING PROMISES TO THE GLOBAL SCOPE (options)

1. Use an async IIFE
2. Add a then() chain to your async function invocation on the global scope
3. If you have an array of promises, use a promise combinator

### Checking for Local Files 

We can use the fetch API or even XMLHttpRequest to see if local files are present in the folder you're working in

#### Check if a File is Present w/ fetch

- The pending promise will be settled eventually and return a value of true or false. 
- T/F depends on if the path you provide the function leads to a file that exists

```js
async function isFileHere(pathString) {
  const response = await fetch(pathString);
  console.log(response.ok); // helper to see what the result is
  return response.ok; // returns a pending promise with value of T/F
}
//—————————————————————【tested】——————————————————————————
isFileHere('index.html');  		//OUTPUT: true, unless you aren't using index.html
isFileHere('indexhhvfv.html');  //OUTPUT: false
```

REMEMBER WHEN YOU USE THIS:

1. You will need to delete the helper console.log line
2. Find a way to use the pending promise elsewhere- explained in depth in this chapter



### Consuming Promises with Async/Await

What you see below is an asynchronous function- it runs in the background while performing the code inside of it. Once finished, it returns a promise

```js
const fName= async function(){
   // async expression 
} 
async function fName(){
  // async declaration  (still has hoisting privileges)
}
```

EXAMPLE: Prove this type of function's asynchronous

```JS
const testF = async function (nation) {
  const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${nation}?fullText=true`
  );
  console.log(response); // not JSON parsed yet btw
};
testF('aruba');
console.log('testF should go first if its not asynchronous');
```

![image-20210515165952119](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210515165952119.png)

Inside, you're allowed to have 1 or more await statements
Use await every time you make a fetch API request; regular operations D.N need one

- The await statement stops the execution of code until the promise is settled
  Settled can mean either "fulfilled" or "rejected"
- We don't care if the code gets halted for long- none of this takes place on the main thread of execution anyway (see theory)

#### Why this Exists

- Async/await is just syntactic sugar over the typical promise chaining we do using the `then()` method. 
- The whole point is to create asynchronous functions that look like regular synchronous ones
- You can chain promise together with new `await` variables, and they don't even have to be linked one after the other directly. You can perform other operations in between

```js
const test1 = async function () {
  const response = await fetch('link');
  console.log(response);
};
// SAME AS...
const test2 = function () {
  const result = fetch('link').then(response => console.log(response));
};
```

#### How to Consume a Promise

Instead of chaining then() methods over and over, define a new variable, and await something else

EXAMPLE: Parse your fetchAPI data with JSON

```js
const test1 = async function () {
  const result = await fetch(
    'https://restcountries.eu/rest/v2/name/Peru?fullText=true'
  );
  let parsedResult = await result.json();  //store promise value in new var 
  return parsedResult[0] // RETURN LINE
};
console.log(test1()) 
```

We don't have to have a return statement in our async function. 

- If you don't it'll return a promise with an undefined value

- If you do return something, it'll return a promise with the value you specified in the return statement

  Comment out return line:  ![image-20210515215408179](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210515215408179.png)

Leave return line in there: ![image-20210515215521317](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210515215521317.png)

#### Compare Async/Await to then() Chaining

Let's compare 2 solutions for the same problem; render country data based on your current coordinates

SOLUTION 1: https://codepen.io/NFuego24-7/pen/NWprbYa?editors=0010
SOLUTION 2: https://codepen.io/NFuego24-7/pen/OJpXmNN
Solution 2 has no error handling while solution 1 does... just so you know

Abstracted Utility functions for both solutions:

`renderData `- creates HTML elements that show the data we supply it

`getJSON` - Performs a fetch API request and returns the data parsed by .json(). Can also provide a custom error message	

`getPosition` - Returns an object containing current location data. Extract the latitude and longitude KVP's yourself	

#### SOLUTION 1: Async/Await

- This version lacks error handling and is in desperate need of refactoring, but it's good to show how linking promises works with Async/Await
- We'll add manual error handling in the next lecture

```js
const request1 = async function () {
  //# Geolocation API: Get current coords
  const locationObj = await getPosition();
  const { latitude, longitude } = locationObj.coords;
  //# Reverse Geocode API: Find country name based on current coords
  const nationObj = await fetch(
    `https://geocode.xyz/${latitude},${longitude}?geoit=json`
  );
  const nationObjParsed = await nationObj.json();
  //# REST Countries API: Get info on country based on the country name
  const nationInfo = await fetch(
    `https://restcountries.eu/rest/v2/name/${nationObjParsed.country}?fullText=true`
  );
  const nationInfoParsed = await nationInfo.json();
  //# Render data with country info (DOM Manip)
  renderData(nationInfoParsed[0]); // is an array containing an obj
  // Helpers to see what's going on
  console.log(nationObjParsed);
  console.log(nationInfoParsed[0]);
};
request1();
```



#### SOLUTION 2: .then() chain

```js
function whereAmI(lat, long) {
  let request = getPosition()
    .then(posit => { 
      //# Geolocation API: Get current coords
      console.log(posit);
      const lat = posit.coords.latitude;
      const long = posit.coords.longitude;
      return [lat, long]; // return coords
    })
    .then(coords => { 
      //# Reverse Geocode API: Find country name based on current coords
      let [lat, long] = coords;
      return getJSON(
        `https://geocode.xyz/${lat},${long}?geoit=json`,
        'Too many reloads'
      );
    })
    .then(parsedData =>return parsedData.country)
    .then(nation => { 
      //# REST Countries API: Get info on country based on the country name
      //# Render data with country info (DOM Manip)
      return getJSON(
        `https://restcountries.eu/rest/v2/name/${nation}?fullText=true`
      ).then(data => renderData(data[0])); // display first country data
    })
    .catch(errMSG => console.error(errMSG));
}

whereAmI();
```



### Error Handling with "try catch" Statements

HOW IT WORKS:

- We can't use `.catch()` anymore since we have nothing to chain it to, so instead we'll rely on a "try catch" statement
- The "try catch" statement is often used to catch errors in async functions, despite the fact that they existed way before even promises did
- The catch part of "try catch" is a method with a built in parameter-m the error object whose message property will come in handy

SIMPLE DEMONSTRATION: Intentionally cause an error

```js
try {
  const val = 10;
  val = 4;
} catch (err) {
  console.error(err.message); // simply states what's wrong
  console.error(err); 		  // provides more details on where the error transpired
}
```

![image-20210516000734115](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210516000734115.png)

- If we did this on the global scope, we'd get the `console.error(err)` output
- If our try block had no errors, the catch block wouldn't do anything - which is fine since we're just learning how to manage potential errors anyway
- We can make anything happen inside our catch block; we can go beyond simple error logs and even do something extra like DOM manipulation to illustrate what's wrong

#### Use Try Catch to Handle Errors

The catch block will act just like a `.catch()` method at the end of a promise chain with `.then()`. Inside there, you define what should happen when an error occurs

Throw new errors at code locations where there's potential for things to go wrong

EXAMPLE:

- In this example, we feed a function a country name and expect it to log its info  
- If we supply a name of a country that doesn't exist, the response object will have `status: 404` and `ok:false` as KVP's inside. 
- Use this to write a condition and define an error with a customized message

```js
async function countryData(nation) {
  try {
    const info = await fetch(
      `https://restcountries.eu/rest/v2/name/${nation}?fullText=true`
    );
    console.log(info); // take a look at the response object
      
    if (!info.ok) throw new Error('Invalid country selected');
    const parsedInfo = await info.json();
    console.log(parsedInfo[0]); // desired end result
  } catch (err) {
    console.error(err); // display your custom error message
    // Can make virtually anything happen 
  }
}
countryData('Canad');
```

![image-20210516130114071](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210516130114071.png)

REFACTOR:

```js
function getJSON(url, errorMSG = 'Something went wrong') {
  // feed it the fetch URL, then your customized error message
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(errorMSG);
    return response.json();
  });
}
```

- Use our custom `getJSON()` function from last chapter- automates JSON parsing and custom error messages
- Can eliminate a lot of repetitive actions in larger examples (here its not as noticeable)

```js
async function countryData(nation) {
  try {
    const info = await getJSON(
      `https://restcountries.eu/rest/v2/name/${nation}?fullText=true`,
      'Invalid country selected' 
    );
    console.log(info[0]); // desired end result
  } catch (err) {
    console.error(err); // display your custom error message
    // Can make virtually anything happen
  }
}
countryData('Canad');
```

POSSIBILITIES GOING FORWARD:

- You can do much more than just use `console.error()` for errors if you want. 
- You can use DOM manipulation to add new webpage elements if you wanted to- the possibilities are endless as long as you define them in the catch block
- It'd be wise to look up when certain API's reject promises- so can code useful error messages for users

![image-20210516010551039](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210516010551039.png)

#### Previous Lesson Example with Error Handling

We used `getJSON()` here as well

```js
async function request1() {
  try {
    //# Geolocation API: Get current coords
    const locationObj = await getPosition();
    const { latitude, longitude } = locationObj.coords;
    //# Reverse Geocode API: Find country name based on current coords
    const nationObj = await getJSON(
      `https://geocode.xyz/${latitude},${longitude}?geoit=json`,
      'Too many requests per second'
    );
    //# REST Countries API: Get info on country based on the country name
    const nationInfo = await getJSON(
      `https://restcountries.eu/rest/v2/name/${nationObj.country}?fullText=true`,
      'Too many requests per second'
    );
    //# Render data with country info (DOM Manip)
    renderData(nationInfo[0]); // is an array containing an obj
  } catch (err) {
    console.error(`💥 ${err} 💥`);
    renderError(`💥 ${err} 💥`);
  }
}
request1()
```



### Immediately Invoked Function Expressions

- Immediately invoked function expressions (IIFE) are only executed once then never again- they just disappear
- This type of technique is needed in asynchronous JS (specifically async/await)

To create an IIFE, just type out a regular function expression, remove the variable name, surround it in brackets(), then call it immediately afterwards:

```js
const reusable = function () {
  console.log('this can run several times'); // ƒ() expression
};

(function () {
  console.log("this function's a one-off");	//IIFE
})()	// called it with () after the entire function is wrapped in brackets
```

![image-20210322235859245](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210322235859245.png)

#### Why this was Relevant Pre-ES6

- In ES5 and earlier versions, we relied on using `var` to initialize our variables. 
- Var was not block scoped, meaning that you could access variables on the global scope even when they were defined inside blocks. They are however, function scoped

```js
const reusable = function () {
  var aaa= "hi"
  console.log('this can run several times');
};
console.log(aaa); //OUTPUT: Error message
```

IIFEs were a way to run a function once while keeping variable data private from other scopes. Now that we have `let and const` to initialize, this isn't needed as much. It does still play a role in asynchronous JS and a few other niche situations



### Returning Values from Async Functions (P1)

By default, asynchronous functions will always return a promise. 

- What you specify in the sync/Await function's return line will be the fulfilled value of that promise. 
- It will not however, return the fulfilled value right away- the asynchronous runs in the background AFTER all global code, remember?

FOLLOW ALONG WITH THIS: https://codepen.io/NFuego24-7/pen/GRWNZZa?editors=0010

#### Problem: AsyncF's return Promises

|                                              | Promise Value    |
| -------------------------------------------- | ---------------- |
| pending promise (with/without a return line) | undefined        |
| resolved promise with a return line          | return `content` |
| resolved promise with no return line         | undefined        |

```js
// STARTER CODE
async function countryData(nation) {
  try {
    const info = await getJSON(
      `https://restcountries.eu/rest/v2/name/${nation}?fullText=true`,
      'Invalid country selected'
    );
    return { // value of promise if fulfilled
      capital: info[0].capital,
      name: info[0].name,
      code: info[0].cioc,
    };
  } catch (err) { console.error(err) }
}
```

EXAMPLE: Fetch API call to retrieve country data

```js
//—————————————————————【 TEST 1 】——————————————————————————
console.log("MSG 1: Test about to begin");
console.log(countryData('Canada')); // at start, this returns a pending promise
console.log("MSG 3: Test complete");
```

![image-20210516155746187](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210516155746187.png) ![image-20210516155858483](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210516155858483.png)

LEFT PHOTO: 

- As soon as the code executes, the returned value of the async function is just a pending promise. 

RIGHT PHOTO: 

- If you click the DDM for that promise, you can see the settled value. 
- Don't be fooled, this value was derived AFTER the global code was finished parsing
  Asynchronous code is always executed in the callstack AFTER global code
- We wouldn't be able to use the promise's fulfilled value in our global code anywhere 
  Not in the code's current state anyway

THE PROBLEM:

Replace the test 1 code with this:
Understand that we can't use the value of a pending promise

```js
//—————————————————————【 TEST 2 】——————————————————————————
console.log('MSG 1: Test about to begin');
let result = countryData('Canada'); // pending promise
console.log(result.capital); 
```

![image-20210516160720726](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210516160720726.png)

So, our async code does not block the execution of the global code. This is good for speed, but it means we can't know what the function's return value will be at runtime

#### Fixing the Returned Promise Issue

- We've established that using `return` in an async function is not enough to get us useable values- but there is an effective workaround.
- Use `.then()` to return the promise's fulfilled value 
- You're actually free to use then(), catch(), and finally() on async function calls (not their declarations)
- After that, you can use return values on the `then()` method's scope to code actions that should occur after the promise is fulfilled

```js
//—————————————————————【 TEST 3 】——————————————————————————
console.log('MSG 1: Test about to begin');
countryData('Canada').then(returnObj => {
  console.log(returnObj);
  // OPTION 1: You can use returned promise values anywhere in this then() block
});
console.log('MSG 2: Test complete');
```

![image-20210518212257659](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210518212257659.png)

#### Error Handling with Returned Values

PROBLEM DESCRIBED IN DETAIL:

- When you add a then() to the end of an async function call, the actions coded inside its block will be executed regardless if your promises is rejected or resolved
- Even adding a catch() method after your then() will still allow the then() block to be executed without the information you'd need from a resolved promise
- FOR THE RECORD, our starter code had a catch() method on it as well. 
  This one's added onto the async function's call (not the initial declaration)

```js
//—————————————————————【 TEST 4 】——————————————————————————
console.log('MSG 1: Test about to begin');
countryData('Canad') // spelled the nation's name wrong to get a rejected promise 
  .then(returnObj => {
    console.log(returnObj); // LINE 80
    // OPTION 1: You can use returned promise values anywhere in this then() block
  })
  .catch(err => console.error(err));
console.log('MSG 2: Test complete');
```

![image-20210518213613546](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210518213613546.png)

The `console.log()` inside our then() block still ran. If we ran more complex operations in there, we'd have some interesting looking bugs right now

SOLUTION:

- Use `throw errorObjectName` inside the catch function attached directly to your async function's initial declaration. 
- It terminates the statements after it, and will pass control to the first catch block in the call stack

```JS
// STARTER CODE CHANGED BY ONE LINE (<>)
async function countryData(nation) {
  try {
    const info = await getJSON(
      `https://restcountries.eu/rest/v2/name/${nation}?fullText=true`,
      'Invalid country selected'
    );
    return {
      // Fullfilled value of promise
      capital: info[0].capital,
      name: info[0].name,
      code: info[0].cioc,
    };
  } catch (err) {
    throw err; // !!! stops then() execution if our promise gets rejected !!!
  }
}
//—————————————————————【 TEST 5 】——————————————————————————
console.log('MSG 1: Test about to begin');
countryData('Canad') // spelled the nation's name wrong to get a rejected promise
  .then(returnObj => console.log(returnObj));
console.log('MSG 2: Test complete');
```

![image-20210518214731001](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210518214731001.png)

- Nice! Our then() block no longer runs when our promise gets rejected. 
- Keep in mind that having catch() on both the function declaration and the function call will lead to duplicate error handling. 
- That's why I removed the declaration's catch block

### Returning Values from Async Functions (P2)

#### Promise Methods on Async Functions

You are actually free to use all 3 major promise methods on the tail end of an async function

|              | When's each method goes off                  |
| ------------ | -------------------------------------------- |
| `.then()`    | only if the promise is resolved successfully |
| `.catch()`   | only if the promise is rejected              |
| `.finally()` | Fires no matter what the promise result is   |

EXAMPLE:

Look back at test 5: ![image-20210518214731001](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210518214731001.png)

Maybe we want MSG 2 to be executed after our async function. Make it happen with the finally() method, which executes even after a promise gets rejected 

```js
async function countryData(nation) {
  try {
    const info = await getJSON(
      `https://restcountries.eu/rest/v2/name/${nation}?fullText=true`,
      'Invalid country selected'
    );
    return {
      capital: info[0].capital,
      name: info[0].name,
      code: info[0].cioc,
    };
  } catch (err) {
    throw err; // stops then() execution if our promise gets rejected
  }
}
//—————————————————————【 TEST 6 】——————————————————————————
console.log('MSG 1: Test about to begin');
countryData('Canad') // spelled the nation's name wrong to get a rejected promise on purpose
  .then(returnObj => console.log(returnObj))
  .catch(err => console.error(err)) // NEEDED TO MAKE THIS WORK
  .finally(() => console.log('MSG 2: Test complete'));
```

![image-20210518220206080](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210518220206080.png)

I'm not sure why, but to get MSG 2 to come after the error object, I had to add a catch() block to the function call. Probably has something to do with `throw err` and one of the catch blocks being in the callstack first 

If I remove it, I get this:

![image-20210518220609993](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210518220609993.png)

#### AsyncF's calling other AsyncF's

Although we're free to use then, catch, and finally on them, it betrays the whole reason the async function exists in the first place. 

Async functions were created to move us away from method chaining, so relying on them to use our outputs is a tad frustrating

- To remedy this, you can replace all the method chaining simply by creating new async functions that call other async functions- the returned value of an async function is a promise anyway
- A more professional method would be to create an asynchronous IIFE
  Creating a brand new async ƒ() just to invoke another would clutter up our scope
  IIFE's disappear once they finish what they're meant to do

EXAMPLE:

We're refactoring `countryData()`'s call on the global scope by replacing the method chain with an async-IIFE

```JS
async function countryData(nation) {
  try {
    const info = await getJSON(
      `https://restcountries.eu/rest/v2/name/${nation}?fullText=true`,
      'Invalid country selected'
    );
    return {
      // Fullfilled value of promise
      capital: info[0].capital,
      name: info[0].name,
      code: info[0].cioc,
    };
  } catch (err) {
    throw err; // stops then() execution if our promise gets rejected
  }
}
//—————————————————————【 TEST 7A: 】——————————————————————————
console.log('MSG 1: Test about to begin');
countryData('Canada') // spelled the nation's name wrong to get a rejected promise
  .then(returnObj => console.log(returnObj))
  .catch(err => console.error(err)) // NEEDED TO MAKE THIS WORK
  .finally(() => console.log('MSG 2: Test complete'));
```

Test 7A Actions List...

- If promise is fulfilled, log the fulfillment value
- If promise is rejected, show the error object- which should have 'Invalid country selected' as an error message (custom msg taken care of by `getJSON()`)
- Regardless of what happens, log `'MSG 2: Test complete'`

SOLUTION:

```js
//—————————————————————【 TEST 7B: 】——————————————————————————
(async function () {
  console.log('MSG 1: Test about to begin');
  try {
    const results = await countryData('Canada');
    console.log(results); // log the fulfillment value
  } catch (err) { 
      console.error(err) 
  }
  console.log('MSG 2: Test complete');
})();
```

Anything above the try/catch will execute BEFORE the promise gets settled
Anything below occurs AFTER the promise is settled- regardless of outcome

### Error Flow across Multiple Nested Async Functions

When we use async functions inside of other async functions, we need to know exactly where an error will be handled if something goes wrong in one of them

STRATEGY:
Pass your rejected promise upwards to the async function that contains the first
Pass the rejected promise up again if you don't wish to handle it there...etc
Settle on 1 catch block where you DO want to handle it

```js
catch(err){
    throw err; // makes error handling the next parent async ƒunction's problem
}
```

#### Example from Forkify Project

controller.js has an async function `controlRecipes()`
Inside of it is another async function from model.js, which is named `loadRecipes()`

![image-20210705124813364](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210705124813364.png)

![image-20210705125146222](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210705125146222.png)

#### Relation to Architecture

Architectures will force/encourage you to handle certain responsibilities in separate modules

- Error handling is usually part of UI rendering, since we want users to get a visual indication when something goes wrong
- This typically means generating new HTML which counts as DOM manipulation

EXAMPLE: 
MVC handles error in controller module, using functions from view module

- If you were following the MVC architecture for instance, you'd want to handle the errors with functions in the view module
- The catch block is allowed to be in another module- controller in this case
  Its job is to call render functions for controller and model modules
- This is actually what we did in the above example with `recipeView.renderError()`
  `renderError()` is a function in the view module, but we call it in the controller module



### Returning Promises in Parallel

The whole point of promises in general is to stop the code from holding itself up when we need asynchronous tasks done. So, why would we want to make our asynchronous code stop and wait for other asynchronous code when it's not necessary?

TLDR: You should make different async tasks run at the same time, so long as they are not dependent on one another

THEORETICAL EXAMPLE:
Task A: AJAX Call
Task B: AJAX call		Task C: AJAX call dependent on task B

Task A/B should run concurrently, while only task C should wait for task B to finish
Making C wait for B, and B wait for A would slow things down

#### Promise.all()

HOW IT WORKS:

```JS
const variName= await Promise.all([])
```

- This will take an array of promises, and return a single new promise
  The new one will run all the promises in the array at the same time
- If 1 promise in the array rejects, then all promises will be treated as if they got rejected as well ("Promise.all short circuits")
- Works with Async/Await and then() chaining

#### Comparing Parallel vs Sequential Execution

We have 3 AJAX calls here. See how fast our page loads when you make each call wait on the previous one VS when you run them all in parallel

SEQUENTIAL:

```js
async function get3Countries(c1, c2, c3) {
  try {
    // Destructure the array of objects right away this time
    const [data1] = await getJSON(
      `https://restcountries.eu/rest/v2/name/${c1}?fullText=true`,
      'Invalid nation selected'
    );
    const [data2] = await getJSON(
      `https://restcountries.eu/rest/v2/name/${c2}?fullText=true`,
      'Invalid nation selected'
    );
    const [data3] = await getJSON(
      `https://restcountries.eu/rest/v2/name/${c3}?fullText=true`,
      'Invalid nation selected'
    );
    console.log([data1.capital, data2.capital, data3.capital]);
  } catch (err) {
    console.error(err);
  }
}
get3Countries('Portugal', 'Canada', 'Mexico');  
//OUTPUT: [ "Lisbon", "Ottawa", "Mexico City" ]
```

![image-20210519020454042](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210519020454042.png)

In total, our script takes a bit under 640 ms to load, and we can see the sequential AJAX calls need to wait on each other before they can begin execution themselves

PARALLEL SOLUTION 1: 

```JS
async function get3Countries(c1, c2, c3) {
  try {
    const paraPromises = await Promise.all([
      getJSON(
        `https://restcountries.eu/rest/v2/name/${c1}?fullText=true`,
        'Invalid nation selected'
      ),
      getJSON(
        `https://restcountries.eu/rest/v2/name/${c3}?fullText=true`,
        'Invalid nation selected'
      ),
      getJSON(
        `https://restcountries.eu/rest/v2/name/${c2}?fullText=true`,
        'Invalid nation selected'
      ),
    ]);
    // Create new array- fill it with the capital city of each nation
    console.log(paraPromises.map(a => a[0].capital));
  } catch (err) {
    console.error(err);
  }
}
get3Countries('Portugal', 'Canada', 'Mexico');  
//OUTPUT: [ "Lisbon", "Mexico City", "Ottawa" ]
```

![image-20210519025904578](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210519025904578.png)

Running things concurrently makes our script take a bit under 480ms to load. This is a noticeable improvement, and would be much larger if we were building a project on a medium to large scale

DISCLAIMER: You're not forced into defining promises directly in the promise array

- Feel free to assign promises to variables, then place them inside `Promise.all([])`
- Just remember to NOT have `await` be a part of their declaration syntax!

![image-20210519154656876](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210519154656876.png)

### Promise Combinators: race, allSettled, any

The Promise.all() method is considered to be a combinator since it lets us combine multiple promises into one. There are more methods that accomplish the same thing, with some minor differences

|                        | Effect                                                       |
| ---------------------- | ------------------------------------------------------------ |
|                        | Each takes an array of promises & combines them into 1...and |
| `Promise.all()`        | The new one will run all promises in the array at the same time.<br />If 1 promise rejects, they all reject (short circuit) |
| `Promise.allSettled()` | Returns results of all settled promises, rejected or fulfilled. (Never short circuits) |
| `Promise.race()`       | The single fastest promise in the array will get its value returned and win the race. The winner can be a rejected or fulfilled promise |
| `Promise.any()`        | Returns whichever fulfilled promise finishes first, just like Promise.race. Difference is, rejected promises are ignored. Gives an error if all promises in array are rejected |

JUST SO WE'RE CLEAR:

- Every combinator takes an array of promises then combines them into a new one
- You don't have to use async-IIFE's for any of these, but they're useful for creating quick nameless examples. Can use async functions, async IIFE's, or then chains

UTILITY FUNCTION

```JS
// TIMEOUT FUNCTION
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => reject(new Error('Request took too long!')), sec * 1000);
  });
};
```

Rejects a promise after a specified number of seconds- does not resolve, ever

#### Promise.race

The promise returned by Promise.race is settled as soon as one of the input promises settles. The settled promise can be rejected or fulfilled

We say that Promise.race short circuits, regardless if the returned value is rejected/fulfilled

```js
(async function () {
  try {
    const paraPromises = await Promise.race([
      getJSON(
        `https://restcountries.eu/rest/v2/name/Portugal?fullText=true`,
        'Invalid nation selected'
      ),
      getJSON(
        `https://restcountries.eu/rest/v2/name/Canada?fullText=true`,
        'Invalid nation selected'
      ),
      getJSON(
        `https://restcountries.eu/rest/v2/name/Mexico?fullText=true`,
        'Invalid nation selected'
      ),
    ]);
    // Create new array- fill it with the capital city of each nation
    console.log(paraPromises[0].capital); 
  } catch (err) {
    console.error(err);
  }
})();
//OUTPUT: Random pick between Ottawa, Lisbon, Mexico city
```

TEST: Spelled Mexico wrong but all other fetch requests were left correct

![image-20210519032511059](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210519032511059.png) ![image-20210519032708264](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210519032708264.png)

#### Use Cases for Promise.race

Promise.race is great for preventing never-ending or long running promises
If your user has bad connection, a fetch request may take too long to even be useful.

EXAMPLE: 

- Create a timeout promise that auto-rejects after a certain span of time passes
  Add that promise to the Promise.race() array
- This will make it so the promise will get rejected if it takes longer than the time you specify in your timeout promise
- Create a solution using 2 methods; then chaining, and async IIFE's

```js
//—————————————————————【 SOLN 1 】——————————————————————————
Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
  timeout(0.1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));
//—————————————————————【 SOLN 2 】——————————————————————————
(async function () {
  try {
    const res = await Promise.race([
      getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
      timeout(0.1),
    ]);
    console.log(res[0]);
  } catch (err) {
    console.error(err);
  }
})();
```

![image-20210519131843983](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210519131843983.png) ![image-20210519132234262](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210519132234262.png)

The result of the race can change. Try reloading the page and you'll notice that the AJAX call doesn't always beat our timeout function

#### Promise.allSettled

Promise.allSettled behaves like Promise.all, except it never short circuits. 

- It will take an array of promises, turn them into 1, then returns the results of all the promises that are settled- regardless of outcome
- TLDR: It returns the results of each settled promise, no matter what

EXAMPLE: Return 2 rejected promises, and a fulfilled one

```js
(async function () {
  try {
    const res = await Promise.allSettled([
      // Rejected, fulfilled, rejected
      getJSON(`https://restcountries.eu/rest/v2/name/itaaa`, 'Invalid country'),
      getJSON(`https://restcountries.eu/rest/v2/name/mexico`,'Invalid country'), 
      timeout(0.1), 
    ]);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
})();
```

![image-20210519145859070](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210519145859070.png)

#### Promise.any

This was part of ES2021, so the support is only 84% AO-2021

It returns whichever fulfilled promise finishes first, just like Promise.race
The difference is, rejected promises are ignored

```js
(async function () {
  try {
    const res = await Promise.any([
      getJSON(`https://restcountries.eu/rest/v2/name/italy`, 'Invalid country'),
      getJSON(`https://restcountries.eu/rest/v2/name/mexico`,'Invalid country'),
      timeout(0.1),
    ]);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
})();
```

Possible outputs: ![image-20210519145205318](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210519145205318.png) ![image-20210519145226403](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210519145226403.png)

If all promises in array reject: ![image-20210519145308129](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210519145308129.png)

### Arrays of Promises & Async Iteration

The await keyword can be used inside async functions in more creative ways than just AJAX calls. 
SOURCE: https://www.youtube.com/watch?v=vn3tm0quoqE (after 10 min mark)

#### TLDR

All the following techniques must be used inside an async function, or else await wouldn't work AO-2021

|                                | Use case                                                     |
| ------------------------------ | ------------------------------------------------------------ |
| map w/ an async handler        | Create an array of pending promises that execute at the same time |
| forEach with an async handler  | try to avoid                                                 |
| for loops with await inside {} | Iterate through an array of promises, and have each proceeding entry wait for the previous one to finish (sequential) |
| for await loops                | Wait for an array of promises to resolve then loop over the entries afterwards |
| if await conditionals          | Wait for the settled value of a pending promise and use it in an if() condition |

I'm unsure why, but from what I'm reading, you shouldn't use async forEach: https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop

#### Starter Code

Our `getFruit()` function builds a new promise that returns fruit emojis if you supply the correct name. If you don't, it returns undefined (works like an API)

```JS
const getFruit = async title => {
  const fruits = {pineapple: '🍍', peach: '🍑', strawberry: '🍓',plantain: '🍌'};
  return Promise.resolve(fruits[title]);
};

const fruitNames = ['peach', 'pineapple', 'grape', 'plantain', 'strawberry'];
```

- With API's we'd typically use fetch() or rely on a custom function like `getJSON()`
- With our mock API here, just call the function and have it return a promise
  `getFruit(Pineapple)` will return a promise just like fetch API requests would

#### map() with an Async Handler

PURPOSE

- Create a brand new array of promises when you combine map() with an async function that uses await. Be aware that all the promises in that array execute concurrently
- If you need the promises in the array to run sequentially 1 after the other, you'll need to use a for loop with await inside the block

EXAMPLE: Create an array of emojis by calling a function that returns promises

The `emojiArray` variable will hold an array of promises that's  built by supplying `getFruit()` with an array of fruit names

Find a way to use our array of promises on the global scope

```js
// Create a new array of concurrently run promises, that perform AJAX calls 
const emojiArray = fruitNames.map(async name => {
  const emotes = await getFruit(name);
  return emotes;
});
console.log(emojiArray); 		// STATE 1: all pending (useless)

// HOW TO: Use our array of promises 
Promise.allSettled(emojiArray).then(fruitsArr => {
  console.log(fruitsArr); 		// STATE 2: objects containing our emojis
  fruitsArr = fruitsArr.map(obj => obj.value); 
  console.log(fruitsArr);	// STATE 3: emojis themselves
});
```

![image-20210519182002967](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210519182002967.png)

#### for Loops with await

PURPOSE

- Use these when you want to iterate through an array of promises, and have each proceeding entry wait for the previous one to finish
- Create a regular for loop inside an async function, then have `await` be used inside your for block (on the AJAX call you want to wait for, for example)

EXAMPLE: Recreate the map() example's solution, but fill the array sequentially instead of concurrently

```js
let emojiArray = [];
const replaceMap = async () => {
  for (let f of fruitNames) {
    // Wait for each iteration's promise to settle before moving on to the next
    const emote = await getFruit(f); 
    emojiArray.push(emote);
  }
  return emojiArray; // returns this array filled with pending promises
};

// Use our array of pending promises on the global scope 
replaceMap().then(fruitsArr => console.log(fruitsArr)); 
```

Doing things concurrently saves time (though there is always some variance w/results)

Concurrent map(): ![image-20210519190430668](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210519190430668.png)  Sequential for():  ![image-20210519190528558](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210519190528558.png)

#### for await Loops

PURPOSE: Wait for an array of promises to resolve then loops over them afterwards

DEMO 1: Try to loop over an array of pending promises normally and see what happens

```JS
const smoothie = fruitNames.map(async v => await getFruit(v));
console.log(smoothie); // array of pending promises

const fruitLoop = async () => {
  for (const emoji of smoothie) console.log(emoji);
};
fruitLoop();
```

As you can see, looping over an array of pending promises D.N return anything useful

![image-20210519223917269](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210519223917269.png)

DEMO 2: Loop over pending promises effectively

```js
const smoothie = fruitNames.map(async v => await getFruit(v));
console.log(smoothie); // array of pending promises

const fruitLoop = async () => {
  for await (const emoji of smoothie) console.log(emoji);
  //  ^^ just added "await"
};
fruitLoop();
```

![image-20210519224219699](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210519224219699.png)

#### if await Conditionals

PURPOSE: Wait for the settled value of a pending promise and use it in a conditional statement

DEMONSTRATION

```js
const smoothie = fruitNames.map(async v => await getFruit(v));
console.log(smoothie); // array of pending promises

const fruitGuess = async () => {
  if ((await getFruit('peach')) === '🍑') console.log('Looks peachy!'); // all 1 step
  else console.log('Wrong guess!');
};
fruitGuess()
```

ALTERNATIVE:

This isn't actually a new type of action at all. We learned how to do this in a slightly longer way when we first learned to consume promises with Async/Await:

```js
const smoothie = fruitNames.map(async v => await getFruit(v));
console.log(smoothie); // array of pending promises

const fruitGuess = async () => {
  let result = await getFruit('peach'); // wait for the API call
  if (result === '🍑') console.log('Looks peachy!'); // regular if
  else console.log('Wrong guess!');
};
fruitGuess();
```

———————————————————————【 ASIDE 】————————————————————————————

What happens when you use a regular if() on a pending promise without await

```js
const smoothie = fruitNames.map(async v => await getFruit(v));
console.log(smoothie); // array of pending promises

const fruitGuess = async () => {
  console.log(getFruit('peach'));
  if (getFruit('peach') === '🍑') console.log('Looks peachy!'); // NO AWAIT
  else console.log('Wrong guess!');
};
fruitGuess();
```

We guessed correctly, yet it says we guessed wrong

![image-20210519230718005](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210519230718005.png)

The comparison in your condition will always be inaccurate. You won't even get an error thrown back at you- the worst kind of bug

#### Coding Challenges 2 and 3

Both challenges ask you to complete the same thing. C2 asks you to use then() chaining, while C3 demands the use of Async/Await functions

PROBLEM DESCRIPTION

You are given a folder with an image folder inside: ![image-20210520054745710](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210520054745710.png)

Program the following behavior...

Load 1st image => 2s pause => hide 1st image => 2s pause
Load 2nd image => 2s pause => hide 2nd image

No HTML tags are set up to accommodate these images- you'll have to create new DOM elements yourself. Use the createElement method

Check out a local folder for the solutions: Async Challenge 2_3
Online version: 
https://drive.google.com/drive/folders/1TeQ2fHqO7-ZpyXSW4RowK1BfVjuVy-E7?usp=sharing



### Async Operation Filepath Problems

When we have asynchronous tasks integrated into our webpage, you may not be able to refer to certain images or videos present in your project folder (due to how bundling works)

Full Example: Commit named "Add icons to rendered recipe" in our forkify project

#### What's going on?

The pair of images below are for the forkify project I built during the last stretch of my JS training
The central JS file is within the src folder, and we're bundling with parcel

![image-20210629004517735](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210629004517735.png) ![image-20210629004531207](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210629004531207.png) ![image-20210629004832934](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210629004832934.png)

PROBLEM EXPLAINED:
When you bundle with parcel, it creates a distribution folder named "dist" which optimizes your code
It does the same thing with images, as you can see in image 3 

- If we need to reference an image somewhere in our code that involves performing actions post-loading (anything user-interactive, really), then we have a problem
- We can't know what parcel will name our new optimized image when someone else bundles on their machine

#### Solution

```js
import customName from 'url:<relative-filepath-to-orig-img>'
```

In our case...
We're in our central JS file inside the JS folder of src (keep in mind for the relative filepaths)

```js
// PLACE AT TOP OF JS FILE (use import variables where you'd use the old filepaths)
import favicon from 'url:../img/favicon.png'
import icons from 'url:../img/icons.svg'
import logo from 'url:../img/logo.png'
```

These strings are involved with a dynamic feature within our JS file...not HTML
When we press a button, we're fetching data asynchronously, then displaying it beside some icons

OLD: ![image-20210629005855127](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210629005855127.png)

NEW:  ![image-20210629014118273](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210629014118273.png)



#### Only needed for Dynamic Features

When it comes to HTML, refer to the old image and svg paths in your code.

- Most files get loaded when the webpage does anyway, so the bundler will convert the filepath to something new for you
- When it comes to dynamic features which only undergo AFTER the page is bundled/loaded, we need import statements like I showed earlier

### REVIEW Part 1: Basics

```js
const fName= async function(){
   // async expression 
} 
async function fName(){
  // async declaration  (still has hoisting privileges)
}
```

In async functions, you're allowed to have 1 or more await statements
Use await every time you make a fetch API request; regular operations D.N need one

- The await statement stops the execution of code until the promise is settled
  Settled can mean either "fulfilled" or "rejected"
- We don't care if the code gets halted for long- none of this takes place on the main thread of execution anyway (see theory)

#### Boiler Plate Setup

```js
const test1 = async function () {
  try {
    const result = await fetch(
      // FETCH API LINK HERE
    );
    console.log(result)
    if (!result.ok) throw new Error("CUSTOM ERROR MESSAGE"); // don't forget
    let parsedResult = await result.json();
    // DO WHAT YOU WANT WITH YOUR SUCCESSFULLY FETCHED DATA
  } catch (err) {
    console.error(err)
    // ACTIONS TO TAKE AFTER A PROMISE REJECTION WILL VARY
  }
};
test1();
```

Everything present in this snippet's try block can be done with our getJSON() helper function

- HOWEVER, it's important to understand the steps in detail 
- Plus we can avoid using our default error message when we can't think of one to use as argument 2

#### EXAMPLE 1: Parse your fetchAPI data with JSON

STEP 1. 
Make the fetch API request, which only rejects if we lose connection
Must await. Async operation

STEP 2.
Throw a custom error in case the API call is for a country that does not exist.
Created a custom error message, and the `throw` stops the rest of the try{} block from executing.
Last detail is important for avoiding strange visual bugs 

STEP 3. 
Parse the results with JSON so we can use them
Must await. Async operation

```js
const test1 = async function () {
  try {
    const result = await fetch(
      'https://restcountries.eu/rest/v2/name/Peru?fullText=true' // 1)
    );
    if (!result.ok) throw new Error("This country does not exist"); // 2)
    let parsedResult = await result.json(); // 3)
    console.log(parsedResult[0])
    return parsedResult[0]; // RETURN PROMISE (fulfilled value of a promise)
  } catch (err) {
    console.error(err)
  }
};
console.log(test1());
```

HOW "AWAIT" WORKS:

- Placing "await" before a line of code makes it wait for the previous await line to finish and return its promise (runs sequentially)
- Only place "await" in front of fetchAPI calls, JSON parsing, and other async tasks that lines will be dependent on

RETURN LINE:

- If you don't it'll return a promise with an undefined value

- If you do return something, it'll return a promise with the value you specified in the return statement


Comment out return line:  ![image-20210515215408179](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210515215408179.png)

Leave return line in there: ![image-20210515215521317](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210515215521317.png)



#### Try Catch Error Handling

- The catch block will act just like a `.catch()` method at the end of a promise chain with `.then()`. Inside there, you define what should happen when an error occurs
- Throw new errors at code locations where there's potential for things to go wrong

ERROR MESSAGES:

```JS
console.error(err.message); 	// simply states what's wrong
console.error(err); 	// provides more details on where the error transpired
```

![image-20210516000734115](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210516000734115.png)

POSSIBILITIES GOING FORWARD:

- You can do much more than just use `console.error()` for errors if you want. 
- You can use DOM manipulation to add new webpage elements if you wanted to- the possibilities are endless as long as you define them in the catch block

1. Look up when certain API's reject promises
2. The response object may contain a pre-built error message for rejected promises 
   Depends on the API, so check these objects out

#### Returning Values from Async Functions

- Thus far and even in the following example, we've only logged or displayed the info we've fetched.
   IRL, we'll need to access that information from a global/class scope
- If you're dealing with an array of Promises, you'll have to use a Promise combinator

OPTION 1: Chain then/finally/catch methods to an async function call. 

```js
async function countryData(nation) {
  try {
    const info = await getJSON(
      `https://restcountries.eu/rest/v2/name/${nation}?fullText=true`,
      'Invalid country selected'
    );
    return {
      // Fullfilled value of promise
      capital: info[0].capital,
      name: info[0].name,
      code: info[0].cioc,
    };
  } catch (err) {
    throw err; // stops then() execution if our promise gets rejected
  }
}
//—————————————————————【 TEST 7A: 】——————————————————————————
console.log('MSG 1: Test about to begin');
countryData('Canada') // spelled the nation's name wrong to get a rejected promise
  .then(returnObj => console.log(returnObj))
  .catch(err => console.error(err)) // NEEDED TO MAKE THIS WORK
  .finally(() => console.log('MSG 2: Test complete'));
```

![image-20210518220206080](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210518220206080.png)

Test 7A Actions List...

- If promise is fulfilled, log the fulfillment value
- If promise is rejected, show the error object- which should have 'Invalid country selected' as an error message (custom msg taken care of by `getJSON()`)
- Regardless of what happens, log `'MSG 2: Test complete'`

OPTION 2: Use async IIFE's to avoid chaining

```js
//—————————————————————【 TEST 7A: 】——————————————————————————
console.log('MSG 1: Test about to begin');
countryData('Canada') // spelled the nation's name wrong to get a rejected promise
  .then(returnObj => console.log(returnObj))
  .catch(err => console.error(err)) // NEEDED TO MAKE THIS WORK
  .finally(() => console.log('MSG 2: Test complete'));

//—————————————————————【 TEST 7B: 】——————————————————————————
(async function () {
  // Anything above try/catch will execute BEFORE the promise gets settled
  console.log('MSG 1: Test about to begin');
  try {
    const results = await countryData('Canada');
    console.log(results); // log the fulfillment value
  } catch (err) { 
      console.error(err) 
  }
  // Anything below try/catch occurs AFTER the promise is settled 
  // The promise can be accepted or rejected, and the lines here will still run
  console.log('MSG 2: Test complete');
})();
```



### REVIEW Part 2: Parallel Promises and Examples      

#### Running Promises in Parallel

If you have multiple promises that are not dependent on one another, then you should run them all at the same time instead of sequentially-to boost performance

Recommend reading this lesson to fully grasp

| OPTIONS                | Effect                                                       |
| ---------------------- | ------------------------------------------------------------ |
|                        | Each takes an array of promises & combines them into 1...and |
| `Promise.all()`        | The new one will run all promises in the array at the same time.<br />If 1 promise rejects, they all reject (short circuit) |
| `Promise.allSettled()` | Returns results of all settled promises, rejected or fulfilled. (Never short circuits) |
| `Promise.race()`       | The single fastest promise in the array will get its value returned and win the race. The winner can be a rejected or fulfilled promise |
| `Promise.any()`        | Returns whichever fulfilled promise finishes first, just like Promise.race. Difference is, rejected promises are ignored. Gives an error if all promises in array are rejected |



#### Arrays of Promises and Async Iteration

The await keyword can be used inside async functions in more creative ways than just AJAX calls. 
SOURCE: https://www.youtube.com/watch?v=vn3tm0quoqE (after 10 min mark)

TLDR

All the following techniques must be used inside an async function, or else await wouldn't work as of 2021

|                                | Use case                                                     |
| ------------------------------ | ------------------------------------------------------------ |
| map w/ an async handler        | Create an array of pending promises that execute at the same time |
| forEach with an async handler  | try to avoid                                                 |
| for loops with await inside {} | Iterate through an array of promises, and have each proceeding entry wait for the previous one to finish (sequential) |
| for await loops                | Wait for an array of promises to resolve then loop over the entries afterwards |
| if await conditionals          | Wait for the settled value of a pending promise and use it in an if() condition |

#### Async Challenge 2 and 3:

https://drive.google.com/drive/folders/1TeQ2fHqO7-ZpyXSW4RowK1BfVjuVy-E7?usp=sharing



### REVIEW Part 3: Every HTTP Request with fetch()

> This lesson is ripped directly from the Firebase chapter in my React Notes

#### CRUD Explained

Create Read Update Delete	(each operation a dedicated http method)

|        | purpose            | safety | idempotent<br />(nothing changes if you perform it multiple times) |
| ------ | ------------------ | ------ | ------------------------------------------------------------ |
| GET    | Read or fetch data | safe   | Yes                                                          |
| POST   | Create data        | unsafe | No                                                           |
| PUT    | Update data        | unsafe | Yes                                                          |
| DELETE | Delete data        | unsafe | Yes                                                          |

Safety?
GET is classified as safe because all a fetch request does is pull data from a hosted server. 
The server itself is left as it was originally afterwards

- Just because an http method is classified as unsafe does not mean we shouldn't ever use it
- The classification just implies that these operations make permanent changes



#### Simple Demo Functions

Keep in mind that none of these functions involve any error handling or pending/success/failure state management (can be helped with the useHttp hook)

> [firebase-practice/fetchFunctions.js](https://github.com/Jason2B3/firebase-practice/blob/master/src/components/fetchFunctions.js)		commit F1

> This is a snippet from Part 2 of our React notes (See the Firebase Chapter)
> The Firebase project is connected to jason2b3@gmail.com

GET: fetches all JSON file content

```react
const firebaseLink = "https://fir-http-34540-default-rtdb.firebaseio.com/data.json";

export const firebaseGET = async function (firebaseLink) {
  const pullData = await fetch(firebaseLink);
  if (!pullData.ok) throw new Error("No shows found in the search results");
  const parsedData = await pullData.json();
  console.log(parsedData);
  return parsedData;
};
```

DELETE: wipes the entire JSON file 

```react
const firebaseLink = "https://fir-http-34540-default-rtdb.firebaseio.com/data.json";

export const firebaseDELETE = async function (firebaseLink) {
  const deleteData= await fetch(firebaseLink, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify([]), // the argument doesn't seem to matter in this case
  });
  if(!deleteData.ok) throw new Error("deletion failed")
  console.log(deleteData)
};
```

POST: creates new data

```react
const firebaseLink = "https://fir-http-34540-default-rtdb.firebaseio.com/data.json";

export const firebasePOST = async function (firebaseLink, inp) {
  const postData = await fetch(firebaseLink, {
    method: "POST",
    body: JSON.stringify(inp), // the data we're storing
    headers: { "Content-Type": "application/json" },
  });
  if (!postData.ok) throw new Error("Sending cart data failed");
  return null;
};
```

PUT: Updates data if it already exists- if it doesn't it'll create new

```REACT
const firebaseLink = "https://fir-http-34540-default-rtdb.firebaseio.com/data.json";

export const firebasePUT = async function (firebaseLink, inp) {
  const putData = await fetch(firebaseLink, {
    method: "PUT", // update data in our database
    body: JSON.stringify(inp),
    headers: { "Content-Type": "application/json" },
  });
  if (!putData.ok) throw new Error("Sending cart data failed");
  console.log(putData);
  return null;
};
```



# Axios: fetch() but Easier

Axios is a 3rd party library that wraps over XMLHttpRequests in order to make them easier to work with
I already know fetch(), but I'll learn it since it's still popular

> TUTORIAL: 
> https://www.youtube.com/watch?v=qM4G1Ai2ZpE



### Installation & Advantages over fetch()

#### Install

METHOD 1: NPM or Yarn install

```
npm install axios
or...
yarn add axios
```

METHOD 2: Script Tag	(place above your primary js script tags)

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

#### Advantages over fetch

1. Data is automatically parsed from JSON to JS syntax after the request is made
   You won't need to parse it manually like fetch() requires
2. If Axios encounters an error, it'll automatically throw an error for you
   You don't need to manually throw an error yourself

- Fetch only auto-throws errors when a technical problem like a lost connection occurs
- Axios will throw one even if the request succeeds but we get an error code like 404 or 500 back
  Since error handling is so important, Axios removing the heavy lifting becomes a huge plus

In POST requests...

3. You can pass Axios JS data directly and it will automatically convert it to JSON for you
   When using fetch, you'll need `JSON.stringify` to manually convert JS → JSON
4. Axios will automatically detect what data you're appending and set the headers for you
   When using fetch, you'll need to specify headers manually

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211227192917115.png" alt="image-20211227192917115" style="zoom:80%;" />

#### When fetch is better 

1. Fetch lets you access the raw JSON response data when your request does not throw an error

- Axios does not allow this since it auto-parses the response into JS for you
- Fortunately you can access the response if your request throws an error
  Just use `catch(err) console.log(err.response)`

2. Fetch is built into JS while Axios is a dependency 

#### Overriding Axios Default Headers

- I just mentioned that Axios will automatically set headers so you don't have to
- If you absolutely must override its headers with ones you specify yourself, just add a 3rd argument to the Axios method

![image-20211227204141518](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211227204141518.png)



### then() chains + Async Await

#### Async Await: Demonstrate Advantages Part 1

Perform a simple fetch operation with Axios and fetch()
Handle errors with try/catch in case we feed the method a bad URL

with Axios

```js
const axiosGET = async function (url) {
  try {
    const response = await axios.get(url);
    // Code beyond this point gets ignored if an error occurs
    console.log(response.data);
  } catch (error) {
    console.error(error);
    console.log(err.response);
  }
};
```

with fetch()

```js
const fetchGET = async function (url) {
  try {
    const jsonResponse = await fetch(url);
    console.log(jsonResponse)
      
    // Must manually throw an error if something goes wrong
    if(!jsonResponse.ok) throw new Error(jsonResponse.statusText)
      
    // Must manually parse the response into JS to use properly
    const parsed= await jsonResponse.json();
    console.log(parsed)
      
  } catch (error) {
    console.error(error);
  }
};
```

#### then() Chains

We still maintain the benefits of Axios while then chaining

EXAMPLE: GET request from a mock API

```JS
const url= "https://reqres.in/api/users/2";
const axiosGET = function (url) {
  axios.get(url)
    .then((response) => {
      console.log(response) // check status codes/headers in here
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
      console.log(err.response);
    });
};
axiosGET(url);
```

![image-20211227175953195](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211227175953195.png)



### Every HTTP Request with Axios

We'll be using async await throughout this lesson since its modern and more convenient

> Mock API we use for testing:  https://reqres.in/
>
> It tells you what responses you get based on the type of request you make
> The request url is "https://reqres.in/" + "something else"

#### GET

```js
const axiosGET = async function (url) {
  try {
    const response = await axios.get(url);
    // Code beyond this point gets ignored if an error occurs
    console.log(response);
    console.log(response.data);
  } catch (error) {
    console.error(error);
    console.log(err.response);
  }
};
```

#### POST

- The second arg for `axios.post()` is a JS object which automatically gets converted to JSON
  This is the body KVP that fetch has
- Make sure the syntax in that object is in fact JavaScript, and not JSON (common mistake)

```js
const axiosPOST = async function (url) {
  try {
    const response = await axios.post(url, {
      name: "morpheus", // JS object here
      job: "leader",
    });
    // Code beyond this point gets ignored if an error occurs
    console.log(response)
    console.log(response.data);
  } catch (err) {
    console.error(err);
    console.log(err.response); // error response body (more info about error inside)
  }
};
```

#### DELETE

```JS
const axiosDELETE = async function (url) {
  try {
    const response = await axios.delete(url, {
      name: "morpheus",
      job: "zion resident"
    });
    // Code beyond this point gets ignored if an error occurs
    console.log(response)
    console.log(response.data);
  } catch (err) {
    console.error(err);
    console.log(err.response); // error response body (more info about error inside)
  }
};
```

#### PUT

```js
const axiosPUT = async function (url) {
  try {
    const response = await axios.put(url, {
      name: "morpheus",
      job: "zion resident"
    });
    // Code beyond this point gets ignored if an error occurs
    console.log(response)
    console.log(response.data);
  } catch (err) {
    console.error(err);
    console.log(err.response); // error response body (more info about error inside)
  }
};
```



#### PATCH

```js
const axiosPATCH = async function (url) {
  try {
    const response = await axios.patch(url, {
      name: "morpheus",
      job: "zion resident"
    });
    // Code beyond this point gets ignored if an error occurs
    console.log(response)
    console.log(response.data);
  } catch (err) {
    console.error(err);
    console.log(err.response); // error response body (more info about error inside)
  }
};
```



### Attaching Headers and Extras to Requests

Oftentimes you'll need specific data in order to make certain API calls- and you'll attach them in the header section of your request

- Axios creates headers automatically, so you'll have to override them if they absolutely must be something other than `headers: { "Content-Type": "application/json" }`
- Specify headers as argument 2 in GET requests, and argument 3 in others

EXAMPLE: Make a POST request with a body payload

```react
        const apiRouteCall = await axios.post("/api/mapquest", {
          // Body payload in JS form, not JSON
          latitude: locationInfo.coords.latitude,
          longitude: locationInfo.coords.longitude,
        });
```







# ====== FUNCTIONAL CODING ======

# JS Modules & Code Splitting

In many of the lessons coming up, we'll be referring to the following 2 file names. 

main.js  : the end destination for our code being imported/exported
utils.js : where the code being called to main.js originates from

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210224165552144.png" alt="image-20210224165552144" style="zoom:67%;" />

### Modules Overview

#### Definitions

EXPORTS:
We export values out of a module- they can be simple values, objects, or even entire functions...etc

PUBLIC API: 
Whatever we export from a module is called the public API
The public API is consumed by importing those values into a module

MODULE DEPENDENCIES:
If module A imports something from module B, then we import module A into our main.js file...then module B would be the module dependency

#### Advantages of Modules

When a codebase grows larger, there are many benefits to using modules instead of one giant JS file- which is what they did in the old days

- Consider each module as a building block the will eventually be used with several others to build 1 large and complex application
- Each building block is dedicated to a specific feature or set of them with similar purposes

ISOLATING COMPONENTS

- A dev can work on module 1 of 600 without understanding how it fits into the bigger picture
- The dev doesn't need to know what his fellow workers are doing either- he just sticks to his one task, and everything will come together eventually
- Isolating bugs becomes a lot simpler when you can isolate the source of error to a single small/medium file instead of a gargantuan one

CODE ABSTRACTION

- We can use modules to implement low-level code into other JS files
  Lets you reuse functions, or unchanging values in other file locations

- You can reuse code across different files in your project, and even new projects altogether

EX. Have 1 module be dedicated to your own custom functions which you know can be useful across a series of projects. Use them without redeclaring them in every other JS document you encounter

#### How Native JS Modules Work

JS modules look like regular JS scripts, but there are some key differences you need to understand when using them:

![image-20210523120610811](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210523120610811.png)

TOP LEVEL VARIABLES EXPLANATION

- In modules, the variables declared on the global scope are private by default. 
  No other file can access them unless you export them deliberately
- In regular JS scripts, global variables can be used by any other JS files linked to your index.html file- as long as they're parsed afterwards (see lesson on Global Scope Sharing)
- Leads to global namespace pollution, and you risk same name situations

When we say the imports/exports need to be on the top level, we mean that they need to happen on the global scope while being outside of any blocks or functions



### Native Module Methods 

FILE NESTING LEVEL SYNTAX:

```
Same level: 		./filename
1 level higher: 	../filename
2 level higher: 	../../filename

1 folder deeper:	./foldername/filename
```



#### Before we Begin: type="module"

PROCEDURE:

1. Include `type="module"` when writing the script tags for your main JS file
   You'll need this to import code from other files into it

```html
<!--INSIDE index.html-->
<script type="module" src="alterEgo.js"> </script>	<!-- inside HTML file ->
```

- Imagine now that we have a second file named utils.js
- It will contain code that we'd like to use in other locations

2. Make parts of the utils.js file exportable

For example, if we wanted to reuse a function inside utils.js, we'd place the word "export" right before its declaration

```js
// INSIDE of utils.js
export function double(n){ 
    console.log(n*2); 
}	
let vari= 100;
```

Any JS file which imports the utils.js file will gain access to this function 

3. Import desired code into your main JS file using one of the methods described next



#### Method 1: Export Prefix

Assume that main.js and utils.js are on the same nesting level & within the same folder

![image-20210523123702409](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210523123702409.png)

SOLUTION WITH NO RENAMING:

![image-20210523124243134](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210523124243134.png)

SOLUTION WITH RENAMING: (renaming happens in main.js)

![image-20210523130610445](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210523130610445.png)



#### Method 2: Export Lists

We can export pretty much anything by placing "export" in front of a function, variable, or object declaration. However, that may bloat your code a bit. 

![image-20210523123702409](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210523123702409.png)

SOLUTION WITHOUT RENAMING:

![image-20210523125457217](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210523125457217.png)

SOLUTION WITH RENAMING: (renaming happens in utils.js)

![image-20210523125933881](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210523125933881.png)

DESCRIPTION:

1) Have type="module" set up for your main.js file, as always

```html
<!--INSIDE index.html-->
<script type="module" src="JS/main.js"></script>
```

2) Make your code in helper.js export-ready, just in a different way

```js
// INSIDE utils.js	
function double(n) {
  console.log(n * 2);
}
let vari = 100;

export { double as dub, vari as varr}; // the different way (with renaming)
```

3) Declare the imports in your main.js file (can choose to rename or not to)

With Renaming:

```js
import { dub, varr } from './utils.js'; //forced to use new names
```

Without renaming:

- We wouldn't have typed `as newName` in the `export { }` line in utils.js
- Would refer to them in main.js using their old names as well (see solution image)



#### Method 3: Import All Exports

This method is particularly good for showing onlookers where your imports came from

![image-20210523132214653](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210523132214653.png)

SOLUTION:

![image-20210523132314060](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210523132314060.png)

When using imported variables, we prefix them with `UtilFile.` or whatever our new name was. This is similar to how we use information from an API

NAMES FOR IMPORT FILES:

We have the freedom to name our prefixes whatever we want during the import statement

```js
// INSIDE main.js
import * as whatever from './utils.js';     // import everything fr/ utils.js
console.log(whatever.hisName, whatever.year);
```

- Renaming isn't a huge deal with method 3, since we call variables using a prefix in our main JS document anyway. 
- We can rename the things we import with method 2 if you really want to
  Change line 9 in utils.js to `export { vari as newName }` if you want

DESCRIPTION:

1. Have type="module" set up for your main.js file, as always

```html
<!--INSIDE index.html-->
<script type="module" src="JS/main.js"></script>
```

2. Make your code in utils.js export-ready

Prepare your items for export however you want; use any method or mix of them

```js
// INSIDE utils.js
//% utils.js
export function double(n) {
  console.log(n * 2); // export prefix
}
let vari = 100; // export list

export { vari } // using a mix
```

3. Import all that is export-ready from utils.js
   When calling something, we just need to start it with the prefix `UtilFile.`

```js
// INSIDE main.js
import * as UtilFile from './varny.js'; // import everything from varny.js
```

![image-20210224145912424](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210224145912424.png)



#### Method 4: Default Exports

Remember, having a default export does NOT mean you can't export other things in your JS file as well

![image-20210523132214653](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210523132214653.png)

SOLUTION WITHOUT RENAMING: 

![image-20210523183022596](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210523183022596.png)

SOLUTION WITH RENAMING: Method 1

![image-20210907002135083](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210907002135083.png)

SOLUTION WITH RENAMING: Method 2

![image-20210523182632048](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210523182632048.png)

EXPLANATION:

1) Have type="module" set up for your main.js file, as always

```html
<!--INSIDE index.html-->
<script type="module" src="JS/main.js"></script>
```

2) Prepare your default export in the utils.js file

You can only have a single default export for each file you plan on exporting code from
To define it, place `default export` before the item's declared in your file:

```js
// INSIDE utils.js
export default function double(n) {
  console.log(n * 2); 
}
```

3) When we call our default export in our main.js file, use this syntax:

```js
// INSIDE main.js file
import { default as newName } from './varny.js'
```



#### Disallowed MIME Type Error

REMEMBER!

- Always include the `.js` extension when you import something to a JS module
  If you don't, you'll get the following error 
- VS Code autocomplete will even suggest your JS file location without `.js`, leading to this gacha

![image-20211201164012920](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211201164012920.png)



#### How Modules work Behind the Scenes

![image-20210523185804417](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210523185804417.png)

Watch starting at 10 min mark: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649453#questions

KEY TAKAWAYS

- The code from the JS file you're exporting code out of will be parsed BEFORE the module where the code ends up
- This means that the code that runs on utils.js will run before main.js

![image-20210523190613286](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210523190613286.png)

![image-20210523190626607](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210523190626607.png)

#### Live Connection Imports/Exports

When you import something, that value will automatically be updated if it changes in either one of the JS files

TLDR: imports are not mere copies of an export. They are a live connection and point to the same spot in the memory. If the value changes, it changes in both the source and destination file

EXAMPLE 1: When you change a variable you're exporting in utils.js, that changed value will be what gets imported to your main.js file:

![image-20210523185618416](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210523185618416.png)

EXAMPLE 2: You can change the value in main.js too, and the import value will still get updated when any changes occur

![image-20210523201635567](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210523201635567.png)



EXTRA DETAILS

1) Keep your import statements at the top of the file 

2) You can, but probably shouldn't use multiple import/export methods at the same time
Unless you're using method 3, where that becomes necessary



### IIFE Module Patterns: Pre-ES6 Modules

Before ES6, modules did not exist natively in JS. The goal was to create something that can keeps data private while exposing a public API. For that, we used to rely on IIFE's assigned to variables (yes, you can do that)

EXPLANATION:

This method uses a standard JS object to self-contain code and take advantage of a phenomenon called closure. We had a lesson on this near the end of OOP Part 1. 

- It boils down to people not being able to access variables declared inside a constructor- unless it was through a "privileged function" that the dev defined directly inside that constructor
- This gives properties a level of protection VS being open to mutation from anywhere else in the codebase

#### Intro Knowledge

1. You can actually assign IIFE's to variables, which I did not explain in the initial IIFE lesson:

```js
let iife= (function () {
  console.log("this function's a one-off");	//IIFE
})()
console.log(iife) //OUTPUT: undefined
```

OR wrap the brackets around everything (same result I believe)

```JS
let iife= (function () {
  console.log("this function's a one-off");	//IIFE
}())
console.log(iife) //OUTPUT: undefined
```

As soon as the IIFE goes off it gets erased. Hence, the undefined log to the console

2. IIFE's can actually help you distribute methods and properties across different objects without placing them in the global scope (aka. polluting the global space)

It's not particularly good for performance since it copies methods directly onto objects, which OOP avoids like the plague

#### Demonstration

GOAL: 
Give objects access to predefined functions. 
Keep those functions available off the global scope

CLEAN WAY:

```js
let oldModule = (function () {
  const doubleUp = (inp) => inp * 2;
  const halve = (inp) => inp / 2;
  const vari = 'stringgg';
  return { doubleUp, halve, vari };
})();

oldModule.doubleUp(9);        //OUTPUT: 18
oldModule.halve(9);           //OUTPUT: 4.5
console.log(oldModule.vari);  //OUTPUT: 'stringgg';
```

It's much cleaner to declare what you're going to export as a variable, then place them into a return object. The alternative is to declare everything in the return object at the get-go. This leads to more nesting and oftentimes more bloated code

MESSIER WAY:

```JS
let oldModule = (function () {
  return { 
    doubleUp(inp){
      return inp * 2;
    },
    halve(inp){
      return inp / 2;
    },
    vari : 'stringgg',
  };
})();
```

#### Similarity to ES6 Modules

1. Only the variables we place in the return object are accessible outside of the IIFE.  
2. The public API refers to any functions that were returned being the only things that can affect certain variables on the IIFE's scope. 

For example...

```js
let oldModule = (function () {
  let counter = 0;
  const incr = function () {
    counter++;
    console.log(`The variable's value is now ${counter}`);
  };
  return { incr };
  // return { incr, counter };
})();

oldModule.incr();
oldModule.incr();
oldModule.incr(); 
// can only manipulate the counter variable value via a ƒ() I allowed to be public
```

![image-20210523231739227](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210523231739227.png)

FOR MORE INFO ON HOW THIS OLD TECHNIQUE IS USED:

We can even combine this technique with closure to create objects with private functions as well. See how in this video:

https://www.youtube.com/watch?v=ljExIKfwxPM

#### Limitations 

- If we wanted 1 module per file (like ES6 modules), we'd have to create several regular JS files and link them to index.html in a certain order
- All our variables would exist on the global scope
- We wouldn't be able to use a bundler, which has more added benefits than just assembling different chunks of code together

COPIES INSTEAD OF LIVE CONNECTION:

From my own personal tests, it seems like when we try to access a variable value, it will create a copy of what it since was instead of having a live connection

```js
let oldModule = (function () {
  let counter = 0;
  const incr = function () {
    counter++;
    console.log(`The variable's value is now ${counter}`);
  };
  return { incr, counter };
})();

oldModule.incr();
oldModule.incr();
oldModule.incr();
console.log(oldModule.counter); // you'd think it'd equal 3
```

![image-20210523232643166](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210523232643166.png)

We don't have this problem when using ES6 modules, as you can see:

![image-20210523233449279](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210523233449279.png)

![image-20210523233504496](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210523233504496.png)

### Aggregate Modules

These are a way to import code over across 3 files instead of 2. I'm going to create a visual to help visualize what I mean

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210224164737424.png" alt="image-20210224164737424" style="zoom:80%;" />

- We can bring code over from helper.js over to utils.js
- We then transport that over to main.js, which is still the only JS document linked to the HTML file (also has type="module" applied)

```html
<script type="module" src="JS/main.js"></script>
```

#### Procedure

1. Have type="module" set up for your main.js file, as always

```html
<!--INSIDE index.html-->
<script type="module" src="JS/main.js"></script>
```

2. Make your code in helper.js export-ready

```js
// INSIDE helper.js
export function greeting(){
  console.log('Howdy!');
}
```

3. Bring your exportable code over to utils.js

```js
// INSIDE utils.js
export { greeting } from './helper.js'
```

4. Call over all exports from utils.js to main.js

```js
// INSIDE main.js
import { greeting } from './utils.js'
greeting() // test
```

![image-20210224172001559](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210224172001559.png)

### Global Scope Sharing

DISCLAIMER: NEVER RELY ON THIS, EVER

When you have multiple JS documents in 1 folder, you can actually share global variables between them without really doing anything

Take a look at the bottom half of this head section in my HTML doc:

![image-20210430182505283](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210430182505283.png)

Any global variables declared in `uno.js` can be accessed by `script.js`
The reverse is not true however, since `uno.js` loads first

```js
// inside uno.js
const obj12= {animal: "crackers"}
//—————————————————————【】——————————————————————————
// inside script.js
console.log(obj12.animal) //OUTPUT: "crackers"
```

#### Never use this

Global variables and function names are an incredibly bad idea. 

- The reason is that every JavaScript file included in the page runs in the same scope. 
- If you have global variables or functions in your code, scripts included after yours that contain the same variable and function names will overwrite them

There are several workaround for how to structure your JS code
CTRL F "avoid globals": https://www.w3.org/wiki/JavaScript_best_practices

#### How it Affects 3rd Party Libraries

When you are using 3rd party libraries like Lodash, date-fns- or leaflet, they give you access to their functions using global functions or objects most of the time

- That's how importing a library suddenly gives you access to methods that vanilla JS does not have
- If you're using a 3rd party library via `<link>` and `<script>` tags, place the import links above your main JS document (and use the defer script loading method)
- That being said, you should probably be using NPM installs for 3rd party libraries

![image-20210430180716457](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210430180716457.png)

### Alternative Code Recycling Methods

#### Mixins

Sometimes, using OOP's prototypal/class inheritance isn't the best option. 
Inheritance does not work well for unrelated objects like "Bird" and "Airplane". 
Sure they can both fly, but a "Bird" is not a type of "Airplane" and vice versa

- If you simply want to reuse a list of functions on certain objects, use mixins
- Unfortunately, it's not great for performance since it copies over functions directly to objects

EXAMPLE:

```js
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird); console.log(bird)
flyMixin(plane); console.log(plane)
```

![image-20210429234522717](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210429234522717.png)

#### commonJS (intro)

CommonJS and AMD modules used to be standard solutions for module support back in the old days when JS did not have modules natively. 

CommonJS is worth understanding nowadays because it's been used in Node.js up until very recently

- NPM was only intended for node when it was built, but it has since become the standard repository for the JS world
- Since NPM uses commonJS, we're still stuck with it now- at least until ES6 modules replaces it fully (but that will take time)

EXAMPLE:

This code of code I'm about to show doesn't work in the browser; you'd enter them into the command line

```js
// Export
export.doubleUp= function(inp){
  return inp*2
}

// Import
const { doubleUp } = require('./utils.js')
```

If necessary, get a proper understanding of commonJS with this: 
https://www.youtube.com/watch?v=jN4IM5tp1SE



### Splitting Event Listeners (my approach)

#### Procedure

1. Take all your event listeners, then split them up into different files
2. Instead of using global declarations, place all your event listeners into exportable functions
3. Import those functions to your main js file then execute them immediately

#### Demo

This example comes from my Smash Ultimate project for my first professional portfolio

clickEvents.js

```js
export const allClickEvents = function () {
  //% Burger Icon
  const burgerIcon = document.querySelector("#burger");
  burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.toggle("open"); // toggle "open" class
  });
  // dozens of other event listeners....
}
```

hoverEvents.js

```js
export const allHoverEvents = function () {
  //% Place all nav links into an array then apply 2 event listeners to each
  const navLinks = Array.from(document.querySelectorAll(".nav__link")); 
  navLinks.forEach((el) => {
    el.addEventListener("mouseenter", function (e) {
      // add a "mouseenter" event to an array of elements
    });
    el.addEventListener("mouseleave", (e) => {
      // Add a "mouseleave" event to an array of elements
    });
  });
}
```

index.js

```js
// must use .js extension or index.html will think these are HTML files
import { allClickEvents } from "./clickEvents.js"; 
import { allHoverEvents } from "./hoverEvents.js";

// execute them right away, and it'll be like all their code was in index.js
allClickEvents();
allHoverEvents();
```



# Functional Programming

### Theory Behind Functional Programming

![image-20210528012259770](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210528012259770.png)

- As web development evolves, we are beginning to care about the intricate details less and less. We're shifting from 1 coding paradigm to another (imperative → declarative)
- We want to abstract away most of our code's low level details in order to create a multitude of functions that abstract away complexity

#### Side Effects and Pure Functions

![image-20210528013305362](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210528013305362.png)

The goal of pure functions is to create functions that do not have any side effects

- Side effects range from making DOM changes, logging to the console, or even simply mutating external variables
- To get work done without mutating external variables, you'll have to clone them. Mutate the clones all you want, as long as the original data is left unchanged
- This is why we call state data immutable- and its a very big help for keeping track of our code once it grows in size/complexity

#### Mixing Paradigms

- You don't need to commit to coding with either paradigm 100%. 
  Feel free to mix techniques when appropriate
- For example, when making functions you should try to avoid data type mutations as much as possible
- It's impossible to follow the rules all the time, and that's alright because its not strictly required. 

EXAMPLE: We'll eventually need DOM manipulation to make new elements appear when we need them to, and we won't stop just because it violates a guideline



### Pure Functions

As stated in the previous lesson, pure functions accept an input, then return the same output every time, without affecting anything else- that would be a side effect

![image-20210528144941739](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210528144941739.png)

#### Comparing Impure vs Pure 

IMPURE FUNCTION:

```js
const arr= [1,2,3]
function addElement(el){
  arr.push(el)
}
```

Broken Rule 1: This relies on external information, the arr variable
Broken Rule 2: We mutate data outside of the function by pushing variables into "arr"

HOW TO MAKE THIS PURE:

Feed the array as a function parameter instead
Treat your inputs as immutable- find a way to get results w/out mutating the inputs 

PURE FUNCTION: (mostly)

```js
const arr = [1, 2, 3];
function addElement(a, el) {
  return [...a, el]
}
addElement(arr,5)
```

- The array we feed our function is now left unchanged, and we don't rely on an external variable anymore (we feed it as an input instead)
- The result we get is as valid as our impure version's

#### When Purity is Impossible

Another rule for pure functions is that it has to give us the same output every time we give it the same set of inputs. 

- For example, 2+6 equals 6 always. 2+6 will never equal anything else as long as we're adding the same 2 numbers together
- This is not always possible to achieve with functions

```js
addElement(arr, Math.random()) 		// add a random number to an array
```

PRACTICAL EXAMPLES:
There's no way to write projects in code that is 100% pure

- You need impure code to affect information on the outside. 
  If you want to change/update data in a database, you'll be forced to use impure code
- If you want a pop up window to appear when you hit a button, that's DOM manipulation
  You're forced to change something, because that's what the task requires

#### Why Pure Functions are Good

- Having functions that have consistent outputs and do not change/rely on external variables will reduce the number of bugs in your code
- It also makes your functions extremely easy to test, which makes up for the longer amount of time you spend declaring them initially

COMMON PROBLEM W/ IMPURE FUNCTIONS:
You have a project built with a large amount of impure functions

- You want to change something, and the entire code breaks because of how many things your functions affect outside of it
- Now, we're forced into changing how several of our functions work instead of just changing 1
- Another general rule of coding is that you want your functions to be short and to accomplish 1 thing

### (Non)Configurable Object Methods

#### freeze()

This method prevents the object you feed it from being changed in any way. 
You can't add/delete properties or change the value of existing ones
It works on arrays as well

```js
const obj = { prop: 42 };
Object.freeze(obj);

obj.prop = 33; 			// Throws an error in strict mode 
console.log(obj.prop);	// expected output: 42
```

![image-20210528172616540](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210528172616540.png)

LIMITATIONS

1. This method does not deep freeze

- It will only freeze the top level of the object you feed it, while everything else is free to be mutated
- Some libraries give you the ability to deep freeze

```js
const arr = [{ black: 'token' }, { fatass: 'Cartman' }, { ginger: 'Scott' }];

Object.freeze(arr);
arr[0]["black"]= "PK"
console.log(arr)
```

![image-20210528172538856](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210528172538856.png)

#### seal()

This method seals an object- preventing anyone from adding or deleting new properties. 
So long as present properties are writable, you can still change their values

```js
const test = { numero:60, name:"Dolly" };

Object.seal(test);
test.name = "Rami";
console.log(test);  //OUTPUT: { numero:60, name:"Rami" }

test.show="Mr.Robot";	// does nothing
delete test.numero		// does nothing
console.log(test);	//OUTPUT: { numero:60, name:"Rami" }
```

Non-configurable properties are not super common, but they can be created using [`Object.defineProperty()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) or [`Object.freeze()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze).

#### preventExtensions()

This method prevents you from adding any more KVP's to your object
You can still redefine existing keys though

```js
const yamato = { L9: 'rusty Knife' };

Object.preventExtensions(yamato);
yamato.lee = 'Bruce Lee'; //ERROR: Object is not extensible
```



### Currying and Partial Application

> WARP: XMIIEM

For more info: https://dev.to/suprabhasupi/currying-in-javascript-1k3l

#### Currying

Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline.

WHY BOTHER?

1. It helps to avoid passing same variable again and again.
2. It is extremely useful in event handling.

EXAMPLE:

```js
function _sum(a, b, c) {
    return a + b + c
}
_sum(1,2,3)
//————————————————————————[ curry version ]——————————————————————————————
function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
sum(1)(2)(3)  //OUTPUT: 6
//————————————————————[ curry version refactored ]——————————————————————————
let sum= (a) => (b) => (c) => a + b + c
```

It keeps returning a new function until all the arguments are exhausted. 

- The arguments are kept alive via closure and all are used in execution when the final function in the currying chain is returned and executed.
- Each inline function must accept 1 argument, or else it's not currying - it' be a partial application instead

#### Currying: Save prep'd functions

One upside to currying is seen when you don't supply a curry chain with all the args it needs. 
Instead of a regular return value, the chain will return a function. 

- You can then save this function, and supply it an argument later on
- In real life, this can be used to get functions ready for when information becomes accessible
- You retain the benefit of not needing to pass it all the other arguments the function may need, since they are saved via closure

```js
let sum= (a) => (b) => (c) => a + b + c
let first= sum(1)(2) // equal to (c) => 1 + 2 + c
let second= first(3)

console.log(first)
console.log(second) //OUTPUT:6
```

![image-20210626132757162](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210626132757162.png)

#### Partial Application

This technique is similar to currying, but involves inline functions that accept more than 1 argument
In currying, inline functions only accept 1, or else we no longer refer to it as currying

WHY BOTHER?

- The point of partial application is to decrease a function's arity
- We can turn 1 function with 3 arguments into multiple nested functions accepting 1 or 2

```js
function _sum(a, b, c) {
    return a + b + c
}
_sum(1,2,3)
// ———————————————————————[ Partial Application ]———————————————————————————
function sum(a){
    return (b,c)=>{
        return a + b + c
    }
}
sum(1)(2,3)  //OUTPUT: 6
```

#### NodeJS Axios Example

```js
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
  headers: {
    'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
    'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
```



# =========== MISC ===========



# Future Project Practice

### UI Inspiration Sites

Take a look at people's designs and use them for yourself. Look at what colors they use, how they style their CSS to create interesting visual effects...etc

#### Style Stage 

All devs have access to 1 HTML file and the goal is to to create entirely new webpage styles using only CSS. 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210527131532697.png" alt="image-20210527131532697" style="zoom: 43%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210527131635977.png" alt="image-20210527131635977" style="zoom: 43%;" /> 



### Project Practice Sites

#### Front End Mentor 

MAIN PURPOSE: Take some of their best looking designs for yourself
CONS: No live demos of the websites, just pictures and a description

You're tasked with using HTML/CSS/JS to finish building the projects they give you starter files for. This gives you folder packages with pre-made designs. 

- The challenges are ordered in terms of difficulty, and you get a picture of what they want you final product to look like
- Take some of their good looking style choices and use then for your own projects

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210527130334440.png" alt="image-20210527130334440" style="zoom: 67%;" />

#### Front End Practice

This website has 10 preselected websites that are visually appealing and require you to do different things. 

- Build the websites they've chosen for you, and view the finished product on the web since they're up and running now
- See exactly how the website works by playing around inside it yourself, and you can even dive into the source code through the dev tools
- They provide you with the site's color palettes, plus necessary skills and resources to learn them

![image-20210527133250170](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210527133250170.png)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210527133030429.png" alt="image-20210527133030429" style="zoom:70%;" />

#### First Timers Only 

Contribute to open source projects and work on small teams with other people. 

- Lets you experience realistic workflows when you share your work via Git/GitHub
- Meet some new people and contribute to larger scale projects by focusing on 1 or 2 niche things yourself. 

PROJECT LISTS: ![image-20210527133942159](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210527133942159.png)

Filter what kinds of jobs you're looking to complete, and 

# Directory

Excellent Flowchart Maker: https://www.diagrams.net/

If we need to know how to do something, I'd suggest finding the appropriate unit and chapter. Most of the code is too long for a directory like this

```js
// PROPERTIES
typeof variable
variable.length	


// CAPTURING USER INPUTS AS VARIABLES
let a= prompt("Fill in user input string")
let b= Number(prompt("Fill in user input number"))
```

METHODS:

### Miscellaneous Tasks

#### HTML Imports

```js
const $variName= document.querySelector('.hello');	//target 1 tag via class
const $variName= document.querySelectorAll('.hello'); // target ALL elements in class
const $variName= document.getElementById("tagID")	// target 1 tag via ID
```

for event listeners, check out section 7


#### textContent and innerHTML

OVERRIDE TEXT INSIDE ELEMENT:

```js
myDiv.innerHTML = "Hey my name is <strong> Fuego </strong> ";  //Override element
myDiv.textContent= "Hey my name is <strong> Fuego </strong> "; //OPTION 2
```

textContent spits out all characters as is. Inner HTML enacts HTML syntax in quotes

USE TEXT ALREADY INSIDE ELEMENTS

```js
element.innerHTML	
element.textContent
```

OVERRIDE TEXT INSIDE OF AN INPUT ELEMENT:

```js
element.value= 60
```

Disable and Reenable a Button

```js
document.querySelector('.check').disabled = true;	// disable button
document.querySelector('.check').disabled = false;	// Enable again
```

Check if Element belongs to 1 of the classes listed

```JS
$var.innerText = $var.classList.contains('bg','bd'); 
```

(can add a list of all class-related event listeners here)

MAKE ELEMENT INVISIBLE, BUT HAVE IT STILL EFFECT LAYOUT

```JS
document.getElementById("myP").style.visibility = "hidden";	// make el disappear
document.getElementById("myP").style.visibility = "visible"; //make it appear
```

ACCESS OBJECT STUFF

Although you could use the forIn loop, there are certain methods that let you loop through objects with some creativity (see section 9, looping through objects)

```js
Object.keys // places all object keys into an array 
Object.values // takes all object values and puts them into an array
```

REMOVE LAST CHARACTER FROM STRING

```JS
const vari = 'abcdef'
const editedVari = vari.slice(0, -1) //'abcde'
```

GET LENGTH OF AN OBJECT

```JS
Object.keys(myArray).length
```

REPLACE ALL CLASSES OF AN HTML ELEMENT WITH A NEW CLASSNAME

```js
HTMLel.className = "valido";
```

Any classes currently active on this tag will be erased and replaced with the valido class

IF STATEMENTS WITH MULTIPLE CHOICES

Don't use `serInput ===3||2||1||0`. Will not work

```JS
if (userInput === 3 || userInput ===2 || userInput ===1 || userInput ===0) {
  console.log('OKAYYY');
}
```

TIMER FUNCTION

```JS
setTimeout(function(){ alert("Hello"); }, 3000); // delay based on ms

// OR.. set up a delay based on seconds

let wait=3
setTimeout(function () { alert("Hello"); }, wait * 1000);
```

#### Premade Functions

Get sum of all array entries :

```JS
function summation(arr){
  return arr.reduce((acc,el)=>acc+el,0)
}
```

Check if an array contains at least 1 positive number (returns Boolean)

```js
function anyPositives(arr){
  let hasPositive = arr.some(v => v > 0);
  return hasPositive
}
```

Check if an array contains at least 1 negative number (returns Boolean)

```js
function anyNegatives(arr){
  let hasNegative = arr.some(v => v < 0);
  return hasNegative
}
```

Capitalize first letter of a word:

```js
function capitLetterOne(str){
  let newWord= str[0].toUpperCase()+str.slice(1)
  return newWord
}
```

Return max value in array

```js
const maximus = Math.max(...arrayName)
```

Return min value in array

```js
const minimus = Math.min(...arrayName)
```

Convert String to Number 

```js
Number() //good for input fields, which usually store everything as strings
```

Find largest number in Array

```js
Math.max(...arr) // when you feed an array
Math.max(1,10,2) //when you feed a regular list of numbers
```

