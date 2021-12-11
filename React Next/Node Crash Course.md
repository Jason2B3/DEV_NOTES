<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211005143055156.png" alt="image-20211005143055156" style="zoom:67%;" />

# Basics

### What Node Helps with

#### How Node allows JS on Backend

It's written in C++ which servers can understand, then the V8 engine compiles it down to machine code
Normally JS code isn't understood on the server side (was designed to be a front end lang only)

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211005142519797.png" alt="image-20211005142519797" style="zoom: 67%;" />
>
> ![image-20211005142719211](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211005142719211.png)

#### New Abilities

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211005142243515.png" alt="image-20211005142243515" style="zoom:80%;" />

Be aware that we lose some of JavaScript's normal capabilities when we use Node.js
Ex. Cannot interact with the DOM in Node.js

#### Arguments for Node > Other Backend Langs

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211005142933422.png" alt="image-20211005142933422" style="zoom:67%;" />
>
> Next.js blends the back and front ends by letting your write code for both inside the same file



### Running JS in Node

#### Basic Console Logging

Define some normal JS variables, functions, classes... etc

- You'll be able to run them and see your console logs in the terminal instead of a browser window
- To activate that, enter the following in the terminal: node 1
- The terminal opens in the cwd, then we write `node fileName` without the .js extension

```js
let greeting = (inp) => console.log("Good day there,", inp);
greeting("Mario");
greeting("Peach");
```

![image-20211005181842929](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211005181842929.png)

#### Global Object Differences

In regular JS, the global object is `window`
In Node, the global object is `global`

Node's global object:		  ![image-20211005181802766](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211005181802766.png)

When a global object is present, certain things are implied

- As you can see, setTimeout is inside Node's global object
- This means we can write `setTimeout()` instead of writing `global.setTimeout()`

### Absolute File Locations

Current Folder: ![image-20211005182914481](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211005182914481.png)

#### Absolute Path of Current Folder

```js
console.log(__dirname);
```

![image-20211005182854841](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211005182854841.png)

#### Absolute Path of Current File

This is just the absolute path of the current folder with a file name tacked on at the very end
Specifically the file we're currently typing in

```js
console.log(__filename);
```

![image-20211005182952182](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211005182952182.png)



### Default Node Modules & Require

#### require

The require expression will run the code of whatever file you give it as an argument
To reference another file, you must use a relative path

EXAMPLE: 	![image-20211005234345924](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211005234345924.png)

people.js

```js
const people = ["yoshi", "ryu", "snake", "peach"];
console.log(people);
```

modules.js (running this file in Node)

```js
const x= require('./people') 	// equals an empty object
console.log(x) 		// equals {}
console.log(x[0]) 	// equals undefined
```

The modules.js file logs the array because people.js does

Accessing values in modules.js

- You cannot access individual values like this - `x[0]= undefined` because x equals `{}`,
- To do this, you need to deliberately export from another file

#### module.exports

If you want to bring in variables from node file B into node file A, you'll need module.exports

EXPORT ONE VARIABLE:

people.js

```js
const people = ["suburban commando", "dyna guy"];
module.exports = people;	//
```

modules.js	

```js
const x = require("./people");
console.log(x); // equals ["suburban commando", "dyna guy"];
```

EXPORT MULTIPLE VARIABLES:
The only difference is that you set module.exports equal to an object, then destructure it afterwards

people.js

```js
const heroes = ["suburban commando", "dyna guy"];
const villains = ["Red mist", "who cares?"];

// With no renaming, you can use the ES6 object shortcut ▼
module.exports = { heroes, villains }; 
// ------------------▲  PICK 1 OF 2  ▼------------------  
// If you want to rename, use typical KVP declarations ▼
module.exports = { supers: heroes, evildoers: villains }; 
```

modules.js

```js
const { heroes, villains } = require("./people");
console.log(heroes);
console.log(villains);
```

![image-20211006000235833](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211006000235833.png)

#### Operating System Module

modules.js

```js
const os = require("os");	// there is much more inside that i haven't shown
console.log(os.platform()); // shows Windows, linux...etc
console.log(os.homedir()); // home directory on computer
```

![image-20211006000630030](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211006000630030.png)

### Node File System: create, delete, read

#### read files

arg 1: 
A relative path to the file you want to read

arg 2: 

- A callback function that defines what you want to do with the data inside that file assuming it's found without any errors
- This nested handler has 2 aptly named parameters of its own built inside (err, data)

[Node.js Crash Course Tutorial #2 - Node.js Basics - YouTube](https://www.youtube.com/watch?v=OIBIXYLJjsI&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=2)

#### create files

#### delete files





































































