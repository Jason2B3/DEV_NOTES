# Bit Manipulation Practice



### Count # of digits in Integer

NAIVE METHOD:
Turn the number into a string then figure out its length
This works but you're converting one data type to another which is less performant

OPTIMAL METHOD:

1. Set up a variable named `counter` 
2. See if you can divide the number by 10- no quotients under 1 like 0.5
   If you can, increment `counter` 
3. Divide into the quotient from step 2
4. At some point 10 won't be able to divide into the remainder
   The number of digits will be `counter+1`

SOLUTION:

```js
function totalDigits(num) {
  let counter = 0;
  while (true) {
    let quotient = num / 10;
    // If number is divisible by 10
    if (quotient >= 1) {
      counter++; // inc counter
      num = quotient; // set num equal to the quotient
    }
    // If you can't divide 10 in anymore, end loop
    else break;
  }
  return counter + 1;
}
console.log(totalDigits(9091));
```



### Hamming Weight: Count Set Bits

> SOURCE:
> https://www.techiedelight.com/brian-kernighans-algorithm-count-set-bits-integer/

#### Problem 1

Example: The binary string `1010` contains 2 set bits- bits that have values of one

CHALLENGE:
Create a function that accepts a positive integer in decimal then returns the number of set bits in its binary equivalent

SOLUTION (read other subsections first)

```js
function setBits(n) {
  let counter = 0;
  while (n > 0) {
    n = n & (n - 1); // could use n &= (n-1)
    counter++;
  }
  return counter;
} 
```

PERFORMANCE ANALYSIS:

1. Time Complexity: O(1)

- The number of iterations equals the number of set bits
- This is notably less than 0(n), so we can classify it as 0(1)

2. Space complexity O(1) 

- we only store a flat number value inside counter

#### Broad explanation of Kernighan's Algorithm

BROAD EXPLANATION:
Take a positive number like 52 and look at its binary representation

- It has 3 set bits- and we're going to count them using a bit manipulation trick
- We're going to disable set bits one at a time, and keep track of exactly how many times we do
  That will be our final answer

```
00110100 		52 in binary
00110000 		total of 1 disabled
00100000		total of 2 disabled
00000000		total of 3 disabled

There are no more set bits to disable, so the final answer is 3
```

#### Formula: Disable Rightmost Set Bit

DISABLE RIGHTMOST SET BIT:

- Returns a binary pattern with one less set bit
- If repeated enough times, it will eventually return the binary representation of zero

```
KERNIGHAN'S ALGORITHM
n & (n-1)

Edge case!
0 & (0-1) === 0
```

Behold!

```
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

Binary number has reached 0, so return the counter as our answer
```

#### How Formula Works

If you compare n-1 to n in binary, you'll notice that n-1 flips...

1. The rightmost set bit
2. All bits to the right of the bit I just mentioned in step 1

```
00110100    &               (52)... aka n
00110011                    (51)... aka n - 1
	 xxx					100 on the right got turned to 011 
```

- Bitwise AND will turn any non matching bits to 0
- This coupled with the flipping eliminates the rightmost bit

#### Problem 2

Create an array. Fill it with the number of set bits in every number going from 0 to n

EXAMPLE: if n = 6

```c
00000000	// 0 in binary has 0 set bits
00000001	// 1 in binary has 1 set bits
00000010	// 2 in binary has 1 set bits
00000011	// 3 in binary has 2 set bits
00000100	// 4 in binary has 1 set bits
00000101	// 5 in binary has 2 set bits
00000110	// 6 in binary has 2 set bits

ANSWER: [0,1,1,2,1,2,2]
```

SOLUTION

```js
function setBits(n) {} // problem 1's solution

function getSetBitArray(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(setBits(i));
  }
  return arr;
}
```

ANALYSIS:

Time Complexity - O(n)

- We have a while loop that has O(1) complexity inside of a for loop
- The setBits function from problem 1 was established to have O(1) complexity already

Space Complexity - O(n)

- We store values in an array whose number of entries equals n (linearly dependent)
- Our grokking course says space complexity is O(1), but i don't know why





### Check if # is Even or Odd

- All odd numbers in binary must end in 1
- Even numbers must end in 0

TRICK:

