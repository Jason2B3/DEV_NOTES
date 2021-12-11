# SECTION 5 Part 2: Dev Skills 

The first part of this chapter can be found in the developer setup document. 
A lot of the first half dealt with configuring JSON files and tweaking settings

### Definitions

⦵  : Custom use of a symbol to convey double inclusion. 
If I say 4-8, I mean that our choices are 45678 (we do not exclude 4 and 8)

⦷ : Custom use of a symbol to convey double exclusion
If I say 4-8, I mean our choices are 567   

◐ : Partial inclusion start
If I say 4-8, our choices are 4,5,6,7

◑ : Partial inclusion end
If I say 4-8, our choices are 5,6,7,8



<u>Web API's:</u> Application Programming Interface
Libraries that browsers implement. You can access certain methods/properties in JS. 
For example: `document.querySelector()`

<u>Iterables:</u> 
Iterables include: Strings, maps, sets, but NOT objects

<u>Boxing:</u>
Strings have methods-despite the fact that they're primitives. 

JS briefly turns them into objects which we perform operations on, then turns em back into primitives for our sub string outputs. This process is called "boxing"

//—————————————————————【】——————————————————————————

<u>Higher Level Languages:</u> 
Are easier for humans to read/understand, but require a compiler in order to translate it into machine language. As a result, they’re typically slower but easier to learn. With computer speeds and tasks requiring different levels of speed- a higher level language may be sufficient for what you plan on doing.

<u>Lower Level Languages:</u> 
Not very readable to humans, but run much quicker. 

<u>Client-facing programs:</u> 
Programs that interact with the user. For example, JS works on a web browser and helps create dynamic websites where people will be clicking

### Improvements to Learning

1. Build more projects with zero guidance from tutorials (way out of tutorial hell)

2. When you learn a new thing, try to make up an equivalent example of the example problem they give for your notes. 

   You'll reinforce the knowledge better if you use your own head to figure out a new problem you came up with instead of just typing what you saw on screen

3. Always type out your code, don't copy paste from git repos

4. Don't worry if your code efficiency sucks early-on
   You can refactor/improve it later

5. Be comfortable with the fact that you'll never know everything
   Focus on what you need to achieve your immediate goals, and save the rest for later

6. Accept jobs or complete projects that are beyond your current capabilities
   You'll problem-solve your way through and grow tremendously

#### The Competence Curve

![image-20210225013241066](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210225013241066.png)



### Problem Solve like a Developer

#### Best Practices

- Always formulate a plan for how you want to solve your problem
  When things fail to work, you'll know it's a problem with your syntax, not your logic
  Assuming you understand the rules of the tools you're working with of course.
- Don't be too proud to Google Search for a solution
  Especially if you keep hitting walls or don't know enough

#### 4 Steps to Problem Solve

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210225014416148.png" alt="image-20210225014416148" style="zoom:67%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210225014429740.png" alt="image-20210225014429740" style="zoom:67%;" />



#### How-2-Think Example:

OBJECTIVE: Project manager says "We need a function the reverse what we pass into it"

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210225014851712.png" alt="image-20210225014851712" style="zoom: 60%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210225014919077.png" alt="image-20210225014919077" style="zoom: 60%;" />

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210225015017029.png" alt="image-20210225015017029" style="zoom:60%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210225015045083.png" alt="image-20210225015045083" style="zoom:60%;" />

PSEUDO-CODE STRUCTURE

- Try to structure your fake syntax as you would normally in JS
- Write conditions and actions informally, then figure out how to make it happen in JS afterwards

### Lesson 59: Challenge

Find the difference between the following array's lowest and highest temperature.
Keep in mind that there may be an entry with an "error" string

```js
const temperatures= [3,-2,-6,-1, 'error', 9, 13, 17, 15, 14, 9, 5]
```

1) Problem understood clearly
2) Breaking into sub-problems

a) Remove all string elements from initial array
b) Find smallest number from filtered array
c) Find largest number form filtered array
c) Get difference between the 2 numbers

```js
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
//@ F0: Remove all errors from array

function removeLetters(array) {
  let cleanArr = array.filter(function (value) {
    return value > -10000;
  });
  return cleanArr;
}

// We use a filter method to get rid of all strings in an unorthodox way.
// All numbers the thermostat detect in normal conditions will exceed -10000
// String > - 10000 returns false. So our condition works

//@ F1: Find largest number, while ignoring string elements
function highest(array) {
  const maximus = Math.max(...array);
  return maximus;
}

//@ F2: Find smallest number, while ignoring string elements
function lowest(array) {
  const minimus = Math.min(...array);
  return minimus;
}

// FINAL: Give us the difference between highest and lowest
function amplitude(array) {
  let removedL = removeLetters(array);
  console.log(removedL);
  let peak = highest(removedL);
  let rockBottom = lowest(removedL);
  return peak - rockBottom;
}
console.log(amplitude(temperatures));
```

![image-20210225134612392](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210225134612392.png)

### Debugging

Software bug: A defect/problem in your program. 

- Any unexpected or unwanted behaviors can be labelled as a software bug
- These are completely normal- we are human after all
  Just know how to find, fix, then prevent future bugs

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210225185922983.png" alt="image-20210225185922983" style="zoom: 43%;" />

Identify Stage

- We use automated testing software to help us scrape our sites for errors
- The worst time to find out a bug exists is through user reports- at that point it's affecting our consumer base

Find Stage

- We can use the dev tools to locate errors when dealing with smaller problems
- When the tasks get more intricate, you'll need to use debugger software

Automated Testing software is a separate beast entirely, and our focus for this course is JS. Consider looking into it however

### Coding Challenge

You'll be given an array with the forecasted weather for the next few days.

```js
let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];
```

DESIRED OUTPUT: '...17°C in 1 day...21°C in 2 days...23°C in 3 days'
The string must be structured like this, no exceptions

```js
let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];
function pfiZ(array) {
  //@ This function creates an array filled with the phrases we want
  const forecaster = function (array) {
    let strings = [];
    for (let i = 0; i < 1; i++) {
      // need DAY for day 1
      strings[i] = `...${array[i]}°C in ${i + 1} day`;
    }
    for (let i = 1; i < array.length; i++) {
      // need DAYS for next couple of days
      strings[i] = `...${array[i]}°C in ${i + 1} days`;
    }
    return strings;
  };
  let funOutput = forecaster(array); // place your output array in a variable
  //—————————————————————【】——————————————————————————
  //@ This method adds up all the strings
  const sum = funOutput.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return sum;
}
console.log(pfiZ(data1));
```

S

# SECTION 8: Behind the Scenes JavaScript 

### Definitions and Abbreviations

EC: Execution context
VE: Variable environment
TDZ: Temporal dead zone

Runtime:
The final phase of the program lifecycle where the machine executes the program's code

Internal Property: [[word]] *in the dev tools
Means what you're looking at in the dev tools is not something you can access via code 

### High Level Overview of JS

#### Low/High Level Languages

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210301184402227.png" alt="image-20210301184402227" style="zoom:50%;" />

Every program that runs on your computer needs some hardware resources, such as memory and the CPU to do its work.

Now, there are low-level languages, such as C, where you have to manually manage these resources.

- In C, you have to ask a computer for memory to create a new variable
  	In python, this is automatic, making it easier to use

- High level languages like JS and python are easier to use, but are always slower than low level languages

Depending on the task, a slow but easier to use language may be a suitable choice

- You'll often see hardware and games coded with low level languages- they need to be optimized to provide fast response-times and minimal lag

#### Garbage Collection

An algorithm inside the JavaScript engine, which automatically removes old, unused objects from the computer memory in order not to clog it up with unnecessary stuff.

JS cleans the memory so you don't have to

#### Interpreted or Just-in-Time Compiled

The computer's processor only understands zeros and ones- binary. 

- Ultimately, every single program needs to be written in zeros and ones, which is also called machine code.
- And since that's not really practical to write, we use human-readable JavaScript code, which is an abstraction over machine code

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210301190621358.png" alt="image-20210301190621358" style="zoom: 80%;" />

This code eventually needs to be translated back to machine code- and that step can be either compiling or interpreting.

- This step is necessary in every single programming language because no one writes machine code manually.
- In JavaScript's case, the transition back occurs inside the JavaScript engine.

#### Multi-Paradigm Language

In programming, a paradigm is an approach and an overall mindset of structuring our code. It will ultimately direct the coding style and technique in a project that uses a certain paradigm.

PROCEDURAL, OBJECT-ORIENTED, AND FUNCTIONAL PROGRAMMING -------------------------

![image-20210301195449853](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210301195449853.png)

Procedural programming is what we've been doing so far, which is basically just organizing the code in a very linear way, with some functions in between.

HOW JAVASCRIPT IS OBJECT-ORIENTED: -----------------------------------------------

It allows a prototype-based, object-oriented approach.

- Almost everything in JavaScript is an object, except for primitive values such as numbers, strings... etc.
- But arrays, for example, are just objects. 
- Now, have you ever wondered why we can create an array and then use the push method on it, for example?

Well, it's because of prototypal inheritance. 
Basically, we create arrays from an array blueprint- the PROTOTYPE which acts as a template

- This prototype contains all the array methods and the type of arrays that we create in our code
- New arrays inherit the methods from the blueprint so that we can use them 

What I just explained to you is actually a huge oversimplification. That's the reason why there is a whole section on object-oriented programming with JavaScript later in the course.

VERSATILITY OF JAVASCRIPT --------------------------------------------------

Now, many languages are only procedural, only object-oriented, or only functional- but JavaScript does all of it.

It's really flexible and versatile-so we can do what we want with it using any paradigm approach.

#### First Class Functions

Simply means that functions are treated just as regular variables.

- Are allowed to pass functions into other functions (nested F's, callbacks...etc)
  We can even return functions from other functions.

- This is extremely powerful and allows us to use a lot of powerful techniques
  Functional Programming would not be possible without it

#### Dynamically Typed Language

In JavaScript, we don't assign data types to variables. 
Data types are determined dynamically. Meaning....

- They only became known when the JavaScript engine executes our code.
- However, variable types can easily be changed as we reassign their values

![image-20210301200244514](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210301200244514.png)

There is a lot of controversy about whether this is good or bad. 

- Bugs often appear due to the fact that variable values get converted into a type that doesn't work properly with what's set up
- Most other programming languages are strongly typed
  They force you to manually assign types to variables
- If you want to use JS as a strongly typed language, learn Typescript after you're done all this

![image-20210301200414958](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210301200414958.png)

#### Single-Threaded & Non-Blocking Event Loop

These topics cannot be summarized in a single subsection like this.
Understand these definitions as a starting point:

Threads
Essentially just sets of instructions executed in the computer's CPU. 
It is where our code is executed in a machine's processor

An example of a long-running task is fetching data from a remote server. 
We wouldn't want the slow execution to halt other operations

![image-20210301201525657](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210301201525657.png)



### JS Engines and Runtime

HAVE THE PDF FOR THIS LESSON OPEN AS YOU READ. 

#### Engines

Every browser has its own JS engine, but they function the same way
The engine powers the browser and even runtimes like NodeJS

- So any JS engine always contains a call stack and a heap
- The call stack is where our code is actually executed using something called execution contexts
- The heap is an unstructured memory pool which stores all the objects that our application needs

![image-20210301202206223](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210301202206223.png)

#### Compilation vs Interpretation

COMPILATION: It's a 2-step process

1)  JS code's converted to machine code. 
	It's stored in a portable/executable binary file

2) After the code's built, execution occurs- possibly way after the compilation's done

![image-20210301204149677](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210301204149677.png)

INTERPRETATION: It's a 1-step process

The JS is converted to machine code, and is executed right afterwards  
We consider it a 1 step deal since it all happens "at the same time"

![image-20210301204204300](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210301204204300.png)

#### Just-in-Time (JIT) Compilation

Interpreted languages are WAY slower than compiled languages

- JS used to be purely interpreted, but the demands rose too high for low performance to remain acceptable (imagine google maps with 1 second lag for every drag)
- Modern JS uses JIT- a combo of compiling/interpreting (fast!)

This approach basically compiles the entire code into machine code at once and then executes it right away. We still have the two steps of regular compilation, but there is no portable file to execute.

![image-20210301204222247](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210301204222247.png)

#### Visual of JIT

![image-20210301215409644](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210301215409644.png)

PARSING: 
The code is read over and is placed into a data structure called AST

AST: Abstract syntax tree (has nothing to do with the DOM)

- This works by first splitting up each line of code into pieces that are meaningful to the language, like the const or function keywords for instance.
- These pieces are all saved into the tree in a structured way- and it's checked for any syntax errors. 
- The resulting tree will later be used to generate the machine code

COMPILATION AND EXECUTION

- We learned about these in the previous lecture

OPTIMIZATION

JS engines employ several clever tricks to improve optimization

- What they do is to create a very unoptimized version of machine code in the beginning just so that it can start executing as fast as possible. 
- In the background, this code is being optimized and recompiled during the already running program execution. 
- After each optimization, the unoptimized code is simply swept out for the new more -optimized code without ever stopping execution of course. 

————————————————————————————————————————————————————————————————————

Different JS engines implement these steps in slightly different ways 
But overall, this process is what makes modern engines such as the V-Eight so fast.

(All this parsing, compilation and optimization happens in some special threads inside the engine that we cannot access from our code)

#### Runtimes

Imagine a JavaScript runtime as a big box/container which includes all the things that we need in order to use JavaScript in the browser (up until now anyway)

![image-20210301222844466](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210301222844466.png)

WHAT'S INSIDE THE RUNTIME:

1) JS Engine -------------------------

The heart of any JavaScript runtime is always a JavaScript engine.
Without an engine, there is no runtime, and without that there's no JS at all

2) WEB API's -------------------------

It involves everything related to the DOM, timers or even the console.log that we use all the time.

Web APIs are functionalities provided to the engine, but which are actually not part of the JavaScript language itself. JavaScript simply gets access to these APIs through the global window object.

3) CALLBACK QUEUE -------------------------

This is a data structure that contains all the callback functions that are ready to be executed. 

- Ex. Event handlers are classified as callback functions. 
  We use them in conjunction with event listeners because we need the function called as soon as a button is clicked

Here is how that actually works behind the scenes: 

- After the event is triggered, the callback function is put into the callback queue. 
- When the stack is empty, the callback function is passed inside so it can be executed. This relocation happens via something called the event loop

TLDR: Event loop takes callback functions from the callback queue and puts them in the call stack so that they can be executed. 

#### Node.js Runtime

So far, we've been analyzing the browser runtime- let's understand the node.js runtime next

![image-20210301225115536](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210301225115536.png)

- There are no web API's here, mainly because they come from the web. 
- Instead, we have C++ bindings, and a thread pool- details on these aren't important right now

### Execution Contexts & the Call Stack (Part 1)

FOLLOW ALONG WITH THE PDF OF THIS LESSON- YOU'LL NEED THE VISUALS 

#### What Code's Executed First?

How is JS code executed? We already know it happens within a call stack inside the engine, but let's have a deeper look

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210301215409644.png" alt="image-20210301215409644" style="zoom: 41%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210302141842298.png" alt="image-20210302141842298" style="zoom:65%;" />

Let's start by supposing that our code was just finished compiling- the next step would be execution- which is just the CPU processing the machine code it receives. Take a look at the photo on the right

