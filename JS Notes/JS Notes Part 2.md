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

#### Is Geolocation Asynchronous? (Yes)

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

#### Promisify the API

- We've established geolocation is asynchronous- and we can see clearly that we have callback functions inside the asynchronous function. 

- This is an opportunity to convert callback-based operations into promise-based ones

```js
const getPosition = function (seconds) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position), // the position object is inbuilt
      (error) => reject(new Error(error))
    );
  });
};
// PROMISE-BASED Geolocation API Operations:
getPosition()
  .then(pos => console.log(pos))
  .catch(error => console.log(error));
```

If resolved, we want the ƒ() to return the info filled object fr/ the API
If rejected, we want to log the standard error message

- Our code looks pretty good, especially when you compare it to the insane amount of nesting present in our Mapty project. 
- The helper function may look a bit messy, but that only gets declared once

FINAL REFACTOR:

Funnily enough, we can shorten this code even further.
Most of what we did was going to be done by the Promise function or API by default 

- The API will automatically make the resolve object be the location info object.
  We didn't need to explicitly tell it to do that (though it does help w/ clarity)
- By default, the reject object will equal an object containing an error message pertaining to the situation

```js
const getPosition = function (seconds) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject); // automatic
  });
};

getPosition()
  .then(pos => console.log(pos))
  .catch(error => console.log(error));
```

CHALLENGE: Render data about the country our current coordinates belong to



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


