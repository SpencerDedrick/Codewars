/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.
 */

const generateHashtag = (str) => {
  //if string is empty return false
  if (str.replace(/\s/g, "").length == 0) {
    console.log(false);
    return false;
  }
  //split string into array
  hashtag = str.split(" ");
  //map the array of words
  hashtag = hashtag.map((word) => {
    //capitalize the first letter of each word and make the rest of the word is lowercase
    word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return word;
  });
  hashtag.join("").length <= 139
    ? (hashtag = "#" + hashtag.join(""))
    : (hashtag = false);
  console.log(hashtag);
  return hashtag;
};

generateHashtag("");
generateHashtag(" ".repeat(200));
generateHashtag("Do We have A Hashtag");
generateHashtag("Codewars");
generateHashtag("Codewars Is Nice");
generateHashtag("Codewars is nice");
generateHashtag("code" + " ".repeat(140) + "wars");
generateHashtag(
  "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
);
generateHashtag("a".repeat(139));
generateHashtag("a".repeat(140));