```
?????????			n
000000001	&		1 in binary
-------------
000000001			1 in binary if n is odd
or...
000000000			0 in binary if n is even
```

CODE:

```JS
const evenOdd = function (n) {
  return (n & 1) === 0 ? 'even' : 'odd';
};
```



### Check if # is a power of 2

#### Trick

Think about how we write binary by hand for a moment

```
Lets represent 6 in binary

  0    0    0    0    0    1    1    0
___  ___  ___  ___  ___  ___  ___  ___ 
128  64   32   16   8    4    2    1 
2^7  2^6  2^5  2^4  2^3  2^2  2^1  2^0 
```

- All powers of 2 can be represented in binary using a single 1
- In other words, all powers of 2 have 1 set bit

GAME PLAN

- Use the hamming weight formula to remove the rightmost set bit
- If the number is a power of 2, this would mean removing the only 1 in the entire binary pattern
  The result would be the binary representation of zero
- EDGE CASE
  Kernighan's Algorithm used to remove the rightmost set bit results in 0 if used on n = 0

#### Code

```js
const powerOfTwo = function (n) {
  // EDGE CASE: 0 & (0 -1) === 0, and 0 ain't a power of 2
  if (n === 0) return false;
  n = n & (n - 1); // remove the rightmost set bit
  if (n === 0) return true;
  else return false;
};
```



### Min Flips needed to make a | b = c

#### Challenge + Approach

GOAL:
Create a function that accepts 3 positive integers

- Return the min number of flips required in bits within a and b to make the following expression true
  Just to reiterate, you'll be making flips in both a AND b
- Expression: `a | b === c`

Example 1:
a = 2		b = 6		c = 5

```c
00000010		// a=2
00000110 |		// b=6
----------
00000110		// 6	(not ready yet)
00000101		// 5 	(desired end result)
    
// Flips required (3)
000000#0		// adjusted 2
000001## |		// adjusted 6
-----------
00000101		5 	(desired end result)
```

Example 2:	
a = 2		 b = 6		 c = 1200

```c
00000000000000000000000000000010		// a=2
00000000000000000000000000000110 |		// b=6
------------------------------------
00000000000000000000000000000110		// 6	(not ready yet)

// Flips required (7)    
000000000000000000000000000000#0		// a=2
000000000000000000000#00#0##0##0 |		// b=6
------------------------------------
00000000000000000000010010110000		// 1200 (desired outcome)
```

#### Logic Table Approach

| CASE on a bit by bit basis                                   | required flips |
| ------------------------------------------------------------ | -------------- |
| If a \| b === 0 when it should equal 1                       | 1              |
| a \| b === 1 when it should equal 0... AND<br />there is only 1 set bit between a and b | 1              |
| a \| b === 1 when it should equal 0... AND<br />both a/b have set bits | 2              |
|                                                              |                |
| the following cases don't require any flips or action on your part... |                |
| a \| b === 1 when it should equal 1                          | 0              |
| a \| b === 0 when it should equal 0                          | 0              |

- Use the logic table above while we loop over 3 numbers at the same time
- You won't see every case listed above in your simple example, but it makes sense if you think about how you'd solve the question by hand

#### Code

Loop through a/b/c at the same time and compare all 3 bits using your logic table
Record how many flips are required to turn `a | b === c` as you go

```js
const minFlips = function (a, b, c) {
  // Loop over a/b/c at the same time
  let i = 0;
  let flips = 0;
  while (i < 32) {
    // Get rightmost bit values for a/b/c
    let a_rightmost = (a & 1) === 0 ? 0 : 1;
    let b_rightmost = (b & 1) === 0 ? 0 : 1;
    let c_rightmost = (c & 1) === 0 ? 0 : 1;
    // Keep track of required flips based on the values of a/b/c
    // CASE: If a | b === 0 when it should equal 1
    if ((a_rightmost | b_rightmost) === 0 && c_rightmost === 1) {
      flips++;
    }
    // CASE: a | b === 1 when it should equal 0
    else if ((a_rightmost | b_rightmost) === 1 && c_rightmost === 0) {
      // AND there is only 1 set bit between a/b
      if (a_rightmost != b_rightmost) flips++;
      // AND both a/b have set bits
      else if (a_rightmost == b_rightmost) flips += 2;
    }
    // Shift a/b/c at the same time
    a = a >>> 1;
    b = b >>> 1;
    c = c >>> 1;
    i++; // increment counter that eventually ends the while loop
  }
  return flips;
};
```



