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
2. Place `static contextType = AuthContext` above the constructor
3. Access the context variables within your class via `this.context.varName`
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



### How Data Changes and Looks in Firebase

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



# Authentication in Firebase

> Firebase Auth API Documentation: https://firebase.google.com/docs/reference/rest/auth

DISCLAIMER:

- Plenty of libraries exist that make authentication much easier than how it's shown in this chapter. 
- However if your websites rely on Firebase, then you may end up needing the specific instructions provided here

### Why Implement Authentication?

Authentication is needed if certain content should be protected- aka. not accessible to everyone

Examples of what needs to be locked down:

- Placing content behind paywalls if you're making mobile games or subscription services
- If you're storing private personal data, a login with authentication should be required or else anyone will be able to find details about your users

#### Protecting API Endpoints

An API endpoint is just the URL of a server or service

- We need to protect certain URL's from being reached by anyone who hasn't logged into their own account for a specific platform
- What if someone were to enter the following into their search bar?
  `www.mobilebanking.com/user-jason/send-funds` 
- We should only send successful requests while already logged into the correct profile for that specific link

#### How Authentication Works

Once an account is created, you need to give your device permission to access locked content by providing your credentials via login

PART 1:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210921211620347.png" alt="image-20210921211620347" style="zoom: 67%;" />

- When logging in, data is sent to some server where it looks in its database to verify your password/email combination. 
- If that's valid, the server will grant you permission by sending back an affirmative "yes response" of sorts- but this is not enough on its own (see below image)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210921212540498.png" alt="image-20210921212540498" style="zoom:80%;" />

PART 2:

The two most commonly used methods that go along with part 1 are Server-side sessions and Authentication Tokens (pick one or the other)

#### Server-side Sessions

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210922003311969.png" alt="image-20210922003311969" style="zoom:80%;" />

Each step explained:

1. User submits a login form, that requires email/password to be correct to get a YES response back
   The correct combinations are stored on a private database 
2. The server creates a session in the database, then sends back a session ID along with the YES
   Since only the server can create this ID, fake YES responses won't work 

- This identifier will be saved in the browser's cookie jar
- The cookie jar is a place in the browser to save KVP's that will be sent to the server on each subsequent request. 

3. Make a request when the cookies have session ID KVP's
4. Server will responds with locked content that's protected and locked away from unauthorized users

Overview:
In the end, we have a stateful session between the browser and backend server

#### Authentication Tokens

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210922010316561.png" alt="image-20210922010316561" style="zoom:45%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210922010226874.png" alt="image-20210922010226874" style="zoom:45%;" />

1. User submits a login form, that requires email/password to be correct to get a YES response back
   The correct combinations are stored on a private database 
2. The server creates a JSON web token (JWT) using a private key known only by the server, then it's sent back to the browser where it's typically placed in localStorage
3. On future requests, the JWT will be added to the authorization header, prefixed with `Bearer`
4. The server must validate the signature
   There's no need to search for a unique ID stored this time, which is more efficient for distributed cloud systems

Extra Details

- A JWT is just a very long string with some data encoded into that string
- Only the server knows how to generate that string because of the aforementioned private key
  This is why fake YES responses don't work against auth tokens

#### Differences

