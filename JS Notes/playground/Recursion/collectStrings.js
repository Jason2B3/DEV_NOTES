function collectStrings(obj) {
  let stringVals = []; // contains kvp's with numeric values

  const recursive = (obj) => {
    let keys = Object.keys(obj); // array of all keys in object
    if (keys.length === 0) return; // Base case: end when original object becomes empty

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
    // IF KEY VALUE IS A STRING:
    // push entry to stringVals array, but only if it's an even number
    if (keyValueType === "string") stringVals.push(keyValue);

    // Delete KVP from orig object (regardless of whether it was a string or not)
    delete obj[keyName];
    return recursive(obj);
  };
  recursive(obj);
  return stringVals;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

collectStrings(obj); // ["foo", "bar", "baz"])
