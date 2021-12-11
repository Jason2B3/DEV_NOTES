### Questions Round 1

1) Are we supposed to be good enough to custom design certain features on our website without taking other people's pre-made code? 

ITS OKAY YOU CAN STEAL

2) While working, does anyone care if you have your headphones plugged in to follow some YouTube tutorials on how to build certain things

NO ONE CARES

3) When making our site, I would use YouTube videos to learn how to build individual features I hadn't made yet. For example, the sliding mobile menu that triggers when the burger icon is pressed. Should I be figuring it out on my own with no assistance, or is this approach okay?

FOR NOW JUST COPY PASTE BECAUSE ITS FASTER

3) When building the HD site, I used a jQuery plugin called flickity which requires a paid license to use on more professional projects. Is that something I should worry about?

NOBODY CARES

4) How important is ARIA when you design your sites? I've never paid much attention to it, aside from keeping my HTML in order semantically 

FOR SMALL INDEPENDENT PROJECTS, IT'S NOT A BIG DEAL



5) Can you explain the solution of the FCC switch statement challenge? 
I saved it at the end of my lesson for that topic
Why did we save an empty string in the function
When we return

#### Aesthetics

6) How do you go about using images and SVG's legally? I know about some SVG sites that require you give credit to the original artist if you want to use them. How would I do that?

JUST TAKE IT

7) Do you know about color theory?
How much UI designer stuff would you recommend I look at?

SOMEONE ELSE WILL DO THAT

8) Have you ever worked at places where they don't allow you to use certain technologies like flexbox or grid because they want to provide support for internet explorer?

YES, BUT OFTENTIMES THEY HAVE THINGS IN PLACE TO REPLACE THESE TOOLS

#### Job Questions

9) Once I land my first job, will I be expected to learn some new language not currently in my stack? I know the odds of matching your stack up perfectly with what a company uses is unlikely

YOU ARE EXPECTED TO BUT THEY WON'T THROW YOU TO THE WOLVES RIGHT AWAY



### Weaknesses to Patch Up

- Don't know how to make animated extending search bars
- Not particularly good with menu sliders
- Don't know how custom CSS variables work

### Return2 Major Topics

1. CSS Variables (browser support is iffy and I know SASS which compiles to CSS anyway)
   [(2) CSS Variables - An introduction to CSS custom properties - YouTube](https://www.youtube.com/watch?v=PHO6TBq_auI&list=PL4-IK0AVhVjOT2KBB5TSbD77OmfHvtqUi&index=1)

   https://css-tricks.com/difference-between-types-of-css-variables/

### Next Project- IMPLEMENT

- Implement grid, support queries (if needed), vendor prefixes
- If using flexbox, try to use flex-shorthand to size your elements instead of defining widths all the time (get experimental with it)
- For future projects, write a detailed explanation for how everything was made

### Questions Round 2

1) How do I use a native JS partial if I'm trying to export code from a file nested higher up? (tried and it hasn't worked yet)

2) Why does this not redefine our array?
I'm aware the secondTest argument is pointless, but I'm not sure why it would affect the result

```js
'use strict';

let array= [99, 101, 4, 5];

function test(array){
  
  function secondTest(array){
      array= [0,0,0,0]  // this fails to redefine the array
      console.log("howdy"); // this works
  }
  secondTest(array);
  console.log(array[0]);
}
test(array)  //OUTPUT: 10
```

This next snipped succeeds at redefining the array. I just don't understand what the big deal is

```js
let array= [99, 101, 4, 5];

function test(array){
  
  function secondTest(){
      array= [0,0,0,0]  
      console.log("howdy"); // this works
  }
  secondTest();
  console.log(array[0]);
}
test(array)  //OUTPUT: 10

// Why does this not redefine our array while the following example does?
// I'm aware the function argument is pointless
```

3) Why does this create an error?

When we call a function into forEach, it only seems to work if its argument-less

```js
const days= ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
function salute(name){
  console.log(`Bienvenido ${name}`)
}
days.forEach(salute("Jason"))
```

4) Why does this first code snippet's continue keyword work properly

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

While this one doesn't? All I did was add .entries and it fails to skip the iteration with garlic bread as the array element

```js
const restaurant = {
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
}

for (const item of restaurant.starterMenu.entries()) {
  if (item == 'Garlic Bread') {
    continue;
  }else{
    console.log(item);
  }
}
```

5) What kind of objects have I created here? They have no keys that I can call with bracket or dot notation

Creating Objects from Maps:

