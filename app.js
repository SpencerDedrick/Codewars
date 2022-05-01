/* Given an array of integers, where all elements but one occur twice, find the unique element.

Example
The unique element is

.

Function Description

Complete the lonelyinteger function in the editor below.

lonelyinteger has the following parameter(s):

    int a[n]: an array of integers

Returns

    int: the element that occurs only once

Input Format

The first line contains a single integer,
, the number of integers in the array.
The second line contains space-separated integers that describe the values in

.

Constraints

It is guaranteed that
is an odd number and that there is one unique element.
, where . */

function lonelyinteger(a) {
  let b = a.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < b.length; i = i + 2) {
    if (b[i] != b[i + 1]) {
      return b[i];
    }
  }
}
console.log(
  lonelyinteger([9, 9, 1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8, 0, 0])
);
