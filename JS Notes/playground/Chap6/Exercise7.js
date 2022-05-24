// Return a Boolean that tells if the letters in arg1 appear in str2
// The order must be preserved, but the chars are allowed to be split up
function maxSubArraySum(arr, windowLength) {
  // If the array length is too short, return null
  if (arr.length < windowLength) return null;
  // If array length is 3, return sum of every entry

  // Keep track of the currentSum and peakSum (CWS/BWS)
  let currentSum, peakSum;
  // Set 2 pointers to build a window
  let p1 = 0;
  let p2 = windowLength - 1;
  // Calculate initial window sum and set it equal to to peakSum since we're just starting
  currentSum = peakSum = arr
    .slice(p1, windowLength) // ◐
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0); // sum of totals

  // Create a while loop that ends when pointer2 reaches the array's end
  while (p2 < arr.length - 1) {
    p1++; // slide window forward
    p2++;
    // Adjust the window sum (add new val) && (subtract val left behind)
    currentSum = currentSum + arr[p2] - arr[p1 - 1];
    // Save whichever's bigger: peakSum or currentSum
    peakSum = Math.max(peakSum, currentSum);
  }
  return peakSum;
}

maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4); // 700
// maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
// maxSubArraySum([-3, 4, 0, -2, 6, -1], 2); // 5
// maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
// maxSubArraySum([2, 3], 3); // null
