//Control flow is the order in which statements are executed in a program. Control structures such as conditionals allow for control flow to be altered during the execution of a program. In JavaScript, the default control flow is for statements to be read and executed in order from left-to-right, top-to-bottom in a program file. Control structures such as conditionals (if statements and the like) alter control flow by only executing blocks of code if certain condition(s) are met. These structures essentially allow a program to make decisions about which code is executed as the program runs.
// In the' if and else if 'statement if one of the conditions is true javascript will only run one of the if statement as seen below

// if ( 1 > 2){
//     console.log('yep 1');
// }else if(11 > 10){
//     console.log('yep 2');
// }else if( 20 > 10){
//     console.log('yep 3');
// }

// however if we want more that one conditional statements to be tested we can use more than one if statement to check this.

const age = 50;
if (49 < age) {
    console.log(`not soo old`);
} else if (age === 50) {
    console.log(` getting old`);
}
if (age > 50) {
    console.log(`old`);
}

// TRUTHY AND FALSY
// Truthy is condition which equals or can be converted to true.
// Falsy is a condition which equals or can be converted to false.

// in as much as javascript identifies every value type (SNOBUS)-String,numbers,objects,boolean,undefined,symbol and null. Every value also has an inherent boolean value.The following values are always falsy:

//false
//0 (zero)
//'' or "" (empty string)
// null
// undefined
// NaN

// Everything else is truthy. That includes:

//'0' (a string containing a single zero)
//'false' (a string containing the text “false”)
//[] (an empty array)
//{} (an empty object)
//function(){} (an “empty” function)

// A single value can therefore be used within conditions

// The below example can be used to identify the boolean iheritance for each of the available values (SNOBUS).

// let dog = 0;
// if (dog) {
//     console.log("Yes!, i am truthy!!!!!!");
// } else {
//     console.log("NO, i am Falsy!!!!!");
// }
