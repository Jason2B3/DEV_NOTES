# ====== CSS STYLIN' ======

# Styling React Components 

> CHAPTER-WIDE GIT REPO: 
> https://github.com/Jason2B3/academind_react_2

### Approaches to Styling React

#### List

LEARNED IN OUR UDEMY COURSE:

1. Use styled components to style components one at a time
2. Use CSS modules
3. Import regular CSS only (not a great choice)
   Dodge the negative global effects yourself without a library or package to do it for

The choice is yours, though you'd likely be better off avoiding method 3 on larger projects

REMAINING METHODS

4. Utility first CSS via Tailwind
5. Statically extracted CSS

#### Preferences

STYLED COMPONENTS

- SC lets you... style components... one at a time
  This can be great for media queries and responsive design
- If you don't mind CSS inside your JS, styled components is very good

CSS MODULES (FAVE)

- This keeps your JS and CSS separate
- One downside is that your project must be configured a certain way to even use this method
  Fortunately create-react-app is pre-configured to work with it
- You can use CSS while skipping BEM
- It's as easy as Method 3, with the advantages of method 2

### Method 1: Globally Styling Components

#### Procedure

1. Create a CSS file with a matching name to the component that needs styling
   The extension will be different, obviously
2. Add your regular CSS styling into that CSS file
3. Import that CSS file into the component file, right at the top
   You just need 1 import line in your component module, the CSS file needs no "export" line

![image-20210713222606499](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210713222606499.png)

#### ClassName as an HTML Attribute

You may have noticed that we use `className=""`  as an attribute instead of `class=""`

- Although what we're typing looks like HTML, technically it's JSX- which has similar syntax but varies in a few spots. 
- The React team chooses to use className because class is a reserved word in vanilla JS

#### Why is this Global?

THIS METHOD OF APPLYING CSS IS UNSCOPED:

If we style component A using className= `new-expense`, then we use that class again in component B , The class stylings will be applied to both

- This is usually not a good thing- it leads to visual bugs
- Ideally, we want our CSS to be scoped to one component at a time



### Hardcoded Inline JSX Styles

Styling elements directly in your JSX works a bit differently than inline styling in regular HTML

```react
<div style={}></div>
```

OPTIONS:
The React placeholder we set the `style` attribute equal to demands a JS object

1. Define the JS object containing CSS stylings directly in the placeholder
2. Alternatively, use a variable stand-in 

#### Rules for both Methods

SYMBOL PROPERTY NAMES:

- Some property names with symbols like `background-color` will cause errors
  Define them in camelCase or surround them in quotation marks to make them a string
- `"background-color"` and `backgroundColor` both set the same CSS property

REFERRING TO JS CONTENT:

- You don't need {placeholders} inside these objects if we're referring to variables in our JS section of our component function

#### M1: Define an Object in the Placeholder

```react
function ChartBar(props){
  let barFillHeight= '0%' 
  if(props.max>0){
    barFillHeight= Math.round((props.value/props.maxValue)*100)+'%'
  }
  return (<div style={{height:barFillHeight, backgroundColor:'red'}}></div>)
}
```

We refer back to the `barFillHeight` value from our JS section
Notice how we do NOT type `{barFillHeight}` 

#### M2: Use a Variable Stand-in

There's no difference to this strategy aside from defining the object somewhere else

```react
function ChartBar(props) {
  //% Determine how high to show the thermometer-like chart bar with math
  let barFillHeight = "0%";
  if (props.max > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  const barStylings = { 
    height: barFillHeight,
    backgroundColor: "red",
  };
  return ( <div className="chart-bar__fill" style={barStylings}></div>);
}
```

We style in our JS section instead- see the `barStylings` variable

### Dynamic Inline JSX Styles 

In the previous lesson, we fed hardcoded CSS values to our JSX
What if we wanted our styling to be conditional?

#### Demonstration

> START:	 minior
> END: 		commit 74

EXAMPLE: 
If the user submits bad information into a form, change the text color of a label to red
It should be black by default

![image-20210724063807301](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210724063807301.png) ![image-20210724063826919](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210724063826919.png)

INPUT LABEL:
If the input is valid, we'll set the input label to black
If not, we'll set it equal to red

CourseInput.js:

```react
const CourseInput = (props) => {
  // [excluded parts of ƒ() are less important] .....................
  // Make whether the type of input is valid or not stateful
  const [validInput, setValidInput]= useState(true)
  //% CSS Styling
  let inputLabelCSS = {
    color: validInput ? "black" : "red",
  };
  //% JSX
  return (<label style={inputLabelCSS}>Course Goal</label>);
};
```

We use ternary expressions to help us set the values of our styling KVP's

#### Alternative Methods

In the previous lesson we learned how to apply inline CSS with...

1. Ternary operators
2. Execute if true via &&
3. JS Variable stand-ins (what we did here)

You can apply styling dynamically using any of these methods and it'll be fine
In the Udemy example, they use ternary expressions as KVP values inside placeholders:

![image-20210724064850017](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210724064850017.png)

#### The Problems with Inline Styles

1. Inline CSS stylings have the highest priority
   They'll override anything it clashes with in our actual CSS files
2. We have code duplication

- In our component's CSS doc, we have some default styles for the form colors, which we override with inline styles by design
- We're overriding it on purpose, creating more code than necessary

Try not to overuse inline styles

### Dynamic CSS Classes

By setting a class name conditionally, we can use pre-styled CSS to dictate how our webpage will look under different conditions

EXAMPLE: 
The "invalid" class colors text red while the "valid" class colors text blue
Set a JSX class value equal to a variable that is altered based on circumstance

USEFUL CSS TIP: 
Skipping a space between identifiers

```
.classA.classB{
	// selected elements belong to classA AND ALSO classB
}
```

#### Adding Dynamic Classes

Oftentimes, you'll have JSX elements that require multiple classes on them
Use a JS template literal + placeholders inside your default JSX placeholders

```react
return( <p className={`new-expense ${vari}`})
```

- We can set the value of vari in our JS code
- It should also be stateful in order to re-render the component function once vari gets changed

#### Demo

> START:	 commit 74
> END: 		commit 75

CourseInput.js

