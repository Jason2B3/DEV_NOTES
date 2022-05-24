// longestSubstring
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410594#overview

// minSubarrayLen
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410608#overview

// findLongestSubstring
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410594#overview
// Our solution is much longer than theirs (review theirs later)

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
      // if we reach the end of our short string with no mismatches, save 1 match to our count
      if (j === short.length - 1) {
        console.log("MATCH!");
        matchesCount++;
      }
    }
  }
  return matchesCount;
}

// console.log(naiveSearch("lorie loled", "lol"));
console.log(naiveSearch("AABAACAADAABAABA", "AABA"));
// console.log(naiveSearch("lorie loled", "AABA"));