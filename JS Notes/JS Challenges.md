# Code Camp

### How to Break Down Complex Problems

#### Functions

1) If you have a complicated action that needs to be performed, create a function

- Having code inside a function doesn't require "multidimensional" thinking
  Just know that you'll want something to return from that function
- Cover all your bases with multiple return statements
  If X happens, return this. If Y happens, return that.

2) Daisy chain your functions and make some dependent on others' outputs

- Looking Up Profiles lesson has a great example with F2 and F3. 
- Allows you to make your complex operations multi-step and sequential

#### Conditionals

- if statements should be considered as branching pathways
  Like a choose your own adventure book
- Else if's are paths that run alongside ifs
- Else blocks are the end of the road

### Counting Cards in Blackjack (switch)

![image-20210214173734231](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210214173734231.png)

```js
var count = 0;	// start count at 0

function cc(card) {
  switch(card) {
  case 2: case 3: case 4: case 5: case 6:
    count++;  // add 1 to the count when one of these cards land
    break;
  case 10: case 'J': case 'Q': case 'K': case 'A':
    count--;  // subtract 1 fr/ count when one of these land
    break;
  case 7: case 8: case 9:
    count= count+0; // leave count when one of these cards come up
    break;
  default:
    return "invalid";
  }

  if(count>0) {
    return count+ " Bet";
  } else {
    return count+" Hold";
  }
}
cc(2);		// count is now at +1
cc('K'); 	// count is now at 0
console.log(cc('Q')); 	// count is now at -1
```

![image-20210214174113974](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210214174113974.png)

#### Explanation of the if/else Return

- The function output will be: `count# bet` or `count# hold`
- You won't see anything on the console unless you console.log() the function call
  Each function call, whether you log it or not, affects the count
- The only reason we log it is to see what the count is after the latest card is flipped







### Update Record Collection

![image-20210217131551280](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210217131551280.png)

![image-20210217131608138](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210217131608138.png)



#### Starting Code

```js
var collection = {
  2548: {               // OBJ 1
    albumTitle: 'Slippery When Wet',  
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {             // OBJ 2
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {           // OBJ 3
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {           // OBJ 4
    albumTitle: 'ABBA Gold'
  }
};
// Only change code below this line
function updateRecords(object, id, prop, value) {
  return object;
}

updateRecords(collection, 5439, 'artist', 'ABBA');
```

object: record collection object above
id: the object key
prop: nested object key
value: nested object value

#### Logic Diagram:

![image-20210217131338874](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210217131338874.png)

#### Solution

Step 1: Create a function that verifies if the "tracks" property is present 
Requires an ID to target a key-value pair (synergizes with the main function)

```js
//#F1: 
function checkForTracks(object,id){
  let a= object[id]['tracks'];  // equals nested key or undefined
  // requires id, which is fed by the almight function
  if(a) return true   // if there is a nested tracks key, it returns true
  else return false   // if there is no nested tracks key, it returns false
}
// console.log(checkForTracks(collection,1245)); // we hardcode the ID for our test
```

Step 2: Make the `updateRecords` function, and have it follow our logic diagram

```js
function updateRecords(object, id, prop, value) {
  let a= checkForTracks(object,id); //returns T/F

  if(value==false){ // if the value is an empty string (falsy)
    delete object[id][prop]; 
    //#4 delete the nested object's key-value pair
    return object;
  }

  else{	// ||||||||||| if the value is not an empty string
    //@————————————————————————————————————
    if(prop=="tracks"){ //if prop is "tracks", this road gets taken
      if(a==true){ 
        let arr= object[id]["tracks"] //target the tracks array that exists already
        arr.push(value) //#3 add your nested value to the existing array
        return object;
      }
      else {
        object[id]["tracks"]= [];  //create a new array for tracks
        let newArr= object[id]["tracks"];
        newArr.push(value); //#2 add in a value to our new array
        return object;
      }   
    } //@————————————————————————————————————
      
    else{ // if prop is not "tracks, this road gets taken"
      object[id][prop]= value; //#1 set prop equal to value
      return object;
    }
      
  } // ||||||||||||||
  return object; //returns obj after its updated
}
```

Step 3: Run your tests to verify if you did it right

```js
// console.log(updateRecords(collection, 5439, "artist", "ABBA"));
// console.log(updateRecords(collection, 5439, "tracks", "Take a Chance on Me"));
// console.log(updateRecords(collection, 2548, "artist", ""));
// console.log(updateRecords(collection, 1245, "tracks", "Addicted to Love"));
// console.log(updateRecords(collection, 2468, "tracks", "Free"));
// console.log(updateRecords(collection, 2548, "tracks", ""));
// console.log(updateRecords(collection, 1245, "albumTitle", "Riptide"));
```



### Getters/Setters for Conversion

![image-20210223184225977](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210223184225977.png)

```js
class Thermostat{
  constructor(fahrenheit){
    // fahrenheit:input     (key value pair)
    this.fahrenheit= fahrenheit 
  }
  get celsius() { 
    // GET converts fahren to celcius automatically
    // celsius:converted constructor input  (key value pair)
    return (5 / 9) * (this.fahrenheit - 32);
  } 
  
  set celsiusDirect(cel) {
    // Explanation after snippet
    this.fahrenheit = (cel * 9.0) / 5 + 32;
  } 
}
//@ GET: Obtain temperature in Celcius through conversion
//@ SET: set the temperature in Celcius directly without Fahren involved

const thermos = new Thermostat(76)  
thermos.celsiusDirect=60; //setting the celcius directly...sort of
console.log(thermos);
```

