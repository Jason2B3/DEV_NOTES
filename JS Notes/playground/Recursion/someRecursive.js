const isOdd = (val) => val % 2 !== 0;
function someRecursive(arr, callbackFN) {
  function recursive(arr) {
    // base case: when index number reaches start of array
    if (arr.length === 0) return false;
    // Return true if the array entry passes the callback test
    if (callbackFN(arr[arr.length - 1])) return true;
    // If array entry fails the test, loop again but remove the last array entry
    arr.pop(); // remove last entry
    return recursive(arr);
  }
  return recursive(arr);
}
console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false