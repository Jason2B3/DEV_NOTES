function capitalizeWords(arr) {
  let ind = 0;
  const recursive = function (arr) {
    // Base case: when original array is empty
    if (ind > arr.length - 1) return;
    arr[ind] = arr[ind].toUpperCase(); // capitalize array value
    ind++; // increase index number
    return recursive(arr);
  };
  recursive(arr);
  return arr;
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