- A global execution context is created for the top-level code only 
  Top-level code is basically code that is not inside any function
- Basically, only code outside of functions gets executed first
  Makes sense since code inside functions should only be called when needed

Take a look at the photo above on the right. We have...
a) A variable declaration
b) Function expression
c) Function declaration

The functions being declared themselves will be executed (as you can tell by the red rectangles), but their code blocks that actually perform an action will have to wait until they're called

#### What is an Execution Context?

An execution context is an abstract concept- but it can visualized using the following scenario:

Imagine you order Chinese food. The courier brings you a bag filled with your food, the receipt, and utensils. Your main concern is the food, but you need the other 2 things in the bag. You like to keep track of expenses, and you're out of clean cutlery at home

The execution context is like the bag. 

- It's an environment where JS code is executed, but it also contains all the necessary info for some code to be executed
- It stores local variables, function arguments...etc

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210302143052294.png" alt="image-20210302143052294" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210302143125295.png" alt="image-20210302143125295" style="zoom:80%;" />

Now, in any JavaScript project, no matter how large it is, there is only ever one GLOBAL execution context- it's where top level code executes. 

- However, a new execution context gets created for every function/method call
  It's non-global, and this only occurs after top-level code's done executing
- This new execution context will be created containing all the info necessary to run the function it was created for
- Now, when all functions are done executing, the engine will basically keep waiting for callback functions to arrive so that it can execute them. (Ex. event handlers may waiting for clicks on a certain button)

——————————————————————————————————————————————————————————————————————

TLDR: 
Global Execution Context: Top level code only
Execution Context: 1 created per function

Both contain info needed for the code they hold inside to run
All these execution contexts together make up the Call Stack



### Execution Contexts & the Call Stack (Part 2)

#### What's Inside the Execution Context?    

1) Variable Environment
All variables and function declarations are stored, plus an arguments object 

Arguments Object:
Contains all parameters that were passed into the one function the execution context was created for.

2) Scope Chain

As you know, a function can access variables that are outside the function itself. The reason why is because of the scope chain

- The scope chain basically consists of references to variables that are located
  outside of the current function.
- To keep track of the scope chain, it is stored inside each execution context.

3) this keyword

- Each execution context also gets a special variable called the this keyword

The content of the execution context (the 3 things we just explained) is generated in a so-called creation phase. This phase happens right before execution

ARROW FUNCTIONS ARE BUILT DIFFERENT:

- Remember that arrow functions do not have an arguments context or access to the this keyword.
- Instead, they can use the arguments object, and the this keyword from their closest regular function parent. (will explain in better detail later in this chapter)

![image-20210302184050779](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210302184050779.png)    ![image-20210302184125925](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210302184125925.png)

#### Let's Examine A Creation Phase

DISCLAIMER: Technically none of these values actually become known during the creation phase, but only in the execution phase.

So this is not 100% accurate here, but it's meant to illustrate how these execution contexts work.

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210302185242468.png" alt="image-20210302185242468" style="zoom:80%;" />

GLOBAL

- Top level code goes in here. Includes each variable and declaration of each function (even if it's a function expression)

Next, we get 1 execution context for each function: `first()` and `second()`

FIRST()

- a=1 is declared outright
- b=unknown because we need to call the second() function to determine it

SECOND()

- c=2 is declared outright
- arguments=[7,9] because those are the parameters that were passed into the `second()` function when it was called in `first()`

Pretty simple right? This example's pretty simple due to the extremely small amount of code. Imagine there are hundreds of execution contexts for hundreds of functions.

How will the engine keep track of the order in which functions we're called? How will it know where it currently is in the execution? That's where the call stack finally comes in.

#### What is the Call Stack?

Remember that the call stack, together with the memory heap, makes up the JavaScript engine itself.

- It's basically a place where execution contexts get stacked on top of each other, in order to keep track of where we are in the programs execution.
- So the execution context that is on top of the stack, is the one that is currently running. And when it's finished running, it will be removed from the stack, and execution will go back to the previous execution context.
- This concept is very important when trying to understand recursion

#### How the Call Stack Works

11:30 and onwards: [The Complete JavaScript Course 2021: From Zero to Expert! | Udemy](https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648479#overview)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210302192411420.png" alt="image-20210302192411420" style="zoom: 67%;" />

WHAT HAPPENS IN OUR CODE:
We have regular top level code: Variable and function declarations/expressions
first() function calls the second() function to get its output
second() function exists- nothing too notable about it
constant variable x is set equal to the first function`

CALL STACK PART 1: FILLING IT UP
Top level code goes in global EC, then is put in the call stack
first() function gets its own EC, then is placed in the call stack
second() function gets its own EC, then is placed in the call stack

CALL STACK PART 2: KNOCKING THINGS OUT OF IT
Constant x invokes the first() function to calculate its value
first() invokes second()
second() runs successfully and returns a value, knocking it off the stack
Using second()'s return, first() finishes running, returns a value, and is knocked off

The call stack will remain in the 3rd picture's state until the browser tab's closed
When that happens, the global EC will get knocked off too

![image-20210302193510512](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210302193510512.png) ![image-20210302193525073](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210302193525073.png) ![image-20210302193550942](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210302193550942.png)

The EC on top of the stack is called the "active execution context". 
It is the only EC that is executing at the moment- everything else is paused 

- This is why JS is a one thread of execution language
- It is not necessarily a bad thing. This stack allows our computer to keep track of which functions are supposed to be executed before others

> What happens when something's knocked off the call stack?
>
> - It basically means that the function's execution context, will disappear from the computer's memory.
> - At least that's what you need to know for now, because actually the popped off execution context might keep living in memory. (will learn more later)

#### Next Topics

We will be discussing the 3 main aspects that make up an execution context. Each has their own dedicated lesson

![image-20210302200157037](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210302200157037.png)



### Scope & the Scope Chain

| TERM                | MEANING                                                      |
| ------------------- | ------------------------------------------------------------ |
| scope               | the environment a variable's declared in                     |
| scope of a variable | where we can access a certain variable                       |
|                     |                                                              |
| lexical scoping     | where we can access variables which depends on where they're declared |
| scoping             | Understanding where we can and cannot access variables       |
|                     |                                                              |
| blocks              | anything inside {curly braces}                               |
| variable lookup     | if a variable is not in the current scope, it will look<br />up the chain until it finds what it's looking for (or fails to) |

#### The 3 types of Scope

Before we begin, understand that any statement that applies to variables in our explanations work the same way for functions

Ex. If we can't access a function's internally defined variable from the outside... we can't access internally defined functions either. From the outside, that is

![image-20210302205721259](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210302205721259.png)

FUNCTIONS ARE BLOCK-SCOPED AS WELL

```js
let a=4
if(a>10){ 
  function shout(){ console.log("I'm ANGRY"); }  //can't access function outside block
}
console.log(shout()); // ReferenceError
```

This is only the case when strict mode's activated, but you should be using it anyway

//—————————————————————【】——————————————————————————

HOW `var` IS AN EXCEPTION TO BLOCK SCOPE RULES

- If we use `var` inside a conditional statement, it will be accessible outside of it as well as inside (this one perk is not worth using it, trust me)
- Instead, `var` variables are function scoped
  They still can't be accessed outside of their functions:

```js
function test(){ 
    var game= "Lichdom"; 
    return game; 
}
console.log(tray);	//ReferenceError
```



#### Visual Example

These images highlight where the scopes reach. The purple scope should wrap itself around the if block, fyi (image with it became too crowded with other words)

DISCLAIMER: The declaration of each function is also present in the global scope, but we're trying to keep things simple

TLDR: You can look up the scope chain, just not down or sideways

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210302212742375.png" alt="image-20210302212742375" style="zoom:80%;" /> ![image-20210302213416068](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210302213416068.png)

Notice how in the purple if block scope, `var millenial` is scoped in relation to the function its in. If it were declared with `let`, it'd be on the same level as `decade=3`

THE SCOPE CHAIN DOES NOT WORK BACKWARDS

- first() function can't access variables declared in the if block it's the parent of
- You look up the chain, not down

THE SCOPE CHAIN DOES NOT WORK SIDEWAYS EITHER

- You can't use variables defined in the second() function inside of the if block
  Vice versa is also true
- This is how it works in any language with lexical scoping

EASY WAY TO REMEMBER:

You have a family of 3: (Single Dad)	Brother	Sister
The children can live off their father
The brother and sister cannot live off each other- they're young and have 0 income
They can also live off their grandparents too (scope higher on the chain)

#### Execution Stack != Scope Chain

Scope Chain: The order in which functions are written in our code
Execution Stack: The order in which functions are called

The scope chain has nothing to do with the order the functions are called- the EC stack order is meaningless to it. 

The scope chain does have have similar variable environments though. 
Take a look at the next image: 

![image-20210302225313932](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210302225313932.png)

The first() scope has all the variables from the first()EC, plus global variables and possibly parent scope variables too

#### Example: Look UP the Chain

```js
let ayeDrive= 99;		//variable declaration 1

function test(){
  let ayedrive=10;		//variable declaration 2
  let a=4;
  if (a>1){ console.log(ayedrive); }
  
}
test()  //OUTPUT: 10
```

When we look for a variable...
FIRST, the computer looks inside the current scope for a variable
NEXT, it looks UP the blockchain for a variable it needs

- In this case, we define `ayedrive` twice, and the if block finds the one closest to it on the chain. `ayedrive=99` was found further up the chain than `ayedrive=10`
- It would do the same thing if `ayedrive=10` was defined in the if block's current scope

We are free to repeat our variable names if we really want to. 
Don't overuse this though, because you may pull the wrong value eventually

#### Example: Manipulate a Variable Down the Chain

```js
let array= [99, 101, 4, 5];

function test(array){
  function secondTest(){
      array= [40,40,40,40];  
  }
  secondTest();
  console.log(array[0]);	// OUTPUT LOG: 40 (not 99)
}
test(array)  
```

In this example, we manipulate the global array variable from the `secondTest()` scope
This scope is technically down the chain from the console.log()
Even so, `console.log(array[0])` logs the value from the redefinition inside

if `secondTest()` was not invoked, this wouldn't work. The output would be 44



### Variable Environments: Hoisting and the TDZ

People often believe that hoisting means "lifting variables up to the top of their scope" so they can be used no matter where they're called. 

That's only half true- they're scanned as top-level code before anything is executed (see the EC lesson)

![image-20210303001726566](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210303001726566.png)

NOT ALL HOISTS ARE EQUALLY USEFUL:

- If something is hoisted, it means it can be used before its declared in the code. 

- Sometimes this works flawlessly-like with function declarations- and sometimes you get strange behaviour

Instance 1) When you use `var` variables before they're defined

```js
console.log(`let's party like it's ${a}!`);
var a= 1999;
```

![image-20210303003010208](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210303003010208.png)

The variable may be hoisted, but it's initial value is undefined 
You'd expect it to work or at least produce an error, right?
This is a common source of bugs in ES5 code

Instance 2) Hoisting let and const variables

let and const variables are actually hoisted, but their values are set to "uninitialized"- making the hoist useless. This is why we consider them to not be

#### Hoist Table

> ![image-20210303002620671](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210303002620671.png)
>
> TLDR: Only use things after they're defined
> Function declarations are the only exception to this guideline

Function expressions and arrows are both just variables. Look at how they're declared:

```js
let functionName = (args) => output		//NAMED ARROW FUNCTION
const f2 = function (birthYear) {block}	// FUNCTION EXPRESSION
```

They're treated just like variables as well. 

- So if a function's declared with let/const, use their rules on the table. 
- Use the `var` variable rules if you declared a function with `var`, against Allah's wishes

#### What's a Temporal Dead Zone?

The TDZ is the part of the variable's current scope where it cannot be used. 
That would be any line before it was declared

![image-20210303004702531](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210303004702531.png)

You get different messages depending on how you misuse a variable

Variable does not exist: X is not defined
Variable does not exist YET: Cannot access X before initialization

#### Why does the TDZ Exist?

![image-20210303004640428](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210303004640428.png)

"Why TDZ?" Explanations

- Using variables before they're defined leads to serious bugs. 
  It's much better to get hit with an error message so you can fix up your sloppy code
- It wouldn't make sense for a const variable whose value refuses to be redefined, to have its variable redefined from "uninitialized" to whatever you're going for

"Why Hoisting?" Explanations

- The whole reason the creator of JS implemented hoisting was so we could use function declarations before they're declared. This is a must for certain techniques like mutual recursion
- Var hoisting was necessary to implement hoisting in the early days of JS. 
  Now it's still allowed, just discouraged

#### Example

Let's trigger a new error message we haven't seen before:

Why does it say "addArrow is not a function", when it is just not initialized yet? 

```js
addArrow(1,5)
var addArrow= (a,b)=> a+b;
```

![image-20210303012230244](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210303012230244.png)

Look at the hoist table- it says this function returns "undefined"
`addArrow(1,5)` is really just `undefined(1,5)` to JS on that line

——————————————————————————————————————————————

Let's switch `var` with `let or const` and see what happens

```js
addArrow(1,5)
let addArrow= (a,b)=> a+b;
```

![image-20210303012619007](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210303012619007.png)

#### Example: A Downside of Hoisting

As you know, var's initial value when called prematurely is `undefined`:

```js
function deleteShoppingCart() {
  console.log('All products deleted'); // logs this message
}
if (!numProducts) {
  deleteShoppingCart(); //invoke the function
}
var numProducts = 10; // its declared here
```

- The if statement is only supposed to call the function to log a message IF a certain variable is found to be false. (Falsy bait. Can equal 0, undefined, null, whatever)
- We actually declare that variable later with a value of 10, yet the if statement runs anyway (var's initial value is undefined when called pre-declaration)
- This would be a huge issue in a large project, and the root cause is tough to spot thanks to no error message

#### Best Practices to Avoid Bugs

- Avoid using `var`
- Declare all your variables up at the top of your documents
- Type your functions at the top of your document as well- even the declaration kind



### this. Keyword

the "this" keyword is a special variable that's created for every new function. It points to the "owner" of the function it's used in.

The variable is NOT static. It depends on how the function is called, and won't exist until the function is invoked.

#### What "this" refers to

"this" will point to different things depending on the type of function we use it in. No matter what, it will never point to the function itself or the variable environment

![image-20210303200622788](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210303200622788.png)

- If you're not using strict mode, using "this" on a function not defined in an object will point to the window object (common source of bugs)

Arrow Functions:

- If you use "this" on an arrow function, it will use the "this" for its parent function/scope. 
- If it has no parent object, "this" will point to the global object- the only scope above the function's (official term: Lexical "this" keyword)

Example 1: Use "this" on a regular function

```js
'use strict';
function buck(){
  console.log(this);
}
buck()	//OUTPUT: undefined
```

Example 2: Use "this" in a callback function

```js
'use strict';
const numeros=[5,10,4,12];
let total=0; //start

numeros.forEach((element)=>{ 
  total= total+element; //add newest element to total (accumulates)
  console.log(this);
})
```

When used in a callback, the this variable points to the global object, even when strict mode's enabled.

![image-20210303202301040](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210303202301040.png)

#### Object Literals do not Create Scopes

The greet method is an arrow function. 
When we call it, we get the "this" keyword of its surrounding function/scope. 
It should refer to the object it's in right? WRONG

```js
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(this.year);
  },
  greet: () => {
    console.log(this);  // window object, NOT THE PARENT OBJECT
    console.log(this.firstName); // window.firstName is undefined
  },
};