```react
const CourseInput = function(props) {
  // [excluded parts of ƒ() are less important] .....................
  // Make whether the type of input is valid or not stateful
  const [validInput, setValidInput] = useState(true);
  //% JSX
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${validInput ? "" : "invalid"}`}>
        {/*If the input's not valid, add the "invalid" class */}
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
```



### Hot Module Reloading (return2)

While styling your components that only appear after a certain user changes the webpage state, using the default create react app setup can be a tad irritating 

- CRA doesn't include HMR by default, so you'll constantly have to reload your project to notice changes on certain elements that appear conditionally
- You can enable hot module reloading onto your React projects, but it comes at a cost regardless of how you do it

#### Method 1: Eject your Project

PROCESS:  https://www.youtube.com/watch?v=8F5YT-YR_tg&t=1s

1. Eject your project 
   It brings all hidden configuration files out into the open for you to mess with
2. Install the hot module reloader library

ISSUES:

- You have to manage your project's packages yourself from now on
- This action cannot be reversed
- You cannot update your Create React App to a newer version when another edition is released

PROCEDURE:
Assumes you're working on a create-react-app project

1.  See snippet below

```
** commit or delete all uncommitted changes **
npm run eject
npm i -S react-hot-loader	(the S places it in package.json)
```

2.  Place the following in the babel KVP at the bottom of package.json
    `"plugins": ["react-hot-loader/babel"]`

![image-20210818042537074](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210818042537074.png)

3. Paste the following at the very top of App.js

```react
import { hot } from 'react-hot-loader/root';
```

4. Wrap the App.js default export with hot()

```react
export default hot(App);
```



#### Method 2: React Rewired

Relies on  [react-app-rewired](https://github.com/timarney/react-app-rewired) and [react-app-rewire-hot-loader](https://github.com/cdharris/react-app-rewire-hot-loader), along with Dan Abramov’s react-hot-loader.

DRAWBACKS:

- React App Rewired doesn’t have any warranty. 
  If it breaks, you need to fix it yourself or find community help
- Must maintain your configuration yourself as well

#### Verdict

> SOURCES:
> [Hot Reloading in Create React App Without Ejecting (daveceddia.com)](https://daveceddia.com/hot-reloading-create-react-app/)
> [Blog - Next.js 6.1 | Next.js (nextjs.org)](https://nextjs.org/blog/next-6-1)

As a novice, it probably isn't wise to use these methods unless you're building a project you don't care about being broken later down the line

HOPE
Next JS apparently has this capability built in by default, so look forward to learning that



# Method 2: CSS Modules 

### Intro

CSS Modules will help keep your CSS and JS in separate files
Be aware that your project must be configured to use it, but create-react-app comes pre-prepared 

#### How it Works

CSS Modules adds local scoping to all the class names you give your elements
It does this by taking your class names and transforming them into more unique ones

Your CSSM classes can be dynamically assigned or hardcoded
They're really just regular CSS classes that get their names scrambled during the compile stage

BENEFITS:

- Can repeatedly use the class names in all your modules- since reusing the same one in a different file won't cause any overlap or issues
- Can ignore BEM without consequence

#### Rules

- Every class in your JSX must be converted to a CSSM version
  There is no mixing between regular CSS classes and some CSSM classes
- If you neglect this rule, your hardcoded classes will not be referenced properly in your CSS modules
  Any selectors pointing to them will miss and have no effect, creating visual bugs

#### Scope is not 100% Local

- Using element selectors in your dedicated CSS module files will still affect every other element of the same type nested inside. 
- The only way to keep your style files truly local is to use classes

EXAMPLE:       ![image-20210728132103447](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210728132103447.png)

Using `div{ margin:20px}` in the App.module.css file will affect every other div in our project because they are nested inside

### CSSM Classes 

#### Hardcoded CSSM Classes:

Relies on dot notation, or bracket notation if you want

```
<div className="container">		
becomes		
<div className= {styles.container}>	
```

![image-20210726144345111](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726144345111.png)

#### Hardcoded CSSM Classes w/ Unique Characters:

When class names include special characters like `-`, dot notation fails
Use bracket notation instead, with the class name encapsulated in quotation marks

```
<div className="container-div">
becomes	
<div className= {styles["container-div"]}>
```

![image-20210726144630772](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726144630772.png)



#### Multiple Hardcoded or Dynamic CSSM Classes 

MULTIPLE DYNAMIC:

- To assign class names dynamically, you're going to need to place JS inside a React placeholder
  This just means setting a class depending on the value of a stateful variable
- The dynamic class assignment assignment must be done inside JS placeholders then `${}`

![image-20210726145005881](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726145005881.png)

In the above example, we assign a dynamic form-control class name.
This is hardcoded, since no matter the circumstance, our div will have that class
We want the "invalid" class name to be present only when the value of `validInput` is false

MULTIPLE STATIC:

```react
<div className={`${classes['container']} ${classes['centered']}>
```



#### Clever way to Define Multiple Classes

Use an array then join all entries together using a space to define your multiple classes
The following example uses regular CSS, but you'll need to incorporate styles[] for CSSM

![image-20211005112758586](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211005112758586.png)

### Using CSS & SCSS Modules

#### Starter Code: READ FIRST

Description:

- We have a form set up that adds a new element to the list whenever we submit a text input
  If we try to submit with no text input, the field background and label go red
- It was initially coded using Method 3- Global CSS files
  We are converting our syntax so we can use CSS Modules instead (Method 1)

![image-20210726145712418](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726145712418.png)

Dedicated Project Commits:

> START:	 commit 75 (starts by using global CSS, aka Method 3)
> END: 		commit 79

We'll be changing 2 documents to move from React Component Styling Method 3 to 1:

- Button.js only needs hardcoded CSSM classes to be converted (demo part 1)
- CourseInput.js needs hardcoded AND dynamic CSSM classes to be converted properly

#### Procedure

1. Add a new import line to the component you're styling
   Filepath may vary depending on where the CSS file is relative to the component module you're in

```
import styles from './Button.module.css'
OR
import classes from './Button.module.css'
```

![image-20210726120037358](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726120037358.png)

2. Change your regular CSS file names ->
   myName.css into `myName.module.css`
3. Style your component inside its dedicated CSS file- if you haven't already
   Use any class names you want- so long as you aren't repeating any inside that 1 document
4. Assign a CSSM version of the className you'd give an element normally in your JSX

CONVERTING TO SCSS MODULES
SCSS Modules works the exact same as CSS Modules and comes with additional perks

5. Install SCSS as a dev dependency

```
npm install node-sass --save
```

Some newer versions of node-sass are not compatible with node just yet. In that case, install an older version

6. Change all your CSS file extensions to `.scss`



#### Demo Part 1: Hardcoded CSSM Classes

We're inspecting Button.js for this subsection

Button.js @ START:
Normal class names, with normal class selector usage in our CSS file

![image-20210726122453413](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726122453413.png)

Button.js @ END:
CSSM class name assigned, while the CSS file remains the same

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726141625276.png" alt="image-20210726141625276" style="zoom:80%;" />

Button.css @ START & END:
Technically we renamed it to Button.module.css... but the content's the same

![image-20210726122808472](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726122808472.png)

#### Demo Part 2: Multiple Dynamic CSSM Classes

We convert CourseInput.js into using CSS modules as well

- The difference between it and Button.js is that is uses regular CSS classes that are assigned dynamically
- We must replace them with dynamic CSSM classes now

EXPLANATION:

- One of the divs needs a class name present all the time (`form-control`)
- Another class name must appear conditionally based on the value of a stateful variable
  (`invalid` appears when the value of `validInput` is set to true) 

CourseInput.js @ START

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726152850151.png" alt="image-20210726152850151" style="zoom:80%;" />

CourseInput.js @ END

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726151929205.png" alt="image-20210726151929205" style="zoom:80%;" />

CourseInput.css @ START & END
Technically we renamed it to CourseInput.module.css... but the content's the same

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726152552137.png" alt="image-20210726152552137" style="zoom:80%;" />

#### Common Error: Forgetting styles dot

We made an error when first attempting Demo Part 2 with no lecture assistance
It's been corrected, so don't search for it in the commits

At first I forgot to add a CSSM class name to "invalid" (made the class ineffective)
This was still a regular hardcoded CSS class that I used before converting everything

![image-20210726153344054](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726153344054.png)

- There was a visual bug that made the invalid class appear when we inspected the DOM in our dev tools, but it had no effect in the CSS file
- Attempting to submit nothing would not highlight anything red despite the invalid class being added
  The worst bugs are the most subtle, aren't they?

![image-20210726153500964](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726153500964.png)

![image-20210726153256642](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726153256642.png)

HOW TO GET TIPPED OFF

- If you see a regular and non-weird looking CSS class name , you know it hasn't been scrambled by CSS Modules. 
- CSSM class names have a distinct look you can recognize

After fixing our mistake by making "invalid" a CSSM Class...

![image-20210726153855059](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726153855059.png)



### Mixin Theme Provider

#### Why the SC Theme Provider Rocks

Styled Components has a feature that lets you create an object of styles you can reference in any module within your project folder

- It's great for reusing styles across a project
  We don't have to re-enter a consistent font size or font several times in our component files
- CSS Modules does not have a feature like this, however we can mimic it via mixins

#### Mixin Review

REFRESHER:
This shows you how to reference mixins defined in the very same file 

```SCSS
// Create a mixin
@mixin mixName { /*Whatever code you want*/ }       

// Use a mixin
.selector {
    margin: 0;
    @include mixName;	/*Mixin is called here*/
}
```

SPREAD IT:
Define one SASS file full of mixins then import it in any component SASS file that needs it

#### Procedure

1. Have SCSS modules set up
2. Create one SASS file full of mixins you'll need project-wide
   You can style a single aspect like text color, or style several at once per mixin block
3. Import your project-wide file to EACH component where it's needed
4. Reference and use a mixin with `@include mixname`
5. You may want to dedicate a folder for multiple different SCSS files
   Using 1 for an entire project would get cluttered 

#### EXAMPLE:

mixer.scss 									![image-20210727201627730](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210727201627730.png)

ErrorModal.module.scss			![image-20210727201758774](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210727201758774.png)

#### A better way?

- I don't know if this is good or bad for performance, since I came up with this method myself 
- I could not find another way to replicate the theme provider, but I much prefer CSS modules to SC



# Method 3: Styled Components

ALTERNATIVE: 
CSS Modules which we learned in the tail end of the previous chapter
I'll admit it is much easier than this, but styled components is popular and not overly tough

——————————————————————————————————————————————————————
INSTALL AND USE:

Install as a dev-dependency:

```
npm install --save styled-components
```

Use this at the top of any JS modules that use this package:

```
import styled from "styled-components";
```

——————————————————————————————————————————————————————
WHERE WE LEARNED:
https://www.youtube.com/watch?v=c5-Vex3ufFU&t=2567s

————————————————————【 DEFINITIONS 】———————————————————————

SC's
Styled components created inside a JS module
Can have one or multiple within a React Component

RC's
React Components

SC-CSS
Styled Components CSS - what we place in the backticks

### Basics 

Styled Components eliminates the global CSS module issue

GETTING STARTED:
https://github.com/Jason2B3/style-components-start

RECREATING THE GETTING STARTED REPO:
Once this version of React becomes outdated, you'll need to recreate this repo

1. Create a React project as you would normally

```
cd ~/Desktop								// move to desktop 
npx create-react-app <my-app-name>			// create and name your project
——————————————————————————————————————————————————————
** open new folder in VSCode => open terminal **
npm start						// open live preview (keep on during development)
** add a .gitignore file with node_modules typed inside **
```

2. Delete all files within src
3. Install styled components as a dev dependency

```
npm install --save styled-components
```

4. Add the following 2 files inside src:

App.js

```react
import React from 'react'
function App(){
  return <div>App</div>
}
export default App
```

index.js

```react
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const root= document.getElementById('root')
ReactDOM.render(<App/>,root)
```



#### How it Works

Styled Components applies CSS stylings to specific components only
You will never run the risk of creating visual bugs when a class name is reused ever again

- Styled components accomplishes this by having you apply CSS styles directly to an element
- They style using unique class names that are generated by the library itself
  Since they're unique, you won't have to worry about creating unique ones yourself (`hnzzr-43`)

#### How Styled Component CSS Works

All your styles will directly be applied an element of the type you specify

- For instance `let BlueSec= styled.section` creates a styled section element
- No other section elements will have its stylings, unless you specify them as `<BlueSec>` in JSX

#### Comments 

Use `//` or `/**/` in the backtick section

### Advice / Rules

These should be followed in every project, whenever you use Styled Components

#### List

1. Handle events and media queries for SC components where the SC-CSS syntax is


![image-20210725182138557](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210725182138557.png)

In the situation shown above, I would define an onClick handler inside of Button.js, NOT App.js
I would handle media queries for our Button element inside Button.js as well

2. Don't EVER place SC-CSS inside a component function
   Keep it outside that scope or it will tank your performance (above or after the component ƒ() works
3. Name the components you make with SC using CapitalizedCamelcase
   Start with a capital, start each new word with a capital

#### Advice

Remember, many of our examples in this chapter omit the tedious import lines that you actually will need to execute some of React or SC features 

```
// Will need for ALL
import styled from "styled-components"; 

// Common when dynamically coding
import React, { useState } from "react";
```



### Hardcoded Styled Components

In styled components, we place our CSS inside 2 backticks

- Eliminate the use of regular CSS selectors unless you're using pseudo selectors
- All styles will apply to the component you create using unique classes you don't have to create names for manually

#### Ex. Style a 1-time Module

```react
import styled from "styled-components"; // REQUIRED

// Create a uniquely styled h1 element named <RedTitle> (use in JSX)
const RedTitle = styled.h1`
  color: red;
  font-size: 5rem;
`;
// Component function
function App() {
  return (
    <div>
      <RedTitle>App</RedTitle> {/*Use your styled H1 here*/}
      <h1>Second line</h1>
    </div>
  );
}
export default App;
```

![image-20210724224147311](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210724224147311.png) ![image-20210724225340970](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210724225340970.png)

#### Ex. Style a Reusable Module

This time we're styling a Module that isn't App.js

- We're styling a custom `<button>` element that we want to be reusable in many situations
- This means we must be able to change the text inside depending on where we use it
  For that, use `props.children` 

Button.js

```react
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  color: #333;
  outline: none;
`;
function Button(props) {
  return <StyledButton>{props.children}</StyledButton>;
}
export default Button;
```

App.js

```react
function App() {
  return (
    <MainWrapper>
      <h1>First line</h1>
      <Button>Defined where Button tag is used</Button>
    </MainWrapper>
  );
}
export default App;
```

![image-20210724234346008](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210724234346008.png)

We passed the responsibility of setting the button text over to where we used our custom component

- Alternatively, you can directly define the text in Button.js
- Though that would make this button a lot less reusable
  All other incarnations will have that text as well

### Selectors in Styled Components

The CSS we use in this chapter is a bit different than the CSS we'd use regularly
Let's directly compare CSS modules vs styled components (using last lesson's example)

DIFFERENCES

1. We remove all selectors that only refer to the component we're building
2. If a selector is for a pseudo element, or references an element nested inside the component we're building, use `&` 

#### Comparing Modules vs Styled Comp

REGULAR CSS MODULE METHOD:

Button.js

```react
function Button(props) {
  return <button className='zeta'>{props.children}</button>;
}
export default Button;
```

Button.css

```css
.zeta {
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  color: #333;
  outline: none;
}
```

——————————————————————————————————————————————————————

STYLED COMPONENT METHOD:

Button.js

```react
import styled from "styled-components";

// Create a button with styles applied to it
const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  color: #333;
  outline: none;
`;
function Button(props) {
  return <StyledButton>{props.children}</StyledButton>;
}
export default Button;
```

The `.zeta` selector was eliminated- because it referred to the button element
It is assumed that you want styles to be applied to the element type you specified after `styled.`

#### When to use & 

As stated earlier, sometimes we need to refer to certain elements in our styled component CSS using `&` to point to the very component we're building

PSEUDO SELECTORS:
In styled components, we replace the selector that points to our component being built with `&`
We keep `:focus` because we want to set styles for when our component is hovered over

```
Regular CSS Module:
.button:focus {
	~~ whatever
}
——————————————————————————————————————————————————————
Styled Component version:
&:focus {
    ~~whatever
}
```



NESTED ELEMENTS:
If an element you're styling is a descendant of the component you're building with SC, then keep the part of the selector that you can't replace with `&`

```
Regular CSS Module:
.button section {
	~~ whatever
}
——————————————————————————————————————————————————————
Styled Component version:
& section {
    ~~whatever
}
```



#### Example for & Use-Cases

App.js

```react
import styled from "styled-components"; // REQUIRED
const MainWrapper = styled.h1`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  & .nestedPara {
    color: blue;
  }
`;

function App() {
  return (
    <MainWrapper>
      <p className="nestedPara">I should be blue!</p>
      <Button>Buttin 1</Button>
      <Button>Buttin 2</Button>
    </MainWrapper>
  );
}
export default App;
```

Button.js

```react
const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  color: ${props=>(props.primary? 'red': '#fff')}
  outline: none;
  &:hover{
    background-color: gray
  }
`;
function Button(props) {
  return <StyledButton>{props.children}</StyledButton>;
}
export default Button;
```

![image-20210725125704740](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210725125704740.png)

1. When we hover the button, it turns gray
   Because of our `&:hover{}` selector
2. The p tag nested within `<MainWrapper>` is blue 
   Because of our `& .nestedPara {}` selector

### How many Styled Components can we Make?

- When using React Normally, you'll likely create 1 component per JS file then reuse it wherever
  These are what I call React Components (RC's)
- You can do this with Styled Components as well, or you can create several of them in 1 JS file then export them off  at the same time

#### Comparing RC's with SC's

|                          | how many per JS module |
| ------------------------ | ---------------------- |
| styled components (SC's) | 1 or more              |
| react components (RC's)  | 1                      |

EXAMPLE:

App.js

```
return (<Button>Howdy</Button>)
```

Button.js

```react
import styled from "styled-components"; // REQUIRED
const StyledButton1 = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  outline: none;
  background-color: white
  
`;
const StyledButton2 = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  outline: none;
  background-color: yellow
  
`;
function Button(props) {
  return (
    <div>
      <StyledButton1>{props.children}</StyledButton1> {/*component 1*/}
      <StyledButton2>{props.children}</StyledButton2> {/*component 2*/}
    </div>
  );
}
export default Button;
```

![image-20210725131346219](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210725131346219.png)

The Button module returns a div containing 2 `StyledButtons`

- It can be confusing, since Button, StyledButton1, and StyledButton2 could all be referred to as components

- When speaking about Styled Components, I'll refer to them as SC's

TO CONCLUDE: 
You can return multiple SC's inside one module and use them as React components



### Dynamic Styled Components: Incorporate React States

So far we've learned how to use SC-CSS that is set in stone
We need to be able to set these stylings conditionally, and we have 2 methods to do so

#### RULE

WHERE TO HANDLE EVENTS:
If you're creating a react component with SC, handle the dynamic events where your unique tag is being created

![image-20210725182138557](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210725182138557.png)

- In the situation shown above, I would define an onClick handler inside of Button.js, NOT App.js
- If I go against this rule, the event handler won't fire off properly

#### Desired Output 

I'll be showing you 2 ways to accomplish the same feat

![image-20210725194816831](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210725194816831.png)

The red field color and the red label are what the invalid stylings cause 
They trigger when we hit the button with no input (setup not shown)

#### Style with Dynamic Classes

- When we use Styled Components in our return JSX, we can still assign classes
  Those classes can be hardcoded or even dynamic
- When we assign class names dynamically, any stylings in our SC-CSS will render
  Assuming the class names are based on something stateful- which reinvokes the component ƒ()

> Refer to acad_react_2
> START:		commit 76
> END:			commit 77A

CourseInput.js

```react
import styled from "styled-components"; // REQUIRED
const FormControl = styled.div`
  /* STYLE FOR INVALID (Other stylings not relevant to this ex.)*/
  &.invalid input {
    border-color: red;
    background: rgb(240, 147, 147);
  }
  &.invalid label {
    color: red;
  }
`;

const CourseInput = (props) => {
  //——————————————————————————————————————————————————————————————————————
  // validInput is a stateful variable (that's all you need to know)
  const [validInput, setValidInput] = useState(true);
  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl className={validInput ? "" : "invalid"}> {/*IMPORTANT LINE*/}
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
```

FormControl's class explained:

| stateful variable      | sets the className equal to... |
| ---------------------- | ------------------------------ |
| `validInput === false` | invalid                        |
| `validInput === true`  | ""                             |

DIFF STRATEGY REMINDER:
Ternary, execute if true, and regular JS logic to set the value of a variable all work here

#### Prop-dependent Styles

Props get passed into the SC-CSS automatically
You can refer to them using an arrow function and set styles conditionally

1. Pass your component function a prop using your SC tag

```react
<StyledButton isValid={statefulVariable}><StyledButton>
```

- Change the value of SC-CSS based on them via ternary or "execute if true" expressions
  Devs this technique "function interpolations"
- RULE: Make this happen inside the file where your SC-CSS is located

2. Use an arrow function inside a `${}` within your SC-CSS
   Use ternary logic inside to set a value depending on the isValid prop value

```react
${(props) => (props.isValid ? "black" : "red")};
```

EXAMPLE:

> Refer to acad_react_2
> START:	commit 77A
> END:		commit 77B

CourseInput.js

```react
import styled from "styled-components"; // REQUIRED
const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.isValid ? "black" : "red")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.isValid ? "#ccc" : "red")}; 
    background: ${(props) => (props.isValid ? "white" : "#fad0ec")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = (props) => {  
  //———————————————————————————————————————————————————————————————————————
  // validInput is a stateful variable (that's all you need to know)
  const [validInput, setValidInput] = useState(true);
  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl isValid={validInput}>
        {/*We send whether the input is valid up to this comp ƒ()'s prop*/}
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
```



### Media Queries with Styled Components

Media Queries in Styled Components are fairly simple

I'd even consider them to be superior to regular CSS queries, since you can focus on styling components one at a time, in an isolated setting

PROCEDURE

1. Add your media query block somewhere in your SC-CSS
2. Style things inside that block so they look a certain way when the screen size requirement is met

RULE:
If you're applying media queries to component created with SC, place the media query inside that module

![image-20210725182138557](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210725182138557.png)

- Our custom `<Button>` is a styled button element created with SC
- Place the media query in the JS file where `<Button>` is created - Button.js

#### Demo

> Refer to acad_react_2	=> 	commit 78

OBJECTIVE:
Make your button span the entire container width on mobile
Keep it's size constrained on desktop

Mobile:		 	![image-20210725211150891](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210725211150891.png)

Desktop:  		![image-20210725211206996](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210725211206996.png)

Button.js 
The media query must be here- don't make the mistake of trying to set a query for it elsewhere

```react
import styled from "styled-components"; // REQUIRED
const StyledButton = styled.button`
  width: 100%;
  @media (min-width: 768px) {
    width: auto;
  }
`;

const Button = (props) => {
  return (
    <StyledButton type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
};
```

### Extending Styles

Sometimes you'll have multiple SC's in one JS file that are very similar

- Extending styles copies over one Styled Component's CSS to another
- You can override certain styles that the 2 don't have in common

#### Demo

We're going to create 2 styled button elements that share the same stylings
The only difference is that button 2 should have larger text within

Button.js

```react
const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  outline: none;
  margin: 20px;
`;
const StyledButton2 = styled(StyledButton)`
  font-size: 4.8rem;
`;
```

![image-20210725225034342](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210725225034342.png)

### Configuration 1: Global Styles

There are some stylings you want applied throughout your entire webpage

- You've created CSS config files in the past where you set a margin, text size, or font color you expect to be consistent across your site.
- In SC, we accomplish this using Global Styles

#### Assumption

I'm assuming index.js is the central JS file in your project
If it isn't modify the instructions outlined here in your head

Should contain similar content: 

![image-20210725235542027](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210725235542027.png)

#### Procedure

1. Create a file in your project named `globalStyles.js`- the name can vary 

```react
import { createGlobalStyle } from "styled-components";
import styled from "styled-components"; // REQUIRED

const GlobalStyle = createGlobalStyle`
// Add in any other universal stylings you need
html {
	height:100%
}
* {
	padding:0;
	margin: 40px;
}
`;
export default GlobalStyle;
```

2. Enter index.js , or whatever your JS point of origin is- you can tell by seeing content like this w/in

![image-20210725235542027](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210725235542027.png)

3. Mount the global styles with `<App />`
   The filepath to your globalStyles.js doc may vary depending on the name/location you put it in

![image-20210726000411017](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726000411017.png)

#### What you should Place Inside

- Fonts, text-sizes and colors
- Default margins

You can always override these styles later on in your SC-CSS, as long as the specificity you provide is sufficient to do so

### Configuration 2: Theme Provider

You do not need to read the previous lesson before this one, but they accomplish similar things
The theme provider can help us mimic having a config file with site-wide styles you can reuse

HOW IT WORKS

- You create a JS module holding data that you expect to be used site-wide
  Font sizes, weights, default colors...etc
- Default export an object holding data like this inside
  You can eventually reference all this information from inside any React component files

#### Assumption

I'm assuming index.js is the central JS file in your project
If it isn't modify the instructions outlined here in your head

Should contain similar content: 

![image-20210725235542027](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210725235542027.png)

#### Procedure

1. Create your themes file named `ProvideThemes.js` or something
   Export default an object with nested objects containing data about what the key name describes

```react
// We'll be using these values site-wide
const ProvideThemes= {
  colors: {
    main: "#37474f",
    dark: "#263238",
    light: "#546e7a",
  },
  fontSizes: {
    large: "3rem",
    medium: "5rem",
  },
};
export default ProvideThemes
```

2. Add in the 2 following lines near the top of index.js

```js
import { ThemeProvider } from "styled-components";
import ProvideThemes from "./components/theme/ProvideThemes"; 
// filepath/name varies depending on where you placed the file in step 1
```

3. Change the `ReactDOM.render` function within index.js 

- Wrap `<ThemeProvider> ` tags around whatever's within the ReactDOM.render function 
  Look inside index,js for that, and eliminate the mounts from using Global Styles if present
- Set the theme attribute equal to the export from step 1
  We're passing the export down to all React components as a prop

```react
ReactDOM.render(
  <ThemeProvider theme={ProvideThemes}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  root
);
```

Step 3 Quirk: Eliminate Mounts if Global Styles are Used

If global styles are already in use, get rid of your mounts as soon as you surround everything in ReactDOM.render in `<ThemeProvider>` tags

![image-20210726000411017](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726000411017.png)

![image-20210726004403697](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726004403697.png)

4. You're good to go! 
   Reference these in your SC-CSS now with the themes prop (see next section for how)

#### Step 4: Access config object via props

- We'll be using arrow functions inside SC-CSS placeholders, just like for how we use props to dynamically style things
- In fact, that's exactly what we're doing- checking the theme prop for the object we defined in the previous subsection's first step

Button.js

```react
import styled from "styled-components"; // REQUIRED
const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  outline: none;
  background-color: ${(props) => props.theme.colors.dark};
`;
const StyledButton2 = styled(StyledButton)`
  font-size: 4.8rem; // extended styles with 1 override
`;
```

![image-20210726005649172](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210726005649172.png)

#### Demonstration:

> https://github.com/Jason2B3/style-components-start
> commit A

### To Learn More...

Watch this video if you enjoy using Styled Components and wish to firther your knowledge on it in the following topics: https://www.youtube.com/watch?v=c5-Vex3ufFU

![image-20210725230406473](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210725230406473.png)

# ==== STATE MANAGEMENT ====

# Context API & useContext

Remember, Context API can also be referred to as "React Context"

![image-20210731194003100](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210731194003100.png)

> CHAPTER WIDE REPO: 		https://github.com/Jason2B3/context-learn

### Intro to React Context

- The Context API is an out-of-the-box solution that helps us pass data and state anywhere in our React application without long prop drilling chains
- Using the context API with certain React hooks is 1 very popular method to perform "State Management"

#### Reasons we Need React Context

1. Prop drilling sucks, especially in big projects

- If we have long component branches, you're going to be prop drilling for a while
- If you need to pass data sideways, you'll be passing data a long ways up then back down again

2. Some data is just required across many parts of your app

- For example, the login status matters pretty much everywhere. 
- Are we going to pass that state to every module in our project file? That's a ton of extra code

3. Passing stateful variables through props is bad practice
   We do that in our project currently- by passing `isLoggedIn` to a different component 

- Certain components may receive outdated state snapshots, leading to bugs
- This used to be a more serious problem back in the days before Redux (an alternative)

3. Some components don't even use the data that gets passed into them via props
   They just forward it to the next component on their branch

- We pass `isLoggedIn` from App.js -> MainHeader.js -> Navigation.js
- MainHeader doesn't even use the data- we just need it to pass data further down

EXAMPLE: Passing state through props in our current project

```react
const [isLoggedIn, setIsLoggedIn] = useState(false); //on line 9
```

App.js <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210805004412721.png" alt="image-20210805004412721" style="zoom:80%;" />

#### What React Context Offers

![image-20210805010533816](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210805010533816.png)

We can send up and pass down data to any component without chains!

#### Context with Dynamic Data

- You are not limited to just sharing static data with the Context API
- You can share methods that will change stateful variables- this allows you to change them from anywhere in your project

What you see below is a snippet from the following lesson

- The "count" variable is stateful, and you can increase or decrease its value from any component, as long as that component consumes the `increaseCount` or `decreaseCount` function
- This change in "count"'s value will be reflected project wide
  It is a global state which is shared with all components that stem from App.js (in that example)

![image-20210806144702869](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210806144702869.png)



### Context API Demos

> SOURCE: https://www.youtube.com/watch?v=ZBZ6BqoUDsU
> REPO: https://github.com/Jason2B3/context-learn 			(starting files on commit 0)

#### Starting Files Explained

> CHECKOUT: commit 1

We have a simple incrementor set up in a file called Counter.js
Pressing the increase/decrease button changes the value of the stateful "count" variable

![image-20210805163147759](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210805163147759.png) <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210805165508772.png" alt="image-20210805165508772" style="zoom:73%;" />

WHAT WE'D LIKE TO SHARE ACROSS OUR COMPONENTS:
The stateful "count" variable, plus the `increaseCount/decreaseCount` functions



#### useContext Method

> commit 2

Context file

```react
import { useState, createContext } from "react";
export const CounterContext = createContext(); // IMPORT TO Counter.js in step 4

function CounterContextProvider(props) {
  // Paste what we need shared here ---------------------
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  // Paste what we need shared here ---------------------
  const shareThese = { count, increaseCount, decreaseCount }; // STORE POINTERS
  return (
    <CounterContext.Provider value={shareThese}>
      {props.children}
    </CounterContext.Provider>
  );
}
export default CounterContextProvider;
```

App.js 

```react
<CounterContextProvider>
	Whatever else    
</CounterContextProvider>
```

Use location 

```react
const { count, increaseCount, decreaseCount } = useContext(CounterContext);
```



#### Custom Hook Method

> commit 3

Context file

```react
import { useState, createContext, useContext } from "react"; // import useContext
const CounterContext = createContext();
export const useCustomHook = () => useContext(CounterContext) // export custom hook

function CounterContextProvider(props) {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  const shareThese = { count, increaseCount, decreaseCount };
  return (
    <CounterContext.Provider value={shareThese}>
      {props.children}
    </CounterContext.Provider>
  );
}
export default CounterContextProvider;
```

App.js

```react
<CounterContextProvider>
	Whatever else    
</CounterContextProvider>
```

Use location 

```react
import React from "react";
import { useCustomHook } from "../PATH-TO-CONTEXT-FILE";

function Counter() {
  const { count, increaseCount, decreaseCount } = useCustomHook();
  ... use data freely
}
```



#### Access Context Data in App.js

> commit 5

You can't actually access the data stored in your context file inside App.js, assuming you wrapped the `<ContextFileNameProvider>` tags around the JSX content in that file

PROBLEM ILLUSTRATED:

![image-20210806195204829](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210806195204829.png)

You'll encounter this error if you try:

![image-20210806195223995](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210806195223995.png)

SOLUTION ILLUSTRATED

1. Take away the `<CounterContextProvider>` tags from App.js
2. Wrap those tags around the `<App />` tag in index.js

![image-20210806200947228](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210806200947228.png)

### When to use Props vs Context 

#### When to use Props

1. When you need a component to be reusable

- If you have a generic Button component you intend on using in multiple places, you're better off sending a handler to it via props from its parent (because you can send a diff one next time)
- By using context, you give your component a single functionality
  This is a problem if you wanted it to do something else in another location

ALTHOUGH, we found a workaround that lets you reuse components via props while accessing data from anywhere via Context API

#### When to use Context

We already discussed when Context API is useful, but I'll summarize
WARNING: If your data is going to be changing frequently, use Redux instead

1. When you'd otherwise be forced to prop drill, as long as the data you're storing won't change too frequently

- Sending data sideways, or a long way up/down a component branch
- If you need to pass data through a component that doesn't use the data, only to forward it to another component on the branch...that's a good indicator

2. When data is required across many parts of your app
   You'd be forced into placing data in App.js then sending it as a prop to lots of components

3. When you need to pass stateful variables to another component
   It's bad practice to do so via props

#### What React Context should not be used for

1. To store stateful variables that change very often- use Redux for that instead
2. To replace ALL component communication and props
   As explained later, we can't reuse components if we rely exclusively on Context API

#### What to Place in and Out of the Context File

- Keep data that's needed sitewide inside the context file

- Perform calculations and mutations of this data inside other files, when appropriate

Don't perform all calculations and mutations inside this context file

- It'll get real long if you do
- If a component needs to mutate data that's needed site wide, it'd be more appropriate to perform operations inside that component's file- just so you can see what's going on
- The changes get updated automatically anyway, if the data you're mutating is stateful
  Ex. Changing useState or useReducer variable values



### Reusable Components with Context Functions

#### The Issue

PROPS ONLY:
When we use props, we can specify different onClick handlers for each instance of our reusable-components

Inside App.js            	![image-20210806150907813](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210806150907813.png)

Inside Additional.js	![image-20210806170205633](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210806170205633.png)

CONTEXT API ONLY:
However, if we use Context API inside the `<Additional>` button, we force this component to use a single handler for all instances (`increaseCount` handler in this case)

Inside App.js		       ![image-20210806170348058](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210806170348058.png)

Inside Additional.js	![image-20210806151630487](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210806151630487.png)

#### Overcoming React Context Limitations

There is a way to keep the flexibility of React Context while being able to customize and reuse your components via props; just use them together

> REPO: https://github.com/Jason2B3/context-learn
> commit 4: Reusable Components with Context Functions

GOAL:
Find a way to reuse the `<Additional>` component in your project while having it perform an action dictated by different functions stored in the CounterContext.js file

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210806172501817.png" alt="image-20210806172501817" style="zoom:80%;" /> ![image-20210806172629589](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210806172629589.png)

- Both buttons are made with `<Additional>` tags
  I've shown what's stored in the context file on the right
- Assign `increaseCount` to the left button, and `decreaseCount` to the one on the right 

#### PROCEDURE

I'm assuming you have the Context file set up and that you've accessed all the data inside the Countyer.js file already (either via useContext, a custom hook, or whatever)

1. Take the data and functions you're sharing with the Context API and drop them in the component using the `<Additional>` custom tags (as long is it isn't App.js b/c you'll get an error there)
2. Pass the context data through a prop over to Additional.js
3. Have an onClick attribute set up to equal to that same prop

Additional.js 	![image-20210806171410599](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210806171410599.png)

Counter.js 		![image-20210806171943791](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210806171943791.png)

#### Counter.js Full Code

```react
import React, { useContext } from "react";
import { useCounter } from "../contexts/CounterContext";
import Additional from "./Additional";

function Counter() {
  // Bring in all the shared variables fro, CounterContext.ks
  const { count, increaseCount, decreaseCount } = useCounter();
  return (
    <React.Fragment>
      <h3>Counter Component</h3>
      <p>Count is: {count}</p>
      {/*Pass context data through props*/}
      <Additional text={"Context increase"} handler={increaseCount}/>
      <Additional text={"Context decrease"} handler={decreaseCount}/>
    </React.Fragment>
  );
}
export default Counter;
```



### Having One Central Context File

I'm not sure how this would work on larger projects, but we can set it up so all components deliver data up to the same context file.

I made this method up while watching a video that was somewhat related in my course
[Watch here](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599262#overview)

> REPO: https://github.com/Jason2B3/context-learn
> commit 6: content hub

#### Creating a Project-Wide Context File

1. Set up your context file, but store objects inside `shareThese`  this time

```react
import { useState, createContext, useContext } from "react";
// Create and export your custom hook
const CounterContext = createContext();
export const useCounter = () => useContext(CounterContext) 

function CounterContextProvider(props) {
  //% Counter.js context data
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  const counter_js= {count, increaseCount, decreaseCount}

  const shareThese = { counter_js };
  return (
    <CounterContext.Provider value={shareThese}>
      {props.children}
    </CounterContext.Provider>
  );
}
export default CounterContextProvider;
```

Each component will get it's own dedicated nested object, which will be useful for not mixing up several components' variables into 1 giant unorganized 

2. Access these values where you need them in your project
   It will require a little more destructuring, but it'll keep things organized, trust me

```react
function Counter() {
  //~ Bring in all the shared variables fro, CounterContext.js
  const { counter_js } = useCounter(); 
  const {count, increaseCount, decreaseCount} = counter_js
  ...whatever other stuff
}
```



### Multiple Non-Project Wide Context Files

Most enterprise level projects do not have one single context file

- If we had one context file for an entire project of that magnitude, it would be huge/unmaintainable
- Imagine if one file held variables for user inputs, identification, shopping cart data... etc

Instead, you can create context files dedicated to certain branches of components
Just wrap context provider tags around a file further down the DOM tree than index.js

#### Demo

> [Jason2B3/context-learn (github.com)](https://github.com/Jason2B3/context-learn)			commit 8 on prop-context branch

![image-20210903194347246](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210903194347246.png)	![image-20210903194422481](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210903194422481.png)

DIFFERENCES

| Components        | managed by           | context file name  |
| ----------------- | -------------------- | ------------------ |
| Counter Component | global context file  | CounterContext.js  |
| Counter 2         | regular context file | MultiplyContext.js |

### Disadvantages of Context API

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210903193817407.png" alt="image-20210903193817407" style="zoom:80%;" />

#### Deeply Nested JSX

- When you have multiple non-global context files, you may end up in scenarios where several pairs  context providing wrapper tags are placed in the same component's JSX section
- This leads to deep JSX nesting which is unpleasant to work with

#### High Frequency State Changes

- Performance-wise, Context API is not a good choice for managing states that you expect to be changed very often. 
- Redux is a far better choice for managing states like these. You don't have to worry about this when building small-medium sized personal projects, however

# Vanilla Redux

### Redux vs Context API

Both of these tools solve the same problem, but there are scenarios where using one makes more sense over the other, at least in a certain part of your code

Must we Choose One?

No, you are free to use both on the same project- in fact it's pretty common

- Be aware that you will typically only use 1 of 2 choices for the application-wide state
  We referred to this as our "Global Context file" when learning Context API



### How Redux Works: Overview

Keep in mind that the "Central Data Store" can also be called the "Central State Store"

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210903200227190.png" alt="image-20210903200227190" style="zoom:80%;" />

#### Central Data Store & Subscriptions

Redux has a single storage location for all of your project's states
We can use this data from inside our components

- Components subscribe to this store, as shown by the downward orange arrow
  Note that the arrow is one way, which will be explained later
- When a components is subscribed to the store, it is notified whenever data inside it changes
  These components get the data they need- which is usually a little slice of the Redux store

#### Actions & Reducers: Change Store Data

- The components will never directly change the data from the Central Data Store. 
  This is why the data flow arrows go 1 way in the diagram shown in the last image
- The components SHOULD be able to update stateful data, so we need a middle-man of sorts
  That would be the actions and reducers seen in this lesson's diagram



### How Redux Works: Non-React Demo

We're going to use regular JS functions to help demonstrate how Redux works
We deal with functional components in React anyways

#### Redux Syntax

METHODS:

```
createStore()	creates a store
getState()		gives the latest state snapshot after it was updated
subscribe()		subscribes a function to the store, so it re-executes whenever
```



#### Experiment 1

redux-demo.js

```react
const redux = require("redux");
// Create a store, then define your reducer function:
const store = redux.createStore(counterReducer);

function counterReducer(state = { counter: 0 }, action) {
  // Usually we'd outline diff operations based on action.type (like useReducer)
  return { counter: state.counter + 1 };
}

// Create a function to subscribe to the store (re-executed when store's changed)
const counterSubscriber = function () {
  const latestState = store.getState();
  console.log("subscriber function executed!", latestState);
};
store.subscribe(counterSubscriber); // subscribe the FN to the store

console.log("initial state:", store.getState()); // log the initial state
store.dispatch({ type: "increment" }); // changes the store data via the reducer
```

OUTPUT WHEN WE RUN FILE:	![image-20210904144758489](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210904144758489.png)

#### Reducer Function Responsibilities

1.  Tell the store what data it will be managing

- When we run code for the first time, the reducer is executed with a default action
- It spits out the initial state

2. Produce new state snapshots
   It decides how the store will be changed based on the `action.type` from the dispatch argument

HOW IT WORKS:
You'll notice several similarities to the useReducer hook

- The reducer function accepts 2 inputs; the old state, and the action that was dispatched
- It must always return an new state object, which will usually be updated in some way

The reducer function MUST BE PURE. 
The output of this function should be exactly the same if we were to input the same data again

#### Subscribed Function Re-execution

- Redux will execute subscribed functions again whenever data in the store has changed
- This can be seen in the simple example where `counterSubscriber` logs it's message right before it shows us ` { counter: 2 }`, a newly updated stateful variable from the reducer

#### Experiment 2: Different Reducer Cases

We are now going to demonstrate how to program different actions depending on the action.type argument fed as an argument to dispatch()

```react
const redux = require("redux");
// Create a store, then define your reducer function:
const store = redux.createStore(counterReducer);
function counterReducer(state = { counter: 0 }, action) {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
  }
  return { counter: state.counter + 1 };
}

// Create a function to subscribe to the store (re-executed when store's changed)
const counterSubscriber = function () {
  const latestState = store.getState();
  console.log("subscriber function executed!", latestState);
};
store.subscribe(counterSubscriber);

console.log("initial state:", store.getState()); // log the initial state
store.dispatch({ type: "increment" }); // changes the store data via the reducer
store.dispatch({ type: "decrement" }); // changes the store data via the reducer
```

OUTPUT:	![image-20210904152150301](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210904152150301.png)

#### Store Methods

The store only has four methods total:

1. `store.getState()`: Returns the plain object of all the store's state
2. `store.dispatch(action)`: Sends an action through all the reducers
3. `store.subscribe(fn)`: Takes a callback function to be called each time something has changed in the state. This method returns a function that can be called to unsubscribe.
4. `store.replaceReducer()`: We won't cover this because most people will never use it. But it lets you replace the root reducer of an already created store.

### Setting up Redux in React Projects

> [Jason2B3/redux_training (github.com)](https://github.com/Jason2B3/redux_training) 				commit 232 with a bit of refactoring

#### Initial Setup

1. Install packages and dependencies

```REACT
npm install redux					// install the library
npm install redux react-redux		// makes it easier to use in React
```

2. Create a folder named "store" in your project to hold all your redux-related code

3. Create a new file in the store folder named index.js and place the following inside...

`./store/index.js`               (this is a different index.js than the root level one)

```react
import { createStore } from "redux";	// import this method from redux
// Define the reducer
const counterReducer= function(state = { counter: 0 }, action) {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
  }
  return state;
}
// Create the store and default export it
const store = createStore(counterReducer);
export default store;
// the dispatching and subscribing will take place in other files

// REMEMBER, what you return in each case is the new state obj
// We only have 1 KVP, but if we had more we'd need to use the spread operator
```

4. Go to the index.js that holds contains `ReactDOM.render(<App/>)`

- Wrap provider tags around the App tags, just like making global state Context API files
- We'll only need to use Provider tags once when using Redux since it only has 1 store- and it will likely be in this same location every single time

index.js       (the one on the highest/root level of the project)

```react
import { Provider } from "react-redux";	// allows us to use provider tags
import store from "filepath to other index.js" // import the store from step 3

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById("root")
);
```

We pass in the store as a prop for the Provider tags

- Now that setup is complete, all components in this app can access data from that store
- They can also set up subscriptions and dispatch actions to update store data as well



### Access & Update Store Data within Component

> [Jason2B3/redux_training (github.com)](https://github.com/Jason2B3/redux_training) 			commit 236 : dispatch actions with payloads

We're learning Redux by building another incrementor counter
The counter value is a stateful variable held inside the Redux store's reducer

#### Hooks we Need

| desired action    | hook required | other effects                                                |
| ----------------- | ------------- | ------------------------------------------------------------ |
| access store data | useSelector   | The useSelector hook automatically subscribes the entire component to the Redux Store <br/>Any changes in store data will cause a re-execution |
| change store data | useDispatch   | N/A                                                          |

The useSelector hook gives us access to a single variable inside the store
You are free to use it multiple times to grab more (shown in the Multiple States lesson)

#### Demo

store-center.js

```react
import { createStore } from "redux";
// Create a store, then define your reducer function:
const counterReducer= function(state = { counter: 0 }, action) {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
  }
  return state;
}
const store = createStore(counterReducer);
export default store;
// REMEMBER, what you return in each case is the new state obj
// We only have 1 KVP, but if we had more we'd need to use the spread operator
```

Counter.js

```react
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  //  grab the part of the state object you need
  let counterVal = useSelector((state) => state.counter);
  // Give yourself the ability to use the reducer's dispatch function
  const dispatch = useDispatch();
    
  // Define onClick functions which update store data via dispatch functions
  const up = () => dispatch({ type: "increment" });
  const down = () => dispatch({ type: "decrement" });
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterVal}</div>
      <div>
        <button onClick={up}>Increase by 1</button>
        <button onClick={down}>Decrease by 1</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