EXPLANATION:

`const thermos = new Thermostat(76)  ` creates a new object with a fahrenheit property
The get function converts this to celsius, then adds that as an object property as well

State of object before last 2 lines: ![image-20210223183706653](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210223183706653.png)

`thermos.celsiusDirect=60` gives the illusion of being able to set the celsius value DIRECTLY, and having the fahrenheit be converted automatically as well.

![image-20210223184350133](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210223184350133.png)

This is not actually what happens. In reality...
a) We feed the SET function our celsius value. 
It converts this to fahrenheit then redefines our fahrenheit object property

b) The GET function then converts our new fahrenheit property back for a new celsius property

This all happens under the hood in under a second

### Regex: Restrict Possible Usernames

Learned that we can use multiple `^$` symbols to mark the start and end of a word if we use the or `|` operator

RULES

1. String must only contain numbers and letters (case insensitive)
2. Usernames must be 2 characters long at minimum
   If the name is 2 characters long, it must be comprised of 2 letters (no numbers)
3. The only numbers allowed in your username must be at the end
   0 or more numbers can be present

(Step 2 makes it impossible to match all usernames without an OR)

MATCH LIST: ![image-20210318200421023](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318200421023.png) ![image-20210318200430548](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318200430548.png)

DO NOT MATCH LIST: ![image-20210318200503327](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318200503327.png) ![image-20210318200518421](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210318200518421.png)

```
/^[a-z]+[a-z]+[0-9]*$|^[a-z]{2}$|^[a-z][\d]{2,}$/i
OR 1                 |OR 2      |OR 3
```

OR 2: Match with user names consisting of 2 letters (covers Jo)
OR 3: Match with usernames consisting of 1 letter and 2+ numbers (covers Z97)
OR 1: Matches everything else

- This looks complicated, but isn't as bad when you take things 1 step at a time
- Try to match every criterion with OR 1, you'll come close but will exclude a few strings that should be matched. 
- For them, add an OR operator followed by another regex expression- DN forget ^ and $
- Make sure that the strings that should be excluded are, and make tweaks to your regex until all the tests that should fail, do. And the tests that should pass, pass

I used regexr's test feature on 2 separate tabs, one for strings that should pass, and one for the one's that shouldn't

https://regexr.com/5ottm		https://regexr.com/5ottp

### Regex: Use Lookahead to Verify Passwords

REQUIREMENTS:

1. Password must have 2 digits in a row, it being the same number does not matter

2. Must contain 1 letter minimum, and 1 digit minimum

3. Must be 5 characters or longer

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210319003620181.png" alt="image-20210319003620181" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210319003637018.png" alt="image-20210319003637018" style="zoom:80%;" />

#### Solution

```js
let regex10 = /(?=\w{5,})(?=\D*\d\d)(?=[^a-z]*[a-z])/i;
let falsePasswords = ["astronaut", "banan1", "12345", "1a2bcde"]; 
let corrPasswords = ["bana12", "abc123", "8pass99", "astr1on11aut"];

for (let el of falsePasswords) console.log(regex10.test(el));
for (let el of corrPasswords) console.log(regex10.test(el));
```

![image-20210319003719830](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210319003719830.png)

`(?=\w{5,})` : makes it so string must be 5 letters or longer

`(?=\D*\d\d)`: 
Makes it so the string must have 2 consecutive numbers somewhere
Requirement explanation- a non number(0-or-more) must be followed by 2 numbers

`(?=[^a-z]*[a-z])`
Makes it so the string must have 1 letter somewhere
Requirement explanation- a non letter(0-or-more) must be followed by a letter

### Capitalize Each Word, Decapitalize Rest

![image-20210323123800807](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210323123800807.png)

SOLN

```js
function titleCase(str) {
  let splits = str.split(' '); // create an array of separate words
  let capitSplit = [];
  for (let word of splits) {
    let capit = word[0].toUpperCase() + word.substring(1).toLowerCase();
      // capitalize first letter, add it to the rest of the word
    capitSplit.push(capit); // push each fixed word into your empty array
  }
  
  console.log(capitSplit.join(" ")); // helper
  return capitSplit.join(" "); // join the array of fixed strings together
}

titleCase("I'm a little tEa pOt"); //OUTPUT: I'm A Little Tea Pot
```



# Udemy

### Challenges: Objects and Arrays (uDem)

#### Challenge 1

WANT: {Jonas} has {3} friends, and his best friend is called {Micheal}
	  No directly logging these values

```js
// GIVEN: ----------------------
const jonas= {
  firstName: 'Jonas',
  lastName: 'Schmedt',
  age: 30,
  job: 'teacher',
  friends: ['Micheal', 'Peter', 'Steven']
}
```

```JS
// SOLUTION 1

let aye=jonas['friends'];	//pull out the friends array into a new variable
let x=jonas.firstName;
let y=aye.length;			// extract anything you need from there
let z=aye[0];
console.log(`${x} has ${y} friends, and his best friend is called ${z}`);
```

![image-20210104172358605](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210104172358605.png)

This works! 
We used the "aye" variable to bring out the array to a new variable. 
This is acceptable, but not necessary. Here's what can be done more directly:

1. Funnel x, y, and z's values into the string without explicitly giving them variables
2. Target the elements inside the object array `jonas.friends[1]`
   Taking the array out into a new variable isn't wrong though
   Just creates an unnecessary variable and is longer than required
