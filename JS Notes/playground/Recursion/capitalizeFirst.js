// My solution uses slice O(n) inside a recrive loop which may be O(n)'
// This might have quadratic complexity, but I can't tell
// All other solutions use slice in their recursive functions too, so idk if this is the only way
function capitalizeFirst(arr) {
  const makeCapital = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(); // prettier-ignore

  let indexNum = 0;
  const recursive = (arr) => {
    // Base case: Reached end of array
    if (indexNum > arr.length - 1) return;
    // Capitalize array value
    arr[indexNum] = makeCapital(arr[indexNum]);
    indexNum++; // iterate index up
    return recursive(arr);
  };
  recursive(arr); // changes the array entries
  return arr;
}
console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']