```

The increase and decrease by 1 buttons are now operational

![image-20210905000024317](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210905000024317.png)

#### Payloads

Not all actions will be as simplistic as the above example
We'll often need to pass data to the reducer which it can use to update stateful values

EXAMPLE: 
Introduce a payload case into our reducer, then use it to increment by bigger steps than 1

> [Jason2B3/redux_training (github.com)](https://github.com/Jason2B3/redux_training) 			commit 236

store-center.js

```react
const counterReducer = function (state = { counter: 0 }, action) {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    case "increment more":	// uses payload to control how much the increase will be
      return { counter: state.counter + action.amount };
  }
  return state;
};
// REMEMBER, what you return in each case is the new state obj
// We only have 1 KVP, but if we had more we'd need to use the spread operator
```

Somewhere in Counter.js

```react
const upMore = () => dispatch({ type: "increment more", amount: 5 }); // PAYLOAD
return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterVal}</div>
      <div>
        <button onClick={up}>Increase by 1</button>
        <button onClick={upMore}>Increase by 5</button>
        <button onClick={down}>Decrease by 1</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
)
```

![image-20210905002855418](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210905002855418.png)

Keep in mind that in real projects we'll likely use user input values as payloads- not hardcoded numbers like the number 5

#### Never Mutate the State

The following snapshot is an example of something you should NEVER do in Redux
NEVER, mutate the existing state directly, under any circumstances (highlighted)

- Every if block or switch statement case needs to RETURN a new state object
  We did say earlier that our reducer function must be pure at all costs
- You redefine it from scratch every time- and you'll need spread operators when the initial state object gets long, or else it'll result in heaps of duplicate code per case

BAD →		![image-20210905020024003](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210905020024003.png)

WHY?
Your application may even operate correctly at first glance, but just wait...

- All objects including the state object are reference types
  The built in Redux processes are careful when updating the state in ways we cannot see
- When your larger projects get out of sync, the UI might not reflect your state correctly anymore
  This will be due to some really subtle bugs that are tough to find



### Multiple State Properties with 1 Store File  

As mentioned earlier, useSelector can be used multiple times to grab multiple store variables

#### Goal

Continue building your incrementor, but give the "Toggle Counter" button a new purpose:

- The toggle button should hide the `REDUX COUNTER: # ` from the UI
- By that I mean stop it from being rendered 
  Hint: Use conditional JSX based on the value of a stateful variable

​									![image-20210905015218139](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210905015218139.png) ![image-20210905015157561](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210905015157561.png)

#### Demo: Includes Payloads

