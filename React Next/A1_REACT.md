# React Basics & Working with Components

> CHAPTER-WIDE GIT REPO:  (we started referring to this about halfway through this chapter)
> https://github.com/Jason2B3/academind_react_1

—————————————————————【 SHORTHAND 】——————————————————————————

CCM: 
Custom component module- aka. the component's dedicated JS file

RCM:
Root component module- aka. App.js in the boilerplate from create-react-app

CCT:
Custom component tags

SLM: 
Start location module- where the data you intend on moving begins

ELM: 
End location module - where the data you intend on moving ends after the transfer is successful

—————————————————————【 DEFINITIONS 】——————————————————————————

Cards:
A container element that usually has rounded corners, a drop shadow, and duplicate elements nested inside of it

### Intro

#### Components of this Course

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210713135057421.png" alt="image-20210713135057421" style="zoom:50%;" />

#### Single Page Applications

In single page applications, the user can click anything on the webpage, resulting in new DOM content being rendered 

- You will never get a choppy transition that results from loading a new HTML page
- The transitions should be smooth, and the user experience will feel like you're using a mobile app

If React controls the entire front end of a site, SPA's become much easier to create

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210712013025345.png" alt="image-20210712013025345" style="zoom: 50%;" />



### Components / Custom HTML Elements

Components are reusable building blocks that make up all user interfaces
They're conceptually similar to functions- since we want to reuse components anywhere we want

- Pay attention and see what parts of a website are just repeats of something with slight variations
- Remember that components do NOT have to be used multiple times (but they CAN be)

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210713140724755.png" alt="image-20210713140724755" style="zoom: 67%;" />
>
> REPEATED COMPONENTS
>
> - The expenses are just list items with different dates, descriptions, and price values
> - The progress bars are repeated with different text labels and filling
>
> SINGULAR COMPONENTS (some, not all)
>
> - The "Add New Expense" block
> - The one unordered list containing all the repeated expense components

#### What Components are Made of

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210713144046438.png" alt="image-20210713144046438" style="zoom:67%;" />

Components are just HTML code generated then inserted when we want to render content

- They're also styled via CSS and may have some JS logic attached to them if the rendered components are supposed to be interactive. 
- For example, if we render a button we'll probably want it to do something instead of just sitting there, menacingly



#### What React does with Components

A broad definition of what React does with components is as follows:

1. The dev builds individual components
2. The dev then tells React how to compose them together to make a beautiful UI

HOW THIS MAKES BUILDING PROJECTS EASIER:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210713142303074.png" alt="image-20210713142303074" style="zoom: 80%;" />

Reusability:
We no longer have to repeat ourselves by re-typing low level details over and over
Coding 10 different event listeners, each with a diff parent element for example

Separation of Concerns:
Each component will have 1 specific task it focuses on
We'll store each one in its own module, so we keep our building blocks simple and isolated

#### React's Declarative Approach vs Vanilla JS

VANILLA JS APPROACH:

When building UI's with vanilla JS, you'll have to deal with a lot of low level details
For example, making a banking app the tracks withdrawals and deposits...

- Must add an event listener for buttons, specify a parent element, change the text content, change the data inside your state object, render it using a view module...etc
- You "reinvent the wheel" over and over, making your project error-prone and difficult to build quickly
- React uses components to remove most of the low level code from our process
  We can focus on programming in a more declarative way 

REACT'S DECLARATIVE APPROACH

- Define end states, and a list of conditions to dictate when each state should be used
- Lets you skip coding the concrete details that are required with vanilla JS
  Makes the design process much easier



### P1: Starter Templates

There's a repository of files called "create-react-app" that was designed to give people a good starting point for building their React projects

- The files are a pre-made development environment that comes equipped with live-server-like previews right out the box
- It also has some other optimizations that would be complex to incorporate on our own

#### Creating your Own New Project

Open your VSC terminal and enter these commands:
This will open up a live-preview, just like you'd see with live server or Parcel

PROCEDURE:

```
cd ~/Desktop								// move to desktop 
npx create-react-app <my-app-name>			// create and name your project
OR
yarn create react-app <my-app-name>
——————————————————————————————————————————————————————
** open new folder in VSCode => open terminal **
npm start						// open live preview (keep on during development)
** add a .gitignore file with node_modules typed inside **
```

LINK AND SETUP INSTRUCTIONS : (already done by now)
https://github.com/facebook/create-react-app

#### Academind Premade Template (used in course)

While learning React for the first time, we'll be building off this starting folder

- This template folder is pretty similar to what you could make yourself by following the previous subsection's instructions
- That being said, Maximillian cleaned up the files a bit (feel free to use either)

PROCEDURE:

1. Download starter files and rename the folder
   https://github.com/academind/react-complete-guide-code/tree/03-react-basics-working-with-components/code/01-starting-setup
2. Add a .gitignore file on the root level, then place `node_modules` inside
   Do this before you initialize the folder as a git repo
3. Open starter folder in VS Code, then input this into the terminal

```
npm install			// installs dependencies and forms a package.json
npm start			// open live preview (keep on during development)
```

4. Add a file named `.gitignore` on the root level, then type node_modules inside

### P2: Analyzing our Starting Files

We're analyzing the Academind premade template in this lesson

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210713154952410.png" alt="image-20210713154952410"  />

- Most of our development time will be spent inside the src folder
- index.js is the first JS file that gets executed whenever this page gets loaded

#### Our package.json

- When we followed 1 of 2 procedures to get our starter files ready, we downloaded several 3rd party libraries which will be used across our projects. 
- You can see some imports at the top of our index.js file in the previous subsection

![image-20210713160418217](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210713160418217.png)

#### index.js

For the reasons outlined above, you'll see some code that looks confusing 

- React introduces some new syntax, that all boils down to regular JS during the bundling stage we don't control manually
- Our development code will get optimized and transformed, just like how Parcel bundles our readable code into an optimized mess for production

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210713155923961.png" alt="image-20210713155923961" style="zoom:80%;" />
>
> import App from '/App' refers to App.js
> You can omit the .js extension

#### REACTDOM.render() in index.js

- We're importing from one of our dependencies; 'react-dom' (can be seen in package.json image)
- We now reference it as ReactDOM in the rest of our JS file
  It gives us access to new functions that vanilla JS does not have

ARGUMENT 2: 
An element from `public/index.html`

![image-20210713161645120](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210713161645120.png)

ARGUMENT 1: 
`<App />` which is a JS module named App.js containing a simple function (involves JSX)

> ![image-20210713161613853](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210713161613853.png)
>
> Isn't it a bit strange how we have HTML inside a JS file
> We don't even have quotation marks to make it a string



### JSX: JavaScript XML

The HTML we return from a component module is not actually HTML. 
It's technically JSX- which looks near identical to HTML but has some minor differences

- The JSX we type in our App function will be transformed into browser-ready code by React's bundling steps we don't see
- We get to write code with a ton of syntactic sugar (good)
  The production code is compatible with the browser after it gets transformed (also good)

If you want to see the final production build, hit the "Source" tab on Chrome's dev tools and you'll see the horrors of fully optimized code

#### Replacing JSX Syntax (return4)

In older React projects you'll notice that in every component file that uses JSX, you'll see the following line at the top:

```react
import React from 'react';
```

- As you know, JSX code is not really HTML- it's syntactic sugar that looks like it
- It gets converted into methods that are called from the React object you see above
  This is done automatically in newer React versions, but required the above import in the past

ALTERNATIVE:
There is actually a way to avoid writing JSX syntax- not that you would want to since it's so intuitive
It involves using `React.createElement`, which I'll admit I skipped in my Udemy course

It's much more complex and cumbersome, but if you need it in the future, check out the lesson named [A closer look at JSX](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595464#overview)

#### Strange JSX Inconsistencies

As you know, you can render variable values in your JSX using placeholders
These placeholders will refuse to render certain values like Booleans, undefined, null...etc

```react
  // somewhere in a component function
  let demo='false'
  return (
    <div>
      <h1>Hi there!</h1>
      <p>{demo}</p>	// refuses to render
    </div>
  );
```

You'll have to convert these values to a string if you want React to show them

```react
  // somewhere in a component function
  let demo='false'
  return (
    <div>
      <h1>Hi there!</h1>
      <p>{demo.toString()}</p>	// refuses to render
    </div>
  );
```



### Building a Custom Component

As stated earlier, it is considered good practice to dedicate 1 JS file per component
This will result in larger projects having 100s or 1000s of files, which is completely normal. 

#### Keeping files Organized

Create a folder to hold your components, but keep App.js where it was initially

- App.js is our ROOT COMPONENT
  It's the main component being rendered in our starting file index.js
- All other components will be nested within App.js or nested inside other components that are nested elsewhere

![image-20210713192356157](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210713192356157.png)

#### Understanding Component Trees

When using React, we are essentially just building a component tree- and everything will stem off the root component

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210713193655337.png" alt="image-20210713193655337" style="zoom:80%;" />

You can have any other kind of component, which will hold another piece of the UI and its associated functionalities

- No matter how many components you have, only App.js will be rendered directly into the HTML page, thanks to `ReactDOM.render(<App />, document.getElementById('root'));` in index.js
- Components that are NOT App.js will be used like regular HTML elements in our HTML code

#### Simple React Components

To create a React component, you must write a function that returns HTML

1. Create a new JS file in one of your components folders
   Name it using camelCase, but with the first letter capitalized as well (IMPORTANT)
2. Write a function that returns HTML code
   Function name === file name
3. Default export your function
   Now, any other JS file can import this component to theirs 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210713214104765.png" alt="image-20210713214104765"  />

4. Use your custom component in another JS file- the root component App.js in this case

- Import your function at the top
- Use your custom component like a customized set of HTML tags
- The capitalized name lets JSX know that it should be detecting a custom component instead of a regular HTML element- which all start with lowercase

> Your component will show up in the live preview!
>
> ![image-20210713214936469](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210713214936469.png) ![image-20210713215050361](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210713215050361.png)

#### More Complex React Components

The React components we'll be using will be much more complex than a simple `<h2>` header

We must always abide by the ONE ROOT RULE:
We are only allowed to return 1 root element in our JSX snippet... aka the returned HTML

EXAMPLE: Breaking the rule

```react
function ExpenseItem() {
  return 
  <p>I'm the Spectacular Spiderman</p>
  <p>The city's going green!</p>	// INVALID! The first <p> is allowed no siblings
}
export default ExpenseItem
```

EXAMPLE: Rule workaround #1

```react
function ExpenseItem() {
  return (
    <section>
      <p>I'm the Spectacular Spiderman</p>
      <p>The city's going green!</p>
    </section>
  );
}
export default ExpenseItem;
```

- The simplest way to get around this restriction is by wrapping all your HTML elements in a container
  There are alternative methods that you'll learn about later
- ADVICE: Wrap your JSX in (brackets) => CTRL S to auto-format your syntax with Prettier



### Passing Data with React Placeholders

So far, we've only learned how to insert hardcoded HTML elements, which is unacceptable for interactive webpages

By adding more JS in your function, you can pass variable values into your JSX
Technically this isn't dynamic, since these values are also hardcoded

- They operate just like `${}` in vanilla JS template literals, but without the `$`
- You can place basic JS expressions or variable values inside to pass data into HTML

LIMITATIONS:

1. They only hold expressions- No block statements like `if(){ }` inside them
2. You cannot place objects inside these React placeholders
   When it comes to date objects, you'll need to convert them to strings to place them inside

#### Demonstration

```react
function App() {
  let scroll = "fish to fry"; 		 // valid 
  let dateRN = new Date(2021, 2, 20) // invalid at first b/c it returns an obj 
  return (
    <div>
      <h2>{scroll}</h2>
      <h2>{dateRN.toISOString()}</h2>
    </div>
  );
}

export default App;
```

![image-20210714010019674](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210714010019674.png)

BENEFITS

- We can now hardcode calculation values in our HTML
- We can pass data from an HTTP or fetchAPI request

#### What can you Place inside React Placeholders?

- Variables, ternary expressions, modern operator expressions, method expressions like `arr.map(()=>{})`

- Can place JS template literals inside, even ones containing `${}`
  This is specifically good for adding dynamic classes

- CANNOT place if/else, for loops

  

### Passing Data down a Component Branch with Props

Think about how functions work in vanilla JS- and specifically understand why they're recyclable

- If it accepts parameters, we can input different ones into the same reusable function to get different return results. 
- React works in the same way- to reuse components in ways where they turn out differently, you need parameters and something we call props
- This is how we generate HTML that's dynamic instead of hardcoded

#### Why Props are Required in React

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210714025023442.png" alt="image-20210714025023442" style="zoom:80%;" />

- Imagine you're working on a component called `ExpenseItem.js`, but you need to insert data stored in your root component `App.js`.
- We can't simply import one variable value from one JS module to another, you'll get errors

#### Passing Dynamic Data via Props

EXAMPLE: Starter Code
Assume we have a regular `create-react-app` or Academind setup going
RCM is App.js while the CCM is ExpenseItem.js

——————————————————————————————————————————————————————
STEP 1: Assign attribute values in App.js

```react
// INSIDE App.js
import ExpenseItem from "./components/ExpenseItem";
function App() {
  // array of objects containing pertinent data
  const expenses = [ 
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14), 
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started</h2>          
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} 
          date={expenses[0].date}></ExpenseItem>          
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} 
          date={expenses[1].date}></ExpenseItem>        
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} 
          date={expenses[2].date}></ExpenseItem>          
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} 
          date={expenses[3].date}></ExpenseItem>         
    </div>
  );
}
export default App;
```

- We could have named the attributes something other than title, amount, and date
  As long as the React placeholder values are valid, it works
- It seems we are allowed to pass date objects inside React placeholders- at least in App.js as an attribute value

——————————————————————————————————————————————————————
STEP 2: Access the props argument in your CCM

```react
import "./ExpenseItem.css";
function ExpenseItem(props) {
    // we can name the arg something other than "props" if we want
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
```

![image-20210714033957922](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210714033957922.png)

#### How Props work in Component Modules

Each component module allows a max of 1 argument in its dedicated function. 
It's an object that houses all received attributes as properties

Keys: 
The attribute names defined in the RCM's JSX (title, amount, and date)

Values:
The values assigned to the aforementioned attributes

REMEMBER:

1. We are allowed to store objects as attribute values in our root component (shown in ex.)
2. We have the option to pass hardcoded data as attribute values
   They will still end up in the props object, without any issues

#### Adding vanilla JS Logic to Components

Lets continue modifying the example we've been working on so far

GOAL: 
Convert the current date format into something more friendly w/ JS logic

![image-20210714033957922](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210714033957922.png)

ExpenseItem.js Syntax: (the App.js is less is less important to see right now)

```REACT
import "./ExpenseItem.css";
function ExpenseItem(props) {
  // Behold the JS logic (we'll be placing these helper vars in the JSX)
  const month= props.date.toLocaleString('en-US',{month:'long'})
  const day= props.date.toLocaleString('en-US',{day:'2-digit'})
  const year= props.date.getFullYear()
  // JSX 
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
```

![image-20210714140102802](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210714140102802.png)

ALTERNATIVE:
We can place the expressions inside the React placeholders instead, but using helper variables is considered a better practice



### Nested Components and Module-Splitting

```
See chapter's dedicated repo at the starting H1 title
START:  Commit 37
END: 	Commit 38
```

#### How Nested Components Work

![image-20210714144533783](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210714144533783.png)

Take a look at our ExpenseItem.js component in the last code snippet of the last lesson

- At the moment, it offers App.js details about the date, title, and amount
- Remove the date aspect of ExpenseItem.js and place it in a new component named ExpenseDate.js
  It's not necessary, but it's a good example to demonstrate how to split components apart 

![image-20210714145343654](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210714145343654.png)

TERMINOLOGY: (for ExpenseDate.js)
Child component, nested component, sub-component

- Either way, we used `<ExpenseItem>` tags in App.js, and still will after this
- Now we'll be using `<ExpenseDate>` tags in ExpenseItem.js as well

This is how component trees are formed! <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210713193655337.png" alt="image-20210713193655337" style="zoom: 50%;" />


#### Demonstration

PARTIAL STARTER CODE:

```REACT
// ExpenseItem.js
function ExpenseItem(props) {
  const month= props.date.toLocaleString('en-US',{month:'long'}) ------------
  const day= props.date.toLocaleString('en-US',{day:'2-digit'}) MOVE TO NEW
  const year= props.date.getFullYear() ---------------------------------------
  return (
    <div className="expense-item">
      <div> ------------------------------------------------------------
        <div>{month}</div>
        <div>{year}</div>		MOVE TO A NEW COMPONENT MODULE
        <div>{day}</div>
      </div> ------------------------------------------------------------
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
```

——————————————————————————————————————————————————————
PROCEDURE:

1. Create a new component named ExpenseDate.js, and copy paste all the date-oriented code inside
   Make a function that returns JSX and is the default export
2. Import your new sub-component into ExpenseItem.js
3. Use `<ExpenseItem>` tags with a date attribute to pass values into the sub-component's props argument

ExpenseDate.js:

```React
function ExpenseDate(props) {
  // gets props from ExpenseItem's <ExpenseDate attribs=""/>
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  // Add some JSX classes to apply CSS styling (offscreen)
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
export default ExpenseDate;
```

ExpenseItem.js:

```React
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate"; 	// import your sub-component
function ExpenseItem(props) {
  // gets props from App.js <ExpenseItem attribs=""/>
  return (
    <div className="expense-item">
      <ExpenseDate date= {props.date} />	
      <div className="expense-item__description">
        <h2>{props.title}</h2> 
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
```

![image-20210714153008307](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210714153008307.png)

End result's the same, but we made our ExpenseItem.js component more compact

#### Niche Fact about Styling Nested Components

When CSS styling a subcomponent, we have 2 choices where we can place the styling CSS
In our example, ExpenseDate.js was the nested component

![image-20210714145343654](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210714145343654.png)

OPTION 1: Style it inside it's own dedicated `ExpenseDate.css` file
Recommended

Option 2. Style it inside `ExpenseItem.css`
We import the date-oriented code there anyway
Not recommended, because combining CSS for 2 CCM's gets long and potentially confusing

#### When to Split Up Components

Our starting component ExpenseItem.js was not particularly complicated. 
It would have been just fine to leave it as it was at the start of the lesson

- There is no concrete rule for when to split up your components. 
  Do so when it feels like you are lumping to many functionalities into 1 component
- Do not split things up into overly simple chunks like we did in today's demonstration 
  You'll have 1000's of files by the end of a huge project if you do that

### Following the Component Tree

You can tell when a custom component module is further down the tree than another module
Just check the import statements atop the JS files

> Whatever module you import to yourself, is lower on the tree

#### EXAMPLE: Syntax Post Assignment 1 

```
See chapter's dedicated repo at the starting H1 title
START/END: Commit 38.5
```

App.js:

![image-20210714160757878](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210714160757878.png)

LeanExpenses.js

![image-20210714162242807](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210714162242807.png)

ExpenseItem.js

![image-20210714161006556](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210714161006556.png)

ExpenseDate.js

![image-20210714161053698](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210714161053698.png)

#### Conclusion

![image-20210714161412278](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210714161412278.png)



### Making Reusable Wrapper divs

> See chapter's dedicated repo at the starting H1 title
>
> START: 	commit 38
> END: 		commit 39

The approach of building a UI with smaller building blocks is called COMPOSITION
Now, what if we wanted to create a component that acted as a shell around any other kind of content?

#### Cards

Cards are a term coined by devs who noticed container elements usually abide by a similar look. 
They have rounded corners, a drop shadow, and usually house duplicate elements like list items

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210715115837092.png" alt="image-20210715115837092" style="zoom:67%;" />
>
> In our current state, all the list items are surrounded by a card

#### Why should we Reuse Card Containers?

- Our components so far have been highly specific, and produce what their names imply
  ExpenseDate.js will output a date while LeanExpenses.js outputs a price
- All of our CCM's receive their data through attributes/props

![image-20210714161412278](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210714161412278.png)

Sometimes, you'll want to have a component where you don't configure everything through props.
We want to be able to pass content between the opening/closing tags of that component.

——————————————————————————————————————————————————————
LET'S TRY TO REUSE CARDS ACROSS OUR MODULES
I can see multiple instances in our module files where we use generic container divs

- Go to the previous lesson again and look at the "EXAMPLE: Syntax Post Assignment 1" subsection
  We return JSX content surrounded by a container div every time

- This needs to be styled in the component's dedicated CSS file every time as well
  It's repetitive, and we leave ourselves open to mistakes when we input the same thing ∞ times

Create a Card.js component that we can reuse for every surrounding div we've created

- Once we're done, remove the surrounding div stylings for all the components we've made so far
  The Card component will have a single CSS file
- Since we're using our Card as a container every time, we won't need to pass any data to it with props

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210715120826012.png" alt="image-20210715120826012" style="zoom:67%;" />

#### How to Make a Reusable Wrapper 

PROBLEM WE MUST SOLVE
React does not allow you to wrap a custom components around other custom components, by default
There is a solution React has in place, plus you can wrap regular HTML with a custom component 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210715122800467.png" alt="image-20210715122800467" style="zoom: 80%;" />

THE WORKAROUND
In our Card.js file, we're going to use a hardcoded value inside the props argument; `props.children`

- You don't need to pass data into Card.js via attributes, since React made `props.children` intrinsic to all components
- The value will be the content between the opening/close tags of your custom component

#### Procedure

1. Create your Card.js component, along with its CSS file

```react
// Card.js
import './Card.css' // (offscreen)

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
export default Card;
```

The `const classes` variable makes it so we use "card" as a default class for every wrapper. 
Plus, we add on any other classes we specify at the reusable wrapper locations

2. Replace all generic wrapper divs with our new card component
   Keep any classes that were once on those divs (they'll be added)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210715125751914.png" alt="image-20210715125751914" style="zoom: 59%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210715125631393.png" alt="image-20210715125631393" style="zoom:58%;" />

#### More can be Added to Wrapper Components

Feel free to include other JSX content (even extra custom components) to the wrapper you create

![image-20210927001513903](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210927001513903.png)

### Running a Live Preview

#### Procedure

1. Make sure you have premade scripts set in your package.json

![image-20211228040137623](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211228040137623.png)

2. Run `npm run dev` for a live server-esque preview during development
3. Use `npm run build` to help you condense and optimize everything when it's time for production and your work is done 

### General Tips

SHORTER CUSTOM TAGS
When using custom component tags that kiss, you can replace them with self closing ones

```react
<ExpenseItem></ExpenseItem>
can be replaced by using...
<ExpenseItem/>
```

COMPONENT FAST-TRAVEL
CTRL left click a custom component tag and you'll zip directly to the module it's for

#### Auto Link to Component Files

- When adding custom JSX tags, wait for suggestions to pop up
- If you hit enter on a component name, you won't need to write an import line for it 
  The code editor will do so automatically

#### Destructure the Props Object

Instead of pulling properties from the props object in our code (`prop.nombre`)
Destructure the prop object directly in the function arg, making the prop properties easier to use

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210805145226449.png" alt="image-20210805145226449" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210805145256816.png" alt="image-20210805145256816" style="zoom:80%;" />

#### Organizing your Components

When working on your projects, you'll eventually notice that your components folder fills up quickly, especially because most components come equipped with both a JS/CSS file

GOAL:
Try to separate your components by the type of purpose they serve. 

- Most of your comps are tied to an app feature, like rendering an expense or date. 

- Some others like Card.js provide general UI utility

  Before: ![image-20210715144134963](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210715144134963.png)  					After:   ![image-20210715144548870](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210715144548870.png)

#### Fast KVP's

In JS and React, we can actually store functions or variables inside objects without specifying both a key and a value

```react
let rad1 = () => console.log(1);
let rad2 = () => console.log(2);

let objA = { rad1, rad2 }; // same as the next line
let objB = { rad1: rad1, rad2: rad2 };
```

The last 2 lines create the exact same object
Only define a key name when your aim is to change what you'll be referring to the value as (see below)

```react
let rad1 = () => console.log(1);
let rad2 = () => console.log(2);

let objA = { rad1, rad2 }; // same as the next line
let objB = { radOne: rad1, radTwo: rad2 };
```



# useState with Events:  Part 1

> CHAPTER-WIDE GIT REPO: 
> https://github.com/Jason2B3/academind_react_1

CHAPTER'S FOCUS:

- Thus far, we've learned how to separate our code into smaller components that come together to form a static webpage. 
- Nothing we've made is dynamic or interactive- which is what this section aims to address

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210715151256749.png" alt="image-20210715151256749" style="zoom: 67%;" />

### S1: Event Listeners and Handlers (2BC)

The process for setting up event listeners in React is fairly similar to an obscure method we can use in JS, but oftentimes don't

- In JS, we had the option to use onClick to tell a button to run a function, if it gets clicked on
- Typically we didn't use this technique because we limited ourselves to only using 1 event listener per element- which made `addEventListener('click', ()=>{ }` more popular

#### Event Listener Setup Procedure

1. Define a function in the JS section above your component's JSX
   Feel free to use declarations, expressions, arrow functions...whatever

2. Use an `onClick={functionName}` attribute on the element you need to listen for events on

- Substitute onClick for other event types if required
- Remember to AVOID including the `()` after you name drop your function
  We don't want JS  to execute that function immediately- we are waiting for a specific event

#### Very Simple Demonstration

This is a proof of concept
We haven't actually given the button a meaningful purpose, or even styled it to look nice

> START: 	".gitignore is now working"
> END: 		Commit 46

——————————————————————————————————————————————————————
We enter the ExpenseItem.js component, and add a button element
We then attach a simple function that logs a message to the console

```react
// imports/exports not important to lesson
function ExpenseItem(props) {
  const clickHandler = () => {
    console.log("I got clicked"); // we log this message when our btn's clicked
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button> {/*HERE!!!*/}
    </Card>
  );
}
```

![image-20210715155223453](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210715155223453.png)

GOOD NAMING PRACTICE:
End your event handler function names with "Handler" 
It helps onlookers detect where the function will be used (crucial for longer complex components)

WARNING:
This setup won't be enough if you're trying to DOM manip or render new webpage content
See the next lesson for that

#### Running Multiple Functions after an Event (2BC)

https://stackoverflow.com/questions/26069238/call-multiple-functions-onclick-reactjs



### On Event Types

Fill up this section as you advance through your course
[REACT DOCUMENTATION FOR SUPPORTED EVENTS](https://reactjs.org/docs/events.html)

GENERAL

```
onClick		once an element is clicked
onSubmit	for submission buttons- the handler may require arg.preventDefault()

onDrag
onScroll
```

HOVER:

```
onMouseEnter	Beginning to hover over an element (idk about bubbling for this)
onMouseOver 	Beginning to hover over an element (idk about bubbling for this)

onMouseLeave	Leaving a hovered element (does not bubble)
onMouseOut		Leaving a hovered element (bubbles)
```

Bubbling is only relevant if you're deliberately using event delegation to improve performance
Useful when you have the same event type and handler for several elements (in JS DOM notes)

FORMS:

```
onInput		activates on each key press
onChange	activates on each key press, and works on dropdown menu option clicks

onFocus 	activates when an element link an input field recieves focus
onBlur		activates when an element loses focus by getting clicked off of
```

FORM SUBMIT

```react
<form onSubmit={submitHandler} >
	<button type="submit">Submit form inputs</button>
</form>
```

- Have a button or element dedicated to submission
- Use a function defined outside the JSX as an event handler for the onSubmit event



### S2: The Need for React States

In the previous lesson's demonstration subsection, we learned how to set up a very simple event listener that logs content to the console. 

If we want to render new visuals onto our webpage however, we're going to run into problems

#### How Component Functions are Executed

React components are just functions that return JSX. 
We call these functions using `<CustomTags>`, then React processes them behind the scenes.

- When React encounters these custom components , it'll search for the module they originate from 
- They all eventually boil down to HTML code, which gets rendered
  Unfortunately, this only happens once. 
- If you set up an event listener to change a value in JSX when pressed, React will not re-render that JSX content by default. 

EXAMPLE:

> START: 	commit 46
> END: 		Commit 47

![image-20210714161412278](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210714161412278.png)

#### Editing ExpenseItem.js

- We're going to re-define the `titleVar` variable that we use to set the `<h2>` content in JSX
  Use an event listener for this whose handler will be named `clickHandler`
- React will notice that we hit the button, but won't re-render the content by default
  The reason why is because even if an event handler's triggered, the ƒ() is not re-invoked

ExpenseItem.js:

```react
function ExpenseItem(props) {
  let titleVar= props.title // this orig title comes from App.js
  const clickHandler = () => {
    titleVar= 'UPDATED' // updates the JSX which won't be rendered visually
    console.log("I got clicked");
  };
    
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{titleVar}</h2> {/*TITLE GOES HERE*/}
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
```

![image-20210715184642601](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210715184642601.png)



### S3: Using State to Make Changes Dynamic

MAIN TAKEAWAY
If you want to re-invoke a component ƒ() when a variable value gets changed, rely on `useState()`

#### Brief Intro to React Hooks

Place at top of your component file:

```react
import React, { useState } from 'react'
```

Use this inside your component function:

```react
useState()
```

RULES:
This is a React hook, and you can tell because the method name begins with "use"

- They can only be called inside your component function's root level
  Don't place it within another block inside that function
- There is one exception to this rule, that we'll learn about later (2BC)
- Feel free to apply `useState()` to multiple values at once- each works independently 
  Showcased in "Managing Multiple Event Handlers and States"

#### useState() Explanation

The method `useState()` needs an argument- which we'll set equal the props.title value we expect to change when/if a user hits our button element with the onClick handler

```
useState(props.title)
```

——————————————————————————————————————————————————————
No matter the situation, useState will return an array containing exactly 2 values
1)	The current value of the argument 
2)	A method that sets the current value to something else

- Use array destructuring to name each of those 2 array values whatever we want
- The typical naming convention is a descriptive name, followed by the exact same name with "set" placed in front of it

```
const [title, setTitle]= useState(props.title)
```

——————————————————————————————————————————————————————
To set the value of title to something different, use the setTitle variable we just defined

```
setTitle('Updated')
```

I'm aware this is a strange way to use setTitle, which is supposedly a variable and not a function
Just know that it's a special variable that gets managed by React

#### EXAMPLE: useState in Action

EXAMPLE: 
Make a button render a new H2 heading (last lesson's challenge)

> START: 	commit 47
> END: 		Commit 48

ExpenseItem.js:

```react
function ExpenseItem(props) {
  
  const [title, setTitle] = useState(props.title); // initial useState line
  const clickHandler = () => {
    setTitle("UPDATED"); // set new value for title
    console.log("inside of handler scope:", title);
    // after first press, "title" still keeps its orig value (see next subsection)
  };
    
  console.log("in function's root scope:", title); 
  // after first press, it equals UPDATED (see next subsection)
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2> {/*TITLE GOES HERE*/}
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
```

![image-20210715224810182](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210715224810182.png)

![image-20210715224845525](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210715224845525.png)



### S4: A Deeper Look at useState()

#### Duplicate Components: What gets Re-rendered

TLDR: useState operates on a per-component basis. 

- If a component module gets used multiple times, useState() will output a new array for each one. 
- So changing the h2 content on one of our buttons created with ExpenseItem.js will not affect the others in the last lesson's example

![image-20210714161412278](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210714161412278.png)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210715232257715.png" alt="image-20210715232257715" style="zoom:67%;" />		 ![image-20210715232432629](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210715232432629.png)

#### Duplicate Components: What gets Re-invoked

As stated earlier, useState operates on a per-component basis

- If we change a useState variable value on 1 instance of a component, only that individual component gets its function re-invoked
- This is pretty much the exact same pain as the last subsection, but I can prove it in a different way

ExpenseItem.js

```react
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React"); 
  
  const clickHandler = () => {
    setTitle("UPDATED");
  }; 
  return (does not matter);
}
export default ExpenseItem;
```

![image-20210715233359055](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210715233359055.png)

EXPLANATION:

On startup, the console logs the "evaluated by React message" 4 times in a row
This is because we have the ExpenseItem component function invoked 4 times to create 4 duplicates

If we change the H2 of one duplicate by pressing its button, the component ƒ() only gets reinvoked a one time

#### How useState() Works Under the Hood

![image-20210715234255132](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210715234255132.png)

QUESTION A: 
Why do we use const when we destructure the useState() array? 
If we're re-assigning the "title" value, shouldn't we use "let" instead?

- Remember that we do not assign title's value like we would with a typical variable
  Typing `title= something_else` would indeed fail
- Instead we call setTitle, which tells React to manage title's concrete value behind the scenes
  For that reason, using const is warranted

QUESTION B:
If a component function gets reinvoked when the title variable changes, isn't `props.title` going to re-initialize the title value to what it was on startup?

- By looking at the code, anyone would think that, but React has a tracker in place that knows when `props.title` has been redefined
- The `props.title` syntax only gets taken seriously when it hasn't got its value re-assigned yet

#### State can be Updated in Many Ways

- Thus far, we update our state upon user events (e.g. upon a click). 
- That's very common but not strictly required for state updates! 
  You can update states for whatever reason you may have in mind

EXAMPLES:

1. Later in the course, we'll see Http requests that complete 
   We then want to update the state based on the Http response we got back
2. Could also be updating state because a `setTimeout()` timer expired 

# useState with Events: Part 2

> CHAPTER-WIDE GIT REPO: 
> https://github.com/Jason2B3/academind_react_1



### P1: Accepting User Inputs fr/ Forms

LITTLE DIFFERENCE:

- Creating a form in React is essentially the same as creating one in HTML
- Feel free to split up aspects of the form into sub-components, but I did it in one to avoid having too many files

#### Create a form to Add Expenses

> START: 	commit 48
> END: 		commit 51

ExpenseForm.js:

```react
import "./ExpenseForm.css"; // (offscreen styling)
function ExpenseForm() {
  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text"></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01"></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31"></input>
          </div>
        </div>
        <div className="new-expense__Actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}
```

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210716021556923.png" alt="image-20210716021556923" style="zoom:80%;" />
>
> There are more expense components listed, but our focus for this lesson is the form

EXPLANATION:

- This is a new CCM named `ExpenseForm.js` that I placed inside a new folder named `NewExpenses`
  There is a ton of nesting present, but don't mind that (it's still really simple)
- After this component's creation, we integrated it into App.js' JSX

![image-20210716022020104](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210716022020104.png)

FORM DETAILS:

1. The date produces a pop up preview when you click on it
   Has a min/max date set: `min="2019-01-01" max="2022-12-31"`

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210716022337626.png" alt="image-20210716022337626" style="zoom:67%;" />