Source: [(1) Session vs Token Authentication in 100 Seconds - YouTube](https://www.youtube.com/watch?v=UBUNrFtufWo)

|                       | authentication state is managed where? | problems                                                     |
| --------------------- | -------------------------------------- | ------------------------------------------------------------ |
| server-side           | on the server                          | performance issues for horizontally scaled cloud based systems |
| Authentication tokens | on the client-side                     | tokens can be hijacked from the user, are difficult to invalidate, and cannot be used to authenticate the user in the background on a server (very rare though, and this method's still viable) |

Horizontally scaled cloud based systems:

- Refers to situations where you may have your SPA served by server A, while the backend is with server B (very common these days)
- We generally prefer that the server remain "stateless"- so holding these identifiers there is typically not what we want



### Authentication with Firebase

We're going to use Firebase's built in Auth REST API to provide authentication since we don't know how to use backend code at the moment

DOCUMENTATION: I suggest taking a look at the list of topic links on the right side 
https://firebase.google.com/docs/reference/rest/auth

#### Useful Processes 

There are plenty more authentication-related tasks you can pull of with Firebase
I've highlighted those that I'll suspect we'll be needing (won't cover them all in this chapter)

> ![image-20210922021554102](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210922021554102.png) ![image-20210922021637711](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210922021637711.png) ![image-20210922021720460](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210922021720460.png)

Click the anchors in this side menu once you visit the documentation page for Firebase's auth REST API

#### How to Read the Documentation

EXAMPLE: Sign up with email/password

> Endpoint: 
> The URL you'll make an HTTP request to
>
> Request Body Payload chart: 
> Tells what configuration object you'll need to provide when forming your fetch function
>
> ![image-20210922030125956](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210922030125956.png)
>
> Response Payload:
> What fetching the endpoint correctly should return
>
> Sample Request:
> An example you should emulate in your own project
>
> ![image-20210922030509469](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210922030509469.png)



### Create new User: Sign up with email/password

FOLLOW ALONG WITH THIS: 
https://firebase.google.com/docs/reference/rest/auth#section-create-email-password

#### Enable Authentication on Firebase

1. Open up an existing Firebase project or create a new one
   Hit the authentication tab on the left (it's a core feature like Hosting or the Realtime Database)

![image-20210922032928126](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210922032928126.png)

2. Hit "Get Started" then choose your sign-in provider method (email/password for our first go)

![image-20210922033032165](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210922033032165.png)

#### Create a POST Request for a new User

DISCLAIMER:
The following code only shows you the bare basics of how creating new users in Firebase works. 

- We haven't coded anything that renders success or error messages
- Plus we're allowed to use clearly fake emails since we have no validation measures

SHOULD UNDERSTAND...

- We must parse the return data whether the request ends up good or bad, so we handle errors a bit differently here
- We don't have to define our async functions in separate files, but it helps keep our components lean

FIREBASE'S FLIMSY BUILT-IN VERIFICATION CHECKS

- Firebase has some defaults that you must abide by when creating an account with email/password
- These include requiring a real-ish email, and needing a password that's over 6 characters
- You should design your own or borrow some widely-used verification functions
  These checks require more scrutiny to be effective (A valid password to them is `fffffff`)

ACTUAL CODE

> [Jason2B3/auth-learn (github.com)](https://github.com/Jason2B3/auth-learn)			commit 301

requestFunctions.js		

```react
// Got this key by visiting the project in Firebase, then presssing the Settings Gear
const firebaseProjectKey = "AIzaSyAlOkrrmLSXFZCuPJs6HdxQFtF4D0dLX3E";

// Async function that creates a new account to log into our Firebase site
export const createNewUser = async function (emailInput, passwordInput) {
  const createAccountData = {
    // "Request Body Payload" described in Firebase docs for the Sign Up Tutorial
    email: emailInput,
    password: passwordInput,
    returnSecureToken: true,
  };
  // Make the POST request and parse the return data regardless of whether the operation succeeds or not
  try {
    const result = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseProjectKey}`,
      {
        method: "POST",
        body: JSON.stringify(createAccountData),
        headers: { "Content-Type": "application/json" },
      }
    );
    // If operation fails, explain why using the parsed object that gets returned
    if (!result.ok) {
      const parsedResult = await result.json();
      console.log("Failed attempt. Here's why:", parsedResult);
      throw new Error(parsedResult.error.message); // enter the obj we just logged
    }
    // If operation succeeds, simply log the parsed data for now
    if (result.ok) {
      const parsedResult = await result.json();
      console.log("successful attempt:", parsedResult);
      // express that this succeeeded in some way (on a real project)
    }
  } catch (errorObj) {
    // render an error modal (on a real project)
  }
};
```

AuthForm.js	(inside the component function)

```react
  // isLogin= true (LOGIN MODE)  isLogin=false (SIGN UP MODE)
  const [isLogin, setIsLogin] = useState(false);

  const submitHandler = function (event) {
    event.preventDefault();
    // Get entered data inside input fields via refs or useState
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
        // if we're signing into an existing account
    }
    if (!isLogin) {
      // if we're creating a new account
      createNewUser(enteredEmail,enteredPassword) // imported here offscreen
    }
  };
