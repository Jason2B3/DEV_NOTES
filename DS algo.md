#   Reference Chapter

### Definitions

#### General Definitions

ALGORITHM: (buzzword)
A process or set of steps to accomplish a certain task- which can apply to practically any scenario

- Ex. Facebook has an algorithm that decides what posts/ads get shown
- Ex. If someone asks you to calculate the first 100 prime numbers, the steps you take to do so can also be considered an algorithm 

#### Question Terminology

ANAGRAM:
When you rearrange the letters in one phrase to create another
Ex. “A decimal point” can be turned into the anagram “I'm a dot in place.”

CONTIGUOUS SUBARRAY:
A sub array whose index numbers are sequential
Ex. A subarray of `[1,2,3,4,5]` could be `[2,3,4]`, but not `[2,4]` (b/c 3 is missing)

FACTORIAL:
!4 equals the product of 4 *3 * 2 * 1

### Special Sequences

#### Fibonacci

DEFINITION:

![image-20220406165337019](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220406165337019.png)

FORMULA:

![image-20220406165832580](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220406165832580.png)



### Useful JS Tips

#### Loop Types

|         | meant for...               | access to                                                    |
| ------- | -------------------------- | ------------------------------------------------------------ |
| forIn   | objects                    | keys (direct)<br />values (via path)                         |
| forOf   | arrays<br />sets<br />maps | elements (direct)<br />"continue" and "break" keywords<br />index numbers (through a simple trick) |
| forEach | arrays<br />sets<br />maps | index values (direct)<br />array elements (direct)<br />array itself (use to apply a ƒ() to all entries<br />callback ƒ()- best when defined inside forEach() |

Looping through strings

```JS
let str = "abcd"
for(let char of str) console.log(char); // a b c d (useful)
```

#### Useful Snippets

Sum of all array values

```js
// Calcs sum of array entries
const numbers= [1,-1,2,3];
const sum=numbers.reduce((accumulator,currentValue)=> accumulator+currentValue,0);
```

Checking arguments in a function with an unspecified amount

```JS
function areThereDuplicates() {
  console.log(arguments)
}
areThereDuplicates(1,3,5)
```

![image-20220402094955567](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220402094955567.png)

Searching for the existence of an object KVP

```JS
let obj = { a: "word", b: undefined, c: 7 }

// The distinction is not clear
console.log(obj["z"]); // undefined, but this KVP does NOT exist
console.log(obj["b"]); // undefined, but this KVP exists

// The distinction is clear
console.log("z" in obj); // false
console.log("b" in obj); // true
```

Return shortened Array (good for recursion)

```js
const a = [0,1,2,3,4,5]
console.log(a.slice(1)) // removes first value [1,2,3,4,5]
```

Check if something's an array or object

```js
const q1 = []
const q2 = {}
typeof q1 === 'object' && Array.isArray(obj[key]); // equals true for arrays
typeof q1 === 'object' && !Array.isArray(obj[key]); // equals true for objects
```

#### Strings

Search for a character in a string using an index number

```js
let a = "alabama"

// Bracket notation (lean)
console.log(a[1]) // OUTPUT: "l"
console.log(a[20]) // OUTPUT: undefined

// charAt (makes code more semantic)
console.log(a.charAt(1)) // OUTPUT: "l"
console.log(a.charAt(20)) // OUTPUT: "" 
```

#### Arrays

swap values in an array

```js
function swap(arr, ind1, ind2) {
  let temp = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temp;
} // makes swapping array values easy
```

Insert a value into an array at a specified index (while offsetting every other value)

```js
function insert(arr, val, atThisIndex) {
  arr.splice(atThisIndex, 0, val);
}

// ex. 
const a = [1, 4, 6, 9, 12];
insert(a, 800, 2); // [1, 4, 800, 6, 9, 12]
```

Move an array value from 1 index to another

```js
function array_move(arr, old_index, new_index) {
  while (old_index < 0) old_index += arr.length;
  while (new_index < 0) new_index += arr.length;
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) arr.push(undefined);
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing purposes
}
```



### Logarithms Review

> ![image-20220401000840886](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220401000840886.png)
>
> M is called the "argument"

#### Purpose of log

Logs are another way to express exponents
It's the yang to exponents' ying, much like how multiplication and division are inverses of each other

![image-20220331071611302](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220331071611302.png)

Look at the first row of the example table and pretend =3 and =8 were not there

- Exponential form asks... 2 to the power of 3 equals what?
- Log form asks... 2 to the power of what will equal 8?

#### Relation to Big O

Some algorithms will have logarithmic space/time complexity					
Either way, ignore the base power of the logarithm while determining a Big O score

![image-20220331074325090](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220331074325090.png)

#### Sources

> Intro to logarithms:
> https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:logs/x2ec2f6f830c9fb89:log-intro/a/intro-to-logarithms
>
> Rules of ln:
> https://www.youtube.com/watch?v=e7Yfub7xlDg





# Big O Notation

There are many ways to solve each problem, and some are better than others in terms of performance
Big O Notation is a way of classifying which types of solutions are best for certain problem types



### Timing our Functions

#### Objective

Solve a problem using 2 different approaches-  1 that's efficient and one that isn't
Compare the execution time of both

EXAMPLE:
Create a function that returns the sum of all integers leading up to and including "n"

```js
// Inefficient method
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) total = total + i;
  return total;
}
// Efficient method (uses an established algorithm)
function addUpNew(n) {
  return (n * (n + 1)) / 2;
}
```

#### Timing Method

```js
function timeExecution(fn, inp) {
  let time1 = performance.now();
  const result = fn(inp);
  let time2 = performance.now();
  return {
    result,
    execTime: (time2 - time1) / 1000, // seconds
  };
}

console.log(timeExecution(addUpTo, 100000));
console.log(timeExecution(addUpNew, 100000)); // over 5x as fast
```

![image-20220330235218282](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220330235218282.png)

The efficient method would be even faster in comparison if we decided to use a higher value for n



### Counting Operations per Function

Operations are when our computer adds, subtracts, divides, multiplies, or sets things equal to something

- You don't need to count exactly how many operations go down in each function, but you should be able to tell when 1 function clearly has more than another
- You're about to see that our inefficient method's number of operations scale proportionately to what number n equals... which tanks performance

#### Example

Let's count operations using the example from the previous lesson, and learn why our inefficient method is so much less performant

INEFFICIENT METHOD:
Each loop contains 5 or possibly 6 (if you count < ) operations, and the function will loop "n" times
If n equals 1000, we'll have over 5000 operations, which makes the performance sluggish

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220330215225383.png" alt="image-20220330215225383" style="zoom: 40%;" />

EFFICIENT METHOD:
No matter what "n" equals, we will always have 3 operations

![image-20220330214819883](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220330214819883.png)



### Big O expressions

- In the previous lesson we learned how to count operations- which is actually a bit overkill when we are assigning Big O scores
- The main thing we need to be able to see is how the number of operations relate to "n", our input

#### Operation Types

> We say an algorithm's O-score is equal to O(f(n))

| TYPE        | f(n) equals... | means the # of operations...                     |
| ----------- | -------------- | ------------------------------------------------ |
| constant    | 1              | is constant and not affected by the value of "n" |
| linear      | n              | grows linearly with the value of "n"             |
| quadratic   | n^2            | grows exponentially with the value of "n"        |
| other types | ??             | ??                                               |

#### Constant and Linear Operations

EXAMPLE A: constant and linear O-scores

![image-20220331004345870](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220331004345870.png)

EXAMPLE B: Linear 0-score that scales linearly twice

- This function contains 2 for loops, which means it scales linearly in 2 different spots
- The O-score is still `O(n)`, since we only care about the big picture relationship b/t "n" and the number of operations- it is `not O(2n)` or something like that

#### Quadratic Operations

If we have an `O(n)` operation nested inside another `O(n)` operation, then the relationship between n and the number of operations is exponential

- The following example has a for loop nested inside a for loop (2)
- This makes the O-score quadratic... aka `O(n^2)`

![image-20220331005857538](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220331005857538.png)

If n=2, the function prints 4 pairs
If n=3, the function prints 9 pairs
As you can tell, this increase in printed pairs is not linear or constant



### Simplifying Big-O expressions 

#### What to Ignore

As stated earlier, counting the exact number of operations per algorithm is not required- we just want a big picture idea of how "n" relates to the number of operations in your function

The value of "n" can be any number- which means it's allowed to approach infinity
There are certain aspects of algorithms we're encouraged to ignore when thinking about the big picture

> IGNORE: 
> Constants, smaller terms, and lesser powers 
>
> REASONING:
>
> - If we have `O(n^4 + 5n)`, then the 5n does not matter compared to `n^4` when we approach high numbers like 1 million 
> - This logic applies to all 3 things I said we can ignore

EXAMPLES: Keep your Big O expressions simple 

Image 1: Constants										 Image 2: Smaller terms && lower powers

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220331014931359.png" alt="image-20220331014931359" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220331015436183.png" alt="image-20220331015436183" style="zoom:80%;" />

#### Rules of Thumb

These following rules apply most of the time, but are not set in stone
Their purpose is to prevent you from nitpicking what the exact Big O expression for an algorithm is

> 1. Arithmetic operations are constant and not affected by number magnitude
>
> - Adding, subtracting, multiplying, dividing all count as 1 operation
> - 4 + 4 will take the computer roughly as much time as 400000 + 400000
>
> 2. Variable assignment is constant and not affected by number magnitude either
>    Ex. a = 10 counts as an operation and takes as much time as a = 1000000
>
> 3. Accessing an array entry via index OR accessing an object value via key...
>    Both are constant and count as 1 operation
> 4. When composing Big O expressions, think about a function's worst case / upper bound

#### QUIZ

![image-20220331023539016](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220331023539016.png)

> ANSWER KEY:
> O(n)	O(n)	O(1)	O(n^3)	O(n)



### Time Complexity

TIME COMPLEXITY:
The runtime of an algorithm as the input size increases
Can be described using Big O notation

- Use all the knowledge outlined in the previous lessons to come up with a Big O score for the time complexity of the following examples
- Use rules of thumb, remember what to ignore, understand what counts as an operation, recognize the operation type, always consider an algorithm's worst case...etc

#### A

This function logs numbers that must be 5 @ minimum

- If n = 7 , it'll  log 1 2 3 4 5 6 7
  If n= 2, it'll log 1 2 3 4 5
- If n = 1000000, it' ll  log up to that huge number 
  This function's worst case would approach infinity

ANSWER: `O(n)`		![image-20220331022225816](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220331022225816.png)

#### B

This function logs numbers that must be 5 at most

- If n = 100,  it'll  log 1 2 3 4 5
  If n = 2, it'll log 1 2
- Since 5 is the maximum number of operations, that makes this Big O type constant

ANSWER: `O(1)`  	![image-20220331022744084](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220331022744084.png)	

#### C

I'm not explaining what the function does this time

- I'm glancing at the operations and determining the time complexity with that alone
- There is no maximum length for the input paramter, which happens to be an array
  So "n" can approach infinity, even though "n" is an array this time and not an integer

ANSWER: `O(n)`			![image-20220331030136698](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220331030136698.png)

Remember, 0(1) does not mean we only have 1 operation on that line- it just means the number of operations is a constant

#### D

- We have several constant operations in this one (underlined them blue, and some like i ++ count as 2 due to setting things equal while adding)
- That being said, none of that matters since we have 2 operations that scale linearly with "n"

ANSWER: `O(n^2)`		![image-20220331025519654](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220331025519654.png)



### Space Complexity

SPACE COMPLEXITY:
How much space in the memory is required to run our algorithm
Can be described using Big O notation, just like for time complexity

AUXILIARY SPACE COMPLEXITY:
The memory space required by only the algorithm itself

- With Big O notation,we consider the input "n" to increase until infinity, and that'll take space each and every time- so we ignore it when determining auxiliary space complexity
- Unless otherwise stated in Colt's course, assume that "space complexity "refers to the auxiliary kind

#### Space Complexity for diff data types

|                                                              | type of space taken up | Big O  |
| ------------------------------------------------------------ | ---------------------- | ------ |
| primitives<br />(Booleans, numbers, undefined, null)         | constant               | `O(1)` |
| reference types with no fixed length<br />(arrays, objects)  | linear                 | `O(n)` |
| reference types with a fixed length<br />(arrays or objects with a set # of entries/KVP's) | constant               | `O(1)` |
| strings with no fixed length                                 | linear                 | `O(n)` |
| strings with fixed length                                    | constant               | `O(1)` |

PRIMITIVE EXPLANATION
Whether a Boolean equals true or false does not matter- the amount of space taken is the same regardless

REFERENCE TYPE EXPLANATION
Storing an array with 20 entries takes half as much space as an array with 40 entries
Storing an object with 20 key value pairs takes half as much space as one with 40

STRING EXPLANATION
If a string contains 1000 characters, it takes double the space of one with 500 characters

#### Example 1

Determine the space complexity of the following function
Tip: Pay attention to when we set variables equal to something

ANSWER: `O(1)`: 	![image-20220331051951244](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220331051951244.png)

We notice 2 variable assignments

- We don't count i++ into our considerations
  All it does is increase the value of i, which we already considered ("another number")
- It would be considered for time complexity, but not space complexity- this lesson's focus
- Even if i++ increments the numeric value of variable i upwards, all numbers count as constant space anyway `O(1)`

#### EXAMPLE 2: Array without capped length

ANSWER: `O(n)` ![image-20220331054304686](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220331054304686.png)

THOUGHT PROCESS:

- This next function sets a variable `newArr` equal to an array, which takes up linear space
- This array length is not capped, and is directly proportional to the length of parameter `arr`
  The length of `arr` directly affects the length of `newArr` thanks to the for looping

WHAT WE IGNORE:

- It also sets `i` equal to a number, which takes up constant space
  This is of lower exponential power than `newArr`though, so we'll ignore this



#### EXAMPLE 3: Array with Fixed Length

Don't autopilot and assume every array takes up linear space. 
Pay attention to whether the number of entries changes because of input "n"

- This example involves an array whose length will max out at 4
- Even if "n" equals 1000000, the array length will remain the same regardless

```js
function pushArray(n) {
  let arr= [1, 4, 6];
  arr.push(n); // no matter what n is, the array length will be 4
  return arr;
}
```

ANSWER: `O(1)`

#### Example 4

ANSWER: `O(n)`							![image-20220331070123095](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220331070123095.png)

- In this example, the length of the array parameter directly effects subTotalArray's array length
  This takes up linear space
- There are plenty of other instances where variables are assigned numeric values, which takes up constant space (a lesser power compared to linear, so we'll ignore this)

Showing what Array() does

![image-20220331070033122](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220331070033122.png)



### Big O Cheat Sheets

We'll save a few pictures in this lesson, but it's better to have the URL's open while you work

#### Tier List

The less steep the slope is, the better the solution (in terms of performance)
Should apply to both time/space complexity

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220412023604303.png" alt="image-20220412023604303" style="zoom:67%;" />

#### Array Sorting Algorithms

![image-20220412024029036](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220412024029036.png)

#### Common Data Structure Operations

![image-20220412023959316](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220412023959316.png)

#### Sources

> Visuals: 
> https://www.bigocheatsheet.com/
>
> Big O scores for highly specific operations
> https://bigocheatsheet.io/



# Analyze Performance of Arrays and Objects

### Intro

JS has tons of methods that each perform differently. 

- By this I mean some are more performant than their peers, which matters because we can choose to approach problem solving in a more performant way
- For example, if a situation allows the use of objects or arrays to solve a problem, it's good to know one approach will likely be much faster than the other in terms of performance



### Big O of Objects

Objects are very quick in general since there's no finite order for the KVP's

#### Object operation speeds

BASICS:

| OPERATION                                             | SPEED  |
| ----------------------------------------------------- | ------ |
| Add a new KVP                                         | `O(1)` |
| Delete a KVP                                          | `O(1)` |
| Access a KVP via key name                             | `O(1)` |
| Search for a KVP via key name                         | `O(1)` |
| Search for an object value without specifying the key | `O(n)` |

OBJECT METHODS

| OPERATION      | SPEED  |
| -------------- | ------ |
| Object.keys    | `O(n)` |
| Object.values  | `O(n)` |
| Object.entries | `O(n)` |
| hasOwnProperty | `O(1)` |

#### Search for KVP vs. Access

There is a difference

```JS
let obj = { a: "word", b: undefined, c: 7 }

// Access a KVP
console.log(obj["z"]); // undefined, but this KVP does NOT exist
console.log(obj["b"]); // undefined, but this KVP exists

// Search for a KVP
console.log("z" in obj); // false
console.log("b" in obj); // true
```



#### Explanations for Speed

There's a reason why certain operations are slower than others

Access a KVP via key name `O(1)` :

- The computer can check whether a KVP exists in an object immediately
- The object does or doesn't have it, and only 1 thing gets checked

------

Object.keys `O(n)` :

The **`Object.keys()`** method returns  an array of a given object's keys

- If the object we supply on an argument is extremely big, the method takes longer to produce an array
- The relationship between speed and "n" is linearly proportional

```js
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1)); // expected output: Array ["a", "b", "c"]
```

------

Search for an object value without specifying the key `O(n)` :

- In the worst case scenario, your PC may end up having to check each and every KVP inside an object to find a certain value which may or may not exist inside
- The size of the object provided (or "n", as we keep referring to it as), will have a linearly proportional effect on the speed of this operation



### Big O of Arrays

#### Array Operation Speeds

BASICS:

| OPERATION                    | SPEED  |
| ---------------------------- | ------ |
| Access data via index number | `O(1)` |
| Searching through an array   | `O(n)` |

METHODS:

| METHOD                                                   | ACTION                              | SPEED          |
| -------------------------------------------------------- | ----------------------------------- | -------------- |
| push                                                     | Inserts data @ end                  | `O(1)`         |
| unshift                                                  | Inserts data @ start                | `O(n)`         |
| pop                                                      | Removes data @ end                  | `O(1)`         |
| shift                                                    | Removes data @ start                | `O(n)`         |
|                                                          |                                     |                |
| concat                                                   | merges arrays                       | `O(n)`         |
| slice                                                    | cuts out a section and clones       | `O(n)`         |
| splice                                                   | cuts out a section and clones       | `O(n)`         |
| sort                                                     | self explanatory                    | `O(n * log n)` |
| looping methods<br />forEach, map, filter, reduce... etc | loops through an array and does ___ | `O(n)`         |

MORE SCORES: 
https://dev.to/lukocastillo/time-complexity-big-0-for-javascript-array-methods-and-examples-mlg

#### Speed Explanations

The Big O score of any array operation usually has to do with re-indexing or looping

Adding onto the end of an array `O(1)`

- All your PC has to do is add another array entry and give it an index number
- This is very simple/fast, much like inserting a KVP into an object which has no order

------

Adding data to the start of an array `O(n)`

- Doing this messes up all the index numbers for every other entry in that array
  Adjusting them takes time
- The time required to re-index an entire array is linearly proportional to the length of the array in question (aka, "n")

------

Looping through an array with forEach `O(n)`

- The length of the array affects how quick this operation will be (in a linearly proportional way)

------

Sorting Arrays

- Properly sorting array takes longer than it does to simply loop through it
  You must make comparisons, move things around...etc all while looping through an array
- If you look at the complexity tier list, you'll see that logarithmic speeds are less performant than linear speeds

#### Exceptions to these Rules

Don't autopilot and think that every time you see forEach for example, it will always be `O(n)`
Use common sense and consider what situation you're in while coding

EXAMPLE 1: FIXED SIZE ARRAYS

- The speed ratings of all these array methods change if we know an array can only be X entries long for whatever reason

EXAMPLE 2: Use splice to remove data at the end of an array

- We rated splice `O(N)` because it can remove data from anywhere in an array
- If you only use it to remove data at the very end for example, then technically its `O(1)`



# ======== ALGORITHMS ========



# Problem Solving Patterns

COMMON PROBLEM SOLVING PATTERNS (there are plenty more)

![image-20220401061521896](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220401061521896.png)

## Chapter Intro

### 5 General Steps for Problem Solving

EXPLAIN YOUR THOUGHT PROCESS:
Remember, steps 1-3 should be articulated verbally so the interviewer can understand your problem-solving approach

#### 1. Understand the Problem

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220401034029533.png" alt="image-20220401034029533" style="zoom:50%;" />

Example: Build a function that adds numbers together

- Step 2 asks what kinds of inputs go into our function
  Are we using integers only, floating points, extremely large numbers?
- JS sucks at rounding and also adding big  #'s , so it'd be a good idea to ask the interviewer exactly what the inputs will be

#### 2. Explore concrete examples

- This step is an extension of understanding the problem- and should be considered before we even attempt problem solving
- It's essentially just presenting theoretical scenarios for the algorithm you're building and asking the interviewer questions to perfectly understand what your output should be

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220401035118483.png" alt="image-20220401035118483" style="zoom:50%;" />

EXAMPLE:
![image-20220401035150844](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220401035150844.png)

Questions I should ask...

1. Should the output include KVP's for every letter? Even the ones not part of the input?
   If so, that'd make the way to our solution easier
2. Do we separate capitals and lower cases?
3. Do we count spaces as a character?
4. What about numbers and symbols?

Considering empty and invalid inputs

1. What if someone passes in nothing or an empty string to charCount?
2. What if someone supplies an object as a parameter?
   Should we return an empty object? Undefined/null?

#### 3. Break the challenge down

1. Take your problem and verbally explain to the interviewer how you intend to solve it
2. Write pseudocode as well as you go

- Sometimes you can squeeze a hint out of the interviewer if you ask correctly
- "I'll do this, that and this to accomplish this.  That could work...right? ;)"

EXAMPLE:
![image-20220401035150844](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220401035150844.png)

Pseudocode below
![image-20220401050253578](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220401050253578.png)

BONUS PERK!
This step demonstrates competence to the interviewer

- Even if you run out of time and don't finish, they can see you formulated an approach and would be able to complete the task with more time
- People often land jobs without acing every interview problem because of this
- Some interviewers deliberately asks exceptionally tough questions with minimal time to see how you respond to pressure

#### 4. Solve / Simplify

Solve the problem if you can- and solve a simpler problem if you cannot

WHAT I MEAN:
If you're able to solve a problem, that's great- but you still want to deliver something even if you can't
There may be 1 or 2 steps that prevent you from solving a problem

- Code a solution up to that point, then work around your inability to finish using hardcoded values or something (leave the part you can't do and move on past it, then nail the rest)
- Point out the fact that IRL, you'd probably google search how to do that certain thing

BENEFITS:

- If you can deliver an answer with that workaround, it looks a lot better than if you froze up on that problem and delivered nothing (you may still land a job this way)
- Perhaps later on as you solve the rest of the problem, you'll understand what needs to be done for that step you left open

#### 5. Refactor

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220401060240344.png" alt="image-20220401060240344" style="zoom:50%;" />



### Patterns: Use-cases + Gameplans

#### Use Cases

|                      | Use for...                                                   | Time Complexity |
| -------------------- | ------------------------------------------------------------ | --------------- |
| Frequency Counter    | Anagram creation<br />Comparing 2 different data structures  | `O(n)`          |
| Multiple Pointers ** | Linear structures like arrays, strings, singly/doubly linked lists.<br />Search for a pair of values or something that meets a condition | `O(n)`          |
| Sliding Window       | structured data set like a string or array<br/>You can find continuous subsets of data using it <br />(Ex. subarrays or substrings) | `O(n)`          |

MULTIPLE POINTERS LIMITATION:
Certain patterns only work when a data set like an array is sorted (namely Multiple Pointers)
If the one you receive as an argument is not sorted, try sorting it yourself then proceeding



## Frequency Counter Pattern

### Standard

The frequency counter pattern is not an officially named strategy
Colt Steele came up with it himself, so keep that in mind when googling it

USE-CASE:

1. Anagrams (rearrange letters in 1 phrase to form another)
2. When we have multiple pieces of data and need to compare them

#### General Gameplan

MAKE FREQUENCY OBJECTS VIA SEQUENTIAL LOOPS

1. Loop over data structure 1 to create a frequency object
2. Do the same for structure 2, but think carefully if that's required (save performance if you can skip)

TEST CONDITIONS IN A LOOP

3. Loop over one of your frequency objects and test for your condition on frequency object 2, or the untampered data structure 2

- While testing for a condition, find a way to reference the frequency object and entity 2 in a performant way (usually bracket notation on both)
- You should be able to avoid nested loops and stick to sequential ones this whole time

#### Challenge 1: Frequency Counter

Write a function called same() which should accept 2 array inputs

- Must check if array 2 is the same as array 1, but with all entry values squared
- If there are repeated numbers in array 1, there must be repeated squared values in array 2
  What we refer to as "frequency" in the img below

![image-20220401153519553](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220401153519553.png)



#### Naïve Solution

- This solution works, but requires nested looping since it includes a for loop + indexOf, a JS method that loops through each array entry
- This fact makes the Big O score `O(n^2)`, which isn't very performant 
  Frequency counter pattern has a better score of `O(n)` 

```js
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    // See if the value in arr1 exists in arr2 but squared
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;

    // Remove that value from R2  so we dpn't consider repeats
    arr2.splice(correctIndex, 1);
  }
  // If that loop never returns a false, our conditions are met
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4]);
```

#### Pattern Solution

```js
// If this function returns false at any point, the conditions are not met
function same(arr1, arr2) {
  // If the array sizes are different, then auto fail the function
  if (arr1.length !== arr2.length) return false;
  
  // Store both array's values as keys in an object
  // Count how many times they appear as well (increment the count or start @ 0)
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  for (let val of arr2) frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
 
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    // Check to see if counter1's keys squared exist in counter2
    // Ex. counter1 = { 2: __ }, counter2 = { 4: __ }
    if (!(key ** 2 in frequencyCounter2)) return false;
    // Next, see if the values for both match up (# in arr1 )
    // If value 5 exists in arr1 twice, then value 16 better be in arr2 twice
    // Ex. counter1 = { 2: 5 }, counter2 = { 4: 5 }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }
  return true;
}

console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])); // false
onsole.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 25])); // true
```

![image-20220401184034873](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220401184034873.png) ![image-20220401184131412](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220401184131412.png)

ANALYSIS AND PREMISE

The Big O score for this solution is `O(n)` since we only use for loops (no nested for loops)

- We turn each array input into an object, which we know has relatively fast operation speeds
- Instead of running nested loops, we run a single loop `O(n)` ...
  where we search for KVP's in the second frequency counter object `O(1)` 

### Frequency De-counter

#### Challenge Description

- Create a function that accepts 2 string inputs and returns a Boolean telling us whether the 2 strings are valid anagrams or not
- Assume strings contain lowercase letters, spaces, and tabs only

![image-20220401195913988](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220401195913988.png)

#### Best Solution: Frequency De-counter O(2n)

Technically our second solution is acceptable, due to it being `O(n)` just like this one
However, we can squeeze additional performance by using only 2 loops instead of 3

- Only create 1 frequency counter object (`obj1`)
- Loop over the second string and subtract numbers from `obj1` until one of the frequency counters in there hits 0

```js
function validAnagram(str1, str2) {
  // If the string lengths are not equal, fail the function
  if (str1.length !== str2.length) return false;
  // Create a frequency object for string1 only
  const obj1 = {};
  for (let char of str1) char in obj1 ? obj1[char]++ : (obj1[char] = 1);
  
  // Loop through str2. 
  // Every time a character is encountered, subtract 1 from that KVP in obj1
  // If any of the KVP totals = 0, or that KVP does not exist, fail the function
  for (let char of str2) {
    if (!obj1[char]) return false; // end f() if KVP does not exist or value===0
    else obj1[char]--; // increment down if the KVP has a value of 1 or more
  }
  return true;
}
console.log(validAnagram("anagram", "nagaram")); 
// obj1 @ start... { n: 1, a: 3, g: 1, r: 1, m: 2 }
// As we loop through string2 ... 
// n -> { n: 0, a: 3, g: 1, r: 1, m: 2 } subtract 1 from n kvp
// a -> { n: 0, a: 2, g: 1, r: 1, m: 2 } subtract 1 from a kvp  ... etc
```

ANSWER: true			![image-20220401221803332](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220401221803332.png)

#### Ok Solution: Frequency Counter O(3n)

`O(n)`... or `O(3n)` if we're being really technical

```js
function validAnagram(str1, str2) {
  // If string1 and 2 are different lengths, fail the function immediately
  if (str1.length !== str2.length) return false;

  // Turn strings 1 and 2 into an object each
  // KEYS: characters that appear. VALUES: # of appearances per character (frequency)
  const obj1 = {};
  const obj2 = {};
  // If KVP exists already: increment counter up by 1. If not, start counter @ 1
  for (let char of str1) char in obj1 ? obj1[char]++ : obj1[char] = 1
  for (let char of str2) char in obj2 ? obj2[char]++ : obj2[char] = 1
 
  console.log(obj1);
  console.log(obj2);
  
  // Loop over object 1 and see if obj 2 is essentially the exact same
  // End function if one KVP does not match
  for (let characterKey in obj1) {
    if (obj1[characterKey] !== obj2[characterKey]) return false;
  }
  return true;
}
```

TESTS:

```JS
console.log(validAnagram("", "")); // ANSWER: true
console.log(validAnagram("aaz", "zza")); // ANSWER: false
console.log(validAnagram("anagram", "nagaram")); // ANSWER: true

console.log(validAnagram("rat", "car")); // ANSWER: false
console.log(validAnagram("awesome", "awesom")); // ANSWER: false
console.log(validAnagram("qwerty", "qeywrt")); // ANSWER: true

console.log(validAnagram("texttwisttime", "timetwisttext")); // ANSWER: true
console.log(validAnagram("  ", "  ")); // ANSWER: true
console.log(validAnagram("  ", " ")); // ANSWER: false
```

![image-20220401200303622](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220401200303622.png) ![image-20220401200322487](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220401200322487.png)

![image-20220401200335051](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220401200335051.png)





## Multiple Pointers Pattern

### Standard

USE-CASES:

- Use on linear structures like arrays, strings, singly/doubly linked lists... etc
- We're going to search for a pair of values or something that meets a condition

#### General Gameplan

1. If dealing with arrays, make sure they're ordered (do yourself if they aren't)
2. Decide where to put your pointers to test a certain condition
   Use pen and paper to visualize your thought process

WHILE LOGIC

1. Decide what happens when a condition is met, and when it isn't
2. Determine when the while loop should end
3. Program an out when the function should succeed or fail (return something)

#### Challenge 1 Description

Create a function that accepts an array of numbers sorted from lowest numbers first to highest last
See if any 2 pairs of numbers add up to 0

CONCRETE EXAMPLE:

```JS
sumZero([-4, -3, -2, -1, 0, 1, 2, 4]); // should return [-4,4]
```

FYI: 
If the arrays were not sorted, we wouldn't have any way to do this efficiently
We'd resort to our naïve solution with a score of `O(n^2)`

#### Naïve Solution

> Time Complexity: O(n^2)
> Space Complexity: O(1)

We use nested loops to run through the same array twice
I've visualized the operations it will go through in the image below our code

```js
function sumZero(arr) {
  // Loop through each value of the array
  for (let i = 0; i < arr.length; i++) {
    // Loop through the same array again, but one index # ahead
    // See if any future value added to "i" has a zero sum
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]]; // success!
    }
  }
  return undefined; // if we find no pairs with a zero sum
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 4, 9])); // ANSWER: [-4,4]
```

![image-20220401234440335](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220401234440335.png)

As you can see, the array length has an exponential influence on the number of operations

#### Pattern Explained

> Time Complexity: O(n)
> Space Complexity: O(1)

PROCEDURE:

1. Create 2 starting pointers for your array - one at the very start and end

2. Get the sum of the 2 pointers and move a pointer depending on what the sum is

IF SUM IS POSITIVE:
There may still be a match left for the left pointer
Move the right pointer closer to center

IF THE SUM IS NEGATIVE:
There's no chance the left pointer has a match left
Move the left pointer closer to center

IF SUM IS ZERO:
The function has succeeded in finding a pair. 
Return the 2 numbers with a zero sum. Ex. [-4,4]. `SUCCESS!`

3. If the left pointer is ever larger than the right pointer, then the ordered array has no pairs with a zero-sum (return undefined to indicate `FAILURE`)

![image-20220402001245025](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220402001245025.png)

#### Pattern Solution

```JS
function sumZero(arr) {
  //  Set 2 pointers. 1 @ start and 1 @ end
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  // Add the 2 markers then shift them depending on whether the sum in + or -
  // If the sum is zero, then the endeavor is a success
  while (arr[leftIndex] < arr[rightIndex]) {
    let sum = arr[leftIndex] + arr[rightIndex]; // 0 + or -
    // If sum is positive, move the right marker closer to center (further left)
    if (sum > 0) rightIndex--;
    // If sum is negative, move the left marker closer to center (further right)
    else if (sum < 0) leftIndex++;
    // If sum equals 0, return the matching array entries
    else return [arr[leftIndex], arr[rightIndex]]; // SUCCESS
  }
  return undefined; // FAILURE
}

console.log(sumZero([-4, 2, 4, 6, 9, 20, 99])); // ANSWER: [-4,4]
```



### 2 Counters on same side

We don't always need to place our counters at opposing ends of our structure

- Know that you can place your 2 markers at any points in the array while using this pattern
- Placing both on one side is what we'll be exploring in this lesson

#### Challenge 1 Description

Create function called count unique values that accepts one array containing sorted numbers
Have it return the number of unique numbers in that array

![image-20220402031909578](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220402031909578.png)

#### Pattern Solution

GAMEPLAN: (read comments)

```js
function countUniqueValues(arr) {
  // If the array is empty, return 0 unique #'s
  if (arr.length === 0) return 0;
  // If the array has length 1 or more, then it must have at least 1 unique number
  let uniques = 1;
  //  Set 2 pointers. 1 @ starting index, and 1 @ the 2nd
  let pointer1Index = 0;
  let pointer2Index = 1;
  // Perform a check
  // See if pointer1's array value === pointer2's array value
  while (pointer2Index <= arr.length - 1) {
    // If they equal, then pointer2's value ISN'T unique
    if (arr[pointer1Index] === arr[pointer2Index]) {
      pointer2Index++; // move pointer2 one entry further down the array
    }
    // If they don't equal, then pointer2's value IS unique
    else {
      uniques++; // add to the unique value counter
      pointer1Index = pointer2Index; // move pointer1 up to pointer2's spot
      pointer2Index++; // move pointer2 one entry further down the array
    }
  } // End the while loop after pointer2 reaches the final index #
  console.log(uniques);
  return uniques;
}; // RETURNS ALL CORRECT ANSWERS FROM IMG
```

#### Challenge 2

Create a function called `areThereDuplicates` that accepts an unspecified number of arguments that are allowed to not be ordered. Return a Boolean telling us if duplicates exist inside

![image-20220402100316018](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220402100316018.png)

APPROACH:

1. Multiple pointers pattern requires a sorted dataset (the inputs provided are not)
   Sort the arguments yourself
2. Place 2 pointers on the left of the array (index 0 and 1)
3. Check for a match between the 2 pointers

- If you match, the function succeeds and should return true (duplicate found!)
- If it's not a match, then shift both pointer up by 1 then check for equality again
- End this loop once pointer 2 reaches the array's end

SOLUTION:

```JS
function areThereDuplicates() {
  // Place the function arguments into an array
  let args = [];
  for (let key in arguments) args.push(arguments[key]);
  if (args.length === 1) return false; // return false if arr.length === 1
    
  // Sort the array depending on the type of array values (letter or number)
  // Go from smallest to largest for either numbers or letters. Ex. "a" < "b"
  let sortedArgs;
  if (typeof args[0] === "number") {
    sortedArgs = args.sort((num1, num2) => num1 - num2); // numeric sorting
  } else if (typeof args[0] === "string") {
    sortedArgs = args.sort((a, b) => {
      if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    }); // alphabetical sorting
  }

  // Place 2 pointers on left side (index 0 and 1)
  let pointer1 = 0;
  let pointer2 = 1; // will be shifting both pointers to the right
  
  // Loop over the array of args and finish when pointer2 reaches the array end
  while (pointer2 < sortedArgs.length) {
    // Condition: pointer1ArrayVal === pointer2ArrayVal.
    // If condition is met, return true (success)
    if (sortedArgs[pointer1] === sortedArgs[pointer2]) return true;
    // If the condition is not met, shift the pointers to the right
    pointer1++;
    pointer2++;
  }
  return false; // return false to indicate failure after the loop ends
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
```



### Counters on Different Data Sets

This variant helps us deal with challenges where we must test for a condition against 2 or more pieces of data

#### Challenge Description

Create a function that accepts 2 strings and returns a Boolean telling us whether the characters that make up string1 appear in string2

- The letters must appear in the same order they exist in string1
- They are allowed to be split apart and separated by other characters, as long as order is maintained

![image-20220404103137214](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220404103137214.png)

#### Pattern Solution

```JS
function isSubsequence(string1, string2) {
  // Set a pointer at the beginning strings 1 & 2
  // They each point to a string character (p1Char, p2Char)
  let p1 = 0; // for string1
  let p2 = 0; // for string2
  let matches = 0;  
  // counts how many chars from string1 got matched in string2 (in sequence)

  // End loop when either pointer tries to move beyond the length of their string
  while (p2 < string2.length && p1 < string1.length) {
    // Logic: Check if p1Char === p2Char
    let letterMatch = string1[p1] === string2[p2];
    // If equal, move p2 and p1 further down their strings and add 1 to matches var
    if (letterMatch) { matches++; p1++; p2++; } 
    // If not equal, move p1 further down string2
    else p2++; 
     
    // End the function successfully if the entirety of string1 is matched
    if (matches === string1.length) return true; // SUCCESS
  }
  // If the while loop gets exited, that means we could not accrue enough matches
  return false; // FAILURE
}
```

WHILE LOGIC
Our while loop allows us to create a loop with extremely customizable end conditions

- The pointer for string1 never moves forward unless we get a match
- The pointer for string2 moves forward when we get a match, and when we don't
- The loop ends when either pointer attempts to advance too far forward

## Sliding Window Pattern

### Standard Slide

USE CASE:
This pattern is useful for when we have a structured data set like a string or array
You can find continuous clumps/subsets of data using it (Ex. subarrays or substrings)

#### General Gameplan

INITIAL SETUP

0. Consider ordering the array
   It might help you solve your problem

1. Create variables to keep track of...
   a) Current window score (CWS)
   b) Best window score up till now (BWS)
   The window scores can be based on anything- longest substring, added subarray entry total...etc

2. Create 2 pointers that construct the initial window using index values

3. Calculate the CWS for the initial window, then make the BWS equal to it as well 
   (first score has to be the best this early-on)

WHILE LOGIC

4. Move the pointers forward to make the "window" slide
   Adjust the CWS and BWS as you slide
5. Force the while loop to end once pointer 2 reaches the end of the data set
6. End the function by submitting your BWS

#### Challenge Description

![image-20220402042212173](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220402042212173.png)

#### Naïve Solution

> Time Complexity: O(n^2)

We loop through the input array twice

- Once to loop through the input array, then another nested loop inside the first in order to calculate each new window sum
- We constantly recalculate new window sums with this strat
  [1,2,5], then  [2,5,2], then [5,2,8]... etc

```js
function maxSubarraySum2(arr, num) {
  if (num > arr.length) return null;
  
  var max = -Infinity; // start at lowet possible #
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    // Add up the next few values to get the window sum
    for (let j = 0; j < num; j++) temp += arr[i + j];
    if (temp > max)  max = temp;
    
  }
  return max;
}
```

#### Pattern Solution

> Time complexity: O(n)

![image-20220402073840852](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220402073840852.png)

TLDR:
In our pattern solution, we only calculate 1 window sum, then readjust it as the window slides
This eliminates the need for nested looping

Pattern Code

```js
function maxSubArraySum(arr, windowLength) {
  // If the array length is too short, return null
  if (arr.length < windowLength) return null;
  // If array length is 3, return sum of every entry

  // Keep track of the currentSum and peakSum (CWS/BWS)
  let currentSum, peakSum;
  // Set 2 pointers to build a window
  let p1 = 0;
  let p2 = windowLength - 1;
  // Calc initial window sum (set current/peakSum equal to this @ start)
  currentSum = peakSum = arr
    .slice(p1, windowLength) // ◐
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  // Create a while loop that ends when pointer2 reaches the array's end
  while (p2 < arr.length - 1) {
    p1++; // slide window forward
    p2++;
    // Adjust the window sum: (add new val) and (subtract val left behind)
    currentSum = currentSum + arr[p2] - arr[p1 - 1];
    // Save whichever's bigger: peakSum or currentSum
    peakSum = Math.max(peakSum, currentSum);
  }
  return peakSum; // after loop ends, return what the largest subArray sum was
}
```



### Expand and Contract P1

Some challenges may require you to enlarge/shorten the window instead of sliding it

REMEMBER:
The amount you expand and contract will depend on the question

#### Challenge

> Create a function that accepts an array and an integer
>
> The function must return the minimum length of a contiguous subarray
> Its values add up to a sum that matches or exceeds the integer. 
> If none is found, return 0

Understanding the problem

- If you find one subarray solution, you must check to see if any shorter array solutions exist
- Remember, contiguous means that the subarray's index numbers must be sequential
  Ex. For [1,2,3], [1,2] counts as a contiguous subarray while [1,3] does not

QUESTION AND ANSWER KEY

```js
minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 b/c [4,3]
minSubArrayLen([2, 1, 6, 5, 4], 9)); //* / 2 b/c [5,4]

minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 b/c [62]
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2 b/c [3,8]

minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3 b/c [4,16,22]
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5 b/c [16,22,12,8]

minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0
minSubArrayLen([1, 1, 1, 1, 1], 5); // 5
```

Look the 4th test
We can see 1 subarray solution could be [4,3,3,8], but [3,8] gets the job done and is shorter

#### Solution

```js
function minSubArrayLen(arr, target) {
  // EDGE CASES:
  // 1 value is enough to match/exceed target
  if (arr.some((v) => v >= target)) return 1; // SUCCESS
  // Array only contains 1 value
  if (arr.length === 1) return 0; // by now we know that num ain't high enough
  // Start minLen at infinity since we want to save thr lowest b/t 2 options
  let minLen = Infinity; // choose the lowest b/t 2 options when updating this
  // Variables associated with window:
  let pointer1 = 0;
  let pointer2 = 1;
  let windowSize = 2;
  let windowSum = arr[0] + arr[1]; // will get updated
  

  // End while loop when pointer 2 advances too far
  while (pointer2 < arr.length) {
    // IF SUM MEETS TARGET
    if (windowSum >= target) {
      // Save current windowSize to minLen (if it's smaller than what's saved now)
      minLen = Math.min(minLen, windowSize);
      // Shrink the window by pushing p1 right, and update windowSum
      pointer1++;
      windowSize--;
      windowSum = windowSum - arr[pointer1 - 1];
    }
    // IF SUM IS TOO LOW
    else if (windowSum < target) {
      // Expand the window by pushing p2 right, and update windowSum
      pointer2++;
      windowSize++;
      windowSum = windowSum + arr[pointer2];
    }
  }
  return minLen === Infinity ? 0 : minLen; // if minLen = infinity still, return 0
}
```

#### Solution Explained

SETUP:

- Handle edge cases like receiving a 1 entry array
- Set pointers, a `windowSize` variable, and a `minLen` variable we'll update each time we find any solution 
- Run a while loop that ends when pointer2 leaves the array

IF `windowSum` MEETS THE TARGET

1. Save current `windowSize` to `minLen`, but only if it is smaller than the value saved there already

2. Shrink the window by pushing `pointer1` to the right (look for better solutions)
3. Update all variables associated with the window (pointer, windowSize, windowSum)

IF `windowSum` DOES NOT MEET THE TARGET

1. Enlarge the window by pushing pointer2 to the right
2. Update all variables associated with the window (pointer, windowSize, windowSum)

#### Solution Visualized

COLOR SCHEME:
Each time we used an orange line, the `windowSum` met our target
We save the `windowSize` to `minLen` if it's smaller than the value already saved there

EXPANDING AND CONTRACTING:
Every time our target (11) was not met (indicated by a blue line), the window expands
Every time our target (11) was met (indicated by an orange line), the window contracts

![image-20220408012110211](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220408012110211.png)

![image-20220408011540608](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220408011540608.png)



## Divide and Conquer Pattern (Preview)

This lesson will introduce the concept of dividing and conquering without a coding challenge

- The reason reason because of how many ways exist to use the Divide and Conquer pattern
- Most often you'll see it used during some more complicated challenges
  Quick sorting, merge sorting, binary searches...etc

#### Premise

Take a larger set of data (usually an array, string,list, or tree), and look through it for something.

- Looping through a dataset like that has a Big O score of `O(n)`
- In some cases, Divide and Conquer can lower this to `O(log n)` which is much better

![image-20220331074733523](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220331074733523.png)

#### How it Works in General

> Watch starting at bookmarked time:
> https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11183956#notes



# Recursion



### Recursion Demystified

- Recursion is an efficient way to problems, and is often used in situations where we don't know how many iterations there will be
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
    console.log(`rescursive call ${counter}`); //log a msg
    counter++; // increment our optional counter
    
    fill.push(dragon(arg[0])) // push "even" or "odd" to the fill array
    arr.shift()             // remove first value of our starting array
    return boy(arr)			// call this ƒ() again!
}

