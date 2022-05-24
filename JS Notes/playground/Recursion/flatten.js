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