```



#### Fail Tests

We must handle errors a bit differently by parsing the returned object regardless of the request outcome

- We parse what the fetch() line returns back to us before we throw a new error
- This is necessary since Firebase returns useful information explaining why requests fail

> Give a 1 letter password and a real email
>
> ![image-20210922205757265](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210922205757265.png)
>
> Provide a bogus email with decent password
>
> ![image-20210922205911746](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210922205911746.png)
>
> Try to create a profile using an email that's already signed up for your project
>
> ![image-20210922212057474](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210922212057474.png)
>
> 

#### Success Tests

Successful Responses return objects that coincide with what Firebase documentation tells you to expect

![image-20210922211051628](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210922211051628.png)

> Provide a real email and good password
>
> ![image-20210922210335847](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210922210335847.png)
>
> Take a look at the idToken KVP - that's an authentication token from Firebase 
> (discussed in next lesson)



### Sign in with email/password

READ ALONG: 
https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password

> [Jason2B3/auth-learn (github.com)](https://github.com/Jason2B3/auth-learn)			commit 303

#### Demo

BEFORE WE BEGIN:

- The http request functions for the following 2 tasks are near identical
  a) signing into an existing account
  b) creating a new account 
- The only difference between these 2 is the Firebase URL you use
- To keep our code DRY, we're using the same function for signups and logins 
  (`signup_login` function from requestFunctions.js)

requestFunctions.js

```react
// Define what URL's we may use for our request
const firebaseProjectKey = "AIzaSyAlOkrrmLSXFZCuPJs6HdxQFtF4D0dLX3E";
const signupLink = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseProjectKey}`;
const loginLink = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseProjectKey}`;

//% Async function that creates a new account OR signs us in
export const signup_login = async function (emailInput, passwordInput, requestType
) {
  // Decide what URL to use based on argument 3
  let link;
  if (requestType === "signup") link = signupLink;
  else if (requestType === "login") link = loginLink;
  else alert("bad parameter provided. choose 'signup' or 'login' for arg 3");

  // "Request Body Payload" described in Firebase docs 
  const createAccountData = {
    email: emailInput,
    password: passwordInput,
    returnSecureToken: true,
  };
  // Make the POST request and parse the return data regardless of whether the operation succeeds or not
  try {
    const result = await fetch(link, {
      method: "POST",
      body: JSON.stringify(createAccountData),
      headers: { "Content-Type": "application/json" },
    });
    // If operation fails, explain why using the parsed object that gets returned
    if (!result.ok) {
      const parsedResult = await result.json();
      console.log(`Failed ${requestType} attempt. Here's why:`, parsedResult);
      throw new Error(parsedResult.error.message); // enter the obj we just logged
    }
    // If operation succeeds, simply log the parsed data for now
    if (result.ok) {
      const parsedResult = await result.json();
      console.log(`successful ${requestType} attempt:`, parsedResult);
      // express that this succeeeded in some way (on a real project)
    }
  } catch (errorObj) {
    // render an error modal (on a real project)
  }
};
```

AuthForm.js

```react
  const [isLogin, setIsLogin] = useState(true); // true=login  false=signup

  const submitHandler = function (event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    // If an account already exists, sign in
    if (isLogin) signup_login(enteredEmail, enteredPassword, "login");
    
    // If we're signing up, create a new account
    if (!isLogin) signup_login(enteredEmail, enteredPassword, "signup");
    
  }; // Runs regardless of whether isLogin is T/F
