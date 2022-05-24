function insert(arr, val, atThisIndex) {
  arr.splice(atThisIndex, 0, val);
}

// Utility function that spits out a sliced array
const listOut = (arr, offset = 1) => arr.slice(offset);

function insertionSort(arr) {
  // Outer for: loop through the array
  // Start from index 1 since we consider index 0's value to be the start of the sorted portion
  for (let i = 1; i < arr.length; i++) {
    // If current array value is greater, simply add it to the sorted portion by letting loops continue
    if (arr[i] >= arr[i - 1]) continue; // skips this one particular loop
    // If the current array value's lower than its predecessor, insert the value into the sorted portion
    for (let j = i; j >= -1; j--) {
      // Find the first value arr[i] is larger than, then insert it right afterwards
      if (arr[i] > arr[j]) {
        insert(arr, arr[i], j + 1); // insert a cloned value into the sorted portion
        arr.splice(i, 1); // remove original val from array
        break; // once we insert the value, end the nested loop
      }
      // If arr[i] is less than every other possible value, then place it at the start
      if (j === -1) {
        arr.unshift(arr[i]); // insert a cloned value into arr[0] which is part of the sorted portion
        arr.splice(i, 1); // remove original val from array
      }
    } // we loop backwards through the sorted portion (optional)
  }
}

console.log(selectionSort([4, 3, 2, 10, 12, 1, 5, 6]));
