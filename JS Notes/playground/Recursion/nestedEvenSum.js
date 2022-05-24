function nestedEvenSum(obj) {
  let evenSum = 0; // contains kvp's with numeric values

  const recursive = (obj) => {
    // Base case: end when original object becomes empty
    let keys = Object.keys(obj); // array of all keys in object
    if (keys.length === 0) return;

    // Check first KVP value type using our keys array
    let keyName = keys[0];
    let keyValue = obj[keys[0]];
    let keyValueType = typeof obj[keys[0]];

    // IF AN OBJECT: Run loop again with a the spread version of the object KVP
    if (keyValueType === "object") {
      delete obj[keyName]; // delete the old unspread KVP
      obj = { ...obj, ...keyValue }; // spread out the entries in the kvp object
      // ^^ above line must come AFTER the kvp delete or else duplicate key names with numeric values get deleted
      return recursive(obj);
    }
    // IF NOT AN OBJECT:
    // push entry to evenSum array, but only if it's an even number
    if (keyValueType === "number" && keyValue % 2 === 0) {
      evenSum = evenSum + keyValue;
    }
    // Delete KVP from orig object (regardless of whether it was an even number or not)
    delete obj[keyName];
    return recursive(obj);
  };
  recursive(obj);
  return evenSum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