jonas.greet();		// has strange outputs 
jonas.calcAge();	//works as expected
```

![image-20210303222509967](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210303222509967.png) ![image-20210303233926338](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210303233926338.png)

- The object it's placed in does NOT have its own scope. 
  An object literal is just a way to hold data. 
- Everything inside that object is in the global scope- because the object itself was defined on the global scope 
- Arrow function's out on the global scope, meaning "this" points to the window object

//—————————————————————【】——————————————————————————

One more noteworthy point from the last example is why we get "undefined" for our second console.log();
The window object does exist, but it doesn't have a firstName property defined inside
This is why it returns "undefined" (`this.firstName= window.firstName`)

TLDR: When we try to access a property in an object that doesn't exist, we get undefined instead of an error. `var` variables add window properties, and this is reason 200 for why they blow :)



#### Showing how "this" is non-static

```js
const jonas= {
  year: 1991,
  calcAge: function(){
    console.log(this);
    console.log(2020-this.year);
  }
}

const violet= {
  year: 2015,
  surName: "Schondelen"
}

violet.calcAge= jonas.calcAge // we borrow jonas' method for violet
violet.calcAge();
```

We borrow the `calcAge` function which contains "this" from the Jonas object. We place our borrowed function inside the violet object.

Now, when we invoke it by typing `violet.calcAge();`, the "this" keyword must decide whether to refer to...
the violet object- where it's being called
the jonas object- where "this" was initially defined

![image-20210303220424291](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210303220424291.png)

It refers to the violet object. That is what we mean when we say "this" is not static



### this Keyword Examples

#### Inside Objects and Methods

```js
const video={
  title: "Land Before Time",
  season: 4,
  play(){console.log(this);} // this = entire object
};

video.play();
```

![image-20210222224814253](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210222224814253.png)

`this` is equal to the entire object even when you're declaring a new function as a property for it- which would be outside of the initial object declaration.

```js
video.stop= function(){
  console.log(this);
}
video.stop();
```

![image-20210222225148235](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210222225148235.png)

#### Inside Regular Functions

`this` references the global object in our first example here since we aren't using strict mode (if we were, it'd return "undefined")

```js
function playMovie(){ console.log(this); }
playMovie();
```

![image-20210222225436648](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210222225436648.png)

We can use functions to define objects instead- then `this` will refer to the objects we're creating. This is easiest to achieve using constructor functions

```js
function Game(gameName){
  this.title=gameName;
  console.log(this);
}
const badGame= new Game("Action 52")
```

![image-20210223000045315](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210223000045315.png)

### this Keyword Shortcomings

#### Functions in Methods

You could also call this scenario "trying to use this keyword inside a nested function within an object"

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210223000954881.png" alt="image-20210223000954881" style="zoom:80%;" />

If you use the `this` keyword inside a function that's nested more than 1 level deep inside an object, it won't reference the object it's inside of anymore. 

- It'll go back to referencing the global object if you're using sloppy mode
  It'll return undefined if you're in strict mode

EXAMPLE:

```JS
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    const isMillenial= function(){
      console.log(this);	// should log entire object
      console.log(this.year>=1981 && this.year<=1996);	
        // should return Boolean based on object properties 
    }
    isMillenial();
  },
};
jonas.calcAge();
```

![image-20210303235940553](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210303235940553.png)

#### ES5 WORKAROUND:

Define the this keyword as a new variable, on the same nesting level as the function you're attempting to use "this" in. Replace evry instance of "this"  in your nested function with your replacement

```js
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    const self= this; // this keyword works here. Use it to create a REPLACEMENT
    const isMillenial= function(){
      console.log(self);	// should log entire object
      console.log(self.year>=1981 && self.year<=1996);
      // should return Boolean based on object properties 
    }
    isMillenial();
  },
};
jonas.calcAge();
```

![image-20210304000402724](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210304000402724.png)

It's common practice to call the replacement for this keyword "self" or "that"

#### ES6 Workaround 

Arrow functions use their parent function's this keyword anyway. 
It being a function for a method should pose no problem

Funnily enough, this quirk is why you should never use arrow functions as methods. However, they're excellent for functions inside methods (nested 2+ levels deep)

```js
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    const isMillenial= ()=>{
      console.log(this);	// should log entire object
      console.log(this.year>=1981 && this.year<=1996);
      // should return Boolean based on object properties
    }
    isMillenial();
  },
};
jonas.calcAge();
```

![image-20210304001911110](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210304001911110.png)

#### The Above Pitfall Affects Built in Functions too

This often happens when using built-in functions like `forEach` 

![image-20210304002506063](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210304002506063.png) ![image-20210304002538642](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210304002538642.png)

- Fortunately, they have a special parameter set up called `thisArg` as a workaround. 
- It lets you reference the object you're in

EXAMPLE OF THE WORKAROUND: 

Display the title of each track beside each tag

```JS
const track={
  title:"Song of Storms",
  tags: ['a','b','c']
}
```

WANT: Song of Storms: a	Song of Storms: b ... you get what I mean

```js
const track={
  title:"Song of Storms",
  tags: ['a','b','c'],
  showTags(){
    this.tags.forEach(tag=>{console.log(this.title, tag)}, this) 
      // we made     					thisArg= track object^^
  }
}
track.showTags(); //invoke the function or else it does nothing
```

![image-20210223002752069](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210223002752069.png)

### Async JS: The Event Loop

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210514125304162.png" alt="image-20210514125304162" style="zoom: 90%;" />

If needed, review the "Behind the scenes JS" chapter in your JS theory document

- The event loop is the essential piece that makes running asynchronous tasks possible
  JS is single threaded, so it can't do multiple things at a time like Java can
- Whenever the callstack is empty, the event loop takes callbacks from the callback queue and puts them in the stack so they can be executed

This is how JS can handle multiple things happening at once- we call it a non blocking concurrency model. You might be wondering however; if JS is single threaded, how can it do anything asynchronously? AKA. How does the non blocking concurrency model even work?



#### How Non-blocking Concurrency Works

Asynchronous task examples: AJAX calls, fetchAPI requests, loading images, load events

- None of these happen on JavaScript's main thread of execution (the call stack)
- Instead, these operations go down on the specific web API's environment- so they don't block the execution thread
- This is why "loading image" has a thumbs down and is colored red on the following image. It does not occur there, and it would slow things down massively if it did

![image-20210514131537295](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210514131537295.png)

#### The Callback Queue

The `el.classList.add()`, is in the middle of the code snippet we're analyzing. 

Although waiting for the image to load happens asynchronously, the actual event handler will be moved into the callback queue

![image-20210514132735007](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210514132735007.png)

The CB queue is a to-do list for our browser. What happens in a situation like this?

- Let's say you use setTimeout() to execute a task after 5 seconds. 
  The CB gets moved to the CB queue, and should be executed after the 5 seconds are up. 

- There are other CB's in front of it however; and perhaps it takes 1 second for your computer to execute them all first. What now?

Your setTimeout() function's CB will actually run after 6 seconds, not 5. This is why building your stopwatch project was impossible to do accurately with just setTimeout()

#### The Microtasks and Macrotasks Queue

MICROTASKS QUEUE

The microtasks queue is essentially the same thing as the callback queue, just with higher priority

- Any callbacks inside `.then()` methods used for promises get moved into the microtasks queue (we refer to these types of CB's as MICROTASKS now)
- Every microtask from this new queue will get executed before anything from the callback queue does

![image-20210514141535989](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210514141535989.png)

MACROTASKS QUEUE

- This functions similar to the Microtask queue, but its reserved for asynchronous functions like setTimeout or setInterval
- Goes after the microtask queue

#### Event Loop's Purpose

Simple Version: The event loop is what decides when each callback function is executed

The event loop will look into the callstack and look for 2 things:

1. Sees if the callstack is empty aside from the GEC
   Means no other code's being executed at that exact moment
2. Checks if the microtask queue has any microtasks left that need to be executed first
   No callback queue CB's can go before microtasks are all finished

If these conditions are met, it will take the first callback from the CB queue and place it in the callstack for execution (called an "EVENT LOOP TICK")

JS HAS NO SENSE OF TIME

- The engine just executes whatever it's given as soon as possible, and the event loop dictates when callbacks get executed
- All asynchronous operations happen outside the engine, so we can't tell how long they take either

STARVING THE CALLBACK QUEUE

Since all microtasks have priority over regular callbacks in the CB queue, what happens when microtasks create new ones? We've seen AJAX calls chained to other AJAX calls. 

- They create new microtasks, all of which go before anything from the callback queue. 
- This has the potential to starve and delay the callback queue from being executed. 
  We give an example in the next lesson

#### Is DOM Manipulation Asynchronous? (No)

You might think that DOM manipulation is asynchronous because it requires a web API, and their callbacks are moved to the callback queue; but it's not.

Earlier, we had an example where we had a load event listener in our code:

```js
el.addEventListener('load', ()=>{
    el.classList.add('fadeIn')
})
```

- The load event listener registered a callback function which would eventually be moved into the callback queue
- Before that can happen, the load EVENT (which is asynchronous) needs to happen first
- After the load event, the event handler gets put into the CB queue and waits for the event loop to pick it up
- The event loop will eventually move the event handler into the callstack so it can be executed- but only after it detects the callstack is empty aside from the GEC

### Async JS: The Event Loop in Practice 

IMMIDIATELY RESOLVED PROMISES:

```js
Promise.resolve()
```

This allows us to build a promise that gets resolved immediately. 
The success value of that resolved promise is what you place inside the brackets

EXECUTION ORDER: ![image-20210519153858488](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210519153858488.png)

#### Execution Order Experiments

We've just learned all about when different kinds of code actually get executed in the callstack. Take these snippets, and guess which logs get sent to the console first

EXAMPLE:

```js
console.log('Move A: Synchronus');

setTimeout(_ => console.log('Move B: Macrotask timeout'), 0);

Promise.resolve().then(_ => console.log('Move C: Microtask promise'));

window.addEventListener('load', () => {
    console.log('Move E: Event handler in callback queue')
});

console.log('Move D: Synchronus');
```

![image-20210519153038298](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210519153038298.png)

#### Intentionally Slowing Down the Callback Queue

In the last lesson, we said it was theoretically possible to slow down asynchronous tasks in the callback queue by wasting time in the microtasks queue.

Let's code a microtask that deliberately takes a long time to finish. Loop over a ridiculously large number and slow down an asynchronous setTimeout() method

```js
setTimeout(() => console.log('Log_B: 0 sec timer'), 0);
Promise.resolve('Log_C: Resolved Promise 1').then(res => {
  for (let i = 0; i < 9000000; i++) {}
  console.log(9);
});

/*OUTPUT: 
9 ...***some lag***... "Log_B: 0 sec timer" */
```

Don't try this on your machine if you can help it
Your laptop will sound like a jet engine

# Recursion

### Recursion Demystified

- Recursion is an efficient way to problems, and is often used in situations where we don't know how many iterations there'll be
- They can replace for and while loops, while being more efficient as well

APPROACH:
Solve a major problem by solving a series of mini-problems
Achieved by having a function call itself again, but with different arguments

#### The 2 Main Parts of a Recursive Function:

BASE CASE: The stopping condition
RECURSIVE CALL: The function calling itself again IF the stopping condition's not met

#### Example 1: The Dragon Analogy

PREMISE:

- A dragon has the ability to identify if a number is even or odd, while humans do not
- You have an array of values, and want to know which numbers are odd, and which are even
  [8, 7, 3, 4, 1, 12]
- The dragon's lazy, and only tells you if the first value in an array is odd
  But he agrees to hold up that deal with as many arrays as you want

SOLUTION ON PAPER:

Base case: When we have no more values for the dragon to identify for us
Recursive call: Scamming him by giving him the same array shortened each time

```
Give drag	[8, 7, 3, 4, 1, 12]				8 is even, he says
Give drag	[7, 3, 4, 1, 12]				7 is odd, he says
Give drag	[3, 4, 1, 12]					3 is odd, he says
Give drag	[4, 1, 12]						4 is even, he says
Give drag	[1, 12]							1 is odd, he says
Give drag	[12]							12 is even, he says
```

SOLUTION IN JS:

```JS
let arr= [8,7,3,4,1,12]		// array mutated after each function iteration
let orig= arr.concat([])	// cloning to preserve the original
let fill= []	// fill with "even" or "odd" answers from dragon
let counter=1	// an optional counter to help us keep track of our loops

function dragon(num){
    // the dragon returns "odd" or "even"
    if (num%2===1) return "odd"
    else return "even"
}

function boy(arg){
    // Base Case: The boy's array reaches a length of 0
    if(arg.length===0) return 

    // Recursive call: Run ƒ() again, but with a shortened array arg
    console.log(`rescursive call ${counter}`)
    counter++ 
    let result= dragon(arg[0])
    fill.push(result)       // push "even" or "odd" to the fill array
    arr.shift()             // remove first value of our starting array
    return boy(arr)			// call this ƒ() again!
}

boy(arr)
console.log(orig, fill)
```

![image-20210624132714819](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210624132714819.png)



#### Example 2: Replace for loops

Let's make a function that adds up the sum of all numbers leading to the specified value 
If I feed the function the number 6, I'd get 6+5+4+3+2+1 = 21

for loop approach:

```js
//for loop approach
let total= 0
for(let i=6;i>0;i--){
    total= total+i;
}
console.log(total); // OUTPUT: 21
```

recursive approach:

```js
let sum= 0
function rec(numero){
    // BASE CASE: When the number we initially supplied equals 0
    if(numero===0) return console.log(`the total is ${sum}`) 
    // RECURSIVE CALL: Run ƒ() again, but with a lower value arg
    sum= sum + numero   	// add the number to the total
    numero--            	// iterate argument down 
    return rec(numero)      // call ƒ() again
}
rec(6)  //OUTPUT: the total is 21
```

#### Stopping Infinite Recursion

- If you write a recursive loop improperly, or are simply not finished, you risk crashing your browser when it loops to infinity
- You may also find it useful to stop your function from looping after a certain point, then returning an output that lets you know the operation was a failure

SOLUTION:
To stop recursion past a certain point, use a counter variable that iterates up by 1 each loop
Place a guard clause in your recursive function that stops the function from recalling itself

EXAMPLE: Countdown to 0 with jumps of 2

```js
let counter = 0;
let fill = [];
function countdown(inp) {
  // BASE CASE: When inp is equal to 0
  if (inp === 0) return fill;
  if (counter === 40) return "failure! we skipped zero";

  fill.push(inp - 2);
  // RECURSIVE CALL
  counter++; // iterate up
  return countdown(inp);
}

