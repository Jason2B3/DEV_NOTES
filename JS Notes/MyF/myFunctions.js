"use strict";
//#—————————————————————【 AJAX CALLS 】——————————————————————————
//$ Performs a fetch API request and returns the data parsed by .json().
//$ Can also provide a custom error message
function getJSON(url, errorMSG = "Something went wrong") {
  // feed it the fetch URL, then your customized error message
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(errorMSG);
    return response.json();
  });
}

//$ Returns an object containing current location data.
//$ Extract the latitude and longitude KVP's yourself later
const getPosition = function (seconds) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject); // automatic
  });
};

//$ Checks to see if a file is present in your folder
async function isFileHere(pathString) {
  const response = await fetch(pathString);
  console.log(response.ok); // helper to see what the result is (DELETE LATER)
  return response.ok; // returns a pending promise with value of T/F
}
//#—————————————————————【 DOM MANIP 】——————————————————————————
//$ This function removes a classname from all potential locations then adds it to one element
function classMove(locationsArray, newLocationEl, classNameString) {
  locationsArray.forEach((el) => {
    el.classList.remove(classNameString); // remove class names from all possible spots
  });
  newLocationEl.classList.add(classNameString);
}
//^ classMove([...tabsContent],div4,'operations__content--active');
//^ empty out a nodelist from document.querySelectorAll("") or something fro arg 1

//#—————————————————————【 DATES 】——————————————————————————
// These functions affect the original date and work with negative values
Date.prototype.addSeconds = function (seconds) {
  this.setSeconds(this.getSeconds() + seconds);
  return this;
};

Date.prototype.addMinutes = function (minutes) {
  this.setMinutes(this.getMinutes() + minutes);
  return this;
};

Date.prototype.addHours = function (hours) {
  this.setHours(this.getHours() + hours);
  return this;
};

Date.prototype.addDays = function (days) {
  this.setDate(this.getDate() + days);
  return this;
};

Date.prototype.addWeeks = function (weeks) {
  this.addDays(weeks * 7);
  return this;
};

Date.prototype.addMonths = function (months) {
  let dt = this.getDate();
  this.setMonth(this.getMonth() + months);
  let currDt = this.getDate();
  if (dt !== currDt) {
    this.addDays(-currDt);
  }
  return this;
};

Date.prototype.addYears = function (years) {
  let dt = this.getDate();
  this.setFullYear(this.getFullYear() + years);
  let currDt = this.getDate();
  if (dt !== currDt) {
    this.addDays(-currDt);
  }
  return this;
};

//#—————————————————————【 MISC 】——————————————————————————
//@ DUO: Collect all KVPs in an object, then place them in an array
function kvpBundle(obj) {
  let arrKVP = [];
  for (let key in obj) arrKVP.push([key, obj[key]]);
  return arrKVP;
}
/*
const testObj = { apple: 1, pear: 2, peach: 3 };
kvpBundle(testObj);  
OUTPUT:[ [ "apple", 1 ], [ "pear", 2 ], [ "peach", 3 ] ]
*/
//@ DUO: Check if a KVP is present inside an object
function kvpPresent(kvpArray, obj) {
  //# Verify that the key exists in the object
  const keyHere = obj.hasOwnProperty(kvpArray[0]); // T/F
  if (!keyHere) return false;
  //# If the key exists, check to see if the values match
  const matchedVal = obj[kvpArray[0]] === kvpArray[1]; // T/F
  if (!matchedVal) return false;
  return true;
}
/*
const testObj = { apple: 1, pear: 2, peach: 3 };
let resultado = kvpPresent(['pear', 2], testObj); // true
let resultada = kvpPresent(['pear', 1], testObj); // false
*/
//^ Rounding more accurately to X places
function roundNumber(initNum, places) {
  // Don't use on numbers with exponents
  Number.prototype.round = function (places) {
    return +(Math.round(this + "e+" + places) + "e-" + places);
  };
  return initNum.round(places); // 9.56
}

//^ indexOf, but creates an array of index locations instead of returning one
function indexOfAll(array, searchItem) {
  let i = array.indexOf(searchItem),
    indexes = [];
  while (i !== -1) {
    indexes.push(i);
    i = array.indexOf(searchItem, ++i);
  }
  return indexes;
}
//^ Filter out even or odd numbers
function noEvens(values) {
  return values.filter(function (num) {
    return num % 2 === 1;
  });
}
function noOdds(values) {
  return values.filter(function (num) {
    return num % 2 === 0;
  });
}

function allNumsBetween(arr) {
  // input [2, 10] or [2, 10] ...etc
  // Reorder the array so that the lower number's first
  if (arr[0] > arr[1]) arr.reverse();
  let [lower, upper] = arr;
  let numRange = [];
  // Generate all nums between the 2 values in the arg array
  do {
    numRange.push(lower);
    lower++;
  } while (lower <= upper);
  return numRange;
}
