function insertionSort(arr) {
  let count = 0;
  for (var i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      // Condition: Loop across sorted portion backwards, while current value is smaller than
      arr[j + 1] = arr[j];
      count++;
    }
    arr[j + 1] = currentVal;
  }
  console.log(count);
  return arr;
}

console.log(insertionSort([4, 3, 2, 10, 12, 1, 5, 6]));
