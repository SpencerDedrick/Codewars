/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */
let test1 = "The quick brown fox jumps over the lazy dog.";
let test2 = "This is not a pangram.";

const isPangram = (string) => {
  //if there are less than 26 characters in the string return false because it would be impossible for it to be a panagram
  if (string.length < 26) return false;

  return [
    //spread values of string after it is turned into an array
    ...//use new Set to remove all duplicate values from string
    new Set(
      string
        //covert all characters to lowercase
        .toLowerCase()
        //split strings individual characters into an array
        .split("")
        //filter the new array and remove all characters whose charCode is not between 'a' and 'z'
        .filter((x) => {
          if (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122) {
            return x;
          }
        })
    ),
    //if the new filtered array is exactly 26 characters long.....
  ].length === 26
    ? //return true
      true
    : //otherwise return false
      false;
};

//alphabet solution
const isPanagram2 = (string) => {
  return [...new Set(string.toLowerCase())]
    .sort()
    .join("")
    .includes("abcdefghijklmnopqrstuvwxyz");
};

console.log(isPanagram2(test1));
console.log(isPanagram2(test2));
