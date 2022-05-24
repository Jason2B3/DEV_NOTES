// EXPLAINING THE RECURSIVE LOOP STEP
// We set newObj[key] equal to the result, so recursion runs as many times as it needs to dynamically
// newObj differs w/ each nested object that gets fed to an iteration of stringifyNumbers
// the callstack for stringifyNumbers(obj) has 3 stringifyNumbers calls on it
// The for of loop still continues on for the remaining KVP's in the original object once they resolve
function stringifyNumbers(obj) {
  var newObj = {};
  // BASE CASE: end of for loop
  for (var key in obj) {
    let keyValue = obj[key];
    console.log(keyValue);
    let objectValueType = typeof keyValue === "object" && !Array.isArray(keyValue); // prettier-ignore
    // If keyValue is a number, stringify it then add to newObj
    if (typeof keyValue === "number") newObj[key] = keyValue.toString();
    // If keyValue is an object, force another recursive loop for that same nested object
    else if (objectValueType) newObj[key] = stringifyNumbers(keyValue);
    // If key value is not an object, add it to newObj (arrays, strings...whatever)
    else newObj[key] = obj[key];
  }
  return newObj;
}

let obj = {
  num: 1,
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
  test: [],
};

console.log("ANSWER", stringifyNumbers(obj));

/* ANSWER
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
