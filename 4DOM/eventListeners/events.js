const button  = document.querySelector(".butts")
const coolbutton = document.querySelector(".cool")
// there are two ways to add an eventlistener to a DOM element

//1. have a anonymous callback function wihin the event listener method

button.addEventListener("click", function(){
    console.log("clicking a button !!!")
});

// 2. To declare the function first and then call it in the event listening method.

function handleClick (){
    console.log("clicking a button !!!")
}
button.addEventListener("click", handleClick)
coolbutton.addEventListener("click", handleClick)
// The benefit of the second method is that 
//a.the function can be called on more that one element without having to declare the function again. makes the code DRY.  
//b.if we want to remove the event using the "removeEvent" method, we will not be able to do that with the anonymous function

button.removeEventListener("click", handleClick)

// Listening on multiple events

const buyButtons = document.querySelectorAll(".buy")
console.log(buyButtons)
// note that we cannot add an eventListener to the multiple selection. the addEventListener is not a method when we select multiple elements

// buyButtons.addEventlistener("click", handleclick) will not work
// we can only do that by looping over each of the elements.

function buyItem (){
    console.log("Buying Item")
};

buyButtons.forEach(function(buyButton){
 buyButton.addEventListener("click", buyItem)
})