### Flip polarity of number

CHALLENGE:
If your function input is 5, return -5

#### Approach

Think about how we flip numbers in 2's compliment by hand

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

CHALLENGE IN BIT-MANIP TERMS

- Find the position of the first set bit from the right side
- Flip the bit values of all bits to the left of the bit I just mentioned in bullet 1

SOLUTION:

```JS
const flipPolarity = function (number) {
  return ~number + 1;
};
```



### Swap Integers

CHALLENGE: Accept integers a and b, then swap their values using bit manipulation

```js
const swap = function (a, b) {
  // Preserve a and b with new variables
  let preservedA = a;
  let preservedB = b;
  // Clear a and b
  a = a & 0;
  b = b & 0;
  // Copy a/b bits to swapped variables
  a = a | preservedB;
  b = b | preservedA;
  return [a, b];
};
console.log(swap(9, 7)); // [7,9]
```



### CTCI 5.1 - Insertion

#### Challenge

Inputs:

- You're given two 32-bit numbers N and M
- Also given two bit positions, i and j

Desired outcome

- Insert M into N
- M should start at bit j and end at bit i
- Assume there will always be enough space
  Ex. If M = 10011, assume there are 5 bits between j and i

Example: `insertion(1024, 19, 2, 6) = 1100`

```
N = 10000000000			M = 10011			while i = 2 , j = 6
	    6   2
	10001001100 		(desired output)
```

#### Approach

OVERVIEW:

