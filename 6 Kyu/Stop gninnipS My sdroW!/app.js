/* Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test" */

let test1 = "Hey fellow warriors";
let test2 = "This is a test";
let test3 = "This is another test";

//for loop solution
//time: 856ms
let spinWords = (string) => {
  //split string into array of words
  let arr = string.split(" ");

  //loop through the array
  for (let i = 0; i < arr.length; i++) {
    //check if word is longer than 5 letters
    if (arr[i].length >= 5) {
      //if word is longer than 5 reverse the word
      arr[i] = arr[i].split("").reverse().join("");
    }
  }
  //combine and return the array as a string
  return arr.join(" ");
};

//map solution
//Time: 864

let spinWords2 = (string) => {
  return string
    .split(" ")
    .map((word) => {
      if (word.length >= 5) {
        return word.split("").reverse().join("");
      }
      return word;
    })
    .join(" ");
};

console.log(spinWords2(test1));
