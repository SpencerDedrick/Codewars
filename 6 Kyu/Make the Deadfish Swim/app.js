/* Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

    i increments the value (initially 0)
    d decrements the value
    s squares the value
    o outputs the value into the return array

Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
 */

let test = "iiisdoso"

const parse = (fish)=>{
    let arr = []
    value = 0

    fish.split('').forEach((letter)=>{
        letter === "i" ? value ++: 
        letter === "s" ? value = value * value :
        letter === "d" ? value --:
        letter === "o" ? arr.push(value): null
    })
    return arr
}

console.log(parse(test))