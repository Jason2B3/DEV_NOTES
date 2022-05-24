function minSubArrayLen(arr, target) {
  // EDGE CASE: Array only contains 1 value, and it does not meet target
  if (arr.length === 1 && arr[0] < target) return 0;

  let pointer1 = 0;
  let pointer2 = 1;
  let windowSize = 2;
  let windowSum = arr[0] + arr[1]; // will get updated
  let minLen = Infinity; // we'll be choosing the lowest b/t 2 options when updating this

  // End while loop when pointer 2 advances too far
  while (pointer2 < arr.length) {
    // IF SUM MEETS TARGET
    if (windowSum >= target) {
      // Save current windowSize to minLen (if it's smaller than what's already saved)
      minLen = Math.min(minLen, windowSize);
      // Shrink the window by pushing p1 right, and update windowSum
      pointer1++;
      windowSize--;
      windowSum = windowSum - arr[pointer1 - 1];
    }
    // IF SUM IS TOO LOW
    else if (windowSum < target) {
      // Expand the window by pushing p2 right, and update windowSum
      pointer2++;
      windowSize++;
      windowSum = windowSum + arr[pointer2];
    }
  }
  return minLen === Infinity ? 0 : minLen;
}