console.log(countdown(17)); //OUTPUT: failure! we skipped zero
```

#### Understanding Complex Recursive Operation

- In our examples, we stuck to performing ONE ACTION...
  then calling the function we were in again- if our result was not what we wanted
- In more complex problems, we'll be performing MANY SEQUENTAL ACTIONS....
  then calling the function we were in again- if our result was not what we wanted

Both scenarios use the same logic, but you need to be able to recognize when a problem is recursive

TIPS AND GOOD PRACTICES

1. A problem can be solved recursively if...
   You do not know exactly how many iterations it'll take to solve a problem
   A certain set of actions will repeat

2. The best way to implement recursion is to list a sequential set of actions that you know will repeat in English/pseudocode first
3. Use a counter and guard clause for 2 main reasons; 
   To protect from webpage crashes && set an action in case what you're looking for has "no solution"

> I put "no solution" in brackets because sometimes recursive looping past a certain point is expected, and you have a preset return value for it

EXAMPLE: Cash Register Project in FCC

- If we did not have adequate change, the recursive ƒ() we built would loop forever
- However, we had a default output specified for us in the problem description in case we didn't have enough money for exact change

### More Challenging Problems

#### Steamroller

OBJECTIVE: 		[FCC Link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller)
Flatten an array filled with nested arrays without the dedicated flat method

```
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"]
```

SOLUTION:

```js
function steamrollArray(arr) {
    // BASE CASE: When the arg you feed the ƒ() no longer contains any nested arrays
    let nestedInd= scanner(arr) // creates an array of nested array entries' indexes
    if(nestedInd.length===0) return arr
    // RECURSIVE CALL: Run ƒ() again, but with a spread out nested array
    arr= spreadEm(arr,nestedInd[0]) 
    // mutate arr into a slightly more flattened version
    return steamrollArray(arr)  // iterate again
}
console.log(steamrollArray([[["a"]], [["b"]]])) 
console.log(steamrollArray([1, [2], [3, [[4]]]])) 
console.log(steamrollArray([1, [], [3, [[4]]]])) 
console.log(steamrollArray([1, {}, [3, [[4]]]])) 

function scanner(arr){ 
    // Creates an array that tells you the index numbers of all nested arrays
    let arrayBooleans= arr.map((entry,i)=> {
        if(Array.isArray(entry)) return i
        else return ""
    })
    return arrayBooleans.filter((v)=>v!=="")
}

function spreadEm(arr, ind){
    // Replaces a nested array entry with its contents spread out
    let firstHalf= arr.slice(0,ind)
    let replacedVal= [...arr[ind]]
    let secondHalf= arr.slice(ind+1)
    return [...firstHalf, ...replacedVal, ...secondHalf]
}
```



# The Ties that Bind!

### Difference between Immutable/Mutable

| data type                   | includes...                                                  | properties                                            |
| --------------------------- | ------------------------------------------------------------ | ----------------------------------------------------- |
| primitives/ primitive-types | strings, numbers, Booleans, undefined, symbol, null (any non-object) | immutable- clone changes are local to themselves      |
| objects / reference-types   | objects, arrays, maps, sets, functions, reg expressions      | can be changed<br />changes to clones affect original |

Almost everything is an object: ![image-20210319230050861](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210319230050861.png)

#### Methods Applied on Reference Types vs Primitives

We've concluded that primitives are immutable while objects are not. 
That means methods applied on primitives technically have no effect on the original 

Take a look at this array. 
We're going to apply a method to it, and see if it affects the original array:

```js
// CHANGING AN OBJECT
let arr= [0,1,2,3,4]
arr.push(9)		// makes lasting change on the original array
console.log(arr);
```

![image-20210319231053960](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210319231053960.png)

Now, let's try doing this to an immutable string. 
We'll apply a method to it and see if it affects the original

```js
// UNSUCCESSFULLY TRYING TO MUTATE A STRING
let stringy= "I have a laptop open"
stringy.toUpperCase()	// makes no lasting change to the original string
console.log(stringy);
```

![image-20210319231248685](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210319231248685.png)

#### "Changing" Immutable Primitives

If we want lasting change for an immutable primitive in JS, you have 2 options
a) Redefine your primitive's variable (the variable can be changed)
b) Clone your original primitive via a new variable

```js
// Method a)
let stringy= "I have a laptop open"
stringy= stringy.toUpperCase()	// manually redefine the primitive 
console.log(stringy);
```

Both result in: ![image-20210319231847694](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210319231847694.png)

```js
// Method b)
let stringy= "I have a laptop open"
let mutatedClone= stringy.toUpperCase()	// clone your orig primitive w/ your changes
console.log(mutatedClone);
```

#### The Problem w/ Cloning Mutable Objects

We've learned that reference types are able to be affected by methods permanently due to their mutable nature. That can be perceived as a good thing, but it isn't particularly good when you make copies of them

```js
let orig= [0,1,2,3,4,5]
let clone= orig	// we ONLY target the clone with this method change
clone.push(111); // this will unfortunately affect the clone and the original
console.log(orig);
console.log(clone);
```

![image-20210319234421905](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210319234421905.png)

There are some workarounds for this, and you can find tem in the "Overcoming Binds" lesson in this chapter

> WARP: jjkae2022
>



### Primitives VS Objects 

This lesson is an in-depth explanation for why what's described in the previous lesson happens. Feel free to skip this lesson if you're low on time. The previous and next lesson may be all you need

#### What's the Difference?

In JS, a primitive is data that is not classified as an object and has no methods. 
Anything that is not a primitive is seen as an object by JS

- When discussing memory, we call objects "reference types"
  We also call primitives "primitive types"

![image-20210304170234668](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210304170234668.png)

All the objects/reference-types get stored in the memory heap
The primitives get stored within the call stack (inside the execution contexts)

#### Common Source of Confusion

Let's try using a primitive value before and after we redefine its value:

```js
let age=30;
let oldAge= age; //saves the initial age value 30

age=31
console.log(age);	// OUTPUT: 31
console.log(oldAge);	// OUTPUT: 30
```



Now, let's conduct an experiment with objects instead:

```js
const me={
  name: "Jonas",
  age: 30,
}
const friend= me;	// we borrow me object to create a new friend object

friend.age= 27;		// we set the friend object age to 27
console.log('Friend object:', friend);		// me age SHOULD still be 30 (but isn't)
console.log('Me object:', me);				// friend age is 27 as expected 
```

![image-20210304171751396](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210304171751396.png)

Why does changing my friend object change the me object? 
Explanations will follow to explain why this happens

TLDR: In JS, you can't actually clone an object this way like you can with variables. What you're actually doing is creating a second variable that points to the same object. Any changes you make on one will affect the other. There are workarounds, which we'll explore in the next lesson (not the next section)

//———————————————————————————————————————————————

#### Explaining The Primitive Value Example

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210304173723804.png" alt="image-20210304173723804" style="zoom:80%;" />

UNDERSTAND THESE RULES:

- The identifier actually points to the address of a variable/object, not the value 
- The value at a certain memory address is immutable- it cannot be changed
- Since we're dealing with primitives, all this occurs in the call stack

EXPLANATION:

 ![image-20210304173608324](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210304173608324.png) ![image-20210304173643844](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210304173643844.png)

(Left) 	What occurs when `let oldAge=age`
JS creates a unique identifier with the variable name. 
It allocates a bit of memory to create an address for it. 
The value will be stored in that memory at the address

oldAge will point to the same memory address, since it's set equal to age

(Right)	What happens when `age=31`
A new piece of memory is created. 
The age identifier now points to that, while oldAge points to the original one

The value of address 0001 does not become 31 (it's immutable, remember?)

#### Explaining the Reference Values Example

Things work differently in this example, leading to the aforementioned strange behaviour.

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210304195200502.png" alt="image-20210304195200502" style="zoom:80%;" />

UNDERSTAND:

- When a new object is created, it is stored in the heap
- Objects may be too large to be stored in the sack, so they go to the heap- which is essentially just a giant memory pool

EXPLANATION: for declaring the "me" object

> ![image-20210304200556473](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210304200556473.png)
>
> ignore the age and oldAge stuff

1. We declare the "me" object, leading to an identifier being made in the call stack
2. The identifier has its own bit of memory where it stores the address of this object inside the heap (we have memory dedicated to the object in the heap as well)
3. Inside the heap is where the value of our object is actually stored
   The call stack just contains a REFERENCE to where it's stored (get it now?)

EXPLANATION:

1. By setting "friend" equal to "me", it'll point to the same memory address as the "me" identifier. That's all the call stack will do here

2. Since they both point to the same location, applying changes to one of our object variables will affect the other.

With variables, a new piece of memory is created in the call stack when we change 1/2 variables. But we can't do that for objects because they're stored in the heap instead



### Shallow Cloning Objects & Arrays to Overcome Binds

Let's revisit the strange quirk with JS objects- the one that doesn't let us properly clone them. Instead, we just create 2 variables that always point to the same object.

The workaround detailed in this lesson revolves around methods that merge 2+ existing objects: `Object.assign` for objects, and `concat` for arrays

- We essentially just plop 2 objects into a method and it spits out a new one- a summation that has its own dedicated spot in the heap 
- To clone something, make one of the inputs an object with nothing inside

#### Array Example

```js
const aden= [62,4,5,9];
const anai= aden;
aden[0]= -1;
console.log('aden:', aden);	// should be changed
console.log('anai:', anai);	// should NOT be changed, but is 
```

![image-20210304205524242](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210304205524242.png)

```js
// WORKAROUND 
const aden= [62,4,5,9];
const anai= aden.concat([]) // combine with an empty array

aden[0]= -1;  // change aden's first entry  to -1
console.log('aden:', aden);
console.log('anai:', anai); // anai's first entry remains the same
```

![image-20210304212156611](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210304212156611.png)

Funnily enough, `Object.assign` works for arrays as well, but this is a method specifically designed for arrays. So use this regardless

#### Object Example

We'll skip the part where we show the object not working like we want it to. If you want to see what that looks like, go look at the "Common Source of Confusion" section of the last lesson

```js
const me={
  name: "Jonas",
  age: 30,
}
const friend= Object.assign({}, me)	// MUST add the empty object first or this fails!!
friend.age= 27;	// we set the friend object's age to 27
console.log('Friend object:', friend);
console.log('Me object:', me);
```

Presto! ![image-20210304213214275](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210304213214275.png)

#### The Limitation with these Techniques

- The `object.assign` method only creates shallow clones of our objects. 
- If you have nested objects or arrays, any changes you make to your clones will affect the original again (vice versa is also true)
- This is exactly what we're trying to avoid

```js
const girl={
  name: "Kath",
  age: 29,
  family: ["Sis", "Father"]
}

const girlClone= Object.assign({}, girl)	
girlClone.age=25; // shallow properties still work	

girlClone.family.push("Horse")	
// this will affect both girls, when it should only affect the clone

console.log('orig girl:', girl);
console.log('clone girl:', girlClone);
```

![image-20210304214424684](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210304214424684.png)         ![image-20210304214524007](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210304214524007.png)

This problem persists when working with any nested object types ^^

SOLUTION: Deep Cloning

#### The Importance of Immutability

When it comes to reference objects, sometimes we need to know when one object is exactly the same as another

- Looping through their content to see if there's a difference is performance exhaustive
  Although some tools like LoDash's isEqual() method do exist
- It's performance-efficient to see if 2 objects point to the same reference or not

This is why we learned how to clone objects by creating new versions of them with reference points to another location in your computer (shallow cloning and deep cloning strategies)

### Deep Clones of Arrays and Objects w/ JSON

#### Review of Last Lesson

- As you know, cloning an object results in issues when you apply changes to the original object or its clone. 
- Both will have their changes afflicted to the other. 
  Can be remedied with `object.assign` shallow clones, depending on array/obj values 
- If your object/array have nested arrays/objects as values, changes to them will still affect both the clone and the original. We need a DEEP CLONE

#### Native Deep Cloning w/ JSON (limited)

```js
let vari= JSON.parse(JSON.stringify(objectName))
```

This is the easiest way to create a deep clone without an external library, but it has a lot of limitations. It will not successfully copy the following...

- Date, null, NaN, functions, undefined, Infinity, RegExps, Maps, Sets, Blobs, FileLists, ImageDatas, sparse Arrays, Typed Arrays or other complex types within your object

TLDR: Use this method for flat values, nested arrays/objects, and nulls. That's it

DEMONSTRATION OF DATA LOSS:

This method will lose any JS values that have no equivalent in JSON. Behold 

```js
let obj = {
  a: null,
  b: NaN,	//turns to null
  c: Infinity,	//turns to null
  d: undefined,	// DISAPPEARS
  e: function () {},	//DISAPPEARS
  f: Number,	//DISAPPEARS
  g: false,
  h: 12,
  i: 'mages',
  j: [1, 2, 3, 4],
  k: { 0: 'roserade', 1: 'leavanny' },
};

let deepClone = JSON.parse(JSON.stringify(obj));
console.log(deepClone);
```

![image-20210323091944594](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210323091944594.png)

#### EXAMPLE OF IT WORKING

Assuming you don't have any of the forbidden data types listed in your array/object, this actually works quite well

```js
let first= [0,{4:"four"},[5,6,7,8]]
let deepClone= JSON.parse(JSON.stringify(first));
deepClone[2][0]=9 // only changes the deepClone, not the original 
console.log(first, deepClone);
```

![image-20210323093003007](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210323093003007.png)

For fewer limitations, use Lodash or jQuery

![image-20210323093317316](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210323093317316.png)

#### EXAMPLE 2 OF IT WORKING

```JS
let dogsClone= JSON.parse(JSON.stringify(dogs))
dogsClone[0]["owners"][0] = "Allison"
console.log(dogs,dogsClone);
/*
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  all other entries...
];
const dogsClone = [
  { weight: 22, curFood: 250, owners: ["Allison", "Bob"] },
  all other entries...
];
*/
```



### Deep Cloning with LoDash 

If you forget how to install 3rd party packages with NPM, check out the lesson in the "Modern JS Development" chapter

You can either install the full library or just the deep clone function file on its own
Deep Clone feature only: `npm i lodash.clonedeep` (may require a bundler)

#### Procedure

We're going to use the full library for this demonstration:

- Install the 3rd party package's ES Modules build 

- Import the function using the feature's JS file name and location

As of 2021, each feature has a dedicated JS file with 1 default export, so use the default exports syntax when we call upon the function in our main.js file

SYNTAX:

```js
import cloneDeep from './node_modules/lodash-es/cloneDeep.js'
```

We are now free to use `cloneDeep()` just like any regular function

DEMONSTRATION:

```js
import cloneDeep from './node_modules/lodash-es/cloneDeep.js'

const girl={
  name: "Kath",
  age: 29,
  family: ["Sis", "Father"]
}

const girlClone= cloneDeep(girl)	// create the deep clone
girlClone.age=25; 					// change shallow property
girlClone.family.push("Horse")		// change deep property

console.log('orig girl:', girl);	
console.log('clone girl:', girlClone);
```

![image-20210524162830980](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210524162830980.png)

#### Alternative Lodash Approaches

Choice 1A: Download full library
Choice 1B: Download just the deep clone function (may require a bundler)
https://www.npmjs.com/package/lodash.clonedeep

Choice 2A: Use a bundler to use the commonJS module build of Lodash
Choice 2B: Use the ES Modules version of Lodash and use an import statement (as we did)

In the last example, we used approach 1A 2B



### Primitives/Objects in Functions

The immutable/mutable nature of these 2 types of data come into play when writing functions as well

- Objects changed inside a function WILL have those changes reflected in the original
- Primitives which are immutable may be changed inside a function WITHOUT those changes being applied to the original

#### EXAMPLE 1

```js
const flight = 'LH234';
const jonas = { name: 'Jonas Schmedtmann', passport: 'BYNRXESVUSLFQOC' };

const checkIn= function(flightNum, passenger){
  flightNum= "LB999" // flightNum is a clone of flight 
  passenger.name= "Langdon Donovan"; // passenger is a clone of the jonas object
}