1. Clear the bits from j to i within N 
   (you'll need a mask)
2. Shift M so it aligns with position j
3. Merge the 2 binary patterns by using bitwise OR 

EXAMPLE: `insertion(571, 54, 4, 9) = 875`

- We don't explain how to create the mask in this example
- See the dedicated mask creation lesson in the other DS Algos document

```js
// Step 1. Shift M so it lines up with the bits from i to j
N = 00000000000000000000001000111011		// N = 571 in decimal
						  9	   4			// i=4 j=9 
M = 00000000000000000000000000110110		// M = 54 in decimal
	0000000000000000000000110110****		// shifted_M (just M << i)
        
// Step 2. Clear bits from j to i within N using a mask
// Mask creation process shown in previous subsection
						  9	   4        
	11111111111111111111110000001111	// required mask (will clear with &)
N = 00000000000000000000001000111011 &
---------------------------------------    
	00000000000000000000000000001011	// cleared_N (just 571 with j to i cleared)

// Step 2. Merge cleared_N with shifted_M
	0000000000000000000000110110****		// shifted_M 
	00000000000000000000000000001011 |		// cleared_N
    ----------------------------------
	00000000000000000000001101101011		// answer converted to decimal: 875
```

#### Code

```JS
const insertion = function (N, M, i, j) {
  // Left shift bits in M until they align with position j
  let shifted_M = M << i;
  // Create a mask to clear bits in N from j to i
  let allOnes = ~0;
  let leftHalf = allOnes << (j + 1);
  let cascade = 1 << i;
  let rightHalf = cascade - 1;
  let mask = leftHalf | rightHalf;
  // Use the mask to clear bits j to i within N
  let cleared_N = N & mask;
  return cleared_N | shifted_M; // Merge using bitwise OR
};
```

Tests: We performed both of these by hand in this lesson

```js
console.log(insertion(1024, 19, 2, 6)); // 1100
console.log(insertion(571, 54, 4, 9)); // 875
```



### CTCI 5.3: Flip Bit to Win 

#### Objective

Create a function that accepts an integer

- You can flip a single bit value in that integer  from 0 to 1
- Return the length of the longest possible sequence of 1's you can create with these conditions

CODE

```JS
const flipBitToWin = function (n) {
  let N = n; // clone n to not mutate
  // Loop through a number by shifting, while tracking longest lengths
  let maxLength = 0;
  let currentLength = 0;
  let remainingFlips = 1;
  // Save the maximium value between currentLength and maxLength
  const saveMaxLength = curr => (maxLength = Math.max(curr, maxLength));

  while (N !== 0) {
    let rightmost = (N & 1) === 1 ? 1 : 0;
    // IF RIGHTMOST BIT IS A 1
    if (rightmost) {
      currentLength++; // increment currentLength and save maxLength
      saveMaxLength(currentLength); // update maxLength
    }
    // IF RIGHTMOST BIT IS A 0, AND WE HAVE FLIPS LEFT OVER
    else if (!rightmost && remainingFlips) {
      currentLength++; // increase current length by 1
      remainingFlips--; // decrease remainingFlips
      saveMaxLength(currentLength); // update maxLength
    }
    // IF RIGHTMOST BIT IS A 0, AND WE HAVE NO FLIPS LEFT OVER
    else if (!rightmost && !remainingFlips) {
      // Reset variable values so we can continue testing
      currentLength = 0;
      remainingFlips = 1;
    }
    N = N >>> 1; // Shift bit right
  }
  return maxLength;
};
```

Tests

```
11011101111			1775 in 2's compliment binary
   11111111			longest chain with 1 flip is 8 

1110111000011111	60959 in 2's compliment binary
1111111				longest chain with 1 flip is 7

1110111000111111	60991 in 2's compliment binary
1111111  1111111	longest chain with 1 flip is 7 (can be made in 2 places)
```





### CTCI 5.4: Rearrange bits to create new number

WARNING:
The question in CTCI is a bit unclear as to what it asks for in my opinion
This lesson reworks their question a bit

#### Objective

CHALLENGE:
Create a function that accepts a positive integer and returns on object containing...

- The smallest positive number that has the same number of set bits
- The smallest negative number that has the same number of set bits
- The largest positive number that has the same number of set bits

#### Min/Max Numbers in 32-bit 2's compliment binary:

(Cut from the number systems chapter)

|      | binary representation (both 32-bit, 0's are just fatter) | formula    | number      |
| ---- | -------------------------------------------------------- | ---------- | ----------- |
| min  | 10000000000000000000000000000000                         | `- 2^31`   | -2147483648 |
| max  | 01111111111111111111111111111111                         | `2^31 - 1` | 2147483647  |

WHY DOES THE MIN # HAVE 1 SET BIT?

- If you have set bits aside from the leftmost bit in negative numbers, it adds
- This decreases the magnitude of the negative number, making it... less negative
  Ex. -10 + 1 = -9 . Negative 10 is less than negative 9, so flipping bits does help reach the min

```
10000000000000000000000000000000		// -2147483648
10000000000000000000000000000011		// -2147483645	(less negative...aka not min)
```

WHY DOES THE MAX NUMBER HAVE AN UNSET LEFTMOST BIT?

- In 32 bit 2's compliment, negative numbers always have a leftmost bit that's set
- The max number has set bits starting from the second position from the left

#### Smallest Positive Number with X set bits

The smallest positive number attainable with x set bits is simple if you think about how to represent binary by hand- just lump a series of 1s on the right side of a binary pattern

Example: 3 set bits

```
0  0  1	 1  1
-- -- -- -- -- 
16 8  4  2  1
```

#### Smallest Negative Number with X set bits

The most negative number requires a good understanding of 32-bit 2's compliment binary

- Setting bits equal to 1 in a negative number representation actually reduces how negative the number is (as shown in a previous subsection in this lesson)
- If we're forced to use 3 bits for example, we'd need to use them as follows
  Set bit #1: The signed bit positioned at the very left
  Set bit #2: The rightmost bit since it only reduces the magnitude by 1
  Set bit #3: The 2nd rightmost bit since it only reduces magnitude by 2

```c
10000000000000000000000000000000		// smallest number possible
10000000000000000000000000000011		// smallest number possible with 3 set bits
```

#### Largest Possible Number with X set bits

We can't just pile a series of 1's on the left side of a binary sequence to arrive at the biggest possible number- and that's just because of how 2's compliment works

Example: If we have 3 set bits

```c
11100000000000000000000000000000	// -536870912
01110000000000000000000000000000	// this would be the largest possible number
```

#### Code

```js
const nextNumber = function (n) {
  // Edge case:
  if (n === 0) return { minPositive: 0, minNegative: 0, max: 0 };
  let N = n; // clone n to not mutate
  // Count the number of set bits (x)
  let setBits = 0;
  while (N !== 0) {
    N = N & (N - 1);
    setBits++;
  }
  const allOnes = ~0;
  // Create the largest possible number with x set bits
  let max = allOnes << (32 - (setBits + 1));
  let maxMask = Math.pow(2, 31) - 1; // 0 then 31 ones
  max = max & maxMask;
  // Create the smallest +ve number with x set bits
  let minPositive = allOnes >>> (32 - setBits);

  // Create the smallest -ve number with x set bits
  let minNegative_left = -Math.pow(2, 31); // 1 then 31 zeros
  // If we only have 1 set bit, we need no more 0's on the right side
  // If we require more 0's on the right side, use an exponent cascade place them
  let minNegative_right = setBits === 1 ? 0 : Math.pow(2, setBits - 1) - 1;
  let minNegative = minNegative_left | minNegative_right;

  return { minPositive, minNegative, max };
};
```

TESTS

```js
console.log(nextNumber(28)); // 3 set bits
console.log(nextNumber(1)); // 1 set bit

// ANSWERS
// { minPositive: 7, minNegative: -2147483645, max: 1879048192 }
// { minPositive: 1, minNegative: -2147483648, max: 1073741824 }
```

3 set bits by hand

```js
01110000000000000000000000000000 	// max (1879048192)
00000000000000000000000000000111 	// min positive (7)
10000000000000000000000000000011 	// min negative (-2147483645)
```

1 set bit by hand

```js
01000000000000000000000000000000 	// max (1073741824)
00000000000000000000000000000001 	// min positive (1)
10000000000000000000000000000000 	// min negative (-2147483648)
```

Can verify your answers [here](https://www.exploringbinary.com/twos-complement-converter/)



### CTCI 5.6: Conversion

CHALLENGE:
Determine how many bit flips are required to convert integer a to b

EXAMPLE:

```
11101		29
01111		15
*  *		answer: 2
```

CODE:

```js
const requiredFlips = function (a, b) {
  // Perform XOR to create a special # ...
  // whose # of set bits === # of different bits b/t a and b
  let n = a ^ b;
  // Count exactly how many set bits diff has
  let counter = 0;
  while (n !== 0) {
    n = n & (n - 1); // n will eventually reach 0
    counter++;
  }
  return counter;
};
console.log(requiredFlips(29, 15)); // 2
```



### CTCI 5.7: Pairwise Swap

#### Objective

Write a function that accepts integer n then swaps all of its even and odd bit values

- Swap bits with positions 0/1, 2/3, 4/5, 5/6 ... up to 30/31
- Do so with as few instructions as possible
  This means no looping over bits and swapping 1 at a time

#### Trick

We're going to create 2 halves as if we were creating a mask- except the fully formed mask will be our final answer

Left Half - integer n with all odd bits cleared... shifted left by 1
Right half - integer n with all even bits cleared... shifted right by 1

Example 1:

```c
11001110	// orig (206 in decimal)

01000100	// odd bits cleared
10001010	// even bits cleared

10001000	// odd bits cleared, shifted left by 1
01000101 |	// even bits cleared, shifted right by 1
---------
11001101	// answer: (205 in decimal)
```

Example 2:

```js
10101010	// orig (170 in decimal)

00000000	// odd bits cleared
10101010	// even bits cleared

00000000	// odd bits cleared, shifted left by 1
01010101 |	// even bits cleared, shifted right by 1
---------
01010101	// answer: 85 in decimal
```

#### Code

```js
const pairwiseSwap = function (n) {
  let N = n;
  let oddBitsCleared = N & 1431655765;
  let evenBitsCleared = N & -1431655766;
  return (oddBitsCleared << 1) | (evenBitsCleared >>> 1);
};
```

Tests

```js
pairwiseSwap(206); // 205
pairwiseSwap(170); // 85
```



### Extras to Attempt Later

1. CTCI 5.2: Binary to String ---

- Fractions in binary seems too uncomon to bother learning
- Not on Neetcode or blind 75

2. CTCI 5.8: Draw line

- Looks much tougher than any of the other bit manip problems I've seen
- Likely beyond the scope of junior interviews

http://localhost:3000/search/smrnVFT6UvNTPGqThtoYhA



### Nextjs Hosting

#### JAM stack on Hostinger

https://www.youtube.com/watch?v=VL92LgoHmos

#### Next.js on Hostinger