```js
const quizMap = new Map([
  ['question', 'Which programming language is the most cringe?'],
  [1, 'JavaScript'],
  [2, 'Java'],
  [3, 'PHP'],
  ['correct', 3],
  [true, "You're right!"],
  [false, 'try again...'],
]);


const quizMapKeys= quizMap.keys() //create keys object
const quizMapValues= quizMap.values() //create values object
console.log(quizMapKeys);
console.log(quizMapValues);
```



6) Why does .louse not get fully highlighted?
I'm aware this is not how you use the . special character

![image-20210312222929376](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210312222929376.png)



7) Why does hyper drive only get partially highlighted?

```
/^hyper|over drive$/gim
```

![image-20210313015524325](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210313015524325.png)

Isn't the above line the same as:

```
/^(hyper|over) drive$/gim
```

![image-20210313015553146](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210313015553146.png)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

11) Why does this not remove all the falsy values?

```js
function bouncer(arr) {
  let a = arr.filter(value => value != false);
  console.log(a);
  return a;
}

bouncer([7, 'ate', '', false, 0, undefined, null, NaN, 9]);
// fails to remove undefined, null, and NaN
```

![image-20210323132235113](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210323132235113.png)

11.5) Remember to add this to the truthy lesson

Our challenge is to remove all falsy values from an array we feed our function

```js
// SOLN
function bouncer(arr) {
  let newArr=[];
  for(let value of arr){
    if(value){
      newArr.push(value)
    }
  }
  console.log(newArr);
}

bouncer([7, 'ate', '', false, 0, undefined, null, NaN, 9]);
```



The above snippet works as intended, but the next one doesn't:

```js
function bouncer(arr) {
  let newArr=[];
  for(let value of arr){
    if(value==true){	// ONLY DIFFERENCE
      newArr.push(value)
    }
  }
  console.log(newArr);
}

bouncer([7, 'ate', '', false, 0, undefined, null, NaN, 9]);
```

![image-20210323133610566](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210323133610566.png)

12) Why does changing thisArray[i] to el cause an error? aren't they the same thing?

They appear to be the same thing in a simple example like this:

```js
const arr1= [1,2,3,4,5]
arr1.forEach((entry, index, theArray)=> {
  theArray[index] = entry*2;
    //OR 	entry= entry*2
});
console.log(arr1); 	//OUTPUT: [ 2, 4, 6, 8, 10 ]
```

But here, it causes problems: https://jsfiddle.net/JasonXtuyotech/645b2pgc/2/

Left a comment in your JS that tells you where

13) I made functions that return the highest value in an array. Why does my second version not work properly when the first one does

first one that works: I use `return currentValue` to set currentValue equal to the accumulator

second one that fails: I typed `acc=val` and it doesn't work

14) Why and how does this expression work to get the average of an array?

```js
let arr=[36,32,76,48,28]
let a= arr.reduce((avg, value, _, { length })=>{
      return avg + value / length;
  }, 0);
```

While this one fails?

```js
let b=[36,32,76,48,28]
let b= arr.reduce((acc,value,_,thisArray)=>{
      return acc+value/thisArray.length
  }, 0);
```

I know I could get the total sum, with the last snippet, then I can divide with `arr.length` after the reduce method's over. But I was doing an example that encouraged us to chain multiple methods together:

15) Ask about the empty string bug with form fields

Demonstration of that bug found here: [JSFiddle - Code Playground](https://jsfiddle.net/JasonXtuyotech/bus7z458/10/)

The fix is to just bring the HTML imports into the submit event handler. However, I've seen examples where that isn't strictly required (bankist final version with variables inputTransferTo and inputTransferAmount)

16) Apparently inheritance between ES6 classes in JS can lead to certain problems when designing software. Why is that?

17) What's the difference between..

```js
const getFruit = async title => {
  const fruits = {
    pineapple: '🍍',
    peach: '🍑 ',
    strawberry: '🍓',
    plantain: '🍌',
  };
  return Promise.resolve(fruits[title]);
};
const fruitNames = ['peach', 'pineapple', 'grape', 'plantain', 'strawberry'];

const emojiArray = fruitNames.map(async v => await getFruit(v));
											// THIS AND IF I REMOVE THE await
console.log(emojiArray); // STATE 1: all pending (useless)

// HOW TO: Use our array of promises
Promise.allSettled(emojiArray).then(fruitsArr => {
  console.log(fruitsArr); // STATE 2: objects containing our emojis
  fruitsArr = fruitsArr.map(obj => obj.value); // STATE 3
  console.log(fruitsArr);
});
```