checkIn(flight,jonas); //invoked the function
console.log(flight); //same as it was initially (immutable string)
console.log(jonas); // changed (mutable object)
```

![image-20210320014858194](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210320014858194.png)

In this example, we deal with cloning. 
The parameter `flightNum` is a clone of the flight string (immutable)
The parameter `passenger` is a clone of the jonas object (mutable)

```js
//when we pass these as arguments, it's the equivalent of...
let flightNum= flight;
let passenger=jonas
```

Remember, changing mutable clones affects the original
Changing immutable clones does not affect the original

- This is why our results show us that the flight string did not get changed when its clone was mutated in the array. 
- The jonas object did get changed when its clone was mutated in the array

#### Multiple Functions Targeting 1 Mutable Object

This is a common source of error when multiple people or teams are working on a project together. Any function can change the original mutable object, leading to errors.

```js
const flight = 'LH234';
const jonas = { name: 'Jonas Schmedtmann', passport: 'BYNRXESVUSLFQOC' };

const checkIn = function (flightNum, passenger) {
  flightNum = 'LB999'; 
  passenger.name = 'Langdon Donovan'; 
  // Added an alert system
  // if condition: Object passport # must match the original one in the jonas object
  if (passenger.passport === 'BYNRXESVUSLFQOC') alert('Checked in');
  else alert('Wrong passport!');
};

const newPassport = function (person) {
  person.passport = 'AKGDCNGUAVEUETR'; // this changes jonas' passport number
};
newPassport(jonas);
checkIn(flight, jonas); //results in an error alert message
```

![image-20210320022112270](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210320022112270.png)

The `newPassport` changes the passport number in the jonas object, which eventually leads to the `checkIn` function giving us a "Wrong password" alert

#### Passing by Value/Reference

When talking about functions, many people will refer to what we just did as "passing by reference" or "passing by value". 

| TERMINOLOGY          | what it refers to                                            |
| -------------------- | ------------------------------------------------------------ |
| passing by value     | when we pass in immutable primitives as parameters           |
| passing by reference | when we pass in mutable objects as parameters<br />technically an incorrect saying, since JS doesn't even have passing by reference like C++ does |

- JS does not even allow you to pass by reference. 
  It only allows coders to pass by value
- When we pass in an object to a function, it is true that we pass a reference to its location- that's why it's mutable. 
- HOWEVER, understand that this reference itself is a value

### Why immutability Matters 

> SOURCE: [Actions and reducers: updating state · Human Redux (reduxbook.com)](https://read.reduxbook.com/markdown/part1/03-updating-state.html)

Objects in JavaScript are passed by reference

```js
const one = {
  isAwesome: true
}

// this is just creating another reference
// to the same object
const two = one

// so really, they're still the same object
console.log(two === one) // logs `true`

// even if we change the value of one
// we're changing both of them.
two.isAwesome = false

// so not only are these are still the same object
console.log(two === one) // still logs `true`

// we actually changed the value of both of them
console.log(two.isAwesome, one.isAwesome) // logs `false`, `false`
```

So, that means if we change values inside an object and we want to know if something has changed, we'd have to make a full copy so we can store individual properties, and then compare each property of the new and old object to determine what, if anything, has changed.

So we could do something like:

```js
// start the same way
const one = {
  isAwesome: true
}

const two = Object.assign({}, one)
lodash.isEqual(one, two) // logs `true`

// but now if we change one
one.isAwesome = false

// and we do a "deep" comparison again
// their properties have now diverged
lodash.isEqual(one, two) // logs `false`
```

## Understanding immutability

The approach of looping through an object to check for differences may work fine when you've only got a few things to keep track of, but in a large application you often have lots of properties you're tracking, on potentially thousands of objects. Checking each one of them any time *any* action occurs starts to become a big performance issue.

We can use the concept of "immutability" to help address this problem. As it turns out, checking whether something is the same reference is *much* faster/easier. So rather than performing a deep comparison of properties with a utility function like `isEqual` from the Lodash library:

```js
lodash.isEqual(object1, object2)
```

Instead, if we could *somehow know* that any time state inside an object changed that we'd get a *new object reference*, then our check could be simplified to just this:

```js
object1 === object2
```

Unsurprisingly, that type of comparison is *much much faster* in JavaScript. Because instead of having to loop through and compare every value of every property in an object, we instead just check if we got the same object, or a different object!

That’s the basic idea of “immutability.” It’s doesn't necessarily mean that we make objects that are somehow frozen, so they *cannot* be changed. It means that we don't *change* the old objects, we *replace* them instead. I know I was confused by this initially. It is possible to implement *enforced* immutability with tools like Immutable.js, but you don’t *need* tools for it. Plain JavaScript will do fine, thank you.

#### Examples

Rather than doing:

```js
const obj = {
  something: 'some value',
  other: 'another property value'
}

// here we’re just editing `obj` in place
obj.something = 'some other value'
```

Instead, you do it like this:

```js
const obj = {
  something: 'some value',
  other: 'the original value'
}

// Object.assign copies properties from all the objects
// onto the first object from left to right.
const newObject = Object.assign({}, obj, { something: 'some other value' })
// So now without changing `obj` we've created a brand new object
// that contains all previous properties and includes the new value
// for our changed `.something` property

// {
//   something: 'some other value',
//   other: 'the original value'
// }

// Using "Object spread"
// If your environment supports it, you can
// also use Object spread syntax to accomplish the
// same thing as Object.assign
const anotherNewObject = { ...obj, something: 'some other value' }
```

We can do the same with arrays of objects, rather than editing them in place:

```js
const myStuff = [{ name: 'Henrik' }]

// push modifies the array defined above
myStuff.push({ name: 'js lovin fool' })
```

You can return a new array, which can we can do several different ways:

```js
let myStuff = [
  { name: 'henrik' }
]

// Array.prototype.concat can be used to return a
// new array with a new item at the end:
myStuff = myStuff.concat([{ name: 'js lovin fool' }])
// or at the beginning:
myStuff = [{ name: 'js lovin fool' }].concat(myStuff)

// The same can done with the spread "..." operator
// if supported:
myStuff = [...myStuff, { name: 'js lovin fool' }]
// or:
myStuff = [{ name: 'js lovin fool' }, ...myStuff]

// .filter works great for removing items
myStuff = myStuff.filter((item => item.name === 'henrik'))