2. The amount field has a set minimum of 0.01, and no defined max
   It has ticker buttons that increase/decrease the amount value by 0.01 at a time
3. The title field accepts any and all inputs, for now

The next step will be gathering the inputs once the values are submitted

#### Access Input Field Values

We need to be able to access the values people type into certain fields
The title field in particular is one where we need to access the value of what the user inputs

In JS, we did this using `eventObj.target.value`, which also works in React
The event object is intrinsic to all event handler functions, and always returns a STRING

EXAMPLE:
Make React run an event handler each time the user types any character into the title field
Log the current field value to the console

Hint: Use the onChange event to detect whenever a key is pressed in a field

> START: 	commit 51
> END: 		commit 52

ExpenseForm.js

```REACT
function ExpenseForm() {
  const titleChangeHandler= function(eventObj){
    console.log(eventObj.target.value)
  }
  return (
    <p>Tons of other JSX content that is not the main focus</p>
    <input type="text" onChange={titleChangeHandler}></input>
  );
}
```

![image-20210716031912879](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210716031912879.png)



### P2: Managing Multiple Event Handlers/States + 2 way Binding

Feel free to apply `useState()` to multiple values at once

#### Prerequisite: 2 Way Binding Explanation

How the value attribute works in HTML and JSX:

```JS
// imagine we're inside a JSX or HTML form container
<input type="text" value="90d">
```

We can't change this value even if we try to type inside the field
The "value" attribute is hardcoded

![image-20210716174926367](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210716174926367.png)

WHAT YOU'RE ABOUT TO SEE:
What if we were able to make the value attribute value dynamic instead?

- With React placeholders, we can do that, and it will be shown in the following example
- This process will be called 2 way binding because we'll be accomplishing 2 things: 
  Setting the value attribute in our JSX programmatically, and updating the state with useState()

#### Lesson Objective

![image-20210716175708208](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210716175708208.png)

GOAL:
In the previous lesson, we created a form with 3 fields that all operate a bit differently
We'd like to set up 3 event handlers that fire whenever a value in these fields is changed

APPROACH:

1. Set up 3 onChange event handlers- one for each input element in our JSX form 
2. Apply useState() to the input field values, so we can re-invoke the component ƒ() whenever a value in these fields gets entered, changed, or selected from a drop down menu
3. Use an onSubmit event handler for your form element to submit all data and save it somewhere
   Remember to prevent the default submit behavior that reloads your webpage
4. Once your data is submitted, clear the form

#### Method 1: Individual Event Lines

> START: 	commit 52
> END: 		commit 57

——————————————————————————————————————————————————————
PART 1: Set up useState("")

- We use empty strings as our useState() arguments because we want our input fields to be empty on startup, and all input fields output strings

- We'll feed useState() first variables in our JSX: 
  Ex. `<input value={enteredTitle}` 

- This sets up 2 way binding because...
  1)	We reinvoke the component function when the `enteredTitle` variable is changed
  2)	The value attribute of the input element gets updated when `enteredTitle` does

For the record, I used the `enteredTitle` useState() variable for all my explanations here
We have 3 useState()'s in total, but they all operate the same way

——————————————————————————————————————————————————————|
PART 2: Create your onChange event handlers

- We wanted to re-define the values for `enteredTitle, enteredAmount, and enteredDate` after any sort of user input within the form fields we created in JSX
- That could mean typing in the fields, using the uptick or downtick buttons for the amount which changes with $0.01 increments, or selecting a calendar date using the intuitive default pop up
- To fire an event handler off in any or all of these cases, our only choice was `onChange`
- Within the handlers themselves, we just redefine `enteredTitle, enteredAmount, or enteredDate`, which also gets updated in JSX thanks to 2 way binding we set up in step 1

——————————————————————————————————————————————————————
PART 3: On submit, save our enteredVar data and clear the input forms

- Save values of `enteredTitle, enteredAmount, and enteredDate` into an object literal
- Clear out all the input field values with 2 way binding
  Set the aforementioned variable values back to "", using the useState() methods in array var 2

ExpenseForm.js

```react
import React, { useState } from "react";
function ExpenseForm() {
  // PART 1: Set up useState()
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // PART 2A: Create your onChange event handlers
  const titleChangeHandler = (e) => setEnteredTitle(e.target.value);
  const dateChangeHandler = (e) => setEnteredDate(e.target.value);
  const amountChangeHandler = (e) => setEnteredAmount(e.target.value);
    
  // PART 3: On submit, save our enteredVar data and clear the input forms
  const submitHandler = (e) => {
    e.preventDefault(); //prevent default pg reload
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // Set all enteredVars to "", which sets the value attributes to "" as well
    setEnteredTitle("")
    setEnteredAmount("")
    setEnteredDate("")
    console.log("expenseData has been submitted!", expenseData);
  };
  // ---------------------------------------------------
  // MOST OF THE JSX IS NOT RELEVANT TO THIS EX.
  // PAY ATTENTION TO THE <form> and <input> tags with all the event handlers
  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div>
        </div>
        <div className="new-expense__Actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
```



### useState w/ Object Args 

There is another way to work with multiple event handlers and states. 
This method is less popular than the first, but you may still see it used across React projects

NEW TERMINOLOGY:

useState firsts:
The first entry in the array that useState gives back to us
Here we'll actually have 3 useState firsts, since we use the React method on an object with 3 KVP's

useState seconds
The method useState relies on to change the firsts
Again, we'll have 3 of these since we're working on an object with 3 KVP's

#### Overview

Take a look at the previous lesson's STEP 2B

- All 3 useState("") instances are used the same way. 
  We wish to store user input data when someone edits a form field. 
- Why not take care of all 3 at the same time, instead of using 3 handlers and 3 useState instances?

Previous lesson => 3 useState instances

```react
// PART 2A: Create your onChange event handlers
const [enteredTitle, setEnteredTitle] = useState("");
const [enteredAmount, setEnteredAmount] = useState("");
const [enteredDate, setEnteredDate] = useState("");
```

This lesson => 1 useState instance with a 3 KVP object

```react
const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
});
```

#### State Snapshots

- A state snapshot is when we update a stateful variable's value in a way the builds off its most recent value. 
- We must use function notation for this, since React schedules state updates in the scope it occurs in- instead of changing them instantly

How to call 1 of 3 useState array firsts:  

```
userInput.enteredTitle
```

To change the value of 1 of 3 useState firsts

```react
setUserInput((prevState) => {
   return { ...prevState, enteredTitle: "any value you choose" };
});
```