```

![image-20210923051436543](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210923051436543.png)

#### Authentication Tokens from Firebase

Authentication tokens are given to us from Firebase in multiple situations

![image-20210923033553882](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210923033553882.png)

Some Processes that Generate an Auth Token:

1. After a successful signup attempt, through the response payload
   (That is just the object returned to us once a successful request is made)
2. After a successful login attempt, through the response payload again

WHAT WE'LL USE IT FOR:

- Later in this chapter, we'll attach this token to future requests
  It will allow us to access protected resources. 
- That being said, at this point in the project we have no protected resources defined- but that can be changed fairly easily



### Manage Authentication State with Context API

The user login status is an app-wide state since it matters to so many components 

- This lesson continues off the previous one, and focuses on sending up the Auth Token to a project-wide context file so it can be accessed from anywhere afterwards
- You could use Redux, but logins and logouts are an infrequent enough event that justifies the use of the simpler Context API

#### Starting Point

> [Jason2B3/auth-learn (github.com)](https://github.com/Jason2B3/auth-learn)			START: commit 303		FINISH: commit 304

Project at start:	 ![image-20210923195717955](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210923195717955.png)

#### Objective

When you sign up or log into an existing account successfully...

1. Create a new context file

- Give it stateful variables that describe your login status
- Save any authentication tokens you get back from Firebase after a successful request to sign up or sign in 

2. Use your context file to manage these "authentication states" programmatically across your project
3. When logged in, show the Logout & Profile buttons on the Navbar
4. When logged off, show te Login button on the navbar

At the starting point of this lesson, all 3 nav buttons are visible at the same time (see photo above)



#### auth-context.js

- This context file provides context to all React components in our project, telling them whether we are logged in or not
- We will also be saving authentication tokens here, and updating their values when they expire or are refreshed (these occurrences are not coded in yet as of writing this lesson)

```react
import { useState, createContext, useContext } from "react"; // import useContext
const AAA = createContext();
export const useCustomContext = () => useContext(AAA); // export custom hook

export default function AuthContextProvider(props) {
  //~ States and functions Managing Login Status
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);
  // Functions related to updating the idToken's value
  const defineAuthToken = (str) => setToken(str);
  const expireAuthToken = () => setToken(null);
  const distribution = {
    isLoggedIn,
    login, // login by setting isLoggedIn to true
    logout, // logout by setting isLoggedIn to false
    token, // auth token value
    defineAuthToken, // set token equal to idToken from Firebase
    expireAuthToken, // set token equal to nothing
  };
  return <AAA.Provider value={distribution}>{props.children}</AAA.Provider>;
}
```

USAGE:
We'll be setting these state values and using our methods inside different React components

- We unfortunately can't use context API in our regular JS files (components only)
- Because of this, we won't use our custom hook in requestFunctions.js
  We'll use it in AuthForm.js, the component we invoke our imported functions from requestFunction.js

#### requestFunctions.js

REMEMBER:

- The only difference between signing in and signing up is the Firebase URL we make a request to
- We cannot update our context file here, as convenient as that would be
  Must save that for where we invoke our helper function (AuthForm.js in this case)

```react
// Got this key by visiting the project in Firebase, then presssing the Settings Gear
const firebaseProjectKey = "AIzaSyAlOkrrmLSXFZCuPJs6HdxQFtF4D0dLX3E";
const signupLink = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseProjectKey}`;
const loginLink = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseProjectKey}`;

