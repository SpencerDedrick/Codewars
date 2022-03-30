/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example: */

let url1 = "http://github.com/carbonfive/raygun";
let url2 = "http://www.zombie-bites.com";
let url3 = "https://www.cnet.com";

//if conditions

const domainName = (url) => {
  //turn string into array
  let test = url.split("");
  //if url contains "//" substring, trim everything before that

  if (url.includes("//")) {
    let x = url.indexOf("//") + 2;
    test = test.slice(x, -1);
  }
  //if url contains "www." substring, trim everything before that
  if (test.join("").includes("www")) {
    let x = test.join().indexOf("www") + 5;
    test = test.slice(x, -1);
  }
  //trim everything after the next remaining "." substring
  if (test.join("").includes(".")) {
    let x = test.join("").indexOf(".");
    test = test.slice(0, x);
  }
  //return domain
  return test.join("");
};

//string.prototype.replace

const domainName2 = (url) => {
  //replace all instances of "https://" with an empty string
  url.url.replace("https://", "");
  //replace all instances of "http://" with an empty string
  url.url.replace("http://", "");
  //replace all instances of "www." with an empty string
  url.url.replace("www.", "");
  //split the url string into an array at the next '.' before the top level domain and return the first item of the array
  return url.split("")[0];
};

console.log(domainName(url1));
console.log(domainName(url2));
console.log(domainName(url3));