3. Get the length of the friends array

```js
// SOLUTION 2
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
```



#### Challenge 2:

WANT: "Jonas is a 46-year old teacher, and he has a/no drivers license"
	  No direct logging, and also change a/no depending on whether him having a license is true/false

```js
// ***************** GIVEN
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedt",
  job: "teacher",
  birthYear: 1991,
  hasDrivers: true,
  
  calcAge: function () {
    this.age= 2020-this.birthYear;
    return this.age;  
  }
}
// ************************
let brit;
if (jonas.hasDrivers===true) {brit= "a";}
else {brit="no";}

jonas.calcAge();    // Make the method run so we can use it
let x= jonas.firstName;
let y= jonas.age;
let z= jonas.job;


console.log(jonas.hasDrivers);
console.log(`${x} is a ${y}-year old ${z}, and he has ${brit} driver's license`);
```

### Property Checking Function for Objects

Create a function that checks objects for the presence of certain properties

- If the property is there, return its value

- If it's not there, return "not found"


```js
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

// we feed a function an object and a property
// if the object has that property, we return that property's value
// otherwise, we return "not found"
```

### Nested for Loops and Arrays

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



### Looking Up Profiles

[Learn Basic JavaScript: Profile Lookup | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup)

#### Problem Description

We have an array containing exclusively objects. We want a function that will let us funnel a name and a property inside of it. That should be enough to...

```js
function lookUpProfile(name, prop){
// return "No such contact" if NAME isn't inside the array
// return "No such property" if NAME is inside, but PROP isn't
// return PROP's value if NAME & PROP are both inside that array's element
}
```

UNDERSTAND, NAME IS A VALUE, NOT A PROPERTY: ![image-20210216183957107](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210216183957107.png)

```js
// Array with objects for each of its elements
var contacts = [
  {
      "firstName": "Akira",       
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"],
      "test": 999 // here only to test one of our functions
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];
```

#### My 3 Functions

We've built 3 individual functions that help us keep our code short inside of our `lookUpProfile` function

F1: 
Determines if the name/value is present anywhere inside the array
Returns T/F

```js
//#F1: DETERMINES IF THE VALUE IS PRESENT
function check(val,arr){

  for(let i=0; i<contacts.length;i++){
    let exists=Object.values(contacts[i]).includes(val)
    if(exists==true) {
      return true;
    }
  }
  return false
    // only activates if the for loop does not return true 
}
console.log(check("Vos",contacts)); // test this on our contacts array
```



F2: 
Determines which index# the name/value belongs to in the contacts array
Should only use when we know the value is present in contacts array
Otherwise, it'll cause an error in our `lookUpProfiles` function

```js
//#F2: DETERMINES WHERE THE VALUE IS PRESENT(only use if you know 4 sure)
function valueLocator(val,arr){

  for(let i=0; i<contacts.length;i++){
    let exists=Object.values(contacts[i]).includes(val)
    if(exists==true) {
      return i; 
      //returns the array index of where this condition's true
    }
  }

}
// console.log(valueLocator("Harry", contacts));
```



F3: Checks if a property is present inside a specific index# in our array
Synergizes with F2, which gives us the index# our name/value is in
If the name isn't in the array at all, don't bother using this 

```js
//#F3: CHECKS IF A PROPERTY IS PRESENT (need a specific index# to check)
function propScanner(property, index, arr){
  let exists=contacts[index].hasOwnProperty(property)
  if(exists==true) return true;
  else return false;
}
// console.log(propScanner("test",0, contacts));
```

- F3 is reliant on F2 because we only want to check one index# in contacts - where the NAME is found. 
- We need to specify which one to look into, but automatically without hardcoding the location 



#### Finisher Function

Now that we have the means to verify when properties/values are present AND where, we can build our final function using these externally defined ones when needed.

```js
function lookUpProfile(name, prop){
  let valuePres= check(name,contacts)   //check if value's present
  
  if(valuePres==true){ //--------------
    let valueLocale= valueLocator(name, contacts) 	//check for NAME's index#
    let propPres= propScanner(prop,valueLocale, contacts) //check if PROP's inside it

    if(valuePres==true && propPres==true ){
      let ind= valueLocale;
      return contacts[valueLocale][prop];
    }
    else if(valuePres==true && propPres==false){
      return "No such property";
    }
  } //--------------
  else{
    return "No such contact";
  }

} 
```

##### else block explanation

`if(valuePres==true){ lots of code }` 

All the action inside this occurs if the name/value is found somewhere inside the array
If the name/value is not present, the function returns "No such contact"

##### if block explanation

```js
if(valuePres==true){ //--------------
    let valueLocale= valueLocator(name, contacts) 	//check for NAME's index#
    let propPres= propScanner(prop,valueLocale, contacts) //check if PROP's inside it

    if(propPres==true){
      let ind= valueLocale;
      return contacts[valueLocale][prop];
    }
    else return "No such property";
 
  } //--------------
```

0) We know the NAME/value is somewhere in the array (otherwise else would activate)
1) Find where the NAME/value is. Set index# location to the `valueLocale` variable

2) Check if PROP is in this exact index# in the contacts array. Returns T/F

```js
// remember this only occurs if valuePres==true
	if(propPres==true ){
      let ind= valueLocale;
      return contacts[valueLocale][prop];
    }
    else return "No such property";
```

If PROP is found to be in that array index#, then we return the other half of PROP's key value pair

If it's not in there, we return "No such Property"
It acknowledges the NAME is inside the array, but the PROP we gave as an argument isn't



### Section 9

#### Array destructuring, packing, and unpacking

1) Combine the main and starter menus
2) Grab Pizza and Focaccia from the resulting array and store them in variables
3) Throw everything after Focaccia its own array 

```js
const restaurant = {
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};
```

Let's take this one step at a time, and not in one line:

```js
const combination= [...restaurant.mainMenu, ...restaurant.starterMenu]
//1) need to unpack these arrays first

const [Pizza,,,Focaccia,...allElse]= combination;
//2,3) deconstruct the array and condense the remaining dishes with a rest pattern
```

Now let's condense this into a single statement:

```js
const[Pizza,,,Focaccia,...allElse]= [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(allElse);
```

![image-20210305172056123](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210305172056123.png)

"combination" was just an array, much like this long expression above ^^^

#### Combining Modern Operators with Maps

This example is needlessly complicated, but it shows you can set operations in motion using only modern operators and sets 

```js
const operation= new Map();
operation.set("open", 11).set("close", 23).set(true, "We are open!").set(false, "Sadly, we are closed")
console.log(operation);
let time= 12;
let vari= time > operation.get("open") && time < operation.get("close")
// Expression explanation: "time is after opening"  &&  "before closing"
```

![image-20210308031209796](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210308031209796.png)

So what happened?

&&: ignores all truthy values. 
However, if both these expressions are true, it'll default to the last one
If both are true, `time < operation.get("close")` is what the operator selects
The above expression is equal to the Boolean true 

if vari=true... then the log is basically `operation.get(true)`
there actually is a KVP in the set with true as the key. 
Its value is the "we are open" statement

#### Create a Quiz

Ask the quiz question once (by logging to the console)
List the possible answers once (by logging to the console)
Create a prompt for a visitor to input their answer
Log a success or failure message for when they answer

```js
//STARTER CODE
const quizMap = new Map([
  ['question', 'Which programming language is the most cringe?'],
  [1, 'JavaScript'],
  [2, 'Java'],
  [3, 'PHP'],
  ['correct', 3],
  [true, "You're right!"],
  [false, 'try again...'],
]);
```

This is a good example of only executing actions on certain iterations
We only log certain messages to the console, and the conditions are based on key names

```JS
quizMap.forEach(function addTotal(value, key){ 
  if (key=="question") {console.log(`Your question is: ${value}`);}
  if(typeof key == 'number') {console.log(`${key}. ${value}`);}
  
})

let b= Number(prompt("Fill in user input number"))
if(b==3){
  console.log(quizMap.get(true)); 
} else{
  console.log(quizMap.get(false)); 
}
```

User input was 1: ![image-20210308062204243](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210308062204243.png)

#### Section 9 Coding Challenge 1-2

Both Challenges use the same starter code

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210307045455167.png" alt="image-20210307045455167" style="zoom:75%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210309022943021.png" alt="image-20210309022943021" style="zoom:85%;" />

Final String Challenge

```js
const flights = `_Delayed_Departure;fao93766109;txl2133758440;11:25
+_Arrival;bru0943384722;fao93766109;11:45
+_Delayed_Arrival;hel7439299980;fao93766109;12:05
+_Departure;fao93766109;lis2323639855;12:30`;

/* WANT
      🚨 Delayed Departure from FAO to TXL (11h25)
                   Arrival from BRU to FAO (11h45)
        🚨 Delayed Arrival from HEL to FAO (12h05)
                 Departure from FAO to LIS (12h30)
*/
```

SOLN: Paste into a VSC doc to examine better

```js
const flights = `_Delayed_Departure;fao93766109;txl2133758440;11:25
+_Arrival;bru0943384722;fao93766109;11:45
+_Delayed_Arrival;hel7439299980;fao93766109;12:05
+_Departure;fao93766109;lis2323639855;12:30`;

/* WANT
      🚨 Delayed Departure from FAO to TXL (11h25)
                   Arrival from BRU to FAO (11h45)
        🚨 Delayed Arrival from HEL to FAO (12h05)
                 Departure from FAO to LIS (12h30)
*/
//—————————————————————【】——————————————————————————

//@ Step 1: Separate the giant string into an array of substrings
let flights1 = flights.replace(/\s/g, ""); //remove all line jump chars
let flights2 = flights1.split("+"); // split using + as the divider

/* 
0: "_Delayed_Departure;fao93766109;txl2133758440;11:25↵"
1: "_Arrival;bru0943384722;fao93766109;11:45↵"
2: "_Delayed_Arrival;hel7439299980;fao93766109;12:05↵"
3: "_Departure;fao93766109;lis2323639855;12:30"
    depart     ; area 1     ;  area 2    ; time
  */

//@ STEP 2: Cut up the flights2 array entries into smaller subarrays
//@ STEP 3: Fix those subarrays and remove what's not needed

let subArrays = [];
// fill with new subarrays made fr/ entries of flights2
let finalPhrases = [];
for (let i = 0; i < flights2.length; i++) {
  //! simply applying methods in here does nothing. reassign str values
  subArrays[i] = flights2[i].split(";");
  // creating subarrays fr/ flights2
  //% Fixing up the strings:
  subArrays[i][0] = subArrays[i][0].replaceAll("_", " ").trim();
  // replace all underscores with spaces, trim the left side of the string
  subArrays[i][1] = subArrays[i][1].slice(0, 3).toUpperCase();
  subArrays[i][2] = subArrays[i][2].slice(0, 3).toUpperCase();
  // take only the first 3 letters of area 1/2, then capitalize them
  subArrays[i][3] = subArrays[i][3].replace(":", "h");
  finalPhrases[
    i
  ] = `${subArrays[i][0]} from ${subArrays[i][1]} to ${subArrays[i][2]} (${subArrays[i][3]})`;
}

//~——————————————————【VISUALIZATION ZONE START】——————————————————————
console.log(subArrays); //$helper
/* SUBARRAYS
(4) [Array(4), Array(4), Array(4), Array(4)]
0: (4) ["_Delayed_Departure", "fao93766109", "txl2133758440", "11:25↵"]
1: (4) ["_Arrival", "bru0943384722", "fao93766109", "11:45↵"]
2: (4) ["_Delayed_Arrival", "hel7439299980", "fao93766109", "12:05↵"]
3: (4) ["_Departure", "fao93766109", "lis2323639855", "12:30"]
length: 4
*/
console.log(finalPhrases); //$helper
/*
(4) ["Delayed Departure from FAO to TXL (11h25)", "Arrival from BRU to FAO (11h45)", "Delayed Arrival from HEL to FAO (12h05)", "Departure from FAO to LIS (12h30)"]
0: "Delayed Departure from FAO to TXL (11h25)"
1: "Arrival from BRU to FAO (11h45)"
2: "Delayed Arrival from HEL to FAO (12h05)"
3: "Departure from FAO to LIS (12h30)"
length: 4
*/
//~—————————————————【VISUALIZATION ZONE END 】——————————————————————

for (let i = 0; i < finalPhrases.length; i++) {
  let regExpr = /(delayed)/i; // check if the message has "delayed" in it
  let testMSG = regExpr.test(finalPhrases[i]); //returns Boolean
  if (testMSG == true) {
    finalPhrases[i] = `🚨 ${finalPhrases[i]}`;
    // add an emoji for delayed flights
  }
  finalPhrases[i] = finalPhrases[i].padStart(50, " ");
  // pad out all the strings
  console.log(finalPhrases[i]);
  // log all the array entries to the console
}

```

WHAT I LEARNED ABOUT USING REGEX

- Work your way upwards when it comes to complicated strings
  I created regex for 1 part successfully, then added the next and tried to do the same
  Rise, repeat, until the string is fully accepted by regex

### Section 10

#### Coding Challenge 1

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210322224506367.png" alt="image-20210322224506367" style="zoom: 67%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210322224527132.png" alt="image-20210322224527132" style="zoom:67%;" />

SOLN:

```js
'use strict';

//Create a prompt that shows up when you press the 'Answer poll' button
// Make that a method inside the provided object and name it 'registerNewAnswer'

// When the user inputs a response, update the 'answers' array
// display the resulting array every time the 'Answer poll' button's pressed
// Be sure to implement something that negates nonsensical answers
const pollButton = document.querySelector('.poll'); // import button to JS

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),

  displayResults(type = 'array') {
    switch (type) {
      case 'array':
        console.log(this.answers);
        break;
      case 'string':
        console.log(`Poll results are ${this.answers.join(', ')}`);
        break;
      default:
        console.log("Please type either 'string' or 'array' as your response");
    }
  },
  registerNewAnswer() {
    let userInput = Number(
      prompt(`${this.question}\n${this.options.join('\n')}`) //asks the question
    );
    if (
      userInput === 3 ||
      userInput === 2 ||
      userInput === 1 ||
      userInput === 0
    ) {
      //! insert what to do if your answer's valid here
      this.answers[userInput]++; // add 1 to the corresponding array entry
      this.displayResults(); // call the display results method
      this.displayResults('string'); // call, the string version
    } else {
      alert('Invalid input'); // let them know they fucked up
    }
  },
};

