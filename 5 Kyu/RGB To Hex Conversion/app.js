/* The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:
*/

function rgb2(r, g, b) {
  let hex = "";

  let convertToHex = (num) => {
    if (num <= "0") {
      num = "00";
    } else if (num > 255) {
      num = (255).toString(16);
    } else {
      num = num.toString(16);
    }

    num.length == 2 ? (hex = `${hex}${num}`) : (hex = `${hex}0${num}`);
  };

  for (let i = 0; i < arguments.length; i++) {
    convertToHex(arguments[i]);
  }
  console.log(hex.toUpperCase());
  return hex.toUpperCase();
}

const rgb = (r, g, b) => {
  console.log(toHex(r) + toHex(g) + toHex(b));
  return toHex(r) + toHex(g) + toHex(b);
};

const toHex = (n) => {
  if (n <= 0) {
    return "00";
  }
  if (n > 255) {
    return "FF";
  }
  return ("0" + n.toString(16)).slice(-2).toUpperCase();
};

rgb(255, 255, 255); // returns FFFFFF
rgb(255, 255, 300); // returns FFFFFF
rgb(0, 0, 0); // returns 000000
rgb(148, 0, 211); // returns 9400D3
