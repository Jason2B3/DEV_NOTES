// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410598#overview

// Multi pointers technique only works because the array is ordered
function areThereDuplicates(arr) {
  // Set a pointer at the start and end
  let pointer1 = 0;
  let pointer2 = arr.length - 1;
  // Use a while loop that ends when pointer2 is less than pointer 1
  while (arr[pointer1] < arr[pointer2]) {
    // Condition: Pointer1's value === pointer2's value
    if(arr[pointer1] === arr[pointer2]) return true; // SUCCESS
    
  }

  // If the condition is met, return true
  // If the while loop ends and we find no matches, return false
}
console.log(areThereDuplicates(1, 2, 3)); // true
console.log(areThereDuplicates(1, 2, 2)); // false
console.log(areThereDuplicates("a", "b", "c", "a")); // true
// see if both numeric inputs have the same frequency of digits