// we can also change items in place with `.map`
// but we have to be sure we create new objects for
// the items in the list we want to change:
myStuff = myStuff.map((item => {
  // editing one item
  if (item.name === 'henrik') {
    return Object.assign({}, item, { isNerdy: true })
  }
  // return all the ones we're not changing
  return item
})

// we can also use .map to replace items entirely
myStuff = myStuff.map(item => {
  if (item.name === 'henrik') {
      // a whole new object
    return { name: 'someone else who is cooler' }
  }
  return item
})
```

So, this is what we must do in our reducers whenever we are updating state in Redux.

As it turns out, following this convention of immutable state enables other useful patterns, such as efficient "selectors" which we'll get into later.

# Methods that Control "this" 

We've stablished that functions in JS are just objects. Since objects have special methods that can be used on them, so do functions- even typical ones

### "this" in Different Situations

| LOCATION                                                     | value of "this"                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| functions defined on global scope                            | undefined                                                    |
| functions defined in an object                               | the object they're inside                                    |
| internally defined event handlers (arrow_function)           | window object<br />Never use arrow handlers!!                |
| externally or internally defined <br />event handlers (function_declaration) | Equals `eventObj.target`<br />For click events, it's be what you clicked on |
| Inside a class                                               | The class "this" is used within.<br />Can be overridden      |
| geolocation API callback F's                                 | undefined (overrides the "inside class rule")                |
|                                                              |                                                              |
|                                                              |                                                              |

If using "this" inside a prototype method, it refers to what you'll be using it on:

EXAMPLE: Calling `s.myMap()` will make "this" equal the "s" array

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  this.forEach(a => newArray.push(callback(a))); // this refers to the method target
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
```



#### Testing "this" in Event Handlers

https://codepen.io/NFuego24-7/pen/ExZqMmB?editors=1010

- Open the console and check the difference between pressing the "add" and "remove" buttons 
- The add button has an externally defined event handler, while the remove button has one defined internally

![image-20210503151353701](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210503151353701.png)

![image-20210503151330467](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210503151330467.png)

### call & apply Methods

The call/apply methods let you manually set which object the "this" keyword in your function references. It can be useful in different situations:

- When you define a function on the global scope but want to use the "this" keyword
  Often happens with externally defined event handlers
- When you clone what was originally a method inside an object and want to use it somewhere else (great example on the complex examples lesson)

```js
// SYNTAX
functionName.call(objName,arg1,arg2...etc) // # of arguments may vary
functionName.apply(objName,arrName) // any extra array entries get ignored
```

#### call(): for numerous args

Use the summation function, but set "this" to the "unrelated" object

```JS
let unrelated = { num: 10, name: 'Jeremy' };

const summation = function (a, b, c) {
  return console.log(this.num + a + b + c); 
  // uses the this keyword, but on the global scope since this is not inside an object
};
summation.call(unrelated,1,5,1) //OUTPUT: 17
```

- If it weren't for the call method, we'd get an error- if we were using strict mode. 
- You can't use "this" on the global scope, but call() lets us target an object temporarily

#### apply(): for arrays of args

The apply method does the exact same thing as call, but it uses array values instead
This time we pass in the first 3 values of the array as a, b, and c

```js
let obj = { num: 10, name: 'Jeremy' };
let arr= [20,5,5,9000]
const summation = function (a, b, c) {
  return console.log(this.num + a + b + c); 
  // uses the this keyword, but on the global scope (normally a bad idea)
};
summation.apply(obj,arr) //OUTPUT:40   (10+20+5+5)
```

If our array has too many values 

- The remaining values in our array (9000 in this case) get ignored because the function only asks for 3 values (a,b,c).

If our array does not have enough values

- We'd get an error since b, or c would be undefined

#### Spread Operator to Replace Apply()

The apply method isn't actually used much anymore. 
Spread operators let us liberate array values to be used as arguments for a call() Here's a redone version of the last apply example:

```js
let obj = { num: 10, name: 'Jeremy' };
let arr= [20,5,5,9000]
const summation = function (a, b, c) {
  return console.log(this.num + a + b + c); 
  // uses the this keyword, but on the global scope (normally a bad idea)
};
summation.call(obj,...arr) //OUTPUT:40   (10+20+5+5)
```

Feel free to use either approach, it's up to your personal preference

### bind()

Bind is similar to the call method- you must understand call before using it. 

- Bind allows you to create a new function by connecting an existing function using a global "this" keyword to an existing object
- It's basically a delayed version of call, which only gives you the output of what I just described

```js
let boundF= previouslyExistingFunction.bind(objName)
```

#### Call vs Bind Comparison

Just so you know, these methods work the exact same way on function declarations AND expressions

CALL:

```JS
let obj = { num: 10, name: 'Jeremy' };

const summation = function (a, b, c) {
  return console.log(this.num + a + b + c); 
    // uses this keyword, but on the global scope (normally a bad idea)
};
summation.call(obj,1,2,5) 
```

![image-20210320062602958](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210320062602958.png)

The call method lets us invoke the summation function as if it were inside the "obj" object. It returns the output of summation()

BIND

```JS
let obj = { num: 10, name: 'Jeremy' };

const summation = function (a, b, c) {
  return console.log(this.num + a + b + c); 
  // uses the this keyword, but on the global scope
};
let boundFunction= summation.bind(obj)
boundFunction(1,2,5) // we don't need to relate it to the object here
```

![image-20210320062904143](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210320062904143.png)

Bind lets us create a new function entirely: 

```
// what does the boundFunction look like?

it's an exact copy of summation
Has a this.num value of 10 because it's binded to the "obj"
```

#### Partial Application- Hardcoding Parameters

Bind functions also allow us to use partial application- when we predefine argument values. They work similarly to default parameters, except they're hardcoded and cannot be changed

```js
let obj = { num: 10, name: 'Lin' };

const summation = function (a, b, c) {
  return console.log(this.num + a + b + c); 
};
let boundF= summation.bind(obj,4,20) // we hardcoded the values of a and b.
boundF(2) // notice how we only needed to feed 1 argument to the function that takes 3 

//OUTPUT: 36 (10+4+20+2)
```

#### Partial Application While not Caring about "this"

- There are times when you'll want to hardcode your parameter values in a function that doesn't even use the "this" keyword. 
- In this case, use bind() but replace the objName you'd normally bond with to a falsy.

```js
const addTax= (rate, flatValue)=> {return flatValue + (flatValue*rate)}
const addHST= addTax.bind(null,0.13) // no bind to an obj, just hardcode the HST rate

console.log(addHST(100)); // let's say we're buying a 100$ lamp
```

![image-20210320135545199](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210320135545199.png)



### bind() with Event Listeners

Bind becomes very useful when uses objects and event listeners

- Event listeners use callback functions, and their "this" keywords always point to the HTML element the listener is for
- This is typically not desirable- we want control over what our "this" keywords refer to, regardless of where our function is called

#### Problem Description

When we press this button, we want to invoke Lufthansa's `buyPlane` method which is part of its object. Create an event listener to accomplish this

```HTML
<button class="buy">Buy new plane 🛩</button> <!--Relevant HTML-->
```

![image-20210320122242172](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210320122242172.png)

STARTER CODE:

```js
'use strict';
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
//—————————————————————【will refer to as code block 1】——————————————————————————
Lufthansa.planes= 300 //let's say they start with 300

Lufthansa.buyPlane= function(){
  console.log(this); // log the object we're in
  this.planes++ 
  console.log(this.planes); // log the current total after the increment
}
```

#### Solution

ATTEMPT 1: //—————————————————————【】——————————————————————————

```js
document.querySelector('.buy').addEventListener('click', Lufthansa.buyPlane)
// used a callback function for the event handler
```

When we click the "buy new plane" button: ![image-20210320132453530](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210320132453530.png)

`console.log(this)` => logs the HTML element (should log the Lufthansa object)
`console.log(this.planes)` => logs NaN (should log 300+1)

When the `Lufthansa.buyPlane` function is used as an event handler, "this" references the HTML object when ideally we'd want it to reference the Lufthansa object

ACTUAL SOLUTION: //—————————————————————【】——————————————————————————

```js
document.querySelector('.buy').addEventListener('click', Lufthansa.buyPlane.bind(Lufthansa))
// used a callback function for the event handler
```

![image-20210320133710030](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210320133710030.png)

`Lufthansa.buyPlane` is the method inside the Lufthansa object
`.bind(Lufthansa)` binds this callback to the Lufthansa object

It sounds silly to bind a method to its own object, but remember the incorrect solution we got earlier. The method belongs to the HTML element by default when used in an event listener. Bind helps us overcome this

#### Why Bind and not call/apply?

Event listeners are meant to wait before acting. They wait for a user to click something, or fulfill a condition before the event handler goes to work

Bind is a delayed version of call which returns a function instead of an output- exactly what we'd want in a scenario like this

```JS
// FINAL CODE: 
'use strict';
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
Lufthansa.planes= 300 //let's say they start with 300
Lufthansa.buyPlane= function(){
  console.log(this); // log the function we're in
  this.planes++ // add 1 to the object's total planes
  console.log(this.planes); // log the current total after the increment
}
document.querySelector('.buy').addEventListener('click', Lufthansa.buyPlane.bind(Lufthansa))
// used a callback function for the event handler
```

![image-20210320133703310](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210320133703310.png)

Or check out: https://jsfiddle.net/JasonXtuyotech/axt8Ld3k/3/



# Prototypal Inheritance

This is a very important concept to understand when performing OOP

### THEORY: What Prototypes Are/Aren't (R2)

PROPERTIES YOU MUST UNDERSTAND:

—————————————————————【`.prototype`】——————————————————————————

The "prototype" is the value of an object's internal [[Prototype]] property
However, the creators of JS made a very misleading property name

```js
ConstructorName.prototype
```

- The above line does not actually give you the prototype of the constructor function
  Will be proven in the example via the isPrototypeOf method
- It gives you the prototype that'll be used for all instances created by "ConstructorName" instead
- A more apt name would be .prototype_of_linked_objects , or POLO for short

————————————————————————————【`.__proto__`】—————————————————————————————————

This property gives you the actual prototype of the object you use it on

```js
instanceName.__proto__

// modern version:
Object.getPrototypeOf(instanceName)
```

- `.__proto__` is more of a legacy feature these days, but it remains useful because you can chain multiple together to go up the prototype chain
- Ex. `ObjName.__proto__.__proto__` gives you the prototype of your object's prototype

#### Demonstration

STARTER CODE FROM LAST LESSON:

```JS
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

Add this snippet to the end of the previous subsection's syntax:

```js
// LINE 1: Prototype for all objects linked to the Person Constructor (POLO)
console.log(Person.prototype);  

// LINES 2-3: Prototypes of the jonas object
console.log(jonas.__proto__);      
console.log(Object.getPrototypeOf(jonas)); 

// Is POLO the prototype of the jonas object? 
console.log(Person.prototype.isPrototypeOf(jonas)); 	// (yes, it is)

// Is POLO the actual protype of the Person Constructor? 
console.log(Person.prototype.isPrototypeOf(Person)); 	// (no, it's not)
```

![image-20210424222409809](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210424222409809.png)

#### Where did these come from?

> ![image-20210424234306562](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210424234306562.png)

When the "new" operator links an empty object to the prototype, these properties are created. The `.__proto__ ` value sets itself equal to the constructor's POLO

#### Setting Properties on the "Prototype"

We're actually setting properties on the POLO- the property connected to all linked objects. Just so you know, it's not the same as the actual constructor prototype

EXAMPLE: 
Set the "powerLevel" property of the constructor function's POLO to 9000
Prove that all instances of that constructor retain that property as well

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



### THEORY: Prototypal Inheritance & the Prototype Chain (R3)

Video Explanation: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649055#overview

KEY TAKAWAYS:

- This video and diagram explain how prototypal inheritance and delegation work with constructors and ES6 classes only. `Object.create` doesn't work this way
- When the browser can't find a method or property inside an object, it checks inside the object's prototype next. Then that prototype's prototype...etc until the chain ends at the top 
- This is how we assign methods/properties to constructors and make custom methods

#### Quick Explanation of the Chain

Before we begin, remember that not all chains are the exact same length as this diagram

STARTER CODE:

```js
const Person = function (firstName, birthYear) {
  (this.firstName = firstName), (this.birthYear = birthYear);
};
const jonas = new Person('jonas', 1975); // Create new instance
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210425010717370.png" alt="image-20210425010717370" style="zoom: 50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210425011755011.png" alt="image-20210425011755011" style="zoom: 33%;" />

WHAT THE ARROWS MEAN:

Pay attention to the arrows. An up arrow with `.__proto__` means that the next rectangle is the prototype of the rectangle where the arrow started. 2 is a prototype of 3, and 1 is the prototype of 2

DESCRIPTION OF EACH RECTANGLE:

Black Rectangle: The jonas object which is an instance of the Person constructor
Yellow Rectangle on Right: The prototype of the jonas object (POLO)
Green Rectangle on Right: The prototype of jonas' prototype... `Object.prototype`

Yes, the POLO actually has a prototype of its own (it is an object, and all objects have a prototype)

- POLO is a simple object that was created from the built-in JS constructor function
  Not `Person()`, but the actual function that the creators coded to create new objects
- The built in constructor function is what goes off when we define object literals without the "new" operator
- Once we reach Box 1, the `__proto__` of that equals null, signaling the chain's end



SIMILARITIES TO THE SCOPE CHAIN:

When JS can't find a certain property or method inside of an object, it'll look up to the next prototype in the chain to see if it can be found there

This is exactly what the scope chain acts like, just with variables and scopes instead of prototypes and constructors 

#### Example

![image-20210425013425943](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210425013425943.png)

If we use `jonas.hasOwnProperty('name')`, the browser knows we never defined that method in the object directly (just look at this lesson's starter code)

<<< box 3 disqualified. check box 2 >>>

We never set `Person.prototype.hasOwnProperty= function(){ whatever this ƒ() does }`

<<< box 2 disqualified. check box 1 >>>

Eureka! We do have a built-in method for objects found in `Object.prototype`
Seems the makers of JS thought of building that method already

END-RESULT OF PROTOTYPAL INHERITANCE:

- The browser never throws us an error when this couldn't be found in boxes 2-3. 
- It just looked up the chain, and acts like hasOwnProperty was included in the jonas object, allowing us to use the handy method

In reality, it was just inherited through it's prototype's prototype
Box 3 inherited a method from box 2 which inherited built in methods from box 1

#### How to go Up the Chain with JS Code

Use `.__proto__` to get the actual prototype of what you use it on. 
Chain multiple if you must

```js
// Person Prototype. Aka. jonas object's prototype 
// is equal to Object.prototype
const box2= jonas.__proto__

// Object prototype. Aka. prototype of jonas object's prototype
// created by THE constructor ƒ() that creates all objects
const box1= jonas.__proto__.__proto__

// Should equal null. We've reached the end of the chain
const null_bait= jonas.__proto__.__proto__.__proto__

console.log(box2); console.log(box1); console.log(null_bait);
```

![image-20210425100213458](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210425100213458.png)

#### How to go Up the Chain with console.dir()

This method lets us take a look at what's inside an object. 

- When you look at the properties inside, you'll notice that you can examine an object's prototype. 
- Then you can go into that prototype's prototype...etc. Do this until the chain ends
  Just keep un-collapsing all the drop downs that involve `__proto__` or `<prototype>:Object{...}`

```js
console.dir(jonas)
```

![image-20210425100810165](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210425100810165.png)

Eventually you'll go deep enough to reach the end of the chain where `__proto__` equals null. (Did not go that far in the above image)



# Higher-Order Functions & Closure

### First Class and Higher Order Functions

#### Definitions

FIRST-CLASS FUNCTIONS:

- They are a feature that a language has or doesn't have. 
- JS does have it, meaning that functions are treated like values.
- It is not something you can actually use in your code though- it's a concept

Since JS has first class functions, it allows the use of higher-order functions in your code- those are tangible and can be typed out

#### What Counts as a Higher Order Function?

| category/case                                          | example                                      |
| ------------------------------------------------------ | -------------------------------------------- |
| function that receives another function as an argument | event handlers                               |
| function that returns a new function                   | function factories<br />shown in below image |
| both                                                   | recognizable when you see it                 |

VISUALIZED:

![image-20210320025637812](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210320025637812.png)



### Regular Functions Accepting Callbacks

So far we've only seen callback functions when dealing with constructor functions, event listeners, or forEach loops. Regular functions can accept callbacks too!

#### Callback function Arguments

- You don't actually have to understand how the functions work in this example- just know what they do. It is a great combined use of several things we've learned though
- FYI: This works with function declarations AND expressions

```js
// this function takes a string, remmoves all spaces, and sets letters to lowercase
function oneWord(str){
  let a= str.replace(/ /g,"").toLowerCase(); //remove spaces via regex
  return a;
}
// capitalizes the first word of the string you feed it
const upperFirstWord= function(str){
  const [first,...others]= str.split(' '); 
  return [first.toUpperCase(), ...others].join(' ')
}
//—————————————————————【function zone end】——————————————————————————
const transformer= function(str, callbackF){
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${callbackF(str)}`);
}
transformer("To be a master", oneWord) // no need for oneWord() brackets
transformer("Pokemon Go, pokemon go! It's on!", upperFirstWord)
```

![image-20210320040416775](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210320040416775.png)

![image-20210320040424369](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210320040424369.png)

Remember that callback functions don't need () brackets 
They're invoked when their parent function is called

#### Abstraction

- Splitting up a large task into smaller chunks is only 1 benefit we get from callbacks 
- Callback functions also allow us to create abstraction- which is actually way more important

But what is abstraction? It's the act of hiding away functionality

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210320041352380.png" alt="image-20210320041352380" style="zoom:50%;" />

If we have a function, we only want to concern ourselves with the input and the output. 

- We want our input to be transformed into something more desirable, but you don't actually care what goes on inside the function you're using

——————————————————————————————————————————————————————
Callbacks allow us to think on higher levels of abstraction.

- We had lower level of abstraction functions that took care of our string transformations. (`oneWord` and `upperFirstWord`)
- When called in the `transformer` function, their syntax doesn't really concern us
  As long as we know the functions work properly, the job gets done

——————————————————————————————————————————————————————
Abstraction is key for bug fixing as well 

- If you make a mistake and want to fix it after your code's been in use, having abstraction makes it so all you have to do is fix one isolated bit of your code. 
- Perhaps its a function you wrote or a loop with a small error that leads to errors
  The input and desired output will remain the same- making this an easy fix



### Functions Returning Functions

- As you know from using recursion, a function can return other function calls. 
- What you may not have known is that a ƒ() can be used to generate then return a new/unique function that's never been seen before

```js
const relay= function(msg){
  return function (name){
    console.log(`${msg} ${name}.`);
  }
}
const farewell= relay("This is goodbye,"); // THIS is now a function
// we just hardcoded the value of msg, which is used in the return ƒ()

farewell("Alexia"); // msg="This is goodbye" name= "Alexia"
farewell("Greg");
```

![image-20210320052303887](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210320052303887.png)

```js
// arrow function only version (borderline unreadable. lmfao)
const relay = msg => name => console.log(`${msg} ${name}.`);
const farewell = relay('This is goodbye,'); // THIS is now a function
// we just hardcoded the value of msg, which is used in the return ƒ()

farewell('Alexia'); // msg="This is goodbye" name= "Alexia"
farewell('Greg');
```

This type of operation is crucial when performing functional programming. Remember, we have procedural, functional, and object oriented programming- all of which are possible in JS. 

### What is Closure?

Indication of Closure (any 1 or all of them)

1. A function must return another function
2. The inner function has access to variables from the outer function surrounding it
3. The variable value from the outer function is persisted

We need to be able to recognize when closure is taking place and affecting how our code works

#### Lexical Scoping Refresher

You must understand the basics of lexical scoping to understand closures (see behind the scenes chap)

1. You can look up the scope chain but not down/sideways
2. The location of a variable dictates where it can be accessed

EXAMPLE 1: Looking up the chain (Success)

```js
const a = 10;
function demo(){
  let b= 6
  return a+ 8;
}
console.log(demo()); // 18
```

- The demo function's scope is deeper than the global scope
- We can grab values from the global scope from inside our demo function scope

EXAMPLE 2: Attempting to look down the chain (unsuccessfully)

```js
const a = 10;
function demo(){
  let b= 6
  return a+ 8;
}
console.log(a+b) // ReferenceError
```

#### Demonstrate Closure

Closures are just functions with preserved data:

```js
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc(); // we get to keep the name variable value 
myFunc(); // OUTPUT: mozilla
```

In some programming languages, the variables defined inside functions disappear once their function finishes executing

#### Spot Closure in Dev Tools

- Use `console.dir()` to peek inside a function you've created with closure
- Remember that [[anything]] means what you're examining is an internal property- it can't be accessed via your code

EXAMPLE: 
Tweaked our original ƒ() to have more than 1 value passed in via closure
Also removed "vari", a variable created on the parent function's scope

```js
let addTo = function (passed1, passed2) {
  let newF = function (inner) {
    return passed1 + passed2 + inner; // nested function returns a value
  };
  return newF; // parent function returns the above nested function
};

let add12 = new addTo(6, 6);
console.log(add12(8)); //20
console.dir(add12); 
```

![image-20210323023730624](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210323023730624.png)

Hit the DDM for the scopes internal property, and you'll see another DDM for closure
Shows every value passed into it via closure

### Closure Use Cases

#### Common Reasons

REASON 1: Prevents parameters being potentially messed up

```js
let passed = 4;
let addTo = function () {
  let inner = 2;
  return passed + inner;
};
console.log(addTo()); //OUTPUT: 6

const maintain= addTo() 	// ƒ() will keep passed=4 & inner=2 forever
passed = 100; 				// change the value of passed, to test out something

console.log(addTo()); // 102 (b/c we changed the value of the variable)
console.log(maintain) // 6
```

REASON 2: You can access parent function variables even after their "deaths"

```js
const parent = function (arg) {
  let interiorV = 10;
  return function (innerArg) {
    return innerArg + interiorV + arg 
  }; 
};
let ren = parent(9); // a new nested function with arg=9
console.log(ren(20)); // OUTPUT: 39 
// return 		innerArg 		+interiorV			+arg
//				20				10					9 (saved fr/ ren declaration)	
```

- After a function is done running, its variables defined inside essentially just disappear. 
- Closure is one way we can continue using them through our newly created functions

#### Other Professional Uses

1. Is crucial for understanding functional programming
   Also lets you perform currying, a very niche action in functional coding

> WARP into JS Notes Part 2: XMIIEM

2. Allows you to create private properties when using OOP

> WARP into JS Notes Part 2: BNLSING



### Closure in Other Forms

It's easiest to explain closure when we return a function from another function, but there are other scenarios where closure can be seen

#### Redefining a Variable as a function via Closure

This is essentially the same thing as returning a function from a function, but we do it by redefining an existing variable instead

```js
// function from a function version
let addTo = function (passed) {
  let newF = function (inner) {
    let vari = 2;
    return passed + vari + inner; // nested function returns a value
  };
  return newF; // parent function returns the above nested function
};

let addV2= new addTo(8); 	// ƒ() will keep passed=8 & vari=2 forever
console.log(addV2(10)); //OUTPUT: 20
```

Now let's recreate the above closure function using our new setup:

```js
// redefining a variable version
let newF;
let addTo = function (passed) {
  newF = function (inner) {
    let vari = 2;
    return passed + vari + inner; // nested function returns a value
  };
};

