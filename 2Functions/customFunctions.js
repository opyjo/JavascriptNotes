// function declaration is when you create or make a function
// when you request for the function to be performed, it is known as calling a function.

//function declaration 1
calculateBill = function () {
  // this is the function body
  console.log("running calculate bill !!!!!");
  const total = 100 * 1.13;
  return Math.ceil(total);
};

//Note also that the variable total is only available within the function scope hence we cannot call the variable outside of the function scope.

// when a return key is used, it has to be CAPTURED BY A variable so that the returned value can be used when needed.

// This is function call.

const myTotal = calculateBill();
console.log(myTotal);
//function declaration 2
function calculateBill() {}
//Function declaration 3(arrow function ES6)
calculateBill = () => {};
