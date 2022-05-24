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

// Utility function that spits out a sliced array
const listOut = (arr, offset = 1) => arr.slice(offset);

function insertionSort(arr) {
  let count = 0;
  // Outer for: loop through the array
  // Start from index 1 since we consider index 0's value to be the start of the sorted portion
  for (let i = 1; i < arr.length; i++) {
    // If current array value is greater, simply add it to the sorted portion by letting loops continue
    if (arr[i] >= arr[i - 1]) continue; // skips this one particular loop
    // If the current array value's lower than its predecessor, insert the value into the sorted portion
    for (let j = i; j >= 0; j--) {
      count++;
      // Move arr[i] after the first entry that's smaller than it
      if (arr[j] < arr[i]) {
        array_move(arr, i, j + 1);
        break; // once we insert the value, end the nested loop
      }
      // If we've completed running through the sorted portion and none of the values inside are lower
      // This means the value i points to is the lowest in the array
      else if (j === 0 && arr[j] > arr[i]) {
        array_move(arr, i, 0); // place this value at the start of arr
        break;
      }
      console.log(arr);
    } // we loop backwards through the sorted portion (optional)
  }
  console.log(count);
  return arr;
}

console.log(insertionSort([4, 3, 2, 10, 12, 1, 5, 6]));