// When we press the "Answer Poll" button, it activates the questionnaire
pollButton.addEventListener('click', () => {
  poll.registerNewAnswer();
});

//—————————————————————【BONUS SECTION SKIPPED】——————————————————————————
```

### Section 11

Challenge 1:

[The Complete JavaScript Course 2021: From Zero to Expert! | Udemy](https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648723#overview)

```js
let juli1 = [3, 5, 2, 12, 7];
let kate1 = [4, 1, 15, 8, 3];
let juli2 = [9, 16, 6, 8, 3];
let kate2 = [10, 5, 6, 1, 4];
const checkDogs = function (dogsJulia, dogsKate) {
  //mutate dogs Julia after cloning
  let newJulia = dogsJulia.concat([]); //shallow clone
  newJulia.splice(newJulia.length - 2); //remove final 2 entries
  newJulia.splice(0, 1); // remove first entry
  let allDogs = newJulia.concat(dogsKate);
  allDogs.forEach((el, ind) => {
    let species;
    el >= 3 ? (species = 'adult') : (species = 'puppy');
    console.log(`Dog number ${ind + 1} is a ${species}`);
  });
};
checkDogs(juli1, kate1);
```

Challenge 4: Excellent Array Method Practice

https://jsfiddle.net/JasonXtuyotech/6tL5gcyk/3/



### Comparing all 6 OOP Methods: Code Challenges

ON 1 JS FILE: https://drive.google.com/file/d/1KytTIhr9Dl7BgcX2JXdC_ekkO7IUy7QN/view?usp=sharing

#### Code Challenge 1: 

Proto-Inheritance Method 1- Constructor Functions

![image-20210429144932956](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210429144932956.png)

```js
const Vehicles = function (make, speed) {
  (this.make = make), (this.speed = speed);
};
Vehicles.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/hr`);
};
Vehicles.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/hr`);
};
//—————————————————————【 TESTING 】——————————————————————————
const car1 = new Vehicles('BMW', 120);
const car2 = new Vehicles('Mercedes', 95);