boy(arr)
console.log(orig, fill)
```

![image-20210624132714819](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210624132714819.png)



#### Example 2: Replace for loops

Lets make a function that adds up the sum of all numbers leading to the specified value 
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

> I put "no solution" in quotes because sometimes recursive looping past a certain point is expected, and you have a preset return value for it

EXAMPLE: Cash Register Project in FCC

- If we did not have adequate change, the recursive ƒ() we built would loop forever
- However, we had a default output specified for us in the problem description in case we didn't have enough money for exact change



### The Call Stack

#### Explanation

![image-20220402210243233](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220402210243233.png)

BASIC LOGIC:
Think about a stack of papers. 

- To add more sheets to the paper stack, place them on top
- To remove a piece of paper, you do so from the top as well

APPLY LOGIC TO JS:
The JS callstack operates similarly

-  New function calls get placed on top of the call stack
- When a function ends or returns something, it gets knocked off the top of the call stack

#### Dev tools Example 1

INSTRUCTIONS:

1. Take this example, place a breakpoint on takeShower() inside of the wakeUp() function
2. Step through 1 at a time while paying attention to the callstack section on the right

At start:			 ![image-20220402211821974](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220402211821974.png)

------

Think about the thread of execution for the wakeUp function

1. Call `takeShower()`
2. Call `eatBreakfast()` which calls `cookFood()` before it resolves

Call stack walkthrough

![image-20220402212938277](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220402212938277.png)

CODE:

```JS
function takeShower() => "Showering!"

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
}
function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log("Ok ready to go to work!");
}

wakeUp();
```

#### Dev Tools Example 2 

This function uses recursion to count downward to integer 1 and adds all the numbers it encounters

- Pay attention to the callstack during each recursion iteration
- You'll notice the callstack getting filled with the same function multiple times- but with different local variable values (namely num, which is what gets changed per iteration)

Written with for loop:

```js
function sumRangeIterable(num) {
  let sum = 0;
  // Iterate i down to 1, while adding each i value to the sum
  for (let i = num; i > 0; i = i - 1) sum = sum + i; 
  return sum;
}
```

Written with recursion:

```js
function sumRange(num) {
  if (num === 1) return 1; // base case for recursion to end
  const val = num + sumRange(num - 1);
  return val;
}
console.log(sumRange(8)); // 10
```

This function returns...

> sumRange(4) = 4 + sumRange(3)
> sumRange(3) = 3 + sumRange(2)
> sumRange(2) = 2 + sumRange(1)
> sumRange(1) = 1
>
> Overall... this works out to 4 + 3 + 2 + 1 = 10

#### Example 2 Call stack Showcase

Lets set a breakpoint on the sumRange() function call then see what appears in the dev tools

![image-20220402234933851](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220402234933851.png) ![image-20220402235021763](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220402235021763.png)

NOTICE ITERATIONS IN THE CALLSTACK:
The callstack shows 3 iterations of the sumRange function

- The reason it doesn't show 4 is because the logic never reaches the breakpint when num = 1
- Each iteration has different values for the local variables (which makes sense since the values get changed per each iteration)

​					![image-20220402235250957](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220402235250957.png) ![image-20220402235324116](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220402235324116.png) ![image-20220402235342217](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220402235342217.png)

NOTICE THE RETURN VALUE
In this case, the return value for each recursive iteration is stored in a variable called `val`

- If you pay attention, you'll see the last image contains a val with a value of 3 
  The others are unitialized
- If you continue stepping through each iteration, you'll see different sumRange calls get knocked off the stack

> ![image-20220402235930236](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220402235930236.png)
>
> sumRange #1 is waiting on the return value of sumRange #2 ...
> sumRange #2 is waiting on the return value of sumRange #3



### 3 Variants of Recursion

CHALLENGE: Create a recursive factorial function 

> !4 = 4 * 3 * 2 * 1 = 24

#### Variant A: Global Mutation Recursion

Use global variable to hold the final answer being calculated

```js
let answer = 1; // will get mutated inside the recursive function
function factorial(num) {
  if (num === 0) return answer; // base case
  answer = answer * num; // multiply the answer variable with the current num
  num--; // lower the num value by 1
  return factorial(num); // call f() over again
}
console.log(factorial(4)); // 24
```

#### Variant B: Helper Method Recursion (fave)

This solution is near identical to solution 1, but we refrain from using global variables

- Instead we create/call a recursive function inside a regular function
- That regular function contains our would-be global variable so we don't pollute the global space

```js
function outer(num) {
  let answer = 1; // will get mutated inside the recursive function
  function factorial(num) {
    if (num === 0) return; // base case
    answer = answer * num; // multiply the answer variable with the current num
    num--; // lower the num value by 1
    return factorial(num); // call f() over again
  }
  factorial(num)
  return answer;
}
console.log(outer(4)); // 24
```

This method's easy to understand/read, and does not mutate any global variables
That's why it's my favorite

#### Variant C: Tail Recursion 

- This form of recursion is self-contained and does not require outer functions or global variables
- It's tougher to understand, but is better in terms of performance and memory allocation

I'm dedicating a full lesson for this kind

### Pure Recursion

Tail recursion is a less-readable, but more optimized way for devs to program recursively

#### Understanding Factorials

HOW TAIL RECURSION DIFFERS:

You've coded factorial functions using recursion before
For example, look at your solution with helper method recursion

```js
function outer(num) {
  let answer = 1; // will get mutated inside the recursive function
  function factorial(num) {
    if (num === 0) return; // base case
    answer = answer * num; // multiply the answer variable with the current num
    num--; // lower the num value by 1
    return factorial(num); // call f() over again
  }
  factorial(num)
  return answer;
}
console.log(outer(4)); // 24
```

Your recursive base case depends on the num variable decreasing from 4 until 0
But what if we didn't end our recursive function based on that?

LOOKING AT FACTORIALS RECURSIVELY

```
factorial_4 = 4 * 3 * 2 * 1		so...		factorial_4 = 4 * factorial_3
factorial_3 = 3 * 2 * 1			so...		factorial_3 = 3 * factorial_2
factorial_2 = 2 * 1				so...		factorial_2 = 2 * factorial_1
factorial_1 = 1					so...		factorial_1 = 1 
```

#### Factorials with Pure Recursion

Instead of updating a variable, we're going to daisy-chain recursive calls on our return line

```js
function pureRecursive(num) {
  // BASE CASE: if num reaches 1
  if (num === 1) {
    console.log(num);
    return num * 1;
  }
  console.log(num);
  return num * pureRecursive(num - 1);
}
console.log(pureRecursive(4));

```

![image-20220414052155360](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220414052155360.png)

HOW PURE RECURSION WORKS
You would think that our final return would be 1, because of the snipper below, but you'd be wrong

```js
  if (num === 1) {
    console.log(num); // 1
    return num * 1; // 1 * 1 = 1
  }
```

We return a recursive call at the end of our function

- The 1st return will call `pureRecursive(4-1)`
- The 2nd return will call `pureRecursive(3-1)`
- The 3rd return will call `pureRecursive(2-1)`      
- The 4th return will return 1 * 1                  (4 functions on call stack by now)

Now the callstack will begin knocking some items off

- This is because the chain of recursive calls will eventually reach one that resolves without calling the function again- thanks to the base case we coded in that returns `num * 1`
- The 4th function on the stack gets resolved, then the 3rd will, then the 2nd, then 1st
  It all ends with our answer of 24

![image-20220414053024362](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220414053024362.png)

#### Pure Recursion with Accumulators

We can choose to preserve values using function parameters instead of variables
Take this example where we reverse a string using pure recursion

```js
function pureReversal(str, offset = 0, acc = '') {
  // BASE CASE: when our accumulator reaches the length of the original string
  if ((acc.length === str.length)) return acc;
  // Add the current character to the accumulator
  acc = acc + str[str.length - 1 - offset];
  // Call recursive function again with a higher offset to mimic inrementation
  return pureReversal(str, offset + 1, acc);
}
console.log(pureReversal('skydome')); // emodyks
```



### Flattening

Some questions will ask you to flatten nested arrays and objects.
Use recursion to create a new object/array using the spread operator

#### Flatten an array

CHALLENGE: 
Take an array with many nested arrays as entry values and flatten it

APPROACH:
Create a new array and pass values into it via recursion
Detect if an original array entry is an array. 
If so, use recursion to loop again with a modified original array (one with the array entry spread out)

```js
function flatten(arr) {
  let flattened = [];
  function recursive(arr) {
    // BASE CASE: When arr reaches a size of 0
    if (arr.length === 0) return;
    // Check the type of arr's last entry value
    let entry = arr[arr.length - 1];
    let entryType = typeof entry;

    // IF ENTRY IS AN ARRAY...
    // Loop again using the same array, but with a spread version of that entry
    if (entryType === "object") {
      let revisedArray = [...arr.slice(0, arr.length - 1), ...entry];
      // [ cloned arr with last entry removed, spread version of last entry]
      return recursive(revisedArray);
    }

    // IF ENTRY IS A NUMBER
    flattened.unshift(entry); // Put that value into flattened
    arr.pop(); // remove it from arr,
    return recursive(arr); // then loop again
  }
  recursive(arr);
  return flattened;
}
console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
```



#### Flatten an Object

> CHALLENGE:
> Create a function that returns the sum of all even numbers in an object
> The object contain nested values - possibly many deeply nested ones with repeated key names
>
> APPROACH: (regarding the spreading of object entries)
> Detect whether an object value equals an object
> If it is → preserve the object value → delete that kvp → reintroduce a spread out version to the obj
>
> We have other things to do if the entry value is not an object, but that isn't the point of this subsection

CODE:

```js
function collectStrings(obj){
  let stringVals = []; // contains kvp's with numeric values

  const recursive = (obj) => {
    let keys = Object.keys(obj); // array of all keys in object
    if (keys.length === 0) return; // Base case: end when orig object becomes empty

    // PRESERVE KEY NAME, VALUE, AND TYPE
    let keyName = keys[0];
    let keyValue = obj[keys[0]];
    let keyValueType = typeof obj[keys[0]];

    // IF AN OBJECT: Run loop again with a the spread version of the object KVP
    // THIS IF BLOCK CONTAINS THE UNFLATTENING PART
    if (keyValueType === "object") {
      delete obj[keyName]; // delete the old unspread KVP
      obj = { ...obj, ...keyValue }; // spread out the entries in the kvp object
      // ^^ above line must come AFTER the kvp delete 
      // or else duplicate key names with numeric values get deleted
      return recursive(obj);
    }
    // IF NOT AN OBJECT:
    // push entry to stringVals array, but only if it's an even number
    if (keyValueType === "number" && keyValue % 2 === 0) {
      stringVals = stringVals + keyValue;
    }
    // Delete KVP from orig object (whether it was an even number or not)
    delete obj[keyName];
    return recursive(obj);
  };
  recursive(obj);
  return stringVals;
}
```

TESTING

```JS
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
```



### JS: Object drilling via Recursion

Some challenges will require you to drill deep into nested objects or arrays and make changes- and recursion is a very useful tool for doing so

#### Challenge

Stringify every numeric value in this array- even if they are deeply nested

```js
let obj = {
  num: 1,
  data: {
    val: 4, // "4"
    info: {
      isRight: true,
      random: 66, // "66"
    },
  },
  test: [],
};
// should become the exact same object, but with all numbers as strings instead
```

#### Approach

In this type of problem, our base case will be the end of a for loop- which is unique since we've typically resorted to if conditions so far

1. Loop over the object parameter using for in
2. Check the key value type during each loop
3. If the value is an object, call the recursive function again using the nested object as a parameter

- The rest of the for loop will run normally, once the callstack resolves new iterations of `stringifyNumbers`
- Recursion will take care of all deeply nested objects and values

#### Solution

It's best to analyze this solution using the dev tools to place breakpoints and examine the callstack and certain block variables per loop

```js
function stringifyNumbers(obj) {
  var newObj = {};
  // BASE CASE: end of for loop
  for (var key in obj) {
    let keyValue = obj[key];
    console.log(keyValue);
    let objectValueType = typeof keyValue === "object" && !Array.isArray(keyValue); 
    // If keyValue is a number, stringify it then add to newObj
    if (typeof keyValue === "number") newObj[key] = keyValue.toString();
    // If keyValue is a nested object, force another recursive loop for it
    else if (objectValueType) newObj[key] = stringifyNumbers(keyValue);
    // If key value is not an object, add it to newObj (arrays, strings...whatever)
    else newObj[key] = obj[key];
  }
  return newObj;
}
```

Look into the callstack:

![image-20220407061439743](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220407061439743.png)

### More Challenging Problems

Steamroller

OBJECTIVE: 		[FCC Link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller)
Flatten an array filled with nested arrays without the dedicated flat method

```
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"]
```

SOLUTION:

```js
function flatten(arr) {
  let flattened = [];
  let counter = 0;
  function recursive(arr) {
    counter++;
    if (counter > 100) return;
    // BASE CASE: When arr reaches a size of 0
    if (arr.length === 0) return;
    // Check the type of arr's last entry value
    let entry = arr[arr.length - 1];
    let entryType = typeof entry;

    // IF ENTRY IS AN ARRAY...
    // Loop again using the same array, but with a spread version of that entry
    if (entryType === "object") {
      let revisedArray = [...arr.slice(0, arr.length - 1), ...entry];
      // [ cloned arr with last entry removed, spread version of last entry]
      return recursive(revisedArray);
    }

    // IF ENTRY IS A NUMBER
    flattened.unshift(entry); // Put that value into flattened
    arr.pop(); // remove it from arr,
    return recursive(arr); // then loop again
  }
  recursive(arr);
  return flattened;
}
console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
```



# Searching Algorithms

SEARCH ALGORITHMS WE LEARN IN THIS CHAPTER

> 1. Linear search
> 2. Binary search
> 3. Naïve string search
> 4. KMP string search



### Linear Search

#### What is a Linear Search?

Linear search is when we look through an array one element at a time

- Many built-in JS methods do this already: `indexOf, includes, find, findIndex`... etc
- They have the capability to start scanning from the left or right side of an array

EXAMPLE: 
Searching for the name "Ron" requires you to inspect a total of 4 array entries here

```js
const arr = ['Peter', "James", "Severus", "Ron"]
```

#### Challenge

Write your own linear search function that accepts an array, and a numeric value as parameters

- Return the index in the array where the number value's found
- If no value exists in the array, return -1

```js
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i]) return i;
  }
  return -1;
}
console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
console.log(linearSearch([100], 100)); // 0
```



### Binary Search

Binary search is a more performant way to search for array values compared to linear searching

#### What is a Binary Search?

Binary search allows you to search through a sorted array, but it removes half of the array values we'd be forced to inspect one-by-one... multiple times over

REQUIREMENT: 
The array must be sorted

- Numbers must be lowest → highest or the inverse
- Strings must be in alphabetical or reverse alphabetical

#### Visual Example + Sources

> EXAMPLE + VISUAL EXPLANATION: 
> Search for a number in an array of numbers in increasing order
> https://www.tutorialspoint.com/data_structures_algorithms/binary_search_algorithm.htm
>
> VERBAL EXPLANATION
> https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11162784#overview

#### Challenge: Multiple Pointer Binary Search

DESCRIPTION:
Make a function that accepts an ordered array of numbers, and an integer
If the integer is in the array, return its index
If it isn't in the array, then return -1

APPROACH:
Use 2 pointers to decide where we should be searching in the original array
Move them after each halving of the original array

SOLUTION:
We used recursion but you can use while as well if you want (though it's less performant)

```JS
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  const recursive = function () {
    // BASE CASE: when right pointer crosses left
    if (right < left) return -1;
    let midIndex = Math.floor(right - left / 2);
      
    // IF MIDDLE VALUE IS A MATCH
    if (arr[midIndex] === val) return midIndex; // return index number
      
    // IF MIDDLE VALUE IS TOO HIGH...
    // elim the right half fr/ consideration by repositioning right pointer
    else if (arr[midIndex] > val) right = midIndex - 1;
      
    // IF MIDDLE VALUE IS TOO LOW...
    // Elim the left half fr/ consideration by repositioning left pointer
    else if (arr[midIndex] < val) left = midIndex + 1;
      
    return recursive();
  };
  return recursive(arr);
}
console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
```



### Naïve String Search 

This string search algorithm is easy to understand, but not particularly performant

#### What is a Naïve String Search?

This algorithm is used to check for small substrings in a larger string

EXAMPLE 1: 			![image-20220409051556287](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220409051556287.png) 	

EXAMPLE 2:			 ![image-20220409051758958](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220409051758958.png)		 ![image-20220409051811353](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220409051811353.png)

#### Visual Explanation

We find substring matches in a larger string by comparing characters in 1 string to the other

- Place the 2 strings one after each other vertically and compare letters across a range
- If one of the short string's characters don't match, we slide it much like a window
- Repeat the process and slide the short string across the entire length of the large string
  We want to check for all possible matches, not just the first

![image-20220409053446265](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220409053446265.png) ![image-20220409053529146](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220409053529146.png) ![image-20220409053613651](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220409053613651.png) 

#### Solution 

CODE:

```JS
function naiveSearch(long, short) {
  let matchesCount = 0;
  // Loop through the long string, but run a nested for loop on each letter
  for (let i = 0; i < long.length; i++) {
    // Iterate through the short string to compare its letters to the long strings
    for (let j = 0; j < short.length; j++) {
      console.log(long[i + j], short[j]);

      // exit loop if we mismatch (long[i+j] visualized)
      if (short[j] !== long[i + j]) {
        console.log("break");
        break;
      }
      // if we reach the end of our short string with no mismatches...
      if (j === short.length - 1) {
        console.log("MATCH!");
        matchesCount++; // save 1 match to our count
      }
    }
  }
  return matchesCount;
}

console.log(naiveSearch("lorie loled", "lol")); // 1
// console.log(naiveSearch("AABAACAADAABAABA", "AABA")); // 3
// console.log(naiveSearch("lorie loled", "AABA")); // -1
```

![image-20220409231959759](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220409231959759.png) ![image-20220409232037504](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220409232037504.png)

#### Solution Visualized

1. Loop through the long string, and run a nested loop inside each iteration
2. The nested loop should run through the small string and compare each of its characters to those in the longer string 

- short[j] : the letter in our short string
- long [i+j] : a letter in the longer string that's offset enough to make comparisons like the ones shown below

WHAT WE'RE DOING WITH OUR NESTED FOR LOOP

![image-20220409230731303](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220409230731303.png) ![image-20220409230748735](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220409230748735.png)

Take a look at `lor and lol`, the comparisons we make at the very start on the left image

- We are looking for matches across a range of characters (not just one)
- `long[i+j]` is used to offset character index values in the long string so we compare the correct character to the ones in our short string

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220409231559359.png" alt="image-20220409231559359" style="zoom:90%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220409232418935.png" alt="image-20220409232418935" style="zoom:85%;" />

Notice how each i + j expression exists in the same column as the letter it points to in the long string



### KMP String Search Part 1: Mandatory Theory

SYNONYMS:
We often use different words to describe which string we're talking about in these challenges

```JS
naiveSearch("lorie loled", "lol"); // could be a KMP search as well
// "lorie loled"	→  txt, long string, haystack
// "lol" 			→  pattern string, short string, needle
```



#### KMP beats Naïve 

The KMP algorithm is much more performant than the naïve approach which is considered a brute force method- you can compare their big O scores in one of this chapter's last lessons (difference is huge)

Naïve string search algorithm:
If you get a mismatch, you shift the pattern string down the long string by 1 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220410043023150.png" alt="image-20220410043023150" style="zoom:50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220410043051566.png" alt="image-20220410043051566" style="zoom:50%;" />

------

KMP string search algorithm:
Much more performant due to the following benefits

1. If you get a mismatch, you shift the pattern string down the long string by 1 or possibly more depending on a formula 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220410045515357.png" alt="image-20220410045515357" style="zoom: 80%;" />

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220410045656989.png" alt="image-20220410045656989" style="zoom:80%;" />

2. You skip making repeated comparisons when you know certain characters in the needle match those in the haystack

- This is because you checked them already in previous rounds of inspection
- The second image used to illustrate benefit 1 above also proves benefit 2
  The blue arrow points at "c" to begin the next round of inspections rather than "a" or "b"

![image-20220410044826097](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220410044826097.png) <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220410044903491.png" alt="image-20220410044903491" style="zoom:95%;" />

#### Prefix, Proper Prefix, & Suffix

|               | definition                                                   | can equal entire pattern | possible values for pattern `abc` |
| ------------- | ------------------------------------------------------------ | ------------------------ | --------------------------------- |
| PREFIX        | any substring that begins pattern                            | yes                      | `a , ab , abc`                    |
| PROPER PREFIX | same as a prefix, but not allowed to equal the entire pattern | no                       | `a , ab`                          |
| SUFFIX        | any substring that ends pattern                              | yes                      | `c , bc , abc`                    |



#### LPS: Longest Proper Prefix that's also a Suffix

The LPS array is required for our formula that tells us how far to shift the pattern string forward

RULES

- LPS array is the same length as the pattern string
- Every entry in that array corresponds to a growing substring in the pattern that starts at the first character

HOW TO THINK:
The value at that point in LPS = the length of the longest prefix with also equals a suffix (LPPS)

- Think of all possible proper prefixes, then check if they're suffixes
- The array value equals the length of the longest one that meets the above requirement
  If one doesn't exist, the value is zero
- TIP
  If the first and last letter in your pattern substring are different, you may still have an LPPS
  It may just be longer than 1 character

------

EXAMPLE 1: 
Construct the LPS array for pattern `AAACAAAAAC` (string of length 10)

| LPS  | corresponds to substring | longest proper prefix that's a suffix (LPPS)          | length of LPPS |
| ---- | ------------------------ | ----------------------------------------------------- | -------------- |
| val0 | A                        | none <br />proper prefix can't be the entire pattern  | 0              |
| val1 | AA                       | A                                                     | 1              |
| val2 | AAA                      | AA<br />yes, the proper prefix and suffix can overlap | 2              |
| val3 | AAAC                     | none                                                  | 0              |
| val4 | AAACA                    | A                                                     | 1              |
| val5 | AAACAA                   | AA                                                    | 2              |
| val6 | AAACAAA                  | AAA                                                   | 3              |
| val7 | AAACAAAA                 | AAA                                                   | 3              |
| val8 | AAACAAAAA                | AAA                                                   | 3              |
| val9 | AAACAAAAAC               | AAAC                                                  | 4              |

```
LPS = [ val0 , val1, val2, val3, val4, val5, val6, val7, val8, val9 ]
LPS = [ 0, 1, 2, 0, 1, 2, 3, 3, 3, 4]
```

------

EXAMPLE 2: 
Construct the LPS array for pattern `AABAACAABAA`,  (string of length 11)

| LPS   | corresponds to substring | longest proper prefix that's a suffix (LPPS)                 | length of LPPS |
| ----- | ------------------------ | ------------------------------------------------------------ | -------------- |
| val0  | A                        | none                                                         | 0              |
| val1  | AA                       | A                                                            | 1              |
| val2  | AAB                      | none                                                         | 0              |
| val3  | AABA                     | A                                                            | 1              |
| val4  | AABAA                    | AA. Not AAB since the pattern does not end with that- it ends with BAA | 2              |
| val5  | AABAAC                   | none                                                         | 0              |
| val6  | AABAACA                  | A                                                            | 1              |
| val7  | AABAACAA                 | AA                                                           | 2              |
| val8  | AABAACAAB                | AAB                                                          | 3              |
| val9  | AABAACAABA               | AABA                                                         | 4              |
| val10 | AABAACAABAA              | AABAA                                                        | 5              |

```
LPS = [ 0, 1, 0, 1, 2, 0, 1, 2, 3, 4, 5]
```

------

MORE EXAMPLES: test out your understanding

```
For the pattern “AAAA”, 
lps[] is [0, 1, 2, 3]

For the pattern “ABCDE”, 
lps[] is [0, 0, 0, 0, 0]

For the pattern “AAABAAA”, 
lps[] is [0, 1, 2, 0, 1, 2, 3]
```

#### Determine LPS using Equations

Knowing how to compute the LPS as a human is important so we can verify when we succeed/fail at doing the same thing using JS- must be able to spot errors as early as possible

APPROACH:


1. Create pointers j and i whose values represent index numbers on the LPS array and pattern string
   `j = 0, i = 0`     (i will be the one that exits the array first and be ahead in general)
2. First value of the LPS array is always 0
   Increment i forward

2. Make comparisons to the letters these pointers reference on the pattern string
   Move them according to the results of these comparisons

COMPARISON RESULTS AND ACTIONS

`pattern[j] === pattern[i]` 

```
LPS[i] = j + 1
i++
j++
```

`pattern[j] !== pattern[i]` when `j === 0`

```
LPS[i] = 0
i++
```

`pattern[j] !== pattern[i]` when `j !== 0`

```
j = LPS[j-1]
Now compare pattern[j] to pattern[i] and make your moves based on the above rules
```



#### Determine LPS using Equations + JS

2 EXAMPLES EXPLAINED WITH VISUALS: 
https://youtu.be/GTJr8OvyEVQ?t=339

CODE: (tested on all previous examples)

```JS
function kmpSearch(haystack, needle) {
  const LPS = []; // we can define new entries with LPS[#] instead of push
  let j = 0;
  let i = 0;
  const recursive = function () {
    // BASE CASE: when pointer i exits the array
    if (i > needle.length - 1) return;
    // PERFORM ACTIONS BASED ON PATTERN LETTER COMPARISONS
    if (j === 0 && i === 0) {
      LPS[i] = 0; // first value of LPS array is always 0
      i++;
    } else if (needle[j] === needle[i]) {
      LPS[i] = j + 1;
      i++;
      j++;
    } else if (needle[j] !== needle[i] && j === 0) {
      LPS[i] = 0;
      i++;
    } else if (needle[j] !== needle[i] && j !== 0) {
      j = LPS[j - 1];
    }
    recursive();
  };
  recursive();
  return LPS;
}
```



### KMP String Search Part 2: Examples

PREVIOUS LESSON

- Learned to construct LPS arrays using code
- Became skilled enough to check if it's correct by looking at the pattern string as a human

#### Shift Formula

The main upside to KMP is that we get to skip making a lot of repeated comparisons
Shift formula is used to determine how far forward we can slide the pattern string down the long string

FORMULAS

```
len = i - j + 1
shift = len - LPS[len-1]

