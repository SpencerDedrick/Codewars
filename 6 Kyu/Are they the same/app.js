/* Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order. */

/* Examples
Valid arrays

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361] */

let test1 = {
  a: [121, 144, 19, 161, 19, 144, 19, 11],
  b: [121, 14641, 20736, 361, 25921, 361, 20736, 361],
};

let test2 = {
  a: [121, 144, 19, 161, 19, 144, 19, 11],
  b: [132, 14641, 20736, 361, 25921, 361, 20736, 361],
};

let comp = (arr1, arr2) => {
  if (arr1 == null || arr2 == null) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  let newArr1 = arr1
    .map((x) => {
      return x * x;
    })
    .sort((a, b) => {
      return a - b;
    });

  let newArr2 = arr2.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < newArr1.length; i++) {
    if (newArr1[i] !== newArr2[i]) {
      return false;
    }
  }
  return true;
};

console.log(comp(test1.a, test1.b));
