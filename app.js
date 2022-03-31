/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */
let test1 = "The quick brown fox jumps over the lazy dog.";
let test2 = "This is not a pangram.";
//a-z 97-122
const isPangram = (string) => {
  //if there are less than 26 characters in the string return false
  if (string.length < 26) return false;
  //convert string to all lowercase
  return new Set([
    ...(string
      .toLowerCase()
      .split("")
      .sort()
      .filter((x) => {
        if (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122) {
          return x;
        }
      }).length == 26
      ? true
      : false),
  ]);
};

console.log(isPangram(test1));
console.log(isPangram(test2));