car1.accelerate(); // should subtract 10 from the speed (120+10=130)
car2.brake(); // should add 10 to the speed (95-5=90)
```

#### Code Challenge 2

Proto-Inheritance Method 2- ES6 Classes

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210429145040382.png" alt="image-20210429145040382"  />

```js
class Vehicles{
  constructor(make,speed){
    this.make= make;
    this.speed= speed;
  }
  accelerate(){
    this.speed+=10
    console.log(`${this.make} accelerated from ${this.speed-10} km/hr to ${this.speed}`);
  }
  brake(){
    this.speed-=5
    console.log(`${this.make} slowed from ${this.speed+5} km/hr to ${this.speed}`);
  }
  get speed_USA(){
    return `The mph equivalent of your current speed is ${(this.speed)/1.6}`
  }
  set speed_USA(mph){
    //% accepts speed in mph, converts it to km/hr, then stores it as this.speed
    this.speed= mph*1.6
  }
}
//—————————————————————【 TESTING 】——————————————————————————
const car1 = new Vehicles('BMW', 120);
const car2 = new Vehicles('Mercedes', 95);
car1.accelerate(); // should subtract 10 from the speed (120+10=130)
car2.brake(); // should add 10 to the speed (95-5=90)

console.log(car1.speed_USA) //81.25
car1.speed_USA=100
console.log(car1.speed) //160
```

#### Code Challenge 3: 

Class Inheritance Method 1- Constructor Functions

```js
//$ Start with a Car Constructor with its own properties (no methods needed for it)
const Car = function (make, speed) {
  (this.make = make), (this.speed = speed);
};