> [Jason2B3/redux_training (github.com)](https://github.com/Jason2B3/redux_training) 			commit 237 bonus

store-center.js

```react
import { createStore } from "redux";

const stateObj = {
  counter: 0,
  showCounter: true,
};
const counterReducer = function (state = stateObj, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "incrementMore":
      return { ...state, counter: state.counter + action.amount }; // USE PAYLOAD 
    case "toggle":
      return { ...state, showCounter: !state.showCounter };
  }
  return state;
};
const store = createStore(counterReducer); // define your store
export default store;
```

Counter.js	(what matters)

```react
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  //  grab the parts (plural) of the state object you need
  const counterVal = useSelector((state) => state.counter);
  const showCounterBoolean = useSelector((state) => state.showCounter);
  // Give yourself the ability to use the reducer's dispatch function
  const dispatch = useDispatch();
  const up = () => dispatch({ type: "increment" });
  const down = () => dispatch({ type: "decrement" });
  const upMore= () => dispatch({ type: "incrementMore", amount: 5 }) //SUPPLY PAYLOAD 
  const toggleCounterHandler = () => dispatch({ type: "toggle" });
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounterBoolean && <div className={classes.value}>{counterVal}</div>}
      <div>
      <button onClick={upMore}>Increase by 5</button>
        <button onClick={up}>Increase by 1</button>
        <button onClick={down}>Decrease by 1</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
```

Notice the "execute-if true" statement that determines whether the `<div>{counterVal}</div>` is rendered or not



### Redux with Multiple Reducers (MAIN)

It's common for people to use multiple Redux store files whose reducers must come together to form one accumulative one

> [Jason2B3/redux_training (github.com)](https://github.com/Jason2B3/redux_training) 			commit 237C  (on altBranch)

MINI-PROJECT GOAL: 	 ![image-20210905002855418](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210905002855418.png)

#### Procedure

SETUP

1. If possible, name your central Redux store file `index.js`
   This is where all your reducers will come together
2. Create multiple other JS files, each containing 1 reducer and their own state object they manage
3. Combine all reducers inside your central Redux store file

REDUX VALUE USAGE AND DISPATCHING

- Is the exact same as it is when you have 1 Redux store reducer, just with more drilling
- Check out the lesson's example

#### Redux Store File Descriptions

We're going to have 3 files involved with our mini-project's redux store: 
Don't confuse create-react-app's regular index.js to the one we create ourselves for Redux

| FILE                       | PURPOSE                                                      |
| -------------------------- | ------------------------------------------------------------ |
| store/index.js             | where all reducers combine<br />a diff file than the default index.js in create-react-apps |
| store/increment-reducer.js | where all reducers related to incrementing up and down are   |
| store/toggle-reducer.js    | where we store reducers that'll be used to toggle JSX elements on/off |

In Redux toolkit, we would refer to increment-reducer.js and toggle-reducer.js as "slices"

![image-20210908191955228](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210908191955228.png)

#### Demo Part 1: Redux Store Setup

store/index.js

```react
// Import all reducers
import {incrementReducer} from "./increment-reducer" 
import {toggleReducer} from "./toggle-reducer"
// Import Redux methods you'll need
import { createStore, combineReducers } from "redux";

// Place all the reducers you want to combine in here
const rootReducer= combineReducers({
  increment: incrementReducer,
  toggle: toggleReducer,
})

const store = createStore(rootReducer);
export default store;
```

store/increment-reducer.js

```react
const stateObj = {
  counter: 0,	
    // store a stateful variable that'll be displayed as the incrementor value
};
export const incrementReducer = function (state = stateObj, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "incrementMore":
      return { ...state, counter: state.counter + action.amount }; // USE PAYLOAD
  }
  return state;
};
```

store/toggle-reducer.js

```react
const stateObj = {
  showCounter: true, 
    // save a stateful variable that'll be used to render conditional JSX
};
export const toggleReducer = function (state = stateObj, action) {
  switch (action.type) {
    case "toggle":
      return { ...state, showCounter: !state.showCounter };
  }
  return state;
};
```

#### Demo Part 2: Redux Value Updating and Usage

Counter.js

```react
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  //  grab the parts of the state object you need (MUST DRILL A BIT DEEPER)
  const counterVal = useSelector((state) => state.increment.counter);
  const showCounterBoolean = useSelector((state) => state.toggle.showCounter);
  // Give yourself the ability to use the reducer's dispatch function
  const dispatch = useDispatch();
  const up = () => dispatch({ type: "increment" });
  const down = () => dispatch({ type: "decrement" });
  const upMore= () => dispatch({ type: "incrementMore", amount: 5 })//SUPPLY PAYLOAD 
  const toggleCounterHandler = () => dispatch({ type: "toggle" });
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounterBoolean && <div className={classes.value}>{counterVal}</div>}
      <div>
      <button onClick={upMore}>Increase by 5</button>
        <button onClick={up}>Increase by 1</button>
        <button onClick={down}>Decrease by 1</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
```

#### Drilling Deeper when you Have Multiple Reducers

This process is nearly identical to when you have only 1 Redux file, with a single major difference

If your redux store combines reducers, you must drill a bit deeper to access Redux store values inside React Components

###### Previous Lesson: Multiple State Properties with 1 Store File

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210908193752093.png" alt="image-20210908193752093" style="zoom:80%;" />

Counter.js
We get to access the KVP in the state object faster

```react
  const counterVal = useSelector((state) => state.counter);
  const showCounterBoolean = useSelector((state) => state.showCounter);
```

###### Current Lesson: Multiple Reducers

Counter.js
We must select which reducer to drill into before we can get to the KVP in one of the state objects

```react
  const counterVal = useSelector((state) => state.increment.counter);
  const showCounterBoolean = useSelector((state) => state.toggle.showCounter);
```



### Vanilla Redux with Class-based Components

React relies on hooks to utilize Redux while inside of functional components

- Access Redux store data with useSelector()
- Update Redux store data useDispatch()

Class-based components cannot use hooks, so we must rely on other things

WHAT WE LEARN HERE:
Remember, this lesson is about using Redux in CLASS-BASED COMPONENTS
Setting up the Redux store file/files will remain the same

#### Demo Description

We're going to take a component that starts off as functional and make it class-based instead

![image-20210906063658744](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210906063658744.png)

Counter.js manages the 4 buttons below the number displayed
Make the Increase/Decrease buttons work as they do at our functional starting point

> [Jason2B3/redux_training (github.com)](https://github.com/Jason2B3/redux_training) 			
>
> START:	commit 236
> END:	commit 236 XX on the "classy" branch

#### Functional Start

```react
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  //  grab the part of the state object you need
  let counterVal = useSelector((state) => state.counter);
  // Give yourself the ability to use the reducer's dispatch function
  const dispatch = useDispatch();
  const up = () => dispatch({ type: "increment" });
  const down = () => dispatch({ type: "decrement" });
  const toggleCounterHandler = () => {};
  const upMore = () => dispatch({ type: "incrementMore", amount: 5 });
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterVal}</div>
      <div>
        <button onClick={up}>Increase by 1</button>
        <button onClick={upMore}>Increase by 5</button>
        <button onClick={down}>Decrease by 1</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
```



#### Class-based End

The Redux store file remains the same for both:

store-center.js

```react
import { createStore } from "redux";
// Create a store, then define your reducer function:
const counterReducer = function (state = { counter: 0 }, action) {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    case "incrementMore":
      return { counter: state.counter + action.amount };
  }
  return state;
};
const store = createStore(counterReducer);
export default store;
```

Counter.js

```react
import React, { Component } from "react";
import classes from "./Counter.module.css";
import { connect } from "react-redux";

// Notice how we dispatch our identifier functions using props
class Counter extends Component {
  upHandler() {
    this.props.increment();
  }
  downHandler() {
    this.props.decrement();
  }
  upMoreHandler() {
    this.props.incrementMore(5); //% SUPPLY PAYLOAD HERE
  }
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.upHandler.bind(this)}>Increase by 1</button>
          <button onClick={this.upMoreHandler.bind(this)}>Increase by 5</button>
          <button onClick={this.downHandler.bind(this)}>Decrease by 1</button>
        </div>
      </main>
    );
  }
}

//$ Feed the class component Redux store values and dispatch functions as props
const mapStateToProps = (state) => {
  return { counter: state.counter };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
    incrementMore: (amount) => dispatch({ type: "incrementMore", amount }), 
    //% USE PAYLOAD HERE
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

#### Connect Method Explained

Connect is a higher order component which returns a new function as a value when executed
We then execute it again while passing the component as an argument

```REACT
export default connect(mapStateToProps,mapDispatchToProps)(Counter)
```

CLASS-BASED APPROACH:
Grab Redux store values that you need + define identifier functions
Feed both of these to your class component as props using the connect() method

PARMETER DESCRIPTIONS:

| connect() parameter  | Functional Equivalent | What it does                                                 |
| -------------------- | --------------------- | ------------------------------------------------------------ |
| `mapStateToProps`    | useSelector()         | This method receives the Redux state as an argument, then returns an object which will be used as props for our class component |
| `mapDispatchToProps` | useDispatch()         | Has you set up dispatch functions which affect values in the Redux store<br />Will be feeding these to the class component as props |



# Redux-Toolkit: Basics

This is a more advanced and feature-rich way of using Redux- but it's a tougher to understand initially

### The Issues with Vanilla Redux

#### Potential Problems

1. The reducer function can get really long since it involves a fair amount of boiler plate

- Even with switch statements and the spread operator, this can still be an issue
- An absurd reducer function length creates unmaintainable code

2. One typo can cause your reducer function to perform the wrong actions on your state object, leading to subtle bugs
3. Accidentally mutating/editing state is easy to do and hard to notice at first since things will work properly for a while

#### Solutions

OLD:

- Creating multiple small reducers that combine into one to cut down on length per file
- The object key identifier strategy we learned in useReducer's chapter
- Downloading 3rd party packages that auto-copy states and prevent you from editing it

REDUX-TOOLKIT: THE NEW-AGE SOLUTION

The Redux team created a solution to all these potential problems themselves, and it also makes using vanilla Redux easier 



### Setup & Advantages

#### Setup

1. Install the redux toolkit, along with react-redux

```
npm install redux react-redux		(if not already installed in dependencies)
npm install @reduxjs/toolkit
```

2. Uninstall the redux library if you already have it installed (comes within the toolkit anyway)

```
npm uninstall redux			(if redux + react-redux was installed already)
```

3. Wrap the index.js file with Provider tags

```react
import { Provider } from "react-redux";
import store from "./reduxToolkit/central-store";  // path to the main store file
// ^ should be the Redux store file's default export
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```



#### Benefits of Redux Toolkit's createSlice

( EXAMPLE IN NEXT LESSON )

1. We don't have boiler plate like we used to in our reducer function

- createSlice lets us define exactly what needs to happen to a stateful variable using identifiers, but without the excess code from if statements or switch cases

2. No longer need to return a brand new state object by manually defining it per each case
   We can "mutate the state directly" in our code editor (unlike in vanilla Redux)

- There are behind-the scenes operations that clone the state and apply your changes in a pure way, but you don't need to see or worry about that
- Technically we aren't mutating the state data, but the code in our IDE makes it look/feel like we are

3. We can now code cases and actions that are specific to one "slice" of data

- Before, the reducer function held cases/actions for ALL stateful variables on the same scope
- This had the potential to get messier as our project sizes grow

#### Alternative to createSlice:

- createReducer is a different way of using React-toolkit, but it's less powerful than createSlice
- For that reason, the Udemy course and I skimmed it



### Manage One State Slice

#### Goal Description

> [Jason2B3/redux_training (github.com)](https://github.com/Jason2B3/redux_training) 			commit 242

- We have an incrementor website setup already using Vanilla Redux
- Change your Redux store file, and the 1 component that accesses it (Counter.js) 
  Rely on Redux Toolkit instead

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210905034928773.png" alt="image-20210905034928773" style="zoom:90%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210905034943498.png" alt="image-20210905034943498" style="zoom:90%;" />

#### Example: One State Slice

store-center.js

```react
import { createSlice, configureStore } from "@reduxjs/toolkit";

//$ Define your initial state
const initialState = { counter: 0, showCounter: true };

//$ Create your slice or slices
const counterSlice = createSlice({
  name: "Counter", // expected built-in KVP
  initialState, // ES6 shorthand to place an obj as a KVP value
  reducers: {
    // A list of identifier functions that are allowed to "mutate" the state
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    incrementMore: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

//$ Create a store with the configureStore method
// looks different when multiple slices are present, and so does useSelector()
const store = configureStore({
  reducer: counterSlice.reducer,
});

//$ Use the .actions method to enable dispatching in other components
export const counterActions = counterSlice.actions;

//$ Default export the Redux store
export default store;
```

Counter.js

```react
import classes from "./Counter.module.css";

import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/store-center";

const Counter = () => {
  //$ ACCESS REDUX STORE VALUES
  // looks different when multiple slices are present ▼▼
  const counterVal = useSelector((state) => state.counter); 
  const showCounter = useSelector((state) => state.showCounter);

  //$ DISPATCH ACTIONS ACCORDING TO THE NEW IDENTIFIER-FUNCTION NAMES
  const dispatch = useDispatch();
  const up = () => dispatch(counterActions.increment());
  const down = () => dispatch(counterActions.decrement());
  const toggleCounterHandler = () => dispatch(counterActions.toggle());
  // Place payloads inside the identifier function brackets
  const upMore = () => dispatch(counterActions.incrementMore(5)); // p

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counterVal}</div>}
      <div>
        <button onClick={up}>Increase by 1</button>
        <button onClick={down}>Decrease by 1</button>
        <button onClick={upMore}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
```

#### useSelector Explained

```react
const Counter = () => {
  //$ ACCESS REDUX STORE VALUES
  // looks different when multiple slices are present ▼▼
  const counterVal = useSelector((state) => state.counter;); // line A
  const showCounter = useSelector((state) => state.showCounter); // line B
```

Line A and B refer to the KVP's in the initialState object used in the Redux store file's counterSlice

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210906001057191.png" alt="image-20210906001057191" style="zoom:67%;" />

#### Dispatching Actions Explained

PROCEDURE:

1. Once your slice or slices are prepared, apply `.actions` to it in your redux store file
   Make sure to make it an export
2. Import this new actions-variable to a React component
3. Enable dispatching with useDispatch()
4. Dispatch using `dispatch(counterActions.identifier(optionalPayload));`

store-center.js          (what matters)

```react
//$ Create your slice or slices
const counterSlice = createSlice({
  name: "Counter", // expected built-in KVP
  initialState, // ES6 shorthand to place obj as a KVP value
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    incrementMore: (state, action) => {
      state.counter = state.counter + action.payload;
    },

  },
});

//$ Enable dispatching Step 1 of 3
export const counterActions = counterSlice.actions;
```

Counter.js

```react
//$ Enable dispatching Step 2 of 3  
import { counterActions } from "../store/store-center"; 

const Counter = () => {
  const dispatch = useDispatch(); 		//$ Enable dispatching Step 3 of 3
    
  // Dispatch away! Change store values using the pre-set identifier functions
  const up = () => dispatch(counterActions.increment());
  const down = () => dispatch(counterActions.decrement());
  const toggleCounterHandler = () => dispatch(counterActions.toggle());
  // Place payloads inside the identifier function brackets
  const upMore = () => dispatch(counterActions.incrementMore(5)); 
}
```

We can supply payloads inside the identifier function brackets
In the slice reducer functions, we reference whatever's given in these brackets as `action.payload`

#### configureStore Method

This method expects the following as a parameter; 
An object containing a KVP named "reducer" 

```react
//$ Create a store with the configureStore method
// looks different when multiple slices are present, and so does useSelector()
const store = configureStore({
  reducer: counterSlice.reducer,
});
```

HOW IT WORKS:

- Every slice has a reducers object, filled with their own code detailing what happens if an action with a certain identifier is dispatched (Redux toolkit has no identifiers, but the idea's the same)
- configureStore only accepts a single reducer, which is fine in this lesson where we have a single state slice

In the following lesson, the reducer KVP will look different since we'll have multiple state slices, each with their own reducer object



### Manage Multiple State Slices

When you have multiple state slices with Redux toolkit, the process is a bit different than if you had 1
You must...

1. Define more than one slice in your Redux store file
2. Place all slice-specific reducers inside the configureStore method
3. Use the actions method on each slice, and make them exportable
4. In React component files, useSelector works a bit differently than before
   You must specify a bit more when providing it an argument

#### Goal Description

> [Jason2B3/redux_training (github.com)](https://github.com/Jason2B3/redux_training) 			commit 244

We start off with the following:
I've specified what our different React components control in this mini-project

![image-20210905235101041](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210905235101041.png)

Inside Redux store file:

- We have 2 state slices we wish to manage; counter and isAuthenticated
- Each of these include state objects which may or may not have multiple KVP's

counter.js

- The counter buttons must increase or decrease the stateful counter value
- Toggle counter must make the counter value disappear/not-render temporarily

Auth.js

- Pressing the Login button should set isAuthenticated to true (ignore the input fields for this demo)

Header.js

- Pressing the logout button should set isAuthenticated to false
- If isAuthenticated equals false, the top 3 buttons should not be rendered until we log back in

![image-20210906031633369](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210906031633369.png)

#### The Redux File (payloads included in ex.)

store-center.js

```react
import { createSlice, configureStore } from "@reduxjs/toolkit";

//$ Create a state slice for an incrementor value (used in Counter.js)
const initCounter = { cValue: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter", // expected built-in KVP
  initialState: initCounter,
  reducers: {
    // A list of identifier functions
    increment: (state) => {
      state.cValue++;
    },
    decrement: (state) => {
      state.cValue--;
    },
    incrementMore: (state, action) => {
      state.cValue = state.cValue + action.payload; // PAUYLOAD USED HERE
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});
export const counterActions = counterSlice.actions;

//$ Create a state slice for Login status (used in Auth.js and Header.js)
const initAuth = { isLoggedIn: false };
const isAuthSlice = createSlice({
  name: "isAuthenticated", // expected built-in KVP
  initialState: initAuth,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});
export const authActions = isAuthSlice.actions;

//$ Create a store with the configureStore method (multiple slices)
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authentication: isAuthSlice.reducer,
  },
});

//$ Default export the Redux store
export default store;
```

#### Redux Store File

In the following snippets, we only show you how to do the following (rest is excluded)

1. Access values from the Redux store with useSelector()
2. Change store values with useDispatch()

Counter.js

```react
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/store-center";

const Counter = () => {
  //$ ACCESS REDUX STORE VALUES
  const counterVal = useSelector((state) => {
    // ▼▼ Refers to: counter kVP of configure store → cValue KVP of state object
    return state.counter.cValue;  
  });
  // ▼▼ Refers to: counter kVP of configure store → showCounter KVP of state object
  const showCounter = useSelector((state) => state.counter.showCounter);
  
  //$ DISPATCH ACTIONS ACCORDING TO THE NEW IDENTIFIER-FUNCTION NAMES
  const dispatch = useDispatch();
  const up = () => dispatch(counterActions.increment());
  const down = () => dispatch(counterActions.decrement());
  const toggleCounterHandler = () => dispatch(counterActions.toggle());
  const upMore = () => dispatch(counterActions.incrementMore(5)); //PAYLOAD SUPPLIED
  // ...rest is excluded for brevity
```

Auth.js

```react
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/store-center";

const Auth = () => {
  const dispatch = useDispatch();

  const loginStatus = useSelector((state) => state.authentication.isLoggedIn);
  const btnHandler = function (e) {
    e.preventDefault();
    if (!loginStatus) dispatch(authActions.login());
    console.log("logging in!");
  };
  // ...rest is excluded for brevity
```

Header.js

```react
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/store-center";

const Header = () => {
  const loginStatus = useSelector((state) => state.authentication.isLoggedIn);
  const dispatch= useDispatch()
  const btnHandler= function(e){
    e.preventDefault()
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {loginStatus && <3_conditional_buttons/>}
};
```



### Splitting your Redux Store into Numerous Pieces

GOAL:
One state slice per Redux store file

> START: commit 244
> END: commit 245

#### Why Split your Redux Store?

In the previous lesson, we used Redux toolkit to manage 2 slices of stateful data

- It was simple to define and manage data separately from each other
- We defined an initial state object then manage it using createSlice right after

The only potential problem is that we placed all state slices into one file- which can get cramped if our project size grows larger

#### Initial: Redux Store Setup File

```react
import { createSlice, configureStore } from "@reduxjs/toolkit";

// -------- [CUT OUT 1 START] -----------------------------------
//$ Create a state slice for an incrementor value (used in Counter.js)
const initCounter = { cValue: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter", // expected built-in KVP
  initialState: initCounter,
  reducers: {
    // A list of identifier functions
    increment: (state) => {
      state.cValue++;
    },
    decrement: (state) => {
      state.cValue--;
    },
    incrementMore: (state, action) => {
      state.cValue = state.cValue + action.payload;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});
export const counterActions = counterSlice.actions;
// -------- [CUT OUT 1 END] -----------------------------------

// -------- [CUT OUT 2 START] -----------------------------------
//$ Create a state slice for Login status (used in Auth.js and Header.js)
const initAuth = { isLoggedIn: false };
const isAuthSlice = createSlice({
  name: "isAuthenticated", // expected built-in KVP
  initialState: initAuth,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});
export const authActions = isAuthSlice.actions;
// -------- [CUT OUT 2 END] -----------------------------------

//$ Create a store with the configureStore method (multiple slices)
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authentication: isAuthSlice.reducer,
  },
});

//$ Default export the Redux store
export default store;
```



#### Final: Redux Store Setup Files

We create new files and place them inside the same store folder as our store-cenmter.js file

​														![image-20210906040106972](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210906040106972.png) ![image-20210906040159817](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210906040159817.png)

store/counter.js		(will be used for components/counter.js)

```REACT
import {createSlice} from "@reduxjs/toolkit"

//$ CUT OUT 1
const initCounter = { cValue: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter", // expected built-in KVP
  initialState: initCounter,
  reducers: { ommited for brevity }
})
export const counterActions = counterSlice.actions;

export default counterSlice.reducer	// the only line not part of the cutout
```

store/auth.js	(will be used for components/Auth.js and components/Header.js)

```react
import {createSlice} from "@reduxjs/toolkit"

//$ CUT OUT 2
const initAuth = { isLoggedIn: false };
const isAuthSlice = createSlice({
  name: "isAuthenticated", // expected built-in KVP
  initialState: initAuth,
  reducers: { ommited for brevity },
});
export const authActions = isAuthSlice.actions;

export default isAuthSlice.reducer // the only line not part of the cutout
```

store-center.js

```react
import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter" // cutout 1 file's default export but renamed
import authReducer from "./auth" // cutout 2 file's default export but renamed

//$ Create a store with the configureStore method (multiple slices)
const store = configureStore({
  reducer: {
    counter: counterReducer,
    authentication: authReducer,
  },
});

//$ Default export the Redux store
export default store;
```



#### Final: React Component Files

We need to change one import line in all React components that dispatch actions
Accessing state values, using them, and dispatching all remains the same afterwards 

components/counter.js

```react
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";	// UPDATED

const Counter = () => {
  // ACCESS REDUX STORE VALUES
  const counterVal = useSelector((state) => {
    // Refers to: counter kVP of configure store → cValue KVP of state object
    return state.counter.cValue;  
  });
  // Refers to: counter KVP of configure store → showCounter KVP of state object
  const showCounter = useSelector((state) => state.counter.showCounter);
  
  // DISPATCH ACTIONS ACCORDING TO THE NEW IDENTIFIER-FUNCTION NAMES
  const dispatch = useDispatch();
  const up = () => dispatch(counterActions.increment());
  const down = () => dispatch(counterActions.decrement());
  const toggleCounterHandler = () => dispatch(counterActions.toggle());
  const upMore = () => dispatch(counterActions.incrementMore(5)); //PAYLOAD SUPPLIED
  // ...rest is excluded for brevity
```

components/Header.js

```react
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth"; // UPDATED 

const Header = () => {
  const loginStatus = useSelector((state) => state.authentication.isLoggedIn);
  const dispatch= useDispatch()
  const btnHandler= function(e){
    e.preventDefault()
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {loginStatus && <3_conditional_buttons/>}
};
```

components/Auth.js

```react
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth"; // UPDATED 

const Auth = () => {
  const dispatch = useDispatch();

  const loginStatus = useSelector((state) => state.authentication.isLoggedIn);
  const btnHandler = function (e) {
    e.preventDefault();
    if (!loginStatus) dispatch(authActions.login());
    console.log("logging in!");
  };
  // ...rest is excluded for brevity
```



# Redux Toolkit: Asynchronous Code and Side-effects

> Chapter-wide-repo:
> [Jason2B3/reduxAdvanced (github.com)](https://github.com/Jason2B3/reduxAdvanced)

### Theory: Actions, Action Creators

#### Actions

Actions in Redux are just JS objects that explain "what just happened" (must think of it this way)

- An action does not force a series of events to occur- it describes what already occurred
- This can be challenging to comprehend since we cause state changes using action objects and the dispatch() method Redux provides

#### Dispatched Actions

In Redux we say that actions (reports) are "dispatched" to the store to let it know which things happened- like a news report you'd see on TV

So to report to the Redux store that a login attempt was successful you could simply dispatch...

```js
store.dispatch({ type: 'LOGIN_SUCCEEDED' })
```

- What you choose as the name of the action sent as the `type` property can be anything
  I could name it `LOGIN_NOW` if I wanted to, but I really shouldn't
- It's a good practice to use past-tense for these identifiers
  It keeps the true nature of action objects visible in your work

#### Action Creators: What are They?

If we need to dispatch several actions, it'd be arduous to write that last code snippet over and over
We can use action creators instead- a function that generates an action object

```react
function doAddToDoItem(text) {
  return { type: 'TODO_ADDED', payload: text }
}
// or to be faster...
const doAddToDoItem = payload => ({ type: 'TODO_ADDED', payload })
```

- Now, we don't have to write the same dispatch line anywhere near as often (DRY principle)
- If we need to make a change to our dispatched actions, we change 1 chunk of code instead of several (easier to maintain)

#### Action Creators: Using them

Now that we know how to generate action objects, we can dispatch actions in Redux with their help

```react
const doAddToDoItem = payload => ({ type: 'TODO_ADDED', payload }) // action creator

store.dispatch(doAddToDoItem('be awesome today')) 
// dispatch action eith the obj generated
```

Redux has built in tools that let us make this process even easier since this pattern is so common
We can eliminate the `store.dispatch` part

TEST 1: Without built in tools 
(just to show what Redux can do for us automatically)

```react
// assume we've created a store here
const store = createStore(someReducer)

// and we have our plain action creator function from above
const doAddToDoItem = payload => ({ type: 'TODO_ADDED', payload })

// we'd simply need to make a new function that did both things:
const boundActionCreator = text => store.dispatch(doAddToDoItem(text))
```

TEST 2: Using built-in tools ... specifically Redux's bindActionCreators() method

```react
import { bindActionCreators, createStore } from 'redux'
// assume we've defined and combined our reducers
// in another file somewhere.
import rootReducer from './reducers/root'
const store = createStore(rootReducer) // we've got a store!

// TASK A: Bind one action creator with store.dispatch
const doAddToDoItem = payload => ({ type: 'TODO_ADDED', payload }) // action creator
const boundAddToDoItem = bindActionCreators(doAddToDoItem, store.dispatch)


// TASK B: Bind multiple action creators with store.dispatch at once
const doRemoveToDoItem = id => ({ type: 'TODO_REMOVED', payload: id }) 
const doClearToDos = () => ({ type: 'TODOS_CLEARED' }) // 2 action-creators
const boundToDoActions = bindActionCreators(
  {
    add: doAddToDoItem,
    remove: doRemoveToDoItem,
    clear: doClearToDos
  },
  store.dispatch
)

// now we have an object with all the same keys
// where each key is now a pre-bound function
// we can just call directly. And it will dispatch
// the necessary action.
boundToDoActions.add('see the world')
boundToDoActions.remove('23324')
boundToDoActions.clear()
```

WHY THIS IS RELEVANT

- Redux toolkit does this under the hood when we invoke methods defined inside createSlice()
- We won't need to set these up ourselves, but it helps to know what is going on

#### For a Deeper Understanding

- Read the above chapters of this book to gain a full understanding of the logic behind actions, action reducers, and middleware
- What we jotted down in these notes shows you how to use Redux features, regardless of whether you understand it or not

![image-20210909025750826](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210909025750826.png)





### This Chapter's Project

At our starting point, we have a mock store page where we can add and subtract items to our cart

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210907003552797.png" alt="image-20210907003552797" style="zoom:67%;" />

#### Goals

Make it so that...

1. Each time we add or take away from our cart, the changes are sent up to our Firebase backend
2. When we reload the page, our shopping cart items are preserved
   Do this by fetching data from our backend on startup

WHY WE'RE DOING THIS:

- POST and GET requests require asynchronous code, and our project relies on Redux
- Reducers must be pure, free of side-effects, and synchronous
  We can't place these actions inside our reducer's dispatch functions
- This chapter teaches us how to handle side effects and async code while using ReduX



### How must we Manage Side Effects?

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210906055405781.png" alt="image-20210906055405781" style="zoom:80%;" />

#### Reducer's Problem w/ Async Code and Side Effects

RULE:
When working with reducers, we need to make sure it is pure, free of side effects, and synchronous 

ISSUE WITH IT:
So what's the plan if we want to dispatch actions involving code that might fail?
Example: Dispatching actions that result in a fetchAPI call 

- This issue appears whenever we're dealing with side effects or asynchronous code
- We can't place that in a reducer function without violating the purity rule
- Attempting to do this may actually work at first, but it will definitely lead to some unpredictable behavior later down the line

There are 2 solutions Redux has to address this potential issue

Method 1: 
Manage side effects inside the component via useEffect

- We only dispatch an action once our side effect is done
- This makes it so React knows nothing about them at all

Method 2:
Write your own action creator functions & skip using the auto-generated ones React toolkit offers



### Rules on Where to Place Logic

When it comes to managing and transforming data, you have several options for locations

#### Front vs Backend

When a user submits data that needs to be adjusted for proper use on our site, we have 2 options

1. Transform that data in the Front end → Send to our backend 
2. Send the raw data to our back end → Transform that data in the back end

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210907021059017.png" alt="image-20210907021059017" style="zoom:80%;" />

We're taking approach 1 in this project, meaning our front end will do more work

- Our firebase backend is extremely simple and exists to store data only
- We don't know how to code a more sophisticated back end with Node or PHP yet

#### Where in the Frontend do we Place Logic?

![image-20210907023946625](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210907023946625.png)

SYNCHRONOUS + NO SIDE-EFFECTS

- When it comes to data transformation with no async operations, we prefer to place all that logic inside of the Redux store reducer function
- You are allowed to place this logic inside of components, but it is not optimal, and this video explains why: [React - The Complete Guide (incl Hooks, React Router, Redux) | Udemy](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25600358#announcements)

Even if you decide to place data transform logic inside the component, you must take many extra steps to make sure your lines of code are pure and do not mutate Redux's state values directly

- This is a cumbersome process even when done correctly
- Redux toolkit gives us more freedom to "directly mutate state when inside the reducer, so it's just much easier to use that approach instead

ASYNC + SIDE-EFFECTS

- Placing this logic in Reducers is NOT an option whatsoever
- With Method 1, we place all of our code inside React component files
- With Method 2, we try and keep our components lean by placing most of the logic inside Redux store files, then a little bit inside component files (just dispatching)



### Method 1: useEffect with Redux

The first method for managing side effects while using Redux is simple: 

- Run async or side-effect code inside useEffect
  Force useEffect to re-execute whenever a specific state value in the Redux store is changed
- Remember, Redux allows you to what I just described in any component you want
  Can also take care of it in a new file if you like

#### Relevant Files for this Lesson

I would recommend having your code editor with this project loaded as you read this lesson

REDUX STORE FILES:	![image-20210907035954381](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210907035954381.png) 

cart-slice.js

- Has reducer functions which add and remove items from the cart
  They require some payload information
- Initial state shown in the above photo

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210907040159928.png" alt="image-20210907040159928" style="zoom:80%;" />

ui-slice.js

- Has the reducer function named showNotification
- It renders a blue/green/red section on our navbar depending on pending/success/failure

#### Goal: PUT requests to Backend

> [Jason2B3/reduxAdvanced (github.com)](https://github.com/Jason2B3/reduxAdvanced)		commit 257

OBJECTIVE IN ENGLISH:
Each time we add/remove items in our cart, save that updated version of the cart in Firebase

OBJECTIVE IN TECH TERMS:

- Run the showNotification reducer function from `ui-slice.js`  , along with some async code
- This async code should make PUT requests to our Firebase backend

APPROACH:

1. Use Redux and pick a location where you'd like to make your request
2. Place your fetchAPI request inside useEffect
   Make the dependency list include a stateful variable from the Redux store

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210907003552797.png" alt="image-20210907003552797" style="zoom:67%;" />

#### Goal Executed

WHAT WE DO:

- We place our async code inside App.js
- We define an async function inside useEffect then execute it immediately with a catch block chained to the end (alt to try/catch)

App.js

```react
// All the component file imports are excluded from this snippet
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { uiActions } from "./store/ui-slice"; 
// the slice of the Redux store which renders the success/fail/pending visuals
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  
  function uiSlice_showNotification(status, title, message) { // helper
    dispatch(uiActions.showNotification({
        status: status,
        title: title,
        message: message,
    }))
  }

  const showCart = useSelector((state) => state.ui.cartIsVisible);
  // Accessing cartSlice's initialState: { items: [], totalQuantity: 0 }
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (isInitial) { isInitial = false; return } // prevent fr/ running on mount

    // Define a function containing your async code
    const sendCartData = async function () {
      uiSlice_showNotification("pending", "sending", "Sending cart data!");
      const response= await fetch(
        "https://reduxadv-c13f7-default-rtdb.firebaseio.com/data.json", {
        method: "PUT", // update data in our database
        body: JSON.stringify(cart),
      });
      if (!response.ok) throw new Error("Sending cart data failed");
      uiSlice_showNotification("success", "Success", "Data sent successfully!"); 
    }; 

    // Invoke your async function immediately within useEffect & catch any errors
    sendCartData().catch((error) => {
      uiSlice_showNotification("error", "Error", "Sending data failed");
      console.log("oopsie")
    });
    
  }, [cart, dispatch]); 
  // ▲ re-executes when Redux store's cart item gets updated
  return (
    <>
    {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  </>
  );
}

export default App;
```

#### Redux Portion of Solution Explained

Lots of repetitive code was outsourced to our helper function: `uiSlice_showNotification`, which helps with rendering JSX based on pending/success/failure

- Is a `boundActionCreator` that we made with vanilla JS and no special Redux methods (see theory)
- If we didn't create a helper function, we would dispatch actions to the Redux store as follows

Efficient:

```react
  function uiSlice_showNotification(status, title, message) {
    dispatch(uiActions.showNotification({
        status: status,
        title: title,
        message: message,
    }))
  }
  uiSlice_showNotification("pending", "sending", "Sending cart data!");
  uiSlice_showNotification("success", "Success", "Data sent successfully!");
  uiSlice_showNotification("error", "Error", "Sending data failed");
```

Inefficient when we don't use a helper function:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210907233050566.png" alt="image-20210907233050566" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210907233113487.png" alt="image-20210907233113487" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210907233158632.png" alt="image-20210907233158632" style="zoom:80%;" /> 



#### Conditional JSX Explained

We're managing fetchAPI request states using Notification.js ("pending, failed, success")

- Understand that it renders content conditionally- specifically the top part of the navbar
- It's blue when our PUT request is pending, green when it works, and red when it fails

![image-20210907050354921](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210907050354921.png)

![image-20210907192854769](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210907192854769.png)



### Method 2: Action Creators

Action creators are an alternative to writing async/side-effect code inside of useEffect

#### Action Creators and Thunks

ACTION-CREATORS:

- Up until this point, you've used auto-generated action creators when using Redux toolkit- specifically when you dispatched actions inside of React components (see left image below)
- In this lesson, we'll be learning how to create our own 

THUNKS:
A thunk is simply a function that delays an action until later- until another thing is finished

- We can write an action creator as a thunk
- It will not immediately return the action object 
  Instead it will return another function which eventually returns the action object

![image-20210907230845845](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210907230845845.png) <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210907231540451.png" alt="image-20210907231540451" style="zoom:80%;" />

#### Goal: PUT requests to Backend

> [Jason2B3/reduxAdvanced (github.com)](https://github.com/Jason2B3/reduxAdvanced)		commit 258: action creators

OBJECTIVE IN ENGLISH:
Each time we add/remove items in our cart, save that updated version of the cart in Firebase

OBJECTIVE IN TECH TERMS:

- Run the showNotification reducer function from `ui-slice.js`  , along with some async code
- This async code should make PUT requests to our Firebase backend

#### Goal Executed

PART 1: Set up a file that combines async logic with Redux dispatching

store/async-cart/sendTo.js		(dedicated a new file and folder to placing async logic)

```react
// import action creators from ui-slice.js
// helps dispatch their reducer functions easier
import { uiActions } from "../ui-slice"; 

// Define a function that returns an async function
// cart will be cart-slice.js' items KVP in the state object
export const sendCartData = (cart) => {

  return async function (dispatch) {
    // This helper FN dispatches one of ui-slice's reducer functions
    function uiSlice_showNotif(status, title, message) {
      dispatch(
        uiActions.showNotification({
          status: status,
          title: title,
          message: message,
        })
      );
    }
    uiSlice_showNotif("pending", "Sending...", "Sending cart data");

    // This nested function expression should take care of any async operations
    const fetchRequest = async () => {
      const response = await fetch(
        "https://reduxadv-c13f7-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) throw new Error("Sending cart data failed.");
    };

    try {
      await fetchRequest(); // make the fetch request
      uiSlice_showNotif("success", "Success!", "Sent cart data successfully!");
    } catch (errorObj) {
      uiSlice_showNotif("error", "Error!!", "Could not send cart data!");
    }
  };
};
```

PART 2: Dispatch this where necessary in a React component

App.js (what matters)

```react
import {sendCartData} from './store/async-cart/sendto'
let isInitial = true;

function App() {
  const dispatch = useDispatch();

  // Access Redux store variables (check the slice files)
  const showCart = useSelector((state) => state.ui.cartIsVisible); // ui-slice.js
  const cart = useSelector((state) => state.cart); // cart-slice.js
  const notification = useSelector((state) => state.ui.notification); // ui-slice.js

  useEffect(() => {
    if (isInitial) { isInitial = false; return } // don't run this block on mount
	// Dispatch async code along with ui-slice's showNotification reducer function
    dispatch(sendCartData(cart)) 
  }, [cart]); // re-executes when this Redux variable changes

}
```



#### Compare Method 1 to 2

In the previous lesson, we made PUT requests in App.js

- Every time we updated our cart, we'd update the data stored in our Firebase backend
  Relied on Method 1- useEffect 
- Now, we're going to accomplish the same thing using thunks instead

|          | Location of Async Code                                       | Why                                 |
| -------- | ------------------------------------------------------------ | ----------------------------------- |
| Method 1 | All inside of a React Component<br />(App.js in this case)   | It's one way of managing async code |
| Method 2 | A new file dedicated for async code<br />(sendTo.js in this case) | It keeps component files lean       |

COMPARING THE 2 METHODS:

You do the exact same things in both, but in different locations
Method 1 → Async logic and dispatching inside a React component 
Method 2 → Logic inside separate file, must still dispatch something inside a React component however

BEFORE:       App.js 

```react
function App() { // INSIDE COMPONENT FUNCTION
    
  // Accessing cart-slice's initialState: { items: [], totalQuantity: 0 }
  const cart = useSelector((state) => state.cart);
    
  useEffect(() => {
      const asyncFunction= () => { cart used within code block here }
      asyncFunction().catch()
  }, [cart]);
    
}
```

NOW:         sendTo.js (skeleton code snippet)

```react
export const sendCartData = (cart) => {
  return async function (dispatch) {
      
    const fetchRequest = async () => {}; // all async code in this nested ƒ() 
    try {
      redux_reducerFN("dispatch redux reducerFN for pending state");
      await fetchRequest(); // call nested asyncFN, then manage errors w/ tryCatch
      redux_reducerFN("dispatch redux reducerFN for success state");
    } catch (errorObj) {
      redux_reducerFN("dispatch redux reducerFN for failure state");
    }
      
  };
}; // will be dispatching this in a React component (App.js in this case)
```



### Second Example for Method 2

#### Objective

In the previous lesson we made PUT requests

- Each time we added/removed items in our Frontend, the `cart.json` file in our Firebase backend got updated automatically

Now, we're going to make GET requests

- We want to reload our cart saved in the backend each time we start up our webpage
- Must make a fetchAPI call on startup

> [Jason2B3/reduxAdvanced (github.com)](https://github.com/Jason2B3/reduxAdvanced)	checkout commit 262A 

#### Important Code

This code won't make much sense without context, so open up the project in your editor

pullFrom.js

```react
import { cartActions } from "../cart-slice";

export const pullFrom = () => {
  return async function (dispatch) {
    // Pending state: No need for one
    const fetchRequest = async () => {
      const response = await fetch(
        "https://reduxadv-c13f7-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) throw new Error("Sending cart data failed.");
      return response.json();
    };

    try {
      let results = await fetchRequest();
      // Success state: Replace the cart with what's fetched, then render
      dispatch(cartActions.replaceCart(results));
    } catch (errorObj) {
      // Failure state: Render everything as is
      return;
    }
  };
};
```

App.js

```react
function App() {
  const { navGlow } = useCustomHook(); // context API 
  const dispatch = useDispatch();
  //% On startup, fetch items saved in Firebase
  useEffect(() => {
    dispatch(pullFrom()); // changes a Redux store value
  }, []);
  // ...  whatever else
}
```



### Redux devtools

When working on larger projects, it is often confusing to debug applications reliant on a Redux store that's divided into a huge number of slices

SETUP

When using Redux toolkit, the Redux devtools browser extension works out of the box without needing any additional code 

1. Use Redux-toolkit in your project
2. Download the Redux devtools extension, `npm start` project, hit the redux tab in devtools

#### What Redux devtools can Do

> ![image-20210911173232983](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210911173232983.png)

TABLE:

- The list on the left is called the action stack
- Each moment on the action stack is a moment in time after a certain Redux reducer function was executed

|             | PURPOSE                                                      |
| ----------- | ------------------------------------------------------------ |
| Jump button | Render your project before a certain Redux reducer function fired off<br />(Jump back in time) |
| Skip button | Render your project as if some of the Redux reducer functions did not go off |
|             |                                                              |
| Action tab  | Displays the action.type and the payload of the reducer function you've chosen |
| State tab   | Shows the state object at the moment right after the Redux reducer function's called |
| Diff tab    | Shows the state object differences between the currently selected moment and the previous one on the list |
| Trace tab   |                                                              |
| Test tab    |                                                              |




# State Management Boiler Plate

### Context API

#### Method 1: useContext

contextFile.js

```react
import React, { useState, createContext } from "react";
export const AAA = createContext();

export default function BBB(props) {
  // Place everything you want shared across your app her
  // Then group it in the distribution object afterwards
  const [theme, setTheme] = useState("dark");
  // ---------------
  const distribution = { theme, setTheme }; 
  return <AAA.Provider value={distribution}>{props.children}</AAA.Provider>;
}
```

Use location in a React component

```react
import React, { useContext } from "react";
import { AAA } from "../contexts/CounterContext";

function Counter() {
  // Bring in all the shared variables from CounterContext.ks
  const { theme, setTheme } = useContext(AAA);
```

index.js

```react
import BBB from "PATH-TO-CONTEXT-FILE"	// remember to grab the default import

ReactDOM.render(
  <BBB>
    <App />		// wrap the App component with your default import tags
  </BBB>
, document.getElementById('root')
);
```



#### Method 2: Custom Hook Method

Context file

```react
import { useState, createContext, useContext } from "react"; // import useContext
const AAA = createContext();
export const useCustomContext = () => useContext(AAA) // export custom hook

export default function AuthContextProvider(props) {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  const distribution = { count, increaseCount, decreaseCount };
  return (
    <AAA.Provider value={distribution}>
      {props.children}
    </AAA.Provider>
  );
}
```

Use location in a React component

```react
import React from "react";
import { useCustomContext } from "../PATH-TO-CONTEXT-FILE";

function Counter() {
  const { count, increaseCount, decreaseCount } = useCustomContext();
  ... use data freely
}
```

index.js

```react
import AuthContextProvider from "PATH-TO-CONTEXT-FILE"	// grab the default import

ReactDOM.render(
  <AuthContextProvider>
    <App />		// wrap the App component with your default import tags
  </AuthContextProvider>
  ,document.getElementById('root')
);
```

AuthContextProvider can be renamed to BBB if that helps you visualize better



### Vanilla Redux: Multiple State Properties & Slices

#### root index.js

The code for this file remains the same for both demos

```react
import { Provider } from "react-redux";
import store from "./reduxToolkit/central-store"; 
// ^ should be the Redux store file's default export
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```



#### Demo Part 1: Redux Store Setup

store/index.js

```react
// Import all reducers
import {incrementReducer} from "./increment-reducer" 
import {toggleReducer} from "./toggle-reducer"
// Import Redux methods you'll need
import { createStore, combineReducers } from "redux";

// Place all the reducers you want to combine in here
const rootReducer= combineReducers({
  increment: incrementReducer,
  toggle: toggleReducer,
})

const store = createStore(rootReducer);
export default store;
```

store/increment-reducer.js

```react
const stateObj = {
  counter: 0,	
    // store a stateful variable that'll be displayed as the incrementor value
};
export const incrementReducer = function (state = stateObj, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "incrementMore":
      return { ...state, counter: state.counter + action.amount }; // USE PAYLOAD
  }
  return state;
};
```

store/toggle-reducer.js

```react
const stateObj = {
  showCounter: true, 
    // save a stateful variable that'll be used to render conditional JSX
};
export const toggleReducer = function (state = stateObj, action) {
  switch (action.type) {
    case "toggle":
      return { ...state, showCounter: !state.showCounter };
  }
  return state;
};
```

#### Demo Part 2: Redux Value Updating and Usage

Counter.js

```react
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  //  grab the parts of the state object you need (MUST DRILL A BIT DEEPER)
  const counterVal = useSelector((state) => state.increment.counter);
  const showCounterBoolean = useSelector((state) => state.toggle.showCounter);
  // Give yourself the ability to use the reducer's dispatch function
  const dispatch = useDispatch();
  const up = () => dispatch({ type: "increment" });
  const down = () => dispatch({ type: "decrement" });
  const upMore= () => dispatch({ type: "incrementMore", amount: 5 })//SUPPLY PAYLOAD 
  const toggleCounterHandler = () => dispatch({ type: "toggle" });
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounterBoolean && <div className={classes.value}>{counterVal}</div>}
      <div>
      <button onClick={upMore}>Increase by 5</button>
        <button onClick={up}>Increase by 1</button>
        <button onClick={down}>Decrease by 1</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
```



### React-toolkit: Multiple State Properties & Slices

#### Goal Description

We start off with the following:
I've specified what our different React components control in this mini-project

![image-20210905235101041](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210905235101041.png)

Inside Redux store file:

- We have 2 state slices we wish to manage; counter and isAuthenticated
- Each of these include state objects which may or may not have multiple KVP's

counter.js

- The counter buttons must increase or decrease the stateful counter value
- Toggle counter must make the counter value disappear/not-render temporarily

Auth.js

- Pressing the Login button should set isAuthenticated to true (ignore the input fields for this demo)

Header.js

- Pressing the logout button should set isAuthenticated to false
- If isAuthenticated equals false, the top 3 buttons should not be rendered until we log back in

![image-20210906031633369](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210906031633369.png)

#### Root index.js

```react
import { Provider } from "react-redux";
import store from "./reduxToolkit/central-store"; 
// ^ should be the Redux store file's default export
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

#### Redux Store Setup Files

We create new files and place them inside the same store folder as our store-center.js file

​														![image-20210906040106972](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210906040106972.png) ![image-20210906040159817](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210906040159817.png)

store/counter.js		(will be used for components/counter.js)

```REACT
import {createSlice} from "@reduxjs/toolkit"

const initCounter = { cValue: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter", 					// expected built-in KVP
  initialState: initCounter,
  reducers: {
    increment: (state) => {
      state.cValue++;
    },
    decrement: (state) => {
      state.cValue--;
    },
    incrementMore: (state, action) => {
      state.cValue = state.cValue + action.payload;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
})
export const counterActions = counterSlice.actions;

export default counterSlice.reducer	// the only line not part of the cutout
```

store/auth.js	(will be used for components/Auth.js and components/Header.js)

```react
import {createSlice} from "@reduxjs/toolkit"

const initAuth = { isLoggedIn: false };
const isAuthSlice = createSlice({
  name: "isAuthenticated", 			// expected built-in KVP
  initialState: initAuth,
  reducers: { 
    logOff(state, action) {
    	state.isLoggedIn = false
    }, 
    logIn(state, action) {
        state.isLoggedIn = true
    },   
  },
});
export const authActions = isAuthSlice.actions;

export default isAuthSlice.reducer // the only line not part of the cutout
```

store-center.js	(central Redux Store file)

```react
import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter" // a slice's default export but renamed
import authReducer from "./auth" // a slice's default export but renamed

//$ Create a store with the configureStore method (multiple slices)
const store = configureStore({
  reducer: {
    counter: counterReducer,
    authentication: authReducer,
  },
});

//$ Default export the Redux store
export default store;
```

#### React Component Files

We need to change one import line in all React components that dispatch actions
Accessing state values, using them, and dispatching all remains the same afterwards 

REMEMBER: Payloads are applied automatically if you feed a parameter

components/counter.js

```react
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";	// UPDATED

const Counter = () => {
  // ACCESS REDUX STORE VALUES
  const counterVal = useSelector((state) => {
    // Refers to: counter KVP of configure store → cValue KVP of state object
    return state.counter.cValue;  
  });
  // Refers to: counter KVP of configure store → showCounter KVP of state object
  const showCounter = useSelector((state) => state.counter.showCounter);
  
  // DISPATCH ACTIONS ACCORDING TO THE NEW IDENTIFIER-FUNCTION NAMES
  const dispatch = useDispatch();
  const up = () => dispatch(counterActions.increment());
  const down = () => dispatch(counterActions.decrement());
  const toggleCounterHandler = () => dispatch(counterActions.toggle());
  const upMore = () => dispatch(counterActions.incrementMore(5)); //PAYLOAD SUPPLIED
  // ...rest is excluded for brevity
```

components/Header.js

```react
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth"; // UPDATED 

const Header = () => {
  const loginStatus = useSelector((state) => state.authentication.isLoggedIn);
  const dispatch= useDispatch()
  const btnHandler= function(e){
    e.preventDefault()
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {loginStatus && <3_conditional_buttons/>}
};
```

components/Auth.js

```react
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth"; // UPDATED 

const Auth = () => {
  const dispatch = useDispatch();

  const loginStatus = useSelector((state) => state.authentication.isLoggedIn);
  const btnHandler = function (e) {
    e.preventDefault();
    if (!loginStatus) dispatch(authActions.login());
    console.log("logging in!");
  };
  // ...rest is excluded for brevity
```

#### The Redux Triangle

Code can look pretty absurd when using React-toolkit with multiple store slices especially
Use this image to help remind you of how Redux works in general

![image-20210920082652170](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210920082652170.png)

|                         | includes...                                                  | purpose                                                      |
| ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Redux store setup files | main store, slices...etc                                     | to create a Redux store for state management                 |
| useDispatch files       | any file that dispatches Redux action methods                | these change Redux store values<br />the site visitor should do something to trigger the dispatch |
| useSelector files       | any file that accesses values in the Redux store "accesses", does not mean "changes", btw | to pick and choose Redux store values, so we can use them on the site |



# ====== REACT ROUTER ======

Use React Router to make SPA's that transition between pages real smoothly

# Routes, Links, Route Parameters

With React router, we can add multiple pages with different URL's to our single page applications

### What Routing is + Setup

Being able to change the URL of your site is important for many reasons

- Perhaps you want to click an anchor link to scroll down to a certain section of your site
- Maybe an article from another website or even yours contains related info to what your current website is discussing

#### Setup

```
npm install react-router-dom
```

index.js

```react
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

#### How URL Changes Traditionally Work

When we click an anchor link in an old-fashioned website, it typically reloads the browser tab and takes you to another webpage (which looks pretty choppy)

- Behind the scenes, your browser actually requests a different HTML file that it receives and loads
- The URL will also get changed once that occurs

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210912041153825.png" alt="image-20210912041153825" style="zoom:80%;" />

#### How URL changes work in React-Router

Although we can go the traditional route even when coding with React, people prefer a more smooth and modern transition style these days

CLIENT-SIDE ROUTING:

- We'll have only one HTML page that is loaded on first visit
- We need a package that allows us to manipulate the URL via JS/React and change what's seen without loading new HTML files

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210912042037519.png" alt="image-20210912042037519" style="zoom:80%;" />



### Defining Routes

#### Routing based on URL's

We've rendered components conditionally based on stateful values before
Now, let's render components depending on the URL...

EXAMPLE:  Completed in the following sub-section

```
www.domain.com/welcome		// render Welcome.js component
www.domain.com/products		// render Products.js component
```

#### Demo

App.js (routing does not always need to happen here)

```react
import { Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
export default function App() {
  return (
    <>
      <Route path="/welcome">
        <Welcome /> {/* Renders this if the path ends in /welcome */}
      </Route>
      <Route path="/products">
        <Products /> {/* Renders this if the path ends in /products */}
      </Route>
      <h1>Appears by default, and after each route</h1> {/* Renders this by default,*/}
    </>
  );
}
```

TESTS:
The code for Welcome.js and Products.js is not shown- but are very simple h1 returns

> www.domain.com						   ![image-20210912060753173](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210912060753173.png)
>
> www.domain.com/welcome		![image-20210912060839012](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210912060839012.png)
>
> www.domain.com/products	    ![image-20210912060926260](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210912060926260.png)

JSX OUTSIDE OF ROUTE TAGS

- Notice how the JSX outside of the `<Route>` tags gets rendered by default, even when a certain route gets taken 
- Just consider JSX outside of a route to be universally applicable

#### Pages folder

When you build React components that will be used to render pages that have a specific path like `/products`, it is considered good practice to dedicate a folder to them

- Keeping these "special" components away from regular ones will help keep things organized
- That being said, there is no technical difference between a regular component and one being used to render a "new" page

![image-20210912061853242](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210912061853242.png)

#### What's Next?

- RN we have to test our routes by manually typing filepaths at the end of our localhost URL
- In the following lesson we'll learn how to manipulate URL's with JS/react

![image-20210912062702752](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210912062702752.png)

### < Link > : Same Site URL's

Let's learn how to manipulate the URL using React
Use this over anchor tags which will refresh the browser by default (choppy-looking)

> [Jason2B3/router_learn (github.com)](https://github.com/Jason2B3/router_learn)			commit 268

#### Linking to other Pages on Site

This will teach you how to program a jump from `www.domain` to `www.domain/contact` for example

MainHeader.js

```react
import React from "react";
import { Link } from "react-router-dom";
export default function MainHeader() {
  return (
    <ul>
      <li> <Link to="/welcome">Welcome</Link> </li>
      <li> <Link to="/products">Products</Link> </li>
    </ul>
  );
}
```

App.js

```react
function App() {
  return (
    <>
      <MainHeader />
      <Route path="/welcome">
        <Welcome /> {/* Renders this if the path ends in /welcome */}
      </Route>
      <Route path="/products">
        <Products /> {/* Renders this if the path ends in /products */}
      </Route>
      <h1>Appears by default, and after each route</h1>
    </>
  );
}
```

![image-20210912064417203](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210912064417203.png)

#### Link Tags VS Anchor Tags

- The link tags are a feature provided by React router, and they provide advantages over standard anchor tags containing URL's
- The browser will not reload or fetch another HTML file when they're hit, but will still render a new page based on any routes you've specified



### < NavLink > : URL's with active Classes

When designing navbars, we typically want the nav link whose page we're currently on to be highlighted- which is fairly easy to do thanks to a React Router Feature

#### < NavLink > Tags

This tag is similar to the `<Link>` tags from last lesson, but with some new perks

- The difference is, `<NavLink>` tags have an activeClassName attribute which attaches a class to the element once it is active (once it's clicked)
- In CSS, you can specify styles preemptively for that very same class
  Remember, both `<Link>` and `<NavLink>` are considered `<a>` tags in CSS

#### Demo

> [Jason2B3/router_learn (github.com)](https://github.com/Jason2B3/router_learn)		commit 269

MainHeader.js

```react
import { Link, NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <ul>
        <li>
          <NavLink to="/welcome" activeClassName={classes.clicked}>Welcome</NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName= {classes.clicked}>Products</NavLink>
        </li>
      </ul>
    </header>
  );
}
```

MainHeader.module.css

```css
.header a:hover,		/*A*/
.header a:active,		/*B*/
.header a.active {		/*C*/
  color: #95bcf0;
  padding-bottom: 0.25rem;
  border-bottom: 4px solid #95bcf0;
}
/*
Highlights when NavLink is... 
hovered over (A)
clicked (B)
or assigned the "clicked" class (C)
*/
```

![image-20210912170725026](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210912170725026.png)

#### Styling Link Tags

Any `<Link>` or `<NavLink>` tags are still considered `<a>` tags when styling with CSS
Keep that in mind when choosing your selectors

React:

```html
	<ul>
      <li> <Link to="/welcome">Welcome</Link> </li>
      <li> <Link to="/products">Products</Link> </li>
    </ul>
```

CSS

```css
ul a {
    color:white; /* This would successfully target the 2 Link tags */
}
```



### Route Parameters: Create Dynamic Routes/Links

We won't be hardcoding every single route ourselves

#### What Dynamic Routes are

- We're able to add placeholders to the path attributes of `<Route>` tags, although the syntax differs
- The `:someword` makes it so that the ProductDetail component renders anytime the visited URL ends in `/product-detail/literallyAnything`

```react
      <Route path="/product-detail/:someword">
        <ProductDetail />
      </Route>
```

You can have multiple as well:

```
      <Route path="/product-detail/:something/:something">
        <ProductDetail />
      </Route>
```

#### Demo

> [Jason2B3/router_learn (github.com)](https://github.com/Jason2B3/router_learn)		commit 270A : dynamic routes

Products.js

```react
export default function Welcome() {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>Book</li>
        <li>Carpet</li>
        <li>Online Course</li>
      </ul>
    </section>
  );
}
```

ProductDetail.js

```react
export default function ProductDetail() {
  return (
    <section>
      <h1>Product Detail</h1>
    </section>
  )
}
```

App.js (what matters)

```react
function App() {
  return (
    <>
      <Route path="/products">
        <Products /> {/* Renders this if the path ends in /products*/}
      </Route>
      <Route path="/product-detail/:productID">
        <ProductDetail />
      </Route>
    </>
  );
}
```

localhost:3000/product-detail/literally-anything-you-want

![image-20210912182843704](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210912182843704.png)

#### Overlapping Route Content

> [Jason2B3/router_learn (github.com)](https://github.com/Jason2B3/router_learn)		commit 270B : overlapping route content

- Look at what happens when we change our App.js JSX so that our ProductDetail route shares a similar URL path to a different route
- Both of their content renders on screen at the same time

App.js (what matters)

```react
      <Route path="/products">
        <Products /> 
      </Route>
      <Route path="/products/:productID">	// both use /products
        <ProductDetail />
      </Route>
```

TEST:

> localhost:3000/products												localhost:3000/products/whatever
>
> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210912181503008.png" alt="image-20210912181503008" style="zoom:80%;" />			 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210912181707784.png" alt="image-20210912181707784" style="zoom:80%;" />
>
> It seems we have some overlapping content

#### Dynamic Links with Placeholders

You can use regular React placeholders to create links

```react
import React from "react";
import { Link } from "react-router-dom";
export default function MainHeader(props) {
  let searchTerm= props.query
  return (
    <ul>
      <li> <Link to="/welcome">Welcome</Link> </li>
      <li> <Link to={`/products/${searchTerm}`}>Research</Link> </li>
    </ul>
  );
}
```



### Extracting Route Parameters with useParams Hook

- We may need the value of the `:productID` parameter in the components that are rendered when a URL containing it is visited
- In more realistic projects, we might make some GET requests to pull data based on this parameter, but for now we'll just display it 

#### Demo

> [Jason2B3/router_learn (github.com)](https://github.com/Jason2B3/router_learn)		commit 271

App.js (what matters)

```react
function App() {
  return (
    <>
      <Route path="/product-detail/:productID">
        <ProductDetail />
      </Route>
    </>
  );
}
```

ProductDetail.js

```react
import { useParams } from "react-router";	// new useParams hook!
export default function ProductDetail() {
  const params = useParams(); // an object's returned
  console.log(params);
  console.log(params.productID); // the key equals the placeholder in App.js
  return (
    <section>
      <h1>Product Detail component rendering now</h1>
    </section>
  );
}
```

![image-20210912194317004](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210912194317004.png)



### Configure Routes with Switch & Exact

In this lesson we won't be showing the code for many components that aren't 100% relevant to the lesson topic- but you can tell when they are rendered due to the text they display

> Play around and run tests yourself in here:
> [Jason2B3/router_learn (github.com)](https://github.com/Jason2B3/router_learn)		commit 272

#### Paths without Switch or Exact

App.js return section		![image-20210912200855308](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210912200855308.png)

What happens if we enter the following URL's into our search bar?

| URL                              | route selected<br />for rendering | why                        |
| -------------------------------- | --------------------------------- | -------------------------- |
| localhost:3000/products          | route 2                           | match                      |
| localhost:3000/products/whatever | route 2 THEN route 3 underneath   | URL matches route 2 and 3  |
| localhost:3000/welcome888        | none                              | no routes specified for it |

#### How React Chooses Routes for Rendering

URL MATCHING
If the route's path matches the start of a URL, then React will render what's on that route

EX: Row 2 of the table above where React matches with multiple routes at once

- localhost:3000/products/whatever technically starts with `/products`, so Route 2 is a match
- It obviously matches with route 3, since it expects `/products/whateverAfterwards`

ORDER

- It renders in the order the routes are parsed.
- So, if route 3 appeared before 2 in JSX ..
  the route selected for rendering would be route 3 then 2 underneath

#### Avoiding Multi-Routes: < Switch > Tags

- By wrapping JSX in a pair of `<Switch>` tags, we force React to choose 1 route based on the URL
- It will still select matches in the same way we described in the previous subsection

App.js return section (same as before)    ![image-20210912200855308](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210912200855308.png)

| URL                              | route selected<br />for rendering | why                                                          |
| -------------------------------- | --------------------------------- | ------------------------------------------------------------ |
| localhost:3000/products          | route 2                           | match                                                        |
| localhost:3000/products/whatever | route 2                           | URL matches route 2 and 3<br />but route 2 is parsed first in App.js |

#### Forcing Strict Equality Matches:  "exact" attribute

 NORMALLY:
`/products/something` would match with Route 2 and 3

```react
<Switch> 
		<Route path="/products">    ROUTE 2
          <Products />
        </Route>
        <Route path="/products/:productID">     ROUTE 3
          <ProductDetail />
        </Route>
</Switch>
```

——————————————————————————————————————————————————————

 WITH EXACT APPLIED

- `/products/something` would match with Route 3 only
- It wouldn't strictly match Route 2, because there's more after `/products` 

```REACT
<Switch>   
		<Route path="/products" exact>    ROUTE 2
          <Products />
        </Route>
        <Route path="/products/:productID" exact>     ROUTE 3 (added exact attribute)
          <ProductDetail />
        </Route>
</Switch>
```

#### Using Switch/Exact together

This is a good way to select specific paths depending on the URL, because you take care of 2 issues React has with the way it chooses routes 

1. You can prevent multiple routes from loading at once
2. You can force strict equality matches only



### Route Short-Form Syntax

There's a slightly faster way to render components based on what path is typed out

Long Syntax

```html
<Route path="/welcome">
	<Welcome />
</Route>
```

Short Syntax

```html
<Route path="/welcome" component={Welcome} />
```



# Nested Routes, Redirects, & Related Features

### Nested Routes

Sometimes we may want to connect a page to a component we already use as a page
Your page structure should feel like a file folder with an established hierarchy 

#### When are Routes Active?

You can define routes on any file you want, but they will not always be in effect

- Routes will be active on components that are currently active themselves
- If a component is not active, the routes defined on it will not be either

#### Demo

> Play around and run tests yourself in here:
> [Jason2B3/router_learn (github.com)](https://github.com/Jason2B3/router_learn)		commit 273

Welcome.js	(a page component that is rendered by a Route in App.js)

```react
import { Route, Switch } from "react-router-dom";

export default function Welcome() {
  return (
    <section>
      <h1>Welcome Component</h1>
      <Route path="/welcome/new-user">
        <p>Welcome new user!</p> {/* Is active */}
      </Route>{" "}
      <Route path="/products/new-user">
        <p>Check out our new products</p> {/* Would never be active */}
      </Route>{" "}
    </section>
  );
}
```

We are currently inside Welcome.js

- To get here, the URL must be `localhost:3000/welcome` , possibly with more tacked onto the end. 
- Either way,  `localhost:3000/products` would not get us here, so specifying a path based on that does nothing in our code
- If you want to reach the URL the ROUTE 2 specifies in its path attribute, try the useHistory() hook

#### Placeholder Types with Nested Routes

You have the option of using traditional react placeholders or React-router placeholders when you specify path attributes for `<Route>`  tags

QuoteDetail.js (what maters)

```react
      <Route path="/quotes/:quoteID/comments">
        <Comments />
      </Route>
      <Route path={`/quotes/${params.quoteID}/comments`}>
        <Comments />
      </Route>
```

In this situation, we're placing a nested Route inside QuoteDetail.js

- To reach this component, you must have `localhost:3000/quotes/wordA` entered as a URL
- We add a nested Route which leads to the Comments component
  To reach that, we want `localhost:3000/quotes/wordA/comments` to be typed in
- wordA must be consistent across both, so we actually grab its value via useParams()
  See how in the following subsection

#### Full Code

> [Jason2B3/router_practice (github.com)](https://github.com/Jason2B3/router_practice)		commit 277

QuoteDetail.js

```react
import { Route, useParams } from "react-router";
import Comments from "../comments/Comments";

export default function QuoteDetail() {
  const params = useParams(); // grab the part of the URL that gets us here
  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteID}</p>
      <Route path="/quotes/:quoteID/comments">
        <Comments />
      </Route>
      // make it a requirement to reach the comments component ▼
      <Route path={`/quotes/${params.quoteID}/comments`}> 
        <Comments />
      </Route>
    </>
  );
}
```



### < Redirect > the User

If a user types a URL that has no dedicated content created for it, you'll want to redirect them onto another route which does- or else they'll be staring at a nearly blank screen

#### Challenge Description

At the moment, `our.domain` renders next to no content at all

- We have routes that cause content to be rendered if we include additional things on the tail end of the URL.   (`/welcome  /products` ... etc)
- Force the site to jump to the /welcome route if the user types in `our.domain` with nothing else at the end of it

![image-20210913021109822](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210913021109822.png)

#### Solution

> [Jason2B3/router_learn (github.com)](https://github.com/Jason2B3/router_learn)		commit 274

App.js

```react
import { Route, Switch, Redirect } from "react-router-dom";

export default function App() {
  return (<>
      <Switch>
        // Redirect if the user searches for the path specified below
        <Route path="/" exact>
          <Redirect to="/welcome" />           
        </Route> // needs exact attrib, since all paths start with "/"
          
        <Route path="/welcome">
          <Welcome />
        </Route>
          
        // other routes not shown
      </Switch>
    </>
  );
}
```

![image-20210913021639997](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210913021639997.png)



### Nested-Route/Redirect Rule

#### The Rule

- If you're in a component rendered by the URL being `/routeA`, any routes or redirects must also start with `/routeA` , or else they won't work
- Links and NavLinks can be used in any file to transport you to any URL (rule does not apply)
- To get over this rule, try the useHistory hook

#### Demonstration

Taken from the Nested Route lesson

> Play around and run tests yourself in here:
> [Jason2B3/router_learn (github.com)](https://github.com/Jason2B3/router_learn)		commit 273

Welcome.js	(a page component that is rendered by a Route in App.js)

```react
import { Route, Switch } from "react-router-dom";

export default function Welcome() {
  return (
    <section>
      <h1>Welcome Component</h1>
      <Route path="/welcome/new-user">
        <p>Welcome new user!</p> {/* Is active */}
      </Route>{" "}
      <Route path="/products/new-user">
        <p>Check out our new products</p> {/* Would never be active */}
      </Route>{" "}
    </section>
  );
}
```

We are currently inside Welcome.js

- To get here, the URL must be `localhost:3000/welcome` , possibly with more tacked onto the end. 
- Either way,  `localhost:3000/products` would not get us here, so specifying a route based on that does nothing in our code
- If you want to reach the URL the ROUTE 2 specifies in its path attribute, try the useHistory() hook



### useHistory: Redirect from Anywhere 

DISCLAIMER:

- Just because this built in custom hook is more powerful than `<Redirect>` does not mean you should use it in every situation instead of it
- There is a very specific use case for this feature
  It should be used to overcome the limitations imposed by the Nested Route/Redirect Rule 

#### useHistory Variants

PUSH
Use this variant to add onto the user's history. 

- If the visitor is on a webpage rendered by `localhost:3000/pathA`, you can redirect them to `localhost:3000/pathB`
- They can still hit the back button on their browser in order to return to localhost:3000/pathA after they reach path B
- This is often used in handlers,  so that the user gets directed to a new page after hitting a button, submitting a form, or something

REPLACE: (until you fully understand it, just push instead)

- Use this variant like push, with the difference being that you cannot backspace back to the previous page anymore (unsure what the practical uses are)
- During my testing, it looks like you can backspace back to the previous page, if you hit the back button 2X

#### Challenge 1 Description

When hitting the Add Quote button in IMG 1, we submit a quote
We'd also like to be redirected to the route with a path of /quotes afterwards 

- A `<Redirect>` won't work here because of the Nested-route/Redirect Rule
- Instead, we'll Redirect with useHistory's push variant 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210914023942555.png" alt="image-20210914023942555" style="zoom: 67%;" /><img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210914023959898.png" alt="image-20210914023959898" style="zoom:67%;" />

![image-20210914024205770](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210914024205770.png)

#### Challenge 1 Solution

> [Jason2B3/router_practice (github.com)](https://github.com/Jason2B3/router_practice)			commit 282	

SOLUTION LOCATION:

- The Add Quote button is in QuoteForm.js, but hitting it triggers a function in NewQuote.js
  (Upwards drilling)
- We could have fit our solution in either file, but we did it in NewQuote.js because there was less code there

NewQuote.js

```react
import { useHistory } from "react-router-dom";

export default function NewQuote() {
  const history = useHistory(); // an object containing the URL history (complex)
  
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData); // logs the quote we just submitted
    history.push("/quotes");
    // redirects us to the route with a path of /quotes 
    // while letting us go back to the previous pg if we want
    // (renders AllQuotes.js. Just look at App.js)
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
}
```

#### Rerendering due to useHistory

- Every time you push or replace with useHistory, the entire component gets re-evaluated, even if you redirect someone to the same location you're currently in

### Rendering JSX Conditionally with Nested Routes

OVERVIEW

You can and should write conditional JSX inside of routes
It will save you multiple lines of code that you'd otherwise rely on

#### Project Objective

- Make the "Load Comments" button load the `<Comment>` component is from the Comment.js file
- Render this conditionally using Routes

> localhost:3000/quotes/q1		 									   localhost:3000/quotes/q1/comments
>
> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210915041140208.png" alt="image-20210915041140208" style="zoom: 67%;" />				 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210915041211930.png" alt="image-20210915041211930" style="zoom:67%;" />

#### Code

App.js (what matters)

```react
          <Route path="/quotes/:quoteID">
            <QuoteDetail /> // we start on this Route to reach /quotes/q1	
          </Route>
```

QuoteDetail.js (what matters)

```react
export default function QuoteDetail() {
  const params = useParams(); // :quoteID from App.js (should be q1 or q2)
  const regParameter = params.quoteID;

  const pathToQuotesIDPage = `/quotes/${regParameter}`;
  const pathToCommentsPage = `/quotes/${regParameter}/comments`;
  return <>
      <HighlightedQuote author={quote.author} text={quote.text} />
      {/* ROUTE 1: We're already inside the next route that follows */}
      <Route path={pathToQuotesIDPage} exact>
        <div className="centered">
          <Link to={pathToCommentsPage} className="btn--flat">
            Load Comments
          </Link>
        </div>
      </Route>
      
      {/* ROUTE 2: This route's taken if we press the "load comments" button */}
      <Route path={pathToCommentsPage} exact>
        <Comments />
      </Route>
    </>
```

#### Explanation Table

|         | represents                                            | what JSX is rendered                          |
| ------- | ----------------------------------------------------- | --------------------------------------------- |
| ROUTE 1 | localhost:3000/quotes/q1<br />image on left           | Highlighted quote +<br />"Load Comments" link |
| ROUTE 2 | localhost:3000/quotes/q1/comments<br />image on right | Highlighted quote +<br />Comments component   |

- Upon arrival to this page, the URL is something similar to localhost:3000/quotes/q1	
  q1 may be replaced with q2... etc (depends on quote ID which you don't need to understand RN)
- The highlighted quote is shown consistently when QuoteDetail is rendered, in both cases

### When to use Each Feature

#### Purpose Table

|                 | PURPOSE                                                      |
| --------------- | ------------------------------------------------------------ |
| < Link >        | Use them like `<a>` tags<br />They're the same but don't choppily reload the page |
| < NavLink >     | Same as Link tags, but with activeClassName attribute        |
| < Route >       | Defines what page components gets rendered<br />when a certain URL is entered (typically paired with links that send to the aforementioned URLs) |
| < Redirect >    | Redirects users onto another route<br />Most often used when a URL we haven't coded for is entered<br />Acts as a failsafe to prevent visiting a URL that causes crashes |
| useHistory push | Works like Redirect, but with less limitations on where we can use it |

#### Rules with Nested Routes

When are Routes Active?
I ask because you can define routes on any file you want, but they will not always be in effect

- Routes will be active on components that are currently active themselves
- If a component is not active, the routes defined on it will not be either

EXAMPLE:

> Play around and run tests yourself in here:
> [Jason2B3/router_learn (github.com)](https://github.com/Jason2B3/router_learn)		commit 273

Welcome.js	(a page component that is rendered by a Route in App.js)

```react
import { Route, Switch } from "react-router-dom";

export default function Welcome() {
  return (
    <section>
      <h1>Welcome Component</h1>
      <Route path="/welcome/new-user">
        <p>Welcome new user!</p> {/* ROUTE 1: Is active */}
      </Route>{" "}
      <Route path="/products/new-user">
        <p>Check out our new products</p> {/* ROUTE 2: Would never be active */}
      </Route>{" "}
    </section>
  );
}
```

We are currently inside Welcome.js

- To get here, the URL must be `localhost:3000/welcome` , possibly with more tacked onto the end. 
- Either way,  `localhost:3000/products` would not get us here, so ROUTE 2 will never do anything when its defined in this file, specifically
- If you want to reach the URL the ROUTE 2 specifies in its path attribute, try the useHistory() hook

# Query Parameters + Extracting URL Data

### useLocation 

Pulls information about the currently loaded page. 
Much like useHistory, it returns an object of potentially useful information

#### Demo

```react
import { useLocation } from "react-router-dom";
const QuoteList = (props) => {
  const location = useLocation(); // save the object in a variable
  const btnHandler = () => {
    console.log(location) // press a button to log our location
  };
  return JSX 
}
```

We are currently loading localhost:3000/quotes?sort=asc

![image-20210914165153723](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210914165153723.png) <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210914143519954.png" alt="image-20210914143519954" style="zoom:80%;" />

pathname KVP:  endpoint
search KVP:  query parameters



### window.location

I'm not sure if we should avoid using this JS method in React, but it looks pretty useful

EXAMPLE:

```React
// currentURL: http://localhost:3000/quotes/q1/comments?alt=0&bread=[%27a%27]
console.log(window.location) // pulls an object with details on the URL
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210915052922796.png" alt="image-20210915052922796" style="zoom: 80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210914143519954.png" alt="image-20210914143519954" style="zoom:80%;" />

#### Practical Uses

There is a more detailed list in the summary lecture in this chapter where 
We compare this method to all the built in hooks in React router that deal with URL's

|                  | Key of interest          |
| ---------------- | ------------------------ |
| full URL         | window.location.href     |
| Host name        | window.location.host     |
| Query Parameters | window.location.search   |
| Endpoint         | window.location.pathname |



### Query Parameters & URLSearchParams

#### Examples of Query Parameters

Query parameters are special parameters attached to the end of a URL and are preceded by `?` and separated by each other by `&`

Dissect the following link:

```
http://example.com/path?name=Branch&products=[Journeys,Email,Universal%20Ads]

Host name → http://example.com					
Endpoint → /path

Query Parameter key value pairs → 
name=Branch
products=[Journeys,Email,Universal%20Ads]
```

#### Query Parameters Explained

> ![image-20210914143744799](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210914143744799.png)  ![image-20210914143519954](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210914143519954.png)
>
> Regular parameter:											Query Parameter:  

Query parameters pass extra data into the page that gets loaded
They do not change which route is selected by React-router

- Unlike regular parameters, query parameters are optional
- Every route that's matched will have access to query parameter data, which will often be used to change the behavior of the loaded page (next lesson)

#### URLSearchParams: Grab Query Param KVPs

This is a tool built into JS that gives us easier access to the keys and values inside our query paramters

OBJECTIVE: 
Create a helper function that returns [key, value] from a URL's query parameters
Make the argument to that helper a specific key name, so you can fetch its value

```JS
function fetchQueryParameter(key) {
  let queryParameters = new URLSearchParams(window.location.search);
  return [key, queryParameters.get(key)];
}
console.log(window.location.search) // can be replaced by useLocation() in React
console.log(fetchQueryParameter("name"));
console.log(fetchQueryParameter("products"));
console.log(fetchQueryParameter("monke"));
```

Log onto your FB codepen, and manually enter then search this URL...

```
https://codepen.io/jason-bustamante/pen/RwgLxgy?editors=0010&name=Branch&products=[Journeys,Email,Universal%20Ads]
```

![image-20210914183620870](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210914183620870.png)



#### The Relation to React

In the previous subsection,we used window.location.search to extract our current URL location

- In React, we extract our current location with the useLocation hook, and we can still use URLSearchParams
- Just so you know, a helper function is not necessary for using this new method



### Using Query Parameters to Dictate Webpage Behavior

HOW DO WE DICTATE BEHAVIOR?

- In our current project, we could choose to present the following page in it's default state
- Alternatively, we could use query parameters to load a version of this page where quotes are ordered  forwards or backwards based on their ID's

PRE-REQUISITES: 
useLocation, URLSearchParams, and query parameters

#### Query Parameter Refresher

![image-20210914143519954](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210914143519954.png)

Grab 1 long query parameter string with...

- `window.location.search` in JS
- `useLocationVariable.search` in React 

In the above example they would output `?service=mail&passive=true&rm=false`

#### Objective

Hitting the "Sort Ascending" button should...

- Flip the sort order ___ text in the button

- Re-sort the quotes using the newly flipped order

  ![image-20210914211445100](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210914211445100.png)		![image-20210914211511642](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210914211511642.png)

#### Procedure

1. Find the query parameter value for the sort= key in the currently visited URL 
   We want this value to influence the webpage's behavior
2. Pre-program the sorting order of the quotes based on what the query parameter value is

| CATEGORIES                      | desired behavior                            |
| ------------------------------- | ------------------------------------------- |
| localhost:3000/quotes           | sort in ascending quote ID order by default |
| localhost:3000/quotes?sort=asc  | load page in ascending quote ID order       |
| localhost:3000/quotes?sort=desc | load page in ascending quote ID order       |

3. Make the button do what I explained in the objective
4. Test by manually entering these 3 links to see if what you did worked

```
http://localhost:3000/quotes       		( want ascending order )
http://localhost:3000/quotes?sort=desc 	( want descending order )
http://localhost:3000/quotes?sort=asc  	( want ascending order )
```



#### Code

> [Jason2B3/router_practice (github.com)](https://github.com/Jason2B3/router_practice)			commit 284

QuoteList.js (almost every part of it is relevant)

```react
import { Fragment, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const sortQuotes = (quotes, sortOrder) => {
  return quotes.sort((quoteA, quoteB) => {
    if (sortOrder) return quoteA.id > quoteB.id ? 1 : -1;
    if (!sortOrder) return quoteA.id < quoteB.id ? 1 : -1;
  }); // the helper function which sorts quotes
};

const QuoteList = (props) => {
  // ----------------[ GRAB REQUIRED DATA ]------------------------
  const history = useHistory(); // history object
  const location = useLocation(); // location object

  //% Break down the current URL's query parameters
  let queryParameters = new URLSearchParams(location.search);
  const qpValue = queryParameters.get("sort"); // equals undefined, asc, or desc

  //% Sort the quotes based on the query parameter of the searched URL
  let stateVari;
  if (qpValue === "desc") stateVari = false;
  if (qpValue === "asc") stateVari = true;
  if (!qpValue) stateVari = true; // if QP's undefined → sort ascending by default
  const [sortOrder, setSortOrder] = useState(stateVari);
  const sortedQuotes = sortQuotes(props.quotes, sortOrder);

  //% Switch query parameter between ?sort=asc or ?sort=desc when we hit the button
  const changeSortingHandler = () => {
    const flippedSortOrder = sortOrder ? "desc" : "asc";
    history.push(`/quotes?sort=${flippedSortOrder}`); // redirect us to a new pg
    setSortOrder((state) => !state); // flip the sortOrder value for real now
  };
  return (
    <Fragment>
      <div>
        <button onClick={changeSortingHandler}>
          Sort {sortOrder ? "descending" : "ascending"}
        </button>
        <p>Currently sorted {sortOrder ? "ascending" : "descending"}</p>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};
```

#### Alternative Solution

SRC:	 [Udemi Solution](https://github.com/academind/react-complete-guide-code/blob/20-building-mpas-with-react-router/code/18-working-with-query-params/src/components/quotes/QuoteList.js)

- You actually do not need useState for this example, and can shorten the solution by not using it
- That being said, the alternative method proposed by my course is much tougher to follow in my opinion

### useRouteMatch: Create Flexible Route Paths (Part 1)

#### What's in the useRouteMatch return Object?

|         | Purpose                                                      |
| ------- | ------------------------------------------------------------ |
| params  | KVP's taken from the URL that correspond with the<br />route parameters that got us to the current URL |
| isExact | Boolean that equals true if the entire URL was matched with no trailing characters |
| path    | The Route path used to match<br />Useful for building nested routes |
| url     | The matched portion of the URL<br />Useful for building nested Links |

EXAMPLE:

```react
import { Route, useRouteMatch } from "react-router-dom";

export default function QuoteDetail() {
  const match= useRouteMatch();
  console.log(match)
} // current URL: http://localhost:3000/quotes/q1/comments?alt=0&bread=[%27a%27]
```

![image-20210915070554020](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210915070554020.png)

- You can see that isExact is false since we didn't match the entire URL
- We still have /comments?alt=0&bread=[%27a%27] leftover
  You can't see why in this snippet- need to have the actual project open

#### The Need for Flexible Route Paths

There is one major problem when it comes to hardcoding paths for routes and links

- If you decide to change routes in 1 area of your code, any nested routes deeper inside your file structure will fail, leading to a bunch of required bug fixing 
- This is due to the Nested-Route/Redirect rule which we discussed in a previous lesson

EXAMPLE:

If we changed every /quotes path in App.js to /q , every route defined in QuoteDetail.js would fail
This is very bad for scalability, maintenance, and for following the DRY code principle

> App.js															  QuoteDetail.js
>
> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210915045126047.png" alt="image-20210915045126047" style="zoom:75%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210915045331565.png" alt="image-20210915045331565" style="zoom:75%;" />	



### useRouteMatch: Create Flexible Route Paths (Part 2)

Now that the required theory's been explained, we can learn how to make flexible routes

> [Jason2B3/router_practice (github.com)](https://github.com/Jason2B3/router_practice)
>
> START: 	commit 285
> END:		 commit 286

#### Project Requirements

| files in need of refactoring        | path             | methods to be refactored |
| ----------------------------------- | ---------------- | ------------------------ |
| QuoteDetail.js<br />(image on left) | /quotes/:quoteID | Routes and Links         |
| QuoteList.js<br />(image on right)  | /quotes          | useHistory               |

 				<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210915101302544.png" alt="image-20210915101302544" style="zoom:80%;" />  <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210915101159041.png" alt="image-20210915101159041" style="zoom:80%;" />

#### Method 1: useRouteMatch.path

Editing QuoteDetail.js 

Before:

```react
  const params = useParams(); // :quoteID from App.js (equals q1 or q2)
  const regParameter = params.quoteID;

  const pathToQuotesIDPage = `/quotes/${regParameter}`; // /quotes is hardcoded
  const pathToCommentsPage = `/quotes/${regParameter}/comments`;
```

After:

```react
  const match = useRouteMatch();
  console.log(match.path, "->", match.url);
  // Ex. {path: '/quotes/:quoteID', url: '/quotes/q1'}  (parts that matter)

  const pathToQuotesIDPage = match.url; // /quotes is no longer hardcoded
  const pathToCommentsPage = `${match.url}/comments`;
```

- In our project, using match.url works while using `match.path` does not
- In the Udemy example, they use `match.path` and succeed with it (not sure how that works)

#### Method 2: useHistory.push

QuoteList.js

Before:

```react
  const history = useHistory(); // history object
  history.push(`/quotes?sort=${flippedSortOrder}`);
  // mostly hardcoded, and fairly long
```

After: Option 1 and 2
useHistory let's you define a link piece by piece using an object (great for long and complex URL's)

```react
  const history = useHistory(); // history object
  history.push({
     pathname: window.location.pathname,
     search: `?sort=${flippedSortOrder}`
  })
```

You're still free to you template literals though

```react
  const history = useHistory(); // history object
  history.push(`${window.location.pathname}?sort=${flippedSortOrder}`);
```



### Compare all Methods for Extracting URL Data

#### Compare the 3

```react
export default function QuoteDetail() {
  const match= useRouteMatch();
  const location= useLocation()
  console.log(match) // img 1
  console.log(location) // img 2
  console.log(window.location) // img 3
  // current URL: http://localhost:3000/quotes/q1/comments?alt=0&bread=[%27a%27]
}
```

​									![image-20210915053953114](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210915053953114.png) ![image-20210915054014852](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210915054014852.png)

![image-20210915060056625](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210915060056625.png)

#### Use Cases

| want...                                                      | reccommend                                         |
| ------------------------------------------------------------ | -------------------------------------------------- |
| full URL                                                     | window.location.href                               |
| Host name                                                    | window.location.host                               |
| Query Parameters                                             | useLocation.search<br />window.location.search     |
| Endpoint / pathname                                          | useLocation.pathname<br />window.location.pathname |
| route parameters                                             | setRouteMatch.params                               |
| current URL containing route parameters as-coded<br />(mainly used for flexible route paths) | setRouteMatch.path                                 |

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210914143519954.png" alt="image-20210914143519954"  />



# Advanced Features

### Wrapper Components Around Routes

Sometimes, you want a certain component to render its content before/after another
This is what we learn how to do in this lecture

#### Challenge Description

Take the following App.js file, and wrap it inside of another component which renders content right before it

```react
import { Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
      <Switch>
        // several routes inside
      </Switch>
  );
}
```

PROCEDURE

1. Define a wrapper component and name it Layout.js
   Let it accept other components by using `props.children`, just like Context API setup
2. Wrap it around every JSX element in App.js

#### Solution

> [Jason2B3/router_practice (github.com)](https://github.com/Jason2B3/router_practice)			commit 278

Layout.js (what matters)

```react
export default function Layout(props) {
  return (
    <>
      <MainNavigation />	// some component which renders a navbar
      <main className={styles.main}>{props.children}</main> 
      // 							▲ lets it take in other components
    </>
  );
}
```

App.js

```react
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <Layout>	// wrapped the Layout tags around all JSX in this App.js file
      <Switch>
        // several routes inside
      </Switch>
    </Layout>
  );
}
```



### Protect vs Unused URL's: "Page not Found" Component

When you start using Links and NavLinks that take users to different parts of your website, you need to have measures in place that prevent them from trying to enter URL's you haven't coded anything for

#### Procedure

1. Go to where the Routes for your website are defined 
   I'm referring to the highest possible routes, not nested ones (likely in App.js)
2. Add a route at the very bottom of the list with a path of * that leads to a component containing the code that renders a "Page Not Found" component

```react
        <Switch>
  		  // other routes
          <Route path="*">
            <NotFound /> {/*create this component elsewhere*/}
          </Route>
        </Switch>
```

- The `<NotFound>` route must be at the very bottom so it's chosen as a last resort
- The list of routes should also be nested inside Switch tags, or else multiple Routes may be chosen at the same time

Demo:

> [Jason2B3/mock_food (github.com)](https://github.com/Jason2B3/mock_food)		
> Test out different paths after the regular URL

#### Pros and Cons vs Prev Lesson Methods

PROS:
You can define this component once then use it across your entire project very easily

CONS:
This method is very generalized, and will contain little information



### Further Protect vs Unused URL's: Guard Clauses

> [Jason2B3/router_practice (github.com)](https://github.com/Jason2B3/router_practice)
>
> START: commit 281
> SOLUTION 1: commit 281 S1
> SOLUTION 2: commit 281 S2

#### Page Not Found is not Always Enough

- At our starting point (commit 281), we have a Page Not Found component setup in the Route list defined within App.js
- You'd think that would protect vs all bad URL searches, but it doesn't

TESTS:

|                             | what renders            |
| --------------------------- | ----------------------- |
| localhost:3000/hello        | Page Not Found          |
| localhost:3000/quotes/q1    | quote with the ID of q1 |
| localhost:3000/quotes/q1000 | CRASHED PAGE (image 2)  |

IMAGES: 

![image-20210913201335598](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210913201335598.png) <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210913181352760.png" alt="image-20210913181352760" style="zoom:80%;" />

#### Starting Commit Explanation

In our starting commit, pressing the "View Fullscreen" button renders the `<QuoteDetail>` page component with a path of /quotes/:quoteID

App.js:  ![image-20210913180803680](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210913180803680.png)   <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210913180654590.png" alt="image-20210913180654590" style="zoom:67%;" />

A new QuoteDetail page renders which contains information based on that specific quote

![image-20210913181011024](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210913181011024.png) ![image-20210913181030501](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210913181030501.png)

THE ISSUE

The new URL we're taken to has it's `:quoteID` portion of `/quotes/:quoteID` generated by the ID of the quote we click on in this lesson's second photo

- If we manually type `localhost:3000/quotes/somethingWeKnowDoesntExist`, our webpage crashes
- The Page Not Found component is not rendered, probably because we've already entered one Route and are trying to go deeper inside

#### Solution 1: Guard Clause + Redirect

If a URL we didn't code for is searched for by a user, Redirect them to another page 

```react
import React from "react";
import { useParams } from "react-router";
import { Route, Switch, Redirect, Link } from "react-router-dom";

import Comments from "../comments/Comments";
import { useCustomHook } from "../../context";
import HighlightedQuote from "../quotes/HighlightedQuote";

export default function QuoteDetail() {
  const { DUMMY_QUOTES } = useCustomHook(); // list of dummy quotes fr/ context file
  const params = useParams(); // :quoteID from App.js
  //-----------------[what matters] -----------------------
  // how we normally get the data to render our content
  const quote = DUMMY_QUOTES.find((quoteObj) => {
    return quoteObj.id === params.quoteID;
  });
  // If we find no information based on the current URL's :quoteID
  if (!quote) {
    console.log("routing elsewhere");
    return <Redirect to="/quotes" />;
  }
  //-----------------[what matters] -----------------------
  return (
    <>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={`/quotes/${params.quoteID}/comments`}>
        <Comments />
      </Route>
    </>
  );
}
```

#### Solution 2: Guard Clause + Conditional JSX

![image-20210913181725504](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210913181725504.png)

In QuoteDetail.js, add some conditional JSX that renders a page that tells us no quote with that ID exists on our website

```react
import { Route, useParams } from "react-router";
import { useCustomHook } from "../../context";

export default function QuoteDetail() {
  const { DUMMY_QUOTES } = useCustomHook(); // list of dummy quotes fr/ context file
  const params = useParams(); // :quoteID from App.js
  //-----------------[what matters] -----------------------
  // how we normally get the data to render our content
  const quote = DUMMY_QUOTES.find((quoteObj) => {
    return quoteObj.id === params.quoteID; 
  });
  // If we find no information based on the current URL's :quoteID
  if (!quote) {
    return <p>No quote found!</p>;
  }
  //-----------------[what matters] -----------------------
  return (
    <>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={`/quotes/${params.quoteID}/comments`}>
        <Comments />
      </Route>
    </>
  );
}
```



### < Prompt > : Warn Users before Leaving

< Prompt > is just an alert() that is pre-programmed to fire whenever someone leaves the webpage they're in currently. To be used properly however, we need to configure a few details

WHY THIS FEATURE EXISTS:

- When filling out forms for example, we may want to prevent users from being immediately able to leave the page they're on
- Perhaps they misclicked a link or back button, which would load a new webpage and erase all their progress

#### How to use < Prompt > 

PROCEDURE:

1. Place < Prompt > at the top of the JSX return statement of the component you need protection on
2. Configure prompt using the when and message attributes

when Attribute

- Feed it a stateful variable set equal to a Boolean
  You can change this value based on circumstances inside your component
- If it equals true at the moment a user tries to leave, the alert will fire... and it won't if it equals false

message Attribute

- Feed this a function that returns a string 
  The string should be the message you want shown in the alert box
- This function also has a built in parameter called location, but we haven't needed it as of yet

#### Demo

> [Jason2B3/router_practice (github.com)](https://github.com/Jason2B3/router_practice)			commit 283

OBJECTIVE:

- To warn users before leaving this webpage, IF they've focused the form (implies they worked on it)
- Can leave by pressing the "Add Quote" button or using a NavLink
  Leaving via URL search cannot be guarded against with this feature

![image-20210914045412909](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210914045412909.png)

SOLUTION

QuoteForm.js

```react
const QuoteForm = (props) => {
  function submitFormHandler(event) { omitted 4 brevity }

  const [isEntered, setIsEntered] = useState(false);
    
  // set isEntered to true when you focus/start the form
  // set isEntered to false when you submit the form using a button
  const formFocusHandler = ()=> setIsEntered(true);
  const finishFormHandler= () => setIsEntered(false);
  const promptMessageFN = (location) => {
    console.log(location);
    return "Are you sure you wish to leave? All your entered data will be lost";
  };
 
  return (
    <Fragment>        
      <Prompt when={isEntered} message={promptMessageFN} /> 
      {/* Only fire off a prompt when isEntered is true */}
      <Card>
        <form onFocus={formFocusHandler} onSubmit={submitFormHandler}>
          <div className={classes.actions}>
            <button onClick={finishFormHandler} className="btn">Add Quote</button>
          </div>
        </form>
      </Card>
          
    </Fragment>
  );
};
```

EXPLANATION

- When we focus the form, we set isEntered to true
- When you submit the form with the button, we set isEntered to false
- When someone tries to leave when isEntered is true, it produces an alert saying...

![image-20210914050740695](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210914050740695.png)



# ======== ANIMATION ========



# React Transition Group

This 3rd party package helps us load in and remove elements from the DOM smoothly

LIMITATIONS OF CSS ANIMATION:
[React - The Complete Guide (incl Hooks, React Router, Redux) | Udemy](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8346456#overview)

- Using regular CSS animation is fine when we load elements in, but not when we remove them since that action happens instantaneously
- The only way to use vanilla CSS to "remove" elements is by keeping them active at all times but keeping them invisible (bad for accessibility and performance)

### CSS Transitions 

