//% Async function that creates a new account OR signs us into our Firebase site
export const signup_login_Firebase = async function (
  emailInput,
  passwordInput,
  requestType
) {
  // Decide what URL to use based on argument 3
  let link;
  if (requestType === "signup") link = signupLink;
  else if (requestType === "login") link = loginLink;
  else alert("bad parameter provided. choose 'signup' or 'login' for arg 3");

  // "Request Body Payload" described in Firebase docs
  const createAccountData = {
    email: emailInput, // set equal to arg 1
    password: passwordInput, // set equal to arg 2
    returnSecureToken: true,
  };

  // Make the POST request and parse the return data regardless of success/failure
  try {
    const result = await fetch(link, {
      method: "POST",
      body: JSON.stringify(createAccountData),
      headers: { "Content-Type": "application/json" },
    });
    // If operation fails, explain why using the parsed object that gets returned
    if (!result.ok) {
      const parsedResult = await result.json();
      console.log(`Failed ${requestType} attempt. Here's why:`, parsedResult);
      throw new Error(parsedResult.error.message); // enter the obj we just logged
    }
    // On success, return the response payload to the component you use this in
    if (result.ok) {
      return await result.json(); // CONTAINS THE AUTH TOKEN WITH OTHER DATA
    }
  } catch (errorObj) {
    // render an error modal (on a real project)
  }
};
```



#### AuthForm.js

- Invokes methods saved in our context file to change our login status
- Updates the authentication token value saved there as well

Only showing which part of the code matters

```react
  const { login, logout, token, defineAuthToken } = useCustomContext();
  // Sign in / Sign Up when you press the submit handler 
  const submitHandler = async function (event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //# If an account already exists, login using the method from our context file
    if (isLoggingIn) {
      // Login to Firebase site + change a state value in our authContext file
      const responsePayload = await signup_login_Firebase(
        enteredEmail,
        enteredPassword,
        "login"
      );
      // Update the auth-context.js state values
      login(); // changes isLoggedIn state value in context file
      defineAuthToken(responsePayload.idToken); // DEFINE AUTH TOKEN
      console.log("logged in! Here's my auth token:", responsePayload.idToken);
    }
    //@ If we're signing up, create a new account
    if (!isLoggingIn) {
      // Sign up using our dedicated function for doing so on Firebase:
      const responsePayload = await signup_login_Firebase(
        enteredEmail,
        enteredPassword,
        "signup"
      );
      // Update the auth-context.js state values
      login(); // changes isLoggedIn state value in context file
      defineAuthToken(responsePayload.idToken); // DEFINE AUTH TOKEN
      console.log("signed up! Here's my auth token:", responsePayload.idToken);
    }
  }; // Runs regardless of whether isLoggingIn is T/F
```

#### MainNavigation.js

- We simply import values from our Context file here, then use that to render the buttons on the Navbar conditionally
- The importing is offscreen since this lesson's long enough as is

```react
		 {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )} // only show Login button when not already logged in

          {isLoggedIn && (
            <> 
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button>Logout</button>
              </li>
            </>
          )} // only show Logout button when we are logged in