//$ 1. Import all parent properties, and add new specific ones for the child (charge)
const EVcl = function (make, speed, charge) {
  Car.call(this, make, speed); // import make and speed properties
  this.charge = charge; // EVcl exclusive property
};

//$ 2. Link the child's prototype to the parent prototype via Object.create
EVcl.prototype = Object.create(Car.prototype);
EVcl.prototype.constructor = EVcl; // set the correct constructor for student's proto

//$ 3. Set any new child-only methods (chargeTo,accelerate)
EVcl.prototype.chargeTo = function (percent) {
  if (percent > 0 && percent <= 100) this.charge = percent;
  else console.log(`You cannot charge to ${percent}%`);
};
EVcl.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  if (this.charge > 0 && this.charge <= 100)
    console.log(
      `${this.make} going at ${this.speed} km/hr, with a charge of ${this.charge}%`
    );
  else console.log(`You're out of power!`);
};

//—————————————————————【 TESTING 】——————————————————————————
const elonsRide = new EVcl('Tesla', 120, 5);
console.log(elonsRide); //& START POINT

//# Test 1
// let state1 = elonsRide.accelerate();
// console.log(elonsRide);
//# Test 2
// let state2 = elonsRide.chargeTo(50);
// console.log(elonsRide);
//# Test 3: Try to charge to an impossible percent
// let state3= elonsRide.chargeTo(500)
//# Test 4: Run out of power on purpose
elonsRide.accelerate();
elonsRide.accelerate();
elonsRide.accelerate();
elonsRide.accelerate();
elonsRide.accelerate();

//$ 5. Test the prototype chain (part 1)
//# Constructor check
console.log('STEP 5 BEGINS HERE');
console.log(EVcl.prototype.constructor);
console.log(Car.prototype.constructor);
console.log(Object.prototype.constructor);
//# Instance Check
console.log(elonsRide instanceof EVcl); //OUTPUT: true
console.log(elonsRide instanceof Car); //OUTPUT: true
console.log(elonsRide instanceof Object); //OUTPUT: true

//$ 6. Test the prototype chain (part 2)
let EV_Proto = elonsRide.__proto__;
let Car_Proto = elonsRide.__proto__.__proto__;
let object_Proto = elonsRide.__proto__.__proto__.__proto__;
// End of the chain
console.log('STEP 6 BEGINS HERE');
console.log(EV_Proto);
console.log(Car_Proto);
console.log(object_Proto);
```

#### Code Challenge 4:

Class Inheritance Method 2- ES6 Classes

```js
class CarCl {
  constructor(make, speed) {
    (this.make = make), (this.speed = speed);
  }
}
class EVCl extends CarCl {
  constructor(make, speed, charge) {
    // Import all CarCl properties/methods, add child-exludive charge prop
    super(make, speed); // set "this"
    this._charge = charge;
  }
  chargeTo(percent) {
    if (percent > 0 && percent <= 100) {
      this._charge = percent;
      return this; // returning object makes this ƒ() chainable
    } else console.log(`You cannot charge to ${percent}%`);
  }
  accelerate() {
    this.speed += 20;
    this._charge -= 1;
    if (this._charge > 0 && this._charge <= 100) {
      console.log(
        `${this.make} going at ${this.speed} km/hr, with a charge of ${this._charge}%`
      );
      return this;
    } else console.log(`You're out of power!`);
  }
}
//—————————————————————【 TESTING 】——————————————————————————
const elonsRide = new EVCl('Tesla', 120, 5);
console.log(elonsRide); //& START POINT