- We set all KVP's to what they were previously via spread operator 
  (to keep all other KVP's intact)
- Then afterwards we redefine the KVP for enteredTitle, using an anonymous arrow function

#### Alternative Solution to Prev. Lesson

> START: 	commit 52
> END: 		commit 57B

ExpenseForm.js

```react
function ExpenseForm() {
  // PART 1: Set up multiple useState instances by supplying an object arg
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  // PART 2B: Create your onChange event handlers (differently)
  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
    // Set all KVP's to what they were previously via spread operator (to keep all other KVP's intact)
    // Redefine the KVP for enteredTitle
    // We use an anon arrow function so Reacrt changes this state immediately 
  };
  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
  };
  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  };
  // PART 3: On submit, save our enteredVar data and clear the input forms
  const submitHandler = (e) => {
    e.preventDefault(); //prevent default pg reload
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    // Set all enteredVars to "", which sets the value attributes to "" as well
    setUserInput(() => {
      return { enteredTitle: "", enteredAmount: "", enteredDate: "" };
    });
    console.log("expenseData has been submitted!", expenseData);
  };
  //—————————————————————【】——————————————————————————
  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={userInput.enteredTitle}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={userInput.enteredAmount}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
              value={userInput.enteredDate}
            ></input>
          </div>
        </div>
        <div className="new-expense__Actions">
          <button type="submit" onClick={submitHandler}>
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
```



### P3: Passing Data up the Tree Instead of Down

- Up until now we've only learned how to pass data down from 1 component to a deeper nested one. 
- This was done using attribute values on custom component tags and props. Oftentimes however, we'll need to pass data upwards instead.

Take the previous lesson for example:
On submit, we store relevant data into the expenseData object literal, while in `ExpenseForm.js`
We'll be needing this data in App.js, but we don't know how to get it there...yet

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210716184000437.png" alt="image-20210716184000437" style="zoom:80%;" /> 

#### No skipping Rule

We can only send data upwards/downwards 1 component at a time

- You cannot skip any components on the chain when moving data from 1 component to another
- It works the same way with sending data downwards with attributes and props

![image-20210717232436406](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210717232436406.png)



#### How to Pass Data Upwards

PROCEDURE:

1. Make a custom attribute for your custom component tags in JSX

- Set it equal to a function you define in the same module where the custom tags are located
- App.js here in this example
  This wouldn't be the case if there were more components in between

2. Create the function you set your new attribute equal to
   Act as if you've transferred the data to this higher component already and are using it now

- Give that function a parameter- it will eventually equal the data you're aiming to move up
- Code the actions you want performed with that data, in that function

3. Enter the component where your data is found
   Use that function you passed into your custom parameter, 1 file above you right now

- Access it using `props.attribName()` in your component function
- Don't forget to give your component function a `props` parameter, if you haven't already

#### Demonstration

> START: 	commit 57
> END: 		commit 58

Our project's current state: 
We obviously have more CCM's than this, but we're analyzing 1 branch here

![image-20210718000254543](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210718000254543.png)

WE CAN'T SKIP ANY COMPONENTS:
The ExpenseForm.js module is directly after App.js in our component tree branch
We couldn't make the mistake of trying to skip something if we tried
It doesn't matter since passing data up twice just has you repeating the process 1 more time

——————————————————————————————————————————————————————
App.js

```react
function App() {
  const expenses = [ array of objects ];
  
  //# DataUp STEP 2: Create a handler function to set your new attribute equal to
  // parameter = object of data that's collected in ExpenseForm.js
  const saveExpenseDataHandler = function (savedFormData) {
    const expenseData = {
      ...savedFormData, // save the data already present in the parameter
      id: Math.random().toString(), // add a unique ID (poorly done here)
    };
    console.log("data moved to App.js!", expenseData);
  };
    
  //——————————————————————————————————————————————
  //# DataUp STEP 1: Create a custom attribute where your CCM tags are used
  return (
    <div>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> {/*HERE*/}
      <LeanExpenses expenses={expenses} />
    </div>
  );
}
export default App;
```

ExpenseForm.js

```react
function ExpenseForm(props) {
  // *** Other parts of the component ƒ() have been omitted for brevity ***

  // Event-L PART 3: Clear input fields after submit
  const submitHandler = (e) => {
    e.preventDefault(); //prevent pg reload
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // Set all enteredVars to "", which sets the value attributes to "" as well
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
      
    // -------------------[ONLY PART THAT MATTERS BELOW]---------------------
    //# DataUp STEP 3: Use your custom attribute's handler function
    props.onSaveExpenseData(expenseData) //# supply the object we just created
    // -------------------[ONLY PART THAT MATTERS ABOVE]----------------------
      
  };
  return ( 'JSX ommitted for brevity' )
}
```



### Prop Drilling & Passing Data Sideways 

#### When it's Required

REQUIREMENT:

- You will often encounter situations where you want to pass data gathered in 1 component to one of its siblings. We cannot pass data directly up or down in a situation like this
- Maybe they aren't even siblings on the same level beneath the root component. 
  Perhaps they are just not on the same component tree branch

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210718165657575.png" alt="image-20210718165657575" style="zoom:80%;" />

SOLUTION:

- Pass data up to the nearest parent component that has a direct path to your data's intended destination (will not always be App.js)
- Employ useState() in the nearest parent component
  The passed data will not be there on startup, so you need to re-invoke that ƒ() when it does arrive

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210718165712723.png" alt="image-20210718165712723" style="zoom:80%;" />

#### What is Prop Drilling?

In large projects, you'll often gather data in a component that's much farther away from it's intended destination than you would like

- If you want your data to make the trip, you'll have to pass it up then down through several components 1 by 1, while using props to pass data each time. 
- This is tedious and adds a ton of excess code. 
  Redux and Context API can be used to negate this problem, which we'll learn about later

#### Demonstration

> START: 	commit 58
> END: 		prop drill demonstration

This example takes place across several modules containing large functions, so I can't show it here
This needlessly large scope of our actions is why people avoid prop drilling 

OVERVIEW:

ExpenseForm.js gathers data about the info in the form fields, after we hit submit
ExpenseForm.js line 28:  `props.onSaveExpenseData(expenseData)`

Pass it up to App.js
App.js line 42: `onSaveExpenseData={saveExpenseDataHandler}`

Pass it down to LeanExpense.js
LeanExpense.js line 43: `passedFormData={movedExpenseData}`

——————————————————————————————————————————————————————

- We need useState() in App.js since expenseData in this file does not exist on startup
  But it will once we submit info on what we're buying, and info gets passed up to App.js
- useState() is required if we want to pass that data down to LeanExpense.js
  We set a passedFormData attribute equal to "" initially, but it will change after a submit button's hit
- We can't perform these actions wherever we want
  We need to code actions in event handlers that know when and if data is generated or moved



### Controlled/Uncontrolled Components 

#### Controlled

If you set up 2 way binding on one of your custom components, that means...

1. A value in your component's JSX is passed down to it from a parent
2. Any changes to that value in your component is passed up to the parent
   Usually the parent manages changes to that value with `useState()`

Any component like this has its logic handled in a parent module, not its own
This is why we call it a controlled component

EXAMPLE: 
ExpensesFilter.js is a controlled component
LeanExpenses.js manages its state, and is a parent to ExpensesFilter.js on the component tree

> commit 59.5: Challenge 2

- It's default DDM value is set inside LeanExpenses.js, its parent module
  Using the `defaultYear={filteredYear}` when defaultYear is a useState variable
- If someone chooses a year (different or the same) on the DDM, that info gets sent up from ExpensesFilter.js up to LeanExpenses.js, alerting it's useState()

#### Uncontrolled Components

- An uncontrolled component is one that stores its own state internally, and you query the DOM using a `ref` to find its current value when you need it. This is a bit more like traditional HTML
- Try to use controlled components whenever possible

```react
// Controlled:
<input type="text" value={value} onChange={handleChange} />

// Uncontrolled:
<input type="text" defaultValue="foo" ref={inputRef} />
// Use `inputRef.current.value` to read the current value of <input>
```

#### How devs Classify Components

A component that manages state:
Stateful, smart

A component that does not manage state:
Presentational, stateless, dumb

### Does useState get Re-initialized?

When a component gets re-evaluated or re-rendered, you may wonder why useState variables still manage to keep track of their values. 

#### Nah

- The useState line looks like it would reset the value of your stateful variable every time the code gets ran through again after startup. 
- That is not the case, since React memorizes what the latest stateful variable's value was

```react
function App() {
  console.log("App component running!");
  const [stateVari, setStateVari] = useState(false);
    // initialized as false once, then the value stays memorized, to be altered whenever the user hits the button with toggleHandler assigned to it

  const toggleHandler = function () {
    setStateVari((prevState) => !prevState); // toggles T/F
    console.log(stateVari)
  };

  return (
    <div>
      <p>stateVari value is currently: {stateVari.toString()}</p>
      <button onClick={toggleHandler}>Toggle stateVari</button>
    </div>
  );
}

export default App;
```

#### Does it ever get Re-initialized?

If the entire component is deleted then added back, then yes
This also applies to useReducer as well, for the record

- The useState line will reset our stateful variable value back to false, if that happens
- Whatever memorized value the stateVari had before gets deleted with our component



# Rendering Lists & Conditional Content

> CHAPTER-WIDE GIT REPO: 
> https://github.com/Jason2B3/academind_react_1

FOCUS:
Learn how to elegantly output arrays of data onto our webpage, and how to show different content under specific conditions

### P1: Dynamically Rendering Lists 

At the moment our webpage is static. 

- We can pick a year to filter by or even submit data on a product we'd like to purchase, and the UI will remain the same. 
- We've passed data b/t components but haven't done anything visual with the data, until now

​			<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210719032404027.png" alt="image-20210719032404027" style="zoom: 55%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210719032428404.png" alt="image-20210719032428404" style="zoom:55%;" />

#### Part 1: Dynamically Generate JSX

- You've seen in vanilla JS how we would generate strings by using forEach/map to iterate over an array full of objects containing data. Afterwards we'd use those strings to generate HTML
- This is common in React as well- although we use JSX instead of strings + dom manip

> START:	commit 59.5: Challenge 2
> END:		commit 63

App.js contains this array of objects which gets passed down to LeanExpenses.js via props

```js
const expenses = [
   { id: "e1", title: "Toilet Paper", amount: 94.12, date: new Date(2020, 7, 14) },
   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
   { id: "e3", title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28)},
   { id: "e4", title: "New Desk (Wooden)", amount: 450, date: new Date(2021, 5, 12)}
]
——————————————————————————————————————————————————————
// Passed with...
<LeanExpenses expenses={expenses} />
```

LeanExpenses.js (initially hardcoded JSX )

```react
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem> {/*Repeated 4X since we have 4 array entries*/}
      {/*Wouldn't be hardcoded IRL b/c we can't know how many items ppl'd buy*/}
    </Card>
  );
```

LeanExpenses.js (dynamic)

```react
  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYear={filteredYear}
        onSelectFilterYear={filterYearHandler}
      />
      {/*Only need 1 expression to render the same content*/}
      {props.expenses.map((obj) => (
        <ExpenseItem title={obj.title} amount={obj.amount} date={obj.date} />
      ))}
    </Card>
  );
```

The nesting makes this look unpleasant, but it's just a map method inside {}
We return a JSX custom element tag with its attributes set dynamically with the map parameter

WHAT THIS DOES FOR US:
Now, all we can render additions to the expenses object, since our JSX is not set in stone

#### Part 2: Reinvoke App.js when we Update Expenses

Employ useState() to re-invoke and re-render App.js as soon as we change the expenses object
You may run into a problem when doing this, if you add new expenses to the start of the list

> START:	commit 63
> END:		commit 64 (we add expenses to the END of the array)

- This part just involves applying useState() in App.js, where our list of expenses happens to be situated (not always App.js on other projects)

![image-20210721170940961](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210721170940961.png)

#### Part 3: Getting around the Unshift Glitch

Whether you're adding content to the end of an array or the front, you need to address this quirk. 
Check the following lesson to see how

#### Bonus: Shove more Logic into the map handler

The syntax you saw used earlier relies on an arrow function that uses an "implied return"

```js
      {props.expenses.map((obj) => (
        <ExpenseItem title={obj.title} amount={obj.amount} date={obj.date} />
      ))}
```

If you want to have more complex operations taking place inside your map function, get rid of the implied return and add curly braces

```js
      {meals.map((el, index) => {
        console.log(0)
        return <ListItem name={el.name} descrip={el.descrip} />
      })}
```



### P2: The Unshift Glitch: 

Adding data to the front of an array then rendering that change usually causes an issue
You can tell you're about to deal with it when you notice this error message:

![image-20210721171300653](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210721171300653.png)

IF YOU'RE ADDING ONTO THE END OF AN ARRAY, THIS STILL MATTERS
The performance will suffer if you don't address this error, even if your application works

#### What is it?

> START:		commit 64A 

EXAMPLE: 
Add soap to our expenses list in commit 64A
Initial expenses list:

![image-20210721171627491](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210721171627491.png)

If you try to .push() content onto the tail end of an array, then re-render it, it'll look fine (LEFT)
If you try to add array entries to the front, then you'll encounter a visual glitch (RIGHT)

 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210721164409366.png" alt="image-20210721164409366" style="zoom:80%;" /><img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210721164229495.png" alt="image-20210721164229495" style="zoom:80%;" /> WTF?

ROOT CAUSE
Caused by adding data to an array BEFORE the data that preceded it
Although the render looks good when you .push() instead, the performance is suffering

- React does not know which list item is which when it renders things
- Some of the array data being stateful while the others are not causes this bug to occur
  We need a way to force React to recognize which list item it looks at when it iterates over them

#### Fixing it

> START:		commit 64A 
> END:			commit 65

SOLUTION 1: 
Give each array entry an ID and refer to it using the `key` attribute
When React loops over it to create new JSX, it will know which list item its looking at

![image-20210721170343649](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210721170343649.png)

SOLUTION 2: 
Use the built-in index number in the map() method to distinguish each entry
This can work, but is generally frowned upon and leads to other bugs

![image-20210721171518816](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210721171518816.png)



### Applying Filters

Applying filters to lists in JS is fairly straightforward, which means it isn't tough in React either

#### Tips

FOR BOTH STRATEGIES:
Use a filter method on an existing array of data

- Your aim is to create a new array that you can render instead of the default one
- Do not permanently remove entries from the default array- you need it intact if you decide you want to see the list in its default state again

SOLUTION A: (Tougher)
Apply filter to an array of data you feed useState() as an argument

- Your list of data will probably be stateful, so you can re render it once it gets updated
  This poses a unique challenge, since the set method permanently changes the array
- We want to create a new filtered array to render, but still want access to the non filtered one
  The "any" option should show them all

SOLUTION B: (Easier)
Replace the array of data that gets used for JSX generation
The replacement should be a cloned/filtered version of the very same array (leave the original intact)

#### Solution A: Change state

> START: 	commit 65
> END: 		Assignment 3A

OVERVIEW:

```react
// Our stateful array of expense objects:
const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
```

1. Apply a filter on DUMMY_EXPENSES to create a new `filteredArray`
2. Change the `expenses` variable using `setExpenses()` with function syntax

```react
setExpenses(() => {
     return [...filteredExp];
});
```

This way, `DUMMY_EXPENSES` remains intact, yet we set the values of `expenses` to a filtered version.
If we apply another filter, then our code will sift through `DUMMY_EXPENSES` again

FULL SOLUTION

- There's a ton of other things going on in our project, and providing context would take away from understanding this 1 specific challenge
- The value of the "filter by year" option chosen is passed from 
  ExpensesFilter.js -> LeanExpenses.js -> App.js 

The following function is used to perform the actions outlined in the overview:

```react
  const changeFilterHandler = function (selectedYear) {
    // If "any" is chosen => skip the filtering and just render as is
    if(selectedYear==="Any") {
      setExpenses(() => {
        return [...DUMMY_EXPENSES];
      });
      return
    }
    // If a year is chosen => apply filter then render array
    let filteredExp = DUMMY_EXPENSES.filter((obj) => {
      let entryYear = obj.date.getFullYear(); 
      return entryYear === Number(selectedYear);
    });
    setExpenses(() => {
      return [...filteredExp];
    });
  };
```

#### Solution B: Apply Filter without State Changes (Easier)

> START: 	commit 65
> END: 		Assignment 3B

OVERVIEW:
This solution's much simpler and shorter than the first
Take a look at the JSX section of LeanExpenses.js:

![image-20210722131953584](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210722131953584.png)

- The underlined `props.expenseObj` is the stateful expense object passed down from App.js
  Replace that with a filtered version of the very same array (define it somewhere higher)
- You won't need to induce any state changes this way

Here is how we generate the filtered array
Thankfully we already passed the chosen `filteredYear` up to LeanExpenses.js in a previous lesson

```react
  const filteredExpenses = props.expenseObj.filter((obj) => {
    // "Any" => no filter
    if (filteredYear === "Any") return obj;
    // Year selected => filter according to it
    return obj.date.getFullYear().toString() === filteredYear;
  });
```

#### Final Results

​					<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210721205108173.png" alt="image-20210721205108173" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210721205133383.png" alt="image-20210721205133383" style="zoom:80%;" />



### S1: Conditional JSX Placeholders

Take a look at the last photo in the previous lesson

- We could opt to only show expenses from 2019, while aren't any present in our list of expenses
- We need to be able to render a message letting users know, or else they'll receive an empty screen

![image-20210722143202763](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210722143202763.png)

What is a Conditional Output?
It means we'll be rendering different content depending on the conditions
The JSX must change depending on the conditions

#### Context 

> START: 	Assignment 3B
> END: 		commit 66

LeanExpenses.js renders the list content on our webpage

| condition                                        | desired output                                    |
| ------------------------------------------------ | ------------------------------------------------- |
| `filteredExpenses` array has some entries inside | render the list                                   |
| `filteredExpenses` array is empty                | render a message saying <br />"no expenses found" |



#### Starter JSX and Intended Output

We generate HTML by looping over the `filteredExpenses` array with the map method

```react
  return (  
      {filteredExpenses.map((obj) => (
        <ExpenseItem
          key={obj.id}
          title={obj.title}
          amount={obj.amount}
          date={obj.date}
        />
      ))}
  );
```

What we want if the `filteredExpenses` array is empty:

![image-20210722170014208](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210722170014208.png)

#### Method A: Lean JSX

You can store JSX in variables, then use them inside React placeholders
Set the value of a variable's JSX based on the condition, then use it

```react
let conditionalJSX = <p style={{ color: 'white' }}>No expenses found</p>;
  if (filteredExpenses.length > 0) {
    conditionalJSX = filteredExpenses.map((obj) => (
      <ExpenseItem
        key={obj.id}
        title={obj.title}
        amount={obj.amount}
        date={obj.date}
      />
    ));
  }
  return (
      {conditionalJSX}
  );
```

TLDR:
Render the value stored in the `conditionalJSX` variable

- The value will change inside the component ƒ() depending on the conditions
- It starts defined as the "no expense" message, but changes if we do have some

THIS IS THE BEST METHOD
It keeps your JSX looking the cleanest, by keeping the logic outside of it

#### Method B: Modern Operator

You can place expressions made with modern operators `&& || ??` inside React placeholders
Use `&&` to program "execute if true" expressions in your JSX

```react
      {filteredExpenses.length === 0 && <p>No expenses found</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((obj) => (
          <ExpenseItem
            key={obj.id}
            title={obj.title}
            amount={obj.amount}
            date={obj.date}
          />
        ))}
```

TLDR:

```
if filteredExpenses.length is 0, render a "no expenses found" message 
if filteredExpenses.length is over 0, render the list
```



#### Method C: Ternary Expression

You can place ternary expressions inside React placeholders
Use this to generate JSX if a condition is true, then other JSX if a condition is false

```react
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((obj) => (
          <ExpenseItem
            key={obj.id}
            title={obj.title}
            amount={obj.amount}
            date={obj.date}
          />
        ))
      ) : (
        <p>No expenses found</p>
      )}
```

TLDR:

```
the filteredExpenses length is above 0 ? 
if true, render list : 
if false, return a "no expenses found" message
```



### S2: Conditional JSX Returns

In the previous lesson, we changed the value in 1 React placeholder when our filter left us no expense objects to render. 

- What if we wanted to return JSX that was completely different, IF that same condition was met?
  Changing 1 React placeholder would not be sufficient for this larger change
- We can actually have multiple conditional JSX return sections 

#### Demonstration

At this point in the project, we moved code from LeanExpenses.js that controlled the rendered list, and gave it it's own dedicated component

> START: 	commit 66
> END: 		commit 67

ExpensesList.js

```react
function ExpensesList(props) {
  //% Filter the expenses object based on the filter choice
  const filteredExpenses = "an array of expenses filtered by year"
  
  // Return this JSX if filteredExpenses is empty:
  if (filteredExpenses.length === 0) return <h2>Found no expenses</h2>;
  // Return this JSX if filteredExpenses is NOT empty:
  return (
    <ul>
      {filteredExpenses.map((obj) => (
        <ExpenseItem
          key={obj.id}
          title={obj.title}
          amount={obj.amount}
          date={obj.date}
        />
      ))}
    </ul>
  );
}
```



### Rendering Lists made from Objects

In every lesson until this one, we've rendered lists based on data we store inside of an array
You can render lists of data stored in objects as well

- Employ the `Object.keys` method which generates and array of object keys
  This array keeps the KVP declaration order of our object intact as well (bonus!) 
- Using the map method on the Object.keys array gives us the freedom to replicate what we usually do with arrays

BENEFITS:

1. Can handle data given to you inside of an object, instead of arrays
2. Can store data to render in objects yourself, giving you the freedom to name your data entries
   `{mealCosts: [], specials: {}}`

#### Demo

```react
function App() {
  let testObj = { a: 1, b: 2, c: 3, d: 4, z: 26, e: 5 };

  return (
    <div className="App">
      {Object.keys(testObj).map((k) => {
        return (<div> key {k}, value {testObj[k]} </div>);
      })}
    </div>
  );
}
```

The order we declared KVP's in `testObj` has been preserved!	![image-20210817021244256](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210817021244256.png)

### Where not to Render JSX

Conditional JSX should be rendered based on state

#### What not to do

Do not try to render JSX by returning JSX programmatically at the end of an event handler for ex.
It won't work, and the starting JSX will remain the same

EXAMPLE:

```react
  const submitHandler = async function (e) {
    whatever...
    return <p>Event handled!</p> // this does nothing
  };
```

#### Render Conditional JSX Properly

EXAMPLE 1:

```react
  const [condJSX, setCondJSX]= useState(null)
  if(condJSX) return <p>Event handled!</p>
  
  const submitHandler = async function (e) {
    whatever...
    setCondJSX(true); // component re-renders and your conditional JSX will as well
  };
```

- In the above example, we re-render the entire webpage, which is not always necessary
- Perhaps all you want to do is add a label or edit your starting JSX in a minor way
  In this case, conditionally set variables using state

EXAMPLE 2:

```react
  const [condJSX, setCondJSX]= useState(null)
  let insert= ""
  if(condJSX) insert=<p>Event handled!</p>
  
  const submitHandler = async function (e) {
    whatever...
    setCondJSX(true); // component re-renders and your conditional JSX will as well
  };
```

Somewhere in our JSX return section:   <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211110122541816.png" alt="image-20211110122541816" style="zoom:90%;" />

### Data Summary

TERMINOLOGY:
Start location module -> SLM
Where the data you're interested in moving begins at 

End location module -> ELM
Where you intend on moving your data



#### Moving Data Down

1. Create a custom attribute for your CCM tags where they are used in your SLM
2. Set it equal to a variable using React placeholders- that variable should hold your data
3. Access it from from the ELM by using `props.attributeName`
   Don't forget to add the props argument to the component function

If you need to pass data down multiple components, the process is the same
You cannot skip any components down your branch

![image-20210718172248187](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210718172248187.png)

SIMPLIFIED EXAMPLE:
Data starts in App.js (SLM)
Moving data to ExpenseItem.js (ELM)

```react
// App.js 
const App = function () {
  let expenses = [{ title: Ark }, { title: "Moon" }];
  // STEP 1: Create a custom attribute for your CCM tags
  // STEP 2: Set it equal to a variable using React placeholders
  return <ExpenseItem title={expenses[0].title}></ExpenseItem>;
};
——————————————————————————————————————————————————————
// ExpenseItem.js
const ExpenseItem = function (props) {
  // STEP 3: Access data from from the ELM by using `props.attributeName`
  console.log(props.title); // use the data in props
  return('whatever JSX it uses')
};
```



#### Moving Data Up

This is often times referred to as "passing the state upwards"

PROCEDURE:

1. Make a custom attribute for your custom component tags in the ELM's JSX
   Set it equal to a function you define in the same component function

2. Create the function you set your new attribute equal to

- Give that function a parameter- it will eventually be set equal to the data you're elevating
- Code the actions you want performed with that data, in that function
  Act as if you already have the data in that function- via the parameter

3. Enter the component where your data is found (SLM)
   Use that function you passed into your custom parameter, 1 file above you right now

- Access it using `props.attribName()` in your component function
- Don't forget to give your component function a `props` parameter, if you haven't already

![image-20210718174437885](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210718174437885.png)

SIMPLIFIED EXAMPLE:
Data starts in ExpenseForm.js (SLM)
Moving data to App.js (ELM)

```react
// App.js
const App = function (props) {
  // STEP 2: Create the function you set the custom attribute equal to
  const handler= function(transferredData){
    console.log('do things with the', transferredData)
  }
  // STEP 1: Create a custom attribute where your CCM tags are used
  return (<ExpenseForm onSaveExpenseData={handler} />);
};
——————————————————————————————————————————————————————
// ExpenseForm.js 
const ExpenseForm = function (props) {
  const expenseData={} // we gather data from a form and save it to this var
  
  // STEP 3: supply the object we just created
  // the function will now be executed in App.js
  props.onSaveExpenseData(expenseData) 
};
```



#### Moving Data Sideways

Method 1. Redux or Context API
Method 2. Prop drill by combing the above 2 techniques (try not to use this)



#### Setting State based on Previous State

By default, React won't update a value immediately, unless you employ function syntax along useState()'s set function

EXAMPLE: Change one KVP in an object that already exists

```react
setName((prevState) => {
   return { ...prevState, enteredTitle: "any value you choose" };
});
```

EXAMPLE: Add onto an array that already exists

```react
const initExpenses=[{},{},{}] 		// array of objects
const newEntry= {} 					// want to add this array 
const [expenses, setExpenses] = useState(initExpenses); 	// set state

setName((prevEntries)=>{
    return [...prevEntries, newEntry] 	// update state based on prev. state
})
```

This code will likely not all be typed exactly in this order
It'll be used in the component where it makes sense- like after certain events

#### New Component Boiler Plate Code 

1. useState import:

```
import React, { useState, useReducer, useRef } from "react";
```

2. Install this extension, then type... `rfc -> ENTER` OR `rfce -> ENTER`

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210803183320219.png" alt="image-20210803183320219" style="zoom:67%;" />

​							![image-20210803183409473](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210803183409473.png) ![image-20210803183355207](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210803183355207.png)

#### Setting up Reusable Components

Pass handlers and whatnot down to them via props
Access them inside the reusable component function and use them like such:

We pass data through props in this initial step.
Your input field won't actually have a type or placeholder...yet

![image-20210807035938255](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210807035938255.png)

Use the passed data to actually set these attributes in effect now

![image-20210807035455221](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210807035455221.png)

# =====================

# Fragments & Portals

> CHAPTER-WIDE REPO
> https://github.com/Jason2B3/academind_react_5

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210728114124026.png" alt="image-20210728114124026" style="zoom:67%;" />

### JSX Limitations and Workarounds

#### The Central Issue

As you know, JSX won't let you return adjacent elements

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210729221541139.png" alt="image-20210729221541139" style="zoom:80%;" />

#### Solution 1: Return an Array

In JS, what should you do if you want to return 3 numbers at once?
You'd return an array- and in React you can also return arrays of elements separated by commas

```react
return([
    <h2 key="uno">Hi there!</h2>,
    <p key="dos">This does work</p>
])
```

THE PROBLEMS WITH THIS TECHNIQUE:

1. Wrapping brackets around your JSX and separating by comma is cumbersome
2. To help React keep track of array entry, you'd be warned by console messages to provide a key for each element in your array

- On the bright side, you can hardcode key values when hardcoding JSX elements just like in the above example
- The only time you'd need to generate unique keys is if you're iterating over an array/object with an unknown size to generate JSX

TLDR: This method's a pain to use 

#### Solution 2: Wrapper Divs

As you know by now, you can wrap adjacent siblings in an element like div so you can return multiple JSX elements at once

THE PROBLEMS WITH THIS TECHNIQUE:

1. You generate several elements with no semantic purpose, which slows your performance and is generally bad for ARIA 
2. Having so many nested elements can ruin your CSS selectors if you aren't strictly styling with classes- or Styled Components
3. div soup 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210729222554498.png" alt="image-20210729222554498" style="zoom:80%;" />

#### BUT WAIT, THERE'S MORE... 

Read the next lesson



### React Fragments

In the previous lesson we were listing ways to help JSX return sibling elements

#### Solution 3: Wrapper Components

PROCEDURE:

1. Create a JS module using the following snippet- feel free to rename if you like
2. Import this component and use it wherever you would normally apply a wrapper div

Wrapper.js

```react
const Wrapper= props => {
    return props.children; // returns content passed within open/close tags
}
export default Wrapper;
```

NO WASTE ELEMENTS GENERATED!

- This is different than creating a component like Card.js, which actually returns one div element
- The above wrapper returns no new components at all. 
  It simply returns all the elements nested inside of it
- This satisfies JSX's need for 1 return element while not generating unnecessary filler. 

The wrapper div solution with no soup issues sounds pretty ace to me!
HOWEVER, REACT FRAGMENTS ARE EVEN BETTER

#### Final Solution 4: React Fragments

As stated above, we don't need wrapper divs cluttering up the DOM to get JSX working
Use React fragments instead- which is just solution 3 with no setup on your end

> ![image-20210729224521882](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210729224521882.png)
>
> Use the syntax on the left - the one on the right only works with certain project folder setups

#### Syntax Options for Fragments

```react
<React.fragment>
    // easiest to use with no considerations or setup
</React.fragment>
——————————————————————————————————————————————————————
import React, {useState, Fragment } from 'React'
<Fragment>
    // need the import line at the top of your JS doc
</Fragment>
——————————————————————————————————————————————————————
<>
    // Only works on certain project setups
</>
```



### React Portals

#### Why they're Needed

When working with HTML/CSS/JS, we have a ton of freedom and can design a lot of features that aren't semantically well constructed

###### EXAMPLE: Create a div element button

This'll work fine on your site, but isn't very accessible for people with screen readers

```html
<div onClick={handler}>Press me to make things happen</div>
```

###### EXAMPLE 2: Modal

- You may not remember this off the top of your head, but you can place your modal's HTML pretty deeply nested within your code- which again, is bad for accessibility
- We use `position:fixed` to remove it from the DOM flow then lay it on top of any webpage content that's already rendered (this is why we can position it practically anywhere)
- This problem isn't too bad on smaller applications, but on enterprise level projects, our modal could be buried beneath heaps of content that a reader would have to go through first 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210729235735815.png" alt="image-20210729235735815" style="zoom:80%;" />

Sure would be nice if we had a PORTAL to a different DOM position huh? *Cough 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210729235753327.png" alt="image-20210729235753327" style="zoom:80%;" />

TLDR: 
Our modal is being rendered in a bad place, but it appears fine when presented
We'd still like to change where it renders

DESIRED RENDER LOCATION:
Make the modal div a direct child of the body element 
(on `<div id="root">`'s level)

![image-20210730001211857](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210730001211857.png)



#### How createPortal() works

This method is imported from 'react-dom' and accepts 2 arguments

ARG 1: 
The JSX element being teleported (may contain others nested inside)
Keep all attributes as they were before the portal was implemented, 

ARG 2: 
A pointer to the portal exits we made in the previous subsection
Reference them using `document.getElementByID`

#### Example Starter Code

ErrorModal.js @ Start

```react
import React from 'react';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </React.Fragment>
  );
};

export default ErrorModal;

```



#### Working with Portals: Example

> START:	 starter files
> FINISH:	commit 104

PROCEDURE

1. Go to public/index.html
   Drop a portal exit div on the same level as `<div id="root"></div>`

![image-20210730140950805](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210730140950805.png)

2. Place the following import line at the top of a JS module- the one where you intend on moving JSX so it's rendered elsewhere (ErrorModal.js in this case)

```react
import ReactDOM from 'react-dom'
// the variable name can be named anything
```

3. Instead of returning JSX, return a `ReactDOM.createPortal()` method call

- Make the JSX argument 1 without changing anything
- After argument 1, place a comma then reference the portal exit you placed in public/index.html

```react
const ErrorModal = (props) => {
  return ReactDOM.createPortal(
    <React.Fragment>
      <p>All your JSX with no changes- keep attributes intact</p>
    </React.Fragment>,
    document.getElementById("modal-root")
  );
};
```

4. You're done!
   The modal should now render as a direct child of the body element

![image-20210730141428449](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210730141428449.png)

### Multi-Component Files 

Normally we split up components by creating a new JS module that is placed further down the current branch- however there are other options

#### Multiple Component ƒ() files

- We can define multiple component functions inside one JS file
- Use them in our main component function's return JSX line
  This way we just separate semantically different parts of what we're returning

###### ErrorModal.js original form

- We return a backdrop (sibling div element)
- We also return a modal (sibling Card element)
- Both of these are wrapped in a React fragment
  They contribute to the Error Modal as a whole but are different parts of it

```react
const ErrorModal = (props) => {
  return ReactDOM.createPortal(
    <React.Fragment>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </React.Fragment>,
    document.getElementById("modal-root")
  );
};
export default ErrorModal;
```

###### ErrorModal.js Revised Form

- We give the backdrop and the modal 2 separate functions with their own return JSX lines
- These functions require no arguments, so we can invoke them inside the cumulative ErrorModal function in order to return the same thing

```react
const Backdrop = function (props) {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};
const Modal = function (props) {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};
// PLUG THESE BUILDING BLOCKS BACK INTO THE ORIGINAL STAR COMPONENT FUNCTION
// Don't forget to invoke them with the props argument directly 
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {Backdrop(props)}
      {Modal(props)}
    </React.Fragment>
  );
};

export default ErrorModal;
```

#### Portals on Multi-Component Files

###### OPTION 1: A single portal exit

> commit 104B: Turned ErrorModal into a multi-comp file

The process for teleporting these can the same as it is normally

ErrorModal.js

```react
// ErrorModal building blocks not shown
const ErrorModal = (props) => {
  return ReactDOM.createPortal(
    <React.Fragment>
      {Backdrop(props)} 
      {Modal(props)}
    </React.Fragment>,document.getElementById("modal-root")
  );
};
```

public/index.html

![image-20210730144246446](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210730144246446.png)

Results in...

![image-20210730144321524](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210730144321524.png)

###### OPTION 2: Multiple Portal Exits

If you want, you can render the 2 building blocks of ErrorModal separately as direct children of the body element

ErrorModal.js

![image-20210730153329333](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210730153329333.png)

public/index.html

![image-20210730001846738](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210730001846738.png)



# useRef Hook

> CHAPTER-WIDE REPO:
> https://github.com/Jason2B3/ref-practice
>
> YOUTUBE TUTORIAL:
> https://www.youtube.com/watch?v=ScT4ElKd6eo



### Refs for Conditional Coding

Refs are one way we can access the values of DOM elements 
Program actions conditionally based on what those values are, inside nested function handlers

#### Demo

> commit 2: conditional coding with refs

Access the values of 2 form field inputs using refs - no stateful variables allowed
Output their values to the console

```react
import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  // Refs set up here
  const firstNameRef = useRef();
  const lastNameRef = useRef();

 const submitHandler= function(e){
   e.preventDefault()
   // GET CURRENT VALUES IN HANDLER SCOPES ONLY (JSX has rendered at this pt.)
   // Trying to get .current.value on the root component ƒ() level makes errors
   let firstNameInput= firstNameRef.current.value
   let lastNameInput= lastNameRef.current.value
   console.log(`first name input is... ${firstNameInput}`)
   console.log(`last name input is ... ${lastNameInput}`)
 }
 // Ref attributes assigned in our JSX
  return (
    <>
      <input type="text" ref={firstNameRef} />
      <input type="text" ref={lastNameRef} />
      <button onClick={submitHandler}>Submit</button>
    </>
  );
}

export default App;
```

![image-20210807033348759](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210807033348759.png)

#### What's inside the useRef() variable?

```react
  const firstNameRef = useRef();
  const lastNameRef = useRef();
```

- The variable we assign useRef equal to equals undefined at first

- Once the JSX renders and we change our input elements values via typing, it equals an object
  We need to access part of that object if we want to use the current value to code conditionally

```
refName.current.value		current value of the element the ref's binded to
```

#### Why we Access Current Values inside Function Scopes

As stated earlier, useRef equals undefined at first. 
Trying to get `undefined.current.values` will generate a fatal error. 

- Define the current value of your refs within handler scopes nested in your main component ƒ()
- Afterwards, use the values to program conditionally. 

In our example we just logged the values, but you can code actions according to what you expect/need those values to equal to incur a certain action

![image-20210731192317200](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210731192317200.png)

#### Changing Element values with useRef

TLDR: 
Stick to making minor changes like clearing an input field
Changing element values with useRef is a bad practice otherwise

```
refName.current.value= "";	clear an input field's value back to nothing
```

REFS CREATE UNCONTROLLED COMPONENTS

When we control components via refs, they are still considered "uncontrolled"
I'm specifically referring to how we clear the `<input>` fields in the demo

- Their internal state (the value controlled within them) is not controlled via react
- We used a DOM manip technique that we'd see used in JS
  React has 2 way binding for tasks like these, which we avoided using to keep code shorter



### Access the Previous State Value via Refs

Ref allows us the access the previous value of a stateful variable. We can't do this with useState easily, since the value of its first variable is always a current value

Pre-requisite: 
The basics of useEffect() hook

#### Demonstration

> commit 1

App.js

```react
import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName]= useState("");
  const prevNameRef= useRef('nothing')
  useEffect(()=>{
    prevNameRef.current= name
  }, [name])
  return (<>
  <input value={name} onChange={e => setName(e.target.value)}/>
  <h3>My name is currently: [{name}]</h3>
  <h3>My name was [{prevNameRef.current}] directly before that</h3>
  </>);
}

export default App;
```

![image-20210807005756319](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210807005756319.png)

### Forward Refs

#### Why they Exist

You cannot assign a ref property to a custom JSX component's tags- you'll get errors
To get around this limitation, use forward refs

- For the record, most other attributes can be assigned to custom tags just fine- onChange, onSubmit, custom attributes...etc
- It's just refs that need a workaround to operate properly

![image-20210807035136829](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210807035136829.png)

![image-20210807035156545](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210807035156545.png)

Don't get the wrong idea about setting attributes though!
We still need to set up those type and placeholder attributes in the MyInput file

![image-20210807035455221](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210807035455221.png)

#### How to use Forwarded Refs

> commit 3

1. Pass your props in App.js (or wherever) as you would normally
   Even the ref attribute's fine- you'll fix the error in a second
2. In your component function, access your prop values, but deal with ref separately from the others

App.js	

```react
import { useState, useRef, useEffect } from "react";
import "./App.css";
import MyInput from "./components/MyInput";

function App() {
  // everything's the same from last lesson, aside from <MyInput ref={}>
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  return (
    <>
      <MyInput type="text" ref={firstNameRef} placeholder={'type first name here'} />
      <input type="text" ref={lastNameRef} />
      <button onClick={submitHandler}>Submit</button>
    </>
  );
}

export default App;
```

MyInput.js

```react
import React from "react";

function MyInput({ type, placeholder }, ref) {
  return <input ref={ref} type={type} placeholder={placeholder} />;
}
// Set up your forwarded input, then default export it
const forwardedInput = React.forwardRef(MyInput);
export default forwardedInput;
```

Could alternatively wrap the entire function definition in forwardRef instead, but that looks worse in my opinion

THE ARGUMENTS IN MyInput

```
function MyInput(props, ref)
```

The ref argument beside props is there to point to any refs that were defined from outside of this component file

# useImperativeHandle Hook

### Parent Borrowing Functions or Variables from a Child

This hook lets you pass values and functions from a child component up to a parent via refs
You must understand how forward refs work before attempting to use this

#### Challenge Description

In this example, we're going to have 2 buttons, and both increase the current count by 1

|                | Created by __ in App.js  | Derives handler from                  |
| -------------- | ------------------------ | ------------------------------------- |
| Custom Button  | The Counter.js component | increment() function defined in-house |
| Regular Button | `<button>` element       | increment() function from Counter.js  |

We are sharing the same handler to use for each button's onClick attribute
But we aren't using Context API or Redux

![image-20210808164548835](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210808164548835.png) ![image-20210808164715704](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210808164715704.png)

#### Procedure

> TUTORIAL: https://www.youtube.com/watch?v=N8PwptJ6Qlk
> COMMIT: https://github.com/Jason2B3/ref-practice 	(commit 4)

App.js

```react
import React, { useRef } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  //$ Step 1: Create a ref and pass it as an attrib for <Counter>
  const ref = useRef();
    
  //$ STEP 4: Use the forwarded ƒ() in a handler here
  // Now buttonHandler does what increment() does
  const buttonHandler = () => ref.current.incrementFN();

  return (
    <>
      <Counter ref={ref} />       
      <button onClick={buttonHandler}>Regular Button (+1)</button>
    </>
  );
}

export default App;
```

Counter.js

```react
import React, { useState, forwardRef, useImperativeHandle } from "react";

function Counter(props, ref) {
  // Set up the stateful count vriable and define the increment ƒ()
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  //$ STEP 2: Pass an object back to the parent component
  useImperativeHandle(ref, () => ({
    // The object contains variables and components we want to share
    incrementFN: increment, // renamed the function (optional)
  }));

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Custom Button (+1)</button>
    </>
  );
}
//$ STEP 3: Forward ref this entire function (see how in lesson)
const forwardedCounter = React.forwardRef(Counter);
export default forwardedCounter;
```

#### Why not Just use Context API or Redux?

Feel free to do that



### useImperativeHandle in Forms

Creating forms can require minor visual effects when you blur, focus, or select them
Sometimes, we need these effects to occur without any user input

1. When a user enters a form page, perhaps we'd like to save them time by focusing the first input field they must fill out automatically- while scrolling it into view
2. If a user types in then submits invalid info, we may want the first unsatisfied input field to get focused on while glowing red or something

In our lesson's example, we're going to code both of these mini-features

#### Starter File Description

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210809174648909.png" alt="image-20210809174648909" style="zoom: 80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210809174739806.png" alt="image-20210809174739806" style="zoom: 80%;" />

We have a simple form whose fields glow red when you have something invalid typed into a field

- On startup, neither field gets focused
  Change it so that the email field gets focused on at first
- If you hit submit when something's invalid, neither field is focused
  Change it so the first unsatisfied fields gets focus returned to it

> REPO: https://github.com/Jason2B3/context-learn
> BRANCH: 			Imperative
> CHECKOUT: 		commit 7: Imperative handles set

#### Approach

Parent component: App.js
Child Component: MyInput.js

1. Set up a forwardRef that connects a parent to its child
   The ref that goes from parent -> child will be used in the useImperativeHandle function as arg 1
2. Use local refs to reference the elements you'll be performing these minor actions on
   Create a simple function that performs them (focus the element local ref is binded to)
3. Place useImperativeHandle inside your child component's main function
   Make it return an object full of functions/variables you'd like the parent to borrow from the child
4. Use the forwarded ref like an API using this syntax: `forwardRefName.current.borrowedFN`
   You can invoke functions inside the parent component that were defined in the child

App.js  ![image-20210809191055503](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210809191055503.png)

MyInput.js ![image-20210809191207628](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210809191207628.png)

#### MyInput.js

```react
function MyInput({ placeholder, onChange, className }, ref) {
  //$ Set up a local ref to point to the JSX input element
  const localInputRef = useRef(null);
  //$ Create a handler that performs a minor action using the local ref
  const focusField = () => localInputRef.current.focus();
  //$ Use your forwarded ref to let the parent take the focusField handler
  useImperativeHandle(ref, () => {
    return {
      focusField,
    };
  });

  return (
    <>
      <input
        className={className}
        ref={localInputRef}
        onChange={onChange}
        placeholder={placeholder}
      ></input>
    </>
  );
}
const forwardedMyInput = React.forwardRef(MyInput);
export default forwardedMyInput;
```

#### App.js

We forwardRef into MyInput.js - and we'll later use our refs like an API that houses functions we're borrowing from our child component MyInput

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210809175257174.png" alt="image-20210809175257174" style="zoom:80%;" />

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210809175331163.png" alt="image-20210809175331163" style="zoom:80%;" />

Using the forwardRef API to focus the email field on startup

![image-20210809181529514](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210809181529514.png)

Using the forwardRef API to focus the first invalid field when we make a bad submit
This one appears complicated because it's in a reducer function (it's not though)

![image-20210809190713302](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210809190713302.png)

NOT SHOWN: 
It takes care of the email and password validation plus rendering, and the submit button

#### autofocus Attribute

You can focus a field on startup much easier by using the autofocus attribute

```
<input type="password" name="password" autofocus/>
```

- The only reason we couldn't here is because we're using custom component input fields 
- Trying to use autofocus on custom components is a shit show, so don't bother trying. 
  It focuses the last instance of your custom component, or just straight up fails to do anything

- The cookie jar is a place in the browser to save KVP's that will be sent back to the server on each subsequent request
- The backend should then respond back with content that is only meant for logged in users

# =====================



# useEffect Hooks & Side Effects

| ARG 2 equals...               | when useEffect function runs                                 |
| ----------------------------- | ------------------------------------------------------------ |
| nothing                       | as soon as page loads<br />When the component gets re-rendered |
| empty array                   | as soon as page loads                                        |
| array containing dependencies | as soon as page loads<br />When dependency values get changed |

REPO:

> Chapter-wide repo (unless otherwise specified)
> https://github.com/Jason2B3/academind_react_6

![image-20210731193943038](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210731193943038.png)

### The Rules of Hooks

The rules shown below apply to all React hooks, not just useEffect

![image-20210807002144016](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210807002144016.png)

To illustrate our point...

```react
import React from 'react'

function someComponent() {
  // CAN ONLY PLACE HOOKS ON THIS SCOPE (exception being, custom hooks)
  return (<div></div>)
}

export default someComponent
```



### Intro to Side Effects & the useEffect Hook

#### What's a Side Effect?

React's core purpose is to help us build UI's that react and re-render according to use input
Everything aside from directly rendering things to the UI is a side effect

- We even call the act of fetching data a side effect
- Rendering the data itself is directly related to the UI, so that is not considered one

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210731221034887.png" alt="image-20210731221034887" style="zoom:80%;" />

EXAMPLE OF AN UNWANTED SIDE EFFECT

- When we have stateful variables set up, the entire component ƒ() runs again to update the rendered JSX whenever one of their values change
- What if a function does something like make an HTTP request?
  We'd send out a request every time the JSX gets updated, which causes bugs or infinite loops

The useEffect hook is React's built in way of combating issues like these

#### useEffect Explained

![image-20210731220545714](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210731220545714.png)

LAYMAN'S TERMS 

- Place any side effect code into the argument 1 function
- Specify a list of dependencies inside an array for argument 2

#### When the useEffect ƒ() Runs

| ARG 2 equals...               | when useEffect function runs                                 |
| ----------------------------- | ------------------------------------------------------------ |
| nothing                       | as soon as page loads<br />When the component gets re-rendered |
| empty array                   | as soon as page loads                                        |
| array containing dependencies | as soon as page loads<br />When dependency values get changed |

Row 1 and 2 of the above table are often interchangeably called "no dependencies" by devs
Be careful, because they are both different

ARG 2 = empty array

```
useEffect(()=>{
	whatever
},[])
```

ARG 2 = nothing

```
useEffect(()=>{
	whatever
})
```



### How useEffect is Parsed/Executed

The following subsection is ripped from the pre-rendering lesson in the Next.js chapter
Source → [React - The Complete Guide (incl Hooks, React Router, Redux) | Udemy](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25616832?start=0#announcements)

#### How its Executed

> [Jason2B3/next-practice (github.com)](https://github.com/Jason2B3/next-practice)			commit zero A

Code inside of useEffect gets executed after the component function gets executed

![image-20210927124841364](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210927124841364.png)

In the above snippet, we will have 3 render cycles in total

- Render Cycle 1: 	(component render cycle)
  Component function is executed, and the JSX renders with `loadedMeetups = []`
- Render Cycle 2:
  useEffect function's executed, and state is changed by setting `loadedMeetups= DUMMY_DATA`
- Render Cycle 3:   (component render cycle)
  Since the state has changed, the component function runs again
  The JSX data is now rendered with `loadedMeetups= DUMMY_DATA`

![image-20210927125358908](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210927125358908.png)



### useEffect with no Dependencies

If you open up and run the practice project we're using for this chapter, you'll notice something unintuitive about our dummy app

- The webpage forces you to log in again if you reload the page
- Our stateful `isLoggedIn` variable starts off as false in our React code
  When we reload, the value resets to false, even if we logged in already, setting it to true 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210731235543633.png" alt="image-20210731235543633" />

#### Demonstration

All we do is supply 2 arguments for useEffect somewhere within our component function

> START: initial project setup complete
> END: commit 110

APPROACH:
Our useEffect ƒ() defines `isLoggedIn` as true if local storage has our login status saved as such
Run this on webpage startup only

App.js

```react
function App() {
  //% Upon startup, isLoggedIn equals false
  const [isLoggedIn, setIsLoggedIn] = useState(false);   
  //% Change isLoggedIn to true, if local storage's object says so
  const storedLoginStatus = localStorage.getItem("isLoggedIn");
  useEffect(() => {
    if (storedLoginStatus === "true") setIsLoggedIn(true);
  }, []);

  //% Handlers
  const loginHandler = (email, password) => {
    // Should check email and password, but it's just a demo
    setIsLoggedIn(true);
    //$ Save our true login status to LocalStorage
    localStorage.setItem("isLoggedIn", true);
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
    //$ Save our false login status to LocalStorage
    localStorage.setItem("isLoggedIn", false);
  };
  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}
```

![image-20210731235435677](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210731235435677.png)

We maintain this screen even after we reload
Keep an eye on dev tools/Application/Storage/localStorage during testing



### What Should and Should not be Added as Dependencies

#### What SHOULD NOT be a Dependency

1. State updating functions- like `setFormIsValid` in the last lesson's example
2. Built-in API's or functions like fetch() or localStorage
3. Variables or functions you've defined outside of your main component function

#### What SHOULD be a Dependency

1. Stateful variables whose value gets updated
2. Prop values

IE. All "things" you use in your effect function, if those "things" could change because your component or parent component gets re-rendered

EXAMPLE: Countdown.js

```react
import { useEffect, useState } from 'react';
 
let myTimer; // defined OUTSIDE of component function
 
const MyComponent = (props) => {
  const [timerIsActive, setTimerIsActive] = useState(false);
  const { timerDuration } = props; 
    // using destructuring to pull out specific props values
 
  useEffect(() => {
    if (!timerIsActive) {       
      setTimerIsActive(true);
      myTimer = setTimeout(() => {setTimerIsActive(false)}, timerDuration)} 
  }, [timerIsActive, timerDuration]);
};
```

EXPLANATIONS

|                    | added as a dependency | why?                                                         |
| ------------------ | --------------------- | ------------------------------------------------------------ |
| `timerIsActive`    | yes                   | is a component state  that may change                        |
| `timerDuration`    | yes                   | is a prop value of Countdown.js<br />The value may change if a parent decides to supply a different value, depending on conditions |
| `setTimerIsActive` | no                    | is a state updating function                                 |
| `myTimer`          | no                    | defined outside of the component function                    |
| `setTimeout`       | no                    | it's a built in method                                       |



### useEffect with Dependencies

useEffect with dependencies has 1 main purpose:
Run a certain function as soon as any variable inside argument 2's array changes

#### Starter Code Explained

In our project thus far, we have a dummy email/password validation screen set up

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210731235543633.png" alt="image-20210731235543633" style="zoom: 50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210801112518215.png" alt="image-20210801112518215" style="zoom:80%;" />

- Our code is written so that the email and password each have their own stateful variables
  (`enteredEmail, enteredPassword`)
- These variables' validity each have their own dedicated stateful variables as well
  (`emailIsValid, passwordIsValid`)
- When the email and password are both considered valid, then the form is considered valid

We have several handlers in place that make this happen, and we reuse logic in many places which makes the code confusing at first. We'd like to employ useEffect() to set the formIsValid variable equal to T/F each time someone taps a key. 

#### Demonstration

GOAL: 
set `formIsValid` to true or false each time someone changes the email or password in our form's input fields

> START: commit 110
> END: commit 111

Login.js

```react
const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  //% Check if both email and password are valid
  //% If so, set formIsValid= true (and vice versa)
  useEffect(() => {
    const e = enteredEmail.includes("@");
    const p = enteredPassword.trim().length > 6;
    if (e && p) setFormIsValid(true);
    else setFormIsValid(false);
  }, [enteredEmail, enteredPassword]);
  // rest is not directly related    
}
```

- We check to see if the form has 2 valid inputs after every time `enteredEmail` or `enteredPassword` gets changed somewhere in our component function
- We have handlers set up that change the values of these stateful variables, but they aren't relevant to the main focus of this lesson

NOTE!
Everything in the useEffect function is listed as a dependency except for `setFormIsValid` - which we know is never going to be changed in our code- it's a React method to update a stateful variable



### useEffect Cleanup- Debouncing

In the previous lesson's demo, we update the `formIsValid` stateful variable after every key tap. 

- Since our useEffect function's so simple, it isn't much of a problem for performance, but this won't always be the case
- What if our useEffect function contained HTTP requests?
  You'd be sending out tons of requests when the user isn't even done typing their inputs

Instead of running our useEffect function after each keystroke, we can wait until the user makes a pause during typing for a certain amount of time, then run our validation check

#### setTimeout Refresher

This method is essentially just a delayed function call that runs after an amount of time you specify. 
If placed within an event handler, you can make things happen X amount of time after an event occurs

EXAMPLE 1: Log a message 3 seconds after the page loads 

```js
setTimeout(()=>console.log("3 seconds have passed"),3*1000) //delay is in ms
console.log("ASYNCH powers activate!"); //goes first due to delay
```

![image-20210411000656979](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210411000656979.png)

#### Debouncing Tutorial

> START: 	commit 111
> END:		 commit 113

PROCEDURE:

1. Place a setTimeout function inside your useEffect function
   Check if your form is valid after X seconds (you decide)
2. Return a function that houses a clearTimeout method call
   This will cancel the form check if the user types something in a field before the countdown finishes

The returned function in step 2 can be an anon arrow function, or a functions stored in a variable elsewhere

Login.js

```react
const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  //% Check if both email and password are valid
  //% If so, set formIsValid= true (and vice versa)
    
  useEffect(() => {
    const delayedCheck = setTimeout(() => {
      //$ DEBOUNCE: runs after a 1 second gap after the latest key tap
      console.log("Checking form validity RN"); 
      if (enteredEmail.includes("@") && enteredPassword.trim().length > 6)
        setFormIsValid(true);
      else setFormIsValid(false);
    }, 1000);
      
    return () => {
      //$ CLEANUP: The timer reset function runs after every key tap
      console.log('cleanup') 
      clearTimeout(delayedCheck) // arg must equal the timer we set earlier
    }; 
  }, [enteredEmail, enteredPassword]);
  // rest of function not relevant
}
```



### Infinite Loops

In React, using the set method for your useState variable inside of a loop will cause a fatal error
This also applies to using the dispatch function for useReducer

#### Infinite Loops Explained

EXAMPLE:

```react
function App() {
  let testArray = [0, 1, 2, 3, 4];
  const [tally, setTally] = useState(0);
  // let's try to update our stateful tally variable, once per iteration...
  testArray.forEach((el) => {
    setTally((prevState) => prevState + el);
  });
  return <div className="App">{tally}</div>;
}
```

![image-20210817004842054](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210817004842054.png)

WHAT OUR CODE INSTRUCTS REACT TO DO...

- Start a for loop, then update a stateful value inside that loop
- As you know, updating a stateful value causes a re-render
- Upon re-render, we reach the for loop again, then repeat the last 3 actions to infinity

SOLUTION:
Tell React to only re-render a component when certain values change ( need useEffect ) 

#### Avoiding Infinite Loops

Smart use of useEffect in conjunction with useState/useReducer can help you avoid infinite loops. 

- Nothing gets re-rendered unless variables you specify get changed. 
- Just remember that the useEffect dependency list changes based on the situation

In the previous example... 

- We want to run through our hardcoded `testArray`, which we know will not be changing
  Need that to happen when the page loads, then never again 
- Read this chapter's second lesson and look at the useEffect dependency chart- this scenario is perfect for having an empty array dependency list (run code on startup then never again)

```react
function App() {
  let testArray = [0, 1, 2, 3, 4];
  const [tally, setTally] = useState(0);
  useEffect(()=>{
    // Only need to perform this action once (on startup)
    testArray.forEach((el) => {
      setTally((prevState) => prevState + el);
    });
  }, [])
  
  return <div className="App">{tally}</div>;
}
```

#### Going Forward

The example I showed above is the simplest possible scenario you can run into. 

- In future projects, think about WHEN you want code inside your main component ƒ() to be ran. 
- Then based on those instances, employ useEffect to eliminate any infinite loops plaguing you

Later on, you'll likely use useEffect with an array dependency list filled with actual entries
Then, your code stashed within useEffect will run only when those dependency variables change



### Stopping useEffect from Running on Initial Render

Sometimes, we'd like to prevent our useEffect function from running on mount
Afterwards, we're happy to let it execute after one of its dependencies change

#### Procedure

Assuming the if condition is met, no part of the useEffect function will run on mount

```react
let isInitial = true; // when this equals false, allow useEffect to run

function App() {
  useEffect(() => {
    if (isInitial) { isInitial = false; return }
    console.log("useEffect ran!");
  },[dependencies]           
}
```

#### Partially Stop useEffect on Mount

- You can choose to put that if block partway down the useEffect function
- Perhaps you want one part of the useEffect block to run on mount, but wish to block other parts

```react
let isInitial = true; // when this equals false, allow useEffect to run

function App() {
  useEffect(() => {
    console.log("useEffect top half runs on mount!");
    if (isInitial) { isInitial = false; return }
    console.log("useEffect bottom half does not run on mount!");
  },[dependencies]           
}
```



# useReducer Hook

useReducer is another type of hook that is similar to useState since it aids us with state management
It also happens to be more powerful, at the cost of being tougher to use properly

> CHAPTER-WIDE REPO (aside from the 1-3B series)
> https://github.com/Jason2B3/academind_react_6

### The useReducer Hook

Sometimes the state of our component is complicated

- It may involve multiple states or more than 1 way to change them
- Some states may depend on other states as well (shown below)

#### Specific Use-Cases

These are just the definitions for the 2 kinds of state snapshots

1. When you have states dependent on state snapshots of itself 
   EX. "Update stateful variable c's value depending on the most recent value of c"
2. When you have states that are dependent on state snapshots of other states
   EX. "stateful variable c's value is dependent on those of stateful variables a and b"

#### General Use Cases

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210804232313744.png" alt="image-20210804232313744" style="zoom: 80%;" />

TLDR: When useState becomes annoying or overcomplicated to manage all states required in a module

EXAMPLE: acad_react_6 

In our Login.js module, we have a total of 5 states, some of which are dependent on one another
Sure would be great if we could combine some of these states into 1

![image-20210802203106406](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210802203106406.png)

### What useReducer is Made of

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210803013843233.png" alt="image-20210803013843233" style="zoom:80%;" />



|                |                                                              |
| -------------- | ------------------------------------------------------------ |
| `state`        | a state snapshot<br />equal to the initialState if it hasn't been changed yet |
| `dispatchFn`   | invokes the reducer function with the argument we feed it (action)<br />there's no need to feed this the first argument (state) |
| `reducerFn`    | a function we perform on our state to get a new state<br />should return an updated version of argument 1...which is the state |
| `initialState` | initial state, which is usually an object containing KVP's for relevant info<br />if it's hardcoded, exclude the third useReducer argument |
| `initFn`       | use if you need to set the initial state object programmatically<br />never demonstrated in our lessons, so research if encountered |

For the record, the initial state can be equal to a flat value instead of an object
However, we usually use useReducer to manage complex states, so you won't see that often

### YT-tutorial Part 1: Basics

> YT-SERIES REPO: https://github.com/Jason2B3/reducer_learn
> Crash course URL:  https://www.youtube.com/watch?v=kK_Wqx3RnHk

——————————————————————————————————————————————————————

We're going to code a numeric display with buttons that add/subtract one 
This will teach us the basics about useReducer

![image-20210803153444000](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210803153444000.png)

> commit 1: operational but w/ bad practices
> commit 2: improved upon

#### Commit 1

We've programmed App.js to get our incrementor working properly
Although we will improve on our code in the next commit, after I explain what happens here

——————————————————————————————————————————————————————

###### initial State + state snapshot + dispatch function

```react
const [state, dispatch] = useReducer(reducer, { count: 0 });
```

Initial State: 
We want the counter to start at 0 on startup

State snapshot: 
We'll use `state.count` in our component function just like we would use the 1st variable of useState

Dispatch Function
Use this to call the reducer function we defined outside our component function
Only feed it the second argument (will explain why later)

——————————————————————————————————————————————————————

###### reducer function

```react
function reducer(state, action) {
  console.log(state) // equals the state variable from the useReducer line
  console.log(action) // equals the object argument you feed dispatch
  // Increment or decrement our current count by 1
  if (action.type === "increment") return { count: state.count + 1 };
  if (action.type === "decrement") return { count: state.count - 1 };
  // If action.type is different than the above two options, return state as is
  return state
}
```

This function gets called by `dispatch`

- We defined our function outside the main component function because it doesn't interact with anything inside of it- besides the initial state which it has access to anyway

ACTION TYPES:
You will define an action type inside reducer/dispatch argument 2

- This dictates how your state will be affected, thanks to the if statement inside your reducer ƒ()
- If you feed dispatch a type that is not found in your list of if statements, then it'll default to returning the state as it currently is without any change 

STRANGE QUIRK: 
The function does not need you to supply state as an argument

- When calling reducer with dispatch, you may have noticed we only feed it one object argument
- I don't know why, but this function seems to have access to the state by default, so you only need to supply argument 2 when calling it (proven by the console logs)

——————————————————————————————————————————————————————

###### App.js Full Code

```react
import "./App.css";
import React, { useReducer } from "react";
export default App;

function reducer(state, action) {
  console.log(state) // built in without supplying argument
  console.log(action)
  // Increment or decrement our current count by 1
  if (action.type === "increment") return { count: state.count + 1 };
  if (action.type === "decrement") return { count: state.count - 1 };
  // If action.type is different than the above two options, return state as is
  return state
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const plusOne = (prevCount) => dispatch({ type: "increment" });
  const minusOne = (prevCount) => dispatch({ type: "decrement" });
  return (
    <React.Fragment>
      <button onClick={minusOne}>-</button>
      <span>{state.count}</span>
      <button onClick={plusOne}>+</button>
      <span></span>
    </React.Fragment>
  );
}
```

![image-20210803154841179](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210803154841179.png)

#### Commit 2: Improving our Code

1. Use switch statements instead of if conditions (better for larger lists)
2. Instead of having the type be a hardcoded string, have it be a KVP value
   Typos will be less of an issue 

- The code editor will autocomplete if we allow it, and typing in an object key that doesn't exist will generate an error (unlike with hardcoded strings)
- It's better than having the default action fire off silently, creating a subtle bug

App.js

```react
import "./App.css";
import React, { useReducer } from "react";
export default App;

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: " decrement",
};

function reducer(state, action) {
  switch(action.type){
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 }; 
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const plusOne = (prevCount) => dispatch({ type: ACTIONS.INCREMENT });
  const minusOne = (prevCount) => dispatch({ type: ACTIONS.DECREMENT });
  return (
    <React.Fragment>
      <button onClick={minusOne}>-</button>
      <span>{state.count}</span>
      <button onClick={plusOne}>+</button>
      <span></span>
    </React.Fragment>
  );
}
```

#### Returning Multi-KVP State Objects in reducerFn

When using useReducer, you likely have a state object with several KVP's inside

- When updating those KVP values inside the reducer function, you need to return a slightly altered state object that contains all the KVP's that were there initially
- Return the state object as it was, then override one KVP

EXAMPLE: React Meals Practice Project

reducer setup:	![image-20210815011225346](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210815011225346.png)

reducerFn:			![image-20210815011456986](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210815011456986.png)

Now... we'll return a state object that looks like this when we play with out website:

![image-20210815011615610](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210815011615610.png)

If our code didn't have `...state`, then we'd lose the Snitzel and Green Bowl KVP's which we also must keep track of

### YT-tutorial Part 2: Payloads

> YT REPO: https://github.com/Jason2B3/reducer_learn
> Crash course URL:  https://www.youtube.com/watch?v=kK_Wqx3RnHk
>
> commit 3: payloads

#### What's a Payload?

The payload is an object inside of the action object argument fed to the dispatch function
It passes any information the `reducerFn` might need- aside from the type which gets its own KVP

WHY DO WE NEED IT?

- In App.js, our `reducerFn` requires the user input from the field- which we keep in a stateful variable named `userInput`
- Our `reducerFn` is defined outside of the App component function, so we can't directly access it
- The solution is to call dispatch() from inside the component function while passing over `userInput` through the payload

#### Lesson Objective

Have a form field set up that lets you enter items in a todo list
The items should appear in order after you submit one- you'll need payloads for this exercise

![image-20210804011546457](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210804011546457.png)

#### Project Breakdown

###### state snapshot + initial State

```react
const [todos, dispatch] = useReducer(reducer, []);
```

State snapshot:
The array containing objects detailing each of our todo list items

- Each to do array entry is an object containing a KVP for name, id, and complete
- Will be iterated through in order to generate `<Todo>` JSX elements

Initial State:
We're forming an ordered todo list which starts off empty- hence the empty array initial state

###### reducer Function

```react
function reducer(todos, action) {
  if (action.type === "ADD_LIST_ITEM") {
    return [...todos, { name: action.payload.name, id: Math.random() }];
  }
  return todos;
}
```

- If action.type is ADD_LIST_ITEM, add an object entry to our todo array
  If action.type is different, just return the state as is
- "action" is the object argument we feed the dispatch function
  That object contains a nested payload object containing KVP's for name and id 

WHY OUR PAYLOAD HAS AN ID KVP:
The id was included so we could render a list while helping React keep track of which entry is which- we'd get a warning if we didn't include a key prop in our JSX

![image-20210804012315287](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210804012315287.png)

###### dispatch function

```react
  const handleSubmit = function (e) {
    e.preventDefault();
    dispatch({
      type: "ADD_LIST_ITEM",
      payload: { name: userInput }, 
      //$ Payload (must give stateful userInput variable to reducerFn)
    });
    setUserInput(""); // clear input field
  };
```

We want to add list items after we submit something via the input field

- We call the dispatch function with the type "ADD_LIST_ITEM" so our reducer function knows what actions to take (pun intended since the object argument here IS the "action")
- We include a payload to give the reducer function access to the stateful `userInput` variable- which is 2 way binded to the input field
- Remember, the reducer function is defined outside of App.js
  A payload was the only way to get userInput into `reducerFn` so that it could be used

#### Full Code

App.js

```react
import "./App.css";
import React, { useState, useReducer } from "react";
export default App;

function reducer(todos, action) {
  //% If action.type is ADD_LIST_ITEM, add an object entry to our todo array
  if (action.type === "ADD_LIST_ITEM") {
    return [...todos, { name: action.payload.name, id: Math.random() }];
  }
  //% If action.type is something else, return the todo array as is
  return todos;
}
function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  //% Will give userInput to the reducerFn as its name KVP in the payload
  // Also, userInput's double binded to the input element
  const [userInput, setUserInput] = useState("");

  //% Call reducerFn and give it the stateful userInput variable through the payload
  const handleSubmit = function (e) {
    e.preventDefault();
    dispatch({
      type: "ADD_LIST_ITEM",
      payload: { name: userInput }, 
      //$ Payload (must give stateful userInput variable to reducerFn)
    });
    console.log(todos);
    setUserInput(""); // clear input field
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)} // Quick double bind
        />
      </form>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.name}</li>;
      })}
    </React.Fragment>
  );
}
```



### YT-tutorial Part 3: Sub Components

In this lesson, our project demands are enough to warrant having subcomponents

- The examples were very simplistic, so now let's manage a more complex component state
- We'll be invoking the dispatch function in a component further down the branch than where it was defined

> YT-SERIES REPO: https://github.com/Jason2B3/reducer_learn
> Crash course URL:  https://www.youtube.com/watch?v=kK_Wqx3RnHk
>
> commit 4: sub components

#### Lesson Objective: READ FIRST

We have a form and input field set up, and we'd like to render each user input after its submitted
Along with the list item, we'd like to render 2 buttons

![image-20210803225652089](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210803225652089.png) ![image-20210803231743546](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210803231743546.png)

Toggle: Should toggle the status of the todo list item to true (will be explained)
Delete: Should delete the list item it sits beside

WARNING:
This example is far too involved to just look at here
You need to have the project open to properly understand it

#### Project Breakdown

###### todo List Item Status

We're going to be storing our list items in an array

- Each array entry will be an object with 3 KVP's, and we'll generate them with this helper function
- The complete key will always be set to false at the start, because you don't add things to a todo list that are already taken care of

```react
function newToDo(nombre) {
  return { id: Date.now(), name: nombre, complete: false };
}
```



###### state snapshot + initial State

```react
const [todos, dispatch] = useReducer(reducer, []);
```

State snapshot:
The array containing objects detailing each of our todo list items

- Each to do array entry is an object containing a KVP for name, id, and complete
- Will be iterated through in order to generate `<Todo>` JSX elements

Initial State:
We're forming an ordered todo list which starts off empty- hence the empty array initial state

###### Dispatch Function

We call the dispatch function in Todo.js, a subcomponent of App.js
We pass it down there via props in App.js ' JSX'

![image-20210804013830893](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210804013830893.png)

###### ACTIONS Object

These key value pairs denote the different actions our reducer function may take
We actually export this from App.js to Todo.js using props

```react
export const ACTIONS = {
  ADD_TODO: "add list item",
  TOGGLE_TODO: "toggle complete status",
};
```

###### reducer Function

```react
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      // Adds an object to the "todos" variable. {id, name, complete- KVP's}
      return [...todos, newToDo(action.payload.name)];
          
    case ACTIONS.TOGGLE_TODO:
      // Toggle between the {complete: true/false} for a specific list item
      return todos.map((td) => {
        if (td.id === action.payload.id) return { ...td, complete: !td.complete };
        return td; // only here to quell a soft warning message (dw about it)
      });
          
    case ACTIONS.DELETE_TODO:
      //$ Removes the entry from the the "todos" variable
      return todos.filter((td) => td.id !== action.payload.id);
          
    //$ If the case is not one of those listed above, return the state as is   
    default:
      return todos;
  }
}
```

WHY EACH CASE LOOKS DIFFERENT

| task        | need                                                         | provided by                                            |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------ |
| ADD_TODO    | name / user input from form<br />unique key for React list rendering | `action.payload.name`<br />`newToDo()` helper function |
| TOGGLE_TODO | id (to find it in the list)                                  | `action.payload.id`                                    |
| DELETE_TODO | id (to find it in the list)                                  | `action.payload.id`                                    |

#### Full Code

App.js

```react
import "./App.css";
import React, { useState, useReducer } from "react";
import Todo from "./Todo";
export default App;
//^ HELPERS
export const ACTIONS = {
  ADD_TODO: "add list item",
  TOGGLE_TODO: "toggle complete status",
};
function newToDo(nombre) {
  return { id: Date.now(), name: nombre, complete: false };
}
//^ REDUCER FUNCTION
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      //$ Adds an object to the "todos" variable
      //$ {id:# , name:"userInput", complete: Boolean}
      return [...todos, newToDo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((td) => {
        //$ We toggle between {complete: true} and {complete: false}
        //$ If false, the text goes gray. If true, text is black
        if (td.id === action.payload.id) return { ...td, complete: !td.complete };
        return td; // here only to get rid of a console warning
      });
    case ACTIONS.DELETE_TODO:
      //$ Removes the entry from the the "todos" variable
      return todos.filter((td) => td.id !== action.payload.id);
    default:
      return todos;
  }
}
//^ MAIN COMPONENT FUNCTION
function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const handleSubmit = function (e) {
    e.preventDefault();
    //$ call reducerFn and give it the stateful name variable through the payload
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName(""); // clear input field
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </React.Fragment>
  );
}
```

Todo.js

![image-20210803232330438](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210803232330438.png)

### Tip: Use switch instead of ifs

- It's more clean-looking to rely on switch statements instead of repetitive if blocks
- You can even place conditional logic inside switch statements before you commit to returning a new state object

```react
function reducer(state,action){
  switch (action.type) {
    case "SET_LOCATION_OBJECT":
      // can place conditional logic here if required
      return { ...state, savedLocation: action.payload };
    case "OPEN_SEARCHBAR_MENU":
      return { ...state, searchbarMenuOpen: true };
    case "CLOSE_SEARCHBAR_MENU":
      return { ...state, searchbarMenuOpen: false };
    case "OPEN_SNACKBAR":
      return { ...state, snackbarOpen: true };
    case "CLOSE_SNACKBAR":
      return { ...state, snackbarOpen: false };
    default:
      return state;
  }
}
```



### Challenge: Managing Complex State with useReducer 

This chapter's B series taught you how useReducer operates 
Use that knowledge to complete this challenge which uses many types of React hooks together

We have a login page built, and it's fully operational but with some bad code practices

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210731235543633.png" alt="image-20210731235543633" />

#### Starter Code Explanation

> PROBLEM 1: commit 113
> PROBLEM 2: error bait

In our Login.js module, we have a total of 5 states, some of which are dependent on one another

![image-20210802203106406](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210802203106406.png)

PROBLEM 1
The value of `formIsValid` depends on the value of `enteredEmail` and `enteredPassword`

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210802203123099.png" alt="image-20210802203123099" style="zoom:80%;" />

PROBLEM 2 - (WARP-KEY: RBPTRK)
In one of our earlier builds, we neglect to use function syntax to use setFormIsValid

- We actually couldn't even if we wanted to, because setFormIsValid assigns a value depending on snapshots of other states (namely enteredPassword)
- We're forced into using non-function syntax which is bad due to React's non immediate update scheduling problem
- Since there's no workaround available when relying on useState, we have to employ useReducer

![image-20210802204306848](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210802204306848.png)

If we try to use functional syntax here...

![image-20210802204900680](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210802204900680.png)

![image-20210802204911512](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210802204911512.png)

#### Applying useReducer in our Project

- We're going to combine the `enteredEmail` and `emailIsValid` states via useReducer
  This will simplify our code in the component function
- Could also combine all 5 stateful variables into 1, but let's keep things simple for now

> START: commit 113
> END: commit 116A 			(we validate email and password inside the reducerFn)
>
> READ THIS -↓
> We left a misleading comment in red in commit 116A
> It said we can validate email/password in our handler functions
> I tried this out, and it causes bugs 

Login.js 

```react
const emailReducer = function (emailState, action) {
  //$ On change, update emailState.value and check for validity
  if (action.type === "ON_CHANGE")
    return { value: action.value, isValid: action.value.includes("@") };
  //$ On blur, leave the emailState.value as is, and check for validity
  if (action.type === "ON_BLUR")
    return { value: emailState.value, isValid: emailState.value.includes("@") };
  //$ If action.type has no matches here, return the following as our emailState
  return { value: "", isValid: true };
};

const passwordReducer = function (passwordState, action) {
  //$ On change, update the passwordState.value, and check for validity
  if (action.type === "ON_CHANGE")
    return { value: action.value, isValid: action.value.trim().length > 6 };
  //$ On blur, leave the passwordState.value as is, and check for validity
  if (action.type === "ON_BLUR")
    return {
      value: passwordState.value,
      isValid: passwordState.value.trim().length > 6,
    };
  // If neither action types are those just listed, return the following obj
  return { value: "", isValid: true };
};
```

This example is huge and cannot be explained in detail here
Please check it out and see how similar the useReducer application is to this chapter's YT-series

MAIN TAKEAWAY

- Only feed the `dispatchFn` the bits of info needed for the task, and nothing more
- The type KVP in `dispatchFn({action-obj})` along with the `reducerFn` dictate what actions will be taken under certain conditions 
- "Certain conditions"  are expressed in our code depending on a few things; 
  Where you place your dispatch functions, and with what type KVP

![image-20210804035230372](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210804035230372.png)

Each of these handlers is used in our JSX input elements
Note how we matched our type strings with the onEvent names

![image-20210804035302059](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210804035302059.png)

![image-20210804035322581](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210804035322581.png)

#### Take my word on this

Validate your form inputs inside the reducer functions, NOT the handler functions
Ran into issues when ignoring this convention



### Nested Properties as useEffect Dependencies

In commit 116B, we finished our webpage with an email and password login, however we have an issue that is best explained at the 5:50 mark of this Udemy video:

> https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599236#notes

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210731235543633.png" alt="image-20210731235543633" style="zoom: 67%;" />

#### What useEffect Does in our Project

- Remember, useEffect does not determine and set the isValid properties of our email and password
  That's what the reducer function in our project does
- All useEffect does is see if both the email and password happen to be valid already, then it sets `formIsValid=true` if they both are

#### The Problem Shown Visually

Notice the `console.log(cleanup)` present in every photo in this lesson
This will run several times more than needed before we implement our solution

BEFORE:

![image-20210804230842771](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210804230842771.png)

AFTER

![image-20210804230756173](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210804230756173.png)



#### The Problem Explained Verbally

Login.js

![image-20210804164724033](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210804164724033.png)

When we type an email and password into the above 2 fields, our code keeps checking to verify the inputs even after they are proven to be valid

WHY:
We feed the useEffect function our entire emailState and passwordState as dependencies

- Every time any part of emailState or passwordState changes, the useEffect runs a check
- Typing extra characters into our field changes the value KVP of either one
  Just take a look at their useReducer lines

![image-20210804231420667](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210804231420667.png)

SOLUTION:
Supply the isValid properties of emailState and passwordState as dependencies instead
If the validity doesn't change, the useEffect function won't run



#### Supplying a Property as a Dependency instead of the Entire State Object

> START: commit 116B
> END: commit 117 for version 1 		... 		commit 118 for version 2

VERSION 1:
Extract some property from the state objects via destructuring

![image-20210804225659443](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210804225659443.png)

VERSION 2:
Place the properties from the state objects into the useEffect dependency list directly

![image-20210804230135053](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210804230135053.png)



# Scheduled State Updates & State Snapshots

> SOURCE: [Why Don’t React State Updates Reflect Immediately?](https://betterprogramming.pub/why-dont-react-state-updates-reflect-immediately-9041c4377385)
>
> Deep explanation on state scheduling and batching

- This chapter gives you concise, actionable steps to take when dealing with state snapshots or non-immediate updating. 
- For a deeper, more technical explanation on how these steps work behind the scenes, watch this
  [React - The Complete Guide (incl Hooks, React Router, Redux) | Udemy](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599626#overview)

### React's Scheduled State Updating Issue

React schedules state updates asynchronously, and does not perform these actions right away.
If you change the value of a stateful variable, it will not take effect in the scope the change occurs in

#### The useState Updating Problem

App.js

```react
function App() {
  const [vari, setVari] = useState(true);
  const toggleHandler = function () {
    setVari(!vari) // LINE A
    console.log("After our setMethod, vari equals:", vari); // LINE B
  };
  console.log("Outside of the handler scope, vari equals:", vari); // LINE C
  return (
    <div>
      <h1>Toggle state</h1>
      <button onClick={toggleHandler}>vari state button</button>
    </div>
  );
}
```

![image-20210819185845051](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210819185845051.png) ![image-20210819185812616](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210819185812616.png)

After clicking our button... 

```
LINE A:	
vari is scheduled to be changed to false

LINE B: 
The console logs the current value of var, which is still true since the change is not immediate

LINE C: 
When the component gets re-evaluated, we can access our updated stateful value
```

#### The useReducer Updating Problem

The same problem persists, even if you rely on useReducer instead of useState

```js
function reducerFN(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return { vari: !state.vari };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducerFN, {
    vari: true,
  });
    
  const toggleHandler = function () {
    dispatch({ type: "TOGGLE" });
    console.log("vari value after dispatch is:", state.vari); // delayed
  };
  console.log("vari value on main component scope is:", state.vari);
    
  return (
    <div>
      <h1>Toggle state</h1>
      <button onClick={toggleHandler}>vari state button</button>
    </div>
  );
}
export default App;
```

![image-20210819220210618](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210819220210618.png)

#### How Scheduled State Updates Work

React prioritizes plenty of operations over updating our state changes immediately- so they must happen asynchronously.

1. The state change is scheduled, while the rest of the code in that scope runs
2. The state change occurs, then triggers a component relaoad
3. Upon reload, every non-primitive thing is remade, the value get's updated, even where you used your useState setter method



### Workarounds for Functional React 

- Due to how closure works in JS, functions inside a React component cannot access updated values
- The whole concept behind closure is keeping lexically scoped values intact, and this makes immediately updated state values impossible

Instead of placing code inside the scope where we change our state, lets place that code elsewhere

#### List of Workarounds

1. Access state values on-render via the main component function's scope
   Look at Line C in the previous lesson's last example
2. useEffect, with the state listed as a dependency
3. Mutation Refs

For the record, functional syntax does not fix this problem
We use that to make sure we use accurate state snapshots, which is a different challenge

#### Option 2: useEffect 

Technically this isn't a solution - it's more of a workaround

- We can ensure that certain things happen after the stateful variable gets its value changed
- You will still get inaccurate state values in the scope where you change it however

```react
function App() {
  const [vari, setVari] = useState(true);
  const toggleHandler = function () {
    setVari(!vari)
    console.log("After our setMethod, vari equals:", vari); // still wrong
  };
  useEffect(()=>{
    // anything in here only runs when vari gets its value changed
    console.log("Inside the useEffect scope, vari equals:", vari);
  },[vari])
  
  return (
    <div>
      <h1>Toggle state</h1>
      <button onClick={toggleHandler}>vari state button</button>
    </div>
  );
}
```

![image-20210819205341723](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210819205341723.png)

#### Option 3: Mutation Refs (return4)

- We keep a clone of a state value inside a ref variable, then update it regularly
- Refs are mutable, just like objects, so closure doesn't inconvenience them
- Particularly good when you want to access updated states in an event listener or subscription callback which is created only on initial render

If curious, read the article and check out this example: [React (forked) - StackBlitz](https://stackblitz.com/edit/react-2j5fcv)



### Solutions for Class-based React (return2)

When coding with class-based components, you actually have several options for how to use immediately updated states

BEST OPTIONS:

1. Access the state directly in render
2. Use the setState callback (works differently than in functional React)
3. componentDidUpdate

Read more about each of these methods in the article listed at the top of this chapter

WORK, BUT ARE NOT RECOMMENDED:

1. setTimeout
2. async await

### State Snapshots & Functional Syntax

When updating a state value, you may need to know the most recent value of that very same state
Grabbing an accurate state value is very important

#### What are State Snapshots?

A state snapshot is just the value of a stateful variable, at some point in time
When updating stateful variables, we'll usually need the most recent state snapshot

STATE SNAPSHOT TYPE TABLE:

|                                                              | in words                                                     | should use...          |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---------------------- |
| TYPE 1 : Must update a state value based on a state snapshot of itself | Update stateful variable c's value depending on the most recent value of c | functional syntax      |
| TYPE 2 : Must update a state value based on a state snapshot of a different state | stateful variable c's value is dependent on those of stateful variables a and b | useEffect + useReducer |

To ensure you're using accurate state snapshots...

Type 1 -> functional syntax
Type 2 -> useEffect + useReducer + functional syntax

#### Functional Syntax: Type 1 Insurance

- When dealing with TYPE 1, using functional syntax is enough to ensure you'll be updating state using the most recent state snapshot
- The non immediate updating will still be a problem you need to remedy via workarounds though

EXAMPLE:

```react
function App() {
  const [vari, setVari] = useState(true);
  const toggleHandler = function () {
    setVari((prevState)=>{
      return !prevState // functional syntax shown here
    });
    console.log("After our setMethod, vari equals:", vari); // still updated late!
  };
  console.log("On our component function scope, vari equals:", vari);

  return (
    <div>
      <h1>Toggle state</h1>
      <button onClick={toggleHandler}>vari state button</button>
    </div>
  );
}
export default App;
```

#### Functional Syntax Snippets

If you're updating a Flat Value:

```react
setVari((prevState)=>{
	return prevState + 10
});
```

If you're updating a stateful object

```js
setUserInput((prevState) => {
   return { ...prevState, enteredTitle: "any value you choose" };
});
```

If you're updating a stateful array

```js
setUserInput((prevState) => {
   return [ ...prevState, "any value you choose" ];
});
```

If you're updating a stateful flat value

```js
setUserInput((prevState) => {
   return prevState + 99 ];
});
```

LAZY APPROACH
Should only use this when inside the useEffect handler scope, and nowhere else

```
setVari(!vari)
```



#### Type 2 Insurance: 

Functional syntax only works if you're relying on type 1 state snapshots

- If you have type 2 state snapshots, trying to use functional syntax will result in fatal errors 
- At this point, just use reducers instead of useState
  useReducer intro lesson shows an example of this. Warp key: RBPTRK 

BENEFITS

1. The useEffect hook can be used to update a state by relying on state snapshots of other states
   AKA. Type 2 state snapshots

2. It also fixes the non-immediate updating issue React has
   We're guaranteed to use the most recent state snapshots in the useEffect arg 1 handler

> Take a look at this commit from the useReducer chapter's repo 
> https://github.com/Jason2B3/academind_react_6

![image-20210804164724033](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210804164724033.png)

#### We get Immediate State Updates here!

If you haven't noticed, useEffect + useReducer + functional syntax helps us get over all of React's flaws  that we've learned about in this chapter (state snapshots, scheduled updates)

| PROBLEM THAT WAS SOLVED         | how                                          |
| ------------------------------- | -------------------------------------------- |
| React's scheduled state updates | the state updates are immediate in useEffect |
| Type 2 snapshots                | we employed useReducer                       |

- `emailState` and `passwordState` are stateful useReducer variables
  `formIsValid` is a useState variable
- We use their `isValid` properties of `emailState` and `passwordState` to set the value of `formIsValid`



### Immediate Updating in Functional React

This was explained quickly at the end of the previous lesson, but I figured I would demonstrate it using a dedicated example

#### How we Achieve it

1. We rely on useReducer instead of useState

- It allows us to manage multiple stateful values at once
- We can combine all 3 useReducers into 1 if we want, or we can keep them seperate

2. Inside the useEffect handler, all state updates occur immediately
3. The functional syntax is replaced by reducer dispatch functions called inside useEffect handlers
   That's enough nested functions, right?

UNDERSTAND BEFORE WE BEGIN:

- We use the same reducerFN for all instances of the useReducer hook
  This is a very simple example, and this would almost never happen IRL
- We could combine all 3 reducer setups into a single large 1, but I'd like to emulate managing states that are distinct and separate from each other

> commit z1:	[Jason2B3/snapshotter (github.com)](https://github.com/Jason2B3/snapshotter)

#### Demo

- To update states based on other states (type 2), we need to rely on useReducer
- With useEffect used in tandem, we can make state changes inside the useEffect scope then have those changes be updated immediately

```react
function reducerFN(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return { vari: !state.vari };
    default:
      return state;
  }
}

function App() {
  // Each reducer object can get their one KVP toggled on/off by reducerFN
  const [emailState, dispatchEmail] = useReducer(reducerFN, {
    vari: true,
  });
  const [passwordState, dispatchPassword] = useReducer(reducerFN, {
    vari: true,
  });
  const [formState, dispatchForm] = useReducer(reducerFN, {
    vari: true,
  });
    
  // Handler for our button which changes emailState.vari
  const toggleHandler = function () {
    dispatchEmail({ type: "TOGGLE" }); // toggles emailState.vari
  };
  
  //$ The code in here executes after the email state gets changed 
  useEffect(() => {
    dispatchPassword({ type: "TOGGLE" }) // toggle from true -> false
    console.log("passwordState in useEffect scope:", passwordState.vari); 
    // ^^ change occurs immediately
  }, [emailState.vari]);
  return (
    <div>
      <h1>Toggle state</h1>
      <button onClick={toggleHandler}>email state changer</button>
    </div>
  );
}
export default App;
```

![image-20210820012837646](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210820012837646.png) ![image-20210820013004108](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210820013004108.png)



### Updating useState with Array Values

You need specific syntax to do this properly

![image-20211009230536652](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211009230536652.png)

# Optimization with useCallback / useMemo Hooks

> CHAPTER-WIDE-REPO:
> [Jason2B3/behind_react_scene (github.com)](https://github.com/Jason2B3/behind_react_scene)
>
> SUM-UP OF OVER HALF THE CHAPTER:
> [React - The Complete Guide (incl Hooks, React Router, Redux) | Udemy](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599616#overview)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210813055037706.png" alt="image-20210813055037706" style="zoom:80%;" />

### How React's DOM Manip works Behind the Scenes

If you're creating a SPA where the screen needs to re-render after the user interacts with your webpage in some way, use React. 

- You should never consider building a medium-large size project like that using vanilla JS alone, because things will render far too slowly
- DOM manipulation is much more efficient and less performance intensive while using React, and I'll be explaining why

> Great article for this lesson: 
> [React Virtual DOM Explained in Simple English - Programming with Mosh](https://programmingwithmosh.com/react/react-virtual-dom-explained/)

#### React vs JS DOM manip -Simplified

```
let fruits= ['Apple', 'Orange', 'Banana']	// start
let fruits= ['Apple', 'Lemon', 'Banana']	// update to this
```

- JavaScript's regular DOM approach would have us create a new array with a different 2nd entry
  Not JS' fault, since the DOM was initially created for static websites without dynamic changes
- React's virtual DOM approach would have us change the second entry, and nothing else

DISCLAIMER:

- JS will not re-render an entire page whenever certain parts of a website need to be changed visually
  This is an oversimplification, and the way rendering works in general is much more complicated 
- The point of the lesson is to understand how React improves performance via the virtual DOM

#### ReactDOM / Virtual DOM (same)

This is a representation or blueprint of the original DOM object
It has the same properties/methods/powers as the original, but is much much faster

- Manipulating the original DOM is slow, while manipulating the Virtual DOM is fast
- This representation cannot make webpage changes by itself, which is why we use it to help speed up regular DOM manipulation through a process called "diffing"

#### Diffing: How React Speeds up DOM Manipulation

1. Update components in react
   The elements you change will affect its children further down the branch as well
2. ReactDOM now compares the current updated state and compares it to the previous one
   It records all the differences, which it'll use to edit the real DOM

![image-20210818231009121](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210818231009121.png)

3. Virtual DOM calculates the best method to make these changes to the real DOM

- Now only the effected elements will get changed in the regular DOM, instead of the entire DOM tree being changed
- The performance cost is lowered significantly

![image-20210818231032913](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210818231032913.png)

### Component Updates

#### Re-evaluating vs Re-rendering Components

In React, re-rendering and re-evaluating a component are two different actions

| ACTION:                     | happens when...                                              | what occurs                                                  |
| --------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| component gets re-evaluated | props, state, or context changes                             | React will run all the component function's code and methods |
| component gets re-rendered  | The virtual DOM gives the regular DOM instructions for how to change/update optimally after diffing | The DOM tree gets re-rendered in certain places where it's necessary |

DISCOVERED:
If the state changes, that does not guarantee that your component gets re-rendered

For the record, props/context changes basically boil down to just being state changes
How would a prop or context variable value change if it wasn't stateful to begin with?

#### Detecting Re-evaluation and Re-rendering

RE-EVALUATION: 

- Place a console log message on the your component function's scope, then open the console tab
- Every time the component is re-evaluated, all it's code will be run through, and the message you typed will appear
- Force a re-evaluation by changing the webpage state via user inputs/actions

RE-RENDERING: 

- Open your elements tab in the dev tools, then pay attention when elements flash
- A flash tells you when an element gets brought into existence, removed, or re-rendered

If you want a simple example of forcing a component to be re-evaluated but not re-rendered, check out our chapter wide repo

> chapter wide repo, commit 152
> [visualized in this tutorial starting at 4:08](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599578#notes)

### The Child Component Re-evaluation Issue + React.memo

When a parent component gets re-evaluated , all of its children get re-evaluated as well

#### Demonstrating the Problem

App.js

```react
function App() {
  console.log("App component running!");
  const [stateVari, setStateVari] = useState(false);
  const toggleHandler = function () {
    setStateVari((prevState) => !prevState); // toggles T/F
  };

  return (
    <div>
      <h1>Hi there!</h1>
      <p>stateVari value is currently: {stateVari.toString()}</p>  
      <button title="die" onClick={toggleHandler}>Toggle stateVari</button>
      <DemoOutput />
    </div>
  );
}
```

DemoOutput.js

```js
function DemoOutput() {
  console.log("DemoOutput Component running")
  return <p>This component always outputs the same words!</p>
}
```

![image-20210819035200338](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210819035200338.png) ![image-20210819035520294](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210819035520294.png)

We update the `stateVari` variable inside App.js
The `<DemoOutput>` component is uncontrolled, and has nothing to do with that stateful value

- When we hit the toggle button, App.js and all of its child components get re-evaluated
- This is a complete waste of processing power, and will tank performance when we work on some larger products with hundreds of child components
- In tiny projects however, this doesn't matter at all

#### Solving it via React.memo

We can tell React to only re-execute  `<DemoOutput>` under certain circumstances
This method forces React to look at the `<DemoOutput>`  component's prop values

- The only time this component will get re-evaluated is when one or more of those prop values has gotten its value changed
- If the parent component changed but the prop values remain the same, it will still skip re-evaluation

DemoOutput.js (edited slightly on the final line)

```react
function DemoOutput() {
  console.log("DemoOutput Component running")
  return <p>This component always outputs the same words!</p>
}

export default React.memo(DemoOutput); // wrapped default export with method
```

Now, only the code in App.js gets re-executed when the state's changed by pressing our toggle button

![image-20210819045355043](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210819045355043.png)

——————————————————————————————————————————————————————
This effect persists further down the component branch as well!

Right now we have... `App.js <- DemoOutput`
But what if we had...  `App.js <- DemoOutput <- SubComponent`

By applying React.memo on DemoOutput, this would also be applied on it's child SubComponent automatically

#### Why we can't Overuse this Solution

Although React.memo helps us optimize performance, using this method comes with certain costs

PERFORMANCE SAVED:
The cost of re-evaluating a component that doesn't need have its code ran through 

PERFORMANCE SPENT:
Storing previous prop values then comparing them to the current ones. 
Required to gauge whether a re-evaluation is needed or not

#### Do we use it or not ?

- It's not easy deciding if using React.memo on a component is worth it or not
- It depends on the number of props you have, the component complexity, the number of child components... etc

WHEN IT'S CLEARLY WORTH IT

1. If you're using React.memo on a component high up the tree, 

- In larger projects, this means you have a large number of child components who you'll skip re-evaluating automatically
- You save a ton of performance in this case

2. When you know a component will return the same thing every time it appears, regardless of state values in its parent components

WHEN IT'S NOT WORTH THE TROUBLE:

1. If you know a component or its prop values is going to change with nearly every re-evaluation of the parent component

- In cases like this, using React.memo just gives the computer extra work to do

2. If your project is very small

#### It's not Enough

You'll need to combine this with useCallback to stop function recreation

### Function Recreation / Referential Equality

The function recreation issue is one of React's most common gotchas, and this problem occurs purely because of how JS is designed

#### Referential Equality

Compare 2 reference type values in the console:	![image-20210819052259739](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210819052259739.png)

Compare 2 primitive type values in the console: 	![image-20210819060508764](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210819060508764.png)

The only reason we named this lesson function recreation is because you'll need to fix functions being recreated much more often than any other reference type

#### Reference vs Primitive Values: Refresher

This was explained in deeper detail in our JS Theory document- and is why we need to resort to Lodash to perform proper deep cloning

> JS Theory Document: WARP jjkae2022

![image-20210819053415171](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210819053415171.png)



#### How this Affects React 

Take a look at our new example, and pay attention to what props we feed our components

> Chapter-wide-repo: 		commit 154

`<Button>` : Fed a handler function as an attribute (reference type)
`<DemoOutput>` : Fed a string as an attribute (primitive type)

App.js

```react
function App() {
  console.log("App component running!");
  const [stateVari, setStateVari] = useState(false);
  //$ Same function is given to <Button> every time... right??? (wrong, actually)
  const toggleHandler = function () {
    setStateVari((prevState) => !prevState); // toggles T/F
  };
  //$ Same string is given to <DemoOutput> as a prop each time 
  const demoProp= "primitive string"
  
  return (
    <div>
      <h1>Hi there!</h1>
      <p>stateVari value is currently: {stateVari.toString()}</p>
      <Button onClick={toggleHandler}>Toggle stateVari</Button> 
      <DemoOutput testAttribute={demoProp} />
    </div>
  );
}
```

Button.js

```react
function Button(props) {
  console.log("Button Component running")
  return <button onClick={props.onClick}>{props.children}</button>;
}
export default React.memo(Button); // should prevent unneeded re-evals (but fails)
```

DemoOutput.js

```react
function DemoOutput({testAttribute}) {
  console.log("DemoOutput Component running")
  return <p>This component always outputs the same words!</p>
}
export default React.memo(DemoOutput); // succeeds in preventing unneeded re-evals
```

Hitting the toggle button will change the state in App.js - re-evaluating it
Neither `<Button>` or `<DemoOutput>` should get re-evaluated due to our use of React.memo, right?

![image-20210819035200338](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210819035200338.png) ![image-20210819055343915](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210819055343915.png)

The `<Button>` component actually does get re-evaluated, because we fed it a reference type prop

- When App.js gets re-evaluated, the `toggleHandler` function is actually recreated as a new function that's identical to the previous one, causing React to think the prop changed
- This is not an issue for primitive type props, which is why `<DemoOutput>` does not get re-evaluated 

#### Solving this Issue

Look to the next lesson for React's built in solution; the useCallback() hook



### useCallback Hook: The Cure for Function Recreation 

This lesson is a direct continuation of the previous one, and solves the problem it went into detail explaining

#### What useCallback does

This hook tells React not to recreate a reference type value after every execution

- Now you can supply reference type props to components, and have them not be re-evaluated as long as React.memo is applied on them
- Basically, you can use reference types like you would primitive types 

SIMILAR TO USE EFFECT

- Just like useEffect, it prevents code from running unless one of it's dependencies change values
- This quality's used to prevent non-primitive variables from getting re-defined as they were, then executed unnecessarily

#### useCallback Syntax

Wrap the following code snippet around the reference value you feed a component as a prop

```REACT
useCallback(referenceTypeHere, [dependency_list])
```

The dependency list works exactly like useEffect's does

- Place anything you expect to change inside your referenceTypeHere, inside your dependency list
- This is somewhat awkward to say, since a reference Type could be a function or a simple object
  See the previous lesson for what counts as one

DEPENDENCY LIST OPTIONS: 

| ARG 2 equals...               | when useCallback reference type gets created as new          |
| ----------------------------- | ------------------------------------------------------------ |
| nothing                       | as soon as page loads<br />When the component gets re-rendered |
| empty array                   | as soon as page loads                                        |
| array containing dependencies | as soon as page loads<br />When dependency values get changed |

#### Demonstration

> CHAPTER-WIDE-REPO:	commit 154

App.js
We wrapped our reference type in a useCallback() method call

```react
import React, { useState, useCallback } from "react"; // MUST IMPORT HOOK

function App() {
  console.log("App component running!");
  const [stateVari, setStateVari] = useState(false);
    
  //$ This reference type function will no longer trigger re-evals anymore
  const toggleHandler = useCallback(function () {
    setStateVari((prevState) => !prevState); // toggles T/F
  }, []);
    
  const demoProp = "primitive string"; 
  return (
    <div>
      <h1>Hi there!</h1>
      <p>stateVari value is currently: {stateVari.toString()}</p>
      <Button onClick={toggleHandler}>Toggle stateVari</Button>
      <DemoOutput testAttribute={demoProp} />
    </div>
  );
}
```

Button.js

```react
function Button(props) {
  console.log("Button Component running")
  return <button onClick={props.onClick}>{props.children}</button>;
}
export default React.memo(Button); 
// prevents unneeded re-evals, despite the reference type prop making things tougher
```

DemoOutput.js

```react
function DemoOutput({testAttribute}) {
  console.log("DemoOutput Component running")
  return <p>This component always outputs the same words!</p>
}
export default React.memo(DemoOutput); // succeeds in preventing unneeded re-evals
```

![image-20210819035200338](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210819035200338.png) ![image-20210819063632006](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210819063632006.png)

Finally!
The reference type handler function no longer triggers re-evaluations on our Button component

#### Other Reference Types

Fix them the same way:

```react
const demoProp = useCallback({str:"primitive string"},[])
```



### How useCallback's Dependency List relates to Closures

To understand how React works, you must understand closures- an important JS topic
Check out your JS Theory document if you need a refresher

#### Closure Overview

Recall that one of closure's main use cases is to lock in values from the surrounding scope and keep them the same- this is great for preserving data

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

#### How this relates to useCallback

The purpose of useEffect and useCallback is to prevent code from being executed unnecessarily

- The dependency list you supply is important, because it dictates when your useCallback function gets its code ran through again
- If a variable in your useCallback function may change, place it in the list
  TLDR: anything stateful must get shoved in

DEPENDENCY LIST OPTIONS: 

| ARG 2 equals...               | when useCallback reference type gets recreated as new        |
| ----------------------------- | ------------------------------------------------------------ |
| nothing                       | as soon as page loads<br />When the component gets re-rendered |
| empty array                   | as soon as page loads                                        |
| array containing dependencies | as soon as page loads<br />When dependency values get changed |

#### Demonstration

> CHAPTER-WIDE-REPO: commit 156

Closure betrays us if we don't supply an accurate dependency list- just think about how closures and useEffect operate

- If a value you're using inside your function may be different than it was on startup, then you definitely want to re-run the code again with updated values. 
- If you don't, closure will work against you by forcing the use of outdated stateful variable values inside the useCallback function

I'll give an example of the above phenomenon right now:

```react
function App() {
  console.log("App component running!");
  const [stateVari, setStateVari] = useState(false);

  //$ Same function is given to <Button> every time... right??? (wrong, actually)
  const toggleHandler = useCallback(function () {
    setStateVari((prevState) => !prevState); // toggles T/F, but is not immediate
    console.log(stateVari) // false, b/c the update is late
  }, []);
  const demoProp = "primitive string"; // any primitive value has the same effect

  return (
    <div>
      <h1>Hi there!</h1>
      <p>stateVari value is currently: {stateVari.toString()}</p>
      <Button onClick={toggleHandler}>Toggle stateVari</Button>
      <DemoOutput testAttribute={demoProp} />
    </div>
  );
}
```

![image-20210820033807466](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210820033807466.png)

HOW CLOSURE SCREWS US OVER HERE:
We log stateVari after we schedule a value change from false -> true

- We expect it to log false after press 1, because of schedule state updates
- Press #2 should log true, but the function never gets re-evaluated remember? We're stuck with `stateVari = false` forever

#### Don't worry!

- This problem is avoided by choosing the correct dependency option for our useCallback function
- Also the state change does actually happen- it just isn't reflected inside the useCallback function where the closure is active (which is still bad, mind you)

You can see the effects of our state changing everywhere in our file, except the useCallback function

![image-20210820033956493](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210820033956493.png)	![image-20210820034111714](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210820034111714.png)



### State Batching with Synchronous State Changes

Look at this example where we update 2 different states on lines 16 and 17

![image-20210820053333379](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210820053333379.png)

- If you have 2 synchronous state change lines in the same snippet, React schedules 2 component updates- but does that mean the component will be re-executed twice? (No)
- React batches those state updates together and takes care of them at once
  You will have 1 scheduled state change that encompasses both lines 16 and 17

#### What do I mean by Synchronous?

A synchronous function is one that executes from start->end without any callback functions or promises in between



### Optimizing with useMemo Hook

At this point, we know how to prevent child components from being re-evaluated unless their prop values change

- If one's props change, then it will get re-evaluated, which leaves us with one more issue to address
- Some operations - even if the component must be re-evaluated - should not be run again

MEMOIZATION DEFINITION:
Storing the results of expensive function calls and returning the stored result when the same inputs occur again

#### Purpose of useMemo

Every component has a JS section where you're free to use any JS methods required to program the component's logic

- Some method operations like sort() are more performance intensive than others. 
- These are operations you'd like to stop from being re-evaluated unnecessarily 
  If you know the sorting end-result will be the same every time for example, why repeat the sorting?

PURPOSE:

1. Memoize the output of certain method calls

- It will return the same data every time, unless one of its dependencies change- it'll perform the function operations over again in that case

```react
useMemo(() => {
	return arr.method(()=> {})
}, [])
```

2. Acts like useCallback does, with differences where we use it
   We'll have a table to list out the differences in our summary lesson

- useCallback -> use on our functions we feed as props, to prevent re-evals on entire components
- useMemo -> 
  use to prevent re-evals on certain parts of a component you expect to be re-evaluated
  specifically used to stop expensive built in JS method calls

#### Demo

> CHAPTER-WIDE-REPO
> Start: commit 156					End: commit 160

GOAL: Prevent the sort function from firing unless the testAttribute prop we feed changes

App.js

```react
function App() {
  console.log("App component running!");
  const [stateVari, setStateVari] = useState(false);

  //$ Same function is given to <Button> every time, if we employ useCallback
  const toggleHandler = useCallback(function () {
    setStateVari((prevState) => !prevState); // schedules T/F toggle
  }, []);
  let arr= useMemo(()=>{
    return [5, 8, 3, 11, 2]; 
    // prevents array from being recreated on re-evaluation 
    // ( WARPXJ9: useCallback would be more appropriate, but useMemo works too)
  },[])
  return (
    <div>
      <h1>Hi there!</h1>
      <p>stateVari value is currently: {stateVari.toString()}</p>
      <Button onClick={toggleHandler}>Toggle stateVari</Button>
      <DemoOutput
        testAttribute={arr} // GUARDED AGAINST REFERENTIAL EQUALITY
        forcesReval={stateVari} // UNGUARDED (by choice for our demo)
      />
    </div>
  );
}
```

DemoOutput.js

```react
import React, {useMemo} from "react";
function DemoOutput({ testAttribute }) {
  console.log("DemoOutput Component running");

  useMemo(()=>{
    console.log("Sorting as we speak")
    return testAttribute.sort((num1,num2)=>{
      return num1-num2
    })
  },[testAttribute]) // reruns only when testAttribute prop changes (it won't btw)

  return <p>{testAttribute}</p>;
}

export default React.memo(DemoOutput);
```

![image-20210822024911747](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210822024911747.png)

BEFORE: 

![image-20210822025040735](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210822025040735.png)   ![image-20210822025143275](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210822025143275.png)

AFTER: 

![image-20210822040152751](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210822040152751.png) <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210822030551132.png" alt="image-20210822030551132" style="zoom:80%;" />

​     

#### Challenge Explained:

Pressing the toggle button changes a state value, causing App.js to get re-evaluated along with `<DemoOutput>` 

- DemoOutput gets re-evaluated because of `stateVari`,  which we didn't guard vs referential equality when we fed it as a prop
- We did guard `arr` from referential equality, so that won't ever change
  This makes it so sorting it inside DemoOutput is pointlessly expensive

SO WHAT DID WE DO?

- We employed useMemo, making the sort method run only when the testAttribute prop which held `arr`, changed (so, never)
- The sort method is only executed once on startup, then never again, saving us performance

### Summary - Actionable Only

When it comes to React components and the passing of data, you're going to be working with state, props, or context - all 3 essentially boil down to state, with a bit of syntactic differences

#### Optimization Issue: Child Re-evaluation

Whenever state changes, your code is re-evaluated, meaning it is ran again

- This is not good when certain chunks of code remain the same even after the state changes
- Any child components will be re-evaluated too, as well as any children further down the branch

> ![image-20210822013413378](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210822013413378.png)
> If the component we're in re-evaluates, the child components DemoOutput and Button will be re-evaluated, along with any children they have 

#### Solution Part 1: React Memo

Wrap React.memo() around the default export of a child component

- The only time this component will get re-evaluated is when one or more of those prop values has gotten its value changed
- If the parent component changed but the prop values remain the same, it will still skip re-evaluation

```react
function DemoOutput() {
  console.log("DemoOutput Component running")
  return <p>This component always outputs the same words!</p>
}

export default React.memo(DemoOutput); // wrapped default export with method
```

This method needs to be used when...

1. If you're using React.memo on a component high up the tree, 

2. When you know a component will return the same thing every time it appears, regardless of state values in its parent components

Don't use this when...

1. You know a component or its prop values is going to change with nearly every re-evaluation of the parent component

- In cases like this, using React.memo just gives the computer extra work to do

2. Your project is very small, b/c this method won't make any noticeable difference
   You should still adhere to best practices though, so...

#### React.memo Flaw: Referential Equality

WHAT'S THE PROBLEM?

- Even if an a reference object remains the exact same, the re-evaluation of the component it's in will make React believe that it's brand new
- If this reference object is fed as a prop, the child component will re-evaluate
  This needs to be addressed
- Primitive data won't be an issue, thankfully

> ![image-20210822013413378](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210822013413378.png)
> The handlers we feed <Button> will cause this component to be re-evaluated every time our current component gets re-evaluated. 
>
> They have React.memo applied off-screen, but this problem still persists 

REFERENCE AND PRIMITIVE TYPES:

![image-20210819053415171](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210819053415171.png)

Though we named the issue "Function Recreation", there are other reference types that will require the same treatment

```react
const demoProp = useCallback({str:"primitive string"},[])
```

#### Solution Part 2: Bypassing the Referential Equality Issue

Use the useCallback hook, which tells React not to recreate the specific reference type you use the hook on

```
useCallback(referenceTypeHere, [dependency_list])
```

- Wrap useCallback() around your function, then turn that into argument 1 
- The dependency list logic is identical to useEffect's, and you wrap your reference type 

App.js

```react
import React, { useState, useCallback } from "react"; // MUST IMPORT HOOK

function App() {
  console.log("App component running!");
  const [stateVari, setStateVari] = useState(false);
  //$ This reference type function will no longer trigger re-evals anymore
  const toggleHandler = useCallback(function () {
    setStateVari((prevState) => !prevState); // toggles T/F
  }, []);
    
  const demoProp = "primitive string"; 
  return (
    <div>
      <h1>Hi there!</h1>
      <p>stateVari value is currently: {stateVari.toString()}</p>
      <Button onClick={toggleHandler}>Toggle stateVari</Button>
      <DemoOutput testAttribute={demoProp} />
    </div>
  );
}
```



#### Solution Part 3: Prevent Unnecessary Method Calls

```react
const memoizedValue = useMemo(() => {
    return expensiveMethod, [dependency_list]
    // the expensiveMethod better return a value itself
});
```

To put it simply:

- If you know the result of a JS built-in method call will return the same thing every time, rely on useMemo() to store that value without re-running it
- The syntax is just like useEffect, and the dependency list works the same too

The demo in the lesson before this one explains the concept well, so I won't show it here

#### useCallback vs useMemo

PRO-TIP:
You can use useMemo where you'd rely on useCallback sometimes, but for the sake of simplicity I wouldn't- though I did demonstrate this in last lesson's example -> WARPXJ9

|             | guards...                                                    | how                                                          |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| useCallback | components from being re-evaluated                           | makes reference types safe to pass as props, by fixing the referential equality issue |
| useMemo     | JS method code inside a component being re-evaluated from running again unnecessarily | holds the return of the method call and will only rerun it's syntax when/if a dependency value changes |

DISCLAIMER:

Unless something like animation is especially taxing on your project, squeezing performance out of method calls shouldn't be your highest priority

# =====================



hghr

# Class-based React (CBR)

Using classes is an alternative way of creating React components, one that used to be very popular

- Functional approach is superior, but there are a very few select cases where classes are required
- Plenty of older projects and articles teach React using this outdated methodology, so it's a important to understand, even if you should avoid using it yourself

HISTORY + MAIN DIFFERENCE

- Before React 16.8 and the introduction of hooks, there was no way to update state inside functions
- In fact, every hook you've learned thus far does not work inside class based components
  You have to perform those operations in different ways

> CHAPTER-WIDE-REPO:	[Jason2B3/classy_react (github.com)](https://github.com/Jason2B3/classy_react)

CONSTRUCTOR + STATE SHORTCUT

```react
// rconst produces...
constructor(props) {
    super(props)
  
    this.state = {
       
    }
}
```



### JSX and Nested Functions

> Class-wide repo:	commit 164

#### Render Method + Props

- In CBR we use the render method, then return JSX inside its block
- We have props in CBR as well, but you need to perform a few steps first
  We'll be accessing them with `this.props.nameOfProp`

EXAMPLE: This sub component receives a `name` and `key` prop from its parent

![image-20210822200512558](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210822200512558.png)

App.js snippet

```react
import User from './User';	// import the sub component User.js (non plural)

const ParentComp = () => {
  // Most of this functional component is not shown due to irrelevance
  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul> // will be used in the return JSX section
  ); 
}
export default ParentComp;
```

Functional Users.js

```react
import React from "react";
import styles from "./User.module.css";

const User = (props) => {
  return <li className={styles.user}>{props.name}</li>;
};

export default User;
```

Class-based Users.js

```react
import React, { Component } from "react"; 		// import Component
import styles from "./User.module.css";

class User extends Component {
  super() // need this line to use the "this" keyword (and you will)
  render() {
    return <li className={styles.user}>{this.props.name}</li>;
    // access props with this.props.nameOfProp
  }
}
export default User;
```

ALT: Skip the import and just use `React.`

```react
import React from "react";
import styles from "./User.module.css";

class User extends React.Component {
  super() // need this line to use the "this" keyword (and you will)
  render() {
    return <li className={styles.user}>{this.props.name}</li>;
  }
}

export default User;
```

#### Helper Functions inside Render Scope

Sometimes, typing out some complex operations to generate JSX won't look pretty in the return section- like when we use map to iterate over an array to make a list 

Since the render method is a function, you can place helper methods inside then use their returns in the return section- it'll help keep your JSX looking clean

```react
class Users extends Component {
  // other content not shown for brevity
  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        {this.state.showUsers && usersList} // HELPER USED HERE
      </div>
    );
  }
}
```

#### Nested Functions 

With CBR, we can't define functions like we could normally

- Instead, you type them as KVP's inside your component class
  Can do that with ES5 or ES6 syntax- the picture below shows ES6
- Remember to keep them outside of the class constructor, just like we learned in JS Notes Part 2
  There may not always be a constructor, but if there is, keep functions out for performance

![image-20210823170220978](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210823170220978.png)

#### Mix & Match

You're free to use classes for one component in your project, then functional in another

- Typically you'll be sticking to 1 approach, unless you're adding new features to legacy code
- The previous example's dedicated commit shows how classes and functional components can work in tandem-  there really isn't much to it

#### Boiler Plate

```react
class UserFinder extends React.Component{
  constructor(){
    super(); // need for "this" usage
    this.state={};
  }
  //# Methods go here
  addOne(){

  }
  render(){

  }
}
```



> Example of principles shown: 
> commit 165 of CWR, Users.js



### State Management

State in CBR is manages completely different than in functional React, mainly due to having 0 hooks

#### Defining then Managing State

PROCEDURE:

1. Initialize and define your state as an object inside the class constructor

- In functional React, our state can be a Boolean, string, object, number.. etc
- In CBR, the state needs to always be an object named `this.state` in the constructor, no matter what the circumstances are

![image-20210823171217886](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210823171217886.png)

2. Update it when needed using the setState built in method
   setState method will contain/return an object- depending if you choose to use functional syntax

- This object will not override the old state. 
  Instead, it will merge the object argument you pass with the state at the current moment
- This means that if the first state object and the second one (setState argument) share the same KVP, the second object's property will override the first 
- This actually makes things easier, and is only present in CBR
  Updating state in functional React requires using the spread operator oftentimes, but not here

#### Updating State 

Only parts of the class component will be shown in the below snippets, for brevity

REGULAR SYNTAX:
Use when you're updating the state without relying on the same state's previous snapshot
The setState method will accept an object argument

```react
class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: 'Test',
    };
  }

  toggleUsersHandler() {
    // override the more KVP to equal 'exam'
    this.setState({ more: 'exam' }) 
  }
}
```

FUNCTIONAL SYNTAX:
Should be used whenever type 1 state snapshots are required for updating state
The setState method will accept a function argument which returns an object

```react
class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: 'Test',
    };
  }

  toggleUsersHandler() {
    // use the prev. state snapshot of this.state and flip the showUsers value
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }
}
```



#### Difference Chart

|                         | Functional                                                   | Class-based                                                  |
| ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| state type              | object, array, number, Boolean, string... etc                | an object named `this.state` in the constructor              |
| number of stateful vars | can have several individual state pieces active at the same time | one state object containing everything about a component that must be stateful |
| functions               | defined normally, inside the component function's scope      | defined as a KVP inside the component class, outside the constructor |
| updating state          | use the method that you name when you set up useState or useReducer | `this.setState()` which is provided by the component class we inherit from |

For the record, you can apparently have nested states in your CBR state object

> Example of principles shown: 
> commit 165 of CWR, Users.js



### Referencing State and Nested Functions with "this"

This is the part of CBR that catches the most heat from people who prefer functional React

- We cannot use stateful variables and function just by calling their names anymore
- Our component is inside a class, which means we're forced to reference its aspects with `this.`

If you want a refresher on how "this" and "this-rebinding" works, checkout one of the final lessons in OOP Chapter 2 of JS Notes Part 2

#### What "this" Points to 

| LOCATION                                                     | value of "this"                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| functions defined on global scope                            | undefined                                                    |
| functions defined in an object                               | the object they're inside                                    |
| internally defined event handlers (arrow_function)           | window object<br />Never use arrow handlers!!                |
| externally or internally defined <br />event handlers (function_declaration) | Equals `eventObj.target`<br />For click events, it's be what you clicked on |
| Inside a class                                               | The class "this" is used within.<br />Can be overridden      |
| geolocation API callback F's                                 | undefined (overrides the "inside class rule")                |

#### Rebinding "this" in JS vs React

PROBLEM:

- In class based React or even JS, we want to use "this" inside of functions to reference the class we're inside of currently
- Inside event handlers, "this" points to something else, meaning 

SOLUTION IN JS:

- Rebind "this" using `.bind(this)` inside the constructor
- The event listener setup takes place in the constructor, and "this" will point to the parent class while we're there

![image-20210823200952182](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210823200952182.png)

SOLUTION IN REACT:
We also use `.bind(this)`, but we do so inside the JSX return section instead

![image-20210823201126482](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210823201126482.png)

> Example of principles shown: 
> commit 165 of CWR, Users.js



### Component Lifecycle Methods: Replacing useEffect

In functional React, we have useEffect to handle code that we don't always want to be re-evaluated or re-rendered- but CBR has no hooks

SIDE-NOTE: There are more Lifecycle methods than the 3 described in this lesson, but they are not as important or commonly used- learn them when/if necessary

#### useEffect vs Lifecycle Methods

In CBR, we have 3 major methods that replace useEffect, which we know acts differently depending on its second argument, the dependencies list

| useEffect arg 2 equals...     | when useEffect function runs                                 | CBR equivalent                                            |
| ----------------------------- | ------------------------------------------------------------ | --------------------------------------------------------- |
| nothing                       | as soon as page loads<br />When the component gets re-rendered | ??                                                        |
| empty array                   | as soon as page loads                                        | `componentDidMount()`                                     |
| array containing dependencies | as soon as page loads<br />When dependency values get changed | `componentDidUpdate()` with if checks for each dependency |
| useEffect debouncing          | after a time delay, to help with performance                 | `componentWillUnmount()`                                  |

FROM UDEMY LESSON:

![image-20210823203306554](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210823203306554.png)

#### componentDidUpdate

The code in this block runs when its surrounding class component gets re-evaluated after a state change

```react
componentDidUpdate(prevProps, prevState) {
    // run code based on...
    // whether the props fed to this component change, OR the state does
}
```

- We use conditional statements to dictate what actions should occur depending on which part of the state or props gets changed
- The conditional statements are needed or else this method causes an infinite loop
  Otherwise, the code in this block runs on ever component re-evaluation

EXAMPLE 1: Run some code if a property of the state value object changes

```react
class UserFinder extends Component {
  constructor() {
    super(); // need for "this" usage
    this.state = {
      // starting values will be updated
      filteredUsers: this.DUMMY_USERS,
      searchTerm: "",
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.searchTerm !== this.state.searchTerm){
      // We only want to execute this code if the searchTerm changed
      alert("The searchTerm KVP of the state object changed")
    } 
  }
  // ... other stuff not shown
}
```

EXAMPLE 2: Run code if a certain prop this component receives changes in value:

```react
  componentDidUpdate(prevProps, prevState) {
    // We only want to execute this code if the searchTerm changed
    if (this.props.userID !== prevProps.userID) {
      alert("The searchTerm KVP of the state object changed")
    } 
  }
```



#### componentDidMount

Runs code when the component gets initially rendered, then never again (on startup only)
If possible, try to handle on startup inside your constructor - for performance's sake

```react
class UserFinder extends Component {
  constructor() {
    super(); // need for "this" usage
    this.DUMMY_USERS = [
      { id: "u1", name: "Max" },
      { id: "u2", name: "Manuel" },
      { id: "u3", name: "Julie" },
    ];
    this.state = {
      // starting values will be updated
      filteredUsers: [],
      searchTerm: "",
    };
  }
  //% Run on startup only
  componentDidMount() {
    this.setState({ filteredUsers: this.DUMMY_USERS });
  }
  // ... rest not shown
}
```

In the above snippet, we define a property called `filteredUsers` in the state object

- On startup, we set that equal to DUMMY_USERS, another property in the constructor
- This action is pretty pointless, since we could set it equal to that to begin with
  However, let's imagine that DUMMY_USERS was some data you pulled form an API instead

#### componentWillUnmount

The code in this method runs when an instance of the component is removed from the DOM
If we remove 3 instances, the code there will be run 3X

```REACT
class UserFinder extends Component {
  constructor() {
    super(); // need for "this" usage
    this.DUMMY_USERS = [
      { id: "u1", name: "Max" },
      { id: "u2", name: "Manuel" },
      { id: "u3", name: "Julie" },
    ];
    this.state = {
      // starting values will be updated
      filteredUsers: [],
      searchTerm: "",
    };
  }
  //% Run on startup only
  componentDidMount() {
    // sets filteredUsers in state object equal to DUMMY_USERS
    this.setState({ filteredUsers: this.DUMMY_USERS });
  }
  //% Run if an instance of this component gets removed from the DOM
  componentDidUnmount(){
    console.log("removed a user!")
  }
  // ... rest not shown
}
```

![image-20210824152957274](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210824152957274.png)

![image-20210824153152395](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210824153152395.png)

#### Demo

> Chapter-wide-repo:	commit 167

componentDidUpdate and componentDidMount:	UserFinder.js
componentWillUnmount: User.js



### Context API with Classes

The way we set up our context file remains the same, but using the shared data across our project differs in CBR - we can't rely on the useContext hook anymore

> Chapter-wide-repo:	
>
> commit: Class Based Context API Demo 1		(covers M1)
> commit: Class Based Context API Demo 2		(covers M2)
> Either commit shows how to access data in a Functional Component in App.js

Learned this lesson from: [ReactJS Classy Context API](https://www.youtube.com/watch?v=ch8kiuRJc7I)

#### Setting up the Context File

EXAMPLE:
You can place any variables containing anything you want inside the constructor
The methods you want to share will be different also

```react
import React, { Component } from "react";
// Exported as default @ bottom. Needed to access data in other files
const AuthContext = React.createContext(); 

export class AuthProvider extends Component {
  constructor() {
    super();
  }
  // Place all stateful variables you wish to share here
  state = {
    isAuthenticated: false,
  };
  // Place all methods you wish to share here
  loginMethod = () => this.setState({ isAuthenticated: true });
  logoutMethod = () => this.setState({ isAuthenticated: false });

  // GATHER EVERYTHING IN render() block ...
  render() {
    // Grab anything you want from the state object via destructuring
    const { isAuthenticated } = this.state;
    // Grab any method you want from the class via destructuring
    const { loginMethod, logoutMethod } = this;
    //% Group everything you plan on sharing into 1 object
    const distribution = { isAuthenticated, loginMethod, logoutMethod };
      
    return (
      <AuthContext.Provider value={distribution}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
export default AuthContext; // from line 3
```

index.js

```react
import AuthContext, { AuthProvider } from "./store/AuthContext";
ReactDOM.render(
  <AuthProvider> 
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
```

Each child component within these AuthProvider tags has access to the distribution object containing all our context variables



#### Access Data in Class Component: M1

There are 3 ways to grab data from our context file created using classes
This one's the simplest

UserFinder.js from lesson demo

```react
//$ PART 1: import context variables
import AuthContext from "PATH-TO-CONTEXT-FILE" 

class UserFinder extends Component {
  // PART 2: This line lets you access any context var via this.context.varName
  static contextType = AuthContext; 
  constructor() {
    //! context API vars are not defined when the constructor is initially parsed
    super(); 
    this.state = {
      filteredUsers: [], // will equal "users" from context file later
      searchTerm: "",
    };
  }
  //% Run on startup only
  componentDidMount() {
    //! The context API variables are defined here though (CONTEXT USED HERE)
    this.setState({ filteredUsers: this.context.users });
  }
  // rest of class not shown, but we can access context vars when needed
}

export default UserFinder;
```

TLDR:

1.  import AuthContext from the context file
    `import AuthContext from "../store/AuthContext"`
2.  Place `static contextType = AuthContext` above the constructor
3.  Access the context variables within your class via `this.context.varName`
    Will not work inside the constructor

#### Access Data in Class Component: M2

This method is the exact same as the first- with one key difference
Get rid of step 2 and replace it with the following at the very bottom:

```
currentClassComponentName.contextType= AuthContext
```

UserFinder.js from lesson demo
Part 2 now takes place below the component instead of within, with different syntax

```react
//$ PART 1: import context variables
import AuthContext from "PATH-TO-CONTEXT-FILE" 

class UserFinder extends Component {
  constructor() {
    //! context API vars are not defined when the constructor is initially parsed
    super(); 
    this.state = {
      filteredUsers: [], // will equal "users" from context file later
      searchTerm: "",
    };
  }
  //% Run on startup only
  componentDidMount() {
    //! The context API variables are defined here though (CONTEXT USED HERE)
    this.setState({ filteredUsers: this.context.users });
  }
  // rest of class not shown, but we can access context vars when needed
}

// PART 2: This line lets you access any context var via this.context.varName
UserFinder.contextType= AuthContext
export default UserFinder;
```

ONE LAST ALTERNATIVE METHOD:  Consumer tags 
It's more limited, verbose, and uglier so I skipped it
The methods shown already should be enough 

#### Access Data in a Functional Component

We might have our context file be created using classes and still want to use the data in a functional component

App.js from lesson demo

```react
import React from "react";
import AuthContext from "PATH-TO-CONTEXT-FILE" // import from context file
function App() {
  // Extract variables from AuthContext via the useContext hook
  const {isAuthenticated} = React.useContext(AuthContext) // use as useContext arg
  console.log("login status currently...", isAuthenticated)
  return (
    <div>
      <UserFinder />
    </div>
  );
}

export default App;
```



### Error Boundaries Part 1: Basics

Sometimes errors that fatally crash our website are unavoidable- despite how well a site is coded

- A 3rd party server hosting information we must fetch might temporarily go down
- Our users may enter a subway and disconnect from their internet service

#### Purpose

In situations where errors are possible, we'd like to catch our errors elegantly instead of having users see a cryptic error message only a dev could read

- Error boundaries are "fallback UI's" that render whenever a fatal error is caught inside a React component that would normally cause the whole site to crash
- This is similar to the try/catch methods we've seen used in JS, but the difference is that we handle errors in a different file than the one where the fatal crash originated from

HOW TO SPOT ERROR BOUDNARY FILES:

- An error boundary is just an ordinary class component which uses `componentDidCatch()` or `static getDerivedStateFromError(error)` 
- This is the one thing class components can handle that functional ones cannot, for now



#### Error #1: Creating Error Boundaries

> Chapter-wide-repo:	commit 170B

DEMONSTRATION:
Will crash on startup unless you comment out line 12 in Users.js
The image shows what appears if you do that	

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210825063344946.png" alt="image-20210825063344946" style="zoom:80%;" /> ![image-20210825063822987](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210825063822987.png)

——————————————————————————————————————————————————————

ErrorBoundary.js

```react
import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(errorObj) {
    //% When/if an error's caught, change this state KVP to true
    console.error(errorObj);
    this.setState({ hasError: true });
  }
  render() {
    //% Render specific JSX if an error is caught
    if (this.state.hasError) {
      return <p>Something went wrong, please try again!</p>;
    }
    //% If no error is present, let all components render normally
    return this.props.children;
  }
}
```

UserFinder.js

```react
class UserFinder extends Component {
	render() {
    return (
      <ErrorBoundary>
        <div className={styles.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
          <Users users={this.state.filteredUsers} />
        </div>
      </ErrorBoundary>
    );
  }
}
```

Users.js
Normally, an error like #1 wouldn't be placed like this, but the outcome's the same and we're doing it to see our boundary in action (we're baiting a site crash on purpose)

```react
class Users extends Component {
  constructor() {
    super(); // need for "this" keyword usage
    this.state = { showUsers: true, hasError: false };
    //! ERROR 1: We create an error as soon as this component runs
    throw new Error("I crashed!");
  }
  // this will get handled in ErrorBoundary.js thanks to the wrapped tags in UserFinder.js
}
export default Users;
```

ERROR #1 AND #2 DESCRIPTIONS:
Error 1 is handled in this lesson while error 2 is handled in the one that follows

- Error 1 simply runs as soon as Users.js is parsed
- Error 2 is caused by pressing the button
  Since the error originates from an event handler, we use try/catch to render a graceful crash page

CREATING ERROR SCENARIOS:

- You may have to use a few tricks to generate errors deliberately in your code, just to see if your error boundaries are working and look nice
- After these 2 points are affirmed, delete your intentional bugs

#### First Component Gacha

If you wrap error boundary tags in `UserFinder`, then any errors detected there will not be redirected to your error boundary file

Errors inside UserFinder will have to be handled a diff way ![image-20210825062620002](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210825062620002.png)

#### Viewing Boundaries as you Code

- During development, your fallback UI will only flash for a moment before the React error screen appears- but this behavior stops once the build is ready for production
- To see your fallback UI while coding, just X out the error screen using the upper right symbol

![image-20210825062838033](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210825062838033.png)

![image-20210825062859611](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210825062859611.png)

#### Error #2: Handling Errors in Event Handlers

> Chapter-wide-repo:	commit 170A

- Event handlers and async code are 2 common things you'll encounter than error boundaries simply do not work on
- Use traditional try catch statements to handler errors inside event handlers

![image-20210825045322968](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210825045322968.png)

——————————————————————————————————————————————————————
Users.js in demo	-	all irrelevant code has been removed

```react
class Users extends Component {
  constructor() {
    super(); // need for "this" keyword usage
    this.state = { showUsers: true, hasError: false };
  }
  //~ ----------------------------------------------
  toggleUsersHandler() {
    //! ERROR 2:
    //! We rig the toggle button handler to throw an error on purpose
    try {
      throw new Error("Shouldn't have pressed that, bucko");
    } catch (error) {
      this.setState({ hasError: true });
    }
  }
  //~ ----------------------------------------------
  render() {
    if (this.state.hasError) {
      return <h2>A wild error has appeared inside an event handler!</h2>;
    }
    return (
      <div>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          #2: Throw a deliberate error 
        </button>
      </div>
    );
  }
}
export default Users;
```



### Error Boundaries Part 2: Theory + Error Tag Location Select

#### In Professional Projects...

ERROR LOGIC:
Instead of always running the same JSX anytime anytime any kind error is caught, you may want to run logic on the error object that `componentDidCatch()` has access to

- The error type may entice you to write a less vague error message
- Perhaps you'd want to send the error up to a server for analytics

MULTIPLE ERROR BOUNDARIES:
You'll probably want to create more than 1 error boundary file

Create one for every group of components that may require the same error message being rendered onto the screen- along with some visual pleasantries

ALT METHOD:
You may see some people using `static getDerivedStateFromError()` to do what we did here
Demonstrated in the following lesson

#### Where to Place Error Tags

HOW TO WRAP:

```React
// STEP 1: import errorBoundary tags
import ErrorBoundary from "PATH-TO-BOUNDARY FILE" 

function Subcomponent(props){
    // STEP 2: Wrap error tags around the components that need error protection
    // If comp is class based, wrap the tags in the render return section
    return (
      <ErrorBoundary>
        <div className={styles.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
          <Users users={this.state.filteredUsers} />
        </div>
      </ErrorBoundary>
    );
}
```

——————————————————————————————————————————————————————
PICKING THE RIGHT PARENT COMPONENT
You can wrap a high level component like App.js with error boundary tags, but that's impractical

- Multiple files means you'll have many types of errors that could occur for different reasons
- Maybe you want a generic `"Something went wrong"` for 1 component tree branch, but want `"Could not retrieve data. Please try again with better connection"` on another

#### Error Codes

When making HTTP requests, the fetch API or alternative you use will return a response object

- Inside, you'll find a KVP that describes how the request went
- You should understand what HTTP response status codes mean, to discern what happened
  Error 404 vs Error 400 for instance

REFERENCE THIS: 
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

CODES CHANGE PER SCENARIO:
Error 404: You try searching an API for something that isn't there
Error 415: Unexpected media type

### Error Boundaries Part 3: Selectively using Fallback UI

Understand that every component wrapped between Error Boundary tags will not render- including those further down the branch from you

- Sometimes, stopping an entire branch of components from rendering is too drastic
- Maybe you'd like only a select few components to be replaced by your fallback UI

#### Why Replacing Specific Components with Fallback UI Matters

Imagine you're coding for Amazon, and 1 of 80 products fails to render
You would not want all other 79 products to be replaced with a "something went wrong" screen

Visualized: [ReactJS Tutorial - 32 - Error Boundary - YouTube](https://www.youtube.com/watch?v=DNYXgtZBRPE)

#### Selective Fallback UI Challenge:  Description

> Chapter-wide-repo:
>
> START: hero setup 1
> END: hero setup 2

We have a simple list of characters from comics- some are heroes and 1 clearly isn't

- Each "hero" entry is created by a custom component, Hero.js
- We set it up so that component throws an error anytime someone provides it a name prop that equals "Joker"
- Render an error message on top of the clown's entry, but leave the other entries rendered onscreen

 ![image-20210825072343747](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210825072343747.png)  ![image-20210825072343747](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210825072515127.png)  -> ![image-20210825072710731](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210825072710731.png)

#### Selective Fallback UI Challenge: Execution

App.js

```react
import ErrorBoundary from "./store/ErrorBoundary";
import Hero from "./components/Hero";
function App() {
  return (
    <div>
      <ErrorBoundary><Hero name={"Batman"} /></ErrorBoundary>
      <ErrorBoundary><Hero name={"Superman"} /></ErrorBoundary>
      <ErrorBoundary><Hero name={"Joker"} /></ErrorBoundary>
    </div>
  );
}
```

- Notice how each instance of `<Hero>` has its own error tags wrapping around it
- Now individual entries get replaced instead of the entire list being axed by our fallback UI

——————————————————————————————————————————————————————
ErrorBoundary.js

```react
import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(errorObj){
    console.error(errorObj)
    //% Update the state as soon as an error registers
    return { hasError: true };
  }
  render() {
    //% Render specific JSX if an error is caught
    if (this.state.hasError) {
      return <p>That ain't no hero</p>;
    }
    //% If no error is present, let all components render normally
    return this.props.children;
  }
}
```

——————————————————————————————————————————————————————
Hero.js

```react
function Hero({name}) {
  if(name==="Joker") throw new Error() // our error baiting
  return (
    <p>{name}</p>
  )
}
```



#### Replace a Group of Components w/ Fallback UI

If you wanted the entire list of heroes to be replaced by our fallback UI, you'd type this...

```react
  return (
    <div>
      <ErrorBoundary>
        <Hero name={"Batman"} />
      	<Hero name={"Superman"} />
      	<Hero name={"Joker"} />
      </ErrorBoundary>
    </div>
  );
```



# GET Requests with fetchAPI

We're going to learn how... 

1. To connect our React app to external back-ends
2. React interacts with other databases behind the scenes
3. To handle errors and loading states

> CHAPTER-WIDE-REPO:
> [Jason2B3/movies_test (github.com)](https://github.com/Jason2B3/movies_test)



### How to Connect to a Database

React apps and browser-side apps in general should never directly talk to a database

- Browser-side code can be easily read by people who open up the dev tools
  This is why we don't use localStorage to hold any sensitive information
- For this reason, we never fetch then store data by establishing a connection between our front end and a database- the 3rd party will be able to see all our data

#### The Backend Solution

Use a backend App to communicate with the database you need to pull information from

- Since our backend is hosted on a server somewhere, the 3rd party will not get access to any of our details
- Any server side language will suffice- NodeJS, PHP, ASP.NET

#### Strategies for making GET Requests to Pull Data

WHAT WE LEARN IN THIS CHAPTER

1. fetch API with then chaining
2. fetch API with async await functions (ES7 and beyond)

ALTERNATIVES: [How to Fetch Data in React: Cheat Sheet + Examples (freecodecamp.org)](https://www.freecodecamp.org/news/fetch-data-react/)

1. Axios library
2. Custom React Hook useFetch



### fetchAPI Refresher Part 1: then Chaining

For a more detailed explanation, read JS Notes Part 2's chapter on async programming
I'm covering basics here, but there is more to know

#### How Promises Work

- Fetch API calls return promises, that get rejected only if we lose connection mid-call
  When a call is completed we say it is resolved
- A resolved promise returns a response object, which you should look inside of to see what the API you're pulling from gives back to you
- `responseObject.ok` tells you if you made the call properly using a Boolean
  `responseObject.ok = false` implies you made a fetch API call with a bad link or search term

For example, in the Rest Countries API, you can search for different nations to pull data for.
If i attempt to pull data for `AlienUtopia`, the promise is resolved but `responseObject.ok = false`

#### then catch finally

then()
When you return something inside a then method, that will be the fulfillment value of that promise
So `return response.json()` will equal  the `data` argument in the next then method

catch()
You should also have a catch method to handle any errors that are thrown in the chain
Throw errors where you expect something could feasibly go wrong, and catch will handle it

finally()
Place this at the very the end of the chain, to make code run after all the then method operations
Code runs regardless of whether promises are rejected or fulfilled

#### Demo

```JS
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

This code implemented and refactored: https://jsfiddle.net/JasonXtuyotech/z3gcbrLj/3/



### fetchAPI Refresher Part 2: Async Await

By writing asynchronous functions, we can type code that looks sequential, but isn't
This method accomplishes what then chains does, but in a prettier way

#### Async Await Key Concepts

The `await` keyword stops function execution until the operation the word is assigned to completes
We can even use async functions as event handlers!

WHEN TO USE `await`

1. When you make the initial fetchAPI call
2. When you parse the response object with JSON
3. Any other operations that you know are strictly asynchronous in nature

#### Parallel Promises

For examples of how to use parallel promises, check out JS Notes Part 2

- Since await freezes function execution, it's smart to run promises at the same time to help speed things along performance-wise
- Remember not to run promises that are dependent on each other in parallel

THEORETICAL SCENARIO:
We have 3 fetchAPI calls to make (A B C)
Call C relies on call B's result... so what do we do? Run A and B in parallel, then make C await B

#### Boiler Plate 

```js
const test1 = async function () {
  console.log("PLACE ACTIONS YOU WANT TO HAPPEN BEFORE THE TRY BLOCK HERE")
  try {
    const result = await fetch(
      // FETCH API LINK HERE
    );
    console.log(result)
    if (!result.ok) throw new Error("CUSTOM ERROR MESSAGE"); // don't forget
    let parsedResult = await result.json();
    // DO WHAT YOU WANT WITH YOUR SUCCESSFULLY FETCHED DATA
    console.log("PLACE ACTIONS YOU WANT TO HAPPEN AT THE END HERE")
    return {} // reorganized data
  } catch (err) {
    console.error(err)
    // ACTIONS TO TAKE AFTER A PROMISE REJECTION WILL VARY
  }
};
test1();
```

- The catch block will act just like a `.catch()` method at the end of a promise chain with `.then()`. Inside there, you define what should happen when an error occurs
- Throw new errors at code locations where there's potential for things to go wrong

THE SECTION BELOW CATCH {}
If we have a return statement in the try block, this code here won't be reached
If you return a value from your async function, place any last operations at the bottom of the try block



#### Demo: Return Values from Async Functions

We'll need to access what we return from our async functions on the global scope, and we can't do that as easily as you'd think since async functions finish after global code is parsed

BE AWARE: If you're dealing with an array of promises, you'll need to use a Promise combinator

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
countryData('Canada') 
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
  // Anything below try/catch occurs AFTER the promise is settled- like finally()
  // The promise can be accepted or rejected, and the lines here will still run
  console.log('MSG 2: Test complete');
})();
```

before the would-be then() chain
The async function block that is above `try{}`

then()
The code inside the async function try block

catch()
The catch block of the try/catch duo

finally()
The part of the async function block that is below `catch{}`
Is not reached if you have a return at the end of your then() chain

### Sending GET Requests with fetchAPI + React

There are many ways to fetch data, but in this lesson we will focus on using the fetchAPI

#### Mini Project Description

> [Jason2B3/movies_test (github.com)](https://github.com/Jason2B3/movies_test)
>
> commit 175A: then chain
> commit 175B: async function
> commit 175C: renaming response object keys

We created a website that leverages the TVMAZE API, and built it 3 diff ways

- When we enter something into the search field, it retrieves a show with a similar/equal name and presents the poster as soon as we hit the button
- Once the data is retrieved successfully, it updates a stateful variable which we use to present the poster, or nothing at all (depending on its value)

![image-20210826052001889](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210826052001889.png)

#### via then Chaining 

Chaining then methods works the same way in functional React as it does in vanilla JS- just place all the code inside a component

App.js 		(then chain only)

```react
  function showResearch(query) {
    fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}`)
      .then((response) => {
        // If search works: Parse JSON data
        // If search fails: Throw an error with a pertinent message
        if (!response.ok) throw new Error("No shows found in the search results");
        return response.json();
      })
      .then((parsedData) => {
       	// Log the response object, then update the offscreen stateful variable
        console.log(parsedData);
        setPoster((prevState) => [...prevState, parsedData.image.medium]);
      })
      .catch((errorObj) => {
        alert(errorObj);
        console.error(errorObj);
      });
  }
```

The `poster` Variable is offscreen, but it's an array that we use to render an image on our site

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210826051846712.png" alt="image-20210826051846712" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210826051900631.png" alt="image-20210826051900631" style="zoom:80%;" />

#### via Async Await Functions

```react
  async function showResearch(query) {
    try {
      const result = await fetch(
        `https://api.tvmaze.com/singlesearch/shows?q=${query}`
      );
      // If search fails: Throw an error with a pertinent message
      if (!result.ok) throw new Error("No shows found in the search results");
      // If search works: Parse JSON data
      const parsedData = await result.json();
      console.log(parsedData); // log response object for a later subsection
      // Update a stateful variable used to render the poster in JSX
      setPoster((prevState) => [parsedData.image.medium]);
    } catch (errorObj) {
      alert(errorObj);
      console.error(errorObj);
    }
  }
```

The next lesson directly continues off this one

### Reorganizing Fetched Data

- Sometimes the API returns a response object that has KVP's with names you don't like
- You'll likely only need a few bits of data from this object, so save them locally and rename the KVP's to what you'd prefer

> ![image-20210826055015020](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210826055015020.png)
>
> I've pointed out the bits of data we'd like to save locally from the TVMAZE response object
> Will be renaming the keys on almost all of them

PROCEDURE:
Return an object at the end of your then chain or async function
Use your own key names, then set them equal to values in the returned response object

App.js 		(parts that matter only)

```react
  // YES, async functions can be used as event handlers (who knew?)
  const btnHandler = async function (e) {
    // vv  will equal the return object at the end of our showResearch function
    const showInfo = await showResearch(inputRef.current.value); 
    console.log(showInfo);
    // If we wanted, we could save this inside a stateful variable
    inputRef.current.value = ""; // clear input fields
  };

  async function showResearch(query) {
    try {
      const result = await fetch(
        `https://api.tvmaze.com/singlesearch/shows?q=${query}`
      );
      if (!result.ok) throw new Error("No shows found in the search results");
      const parsedData = await result.json();
      console.log(parsedData);
      setPoster((prevState) => [parsedData.image.medium]);
      return {
        // Time to rename shit!
        showID: parsedData.id,
        title: parsedData.name,
        score: parsedData.rating.average,
        genre: parsedData.type,
      };
    } catch (errorObj) {
      alert(errorObj);
      console.error(errorObj);
    }
  }
```

![image-20210826060440842](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210826060440842.png)

Our data is now saved into a much smaller object with renamed keys
If we wanted to, we could save it into a stateful variable so we could use it in the rest of our site



### Loading States and Error Handling

Sometimes fetching and rendering data can take some time. 
Loading spinners or "in progress" messages help the users understand why they're waiting

#### Approach

1. Set a stateful variable... `queryResult` for example
   I'd suggest using useReducer so you can code using more complex logic
2. Set the `queryResult` equal to success, failure, pending at different parts in your async ƒ()
3. Render JSX content conditionally, depending on the value of your stateful loading variable
   No need to write 2 different JSX sections - just include some conditional content via placeholders

Remember, you need a fallback UI or failure text in case your http request fails
Make it so your loading spinner/text disappears when your fetchAPI call doesn't return anything useful

#### Mini Project Explanation

We're continuing development on our app that presents a poster for the show/movie we enter into the field- and we're adding loading text to it now

We want our poster display area to have 4 different states
To implement this complex logic, we'll manage state with useReducer

Start state: `Search for a movie or show`
Pending state: `Searching for media...`
Success state: Display the poster
Failure State: `No search results found!`

> [Jason2B3/movies_test (github.com)](https://github.com/Jason2B3/movies_test)				commit 177

#### Mini Project Demo

App.js 		(parts that matter)

```react
  const [loadState, dispatch] = useReducer(reducerFN, {
    queryResult: undefined, // SET STARTING STATE
  });  
  async function showResearch(query) {
    dispatch({ type: "pending" }); // SET PENDING STATE
    try {
      const result = await fetch(
        `https://api.tvmaze.com/singlesearch/shows?q=${query}`
      );
      if (!result.ok) throw new Error("No shows found in the search results");
      const parsedData = await result.json();
      // Now take steps to render your poster
      setPoster((prevState) => [parsedData.image.medium]); // update poster array
      dispatch({ type: "success" }); // SET SUCCESS STATE
      return {
        // Time to rename shit!
        showID: parsedData.id,
        title: parsedData.name,
        score: parsedData.rating.average,
        genre: parsedData.type,
      };
    } catch (errorObj) {
      dispatch({ type: "failure" }); // SET FAILURE STATE
    }
  }
  return (
    <React.Fragment>
      <section>
        {loadState.queryResult === undefined && <p>Search for a movie or show!</p>}
        {loadState.queryResult === "pending" && <p>Searching for media...</p>}
        {loadState.queryResult === "failure" && <p>No search results found</p>}
        {loadState.queryResult === "success" && <img src={poster[0]} />}
      </section>
    </React.Fragment>
  );
```

We use execute if true statements to render data depending on what our queryResult state value is
As described earlier, we have 4 possibilities

#### Outcome

Test it out yourself to see the other possible messages

On startup: ![image-20210826184443094](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210826184443094.png)

When we submit some nonsense: ![image-20210826184403662](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210826184403662.png)



### fetchAPI Request with useEffect

In previous lessons we've stuck to making GET requests after the user presses a button.
This won't always be the case. 

- Oftentimes you'll need to do that as soon as your webpage starts up, or when a certain stateful value changes as a result of the user's actions
- To make fetchAPI requests under specific circumstances, you'll have to place your then chain or async await function call inside of useEffect or lifecycle methods if you're coding with CBR

#### Mini-Project Description

> [Jason2B3/movies_test (github.com)](https://github.com/Jason2B3/movies_test)				commit 179

We're continuing our project from the previous lesson

- We already have the button fetch then display a movie poster when you search something
  The async function we created that does this is named `showResearch` 
- Now, we want to start our application with a pre-selected poster being displayed right at the start

![image-20210826211616794](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210826211616794.png)

#### fetch on Startup: Part 1

The simplest way to do this is to rely on useEffect with an empty array dependency. 
This way, all our code in the useEffect function scope runs on startup

App.js	(what matters)

```react
// Start your application by showing this poster on startup
  React.useEffect(()=>{
    showResearch("Erased")
  },[])

  async function showResearch(query) {
    dispatch({ type: "pending" }); // render loading message
    try {
      const result = await fetch(
        `https://api.tvmaze.com/singlesearch/shows?q=${query}`
      );
      if (!result.ok) throw new Error("No shows found in the search results");
      const parsedData = await result.json();
      // Now take steps to render your poster
      setPoster((prevState) => [parsedData.image.medium]); // update poster array
      dispatch({ type: "success" }); // End loading message
      return {
        // Time to rename shit!
        showID: parsedData.id,
        title: parsedData.name,
        score: parsedData.rating.average,
        genre: parsedData.type,
      };
    } catch (errorObj) {
      dispatch({ type: "failure" });
    }
  }
```

#### Should Address this Issue

Although our code in Part 1 is fully operational, there is one improvement we should make for the sake of performance and professionalism

| if we refuse to...                                           | consequence                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| add `showResearch` as a useEffect dependency                 | `showResearch` will run unnecessarily whenever a stateful variable's updated in our JS file, b/c it's a reference type that's plagued by the function recreation issue |
| protect `showResearch` from function recreation (after we add it as a dependency) | infinite loops will crash our app                            |

SOLUTION: 
Add the `showResearch` function as a useEffect dependency, but protect it from function recreation using useCallback ... or else

#### fetch on Startup: Part 2

App.js (what matters)

```react
  // Make it so this function is created ONE TIME, on startup
  const showResearch = React.useCallback(async function (query) {
    dispatch({ type: "pending" }); // render loading message
    try {
      const result = await fetch(
        `https://api.tvmaze.com/singlesearch/shows?q=${query}`
      );
      if (!result.ok) throw new Error("No shows found in the search results");
      const parsedData = await result.json();
      // Now take steps to render your poster
      setPoster((prevState) => [parsedData.image.medium]); // update poster array
      dispatch({ type: "success" }); // End loading message
      return {
        // Time to rename shit!
        showID: parsedData.id,
        title: parsedData.name,
        score: parsedData.rating.average,
        genre: parsedData.type,
      };
    } catch (errorObj) {
      dispatch({ type: "failure" });
    }
  }, []);

  // Start your application by showing this poster on startup
  React.useEffect(() => {
    showResearch("Erased");
  }, [showResearch]);
```

MINOR DETAILS EXPLAINED:

- We move useEffect down after the `showResearch` function because we changed from a function declaration to an expression
- This was the only way we can implement useCallback, as far as I know

![image-20210826221226214](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210826221226214.png)

Keeping Components more Lean:
We can define the async function in another file then import it to be called inside useEffect



# Firebase's Realtime Database

We use Firebase's Realtime Database to practice the 4 HTTP requests with a mock-backend 
Create a new project, turn on the Realtime Database, then change rules to this:

![image-20210917030956415](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210917030956415.png)

### Overview on Firebase and HTTP Requests

#### What is Firebase?

Fire base is a no-code backend service that makes building websites, desktop applications, and mobile apps easier by providing several features that are pre-prepared

[(1) Introducing Firebase - YouTube](https://www.youtube.com/watch?v=O17OWyx08Cg)

- Some of them include notifications, analytics tracking, authentication ... etc
- It's free to use basic functionalities, but you must pay to access higher level features
  It'll suffice for learning how to make POST requests on this chapter's dummy project 

#### HTTP Request Types

CRUD REVIEW from JS Notes Part 2 ▼	
Create Read Update Delete	(each operation has a dedicated http method)

|        | purpose                                      | safety | idempotent<br />(nothing changes if you perform it multiple times) |
| ------ | -------------------------------------------- | ------ | ------------------------------------------------------------ |
| GET    | Read or fetch data                           | safe   | Yes                                                          |
| POST   | Create data                                  | unsafe | No                                                           |
| PUT    | Update data<br />or create it if it DN exist | unsafe | Yes                                                          |
| DELETE | Delete data                                  | unsafe | Yes                                                          |



### How Data Changes & looks in Firebase

DESCRIPTION OF EACH TEST:

1. POST the following ___ to `data.json` 
2. GET all the content from that file
3. Log the fetched data to the console

Make sure to collapse nodes that you wish to look into 

- Every object or array sent to Firebase gets a unique ID generated for them
- Objects in Firebase just have their keys and values presented
- Arrays get their entry values preceded by index numbers

#### Arrays 

```react
const hardcodedData = 
      [ "critikal", "HIT", ["Kakarot", "Vegeta"], { uno: "NF", dos: "RJ" }]
```

![image-20210917032556115](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210917032556115.png) ![image-20210917032637825](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210917032637825.png) ![image-20210917035945142](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210917035945142.png)

#### Objects

```react
{ Jekyll: "hyde", Walt: "Heisenburg" }	
```

![image-20210917032122427](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210917032122427.png) ![image-20210917040355155](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210917040355155.png)   



#### Flat Values

```react
"downtime"
```

​						![image-20210917033329557](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210917033329557.png) ![image-20210917035047555](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210917035047555.png)

 

### Common Firebase Realtime Database Issues

We're not writing real backends yet, so we're using Firebase's Realtime Database to help imitate one
It can store data and allow us to use HTTP requests, as long as we configure it correctly

#### CORS Errors

![image-20210907172030819](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210907172030819.png)

1. Check if your database rules are set up to let you make edits freely with no security
   Normally a horrible idea, but it's fine for personal projects that no one will mess with

In Rules Tab:      ![image-20210907172217423](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210907172217423.png)

2. Make sure your firebase link is correct

In VS Code, you'll make your fetchAPI request using this link:
Do not forget to place a json file on the tail end of it, or else errors ensue

![image-20210907172426597](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210907172426597.png)

#### Testing for Error UI Renders

A simple way to test if your error-oriented JSX renders is to try making an HTTP request to a firebase link that you deliberately make incorrect

![image-20210907192854769](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210907192854769.png)





### POST Requests with Firebase: Mini Project Overview

#### What are POST Requests?

POST requests mean we are creating new data on a server hosted somewhere

EXAMPLE:
If a user successfully creates a profile using an email and password, we'll need to create one for them using a backend service of some kind, unless we write it ourselves of course



#### The Goal

Our Goal for this lesson and the next:

1. Send up data to the Firebase backend with POST requests
2. Retrieve it with fetch API

- Use the Realtime Database functionality Firebase offers to create a dummy backend
  It'll create a simple database with a convenient REST API for us
- We'll use a modified version of the fetch method to send data to this database that we can retrieve later on

Keep in mind that it will look like we're letting our Front end talk to the Firebase backend, but in actuality we aren't. Some things occur behind the scenes when we use the fetch API 

![image-20210829201310015](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210829201310015.png)

### POST Requests with Firebase: Execution

PRACTICALITY WARNING
Keep in mind this is not how we would do things in a professional setting. 
We are creating a fake/dummy backend with Firebase

#### Procedure

1. Create a new Firebase project with the Realtime Database
2. Grab the associated weblink
   Add JSON data to it using the fetch method inside your React project

![image-20210829230434639](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210829230434639.png)

![image-20210829230548623](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210829230548623.png)

- F3 points to data we pulled down fr/ a 3rd party API, after we reorganized it by changing key names
- The normal arrow points to what we added to the tail end of our Firebase link: `movies.json`
- This creates a JSON file in our database, on the first POST request
  Afterwards it adds new KVP's to the object inside that JSON file

3. Pull down your saved data from the database, at another point in your project
   Firebase will give it a very cryptic looking key name, by default

![image-20210829232835253](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210829232835253.png)

![image-20210829232653063](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210829232653063.png)

```
{
	crazyKey0: { showdata for Sons of Anarchy}
	crazyKey1: { showData for Mayans M.C }
}
```

#### Execution

The code is far too long to show here, so just take a look at the repo in the final output session
These are the most important parts of the entire project...

SENDING DATA TO REALTIME DATABASE: (must be in an async function)

```react
	const sendTo = await fetch(
    `https://react-firebase-realtime-ex-default-rtdb.firebaseio.com/movies.json`, {
          method: "POST", // Firebase creates a new resource in our dummy database
          body: JSON.stringify(data YOURE SENDING UP),
          headers: {
            "Content-Type": "application/json",
            // ▲▲ describes the content that will be set (needed for some backends)
          },
     });
```

![image-20210831014747280](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210831014747280.png)

- The firebase link changes depending on your project
- the `movies.json` can be named anything else
  As long as you pull down from the new JSON file it'll be fine

PULLING DATA FROM REALTIME DATABASE: (must be in an async function)

```REACT
	const response = await fetch(
        `https://react-firebase-realtime-ex-default-rtdb.firebaseio.com/movies.json`
      );
      if (!response.ok) throw new Error("Failed to fetch your submissions!");
      const data = await response.json();
```

![image-20210831014809800](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210831014809800.png)

#### Final Output

> Jason2B3/movies_test (github.com)	
> commit name: fixed the repeat poster bug

![image-20210830000123989](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210830000123989.png)

NOTES:

- The reducerFN controls what message gets rendered in JSX in this mini project
- We place `dispatch({ type: "success" })` in code blocks where our fetch calls work
- We place `dispatch({ type: "failure" })` in code blocks where our fetch calls don't
- We place `dispatch({ type: "pending" })` in code blocks that occur before we try to make our fetch calls

We don't place them everywhere- just in the functions or handlers that incite some sort of fetchAPI related action

BUGS:

- At the moment you can submit the same show to the Firebase backend multiple times
  Should fix that using the show ID that returns from the TVMAZE API response object 
- Cannot delete entries as of yet

### All HTTP Requests with Firebase

Keep in mind that none of these functions involve any error handling or pending/success/failure state management (can be helped with the useHttp hook)

> [firebase-practice/fetchFunctions.js](https://github.com/Jason2B3/firebase-practice/blob/master/src/components/fetchFunctions.js)		commit F1

#### Simple Demo Functions

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

ll

#### useHttp Versions

The useHttp hook will give these simple functions new abilities

1. Pending/success/failure state management

2. Error handling

- For a demonstration of how it can be used, go to the dedicated useHttp lessons in the "Custom React Hooks" chapter
- One of the last useHttp examples contains a project that uses all 3 http request types alongside firebase

### How Data's Stored in the Realtime Database

#### Randomly Generated Keys

- Each you make a POST request to a specific JSON file in a database, a random identifier key gets generated. 
- The value you include in the http request body is the value associated with your new key

```
Post the following using a standard text input field...
jello-shots			99			[0,1,2,3]		{ a: 1 }
```

![image-20211009162530765](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211009162530765.png) ![image-20211009162319431](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211009162319431.png)

Everything sent to Firebase was given as a string because we sent things to the backend with an input field- everything typed there is considered a string

#### Sending Non-string Data

You can send other data types like numbers and objects to the realtime database if you like
You'll have to adjust your post method though

EXAMPLE:
We're going to hardcode our data this time, but in a real application, you'd have to pass variables pointing to arrays or numbers into the firebase method (simple)

```react
export const firebasePOSTDIFF = async function (firebaseLink) {
  const hardcoded= [0,1,2] // is 99 later on 
  const postData = await fetch(firebaseLink, {
    method: "POST",
    body: JSON.stringify(hardcoded), // the data we're storing
    headers: { "Content-Type": "application/json" },
  });
  if (!postData.ok) throw new Error("Sending cart data failed");
  return null;
};
```

![image-20211009163357022](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211009163357022.png)

#### Arrays not Allowed (return2)

Firebase doesn't support array storage

- Look at the previous subsection's image- the "array" we store in Firebase isn't really an array
  It's an object with numbered keys 
- At best, we can store things similar to array in Firebase, then convert them into actual arrays right after we fetch them for our web apps later on

HOW TO USE ARRAYS IN FIREBASE:





# =====================

# Custom React Hooks

Custom hooks are regular functions that are allowed to contain stateful logic
We can use all the built-in react hooks in this function's scope, which cannot be done in regular ones

ONE TRICK TO REMEMBER USE-CASES:

- Sometimes you'll want to create utility functions that use react hooks- but that's not allowed since they only work inside component functions
- This is when React hooks are used (because they really are just React functions)

### Creating Configurable React Hooks

What our repo's project looks like at the start:

![image-20210827021226948](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210827021226948.png)

#### The Need

Sometimes we have components that perform the same tasks as others, with very minor differences

- In our first project, we have 2 components that display a number that changes in increments of 1
- The first counter component counts upward while the second counts down into the negatives

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210827020724207.png" alt="image-20210827020724207" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210827020758375.png" alt="image-20210827020758375" style="zoom:80%;" />

Each component function contains stateful variables, which is fairly common
Lets place the bulk of the logic into a reusable custom hook

#### How custom hooks Work

When you call a custom hook into a file, all of the hook's code within its main function block gets executed where you place it

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210827031304952.png" alt="image-20210827031304952" style="zoom:80%;" />

REUSABILITY:
You are free to reuse a custom hook as many times as you like. 

- If you use a custom hook in file A and file B, then each one of them gets their own version of the stateful variables present inside your hook's function- `counter` in this case
- They do not affect one another

RETURN LINE:
You are free to return whatever you want from a custom hook

- Return an array, object, set, flat value, string, number, Boolean ....etc
- When you import then call a custom hook inside another component, you can access that value via destructuring if needed- just like how you destructure useState
- When you return a flat value there's no need for destructuring- this is the case in example 1/2
  `let varName= useCustomHookName`



#### Procedure

1. Create a file in your folder to hold your custom hook

- Name it `use-Hookname` or something- in our project we decide on `use-Counter`
- The file name can be whatever you want, but this convention implies what the file holds
- It should also be similar to the component function name it'll contain

2. Create a regular functional component with a that begins with `use`
   This is a hard requirement
3. Make the component configurable using it's parameters
4. Use your custom hook inside any component you want
   They each get their own dedicated states that do not affect others

#### Example 1: Configurable Custom Hook

> [Jason2B3/customHookLearn1 (github.com)](https://github.com/Jason2B3/customHookLearn1)		commit 188

The forwards parameter changes which direction the setInterval method decides to increment
true === count up while false === count down

use-Counter.js

```js
function useCounter(forwards) {
  // forwards is a Boolean passed to this by App.js (true → count up, false → down)
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      //# Change the setCounter function depending on the forwards arg
      if (forwards) setCounter((prevCounter) => prevCounter + 1);
      if (!forwards) setCounter((prevCounter) => prevCounter - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [forwards]); // forwards is a prop, so we add it as a dependency

  return counter; // return a flat value from our hook
}
export default useCounter;
```

ForwardCounter.js

```react
// import the hook file's default export
import useCounter from "../hooks/use-Counter" 
import Card from "./Card";

const ForwardCounter = () => {
  const counterValue= useCounter(true)		// set to false to count down
  return <Card>{counterValue}</Card>;		// use the return value here
};
```

BackwardCounter.js

```react
// import the hook file's default export
import useCounter from "../hooks/use-Counter" 
import Card from "./Card";

const BackwardCounter = () => {
  const counterValue= useCounter(false) 	// set to false to count down
  return <Card>{counterValue}</Card>; 		// use the return value here
};
```

#### Example 2: More Flexible Custom Hooks

> [Jason2B3/customHookLearn1 (github.com)](https://github.com/Jason2B3/customHookLearn1)			commit 188 Ver 2

GOAL:
Obtain more control over what our hook does

- Make it so our hook's parameters decide what function gets implemented in setInterval
- Make the positive incrementor increment twice as much as the negative one

![image-20210827035505459](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210827035505459.png)

use-Counter.js

```react
function useCounter(arrowFN) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      //# The arrow function changing the counter state is now given as a parameter
      setCounter(arrowFN);
    }, 1000);
    return () => clearInterval(interval);
  }, [arrowFN]); // arrowFN is a prop, so we add it as a dependency

  return counter; // return a flat value from our hook
}
export default useCounter;
```

ForwardCounter.js

```react
// import the hook file's default export
import useCounter from "../hooks/use-Counter" 
import Card from "./Card";

const ForwardCounter = () => {
  const counterValue= useCounter((prevState)=>{
    return prevState + 10 // increment upwards by 10
  })
  return <Card>{counterValue}</Card>;
};

export default ForwardCounter;
```

BackwardCounter.js

```react
// import the hook file's default export
import useCounter from "../hooks/use-Counter"; 
import Card from "./Card";

const BackwardCounter = () => {
  const counterValue = useCounter((prevState) => {
    return prevState - 5; 	// increment downwards by 5
  });
  return <Card>{counterValue}</Card>;
};

export default BackwardCounter;
```



### Adhering to best Practices & Optimizing: Great EX.

> START:	commit 191
> END:		commit 192

#### Premise

At our starting point the app works fine, but has 1 minor flaw that we should address

![image-20210830210601612](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210830210601612.png)

We kept our dependency list here at App.js line 30 as an empty array
The fetchTasks function is a method extracted fr/ a custom hook created in useFetch.js

- We shouldn't lie to React about dependencies here, which means we'll have to add fetchTasks as a dependency- which causes infinite loop issues
- This occurs because of function recreation, which means we must dive into the useFetch file and start applying useCallback in places

### Custom Hooks: Tips & General Knowledge

#### Understand

1. You can only call custom hooks inside the component function's scope
   Can't call them inside of a callback function
2. You can return JSX from your hook, or variables via an object/array
3. You can use a custom hook multiple times in one file, as long as you rename the things you bring into your component

![image-20210902061655932](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210902061655932.png)

#### Tip: Return Arrays instead of Objects

When returning variables inside your custom hook, try to return via arrays whenever possible

- Destructuring arrays allows you to rename each entry without typing in anything extra
- This is less clean than destructuring objects, which forces you to state the old name before typing the new one- which can be a big deal when prettier gets involved

useInput

```js
function useInput(initialValue) {
  // whatever
  return [value, bind, reset];	// BY RETURNING AN ARRAY
  return { value, bind, reset }; // BY RETURNING AN OBJECT
}
```

Other file:

```react
function NameComponent(){
    const [nameValue, bindName, resetName]= useInput("") // BY RETURNING AN ARRAY
    const { value: nameValue, bind: bindName, reset: resetName } // RETURN OBJ
}
```



### useInput: Return JSX from Custom Hooks

You can also return JSX with your custom hooks, and it can be very useful for recycling logic on similar components like inputs

#### Why Inputs are a Prime Target for Custom Hooks

- All input fields will have you managing state in similar ways, so you may as well outsource the boiler plate code into a custom hook
- A few things will change each time- but this custom hook is flexible and can be customized 
  Labels, invalid entry messages, styling... etc

Keep in mind that your input custom hooks will likely look different for each project
This is meant to teach you how to create new ones in the future

#### useInput Code

What each parameter means:

|                  | explanation                                                  |
| ---------------- | ------------------------------------------------------------ |
| `inputValid`     | A useState variable that represents whether the input is valid or not |
| `verifyFN`       | The function we use to verify whether the field is valid or not |
| `label`          | The input label                                              |
| `invalidMessage` | A message you wish to appear when the input field fails verification |

useInput.js

```react
import React, { useState, useCallback } from "react";

function useInput(inputValid, verifyFN, label, invalidMessage) {
  const [inputValue, setInputValue] = useState("");

  // Conditional JSX and Classes (not set up for CSS modules yet)
  const inputClass = !inputValid ? "invalid" : "";
  let failureText = !inputValid ? (
    <p className="error-text">{invalidMessage}</p>
  ) : ""

  return (
    <div className="form-control">
      <label htmlFor="name">{label}</label>
      <input
        type="text"
        id="name"
        className={inputClass} // class name placed here
        value={inputValue}
        onBlur={(e) => verifyFN(e.target.value)} 
          // when you lose focus, verify if input's valid
        onChange={(e) => {
          setInputValue(e.target.value); // delayed state update
          verifyFN(e.target.value); // verify email with event obj instead of state
        }}
      />
      {failureText} {/* failure text appears under the input field */}
    </div>
  );
}

export default useInput;
```

#### Demo

Name.js 	(a component made for rendering an input field, and that's it)

```react
import React, { useState, useCallback } from "react";
import useInput from "./useInput";
export default function Name() {
  const [nameValidity, setNameValidity] = useState("untouched");
  const invalidMessage = "The entered name is not valid";
  const label = "Your name";
  const verifyName = useCallback(function (inputVal) {
    if (inputVal.trim() === "") {
      console.log("invalid");
      setNameValidity(false); // set to false if it's blank or whitespace
      return;
    }
    setNameValidity(true);
    console.log("valid");
    return;
  }, []);
  return useInput(nameValidity, verifyName, label, invalidMessage);
}
```

![image-20210919231624931](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210919231624931.png)

#### Styling with CSS Modules

In the useInput code, we dynamically assign classes for the input field
When the input does not pass verification, it gets assigned the "invalid" class

- When using CSS modules, style the inputs created by useInput.js through a new file named `useInput.module.scss`
- Assign `styles.className` or `classes.className` outside of the JSX section if possible
  It's easier this way, especially if you have multiple classes to assign at once

Before CSS Modules

```react
  // Conditional JSX and Classes (not set up for CSS modules yet)
  const inputClass = !inputValid ? "invalid" : "";
  let failureText = !inputValid ? (
    <p className="error-text">{invalidMessage}</p>
  ) : ""
```

After CSS Module Implementation

```react
  // Conditional JSX and Classes 
  const inputClass = !inputValid ? styles.invalid : styles.valid;
  let failureText = !inputValid ? (
    <p className={styles["error-text"]}>{invalidMessage}</p>
  ) : "" ; 
```

#### Project Example

This project utilizes useInput to render a form, while using CSS modules
Open it through the cart button

> [Jason2B3/mock_food (github.com)](https://github.com/Jason2B3/mock_food)				commit phase 2 fnale

### useFetch: 2 strats 

useFetch is a custom hook that's commonly used by React devs due to how much boiler plate is required to pull data from a 3rd party API

- While experimenting, I learned that you can apply useFetch in 2 distinct ways
- Choose whichever one works best in the scenarios you find yourself in

#### Method 1: useFetchMini

I made this up myself, FYI

```react
import React, { useCallback } from "react";

const useFetchMini = function () {
  //$ Fetch the JSON data from your Firebase back end
  const fetchInfo = useCallback(async function (url, errorMessage) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(errorMessage);
    const parsedData = await response.json();
    return parsedData;
  }, []);
  // we can now use this anywhere in our components in a single line
  return fetchInfo;
};

export default useFetchMini;
```

DESCRIPTION:
We outsource a small bit of boilerplate code for every fetchAPI call your project has
We do not outsource the entire async fetch function

![image-20210902064913982](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210902064913982.png)

ADVANTAGES
Is easy to apply to virtually any project with only a tiny bit of customization
Code looks nearly the same as it'd be without custom hooks, making it easy to get at first glance

DOWNSIDES
It outsources much less code than method 1

#### Demonstrate useFetchMini 

> [Jason2B3/movies_test (github.com)](https://github.com/Jason2B3/movies_test) 	commit L10

Compare the following image with the one with red arrows above
We outsourced a moderate amount of logic, but the length did not change much

FetchPosters.js

![image-20210902072102247](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210902072102247.png)



#### Method 2: useFetchMega

Tweak this custom hook for each situation you use it in- 
Not all fetchAPI calls you make will involve rendering lists afterwards

```react
import React, { useCallback, useReducer } from "react";
function reducerFN(state, action) {
  if (action.type === "success") return { queryResult: "success" };
  if (action.type === "failure") return { queryResult: "failure" };
  if (action.type === "pending") return { queryResult: "pending" };
  // If action.type is different than the above two options, return state as is
  return state;
}
const useFetchMega = function (config, successFN, errorFN = () => {}) {
  //% Set up stateful variable for loading
  const [loadState, dispatch] = useReducer(reducerFN, {
    queryResult: undefined,
  });
  //% Pull existing data down from your Firebase Backend
  const [loadedFlicks, setLoadedFlicks] = React.useState([]); // will hold show data

  const fetchFireHandler = React.useCallback(async function (e) {
    dispatch({ type: "pending" });
    try {
      //$ Fetch the JSON data from your Firebase back end
      const response = await fetch(config.url);
      if (!response.ok) throw new Error(config.errorMessage);
      const data = await response.json();
      // Use the component-specific success function
      let tempArray = successFN(data); //% create an array to update loadedFlicks
      setLoadedFlicks(tempArray); 
      dispatch({ type: "success" });
      return loadedFlicks
    } catch (error) {
      dispatch({ type: "failure" });
      errorFN()
      console.log("failure scenario engaged");
    }
  }, []);
  // Make the following accessible in your components
  return [loadState.queryResult, loadedFlicks, fetchFireHandler];
};
export default useFetchMega
```

DESCRIPTION:
Outsource entire async fetching function- this includes the state management and the fetchAPI call

- Every component the custom hook is used for needs to supply the custom hook a success and failure function as parameters. 
- They dictate what should happen with the data you fetch, regardless of fetch outcome
  You provide that function an argument that you know will contain meaningful data later on

![image-20210903032416087](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210903032416087.png)



#### Demonstrate useFetchMega

> [Jason2B3/movies_test (github.com)](https://github.com/Jason2B3/movies_test) 	commit L11 on the "useFetchMega" branch

Check FetchPosters.js and look at how much logic we outsourced

```react
import React, { useReducer, useCallback } from "react";
import useFetchMega from "../hooks/useFetchMega";

export default function FetchPosters() {
  // Success function for our custom hook "useFetchMega"
  const organizeData = useCallback(function (fetchedInfo) {
    // Take JSON obj, then push it into an array that starts empty
    let tempArray = [];
    for (const key in fetchedInfo) {
      tempArray.push({
        id: key,
        title: fetchedInfo[key].title,
        poster: fetchedInfo[key].poster,
        score: fetchedInfo[key].score,
      });
    }
    return tempArray;
  }, []);
  // Custom hook: fetches data and manages state
  // prettier-ignore
  let [loadState, loadedFlicks, fetchFireHandler]= useFetchMega({
    url: "https://react-firebase-realtime-ex-default-rtdb.firebaseio.com/movies.json",
    errorMessage: "Failed to fetch your submissions!",
  }, organizeData);


  return (
    <>
      <button className="pullDown" onClick={fetchFireHandler}>
        Fetch all stored posters
      </button>
      <section>
        {loadState === undefined && (
          <p>Pull down some posters from your backend, or send new ones up</p>
        )}
        {loadedFlicks.length === 0 && loadState === "success" && (
          <p>No shows saved at the moment</p>
        )}
        {loadedFlicks.map((obj) => {
          return <img key={obj.id} src={obj.poster} />;
        })}
      </section>
    </>
  );
}
```



### useHttp: Amplify Async Functions

#### Purpose

The useHttp hook provides simple async functions with the following capabilities...

1. Pending/success/failure state management

2. Error handling

Now, we don't have to tediously recode everything when you're trying to make HTTP requests in multiple areas in your project

CODE:	 [JSFiddle - Code Playground](https://jsfiddle.net/Jason2B3/8x0u2v73/1/)

#### The Reducer Function

```react
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null,
  }); // what gets managed by httpReducer function
```

It manages a state object containing 3 keys; data, error, status

|        | can equal                                                    |
| ------ | ------------------------------------------------------------ |
| status | `null "pending" "completed"`                                 |
| data   | `null` or data retrieved from HTTP request                   |
| error  | `null` or an error message that should be defined in your simple async function |

These KVP's are 3 out of 4 things returned from our useHttp hook. You will use them in whatever file you employ useHttp inside of to render JSX conditionally.

EXAMPLE:

| render the following     | under what condition?                                     |
| ------------------------ | --------------------------------------------------------- |
| error message            | `error!=null` and `status===completed`                    |
| no results found message | `error!==null` and `status===completed` and `data===null` |
| success message          | `error===null` and `status===completed` and `data!==null` |

WHAT MAY CHANGE PER PROJECT

- In the "no results found" category, data may not equal null  in every case where the http request results are insufficient-it should just not equal what you need it to
- You usually won't just be rendering messages that indicate the request succeeded or failed
  (Explained in a following subsection)

#### Purpose of useHttp Function

To put it simply, this function gives a simple async function extra capabilities

- Pending/success/failure state management
- Error handling

Outside of the useHttp.js file...

1. Define a simple async function that doesn't include these features
   It should still throw an error if the http request goes wrong, but don't handle the error itself
2. Feed it to useHttp so they have it, without tedious recoding if you have many of them

#### useHttp Function Arguments

```react
function useHttp(requestFunction, startWithPending = false) { ... }
```

Explanations:

| parameters         | equals                                                       |
| ------------------ | ------------------------------------------------------------ |
| `requestFunction`  | the simple async function with no pending/success/fail state management or error handling |
| `startWithPending` | a Boolean that decides whether the requestFunction you feed useHttp will have a pending state or not |

Remember, you won't render pending-related JSX for everything. 
Maybe you just want to render things on success or on failure

#### Return line Variables

useHttp returns 4 variables- `sendRequest, status, data, and error`
These will be destructured inside the component you call useHttp inside of

CONDITIONAL JSX

- Status, data, and error should be sued to determine what to render per each scenario
- Stick to the order of coding JSX for... `(pending) → error → no error but found nothing → success JSX`

UPGRADING SIMPLE ASYNC FUNCTIONS

- sendRequest() is the upgraded version of the simple async function you fed useHttp as parameter 1
  You'll be calling it in the React component useHttp's used in
- If the aforementioned function required X amount of arguments, that's how many sendRequest will require when you call it (equal arg rule)



### useHttp Examples

If you understand last lecture's theory, then using this custom hook is fairly simple

- Don't worry if you don't understand the code snippets entirely. 
- Each project we demonstrate this in has a lot of other things going on at once, and it'd be impossible to offer context while remaining concise

#### 2 cases you'll Encounter

|            | Manage returned useHttp variables... | Render data...                                    |
| ---------- | ------------------------------------ | ------------------------------------------------- |
| Scenario 1 | In the component you call useHttp    | In the component you call useHttp                 |
| Scenario 2 | In the component you call useHttp    | in a different component<br />(usually via Redux) |

Sometimes, you'll be in a situation where we need to call useHttp in 1 file, but wish to render content based on its returned variables elsewhere (Scenario 2)

#### Scenario 1 Explanation

> [Jason2B3/router_practice (github.com)](https://github.com/Jason2B3/router_practice)			
> components/pages/QuoteDetail.js

OBJECTIVE:

- Pressing the "Load Comments" button should make a GET request to our Firebase backend
- It should then render the `<Comments />` component by switching page routes

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210920074723317.png" alt="image-20210920074723317" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210920074745269.png" alt="image-20210920074745269" style="zoom:80%;" />

#### Scenario 1 Code

Simple async function`getSingleQuote`, defined in api.js then imported to QuoteDetail.js

```react
export async function getSingleQuote(quoteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
  const data = await response.json();
  // Must still throw an error when request fails
  if (!response.ok) throw new Error(data.message || "Could not fetch quote.");  
  const loadedQuote = {id: quoteId,...data};

  return loadedQuote;
}
```

QuoteDetail.js

```react
export default function QuoteDetail() {
  const match = useRouteMatch();
  const { sendRequest, status, error, data: loadedQuote} = useHttp(getSingleQuote, true); // renamed the data returned from useHttp

  // Get :quoteID that brought us to this page (route parameter value from App.js)
  const params = useParams();
  const quoteID = params.quoteID;
    
  //% Grabs a quote from Firebase everytime quoteID changes (or sendRequest)
  useEffect(() => {
    sendRequest(quoteID); 
      // upgraded asyncFN call should be inside useEffect
      // Since getSingleQuote() has 1 arg, so does sendRequest() (equal arg rule)
  }, [sendRequest, quoteID]); 

  //# Conditional Return JSX Area -----------------------------
  //# ORDER: pending → error → found nothing → success JSX
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner /> // render a spinner during the pending state
      </div>
    );
  }
  if (error) {
    return <p className="centered">{error}</p>;
  }
  if (!loadedQuote.text) return <p>No quote found!</p>;
  const pathToQuotesIDPage = match.url;
  const pathToCommentsPage = `${match.url}/comments`;
  return (
    <>
      <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />
      {/* We're already inside the next route that follows */}
      <Route path={pathToQuotesIDPage} exact>
        <div className="centered">
          <Link to={pathToCommentsPage} className="btn--flat">
            Load Comments
          </Link>
        </div>
      </Route>
      {/* This route's taken if we press the "load comments" button */}
      <Route path={pathToCommentsPage} exact>
        <Comments quoteID={quoteID} />
      </Route>
    </>
  );
}
```

 

#### Scenario 2 Explained Part 1

> [Jason2B3/mock_food (github.com)](https://github.com/Jason2B3/mock_food)
> async-operations/asyncButtons/DeleteMenu.js
> async-operations/asyncButtons/GetMenu.js
> async-operations/asyncButtons/PutMenu.js

OBJECTIVE

- In this example, we want to control 3 buttons that make PUT, GET, and DELETE requests onto a Firebase backend
- The results of these request actions should render different messages on App.js
- We'd like to code the async actions for these buttons outside of App.js
  Each button gets it's own dedicated file, so Redux state management will be our go-to

DISCLAIMER:
Most of the Redux logic will be excluded form this lesson, because it'd be too long otherwise

#### Scenario 2 Explained Part 2

![image-20210920080400399](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210920080400399.png)

——————————————————————————————————————————————————————
Let's show a couple of renders after we press certain buttons...

On mount:

![image-20210920080102952](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210920080102952.png)

After hitting PUT:

![image-20210920080138711](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210920080138711.png)

After hitting GET:

![image-20210920080202988](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210920080202988.png)

#### Scenario 2 Code

requestFunctions.js	(the GET async function part of it)

```react
export async function getMenu() {
  const pullData = await fetch(firebaseLink);
  if (!pullData.ok) throw new Error();
  const parsedData = await pullData.json(); // equals null if you fetch nothing
  return parsedData;
} // this file contains 3 functions. 1 for GET, PUT, and DELETE (2/3 off screen)
```

GetMenu.js	(a file dedicated to the GET button)

```react
export default function GetMenu() {
  const dispatch = useDispatch();
  // Add extra capabilities to the simple getMenu async function we imported
  const { sendRequest, status, data, error } = useHttp(getMenu, false);
  // Dispatching async actions from redux store's menu.js
  // These are dependent on the state values from useHttp
  useEffect(() => {
    async function runAsyncRedux() {
      //# Pending GET request
      if (status === "pending") {
        await dispatch(menuActions.GET_pending());
        return;
      }
      //# Failed GET request
      if (status === "completed" && error) {
        await dispatch(menuActions.GET_failure());
        return;
      }
      //# Successful GET request but the database is empty
      if (data === null && status === "completed") {
        await dispatch(menuActions.GET_noResults());
        return;
      }
      //# Successful GET request where we retrieve meal data
      if (data !== null && status === "completed") {
        await dispatch(menuActions.GET_success(data));
        return;
      }
    }
    runAsyncRedux();
  }, [sendRequest, status, data, error]);

  return (
    <>
      <button className={styles.btn} onClick={sendRequest}>
        GET existing menu from Firebase
      </button>
    </>
  );
}
```

Different redux action methods get rendered depending on the http request's pending state or final outcome. 

App.js

> ![image-20210920081114521](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210920081114521.png)
>
> ![image-20210920080949622](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210920080949622.png)

REMIND OF THE EXCLUDED REDUX CODE IN THIS LESSON

- I've excluded several import lines and all of the Redux store setup, but all I need from you is to get a feel for how this project is coded
- Dive into the files yourself if you want to understand it intimately, then replicate it when building new projects



### useWindowSize 

This hook returns viewport size and works on Next.js and React

```react
import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    responsiveWidth: undefined,
    responsiveHeight: undefined,
  });

  useEffect(() => {
    // Only render this code on the client (Next js pre rendering causes problems without this)
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        setWindowSize({
          responsiveWidth: window.innerWidth,
          responsiveHeight: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize(); // call immediately so state gets updated
      // Remove listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}

```



# Forms and User Input

Forms are vital to understand well in web development. We not only need to accept data, but make it known when data supplied to us is acceptable or not acceptable

> CHAPTER-WIDE-REPO:
> [Jason2B3/form_testing (github.com)](https://github.com/Jason2B3/form_testing)



### What's Complex about Forms?

#### Form and Input States

- As you can imagine, inputs can be considered valid or not valid
- We may also have a status of "undetermined" when we need to verify user inputs by sending them to server for verification- which would happen asynchronously

The form state is determined by considering all the input states together

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210831052830685.png" alt="image-20210831052830685" style="zoom:80%;" />

#### When to Validate

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210831053418349.png" alt="image-20210831053418349" style="zoom:80%;" />

DOWNSIDES FOR EACH APPROACH:

|                           | downsides                                                    |
| ------------------------- | ------------------------------------------------------------ |
| when form is submitted    | if the user submits bad info, they need to re-click an input field to fix things- which is annoying |
| when an input loses focus | can't tell if an input is correct or not until we click off it |
| on every keystroke        | we'll get plenty of incorrect user input flagging as we type our soon-to-be valid input |

We should try combining the last 2 methods...
Only validate on keystroke if the input was invalid before



### Grabbing User Inputs: Review

2 MAIN METHODS:

|          | how it listens                                               |
| -------- | ------------------------------------------------------------ |
| useState | listens on every keystroke<br />the input is saved into a stateful variable after each one |
| useRef   | we fetch a value after the user is done typing in a value    |



#### Method 1: useState

With useState method, we double bind a stateful variable to the value attribute of an input field

SimpleInput.js

```react
import React from "react"
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = React.useState("");
  const nameChangeHandler = function (e) {
    setEnteredName(e.target.value);
  };
  const submitHandler = function (e) {
    e.preventDefault();
    console.log(enteredName)
  };
  return (
    <form>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName} // Stateful variable
          onChange={nameChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button type="submit" onClick={submitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
```

#### Method 2: useRef

We assign a ref to grab the current value of an input field when we need it
There's no need to set up an updating function for our ref

```react
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = React.useState("");
  const inputRef= React.useRef()
  const submitHandler = function (e) {
    e.preventDefault();
    console.log(inputRef.current.value) // access ref value here
  };
  return (
    <form>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={inputRef} // assign a ref attribute instead of a value one
        />
      </div>
      <div className="form-actions">
        <button type="submit" onClick={submitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
```



### The Goal of this Chapter

#### 3 Times to Verify the User Input

Visual borrowed from lesson 1 of this chapter

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210831053418349.png" alt="image-20210831053418349" style="zoom:80%;" />

#### Goal

VERIFY INPUT FIELD AFTER WE...

1. Click off the input field, thereby removing focus
2. Hit the submit button
3. Press one of our keyboard keys 

Incorporate all 3 verification styles at the same time, for a better user experience



### Client-side Validation when Submit Button is Clicked

#### What is it?

Client-side validation is when we run the user inputs through some basic tests in the browser, to see if an input should be considered valid

- This prevents users from trying to submit empty field inputs, or ones that clearly go against what we know a correct submission would look like
- Ex. If we ask for email and the user submits something without @, you know something's up

LACK OF SECURITY:
It's never enough to just have this kind of validation for a professional website

- Anyone can go into dev tools and tweak some code to break through the validation checks
  This is here just to help the user experience
- You'll need to verify user inputs by sending data to a back end as well 

#### Basic Validation with Visual Feedback

We need to convey when a user inputs data that is or isn't acceptable.
At the moment, our project looks the same whether we submit something acceptable or not

![image-20210831174232383](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210831174232383.png)

CONDITIONAL CLASSES:
Add CSS classes based on whether user inputs are valid or not
An invalid class should color the input field border red, while highlighting the interior pink

CONDITIONAL JSX:
Make a new para tag appear when the user input is insufficient
Make it say "Name must not be empty"

![image-20210831174011615](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210831174011615.png)

#### Demo

> Chapter-wide-repo:	commit 200

SimpleInput.js

```react
import React, { useState, useRef, useState } from "react";
import "./SimpleInput.css";
const SimpleInput = (props) => {
  const [validForm, setValidForm] = useState("untouched"); // EXPLAINED AFTERWARDS
  const inputRef = useRef();

  const submitHandler = function (e) {
    e.preventDefault();
    let userInput = inputRef.current.value;
    // If the user submits nothing/whitespace, end this ƒ() early
    if (userInput.trim() === "") {
      setValidForm(false);	// set form state to false
      return;
    }
    setValidForm(true); // set form state to true
    console.log(userInput); // access ref value here
  };
  // ---------------------------------------
  //^ Conditional JSX (only generates JSX when form is invalid)
  let failureText = !validForm ? (
    <p className="error-text">Name must not be empty</p>
  ) : ( "" );
  //^ Conditional Classes (only sets a class when form is invalid)
  const inputClass = !validForm ? "invalid" : "";
    
  return (
    <form>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={inputRef} 
          className={inputClass}
        />
        {failureText}
      </div>
      <div className="form-actions">
        <button type="submit" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
```

### Was-touched States

You may have noticed the following line in the above example from the previous lesson
If curious to see it yourself, check commit 200 in the chapter-wide-repo

```react
const [validForm, setValidForm] = React.useState("untouched"); 
```

PURPOSE:
The form is not valid on startup, but we can't set the useState value to false without rendering our failure visuals

![image-20210831174011615](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210831174011615.png)

#### My Solution: "untouched" Starter State

> JS NUANCES (test in any console)
>
> "anyString" === true		returns false		(good for if conditions)
> !"anyString" 					   returns false		(good for conditional JSX and class names)

We use this to set an initial state value for `validForm` that we'll change to true/false later on depending on user inputs

- Now, we can run functions on startup via useEffect, and the form will not be considered valid/invalid from the get-go 
- On startup, this log does not fire because our validForm value equals "untouched", which JS does not consider true

Added to SimpleInput.js:

![image-20210831191427095](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210831191427095.png)

On startup, everything looks fine, despite the fact that validForm is not equal to true as of yet

![image-20210831174232383](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210831174232383.png)

#### Udemy Solution: touched State

SHOWN:		 [React - The Complete Guide (incl Hooks, React Router, Redux) | Udemy](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599962#overview)

1. Create a new useState line that's set to false on startup
2. Once the input field is typed into, change the stateful variable to true
3. Code your conditional classes and JSX with this in mind







### Client-side Validation when Input Loses Focus

Up until now, we've only verified the user input after the submit button was pressed
Now, let's check the inputs as soon as the user clicks off a field

- We'll be using React's `onBlur` attribute for JSX elements
- It allows you to run a function after an element loses focus

#### Demo

> Chapter-wide-repo:	commit 202

SimpleInput.js (what matters)

```react
const SimpleInput = (props) => {
  const [validForm, setValidForm] = React.useState("untouched");
  const inputRef = React.useRef();  

  const blurHandler = function (e) { 
    let userInput = inputRef.current.value; 
    if (userInput.trim() === "") { 
      // check if the input is blank. if so, update validForm state
      setValidForm(false); 
      return;
    }
    setValidForm(true); // if input is not blank, set form equal to true
    console.log(userInput); // access ref value here     
  };
  return(<input
          ref={inputRef} // assign a ref attribute instead of a value one
          onBlur={blurHandler}
          className={inputClass}
        />)
};
```

We actually refactor this code a bunch by commit 202, but be aware this is what it all means

#### Outcome

We're continuing off the previous subchapter's commits, which had us verify the user input when the submit button was pressed

At the moment, we run verification checks ...

1. After the submit button is pressed
2. After we click off the input field onto something else

![image-20210831174011615](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210831174011615.png)

THE ISSUE WITH THIS SETUP

If we click off the input field, it renders new JSX with error text and visuals (good)
But if we return to the input field and type a valid input, the error text/visuals remain

![image-20210831234317732](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210831234317732.png)



### Client-side Validation on each Keystroke

All you need is to use the `onChange` attribute in an input field, then set it equal to a handler that deems the input as valid or not valid

#### Demo

> Chapter-wide-repo:		commit 203

SimpleInput.js
This currently verifies the user input during 3 situations: on key tap, on blur, on submit

```react
  const [validForm, setValidForm] = React.useState("untouched");
  const inputRef = React.useRef();

  const verifyInputFN = useCallback(function () {
      // If input field is blank, validForm === false
      let userInput = inputRef.current.value;
      if (userInput.trim() === "") {
        setValidForm(false);
        return;
      }
      setValidForm(true); // If input field is not blank, validForm === true
  }, [inputRef]);

  const blurTapHandler = useCallback((e) => verifyInputFN(),[verifyInputFN]);

  return (
        <input
          ref={inputRef} // assign a ref attribute instead of a value one
          onBlur={blurTapHandler}			// ON BLUR
          onChange={blurTapHandler}			// ON TAP
          className={inputClass}
        />
  		<button type="submit" onClick={submitHandler}>Submit</button> // ON SUBMIT
  );
```



### Forms with Multiple Input Fields

In most cases, forms are only valid if all input fields are found to be valid themselves

This means relying on type 2 state snapshots- a perfect time to combine useReducer and useEffect to manage complex state scenarios

#### Challenge Description

Take commit 203 and make it so we have 2 input fields instead of 1

- When we hit the submit button, set the form equal to valid or not valid according to the 2 input fields' validity
- IRL, the validation would involve much more scrutiny, but the point of this is to practice managing form states

Input 1: Username
Valid if the name is at least 1 character long, whitespace not included

Input 2: Email
Valid if the input field contains @

#### Challenge Completed

Is pretty long, involves the use of many hooks and context API

> [Jason2B3/form_testing (github.com)](https://github.com/Jason2B3/form_testing)		"refactored files to rely on useState instead of refs"

#### Refactoring with Custom Hooks

You can also reduce code repetition by using custom hooks to outsource state management logic on each of your inputs

> [Jason2B3/form_testing (github.com)](https://github.com/Jason2B3/form_testing)
>
> START:		refactored files to rely on useState instead of refs
> END:			useInput success

This was explained thoroughly in the custom hook chapter's "useInput "lesson



### Managing Forms with more Elaborate Tools

#### useReducer State Management

This standard hook allows you to manage state in a much more organized manner

- You can code a set of actions for each dispatch case in a custom hook
- Feel free to tweak this any way you wish- I haven't used this yet as of writing
  My repo stemmed off the course's official instructions

SOURCE AND EXAMPLE: 
https://github.com/academind/react-complete-guide-code/tree/16-working-with-forms/code/12-finished/src

use-input.js

```react
import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') { 
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }
  if (action.type === 'RESET') {
    return { isTouched: false, value: '' };
  }
  return inputStateReducer;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
```

App.js

```react
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const { // USE THESE CUSTOM HOOK IMPORTS IN YOUR COMPONENT FUNCTION
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
```

#### Libraries and Custom Hooks

ADVANCED TOOLS:

1. Formik library
   A library for form creation
2. useForm hook
   A more advanced custom hook to render an entire form that you can customize



# Deploying React Apps

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210921102412555.png" alt="image-20210921102412555" style="zoom:80%;" />

### Deployment Steps

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210921103330394.png" alt="image-20210921103330394" style="zoom:80%;" />

#### Procedure

1. Test your code

- Play around with your app and see what happens when you perform certain actions in different sequences- to see if you handle errors properly

2. Optimize code

- Once your code's in working condition, optimize it
- Should consider lazy loading, which we'll learn in this chapter as well

3. Build your App for Production

- Execute a pre-written script which outputs a production ready bundle of our code which is minified and optimized

4. Upload production code to server
5. Configure your server or hosting provider



### Optimize with Lazy Loading

Lazy loading is when you load certain chunks of our project code, but only once it's needed
This is a very important step when it comes to optimizing SPA's

#### Lazy Loading and Multi-Page SPA's

If someone visits a webpage with no lazy loading, they must download all of the code before the webpage becomes usable (not good for performance, especially in big projects)

EXAMPLE:

- We render new pages when we hit `All Quotes, Add a Quote, and View Fullscreen`
- Ideally, we'd want to only download the code that's required for the pages we decide to visit
- Perhaps our user wants to view all quotes, but not add a new one himself
  No point in downloading the code for the "Add a Quote" page

![image-20210921104805492](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210921104805492.png)

If we've used React Router, we can choose to divide our code into chunks based around the Routes we've already defined

#### Code Splitting with React.lazy()

The import lines at the top of your React files are what force the entire project to be downloaded before the site can be used. 

- Replace them with lazy imports, then you'll be able to split your code into chunks and load them only when required
- You'll need a fallback UI to load while we wait for the lazy loading process to finish- which usually takes a few milliseconds (common choice is a loading spinner)

#### Demo

> [Jason2B3/router_practice (github.com)](https://github.com/Jason2B3/router_practice)				commit 292

OBJECTIVE:
Lazy load the NotFound and NewQuote components

App.js at start: (what matters)

```React
import React from "react";
// Regular imports must all be loaded before we begin rendering anything
import NewQuote from "./components/pages/NewQuote";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <Layout>
      <BBB> // context provider tags
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteID">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BBB>
    </Layout>
  );
}

export default App;
```

App.js afterwards:

```React
import { Route, Switch, Redirect } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import AllQuotes from "./components/pages/AllQuotes";
import QuoteDetail from "./components/pages/QuoteDetail";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Layout from "./components/layout/Layout";
import BBB from "./context";
// STEP 1 OF 3: Lazy load these components AFTER the regular imports:
const NotFound = lazy(() => import("./components/pages/NotFound"));
const NewQuote = lazy(() => import("./components/pages/NewQuote"));

function App() {
  // STEP 2 OF 3: Define your fallback UI (simple loading wheel this time)
  const fallbackJSX = (
    <div className="centered">
      <LoadingSpinner />
    </div>
  );
  return (
    <Layout>
      <BBB>
        // STEP 3 OF 3: Wrap Suspense tags around the JSX you're lazy loading
        <Suspense fallback={fallbackJSX}>
          <Switch>All routes are the same</Switch>
        </Suspense>
      </BBB>
    </Layout>
  );
}
export default App;
```

Now, clicking on the links to these pages will load a spinner before we arrive there
(Don't confuse these for the loading spinners we use for pending states in our project)

#### Noticing in Dev Tools

- Go to the Network tab and pay attention to what renders when we hit a link to a lazy loaded component- you will see a chunk gets loaded in
- [React - The Complete Guide (incl Hooks, React Router, Redux) | Udemy](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25600978#announcements)
  End of tutorial video

### Build App for Production

create-react-apps typically come with scripts pre-prepared in package.json
To bundle your code, enter the following into your terminal:	`npm run build`

package.json should contain:	![image-20210921133256736](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210921133256736.png)

#### Never Edit these Files

The `build folder` contains all your optimized code and should not be messed with
Stick to build your sites using the src folder only

- That being said, `build/static` is the folder that contains all your optimized CSS and JS code, if you feel like peeking inside



### Uploading Code to a Server

When we run `npm start`, we upload our raw developer code to a local server then broadcast it
Now, we're sending optimized code to a 3rd party server 

YOU MUST UNDERSTAND:

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210921134047886.png" alt="image-20210921134047886" style="zoom:80%;" />
>
> For a project like this, we'll need a STATIC-SITE-HOST
> This would not be the case if we used PHP/Node to create a backend using server-side code

CHOSEN PLATFORM: Firebase

- Just because we've used Firebase as the mock backend for our projects does not mean we're forced into using it for hosting
- Their static site hosting service just happens to be free and easy to use

#### Upload a Static Site to Firebase

Enter the Hosting tab and follow the instructions defined there :  ![image-20210921202751664](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210921202751664.png)

Watch the configuration details starting at 3:50 in this video: 
[React - The Complete Guide (incl Hooks, React Router, Redux) | Udemy](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25600988#notes)

> During Step 2: "Initialize your Project" Phase
>
> ![image-20210921165719813](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210921165719813.png)
>
> Click Yes for configure as a single page app if you have a SPA react project built with React Router (next lesson explains why in detail)
>
> ![image-20210921202400310](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210921202400310.png)

#### Disabling Hosting on Firebase

After you follow the last subsection's steps, your site will be hosted on Firebase, and anyone in the world with the right link will be able to visit

PROCEDURE TO STOP THE HOSTING:

1. Run the following in your VSC terminal:	`firebase hosting:disable`
2. Go back to the hosting tab of your current project, reload the page, then delete your deployments

![image-20210921204851742](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210921204851742.png)



### Routing Issues to Address

FYI: 

- This lesson is pure theory, and can be ignored if you're deploying with Firebase. 
- Just read the previous lecture if that is the case

#### Server vs Client-side Rendering

React router is a client-side package, meaning it runs in the browser.
Server-side routing and client-side routing work differently

DEFINITIONS:

server → a remote machine which hosts our production-ready code that we're going to deploy
client → the user on a browser

#### The Problem with React Router + Static Site Hosting

> ![image-20210921173135821](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210921173135821.png)

If a user visits our page by entering the domain then perhaps a path, a request to the server is made
This request contains the full URL that was entered

- The server sends back a response which contains all the CSS/HTML/JS/React code
  This code will contain all the React-router code if we've built a multi-page SPA
- The Router code will look at the `/path` portion of the URL then bring the correct component onto the screen- assuming the response was received

THE ISSUE:
By default, different URL's will lead to different responses. 

- Since the path is part of the request, `react-quotes.ca` will get a different response than `react-quotes.ca/all-quotes` - and we do not want that
- With React, our "multi-page" projects are actually still static websites, so we'll need every server request to return the same HTML and JS files regardless of what was targeted

#### The Solution

Force the server to ignore the path provided by the user's typed URL (consider the domain only)

- If we do this our React application will start up, then React-Router will take a look at the URL we ignored and render content according to the domain + path
- We want all requests to our site to return the same index.html files along with 

Configuring your server to allow this changes per platform
On Firebase you just hit yes when asked `"configure as a single-page app?"`

![image-20210921202400310](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210921202400310.png)



# ====== BROWSER TOOLS ======

# React Dev Tools

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726154809176.png" alt="image-20210726154809176" style="zoom:67%;" />

### React Dev Tools: Components Tab

This is a browser extension you can apply to Firefox or Chrome that gives you extra functionalities that only apply when React projects are open

It gives you access to 2 extra tabs in the dev tools- Component and Profiler
We'll be learning about the Components tab in this lesson

#### Verbal Component Tree

Instead of manually tracking how your component tree must look to keep track of things, use React dev tools to see what the structure is like

> https://github.com/Jason2B3/academind_react_1
>
> START: 	commit 63 	(only analyzing the component tree in this lesson)

MANUALLY TRACKED: 
I went down the component tree manually and created my own diagram, since this is a small project
Regular HTML elements are excluded- I'm only taking note of custom component JSX tags

![image-20210720101627545](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210720101627545.png)

REACT DEV TOOLS:
Open the "Components" tab when you open up dev tools in your browser normally

![image-20210720101759971](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210720101759971.png) ![image-20210720102520773](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210720102520773.png)

#### Understanding the Verbal Tree

THE # OF BRANCHES:
When we collapse the LeanExpenses DDM, only it and ExpenseForm are left
This means our tree only has 2 branches total

![image-20210720103415795](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210720103415795.png)

CHILD TAGS:
A CCT having deeper nesting (like Card-> ExpensesFilter) means that we have...

![image-20210720103257995](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210720103257995.png)

SIBLING TAGS:
Multiple CCT's existing on the same nesting level means they must be siblings 
Ex. The 4 ExpenseItem tags nested within Card, which is in LeanExpenses (map iteration over an array is why it creates 4 at this point in time)

![image-20210720103732903](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210720103732903.png)

CARDS / RE-USED CONTAINERS:
You will see the card component multiple times on a branch

- But it DOES NOT CONTAIN any of the CCT's that are nested inside of it in this representation
  It's simply used multiple times as a container element
- Normal CCT's like ExpenseItem actually do house all the CCT's that are nested within it in the verbal tree diagram

![image-20210720103511466](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210720103511466.png)

#### More Debug Features

- Once you understand how your project is structured, you may want more details on each one of your components
- Remember that what you're about to see is updated when you interact with your webpage

###### ANALYZE PROPS:

Click on a component and you can view which props are passed to it

- You can even change values of props in the tools, then see changes reflected on the viewport
- The above statement assumes your project is programmed in a way where changing certain values does cause visual changes (it won't always)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726194714467.png" alt="image-20210726194714467" style="zoom:80%;" />

![image-20210726194850353](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726194850353.png) ![image-20210726194910936](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726194910936.png)

###### RENDER ORDER:

Take a look at the largest image above- we drew 2 blue lines to show what renders the CourseGoalItem component we're analyzing

It's rendered by CourseGoalList.js directly, and App renders that

### Analyzing Component Tree Diagrams

In one of our previous lessons, we saw how the React Dev tools gives us a verbal component tree to examine. If you prefer a visual approach, use React Sight or Realize to do the same

FAIR WARNING:
Both are extremely buggy and cause console errors which are annoying to see but don't crash your app

#### Visual Trees fr/ React Sight

By installing "React Sight" on Chrome or Firefox as an extension, you get a more visual version of the verbal component tree (but you need React dev tools installed as a prerequisite)

- To improve the diagram, hit Hide DOM to get rid of the regular HTML nodes cluttering up the tree
- Maximize horizontal spacing to get rid of overlapping text

![image-20210720104220968](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210720104220968.png)

#### Visual Tree fr/ React Realize

This works the exact same way as React Sight, and requires the same bugfix as well

SHIFT left click to drag the visual 
SHIFT scroll wheel to zoom in

Overall, the UI is much worse than React Sight, but the info it provides about each component module is superior

![image-20210720133612206](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210720133612206.png)

#### Bugfix for React Sight & Realize

This extension is not actively maintained, and contains several bugs (still worth using though)
This is the most prominent one

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210720104819659.png" alt="image-20210720104819659" style="zoom:50%;" />

To get around it, create this component module and include it in Apps.js JSX via `<ActivateSight>`

New File ActivateSight.js

```react
import { useState } from "react";

function ActivateSight() {
  const [title, setTitle] = useState("");
  const clickHandler = () => {
    console.log(title);
    setTitle("UPDATED");
  };  
  return (<button style={{height:'50px'}} onClick={clickHandler}>React-sight activate!</button>)
}
export default ActivateSight;
```

Include in App.js JSX:

```
// at the top of the file 
// (change file path if you place ActivateSight on a different nesting level than App.js)
import ActivateSight from "./ActivateSight";

// In JSX:
<ActivateSight/>
```



### React Error Messages

There are many errors that we can generally group into 2 or 3 categories

#### Errors that Crash the App

When you get an crippling error, the live preview incited by `npm start` will not render

- An error screen will appear, pointing out where the problem in your code is located
- Alternatively, you can look in your VS Code terminal, but it's much smaller

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726174346200.png" alt="image-20210726174346200" style="zoom:80%;" />

Error is in App.js on line 41 column 33 
Read the error message and either fix the error yourself or google what it means

#### Subtle Errors

Not all errors on your webpage will render large warnings like you see above
Some errors are subtle and cause your webpage to render, but with some visual bugs

CONSOLE ERRORS
The console will render errors that don't crash your application

- Test out your features with the console open and change your webpage's state
- You may get an error message that pops up and hints at where your problem is
  Read it thoroughly and google what a statement means if it confuses you

HOW TO ISOLATE A BUG

1. Identify what feature isn't working as intended
2. Check the console to see if an error message is rendered there
3. Go through each step that makes the feature work- understand them
4. Run tests on each step to see if it produces what you expected
   Log variable values at crucial times, use React knowledge to see if a step makes logical sense



# Chrome Dev Tools Crash Course

> SOURCE: https://www.youtube.com/watch?v=x4q86IjJFag&t=1865s

TERMINOLOGY:

![image-20210809195830186](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210809195830186.png) 	Inspect element button

### Elements Tab

I'm assuming you already have a basic grasp on how this tab is used by now

#### Toggling Classes in 2 Ways

> 6:28 - 7:15

METHOD A: 
Disable class on every element in the HTML file

- Click an element on the page -> toggle the class on or off in the "Filter Styles" section

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210809195417637.png" alt="image-20210809195417637" style="zoom: 33%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210809195545032.png" alt="image-20210809195545032" style="zoom: 33%;" /> ![image-20210809195351729](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210809195351729.png)

METHOD B: 
Disable a class on a specific element

- Hit the inspect element button -> left click your interested element on the viewport
  Or you can select it directly from the Elements Tab if you know where it is
- Hit the toggle classes button on the upper right of the "Filter Styles" section ->
  Toggle classes on/off for that element only

![image-20210809195941741](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210809195941741.png) <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210809200147405.png" alt="image-20210809200147405" style="zoom:80%;" />

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210809200232271.png" alt="image-20210809200232271" style="zoom:67%;" />

#### Temp Changes to DOM

- You can add entirely new attributes, change existing attributes to different kinds
- Hide element -> makes it invisible but still reserves space 
- Delete element -> Removes element from DOM, making it invisible while taking up 0 space

> 8:15 - 9:50

- Copy paste elements or drag them to new places

> 9:50- 10:27		

#### Inspecting Styles

Eyedropper Tool: (ColorZilla Extension's easier to use than this)
Allows you to derive hex codes for colors you encounter on a website you're visiting

![image-20210809202027511](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210809202027511.png) ![image-20210809202137931](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210809202137931.png)

- Just select an element on your website, check the styles tab on the bottom half, then click the color
- Once the eyedropper pop up appears, click what I highlighted then start clicking elements on the viewport to check out their hex codes

Filtering Style Searches

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210809200147405.png" alt="image-20210809200147405" style="zoom:80%;" />

- Select an element -> Left click inside that small "Filter Styles" field
  type in "margin" for example -> hit enter
- You will pull up all the margin related styles currently active on that element

 

### Console Tab

#### Selected Element History

There are certain things you can enter in the console that will give you back elements you've selected previously (perfect for analyzing sites with deeply nested elements)

```
$0 last selected element
$1 2nd last selected element
$2 3rd last selected element ... and so on 
```



#### Picking what Console Content you want Visible

Firefox:

![image-20210810004220612](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810004220612.png)

Chrome:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810004431170.png" alt="image-20210810004431170" style="zoom:80%;" />

You can click these buttons at the top to toggle these console outputs on/off
Finally, I can get those stupid React warnings out of my face 

#### Misc

Temporarily Change Webpage with Query Selector:

- You can target all elements that fall under an umbrella of elements that meet your `document.querySelector("")` statement, then make changes to your webpage that way
- Instead of typing all that out, use `$("")` as a replacement

> ![image-20210810002943619](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810002943619.png)
>
> All h1 tags will be colored red... then blue after the last line



### Console Methods

#### Console Dots

```
console.log		output a message
console.error	output an error message(red)
console.warn	output a warning message (yellow)
console.dir		output an object detailing every aspect of the element in brackets
```

#### console.table()

You can output a table directly into the console

```
console.table([
{name:'Amber', age:24, job:'cashier'}, 
{name:'Ed', age:26, job:'Forklifter'}
])
```

![image-20210810004014452](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810004014452.png)

#### console.log Groups

You can create a collapsible group of console logs

- It's useful for logging multiple bits of information separately, while having a clear distinction between it and other groups

- Name the console group after which file is doing the logging- especially when using React where you have dozens of them

Inside App.js

```js
  console.group("App.js") // identify start and end of group
  console.log(5)
  console.log(6)
  console.groupEnd("App.js")
```

Inside MyInput.js

```js
  console.group("MyInput.js");
  console.log('I can clearly state');
  console.log('where my logs come from');
  console.groupEnd('MyInput.js');
```

![image-20210810012637704](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810012637704.png)

You can even have groups inside of groups if you want

#### console.time

EXAMPLE: See how long it takes to perform a certain JS action like looping 100 times

```js
console.time("App.js for loop test");
for (let i=0; i<100; i++){
  console.log(i)
}
console.timeEnd("App.js for loop test");
```

![image-20210810013140750](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810013140750.png)

### Network Tab

The network tab shows us all the files that are loaded to make your webpage render properly

#### Load Speeds

- Hover your cursor over the bar graph diagrams on the side to get more info on the file
- If you make asynchronous fetchAPI or XHR requests, you can analyze their speed here too
  Check out how in our JS Part 2 notes

![image-20210810014755672](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810014755672.png)

#### File Filtering

- In React projects, you'll see dozens of boiler plate files appear that you've never touched before
- Filter through these by selecting the type of file you'd actually like to see
  Show only JS files for example

![image-20210810014617289](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810014617289.png)

#### Throttle your Internet Speed

When testing out how your webpage loads, you may want to simulate having shitty connection
Design your sites so that they render gracefully, even for chumps without 5G

![image-20210810015636758](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810015636758.png)

### Skimmed Tab Sections

#### Sources Tab 

The sources tab lets you analyze the files you've actually typed out before they got bundled and optimized

Code Snippets you can save and run:

> 30:05-30:50			

Using Dev tools as a Text Editor:

- We can make permanent changes to our project files through the dev tools
- The changes are not undone when we reload our website when you do the following

> 30:50 - 33:35

Tbh, I have no idea why I wouldn't just use my regular text editor

#### Application Tab

This tab lets us look at our browser storage- there's more than 1 way to store things in there, FYI

![image-20210810020435009](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810020435009.png) ![image-20210810020446253](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810020446253.png)

I won't be going into detail about how each of these technologies work. 

- When I learn about them, I'll include a section describing what to look for in the dev tools. 
- Ex. My localStorage notes tell us how to view what's stored, and how to clear it out entirely

#### Audit Tab 

Helps us gauge how performant our website is, and gives tips on how to improve it

> 45:00 - 50:30



# Debugging in Chrome Dev Tools

> Resources- Refer to these when stuck
>
> [Google's Intro to Debugging Video](https://www.youtube.com/watch?v=H0XScE08hy8)
> [Google's describes all breakpoint types](https://developer.chrome.com/docs/devtools/javascript/breakpoints/)
>
> [Google's JS Debugging Reference- KEEP OPEN](https://developer.chrome.com/docs/devtools/javascript/reference/)

TERMINOLOGY:

Paused:
What we call it when we halt the execution of our code at a certain point

- If we place a breakpoint, our code will pause automatically when we run our site or recreate a bug
- If we step after that breakpoint, we allow the code to run a little, then we pause on a line past that breakpoint

### Sources Tab Overview

#### Functionalities 

What we care about:

1. View JS files and debug them
2. Create and save JS snippets which you can run on any page

Other:

1. Edit CSS and JS directly in the dev tools
   It's easy enough to experiment using VS Code and Git to make temporary changes
2. Set up a Workspace to permanently change your project files
   Using VS Code to edit files is easier

#### 3 Main Panes

1. File-navigator Pane OR Pages Pane
   Every file that the page requests is listed here
2. The Code Editor Pane
   After selecting a doc in the file-navigator, its contents are displayed here
3. The JS Debugging Pane
   Use to set breakpoints, inspect variable values, watch for changes, etc.

Alternative Names: Navigator, Editor, Debugger

![image-20210810130621435](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810130621435.png)

CUSTOMIZE THE LOOK:

To switch up how it looks, hit the dev-tools settings gear -> Appearance -> Edit Panel Layout
Remember that you can temporarily hide each of these sections with this button 

![image-20210810131905301](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810131905301.png)

### Using the Debugging Pane

​													![image-20210811145051603](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210811145051603.png)![image-20210811145232198](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210811145232198.png)

#### Scope:	

> [5:17- 5:38 of vid](https://youtu.be/H0XScE08hy8?t=316)

Shows values of all variables defined in the scope you're currently stepping through
Also lets you see the value of the "this" keyword

#### Breakpoints:

It gives you a list of the breakpoints you've set, with check boxes beside them
Click on a checkbox to disable one specific breakpoint

![image-20210811145743564](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210811145743564.png)

You also have more options for what you can do with 1 breakpoint, or all of them in the list 
Just right click this drop down menu to see what they are

![image-20210811145846413](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210811145846413.png)

#### Watch:

> [5:38 - 6:05 of vid](https://youtu.be/H0XScE08hy8?t=338)

You can force the debugger to consistently track a certain variable as you step through your code

- Add a JS expression as a watch value, then it'll constantly have that expression value on screen
- Be creative with your expressions, and pick the most intuitive one for debugging your problem

```
expression examples: 
sum					track this variables value as you step
typeof sum			track the type of this variable as you step
sum > valueA		track if sum is greater than valueA as you step
```

#### Call Stack:	

> [5:12 - 5:18 of vid](https://youtu.be/H0XScE08hy8?t=305)

Shows the callstack that causes this code to execute

- Click on individual functions to see where they were called in your project files
- It'll highlight them in the code editor, and will even open up files you haven't yet to do so

#### Not shown in this lesson 

Explained in other parts of this chapter where we learn how to do an important action:

- XHR/fetch Breakpoints
- Event Listener Breakpoints
- DOM Breakpoints

HAVEN'T LEARNED OR ENCOUNTERED YET:

- CSP Violation breakpoints
- Global Listeners

### Breakpoints Overview

The browser does not execute the code in your VS Code when you employ libraries like React. 

- Inspecting elements in the dev tools is less intuitive when the compiled code looks different than your raw code in your editor
- Thankfully for us, the browser's source tab lets us inspect our raw code within the dev tools

![image-20210726190822112](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726190822112.png)

#### What are Breakpoints?

Breakpoints are when we use dev tools to intentionally stop our program in a specific location so you can analyze all values at that moment in time (great for debugging)

- The general idea is to step through your code's execution, one line at a time. 
  You should know where the data flows in your project so you know where to start looking
- As you step through the code, you can view and change the values of all currently-defined properties and variables, run JavaScript in the console, and more

#### Breakpoint Types 

XHR stands for XMLHttpRequest - and this type of breakpoint works on fetchAPI calls too

| BREAKPOINT TYPE               | use in order to pause...                                     |
| ----------------------------- | ------------------------------------------------------------ |
| Line-of-code                  | an exact region of code                                      |
| Conditional<br />Line-of-code | an exact region of code, but only when a certain condition is true |
| DOM                           | the code that changes/removes a specific DOM node, or its children |
| Event listener                | code that runs after a certain event fires (like "click")    |
| XHR                           | When an XHR url contains a string pattern                    |
| Exception                     | the line of code that's throwing a caught/uncaught exception |
| Function                      | whenever a specific function is called                       |



### Placing Different Types of Breakpoints

#### LOC & Conditional LOC

> LINE-OF-CODE:	  [Personal video showing how](https://www.youtube.com/watch?v=j-A6HaHQ7zM)
> Makes code stop at the location you placed your breakpoint
>
> CONDITIONAL:		[Personal video showing how](https://www.youtube.com/watch?v=PGfioscuhaQ)
> Same as previous type, but only if the condition you set is met 
> Otherwise, the code continues on as if no breakpoint was there at all
>
> Inspecting the following website in above 2 examples:  https://greet-me-debugging.vercel.app/

#### Event Listener Breakpoints

Code will stop at the first line of any event listener that executes based the event type you chose
Ex. if you select "click", the code pauses at the first function that uses a click event to get invoked

> EVENT-LISTENER:
> [watch 2:05 - 2:48](https://youtu.be/H0XScE08hy8?t=125)

- You'll probably have several functions like this in your JS code, so be sure to skip to other functions if you stopped somewhere you didn't want to be
- To select this kind of breakpoint, use the "Event Listener Breakpoints" DDM
  You don't click on a line number in your code editor like line-of-code or conditional ones

#### DOM Breakpoints

We actually have 3 types of DOM breakpoints we can place- but they are set up differently than the ones we've seen so far

- When our code execution stops, it will highlight the code that changes a DOM aspect of the element we applied our breakpoint onto. 
- For example, if we we apply an attribute modification breakpoint, it will highlight the code that changes one of the element's attributes

![image-20210812005633953](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210812005633953.png)

Test each of them out here: https://seanmcp.github.io/dom-break/

| Type                    | halts code when...                                           | demo                                            |
| ----------------------- | ------------------------------------------------------------ | ----------------------------------------------- |
| Sub-tree modified       | a child element is added, removed, or moved<br />we apply this type of breakpoint on the parent | [0:25-1:05](https://youtu.be/oHAnd91cz0I?t=25)  |
| Attribute Modifications | an attribute of this element gets changed dynamically        | [1:42-2:20](https://youtu.be/oHAnd91cz0I?t=103) |
| Node Removal            | the element you apply this on gets removed from the DOM<br />the associated breakpoint gets deleted after the code executes past this breakpoint (as shown in video) | [3:00-4:05](https://youtu.be/oHAnd91cz0I?t=180) |

PROCEDURE IN WORDS:

1. Locate then select an element in the Elements Tab code editor
   Use any method you want to select your element

- Right click it on the viewport -> inspect
  This is the method our demo YouTube video keeps using
- The "Select Element to Inspect it" button in the dev tools' Elements tab
- Directly left clicking an element from the code editor in the dev tools' Elements tab

2. Right click your selected element -> Break On -> choose 1 of 3 DOM breakpoint types
3. Toggle your breakpoints on/off or delete them all using the "DOM Breakpoints" tab in the Sources Debugger Pane

![image-20210812005220524](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210812005220524.png)

#### XHR Breakpoints

We can halt the execution of our code whenever a fetchAPI or XMLHttpRequest fires

PROCEDURE TO ADD ONE:
[To see this in video form, watch this from 0:30 to 1:30](https://youtu.be/vJyCPm8-U4c?t=30)

1. Go to this tray in the Sources Tab Debugger Pane, then hit the plus sign

![image-20210812010850069](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210812010850069.png) ![image-20210812011045885](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210812011045885.png)

2. Enter either one into the input field shown in picture 2...
   Nothing -> halts execution at any fetchAPI or XML request
   Something -> only halts execution if what you typed is included in the request URL

### Stepping after Breakpoints

#### Why we have 4 Stepping Buttons

Keep in mind these explanations are very broad, and we have more specific ones in our table

STEP and STEP-INTO
When our webpage execution gets paused at a breakpoint, we need to be able to step through our functions while analyzing the values 

STEP-OVER and STEP-OUT
A function may have several other function calls nested inside- some which we know work properly
We shouldn't step through each of these functions, because it'd waste time

#### Step Button Explanations

Assumption: 
You're inspecting the inside of a function

Function/method calls: 
Things like `console.log()` or even variable definitions count as a function/method call

| BUTTON                                                       | FUNCTION                      | USE TO...                                                    |
| ------------------------------------------------------------ | ----------------------------- | ------------------------------------------------------------ |
| ![image-20210810143707318](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810143707318.png) | Pause/resume script execution | Jump to the next breakpoint the execution will run into<br />Skips any debugging in between |
| ![image-20210810143808940](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810143808940.png) | step                          | step through and debug a function 1 line at a time<br />if other nested functions are called inside it, we'll travel there too |
| ![image-20210810143734840](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810143734840.png) | step into                     | same as above (I think)                                      |
| ![image-20210810143725480](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810143725480.png) | Step over                     | Fast forwards through the execution of a nested function call, then breaks afterwards- if you're paused on a line that has one. <br/>If you aren't then this acts like a normal step |
| ![image-20210810143753111](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810143753111.png) | step out                      | Fast forwards through the entire execution of the function you're in, then breaks after that (does not enter any nested function calls either) |
|                                                              |                               |                                                              |
| ![image-20210810143824970](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810143824970.png) | deactivate breakpoints        | disarms all breakpoints without deleting them<br />can set them up again by pressing the same button |
| ![image-20210810143835730](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810143835730.png) | don't pause on exceptions     | ??                                                           |

#### Stepping Visualized

For this introductory demonstration, we're going to be using the step button only on the following example

```js
const uno = () => {
  const a = dos(); tres(a);
};
const dos = () => {
  return 2;
};
const tres = () => {
  const b = inp + dos(); return b;
};
```

UNDERSTAND:
In certain situations, different buttons do the same thing (not always though)

EXAMPLE 1: 
This shows how stepping follows what the execution flow would look like

![image-20210811010048081](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210811010048081.png)

> Step: 				 2		7		3		11		7		12		4		15		visits other file
> Step into:		 same as above
>
> Step over:		other file (skips over all lines from uno function, but executes it)
> Step out:		  other file (steps out of trying to follow uno function's execution path)

EXAMPLE 2: 
Show how stepping follows parsing order when you place a breakpoint on a function's first line

![image-20210811163819707](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210811163819707.png)

> Step:	1	6	10	15				

- If you place a breakpoint where the function's defined, stepping will cause you to step through how the document gets parsed on startup (see above image)
- If you want to step through a function line by line, then place a breakpoint inside the function's scope (in the above example, it'd be wiser to place the breakpoint on line 2 or 3)

#### Skipping Over Code as you Step

After reading the lesson following this one, you'll understand exactly how the step buttons work. 
Lets point out all the different ways we can skip over code without pausing there

1. STEP OUT 
   Fast forwards through the entire execution of the function you're in, then breaks after that
2. STEP OVER 
   Skips over the execution of a nested function call- if you're paused on a line that has one. 
   If you aren't then this acts like a normal step
3. Place multiple breakpoints
   Fast forward to the next one by pressing the "Resume script execution" button
4. Run all code up to a certain line (Right Click )

- Right-click the line of code that you're interested in, and select Continue to here
- Dev tools runs all of the code up to that point, and then pauses on that line

![image-20210811182314151](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210811182314151.png)

### Stepping Examples

#### Demo: Step & Step-Into 

Breakpoint placed on line A
Pressing STEP-INTO would take you to line B

- This is because of the nested function call `getName()` on line A
- STEP or STEP-INTO will take you into that `getName()` function
  You can step through it, get out, then re-enter the updateHeader() function at line C

```js
function updateHeader() {
  var day = new Date().getDay();
  var name = getName(); // A
  updateName(name); // C
}
function getName() {
  var name = app.first + ' ' + app.last; // B
  return name; // c
}
```

#### Demo: Step Over

Breakpoint placed on line A
Pressing STEP-OVER would take you to line D

- On line A, we have a nested function call `getName()`, which the code would enter and pause inside of if we chose to use the STEP button
- The STEP-OVER button executes `getName()` without going inside of it (skipping B and C)
- The code breaks at the line that follows what happens after `getName()` is called (line D)

```js
function updateHeader() {
  var day = new Date().getDay();
  var name = getName(); // A
  updateName(name); // D
}
function getName() {
  var name = app.first + ' ' + app.last; // B
  return name; // C
}
```

#### Demo: Step Out

Breakpoint placed on line A
Pressing STEP-OUT would take you to line C

- On line A, we're in the middle of the `getName()` function's execution
- Pressing STEP-OUT will run all of this function's code
- It skips through any nested functions it may call during it (skips D)
  Will also skip any regular code or method calls as well (skips B)
- The code breaks at the location that comes right after the `getName()` function is done executing

```JS
function updateHeader() {
  var day = new Date().getDay();
  var name = getName();
  updateName(name); 		// C
}
function getName() {
  var name = "Jimmy Neutron"; 	// A
  var pre= third(); 			// E
  return name; 					// B
} 						
function third(){
    return "The almighty" 		// D
}
```

To illustrate the difference between STEP-OUT and STEP-OVER...

Our breakpoint is on line A
STEP-OUT takes you to line C
STEP-OVER takes you to...	line E -> line B -> line C

#### Extra Examples

Step Over & Step Out

![image-20210811035117954](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210811035117954.png)

> Reminder, for each of these tests we just hit the titular button numerous times
>
> Step: 				 11	12	7	13	4	21	new file
> Step into:		  same as above	 
>
> Step over:		11	12	13	4	21			|
> Step out:		   11	4	21		



### Debugging with our New Skills

> Inspecting...	https://greet-me-debugging.vercel.app/

WHAT YOU KNOW AFTER READING PREVIOUS LESSONS IN THIS CHAPTER:
How to set up breakpoints that pause execution, and step through functions

WHAT'S LEFT:
Analyze variable values while you step

#### Analyzing Values in Editor Pane

HOW:

- Hover over variables to see what their values are at the paused moment
- If you want to examine a longer expression, highlight one

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810193041889.png" alt="image-20210810193041889" style="zoom:90%;" /> ![image-20210810193114441](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810193114441.png)

APPROACH FOR EXAMINING AN ENTIRE FUNCTION:

- Place a breakpoint around the end of a function, or step there
  Either way, we can see the values of all variables affecting it
- They show in the editor pane, or the "local" drop down tab on the debugging pane

![image-20210810193600699](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810193600699.png)

However, if a function is too long and you don't want to examine all of it, just step halfway through it or place a breakpoint at that point

#### Analyze Values in Scope Tray

- The values in the scope tray get updated continuously as you step through your function
- If you change a value in here manually, this will affect the rest of the webpage, after you step forward more

![image-20210811183225612](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210811183225612.png)

#### Overall Debugging Procedure

1. Find a way to consistently recreate the bug you're removing
2. Enter dev tools then open up the file you're examining in the Source Tab's editor
3. Place a breakpoint in your code, then reproduce your bug
   Sometimes you need to interact with your site to reproduce it, but not always

- Do not place the breakpoint on the function's first line, because the JS will parse all functions in the order they appear on the global scope (you won't be stepping through the function at all)
- Place the breakpoint anywhere inside the function scope, then start stepping forward with whichever buttons you want

![image-20210811041619933](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210811041619933.png)

4. Examine your values using the ways I explained in the previous sub section

TRIAL AND ERROR:
It's possible that you guessed wrong and are inspecting the wrong location

- Repeat the process with a different breakpoint location, or set multiple and fast forward to different ones when you're done with the first 
- Remember you can't go back once a line has been executed
  If you want to start over and step through that code again, reload the webpage

#### Debugging React Projects

Debugging React is pretty similar to debugging simple webpages made from HTML/CSS/JS only

- You're allowed to go into the simple non-optimized files, then place breakpoints there
- Stepping through functions can get a little unpleasant since React uses so many built in methods that'll cause stepping to transport you to files you don't need to understand
- The above problem is negated by setting multiple breakpoints or understanding how to use the "continue to here" option when you right click a line of code

### To Learn Later if Needed

1. Snippets: https://developer.chrome.com/docs/devtools/javascript/snippets/
   Makes it so you don't have to keep entering the same things into the console over and over
2. How to place Exception Breakpoints and Function Breakpoints
   https://developer.chrome.com/docs/devtools/javascript/breakpoints/#exceptions
3. How to permanently edit your code via the debugger
   I don't see why I'd bother doing this instead of using VS Code



# ======== POST ========



# Practice Projects

### Create a Simple Form

> https://github.com/Jason2B3/academind_react_4

![image-20210729030931813](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210729030931813.png)

#### Upon Bad Input

1. Entering a negative age should produce a pop of modal

![image-20210726200243904](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726200243904.png)

2. Entering no information should produce a pop up modal

![image-20210726200340844](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726200340844.png)

Should exit the modal by hitting OK or the backdrop

#### Upon Good Input

Should add to the unordered list- specifically at the top
Fields in form should be cleared

![image-20210729031023652](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210729031023652.png)

### Food Order App

#### Components List

- Header -> Cart Button
- Mission Statement
- Meals -> MealDescrip && Quantity
- Modal -> SelectedItems -> + - button && CloseBtn && OrderBtn

#### Main Website Body

![image-20210812032048334](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210812032048334.png)

#### Meal List

![image-20210812031955037](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210812031955037.png)

#### Modal

- Appears after you click the Cart Button 
- Should be able to remove or add additional orders of your selected food, which the Final Price should reflect

![image-20210812031910438](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210812031910438.png)





# BACKBURNER

HINT FOR UNIVERSAL ERROR HANDLING
https://github.com/vercel/next.js/discussions/12652

#### React Topics

1. Finish learning how to use every hook
2. shouldComponentUpdate() method
   https://lucybain.com/blog/2017/react-js-when-to-rerender/
3. Practice lazy loading in multiple nested components inside a personal project
4. Create a personal project using Firebase

- Use advanced authorization features like sending emails to sign up addresses and logging in via facebook / twitter

#### Firebase

1. Learn how to store and fetch arrays from Firebase
   CTRL F return2 in React 02
2. Understand how firebase rules and security work
   [PART 1\] - YouTube](https://www.youtube.com/watch?v=dx_gkSb-Ch0)
   [PART 2\] - YouTube](https://www.youtube.com/watch?v=-VqsK5RrfZk)

#### Misc Topics

3. JSDoc `//@ ts-check`
   Figure out how to get that working
4. [Truncate String with Ellipsis | CSS-Tricks](https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/)
5. Fix the extends lesson in Advanced CSS
   Fix the advanced CSS section in general: give it images
6. Learn how to post React projects on Stackblitz

#### Extra Features to Learn for Small Businesses

1. Chat bot 
2. Google maps integration
   Look into how expensive it is if it gets over 25 users per day (free may not be enough)

#### Skimmed Sections

2BC:
To be continued, because of how relevant the skimmed topic is or will be

return2
Should probably learn before we finish learning React

return4:
Not particularly important unless we run into a very niche situation on the job

Cool Space Loading Animation:
[Cool and responsive buttons with a few lines of CSS - Federico Dossena (fdossena.com)](https://fdossena.com/?p=html5cool/buttons/i.frag)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210927181957233.png" alt="image-20210927181957233" style="zoom: 67%;" />

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210927181828116.png" alt="image-20210927181828116" style="zoom:67%;" />

### Tasteful Looking Sites

http://firebug.com/

[JSON Storage & JSON Hosting Service - JSONBin.io](https://jsonbin.io/)