Once we calculate shift, move your i pointer by that amount (i stays the same)
j = j + shift
```

ALL IN ONE (untested)

```
j = i + 1 - LPS[i-j]
```

What `len` is...

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220411082451363.png" alt="image-20220411082451363" style="zoom:67%;" />
>
> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220411082820277.png" alt="image-20220411082820277" style="zoom:67%;" />
>
> - len is just the length of the examined characters (including the mismatch)
> - I don't show the LPS array in this image, but we calculated a shift of 6
>   That's why j moved from 3 to 9



#### Loop across long string using LPS array

Now that we can make LPS arrays, lets complete the KMP algorithm by looping through the long string and shifting the pattern by X entries (dictated by LPS)

APPROACH:

- Set up new pointers named j and i again
  `y = 0` → placed on the pattern string at index... 0
  `x = 0` → placed on the long string at index... 0
- Loop through the long string and perform actions on the pointers based on the comparison results

ACTIONS AFTER COMPARISONS
!!! These are defined below in the order you should place them in your code !!!

if at any point `y === pattern.length ` , we got a full substring match in the previous inspection

```
y = LPS[y-1]; 			// move pointer y backwards slightly
matchesCounter++
```

`long[x] === pattern[y]`

```
x++	// move both pointers forward
y++ 
```

`long[x] !== pattern[y]` when `y !== 0`

```
y = LPS[y-1] // // move pointer y backwards slightly
```

`long[x] !== pattern[y]` when `y === 0`

```
x++
```

#### KMP: Full Algorithm Solution

CHALLENGE: 
Make a function that counts the number of times the pattern string occurs in the long string
`kmpSearch("AABAACAADAABAABA", "AABA")` should equal 3

Includes the LPS array code from the previous lesson

```js
function kmpSearch(haystack, needle) {
  const LPS = []; // we can define new entries with LPS[#] instead of push
  // Build the LPS array using recursion
  let j = 0;
  let i = 0;
  const recursive = function () {
    // BASE CASE: when pointer i exits the array
    if (i > needle.length - 1) return;
    // PERFORM ACTIONS BASED ON PATTERN LETTER COMPARISONS
    if (j === 0 && i === 0) {
      LPS[i] = 0; // first value of LPS array is always 0
      i++;
    } else if (needle[j] === needle[i]) {
      LPS[i] = j + 1;
      i++;
      j++;
    } else if (needle[j] !== needle[i] && j === 0) {
      LPS[i] = 0;
      i++;
    } else if (needle[j] !== needle[i] && j !== 0) {
      j = LPS[j - 1];
    }
    recursive();
  };
  recursive(); 

  let matches = 0;
  let x = 0;
  let y = 0;
  // Count the number of matches using the LPS array and a new recursive function
  const recursive2 = function () {
    // BASE CASE: if pointer x exceeds the string length, end the recursive loop
    if (x > haystack.length) return;
    // If y equals the pattern length, that means we got a complete pattern match
    if (y === needle.length) {
      y = LPS[y - 1];
      matches++;
    }
    // ACTIONS BASED ON COMPARISON RESULTS
    if (haystack[x] === needle[y]) {
      x++;
      y++;
    } else if (haystack[x] !== needle[y] && y !== 0) {
      y = LPS[y - 1];
    } else if (haystack[x] !== needle[y] && y == 0) {
      x++;
    }
    recursive2();
  };
  recursive2();
  return matches;
}
```



### Big O Scores & More Patterns

#### Big 0 Table

|                          | average case | worst case    | Extra details                                               |
| ------------------------ | ------------ | ------------- | ----------------------------------------------------------- |
| linear search            | `O(n)`       |               |                                                             |
| binary search            | `O(log n)`   |               |                                                             |
| naïve string search      | `O(mn)`      | `O(m(n-m+1))` | m is length of long string<br />n is length of short string |
| KMP string search        | `O(m+n)`     | `O(n)`        | m is length of long string<br />n is length of short string |
| Rabin Karp string search | `O(m+n)`     | `O(nm)`       | m is length of long string<br />n is length of short string |

#### More Patterns 

Rabin Karp pattern Search
https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/?ref=lbp

Finite Automata:
https://www.geeksforgeeks.org/finite-automata-algorithm-for-pattern-searching/?ref=lbp
https://www.geeksforgeeks.org/pattern-searching-set-5-efficient-constructtion-of-finite-automata/?ref=lbp

Boyer Moore:
https://www.geeksforgeeks.org/boyer-moore-algorithm-for-pattern-searching/?ref=lbp



# Comparison Sorting Algorithms



### Why we have Multiple Sorting Algorithms

There are dozens of named sorting algorithms you can use to solve any ordering callenge given to you during interviews

- It's important to know a handful of them since there is no definitive best choice for every single situation
- Sorting algorithms perform better and worse depending on the dataset they're given to sort
- During an interview you should ask questions about the input of your algorithm and choose based on those factors.

#### Performance depends on the Dataset

EXAMPLE:

- Insertion sort is very fast at sorting data sets that are mostly ordered at the start. 
  If only a couple of array values are out of place, you'd want to choose that alg over something else 
- Insertion sort is pretty slow when it must sort data that is given to you in reverse order

TESTS: 
https://www.toptal.com/developers/sorting-algorithms

This site runs tests using different datasets and algorithms concurrently
It visualizes 7 algorithms in action at once so you can compare speeds in different scenarios

#### List of Major Sorting Algorithms

WARNING: Do not learn all of these

> SOURCE: https://www.geeksforgeeks.org/sorting-algorithms/#algo
>
> ![image-20220412022723973](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220412022723973.png)





### Default JS sort() function

The sort function takes the array you use it on, and reorders its values- causing permanent change 

```js
arr.sort(compareFunction) // the compare function is optional
```

- Since the compare function is optional, we can use sort() with no argument
- This will let the default behavior choose how your array should be reordered

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

### ====== ELEMENTARY ======

### Bubble Sort

#### How it Works

> CHALLENGE:
> Create a function that sorts numbers in ascending order
>
> VISUALIZED HERE:
> [Sorting (Bubble, Selection, Insertion, Merge, Quick, Counting, Radix) - VisuAlgo](https://visualgo.net/en/sorting)

PROCEDURE:

Take the array and perform comparisons between pairs of array values

- If the second value is larger, leave things as they are
  If the second value is smaller, swap the positions
- After the comparison is over, inspect the next possible pair and repeat until you reach the array's end

Now, 1 cycle of comparisons has been completed

- The data will likely not be fully ordered after 1 cycle, so run another cycle of comparisons again
- You can see how 1 iteration is not enough in the image below 
  Even still, the largest value in the array bubbles to the top by the end of iteration 1

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220412174625683.png" alt="image-20220412174625683" style="zoom:50%;" /> ![image-20220412180751362](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220412180751362.png)

#### Deteriorating Inspection Pool

After the first iteration, the largest value in the array bubbles up to the array's end  (5) 
Knowing this, we only need to sort [3,4,1,2]	(inspecting the 5 would be a waste)

After the second iteration, the largest value in the array besides 5 bubbles up to the array's end (4)
Knowing this, we only need to sort [3,1,2]	(inspecting [4,5] would be a waste)

[Visualized with diagrams here:](https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/#:~:text=After%20each%20iteration%2C%20the%20greatest%20value%20of%20the%20array%20becomes%20the%20last%20index%20of%20the%20array.%20in%20each%20iteration%2C%20the%20comparison%20happens%20till%20the%20last%20unsorted%20element.)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220412190831842.png" alt="image-20220412190831842" style="zoom:67%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220412190752198.png" alt="image-20220412190752198" style="zoom:67%;" />

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220412190810584.png" alt="image-20220412190810584" style="zoom:67%;" /> ![image-20220412211514186](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220412211514186.png)

#### Code: Naïve Bubble sort 

```js
function swap(arr, ind1, ind2) {
  let temp = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temp;
} // utility function that makes swapping array values easy

function bblSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    // Log the array at the start and after we complete an iteration
    console.log(arr, `at start when i = ${i}`);
    
    // for condition ensures we make less comparisons when i's value increases
    // (deteriorating inspection pool)
    for (var j = 0; j < arr.length - i - 1; j++) {
      // Log all comparisons
      console.log(`compare [${[arr[j], arr[j + 1]]}] while  i = ${i}`);
      // If current array value is bigger than the next, swap positions
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
  return arr; // return mutated array
}

console.log(bblSort([234, 43, 55, 63, 5, 6, 235, 547]));
// ANSWER: [ 5, 6, 43, 55, 63, 234, 235, 547 ]
```

Notice how our logs show that as i increases in value, we make less comparisons per each iteration
We are purposefully skipping 1 more comparison at the end of the array (deteriorating inspection pool)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220412190451581.png" alt="image-20220412190451581"  />

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220412190525727.png" alt="image-20220412190525727"  />

#### Code: Optimized Bubble Sort

It's important to understand the naïve approach first! Don't skip that subsection

THE NEED FOR OPTIMIZATION:
If our data is almost sorted or already completely sorted, the bubble sort algorithm treats it like any unsorted array- leading to multiple unrequired comparisons

SHORT CIRCUIT FIX:

- Declare a variable that's set to false by default, then change it to true if you make a swap during one of your iterations
- This variable being set to true should tell your function that we're done sorting
- If no swaps are made on iteration 3 for example, none will be made on iteration 4 since you examine the same array, but with 1 value on the end cut off

OPTIMIZED BUBBLE SORT:
We feed our bblSort function an array that's sorted right from the beginning except for 1 value

```js
function swap(arr, ind1, ind2) {
  let temp = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temp;
} // utility function that makes swapping array values easy

function bblSort(arr) {
  let swapMade = false;
  let compareCounter = 0;
  for (var i = 0; i < arr.length; i++) {
    swapMade = false; // reset swapMade to false after each cycle
    
    // for condition ensures we make less comparisons when i's value increases
    for (var j = 0; j < arr.length - i - 1; j++) {
      // If current array value is bigger than the next, swap positions
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapMade = true; // update swapMade so we know not to short circuit
      }
      compareCounter++;
    }
    // After each cycle of comparisons, check if we made a swap
    // Short circuit: if no swaps were made last cycle, sorting is done
    if (swapMade === false) break; // exit outer for loop
  }
  console.log(compareCounter, "checks made"); 
  return arr; // return mutated array
}

console.log(bblSort([5, 6, 43, 55, 63, 234, 547, 235])); // nearly sorted array
```

With short circuit:		![image-20220412213121130](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220412213121130.png)

Without short circuit:  ![image-20220412213202757](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220412213202757.png)

### Selection Sort

CHALLENGE:
Create a function that sorts numbers in ascending order

#### How it Works

CYCLE 1:

- Loop through an array and record the index for the smallest value
- Once you reach the end of the array, swap the first array value and the smallest array value

CYCLE 2 AND ONWARD:

- Repeat the above process, but skip one more value at the start of the array while you search for the smallest value (deteriorating inspection pool)

EXAMPLE:
Order `[64, 25, 12, 22, 11]`

```
Find the min value in arr[0...4] and place it at beginning of arr[0...4]
arr[] = 64 25 12 22 11
min_value= 64 	arr[0...4][0]=64		swap!

Find the min value in arr[1...4] and place it at beginning of arr[1...4]
arr[] = 11 12 25 22 64
min value= 12. 	arr[1...4][0]=12		no need to swap!

Find the min value in arr[2...4] and place it at beginning of arr[2...4]
arr[] = 11 12 25 22 64
min value= 22 	arr[2...4][0]=25		swap!

Find the min value in arr[3...4] and place it at beginning of arr[3...4]
arr[] = 11 12 22 25 64
min value= 25 	arr[3...4][0]=25		no need to swap!

END RESULT: [11, 12, 22, 25, 64]
```

#### Code

CHALLENGE:
Create a function that sorts numbers in ascending order

```js
function swap(arr, ind1, ind2) {
  let temp = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temp;
} // utility function that makes swapping array values easy

// Utility function that spits out a sliced array
const listOut = (arr, offset = 1) => arr.slice(offset);

function selectionSort(arr) {
  // Outer loop: moves across the array
  for (let i = 0; i < arr.length - 1; i++) {
    // ASSUMPTION: (update later if incorrect)
    // first value in our arr[i...arr.length-1] is the lowest 
    let lowest = i;
    console.log("NEW CYCLE", listOut(arr, i)); // (remove for final answer)

    // Inner loop: performs checks on rest of inspection pool
    // As i increases, the amount of loops before j reaches arr.length decreases
    for (let j = i + 1; j < arr.length; j++) {
      // Find and preserve the index of the smallest value
      console.log("compare", arr[j], arr[lowest]);
      if (arr[j] < arr[lowest]) lowest = j;
    } // Cycle completes after inner for loop is finished

    // If our assumption was incorrect, perform an array entry swap
    if (lowest !== i) swap(arr, lowest, i);
    // If the lowest value was the first entry in the inspection pool, do nothing
  }
  return arr; // return mutated array
}

console.log(selectionSort([64, 25, 12, 22, 11])); // ANSWER: [ 11, 12, 22, 25, 64 ]
```

![image-20220413013544157](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220413013544157.png)



### Insertion Sort

CHALLENGE:
Create a function that sorts numbers in ascending order

#### How it works

1. Insertion sort divides the array into 2 portions

- Left side: sorted
  Consider array[0] to be the entirety of the sorted portion for now at the beginning
- Right side: unsorted

2. Start looping through the array starting at index 1

`If array[1] is larger than its predecessor`

- Expand the sorted section to include array[1] by leaving array values where they already are

`If array[1] is less than its predecessor`

- Expand the sorted section to include array[1]
- Insert the value into the sorted portion, which requires looping through it to see where it belongs in the correct order

Repeat step 2 for the rest of the array's values

![image-20220413025654210](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220413025654210.png)

#### Code

SORTED/UNSORTED SUBARRAYS

- Remember that the sorted and unsorted subarrays are conceptual. 
  We don't have separate variables to hold either
- sorted subarray: `arr[i]` and onwards
- unsorted subarray: `arr[i-1]` up to and including `arr[0]`

We automatically consider `arr[0]` to be part of the unsorted subarray right from the start
This is why the outer for loop commences running through the input array at index 1

WHAT CERTAIN EXPRESSIONS MEAN

- `arr[i]` : the current array value we're on (colored dark green in image above)
- `arr[j]` : a value in the sorted subarray we loop through
- We search for the first `arr[j]` that is smaller than `arr[i]` so we can insert `arr[i]` right after it
  This also makes looping through the sorted subarray backwards mandatory 

```js
function array_move(arr, old_index, new_index) {
  while (old_index < 0) old_index += arr.length;
  while (new_index < 0) new_index += arr.length;
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) arr.push(undefined);
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing purposes
}

function insertionSort(arr) {
  // Outer for: loop through the array (starting @ index 1, not 0)
  // we consider index 0's value to be the start of the sorted subarray
  for (let i = 1; i < arr.length; i++) {
    // IF CURRENT ARRAY VALUE IS GREATER THAN ITS PREDECESSOR
    // Add it to the sorted subarray's tail end by doing nothing
    if (arr[i] >= arr[i - 1]) continue; // skip this one particular loop

    // IF CURRENT ARRAY VALUE IS LOWER THAN ITS PREDECESSOR
    // Loop backwards through sorted subarray and find where to insert it
    // Once we insert the value, end the nested loop right away
    for (let j = i - 1; j >= 0; j--) {
      // Move arr[i] after the first entry that's smaller than it
      if (arr[j] < arr[i]) {
        array_move(arr, i, j + 1); 
        break; 
      }
      // If none of the values inside sorted subarray are smaller...
      // This means the value i points to is the lowest in the array
      else if (j === 0 && arr[j] > arr[i]) {
        array_move(arr, i, 0); // place this value at the start of arr
        break;
      }
    }
  }
  return arr;
}
```



### ====== ADVANCED ======



### Merge Sort

CHALLENGE:
Create a function that sorts numbers in ascending order

> Before you begin: WARP-Z9185
> This is a simple example of using recursion to go down splitting paths
> Merge sort does the same thing, but its solution is surrounded with other complexities

#### Premise

Merge sort is a divide and conquer algorithm that heavily takes advantage of one simple fact:
2 sorted arrays are easy to merge into 1 big sorted array

------

MERGING 2 SORTED ARRAYS WITH LENGTHS OF 1

```
const a = [4];
const b = [9];
const merged = []; // an array that should contain numbers in ascending order 
```

Thought process:
Arrays of length 1 are always sorted (think about it)

- Compare 4 and 9
- 4 is smaller so add that into merged array first, then add 9 afterwards

MERGING 2 SORTED ARRAYS WITH LENGTHS ABOVE 1:
Is also simple, but requires pointers and an overall strategy (explained in next subsection)

------

HOW MERGE SORT WORKS:

Split segment:

1. Take an unsorted array then keep splitting it up in halves 
   Repeat until you take an array of length 10 for example and boil it down to 10 arrays of length 1

Merge Segment:
Combine arrays while keeping all values ordered

1. Combine all pairs of arrays with length 1 into multiple arrays of length 2
2. Repeat the above step but merge pairs of length 2 arrays this time... etc

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220413232924003.png" alt="image-20220413232924003" style="zoom:67%;" />

#### Merging 2 Sorted arrays

WHAT WE'RE DOING

Before we can implement merge sort, we need to learn how to combine 2 ordered arrays into a single larger ordered array

![image-20220414024557533](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220414024557533.png)

- The utility function we'll build will work on array pairs of any size
  Ex. It will combine an array of size 10 with one of size 28
- The arrays we're combining will be ordered individually at the start
  But if you were to concatenate the 2 and do nothing more, the end result may not be ordered

```js
const a = [27, 38] // ordered
const b = [3, 43] // ordered
let merge = []
// cannot concatenate without sorting or else we get this...
merge = [27, 38, 3, 43]; // not ordered anymore
```

------

STRATEGY:
This utility function should not mutate the array fed to it 

1. Create an empty array to push values into
2. Pointer i: Place at start of array a
   Pointer j: Place at start of array b
3. Compare array elements pointed at by i and j

- If `a[i]` is lower
  Push `a[i]` value into merge, then move i pointer forward one
- If `b[j]` is lower
  Push `b[j]` value into merge, then move j pointer forward one
- If at any point one of the pointers exits its array, dump the remaining array's values into merge in the order they're already in (already sorted...remember)

4. Repeat step 3 until both pointers have reached their array ends
   This means we've pushed all 2 arrays' values into merged

------

CODE:

```JS
// Merges two already sorted arrays
function orderedMerge(arr1, arr2) {
  let merged = [];
  let i = 0;
  let j = 0;
  // PLAN: Compare arr1[i] to arr2[j] then 
  // Push the lowest of the 2 into merged and increment its pointer forward
  // One array will finish before the other. Dump all remaining values into merged
  // This is why we have 3 while loops
  
  // WHILE BOTH ARRAYS HAVE VALUES LEFT TO PUSH
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      merged.push(arr1[i]);
      i++; 
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  // WHILE ARR_1 HAS VALUES LEFT TO PUSH (won't run if i reaches arr1 end first)
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  // WHILE ARR_2 HAS VALUES LEFT TO PUSH (won't run if j reaches arr2 end first)
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  return merged;
}
```

#### Code: Merge Sort

We do not include the code for `orderedMerge()` in this snippet
See the previous subsection for that code + an explanation of how it works

```js
function mergeSort(arr, side = '') {
  console.log(arr);
  // BASE CASE: if an array has a length of 1, return it
  if (arr.length <= 1)  return arr; // will equal value for leftHalf or rightHalf
  
  let mid = Math.floor(arr.length / 2);
  // If the array has a length of 2 or more
  // Split them in half recursively until they are of length 1 (base case)
  let leftHalf = mergeSort(arr.slice(0, mid), 'left');
  let rightHalf = mergeSort(arr.slice(mid), 'right');

  // Once leftHalf and rightHalf are defined, return an ordered merge
  console.log('Return ordered merge for...', leftHalf, rightHalf);
  return orderedMerge(leftHalf, rightHalf);
  // We'll have many callstack functions due to the splitting
  // So expect to return multiple orderedMerges
}
console.log(mergeSort([10, 5, 1, 14, 9]));
```

![image-20220414082953398](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220414082953398.png)

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220414085052530.png" alt="image-20220414085052530" style="zoom:80%;" />
>
> [5,10] is the leftHalf for the original mergeSort function call
> [1,9,14] is the rightHalf value for the original mergeSort function call
>
> reaching these took a lot of recursive calls that led to splitting (blue boxes)
> after the splits created 1 element arrays, they were orderedMerge'd (yellow boxes)

#### Analyze Merge tree in dev tools

Place breakpoints here and pay attention to the value of `arr, leftHalf, rightHalf, and side`

- We created the side parameter specifically as a visual aide 
  (it doesn't contribute to the solution but it helps us grasp what we're looking at)
- If you pay attention the the above variables, and the callstack, you'll be able to visualize the merge tree for this question

![image-20220414083631407](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220414083631407.png)

![image-20220414090822636](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220414090822636.png)

Each mergeSort function in the callstack has its own `leftHalf` and `rightHalf` which eventually get fed to `orderedMerge()` to finally resolve that recursive function

#### Time Complexity

> Why time complexity is nlog(n)
> https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11072020#questions

For the record, `nlog(n)` is as good as it gets for sorting arrays regardless of data type

- For this reason, you should definitely memorize how to use Merge sort
- If you want better performance, you'll be writing a function that takes advantage of certain quirks that only apply to numbers (Radix sort does this, and can only sort numbers)



### Quick Sort Part 1: Partitioning

The quick sort algorithm will require several rounds of partitioning on various subarrays

PARTITIONING IN SIMPLE TERMS:

- Select a value in the array and call it the pivot
  Decide it's in the correct place in our soon to be ordered array
- Move all lesser values behind it and all larger values in front of it

#### Procedure

1. Select a pivot - `arr[0]` will suffice
2. Declare a variable named `swapIndex` which will get incremented as we go
3. Loop through the array and compare the current value with `arr[0]`, our pivot 

IF CURRENT VALUE IS LARGER:
Do nothing and move to next array value

IF CURRENT VALUE IS LESSER:

- Increment `swapIndex` up by 1 first
- Swap current value with `arr[pivotIndex]`

4. Once looping concludes, swap pivot point `arr[0]` with `arr[swapIndex]`
5. Return the `swapIndex` and end your function

When creating our function, we should modify the array input, not create a new one

#### Text Example

> ![image-20220415024624354](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220415024624354.png)
>
> Thought process for line 10:
>
> - The current value is 14, which is less than our pivot point value 28
>   We increase swapIndex from 4 to 5
> - Next we swap the current value with arr[swapIndex]
>   Meaning we swap 14 at index 7 with 41 at index 5
>
> The array with highlights on line 10 shows the array AFTER we made our swap, not before
> This applies to every other line as well

#### Partition Function

CHALLENGE:

- Create a function that allows us to partition an entire array, or possibly a sub array you define with index values as arguments
- Have it return the swapIndex

TESTS:

```js
STARTING ARRAY: [4,0,2,5,1,9]

partition([4,0,2,5,1,9]) 
// should partition entire array
// array post-function: [ 1, 0, 2, 4, 5, 9 ]
// return: 3

partition([4,0,2,5,1,9], 3)
// should partition [5,1,9] while leaving rest of arr untouched
// array post-function: [ 4, 0, 2, 1, 5, 9 ]
// return: 4

partition([4,0,2,5,1,9], 0, 3) 
// should partition [4,0,2] while leaving rest of arr untouched
// array post-function: [ 2, 0, 4, 5, 1, 9 ]
// return: 2

