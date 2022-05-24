// OUR SOLUTION IS WAY LONGER THAN COLT'S
// shorter soln: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410594#overview
function findLongestSubstring(str) {
  // EDGE CASES: Array only contains 1 entry or none
  if (str.length === 0) return 0; // if array is empty,
  // prettier-ignore
  else if (str.length === 1 && str[0] === "") return 0; // return 0 for empty strings
  else if (str.length === 1 && str[0] !== "") return 1; // if we have 1 char, return 1

  let pointer1 = 0;
  let pointer2 = 0;
  let peakLength = 1; // longest string length has to be 1 at least (will be updated)
  // Objects that hold character frequencies and their positions
  let freq = {};
  let positions = {};
  // Ex. If we have a string of "tree"
  // freq = { t: 1 } (one instance of letter t)
  // positions = { t: 0 } (t is at string index 0)

  // Save the first letter to our freqObj and positionObj
  freq[str[0]] = 1;
  positions[str[0]] = 0;

  // Utility function that returns a Boolean telling if the letter parameter would be a duplicate
  function isDuplicate(char) {
    if (!char) return; // safeguard
    return char in positions ? true : false; // check for the existence of a KVP with that character
  }
  // End while loop when pointer 2 advances too far 
  // (handled by a break statement, not the while condition)
  while (pointer2 < Infinity) {
    // Check whether the next character is a duplicate or not before we edit the window
    const nextChar = str[pointer2 + 1];
    const nextCharDupe = isDuplicate(nextChar); // bool
    
    // IF WE'VE REACHED THE STRING'S END
    if(nextChar === undefined) break; // end the while loop
    // IF NEXT CHARACTER IS A DUPLICATE
    else if (nextCharDupe) {
      // See where the first instance of that letter was in our string (use positions obj)
      const firstInstance = positions[nextChar];
      // Clear the freq/positions objects (since we'll be redefining the window)
      freq = {};
      positions = {};
      // Move pointer1 one spot after instance 1 of the duplicate character
      // Move pointer2 one spot after the newly positioned pointer1
      pointer1 = firstInstance + 1;
      pointer2 = pointer1 + 1;
      // Update the newly emptied freq/position (for 2 characters)
      freq[str[pointer1]] += 1; // update for the letter pointer1 refers to
      positions[str[pointer1]] = pointer1;
      freq[str[pointer2]] += 1; // update for the letter pointer2 refers to
      positions[str[pointer2]] = pointer2;
    }
    // IF NEXT CHARACTER IS UNIQUE
    else if (!nextCharDupe) {
      // Enlarge the window by moving pointer2 right
      pointer2++;
      // Update freq/positions objects
      freq[str[pointer2]] += 1;
      positions[str[pointer2]] = pointer2;
      // Save the new window size as peakLength... IF it's larger than what's already saved
      peakLength = Math.max(peakLength, pointer2 - pointer1 + 1);
    }
  }
  return peakLength;
}

console.log("ANSWER", findLongestSubstring("")); // 0
console.log("ANSWER", findLongestSubstring("rithmschool")); // 7 rithmsc
console.log("ANSWER", findLongestSubstring("thisisawesome")); // 6 awesom

console.log("ANSWER", findLongestSubstring("thecatinthehat")); // 7 hecatin
console.log("ANSWER", findLongestSubstring("bbbbbb")); // 1 b

console.log("ANSWER", findLongestSubstring("longestsubstring")); // 8 ubstring
console.log("ANSWER", findLongestSubstring("thisishowwedoit")); // 6 wedoit
console.log("ANSWER", findLongestSubstring("sv")); // 2 sv
