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