partition([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]);
// should partition entire array
// array post-function: [ 18, 4, 11, 16, 1, 14, 28, 41, 36, 37, 42, 20 ]
// return: 6
```

CODE:

```JS
function partition(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    // IF CURRENT VALUE arr[i] IS LESSER
    if (pivot > arr[i]) {
      swapIndex++; // increment swapIndex first
      swap(arr, swapIndex, i); // swap currentValue with arr[swapIndex]
    }
  }
  // After the looping ends, swap pivot point arr[0] with arr[swapIndex]
  swap(arr, start, swapIndex);
  return swapIndex;
}
// BONUS FACT!
// The swapIndex for an array of length 0 or 1 will always equal 0
```



#### Picking a good pivot 

The performance of Quick Sort hinges on whether we pick a good or bad pivot 

- Ideally, you want to pick the median value to get peak performance from this algorithm
- If you're sorting data and don't know what the median value will always be, you can't guarantee good performance from this alg
- For simplicity's sake, we picked the first array element as a pivot each time
  Some people select the last, middle, or a random array value



### Quick Sort Part 2: Recursive Partitioning

CHALLENGE:
Create a function that sorts numbers in ascending order

#### Algorithm Code

We did not include the partition function in the snippet below
To see that function and what it does, look at the previous lesson

QUICKSORT_LEFT + QUICKSORT_RIGHT:

- We don't actually care what the returned pivotIndex value is for `quickSort(arr, left, pivotIndex - 1)` or `quickSort(arr, pivotIndex + 1, right);`
- The function reorders the array, which is what we're after
  The `return arr` on any of the callstack functions aside from the original is not utilized

Look at the expressions for `quickSort left` and `quickSort right`

- We make sure not to include the pivotIndex in the subarray we partition
- The array value referenced by pivotIndex is in the correct spot, so including it in a subarray being partitioned would mess things up

```js
function quickSort(arr, left = 0, right = arr.length - 1) {
  // BASE CASE: stop recursive loop when subarray is 1 element long
  if (left < right) {
    let pivotIndex = partition(arr, left, right); // f() returns a swap index
    // Partition the subarray left of the latest pivot index
    quickSort(arr, left, pivotIndex - 1); // update the "right" parameter
    // Partition the subarray right of the latest pivot index
    quickSort(arr, pivotIndex + 1, right); // update the "left" parameter
    // Do not partition a subarray array including the latest pivotIndex
    // It's in the correct spot already, so including it would mess things up
  }
  // BASE CASE: when the left pointer and right pointer cross
  // at that point return the original array we've been editing this whole time
  return arr;
}
console.log(quickSort([4, 6, 9, 1])); // [ 1, 4, 6, 9 ]
```

#### Understanding Solution

```js
let quicksort_left = quickSort(arr, left, pivotIndex - 1);
let quicksort_right = quickSort(arr, pivotIndex + 1, right);
/*
The values of left and right will change as you go further down the tree
When the base case is reached, the recursion ends and arr is returned
```

![image-20220415104146600](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220415104146600.png)

#### Examine Solution in Dev tools

Run your solution in dev tools and place breakpoints here:

![image-20220415095332847](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220415095332847.png)

Keep track of...

- Values of `left` and `right`
- Value of `arr` (array gets updated with each partition of its subsections)
- How many functions are on the callstack

The more levels on our tree, the more functions on the callstack.
Experiment with longer arrays to sort and you'll notice this

# Integer Sorting Algorithms

### Overview

#### Comparison Algorithms

Bubble, insertion, merge, and quick sort can all be classified as comparison algorithms. 

- They loop through arrays, make comparisons, then shift array elements based on the comparison outcome
- Sorting algorithms peak at an average efficiency of `nlog(n)`

If you want to perform better while sorting, you'll need a different algorithm type that takes advantage of niche properties about what you're sorting

#### Integer Sort Algorithms

COMPATIBILITY:
Integer sorting algorithms are very performant algorithms that are used primarily on numbers
Strings or images can also be converted to numbers and sorted with them as well

NICHE DETAILS IT USES:
Information about a number's magnitude is encoded in the number of digits there are
Ex. You know that all positive 3 digit numbers are larger than positive 1 digit numbers- so why compare?



### Radix Sort

DISCLAIMER:
Bucket sort is the name of a diff algorithm, but its a good name for a required operation in radix sort

#### Bucket Sorting

We're going to have 10 buckets, one for integers 0-9

FOR RIGHTMOST DIGITS:
Loop through your array and look at the rightmost digit on each array value
Place it in its designated bucket

- 96 would get sorted in bucket 6 
  801 would get sorted into bucket 1
- Place array values into their bucket as soon as they are encountered while looping through the array (notice how 7 gets placed in before 8157 since the latter appears afterwards)

Place the following array values into buckets:

```js
[1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29]
```

![image-20220416021900580](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220416021900580.png)

FOR OTHER DIGITS:
Bucket placement works the same when placing based on the 2nd last digit or 3rd last...etc
You just need to remember one thing...

Imagine we're bucket-placing based on the 2nd rightmost digit
What about single digit values like 7 or 4? They get placed into bucket 0

#### Radix Sort: Text Example

CHALLENGE:
Create a function that sorts numbers in ascending order

1. Decide how many rounds of bucket sorting we'll have
   The longest integer in the array is 4, so we'll have 4 rounds (rounds 0,1,2,3)
2. Loop through the array and bucket sort based on the `rightmost digit`
3. Afterwards, empty out the bucket to produce a new partially-sorted array

- Go in order of 0-9, and the elements at the bottom get dumped out first 
- Empty the bucket using FIFO principle (first numbers added in are the first out)

`Bucket sort round 0: rightmost digits`

> ​								before: [1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29]
>
> ![image-20220416025148421](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220416025148421.png)
>
> ​								after: [902, 593, 4, 1556, 3556, 4386, 86, 7, 8157, 9637, 408, 29]

Repeat steps 2-3, but bucket sort using the second rightmost digit this time
Then the third rightmost...etc until we reach 4 rounds of bucket sorts like we declared earlier

`Bucket sort round 1: 2nd rightmost digits`

> ​								before: [902, 593, 4, 1556, 3556, 4386, 86, 7, 8157, 9637, 408, 29]
>
> ![image-20220416025119853](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220416025119853.png)
>
> ​								after: [902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]

`Bucket sort round 2: 3rd rightmost digits`

> ​								before: [902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]
>
> ![image-20220416030002319](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220416030002319.png)
>
> ​								after: [4, 7, 29, 86, 8157, 4386, 408, 1556, 3556, 593, 9637, 902]

`Bucket sort round 3: 4th rightmost digits`

> ​								before: [4, 7, 29, 86, 8157, 4386, 408, 1556, 3556, 593, 9637, 902]
>
> ![image-20220416030526288](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220416030526288.png)
>
> ​								after: [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]

VOILA! The array is ordered by the end of our last round of bucket sorting

#### Helper Functions 

Return the number of digits in a number

```js
const digitsInNumber = function (num) {
  const str = String(num);
  return str.length;
};

digitsInNumber(5); // 1
digitsInNumber(135); // 3
```

Given an array of numbers, determine the max number of digits in one of the values

```js
const mostDigits = function (arr) {
  let most = 0;
  for (let val of arr) most = Math.max(String(val).length, most);
  return most;
};

mostDigits([1245, 56, 2]); // 4
```

return the digit in a number at a given place value
Place value 0 should point to the rightmost digit

```js
const nthRightmostDigit = function (num, offsetFromRight) {
  const str = String(num);
  return Number(str[str.length - 1 - offsetFromRight]);
};

nthRightmostDigit(12345, 0); // 5
nthRightmostDigit(12345, 1); // 4
nthRightmostDigit(12345, 3); // 2
```

#### Algorithm Code

```js
function radixSort(arr) {
  // Decide how many rounds of buckets sorts we'll have
  let lastRound = mostDigits(arr); // equals highest number of digits in array
  let bucket = [[], [], [], [], [], [], [], [], [], []];

  const recursiveBucket = function (currentRound) {
    // Base case: We get through all required rounds
    if (currentRound > lastRound) return;
    // FILL THE BUCKET
    for (let i = 0; i < arr.length; i++) {
      // Get the nth rightmost digit from each array val
      let arrayVal = arr[i];
      let nthLastDigit = nthRightmostDigit(arrayVal, currentRound); // 0-9
      // Take advantage of str[-1] equaling a falsy
      if (!nthLastDigit) nthLastDigit = 0; // could also use digitsInNumber here
      bucket[nthLastDigit].push(arrayVal);
    }
    // EMPTY THE BUCKET
    arr = [...bucket[0],...bucket[1],...bucket[2],...bucket[3],...bucket[4],
           ...bucket[5],...bucket[6],...bucket[7],...bucket[8],...bucket[9] ]; 
    bucket = [[], [], [], [], [], [], [], [], [], []]; // reset bucket so its empty
    recursiveBucket(currentRound + 1); // currentRound increases by 1 for next call
  };
  recursiveBucket(0); // currentRound starts at 0 and ends when it reaches mostDigits
  return arr;
}
```

#### Big O explained

The longer the numbers we sort in terms of digits, the less efficient Radix sort will be

![image-20220416055303484](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220416055303484.png)

If you sort extremely long numbers, Radix sort may tie with `nlog(n)` algorithms, more or less
That being said, it's easy to remember, fun, and just as good `:]`



### Interview Algs + Use-cases

#### Elementary Compare Algorithms

They are all good for when space complexity is a concern. `O(1)` for all

Bubble Sort:
When data is already/nearly sorted or if data set is extremely small

Selection Sort:
Use if you want to minimize the amount of array value swaps due to memory space limitations
We only swap once per outer loop (much less than bubble sort)

Insertion sort:
Best case is when the data is nearly sorted at the beginning

- Has a very niche use case where it's good when we don't receive an entire array at once
  Ex. If new data is consistently trickling in live and you need to sort it at a moment's notice
- The algorithm decides where to place data in the sorted portion one at a time, which lends itself well for that situation

#### What to know for Interviews

1. Merge sort and quick sort for sorting non-numbers

- Time complexity is  `O(nlog(n))` for both, though if you have to choose, go with merge sort
- Quick sort involves some RNG where speed lowers to `O(n^2)` if you pick a bad pivot point
  We always select the first array value so that could backfire if we get unlucky

2. Radix sort for sorting numbers

- Time complexity is  `O(nk)` which is better than `O(nlog(n))` unless we deal with really long numbers while sorting
- The algorithm is easy to remember and code



# Dijkstra's Shortest Path Algorithm

### Intro + Performing it as a Human

#### What is Dijkstra's Algorithm?

This algorithm finds the shortest path between 2 vertices on a graph

- This algorithm is used practically everywhere
- Many large companies employ a modified version of this algorithm that they change to better serve their own purposes

PRE-REQUISITES

1. Weighted Graphs
2. Min binary heaps, priority queues

#### The Data Dijkstra's Generates

Dijkstra's Algorithm tells us the shortest route from our starting node to any other node in your graph

- In the diagram below, we start at node A and find the shortest distances from it to B,C,D or E
- Consider each edge weight as a distance in kilometers, to keep things conceptually simple

![image-20220429145038143](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220429145038143.png)

UNDERSTANDING THE TABLE

- The shortest distance from node A to itself is 0
- The shortest distance from node A to B is 3 km, despite the fact that we take two edges to get there
  A → B directly requires 6 km while going from A → D → B only requires 3 km

PIECING TOGETHER ROUTES TO DISTANT NODES:

- The shortest distance from A to C is 7 km, and the route is highlighted red
- We can actually piece together the exact route we took to get there using the previous vertex column
  We don't even need to look at the diagram

1. The shortest distance to C requires us to come from E

2. The shortest distance to E requires us to come from D

3. The shortest distance to D requires us to come from A- the source node
   Therefore, the shortest route is `[A, D, E, C]`

#### Logic for Recursive Approach

> Follow along this video while keeping the steps described below in mind
> Create your own written table and fill it out as you go
>
> https://www.youtube.com/watch?v=pVfj6mxhdMw

Terms:

`SKD`: Shortest known distance from source (gets updated as we traverse)

`source`: The vertex we start at

SETUP

1. Set the SKD from the source vertex to itself as 0
   Set the SKD from every other vertex to the source as infinity
2. Create arrays that record which vertexes we have and have not visited
3. Create an array called `backtrackNodes`
   Should contain nodes that you'd like to return to if you hit a dead end

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220429163658092.png" alt="image-20220429163658092" style="zoom:67%;" />

LOOP:

1. For the current vertex, calculate the distance of each unvisited neighbor to the source
   `distance = SKD from source to current vertex + unvisited neighbor edge weight`

- If that distance is smaller then the SKD, update that value in our chart
- If you update the SKD, update the previous vertex in the chart as well

2. Add the current vertex to the visited list
3. Select a new vertex to make the "current vertex"
   Decide based on how many unvisited neighbors your current vertex/node has

| CASE: Current node has...                                    | set `current` equal to                        | `backtrack` list                                             |
| ------------------------------------------------------------ | --------------------------------------------- | ------------------------------------------------------------ |
| 2+ unvisited neighbors                                       | the unvisited neighbor with the SKD to source | add the current node to the backtrack list BEFORE we change it |
| 1 unvisited neighbor                                         | the one unvisited neighbor                    | N/A                                                          |
| 0 unvisited neighbors BUT all vertexes in graph haven't been visited (means we hit a dead end) | the last value in the backtrack list          | pop() to remove the final value in the list                  |
| 0 unvisited neighbors AND all vertexes in graph have been visited | End recursive loop                            | N/A                                                          |

After the looping ends, our table looks like this:	 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220429185311424.png" alt="image-20220429185311424" style="zoom:67%;" />

### Prerequisite Data Structures for Dijkstra's

Each subsection in this lesson that begins with `CODE:` features a snippet that builds a data structure we've already learned in previous chapters- go there for detailed explanations

#### CODE: Weighted Graph

SOURCE: https://jsfiddle.net/Jason2B3/3jnxzv15/3/

We can't perform Dijkstra's on a weighted graph if we don't have a way to build one

```js
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  } // building an undirected weighted graph
  addVertex(vertexName) {
    if (!this.adjacencyList[vertexName]) {
      this.adjacencyList[vertexName] = [];
    }
  }
  addEdge(v1, v2, weight) {
    // Check if both vertexes already exist in the adj_list (if not, insta fail)
    // don't connect the same node to itself either
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2] || v1 === v2)
      return null;
    // Add v2 to v1's edge list if it isn't already there
    if (!this.adjacencyList[v1].includes(v2)) {
      this.adjacencyList[v1].push({ node: v2, weight });
    }
    // Add v1 to v2's edge list if it isn't already there
    if (!this.adjacencyList[v2].includes(v1)) {
      this.adjacencyList[v2].push({ node: v1, weight });
    }
  }
  removeEdge(v1, v2) {
    let v1_target = this.adjacencyList[v1].findIndex(el => {
      return el.node === v2;
    });
    let v2_target = this.adjacencyList[v2].findIndex(el => {
      return el.node === v1;
    });
    // Remove v2 from v1's edge list, if it's there
    if (v1_target !== -1) this.adjacencyList[v1].splice(v1_target, 1);
    // Remove v1 from v2's edge list, if it's there
    if (v2_target !== -1) this.adjacencyList[v2].splice(v2_target, 1);
  }
  removeVertex(vertex) {
    // Loop while the edge list for "vertex" still has entries in it
    while (this.adjacencyList[vertex].length > 0) {
      // Remove an edge from vertex's list
      // then capture what other list we need tor emove from
      const twinVertex = this.adjacencyList[vertex].pop();
      // Remove the edge from the other lists as well, then repeat
      this.removeEdge(vertex, twinVertex.node);
    }
    // Delete the vertex's edge list entirely
    delete this.adjacencyList[vertex];
  } // vertex val is the value of the "node" kvp in
}
```

#### Why we need a Priority Queue to help optimize

There is one step to this algorithm that has great potential to tank performance- and that's the step where we decide which vertex to make our new current vertex

- We select the vertex that has the smallest known distance to the source
- This is very easy to do naively since our simple example only contained vertexes connected to 2 or 3 other ones
- If we're using this in a professional setting, any one vertex could be connected to hundreds or thousands of others - and checking each one's SKD would not be effiecient

SOLUTION:
Record each neighbor vertex of the current node in a priority queue
The priority of each vertex will equal their SKD

REFRESHER:

- A min binary heap is a binary tree where the node with the shortest value goes on top
  Priority queues are the same thing, but the hierarchy is based on the priority given to each node
- The `dequeue` method on this data structure pops off the that node on top with the lowest value
- The dequeue method would give us our "next current vertex" in Dijkstra's algorithm immediately 
  The alternative would be looping through an array of neighbors after each iteration

#### CODE: Priority Queue

SOURCE: https://jsfiddle.net/Jason2B3/vLfshp27/3/

```js
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  // Add node to heap
  enqueue(newVal, prio) {
    let newNode = new Node(newVal, prio);
    // If heap is empty, make this the root 
    if (this.values.length === 0) return this.values.push(newNode);
    // If heap is not empty, push the new value into the array
    this.values.push(newNode);
    let currentIndex = this.values.length - 1;
    let parentIndex;
    // Reposition the node X amount of times ...
    // until it is greater than its parent, or the root node
    const recursive = function () {
      parentIndex = Math.floor((currentIndex - 1) / 2); // get parent index
      // BASE CASES: end the recursive looping
      // 1) parent's value is less than the newVal's
      // 2) parentIndex is negative, indicating currentIndex = 0 (root node)
      if (this.values[parentIndex]?.priority < prio || parentIndex < 0) return;
      // If parent value is lesser, swap the newVal with the parent
      this.values[currentIndex] = this.values[parentIndex];
      this.values[parentIndex] = newNode;
      // Update the index numbers
      let placeholder = currentIndex;
      currentIndex = parentIndex;
      parentIndex = placeholder;
      rebinded(); // make a recursive call on our rebinded function
    };
    // this is undefined inside our recursive function regularly (so rebind it)
    let rebinded = recursive.bind(this);
    rebinded(); // make recursive calls on this new method
    return this.values;
  }
  // Remove root node and reorganize heap
  dequeue() {
    // EDGE CASE:
    // extracting the one node left in the tree, or if the tree's empty
    if (this.values.length <= 1) {
      this.values = [];
      return this.values;
    }

    // Replace root with last heap value, then delete duplicate last value
    this.values[0] = this.values.pop();

    // Variables used to iterate
    let replacement = this.values[0];
    let replacementIndex = 0;
    function swap(arr, ind1, ind2) {
      let temp = arr[ind1];
      arr[ind1] = arr[ind2];
      arr[ind2] = temp; // utility function
    }
    // Iterative approach
    while (true) {
      // Look at replacement node's children and see if they're lesser
      let leftChildIndex = 2 * replacementIndex + 1;
      let rightChildIndex = 2 * replacementIndex + 2;
      let leftChild = this.values[leftChildIndex];
      let rightChild = this.values[rightChildIndex];

      // BASE CASES WHERE HEAP IS FIXED
      // 1) If the replacement node has no children, it's reached the heap bottom 
      if (!rightChild && !leftChild) break;
      // 2) If you only have a left child
      else if (leftChild && !rightChild) {
        // Swap if that child has a lower priority number
        if (leftChild.priority < replacement.priority) {
          swap(this.values, leftChildIndex, replacementIndex);
          replacementIndex = leftChildIndex;
        } 
        // Eitherway the loop ends here (nowhere else for replacement node to go)
        break;
      }
      // 3) If you have 2 children and both have greater priority numbers
      else if (
        replacement.priority < leftChild.priority &&
        replacement.priority < rightChild.priority
      )
        break;
      // 4) If one/both children have lower priority numbers
      else {
        let leftMoreSevere = leftChild.priority < rightChild.priority;
        let rightMoreSevere = rightChild.priority < leftChild.priority;
        if (leftMoreSevere) {
          swap(this.values, leftChildIndex, replacementIndex);
          replacementIndex = leftChildIndex; // update var we use to iterate
        } else if (rightMoreSevere) {
          swap(this.values, rightChildIndex, replacementIndex);
          replacementIndex = rightChildIndex; // update var we use to iterate
        }
      }
    }
    return this.values;
  }
}
```



### Dijkstra's: Recursive Approach

Dijkstra's algorithm can be solved with recursion- and you don't even need a priority queue

#### Challenge

GOAL: 
Find the shortest distance route from A to E
Your algorithm should work on graphs with dead ends (like in the image below)

No dead ends										  With dead ends

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220429121051504.png" alt="image-20220429121051504" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220501220848702.png" alt="image-20220501220848702" style="zoom:80%;" />

#### Code Solution

ABOUT THE OFFSCREEN CODE:

- We add our Dijkstra's method as part of the weighted graph data structure we built for a previous chapter
- We use recursion instead of iteration- allowing us to avoid implementing a priority queue- which saves a lot of code

Dijkstra's method code:
If you understand how the algorithm works, this code will be simple to recreate

```js
  dijkstra(current, end) {
    // Create the chart and visited list using code
    const skd = {}; // shortest known distance
    const prev = {}; // previous vertex
    const visited = {}; // visited list
    let backtrackNodes = []; // list of nodes we backtrack to if we hit a dead end
    for (let v in this.adjacencyList) {
      skd[v] = Infinity;
      prev[v] = null;
      visited[v] = false;
    } // current = source node @ start
    skd[current] = 0; // initialize chart value

    const r = function () {
      console.log(current); // logs what nodes we traverse to
      // Make a list of unvisited neighbors for the current vertex
      const unvisitedNeighbors = [];
      let minSKD = Infinity; // record which one has the lowest SKD
      let minSKD_vertex = null;
      for (let v of this.adjacencyList[current]) {
        if (visited[v.node]) continue; // skip visited neighbors
        // For unvisited neighbors, calc their SKD's
        // Update skd/prev_vertex if it's lower than whats currently in the chart
        let distance = skd[current] + v.weight;
        if (distance < skd[v.node]) {
          skd[v.node] = distance;
          prev[v.node] = current;
        }
        // Update list of unvisited neighbors and the lowest SKD
        unvisitedNeighbors.push(v.node);
        if (distance < minSKD) {
          minSKD = distance;
          minSKD_vertex = v.node;
        }
      }
      // Add current node to visited list + all graph vertexes visited
      visited[current] = true;
      // OPTION SELECT: based on # of unvisited neighbors + unvisited graph vertexes
      switch (true) {
        // CASE: 0 unvisited neighbors + all graph vertexes have been visited
        // CASE: 0 unvisited neighbors + more graph vertexes to visit
        case unvisitedNeighbors.length === 0:
          let visitedAll = !Object.values(visited).includes(false);
          if (visitedAll) return; // end recursive looping
          current = backtrackNodes.pop(); // backtrack
          break;
        // CASE: 1 unvisited neighbor
        case unvisitedNeighbors.length === 1:
          current = minSKD_vertex; // pick one with the lowest SKD to make current
          break;
        // CASE: 2+ unvisited neighbors
        case unvisitedNeighbors.length >= 2:
          backtrackNodes.push(current); // add node to backtrack list
          current = minSKD_vertex; // pick one with the lowest SKD to make current
          break;
        default:
          break;
      }
      return recursive();
    };
    const recursive = r.bind(this);
    recursive();

    // Log the chart to the console to help visualize what's been done
    console.group('Chart');
    console.log('SKD', skd);
    console.log('PREV', prev);
    console.log('VISITED', visited);
    console.groupEnd('Chart');

    // Determine the path from start to end using the prev column of the chart
    let path = [];
    let currentStep = end;
    while (true) {
      path.push(currentStep); // add current node to the path
      if (!prev[currentStep]) break; // end when we reach root
      currentStep = prev[currentStep];
    }
    return { shortestDistance: skd[end], shortestPath: path.reverse() };
  }
```

#### Run Tests + Chapter Code

- Test out the solution to our challenge using our full code here:
  https://jsfiddle.net/Jason2B3/9nrLtucg/8/
- Feel free to test our method on other weighted graphs as well- you just need to build it using the Weighted Graph class

Code we used to test the challenge given at the start of this lesson:

```js
const graph = new WeightedGraph();
// Construct the graph featured in the challenge diagram (the one with dead ends)
// add vertexes
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addVertex('W');
graph.addVertex('X');
graph.addVertex('Y');
graph.addVertex('Z');
// add edges
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

graph.addEdge('A', 'W', 1);
graph.addEdge('W', 'X', 1);
graph.addEdge('W', 'Y', 2);
graph.addEdge('X', 'Y', 1);
graph.addEdge('Y', 'Z', 1);
// perform Dijkstra's
console.log(graph.dijkstra('A', 'E'));
```

![image-20220501220427037](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220501220427037.png)

Vertex visit order 

- A W X Y Z W A C D F E B
- This was also logged, but it takes a lot of space

 

# === OBJECT ORIENTED CODING ===

# Method 1: Constructor Functions

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



### Constructor Functions

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



# Method 2: Class Syntax



### Properties & Instance Methods

The whole point of class syntax was to cater to people who come from different coding backgrounds. Their version of OOP looks and functions differently

- This way of performing OOP is mostly the same as constructor syntax, just with changed syntax which appeals to certain people
- Its important to be familiar with all popular methods of implementing OOP, although personally I prefer class syntax over constructors (they have a faster way to apply prototypal inheritance)

#### Basic Example

CONSTRUCTOR:

- Helps us set up KVP's that will change depending on the instance
- The height, squareFeet, and cost will differ depending on the parameters supplied during our instance declaration

HARDCODED KVPS:
These are KVP's that aren't reliant on parameters supplied to the constructor

- You can declare them in the constructor if you want- look at `this.mood` for example
- Typically people define them above or below the constructor- look at `date` 

INSTANCE METHODS
These are methods every instance will inherit from the parent class (will reside in the prototype obj)

- These methods will only perform actions on their particular instance
  If i create 10 new house instances, `house9.printCost()` will only print the cost of house 9
- It won't affect any other instance but that one- which is good because instance methods can/will be used to update data in later examples

```js
class Blueprint {
  // Define properties present on every instance
  date = new Date(); // hardcoded
  constructor(height, squareFeet, cost) {
    // Constructor sets properties using parameters when we declare a new instance
    this.height = height;
    this.squareFeet = squareFeet;
    this.cost = cost;
    this.mood = 'neutral'; // hardcoded as well
  }
  // Instance methods
  printCost() {
    console.log('This house in particular costs...', this.cost);
  }
}

// Create a new instance and log it
let house = new Blueprint(10, 645, 800000);
console.log(house);
// Call one of the methods this instance inherited
house.printCost();
```

![image-20220417101019716](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220417101019716.png)

#### Where to define what

I'll be showing you where to define...

1)  Properties on all object instances (dark blue)
2)  Properties on constructor function prototypes (orange)
3)  Methods on constructor function prototypes (teal)

DON'T DEFINE METHODS ON INSTANCES:
It's possible to do, but terrible for performance and should be avoided

![image-20210429182753787](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210429182753787.png)

CODE: https://jsfiddle.net/JasonXtuyotech/mjzgswde/

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
const joker = new Persona('Ren', 16); // create a new instance 
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

THE DIFFERENCE

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

#### Important Details

1. Classes are first-class citizens
   Means they can be fed to functions as arguments or be returned from them
2. There is no clear advantage to using declarations over expressions like the way it is for regular functions (hoisting difference). Both class expressions and declarations  must be declared before they're used
3. The body of every class is executed in "strict mode" regardless of if you enabled that earlier

#### Preferred way to change Instance data

Instances are just objects that inherit KVP's and methods. 
If you want to update certain values, you have 2 main options

1. Change object data directly with dot/bracket notation
   (not recommended)
2. Change object values through a method defined on that instance
   (recommended)

```js
class Blueprint {
  date = new Date(); // hardcoded
  constructor(height, squareFeet, cost) {
    this.height = height;
    this.squareFeet = squareFeet;
    this.cost = cost;
    this.mood = 'neutral'; // hardcoded as well
  }
  // Changing class data (Recommended to use methods)
  setCost(inp) {
    this.cost = inp;
    return `New cost is ${this.cost} USD`;
  }
}
let house = new Blueprint(10, 645, 800000);
house.setCost(500000); // (recommended)
house.mood = 'happy'; // (not recommended)
console.log(house); // they both work
```

![image-20220417115008106](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220417115008106.png)



### this keyword, Rebinding, Updating Instance Values

#### this keyword in classes

We'll often use the `this` keyword when defining classes- specifically inside the constructor or an instance method

- In these cases, the `this` keyword will refer the instance object created by that class
- Ex. `house.printThis()` will simply print the house instance
  It won't print the house2 instance, unless we typed `house2.printThis()`

```js
class Blueprint {
  date = new Date(); // hardcoded
  constructor(height, squareFeet, cost) {
    this.height = height;
    this.squareFeet = squareFeet;
    this.cost = cost;
    this.mood = 'neutral'; // hardcoded as well
  }
  printThis() {
    console.log(this);
  }
}

let house = new Blueprint(10, 645, 800000); // gets printed**
let house2 = new Blueprint(15, 1200, 2000000);
house.printThis(); // this keyword for "house" references the "house" instance
```

![image-20220417102939345](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220417102939345.png)

This behavior is desirable most of the time. However, the this keyword can point to other things depending on the scenario- and we need to rebind it if it points to something unfavorable

#### this" in Different Situations

The `this` keyword referring to the window object when part of an event handler leads to a common error when working with classes (foreshadowing for rest of lesson)

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

By default, `this` keyword inside a constructor refers to the individual instance of the class

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

### Practical Example

#### How to write code cleanly

REMEMBER! 
We're using OOP Class Inheritance Method 2: ES6 Classes
Everything inside an class constructor gets executed as soon as the page loads

<< Functions we Invoke on the Global Scope >>

- Define them as methods inside the class prototype
- Invoke them inside the class constructor

<< Variables on the global scope >>

- Make them public/protected/private inside your class constructor function
- Pick whichever makes sense for the variable you're dealing with, and make sure the support is good (private properties are still uncommon as of 2021)
- Remember to change every instance of that variable being used. 
  Direct it towards its replacement, the class property

<< Event Listeners on the Global Scope (important AF) >>

- Define the event handlers as methods inside the class' prototype (outside of the constructor function block)
- Declare the event listeners inside the class constructor
  You will likely need to bind the "this" keywords for your event handlers
  Unless your methods don't use the "this" keyword at all 
- External event handlers' default "this" value is the `event.target`, but we typically want to refer back to the class we're working inside of. This is true every time we reference properties defined inside our class while performing calcs



#### Challenge 1: Description

SIMPLE STARTER CODE: https://jsfiddle.net/JasonXtuyotech/vjaxn1z5/4/
SIMPLE FINAL CODE: https://jsfiddle.net/JasonXtuyotech/vjaxn1z5/4/

I've created an example with variables, event listeners, and functions defined/invoked as soon as the page loads. All of these are on the global scope, for now (not recommended)

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



### Setters/Getters: Intro

You can use setters and getters an any object in JS. 
Traditional properties are referred to as data properties, while these are called assessor properties

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



### Getters/Setters: Advantages & Data Checks

#### The Problem they Solve

Getters and setters are special object methods with help us access things in our objects easier. 
There are many instances where we'd need this. Exhibit A...

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

### Class Methods: Not Inherited by Instances

#### Definition

They're methods who are properties of an object's constructor function

- They are not stored in the object's prototype, which means they're not inherited by any instances of that object's constructor
- This changes how they are used compared to methods that objects do inherit

```js
class Blueprint {
  constructor(height, squareFeet, cost) {
    this.height = height;
    this.squareFeet = squareFeet;
    this.cost = cost;
  }
  // This method gets inherited by all instances
  setCost(inp) {
    this.cost = inp;
    return `New cost is ${this.cost} USD`;
  }
  // Static methods do not get inherited by instances
  static check(obj) {
    console.log('pray');
  }
}
let house = new Blueprint(10, 1200, 800000);
console.log(house); 
```

![image-20220417121220623](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220417121220623.png)

#### Built in JS Method Examples

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

### ALL 3 METHODS: Define Properties on Prototypes 1

> WARP KEY: AADRIVE

Throughout this chapter and the next few, we've discussed ways on how to define...

1. Methods on prototypes (good for performance)
2. Methods directly on instance objects (taught to avoid this at all costs)
3. Properties on instance objects directly

We've never discussed how to define properties on prototypes- but its fairly easy

#### Demonstrations

Constructor Functions:

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



### ES6 Classes Overview 

FOR THE RECORD: Our theory document has a more detailed explanation on how this works

This will likely be the most popular method you encounter, regardless of whether you're using prototypal or class inheritance. I'm assuming you know the basics of how to set up ES6 classes for both in this lesson.

I'll be showing you where to define...

1)  Properties directly on object instances (dark blue)
2)  Properties on parent class prototypes (orange)
      Properties on child class prototypes (orange)

3)  Methods on constructor function prototypes (teal)

You can define methods directly on object instances, but you really shouldn't for the sake of performance. Not shown in the example

#### Cheat-Sheet 

The super keyword refers to **the parent class**. It is used to call the constructor of the parent class and to access the parent's properties and methods.

CODE: https://jsfiddle.net/JasonXtuyotech/mujxfb0d/

> keep in mind you don't have to make a child class
> Feel free to make an instance of the original PersonCL class
>
> ![image-20210429183502029](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210429183502029.png)

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



# Method 3: Object.create

### Object.create

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





# Inheritance b/t Parent & Child Classes

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

#### Example 2: Want new Properties/Methods

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

From the looks of it, we can implement them in one of 2 ways. Look at the property `university: YorkU `

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



### ALL 3 METHODS: Define Properties on Prototypes 2

In the previous chapter, we had a similar lecture that taught us how to define properties on constructor function prototypes. 

> WARP KEY: AADRIVE

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
  // Never define these in the constructor (performance nightmare)
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





# ==== NEW DATA STRUCTURES ====



# Overview & Requirements



### What are Data Structures?

#### Broad Description

We've been using default JS data structures like arrays and objects since the beginning
Now, we're going to build new non-default data structures that operate differently

WHAT ARE DATA STRUCTURES?

- They will each contain collections of values, as expected, but the relationships between the data will differ each time
- We must program basic interaction functionalities ourselves
  Ex. Arrays have push() and pop() methods, and our linked list DS will need one as well

HOW MANY ARE THERE?

- There are dozens of well established data structures that most developers should know, since they each excel at different things
- There are also thousands of niche data structures that nobody expects you to know

#### Why bother learning them?

1. They're a hot-topic during interviews
2. As a professional you'll eventually run into a scenario where you'll need a more performant way to deal with data
3. Some API's return graphs for example
   A default data structure won't know how to deal with that

#### Use Case Examples

Ex 1. Working with map locations/data and need to find the fastest path from A to B
Use a graph! It'd be wild to represent a map using an array

Ex 2. Need fast insertion/removal at any point in a dataset
Use a linked list! Arrays don't perform well when making changes to early elements

Ex 3. Web scraping nested HTML?
You'll likely need a tree since the DOM is one as well

#### How we make new Data Structures

We're going to be creating dozens of data structures defined as classes in JS
As of 2021, we have 3 methods to define them, but we'll stick with the one called "Class Syntax"



# Singly Linked Lists

> RUN TESTS WITH ANIMATED DIAGRAMS:
> https://visualgo.net/en/list?mode=LL

### Intro + Chapter Code Repo

#### What's a Singly Linked List?

Like an array, a singly linked list is capable of holding all sorts of data types like strings, numbers, other objects...etc

![image-20220417142953406](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220417142953406.png)

- Linked lists are like arrays that have no index numbers- they just have a head and tail
- If we want to access something down the list, you have to start at the beginning and work your way down each node (the linked list equivalent of an array element)
- Each node has a one way connection forward to the next one, except for the last node
  The last node's connection is equal to null, symbolizing the list's end

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220417142801687.png" alt="image-20220417142801687" style="zoom:80%;" />

#### Arrays vs Linked Lists

Linked lists are a valid choice when...

- You need several insertions and deletions
- You don't care about accessing data at random points
  Can still access data anywhere, but you must run through nodes 1 by 1 from the start each time

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220417143214493.png" alt="image-20220417143214493" style="zoom: 80%;" />

#### Naïve Linked Lists

This is a proof of concept, and you should not define your lists like this

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null; // set equal to null unless changed
  }
}

// Create a chain of new instances connected by the next property
let first = new Node('uno');
first.next = new Node('dos');
first.next.next = new Node('tres');
console.log(first); // an object
console.log(first.next); // an object inside an object
console.log(first.next.next); // an object inside an object inside an object. Pog...
```

![image-20220417144334981](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220417144334981.png)

#### Starter + Final Code

> Full Chapter Code: https://jsfiddle.net/Jason2B3/5heuj0v2/10/
>
> This save file contains all the methods we built into our `SinglyLinkedList` class
> Test out any of the methods in jsFiddle or your own editor

Every method we make for our SinglyLinkedList class will have the same boiler plate code shown below
To keep our notes lean, we'll only provide a snippet of each instance method without the starting code

```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Instance methods go here...
}
```



#### Checking your Solutions

- Instead of checking multiple nested objects to see if all your `next` properties are hooked up correctly, use the following method
- You'll notice a problem with what it logs if your next properties are not invalid

```js
  print() {
    // Log the linked list to the console
    if (!this.head) return; // If list is empty, print nothing
    let node = this.head;
    let arr = [];
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
    console.log(arr);
    return arr;
  }
```



### Push: Add node to end

#### Requirements

GOAL: 

1. Add new value to the end of your existing linked list
2. Return the array length after this edit

PLAN:

Regardless of the situation, create a variable in your push method named `newNode` and set it equal to a newly generated instance of the Node class

| push()       | linked list                                         | lastNode                               |
| ------------ | --------------------------------------------------- | -------------------------------------- |
| empty list   | set `head` and `tail` properties equal to `newNode` | N/A                                    |
| 1+ item list | set `tail` property equal to `newNode`              | set `next` property equal to `newNode` |

lastNode will no longer be the last node in the linked list once we're done

#### Plan Visualized

![image-20220419155345166](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419155345166.png)

![image-20220419155402787](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419155402787.png)

Required updates

1. Set node 48's `next` property to node 40
2. Set linked list's `tail` property to node 40
3. Increment list length

#### Code

```js
  push(val) {
    let newNode = new Node(val); // new node object
    // Case: empty list
    if (!this.head) this.head = this.tail = newNode;
    // Case: 1+ item list
    else {
      this.tail.next = newNode; // update 1
      this.tail = newNode; // update 2
    }
    this.length += 1; // update 3
    return this.length; // return new array length, like the default js push method
  }
```



### Traversing down Linked Lists

REMEMBER:

- Since linked lists have no index number, we don't have a 0th entry. 
- This changes the way we write our comparisons

#### Traversal Method

We're going to run through each item in a linked list and log it to the console

- Loop your way through a linked list using a while loop that ends as soon as we reach a node whose next property equals null
- We can't use for loops since lists have no indices

```js
  traverse() {
    let currentNode = this.head; // start traversal at the first item
    // While ends when there is no next node
    while (currentNode) {
      // Set currentNode equal to the next list item to advance down the list
      console.log(currentNode);
      currentNode = currentNode?.next; // eventually equals undefined
    }
```

TEST

```JS
let list = new SinglyLinkedList();
list.push('HELLO');
list.push('BYE');
list.push('GOOD DAY');
list.push('BAD NIGHT'); // list length = 4 now
list.traverse();
```

![image-20220418062116678](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220418062116678.png)



### Pop: Remove last node

#### Requirements

1. Remove node from end of existing linked list
2. Return what was removed

PLAN:

| pop()        | linked list                                  | second last node                      |
| ------------ | -------------------------------------------- | ------------------------------------- |
| empty list   | return undefined                             | N/A                                   |
| 1 item list  | set `tail and head` equal to null            | N/A                                   |
| 2+ item list | set the `tail` equal to the second last node | set the `next` property equal to null |

We won't actually be deleting the last node object

- When we remove a node from the list, that node still exists floating in your computer's memory somewhere. 
- It is just no longer part of the chain of nested objects we keep referring to as a linked list

#### Plan visualized

![image-20220419160838851](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419160838851.png)

![image-20220419160859395](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419160859395.png)

Required updates

1. Set list `tail` property to node 48
2. Set node 48 `next` property to null
3. Decrement list length

#### Code

```js
  pop() {
    if (!this.head) return undefined;
    let currentNode = this.head; // start traversal at the first item
    let nthItem = 0;
    // Case: 1 item list
    if (this.length === 1) {
      let onlyNode = this.head;
      this.head = this.tail = null;
      this.length--;
      return onlyNode;
    }
    // Case: 2+ item list
    while (currentNode) {
      if (nthItem === this.length - 2) {
        let oldLastItem = currentNode.next; // save before its gone
        // Set a new last item for the list
        currentNode.next = null; // set 2nd last list node's next property to null
        this.tail = currentNode; // set list's tail equal to the second last item
        this.length--; // lower the list length
        // Now, the last item's chopped off and the 2nd last item's taken its spot
        return oldLastItem;
      }
      // Set node equal to the next list item to advance down the list
      currentNode = currentNode?.next; // eventually equals undefined
      nthItem++; // increment nth item
    }
  }
```



### Shift: Remove first node

#### Requirements

1. Remove the first node in the list
2. Return the node we removed

PLAN:

| shift()      | linked list                               | first node                        |
| ------------ | ----------------------------------------- | --------------------------------- |
| empty list   | return undefined                          | N/A                               |
| 1 item list  | set `head and tail` equal to null         | N/A                               |
| 2+ item list | set `head` property equal to `secondNode` | set `next` property equal to null |

firstNode will no longer be in the list after we're done

#### Plan visualized

![image-20220419161905868](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419161905868.png)

![image-20220419161918272](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419161918272.png)

Required updates

1. Set node 33's `next` property equal to null 
2. Set list's `head` property equal to node 55
3. Decrement list length

#### Code

```js
  shift() {
    // Case: 0 entry list
    if (this.length === 0) return undefined;
    let firstNode = this.head; // preserve what we'll be removing
    // Case: 1 entry list
    if (this.length === 1) this.head = this.tail = null;
    // Case: 2+ entry list
    else this.head = firstNode.next; // update 2
      
    this.length--; // update 3
    firstNode.next = null; // update 1
    return firstNode; // return what we chopped off
  }
```



### Unshift: Add node to start

#### Requirements

1. Add a node to the start of the linked list equal to the parameter a user supplies
2. Return the array length-post addition

PLAN:
Generate a new node using equal to a user input and save it to a variable named `newNode`

| unshift()    | linked list                            | `newNode`                                |
| ------------ | -------------------------------------- | ---------------------------------------- |
| empty list   | set `head and tail` equal to `newNode` | N/A                                      |
| 1+ item list | set `head` property equal to `newNode` | set `next` property equal to `firstNode` |

`firstNode` will no longer be the first node in the list after we're done

#### Plan visualized 

![image-20220419164118184](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419164118184.png)

![image-20220419164137240](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419164137240.png)

Required updates

1. Set node 20's `next` property to node 55
2. Set list's `head` property to node 20
3. Increment list length

#### Code

```js
  unshift(val) {
    let newNode = new Node(val);
    // Case: empty list
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    // Case: 1+ item list
    else {
      newNode.next = this.head; // update 1
      this.head = newNode; // update 2
    }
    this.length++; // update 3
    return this.length;
  }
```



### Get: Retrieve Node at position i

#### Requirements

Build a function that accepts an integer that will represent the index

1. If you feed it a value that's greater than the (list length-1) or negative, return undefined
2. Feeding get() an argument of 0 should retrieve the first node

- An argument of 2 should retrieve the third...etc
- This means we should start our iteration counter at 0

#### Code

Use a counter and start it at 0 

```js
  get(index) {
    if (index < 0 || index > this.length-1) return undefined;
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode) {
      if (currentIndex === index) return currentNode;
      // Advance down the list by redefining currentNode to currentNode.next
      currentNode = currentNode.next;
      currentIndex++;
    }
  }
```



### Set: Update Node at position i

#### Requirements

Build a function that accepts 2 arguments

- Index value i
- A new value (not a node, just a value)
  A new node using that value will replace the original node at position i

Hints!

1. There's no need to replace the entire nth node- just update its value
   This way you can skip redefining next properties
2. Use the get method we built earlier to see if the node the user specified an index for exists or not

#### Code

```js
  set(i, newVal) {
    // Use our get method to see if we have an item at that index
    let foundNode = this.get(i);
    // If we do find a node, update its val property and nothing else
    if (foundNode) {
      foundNode.val = newVal;
      return true;
    } else return false;
  }
```



### Insert: Place a new node at position i

#### Requirements

1. Your function should accept an index number and a new value
   Index must be in bounds of the list, or it returns false
2. Insert that node into the linked list at that index number
3. If the insertion succeeds, return true- and return false if it doesn't

Hook everything up properly!

- Node before the supplied index position should have its next property pointing to our new node
- The new node must point to the remaining items in the list

| insert()     | node i - 1                       | newNode                         |
| ------------ | -------------------------------- | ------------------------------- |
| empty list   | return undefined                 | N/A                             |
| 1+ item list | set `next` property to `newNode` | set `next` property to `node i` |

#### Approach Visualized

![image-20220419194407840](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419194407840.png)

![image-20220419194420811](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419194420811.png)

Required updates

1. Set node 55's next property to node 4
2. Set node 4's next property to node 36
3. Increment list length

If a new node's added at the list start/end, change the list head/tail
We take care of this using push() or unshift(), so we don't need to reuse that logic

#### Code

We're going to rely on previous methods we've built so we don't need to recode the same actions

- If someone tries to insert at the list's start, use unshift()
- If someone tries to insert at the list end, use push()
- Otherwise, use the get() method to access nodes

```js
  insert(i, val) {
    // Return undefined if the user provides an index out of bounds
    if (i < 0 || i > this.length) return false;
    // Use unshift or push if the user wants changes at the list start or end
    if (i === 0) this.unshift(val);
    else if (i === this.length || this.length === 0) this.push(val);
    // If you're inserting elsewhere...
    else {
      let newNode = new Node(val);
      let nodeBeforeI = this.get(i - 1);
      let node_i = nodeBeforeI.next
      newNode.next = node_i; // Point newNode to the current node at index i
      nodeBeforeI.next = newNode; // Point node before index i to newNode
      this.length++;
    }
    return true;
  }
```



### Remove: Get rid of the node at position i

#### Requirements

Your function should accept an index number telling it which list item to delete

- If the index is 0, use shift() 
- If the index is the last list item, use pop()
- Otherwise, use get() to locate the item you wish to delete, and the one before it so you can fix its next property
- Don't forget to decrement the list length

| remove()      | node i - 1                        | node i                            |
| ------------- | --------------------------------- | --------------------------------- |
| empty list    | return undefined                  | N/A                               |
| 1+ entry list | set `next` property to node i + 1 | set `next` property equal to null |

#### Plan visualized

![image-20220419200701232](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419200701232.png)

![image-20220419200716637](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419200716637.png)

Required updates

1. Set node 4's `next` property to null
2. Set node 55's `next` property to node 36
3. Decrement list length

#### Code

```js
  remove(i) {
    if (i < 0 || i >= this.length) return undefined;
    // Use shift or pop if you're removing the first or last item
    if (i === 0) return this.shift();
    else if (i === this.length - 1) return this.pop();
    // If you're removing any other node
    else {
      let beforeTarget = this.get(i - 1);
      let removed = beforeTarget.next; // preserve the node you're cutting off
      // Update the previous node's next property to the node after the original next
      beforeTarget.next = beforeTarget.next.next; // update 2
      this.length--; // update 3
      removed.next = null; // update 1
      return removed; // return the node you cut off
    }
  }
```



### Reverse the linked list

#### Requirements

#### Approach

1. Swap the list head/tail

- Keep in mind this does nothing to reverse the list
- It just changes what the list instance pointers reference

2. Loop through your linked list forwards to "rewire" the arrows in your linked list

```
LINKED LIST @ START
Head											Tail
13		→		27 		→		32		→		71

LINKED LIST IMMEDIATELY AFTER SWAP
Tail											Head
13		→		27 		→		32		→		71
```

What i mean by rewiring

- Loop through the linked list forwards (13 to 27 to 32 to 71)
- 13: set next property to null
  27: set next property to node 12
  32: set next property to node 27
  71: set next property to node 32

```
LINKED LIST AFTER LOOPING + REWIRING IS COMPLETE
Tail											Head
13		←		27 		←		32		←		71
```

This rewiring process requires 3 variables: `prev, curr, and next`- all of which reference nodes



#### Code

```js
  reverse() {
    // Swap head and tail
    let currNode = this.head; // the node we're on currently
    this.head = this.tail;
    this.tail = currNode;

    let prevNode = null; // the previous node we visited while looping (will be set equal to next node's next property)
    let nextNode = null; // use to preserve what node we'll visit next
    let i = 0;
    while (i < this.length) {
      nextNode = currNode.next; // the next node in the loop (preserved)
      currNode.next = prevNode; // rewire the arrow direction for the node we're on
      // Prepare for next round
      prevNode = currNode; // prev node in next loop will be the one we're on now
      currNode = nextNode; // change currentNode to the next node in the loop
      i++; 
    }
  }
```



# Doubly Linked Lists

> RUN TESTS WITH ANIMATED DIAGRAMS:
> https://visualgo.net/en/list?mode=DLL

### Intro + Chapter Code Repo

#### Double vs Single

ADVANTAGES OVER SINGLY LINKED:
Each item in a doubly linked list has 2 pointers - one that points to the next node and the previous

- The first node's pointer backwards equals null
- The last node's pointer forwards equals null

![image-20220419034808779](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419034808779.png)

If you want to work your way down the list backwards, you can do so easily using the prev property
Technically you can find ways to work backwards in singly linked lists too, but it's extremely inefficient

DISADVANTAGES

- Doubly linked lists require more memory
- Writing certain methods requires more work due to having an additional `prev` property to make sure is hooked up correctly

#### Starter and Final Code

> FINAL CODE: https://jsfiddle.net/Jason2B3/fj27uxv0/3/

STARTER CODE:
The `DoublyLinkedList` class will wrap around every instance method we write in this chapter

```js
class Node {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

const list = new DoublyLinkedList();
```



#### Checking your Solutions

It can be tiresome to dig through nested objects and check properties to see if you've reconnected list items properly when coding instance methods. 

- Instead, use one of these functions to print your list forwards or in reverse
- If an error occurs during `print()`, one of your `next` properties is wrong
- If an error occurs during `printReverse()`, one of your `prev` properties is wrong

```js
  print() {
    // Log the linked list to the console to check our next connections
    if (!this.head) return; // If list is empty, print nothing
    let node = this.head;
    let arr = [];
    while (node) {
      arr.push(node.val);
      node = node?.next;
    }
    console.log(arr);
    return arr;
  }
  printReverse() {
    // Log the linked list to the console in reverse to check our prev connections
    if (!this.head) return; // If list is empty, print nothing
    let node = this.tail;
    let arr = [];
    while (node) {
      arr.push(node.val);
      node = node?.prev;
    }
    console.log(arr);
    return arr;
  }
```



### Push: Add node to end

#### Requirements

GOAL: 

1. Add new value to the end of your existing linked list
2. Return the array length after this edit

PLAN:

Regardless of the situation, create a variable in your push method named `newNode` and set it equal to a newly generated instance of the Node class

| push()              | linked list                              | original last node                                  | newNode                                     |
| ------------------- | ---------------------------------------- | --------------------------------------------------- | ------------------------------------------- |
| empty          list | set `head` and `tail` equal to `newNode` | N/A                                                 | N/A                                         |
| 1+ item list        | set `tail` property equal to `newNode`   | set `origLastNode.next` property equal to `newNode` | `newNode.prev` equal the original last node |

#### Plan Visualized

IF WE'RE ADDING TO A NON-EMPTY LIST:

![image-20220419052602415](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419052602415.png)

![image-20220419052714314](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419052714314.png)

Four things must get updated- may or may not be in this order

1. 50 next property.      AKA. `origLastNode.next`
2. 80 prev property       AKA. `newNode.prev`
3. List tail property. 	
4. List length property

Look out for `update #` comments in our code

#### Code

```js
  push(val) {
    let newNode = new Node(val);
    // Case: 0 entry list
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    // Case: 1+ entry list
    else {
      newNode.prev = this.tail; // update 2
      this.tail.next = newNode; // update 1
      this.tail = newNode; // update 3
    }
    this.length++; // update 4
    return this.length;
  }
```



### Pop: Remove last node 

#### Requirements

1. Remove node from end of existing linked list
2. Return what was removed

PLAN:

| pop()        | linked list                                  | last node                   | second last node                |
| ------------ | -------------------------------------------- | --------------------------- | ------------------------------- |
| empty list   | return undefined                             | N/A                         | N/A                             |
| 1 item list  | set `tail` and `head` equal to null          | N/A                         | N/A                             |
| 2+ item list | set the `tail` equal to the second last node | set `prev` property to null | set the `next` property to null |

#### Plan Visualized

![image-20220419063455634](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419063455634.png)

![image-20220419063526596](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419063526596.png)

Required updates

1. Set next property of node 15 to null
2. Set prev property of node 2 to null
3. Set list's tail property to node 15, the 2nd last node
4. Decrement list length by 1

#### Code

Remember, this list is doubly linked so we can actually go directly to the end using `this.tail` and work backwards up the list to edit the second last node

```js
  pop() {
    // Case: 0 entry list
    if (this.length === 0) return undefined; // if list is empty
    let removed = this.tail; // preserve for return
    // Case: 1 entry list
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    // Case: 2+ entry list
    else {
      this.tail = this.tail.prev; // update update 3
      removed.prev = null; // update 2
      this.tail.next = null; // update 1
    }
    this.length--; // update 4
    return removed; // return what was chopped off
  }
```



### Shift: Remove first node

#### Requirements

1. Remove the first node in the list
2. Return the node we removed

PLAN:

| shift()       | linked list                         | original first node      | second node              |
| ------------- | ----------------------------------- | ------------------------ | ------------------------ |
| empty list    | return undefined                    | N/A                      | N/A                      |
| 1 entry list  | set `head` and `tail` equal to null | N/A                      | N/A                      |
| 2+ entry list | set `head` equal to second node     | set `next` equal to null | set `prev` equal to null |

#### Plan Visualized

![image-20220419071920186](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419071920186.png)

![image-20220419071841362](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419071841362.png)

Required Updates

1. Set `next` property of node 44 to null
2. Set `prev` property of  node 23 to null
3. Set the list's `head` property equal node 23
4. Decrement list length by 1

#### Code

```js
  shift() {
    // Case: 0 entry list
    if (this.length === 0) return undefined;
    let firstNode = this.head; // preserve what we'll be removing
    // Case: 1 entry list
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    // Case: 2+ entry list
    else {
      let secondNode = this.head.next;
      this.head = secondNode; // update 3
      firstNode.next = null; // update 1
      secondNode.prev = null; // update 2
    }
    this.length--; // update 4
    return firstNode; // remove what we chopped off
  }
```



### Unshift: Add node to start

#### Requirements

1. Add a node to the start of the linked list equal to the parameter a user supplies
2. Return the array length-post addition

PLAN:
Generate a new node whose and save it to a variable named `newNode`

| unshift()    | list                                     | original first node           | `newNode`                                            |
| ------------ | ---------------------------------------- | ----------------------------- | ---------------------------------------------------- |
| empty list   | set `head` and `tail` equal to `newNode` | N/A                           | N/A                                                  |
| 1+ item list | set `head` equal to `newNode`            | set `prev` equal to `newNode` | set `next` property equal to the original first node |

#### Plan Visualized

![image-20220419093300511](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419093300511.png)

![image-20220419093314882](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419093314882.png)

Required updates

1. Set node 23 `prev` property to node 85
2. Set node 85 `next` property to node 23
3. Set list `head` to node 85
4. Increment list length by 1

#### Code

```js
  unshift(val) {
    // Case: 0 entry list (just use push since list is empty anyway)
    if (this.length === 0) return this.push(val);
    // Case: 1+ entry list
    let newNode = new Node(val);
    this.head.prev = newNode; // update 1
    newNode.next = this.head; // update 2
    this.head = newNode; // update 3
    this.length++; // update 4
    return this.length;
  }
```



### Get: Retrieve node at position i

#### Requirements

Build a function that accepts an integer that will represent the index

1. If you feed it a value that's greater than the (list length-1) or negative, return undefined
2. Feeding get() an argument of 0 should retrieve the first node

- An argument of 2 should retrieve the third...etc
- This means we should start our iteration counter at 0

#### Performance Saving

FOR THE RECORD:
You can code this method the same as the `SinglyLinkedList` version, but `DoublyLinkedList` allows us to integrate one major optimization which can save a good amount of performance

![image-20220419095545117](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419095545117.png)

Before you traverse your list to reach the node at position i, decide which of the following 2 approaches to take:

- If the dev uses `get(5)`, it'd be faster to traverse the list from tail to head to reach/retrieve the node at that position
- Inversely, if the dev types `get(2)`, it'd be more performant to traverse the list from head to tail

#### Code

```js
  get(i) {
    if (i < 0 || i > this.length - 1) return undefined;
    let midIndex = Math.floor(this.length / 2);
    let counter; // use to determine whether you've reached list item i yet or not
    let currentNode; // use to walk fwd or backwards through list
    // if i is closer to the list's tail, traverse from tail → head
    if (i > midIndex) {
      currentNode = this.tail;
      counter = this.length - 1;
      while (currentNode) {
        if (counter === i) return currentNode;
        currentNode = currentNode?.prev; // advance backwards up list
        counter--; // decrement counter
      }
    }
    // if i is closer to the list's head, traverse from head → tail
    else {
      currentNode = this.head;
      counter = 0;
      while (currentNode) {
        if (counter === i) return currentNode;
        currentNode = currentNode?.next; // advance forward down list
        counter++; // increment counter
      }
    }
  }
```



### Set: Update Node at Position i

#### Requirements

Build a function that accepts 2 arguments

- Index value i
- A new value (not a node, just a value)
  A new node using that value will replace the original node at position i

Hints!

1. There's no need to replace the entire nth node- just update its value
   This way you can skip redefining next properties
2. Use the get method we built earlier to see if the node the user specified an index for exists or not

#### Code

This code is 100% identical to the singly linked version

```js
  set(i, newVal) {
    // Use our get method to see if we have an item at that index
    let foundNode = this.get(i);
    // If we do find a node, update its val property and nothing else
    if (foundNode) {
      foundNode.val = newVal;
      return true;
    } else return false;
  }
```



### Insert: Inject node at position i

#### Requirements

1. Your function should accept an index number and a new value
   Index must be in bounds of the list, or it returns false
2. Insert that node into the linked list at that index number
3. If the insertion succeeds, return true- and return false if it doesn't

Approach

| insert()     | newNode                                                 | node i                      | node i - 1                  |
| ------------ | ------------------------------------------------------- | --------------------------- | --------------------------- |
| empty list   | just use the push() method                              | N/A                         | N/A                         |
| 1+ item list | set `prev` equal to node i-1 and `next` equal to node i | set `prev` equal to newNode | set `next` equal to newNode |

#### Approach Visualized

![image-20220419120350874](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419120350874.png)

![image-20220419120433391](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419120433391.png)

Required Updates

1. Set node 17 `prev` property to node 87
2. Set node 17 `next` property to node 88
3. Set node 87 `next` property to node 17
4. Set node 88 `prev` property to node 17
5. Increment list length

#### Code

We use the get() method we defined earlier in this chapter

```JS
  insert(i, val) {
    // Return undefined if the user provides an index out of bounds
    if (i < 0 || i > this.length) return false;
    // Use unshift or push if the user wants changes at the list start
    if (i === 0) return !!this.unshift(val);
    // Use push if list is empty or the user wants to inject after the tail item
    else if (i === this.length || this.length === 0) return !!this.push(val);
    // If you're inserting elsewhere, use get()
    let newNode = new Node(val);
    let node_i = this.get(i);
    let node_before_i = node_i.prev;

    newNode.prev = node_before_i; // update 1
    newNode.next = node_i; // update 2
    node_before_i.next = newNode; // update 3
    node_i.prev = newNode; // update 4
    this.length++; // update 5
    return true;
  }
```



### Remove: Get ride of the node at position i

#### Requirements

Your function should accept an index number telling it which list item to delete

PLAN:

| remove()         | node i - 1               | node i                      | node i + 1               |
| ---------------- | ------------------------ | --------------------------- | ------------------------ |
| list of 1+ items | set `next` to node i + 1 | set `next and prev` to null | set `prev` to node i - 1 |

Edge cases

- If the user submits an index value i that's out of bounds, return undefined
- If user tries to remove() from an empty list, return undefined

#### Plan Visualized

![image-20220419131557604](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419131557604.png)

![image-20220419131610855](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220419131610855.png)

Required Updates

1. Set node 23's next property to node 17
2. Set node 17's prev property to node 23
3. Set node 17's next property to null
4. Set node 17's prev property to null
5. Decrement list length

#### Code

If the user tries to remove from the list start or end, we can use pop() or shift()

```js
  remove(i) {
    if (i < 0 || i >= this.length) return undefined;
    // Use shift or pop if you're removing the first or last item
    if (i === 0) return this.shift();
    else if (i === this.length - 1) return this.pop();
    // If you're removing any other node
    else {
      let target = this.get(i);
      let beforeTarget = target.prev;
      let afterTarget = target.next;

      beforeTarget.next = afterTarget;
      afterTarget.prev = beforeTarget;
      target.prev = target.next = null;
      this.length--;
      return target; // return what we chopped off
    }
  }
```



### Big O: Single vs Double

BIG O SCORES

|           | singly                                                       | doubly        |
| --------- | ------------------------------------------------------------ | ------------- |
| insertion | `O(1)`                                                       | `O(1)`        |
| removal   | `O(n)` worst case<br />though the Big O cheat sheet disagrees | `O(1)` always |
| searching | `O(n)`                                                       | `O(n)`        |
| access    | `O(n)`                                                       | `O(n)`        |

Explanation for singly linked list score of `O(n)` for removal

- If you must remove from the end of the list or close to it, you must loop starting from the head node
- Doubly linked lists allow you to loop backwards starting from the tail node

#### Discrepancies with Big O Cheat sheet

There is at least 1 difference in our Big O table here if you look at the cheat sheet fr/ an earlier chapter
Take this following table with higher priority (we explain our point and it makes sense)



# Stacks

> RUN TESTS WITH ANIMATED DIAGRAMS: 
> https://visualgo.net/en/list?mode=Stack

### Intro to Stacks: LIFO

Stacks are just collections of data that abide by the LIFO principle

- They can be built using existing data structures like arrays, or can be made from scratch
- Stacks are abstract data structures which gives us flexibility with how to generate them

#### LIFO: "Last in first out"

ANALOGY
Imagine a tall stack of dishes you need to clean while working as a restaurant busboy

- The last dish that goes in the pile will be put on top
- The first dish you take out of the pile to scrub will also be from the top (the last ones added)

IN SIMPLE TERMS:

- The last item added in is the first item removed
- The first item added is the last item removed

The callstack works the same way since the functions on top get resolved before the ones below

#### Big O

As the cheat sheet says, stacks have...

- `O(1)` for insertion and removal
- `O(n)` for searching and access

We actually don't care about searching/access when it comes to stacks. 

- If those are actions you plan on doing, you're better off using another data structure. 
- Stacks should be used when all you care about is adding things to the top of a pile, then knocking those things at the top off

#### Practical Applications

Use it anytime you'd like to return the most recent thing first

Examples

1. Search history
   You want the most recent sites you've visited to appear at the top of the list 
   (not the earliest things your computer can remember from months ago)
2. Undo/redo
   Your computer stores edits you've made, and if you hit CTRL-Z, we want to undo the most recent one
3. Go back one page or fast forward (URL's)



### Build Stacks using Arrays

Some coding languages come with their own stack data type- and JS is not one of them

- Fortunately we can still use built in array/list data types to create our own stack
- All we must do is ensure the last items in are the first out ...and vice versa (LIFO)

#### Push and pop

If we use arrays while abiding by a set of rules, we can ensure the last items in are the first ones out

> ONLY METHODS WE CAN USE ON OUR ARRAY-STACK
> push(): adds items to end of array
> pop() : removes items from end of array

- The last items pushed to an array will be the first ones popped
- Don't use any other methods that insert or remove items elsewhere, or else our array won't conceptually be a stack anymore

If we abide by these rules, then technically our array can be considered a stack

EXAMPLE:

```js
const stack = []; // a stack, conceptually
stack.push('Blunder');
stack.push('Based Lord CTC');
stack.pop(); // last item in will be the first out
```



#### Shift and unshift

The last items added/unshifted to an array will be the first ones removed/shifted
Don't use other methods that insert/remove elsewhere, just like before

> ONLY METHODS WE CAN USE ON OUR ARRAY-STACK
> unshift(): add element to start of array
> shift() : remove first array element

#### Downside: Performance

If you're concerned with performance, you probably don't want to use arrays to build stacks. 

- This is especially true if you're relying on the shift/unshift method which adds/removes items from the start of an array. 
- All the re-indexing becomes an issue when the arrays get to be extremely long- which is often the case while doing professional work

#### Involvement in other Data Structures

Some data structures incorporate stacks or queues as part of their own build process. 

- In future chapters, we'll likely use array-stacks since they're much faster to type. 
- That being said, it's the inferior approach and we only do it for the sake of maintaining focus on learning new data structures in those other chapters



### Build a Stack from scratch

Arrays come with index numbers and dozens of methods we aren't allowed to use if we want to keep our array as a stack, conceptually

- We have the option to build our own data structure class to match what a stack should be- just like we did with linked lists
- In fact, building your own stack class is very similar to how we build the singly linked list class
  We could build a doubly linked stack variant- but its similar to singly linked stacks anyway 

#### Starter and Finisher Code

FINISHER CODE: https://jsfiddle.net/Jason2B3/agy45tmj/

STARTER CODE:

```JS
class Node {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null; // top of the stack
    this.tail = null; // bottom of the stack
    this.size = 0;
  }  
  push(val) {} // Add to top 
  pop() {} // Remove from top
  print() {
    // Log the stack to the console in array form
    if (!this.head) return; // If list is empty, print nothing
    let node = this.head;
    let arr = [];
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
    console.log(arr);
    return arr;
  }
}
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220420090838440.png" alt="image-20220420090838440" style="zoom:67%;" />



### Push/Pop for Stacks vs Arrays

Push and pop methods work completely differently in arrays vs stacks and I'll explain why

#### Start & end of a Stack

WHERE TOP/BOTTOM ARE:
A stack begins at it's very top- we can name the `head, top, start`... etc in our Stack class
Stacks end at their bottom- which we refer to as `tail, bottom, end`... etc

![image-20220420092122761](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220420092122761.png) <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220420093849044.png" alt="image-20220420093849044" style="zoom:75%;" /> 

#### Push/pop in Arrays vs Stacks

|      | stacks                                                       | arrays                            |
| ---- | ------------------------------------------------------------ | --------------------------------- |
| push | adds item to top of the stack, which we consider the start of it             ( more similar to `array.unshift`) | adds item to end of the list      |
| pop  | removes item from top of the stack, which we consider the start of it ( more similar to `array.shift`) | removes item from end of the list |

IN OTHER WORDS:
Stack item insertion and removal happen on the same side... the top/start/head



### Push: add node to top of stack

#### Requirements

1. Add a node to the start of the stack equal to the parameter a user supplies
2. Return the stack size post-addition

PLAN:
Generate a new node using equal to a user input and save it to a variable named `newNode`

| push()        | stack                                  | `newNode`                                            |
| ------------- | -------------------------------------- | ---------------------------------------------------- |
| empty stack   | set `head and tail` equal to `newNode` | N/A                                                  |
| 1+ item stack | set `head` property equal to `newNode` | set `next` property equal to `firstNode` in the list |

`firstNode` will no longer be the first node in the stack after we're done

#### Plan Visualized

​													<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220420094543385.png" alt="image-20220420094543385" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220420094604295.png" alt="image-20220420094604295" style="zoom:80%;" />	

Required Updates

1. Set node 27's `next` property equal to node 61
2. Set stack `head` equal to node 27
3. Increment stack size

#### Code

```js
  // Add to top
  push(val) {
    let newNode = new Node(val);
    // If list is empty, set head and tail equal to newNode
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    // If list is not empty, just set the head equal to newNode
    else {
      newNode.next = this.head; // set newNode.next equal to original head
      this.head = newNode; // redefine the old list head as the new node
    }
    this.size++; // update length then return it
    return this.size;
  }
```



### Pop : remove node from top of stack

#### Requirements

1. Remove the first node at the top of the stack
2. Return the node we removed

PLAN:

| pop()         | stack                                     | `firstNode`                       |
| ------------- | ----------------------------------------- | --------------------------------- |
| empty stack   | return undefined                          | N/A                               |
| 1 item stack  | set `head and tail` equal to null         | N/A                               |
| 2+ item stack | set `head` property equal to `secondNode` | set `next` property equal to null |

`firstNode` will no longer be the first node in the stack after we're done (it won't be part of it at all)

#### Plan visualized

​													<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220420094148388.png" alt="image-20220420094148388" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220420094201068.png" alt="image-20220420094201068" style="zoom:80%;" />

Requirements

1. Set node 69 `next` property to null
2. Set stack `head` to node 5
3. Decrement stack size

#### Code

```js
  // remove from top
  pop() {
    // Case: 0 entry list
    if (this.size === 0) return undefined;
    let firstNode = this.head; // preserve what we'll be removing
    // Case: 1 entry list
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    }
    // Case: 2+ entry list
    else this.head = firstNode.next; // update 2
    this.size--; // update 3
    firstNode.next = null; // update 1
    return firstNode; // return what we chopped off
  }
```



# Queues

> RUN TESTS WITH ANIMATED DIAGRAMS: 
> https://visualgo.net/en/list?mode=Queue

### Intro to Queues: FIFO

Queue's are very similar to stacks- they are a data structure where our only concerns are inserting and deleting elements into a list

#### FIFO: "first in, first out"

The only difference between stacks and queues is the approach we take for inserting/removing items.
Queues abide by FIFO: "first in first out"

Imagine a line at an amusement park

- The first people in line get to leave and board the ride first
- Last people in line get to leave and ride last

#### Practical Applications

Anytime you need to implement a line or establish priority access when a user is earlier than others

Examples

1. Game matchmaking
   Anyone who searches for a game first should be matched with other players faster than those who queue'd up later
2. Print queue
   If you submit a print job before someone else, you should have your essay printed before them
3. Background tasks
   If you commence the download on Rocket League at 3:00PM, then later commence the download of Apex legends at 3:30PM, prioritize the download of Rocket League (since that started first)



### Build Queue using arrays

We can form a queue using arrays- as long as we have certain restrictions regarding methods

WHAT IT TAKES TO BE A QUEUE
All queues require is for the first items added to be the first things removed
This can be achieved using a pair of array methods

- Just make sure not to use any others when interacting with your conceptual queue which is defined as an array in JS
- If we insert or remove items using different methods at random points in the array, then it won't conceptually be a queue anymore

#### push & shift

push: 

- Add elements to the end of an array
- The elements added earlier will stay at the start

shift: 

- Remove elements from the start of the array
- The ones at the start were the ones added first

EXAMPLE:

```js
let q = [];
q.push(4); // [4] // first element in
q.push(6); // [4,6]
q.push(9); // [4,6,9] adding to end
q.shift(); // 4 gets removed and it was the first in
console.log(q); // [6,9]
```

#### unshift and pop

unshift:

- Add new elements at start of the array
- The items added initially will stay at the end of the array

pop:

- Remove elements from the end of the array
- The elements at the end were added first thanks to unshift()

#### Performance Issues

Regardless of which approach you choose, you will sacrifice performance trying to build queues using arrays- due to the re-indexing necessary when you add or remove nodes at the start of an array

- It's more performant to use your own queue class, and not particularly tough to write either
- That being said, you will see us use array queue's later in this course when using it as part of other data structures- just because they're faster to write 



### Build Queue from Scratch

#### Queue Diagram

![image-20220421033841360](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220421033841360.png)

- Add nodes at the end of the queue (tail end)
- Remove nodes from the start of the queue (head)

#### Starter Code

```js
class Node {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null; // start/front of queue
    this.tail = null; // end/back of queue
    this.size = 0;
  }
  // Add node to end of queue (like array.push)
  enqueue(){}
  // Remove node from start of queue (like array.shift)
  dequeue(){}
  print() {
    // Log the stack to the console to check if things were done correctly
    if (!this.head) return; // If list is empty, print nothing
    let node = this.head;
    let arr = [];
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
    console.log(arr);
    return arr;
  }
}
```



### Enqueue: add node to end 

This method operates just like `array.push()`

#### Requirements

PLAN:

Regardless of the situation, create a variable in your push method named `newNode` and set it equal to a newly generated instance of the Node class

| enqueue()     | queue                                               | lastNode                               |
| ------------- | --------------------------------------------------- | -------------------------------------- |
| empty queue   | set `head` and `tail` properties equal to `newNode` | N/A                                    |
| 1+ item queue | set `tail` property equal to `newNode`              | set `next` property equal to `newNode` |

lastNode will no longer be the last node in the linked list once we're done

#### Plan Visualized

![image-20220420165047418](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220420165047418.png)

![image-20220420165103740](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220420165103740.png)

Required updates

1. Set node 94 `next` property to node 29
2. Set queue `tail` property to node 29
3. Increment queue size

#### Code

```js
  // Add node to end of queue (like arr.enqueue)
  enqueue(val) {
    let newNode = new Node(val); // new node object
    // Case: empty queue
    if (!this.head) this.head = this.tail = newNode;
    // Case: 1+ item queue
    else {
      this.tail.next = newNode; // Set latest node's "next" property equal to newNode
      this.tail = newNode; // Set the list's tail property equal to newNode
    }
    this.size += 1; // update the size
    return this.size; // 
  }
```



### Dequeue: remove node from start

This method operates just like `array.shift()`

#### Requirements

1. Remove the first node in the list
2. Return the node we removed 

PLAN:

| dequeue()    | queue                                     | first node                        |
| ------------ | ----------------------------------------- | --------------------------------- |
| empty list   | return undefined                          | N/A                               |
| 1 item list  | set `head and tail` equal to null         | N/A                               |
| 2+ item list | set `head` property equal to `secondNode` | set `next` property equal to null |

firstNode will no longer be in the queue after we're done

#### Plan Visualized

![image-20220420165133516](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220420165133516.png)

![image-20220420165151386](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220420165151386.png)

Required updates

1. Set node 74 `next` property to null
2. Set queue `head` property to node 44
3. Decrement queue size

#### Code

```js
  // Remove node from start of queue (like arr.shift)
  dequeue() {
    // Case: 0 entry list
    if (this.size === 0) return undefined;
    let firstNode = this.head; // preserve what we'll be removing
    // Case: 1 entry list
    if (this.size === 1) this.head = this.tail = null;
    // Case: 2+ entry list
    else this.head = firstNode.next; // update 3
    this.size--; // update 4
    firstNode.next = null; // update 1
    return firstNode; // return what we chopped off
  }
```



# Binary Search Tree (BST)

> RUN TESTS WITH ANIMATED DIAGRAMS: 
> https://visualgo.net/en/bst

### Trees in General

#### What are Trees?

Trees are data structures that consist of nodes that have parent/child relationships

- Each node can point to one other node, multiple, or none at all
- All nodes but one in the tree must trace back to the root node
- Unlike linked lists, they are non linear
  You can go down a tree using multiple different paths (if those paths exist)

Tree diagrams look like trees, but upside down. You could present the diagram how a tree would normally look and that'd be fine, but most people don't do that

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220421063145461.png" alt="image-20220421063145461" style="zoom:67%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220421063211427.png" alt="image-20220421063211427" style="zoom:67%;" />

The image on the right is a tree with only one possible path

- It can be considered a linked list because of this 
- In fact, all singly linked lists can be considered a special case of a tree

#### Rules

1. Trees require a `root node`
   That's a single node that all other nodes trace back to

2. Nodes can only point to their own children
   They cannot point to siblings or their own parents

> THESE ARE NOT TREES:
>
> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220421062510800.png" alt="image-20220421062510800" style="zoom:67%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220421062742907.png" alt="image-20220421062742907" style="zoom:67%;" /> 

#### Terminology

ROOT:
The top node in the tree that all other nodes trace back to on the diagram

PARENT: 
A node that has a child directly connected to it

CHILD:
A node that moves farther away from the root while being directly connected to another node 

SIBLINGS:
Child nodes that have the same parent

LEAF: 
A node with no children

EDGE:
The connection between one node and another, represented by arrows on the diagram

#### Practical Applications

1. HTML DOM

- Nested elements are considered children of other elements
- All elements are nested within one, the `<html>` tag

2. Your file folders 
3. Abstract syntax trees
   These are diagrams that explain how your code works using diagrams

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220421064321747.png" alt="image-20220421064321747" style="zoom:45%;" />

4. Network routing, AI, decision trees, JSON,  .. etc



### Binary Trees & BST's

There are 100s of different kinds of trees or tree families, each with their own strengths and use cases. 

-   The focus of this chapter is Binary Search trees
-   Binary trees are a specific kind of tree, and BST's are a specific form of binary tree
  `Trees -> Binary trees -> BST's`

#### Binary Trees

Binary trees have nodes that are only allowed to have 0, 1, or a maximum of 2 children

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220421070832200.png" alt="image-20220421070832200" style="zoom:67%;" />

#### Binary Search Trees

These are a special case of binary tree- which means BST nodes also have 0, 1, or 2 children

- On top of that, BST's are used to store data that is comparable
- The data must be ordered before it's stored in a BST, which leads us to the BST special property

BST SPECIAL PROPERTY:	
Binary search trees excel at searching/retrieving data because of this property

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220421071539986.png" alt="image-20220421071539986" style="zoom:60%;" />
>
> Pick any node with children on the BST above
>
> - Its child node to the left will have a lesser value than it
> - Its child node to the right will have a greater value than it	



### BST Starter Code + Search Logic

#### How BST's Work

Lets search for value 59 in the following tree

> ![image-20220421084825274](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220421084825274.png)
>
> Node 47:		value 59 is higher, so go down the edge on the right
> Node 77:		value 59 is lesser, so go down the edge on the left
> Node 72:		value 59 is lesser, so go down the edge on the left
> Node 59:		MATCH!
>
> If the value you're looking for is not on the tree, you'll eventually reach a leaf node with 0 children

WHY WE LOVE BST'S

- Binary search trees are great for data searches since we can eliminate large pools of data from consideration each time we go down an edge
- Right after step 1 where we leave the root node, we eliminated about half the possibilities

#### Starter Code

```js
class Node {
  constructor(val, next = null) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}
let tree = new BinarySearchTree();
```



### Insert: Add node to tree

#### Placement Logic

We decide where to place a node using the search logic I described in the previous lesson. 

- You search for an empty spot where your new value could be placed. 
- If you reach a leaf without finding a spot, you create a new child node that branches off deeper

EXAMPLE 1: Place a node with value 63 into the following tree

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220421092221987.png" alt="image-20220421092221987" style="zoom:80%;" />

EXAMPLE 2: Place a node with value 23

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220421092410303.png" alt="image-20220421092410303" style="zoom:80%;" />

#### Requirements + Plan

- This insert method should add a certain value to it's correct location on the tree without anyone specifying where that correct location is
- No duplicate values are allowed

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220421093055404.png" alt="image-20220421093055404" style="zoom:67%;" />

#### Code

We can use iteration or recursion- either is acceptable

```js
  insert(val) {
    let newNode = new Node(val);
    // Case: no root node
    if (this.root === null) {
      this.root = newNode;
      return; // end function here
    }
    // Case: root node exists
    let currentNode = this.root;
    let nodeOnRight;
    let nodeOnLeft;
    while (currentNode) {
      nodeOnRight = currentNode.right; // Check if there's a node on the right
      nodeOnLeft = currentNode.left; // Check if there's a node on the left
      // If currentNode value is too low, go down right path... if there is one
      if (val > currentNode.value) {
        if (nodeOnRight) currentNode = nodeOnRight;
        // If there is no right path, create a new leaf
        else {
          currentNode.right = newNode;
          return; // end method here
        }
      }
      // If currentNode value is too high, go down left path... if there is one
      else if (val < currentNode.value) {
        if (nodeOnLeft) currentNode = nodeOnLeft;
        // If there is no left path, create a new leaf
        else {
          currentNode.left = newNode;
          return; // end method here
        }
      }
      // If currentNode value has a match
      else return null; // no duplicates allowed!
    }
  }
}
```



### Find: Retrieve a node

The logic used for find() has already been described in the Starter Code / Search Logic chapter

#### Gameplan

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220421112044855.png" alt="image-20220421112044855" style="zoom:67%;" />

#### Code

- If a node with a matching value is found, return the node
  If there is no match, return false
- BONUS: If the user submits true for argument 2, return the matching node and its parent 
  This will be useful for the remove lesson

Without bonus

```js
  find(searchVal) {
    // If the tree has no root, end method immediately
    if (this.root === null) return false;
    // If tree has a root, search for your value
    let currentNode = this.root;
    let nodeOnLeft;
    let nodeOnRight;
    while (currentNode) {
      nodeOnLeft = currentNode.left;
      nodeOnRight = currentNode.right;
      // If current node value is too high, take left path
      if (currentNode.value > searchVal) {
        if (nodeOnLeft === null) return false; // if path ends, return false
        currentNode = nodeOnLeft;
      }
      // If current node value is too low, take right path
      else if (currentNode.value < searchVal) {
        if (nodeOnRight === null) return false; // if path ends, return false
        currentNode = nodeOnRight;
      }
      // If current node value is a match, return the node
      else return currentNode;
    }
  }
```

With bonus

```js
  find(searchVal, findParentToo = false) {
    // If the tree has no root, end method immediately
    if (this.root === null) return false;
    // If tree has a root, search for your value
    let currentParent = null;
    let currentNode = this.root;
    let nodeOnLeft;
    let nodeOnRight;
    while (currentNode) {
      nodeOnLeft = currentNode.left;
      nodeOnRight = currentNode.right;
      // If current node value is too high, take left path
      if (currentNode.value > searchVal) {
        if (nodeOnLeft === null) return false; // if path ends, return false
        currentParent = currentNode; // preserve parent
        currentNode = nodeOnLeft; // advance current node
      }
      // If current node value is too low, take right path
      else if (currentNode.value < searchVal) {
        if (nodeOnRight === null) return false; // if path ends, return false
        currentParent = currentNode; // preserve parent
        currentNode = nodeOnRight;
      }
      // If current node value is a match, return the node or node + parent
      else {
        if (findParentToo) return { match: currentNode, parent: currentParent };
        else return currentNode;
      }
    }
  }
```



#### Test

We'll replicate this tree by inserting values in the correct order to replicate how the diagram below branches- for instance we obviously add 99 long after 65

![image-20220421114333664](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220421114333664.png)

```js
let tree = new BinarySearchTree();
tree.insert(41); 
tree.insert(20);
tree.insert(11);
tree.insert(29);
tree.insert(32);
tree.insert(65);
tree.insert(50);
tree.insert(91);
tree.insert(72);
tree.insert(99);
console.log(tree.find(65)); 
// returns node_65 which has left=node_50 and right=node_91
console.log(tree);
```



### Remove: Delete node fr/ tree

#### Option Select

When you delete a node from a BST, you need to base your actions on how many direct children that specific node has

CASE A: Node has no children (leaf node)
Remove the node from the tree

![image-20220421133413651](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220421133413651.png)

CASE B: Node has 1 child
Remove the node and replace it with the only child

![image-20220421133736911](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220421133736911.png)

CASE C: Node has 2 children

- Find the minimum value node in the right subtree (the inorder successor)
- Copy the inorder successor value to the node you're deleting, then delete the duplicate while fixing up the edges so the tree remains intact

eliminate node 20:		 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220421161459658.png" alt="image-20220421161459658" style="zoom:80%;" />

#### Inorder Successor

The inorder successor is found by looking for the lowest value in the right subtree

> EXAMPLE 1: eliminate node 15
> Minimum value on right subtree is 17
>
> - Right subtree begins on node 17
> - Node 17 has no left child, meaning all values further down the tree are greater than it
>   Therefore, 17 must be the minimum value on the right 
> - If node 17 had a child node on the left, the lowest value on the right subtree would be that
>
> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220421151000681.png" alt="image-20220421151000681" style="zoom:50%;" />
>
> UNDERSTAND
> The inorder successor node either has a right child, or none at all
> It cannot have a left child because that'd mean there's a value less than it on the right subtree
> For our node to be the inorder successor, that cannot be possible

#### Types of Inorder Successors

TYPES

1. Has 0 children (leaf node)
2. Has 1 child on the right

MAIN TAKEAWAY:
An inorder successor can never have a child on the left 

- If it had a left child that'd mean there's a value less than it on the right subtree
- For our node to be the inorder successor, that cannot be possible

If an inorder successor has a child on the right, that gives us a little more work to do when we replace the node we must remove with that successor

#### Text Examples: Case C

EXAMPLE 1: Delete node 6 from the tree (only showing the half we care about in the img)

- Successor is node 7, and it has no children
- We replace node 6 with node 7- I'll call it `revisedNode` for now
  In your code, you'll copy node 7's value over to node node 6
- Delete revisedNode's `right` property and set it to null

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220422092705867.png" alt="image-20220422092705867" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220422092807997.png" alt="image-20220422092807997" style="zoom:80%;" />

EXAMPLE 2: eliminate node 33, which has 2 children

1. Min value on right subtree is 35 (aka. inorder successor)
   The inorder successor node has 1 child on the right, which gives us more work to do

2. Replace node 33 with node 35
   Set node 33's `value` property to 35 - we'll refer to this as `revisedNode`

- Node 40's `left` property must be set to node 38 (the extra work)
  This is how we exclude the duplicate value we created when we formed revisedNode
- revisedNode's `left` property must be set to node 32
- revisedNode's `right` property must be set to node 40

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220421155328203.png" alt="image-20220421155328203" style="zoom: 70%;" />

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220421155614721.png" alt="image-20220421155614721" style="zoom:70%;" />

- If you want to return the node you deleted, you'll have to preserve node 33's original value
- We did this in our code solution, but it doesn't affect the tree itself- just the method return value

#### Code

As long as you understand what must be done to the tree, don't memorize all this

```js
  remove(val) {
    // Find the node you're removing, if it exists
    let target = this.find(val, true); // equals false or { match, parent }
    if (!target) return false; // if what we seek isn't in the tree, return false
    // Function figures out which of the parent's children the node arg is 
    let whichChild = (node, parent) => {
      if (parent?.left?.value === node.value) return 'left';
      if (parent?.right?.value === node.value) return 'right';
      else return null; // returned if function has no parent
    };
    let removed = target.match; // node we're removing
    let removedParent = target.parent; // parent of node we're removing
    let targetedParentSide = whichChild(removed, removedParent);

    //% Case: Node has 2 children 
    if (removed.left && removed.right) {
      // Find the inorder successor
      let currentNode = removed.right; // right subtree starts here
      let currentParent = removed;
      while (currentNode) {
        // If there is no left child, currentNode is the inorder successor
        if (!currentNode.left) break;
        else {
          currentParent = currentNode;
          currentNode = currentNode.left;
        } // go down left path of tree
      }
      // Replace the node we're removing with the inorder successor value
      let preservedVal = removed.value; // save value of the node we're replacing
      removed.value = currentNode.value;
      // Delete the inorder successor duplicate (the one lower on tree)
      // Find out which side the successor is on its parent node
      let successorSide = whichChild(currentNode, currentParent);
      
      // Does the inorder successor have a right child? (left is impossible)
      // If so, connect parent node to its right child
      if (currentNode.right) currentParent[successorSide] = currentNode.right;
      // If the inorder successor has no children, simply delete it
      else currentParent[successorSide] = null;
      // Turn removed variable into the node we "deleted" after our copy + removal
      removed = currentNode;
      removed.left = removed.right = null; // set left/right pointers to null
      removed.value = preservedVal; // will return later
    }
    //% Case: Node has 1 child and it's on the left (replace target with only child)
    else if (removed.left) {
      removedParent[targetedParentSide] = removed.left;
      removed.right = removed.left = null; // disconnect node being axed fr/ childs
    }
    //% Case: Node has 1 child and it's on the right (replace target with only child)
    else if (removed.right) {
      removedParent[targetedParentSide] = removed.right;
      removed.right = removed.left = null; // disconnect node being axed fr/ childs
    }
    //% Case: Node has no children (remove node)
    else removedParent[targetedParentSide] = null;
    return removed;
  }
}
```

TEST: Case C text example 2

```js
let tree = new BinarySearchTree();
tree.insert(51);
tree.insert(75);
tree.insert(61);
tree.insert(82);
tree.insert(49);
tree.insert(50);
tree.insert(27);
tree.insert(2);
tree.insert(33);
tree.insert(32);
tree.insert(40);
tree.insert(45);
tree.insert(35);
tree.insert(38);
console.log(tree.remove(33)); // returns node_65 which has left=node_50 and right=node_91
console.log(tree);
```



# Tree Traversal

> RUN TESTS WITH ANIMATED DIAGRAMS: 
> https://visualgo.net/en/bst

### Intro + Chapter Repo

Tree traversal is when we figure out how to visit every single node in a tree one time
This definition applies to every kind of tree, not just BST's

- Trees are not like linked lists where we have one path we can take to visit all nodes
- To visit each node in a tree, we must use 1 of the 4 algorithms shown in this chapter

> Chapter-wide Code
> https://jsfiddle.net/Jason2B3/cz635yag/4/

#### Four Approaches to Traversal

1. Breadth first search (BFS)
2. Depth First PreOrder (DFS variant)
3. Depth First PostOrder (DFS variant)
4. Depth first InOrder (DFS variant)

Breadth vs Depth First
Depth first algorithms visit the nodes all the way down a path before they consider siblings

WHY WE NEED FOUR:
Trees can vary wildly in structure

- Some can have 100's of children, or some others could be very wide and have dozens of siblings. 
  (not all trees are binary after all)
- Depending on the tree, using one approach will likely be much more performant than the others

#### Depth First Search Action Orders

- The code solutions for them are all the same, except you order your actions slightly differently each time (1 line difference)
- This means if you can program one of these, you can program all 3! 
  If you must memorize one, go with Depth first preorder (recursive logic is easiest to comprehend)

|               | visit current node | explore child node on left | explore child node on right |
| ------------- | ------------------ | -------------------------- | --------------------------- |
| DFS preorder  | first              | second                     | third                       |
| DFS postorder | third              | first                      | second                      |
| DFS inorder   | second             | first                      | third                       |

Pay attention to these 3 lines in each solution- they get reordered for each of the 3 DFS variants

DFS preorder

```js
visited.push(currentNode.value); // visit current node
if (currentNode.left) recursive(currentNode.left); // explore left side
if (currentNode.right) recursive(currentNode.right); // explore right side
```

DFS postorder

```js
if (currentNode.left) recursive(currentNode.left); // explore left side
if (currentNode.right) recursive(currentNode.right); // explore right side
visited.push(currentNode.value); // visit current node
```

DFS inorder

```js
if (currentNode.left) recursive(currentNode.left); // explore left side
visited.push(currentNode.value); // visit current node
if (currentNode.right) recursive(currentNode.right); // explore right side
```

#### When DFS > BFS

If your tree is wide and has many nodes per side, use DFS

- If we were to use BFS, our space complexity would be high since we use a queue to hold values/nodes 
- DFS uses recursion instead, which affects the callstack but not space complexity

DFS: ![image-20220423200659692](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220423200659692.png)

#### DFS Variant Special Properties

These algorithms are especially good to use on Binary Search trees- and here's why:

|                | why they're good on BST's                                    |
| -------------- | ------------------------------------------------------------ |
| DFS- inorder   | this algorithm returns an array of all the node values in ascending order |
| DFS- preorder  | this algorithm returns an array whose values you could use to reconstruct the tree exactly how it currently is |
| DFS- postorder | good for deleting binary search trees                        |

DFS preorder Example:
This is the node insertion order you'd use to remake the tree

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220423201227245.png" alt="image-20220423201227245" style="zoom:80%;" />

DFS inorder Example:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220423201409282.png" alt="image-20220423201409282" style="zoom:80%;" />







### Breadth first search

#### How it Works

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220423133704409.png" alt="image-20220423133704409" style="zoom:80%;" />

1. Start from the top 
2. Visit every sibling node on the same vertical level before we go down again to the level below

```
Result: [10, 6, 15, 3, 8, 20]

10	descend
6	15	descend
3	8	20	descend
```

#### Approach

SETUP:

1. Create a variable called `queue`- this array/list will accept nodes then kick them out
2. Create a variable called `visited` that stores values of each node we've visited

LOOP:
End when the `queue` array is empty at the end of the block

1. Place the root node in the `queue`
2. Move every node value inside `queue` into `visited`

- Right afterwards, see if each node has any children
- If they do, place them into `queue`, then let the loop run again

> Step by step walkthrough example:
> https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344808#overview

#### Code

GOAL: 
Create an instance method that visits each node in the following binary tree

- If we were dealing with a different tree type that allowed a diff number of children, we'd only need a few minor code adjustments
- Instead of checking for left and right children during our while block, we might check for left, right, and middle for example

![image-20220423142833983](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220423142833983.png)

CODE: https://jsfiddle.net/Jason2B3/cz635yag/

```js
  BFS() {
    const queue = []; // array-style (push-shift)
    const visited = [];
    if (this.root) queue.push(this.root); // place root in q
    while (queue.length) {
      // Move every node in queue into visited
      queue.forEach((el, ind) => {
        let exitedQueue = queue.shift(); //take node out of q
        visited.push(exitedQueue.value); // put that node into visited
        // Check if this node has children (if, so place them in queue)
        if (exitedQueue.left) queue.push(exitedQueue.left);
        if (exitedQueue.right) queue.push(exitedQueue.right);
      });
    }
    return visited
  }
```



### Depth First PreOrder

Depth fist algorithms finish going all the way down the tree before considering any siblings

> WARP-Z9185

#### How it Works: Recursive Logic

ACTION ORDER

1. Visit a node
2. Explore/visit it's child on the left, if it has one
   If that child has children of it's own, explore/visit those before moving on to step 3
3. Explore/visit it's child on the right, if it has one
   If that child has children of it's own, explore/visit those before moving on

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220423145122948.png" alt="image-20220423145122948" style="zoom:67%;" />

```
visited = [10]  
does root node have a left/right child? (yes/yes). start left, leave right for later

visited = [10, 6] 
does node 6 have a left/right child? (yes/yes). start left, leave right for later

visited = [10, 6, 3] 
does node 3 has a left/right child? (no/no)

visit right child of node 6 since we left that on the backburner
visited = [10, 6, 3, 8] 
does node 8 have a left/right child? (no/no)

visit right child of node 10 since we left that on the backburner
visited = [10, 6, 3, 8, 15] 
does node 15 have a left/right child? (no/yes). visit right child

visited = [10, 6, 3, 8, 15, 20] 
does node 20 have a left/right child? (no/no)
```

#### Approach

SETUP

1. Create an array called `visited` that stores each node value we've encountered
2. Create a variable called `currentNode` which will be used to navigate down the tree via redefinition
   Set it equal to the root at the start

RECURSIVE HELPER FUNCTION:
Create and deploy a recursive helper function that contains the bulk of our algorithm's logic

- Must push the `currentNode value` into visited
- If `currentNode` has a left child, have the function recursively call itself with it as an argument
  Do the same if `currentNode` has a right child

#### Code

You can implement this approach iteratively with a while loop, but it's more convenient to use recursion

```js
  DFS_preorder() {
    const visited = [];
    if (!this.root) return visited; // edge case: empty tree
    let currentNode = this.root;
    const recursive = function (currentNode) {
      visited.push(currentNode.value);
      if (currentNode.left) recursive(currentNode.left);
      if (currentNode.right) recursive(currentNode.right);
      // base case: the currentNode has no left/right child nodes
      return;
    };
    recursive(currentNode);
    return visited;
  }
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220423195248777.png" alt="image-20220423195248777" style="zoom:80%;" />

### Depth First PostOrder

#### How it Works

ACTION ORDER:
When I say we "visit" a node, I mean adding it to the visited array
When I say "explore", I mean our code reaches that node in the tree during one of the recursive loops

1. Explore the current node's child on the left, if it has one
   If that child has children of it's own, explore those before moving on to step 2
2. Explore the current node's child on the right, if it has one
   If that child has children of it's own, explore those before moving on to step 3
3. Visit the node officially by adding it to the `visited` array

REWORDED: For every node... 

- We explore that node's left and right child nodes first 
  (and their children too, which is where recursion fits in)
- After all the children are visited... only then do we officially visit that node

This is why when you look at the diagram below, we start adding values to the visited array starting at the very bottom of the tree

`visited= [3, 8, 6, 20, 15, 10]`

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220423175719574.png" alt="image-20220423175719574" style="zoom: 80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220423181522235.png" alt="image-20220423181522235" style="zoom:80%;" />

Recursive Logic Walkthrough

```
start on root node 10 but don't "visit" it yet b/c it has child nodes
left child: 6	right child: 15		explore left side first

we're on node 6, but don't visit it yet b/c it has child nodes
left child: 3	right child: 8		explore left side first

node 3 has no children
visited= [3]
explore right child of 6 since we put that on the backburner

node 8 has no children
visited= [3, 8]

node 6's children have all been visited
visited= [3, 8, 6]
explore right child of 10 since we put that on the backburner

we're on node 15, but don't visit it yet b/c it has child nodes 
right child: 20		explore right child 

node 20 has no children
visited= [3, 8, 6, 20]

node 15's children have all been visited
visited= [3, 8, 6, 20, 15]

node 10's children have all been visited
visited= [3, 8, 6, 20, 15, 10]
```

#### Code

We actually only move 1 line from the depth first preorder solution to come up with this

- Now, we push values into `visited` after the recursion's done
  This is how we "go backwards up the tree" even though the pointers are not 2 sided
- The first recursive function that gets resolved will be on a node that's at the very bottom of the tree
  That's because those nodes don't have children, so the `if(currentNode)` blocks are skipped

```js
  DFS_postorder() {
    const visited = [];
    if (!this.root) return visited; // edge case: empty tree
    let currentNode = this.root;
    const recursive = function (currentNode) {
      // Explore node's children + children's children..etc b4 adding to visited
      if (currentNode.left) recursive(currentNode.left);
      if (currentNode.right) recursive(currentNode.right);
      // base case: the currentNode has no left/right child nodes
      visited.push(currentNode.value); // "visit" nodes AFTER recursive calls;
      return;
    };
    recursive(currentNode);
    return visited;
  }
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220423195217878.png" alt="image-20220423195217878" style="zoom:80%;" />

### Depth first InOrder

#### How it Works

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220423193120314.png" alt="image-20220423193120314" style="zoom:80%;" />

ACTION ORDER:
When I say we "visit" a node, I mean adding it to the visited array
When I say "explore", I mean our code reaches that node in the tree during one of the recursive loops

1. Explore the current node's child on the left, if it has one
   If that child has children of it's own, explore those before moving on to step 2
2. Visit the node officially by adding it to the `visited` array
3. Explore the current node's child on the right, if it has one
   If that child has children of it's own, explore those before moving on to step 3

RECURSIVE LOGIC WALKTHROUGH

```
start on root node 10 but don't "visit" it yet b/c it has a left child
left child: 6	right child: 15		explore left first

we're on node 6, but don't visit it yet b/c it has a left child
left child: 3	right child: 8		explore left first

node 3 has no children
visited= [3]

node 6's left child has been explored
visited= [3, 6]	 	can now oficially visit node 6 and proceed to explore right side

node 8 has no children
visited= [3, 6, 8]

root node 10's children have all been visited
visited= [3, 6, 8, 10]
explore right child of 10 now that the node's been visited

we're on node 15, and it has no left child so let's visit it officially
visited= [3, 6, 8, 10, 15]
right child: 20		now let's explore its right child

node 20 has no children
visited= [3, 6, 8, 10, 15, 20]

node 15's children have all been visited
root node 10's children have all been visited (we're done)
```

#### Code

```js
  DFS_inorder() {
    const visited = [];
    if (!this.root) return visited; // edge case: empty tree
    let currentNode = this.root;
    const recursive = function (currentNode) {
      if (currentNode.left) recursive(currentNode.left); // explore left side
      visited.push(currentNode.value); // visit current node
      if (currentNode.right) recursive(currentNode.right); // explore right side
      // base case: the currentNode has no left/right child nodes
      return;
    };
    recursive(currentNode);
    return visited;
  }
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220423195125511.png" alt="image-20220423195125511" style="zoom:80%;" />



# Trie: Aka Prefix Tree (INCOMPLETE)

### Intro + Practical Applications

https://www.youtube.com/watch?v=zIjfhVPRZCg



### Represent Prefix Tree using JS

https://www.educative.io/blog/data-structures-tutorial-advanced

### Insert

https://www.educative.io/blog/data-structures-tutorial-advanced#:~:text=insert%20a%20key(word)%20into%20a%20trie%2C%20you%20first%20check%20if%20the%20character

### Search

https://www.educative.io/blog/data-structures-tutorial-advanced#:~:text=search%20through%20a%20trie%2C%20you%20need%20to%20take%20note%20of%20three%20possible%20

### Delete

https://www.educative.io/blog/data-structures-tutorial-advanced#:~:text=nodes%20without%20child%20branches%20are%20easily%20deleted.%20the%20leaf

# Binary Heaps + Priority Queues

> RUN TESTS WITH ANIMATED DIAGRAMS: 
> https://visualgo.net/en/heap

### Intro to Heaps

Heaps are a special kind of tree, and all rules that apply to regular trees will apply to them
That being said, heaps have additional special rules that make them unique

- There are many different kinds of heaps- in fact, heaps is a group term
- They can be used to form other kinds of data structures as well

#### Rules for Binary Heaps in General

These are very similar to BST's just with a few key differences

- Each node has a max of 2 children just like BST's - hence the "binary" part of the name
- A binary heap is as compact as possible- so you can't have significantly more nodes on 1 side of the heap like you can with trees
- While in the process of keeping your heap compact, the left children are filled out first

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220424073539960.png" alt="image-20220424073539960" style="zoom:67%;" />

VALID BINARY HEAPS:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220424073636705.png" alt="image-20220424073636705" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220424075325335.png" alt="image-20220424075325335" style="zoom:80%;" />

Although the tree in the latest images do have more nodes on the left half, it still counts as a binary heap due to the fact that it follows all the rules 

- All children are lesser than their parents
- We have 2 extra nodes - node 2 and 7- so we prioritize filling out the left children of the tree first

#### Max Binary Heap

- Parent nodes must always be larger than child nodes
- There is no specific order for sibling nodes, unlike BST's where left children are less than their parents while right nodes are greater

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220423230427432.png" alt="image-20220423230427432" style="zoom: 80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220423230659666.png" alt="image-20220423230659666" style="zoom: 80%;" />

EXAMPLE OF NO IMPLIED ORDERING:
Look at the image with a red arrow. 25 and 36 are the next 2 largest values aside from the root node

- You would think they'd be the root's direct children, but that isn't necesary. 
- Siblings have no ordering, and he rule where all parents must be greater than their children is still being followed

#### Min Binary Heap

- Parent nodes must always be lesser than their child nodes
- Just like with max binary heaps, there is no order for the sibling nodes

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220424074551070.png" alt="image-20220424074551070" style="zoom:67%;" />

#### Which Spots fill up first when adding Nodes

We've stated that binary heaps prioritize filling out the left children of the tree first

This diagram shows a symmetrical binary heap. If we were to add new values to it, the black illustrations show which spots would get occupied and in what order:

![image-20220424131222941](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220424131222941.png)

Let's test it out by adding a new value: 6

![image-20220424131319842](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220424131319842.png)

Let's add a few more values: 20, 15, 46

![image-20220424131705678](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220424131705678.png)

The 1st, 2nd, 3rd, and 4th spots got filled in as predicted
The new node values ended up bubbling higher up the hierarchy though, and we'll learn how in the next lesson



### Creating Heaps in JS 

Much like BST's, we can create a custom node and BinaryHeap class to represent this data structure
There is an easier way though, and it involves using default JS arrays

#### Represent Heaps with Arrays

You can represent a heap using an array despite the fact that heaps look like trees due to their many diverging paths

BINARY HEAP DIAGRAM:		 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220424113339194.png" alt="image-20220424113339194" style="zoom:67%;" />

```
let heap = [100, 19, 36, 17, 12, 25, 5, 9, 15, 6, 11, 13, 8, 1, 4]
```

Using certain formulas, we can pick any single entry in this array and determine...
A) Where that node's parent is in the list
B) Where that node's left and right children are in the list

FIND PARENT NODE:
n is the index of any potential child node in our array

```
parent_index = (n - 1) / 2 		rounded down to nearest integer
```

FIND CHILD NODES:
n is the index of any potential parent node in our array

```
left_child_index = 2n + 1
right_child_index = 2n + 2
```

#### Formula Testing

The diagram of the heap should be offscreen when you're scrolled this far down
Test out the formulas and see if the diagram proves them correct

```
let heap = [100, 19, 36, 17, 12, 25, 5, 9, 15, 6, 11, 13, 8, 1, 4 ]
ind			 0	  1	  2	  3	  4	  5	 6	7	8  9  10  11  12 13 14 
```

Exercise 1. Find children of the node with value 17

```
left child index= 3(2) + 1 = 7
right child index = 3(2) + 2= 8
ANSWER: nodes 9 and 15 should be the children of node 17
```

Exercise 2. Find parent of node with value 12

```
parent index = (4 - 1) / 2 = 1.5 = 1 rounded down to nearest integer
ANSWER: node 19 should be the parent of node with value 12
```

#### Chapter Code: Max Heaps

> Completed chapter code:
> https://jsfiddle.net/Jason2B3/yzcb0sw2/4/

Let's represent a heap using a custom class now- it does not require its own node class like many other data structures before it since we're just injecting values into arrays using a specific order

```js
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(){} // Add node to heap
  extractMax(){} // Remove root node and reorganize heap
  // (priority queues are a separate DS if future-me is wondering)
} 
let newHeap = new MaxBinaryHeap();
```



### Insert: Add node to Max Binary Heap

If you want to inject values into a min heap, simply adjust the solution at the end of this lecture

#### Placement Logic

Max binary heaps have a rule where all parents must have greater values than their child nodes

- This makes injecting new values into the data structure a little more complex than simply pushing a new value into the array we use to represent the heap
- If we inject a new value into the heap, we must check to see if our new value is lower than its parent node's

| `newVal` is ...         | action                        | continue looping?        |
| ----------------------- | ----------------------------- | ------------------------ |
| less than its parent    | N/A                           | no, heap is fixed by now |
| equal to its parent     | N/A                           | no, heap is fixed by now |
| greater than its parent | swap `newVal` with the parent | yes                      |

EXAMPLE: Inject 55 into this max binary heap

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220424125220225.png" alt="image-20220424125220225" style="zoom: 33%;" />
>
> CHECK PARENT:
> Is 33 > 55 ? 	no... so swap node 55 and 33 (this is what i meant by bubbling)
>
> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220424125336586.png" alt="image-20220424125336586" style="zoom:33%;" />
>
> CHECK PARENT:
> Is 41 > 55 ? 	no... so swap node 55 and 41
>
> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220424125539944.png" alt="image-20220424125539944" style="zoom:33%;" />
>
> Normally we would check to see if node 55's parent's were greater than it, but we can't
> Node 55 now has no parents due to being the root node, so we're done!

#### Code: Insert into Max Heap

This insert method will inject a new node into our max heap, then ensures it gets placed in a proper position that keeps the rules of max heaps intact

- Our main concern is making sure all parent nodes are greater than their child nodes
- Push a value into your heap/array, the use formulas and array position swaps to bubble the node into its correct position

CODE FOR MIN HEAPS WILL VARY SLIGHTLY

```JS
  // Add node to heap
  insert(newVal) {
    // If heap is empty, make this the root
    if (this.values.length === 0) return this.values.push(newVal);
    // If heap is not empty, push the new value into the array
    this.values.push(newVal);
    let currentIndex = this.values.length - 1;
    let parentIndex;
    // Reposition the node X amount of times until...
    // it is greater than its parent, or the root node
    const recursive = function () {
      parentIndex = Math.floor((currentIndex - 1) / 2); // get parent index
      // BASE CASES: end the recursive looping
      // 1) parent's value is greater or equal to newVal's
      // 2) parentIndex is negative, indicating currentIndex = 0 (root node)
      if (this.values[parentIndex] >= newVal || parentIndex < 0) return;
      // If parent value is lesser, swap the newVal with the parent
      this.values[currentIndex] = this.values[parentIndex];
      this.values[parentIndex] = newVal;
      // Update the index numbers
      let placeholder = currentIndex;
      currentIndex = parentIndex;
      parentIndex = placeholder;
      rebinded(); // make a recursive call on our rebinded function
    };
    // this is undefined inside our recursive function regularly (so rebind it)
    let rebinded = recursive.bind(this);
    rebinded(); // make recursive calls on this new method
    return this.values;
  }
```



### ExtractMax: Remove Root from Max Binary Heap

The most common value to remove from a Binary Heap is the root. 
In max binary heaps, that means we'll be extracting the maximum value

#### Approach

1. Remove the root node and replace it with the last node in the binary heap
   We'll refer to this as the `replacementNode`

- At this point the root will be wrong, but we'll bubble `replacementNode` downwards

2. Look at the `replacementNode`'s children

REMEMBER:
In Binary Heaps, the left child always gets filled out first
This makes it so a node with 1 child will always have one on the left (never 1 right child with no left)

| `replacementNode` ...                       | action                                                     | heap fixed after action              |
| ------------------------------------------- | ---------------------------------------------------------- | ------------------------------------ |
| has no children                             | N/A                                                        | yes, end loop                        |
| has 1 left child only                       | swap `replacementNode` with child if the child is greater  | yes, end loop                        |
| has 2 children and both are lesser or equal | N/A                                                        | yes, end loop                        |
| has 2 children and at least one is greater  | swap `replacementNode` with the greatest of the 2 children | not guaranteed, so let loop continue |

Now we repeat the process again, until the `replacementNode` reaches a spot where it's greater than all its children OR has no children at all

#### Text Walkthrough Ex 1

We remove root node 90 and replace it with 17, the last element in the heap

![image-20220424172525383](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220424172525383.png)

![image-20220424172611374](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220424172611374.png)

17 is not greater than both its children
swap it with 46 (the greatest child)

![image-20220424172812391](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220424172812391.png)

In its new spot, 17 is still not greater than both its children
Swap it with 20 (the greatest child)   

![image-20220424173045871](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220424173045871.png)

Now 17 is greater than all its children, so the binary heap should be correct

#### Code

We use the binary heap formulas from an earlier lesson to determine where child/parent positions are

```js
  // Remove root node and reorganize heap
  extractMax() {
    // EDGE CASE: 
    // extracting the one node left in the tree, or if the tree is empty
    if (this.values.length <= 1) {
      this.values = [];
      return this.values;
    }

    // Replace root with last heap value, then delete duplicate last value
    this.values[0] = this.values.pop();

    // Variables used to iterate
    let replacement = this.values[0];
    let replacementIndex = 0;
    function swap(arr, ind1, ind2) {
      let temp = arr[ind1];
      arr[ind1] = arr[ind2];
      arr[ind2] = temp; // utility function
    }
    // Iterative approach
    while (true) {
      // Look at replacement node's children and see if they're lesser
      let leftChildIndex = 2 * replacementIndex + 1;
      let rightChildIndex = 2 * replacementIndex + 2;
      let leftChild = this.values[leftChildIndex];
      let rightChild = this.values[rightChildIndex];

      // BASE CASES WHERE HEAP IS FIXED
      // 1) If the replacement node has no children, it's reached the heap bottom
      if (!rightChild && !leftChild) break;
      // 2) If you only have a left child
      else if (leftChild && !rightChild) {
        // Swap if that child is greater, and if the child is lesser, don't swap
        if (leftChild > replacement) {
          swap(this.values, leftChildIndex, replacementIndex);
          replacementIndex = leftChildIndex;
        } // Eitherway the loop ends here  
        break;
      }
      // 3) If both children are lesser, then the replacementNode's in the right spot
      else if (replacement > leftChild && replacement > rightChild) break;
      // 4) If one/both children are greater, swap replacement with the greatest one
      else {
        let leftGreatest = leftChild > rightChild;
        let rightGreatest = rightChild > leftChild;
        if (leftGreatest) {
          swap(this.values, leftChildIndex, replacementIndex);
          replacementIndex = leftChildIndex; // update var we use to iterate
        } else if (rightGreatest) {
          swap(this.values, rightChildIndex, replacementIndex);
          replacementIndex = rightChildIndex; // update var we use to iterate
        }
      }
    }
    return this.values;
  }
```

#### Test

```js
let newHeap = new MaxBinaryHeap();
newHeap.insert(2);
newHeap.insert(7);
newHeap.insert(26);
newHeap.insert(25);
newHeap.insert(19);
newHeap.insert(17);
newHeap.insert(1);
newHeap.insert(90);
newHeap.insert(3);
newHeap.insert(36);
newHeap.extractMax();
```

Before extract max:

> newHeap.values = [ 90, 36, 17, 25, 26, 7, 1, 2, 3, 19 ]
>
> ![image-20220424182616804](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220424182616804.png)
>
> can form this diagram yourself by using the left/right child formulas across the heap array

After extract max:

> newHeap.values = [ 36, 26, 17, 25, 19, 7, 1, 2, 3 ]
>
> ![image-20220424182739327](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220424182739327.png)



### Intro to Priority Queues 

#### What are they?

Priority queues are data structures where each element has a priority.
The elements with higher priority are served before those whose priorities are lower

PRACTICAL USE CASES:
Any time you insert data into a collection whose elements don't get taken care of in an order based on which element showed up first

Ex. Hospital treatment line
People with gunshot wounds get treated before people with headaches

#### Priority Queue with Heaps: Analogy

Lets use a heap whose elements represent patients at a hospital. 
These patients are placed in a heap, and their values are based on the severity of their injuries

- Let's say we're dealing with a min binary heap
  The patient at the top of the heap gets treated first and has the lowest priority number
- High severity injuries get low number priorities like 1
  Less serious injuries get higher number priorities like 5

PRIORITY QUEUE AT 9PM: (left image)
We have 5 patients, each with injuries of varying severity

PRIORITY QUEUE AT 11PM: (right image)
The guy with an exploded head got stitched up- so we move the next most severely injured patient up to the top of the heap

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220424185208424.png" alt="image-20220424185208424" style="zoom: 67%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220424185242873.png" alt="image-20220424185242873" style="zoom:67%;" />

extractMin() is used to ensure the patients who need help most are served first

Each time a patient is served, we remove their element from the root 
We then move the patient with the next most severe injury up to the root 

#### Naïve way to make a Priority Queue

One way to implement a priority queue is to use a list/regular array to store all elements
The elements should have a property that stores their priority levels

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220424184027946.png" alt="image-20220424184027946" style="zoom: 80%;" />

- Every time it's time to serve someone in our fictional hospital, you can loop through this array and select the element with the highest priority
- Usually high priority elements are assigned lower numbers

WHY WE CALL IT NAÏVE:
Each time we have to serve a new patient, we must loop through the entire array

- Instead of a regular list, we can use a heap whose elements have a hierarchy based on which nodes have a higher/lower value
- This will cut down on how many elements we need to visit in order to choose who to serve next

#### Multiple ways to create Priority Queues

Heaps are not the only way to implement a priority queue- they're just the most common

- Don't equate heaps and priority queues as the same thing
- Priority queues are an abstract concept and can be implemented in numerous ways

I've already explained the naïve list method for creating priority queues. 

- We could probably help its performance by implementing a binary search, and that solution might be equally as valid as the heap method for priority queues



### Priority Queue Creation with Min Binary Heaps

#### Goal

Create a `PriorityQueue` data structure using a min binary heap. 

- Instead of pushing values into an array like in the rest of the chapter, push nodes in. 
- Each node should have 2 properties: `value and priority`

REQUIRED METHODS:

1. enqueue → method should accept a value and priority, create a new node, then put it in the correct spot in the min binary heap
2. dequeue → method should remove the root element, return it, then rearrange the rest of the heap based on priority (not the value)

HINT:

- You can take the code from earlier in this chapter (max binary heaps) and edit it to create a min binary heap.
-  Every method will need some tweaking, but the logic stays the same for the most part

#### Code

> Run Tests:
> https://jsfiddle.net/Jason2B3/vLfshp27/3/

enqueue

```js
  // Add node to heap
  enqueue(newVal, prio) {
    let newNode = new Node(newVal, prio);
    // If heap is empty, make this the root
    if (this.values.length === 0) return this.values.push(newNode);
    // If heap is not empty, push the new value into the array
    this.values.push(newNode);
    let currentIndex = this.values.length - 1;
    let parentIndex;
    // Reposition the node X amount of times until...
    // it is greater than its parent, or the root node
    const recursive = function () {
      parentIndex = Math.floor((currentIndex - 1) / 2); // get parent index
      // BASE CASES: end the recursive looping
      // 1) parent's value is less than the newVal's
      // 2) parentIndex is negative, indicating currentIndex = 0 (root node)
      if (this.values[parentIndex]?.priority < prio || parentIndex < 0) return;
      // If parent value is lesser, swap the newVal with the parent
      this.values[currentIndex] = this.values[parentIndex];
      this.values[parentIndex] = newNode;
      // Update the index numbers
      let placeholder = currentIndex;
      currentIndex = parentIndex;
      parentIndex = placeholder;
      rebinded(); // make a recursive call on our rebinded function
    };
    // this is undefined inside our recursive function regularly (so rebind it)
    let rebinded = recursive.bind(this);
    rebinded(); // make recursive calls on this new method
    return this.values;
  }
```

dequeue (functions like extractMin for Min Binary Heaps)

```js
  // Remove root node and reorganize heap
  dequeue() {
    // EDGE CASE: 
    // extracting the one node left in the tree, or if the tree's empty
    if (this.values.length <= 1) {
      this.values = [];
      return this.values;
    }

    // Replace root with last heap value, then delete duplicate last value
    this.values[0] = this.values.pop();

    // Variables used to iterate
    let replacement = this.values[0];
    let replacementIndex = 0;
    function swap(arr, ind1, ind2) {
      let temp = arr[ind1];
      arr[ind1] = arr[ind2];
      arr[ind2] = temp; // utility function
    }
    // Iterative approach
    while (true) {
      // Look at replacement node's children and see if they're lesser
      let leftChildIndex = 2 * replacementIndex + 1;
      let rightChildIndex = 2 * replacementIndex + 2;
      let leftChild = this.values[leftChildIndex];
      let rightChild = this.values[rightChildIndex];

      // BASE CASES WHERE HEAP IS FIXED
      // 1) If the replacement node has no children, it's reached the heap bottom
      if (!rightChild && !leftChild) break;
      // 2) If you only have a left child
      else if (leftChild && !rightChild) {
        // Swap if that child has a lower priority number
        if (leftChild.priority < replacement.priority) {
          swap(this.values, leftChildIndex, replacementIndex);
          replacementIndex = leftChildIndex;
        } // Eitherway the loop ends here 
        break;
      }
      // 3) If you have 2 children and both have greater priority numbers
      else if (
        replacement.priority < leftChild.priority &&
        replacement.priority < rightChild.priority
      )
        break;
      // 4) If one/both children have lower priority numbers
      else {
        let leftMoreSevere = leftChild.priority < rightChild.priority;
        let rightMoreSevere = rightChild.priority < leftChild.priority;
        if (leftMoreSevere) {
          swap(this.values, leftChildIndex, replacementIndex);
          replacementIndex = leftChildIndex; // update var we use to iterate
        } else if (rightMoreSevere) {
          swap(this.values, rightChildIndex, replacementIndex);
          replacementIndex = rightChildIndex; // update var we use to iterate
        }
      }
    }
    return this.values;
  }
```



### Duplicates (did not explore)

In this chapter, we coded all of our methods with an assumption that our heap will not contain any duplicates. Apparently heaps can contain duplicates, but our course never mentioned any

#### Duplicate Values

Heaps are allowed to contain duplicate values- and there's one thing you must understand about them

- The rule where each parent node must be greater than its children still applies for Max binary heaps
- When we have duplicates though, it's possible for 2 instances of a value to exist on different tree levels- as long as the parent rule is still followed

> Still a valid Max Binary Heap
>
> ![image-20220425125019427](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220425125019427.png)
>
> We have 2 instances of 26, and they exist on the same level
> We also have 2 instances of 17, and they exist at different levels 

#### extractMax with duplicates

![image-20220425133102902](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220425133102902.png)

Remove root 36 and replace it with the final one, node 17

![image-20220425133159193](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220425133159193.png)

17 is not greater than both it's children, so swap it with the greatest of the 2. 
Both are equal in this case, so prioritize switching on the left

![image-20220425133337083](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220425133337083.png)

17 is still not greater than all its children, so swap it with the greatest of the 2 (node 20)

![image-20220425133504946](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220425133504946.png)

Now 17 has no children, so we're done

### Big O

|           | time complexity (average/worst case) |      |
| --------- | ------------------------------------ | ---- |
| insertion | `O(log n)`                           |      |
| removal   | `O(log n)`                           |      |
| search    | `O(n)`                               |      |



# Hash Tables: AKA. Hash Maps

### Intro to Hash Tables

Nearly all programming languages have hash tables built in by default- or at least a very similar variation
You've definitely used hash tables before, even prior to knowing what they are/do

#### What Hash Tables are

Hash tables are used to store key value pairs (KVPs)

- They're like arrays, but the keys are unordered
- Hash tables are fast for finding values, adding new ones, and removing values

All of the above can be said about regular JS objects
This is what I meant when I said all languages include hash tables by default

> BUILT IN HASH TABLES ACROSS DIFFERENT LANGUAGES:
>
> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220425171827764.png" alt="image-20220425171827764" style="zoom:67%;" />
>
> KEY TYPE RESTRICTIONS
> JS object keys have to be strings
> This is not the case for JS maps however (hence the asterisk)
>
> In this chapter, we'll stick to using strings as keys - just know we have the freedom not to

For this chapter, pretend like JS objects magically disappeared. 

- We're going to create our own `key value data store` ourselves to fill the void 
- Doing so will teach us a lot about the inner workings of our default JS objects we take for granted

#### Big O



### Explaining Hash Functions

#### Why we need them

Your computer doesn't actually know how to look up values by key- it only knows how to look up values via numbers/indexes

- If you want key value pair functionality, you must convert your key string into a valid array index using a hash function
- After your key string gets converted, store it in a list somewhere
- Like an array, your value will be associated with an index number- except that index number used to be a string before the conversion
- From now on, accessing values via key strings should work because we can convert any string into a number using our hash function

#### Conceptual Example

Imagine you want to store the following key value pairs

```
"pink": "#ff69b4"		"cyan": "00ffff"		"orangered" : "#ff4500"
```

Lets convert the key strings into numbers using our hashing function

```
"pink" gets converted to 0
"cyan" gets converted to 3
"orangered" gets converted to 7	
```

Using our new numeric keys, store these values in a list

![image-20220425191221089](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220425191221089.png)

Now, whenever we search `list[cyan]`, our hashing function will turn that expression into `list[3]`

#### Fixed Size Outputs

We're going to use hash() in Python to show us what hashing functions should produce

Tests:

```python
a = hash("a")
b = hash("jeronimo") # a much longer string 
c = hash("54") 

print(a) # output:  705006831864878106
print(b) # output: -2350002579501932410
print(c) # output:  4020417767155990354
```

Hashing functions should return numbers of a fixed size regardless of the input

- Notice how a/b/c get converted into 18 digit numbers despite starting off as vastly different strings
- Some are negative while others are positive, but the # of digits is the same regardless

#### What makes a Good Hash Function

1. It should produce numbers of a fixed size regardless of input
2. Must be fast
3. The same inputs should always result in the same outputs (deterministic)
4. Should distribute outputs uniformly (spread out index numbers)

- The numbers our hash function produces should not all cluster up in the same general area
- If numbers get assigned the same index number we call that a collision
  We'll handle this when writing our hash function, but it shouldn't be a common occurrence

### charCodeAt()

UNICODE:
An international set of standards that gives every letter, digit, or symbol a unique numeric value

#### Purpose

- The `charCodeAt` function is used on a string and returns a unicode number for the character you reference in the argument
- If you don't provide an argument, the default will be 0

```JS
console.log("a".charCodeAt());		// 97 (charcode for 'a')
console.log("abc".charCodeAt(1));	// 98 (charCode for 'b', the char at index 1)
console.log("abc".charCodeAt(9));	// NaN (string isn't that long)
```

#### Letter Unicode Values

If you subtract 96 from an alphabetical letter's Unicode number, you get back its position in the alphabet. Letter a is at position 1 and b is at position 26

```js
console.log("abc".charCodeAt(2));	// 99		
// 99 - 96 = 3. 
// c is 3rd in alphabet
```



### Writing a Hash Function

DESIRED RETURN 

```JS
hash("pink", 100); // turn "pink" into a number between 0 and 100
hash("blue", 25); // turn "blue" into a number between 0 and 25
```

Keep in mind there is no one way to hash a string that's been proven as better than all others
This subsection shows 1 of infinite ways to hash a string

#### Hashing Formula

```js
function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
```



### Handling Collisions

#### Illustration of a Collision 

No matter how good your hashing function is, it will never have a 0% chance of encountering a collision- especially if you test it thoroughly with differing inputs

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426160340720.png" alt="image-20220426160340720" style="zoom:80%;" />

There are many solutions to fix collisions when you encounter them, but we'll focus on 2

1. Separate chaining
2. Linear probing

#### Solution 1: Separate chaining

Instead of saving array values outright, save array values in more sophisticated data structures like arrays or linked lists

- If 2 or more elements get assigned to the same index number, that's fine
- Push the value into the array's array which does not have a fixed size

EXAMPLE:

```js
hash("pink", 5); // imagine hash f() returns 4
hash("blue", 5); // imagine hash f() returns 4. COLLISION!

hash("orange", 5); // imagine hash f() returns 0
hash("red", 5); // imagine hash f() returns 1
```

Storing values with separate chaining

```js
const hashMap = [ ['orange'], ['red'], [], [], ['pink', 'blue'] ]
```

Now when we search `hashMap['blue']`, our hash function will convert that to `hashMap[4]`
Your PC will loop through the array in there to find it's correct value

#### Solution 2: Linear probing

When a collision's encountered, search through the array to find the next empty slot. 
Is a valid option if you really want to store a single value in each array entry spot

EXAMPLE: Imagine your hash function produces 3 collisions at index 4

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426003908500.png" alt="image-20220426003908500" style="zoom: 50%;" />

The 2nd and 3rd would be value at `hashMap[4]` get shunted to the next available spot instead

### Set & Get KVPs

#### Requirements

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426160315208.png" alt="image-20220426160315208" style="zoom:67%;" />

#### Set

```js
  set(key,value){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
```



#### Get

```js
  get(key){
    let index = this._hash(key);
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined;
  }
```



### List all keys & values

#### What our Hash Maps look like

Both of these methods are easy to build if you understand what hashmaps look like

- In this chapter we've mainly focused on hashmaps with separate chaining implemented to handle collisions. 
- Here's a log of the hash map we've constructed thus far
  View code here: https://jsfiddle.net/Jason2B3/g1d5w6ya/

> ![image-20220426170116043](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426170116043.png)
>
> ![image-20220426170141273](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426170141273.png)
>
> - Array slots with nothing inside are empty. 
> - Array slots with content inside feature a nested list. 
> - Each key value pair gets its own dedicated array as well that gets placed into the nested list `["keyString", value] inside the nested list`
>
> Altogether we have 3 layers of nested arrays
>
> 1. The hash map
> 2. A hashmap slot that has content inside (nested list)
> 3. Key value pairs with their own dedicated 2-element array

#### keys: List all keys in Hash Map

```js
  keys(){
    let keysArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!keysArr.includes(this.keyMap[i][j][0])){
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr;
  }
```



#### values: List all values in Hash Map

```js
  values(){
    let valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!valuesArr.includes(this.keyMap[i][j][1])){
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr;
  }
```



# Graphs

> GRAPHS CODE: 						 https://jsfiddle.net/Jason2B3/kmog6jxz/4/
> WEIGHTED GRAPHS CODE: 	https://jsfiddle.net/Jason2B3/3jnxzv15/3/

### Intro to Graphs in General

#### What is a Graph?

The graphs we learn about in this chapter are not like the ones you learned about in high school

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426185917511.png" alt="image-20220426185917511" style="zoom:50%;" />

Graphs in web dev are a finite set of nodes and connections        

 								<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426190119369.png" alt="image-20220426190119369" style="zoom: 67%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426190442690.png" alt="image-20220426190442690" style="zoom:67%;" />

COMPARED TO TREES
Unlike trees, graphs don't need have a parent node that all other nodes descend from

- That being said, trees are technically one kind of graph
  Trees are graphs where vertices are connected by 1 edge (see terminology in later lesson)
- In regular graphs, all nodes are treated equally and the connections mean different things



### Practical Uses

#### Social Networks 

Social media users can be considered nodes
If they're friends with someone, that can be considered a connection

- Many people in the same school or town likely have overlapping connections with the same people
- Suggested friends originate from several other friends of yours sharing a connection with one person you haven't added yet

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220427165344010.png" alt="image-20220427165344010" style="zoom:67%;" />
>
> Nan is friends with Maria and Armie
> Tim is also friends with Maria and Armie
> Tim and Nan are not friends themselves, so a social media site would likely make that a suggestion

#### Product Recommendations

- You get suggested shows and products that are liked/bought by people in your age group or by those who share similar interests
- Your similarities with other people are the connections to different nodes
  The suggestions themselves are the nodes

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426193123597.png" alt="image-20220426193123597" style="zoom: 80%;" />

#### Maps 

Locations can be considered nodes
Routes to new destinations can be considered the connections between nodes

- There is much to consider when suggesting routes- distance, speed limits, traffic, tolls...etc
  Maps are almost always weighted graphs (you'll earn what this means next lesson)
- Graphs are the go-to data structure for finding the most efficient path from point A to B

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426192214256.png" alt="image-20220426192214256" style="zoom:67%;" />





### Types of Graphs

#### Terminology

VERTEX: 	a node

EDGE: 	a connection between nodes

WEIGHTED /UNWEIGHTED:
Values assigned to distances between vertices

DIRECTED / UNDIRECTED:
Directions assigned to distances between vertices 

#### Undirected Graphs

Undirected graphs have no direction or singular polarity to their edges. 
Their connections are a 2 way street, just like the `next and prev` pointer keys in doubly linked lists

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426194549606.png" alt="image-20220426194549606" style="zoom:80%;" />

#### Directed Graphs

Directed graphs feature edges that point in a singular direction- they are polarized
These connections are a 1 way street, like the `next` pointer keys in singly linked lists

Diagrams for directed graphs usually feature arrows to show what node points to the other

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426194527020.png" alt="image-20220426194527020" style="zoom:80%;" />

We wouldn't want to think that C points to B while in reality it is B that points to C 

#### Weighted vs Unweighted Graphs

- Weighted graphs have values associated with their edges (left)
- Unweighted graphs do not (right)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426195048273.png" alt="image-20220426195048273" style="zoom:67%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426195007811.png" alt="image-20220426195007811" style="zoom:67%;" />

#### Graph Recognition Quiz

Weighted undirected:													Unweighted undirected

 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426195048273.png" alt="image-20220426195048273" style="zoom:67%;" />   <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426194549606.png" alt="image-20220426194549606" style="zoom:80%;" />

### Storing Graphs: Adjacency Matrix

#### Adjacency Matrix

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426212426717.png" alt="image-20220426212426717" style="zoom:80%;" />

This matrix uses 0s and 1s to represent Booleans

- Look at the red lines in the diagram below. 
  They indicate node B has a connection with node C
- Node C does not have a connection with node E
  We can tell by looking at the table - the diagram does not need to be there for us to know this

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426212624469.png" alt="image-20220426212624469" style="zoom:80%;" />

1: connection between nodes
0: no connection

#### Difference with Directed Graphs

When it comes to adjacency matrices, we have 2 options to check the connection between 1 node and another

EXAMPLE: Check if D connects to E in two different ways

> ![image-20220426213550329](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426213550329.png)
>
> Red: check E in the vertical axis
> Teal: check E in the horizontal axis

Your choice between these two options does not matter when the graph is undirected

- If the graph is directed, the 1st option may indicate a connection between two nodes while the 2nd option doesn't (and vice versa)
- This is to be expected when a graph features 1 way connections
  A might connect to B, but that does not guaranteed B connects to A

#### Directed Graphs Example

GOAL:

1. Check if 1 connects to 4

- Check 1 in the vertical axis
  Result: 1  (yes)

2. Check if 4 connects to 1

- Check 4 in the vertical axis
  Result: 0  (no)

![image-20220426214427089](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426214427089.png)



### Storing Graphs: Adjacency List

#### With numeric Nodes

When nodes have numeric values, we can use array indexes to dedicate a slot in a list for each node

- Node 2 gets the slot associated with index 2 in our list
- Inside node 2's slot, we have an array: `[1,3]`
  This means node 2 is connected to nodes 1 and 3

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426214820902.png" alt="image-20220426214820902" style="zoom:80%;" />

Take a look at array index 5.
It tells us node 5 is connected to node 4 and 0

#### With non-numeric Nodes

When nodes have non-numeric values, an array won't work 
Instead, we can use JS objects to store key value pairs

- The keys will be the node value
- The value will be a list of other nodes that the node is connected to

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426214852199.png" alt="image-20220426214852199" style="zoom:80%;" />

Take a look at object key F
It tells us node F is connected to node E and A



### Big O: Adjacency List vs Matrix

#### Time Complexity Table

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426224302991.png" alt="image-20220426224302991" style="zoom:80%;" />

#### Pros/Cons for Both

In most situations you'd want to use an adjacency list since real world data tends to be sparse
Most of the time, not every node/bit of data is interconnected

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426224636084.png" alt="image-20220426224636084" style="zoom:67%;" />

> Explanations for all points:
> https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344874#overview



### Add Vertex

#### Requirements

1. Method should accept the name of a vertex and add a key to the adjacency list with that same name
2. Set that key's value to be an empty array

Check to see if the `vertexName` already exists in our graph before adding it
If so, do not overwrite (real life graphs will likely be more complex and require error handling)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220427091314693.png" alt="image-20220427091314693" style="zoom:80%;" />

- The reason we set the vertex value to an empty array is because we need to create an empty list before we add any edges to it
- Connections between nodes can't exist before the nodes themselves do

#### Code

```js
  addVertex(vertexName) {
    if (!this.adjacencyList[vertexName]) {
      this.adjacencyList[vertexName] = [];
    }
  }
```



### Add Edge

#### Requirements

We've made it so vertices are represented by keys whose values start off as an empty list before any edges are added. Now, it's time to add those edges

GOAL: Create a method that creates undirected edges between nodes

1. Accept 2 vertexes - v1 and v2
2. Add 2 list entries to the adjacencyList

- On v1's list, it should add a connection to v2
- On v2's list, it should add a connection to v1

![image-20220427124759574](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220427124759574.png) ![image-20220427125253745](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220427125253745.png)

#### Code

- In real life, this function would likely involve more error handling
  Ex. Checking to see if the vertex inputs were actually valid
- If we wanted to create a 1 way connection/edge, we would remove one of the if blocks where we push values into an edge list

```js
  addEdge(v1, v2) {
    // Check if both vertexes already exist in the adj_list (if not, insta fail)
    // don't connect the same node to itself either
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2] || v1 === v2)
      return null;
    // Add v2 to v1's edge list if it isn't already there
    if (!this.adjacencyList[v1].includes(v2)) {
      this.adjacencyList[v1].push(v2);
    }
    // Add v1 to v2's edge list if it isn't already there
    if (!this.adjacencyList[v2].includes(v1)) {
      this.adjacencyList[v2].push(v1);
    }
  }
```



### Remove Edge

#### Requirements

GOAL: Create a method that removes edges between to nodes

1. Method should accept 2 vertices, v1 and v2
2. v1 should be removed from v2's edge list
3. v2 should be removed from v1's edge list

![image-20220427135620884](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220427135620884.png)

#### Code

```js
  removeEdge(v1, v2) {
    let v1_target = this.adjacencyList[v1].indexOf(v2);
    let v2_target = this.adjacencyList[v2].indexOf(v1);
    // Remove v2 from v1's edge list, if it's there
    if (v1_target !== -1) this.adjacencyList[v1].splice(v1_target, 1);
    // Remove v1 from v2's edge list, if it's there
    if (v2_target !== -1) this.adjacencyList[v2].splice(v2_target, 1);
  }
```



### Remove Vertex

#### Requirements

GOAL:
Remove a vertex and all its edges from an adjacency list
It's easier to explain the requirements using an example

1. Loop through Hong Kong's edge list and remove every entry inside
2. If we remove Los Angeles from Hong Kong's edge list...
   That should indicate we need to remove Hong Kong from Los Angeles' list
3. Then set Hong Kong's value to undefined or remove the KVP entirely

IN OTHER WORDS: 
Empty out Hong Kong's edge list, then wipe all traces of Hong Kong from every other edge list in our data structure (in a targeted way- don't just search through every edge list)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220427142513052.png" alt="image-20220427142513052" style="zoom:80%;" />

#### Code

```js
  removeVertex(vertex) {
    // Loop while the edge list for "vertex" still has entries in it
    while (this.adjacencyList[vertex].length > 0) {
      // Remove an edge from vertex's list
      // then capture what other list we need to remove from
      const twinVertex = this.adjacencyList[vertex].pop();
      // Remove the edge from the other list as well, then repeat
      this.removeEdge(vertex, twinVertex);
    }
    // Delete the vertex's edge list entirely now that our loop is done
    delete this.adjacencyList[vertex];
  }
```



### Weighted Graphs: Fast 

We're going to create a new data structure- a weighted graph

- We'll quickly build many of the methods we've already learned about in this chapter
- They're built the same way, but we have to change a few things now that we define edges/connections as objects instead of flat values

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220426195048273.png" alt="image-20220426195048273" style="zoom:67%;" />

#### Weighted vs Unweighted

Instead of pushing flat values into edge lists, we're now going to push objects. 
These objects should contain a KVP for... 

- The other vertex we're connecting to
- The weight of that edge/connection

WEIGHTED GRAPHS: 															UNWEIGHTED GRAPHS: 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220428195141697.png" alt="image-20220428195141697"  /> ![image-20220428195335598](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220428195335598.png)

#### Code

RUN TESTS ON CODE:  https://jsfiddle.net/Jason2B3/3jnxzv15/2/

```js
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  } // building an undirected weighted graph
  addVertex(vertexName) {
    if (!this.adjacencyList[vertexName]) {
      this.adjacencyList[vertexName] = [];
    }
  }
  addEdge(v1, v2, weight) {
    // Check if both vertexes already exist in the adj_list (if not, insta fail)
    // don't connect the same node to itself either
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2] || v1 === v2)
      return null;
    // Add v2 to v1's edge list if it isn't already there
    if (!this.adjacencyList[v1].includes(v2)) {
      this.adjacencyList[v1].push({ node: v2, weight });
    }
    // Add v1 to v2's edge list if it isn't already there
    if (!this.adjacencyList[v2].includes(v1)) {
      this.adjacencyList[v2].push({ node: v1, weight });
    }
  }
  removeEdge(v1, v2) {
    let v1_target = this.adjacencyList[v1].findIndex(el => {
      return el.node === v2;
    });
    let v2_target = this.adjacencyList[v2].findIndex(el => {
      return el.node === v1;
    });
    // Remove v2 from v1's edge list, if it's there
    if (v1_target !== -1) this.adjacencyList[v1].splice(v1_target, 1);
    // Remove v1 from v2's edge list, if it's there
    if (v2_target !== -1) this.adjacencyList[v2].splice(v2_target, 1);
  }
  removeVertex(vertex) {
    // Loop while the edge list for "vertex" still has entries in it
    while (this.adjacencyList[vertex].length > 0) {
      // Remove an edge from vertex's list
      // then capture what other list we need tor emove from
      const twinVertex = this.adjacencyList[vertex].pop();
      // Remove the edge from the other lists as well, then repeat
      this.removeEdge(vertex, twinVertex.node);
    }
    // Delete the vertex's edge list entirely
    delete this.adjacencyList[vertex];
  } // vertex val is the value of the "node" kvp in
}
const g = new WeightedGraph();
```



# Graph Traversal

> TEST OUT TRAVERSAL ALGORITHMS ON OTHER GRAPHS:
> https://visualgo.net/en/dfsbfs

### Intro

#### What is Graph Traversal?

Graph traversal is the act of visiting every single vertex in a graph
Can also describe jumping from 1 vertex to another- without the condition that we visit them all 

- This can be used to update every single vertex in some way
- Special cases of graph traversal can involve finding the nearest neighbor vertex, the most similar vertex, or finding the shortest path from 1 vertex to another
- Regardless of what you're doing, most required actions will likely stem from the basic act of visiting each vertex- so we'll learn that first

#### Multiple Solutions

There won't always be one specific way to get from vertex A to B

- You may find multiple solutions and have to pick the best one
- Your routes may even have you revisit certain vertexes you've already visited before
  The code must keep track of that

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220427164833967.png" alt="image-20220427164833967" style="zoom:80%;" />
>
> List options to get from vertex 1 to 6
>
> -  0 → 1 → 6
> - 0 → 2 → 3 → 6
> - 0 → 2 → 3 → 5 → 8 → 6

#### Practical Uses for Traversal

EXPLANATIONS FOR ALL:
https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344882#overview

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220427170007028.png" alt="image-20220427170007028" style="zoom:80%;" />

### Depth-first vs Breadth-first

> RUN TESTS:
> https://visualgo.net/en/dfsbfs

#### DFS and BFS in Trees vs Graphs

We've discussed these 2 traversal methods when learning about trees. 

- The general idea remains the same here, but it's a bit tougher to understand each approach applied to graphs for a couple reasons
- Graphs have no starting point or main direction like trees do
  Knowing where to begin and how to visualize the traversal can be more challenging

#### Understanding Graph Diagrams & Lingo

NEIGHBORS:
Unlike trees, graphs don't need have a parent node that all other nodes descend from

- Graphs nodes don't really have children since everything's treated equal
- Instead, we use the term "neighbor"
- If node A is directly connected to node B...
  Node A is node B's neighbor
  Node B is node A's neighbor

HEIGHT:
Despite the fact that graph nodes have no children, we can still select a node as an origin then reference other nodes' heights

- A node's height refers to how many jumps away a node is from the origin 
- All neighbors of the origin have a height of 1

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220427184150183.png" alt="image-20220427184150183" style="zoom:67%;" />
>
> Node 6 is two jumps away from our origin (node 0) ... so it has a height of 2
> Node 9 is 1 jump away... so it has a height of 1

WHICH NEIGHBOR DO I VISIT FIRST?
If a node has multiple neighbors, you can visit either one first 
This leads to multiple correct answers (you'll see later in this lesson)

- As long as you go all the way down a node's network/path before you visit the others on its same height, it still counts as Depth-first
- As long as you visit all nodes at the same height before proceeding deeper down one's network, it counts as Breadth-first
- Regardless of the approach you choose, make sure your code remembers which nodes its visited already so you don't go forward then backtrack in an infinite loop

RE-VISITING NODES:
There will be many times where we re-encounter an already visited node, but we won't include that in our answers (run tests in [visual-go](https://visualgo.net/en/dfsbfs) if you're curious to see)

#### Depth-first

DEPTH-FIRST:
Traverse our way through a neighbor node's network before we finish traversing the network of the node we started from. 

- When I say network, I mean visit its a node's neighbor, then its neighbor's neighbor...etc
- If this were a tree, we'd go down all the way to the end of a path first before we backtrack and spread out horizontally- hence the name "Depth-first"

> DEPTH-FIRST TRAVERSAL
> If we visit neighbors with lower numbers first: 0 1 3 4 2
> notice how we visit 2 last, despite it being the neighbor of origin node 0
>
> ![image-20220427193846633](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220427193846633.png)
>
> BREADTH-FIRST TRAVERSAL:
> If we visit neighbors with lower numbers first: 0 1 2 3 4

#### Breadth-first

Visit all neighbors at your current depth before moving on to the neighbors of neighbors

> BREADTH-FIRST TRAVERSAL
> if we visit the neighbor with a lesser number first each time: 0 1 2 9 3 6 11 4 8 5 7 10
>
> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220427184150183.png" alt="image-20220427184150183" style="zoom:67%;" />

#### Example: Compare the two

Earlier on we said that we'd have multiple correct answers since we can choose to message either neighbor first regardless of what traversal approach we take- here are some examples of that

EXAMPLE 1: Start at A

> DEPTH-FIRST TRAVERSAL
> if we visit the neighbor with an earlier letter first each time: 	A B C D E F
> if we visit the neighbor with an later letter first each time:		A E F D C B
>
> BREADTH-FIRST TRAVERSAL
> if we visit the neighbor with an earlier letter first each time:	A B E C D F
> if we visit the neighbor with an later letter first each time:	   A E B F D C

![image-20220427183116704](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220427183116704.png)

### Breadth-first Graph Traversal: Iterative

#### Pseudocode

![image-20220428135802584](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220428135802584.png)

#### Code

We're going to use a queue (FIFO) to determine when our iterations must end
Push elements to the end of an array, remove from the start

- Using a queue is very similar to using a callstack
- We just manually decide when certain elements get added or removed to it
  Recursion does this automatically when you make a recursive call

```js
  BFS_iterative(origin) {
    if (!this.adjacencyList[origin]) return null; // edge case
    const queue = [origin];
    const result = [origin];
    const visited = {};
    visited[origin] = true; // mark origin vertex as visited

    // Loop as long as the queue has at least 1 vertex in it
    while (queue.length > 0) {
      // Pop the first vertex in the queue
      let shifted = queue.shift();

      // Loop through all shifted node's adjacent vertexes before we dive deeper
      this.adjacencyList[shifted].forEach(v => {
        // If visited, skip an iteration round
        if (visited[v]) return;
        // If unvisited, add them to the visited obj and results array
        visited[v] = true; // add it to the visited object
        result.push(v); // add to results array
        queue.push(v); // add to queue
      });
      // Once this finishes with one node, we likely have more nodes in the queue
      // To dive deeper, let this loop repeat on thse nodes added
      // This ends all nodes in the queue are gone
    }
    return result;
  }
```



### Depth-first Graph Traversal

Explore as far possible down 1 branch before we begin backtracking

#### Avoiding already visited Nodes 

Each time we visit a node, we need to remind our code not to visit that node anymore

- If we neglect to do this, it leads to infinite loops. 
- Ex. If we leave node A to visit neighbor node B, node A is technically one of node B's neighbors 
  But it makes no sense to go back to node A since we were there already

HOW WE RECORD VISITED NODES

```js
const visited = {
	"A": true,
	"B": true,
	"C": true
}
```

HOW VOIDING THE ALREADY-VISITED WORKS:
If you visit node A for example, ignore A from every other connection list in the future
When you visit node B, ignore B from every other connection list in the future

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220427195422347.png" alt="image-20220427195422347" style="zoom: 80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220427195457666.png" alt="image-20220427195457666" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220427195610909.png" alt="image-20220427195610909" style="zoom:80%;" />

When you visit node D, ignore D from every other connection list in the future
When you visit node E, ignore E from every other connection list in the future

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220427195805016.png" alt="image-20220427195805016" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220427200039834.png" alt="image-20220427200039834" style="zoom:80%;" />

Visit C, ignore it in connection lists afterwards
Visit F, ignore it in connection lists afterwards

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220427200205691.png" alt="image-20220427200205691" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220427200237062.png" alt="image-20220427200237062" style="zoom:80%;" />

#### Recursive Approach

PSEUDOCODE:		 

![image-20220428122154379](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220428122154379.png)

CODE:

```JS
  DFS_recursive(origin) {
    // If vertex does not exist in the adj_list, return null
    if (!this.adjacencyList[origin]) return null;
    // Mark vertex as visited (it is our starting node)
    const visited = {};
    const result = []; // returned @ end (contains node visitation order)
    const r = function (v) {
      // Base case: vertex is empty or already visited
      if (!v || visited[v]) return;
      // If this vertex has not been visited yet
      visited[v] = true; // Mark the vertex supplied as visited
      result.push(v); // Push that vertex in the results array
      // Loop through starter vertex's edge list
      // recursively call this f() on any unvisited nodes in the list
      for (let adjNode of this.adjacencyList[v]) {
        if (!visited[adjNode]) recursive(adjNode);
      }
    };
    const recursive = r.bind(this);
    recursive(origin);
    return result;
  }
```

#### Iterative Approach

Instead of using recursion/callstack, use your own custom stack and use iteration instead

PSEUDOCODE:	

![image-20220428122339064](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220428122339064.png)

CODE:
We're going to create our own stack (LIFO) instead of relying on recursion + callstack
We push/add things to the end of our stack array

```js
  DFS_iterative(origin) {
    if (!this.adjacencyList[origin]) return null; // edge case
    const stack = [origin];
    const result = [];
    const visited = {};
    visited[origin] = true; // mark origin vertex as visited

    // Loop as long as the stack has at least 1 vertex in it
    while (stack.length > 0) {
      let popped = stack.pop(); // Pop the last vertex in the stack
      // Add node to results array only after we dive deeper by letting a loop run
      result.push(popped);

      // Loop through all popped node's adjacent vertexes
      this.adjacencyList[popped].forEach(v => {
        if (visited[v]) return; // If visited, skip an iteration round
        // If unvisited, add them to the visited obj but not the results array yet
        visited[v] = true; // add it to the visited object
        stack.push(v);
      });
      // Once this finishes with one node, we likely have new nodes in stack
      // This repeats until all nodes in the stack are gone
    }
    return result;
  }
```





### DFS vs BFS: Run tests

#### Code Differences

|               | data structure | visits adjacent nodes of ___ first | when to add node to results array                            |
| ------------- | -------------- | ---------------------------------- | ------------------------------------------------------------ |
| Depth-first   | stack          | last nodes in stack (LIFO)         | after a loop completes, indicating we dove deeper (aka. after we pop a node from the stack) |
| Breadth-first | queue          | first nodes in queue (FIFO)        | when we first iterate over all a node's connections          |

#### Tests

RUN WITH THIS CODE:
https://jsfiddle.net/Jason2B3/kmog6jxz/4/

```js
const g = new Graph();
// Establish all your nodes
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
// Add edges
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
// Forms the graph shown in the image below
console.log(g.BFS_recursive()); // sample test
```

Run your sample test, then compare it to the results array you'd generate for this graph as a human performing these traversal algorithms

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220427195422347.png" alt="image-20220427195422347" style="zoom: 80%;" />

#### Tests on other Graphs

On [VisualGo](https://visualgo.net/en/dfsbfs), you can build other graphs then traverse them with BFS or DFS

- It won't give you a results array, but you can write one down yourself. 
- Just record the order in which nodes are visited, and ignore duplicates

If you don't understand what I just said, refer to the first few lessons of this chapter.
They teach how to perform BFS and DFS as a human before we code it



# ====== IMPORTANT TACTICS ======

# Number Systems

### Converting b/t Number Systems 

#### Integer Restriction Rule

Base X numbers can only be represented by digits ranging from 0 to `X-1`

- For instance, binary numbers are represented by integers 0 and 1
- Octal numbers are represented by integers 1,2,3,4,5,6,7 

#### How to think about Numbers in any Base

Let's say we have the number 5218 in base 10- the default number system for normal people
In terms of base 10, what is 5281 really?

```
5		2		8		1

We can express it as...
5000 + 200 + 80 + 1
(5*10^3) + (2*10^2)	+ (8*10^1) + (1*10^0)
```

#### Base 10 → Base below 10

EXERCISE 1:
Represent 328 in base 4.  (`11020`)	

```
4^4		4^3		4^2		4^1		4^0		(stop at 4^4, since 4^5 is larger than 328)
256		64		16		4		1		
1		1		0		2		0		(not allowed to divide more than 3 times)
```

- Decide how many times 256 can divide wholly into 328
- Then decide how many times 64 can divide into the remainder from the above step
  Repeat until 328 is divided into perfectly
- Just remember the main rule- it does not let us divide into a number more than 3 times since we're converting to base 4

How we derive our answer's digits:

```
328 - 1*256 = 72		256 can divide into 328 one time	(1)
72 - 64*1 = 8			64 can divide into 64 one time		(1)
8 - 16*0 = 8			16 can divide into 8 zero times		(0)
8 - 4*2 = 0				4 can divide into 8 twice			(2)
0 - 1*0 = 0				1 can divide into 0, zero times		(0)
```

------

#### Base 10 → Base above 10

When you work with higher number systems like hexadecimal, you will be allowed to divide into numbers more than 9 times.

- In cases like these we need special characters to represent numbers like 12
- It's tough to recognize whether 12 means one, two or twelve at first glance

SPECIAL CHARACTERS

| 10: A | 11: B | 12: C |
| ----- | ----- | ----- |
| 13: D | 14: E | 15: F |

EXERCISE 2: Represent 2000 in hexadecimal (`7D0`)

```
16^2		16^1		16^0		stop here b/c 16^3 is larger than 950
256			16			1
7			13			0			need a special character to represent 13
7			D			0
```

#### Other Base → Base 10

EXERCISE 1: Convert 2132 in base 4 to base 10 (`158`)

```
2		1		3		2
4^3		4^2		4^1		4^0	

Base 10 equivalent would be...
(2*4^3) + (1*4^2) + (3*4^1) + (2*4^0) = 158
```

EXERCISE 2: Convert 7D0 in hexadecimal to base 10

```
7		 D			0
16^2	 16^1		16^0

Base 10 equivalent would be...
(7*16^2) + (13*16^1) + (0*16^0) = 2000
```

### Negatives in Binary: Signed Magnitude Method

#### Definitions

UNSIGNED:
A binary number that must must be positive

SIGNED:
A binary number that could be positive or negative

#### Signed Magnitude 

The signed magnitude method is a way to represent both positive and negative numbers using binary

> SIGN BIT OPTIONS
>
> 0: prefix for positives
> 1: prefix for negatives

- That 1 or 0 tacked onto the front of your binary number is called the `sign bit`
- The sign bit has no impact on the magnitude of the number represented- only the polarity (+/-)

EXAMPLE: Represent -6 in signed binary

```
+6 in binary equals... 			 110
-6 in signed binary equals... 	1110
```

#### Pros / Cons of Signed Magnitude Method

The same sequence of 0's and 1's can represent a signed or unsigned number
Ex. `1010` could mean either "ten" or "negative two"

|                 | PROS                                                         | CONS                                                         |
| --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| signed binary   | you can represent magnitudes twice as big as unsigned with the same # of bits | can only represent positive numbers                          |
| unsigned binary | you can represent negative numbers                           | you can only represent magnitudes half as big as signed with the same # of bits |

If you don't understand why removing a bit halves the numbers a binary string can represemt, read the previous lesson



### Negatives in Binary: Two's Compliment Method

This is the second way to represent positive or negative numbers in binary
Computers typically store values with 2's compliment

REPRESENT A POSITIVE:
The 2's compliment notation for positive numbers is the exact same as regular binary

#### Represent a Negative: M1 (best)

This approach is the one easiest to recreate using bit manipulation

1. Represent the positive version of the number 
2. Invert all bit values of the positive version
3. Add 1

```c
0001 1100	// 28 in 8-bit 2's compliment
1110 0011	// inverted all bit values

1110 0011
0000 0001 +	// add 1
----------
1110 0100	// -28 in decimal
```

#### Represent a Negative: M2

1. Represent the positive version of the number in binary using 8 bits (mandatory)
   If less bits are required, add zeros to the left side- the value will be the same regardless
2. Find the first non zero bit starting fr/ the right side (LSB)

- Inverse every value to the left of the LSB
- Keep the LSB and every value to the right of it the same

EXAMPLE 1: Represent -20 using 2's compliment

```
20 in regular binary  				   10100

padded to 8 bits  					00010100
-20 in 2's compliment        		11101100
 20 in 2's compliment        		01101100
```

#### All Negatives in 2's compliment share this

Regardless of what approach you take, all negatives represented in 2's compliment have 1 thing in common- the leftmost bit is always set

```c
10000000000000000000000000000000		// -2147483648
```



#### Why 2's compliment Rules

Using signed binary can be problematic due to certain binary strings like this:

```
0000 = +0
1000 = -0
```

Performing binary addition with positives and negatives requires complicated logic

```
0010          2  
1001 +       -1 +
----        ------
1011         11    (regular approach for binary addition makes no sense)
```

2's compliment lets you perform binary addition/subtraction with ease
Ex. perform `2 + -1` using 2's compliment

```
 2 in 2's compliment: 00000010
-1 in 2's compliment: 11111111

  00000010
+ 11111111 
-------------
 100000001

Now, chop off the leftmost value due to overflow
Final answer = 00000001 = 1 (padding removed)
```





### Add/Subtract Binary Nums

#### Relearn what you know

You were taught how to add and subtract regular base 10 numbers in grade school. 

- We carry numbers left during addition when a sum exceeds 10
- We borrow numbers from the left during subtraction when the difference undercuts 0

```
   4 8
+  5 3
--------
 1 0 1
```

When it comes to binary numbers, the same rules apply, but with one major difference- the sum we must exceed to carry numbers over becomes 2 instead of 10

#### Binary Addition

![image-20220504172619321](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220504172619321.png)

Add 1010 with 1001

```
  1 0 1 0
+ 1 0 0 1
-----------
1 0 0 1 1
```

#### Binary Subtraction

Remember, when you borrow numbers over in binary subtraction, you borrow a grand total of 2 (not 10)

EXAMPLE 1: 
Perform 1000101 − 101100 in unsigned binary

ANSWER: 11001 								 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220504182035046.png" alt="image-20220504182035046" style="zoom:67%;" />



### Min/Max Numbers in 32-bit 2's compliment Binary

Because of how 2's compliment binary works, all negative numbers have a 1 as the leftmost bit
This effects how big/small the numbers we represent can be

#### Min/Max Number

|      | binary representation (both 32-bit, 0's are just fatter) | formula    | number      |
| ---- | -------------------------------------------------------- | ---------- | ----------- |
| min  | 10000000000000000000000000000000                         | `- 2^31`   | -2147483648 |
| max  | 01111111111111111111111111111111                         | `2^31 - 1` | 2147483647  |

WHY ARE THE MIN/MAX QUANTITIES DIFFERENT?

- Because 32 bit 2's compliment binary has a signed bit, negatives have one more bit to work with when it comes to representing numbers
- This is why the max representable number has a magnitude that's one less than the min representable number

WHY DOES THE MIN # HAVE 1 SET BIT?

- If you have set bits aside from the leftmost bit in negative numbers, it adds
- This decreases the magnitude of the negative number, making it... less negative
  Ex. -10 + 1 = -9 . Negative 10 is less than negative 9, so flipping bits does help reach the min

```
10000000000000000000000000000000		// -2147483648
10000000000000000000000000000011		// -2147483645	(less negative...aka not min)
```



# Bit Manipulation: Basics

RUN BINARY CONVERSIONS

> Decimal to binary
> https://www.rapidtables.com/convert/number/decimal-to-binary.html?x=4000
>
> 2's compliment to decimal: 
> https://www.rapidtables.com/convert/number/decimal-to-binary.html?x=4000

### Intro to Bits 

Computers represent all data as binary- which is why base 2 is so heavily focused on in this chapter

- Practically anything can be represented with binary- numbers, strings, images, a program...etc
- Because of this fact, it's impossible to tell what data type binary represents just by looking at it with zero context

#### Definitions

BIT:
The short form term for "binary digit"- and they're the smallest unit of data in a computer
Each bit has a value of 0 or 1

BYTE: 	 8 bits
WORD: 	32 bits

BIT PATTERN:  	   1's and 0's. Could be composed of one or several

SET BIT:				   A bit that equals 1
UNSET BIT: 			A bit that equals 0

#### Numbers & Bits

```
base_10: 7		 binary: 111		# of bits needed to store: 3
base_10: 8		 binary: 1000		# of bits needed to store: 4
base_10: 16		 binary: 10000		# of bits needed to store: 5
```

2 PRINCIPLES

1. The number of bits determines the max size of any number
2. Adding 1 extra bit doubles its max number capacity

#### Effects of more/less bits 

1 additional bit

- Represent max number of `(oldMax * 2) + 1`
- Total numbers you can represents doubles

1 less bit

- Represent max number of `(oldMax / 2) floored`
- Total numbers you can represents halves

```
1 represents decimal 1		can rep 2 numbers → 0,1
11 reps decimal 3			can rep 4 numbers → 0,1,2,3
111 reps decimal 7			can rep 8 numbers → 0,1,2,3,4,5,6,7
```

#### JS Bits Specifically

- Bitwise operations are calculated on 32 bits
  If you exceed 32 bit shifts, you'll start losing bits
- This is despite the fact that all numbers in JS are 64-bit double precision floating point numbers
  This cap is why numbers above `2^53 - 1` require BigInt



### The Importance of Binary

#### Relevance

The most important number systems for bit manipulation are decimal and binary

- Decimal - humans can understand them easily
- Binary- Computers are devices which understand electrical signals which have only 2 states (+ -)

Example: 

- If we have an input wire hooked up to a machine, there are only 2 possible states for this wire
  The current is either flowing or not flowing
- Flowing: 1 to represent true
  Not flowing: 0 to represent false

#### Positions in Binary

There's an established way to talk about bit positions in a binary string
Start from the rightmost digit then go left

EXAMPLE:

Binary pattern `0001` has zeroes at every position except the very first
("first" refers to the rightmost bit)

#### ASCII: Binary Character Table

You can represent all 26 upper and lowercase letters in binary using the the table found here:
http://sticksandstones.kstrom.com/appen.html



### Bitwise Operators + Intro to Bit Manipulation

#### Bit Manipulation Definition 

Bit manipulation is when you manipulate bits in order to achieve a desired result
Manipulating bits requires the use of Bitwise operators

BENEFITS

- Bitwise operations are faster + more efficient than regular arithmetic operators you typically rely on
  These include `===` `>` `<` .... etc
- They are directly supported by the processor and are uses to manipulate values so you can compare/calculate with them

#### Binary System we use

JS uses 32-bit 2's compliment binary

- Some examples done by hand may use 4 or 8-bit versions of 2's compliment to keep things short
- This may result in the answer JS gives you for the same operation to be slightly different than the answer you arrived on by hand
- However, if you chose to do all examples by hand using 32-bits, then you would arrive at the same answer that JS gives



### Bitwise AND: &

#### Logic

- If both operands equal 1, the operator returns 1
- All other cases result in a return of 0

```
1 & 1 === 1		0 & 0 === 0		0 & 1 === 0		1 & 0 === 0
```

#### Applied on Bit Patterns

Perform 12 & 10 in 32-bit binary

```c
a in Binary : 0000 0000 0000 1100	// (remaining 16 0's cut off for brevity)
b in Binary : 0000 0000 0000 1010
---------------------------------
a & b       : 0000 0000 0000 1000	// (represents 8 in decimal)

ANSWER: 12 & 10 === 8
```

- The `&` operation starts from the rightmost bit traversing towards the leftmost bit in the 32-bit binary representation- we limited our bits to 16 for simplicity's sake since we 12 and 10 are small
- We performed & on 11, 10, 01, 00

EXAMPLE 2: Perform `(12 & 10) & 32`

```c
x in Binary : 0000 0000 0000 1100
y in Binary : 0000 0000 0000 1010
---------------------------------
x & y       : 0000 0000 0000 1000

(x & y) in Binary : 0000 0000 0000 1000
   z    in Binary : 0000 0000 0010 0000
---------------------------------------
  (x & y) & z     : 0000 0000 0000 0000
  
ANSWER: (12 & 10) & 32 === 0
```

#### Bitwise AND assignment: &=

`a &= 3` performs a bitwise operation then sets a variable equal to the result of `a & 3`

```js
let a = 5;      // 00000000000000000000000000000101
a &= 3;         // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000001 	(the result from 5 & 3)
```



### Bitwise OR: |

#### Logic

- If at least one of the operands equals 1, the OR operator returns 1
- If both operands equal 0, the operator returns 0

```
0 | 0 = 0		1 | 0 = 1		0 | 1 = 1		1 | 1 = 1		
```

#### Applied on Bit Patterns

Perform 12 | 10 in 32-bit binary

```c
a = 12			b = 10
---------------------------------
a in Binary : 0000 0000 0000 1100	// (remaining 16 0's cut off for brevity)
b in Binary : 0000 0000 0000 1010
---------------------------------
a | b       : 0000 0000 0000 1110   // (represents 14 in decimal)

ANSWER: 12 | 10 === 14
```

#### Bitwise OR assignment

`a |= 3` sets a variable equal to the result of `a | 3`

```js
let a = 5;      // 00000000000000000000000000000101
a |= 3;         // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000111 	(result of  5 | 3)
```



### Bitwise XOR: ^

#### Logic

- If both operands are different, this operator returns 1
- In all other cases, it returns 0

```
1 ^ 0 = 1		0 ^ 1 = 1		1 ^ 1 = 0		0 ^ 0 = 0
```

#### Applied on Bit Patterns

Perform 12 ^ 10

```
a = 12			b = 10
---------------------------------
a in binary : 0000 0000 0000 1100	(remaining 16 0's cut off for brevity)
b in binary : 0000 0000 0000 1010
---------------------------------
a ^ b       : 0000 0000 0000 0110	(represents 6 in decimal)

ANSWER: 12 ^ 10 === 6
```

#### Bitwise XOR assignment

`a ^= 3` sets variable equal to the result from `a ^ 3`

```js
let a = 5;      // 00000000000000000000000000000101
a ^= 3;         // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000110		(result of 5 ^ 3)
```



### Bitwise NOT: ~

#### Logic

The NOT operator is a bit different than AND, OR, XOR

- NOT returns a value when applied on a single operand- instead of two like the other operators
- NOT returns the inverse value of the bit it's used on

```
~1 === 0		~0 === 1		(just flips the value)
```

#### Applied on Binary Patterns

Perform ~1 in 32-bit binary

```c
 x = 00000000 00000000 00000000 00000001	// (32 bit 2's compliment)
~x = 11111111 11111111 11111111 11111110	// (represents -2 in decimal)

ANSWER: ~1 === -2
```

------

FORMULA: for regular binary

```
~x = (2^32 - x)
```

The answer abides by the formula mentioned earlier since...

- `2^32 - 1 = 4294967294`
- 4294967294 in regular 32-bit binary is `11111111 11111111 11111111 11111110`



### Shifting in JS: >> << >>> 

#### 3 shift types

Remember, logical operators include `|| && ! ??` - the operators you likely learned first

| operator | name /  alt name                               | formula                     | effect on a number             |
| -------- | ---------------------------------------------- | --------------------------- | ------------------------------ |
| `<<`     | left shift                                     | `a << b =  a * (2^b) `      | multiplies # by multiples of 2 |
| `>>`     | signed right shift<br />arithmetic right shift | ` a >> b =  a / (2^b)`      | divides # by multiples of 2    |
| `>>>`    | unsigned right shift<br />logical right shift  | same as above on positive a | divides a by multiples of 2    |

ROUNDING RULES:

- Right shifts will always output an integer, even when a division would seem to lead to a fraction
- The general rule is to always round downwards, whether a is a positive or negative

`>>` : Preserves polarity

```js
console.log(5>>1); 	//  2		 2.5 rounded down to  2
console.log(-5>>1); // -3		-2.5 rounded down to -3
```

`>>>` : Does not preserve polarity

```JS
console.log(5>>>1); // 2.5 rounded down to 2
console.log(-5>>>1); // 2147483645
```

#### No Fractional Operands

Values of `a and b` will be floored during each calculation

```js
console.log(13.9 << 1); 	// output: 26
console.log(12.5 >> 1.7);   // output: 6
```

If the result of a right shift division would be a decimal, the output gets floored

```js
console.log(7>>2); // output: 1
// 7 divided by 4 equals 1.25
```

#### Shifts on Negatives

Left shift works as expected

```js
console.log(-4<<1); // 8
```

Signed right shift works as expected

```js
console.log(-5>>1); // -3
```

Unsigned right shift is a bit unintuitive

```js
console.log(-5>>>1); // 2147483645
```



### Bit by bit Analysis of Shifts

#### Left Shift: <<

Move each bit value to the left

- The leftmost value gets removed
- Any vacant spots created get filled with 0's

EXAMPLE 1: 
Take 6 then left shift by 1 spot 		`6 << 1`

```c
00000000 00000000 00000000 00000110		// 6 in binary
00000000 00000000 00000000 00001100		// left shift by 1	(results in decimal 12)
```

EXAMPLE 2:
Take 6 then left shift by 2 spots	`6 << 2`

```c
00000000 00000000 00000000 00000110		// 6 in binary
00000000 00000000 00000000 00011000		// left shift by 2 (results in decimal 24)
```

In JS:

```js
console.log(6<<1); // 12	Formula: 6 << 1 = 6 * 2^1
console.log(6<<2); // 24	Formula: 6 << 2 = 6 * 2^2
```

#### Right Shift on Positives: 

This subsection demonstrates `>>` and `>>>` on positive numbers, since they both result in the same outputs when used on operands above 0

Move each bit value to the right

- Rightmost bit gets excluded
- New vacant spots get filled with 0

EXAMPLE 1: 
Take 7 and shift right by 1		`7 >> 1` and `7 >>> 1`

```c
00000000 00000000 00000000 00000111		// 7 in binary
00000000 00000000 00000000 00000011     // right shift by 1 (3 in binary)
```

EXAMPLE 2:
Take 7 and shift right by 2		`7 >> 2` and `7 >>> 2`

```c
00000000 00000000 00000000 00000111		// 7 in binary
00000000 00000000 00000000 00000001     // right shift by 2 (1 in binary)
```

In JS:

```js
console.log(7>>1); // 3		Formula:  7 / 2^1 = 3.5 = 3 floored
console.log(7>>2); // 1		Formula:  7 / 2^2 = 1.25 = 1 floored
```

#### Arithmetic Right Shift on Negatives: >> (preserves -)

- Arithmetic shift will preserve the most significant bit (MSB) - the bit furthest left
- This preserves the original polarity of the number you used the operator on and protects it from changing due to the shift replacing it with a 0

EXAMPLE: On 8 bit binary

> -75 and -38 are represented in 2's compliment format
>
> ![image-20220510111324084](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220510111324084.png)

- Keep the leftmost bit the same
- Shift all bits forward - which means the rightmost bit gets removed

EXAMPLE: On 32 bit binary

JS uses 32 bit binary- so the diagram for that would need more 0's - 
though the answer would be the same

```c
11111111 11111111 11111111 10110101	// -75 in 32 bit 2's compliment binary
111111111 11111111 11111111 1011010 // -38 in 32 bit 2's compliment binary
```

Fact!

- `>>` gives the same output when we use 8 and 32 bit binary
- `>>>` does not

#### Logical Right Shift on Negatives: >>>

- Logical right shift does not care about preserving the polarity of the operand its used on
- It will displace the most significant bit and replace it with a 0
  This means every `negative  >>> any_number` will always result in a positive

EXAMPLE: Logical right shift on 8 bit binary 

> -75 and 90 are represented in 2's compliment format
>
> ![image-20220510111347847](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220510111347847.png)

EXAMPLE: 
Logical right shift on 32 bit binary
JS uses 32 bit binary, so -75 >>> 1 results in something else

```c
11111111 11111111 11111111 10110101	 // -75 in 32 bit 2's compliment binary
011111111 11111111 11111111 1011010  // 2147483610 in 32 bit 2's compliment binary
```



# Bit Manipulation: Advanced

### Manipulation Tactics

Potentially useful facts

- All even numbers end in 0
  All odd numbers end in 1
- All powers of 2 only have 1 set bit 

#### Useful Binary Patterns & Trick Formulas + Code Snippets

Relevant numbers in binary (don't worry, you don't have to memorize them all)

```c
10000000000000000000000000000000	// -2^31 	-Math.pow(2,31)
00000000000000000000000000000001	// 1

00000000000000000000000000000000	// 0
11111111111111111111111111111111	// ~0 
    
01111111111111111111111111111111	// max 32 bit 2's comp number (2147483647)
10000000000000000000000000000000	// min 32 bit 2's comp number (-2147483648)
    
10101010101010101010101010101010	// -1431655766
01010101010101010101010101010101    // 1431655765
```

Binary string → Decimal

```js
parseInt("01010101010101010101010101010101", 2) >> 0)
```

Decimal # → Binary Pattern

```js
(15 >>> 0).toString(2);
```

Limitation
Does not print the full 32 bits if the number is positive
You can pad the binary pattern with 0s in your head though

![image-20220513003355668](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220513003355668.png)

Check if rightmost bit is a 1

```c
n & 1 === 1 ? true : false
```



#### Bitwise Operator Tricks

Notation Explanation

- 0s is just a sequence of 0's with however many bits - ex. 0000 in 4-bit 2's compliment binary
- 1s is just a sequence of 1's

XOR tricks:

```
x ^ 0s = x			x ^ 1s = ~x			x ^ x = 0
```

AND tricks:

```
x & 0s = 0			x & 1s = x			x & x = x
```

OR tricks:

```
x | 0s = x			x | 1s = 1s			x | x = x
```

UNDERSTAND THEM
Try thinking about why these tricks have to be true- based on how each bitwise operator works

- Even if you forget them, you can arrive at them yourself by performing simple 1 bit tests on paper
  `x (operator) 0s, 1s, and x` (just make sure to perform multiple so we don't make a mistake)
- These principles work on all binary bit systems- 1-bit, 2-bit, 4-bit, 32-bit... etc

#### Shift Formulas

SHIFTING:

- Left shift by 1 doubles a number
- Signed/Arithmetic right shift by 1 halves a number
- In the formulas below, always round down to the nearest integer to get the result
  This applies when the answer is above or even below zero. (-2.5 → -3, 1.5 → 1)

Left shift: <<

```
a << b =  a * (2^b)
```

Signed/arithmetic right shift: >>

```
a >> b =  a / (2^b)
```

#### a ^ ~a = -1

If you XOR a binary pattern with its negated version, you get -1 back each time

```
a ^ (~ a) = -1
```

Test in JS

```js
console.log(20^(~20)); // -1
console.log(-3^(~-3)); // -1
```

How this principle works:

- If you do this by hand, you'll notice XORing a negated value results in 1 every time
- XOR returns 1 if the operands are different, which they must be due to bitwise NOT
- A binary sequence composed entirely of 1s always equals -1 in 2's compliment binary

```c
1101 /\ (~1101)		// 3 ^ (~3) in 2s compliment 4 bit binary

1101
0010 ^	
-------
1111
```

#### More Tricks

Cheat sheet:

> https://nicolwk.medium.com/bitwise-operations-cheat-sheet-743e09aec5b5



### How to Unset Bits

#### Unset X bits on the right

UNSET X RIGHTMOST BITS

```
binary_pattern & (~0 << x)
```

- Remember, ~0 us just a sequence of 1s
- If you're working with 4 bit binary, it's 1111
  If you're working with 16 bit binary ~0 = 1111 1111 1111 1111

------

EXAMPLE 1: 
In 4 bit 2's compliment binary, clear the last 2 bits on -5

```c
1011		// -5 in 2's compliment (4 bit)
1100 &		// ~0 << 2 , which is just 1111 << 2
--------
1000		// last 2 bits cleared!

answer in decimal: -8
```

EXAMPLE 2: 
In 16 bit 2's compliment binary, clear the last 4 bits on 287

```c
0000 0001 0001 1111		// 287 in 2's compliment (16 bit)
1111 1111 1111 0000 &	// ~0 << 4
-------------------
0000 0001 0001 0000		// last 4 bits cleared!

answer in decimal: 272
```

#### Unset X bits on the Left

UNSET X LEFTMOST BITS

```
a & (~0 >>> x)
```

EXAMPLE: 
Clear the 2 leftmost bits on -29 represented in 8 bit 2's compliment binary

```js
1110 0011		// -29 in 8 bit 2's compliment binary
0011 1111 &		// ~0 >>> 2
------------
0010 0011		// leftmost 2 bits cleared! 
```

#### JS Testing: Warning

If you run some of these tests in JS, you may get different answers than the ones given in your hand drawn solutions

- This is normal since JS uses 32-bit 2's compliment binary
- To save space, we performed tests jotted down by hand on 4,8, and 616 bit 2's compliment binary
  This risks changing the answer when we perform certain shifts, especially `>>>`

HOWEVER:
If you perform a solution by hand on 32 bit 2's compliment binary- your answers will match JS's results

By hand (8-bit 2's compliment)

```c
1110 0011		// -29 in 8 bit 2's compliment binary
0011 1111 &		// ~0 >>> 2
------------
0010 0011		// leftmost 2 bits cleared! 35 in decimal
```

In JS (32-bit 2s compliment)

```js
console.log(-29&(~0 >>> 2)); // 1073741795

// 1073741795 represented in 32 bit 2's compliment is...
0011 1111 1111 1111 1111 1111 1110 0011
// as you can see, the 2 leftmost bits are cleared, so our formula is working
```

#### Unset the rightmost set bit

```
KERNIGHAN'S ALGORITHM
results in "n" with its rightmost set bit changed to 0
n & (n-1)	

EDGE CASE: If this formula's used when n = 0, it returns 0
0 & (0-1) === 0
```

- Returns a binary pattern with one less set bit
- If repeated enough times, it will eventually return the binary representation of zero

Test: Figure out how many set bits 52 has using `n = n & (n-1)`

```C
00110100    &               (52)
00110011                    (51)
----------
00110000					(48. counter === 1)

00110000    &               (48)
00101111                    (47)
----------
00100000					(32. counter === 2)

00100000    &               (32)
00011111                    (31)
----------
00000000					(0. counter === 3)

Binary number has reached 0
52 has 3 set bits in total (counter variable)
```



### Formulas: Get, Set, Clear, Update bits at position i

#### What each Action does

Remember, position 0 is the rightmost bit

|        | means to ___ to the bit at position i                        | trick used                   |
| ------ | ------------------------------------------------------------ | ---------------------------- |
| GET    | retrieve the bit value                                       | `x & 1 = x`                  |
| SET    | set the bit value to 1                                       | `x | 0 = x`<br />`x | 1 = 1` |
| CLEAR  | set the bit value to 0                                       | `x & 0 = 0`<br />`x & 1 = x` |
| UPDATE | set the bit value to 0 or 1, depending on the function parameter | N/A                          |



#### Get Bit

```js
function getBit(number, bitPosition) {
  return (number & (1 << bitPosition)) === 0 ? 0 : 1;
}
```

Run tests:

```js
00000000 00000000 00000000 00001010		// 10 in 2's compliment binary
getBit(10, 0); // 0
getBit(10, 1); // 1
getBit(10, 2); // 0
getBit(10, 3); // 1
```



#### Set Bit

```js
function setBit(number, bitPosition) {
  return number | (1 << bitPosition);
}
```

Run tests:

```js
console.log(setBit(10, 2)); // 14

00000000 00000000 00000000 00001010		// 10 in 2's compliment binary
00000000 00000000 00000000 00001110		// bit at position 2 set to 1
								*
```



#### Clear Bit

```js
function clearBit(number, bitPosition) {
  const mask = ~(1 << bitPosition);
  return number & mask;
} 
```

Run tests:

```js
console.log(clearBit(10, 1)); // 8

00000000 00000000 00000000 00001010		// 10 in 2's compliment binary
00000000 00000000 00000000 00001000		// bit at position 1 unset
								 *
```



#### Update Bit

```js
function updateBit(number, bitPosition, bitValue) {
  const bitValueNormalized = bitValue ? 1 : 0;
  const clearMask = ~(1 << bitPosition);
  return (number & clearMask) | (bitValueNormalized << bitPosition);
}
// or... if you've already created set and clear functions
function updateBit(number, bitPosition, bitValue) {
  let utilityFN; // choose what f() to use based on the pattern
  if (bitValue === 0) utilityFN = clearBit;
  if (bitValue === 1) utilityFN = setBit;
  return utilityFN(number, bitPosition);
}
```

Test 1:

```js
console.log(updateBit(10, 3, 0)); 		// 2

00000000 00000000 00000000 00001010		// 10 in 2's compliment binary
00000000 00000000 00000000 00000010		// set bit at position 3 to 0
							   *    
```

Test 2:

```js
console.log(updateBit(10, 0, 1)); 		// 11

00000000 00000000 00000000 00001010		// 10 in 2's compliment binary
00000000 00000000 00000000 00001011		// set bit at position 0 to 1
							      *  
```



### Deep look at Get, Set Clear, Update

Memorizing the formulas for get/set/clear/update is not the best idea

- If you memorize even one detail wrong your entire solution will be incorrect
- Instead, let's understand exactly how each formula works using bitwise operators

#### Get Logic

```js
function getBit(number, bitPosition) {
  return (number & (1 << bitPosition)) === 0 ? 0 : 1;
}	// uses the following trick: x & 1s = x
```

BY HAND:

```c
getBit(10, 2); // 0 
00000000 00000000 00000000 00001010			// number (10)
00000000 00000000 00000000 00000100 &		// 1 << bitPosition (2)
--------------------------------------
00000000 00000000 00000000 00000000			// equals 0, so the f() returns 0

getBit(10, 3); // 1 
00000000 00000000 00000000 00001010			// number (10)
00000000 00000000 00000000 00001000 &		// 1 << bitPosition (2)
--------------------------------------
00000000 00000000 00000000 00001000			// D.N equal 0, so the f() returns 1
```

LOGIC

- The binary representation of 1 has a single set bit, and it's the rightmost bit
  We left shift that singular set bit to position i
- The `number` has a bit value of either 1 or 0 at position i
  AND will return 1 if that value at position i is 1
  AND will return 0 if that value at position i is 0

AND requires both operands to equal 1 in order to return 1

```
1 & 1 = 1 						1 & 0 = 0		0 & 1 = 0		0 & 0 = 0
```

Since the shifted version of 1 only has a single set bit, the bitwise AND only has 2 possible outcomes:
0 - if `number`s bit value at position i is 0
1 - if `number` bit value at position i is 1

#### Set Logic

```js
function setBit(number, bitPosition) {
  return number | (1 << bitPosition);
} // uses the following trick: 	x | 1s = 1s	
```

BY HAND:

```C
getBit(10, 2); // 0 
00000000 00000000 00000000 00001010			// number (10)
00000000 00000000 00000000 00000100 |		// 1 << bitPosition (2)
--------------------------------------
00000000 00000000 00000000 00001110			// equals 0, so the f() returns 0
```

LOGIC:

- The binary representation of 1 has a single set bit, and it's the rightmost bit
  We left shift that singular set bit to position i
- We then perform a bitwise OR operation with the original `number`
  The original `number` at position i will have a bit value of 0 or 1
- 0 or 1 | 1 will always equal 1
  So the end result will be the original `number` with the bit at position i set to 1

#### Clear Logic

```js
function clearBit(number, bitPosition) {
  let mask = ~(1 << bitPosition) // bit at position i set to 0 (rest set to 1) 
  return number & mask;
} // uses the following trick: 	x & 0s = 0 , and also x & 1s = x
```

BY HAND:

```c
clearBit(10, 3); // 2

00000000 00000000 00000000 00001000 		// 1 << bitPosition (3)
11111111 11111111 11111111 11110111 		// ~ (1 << bitPosition)

00000000 00000000 00000000 00001010			// number (10)
11111111 11111111 11111111 11110111 &		// ~ (1 << bitPosition)
-------------------------------------
00000000 00000000 00000000 00000010			// 2
```

LOGIC:

Creating the mask

- The binary representation of 1 has a single set bit, and it's the rightmost bit
  We left shift that singular set bit to position i, then inverse all bit values with bitwise NOT
- Now, `~ (1 << bitPosition)` has a 1 at every position except for position i
  This is our mask

Using the mask

```
111111 0 111111
	   * at position i
	   
0 & 0,1 = 0		// mask guarantees the bit at position i to be cleared
```

- `number & mask` will result in the original number, but with the bit at position i set to 0
- The bit at position i is guaranteed to be zero thanks to the mask plus bitwise AND
- All other bit values in `number` will remain the same since `x & 1s = x`

#### Update Logic

- We just recycle functions we've already built
- We could explain the non-recycled version, but this is less work

```js
function updateBit(number, bitPosition, bitValue) {
  let utilityFN; // choose what f() to use based on the pattern
  if (bitValue === 0) utilityFN = clearBit;
  if (bitValue === 1) utilityFN = setBit;
  return utilityFN(number, bitPosition);
}
```



### Creating Masks + Exponent cascades

Sometimes we may need masks that are tough to create

#### Challenge

Create the following mask

```js
11111111111111111111110000001111
					  9    4			positions j=9 i=4
```

Create this mask by creating the left and right halves then merging them

```c
// Combine both halves to create the mask   
11111111111111111111110000000000		// left half (pre-j then 0s)
00000000000000000000000000001111 |		// right half (0s then post-i)
----------------------------------
11111111111111111111110000001111
```

#### Left Half

```js
11111111111111111111110000000000		// desired left half
```

The left half is simple to make

- Create a binary pattern composed entirely of 1s
- Left shift it so it has 0 bit values up to and including position j 

```c
11111111111111111111111111111111		// ~0
					  j    i			// positions j=9 i=4
11111111111111111111110000000000    	// ~0 << j + 1 
```

#### Binary Trick: Exponent Cascade

Every number in binary that can be represented by `2^i` has a single set bit
If you subtract 1 from that number, 2 things happen

1. The set bit gets turned to 0
2. All bits to the right get set to 1

Demos:

```
1000		8 in binary
0111		8-1 in binary
```

Think about binary subtraction- specifically how borrowing a 2 from a higher digit works

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220504182035046.png" alt="image-20220504182035046" style="zoom:67%;" />

#### Right Half

EXPONENT CASCADE METHOD:

If we could left shift leaving 1s behind instead of 0's the right half would be easy to make too
Unfortunately that isn't possible, but we can perform a trick- 1 cascade fr/ a perfect exponent of 2

```js
00000000000000000000000000001111		// desired right half
					  j    i			// positions j=9 i=4			
```

- Take 1 in binary, then shift it to position i
- Use the aforementioned binary trick to turn i into a 0, then have all bits to the right turn into 1

```c
00000000000000000000000000010000		// 1 << i
00000000000000000000000000001111		// (1 << i) - 1    
```

32 - i METHOD

- Alternatively, you could take a binary pattern composed entirely of 1s then logical right shift it until only 4 1's remain on the right side
- The operation would be

```c
11111111111111111111111111111111		// ~0
					  j    i			// positions j=9 i=4
00000000000000000000000000001111	   	// ~0 >>> 32 - i
```

### Looping through Binary && Finding RMSB, LMSB, OSB

Many naïve solutions to bit manipulation problems involve turning a number into a binary string then looping through it to perform a certain action

- The bit manipulation equivalent is a technique I've decided to name "Shift-while"
- It has a maximum of 32 iterations

TERMINOLOGY (i made these terms up, for the record)

RMSB - Rightmost set bit
LMSB - Leftmost set bit
OSB - Only set bit

#### Shift while Technique

Create a while loop that ends when `N===0`

- You check if the rightmost bit in a binary sequence is 1 using `n & 1 === 1 ? true : false`
  Perform a question-dependent action depending on whether it is or isn't
- Afterwards you `>>>` right shift the binary pattern to get rid of the rightmost bit
  Eventually `N` will become 0 when all the set bits get shifted out, then the loop ends

The remaining subsections are problems you can solve using shift-while

#### Find Leftmost Set Bit Position

APPROACH 1: Shift while

- Full disclosure, I created this method myself and I find it easy to remember
- The solution suggested by GeeksForGeeks is likely more optimized

```js
const leftmostSetBit = function (n) {
  // Shift right until n becomes 0 and track how many shifts you do
  let N = n; // clone n to not mutate it
  let counter = 0;
  while (N !== 0) {
    N = N >>> 1;
    counter++;
  }
  return counter - 1;
};
console.log(leftmostSetBit(8)); // 3
console.log(leftmostSetBit(1024)); // 10
console.log(leftmostSetBit(-1024)); // -31 (furthest bit on left)
```

APPROACH 2:
https://www.geeksforgeeks.org/find-significant-set-bit-number/?ref=lbp

#### Find Rightmost Set Bit Position

APPROACH 1: Trick formula

```
Math.log2(n & -n)
```

Code + tests

```js
const rightmostSetBit = function (n) {
  return Math.log2(n & -n);
};
console.log(rightmostSetBit(5));  // 101, so rightmost set bit is at position 0
console.log(rightmostSetBit(12)); // 1100. so leftmost bit's at position 2
```

APPROACH 2:
Could use shift while as shown in the previous subsection

#### Find Only Set Bit Position

OBJECTIVE:

- When given a number with 1 set bit, return its position
- If the given number has 0 or 2+ set bits, return -1

APPROACH 1: SHIFT WHILE

```js
const powerOfTwo = function (n) {
  // EDGE CASE: 0 & (0 -1) === 0, and 0 ain't a power of 2
  if (n === 0) return false;
  n = n & (n - 1); // remove the rightmost set bit
  if (n === 0) return true;
  else return false;
}; // helper function that tells us if a number can be represented as 2^i

const onlySetBit = function (n) {
  // Return -1 if n is not an exponent of 2
  if (powerOfTwo(n) === false) return -1;
  // Right shift until N becomes 0
  let N = n;
  let counter = 0;
  while (N !== 0) {
    N = N >>> 1;
    counter++;
  }
  return counter - 1;
};
console.log(onlySetBit(8)); // 3
```

#### Looping through 2+ Numbers at Once

Some problems require you to loop through 2+ numbers simultaneously and perform an action based on their 3 values

The setup while looks as follows:

```js
const minFlips = function (a, b, c) {
  let i = 0;
  let flips = 0;
  // Loop over a/b/c at the same time
  while (i < 32) {
    // Get rightmost bit values for a/b/c
    let a_rightmost = (a & 1) === 0 ? 0 : 1;
    let b_rightmost = (b & 1) === 0 ? 0 : 1;
    let c_rightmost = (c & 1) === 0 ? 0 : 1;
    // Perform some action based on the rightmost value of each number 
    // ~~~~~~~
    // Shift a/b/c at the same time
    a = a >>> 1;
    b = b >>> 1;
    c = c >>> 1;
    i++; // increment counter that eventually ends the while loop
  }
  return flips;
};
console.log(minFlips(2, 6, 5));
```

Check out the `Min Flips needed to make a | b = c` problem in our algorithm practice document
It uses triple number looping and is reasonably complex



# Basics of Dynamic Programming

Intro

Overlapping Subproblems

Optimal Substructure



FREE RESOURCES

1. Requires leetcode:
   https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns
2. https://emre.me/categories/#coding-patterns
2. https://github.com/trekhleb/javascript-algorithms

Grokking Topics (course is overpriced)
https://www.educative.io/courses/grokking-dynamic-programming-patterns-for-coding-interviews/m2G1pAq0OO0

![image-20220507024911224](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220507024911224.png)



# Interview Topics

### Must-know

#### General Overview

Tries, Vectors, Bit Manip, Dynamic Programming

[Grokking Dynamic Programming Patterns for Coding Interviews - Learn Interactively (educative.io)](https://www.educative.io/courses/grokking-dynamic-programming-patterns-for-coding-interviews)



https://www.educative.io/path/ace-javascript-coding-interview

![image-20220504123045671](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220504123045671.png)

![image-20220415055305959](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220415055305959.png)

![image-20220415055408287](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220415055408287.png)



![image-20220415055434248](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220415055434248.png)



#### Sorting Algorithms

The most important algorithms for interviews are those with complexity `nlog(n)`

1. Merge sort 
2. Quick sort

#### Most Important Remaining Topics

ALGORITHMS

- Backtracking algorithm
- Greedy algorithm
- Bit manipulation
- 1D and 2D dynamic programming

DATA STRUCTURES

- Invert or balance binary tree

MISC

- Fizzbuzz
- Overlapping and non-overlapping interval questions- solved via stacks

#### Grokking the Code Interview

Learn these topics by searching for them in Leetcode then analyzing the solution before you attempt them- check out other tutorials, videos, and peep the LC comment section as well

1. Fast and slow pointers
2. Merge intervals
3. Cyclic Sort
4. Pattern: 2 heaps
5. Pattern: subsets
6. Pattern: Modified binary search
7. Pattern: Top K elements
8. Pattern: K-way merge
9. Pattern: 0/1 knapsack(dynamic programming)
10. Pattern: Topological Sort (graph)

### Practice Regimen

1. Neetcode 150
2. Blid 75
3. Sean Prashad list
   [Leetcode Patterns (seanprashad.com)](https://seanprashad.com/leetcode-patterns/)

General Guide for what to use and when
[Leetcode Patterns (seanprashad.com)](https://seanprashad.com/leetcode-patterns/)



### Local Eats

Quickly skim the optimization chapter for React/Next that you skipped in your course
Scour each file and refactor bloated code + eliminate unrequired imports + Optimize
Be sure to test the website fully after any changes that may potentially break the app

See how your website performs using dev tools
See how the color contrast ranks using some software
Test site on different browsers after you deploy

Optimize the site, improve performance where possible, ARIA...etc
Get the site professionally reviewed by a friend 

Write custom documentation for the app
Explain how each feature works using plain english, and reference files that do what you're explaining
Consider using a visual PDF to illustrate how the site works for your Github later on

Deploy! Get your friends to help locate any errors. 
See if they can use recording browser extensions so you know what triggers a crash

Create a boiler plate folder for MUI with Next.js
CTRL F Starting Project Folders (1 of 2)

Project Notes on
1. Mixins with MUI (comb through and explain your best ones like breakafter)
2. Hide before and hide after mixin. Flex row and flexColumn
3. Layout Container and Padded Block reusable component
4. Create a boilerplate for Next MUI projects
5. The libraries used for Lazy loading and other relavant ops
6. Debounce tutorial and single lodashFN tutorial

#### Next Project A: TC Calculator

https://www.talent.com/tax-calculator/California-120000

Take home after tax calculator per region of interest

Factor in average rent costs

Calc how much you would get after these deductions

Show how much average CoL is in that area

Salary rate- annual, moth, biweekly, weekly, day, hour (in CAD and USD)

Add a secret color schema for common law or no common law

#### Next Project B: Game Alert

Find out when a game goes on sale or ducks a certain price then email users

​	
