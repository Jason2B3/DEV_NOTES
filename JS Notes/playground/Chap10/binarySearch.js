function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  const recursive = function () {
    // BASE CASE: when right pointer crosses left
    if (right < left) return -1;
    let midIndex = Math.floor(right - left / 2);
    // IF MIDDLE VALUE IS A MATCH
    if (arr[midIndex] === val) return midIndex; // return index number
    // IF MIDDLE VALUE IS TOO HIGH, elim the right half fr/ consideration by repositioning right pointer
    else if (arr[midIndex] > val) right = midIndex - 1;
    // IF MIDDLE VALUE IS TOO LOW, elim the left half fr/ consideration by repositioning left pointer
    else if (arr[midIndex] < val) left = midIndex + 1;
    return recursive();
  };
  return recursive(arr);
}
console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1

// prettier-ignore
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 10)); // 2
// prettier-ignore
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 95)); // 16
// prettier-ignore
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 100)); // -1
console.log(binarySearch([5], 5)); // -1
