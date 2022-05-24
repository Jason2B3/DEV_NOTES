// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410602#overview

// Return a Boolean that tells if a pair exists that has an average of arg 2
function averagePair(arr, targetAvg) {
  // Create 2 pointers on opposite sides of the array
  let p1 = 0;
  let p2 = arr.length - 1;
  // Use a while loop that ends if the pointer2 < pointer1 (crossed each other)
  while (p2 > p1) {
    // The arrays are ordered, which means we can infer certain things based on the avg
    let avg = (arr[p2] + arr[p1]) / 2;
    // If pointerAverage === targetAverage, you found a match!
    if (avg === targetAvg) return true; // SUCCESS
    // If pointerverage > targetAverage , there may still be matches left
    // move p2 closer to center
    else if (avg > targetAvg) p2--;
    // If pointerAverage < targetAverage, there are no possible matches left for p1
    // move p1 closer to center, and restart p2 at the very end of the array
    else if (avg < targetAvg) {
      p1++;
      p2 = arr.length - 1;
    }
  }
  return false; // FAILURE
}

// We'll be calculating pointer averages

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