//# Test 1
// let state1 = elonsRide.accelerate();
// console.log(elonsRide);
//# Test 2
// let state2 = elonsRide.chargeTo(50);
// console.log(elonsRide);
//# Test 3: Try to charge to an impossible percent
// let state3= elonsRide.chargeTo(500)
//# Chaining Test 1: Run out of power on purpose
// elonsRide.accelerate().accelerate().accelerate().accelerate().accelerate();
//# Chaining Test 2:
elonsRide.chargeTo(10).accelerate().accelerate().chargeTo(20);
console.log(elonsRide);
```

FF

# Return2:

[Learn Basic JavaScript: Use the parseInt Function with a Radix | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-the-parseint-function-with-a-radix)
Don't really care about binary conversion or diff radixes

[Learn Basic JavaScript: Use Recursion to Create a Countdown | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown)
[Learn Basic JavaScript: Replace Loops using Recursion | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion)
[Learn Basic JavaScript: Use Recursion to Create a Range of Numbers | freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers)

Ignored recursion. Will need it later though, especially for interviews

Other Niche Operators 
https://www.w3schools.com/jsref/jsref_operators.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new



### 2Complete

- test() method
- Learn how JS maps work. 
  Compare them to objects (very close to each other)
  [When to Use Map instead of Plain JavaScript Object (dmitripavlutin.com)](https://dmitripavlutin.com/maps-vs-plain-objects-javascript/)
- function literals (to avoid making functions for small tasks)
- regular expressions vs strings

Make a new section in the "What I've seen" syntax pit for methods only

# Projects

## PROJECT: Guess Number Game

FULL PROJECT: https://jsfiddle.net/JasonXtuyotech/0rwLcn5p/12/

### Import then Manipulate Elements 

#### Change the Text of an Element

Take a look at the default state of this pre-built website

![image-20210226173720013](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210226173720013.png)

```html
<p class="message">Start guessing...</p>
```

If we want to change the words being displayed, we'll have to target that p class with a query selector, then change the text inside via textContent

```js
document.querySelector('.message').textContent= "Suck my dictionary"
```

![image-20210226174020859](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210226174020859.png)

This action counts as DOM manipulation, because we tampered with the text that was hardcoded in HTML

//—————————————————————【】——————————————————————————

Let's change some of the text inside other elements for fun. 
The class names from the HTML document are: score, highscore, message

```js
document.querySelector('.message').textContent = `You're winner!`;
document.querySelector('.score').textContent = 19;
document.querySelector('.highscore').textContent = 18;
```

![image-20210226182035153](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210226182035153.png)

#### Changing text for Input Fields

Input fields work a little differently and may generate errors when you try to use `textContent` on them. Instead, you need to use the `value` property

START

```html
<section class="left">
        <input type="number" class="guess" />
        <button class="btn check">Check!</button>
</section> // WARP: HKBNS2
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210226182914379.png" alt="image-20210226182914379" style="zoom:67%;" /> => <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210226183127698.png" alt="image-20210226183127698" style="zoom:67%;" />

Let's change the text inside:

```js
document.querySelector('.guess').value=69
```



### Handling Click Events (project)

You've already learned how to add classes to certain elements when something is clicked. There are plenty of other DOM manipulations you can perform

EXAMPLE: Log the the guess box's number to the console when the check button's hit

Hitting "Check!" should log 3 to the console: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210227163042057.png" alt="image-20210227163042057" style="zoom:50%;" />

```html
      <section class="left">
        <input type="number" class="guess" />		// NUMERIC INPUT FIELD
        <button class="btn check">Check!</button>	//CHECK BUTTON
      </section>
```

```js
document.querySelector('.check').addEventListener('click',()=>{
  console.log(document.querySelector('.guess').value);
})
```

When the check button is clicked in the above state: ![image-20210227163358206](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210227163358206.png)

- Notice how in our JS, we didn't stop to assign the HTML element we imported to a variable. We used it directly with the addEventListener method
- Event listener functions are only called as soon as their trigger events happen
  We don't call them in our code

#### Implementing Game Logic

This is all the information you need to properly code a "Guess my Number" game

Look in your JS practice problems folder for your finished version compared to the starter files



### Changing the Win/Loss Screen Color

When we win our random number game, we're going to turn the background color of the body element green! This requires CSS style manipulation through JS

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210227234328347.png" alt="image-20210227234328347" style="zoom:67%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210227234636861.png" alt="image-20210227234636861" style="zoom:67%;" />

```js
document.querySelector('body').style.backgroundColor= '#60b347'
```

- Since we targeted the body element, we did not specify "body" with a dot in front of it- that's for class names only

If you need to add multiple values for a single CSS property, keep using 1 pair of quotation marks

```js
document.querySelector('.btn').style.padding = '20px 10px';
```





## PROJECT: Pig Game 

Find start/end folders here: https://drive.google.com/drive/folders/1O4quaGswGiZ9P04Z5wYPiaSmDFKNgoVK?usp=sharing

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210228175717709.png" alt="image-20210228175717709" style="zoom:50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210228180219011.png" alt="image-20210228180219011" style="zoom:60%;" />

GAME RULES

![image-20210228180448924](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210228180448924.png)


- Roll the dice, then all numbers that land will be added to your current score- with the exception of a 1.
- If you land on 1, then you lose your current score, and it's the other person's turn
- After 1 roll, you can choose to hold, which will add your current score to your total
- The player who reaches or exceeds 100 wins!

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210228211657774.png" alt="image-20210228211657774" style="zoom:50%;" />

