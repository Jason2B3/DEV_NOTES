function isPalindrome(str) {
  let reversedString = "";
  let currentIndex = str.length - 1; // last ind# of string
  function recursive(s) {
    // Base case: when the reversed string exceeds length of the original string parameter
    if (currentIndex < 0) return;
    // Take the char associated with currentIndex aand add it to the reversedString var
    reversedString += str[currentIndex]
    currentIndex-- // lower the current index #
    recursive (s)
  }
  recursive(str); // reverses the string
  return str === reversedString
}
console.log(isPalindrome("awesome"));
console.log(isPalindrome("tacocat"));