// Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.

const value1 = '5';
const value2 = 9;
let sum = value1 + value2;

console.log(sum)

// In the above example, JavaScript has coerced the 9 from a number into a string and then concatenated the two values together, resulting in a string of 59. JavaScript had a choice between a string or a number and decided to use a string.

//The compiler could have coerced the 5 into a number and returned a sum of 14, but it did not. To return this result, you'd have to explicitly convert the 5 to a number using the Number() method:

sum = Number(value1) + value2;
console.log(sum);

const isCool = true

if (isCool){
    console.log("You are cool!")
} else{
    console.log('you are not cool !')
};

// we can use the"!" bang operator if we want only the else condition to be acheived

if (!isCool){
    console.log("You are cool!")
} else{
    console.log('you are not cool !')
};

// Also the bang operator can also convert a string into a boolean

const me = "ope";
console.log(me)

// conditional(ternary) Operator
// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.
// syntax

// condition ? exprIfTrue : exprIfFalse

//example

let age = 26;
let beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage);  

// Ternary is a short hand if statement

// const count = 5
// let word;
// if (count === 1){
//     word = 'item';
// }else{
//     word = 'items';
// }

const sentence = ` you have ${count} ${word} in your cart`
console.log(sentence);

// the above can be re-written using a ternary. this contains 3 things
//1. condition.
//2. what to do if true.
//3. what to do if false.

const word = count === 1? 'item' :'items';
const sentence = ` you have ${count} ${word} in your cart`
console.log(sentence);