### Button-by-Button Explanation

2 relevant classes that get passed between player 0 and 1:
 `player--active` and `player--winner`

#### Before the Game Begins

- Dice must be invisible
- P0 must be the active player

#### Roll Dice Button

if the roll is not a 1...

- Must generate a random number
- Must make a dice image appear that matches that number
- Each roll that isn't a 1 must add to the current score

if the roll IS a 1...

- Reset the player's current score to 0
- Switch to the other player's turn

#### Hold Button

- Add the built up current score to the player's total score
- Reset the player's current score to 0

if holding makes a player's total score reach 100 or higher...

- Add winner class to the active player which changes their side's color
- Disable the roll dice and hold buttons
- Make the dice image disappear

else- meaning holding on this turn does not win the player the game...

- Switch to other player's turn

#### New Game Button

- Reset both players' current and total scores
- Re enable the roll dice and hold buttons - they are disabled after the winner's decided
- Make P0 the active player

#### Why I Made the List

- These statements are a to-do list of small actions needed get the game working. 
- There may be a few details missing, but this is what you need to do to set up a strategy for building a project- or use a flowchart

Pig game hosted by Lecturer: https://pig-game-v2.netlify.app/
My version: Find in Study Problems folder



## PROJECT: Bankist App

FLOWCHART:

![image-20210325061848716](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210325061848716.png)

Completed version inside your project files, or here: 
https://jsfiddle.net/JasonXtuyotech/b40myktz/1/



### Username Generator Challenge

Take every account object, and add the name initials as a "username" KVP

```JS
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const accounts = [account1, account2, account3, account4]; 

function takeLetters(arr) {
  // Takes an array of words, decapitalizes it, then returns the first letters of each
  // EXAMPLE:: ["ray","fines"] turns to rf
  let result = '';
  arr.forEach((elem) => {
    result = result + elem.slice(0, 1);
  });
  result = result.toLowerCase();
  return result
}
function initialsGen(accountsArr) {
  //# Take each owner name, and place it in an array
  let fullNames= accountsArr.concat([]) //SHALLOW CLONE
  //# Split up each name string into surnames
  fullNames.forEach((el,i,thisArray)=>{
    thisArray[i]= el.owner.split(" ") // STATE 1
  })
  //# Extract initials from those surnames, and add to account objs
  for(let j=0; j<fullNames.length;j++){
    fullNames[j]= takeLetters(fullNames[j]) // STATE 2
    accountsArr[j].username= fullNames[j] // add initials to each corresponding obj
  }
}
initialsGen(accounts);
```





# Cutting Room Floor

### For in loops on Arrays (not Recommended)

You can actually use for...in loops on arrays as well. 

- There isn't much of a point since the length property works on it
- But it is an easy way to skip writing an argument for your for loops
  HOWEVER, forEach is a better alternative for this as well

```js
let arraye=[1,9,2,4,5];		//Starting array
```

 Create a for loop that adds all the values inside a given array: 

![image-20210217211338748](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210217211338748.png) ![image-20210217211315911](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210217211315911.png)

Both return 21
The only difference is that `ind` now takes the place of our incrementing variable i

```js
// let arrayName=[1,9,2];		//Starting array
// let sum=0;
// for (let ind in arrayName){
//   console.log("index number: + "ind); //gives us access to index #
//   console.log("element value: " + arrayName[ind]);  // can access array elements like this
// }
```

### for...in loops (obj*)

We use for loops when we have a length property to dictate how many times our loop is going to iterate. 

- But what about objects, which don't have a length property? 
- We won't know how many key-value pairs will be in there forever

Use a forIn loop to loop over every key value pair in our object without specifying a length (b/c we can't)

```JS
for( let genKeyName in objectName ){}
OR
for( const genKeyName in objectName ){}	
//an option, but I'm unsure what this changes
```

Although it is possible to use for in loops on arrays, it is not recommended for a number of reasons. 

- We have forOf loops and regular for loops as options on arrays
- Strange behaviour occurs when you use forIn on an array
  [javascript - Why is using "for...in" for array iteration a bad idea? - Stack Overflow](https://stackoverflow.com/questions/500504/why-is-using-for-in-for-array-iteration-a-bad-idea)

#### Example: forIn on an Object

```js
let traps= {
  'University': 'debt',
  'marraige': 'alimony',
  'consumerism': 'habitual'
}

for( let key in traps){
  console.log(key, traps[key] );	// log keys with the values beside em
}
```

- When you initialize a variable using `let` or `const`, name it whatever you want 
- traps is the name of our object

![image-20210217205019133](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210217205019133.png)







### for...of loops(arrays*)

forOf loops accomplish the same thing forIn loops do, except they're meant for arrays instead of objects.

```js
for (let genElName of arrayName){}
//OR
for (const genElName of arrayName){}
```

#### Example

Subtract all the array elements from a starting value of 100

```js
let numbers=[10, 5, 4, 1];
let remains=100;		//start at 100
for (let elName of numbers){
  remains=remains-elName;
}
console.log(remains);
```

![image-20210218151839719](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210218151839719.png)

`genElName` : gives immediate access to array ELEMENTS

If you want access to both array elements and index values, use a forEach loop instead

### Shadid Advice

Learn react after JS, then Typescript and Git

Prepare for interviews by learning algorithms and data structures



### CUTTER