```

#### Outcome

When we successfully log in:

![image-20210923200925282](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210923200925282.png)



### Request a Protected Resource: Password Change

Making a request to change your password is technically a protected process. 

- You can't have anyone that knows your email be allowed to attempt this. 
- Therefore, an authentication token must be required in order to do this

#### Firebase Instructions

https://firebase.google.com/docs/reference/rest/auth#section-change-password

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210923234415639.png" alt="image-20210923234415639" style="zoom:80%;" />

Looks like we'll be making another HTTP request helper function inside requestFunctions.js

- This is a file in our project that's dedicated to holding exportable helper functions which make asynchronous http requests to Firebase
- We could define and use them in the React components, but that would clutter things up fast

#### Test it out when Finished

1. Create a new account using an email and password 
   You can view all accounts in Firebase's Authentication tab for that project
2. Press the profile page button to reach the following page, then change the password
3. Try logging in again with an old combination

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210923235040102.png" alt="image-20210923235040102" style="zoom:80%;" />

#### Code

> [Jason2B3/auth-learn (github.com)](https://github.com/Jason2B3/auth-learn)		commit 305

requestFunctions.js

```react
//% Async function that changes the account password
export const changePassword = async function (idToken, password) {
  const link = changePasswordLink;
  const requestBodyPayload = {
    // use values given to this helper function via parameters
    idToken,
    password,
    returnSecureToken: false,
  };
  // Make the POST request
  try {
    const result = await fetch(link, {
      method: "POST",
      body: JSON.stringify(requestBodyPayload),
      headers: { "Content-Type": "application/json" },
    });
    // If operation fails
    if (!result.ok) throw new Error("Password change failed"); 
    // If operation succeeds
    if (result.ok) {
      console.log(
        "Password change complete!"
      );
      return await result.json();
    }
  } catch (errorObj) {
    // render an error modal (on a real project)
  }
};
```

ProfileForm.js

```react
const ProfileForm = () => {
  const inputRef = useRef(); // references an offscreen input field's value
  const { token } = useCustomContext(); // grab token from auth-context
  const changePasswordHandler = (e) => {
    e.preventDefault();
    // Change the password using the imported helper ƒ() from requestFunctions.js
    changePassword(token, inputRef.current.value);
  };
```

The authentication token is saved in our context file after we successfully sign up or log in

#### Differences in Other Platforms

The way we use authentication tokens to access private things will change depending on what you use as your backend

- Firebase specifically instructs us to make an http request which contains the idToken in the body object which is given as a parameter for fetch(). 
- In other platforms, we may include the token inside the headers or something

### Redirects and Adding Logout

Neither of these actions involve any new concepts or Firebase http requests
They involve using features we've seen before this chapter

> [Jason2B3/auth-learn (github.com)](https://github.com/Jason2B3/auth-learn)		commit 308

#### Redirecting's Relation to Logins/Logouts

Logging in and out is one of the few times where we actually want to redirect using history.replace

- Once a user logs in, we don't want them returning to the login page because there'd be no point
- If a user logs out, we obviously don't want them to backspace into a page they were just visiting while logged in

AuthForm.js: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210924052043420.png" alt="image-20210924052043420" style="zoom:80%;" />

#### Logouts

There actually aren't instructions in the Firebase documents for logging out, because it's not the server's job to know if we're logged in or not

- Remember that authentication ID's are managed in the front end
- So far in this project, we've managed our login status and auth token values in a context API file
  So when logging out, simply update the values there to reflect that



### Protect Frontend Pages with Navigation Guards

#### Current Point in Project

Regardless of our login status, we can reach this page if we search for `localhost:3000/profile`
This should be reserved for people who are currently logged in

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210924054531072.png" alt="image-20210924054531072" style="zoom:80%;" />

#### What are Navigation Guards?

When we log off an account on Udemy for example, we can't just continue watching the videos.

- We get booted off whatever page we were on, then are forced to log back in if we wish to access that content. 
- The URL's we can no longer visit are protected with navigation guards

IMPLEMENTING THEM:
Make it so routes are only rendered if a certain stateful value equals something
Imagine conditional JSX, but the condition is applied on Route components specifically

#### Demonstration: App.js Routes Examined

> [Jason2B3/auth-learn (github.com)](https://github.com/Jason2B3/auth-learn)		commit 309

![image-20210924174933002](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210924174933002.png)

——————————————————————————————————————————————————————

```react
        <Route path="/" exact>
          <HomePage />
        </Route>
```

- This route is active regardless of whether we're logged in or not
- If we enter http://localhost:3000/ , we render `<HomePage/>`

——————————————————————————————————————————————————————

```REACT
        {!isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
```

- This route only renders if we are not logged in
  If we are logged in, then we default to the final `path="*"` page if we search for this URL
- Be careful while testing though, because we lose login status when we search for a new URL unless we implement steps from the "Persist User Authentication Status" lesson

——————————————————————————————————————————————————————

```react
        <Route path="/profile">
          {isLoggedIn && <UserProfile />}
          {!isLoggedIn && <Redirect to="/auth" />}
        </Route>
```

- This route is active whether we are logged in or not
  However, it renders different things depending on our logged in status
- Logged in → renders `<UserProfile />`
  Not logged in → renders `<AuthPage />` with the help of redirecting

——————————————————————————————————————————————————————

```react
        <Route path="*">
          <Redirect to="/" />
        </Route>
```

- Active regardless of login status
- Redirects you to the route which renders `<HomePage />` if the searched URL does not match any of the other routes defined in the `<Switch>` scope in our JSX

#### Tests

- Should wait until after we learn how to "Persist User Authentication Status"	(commit 309)
- We lose our logged in state every time we reload the page, which may mess up some tests after we search for new URL's

|                               | should render...  | because                                     |
| ----------------------------- | ----------------- | ------------------------------------------- |
| While not logged in ...       |                   |                                             |
| http://localhost:3000/FFFFF   | `<HomePage />`    | of a redirect                               |
| http://localhost:3000/profile | `<AuthPage />`    | `<UserProfile />` is protected              |
| While logged in ...           |                   |                                             |
| http://localhost:3000         | `<HomePage />`    | its an exact match for the "/" path         |
| http://localhost:3000/profile | `<UserProfile />` | we have access when logged in               |
| http://localhost:3000/auth    | `<HomePage />`    | we can't access `<AuthPage>` when logged in |
|                               |                   |                                             |



### Preserving Auth Status and Auto-Logout

> [Jason2B3/auth-learn (github.com)](https://github.com/Jason2B3/auth-learn)		START: commit 308			END: commit 309

Our project has a major issue as of commit 308:

#### The Current Problem

PROBLEM:

- Whenever we reload the page by searching for a new URL, we lose our authentication status
  We can't have users get logged if they decide to visit a URL they have saved
- Resetting the site will reset our context file which hold all data related authentication, so it does make sense why this occurs


#### A Proposed Solution

OBJECTIVE 1: Maintain authorized state when we reload the page

- When the user signs in, save their idToken in localStorage as well as your dedicated context file for authentication
- When the page is reloaded, check storage to see if anything is saved before you force the user to log in again
- Keep in mind auth-context.js now saves data in useState variables AND the localStorage. 
  Keep the data in sync

OBJECTIVE 2: Automatically logout after X amount of time

- By default, Firebase idTokens are no longer valid after 3600 seconds or 1 hour
  We can choose to clear all our auth-context and localStorage data after an hour or earlier
- There are 2 situations where you'd need to logout after a timed delay
  1 → after you log in         2 → after you reload the page while already being logged in

OBJECTIVE 3: Only use a token if there is a remaining duration for that token

- Look in your localStorage and check if the idToken is still valid
- Delete it right away if it's found to be invalid
  An outdated token would result in bad http requests or at worst, site crashes

#### Code

> [Jason2B3/auth-learn (github.com)](https://github.com/Jason2B3/auth-learn)		commit 309A , specifically auth-context.js

- To accomplish each objective, we make several changes to the auth-context file
- No changes are made anywhere else, but this file is much longer now
  Please checkout the commit I specified above, since it is too long to place here





### Will Probably use in Future

#### Alternative Login Methods

Firebase supports several methods for logging in- like doing so via Facebook or Twitter
We are not restricted to email/password logins

​								![image-20210922032549166](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210922032549166.png) ![image-20210922032602961](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210922032602961.png) ![image-20210922032613772](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210922032613772.png)

#### Protected Realtime Database

With an idToken, you can access a Realtime database that is not open to everyone
You would have to adjust these rules to only allow people who have signed in to get in

![image-20210923230203414](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210923230203414.png)

#### Refresh Tokens

- By default, an idToken expires in an hour (part of the response payload when you sign up or sign in)
- You can refresh this with a refreshToken, but that's not part of the Udemy course
  We may do that however



#### Read these

Likely the most important: 
https://firebase.google.com/docs/auth/web/manage-users#send_a_password_reset_email

![image-20210923233220266](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210923233220266.png) ![image-20210923233231461](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210923233231461.png)



> https://firebase.google.com/docs/auth/admin/manage-users#list_all_users
>
> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210923232548559.png" alt="image-20210923232548559" style="zoom: 80%;" />
>
> Understand difference between idTokens and refreshTokens
> https://firebase.google.com/docs/auth/admin/manage-sessions
>
> ![image-20210923232835611](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210923232835611.png)

https://firebase.google.com/docs/auth/admin/manage-users#list_all_users





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
2. [Truncate String with Ellipsis | CSS-Tricks](https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/)
3. Fix the extends lesson in Advanced CSS
   Fix the advanced CSS section in general: give it images
4. Learn how to post React projects on Stackblitz

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