addTo(8); // this just redefined newF. Can now use newF as its own function
console.log(newF(10)); //OUTPUT: 20
```

- The addTo() function returns nothing. 
  It just redefined the `newF` variable that we initialized beforehand
- `newF` is defined as its own function that actually returns a number

##### Redefining newF Again Afterwards

If you define newF again, the function we called newF will no longer exist

- You can redefine newF as whatever you want, even a new function with different closures

```js
// All the code from the last snippet
//—————————————————————【】——————————————————————————
newF=1; // Redefine our function as a flat variable
newF(8); //ERROR, because newF is not a function anymore
```

- Alternatively, you could redefine newF as a different new function. 
- Its closure would be completely different than the closure variables moved from the example we showed you at the start of this subsection

#### Callback Functions

Every callback function and event handler involves closure. 

- We'll show an example using the timeout function, which executes its callback function after a certain delay
- The timeout function operates independently of the `boardPassengers` function, yet it keeps access to its arguments and variables due to closure

```js
let perGroup=9999999; // here to prove a point
const boardPassengers= function (n, waitTime){
  const perGroup= n/3;
  setTimeout(function(){
    console.log(`Now boarding all ${n} passengers`);
    console.log(`Each group contains ${perGroup} passengers`);
  },waitTime*1000)
  console.log(`Will start boarding in ${waitTime} seconds`); 
    // ^ goes first due to the delay
}
boardPassengers(180,4);
```

![image-20210323053645536](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210323053645536.png) => after 4s: ![image-20210323053707837](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210323053707837.png)

Addressing `perGroup=999999`:

Closure lets `setTimeout` access the `perGroup` variable defined inside its parent's scope. It completely ignores the `perGroup` defined on the global scope because it found a closer match first

### Closure- Quick Overview 

Closure is feature that not all programming languages have- JavaScript does
It allows a function to access variable values from higher level scopes 

#### What is Closure?

Lets use a simple example to properly define what closure is

EXAMPLE 1: Simple instance of closure

```js
const num = 10;
function add() {
  console.log(num + 2);
}
add() // 12
```

- The `add()` function logs the number 12
- It works properly because inside the function scope, we can access variable values from the parent scope- which happens to be the global scope in this case

Closure allows functions to access variables from scopes beyond it's first parent scope as well
Let's tweak this example so that a function reaches 2 scopes above this time

EXAMPLE 2:

```js
const num = 10; // global scope (1 level above parent scope)

function closureEx() {
  const digit = 4; // closureEx scope (parent)
  const a = () => {
    console.log(num + digit);
  };
  a();
}

closureEx(); // 14
```

- The closureEx() function logs the number 14
- It uses variable values from it's parent scope, and it's "grand-parent" scope

#### Preserving Variable Values 

One of the main use cases for closure is preserving variable values past their "deaths"

- I'm referring to how when a function is finished executing, it's variable values supposedly disappear.
- Closure allows you to keep those values intact if you return a function from a function 
  Some people refer to functions that return other ones as "function factories"
- Side note, closure lets a nested function to access the parameters of its parent functions
  This will come into play in later examples

EXAMPLE 3:

```js
const closureEx = function (arg) {
  let interior = 10;
  return function (innerArg) {
    return innerArg + interior + arg 
  }; 
};
let preserve = closureEx(9); 
// We're locking in and preserving 2 values: interior=10 and arg=9

console.log(preserve(20)); // 39 
// return 		innerArg 		+interiorV			+arg
//				   20				10				  9 		= 39
```



#### Practical Uses for Closure

The examples we've given so far are pretty generic. However, closure is commonly relied upon when performing operations that we'd perform instinctively. If you've used event listeners or used the fetch() method, you've taken advantage of closure whether you were aware of it or not

EXAMPLE 3: Event handlers

- The addEventListener method is in fact, a function
  This function requires an event handler- a function inside of another function (ring any bells?)
- Because of closure, the event handler can access parameters from the event listener method, and variable values from any scopes above that

```html
  <body>
    <button id="btn">Aren't closures cool?</button>
  </body>
  <script>
    const btn = document.getElementById("btn");
    btn.addEventListener("click", (e) => {
      console.log(e.target.innerText); // access the built in event handler param
    });
  </script>
```

When we hit the button, it will log "Aren't closures cool?"

#### Identifying Closure

1 or multiple of these properties must be in effect

1. A function must return another function
2. The inner function has access to variables from the outer function surrounding it
3. The variable value from the outer function is persisted

We need to be able to recognize when closure is taking place and affecting how our code works

### How Closure works Under the Hood (return4)

#### Closure- Technical Explanation (ICBA)

In our Udemy course, we have a dedicated lesson for how closure operates behind the scenes. This lesson and the next only teaches you how to use it without going into too much technical detail

- Review section 8 and watch this video if you need to know how JS closures work behind the scenes: [The Complete JavaScript Course 2021: From Zero to Expert! | Udemy](https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648683#overview)

CODING CHALLENGE EXAMPLE:

/* Requirements:
1.Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1element ('header') to blue, each time the body element is clicked. Do not select the h1 element again!

```js
// starter code
(function () {
  const header = document.querySelector('h1'); // import h1
  header.style.color = 'red';
})();
```

2.And now explain to yourself(or someone around you) why this worked! Take all the time you need. Think about when exactly the callback function is executed, and what that means for the variables involved in this example*/

```JS
(function () {
  const header = document.querySelector('h1'); // import h1
  header.style.color = 'red';
  //SOLN:
  document.querySelector('body').addEventListener('click', () => {
    header.style.color="lime"
  });
})();
```

Explanation starts at 3 minutes: [The Complete JavaScript Course 2021: From Zero to Expert! | Udemy](https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648697#overview)

TLDW: 

- The event handler function is nested inside the addEventListener inbuilt function, which is nested inside the IIFE function- which instant invokes.
- The IIFE executes immediately, and once it does...all it's variables (including header), disappear. 
- The event handler should in theory, not be able to use the header variable without re-importing the h1 tags from HTML. Thankfully it can, thanks to closure
- The birth location of the callback function lets it keep access to all the variables in its scope and those above it on the chain



# Code Structure Styles

We have plenty of options to choose from; OOP, Functional Programming...etc
It's important to understand how these differing styles are implemented

### ======== OOP ========

### Converting Spaghetti to OOP Code

#### Procedure 

REMEMBER! 
We're using OOP Class Inheritance Method 2: ES6 Classes
Everything inside an class constructor gets executed as soon as the page loads

###### << Functions we Invoke on the Global Scope >>

- Define them as methods inside the class' prototype
- Invoke them inside the class constructor

###### << Variables on the global scope >>

- Make them public/protected/private inside your class constructor function
- Pick whichever makes sense for the variable you're dealing with, and make sure the support is good (private properties are still uncommon circa 2021)
- Remember to change every instance of that variable being used. 
  Direct it towards its replacement, the class property

###### << Event Listeners on the Global Scope (important AF) >>

- Define the event handlers as methods inside the class' prototype (outside of the constructor function block)
- Declare the event listeners inside the class constructor
  You will likely need to bind the "this" keywords for your event handlers
  Unless your methods don't use the "this" keyword at all 
- External event handlers' default "this" value is the `event.target`, but we typically want to refer back to the class we're working inside of. This is true every time we reference properties defined inside our class while performing calcs



#### Challenge 1: Description

SIMPLE STARTER CODE: https://jsfiddle.net/JasonXtuyotech/vjaxn1z5/4/
SIMPLE FINAL CODE: https://jsfiddle.net/JasonXtuyotech/vjaxn1z5/4/

I've created an example with variables, event listeners, and functions defined/invoked as soon as the page loads. All of these are on the global scope, for now

HTML:

```html
<div class="controls">
  <button id="plus" class="backup">Add</button>
  <button id="ditch">Remove</button>
</div>
<div class="hello">Hello World!</div>
```

JS:

```JS
console.clear();
const body = document.querySelector("body");
//^ Event Listeners on the Global Scope
plus.addEventListener("click", function () {
  coinflip_Theme();
});

//^ Global Variables
let color1 = "#ffa280";
let color2 = "#6495ED";
let color3 = "#DDA0DD";

