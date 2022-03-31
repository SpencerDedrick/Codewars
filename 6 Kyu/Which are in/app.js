/* Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
Example 1:

a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]
Example 2:

a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []
Notes:

    Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
    In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
    Beware: r must be without duplicates.

 */

let inArray = (array1, array2) => {
  //filter through array2 and set it to a new variable named test
  let test = array1.filter((string) => {
    //loop through array1
    for (let i = 0; i < array2.length; i++) {
      //if the value in array1 is a substring of an element in array2 return it to test
      if (array2[i].includes(string)) {
        console.log(array2[i]);
        return string;
      }
    }
  });

  //return a new Set of values based on the test array
  return [...new Set(test.sort())];
};

a1 = ["xyz", "live", "strong"];

a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

console.log(inArray(a1, a2));