//^ Functions invoked after webpage loads
function randomRange(min, max) {
  console.log(
    `Changed color to ${color1}, ${color2}, or ${color3}`
  );
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function coinflip_Theme() {
  let randomNum = randomRange(1, 3);
  if (randomNum === 1) body.style.setProperty("background", color1);
  if (randomNum === 2) body.style.setProperty("background", color2);
  if (randomNum === 3) body.style.setProperty("background", color3);
}
coinflip_Theme();
```

![image-20210504001503673](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210504001503673.png)![image-20210504001518250](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210504001518250.png) ![image-20210504001613275](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210504001613275.png)

TLDR: 

- The function that's invoked when the page loads will randomly select 1 of 3 colors for the entire body element. 
- The buttons will reselect a random color theme again
- Our variables containing our 3 color choices are defined globally

#### Challenge 1: Solution

Refactor this using ES6 Class Inheritance (OOP Part 2 Method 2)

VERY IMPORTANT HINT! 

- Place your variables at the top of the constructor- your functions may need them to be defined before they are.
- If your functions use variables that don't exist before them, your functions won't work properly. JS won't even throw you an error (the nastiest kind of bug)

```js
console.clear();
const body = document.querySelector("body");

class Main {
  constructor() {
    // 【 GLOBAL VARIABLES 】 (SHOULD BE FIRST)
    this._color1 = "#ffa280";
    this._color2 = "#6495ED";
    this._color3 = "#DDA0DD";
    // 【 FUNCTIONS INVOKED ON PG LOAD】
    this._coinflip_Theme();
    // 【 EVENT LISTENERS 】
    plus.addEventListener("click", this._addHandler.bind(this));
      // "this" needs to be bound to the class, or else ƒ() fails 
      // (EXPLAINED IN NEXT SUBSECTION)
  }
  //————————————————【 GLOBAL FUNCTIONS 】—————————————————————
  _randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  _coinflip_Theme() {
    let randomNum = this._randomRange(1, 3);
    if (randomNum === 1) body.style.setProperty("background", this._color1);
    if (randomNum === 2) body.style.setProperty("background", this._color2);
    if (randomNum === 3) body.style.setProperty("background", this._color3);
  }
  //————————————————【 EVENT HANDLERS 】—————————————————————
  _addHandler() {
    this._coinflip_Theme();
    console.log(
      `Changed color to ${this._color1}, ${this._color2}, or ${this._color3}`
    );
  }
}
const refactor = new Main();
```

The outcome is the same as our starter code's, except now, the global scope is clean!

#### Binding "this" keywords

SITUATION 1: EVENT HANDLERS

The one complex part about our solution is...

```js
plus.addEventListener("click", this._addHandler) // unbinded "this" keyword
// VS
plus.addEventListener("click", this._addHandler.bind(this)); // binded
```

Using line 1: ![image-20210504004240685](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210504004240685.png)

Using line 2: ![image-20210504001613275](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210504001613275.png)

In our code, we used line 2. This is because we need to log our 3 color options 

- The colors are stored as protected properties in the class' constructor. 
  Inside the handler, we'll need to use "this" to access those colors. 
- Small problem! In externally defined event handlers, "this" always points to `event.target`. 
- We must bind the "this" keyword to the class by tacking on `.bind(this)` where we set up the event listener. 
- At that location, we're not inside the handler yet, so "this" refers to class- which is what we want

SITUATION 2: OTHER HANDLERS

When using other types of functions that involve callback functions or handlers (like setTimeout or setInterval), you'll need to bind their methods as well- if you want to use the "this" keyword

![image-20210531235042493](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210531235042493.png)

THIS IS VERY COMMON IN OOP

Regular functions don't have this problem, but geolocation/event handlers do. 
There may be more examples where we'd need to bind, but I can't think of any atm.

- This is one of people's biggest gripes with OOP; constantly rebinding this keywords
- There are many situations where "this" will not point to the class the function, handler, or whatever is currently inside of
- Your code won't work properly unless you `console.log(this)` and see where "this" is pointing at the wrong thing

![image-20210503011411585](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210503011411585.png)

#### Event Listeners on Node Lists and Arrays

If you're applying event listeners to node lists of elements, you are free to use forEach in the event listeners zone within the constructor function

![image-20210511135019812](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210511135019812.png)

### Building Classes Based on Features (Copy Lesson)

This example is taken from the Mapty project we built while following our JS course on Udemy. They have a an architectural diagram that outlines the relations between classes in our application (look up)

#### Properties

We're going to create a singular Workout Class for all the properties/methods that running/cycling have in common. 

Then we'll create Child classes for the unique properties/methods that running and cycling have only for themselves

SHARED:

- Both cycling and running have `distance` , `duration` , and `coords` in common
- When I say they have coordinates in common, I mean you both use the coordinates for where the user clicks on the map

SPECIFIC TO 1 EXERCISE:

- Running has a unique form entry; cadence
- Cycling has a unique form entry; elevation

#### Building the Workout Class

Properties List: ID, distance, duration, coords, date

The ID is necessary for finding a Workout object later on. 

- As we save multiple workouts, they're going to be placed inside of an array- and we'd like a way to find each one 
- Usually we rely on a library to generate unique ID's for us, but for now we'll just take the last 10 characters of the current date expressed in its default format and use that as an ID instead (keeping things simple for a learning project)
- NEVER do this for a serious project, because it'll lead to multiple users having the same ID if any 2 create a a new workout object at the same time

```js
class Workout {
  date= new Date()
  id = (Date.now() + '').slice(-10); // last 10 chars in string form
  constructor(coords, distance, duration) {
    this.coords = coords; // should be found after map's clicked
    this.distance = distance; // km
    this.duration = duration; // minutes
  }
}
```

#### Building the Running and Cycling Classes

RUNNING:

```JS
class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
  }
  calcPace(){
    //& We can set new properties using Method calculations
    this.pace= this.duration / this.distance; // min per km
    return this.pace
  }
}
```

CYCLING:

```JS
class Cycling extends Workout {
  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration);
    this.elevation = elevation;
  }
  calcSpeed(){
    this.speed= this.distance/(this.duration/60) // km per hr
    return this.speed;
  }
}
```

- In our application, we'll programmatically grab coordinates depending on where the map we click. 
- The remaining properties will get values based on the values we submit from our form. But for now, let's test to see if these classes work:

```js
const run1 = new Running([39, -12], 5.5, 24, 178);
const cycling1 = new Cycling([39, -12], 27, 95, 523);
console.log(run1);
console.log(cycling1);
```

![image-20210504131942180](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210504131942180.png)

#### Extra Info

- The order of your methods in the class prototype is irrelevant
- You can loop over node lists of elements and apply event listeners to them all, within the constructor





# ======== ARCHITECTURE ========

# MVC  

When it comes to architecture for our projects, we have several options

1. Create your own architecture
   Only viable for smaller projects where you can keep track of everything yourself
2. Use an established architecture pattern like MVC, MVP, Flux... etc
   (Model-view-controller, Model-view-presenter)
3. Allow libraries like React/Angular/Vue/Svelte to help us create one

Regardless of what we choose, our code must be organized, easy to maintain, and scalable 
For a list of MVC Alternatives... https://www.youtube.com/watch?v=FLmBqI3IKMA

### Why Design Patterns like MVC Exist

Without established design patterns, we'd just be throwing all our JS code into a single file 

- This is impractical for larger projects that are even remotely complex
- A design pattern will divide up an application into smaller chunks which each have a certain theme
  (See core components subsection)

#### Contemporary Example

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210703183409928.png" alt="image-20210703183409928" style="zoom: 67%;" />

EXAMPLE: Looking up images for cats

1. Your server would send the request to the controller

2. Controller asks the model to return a list of all cats
   After the model searches in its database or makes an API request, it sends the controller that list

3. The controller asks view to render a presentation for the cat pictures found or not found

- If successful, the view generates new HTML that changes your webpage
- If unsuccessful, the view generates new HTML that conveys a failed request

FYI: View will create a function that renders a presentation, but it will actually be used in controller (because it's where all event listeners are handled)

#### Core Components of all Architectures

![image-20210630013000977](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210630013000977.png)

STATE:
This is often the most challenging part of developing web applications
We need the UI to update itself whenever data that pertains it gets changed... and vice versa

APPLICATION LOGIC:
Mapping actions to the user's navigation
Deals with the technical aspects of the application, which is not related to the core business problem

HTTP LIBRARY:
We've just been using the fetchAPI to pull data from the web

BUSINESS LOGIC: 
Solving the problem that our app is built for

PRESENTATION LOGIC: 
Building functions that render presentations (those functions will be used in controller however)

### MVC: Model-View-Controller

We need to keep the 5 components we just listed separate for the most part, or else our code will become a huge logistical mess

![image-20210630014052127](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210630014052127.png)

#### What each Component is for

UNDERSTAND

1. The model and view should not be importing/exporting between themselves- pass data through controller first
2. The central JS file is the one referenced in index.html, and does not have type="module" as an attribute- which is why controller cannot export
3. The controller can import from view, model, or any of the files classified as "other"

Others: 
Config files or stray JS files that are technically unknown unless other docs import from it



|         | in terms of data flow, it can...                             | dedicated tasks                                              |
| ------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| MODEL   | import data from others<br />export its own data to controller | fetchAPI requests<br />get/save/update/calculate data<br />manage state |
| CONTROL | import data fr/ any file<br />CANNOT export to view/model<br />Passes data to model/view <br />(via imported function calls) | Interacts w/ user, via event listeners<br />Gets data fr/ model via imports |
| VIEW    | import data from others<br />export its own data to controller | render UI and present data<br />DOM manipulation             |

![image-20210703185712566](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210703185712566.png)



EXAMPLE: Describe MVC Division for 1 Feature
User clicks a button to render info about a distant planet

1. The controller will handle the event using a shotcaller function
2. The model will fetch info from some API, and it will be available to the controller
3. The controller will take that data and send it to the view
4. The view will render that data using its own methods

EXAMPLE 2: Forkify project

General: ![image-20210630021902565](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210630021902565.png)



#### Passing Data b/t Model, Controller, and View

This is done by executing Functions across Several Files
When everything is set up, we'll see lines of code like this: (this all takes place in CONTROLLER)

​										![image-20210630200719168](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210630200719168.png) 

![image-20210630200551166](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210630200551166.png)

`recipeView.render` => the render() function from recipeView.js
`model.state` => the state object from model.js (we take a KVP from it)
  Our line of code executes an imported function using imported data as an argument (3 files involved)

PASSING DATA FROM CONTROLLER 

> ![image-20210630202453665](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210630202453665.png)
>
> ​	in one of the view files (recipeView.js)

`recipeView.render(model.state.recipe)` brings data ...

from model : 		`model.state.recipe` originates here

to controller:		 the above is imported to controller

to view:					
invoke a function from view inside controller, using model data as an argument
the render function sets the value of a variable- making this data accessible anywhere in this view file

#### What Modules Contain

In order to avoid polluting the global scope, each module will likely store its functions and variables in an object literal, or class that produces one

OBJECT STORAGE:

```JS
export const recipeLoader={
    recipeIngredients:{}
    ...etc
} 									// export the object itself!
```

CLASS STORAGE:

```JS
class RecipeView {
    constructor(){}
    renderSomething(){}
}
export default new RecipeView(); 			// export the instance as a default!
```

If you must use a class constructor while exporting more than 1 thing in that same file...
Create an instance first ==> then export that 

```js
class SearchView{
    constructor(){}
    renderSomething(){}
}
export const instance= new SearchView()
```

——————————————————————————————————————————————————————
PARENT-ONLY CLASSES:

```js
export default class ResultsView{
	// this class will be used strictly so that its children can inherit methods
    // will not be producing any instances
}
```

- Sometimes we dedicate a module to a single class which acts as a parent for other classes
- This happens when we notice or expect multiple classes to have very similar methods, which could be shared in order to save on code/performance

In that case, default export your parent class, if you won't be making any instances of them 

### Helpers and Configuration Files

Many real world applications have 2 special modules that are completely independent from the rest of the architecture

1. Project configuration module
2. General helper functions- they should be useful across the entire project

#### config.js (name can vary)

Contains all the constant variables which should be reused across your project
COMMON PRACTICE: Make their names all-uppercase

- Do not place ALL variables in here- just the ones responsible for defining important data about the application itself
- Important variables will be in 1 file, while still accessible to other modules via import
  Makes things easier to keep track of, and changes to the values will be reflected project-wide



### Event Handlers in MVC

You'll this problem in the same form but with different syntax when following MVC

> ![image-20210701184043705](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210701184043705.png) 
> IN CONTROLLER^^

#### Problem Explained Verbally

POINT A. 
MVC rules do not allow UI logic in the controller

- We want event listeners present within the controller, but we want the handler `controlRecipes` to fire off in the view
- It renders visuals using DOM manipulation , which counts as UI logic

POINT B. 
We can't export out of the controller, and `controlRecipes` is defined there

#### Describing "PubSub" in MVC

We're implementing PubSub differently than how I taught in the dedicated Pub-Sub Chapter
This variation is what we're using to abide by MVC rules with our event listeners

DESIGN PATTERN:
Standard solutions for a specific problem

PUBLISHER: 
Code that knows when to react- the event listener, or a ƒ() that contains one

SUBSCRIBER:
The code that wants to react- and should be executed when the event happens

In our case...

|            | should be inside... | EQUAL TO                                    |
| ---------- | ------------------- | ------------------------------------------- |
| PUBLISHER  | VIEW                | the method containing `.addEventListener()` |
| SUBSCRIBER | CONTROLLER          | `controlRecipes` function                   |

#### Solution

1. Create a function in controller, then invoke it on startup

- It should call a function in view that contains the event listeners
- Feed `controlRecipes()` as an argument while you're in controller

2. Define your second function inside the view module
3. Stick to using event delegation and bubbling to set up event listeners
   It's the only method for setting up handlers for HTML elements that haven't been generated yet

IN CONTROLLER MODULE:

![image-20210705120441344](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210705120441344.png)

IN VIEW MODULE

![image-20210705120516863](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210705120516863.png)

#### Shouldn't events be handled in Controller?

HAVE WE CONTRADICTED THE RULES?

The MVC rules state that we should manage event listeners inside the controller
We just showed the view module containing `.addEventListener`

- The view module contains the `.addEventListener` inside of `addHandlerRender()`
- The controller module invokes `addHandlerRender()` inside one of its shotcaller functions
  That shotcaller function is named `init()`

Funnily enough, the takes place outside of the controller, but inside `addHandlerRender()`



### DOM Updating Algorithm

#### The Problem it Solves

In big projects, we often generate new HTML and render it as soon as we press a button or interact with the site in a meaningful way

- Re-rendering an entire parent block or webpage over and over is a bit overkill, and will cost you on performance
- One approach you can take is to create a function that lets you choose small sections of the webpage to update at a time

```js
update(data) {
    this._data = data; // update class data variable
    // Set data variable equal to the info we pass in as an arg (info came from model=>controller)
    const newMarkup = this._generateMarkup();
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    // Capture all elements within the current HTML container and the one about 2Brendered
    // conv nodelists into arrays with Array.from(), you can loop over them ATST
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));
```

This method is part of the parent View class, and will be inherited by every child class
FYI, each new feature has its own dedicated module containing a child class

The `this._generateMarkup` is a method that is defined uniquely for each of these modules

### My Template for MVC

1. Set up a template environment near identical to forkify's starting point, but without any content within the files (especially the main.scss being an import-fest)

2. Explain how to use the classes effectively

- Pass _data to every View module
- Set up a parentEl and _data for every view module, so you can use _clear to erase all content from it when its time to render something else
- Have a _errorMSG variable set up so you can simply set the error message per module, at the top of the class easily
- Remind yourself that you can redefine methods and variable values at any time
- CREATE the diagram explaining MVC roles

3. Take note of how the controller uses global variables, unlike all other modules (unsure if good)
   But all of its functions are named after what they do

#### Crucial Methods

render(data) in View

- Generates markup based on each module's own _generateMarkup method, which you can define any way you choose
- Use this function on autopilot, as long as you've sent data to your state object properly

renderSpinner() in View

- Reusable in any project essentially

init() in controller

- Explain how to set up all event listeners inside controller, but saving the `addEventListener` for the exact module they will be affecting. 

- We only "handle events" in controller by invoking a shotcaller function

- Ex. Look at how the handler for the buttons is handled in the paginationView.js module (where the render functions for it are)

- Feel free to set up event listeners right on startup that will only affect things that have not been rendered yet

- Every handler is a shotcaller function defined in controller

GENERAL WORKFLOW

These use data from model to be sent to view's _data variable via the controller
We then use our data to render things using _generateMarkup which is unique per each module

#### Event Listeners

- You will be rendering lots of new HTML, and this becomes a problem when assigning event listeners to elements that do not exist yet
- You need event delegation and bubbling to set this up properly

![image-20210708160828625](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210708160828625.png)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210708162108912.png" alt="image-20210708162108912" style="zoom:80%;" />

![image-20210708161647974](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210708161647974.png)

If JS can't find a closest `.btn--bookmark`, we have a guard clause that lets us end the handler immediately. This is why it works when an element does not exist yet



#### Comment Echolocation

When you have dozens of files and several console logs that spit out data that all looks, the same, it can be hard to know what you're looking at in the dev tools

Make a habit of describing where in the files you are, by writing 2 console logs. The first should describe the location and what you're about to be looking at. The second should be the info you want displayed

![image-20210708164106868](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210708164106868.png)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210708174607857.png" alt="image-20210708174607857" style="zoom:80%;" />



# Pub-Sub

### Pattern Overview

- This pattern allows people to build projects in several separate components- in a way where none of them know about each other
- Despite this fact, we can still have components affect other components by creating a publisher component

#### The Problem it Solves

Let's imagine we have several JS files that are unaware of each other, but need to need to be able to communicate regardless. 

> IF: 								 We change or submit some data in the "FORM" module
> THEN WE MUST: 		Update modules A,B, and C one at a time

With regular techniques, we'd have an individual event listener for all files that need to be alerted, but this can get out of hand fast if we had 100 modules for example

![image-20210704152955874](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210704152955874.png)

With this new design pattern, we send the data we change in "people" up to the "pubsub" module
When pubsub publishes something, then all other modules subscribed to it will know

![image-20210704153155015](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210704153155015.png)

WHAT HAPPENS WHEN A MODULE GETS ALERTED?
This technique goes beyond informing modules that there's been a change. 

- Modules can subscribe to a specific type of event happening, then run their own callback functions when they get alerted
- All of this goes down across several JS files, which makes things somewhat challenging to keep track of

#### How to Follow Examples

- Design patterns are pretty tough to explain in a format like this- mainly because there are so many JS files interacting with each other at once via imports/exports/function-calls
- Showing all their content in sequence would overwhelm anyone

SOLUTION:

1. Follow along with the Github repository I provide for each example
   View all files there
2. Abstract each file into functions and their objectives in your head 
   Ignore technical aspects, unless it connects 1 file to another in some way
3. Focus on understanding the pubsub module first

### Pub-Sub Module File Explained

The pubsub module is a JS file containing a series of functions which can be stored in an object literal or a factory function

STRUCTURE:

```js
export const pubsub = {
  events: {},
  subscribe: function(){},
  unsubscribe: function(){},
  publish: function(){},
}
```



#### Subscribe and Publish Method: 

TLDR: Adds a callback ƒ() to the array of callbacks that fire after a "specific" type of named event

```js
  subscribe: function (eventName, callback) {
    console.log(`PUBSUB: someone just subscribed to know about ${eventName}`);
    this.events[eventName] = this.events[eventName] || []; //line S1
    this.events[eventName].push(callback); // line S2
  },
```

—————————————————————————————————————————————————————— 
SCENARIO:

```js
// IN MODULE NAMED "movies.js"
import { pubsub as pubsub_File } from './pubsub.js';
export const movies = {
  	callbackF1: function(){},
    somethingElse: function(){
     	pubsub_File.subscribe("actorAdded", movies.callbackF1) 
		// subscribe movies.callbackF1 to "actorAdded"   
    }
}
```

LINE S1: Checks if an `actorAdded:[]` KVP exists yet in `events:{}` object

If it does exist, they set it equal to itself- thereby leaving it as it was
If not, it sets it equal to an empty array

LINE S2: Pushes the callback function into the "actorAdded" array

—————————————————————————————————————————————————————— 
AFTERMATH

```js
export const pubsub = {
  events: {
      actorAdded: [movies.callbackF1]
  }
  ... other methods ...
}
```

When we publish an "actorsAdded" event later, all callbacks in the `actorsAdded:[]` array will fire
So if you want a function to fire after a certain kind of named event, subscribe it

PUBLISH:
Announces the event to callback functions that are subscribed

```js
  publish: function (eventName, data) {
    console.log(`PUBSUB: Making an broadcast about ${eventName} with ${data}`);
    if (this.events[eventName]) {
      this.events[eventName].forEach((f) => {
        f(data);
      });
    }
  },
```



#### Unsubscribe Method

Removes a certain callback function from the subscribers list that gives a damn about a certain named event type

```js
  unsubscribe: function (eventName, callback) {
    //remove an event function by name
    console.log(`PUBSUB: someone just UNsubscribed from ${eventName}`);
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter((f) => f !== callback);
    }
  },
```

if we unsubscribed in the movies.callbackF1 , it'd result in this

```js
export const pubsub = {
	events: {
      actorAdded: [movies.callbackF1]
  	}
}
```

Becoming this...

```js
export const pubsub = {
	events: {
      actorAdded: []
  	}
}
```

#### Where to Subscribe and Publish

SUBSCRIBE LOCATION:
Every JS module should have a method that runs on webpage startup

- This is where you can set up event listeners to work- while not polluting the global scope
- Somewhere in these functions that run initially, include a line to subscribe
  In our example, that's the `initRender()` function, which each module has its own version of

PUBLISH LOCATION:
Choose to publish in the JS module that deals with whatever starts off the pub-sub workflow
The data that gets passed to all callbacks originates from somewhere

UNSUBSCRIBE LOCATION: (unsure!)

- In our example, I implemented a button that unsubscribed a method/field from all changed made past that interaction
- I broke a rule and removed a method from the subscriber list by importing data 
  Could not see a way to do this another way- but I am still very new at this

#### Practical Example

> REPO: https://github.com/Jason2B3/pubsub-test1/settings
> Need to be logged into Jason2B3- since it's private
>
> Tip of "Master" branch: 
> Only the "Add Movie" button works -  to keep things simple
>
> Tip of "all-features" branch:
> Should be self explanatory
>
> ——————————————————————————————————————————————————————
>
> YT LESSON: https://www.youtube.com/watch?v=aynSM8llOBs&t=1073s

FEATURE EXPLANATIONS:

|                     | CLICK EFFECT                                                 |
| ------------------- | ------------------------------------------------------------ |
| Add Movie button    | Adds the field value to the movie list in blue<br />adds 1 to the purple counter |
| Movies entries      | Removes the entry you click on<br />Decreases purple counter by 1 |
| Unsub Purple Button | Unsubscribes the purple field's methods from the events<br />that signal a movie being added or removed (makes it fail purposefully) |

![image-20210705025909914](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210705025909914.png)



































//—————————————————————【】——————————————————————————